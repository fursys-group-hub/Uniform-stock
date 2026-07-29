FROM node:20-alpine

WORKDIR /app

# 의존성 먼저 설치(캐시 활용)
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --omit=dev

# 서버 코드 + 프론트엔드(public/) 복사
COPY server/server.js ./server/
COPY public ./public

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=8s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:3000/api/health || exit 1

CMD ["node", "server/server.js"]
