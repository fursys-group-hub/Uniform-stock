#!/bin/sh
set -e

# Supabase 설정을 config.js 로 주입 (브라우저에서 window.__CONFIG__ 로 사용)
cat > /usr/share/nginx/html/config.js <<EOF
window.__CONFIG__ = {
  SUPABASE_URL: "${SUPABASE_URL}",
  SUPABASE_ANON_KEY: "${SUPABASE_ANON_KEY}"
};
EOF

# 관리자 비밀번호 주입 (Phase 1: 수불 수정/삭제 확인용. Phase 2에서 로그인으로 대체 예정)
if [ -n "$ADMIN_PASSWORD" ]; then
  sed -i "s/__ADMIN_PASSWORD_PLACEHOLDER__/$ADMIN_PASSWORD/g" /usr/share/nginx/html/app.js
fi

exec nginx -g 'daemon off;'
