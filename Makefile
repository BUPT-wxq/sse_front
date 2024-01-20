.PHONY: docker-build
docker-build: 
	docker buildx build --no-cache -f Dockerfile --platform linux/arm64 -t wangxingqi411/sse_front:v1.0 . --push