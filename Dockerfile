FROM node:latest as BUILD_IMAGE
WORKDIR /app

COPY . .
RUN npm install -g npm@9.6.2
RUN npm i -g pnpm@v8.13.1
RUN pnpm i
RUN pnpm run build:pro

FROM nginx:1.21.0-alpine
COPY --from=BUILD_IMAGE /app/dist-pro/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY cert.crt /usr/share/certs/cert.crt
COPY cert.key /usr/share/certs/cert.key
COPY ca.crt /usr/share/certs/ca.crt
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]