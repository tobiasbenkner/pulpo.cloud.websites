import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Blog', en: 'Blog' },
  seo: {
    title: { de: 'Blog', en: 'Blog' },
    description: {
      de: 'Artikel über DevOps, Webentwicklung, KI und mehr.',
      en: 'Articles about DevOps, web development, AI, and more.',
    },
  },
  headline: { de: 'Alle Beiträge', en: 'All Posts' },
};

export type BlogTranslations = FlattenTranslation<typeof translations>;
