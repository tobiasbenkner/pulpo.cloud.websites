---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, views, or applications. Generates creative, polished code that avoids generic AI aesthetics.
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, Astro, Svelte) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## User Preferences & Hard Rules

These rules always apply. They override general design guidelines when there's a conflict.

### Light & Trustworthy Design
- **Default to light themes.** Dark designs can feel untrustworthy ("Abzocker-Seite") for professional/business sites. Only use dark themes when the user explicitly requests it.
- For business sites that handle important projects and money, prioritize **seriosität** (seriousness) and trust-building over flashy visuals.
- White/light backgrounds, clean borders, subtle shadows, rounded corners — professional and inviting.

### No CDN — Self-Host Everything
- **NEVER use Google Fonts CDN or any external font CDN.** Install fonts locally via `@fontsource` packages.
- Import font weights in CSS, not via `<link>` tags in HTML.

### Multi-Page, Not One-Page
- **No anchor links (#section) for navigation.** Every nav item must link to its own page/route.
- Build separate pages for each section (Services, Projects, Contact, etc.).
- The homepage serves as a hub with teaser cards that link to subpages.

### Navigation
- **Logo in the navbar** — always use the project's logo image, not just text initials.
- **Home link** in the navbar — don't rely solely on the logo being clickable.
- **Active state**: thin underline with gradient effect, NOT background boxes/pills. Animate on hover (scaleX from center).
- **Fullscreen mobile menu** — white overlay, centered links in large display font, logo + close button visible at the top in a header bar.

### Central Config File
- Always create a `src/data/config.ts` with all business data: name, company, domain, email, phone, WhatsApp, social links, pricing (per language), stats, legal info.
- Reference this config throughout i18n translations and components. Never hardcode business data.

### Icons
- **Use `astro-icon` with icon packs** (`@iconify-json/lucide`, `@iconify-json/mdi`, etc.) — never hand-draw inline SVGs.
- Use `mdi:whatsapp` for WhatsApp (not a generic message icon).
- Import: `import { Icon } from 'astro-icon/components';`

### Typography
- Keep hero text at reasonable sizes: `text-3xl sm:text-4xl md:text-5xl` maximum. No viewport-filling giant text.
- No section numbering (001, 002, etc.) — just clean labels.

### Visual Variety Between Sections
- **Vary background patterns** across sections — don't use the same one everywhere:
  - Dot grid (`radial-gradient` dots)
  - Cross grid (thin lines)
  - Diagonal lines (`repeating-linear-gradient`)
  - Gradient mesh (multiple `radial-gradient` blobs)
  - Plain white with subtle gradient glow
- **Add section dividers/transitions**: wave dividers (SVG), angle dividers (CSS diagonal), or gradient fades.
- Use subtle colored glow blobs (primary/secondary colors at very low opacity with large blur).

### Colors Derived From Branding
- Derive primary and secondary colors from the project's logo.
- Define both a **primary** and **secondary** color in the theme.
- Use gradient text (`bg-gradient-to-r bg-clip-text text-transparent`) for accent elements like prices and CTAs.

### Project Showcases
- Include **browser mockup placeholders** for projects — a frame with colored dots (red/yellow/green), a URL bar, and a gradient placeholder area.
- Show projects with image area so visitors can see them without clicking through.

### Legal Pages
- Always create Imprint (`/imprint`) and Privacy Policy (`/privacy`) pages.
- Pull legal data from the config file.
- Link them in the footer.

### Footer
- Multi-column layout: Brand + description, Navigation links, Contact info (with icons), Legal links.
- Include social links with proper icons.
- Copyright line with full year.

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables / Tailwind `@theme` for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for Svelte when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering (IntersectionObserver) and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, dot/cross grids, diagonal line patterns, layered transparencies, decorative borders, and section dividers.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between different fonts and different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

## Scroll-Driven Website Design Guidelines

When this skill is invoked for a scroll-driven animated website (used alongside `video-to-website`), follow these additional rules:

### Typography as Design
- Hero headings: **4-6rem**, tight line-height (0.9-1.0), heavy weight (700-800)
- Section headings: **2-3rem**, confident weight (600-700)
- Horizontal marquee text: **10-15vw**, uppercase, letterspaced
- Section labels: small (0.7rem), uppercase, letterspaced (0.15em+), muted color
- Text hierarchy replaces card containers. Size, weight, and color ARE the structure

### No Cards, No Boxes
- **NEVER** use glassmorphism cards, frosted glass, or visible containers around text on scroll-driven sites
- Text sits directly on the background — clean, confident, editorial
- Readability comes from: font weight (600+), text-shadow if needed, and ensuring video frames have clean backgrounds at text scroll points
- The only acceptable "container" is generous padding on the section itself

### Color Zones
- Background color must shift between sections (light → dark → accent → light)
- Define color zones in CSS variables: `--bg-light`, `--bg-dark`, `--bg-accent`
- Text color inverts automatically: `--text-on-light`, `--text-on-dark`
- Transitions happen via GSAP, not CSS transitions

### Layout Variety
Every scroll-driven page needs at least 3 different layout patterns:
1. **Centered** — hero sections, CTAs
2. **Left-aligned** — feature descriptions with product on right
3. **Right-aligned** — alternate features
4. **Full-width** — horizontal marquee text, stats rows
5. **Split** — text on one side, supporting visual on the other

Never use the same layout for consecutive sections.

### Animation Choreography
- Every section must use a DIFFERENT entrance animation (fade-up, slide-left, slide-right, scale-up, clip-path reveal)
- Elements within a section enter with staggered delays (0.08-0.12s between items)
- Sequence: label first → heading → body text → CTA/button
- At least one section must pin (stay fixed) while its contents animate internally
- At least one oversized text element must move horizontally on scroll

### Stats & Numbers
- Display stats at **3-4rem** font size
- Numbers MUST count up via GSAP (never appear statically)
- Use a suffix element for units (x, M, %, etc.) at a smaller size
- Labels below in small caps or uppercase muted text
