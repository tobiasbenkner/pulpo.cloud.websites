---
title: "Building a Type-Safe Blog with Astro 5"
permalink: type-safe-blog-with-astro-5
date: 2026-01-20
description: "How Astro 5's Content Layer API brings full type safety to your content-driven sites, from schema validation to rendering."
category: web
---

Astro 5 shipped with one of the most practical features I've seen in a meta-framework: the **Content Layer API**. It replaces the old content collections with a more flexible, loader-based approach — and it's fully type-safe out of the box.

## Defining a collection

Content collections start with a schema. You define what your frontmatter looks like using Zod, and Astro validates every file at build time:

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

The `glob` loader scans for Markdown files and generates typed entries. If a post has a missing title or an invalid category, you'll get a build error — not a broken page in production.

## Querying content

Fetching posts is straightforward:

```typescript
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');

// Full type inference — post.data.title is string, post.data.date is Date
const published = posts
  .filter((post) => !post.data.draft)
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
```

No need for `as` casts or manual type assertions. The types flow directly from your Zod schema.

## Rendering posts

Rendering has moved from `entry.render()` to a standalone function:

```typescript
import { render } from 'astro:content';

const { Content } = await render(post);
```

Then in your template:

```astro
<div class="prose">
  <Content />
</div>
```

## Multi-language content

One pattern I've been using is organizing translations as sibling files inside a folder:

```
src/content/blog/
├── my-first-post/
│   ├── en.md
│   └── de.md
└── another-post/
    ├── en.md
    └── de.md
```

The glob loader gives each entry an `id` like `my-first-post/en`, which you can parse to extract the slug and language:

```typescript
function parsePostId(id: string) {
  const lastSlash = id.lastIndexOf('/');
  return {
    slug: id.slice(0, lastSlash),
    lang: id.slice(lastSlash + 1),
  };
}
```

Filtering posts by language then becomes a one-liner:

```typescript
const enPosts = posts.filter((p) => parsePostId(p.id).lang === 'en');
```

## Why this matters

The old Astro content collections worked, but they had rough edges around typing and required specific directory conventions. The Content Layer API is more explicit — you choose the loader, you define the schema, and the types follow naturally.

Combined with Astro's built-in Shiki syntax highlighting and static output, you get a blog that's fast, type-safe, and easy to maintain. No runtime, no JavaScript shipped to the client for content pages. Just HTML.
