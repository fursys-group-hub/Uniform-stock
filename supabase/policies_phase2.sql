-- =====================================================================
-- 유니폼 재고관리 — Phase 2 권한 정책 (RLS)
-- 익명(비로그인) = 조회만 / 로그인(관리자) = 등록·수정·삭제
-- 실행: Supabase 대시보드 → SQL Editor → New query → 붙여넣기 → Run
-- (Phase 1의 임시 '전체 허용' 정책을 교체합니다.)
-- =====================================================================

-- 1) Phase 1 임시 정책 제거
drop policy if exists "phase1 all items"        on items;
drop policy if exists "phase1 all transactions" on transactions;
drop policy if exists "phase1 all audits"       on audits;
drop policy if exists "phase1 all logs"         on activity_logs;

-- 2) items(품목): 조회는 누구나(공개 대시보드용), 쓰기는 로그인만
drop policy if exists "read items"  on items;
drop policy if exists "write items" on items;
create policy "read items"  on items for select to anon, authenticated using (true);
create policy "write items" on items for all    to authenticated using (true) with check (true);

-- 3) transactions(수불): 로그인만 조회·쓰기 (담당자·청구액 등 보호)
--    공개 대시보드는 raw 수불이 아니라 current_stock 뷰(집계)만 본다.
drop policy if exists "rw transactions" on transactions;
create policy "rw transactions" on transactions for all to authenticated using (true) with check (true);

-- 4) audits(실사): 로그인만
drop policy if exists "rw audits" on audits;
create policy "rw audits" on audits for all to authenticated using (true) with check (true);

-- 5) activity_logs(로그): 로그인만 기록·조회 (Phase 4에서 사용)
drop policy if exists "rw logs" on activity_logs;
create policy "rw logs" on activity_logs for all to authenticated using (true) with check (true);

-- 6) current_stock 뷰: 익명도 조회 가능 (공개 재고 대시보드 — Phase 3)
--    뷰는 소유자 권한으로 실행되어 raw 수불 노출 없이 집계 수량만 보여준다.
grant select on current_stock to anon, authenticated;
