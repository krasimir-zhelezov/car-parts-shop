# Stage 1: Build the Angular app
FROM node:18-alpine as builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the Angular app (production by default)
ARG configuration=production
RUN npm run build -- --configuration=$configuration

# Stage 2: Development (with dev server)
FROM node:18-alpine as development

WORKDIR /app

COPY --from=builder /app .

EXPOSE 4200

CMD ["npm", "start"]

# Stage 3: Production (with Nginx)
FROM nginx:1.25-alpine as production

# Copy built assets from builder stage
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]