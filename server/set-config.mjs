// app_config 키/값 설정 유틸: node set-config.mjs <key> <value>
// (배포 환경변수 갱신이 안 되는 값을 DB에 저장하기 위한 관리자용 스크립트)
import pg from 'pg';
import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const f = path.join(ROOT, '.env');
if (existsSync(f)) for (const line of readFileSync(f, 'utf8').split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const [, , key, value] = process.argv;
if (!key || value === undefined) { console.error('usage: node set-config.mjs <key> <value>'); process.exit(1); }

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  options: `-c search_path=${process.env.DB_SCHEMA || 'public'},public`
});

await pool.query('create table if not exists app_config (key text primary key, value text, updated_at timestamptz not null default now())');
await pool.query('insert into app_config (key,value,updated_at) values ($1,$2,now()) on conflict (key) do update set value=excluded.value, updated_at=now()', [key, value]);
console.log(`OK: app_config['${key}'] 저장됨 (길이 ${value.length})`);
await pool.end();
