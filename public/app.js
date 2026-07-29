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
  analytics: ['분석 대시보드', '월별 입출고 추이와 재발주·회전율·수요예측을 한눈에 확인합니다.']
};

let state = loadState();

const els = {
  navTabs: document.getElementById('navTabs'),
  pageTitle: document.getElementById('pageTitle'),
  pageDesc: document.getElementById('pageDesc'),
  headerStats: document.getElementById('headerStats'),
  summaryCards: document.getElementById('summaryCards'),
  inventorySearch: document.getElementById('inventorySearch'),
  inventoryTableBody: document.getElementById('inventoryTableBody'),
  transactionForm: document.getElementById('transactionForm'),
  transactionItemSelect: document.getElementById('transactionItemSelect'),
  transactionSize: document.getElementById('transactionSize'),
  transactionUnitPrice: document.getElementById('transactionUnitPrice'),
  transactionAmount: document.getElementById('transactionAmount'),
  historyTypeFilter: document.getElementById('historyTypeFilter'),
  historySearch: document.getElementById('historySearch'),
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
  operatorLabel: document.getElementById('operatorLabel')
};

function init() {
  bindEvents();
  bindAuthEvents();
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
  els.inventorySearch.addEventListener('input', renderInventory);
  els.transactionItemSelect.addEventListener('change', syncTransactionItem);
  els.transactionForm.quantity.addEventListener('input', syncTransactionAmount);
  els.transactionForm.type.addEventListener('change', syncTransactionAmount);
  els.transactionForm.addEventListener('submit', submitTransaction);
  els.historyTypeFilter.addEventListener('change', renderHistory);
  els.historySearch.addEventListener('input', renderHistory);
  els.auditItemSelect.addEventListener('change', syncAuditItem);
  els.auditCountedQty.addEventListener('input', syncAuditDiff);
  els.auditImage.addEventListener('change', previewAuditImage);
  els.auditForm.addEventListener('submit', submitAudit);
  els.billingSearch.addEventListener('input', renderBilling);
  els.seedBtn.addEventListener('click', resetSeedData);
  els.backupBtn.addEventListener('click', downloadBackup);
  els.restoreInput.addEventListener('change', restoreBackup);
  els.pricingTableBody.addEventListener('click', savePriceInline);
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
    let q = loadOutbox();
    while (q.length) {
      const op = q[0];
      try {
        await applyOp(op);
      } catch (e) {
        if (e.code === 401) { online = true; break; }   // 인증 만료 → 재로그인 필요
        online = false;
        console.warn('[sync] 반영 대기(재시도 예정):', op.type, e.message || e);
        break;                     // 실패 → 순서 보존 위해 중단, 다음 기회에 재시도
      }
      q.shift();
      saveOutbox(q);
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
}

function populateItemSelects() {
  const options = state.items.map(item => `<option value="${item.id}">${item.category} / ${item.name} / ${item.size}</option>`).join('');
  els.transactionItemSelect.innerHTML = options;
  els.auditItemSelect.innerHTML = options;
  els.editItemSelect.innerHTML = options;
  syncTransactionItem();
  syncAuditItem();
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
  const sum = state.transactions.filter(tx => tx.itemId === itemId).reduce((acc, tx) => acc + getSignedQuantity(tx), 0);
  return item.initialStock + sum;
}

function getInventoryRows() {
  return state.items.map(item => ({ ...item, currentStock: getCurrentStock(item.id), stockValue: getCurrentStock(item.id) * (Number(item.unitPrice) || 0) }));
}

function renderAll() {
  saveState();
  renderHeaderStats();
  renderSummaryCards();
  renderInventory();
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

function renderSummaryCards() {
  const inventory = getInventoryRows();
  const totalStock = inventory.reduce((acc, row) => acc + row.currentStock, 0);
  const totalValue = inventory.reduce((acc, row) => acc + row.stockValue, 0);
  const lowItems = inventory.filter(row => row.currentStock <= 0).length;
  const today = new Date().toISOString().slice(0, 10);
  const todayMoves = state.transactions.filter(tx => tx.date === today).length;
  els.summaryCards.innerHTML = [
    ['총 재고 수량', formatNumber(totalStock)],
    ['총 재고 금액', formatCurrency(totalValue)],
    ['재고 0 이하 품목', formatNumber(lowItems)],
    ['오늘 수불 건수', formatNumber(todayMoves)]
  ].map(([label, value]) => `<div class="summary-card"><span>${label}</span><strong>${value}</strong></div>`).join('');
}

function renderInventory() {
  const keyword = els.inventorySearch.value.trim();
  const rows = getInventoryRows().filter(row => !keyword || `${row.category} ${row.name} ${row.size}`.includes(keyword));
  els.inventoryTableBody.innerHTML = rows.map(row => `
    <tr>
      <td>${row.category}</td>
      <td>${row.name}</td>
      <td>${row.size}</td>
      <td>${formatNumber(row.currentStock)}</td>
      <td>${formatCurrency(row.unitPrice || 0)}</td>
      <td>${formatCurrency(row.stockValue)}</td>
    </tr>
  `).join('') || `<tr><td colspan="6" class="empty-state">표시할 재고가 없습니다.</td></tr>`;
}

function syncTransactionItem() {
  const item = getItemById(els.transactionItemSelect.value);
  if (!item) return;
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
  const item = getItemById(form.get('itemId'));
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
  els.transactionForm.reset();
  setDefaultDates();
  syncTransactionItem();
  renderAll();
  alert('수불 내역이 등록되었습니다.');
}

function renderHistory() {
  const typeFilter = els.historyTypeFilter.value;
  const keyword = els.historySearch.value.trim();
  const rows = state.transactions.filter(tx => {
    const item = getItemById(tx.itemId);
    const text = `${item?.name || ''} ${item?.size || ''} ${tx.issuer} ${tx.receiver} ${tx.note}`;
    return (typeFilter === '전체' || tx.type === typeFilter) && (!keyword || text.includes(keyword));
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
    state.transactions = state.transactions.filter(tx => tx.id !== delId);
    enqueue({ type: 'deleteTx', id: delId });
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
  closeEditModal();
  renderAll();
  alert('수불 이력이 수정되었습니다.');
}

function syncAuditItem() {
  const item = getItemById(els.auditItemSelect.value);
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
  const item = getItemById(form.get('itemId'));
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

function renderPricing() {
  els.pricingTableBody.innerHTML = state.items.map(item => `
    <tr>
      <td>${item.category}</td>
      <td>${item.name}</td>
      <td>${item.size}</td>
      <td>${formatCurrency(item.unitPrice || 0)}</td>
      <td>
        <input class="price-input" type="number" min="0" value="${item.unitPrice || 0}" data-price-id="${item.id}" />
        <button class="primary-btn" data-save-price="${item.id}">저장</button>
      </td>
    </tr>
  `).join('');
}

function savePriceInline(event) {
  const button = event.target.closest('[data-save-price]');
  if (!button) return;
  const itemId = button.dataset.savePrice;
  const input = els.pricingTableBody.querySelector(`[data-price-id="${itemId}"]`);
  const item = getItemById(itemId);
  item.unitPrice = Number(input.value || 0);
  enqueue({ type: 'upsertItem', row: item });

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
