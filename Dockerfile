FROM node:latest as BUILD_IMAGE
WORKDIR /app

COPY . .
RUN npm install -g npm@latest
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build:pro

FROM nginx:1.21.0-alpine
COPY --from=BUILD_IMAGE /app/dist-pro/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]