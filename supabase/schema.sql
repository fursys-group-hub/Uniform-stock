-- =====================================================================
-- 유니폼 재고관리 — Supabase 스키마 (Phase 1)
-- 실행 위치: Supabase 대시보드 → SQL Editor → New query → 아래 전체 붙여넣기 → Run
-- 여러 번 실행해도 안전(idempotent)하도록 작성됨.
-- =====================================================================

-- ---------- 1) 테이블 ----------

-- 품목 마스터
create table if not exists items (
  id            text primary key,
  category      text not null,
  name          text not null,
  size          text not null,
  unit_price    numeric  not null default 0,
  initial_stock integer  not null default 0,
  safety_stock  integer  not null default 0,
  updated_at    timestamptz not null default now()
);

-- 수불(입고/분출/반납/재고조정/실사조정/잉여출고)
create table if not exists transactions (
  id         uuid primary key default gen_random_uuid(),
  date       date not null,
  type       text not null check (type in ('입고','분출','반납','재고조정','실사조정','잉여출고')),
  item_id    text not null references items(id) on delete restrict,
  quantity   integer not null,
  issuer     text default '',
  receiver   text default '',
  note       text default '',
  unit_price numeric not null default 0,
  amount     numeric not null default 0,
  created_by text default '',                 -- 작업한 관리자명 (Phase 2부터 채워짐)
  created_at timestamptz not null default now()
);
create index if not exists idx_tx_item on transactions(item_id);
create index if not exists idx_tx_date on transactions(date);
create index if not exists idx_tx_type on transactions(type);

-- 실사
create table if not exists audits (
  id          uuid primary key default gen_random_uuid(),
  date        date not null,
  inspector   text not null,
  item_id     text not null references items(id) on delete restrict,
  system_qty  integer not null,
  counted_qty integer not null,
  diff_qty    integer not null,
  note        text default '',
  image_data  text default '',                -- Phase 1: base64 인라인. (Phase 4에서 Storage로 이전 검토)
  created_by  text default '',
  created_at  timestamptz not null default now()
);
create index if not exists idx_audit_item on audits(item_id);

-- 조작/접속 로그 (Phase 4에서 본격 사용)
create table if not exists activity_logs (
  id     bigint generated always as identity primary key,
  at     timestamptz not null default now(),
  actor  text default '',                     -- 관리자명
  action text not null,                       -- login / tx_create / tx_update / tx_delete / price_update / audit_create ...
  target text default '',
  detail jsonb
);
create index if not exists idx_logs_at on activity_logs(at desc);

-- ---------- 2) 현재고 뷰 ----------
create or replace view current_stock as
select
  i.id as item_id, i.category, i.name, i.size, i.unit_price, i.safety_stock,
  i.initial_stock + coalesce(sum(
    case t.type
      when '입고'    then t.quantity
      when '반납'    then t.quantity
      when '분출'    then -t.quantity
      when '잉여출고' then 0
      else t.quantity                         -- 재고조정, 실사조정
    end), 0) as current_stock
from items i
left join transactions t on t.item_id = i.id
group by i.id;

-- ---------- 3) RLS (Phase 1: 임시 전체 허용) ----------
-- ⚠️ 아래 정책은 "로그인 도입 전"까지만 쓰는 임시 정책입니다.
--    Phase 2에서 supabase/policies_phase2.sql 로 교체하여
--    익명=읽기전용, 인증(관리자)=쓰기 로 잠급니다.
alter table items          enable row level security;
alter table transactions   enable row level security;
alter table audits         enable row level security;
alter table activity_logs  enable row level security;

drop policy if exists "phase1 all items"        on items;
drop policy if exists "phase1 all transactions" on transactions;
drop policy if exists "phase1 all audits"       on audits;
drop policy if exists "phase1 all logs"         on activity_logs;

create policy "phase1 all items"        on items         for all to anon, authenticated using (true) with check (true);
create policy "phase1 all transactions" on transactions  for all to anon, authenticated using (true) with check (true);
create policy "phase1 all audits"       on audits        for all to anon, authenticated using (true) with check (true);
create policy "phase1 all logs"         on activity_logs for all to anon, authenticated using (true) with check (true);

-- 뷰 조회 권한
grant select on current_stock to anon, authenticated;
