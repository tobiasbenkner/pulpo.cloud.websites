# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is a **pnpm monorepo** managed with **Turborepo**.

| Command | Description |
|---------|-------------|
| `pnpm install` | Install all workspace dependencies |
| `pnpm dev` | Start dev servers for all packages |
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint all packages |
| `pnpm check-types` | TypeScript type checking |

To run commands for a specific workspace:
```bash
pnpm --filter @pulpo/lumera dev
pnpm --filter @pulpo/beckernet build
```

## Architecture

### Monorepo Structure

```
packages/           # Shared libraries
├── cms/            # Directus SDK wrapper and types (@pulpo/cms)
└── i18n/           # Shared i18n utilities (@pulpo/i18n)

websites/           # Client website instances
├── pulpo.cloud/            # Landing page
├── es.beckernet/           # beckernet.es
├── es.beckernet.seguros/   # seguros.beckernet.es
├── com.holacanterasclub/   # holacanterasclub.com
├── com.lumera/             # lumera.benkner-it.com
├── com.vibradanceacademy/  # hektorysara.com
├── com.benkner-it/         # benkner-it.com
└── com.elbuhotuerto/       # elbuhotuerto.com
```

Each website is a standalone Astro project using Tailwind CSS v4, optionally with Directus CMS.

### Shared CMS Package (@pulpo/cms)

Located at `packages/cms/`, provides:
- `createClient(url, token)` - Create typed Directus client
- Type definitions for all CMS collections
- API helpers for common queries

Used by websites via workspace dependency:
```json
"@pulpo/cms": "workspace:*"
```

### Multi-Language Routing Pattern

Website apps use a convention-based routing system:

1. **Views** are defined in `src/views/{name}/` with:
   - `{name}.route.ts` - Route key and slugs per language
   - `{name}.i18n.ts` - Translations
   - `{name}.page.astro` - Page component

2. **Auto-discovery** via Vite's `import.meta.glob()` in `src/lib/registry.ts`

3. **Dynamic routing** in `src/pages/[...slug]/index.astro` generates all language variants

### Deployment

All websites deploy via **Docker** to a server running **Traefik** as reverse proxy.

- **Dockerfile** (root-level): Multi-stage build with `WEBSITE` build-arg — builds one website at a time using `node:24-alpine` + `nginx:alpine`
- **docker-compose.yml**: Defines all 8 website services with Traefik labels for domain routing + TLS, plus Watchtower for auto-updates
- **GitHub Actions** (`.github/workflows/build-and-deploy.yml`): On push to main, builds all 8 Docker images in parallel and pushes to `ghcr.io/tobiasbenkner/`
- **Watchtower**: Polls ghcr.io every 60s and auto-pulls new images

Local Docker test:
```bash
docker build --build-arg WEBSITE=pulpo.cloud -t test .
docker run -p 8080:80 test
```

### Environment Variables

Required for CMS-connected websites (passed as Docker build-args in CI):
- `DIRECTUS_URL` - Directus instance URL
- `DIRECTUS_TOKEN` - API token
