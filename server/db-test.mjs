import pg from 'pg';
import { readFileSync } from 'fs';

const env = {};
for (const line of readFileSync('../.env', 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
}
const SCHEMA = env.DB_SCHEMA || 'public';

const pool = new pg.Pool({
  connectionString: env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 2
});

try {
  const who = await pool.query('select current_user, current_database()');
  console.log('접속 성공:', who.rows[0]);

  // 검색 경로 및 스키마 권한 확인
  await pool.query(`set search_path to "${SCHEMA}", public`);
  const sp = await pool.query('show search_path');
  console.log('search_path:', sp.rows[0].search_path);

  // 스키마 내 기존 테이블 목록
  const t = await pool.query(
    `select table_name from information_schema.tables where table_schema = $1 order by table_name`,
    [SCHEMA]
  );
  console.log(`스키마 "${SCHEMA}" 기존 테이블:`, t.rows.map(r => r.table_name));

  // 스키마 생성/쓰기 권한 테스트 (임시 테이블 생성 후 삭제)
  await pool.query(`create table if not exists "${SCHEMA}".__conn_test (id int)`);
  await pool.query(`drop table "${SCHEMA}".__conn_test`);
  console.log('스키마 내 테이블 생성/삭제 권한: OK');
} catch (e) {
  console.error('ERROR:', e.message);
} finally {
  await pool.end();
}
