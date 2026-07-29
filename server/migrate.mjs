// 회사 전용 스키마(app_260729_cl6k)에 테이블/뷰 생성 + 품목 카탈로그 시드.
// 여러 번 돌려도 안전(idempotent). 백엔드가 접근 통제를 하므로 RLS는 쓰지 않는다.
import pg from 'pg';
import { readFileSync } from 'fs';

const env = {};
for (const line of readFileSync('../.env', 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.*)$/); if (m) env[m[1]] = m[2];
}
const SCHEMA = env.DB_SCHEMA || 'public';
const pool = new pg.Pool({ connectionString: env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 2 });

const DDL = `
set search_path to "${SCHEMA}", public;

create table if not exists items (
  id text primary key,
  category text not null,
  name text not null,
  size text not null,
  unit_price numeric not null default 0,
  initial_stock integer not null default 0,
  safety_stock integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists transactions (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  type text not null check (type in ('입고','분출','반납','재고조정','실사조정','잉여출고')),
  item_id text not null references items(id) on delete restrict,
  quantity integer not null,
  issuer text default '',
  receiver text default '',
  note text default '',
  unit_price numeric not null default 0,
  amount numeric not null default 0,
  created_by text default '',
  created_at timestamptz not null default now()
);
create index if not exists idx_tx_item on transactions(item_id);
create index if not exists idx_tx_date on transactions(date);
create index if not exists idx_tx_type on transactions(type);

create table if not exists audits (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  inspector text not null,
  item_id text not null references items(id) on delete restrict,
  system_qty integer not null,
  counted_qty integer not null,
  diff_qty integer not null,
  note text default '',
  image_data text default '',
  created_by text default '',
  created_at timestamptz not null default now()
);
create index if not exists idx_audit_item on audits(item_id);

create table if not exists activity_logs (
  id bigint generated always as identity primary key,
  at timestamptz not null default now(),
  actor text default '',
  action text not null,
  target text default '',
  detail jsonb
);
create index if not exists idx_logs_at on activity_logs(at desc);

create or replace view current_stock as
select
  i.id as item_id, i.category, i.name, i.size, i.unit_price, i.safety_stock,
  i.initial_stock + coalesce(sum(
    case t.type
      when '입고' then t.quantity
      when '반납' then t.quantity
      when '분출' then -t.quantity
      when '잉여출고' then 0
      else t.quantity
    end), 0) as current_stock
from items i
left join transactions t on t.item_id = i.id
group by i.id;
`;

// app.js 에서 seedItems 추출
const src = readFileSync('../app.js', 'utf8');
const s = src.indexOf('const seedItems = [');
const arr = eval(src.slice(src.indexOf('[', s), src.indexOf('];', s) + 1));

try {
  await pool.query(DDL);
  console.log('DDL 적용 완료 (테이블/뷰)');

  // 품목 카탈로그 업서트
  const client = await pool.connect();
  try {
    await client.query(`set search_path to "${SCHEMA}", public`);
    let n = 0;
    for (const it of arr) {
      await client.query(
        `insert into items (id,category,name,size,unit_price,initial_stock,safety_stock)
         values ($1,$2,$3,$4,$5,$6,$7)
         on conflict (id) do update set category=excluded.category, name=excluded.name,
           size=excluded.size, unit_price=excluded.unit_price, initial_stock=excluded.initial_stock`,
        [it.id, it.category, it.name, it.size, Number(it.unitPrice||0), Number(it.initialStock||0), Number(it.safetyStock||0)]
      );
      n++;
    }
    console.log(`품목 업서트 완료: ${n}건`);
    const cnt = await client.query('select count(*)::int as c from items');
    console.log('items 총:', cnt.rows[0].c);
    const chk = await client.query(`select name from items where name like '%피%' group by name`);
    console.log('피 포함 품목명:', chk.rows.map(r=>r.name));
  } finally { client.release(); }
} catch (e) {
  console.error('ERROR:', e.message);
} finally {
  await pool.end();
}
