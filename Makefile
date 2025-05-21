# 打包惊醒
.PHONY: docker-build
docker-build: 
	docker buildx build -f Dockerfile --platform=linux/amd64,linux/arm64 -t wangxingqi411/sse_front:v1.0 . --push
.PHONY: run
run: 
	pnpm run build:pro&&pnpm run serve:pro