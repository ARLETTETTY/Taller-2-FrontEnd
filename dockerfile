# Etapa 1: build de la app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servir estáticos con Nginx
FROM nginx:1.27-alpine

# Elimina config por defecto y copia la tuya si quieres
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia el build de Vite/React
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
