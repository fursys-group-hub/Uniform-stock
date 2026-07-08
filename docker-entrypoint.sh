#!/bin/sh
set -e

if [ -n "$ADMIN_PASSWORD" ]; then
  sed -i "s/__ADMIN_PASSWORD_PLACEHOLDER__/$ADMIN_PASSWORD/g" /usr/share/nginx/html/app.js
fi

exec nginx -g 'daemon off;'
