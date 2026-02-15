# Pulpo.cloud Websites

pnpm monorepo with Turborepo for all static Astro websites.

## Websites

| Directory | Domain | Docker Image |
|-----------|--------|-------------|
| `pulpo.cloud` | pulpo.cloud | `ghcr.io/tobiasbenkner/pulpo-cloud` |
| `es.beckernet` | beckernet.es | `ghcr.io/tobiasbenkner/beckernet` |
| `es.beckernet.seguros` | seguros.beckernet.es | `ghcr.io/tobiasbenkner/beckernet-seguros` |
| `com.holacanterasclub` | holacanterasclub.com | `ghcr.io/tobiasbenkner/holacanterasclub` |
| `com.lumera` | lumera.benkner-it.com | `ghcr.io/tobiasbenkner/lumera` |
| `com.vibradanceacademy` | hektorysara.com | `ghcr.io/tobiasbenkner/vibradanceacademy` |
| `com.benkner-it` | benkner-it.com | `ghcr.io/tobiasbenkner/benkner-it` |
| `com.elbuhotuerto` | elbuhotuerto.com | `ghcr.io/tobiasbenkner/elbuhotuerto` |

## Development

```bash
pnpm install                          # Install dependencies
pnpm dev                              # Dev servers for all packages
pnpm --filter @pulpo/beckernet dev    # Dev server for one website
pnpm build                            # Build all
```

## Deployment

All sites deploy via Docker. Push to `main` triggers GitHub Actions:

1. **Build**: Each website is built in a multi-stage Docker image (`node:24-alpine` + `nginx:alpine`)
2. **Push**: Images are pushed to `ghcr.io/tobiasbenkner/`
3. **Deploy**: Watchtower on the server auto-pulls new images every 60s

Server runs **Traefik** as reverse proxy with automatic Let's Encrypt TLS.

### Local Docker test

```bash
docker build --build-arg WEBSITE=pulpo.cloud -t test .
docker run -p 8080:80 test
```

### Server

```bash
docker compose up -d
```

## Structure

```
packages/           # Shared libraries
├── cms/            # Directus SDK wrapper (@pulpo/cms)
└── i18n/           # i18n utilities (@pulpo/i18n)

websites/           # Client websites (Astro + Tailwind CSS v4)

Dockerfile          # Multi-stage build (shared, uses WEBSITE build-arg)
nginx.conf          # Nginx config for static serving
docker-compose.yml  # All services + Traefik labels + Watchtower
```

## Video encoding snippets

```bash
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -crf 28 -b:v 0 -vf "scale='min(960,iw)':-1" -an hero.webm

ffmpeg -i hektor-original.mp4 -c:v libx264 -profile:v main -level 3.1 -crf 23 -preset slow -vf "scale='min(720,iw)':-2" -c:a aac -b:a 128k -movflags +faststart -y output.mp4

# 480 bei hochkant
ffmpeg -i hektor-original.mp4 -c:v libx264 -profile:v main -level 3.1 -crf 23 -preset slow -vf "scale='min(480,iw)':-2" -c:a aac -b:a 128k -movflags +faststart -y output.mp4
```
