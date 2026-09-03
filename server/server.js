// 유니폼 재고관리 백엔드
// 브라우저(화면) → 이 서버 → 회사 전용 DB(스키마). DB 비밀번호는 서버에만 존재한다.
import express from 'express';
import jwt from 'jsonwebtoken';
import pg from 'pg';
import { readFileSync, existsSync } from 'fs';
import { randomBytes } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');

// 로컬 개발용: process.env 에 없는 값만 ../.env 에서 채운다(프로덕션은 배포 시스템이 주입).
(function loadEnv() {
  const f = path.join(ROOT, '.env');
  if (!existsSync(f)) return;
  for (const line of readFileSync(f, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
})();

const DATABASE_URL = process.env.DATABASE_URL;
const DB_SCHEMA = process.env.DB_SCHEMA || 'public';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
// JWT 서명 키: 환경변수 우선, 없으면 프로세스 시작 시 무작위 생성(하드코딩 비밀 없음).
const JWT_SECRET = process.env.JWT_SECRET || randomBytes(32).toString('hex');
const PORT = Number(process.env.PORT || 3000);
// 시공팀 공개 대시보드용
const SLACK_REQUEST_WEBHOOK = process.env.SLACK_REQUEST_WEBHOOK || '';
const SLACK_SUMMARY_WEBHOOK = process.env.SLACK_SUMMARY_WEBHOOK || ''; // 요청 합계 요약 게시용(Incoming Webhook)
const PRICE_PASSWORD = process.env.PRICE_PASSWORD || '';

if (!DATABASE_URL) { console.error('[server] DATABASE_URL 이 없습니다.'); process.exit(1); }

// DATE(1082)는 시간대 변환 없이 'YYYY-MM-DD' 문자열 그대로 받는다(서버 시간대에 따른 하루 밀림 방지).
pg.types.setTypeParser(1082, (v) => v);

// 연결 시작 시점에 검색 경로를 전용 스키마로 고정(옵션 파라미터 — 런타임 SET 경합/경고 없음)
const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 5,
  options: `-c search_path=${DB_SCHEMA},public`
});
pool.on('error', (e) => console.error('[pool]', e.message));

// 시공팀 요청 저장 테이블(요청 합계용) — 없으면 생성(idempotent)
async function ensureRequestsTable() {
  try {
    await pool.query(`create table if not exists uniform_requests (
      id uuid primary key default gen_random_uuid(),
      req_date date not null,
      requested_at timestamptz not null default now(),
      requester text default '',
      region text default '',
      center text default '',
      lines jsonb not null default '[]'
    )`);
    await pool.query('create index if not exists idx_req_date on uniform_requests(req_date)');
    // 앱 설정(요약 웹훅 등) — 배포 환경변수 대신 DB에 보관(기존 앱 env 갱신 불가 대응)
    await pool.query('create table if not exists app_config (key text primary key, value text, updated_at timestamptz not null default now())');
  } catch (e) { console.error('[requests] ensure table', e.message); }
}
ensureRequestsTable();

// 설정값 조회(app_config). 없으면 null.
async function getConfig(key) {
  try { const q = await pool.query('select value from app_config where key=$1', [key]); return q.rows[0] ? q.rows[0].value : null; }
  catch { return null; }
}

// ---- 행 ↔ 앱 객체 매핑 ----
const asDate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : d);
const rowToItem = (r) => ({ id: r.id, category: r.category, name: r.name, size: r.size, unitPrice: Number(r.unit_price || 0), initialStock: Number(r.initial_stock || 0), safetyStock: Number(r.safety_stock || 0) });
const rowToTx = (r) => ({ id: r.id, date: asDate(r.date), type: r.type, itemId: r.item_id, quantity: Number(r.quantity), issuer: r.issuer || '', receiver: r.receiver || '', note: r.note || '', unitPrice: Number(r.unit_price || 0), amount: Number(r.amount || 0), createdBy: r.created_by || '', createdAt: r.created_at });
const rowToAudit = (r) => ({ id: r.id, date: asDate(r.date), inspector: r.inspector, itemId: r.item_id, systemQty: Number(r.system_qty), countedQty: Number(r.counted_qty), diffQty: Number(r.diff_qty), note: r.note || '', imageData: r.image_data || '', createdBy: r.created_by || '', createdAt: r.created_at });

const app = express();
app.use(express.json({ limit: '12mb' })); // 실사 이미지(base64) 대비

// HTML/JS 는 캐시하지 않도록(항상 최신 화면을 받게)
app.use((req, res, next) => {
  if (/\.(html|js)$|\/$|\/dashboard$/.test(req.path)) {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  }
  next();
});

// ---- 인증 (관리자 비밀번호 → JWT) ----
function requireAuth(req, res, next) {
  const h = req.headers.authorization || '';
  const tok = h.startsWith('Bearer ') ? h.slice(7) : '';
  try { req.user = jwt.verify(tok, JWT_SECRET); next(); }
  catch { res.status(401).json({ error: 'unauthorized' }); }
}

app.post('/api/login', (req, res) => {
  const { password } = req.body || {};
  if (!ADMIN_PASSWORD) return res.status(500).json({ error: 'server-password-missing' });
  if (!password || password !== ADMIN_PASSWORD) return res.status(401).json({ error: 'invalid' });
  const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '12h' });
  res.json({ token });
});

// 공개: 현재고만 (대시보드용 — 단가/담당자/청구액 비노출. 단가는 /api/prices 로 분리)
app.get('/api/stock', async (req, res) => {
  try {
    const q = await pool.query('select item_id,category,name,size,safety_stock,current_stock from current_stock order by category,name,size');
    res.json(q.rows.map((r) => ({ itemId: r.item_id, category: r.category, name: r.name, size: r.size, safetyStock: Number(r.safety_stock || 0), currentStock: Number(r.current_stock || 0) })));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 단가 조회 — 비밀번호 필요(공개 API에 단가를 싣지 않기 위해 분리). UI 잠금이 실제 보안이 됨.
app.post('/api/prices', async (req, res) => {
  const { password } = req.body || {};
  if (!PRICE_PASSWORD) return res.status(500).json({ error: 'price-password-missing' });
  if (!password || password !== PRICE_PASSWORD) return res.status(401).json({ error: 'invalid' });
  try {
    const q = await pool.query('select id,category,name,size,unit_price from items order by category,name,size');
    res.json(q.rows.map((r) => ({ itemId: r.id, category: r.category, name: r.name, size: r.size, unitPrice: Number(r.unit_price || 0) })));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 시공팀 요청 → 슬랙 DM 릴레이 (요청일시는 서버가 한국시간으로 채움)
app.post('/api/uniform-request', async (req, res) => {
  try {
    if (!SLACK_REQUEST_WEBHOOK) return res.status(500).json({ error: 'slack-webhook-missing' });
    const { requester = '', region = '', center = '', items = '', lines = [] } = req.body || {};
    if (!center) return res.status(400).json({ error: 'center-required' });
    const clip = (s, n) => String(s).slice(0, n);
    const now = new Date(Date.now() + 9 * 3600 * 1000); // KST
    const p = (n) => String(n).padStart(2, '0');
    const date = `${now.getUTCFullYear()}.${p(now.getUTCMonth() + 1)}.${p(now.getUTCDate())} ${p(now.getUTCHours())}:${p(now.getUTCMinutes())}`;
    const reqDate = `${now.getUTCFullYear()}-${p(now.getUTCMonth() + 1)}-${p(now.getUTCDate())}`; // KST 기준 요청일자
    const r = await fetch(SLACK_REQUEST_WEBHOOK, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, requester: clip(requester, 50), region: clip(region, 50), center: clip(center, 50), items: clip(items, 3000) })
    });
    if (!r.ok) throw new Error('slack ' + r.status);
    // 요청을 DB에도 저장(합계용). 실패해도 주문 자체는 성공 처리(best-effort).
    try {
      const safeLines = Array.isArray(lines) ? lines.slice(0, 200).map(x => ({
        name: String(x.name || '').slice(0, 80), size: String(x.size || '').slice(0, 20), qty: Number(x.qty) || 0
      })) : [];
      await pool.query('insert into uniform_requests (req_date, requester, region, center, lines) values ($1,$2,$3,$4,$5)',
        [reqDate, clip(requester, 50), clip(region, 50), clip(center, 50), JSON.stringify(safeLines)]);
    } catch (e) { console.error('[requests] insert', e.message); }
    res.json({ ok: true });
  } catch (e) { res.status(502).json({ error: e.message }); }
});

// 관리자: 기간별 요청 조회(합계용). from/to = YYYY-MM-DD (요청일자 기준)
app.get('/api/requests', requireAuth, async (req, res) => {
  try {
    const from = String(req.query.from || '').slice(0, 10);
    const to = String(req.query.to || '').slice(0, 10);
    const sql = 'select req_date, requested_at, requester, region, center, lines from uniform_requests';
    const q = (from && to)
      ? await pool.query(sql + ' where req_date between $1 and $2 order by requested_at', [from, to])
      : await pool.query(sql + ' order by requested_at desc limit 500');
    res.json(q.rows.map((r) => ({
      reqDate: asDate(r.req_date), requestedAt: r.requested_at,
      requester: r.requester || '', region: r.region || '', center: r.center || '',
      lines: Array.isArray(r.lines) ? r.lines : []
    })));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 관리자: 합계 요약을 슬랙(요약용 Incoming Webhook)에 게시
app.post('/api/requests/notify', requireAuth, async (req, res) => {
  try {
    const webhook = SLACK_SUMMARY_WEBHOOK || await getConfig('summary_webhook');
    if (!webhook) return res.status(400).json({ error: 'summary-webhook-missing' });
    const { text = '' } = req.body || {};
    if (!text) return res.status(400).json({ error: 'text-required' });
    const r = await fetch(webhook, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: String(text).slice(0, 3500) })
    });
    if (!r.ok) throw new Error('slack ' + r.status);
    res.json({ ok: true });
  } catch (e) { res.status(502).json({ error: e.message }); }
});

// 관리자: 전체 데이터
app.get('/api/bootstrap', requireAuth, async (req, res) => {
  try {
    const [i, t, a] = await Promise.all([
      pool.query('select * from items order by category,name,size'),
      pool.query('select * from transactions order by created_at desc'),
      pool.query('select * from audits order by created_at desc')
    ]);
    res.json({ items: i.rows.map(rowToItem), transactions: t.rows.map(rowToTx), audits: a.rows.map(rowToAudit) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/transactions', requireAuth, async (req, res) => {
  const t = req.body || {};
  try {
    await pool.query(
      `insert into transactions (id,date,type,item_id,quantity,issuer,receiver,note,unit_price,amount,created_by,created_at)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,coalesce($12::timestamptz,now()))`,
      [t.id, t.date, t.type, t.itemId, t.quantity, t.issuer || '', t.receiver || '', t.note || '', t.unitPrice || 0, t.amount || 0, t.createdBy || '', t.createdAt || null]
    );
    res.json({ ok: true });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

app.patch('/api/transactions/:id', requireAuth, async (req, res) => {
  const t = req.body || {};
  try {
    await pool.query(
      `update transactions set date=$2,type=$3,item_id=$4,quantity=$5,issuer=$6,receiver=$7,note=$8,unit_price=$9,amount=$10,created_by=$11 where id=$1`,
      [req.params.id, t.date, t.type, t.itemId, t.quantity, t.issuer || '', t.receiver || '', t.note || '', t.unitPrice || 0, t.amount || 0, t.createdBy || '']
    );
    res.json({ ok: true });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

app.delete('/api/transactions/:id', requireAuth, async (req, res) => {
  try { await pool.query('delete from transactions where id=$1', [req.params.id]); res.json({ ok: true }); }
  catch (e) { res.status(400).json({ error: e.message }); }
});

app.post('/api/items/:id', requireAuth, async (req, res) => {
  const b = req.body || {};
  try {
    await pool.query(
      `update items set unit_price=coalesce($2,unit_price), safety_stock=coalesce($3,safety_stock), updated_at=now() where id=$1`,
      [req.params.id, (b.unitPrice ?? null), (b.safetyStock ?? null)]
    );
    res.json({ ok: true });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

app.post('/api/audits', requireAuth, async (req, res) => {
  const a = req.body || {};
  try {
    await pool.query(
      `insert into audits (id,date,inspector,item_id,system_qty,counted_qty,diff_qty,note,image_data,created_by,created_at)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,coalesce($11::timestamptz,now()))`,
      [a.id, a.date, a.inspector, a.itemId, a.systemQty, a.countedQty, a.diffQty, a.note || '', a.imageData || '', a.createdBy || '', a.createdAt || null]
    );
    res.json({ ok: true });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

app.post('/api/logs', requireAuth, async (req, res) => {
  const l = req.body || {};
  try {
    await pool.query('insert into activity_logs (actor,action,target,detail) values ($1,$2,$3,$4)', [l.actor || '', l.action || '', l.target || '', l.detail ? JSON.stringify(l.detail) : null]);
    res.json({ ok: true });
  } catch (e) { res.status(400).json({ error: e.message }); }
});

app.get('/api/logs', requireAuth, async (req, res) => {
  try {
    const q = await pool.query('select at, actor, action, target from activity_logs order by at desc limit 300');
    res.json(q.rows.map((r) => ({ at: r.at, actor: r.actor || '', action: r.action || '', target: r.target || '' })));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 초기화/복원 — 트랜잭션으로 통째 교체
app.post('/api/replace-all', requireAuth, async (req, res) => {
  const { items = [], transactions = [], audits = [] } = req.body || {};
  const client = await pool.connect();
  try {
    await client.query('begin');
    await client.query('delete from audits');
    await client.query('delete from transactions');
    for (const it of items) {
      await client.query(
        `insert into items (id,category,name,size,unit_price,initial_stock,safety_stock) values ($1,$2,$3,$4,$5,$6,$7)
         on conflict (id) do update set category=excluded.category,name=excluded.name,size=excluded.size,unit_price=excluded.unit_price,initial_stock=excluded.initial_stock,safety_stock=excluded.safety_stock`,
        [it.id, it.category, it.name, it.size, it.unitPrice || 0, it.initialStock || 0, it.safetyStock || 0]
      );
    }
    for (const t of transactions) {
      await client.query(
        `insert into transactions (id,date,type,item_id,quantity,issuer,receiver,note,unit_price,amount,created_by,created_at)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,coalesce($12::timestamptz,now()))`,
        [t.id, t.date, t.type, t.itemId, t.quantity, t.issuer || '', t.receiver || '', t.note || '', t.unitPrice || 0, t.amount || 0, t.createdBy || '', t.createdAt || null]
      );
    }
    for (const a of audits) {
      await client.query(
        `insert into audits (id,date,inspector,item_id,system_qty,counted_qty,diff_qty,note,image_data,created_by,created_at)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,coalesce($11::timestamptz,now()))`,
        [a.id, a.date, a.inspector, a.itemId, a.systemQty, a.countedQty, a.diffQty, a.note || '', a.imageData || '', a.createdBy || '', a.createdAt || null]
      );
    }
    await client.query('commit');
    res.json({ ok: true });
  } catch (e) { await client.query('rollback'); res.status(400).json({ error: e.message }); }
  finally { client.release(); }
});

app.get('/api/health', async (req, res) => {
  try { await pool.query('select 1'); res.json({ ok: true }); }
  catch (e) { res.status(500).json({ ok: false, error: e.message }); }
});

// 정적 프론트엔드 (public/ 만 노출)
app.use(express.static(PUBLIC_DIR));
app.get('/request', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'request.html')));  // 시공팀 공개 대시보드
app.get('*', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'index.html')));

app.listen(PORT, () => console.log(`[server] http://localhost:${PORT}  schema=${DB_SCHEMA}`));
