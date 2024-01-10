# 使用 Nginx 作为基础镜像
FROM nginx:1.21.0-alpine

COPY dist-pro/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 暴露 Nginx 的默认端口（通常为 80）
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]