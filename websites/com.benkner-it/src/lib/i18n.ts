export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const categories = ['devops', 'web', 'ai', 'tooling', 'thoughts'] as const;
export type Category = (typeof categories)[number];

interface TranslationSet {
  site: { title: string; description: string };
  nav: { blog: string; about: string };
  categories: Record<Category, string>;
  home: { headline: string; viewAll: string };
  blog: { headline: string };
  about: { headline: string };
  post: { backTo: string };
  notFound: string;
}

const translations = {
  en: {
    site: {
      title: 'Tobias Benkner',
      description: 'DevOps, Web Development & AI – thoughts from the terminal.',
    },
    nav: {
      blog: 'Blog',
      about: 'About',
    },
    categories: {
      devops: 'DevOps',
      web: 'Web Development',
      ai: 'Artificial Intelligence',
      tooling: 'Tooling',
      thoughts: 'Thoughts',
    },
    home: {
      headline: 'Latest Posts',
      viewAll: 'View all posts',
    },
    blog: {
      headline: 'All Posts',
    },
    about: {
      headline: 'About',
    },
    post: {
      backTo: 'Back to',
    },
    notFound: 'No posts in this category yet.',
  },
  de: {
    site: {
      title: 'Tobias Benkner',
      description: 'DevOps, Webentwicklung & KI – Gedanken aus dem Terminal.',
    },
    nav: {
      blog: 'Blog',
      about: 'Über mich',
    },
    categories: {
      devops: 'DevOps',
      web: 'Webentwicklung',
      ai: 'Künstliche Intelligenz',
      tooling: 'Tooling',
      thoughts: 'Gedanken',
    },
    home: {
      headline: 'Neueste Beiträge',
      viewAll: 'Alle Beiträge anzeigen',
    },
    blog: {
      headline: 'Alle Beiträge',
    },
    about: {
      headline: 'Über mich',
    },
    post: {
      backTo: 'Zurück zu',
    },
    notFound: 'Noch keine Beiträge in dieser Kategorie.',
  },
} satisfies Record<Locale, TranslationSet>;

export function t(lang: Locale): TranslationSet {
  return translations[lang];
}

export function parsePostId(id: string): { slug: string; lang: Locale } {
  const lastSlash = id.lastIndexOf('/');
  const lang = id.slice(lastSlash + 1) as Locale;
  const slug = id.slice(0, lastSlash);
  return { slug, lang };
}

export function getAlternateUrl(currentPath: string, targetLang: Locale): string {
  const isGerman =
    currentPath === '/de' ||
    currentPath === '/de/' ||
    currentPath.startsWith('/de/');

  if (targetLang === 'de') {
    if (isGerman) return currentPath;
    if (currentPath === '/') return '/de/';
    return `/de${currentPath}`;
  }

  if (!isGerman) return currentPath;
  const stripped = currentPath.replace(/^\/de\/?/, '/');
  return stripped || '/';
}

export function localePath(path: string, lang: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  if (clean === '/') return `/${lang}/`;
  return `/${lang}${clean}`;
}
