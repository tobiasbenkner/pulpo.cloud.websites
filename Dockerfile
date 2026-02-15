FROM node:24-alpine AS builder
ARG WEBSITE
WORKDIR /app
RUN corepack enable

# Copy only the files pnpm needs, then install
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY packages/ packages/
COPY websites/${WEBSITE}/ websites/${WEBSITE}/
RUN pnpm install --frozen-lockfile

# Build only the target website
RUN pnpm --filter "./websites/${WEBSITE}" build

# Nginx stage - serve static files only
FROM nginx:alpine
ARG WEBSITE
COPY --from=builder /app/websites/${WEBSITE}/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
