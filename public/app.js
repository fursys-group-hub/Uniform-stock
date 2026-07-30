const STORAGE_KEY = 'inventory_mvp_v1';
const OPERATOR_KEY = 'inventory_operator';

const seedItems = [
  { id: 'u-vest-95', category: '유니폼 상의', name: '조끼', size: '95', initialStock: 5, unitPrice: 0 },
  { id: 'u-vest-105', category: '유니폼 상의', name: '조끼', size: '105', initialStock: 38, unitPrice: 0 },
  { id: 'u-vest-110', category: '유니폼 상의', name: '조끼', size: '110', initialStock: 50, unitPrice: 0 },
  { id: 'u-vest-115', category: '유니폼 상의', name: '조끼', size: '115', initialStock: 60, unitPrice: 0 },
  { id: 'u-vest-120', category: '유니폼 상의', name: '조끼', size: '120', initialStock: 1, unitPrice: 0 },
  { id: 'u-summer-shirt-90', category: '유니폼 상의', name: '하계 셔츠', size: '90', initialStock: 14, unitPrice: 0 },
  { id: 'u-summer-shirt-95', category: '유니폼 상의', name: '하계 셔츠', size: '95', initialStock: 38, unitPrice: 0 },
  { id: 'u-summer-shirt-105', category: '유니폼 상의', name: '하계 셔츠', size: '105', initialStock: 44, unitPrice: 0 },
  { id: 'u-summer-shirt-110', category: '유니폼 상의', name: '하계 셔츠', size: '110', initialStock: 44, unitPrice: 0 },
  { id: 'u-summer-shirt-115', category: '유니폼 상의', name: '하계 셔츠', size: '115', initialStock: 13, unitPrice: 0 },
  { id: 'u-summer-shirt-120', category: '유니폼 상의', name: '하계 셔츠', size: '120', initialStock: 2, unitPrice: 0 },
  { id: 'u-winter-shirt-90', category: '유니폼 상의', name: '동계 셔츠', size: '90', initialStock: 21, unitPrice: 0 },
  { id: 'u-winter-shirt-95', category: '유니폼 상의', name: '동계 셔츠', size: '95', initialStock: 108, unitPrice: 0 },
  { id: 'u-winter-shirt-100', category: '유니폼 상의', name: '동계 셔츠', size: '100', initialStock: 68, unitPrice: 0 },
  { id: 'u-winter-shirt-105', category: '유니폼 상의', name: '동계 셔츠', size: '105', initialStock: 57, unitPrice: 0 },
  { id: 'u-winter-shirt-110', category: '유니폼 상의', name: '동계 셔츠', size: '110', initialStock: 100, unitPrice: 0 },
  { id: 'u-winter-shirt-115', category: '유니폼 상의', name: '동계 셔츠', size: '115', initialStock: 28, unitPrice: 0 },
  { id: 'u-winter-shirt-120', category: '유니폼 상의', name: '동계 셔츠', size: '120', initialStock: 54, unitPrice: 0 },
  { id: 'u-winter-outer-90', category: '유니폼 상의', name: '동계외피(춘추아우터)', size: '90', initialStock: 44, unitPrice: 0 },
  { id: 'u-winter-outer-95', category: '유니폼 상의', name: '동계외피(춘추아우터)', size: '95', initialStock: 83, unitPrice: 0 },
  { id: 'u-winter-outer-100', category: '유니폼 상의', name: '동계외피(춘추아우터)', size: '100', initialStock: 97, unitPrice: 0 },
  { id: 'u-winter-outer-105', category: '유니폼 상의', name: '동계외피(춘추아우터)', size: '105', initialStock: 147, unitPrice: 0 },
  { id: 'u-winter-outer-110', category: '유니폼 상의', name: '동계외피(춘추아우터)', size: '110', initialStock: 79, unitPrice: 0 },
  { id: 'u-winter-outer-115', category: '유니폼 상의', name: '동계외피(춘추아우터)', size: '115', initialStock: 54, unitPrice: 0 },
  { id: 'u-winter-outer-120', category: '유니폼 상의', name: '동계외피(춘추아우터)', size: '120', initialStock: 51, unitPrice: 0 },
  { id: 'u-winter-inner-90', category: '유니폼 상의', name: '동계내피(이너패딩)', size: '90', initialStock: 48, unitPrice: 0 },
  { id: 'u-winter-inner-95', category: '유니폼 상의', name: '동계내피(이너패딩)', size: '95', initialStock: 93, unitPrice: 0 },
  { id: 'u-winter-inner-100', category: '유니폼 상의', name: '동계내피(이너패딩)', size: '100', initialStock: 111, unitPrice: 0 },
  { id: 'u-winter-inner-105', category: '유니폼 상의', name: '동계내피(이너패딩)', size: '105', initialStock: 91, unitPrice: 0 },
  { id: 'u-winter-inner-110', category: '유니폼 상의', name: '동계내피(이너패딩)', size: '110', initialStock: 88, unitPrice: 0 },
  { id: 'u-winter-inner-115', category: '유니폼 상의', name: '동계내피(이너패딩)', size: '115', initialStock: 53, unitPrice: 0 },
  { id: 'u-winter-inner-120', category: '유니폼 상의', name: '동계내피(이너패딩)', size: '120', initialStock: 39, unitPrice: 0 },
  { id: 'u-summer-pants-28', category: '유니폼 하의', name: '하계 바지', size: '28', initialStock: 24, unitPrice: 0 },
  { id: 'u-summer-pants-30', category: '유니폼 하의', name: '하계 바지', size: '30', initialStock: 43, unitPrice: 0 },
  { id: 'u-winter-pants-28', category: '유니폼 하의', name: '동계 바지', size: '28', initialStock: 8, unitPrice: 0 },
  { id: 'u-winter-pants-30', category: '유니폼 하의', name: '동계 바지', size: '30', initialStock: 45, unitPrice: 0 },
  { id: 'u-winter-pants-32', category: '유니폼 하의', name: '동계 바지', size: '32', initialStock: 89, unitPrice: 0 },
  { id: 'u-winter-pants-34', category: '유니폼 하의', name: '동계 바지', size: '34', initialStock: 142, unitPrice: 0 },
  { id: 'u-winter-pants-36', category: '유니폼 하의', name: '동계 바지', size: '36', initialStock: 88, unitPrice: 0 },
  { id: 'u-winter-pants-38', category: '유니폼 하의', name: '동계 바지', size: '38', initialStock: 69, unitPrice: 0 },
  { id: 'u-winter-pants-40', category: '유니폼 하의', name: '동계 바지', size: '40', initialStock: 36, unitPrice: 0 },
  { id: 'u-winter-pants-42', category: '유니폼 하의', name: '동계 바지', size: '42', initialStock: 12, unitPrice: 0 },
  { id: 'glove-m', category: '장갑', name: '장갑', size: 'M', initialStock: 2150, unitPrice: 0 },
  { id: 'glove-l', category: '장갑', name: '장갑', size: 'L', initialStock: 300, unitPrice: 0 },
  { id: 'mat-standard', category: '시공매트', name: '시공매트', size: '기본', initialStock: 102, unitPrice: 0 }
];

const pageMap = {
  dashboard: ['재고 현황', '품목/사이즈별 현재 재고와 단가를 확인합니다.'],
  transactions: ['수불 등록', '입고·분출·반납·조정 내역을 등록합니다.'],
  history: ['수불 이력', '누가 언제 무엇을 처리했는지 확인합니다.'],
  audit: ['실사 등록', '전산수량과 실사수량 차이를 기록하고 조정합니다.'],
  'audit-history': ['실사 이력', '실사 기록과 점검 이미지를 확인합니다.'],
  pricing: ['단가 관리', '분출 청구용 단가를 설정합니다.'],
  billing: ['청구 조회', '분출 기준 청구금액을 담당자별로 조회합니다.'],
  analytics: ['분석 대시보드', '월별 입출고 추이와 재발주·회전율·수요예측을 한눈에 확인합니다.'],
  activity: ['활동 로그', '누가·언제·무엇을 했는지 기록을 확인합니다.']
};

let state = loadState();

// 재고현황 탭 필터 상태 (분류 / 품목 / 정렬 / 상태 / 재고있는것만)
const dashFilter = { category: '전체', item: '전체', sort: 'default', status: 'all', onlyStock: false };

// 단가 관리 탭 필터 상태
const pricingFilter = { category: '전체' };
// 시공팀 대시보드 표시가격 대조용 (POST /api/prices 로 불러온 실제 노출값)
let teamPriceMap = null;

// 초성 검색 (시공팀 대시보드와 동일 방식)
const CHO = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
function toChosung(str) {
  let out = '';
  for (const ch of str) {
    const c = ch.charCodeAt(0) - 0xAC00;
    out += (c >= 0 && c < 11172) ? CHO[Math.floor(c / 588)] : ch;
  }
  return out;
}

// 표준 사이즈 그리드 — 이 분류의 모든 품목은 아래 사이즈를 전부 보유한다고 보고,
// 데이터에 없는 사이즈는 '품절(재고 0) · 미등록' 행으로 자동 표시(시공팀 대시보드 규칙 이식).
const SIZE_SETS = {
  '유니폼 상의': ['90', '95', '100', '105', '110', '115', '120'],
  '유니폼 하의': ['28', '30', '32', '34', '36', '38', '40', '42']
};

// 부족 임계값: 품목별 안전재고가 있으면 그 값, 없으면 분류 기본값, 그것도 없으면 전역 기본값(10)
const LOW_THRESHOLD_DEFAULT = 10;
const LOW_THRESHOLD_BY_CATEGORY = { '장갑': 200, '시공매트': 20 };
function lowThresholdOf(row) {
  const s = Number(row.safetyStock || 0);
  if (s > 0) return s;
  return LOW_THRESHOLD_BY_CATEGORY[row.category] || LOW_THRESHOLD_DEFAULT;
}

function sizeNum(s) { const n = parseInt(s, 10); return isNaN(n) ? 9999 : n; }

// 키 기반 결정적 id (재실행/기기 간 중복 방지)
function gridId(key) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) | 0;
  return 'gi-' + (h >>> 0).toString(36);
}

// 표준 사이즈를 실제 품목(재고 0 = 품절)으로 모두 등록 — 데이터에 없던 사이즈를 품목 마스터에 보강.
function ensureStandardSizes() {
  const have = new Set(state.items.map(i => `${i.category}|${i.name}|${i.size}`));
  let added = 0;
  Object.entries(SIZE_SETS).forEach(([cat, sizes]) => {
    const names = [...new Set(state.items.filter(i => i.category === cat).map(i => i.name))];
    names.forEach(name => sizes.forEach(size => {
      const key = `${cat}|${name}|${size}`;
      if (!have.has(key)) {
        const item = { id: gridId(key), category: cat, name, size, initialStock: 0, unitPrice: 0, safetyStock: 0 };
        state.items.push(item);
        enqueue({ type: 'upsertItem', row: item });
        have.add(key);
        added++;
      }
    }));
  });
  if (added) saveState();
  return added;
}

const els = {
  navTabs: document.getElementById('navTabs'),
  pageTitle: document.getElementById('pageTitle'),
  pageDesc: document.getElementById('pageDesc'),
  headerStats: document.getElementById('headerStats'),
  summaryCards: document.getElementById('summaryCards'),
  inventorySearch: document.getElementById('inventorySearch'),
  inventorySort: document.getElementById('inventorySort'),
  onlyStockToggle: document.getElementById('onlyStockToggle'),
  categoryChips: document.getElementById('categoryChips'),
  itemChips: document.getElementById('itemChips'),
  statusFilter: document.getElementById('statusFilter'),
  inventoryStamp: document.getElementById('inventoryStamp'),
  inventoryTableBody: document.getElementById('inventoryTableBody'),
  transactionForm: document.getElementById('transactionForm'),
  transactionItemSearch: document.getElementById('transactionItemSearch'),
  transactionItemId: document.getElementById('transactionItemId'),
  transactionItemList: document.getElementById('transactionItemList'),
  transactionSize: document.getElementById('transactionSize'),
  transactionUnitPrice: document.getElementById('transactionUnitPrice'),
  transactionAmount: document.getElementById('transactionAmount'),
  historyTypeFilter: document.getElementById('historyTypeFilter'),
  historySearch: document.getElementById('historySearch'),
  historyPreset: document.getElementById('historyPreset'),
  historyReset: document.getElementById('historyReset'),
  historyMonth: document.getElementById('historyMonth'),
  historySummary: document.getElementById('historySummary'),
  historyTableBody: document.getElementById('historyTableBody'),
  auditForm: document.getElementById('auditForm'),
  auditItemSelect: document.getElementById('auditItemSelect'),
  auditSize: document.getElementById('auditSize'),
  auditSystemQty: document.getElementById('auditSystemQty'),
  auditCountedQty: document.getElementById('auditCountedQty'),
  auditDiffQty: document.getElementById('auditDiffQty'),
  auditImage: document.getElementById('auditImage'),
  auditPreview: document.getElementById('auditPreview'),
  auditHistoryGrid: document.getElementById('auditHistoryGrid'),
  pricingChips: document.getElementById('pricingChips'),
  pricingVerifyInfo: document.getElementById('pricingVerifyInfo'),
  verifyTeamPriceBtn: document.getElementById('verifyTeamPriceBtn'),
  pricingTableBody: document.getElementById('pricingTableBody'),
  billingSearch: document.getElementById('billingSearch'),
  billingSummaryCards: document.getElementById('billingSummaryCards'),
  billingTableBody: document.getElementById('billingTableBody'),
  seedBtn: document.getElementById('seedBtn'),
  backupBtn: document.getElementById('backupBtn'),
  restoreInput: document.getElementById('restoreInput'),
  analyticsCategory: document.getElementById('analyticsCategory'),
  analyticsYear: document.getElementById('analyticsYear'),
  analyticsSummary: document.getElementById('analyticsSummary'),
  barChart: document.getElementById('barChart'),
  lineChart: document.getElementById('lineChart'),
  categoryTableBody: document.getElementById('categoryTableBody'),
  reorderCount: document.getElementById('reorderCount'),
  reorderTableBody: document.getElementById('reorderTableBody'),
  turnoverTableBody: document.getElementById('turnoverTableBody'),
  forecastTableBody: document.getElementById('forecastTableBody'),
  editModal: document.getElementById('editModal'),
  editForm: document.getElementById('editForm'),
  editItemSelect: document.getElementById('editItemSelect'),
  editCancel: document.getElementById('editCancel'),
  editModalClose: document.getElementById('editModalClose'),
  loginOverlay: document.getElementById('loginOverlay'),
  loginForm: document.getElementById('loginForm'),
  loginError: document.getElementById('loginError'),
  logoutBtn: document.getElementById('logoutBtn'),
  operatorLabel: document.getElementById('operatorLabel'),
  activityTableBody: document.getElementById('activityTableBody'),
  activityToggle: document.getElementById('activityToggle'),
  activityBody: document.getElementById('activityBody'),
  activityPager: document.getElementById('activityPager'),
  activityPrev: document.getElementById('activityPrev'),
  activityNext: document.getElementById('activityNext'),
  activityPageInfo: document.getElementById('activityPageInfo')
};

function init() {
  bindEvents();
  bindAuthEvents();
  ensureStandardSizes();        // 표준 사이즈를 실제 품목(재고 0=품절)으로 보강
  populateItemSelects();
  setDefaultDates();
  renderAll();
  updateSyncBadge(loadOutbox().length);
  window.addEventListener('online', flushOutbox);
  setInterval(flushOutbox, 30000);          // 대기 중인 변경 주기적 재시도
  initAuth();                               // 로그인 확인 → 앱 표시 or 로그인 화면
}

function bindEvents() {
  els.navTabs.addEventListener('click', onTabClick);
  if (els.activityToggle) els.activityToggle.addEventListener('click', toggleActivityBody);
  if (els.activityPrev) els.activityPrev.addEventListener('click', () => changeActivityPage(-1));
  if (els.activityNext) els.activityNext.addEventListener('click', () => changeActivityPage(1));
  els.inventorySearch.addEventListener('input', renderInventoryPanel);
  els.inventorySort.addEventListener('change', () => { dashFilter.sort = els.inventorySort.value; renderInventoryPanel(); });
  els.onlyStockToggle.addEventListener('change', () => { dashFilter.onlyStock = els.onlyStockToggle.checked; renderInventoryPanel(); });
  const expBtn = document.getElementById('inventoryExport');
  if (expBtn) expBtn.addEventListener('click', exportInventoryCsv);
  els.categoryChips.addEventListener('click', onCategoryChipClick);
  els.itemChips.addEventListener('click', onItemChipClick);
  els.statusFilter.addEventListener('click', onStatusFilterClick);
  els.transactionItemSearch.addEventListener('input', () => { els.transactionItemId.value = ''; renderTxItemList(); });
  els.transactionItemSearch.addEventListener('focus', renderTxItemList);
  els.transactionItemSearch.addEventListener('blur', () => { setTimeout(() => { els.transactionItemList.hidden = true; }, 150); });
  els.transactionItemSearch.addEventListener('keydown', onTxSearchKey);
  els.transactionItemList.addEventListener('mousedown', onTxListClick);
  els.transactionForm.quantity.addEventListener('input', syncTransactionAmount);
  els.transactionForm.type.addEventListener('change', syncTransactionAmount);
  els.transactionForm.addEventListener('submit', submitTransaction);
  els.historyTypeFilter.addEventListener('change', renderHistory);
  els.historySearch.addEventListener('input', renderHistory);
  els.historyPreset.addEventListener('click', onHistoryPresetClick);
  els.historyReset.addEventListener('click', onHistoryReset);
  els.historyMonth.addEventListener('change', renderHistory);
  els.auditItemSelect.addEventListener('change', syncAuditItem);
  els.auditCountedQty.addEventListener('input', syncAuditDiff);
  els.auditImage.addEventListener('change', previewAuditImage);
  els.auditForm.addEventListener('submit', submitAudit);
  els.billingSearch.addEventListener('input', renderBilling);
  els.seedBtn.addEventListener('click', resetSeedData);
  els.backupBtn.addEventListener('click', downloadBackup);
  els.restoreInput.addEventListener('change', restoreBackup);
  els.pricingTableBody.addEventListener('click', onPricingClick);
  els.pricingChips.addEventListener('click', onPricingChipClick);
  els.verifyTeamPriceBtn.addEventListener('click', verifyTeamPrices);
  els.analyticsCategory.addEventListener('change', renderAnalytics);
  els.analyticsYear.addEventListener('change', renderAnalytics);
  els.reorderTableBody.addEventListener('click', saveSafetyInline);
  els.historyTableBody.addEventListener('click', onHistoryAction);
  els.editForm.addEventListener('submit', submitEdit);
  els.editCancel.addEventListener('click', closeEditModal);
  els.editModalClose.addEventListener('click', closeEditModal);
  els.editModal.addEventListener('click', event => { if (event.target === els.editModal) closeEditModal(); });
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { console.error(e); }
  }
  return makeSeedState();
}

function makeSeedState() {
  return { items: structuredClone(seedItems), transactions: [], audits: [] };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* ===================== 백엔드 연동 =====================
 * 데이터는 중간 서버(/api/*)를 통해 회사 전용 DB에 저장된다.
 * 화면은 로컬 state로 즉시 반영하고, 서버 반영은 아웃박스(실패/오프라인 재시도 큐)로 처리 → 유실 방지.
 */
const OUTBOX_KEY = 'inventory_outbox_v1';
const TOKEN_KEY = 'inventory_token';
let flushing = false;
let online = true;               // 서버 연결 가능 여부(표시용)

function getToken() { return localStorage.getItem(TOKEN_KEY) || ''; }
function setToken(t) { if (t) localStorage.setItem(TOKEN_KEY, t); else localStorage.removeItem(TOKEN_KEY); }

// 백엔드 API 호출 헬퍼
async function api(path, { method = 'GET', body, auth = true } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) headers['Authorization'] = `Bearer ${getToken()}`;
  const res = await fetch(path, { method, headers, body: body ? JSON.stringify(body) : undefined });
  if (res.status === 401) throw Object.assign(new Error('unauthorized'), { code: 401 });
  if (!res.ok) { let d = {}; try { d = await res.json(); } catch {} throw new Error(d.error || `HTTP ${res.status}`); }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ---- 아웃박스(오프라인/실패 재시도 큐) ----
function loadOutbox() {
  try { return JSON.parse(localStorage.getItem(OUTBOX_KEY)) || []; } catch { return []; }
}
function saveOutbox(q) { localStorage.setItem(OUTBOX_KEY, JSON.stringify(q)); }
function enqueue(op) {
  const q = loadOutbox();
  q.push(op);
  saveOutbox(q);
  updateSyncBadge(q.length);
  flushOutbox();
}
async function flushOutbox() {
  if (flushing || !getToken()) return;
  flushing = true;
  try {
    // 매 반복마다 아웃박스를 다시 읽는다 — 전송(await) 도중 새 작업이 추가돼도
    // 덮어써서 잃지 않도록(항상 맨 앞부터 처리, 맨 뒤에 추가하는 FIFO).
    while (true) {
      const q = loadOutbox();
      if (!q.length) break;
      const op = q[0];
      try {
        await applyOp(op);
      } catch (e) {
        if (e.code === 401) { online = true; break; }   // 인증 만료 → 재로그인 필요
        online = false;
        console.warn('[sync] 반영 대기(재시도 예정):', op.type, e.message || e);
        break;                     // 실패 → 순서 보존 위해 중단, 다음 기회에 재시도
      }
      const q2 = loadOutbox();     // await 사이에 추가됐을 수 있으니 다시 읽어 맨 앞만 제거
      q2.shift();
      saveOutbox(q2);
      online = true;
    }
    updateSyncBadge(loadOutbox().length);
  } finally {
    flushing = false;
  }
}
async function applyOp(op) {
  switch (op.type) {
    case 'insertTx':    return api('/api/transactions', { method: 'POST', body: op.row });
    case 'updateTx':    return api(`/api/transactions/${op.row.id}`, { method: 'PATCH', body: op.row });
    case 'deleteTx':    return api(`/api/transactions/${op.id}`, { method: 'DELETE' });
    case 'insertAudit': return api('/api/audits', { method: 'POST', body: op.row });
    case 'upsertItem':  return api(`/api/items/${op.row.id}`, { method: 'POST', body: op.row });
    case 'replaceAll':  return api('/api/replace-all', { method: 'POST', body: op.state });
    case 'log':         return api('/api/logs', { method: 'POST', body: op.entry });
    default: console.warn('[sync] 알 수 없는 op', op.type);
  }
}

// ---- 서버에서 전체 데이터 로드 ----
async function loadFromServer() {
  try {
    const data = await api('/api/bootstrap');
    state = {
      items: data.items || [],
      transactions: data.transactions || [],
      audits: data.audits || []
    };
    ensureStandardSizes();        // 서버 데이터에도 표준 사이즈 보강
    saveState();
    online = true;
    populateItemSelects();
    renderAll();
    updateSyncBadge(loadOutbox().length);
    flushOutbox();
  } catch (e) {
    if (e.code === 401) { setToken(''); showLogin(); return; }
    online = false;
    console.error('[sync] 서버 로드 실패 — 로컬 데이터로 계속 진행합니다.', e);
    updateSyncBadge(loadOutbox().length);
  }
}

function updateSyncBadge(pending) {
  const el = document.getElementById('syncBadge');
  if (!el) return;
  if (!online)        { el.textContent = '● 오프라인(대기)'; el.className = 'sync-badge off'; }
  else if (pending>0) { el.textContent = `● 동기화 대기 ${pending}`; el.className = 'sync-badge pending'; }
  else                { el.textContent = '● 동기화됨'; el.className = 'sync-badge ok'; }
}

// ---- 활동 로그 (Phase 4) ----
// 주요 작업이 일어날 때마다 서버에 기록(아웃박스 경유 → 실패해도 재시도).
function logActivity(action, target) {
  enqueue({ type: 'log', entry: { actor: getOperator(), action, target: target || '' } });
}

const ACTIVITY_PAGE_SIZE = 10;
let activityRows = [];
let activityPage = 1;

async function renderActivity() {
  if (!els.activityTableBody) return;
  els.activityTableBody.innerHTML = `<tr><td colspan="4" class="empty-state">불러오는 중…</td></tr>`;
  if (els.activityPager) els.activityPager.hidden = true;
  try {
    activityRows = await api('/api/logs') || [];
    activityPage = 1;
    renderActivityPage();
  } catch (e) {
    if (e.code === 401) { showLogin(); return; }
    activityRows = [];
    els.activityTableBody.innerHTML = `<tr><td colspan="4" class="empty-state">로그를 불러오지 못했습니다.</td></tr>`;
    if (els.activityPager) els.activityPager.hidden = true;
  }
}

// 현재 페이지(10건)만 그린다. activityRows/activityPage 를 읽어 표와 페이저를 갱신.
function renderActivityPage() {
  if (!els.activityTableBody) return;
  const total = activityRows.length;
  const pageCount = Math.max(1, Math.ceil(total / ACTIVITY_PAGE_SIZE));
  if (activityPage < 1) activityPage = 1;
  if (activityPage > pageCount) activityPage = pageCount;

  const start = (activityPage - 1) * ACTIVITY_PAGE_SIZE;
  const slice = activityRows.slice(start, start + ACTIVITY_PAGE_SIZE);
  els.activityTableBody.innerHTML = slice.map(r => {
    const t = r.at ? new Date(r.at).toLocaleString('ko-KR') : '-';
    return `<tr><td>${t}</td><td>${r.actor || '-'}</td><td>${r.action || '-'}</td><td>${r.target || '-'}</td></tr>`;
  }).join('') || `<tr><td colspan="4" class="empty-state">기록이 없습니다.</td></tr>`;

  if (els.activityPager) {
    els.activityPager.hidden = total <= ACTIVITY_PAGE_SIZE;   // 한 페이지면 페이저 숨김
    if (els.activityPageInfo) els.activityPageInfo.textContent = `${activityPage} / ${pageCount} · 총 ${total}건`;
    if (els.activityPrev) els.activityPrev.disabled = activityPage <= 1;
    if (els.activityNext) els.activityNext.disabled = activityPage >= pageCount;
  }
}

function changeActivityPage(delta) {
  activityPage += delta;
  renderActivityPage();
}

// 활동 로그 접기/펴기
function toggleActivityBody() {
  if (!els.activityBody || !els.activityToggle) return;
  const collapsed = els.activityBody.hidden;
  els.activityBody.hidden = !collapsed;
  els.activityToggle.setAttribute('aria-expanded', String(collapsed));
  els.activityToggle.textContent = collapsed ? '접기 ▾' : '펼치기 ▸';
}

/* ===================== 로그인 / 권한 (Phase 2) =====================
 * 관리자만 등록·수정·삭제 가능. 로그인 화면에선 관리자명 + 비밀번호만 입력한다.
 * 비밀번호는 백엔드가 검증하고, 쓰기 API는 로그인 토큰이 있어야만 동작한다(서버 강제).
 */
function getOperator() { return localStorage.getItem(OPERATOR_KEY) || ''; }

function bindAuthEvents() {
  if (els.loginForm) els.loginForm.addEventListener('submit', doLogin);
  if (els.logoutBtn) els.logoutBtn.addEventListener('click', doLogout);
}

async function initAuth() {
  if (!getToken()) { showLogin(); return; }
  hideLogin();                    // 저장된 로그인 있음(낙관적) → 데이터 로드 시도
  await loadFromServer();         // 토큰이 만료됐으면 loadFromServer 내부에서 401 처리 → 로그인 화면
}

function showLogin() {
  if (els.loginOverlay) els.loginOverlay.hidden = false;
  if (els.logoutBtn) els.logoutBtn.hidden = true;
  if (els.operatorLabel) els.operatorLabel.hidden = true;
}

function hideLogin() {
  if (els.loginOverlay) els.loginOverlay.hidden = true;
  const op = getOperator();
  if (els.logoutBtn) els.logoutBtn.hidden = !op;
  if (els.operatorLabel) {
    els.operatorLabel.hidden = !op;
    els.operatorLabel.textContent = op ? `${op} 님` : '';
  }
}

function onAuthed() {
  hideLogin();
  loadFromServer();               // 로그인 상태로 실제 데이터 로드
}

async function doLogin(event) {
  event.preventDefault();
  const name = (els.loginForm.operator.value || '').trim();
  const pw = els.loginForm.password.value || '';
  if (!name) { showLoginError('관리자명을 입력하세요.'); return; }
  try {
    const data = await api('/api/login', { method: 'POST', body: { password: pw }, auth: false });
    setToken(data.token);
    localStorage.setItem(OPERATOR_KEY, name);
    els.loginForm.reset();
    if (els.loginError) els.loginError.hidden = true;
    logActivity('로그인', name);
    onAuthed();
  } catch (e) {
    if (e.code === 401) showLoginError('비밀번호가 올바르지 않습니다.');
    else showLoginError('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }
}

async function doLogout() {
  setToken('');
  localStorage.removeItem(OPERATOR_KEY);
  location.reload();
}

function showLoginError(msg) {
  if (!els.loginError) return;
  els.loginError.textContent = msg;
  els.loginError.hidden = false;
}

function setDefaultDates() {
  const today = new Date().toISOString().slice(0, 10);
  els.transactionForm.date.value = today;
  els.auditForm.date.value = today;
}

function onTabClick(event) {
  const btn = event.target.closest('.tab-btn');
  if (!btn) return;
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  const tab = btn.dataset.tab;
  document.querySelector(`[data-panel="${tab}"]`).classList.add('active');
  const [title, desc] = pageMap[tab];
  els.pageTitle.textContent = title;
  els.pageDesc.textContent = desc;
  if (tab === 'activity') renderActivity();
}

// 분류 → 품목 → 사이즈(숫자) 순으로 정렬된 품목 목록
function getSortedItems() {
  const catIdx = new Map();
  const nameIdx = new Map();
  state.items.forEach(i => {
    if (!catIdx.has(i.category)) catIdx.set(i.category, catIdx.size);
    const nk = `${i.category}|${i.name}`;
    if (!nameIdx.has(nk)) nameIdx.set(nk, nameIdx.size);
  });
  return [...state.items].sort((a, b) =>
    (catIdx.get(a.category) - catIdx.get(b.category)) ||
    (nameIdx.get(`${a.category}|${a.name}`) - nameIdx.get(`${b.category}|${b.name}`)) ||
    (sizeNum(a.size) - sizeNum(b.size))
  );
}

// 품목 셀렉트를 품목별 optgroup으로 묶어 반환 (실사·편집용)
function buildItemSelectHtml() {
  const sorted = getSortedItems();
  const groups = [];
  const map = new Map();
  sorted.forEach(it => {
    const key = `${it.category}|${it.name}`;
    if (!map.has(key)) { map.set(key, []); groups.push(key); }
    map.get(key).push(it);
  });
  return groups.map(key => {
    const [cat, name] = key.split('|');
    const opts = map.get(key)
      .map(it => `<option value="${it.id}">${it.name} / ${it.size}</option>`)
      .join('');
    return `<optgroup label="${cat} · ${name}">${opts}</optgroup>`;
  }).join('');
}

function populateItemSelects() {
  // 실사·편집: 정렬 + 품목별 그룹 select / 수불: 검색형 콤보박스(아래 renderTxItemList)
  const html = buildItemSelectHtml();
  els.auditItemSelect.innerHTML = html;
  els.editItemSelect.innerHTML = html;
  syncTransactionItem();
  syncAuditItem();
}

// ===== 수불등록 품목: 검색형 콤보박스 (초성·부분 일치) =====
let txComboItems = [];
let txComboActive = -1;

function filterTxItems(query) {
  const kw = query.trim();
  const kwCho = toChosung(kw);
  let items = getSortedItems();
  if (kw) {
    items = items.filter(it => {
      const hay = `${it.category} ${it.name} ${it.size}`;
      return hay.includes(kw) || toChosung(hay).includes(kwCho);
    });
  }
  return items;
}

function renderTxItemList() {
  txComboItems = filterTxItems(els.transactionItemSearch.value).slice(0, 60);
  if (!txComboItems.length) {
    els.transactionItemList.innerHTML = `<div class="combo-empty">일치하는 품목이 없습니다</div>`;
    els.transactionItemList.hidden = false;
    return;
  }
  if (txComboActive >= txComboItems.length) txComboActive = -1;
  els.transactionItemList.innerHTML = txComboItems.map((it, i) => {
    const stock = getCurrentStock(it.id);
    return `<div class="combo-item${i === txComboActive ? ' active' : ''}" data-id="${it.id}">
      <span class="ci-name">${it.name}</span><b class="ci-size">${it.size}</b>
      <span class="combo-cat">${it.category}</span><span class="ci-stock">재고 ${formatNumber(stock)}</span></div>`;
  }).join('');
  els.transactionItemList.hidden = false;
}

function onTxListClick(event) {
  const row = event.target.closest('[data-id]');
  if (!row) return;
  event.preventDefault(); // blur보다 먼저 처리
  selectTxItem(row.dataset.id);
}

function selectTxItem(id) {
  const it = getItemById(id);
  if (!it) return;
  els.transactionItemId.value = id;
  els.transactionItemSearch.value = `${it.category} · ${it.name} / ${it.size}`;
  els.transactionItemList.hidden = true;
  txComboActive = -1;
  syncTransactionItem();
}

function onTxSearchKey(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (els.transactionItemList.hidden) { renderTxItemList(); return; }
    txComboActive = Math.min(txComboActive + 1, txComboItems.length - 1);
    renderTxItemList();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    txComboActive = Math.max(txComboActive - 1, 0);
    renderTxItemList();
  } else if (event.key === 'Enter') {
    if (!els.transactionItemList.hidden && txComboItems.length) {
      event.preventDefault();
      selectTxItem(txComboItems[txComboActive >= 0 ? txComboActive : 0].id);
    }
  } else if (event.key === 'Escape') {
    els.transactionItemList.hidden = true;
  }
}

function getItemById(id) {
  return state.items.find(item => item.id === id);
}

function getSignedQuantity(tx) {
  if (tx.type === '입고' || tx.type === '반납') return tx.quantity;
  if (tx.type === '분출') return -tx.quantity;
  if (tx.type === '잉여출고') return 0; // 재고에 안 잡히는 잉여분 → 기록만, 현재고에는 영향 없음
  return tx.quantity;
}

function getCurrentStock(itemId) {
  const item = getItemById(itemId);
  const init = item ? Number(item.initialStock || 0) : 0; // 미등록(아직 미생성) 품목은 초기재고 0
  const sum = state.transactions.filter(tx => tx.itemId === itemId).reduce((acc, tx) => acc + getSignedQuantity(tx), 0);
  return init + sum;
}

function getInventoryRows() {
  return state.items.map(item => ({ ...item, currentStock: getCurrentStock(item.id), stockValue: getCurrentStock(item.id) * (Number(item.unitPrice) || 0) }));
}

// ===== 품목 목록 단일화 =====
// 재고현황 대시보드·수불등록·실사가 같은 품목 목록을 공유하도록,
// 실제 품목 + 표준 사이즈 그리드의 '미등록' 사이즈를 합친 캐논 목록을 만든다.
function getGridItems() {
  const real = state.items.map(i => ({ ...i, phantom: false }));
  const have = new Set(real.map(i => `${i.category}|${i.name}|${i.size}`));
  const out = [...real];
  Object.entries(SIZE_SETS).forEach(([cat, sizes]) => {
    const names = [...new Set(state.items.filter(i => i.category === cat).map(i => i.name))];
    names.forEach(name => sizes.forEach(size => {
      const key = `${cat}|${name}|${size}`;
      if (!have.has(key)) {
        out.push({ id: `phantom-${key}`, category: cat, name, size, initialStock: 0, unitPrice: 0, safetyStock: 0, phantom: true });
      }
    }));
  });
  return out;
}

// 그리드(미등록 포함) 기준 조회 — 표시/동기화용
function resolveGridItem(id) {
  return getItemById(id) || getGridItems().find(i => i.id === id) || null;
}

// 미등록(그리드) 품목이 선택돼 수불/실사가 등록되면, 실제 품목으로 승격시켜 재고에 연동한다.
function materializeItem(id) {
  const existing = getItemById(id);
  if (existing) return existing;
  const grid = getGridItems().find(i => i.id === id);
  if (!grid) return null;
  const item = { id: `it-${crypto.randomUUID().slice(0, 8)}`, category: grid.category, name: grid.name, size: grid.size, initialStock: 0, unitPrice: 0, safetyStock: 0 };
  state.items.push(item);
  enqueue({ type: 'upsertItem', row: item });
  logActivity('품목 등록', `${item.name}/${item.size} (미등록 → 등록)`);
  populateItemSelects();
  return item;
}

function renderAll() {
  saveState();
  renderHeaderStats();
  renderInventoryPanel();
  renderHistory();
  renderPricing();
  renderAuditHistory();
  renderBilling();
  renderAnalytics();
}

function renderHeaderStats() {
  const inventory = getInventoryRows();
  const issueCount = state.transactions.filter(tx => tx.type === '분출').length;
  const totalAmount = state.transactions.filter(tx => tx.type === '분출').reduce((acc, tx) => acc + (tx.amount || 0), 0);
  const diffCount = state.audits.filter(a => a.diffQty !== 0).length;
  els.headerStats.innerHTML = `
    <div class="mini-stat"><span>총 품목 수</span><strong>${inventory.length}</strong></div>
    <div class="mini-stat"><span>분출 건수</span><strong>${issueCount}</strong></div>
    <div class="mini-stat"><span>청구 누계</span><strong>${formatCurrency(totalAmount)}</strong></div>
    <div class="mini-stat"><span>차이 발생 실사</span><strong>${diffCount}</strong></div>
  `;
}

// ===== 재고현황 탭: 사이즈 그리드 · 임계값 상태 · 상태 필터 · 분류 그룹핑 =====

// 재고 상태 판정: 품절(out) / 부족(low, 임계값 미만) / 여유(ok)
function getStockStatus(row) {
  if (row.currentStock <= 0) return 'out';
  if (row.currentStock < lowThresholdOf(row)) return 'low';
  return 'ok';
}

function statusBadge(status) {
  if (status === 'out') return '<span class="badge b-zero">🔴 품절</span>';
  if (status === 'low') return '<span class="badge b-low">🟠 부족</span>';
  return '<span class="badge b-ok">🟢 여유</span>';
}

// 재고현황 표시용: 단일 품목 목록(getGridItems)에 현재고/재고금액을 계산해 붙인다.
function getNormalizedInventoryRows() {
  return getGridItems().map(i => {
    const currentStock = getCurrentStock(i.id);
    return { ...i, currentStock, stockValue: currentStock * (Number(i.unitPrice) || 0) };
  });
}

// 분류/품목/검색/재고있는것만 적용 (상태 필터 제외) — 초성 검색 지원
function getScopedRows() {
  const keyword = els.inventorySearch.value.trim();
  const kwCho = toChosung(keyword);
  let rows = getNormalizedInventoryRows();
  if (dashFilter.category !== '전체') rows = rows.filter(r => r.category === dashFilter.category);
  if (dashFilter.item !== '전체') rows = rows.filter(r => r.name === dashFilter.item);
  if (dashFilter.onlyStock) rows = rows.filter(r => r.currentStock > 0);
  if (keyword) {
    rows = rows.filter(r => {
      const hay = `${r.category} ${r.name} ${r.size}`;
      return hay.includes(keyword) || toChosung(hay).includes(kwCho);
    });
  }
  return rows;
}

// 표에 최종 표시할 행 (상태 필터까지 적용)
function getDashboardRows() {
  let rows = getScopedRows();
  if (dashFilter.status !== 'all') rows = rows.filter(r => getStockStatus(r) === dashFilter.status);
  return rows;
}

function sortDashboardRows(rows) {
  const arr = [...rows];
  if (dashFilter.sort === 'stockAsc') return arr.sort((a, b) => a.currentStock - b.currentStock);
  if (dashFilter.sort === 'stockDesc') return arr.sort((a, b) => b.currentStock - a.currentStock);
  // 기본: 품목 등장순 → 사이즈 숫자 오름차순
  const idx = new Map();
  state.items.forEach(i => { const k = `${i.category}|${i.name}`; if (!idx.has(k)) idx.set(k, idx.size); });
  const nr = r => idx.has(`${r.category}|${r.name}`) ? idx.get(`${r.category}|${r.name}`) : 999;
  return arr.sort((a, b) => nr(a) - nr(b) || sizeNum(a.size) - sizeNum(b.size));
}

function renderInventoryPanel() {
  renderInventoryStamp();
  renderCategoryChips();
  renderItemChips();
  renderStatusFilter();
  renderSummaryCards();
  renderInventory();
}

function renderInventoryStamp() {
  const t = new Date();
  const p = n => String(n).padStart(2, '0');
  els.inventoryStamp.textContent = `기준 ${t.getFullYear()}.${p(t.getMonth() + 1)}.${p(t.getDate())} ${p(t.getHours())}:${p(t.getMinutes())}`;
}

// 상태 필터 바 (여유/부족/품절) — 클릭 시 해당 상태만, 다시 누르면 해제
function renderStatusFilter() {
  const scoped = getScopedRows();
  const counts = { all: scoped.length, ok: 0, low: 0, out: 0 };
  scoped.forEach(r => { counts[getStockStatus(r)]++; });
  const defs = [['all', '전체'], ['ok', '🟢 여유'], ['low', '🟠 부족'], ['out', '🔴 품절']];
  els.statusFilter.innerHTML = defs.map(([key, label]) => {
    const active = dashFilter.status === key ? ' active' : '';
    return `<button class="status-btn status-${key}${active}" data-status="${key}">${label} <b>${formatNumber(counts[key])}</b></button>`;
  }).join('');
}

function onStatusFilterClick(event) {
  const btn = event.target.closest('[data-status]');
  if (!btn) return;
  const key = btn.dataset.status;
  dashFilter.status = (dashFilter.status === key) ? 'all' : key;
  renderInventoryPanel();
}

function renderCategoryChips() {
  const cats = [...new Set(state.items.map(i => i.category))];
  els.categoryChips.innerHTML = ['전체', ...cats].map(cat => {
    const active = dashFilter.category === cat ? ' active' : '';
    return `<button class="chip${active}" data-cat="${cat}">${cat}</button>`;
  }).join('');
}

// 분류 선택 시, 그 분류 안의 품목을 2차 필터로 노출 (전체 선택 시 숨김)
function renderItemChips() {
  if (dashFilter.category === '전체') {
    els.itemChips.innerHTML = '';
    els.itemChips.hidden = true;
    return;
  }
  els.itemChips.hidden = false;
  const names = [...new Set(state.items.filter(i => i.category === dashFilter.category).map(i => i.name))];
  els.itemChips.innerHTML = ['전체', ...names].map(name => {
    const active = dashFilter.item === name ? ' active' : '';
    const label = name === '전체' ? '품목 전체' : name;
    return `<button class="chip chip-sub${active}" data-item="${name}">${label}</button>`;
  }).join('');
}

function onCategoryChipClick(event) {
  const chip = event.target.closest('[data-cat]');
  if (!chip) return;
  dashFilter.category = chip.dataset.cat;
  dashFilter.item = '전체'; // 분류를 바꾸면 품목 필터 초기화
  renderInventoryPanel();
}

function onItemChipClick(event) {
  const chip = event.target.closest('[data-item]');
  if (!chip) return;
  dashFilter.item = chip.dataset.item;
  renderInventoryPanel();
}

// 요약카드는 현재 필터 범위(scope)를 반영해 동적으로 계산됨 (상태 필터 제외 = 안정적 표시)
function renderSummaryCards() {
  const rows = getScopedRows();
  let scope = dashFilter.category === '전체' ? '전체' : dashFilter.category;
  if (dashFilter.item !== '전체') scope = dashFilter.item;
  const totalStock = rows.reduce((acc, r) => acc + r.currentStock, 0);
  const totalValue = rows.reduce((acc, r) => acc + r.stockValue, 0);
  // 재발주가 필요한(부족·품절) 품목 수 — 관리자가 바로 챙겨야 할 핵심 지표
  const needReorder = rows.filter(r => getStockStatus(r) !== 'ok').length;

  const cards = [
    [`총 재고 수량 · ${scope}`, formatNumber(totalStock)],
    [`재발주 필요 · ${scope}`, `${formatNumber(needReorder)}건`]
  ];
  // 단가가 설정된 재고가 있을 때만 금액 카드 노출
  if (totalValue > 0) cards.splice(1, 0, [`총 재고 금액 · ${scope}`, formatCurrency(totalValue)]);

  els.summaryCards.innerHTML = cards
    .map(([label, value]) => `<div class="summary-card"><span>${label}</span><strong>${value}</strong></div>`)
    .join('');
}

function renderInventory() {
  const rows = getDashboardRows();
  if (!rows.length) {
    els.inventoryTableBody.innerHTML = `<tr><td colspan="6" class="empty-state">조건에 맞는 재고가 없습니다.</td></tr>`;
    return;
  }

  // 분류별 그룹핑
  const groups = {};
  rows.forEach(r => { (groups[r.category] = groups[r.category] || []).push(r); });

  let html = '';
  Object.keys(groups).forEach(cat => {
    const items = sortDashboardRows(groups[cat]);
    const gStock = items.reduce((acc, r) => acc + r.currentStock, 0);
    const gValue = items.reduce((acc, r) => acc + r.stockValue, 0);
    const gShort = items.filter(r => getStockStatus(r) !== 'ok').length;
    const nameCount = new Set(items.map(r => r.name)).size;

    html += `<tr class="group-row"><td colspan="6">${cat}
      <span class="group-meta">${nameCount}품목 · ${items.length}사이즈 · 재고 ${formatNumber(gStock)}${gShort ? ` · <span class="warn-text">부족·품절 ${gShort}</span>` : ''}</span></td></tr>`;

    html += items.map(row => {
      const status = getStockStatus(row);
      return `<tr class="status-${status}">
        <td>${row.name}</td>
        <td>${row.size}</td>
        <td class="num"><span class="qty ${status}">${formatNumber(row.currentStock)}</span></td>
        <td>${statusBadge(status)}</td>
        <td class="num">${formatCurrency(row.unitPrice || 0)}</td>
        <td class="num">${formatCurrency(row.stockValue)}</td>
      </tr>`;
    }).join('');

    html += `<tr class="subtotal-row"><td colspan="2">${cat} 소계</td><td class="num">${formatNumber(gStock)}</td><td></td><td></td><td class="num">${formatCurrency(gValue)}</td></tr>`;
  });

  els.inventoryTableBody.innerHTML = html;
}

// 현재 화면(필터·정렬 반영)의 재고를 CSV(엑셀)로 내보낸다.
function exportInventoryCsv() {
  const rows = sortDashboardRows(getDashboardRows());
  if (!rows.length) { alert('내보낼 재고가 없습니다.'); return; }
  const statusKo = s => s === 'out' ? '품절' : s === 'low' ? '부족' : '여유';
  const header = ['분류', '품목', '사이즈', '현재고', '안전재고', '상태', '단가', '재고금액'];
  const cell = v => `"${String(v).replace(/"/g, '""')}"`;
  const lines = [header.map(cell).join(',')];
  rows.forEach(r => {
    lines.push([r.category, r.name, r.size, r.currentStock, (r.safetyStock || 0), statusKo(getStockStatus(r)), (r.unitPrice || 0), r.stockValue].map(cell).join(','));
  });
  const csv = '﻿' + lines.join('\r\n'); // BOM: 엑셀에서 한글 깨짐 방지
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const t = new Date(); const p = n => String(n).padStart(2, '0');
  const a = document.createElement('a');
  a.href = url;
  a.download = `재고현황_${t.getFullYear()}${p(t.getMonth() + 1)}${p(t.getDate())}_${p(t.getHours())}${p(t.getMinutes())}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  logActivity('재고현황 내보내기', `${rows.length}행`);
}

function syncTransactionItem() {
  const item = resolveGridItem(els.transactionItemId.value);
  if (!item) { els.transactionSize.value = ''; els.transactionUnitPrice.value = ''; return; }
  els.transactionSize.value = item.size;
  els.transactionUnitPrice.value = item.unitPrice || 0;
  syncTransactionAmount();
}

function syncTransactionAmount() {
  const type = els.transactionForm.type.value;
  // 재고조정만 음수 허용(재고 차감용), 나머지 구분은 최소 1로 제한
  els.transactionForm.quantity.min = (type === '재고조정') ? '' : '1';
  const qty = Number(els.transactionForm.quantity.value || 0);
  const unitPrice = Number(els.transactionUnitPrice.value || 0);
  els.transactionAmount.value = type === '분출' ? qty * unitPrice : 0;
}

function submitTransaction(event) {
  event.preventDefault();
  const form = new FormData(els.transactionForm);
  const item = materializeItem(form.get('itemId')); // 미등록 사이즈면 실제 품목으로 자동 생성
  if (!item) { alert('품목을 찾을 수 없습니다.'); return; }
  const tx = {
    id: crypto.randomUUID(),
    date: form.get('date'),
    type: form.get('type'),
    itemId: item.id,
    quantity: Number(form.get('quantity')),
    issuer: form.get('issuer') || '',
    receiver: form.get('receiver') || '',
    note: form.get('note') || '',
    unitPrice: Number(item.unitPrice || 0),
    amount: form.get('type') === '분출' ? Number(form.get('quantity')) * Number(item.unitPrice || 0) : 0,
    createdBy: getOperator(),
    createdAt: new Date().toISOString()
  };
  state.transactions.unshift(tx);
  enqueue({ type: 'insertTx', row: tx });
  logActivity('수불 등록', `${tx.type} · ${item.name}/${item.size} · ${tx.quantity}개`);
  els.transactionForm.reset();
  setDefaultDates();
  syncTransactionItem();
  renderAll();
  alert('수불 내역이 등록되었습니다.');
}

// ===== 수불이력: 기간 프리셋 필터 + 통합 검색 =====

// ISO 주 계산 (이번주 판정용)
function isoWeekOf(dateStr) {
  const dt = new Date(dateStr + 'T00:00:00');
  const d = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate()));
  const dayNum = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const fDayNum = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - fDayNum + 3);
  const week = 1 + Math.round((d - firstThursday) / (7 * 86400000));
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

// 기간 프리셋 상태: all | thisweek | thismonth | lastmonth | month
let historyPreset = 'all';

function lastMonthStr(todayStr) {
  const d = new Date(todayStr + 'T00:00:00');
  d.setMonth(d.getMonth() - 1);
  return d.toISOString().slice(0, 7);
}

function historyPeriodInfo() {
  const today = new Date().toISOString().slice(0, 10);
  switch (historyPreset) {
    case 'thisweek': return { label: `이번주 (${today.slice(0, 4)}년 ${Number(isoWeekOf(today).slice(6))}주차)` };
    case 'thismonth': return { label: `이번달 (${today.slice(0, 4)}년 ${Number(today.slice(5, 7))}월)` };
    case 'lastmonth': { const m = lastMonthStr(today); return { label: `지난달 (${m.slice(0, 4)}년 ${Number(m.slice(5, 7))}월)` }; }
    case 'month': { const m = els.historyMonth.value; return { label: m ? `${m.slice(0, 4)}년 ${Number(m.slice(5, 7))}월` : '월 지정' }; }
    default: return { label: '전체 기간' };
  }
}

function inHistoryPeriod(dateStr) {
  if (!dateStr) return false;
  const today = new Date().toISOString().slice(0, 10);
  switch (historyPreset) {
    case 'thisweek': return isoWeekOf(dateStr) === isoWeekOf(today);
    case 'thismonth': return dateStr.slice(0, 7) === today.slice(0, 7);
    case 'lastmonth': return dateStr.slice(0, 7) === lastMonthStr(today);
    case 'month': { const m = els.historyMonth.value; return m ? dateStr.slice(0, 7) === m : true; }
    default: return true;
  }
}

function onHistoryPresetClick(event) {
  const btn = event.target.closest('[data-preset]');
  if (!btn) return;
  historyPreset = btn.dataset.preset;
  [...els.historyPreset.children].forEach(b => b.classList.toggle('active', b === btn));
  els.historyMonth.hidden = historyPreset !== 'month';
  const today = new Date().toISOString().slice(0, 10);
  if (historyPreset === 'month' && !els.historyMonth.value) els.historyMonth.value = today.slice(0, 7);
  renderHistory();
}

function onHistoryReset() {
  historyPreset = 'all';
  [...els.historyPreset.children].forEach(b => b.classList.toggle('active', b.dataset.preset === 'all'));
  els.historyMonth.hidden = true;
  els.historyMonth.value = '';
  els.historyTypeFilter.value = '전체';
  els.historySearch.value = '';
  renderHistory();
}

// 상단 요약: 선택한 기간에 따라 분출건수·청구누계·차이발생실사가 달라진다.
function renderHistorySummary() {
  const info = historyPeriodInfo();
  const issues = state.transactions.filter(tx => tx.type === '분출' && inHistoryPeriod(tx.date));
  const issueCount = issues.length;
  const totalAmount = issues.reduce((acc, tx) => acc + (tx.amount || 0), 0);
  const diffAudits = state.audits.filter(a => a.diffQty !== 0 && inHistoryPeriod(a.date)).length;
  els.historySummary.innerHTML = [
    [`분출 건수 · ${info.label}`, formatNumber(issueCount)],
    [`청구 누계 · ${info.label}`, formatCurrency(totalAmount)],
    [`차이 발생 실사 · ${info.label}`, formatNumber(diffAudits)]
  ].map(([l, v]) => `<div class="summary-card"><span>${l}</span><strong>${v}</strong></div>`).join('');
}

function renderHistory() {
  renderHistorySummary();
  const typeFilter = els.historyTypeFilter.value;
  const keyword = els.historySearch.value.trim();
  const kwCho = toChosung(keyword);
  const rows = state.transactions.filter(tx => {
    const item = getItemById(tx.itemId);
    if (!inHistoryPeriod(tx.date)) return false;
    if (typeFilter !== '전체' && tx.type !== typeFilter) return false;
    if (keyword) {
      const text = `${item?.name || ''} ${item?.size || ''} ${tx.issuer} ${tx.receiver} ${tx.note}`;
      if (!text.includes(keyword) && !toChosung(text).includes(kwCho)) return false;
    }
    return true;
  });

  els.historyTableBody.innerHTML = rows.map(tx => {
    const item = getItemById(tx.itemId);
    return `
      <tr>
        <td>${tx.date}</td>
        <td>${tx.type}</td>
        <td>${item?.name || '-'}</td>
        <td>${item?.size || '-'}</td>
        <td>${formatNumber(tx.quantity)}</td>
        <td>${tx.issuer || '-'}</td>
        <td>${tx.receiver || '-'}</td>
        <td>${formatCurrency(tx.unitPrice || 0)}</td>
        <td>${formatCurrency(tx.amount || 0)}</td>
        <td>${tx.note || '-'}</td>
        <td class="row-actions">
          <button class="mini-btn edit" data-edit-tx="${tx.id}">수정</button>
          <button class="mini-btn delete" data-del-tx="${tx.id}">삭제</button>
        </td>
      </tr>
    `;
  }).join('') || `<tr><td colspan="11" class="empty-state">수불 이력이 없습니다.</td></tr>`;
}

// 수불 이력의 수정/삭제 버튼 처리
function onHistoryAction(event) {
  const delBtn = event.target.closest('[data-del-tx]');
  const editBtn = event.target.closest('[data-edit-tx]');

  if (delBtn) {
    if (!confirm('이 수불 이력을 삭제할까요? 삭제하면 되돌릴 수 없습니다.')) return;
    const delId = delBtn.dataset.delTx;
    const delTx = state.transactions.find(tx => tx.id === delId);
    const delItem = delTx ? getItemById(delTx.itemId) : null;
    state.transactions = state.transactions.filter(tx => tx.id !== delId);
    enqueue({ type: 'deleteTx', id: delId });
    logActivity('수불 삭제', delTx ? `${delTx.type} · ${delItem?.name || ''}/${delItem?.size || ''} · ${delTx.quantity}개` : delId);
    renderAll();
    alert('수불 이력이 삭제되었습니다.');
    return;
  }

  if (editBtn) {
    openEditModal(editBtn.dataset.editTx);
  }
}

// 수정 모달 열기 (기존 값으로 폼 채우기)
function openEditModal(txId) {
  const tx = state.transactions.find(t => t.id === txId);
  if (!tx) return;
  const form = els.editForm;
  form.id.value = tx.id;
  form.date.value = tx.date;
  form.type.value = tx.type;
  form.itemId.value = tx.itemId;
  form.quantity.value = tx.quantity;
  form.issuer.value = tx.issuer || '';
  form.receiver.value = tx.receiver || '';
  form.note.value = tx.note || '';
  els.editModal.hidden = false;
}

function closeEditModal() {
  els.editModal.hidden = true;
  els.editForm.reset();
}

// 수정 저장 (비밀번호 확인 후 최종 반영)
function submitEdit(event) {
  event.preventDefault();
  const form = new FormData(els.editForm);
  const txId = form.get('id');
  const tx = state.transactions.find(t => t.id === txId);
  if (!tx) { closeEditModal(); return; }

  const item = getItemById(form.get('itemId'));
  const type = form.get('type');
  const quantity = Number(form.get('quantity'));
  tx.date = form.get('date');
  tx.type = type;
  tx.itemId = item.id;
  tx.quantity = quantity;
  tx.issuer = form.get('issuer') || '';
  tx.receiver = form.get('receiver') || '';
  tx.note = form.get('note') || '';
  tx.unitPrice = Number(item.unitPrice || 0);
  tx.amount = type === '분출' ? quantity * Number(item.unitPrice || 0) : 0;
  tx.createdBy = tx.createdBy || getOperator();

  enqueue({ type: 'updateTx', row: tx });
  logActivity('수불 수정', `${tx.type} · ${item.name}/${item.size} · ${tx.quantity}개`);
  closeEditModal();
  renderAll();
  alert('수불 이력이 수정되었습니다.');
}

function syncAuditItem() {
  const item = resolveGridItem(els.auditItemSelect.value);
  if (!item) return;
  els.auditSize.value = item.size;
  els.auditSystemQty.value = getCurrentStock(item.id);
  syncAuditDiff();
}

function syncAuditDiff() {
  const systemQty = Number(els.auditSystemQty.value || 0);
  const countedQty = Number(els.auditCountedQty.value || 0);
  els.auditDiffQty.value = countedQty - systemQty;
}

async function previewAuditImage() {
  const file = els.auditImage.files[0];
  if (!file) {
    els.auditPreview.innerHTML = '첨부 이미지 미리보기';
    return;
  }
  const dataUrl = await compressImage(file);
  els.auditPreview.innerHTML = `<img src="${dataUrl}" alt="실사 이미지 미리보기" />`;
  els.auditPreview.dataset.image = dataUrl;
}

async function submitAudit(event) {
  event.preventDefault();
  const form = new FormData(els.auditForm);
  const item = materializeItem(form.get('itemId')); // 미등록 사이즈면 실제 품목으로 자동 생성
  if (!item) { alert('품목을 찾을 수 없습니다.'); return; }
  const systemQty = getCurrentStock(item.id);
  const countedQty = Number(form.get('countedQty'));
  const diffQty = countedQty - systemQty;
  const imageData = els.auditPreview.dataset.image || '';

  const audit = {
    id: crypto.randomUUID(),
    date: form.get('date'),
    inspector: form.get('inspector'),
    itemId: item.id,
    systemQty,
    countedQty,
    diffQty,
    note: form.get('note') || '',
    imageData,
    createdBy: getOperator(),
    createdAt: new Date().toISOString()
  };
  state.audits.unshift(audit);
  enqueue({ type: 'insertAudit', row: audit });
  logActivity('실사 등록', `${item.name}/${item.size} · 실사 ${countedQty} (차이 ${diffQty})`);

  if (diffQty !== 0) {
    const adjTx = {
      id: crypto.randomUUID(),
      date: audit.date,
      type: '실사조정',
      itemId: item.id,
      quantity: diffQty,
      issuer: '',
      receiver: '',
      note: `실사조정 / 조사자: ${audit.inspector}`,
      unitPrice: Number(item.unitPrice || 0),
      amount: 0,
      createdBy: getOperator(),
      createdAt: new Date().toISOString()
    };
    state.transactions.unshift(adjTx);
    enqueue({ type: 'insertTx', row: adjTx });
  }

  els.auditForm.reset();
  els.auditPreview.innerHTML = '첨부 이미지 미리보기';
  delete els.auditPreview.dataset.image;
  setDefaultDates();
  syncAuditItem();
  renderAll();
  alert(diffQty === 0 ? '실사 내역이 등록되었습니다.' : '실사 내역과 재고조정이 등록되었습니다.');
}

function renderAuditHistory() {
  const template = document.getElementById('auditCardTemplate');
  els.auditHistoryGrid.innerHTML = '';
  if (!state.audits.length) {
    els.auditHistoryGrid.innerHTML = `<div class="empty-state">실사 이력이 없습니다.</div>`;
    return;
  }
  state.audits.forEach(audit => {
    const item = getItemById(audit.itemId);
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.audit-meta').innerHTML = `
      <strong>${audit.date}</strong><br />
      <span class="muted">조사자: ${audit.inspector}</span>
    `;
    const badgeClass = audit.diffQty > 0 ? 'plus' : audit.diffQty < 0 ? 'minus' : 'neutral';
    node.querySelector('.audit-body').innerHTML = `
      <div>${item?.category || ''} / ${item?.name || ''} / ${item?.size || ''}</div>
      <div>전산수량: <strong>${formatNumber(audit.systemQty)}</strong></div>
      <div>실사수량: <strong>${formatNumber(audit.countedQty)}</strong></div>
      <div>차이: <span class="badge ${badgeClass}">${signed(audit.diffQty)}</span></div>
      <div>${audit.note || '-'}</div>
    `;
    node.querySelector('.audit-image-wrap').innerHTML = audit.imageData ? `<img src="${audit.imageData}" alt="실사 증빙 이미지" />` : `<span class="muted">첨부 이미지 없음</span>`;
    els.auditHistoryGrid.appendChild(node);
  });
}

function renderPricingChips() {
  const cats = [...new Set(state.items.map(i => i.category))];
  els.pricingChips.innerHTML = ['전체', ...cats].map(cat => {
    const active = pricingFilter.category === cat ? ' active' : '';
    return `<button class="chip${active}" data-pcat="${cat}">${cat}</button>`;
  }).join('');
}

function onPricingChipClick(event) {
  const chip = event.target.closest('[data-pcat]');
  if (!chip) return;
  pricingFilter.category = chip.dataset.pcat;
  renderPricing();
}

function renderPricing() {
  renderPricingChips();
  const items = getSortedItems().filter(i => pricingFilter.category === '전체' || i.category === pricingFilter.category);
  if (!items.length) {
    els.pricingTableBody.innerHTML = `<tr><td colspan="3" class="empty-state">품목이 없습니다.</td></tr>`;
    return;
  }
  // 품목(분류|품목)별 그룹핑
  const groups = [];
  const map = new Map();
  items.forEach(it => { const key = `${it.category}|${it.name}`; if (!map.has(key)) { map.set(key, []); groups.push(key); } map.get(key).push(it); });

  let html = '';
  groups.forEach(key => {
    const [cat, name] = key.split('|');
    const rows = map.get(key);
    const common = rows.map(r => Number(r.unitPrice || 0)).find(p => p > 0) || '';
    html += `<tr class="group-row"><td colspan="3">
      <span class="pg-title">${cat} · ${name}</span>
      <span class="group-meta">${rows.length}사이즈</span>
      <span class="bulk-apply">
        <input type="number" class="bulk-price-input" min="0" placeholder="이 품목 전체 단가" value="${common}" data-bcat="${cat}" data-bname="${name}" />
        <button class="mini-btn primary" data-bulk-apply data-bcat="${cat}" data-bname="${name}">일괄 적용</button>
      </span></td></tr>`;
    html += rows.map(item => `
      <tr>
        <td>${item.size}</td>
        <td>${formatCurrency(item.unitPrice || 0)} ${teamPriceCmpBadge(item)}</td>
        <td class="row-actions">
          <input class="price-input" type="number" min="0" value="${item.unitPrice || 0}" data-price-id="${item.id}" />
          <button class="mini-btn" data-save-price="${item.id}">저장</button>
        </td>
      </tr>`).join('');
  });
  els.pricingTableBody.innerHTML = html;
  renderPricingVerifyInfo(items);
}

// 시공팀 표시가격 대조 배지 (대조 실행 후에만 표시)
function teamPriceCmpBadge(item) {
  if (!teamPriceMap) return '';
  const key = `${item.category}|${item.name}|${item.size}`;
  if (!(key in teamPriceMap)) return `<span class="cmp none">시공팀 미표시</span>`;
  return Number(teamPriceMap[key]) === Number(item.unitPrice || 0)
    ? `<span class="cmp ok">✓ 시공팀 일치</span>`
    : `<span class="cmp bad">⚠ 시공팀 ${formatCurrency(teamPriceMap[key])}</span>`;
}

function renderPricingVerifyInfo(items) {
  if (!teamPriceMap) { els.pricingVerifyInfo.hidden = true; return; }
  let ok = 0, bad = 0, none = 0;
  items.forEach(it => {
    const key = `${it.category}|${it.name}|${it.size}`;
    if (!(key in teamPriceMap)) none++;
    else if (Number(teamPriceMap[key]) === Number(it.unitPrice || 0)) ok++;
    else bad++;
  });
  els.pricingVerifyInfo.hidden = false;
  els.pricingVerifyInfo.className = `verify-info ${bad === 0 ? 'all-ok' : 'has-diff'}`;
  els.pricingVerifyInfo.innerHTML = `시공팀 표시가격 대조 — <b class="ok">✓ 일치 ${ok}</b> · <b class="bad">⚠ 불일치 ${bad}</b>${none ? ` · 시공팀 미표시 ${none}` : ''}`
    + (bad ? ` <span class="muted">불일치 항목은 대개 저장 후 아직 동기화되지 않았거나 서버 반영 전입니다.</span>` : ` <span class="muted">모든 단가가 시공팀 대시보드와 일치합니다.</span>`);
}

// 시공팀 공개 대시보드가 실제로 표시하는 가격을 불러와 관리자 단가와 대조
async function verifyTeamPrices() {
  const pw = prompt('시공팀 대시보드 "가격 확인" 비밀번호를 입력하세요.');
  if (pw === null) return;
  try {
    const data = await api('/api/prices', { method: 'POST', body: { password: pw }, auth: false });
    teamPriceMap = {};
    (data || []).forEach(r => { teamPriceMap[`${r.category}|${r.name}|${r.size}`] = Number(r.unitPrice || 0); });
    renderPricing();
  } catch (e) {
    const msg = e.code === 401 ? '비밀번호가 올바르지 않습니다.' : (e.message || e);
    alert(`시공팀 표시가격을 불러오지 못했습니다.\n(${msg})\n\n서버 연결 상태와 비밀번호를 확인하세요. (로컬/미리보기에서는 동작하지 않습니다.)`);
  }
}

function onPricingClick(event) {
  const bulk = event.target.closest('[data-bulk-apply]');
  if (bulk) {
    const input = bulk.closest('td').querySelector('.bulk-price-input');
    applyBulkPrice(bulk.dataset.bcat, bulk.dataset.bname, Number(input.value || 0));
    return;
  }
  savePriceInline(event);
}

// 같은 품목의 모든 사이즈에 단가를 한 번에 적용 (기존 거래 청구액도 소급 반영)
function applyBulkPrice(cat, name, price) {
  const targets = state.items.filter(i => i.category === cat && i.name === name);
  if (!targets.length) return;
  if (!confirm(`${cat} · ${name} 전체 ${targets.length}개 사이즈 단가를 ${formatCurrency(price)}(으)로 적용할까요?`)) return;
  targets.forEach(item => {
    item.unitPrice = price;
    enqueue({ type: 'upsertItem', row: item });
    state.transactions.forEach(tx => {
      if (tx.itemId === item.id) {
        tx.unitPrice = price;
        tx.amount = tx.type === '분출' ? tx.quantity * price : 0;
        enqueue({ type: 'updateTx', row: tx });
      }
    });
  });
  logActivity('단가 일괄적용', `${cat}/${name} 전체 ${targets.length}개 사이즈 → ${price}`);
  renderAll();
  syncTransactionItem();
  alert(`${name} 전체 사이즈 단가를 ${formatCurrency(price)}(으)로 적용했습니다.`);
}

function savePriceInline(event) {
  const button = event.target.closest('[data-save-price]');
  if (!button) return;
  const itemId = button.dataset.savePrice;
  const input = els.pricingTableBody.querySelector(`[data-price-id="${itemId}"]`);
  const item = getItemById(itemId);
  item.unitPrice = Number(input.value || 0);
  enqueue({ type: 'upsertItem', row: item });
  logActivity('단가 변경', `${item.name}/${item.size} → ${item.unitPrice}`);

  // 이미 등록된 이 품목의 거래 내역에도 새 단가를 소급 적용한다.
  // (분출 내역의 청구금액 = 수량 × 새 단가로 다시 계산)
  state.transactions.forEach(tx => {
    if (tx.itemId === itemId) {
      tx.unitPrice = item.unitPrice;
      tx.amount = tx.type === '분출' ? tx.quantity * item.unitPrice : 0;
      enqueue({ type: 'updateTx', row: tx });
    }
  });

  renderAll();
  syncTransactionItem();
  alert('단가가 저장되었습니다. 기존 분출 내역에도 반영했습니다.');
}

function renderBilling() {
  const keyword = els.billingSearch.value.trim();
  const rows = state.transactions.filter(tx => tx.type === '분출' && (!keyword || (tx.receiver || '').includes(keyword)));
  const grouped = groupBy(rows, tx => tx.receiver || '미지정');
  els.billingSummaryCards.innerHTML = Object.entries(grouped).map(([receiver, list]) => `
    <div class="summary-card"><span>${receiver}</span><strong>${formatCurrency(list.reduce((acc, tx) => acc + (tx.amount || 0), 0))}</strong></div>
  `).join('') || `<div class="summary-card"><span>청구 데이터 없음</span><strong>₩0</strong></div>`;

  els.billingTableBody.innerHTML = rows.map(tx => {
    const item = getItemById(tx.itemId);
    return `
      <tr>
        <td>${tx.date}</td>
        <td>${tx.receiver || '-'}</td>
        <td>${item?.name || '-'}</td>
        <td>${item?.size || '-'}</td>
        <td>${formatNumber(tx.quantity)}</td>
        <td>${formatCurrency(tx.unitPrice || 0)}</td>
        <td>${formatCurrency(tx.amount || 0)}</td>
      </tr>
    `;
  }).join('') || `<tr><td colspan="7" class="empty-state">청구할 분출 내역이 없습니다.</td></tr>`;
}

function resetSeedData() {
  if (!confirm('현재 입력된 데이터를 지우고 초기 재고 상태로 되돌릴까요?')) return;
  state = makeSeedState();
  enqueue({ type: 'replaceAll', state: structuredClone(state) });
  logActivity('데이터 초기화', '전체');
  populateItemSelects();
  setDefaultDates();
  renderAll();
}

function downloadBackup() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `inventory-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function restoreBackup(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = JSON.parse(reader.result);
      saveState();
      enqueue({ type: 'replaceAll', state: structuredClone(state) });
      logActivity('백업 복원', '전체');
      populateItemSelects();
      setDefaultDates();
      renderAll();
      alert('백업을 불러왔습니다.');
    } catch {
      alert('백업 파일을 읽지 못했습니다.');
    }
  };
  reader.readAsText(file);
}

/* ===== 분석 대시보드 ===== */

// 분류 선택값에 해당하는 품목 목록을 반환 ('전체'면 모든 품목)
function getScopedItems(category) {
  return category === '전체' ? state.items : state.items.filter(item => item.category === category);
}

// 거래 내역에 존재하는 연도 + 올해를 최신순으로 반환
function getAvailableYears() {
  const years = new Set(state.transactions.map(tx => (tx.date || '').slice(0, 4)).filter(Boolean));
  years.add(new Date().toISOString().slice(0, 4));
  return [...years].filter(Boolean).sort().reverse();
}

// n개월 전 날짜를 'YYYY-MM-DD'로 반환
function monthsAgoStr(n) {
  const d = new Date();
  d.setMonth(d.getMonth() - n);
  return d.toISOString().slice(0, 10);
}

// 특정 품목의 가장 최근 분출일 (없으면 null)
function getLastIssueDate(itemId) {
  const dates = state.transactions
    .filter(tx => tx.itemId === itemId && tx.type === '분출')
    .map(tx => tx.date)
    .sort();
  return dates.length ? dates[dates.length - 1] : null;
}

// 선택 분류/연도의 월별 입고·분출 집계 (1~12월)
function getMonthlyInOut(category, year) {
  const ids = new Set(getScopedItems(category).map(item => item.id));
  const months = Array.from({ length: 12 }, () => ({ inbound: 0, outbound: 0 }));
  state.transactions.forEach(tx => {
    if (!ids.has(tx.itemId)) return;
    if ((tx.date || '').slice(0, 4) !== year) return;
    const m = Number((tx.date || '').slice(5, 7)) - 1;
    if (m < 0 || m > 11) return;
    if (tx.type === '입고' || tx.type === '반납') months[m].inbound += tx.quantity;
    else if (tx.type === '분출') months[m].outbound += tx.quantity;
  });
  return months;
}

// 선택 분류/연도의 월말 재고(추이) 12개를 반환
function getMonthEndStock(category, year) {
  const items = getScopedItems(category);
  const ids = new Set(items.map(item => item.id));
  const baseInitial = items.reduce((acc, item) => acc + item.initialStock, 0);
  const result = [];
  for (let m = 1; m <= 12; m++) {
    const cutoff = `${year}-${String(m).padStart(2, '0')}-31`;
    const delta = state.transactions
      .filter(tx => ids.has(tx.itemId) && (tx.date || '') <= cutoff)
      .reduce((acc, tx) => acc + getSignedQuantity(tx), 0);
    result.push(baseInitial + delta);
  }
  return result;
}

// 월별 입고/분출 막대그래프를 SVG 문자열로 생성
function renderBarChartSvg(months) {
  const W = 760, H = 300, padL = 44, padB = 28, padT = 16, padR = 12;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const max = Math.max(1, ...months.flatMap(m => [m.inbound, m.outbound]));
  const groupW = plotW / 12;
  const barW = Math.min(18, groupW / 2 - 4);
  const baseY = padT + plotH;
  let bars = '';
  months.forEach((m, i) => {
    const gx = padL + i * groupW + groupW / 2;
    const inH = (m.inbound / max) * plotH;
    const outH = (m.outbound / max) * plotH;
    bars += `<rect x="${(gx - barW - 2).toFixed(1)}" y="${(baseY - inH).toFixed(1)}" width="${barW.toFixed(1)}" height="${inH.toFixed(1)}" rx="3" class="bar-in"></rect>`;
    bars += `<rect x="${(gx + 2).toFixed(1)}" y="${(baseY - outH).toFixed(1)}" width="${barW.toFixed(1)}" height="${outH.toFixed(1)}" rx="3" class="bar-out"></rect>`;
    bars += `<text x="${gx.toFixed(1)}" y="${(baseY + 16).toFixed(1)}" class="chart-axis" text-anchor="middle">${i + 1}</text>`;
  });
  const axis = `
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${baseY}" class="chart-grid"></line>
    <line x1="${padL}" y1="${baseY}" x2="${W - padR}" y2="${baseY}" class="chart-grid"></line>
    <text x="${padL - 6}" y="${padT + 4}" class="chart-axis" text-anchor="end">${formatNumber(max)}</text>
    <text x="${padL - 6}" y="${baseY}" class="chart-axis" text-anchor="end">0</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" class="chart-svg" preserveAspectRatio="xMidYMid meet">${axis}${bars}</svg>`;
}

// 월별 재고 추이 선그래프를 SVG 문자열로 생성
// 세로축을 '깔끔한 숫자(10·20·50·100 단위)' 눈금으로 나누고,
// 작은 변화가 과장돼 보이지 않도록 적당한 여백(맥락)을 준다.
function getNiceLineScale(values) {
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const span = dataMax - dataMin;
  const center = (dataMin + dataMax) / 2;
  // 최소 표시 범위: 재고 수준의 약 0.8% (작은 변화에 맥락을 부여). 큰 변동은 그대로 크게 보임.
  const contextFloor = Math.max(Math.abs(center) * 0.008, 4);
  const visibleRange = Math.max(span * 1.3, contextFloor);
  let lo = center - visibleRange / 2;
  let hi = center + visibleRange / 2;
  // 눈금 간격을 1·2·5·10 계열의 깔끔한 수로 (약 4~6칸)
  const rawStep = (hi - lo) / 4;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const norm = rawStep / mag;
  const step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10) * mag;
  lo = Math.floor(lo / step) * step;
  hi = Math.ceil(hi / step) * step;
  const ticks = [];
  for (let v = lo; v <= hi + step * 0.001; v += step) ticks.push(Math.round(v));
  return { lo, hi, ticks };
}

function renderLineChartSvg(values) {
  const W = 760, H = 280, padL = 52, padB = 28, padT = 16, padR = 12;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const { lo, hi, ticks } = getNiceLineScale(values);
  const range = (hi - lo) || 1;
  const stepX = plotW / 11;
  const baseY = padT + plotH;
  const yOf = v => baseY - ((v - lo) / range) * plotH;

  // 가로 눈금선 + 왼쪽 값 라벨
  const grid = ticks.map(t => {
    const y = yOf(t).toFixed(1);
    return `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" class="chart-grid"></line>` +
           `<text x="${padL - 8}" y="${(yOf(t) + 4).toFixed(1)}" class="chart-axis" text-anchor="end">${formatNumber(t)}</text>`;
  }).join('');

  const pts = values.map((v, i) => [padL + i * stepX, yOf(v)]);
  const poly = pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const dots = pts.map(p => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3" class="line-dot"></circle>`).join('');
  const monthLabels = values.map((v, i) => `<text x="${(padL + i * stepX).toFixed(1)}" y="${(baseY + 16).toFixed(1)}" class="chart-axis" text-anchor="middle">${i + 1}</text>`).join('');

  return `<svg viewBox="0 0 ${W} ${H}" class="chart-svg" preserveAspectRatio="xMidYMid meet">${grid}<polyline points="${poly}" class="line-path" fill="none"></polyline>${dots}${monthLabels}</svg>`;
}

// 필터(분류/연도) 드롭다운을 채우되 현재 선택값은 유지
function populateAnalyticsFilters() {
  const cats = ['전체', ...new Set(state.items.map(item => item.category))];
  const prevCat = els.analyticsCategory.value;
  els.analyticsCategory.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
  if (cats.includes(prevCat)) els.analyticsCategory.value = prevCat;

  const years = getAvailableYears();
  const prevYear = els.analyticsYear.value;
  els.analyticsYear.innerHTML = years.map(y => `<option value="${y}">${y}년</option>`).join('');
  els.analyticsYear.value = years.includes(prevYear) ? prevYear : years[0];
}

function renderAnalytics() {
  populateAnalyticsFilters();
  const category = els.analyticsCategory.value || '전체';
  const year = els.analyticsYear.value || new Date().toISOString().slice(0, 4);

  const months = getMonthlyInOut(category, year);
  const stock = getMonthEndStock(category, year);
  const totalIn = months.reduce((acc, m) => acc + m.inbound, 0);
  const totalOut = months.reduce((acc, m) => acc + m.outbound, 0);
  const curStock = getScopedItems(category).reduce((acc, item) => acc + getCurrentStock(item.id), 0);

  els.analyticsSummary.innerHTML = [
    ['선택기간 총입고', formatNumber(totalIn)],
    ['선택기간 총분출', formatNumber(totalOut)],
    ['순증감', signed(totalIn - totalOut)],
    ['현재고(선택분류)', formatNumber(curStock)]
  ].map(([label, value]) => `<div class="summary-card"><span>${label}</span><strong>${value}</strong></div>`).join('');

  els.barChart.innerHTML = renderBarChartSvg(months);
  els.lineChart.innerHTML = renderLineChartSvg(stock);

  renderCategoryTable(year);
  renderReorderTable();
  renderTurnoverTable();
  renderForecastTable();
}

function renderCategoryTable(year) {
  const cats = [...new Set(state.items.map(item => item.category))];
  els.categoryTableBody.innerHTML = cats.map(cat => {
    const months = getMonthlyInOut(cat, year);
    const inb = months.reduce((acc, m) => acc + m.inbound, 0);
    const out = months.reduce((acc, m) => acc + m.outbound, 0);
    const cur = getScopedItems(cat).reduce((acc, item) => acc + getCurrentStock(item.id), 0);
    return `
      <tr>
        <td>${cat}</td>
        <td>${formatNumber(inb)}</td>
        <td>${formatNumber(out)}</td>
        <td>${signed(inb - out)}</td>
        <td>${formatNumber(cur)}</td>
      </tr>`;
  }).join('');
}

function renderReorderTable() {
  const rows = getInventoryRows().map(row => ({ ...row, safetyStock: Number(row.safetyStock || 0) }));
  const isShort = row => row.safetyStock > 0 && row.currentStock <= row.safetyStock;
  const belowCount = rows.filter(isShort).length;
  els.reorderCount.textContent = `발주 필요 ${belowCount}건 / 전체 ${rows.length}품목`;

  const sorted = [...rows].sort((a, b) => (isShort(b) ? 1 : 0) - (isShort(a) ? 1 : 0));
  els.reorderTableBody.innerHTML = sorted.map(row => {
    const badge = isShort(row)
      ? `<span class="badge minus">발주 필요</span>`
      : (row.safetyStock > 0 ? `<span class="badge plus">정상</span>` : `<span class="badge neutral">미설정</span>`);
    return `
      <tr>
        <td>${row.category}</td>
        <td>${row.name}</td>
        <td>${row.size}</td>
        <td>${formatNumber(row.currentStock)}</td>
        <td>
          <input class="safety-input" type="number" min="0" value="${row.safetyStock}" data-safety-id="${row.id}" />
          <button class="primary-btn" data-save-safety="${row.id}">저장</button>
        </td>
        <td>${badge}</td>
      </tr>`;
  }).join('');
}

function saveSafetyInline(event) {
  const button = event.target.closest('[data-save-safety]');
  if (!button) return;
  const itemId = button.dataset.saveSafety;
  const input = els.reorderTableBody.querySelector(`[data-safety-id="${itemId}"]`);
  const item = getItemById(itemId);
  item.safetyStock = Number(input.value || 0);
  enqueue({ type: 'upsertItem', row: item });
  logActivity('안전재고 변경', `${item.name}/${item.size} → ${item.safetyStock}`);
  renderAll();
  alert('안전재고가 저장되었습니다.');
}

function renderTurnoverTable() {
  const cutoff = monthsAgoStr(6);
  const rows = state.items.map(item => {
    const cur = getCurrentStock(item.id);
    const issued6 = state.transactions
      .filter(tx => tx.itemId === item.id && tx.type === '분출' && (tx.date || '') >= cutoff)
      .reduce((acc, tx) => acc + tx.quantity, 0);
    const lastIssue = getLastIssueDate(item.id);
    const turnover = cur > 0 ? issued6 / cur : null;
    const dead = !lastIssue || lastIssue < cutoff;
    return { item, cur, issued6, lastIssue, turnover, dead };
  }).sort((a, b) => b.issued6 - a.issued6);

  els.turnoverTableBody.innerHTML = rows.map(r => {
    const badge = r.dead
      ? `<span class="badge minus">불용(6개월+)</span>`
      : (r.turnover >= 1 ? `<span class="badge plus">활발</span>` : `<span class="badge neutral">보통</span>`);
    return `
      <tr>
        <td>${r.item.name}</td>
        <td>${r.item.size}</td>
        <td>${formatNumber(r.cur)}</td>
        <td>${formatNumber(r.issued6)}</td>
        <td>${r.turnover == null ? '-' : r.turnover.toFixed(2)}</td>
        <td>${r.lastIssue || '-'}</td>
        <td>${badge}</td>
      </tr>`;
  }).join('') || `<tr><td colspan="7" class="empty-state">분석할 품목이 없습니다.</td></tr>`;
}

function renderForecastTable() {
  const cutoff = monthsAgoStr(3);
  const rows = state.items.map(item => {
    const issued3 = state.transactions
      .filter(tx => tx.itemId === item.id && tx.type === '분출' && (tx.date || '') >= cutoff)
      .reduce((acc, tx) => acc + tx.quantity, 0);
    const avg = issued3 / 3;
    const predicted = Math.round(avg);
    const cur = getCurrentStock(item.id);
    const safety = Number(item.safetyStock || 0);
    const recommend = Math.max(0, predicted + safety - cur);
    return { item, avg, predicted, cur, safety, recommend };
  }).filter(r => r.predicted > 0 || r.recommend > 0)
    .sort((a, b) => b.recommend - a.recommend);

  els.forecastTableBody.innerHTML = rows.map(r => `
      <tr>
        <td>${r.item.name}</td>
        <td>${r.item.size}</td>
        <td>${formatNumber(r.cur)}</td>
        <td>${r.avg.toFixed(1)}</td>
        <td>${formatNumber(r.predicted)}</td>
        <td>${formatNumber(r.safety)}</td>
        <td>${r.recommend > 0 ? `<strong>${formatNumber(r.recommend)}</strong>` : '0'}</td>
      </tr>`).join('') || `<tr><td colspan="7" class="empty-state">예측에 필요한 분출 데이터가 부족합니다.</td></tr>`;
}

function groupBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item);
    (acc[key] ||= []).push(item);
    return acc;
  }, {});
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString('ko-KR');
}

function formatCurrency(value) {
  return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(Number(value || 0));
}

function signed(value) {
  if (value > 0) return `+${formatNumber(value)}`;
  return formatNumber(value);
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1280;
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.72));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// 모든 최상위 선언이 초기화된 뒤 앱을 시작한다 (TDZ 방지)
init();
