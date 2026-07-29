// 배포 시 docker-entrypoint.sh 가 환경변수로 이 파일을 생성합니다.
// 로컬에서 테스트할 때는 이 파일을 config.js 로 복사하고 값을 채우세요. (config.js 는 git 추적 제외)
window.__CONFIG__ = {
  SUPABASE_URL: "https://YOUR-PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "YOUR-ANON-PUBLIC-KEY"
};
