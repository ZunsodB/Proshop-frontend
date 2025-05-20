FROM node:alpine3.20 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx:1.27.5-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

