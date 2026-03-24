import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      permalink: z.string(),
      date: z.date(),
      description: z.string(),
      category: z.enum(['devops', 'web', 'ai', 'tooling', 'thoughts']),
      cover: image().optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
