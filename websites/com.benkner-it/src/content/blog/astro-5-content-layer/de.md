---
title: "Einen typsicheren Blog mit Astro 5 bauen"
permalink: typsicherer-blog-mit-astro-5
date: 2026-01-20
description: "Wie die Content Layer API von Astro 5 volle Typsicherheit für content-getriebene Seiten bringt — von Schema-Validierung bis zum Rendering."
category: web
cover: ./cover.png
---

Astro 5 hat eines der praktischsten Features geliefert, die ich in einem Meta-Framework gesehen habe: die **Content Layer API**. Sie ersetzt die alten Content Collections durch einen flexibleren, Loader-basierten Ansatz — und ist von Haus aus voll typsicher.

## Eine Collection definieren

Content Collections beginnen mit einem Schema. Man definiert das Frontmatter-Format mit Zod, und Astro validiert jede Datei zur Build-Zeit:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    category: z.enum(['devops', 'web', 'ai']),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
```

Der `glob`-Loader scannt nach Markdown-Dateien und generiert typisierte Einträge. Wenn ein Post einen fehlenden Titel oder eine ungültige Kategorie hat, gibt es einen Build-Fehler — keine kaputte Seite in der Produktion.

## Content abfragen

Posts abzurufen ist direkt:

```typescript
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');

// Volle Typ-Inferenz — post.data.title ist string, post.data.date ist Date
const published = posts
  .filter((post) => !post.data.draft)
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
```

Keine `as`-Casts oder manuelle Typ-Assertions nötig. Die Typen fließen direkt aus dem Zod-Schema.

## Posts rendern

Das Rendering hat sich von `entry.render()` zu einer eigenständigen Funktion gewandelt:

```typescript
import { render } from 'astro:content';

const { Content } = await render(post);
```

Dann im Template:

```astro
<div class="prose">
  <Content />
</div>
```

## Mehrsprachiger Content

Ein Pattern, das ich nutze, ist die Organisation von Übersetzungen als Geschwister-Dateien in einem Ordner:

```
src/content/blog/
├── my-first-post/
│   ├── en.md
│   └── de.md
└── another-post/
    ├── en.md
    └── de.md
```

Der Glob-Loader gibt jedem Eintrag eine `id` wie `my-first-post/en`, die man parsen kann, um Slug und Sprache zu extrahieren:

```typescript
function parsePostId(id: string) {
  const lastSlash = id.lastIndexOf('/');
  return {
    slug: id.slice(0, lastSlash),
    lang: id.slice(lastSlash + 1),
  };
}
```

Posts nach Sprache zu filtern wird dann zum Einzeiler:

```typescript
const enPosts = posts.filter((p) => parsePostId(p.id).lang === 'en');
```

## Warum das wichtig ist

Die alten Astro Content Collections funktionierten, hatten aber Schwächen bei der Typisierung und erforderten spezifische Verzeichniskonventionen. Die Content Layer API ist expliziter — man wählt den Loader, definiert das Schema, und die Typen folgen natürlich.

Kombiniert mit Astros eingebautem Shiki-Syntax-Highlighting und statischem Output bekommt man einen Blog, der schnell, typsicher und leicht zu pflegen ist. Keine Runtime, kein JavaScript, das für Content-Seiten an den Client ausgeliefert wird. Einfach HTML.
