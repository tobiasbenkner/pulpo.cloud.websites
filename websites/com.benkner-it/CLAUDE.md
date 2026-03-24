# CLAUDE.md — benkner-it.com

## Commands

```bash
pnpm --filter @pulpo/benkner-it dev      # Start dev server
pnpm --filter @pulpo/benkner-it build    # Build static site
pnpm --filter @pulpo/benkner-it preview  # Preview built site
```

## Architecture

Astro 5 static site with Tailwind CSS v4. Bilingual (German default, English).

### Views Pattern

Each page lives in `src/views/{name}/` with three files:

```
src/views/home/
├── home.route.ts    # Route key + slugs per language
├── home.i18n.ts     # Translations (leaf nodes: { de: "...", en: "..." })
└── home.page.astro  # Page component (receives { lang, t } props)
```

Views are auto-discovered via `import.meta.glob()` in `src/lib/registry.ts`. The router at `src/pages/[...slug]/index.astro` renders them.

**Page components do NOT wrap in a layout** — `src/layouts/Layout.astro` handles that.

### Routing

- Default language: **German** (no URL prefix)
- English gets `/en/` prefix
- Route slugs are German for DE and English for EN:

| Route Key | DE (default) | EN |
|-----------|-------------|-----|
| home | `/` | `/en` |
| services | `/leistungen` | `/en/services` |
| projects | `/projekte` | `/en/projects` |
| blog | `/blog` | `/en/blog` |
| contact | `/kontakt` | `/en/contact` |
| about | `/ueber-mich` | `/en/about` |
| imprint | `/impressum` | `/en/imprint` |
| privacy | `/datenschutz` | `/en/privacy` |

### Key Files

| File | Purpose |
|------|---------|
| `src/data/config.ts` | Central config: pricing, contact, legal data |
| `src/lib/i18n.ts` | Language setup, `resolveTranslations` |
| `src/lib/registry.ts` | View auto-discovery, `getTranslatedPath`, `getView` |
| `src/lib/navbar.ts` | Navigation tree + resolver |
| `src/lib/shared.i18n.ts` | Shared translations (categories, footer, common) |
| `src/lib/posts.ts` | Blog content collection helpers |
| `src/content/config.ts` | Zod schema for blog posts |

### Blog System

Blog posts in `src/content/blog/{post-slug}/{lang}.md` (e.g. `gitops-with-argocd/de.md`). Categories and individual posts are handled as dynamic routes in the main router, not as views.

### Components

| Component | Location |
|-----------|----------|
| Layout | `src/layouts/Layout.astro` |
| Header | `src/components/Header.astro` |
| Footer | `src/components/Footer.astro` |
| PostCard | `src/components/PostCard.astro` |
| PostPage | `src/components/PostPage.astro` |
| CategoryPage | `src/components/CategoryPage.astro` |
| CategoryBadge | `src/components/CategoryBadge.astro` |
| BrowserMockup | `src/components/BrowserMockup.astro` |

### Translation Pattern

Translations use `{ de: "...", en: "..." }` at leaf nodes. The `resolveTranslations()` function flattens them based on the current language:

```typescript
// In i18n file:
export const translations = {
  hero: { title: { de: "Dein MVP.", en: "Your MVP." } }
};

// In page component (already resolved):
const { t } = Astro.props;
t.hero.title // → "Dein MVP." (for de) or "Your MVP." (for en)
```

### Icons

Uses `astro-icon` with `@iconify-json/lucide` and `@iconify-json/mdi`. Never use inline SVGs.

```astro
import { Icon } from 'astro-icon/components';
<Icon name="lucide:arrow-right" class="w-4 h-4" />
<Icon name="mdi:whatsapp" class="w-4 h-4" />
```

### Styling

- Tailwind CSS v4 with `@theme` for custom colors/fonts
- Fonts: Syne (display), Outfit (body), IBM Plex Mono (code) — self-hosted via `@fontsource`
- Primary: `#4f6ef5` (blue-indigo from logo), Secondary: `#7c5cf6` (violet from logo)
- Light theme only. No dark mode.

### Config

All business data in `src/data/config.ts`: name, company, email, phone, WhatsApp, social links, pricing (per language), MVP duration, stats, legal address. Update this file to change any business info across the entire site.
