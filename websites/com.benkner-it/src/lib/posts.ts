import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { languages, defaultLang, type Language } from './i18n';

function parsePostId(id: string): { slug: string; lang: Language } {
  const lastSlash = id.lastIndexOf('/');
  const lang = id.slice(lastSlash + 1) as Language;
  const slug = id.slice(0, lastSlash);
  return { slug, lang };
}

export async function getPostsByLang(lang: Language) {
  const allPosts = await getCollection('blog');
  return allPosts
    .filter((post) => {
      const { lang: postLang } = parsePostId(post.id);
      return postLang === lang && !post.data.draft;
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPostsByCategory(lang: Language, category: string) {
  const posts = await getPostsByLang(lang);
  return posts.filter((post) => post.data.category === category);
}

export async function getAlternatePostUrl(
  post: CollectionEntry<'blog'>,
): Promise<string | undefined> {
  const { slug: folderId, lang } = parsePostId(post.id);
  const alternateLang = lang === 'de' ? 'en' : 'de';
  const allPosts = await getCollection('blog');
  const alternate = allPosts.find((p) => {
    const parsed = parsePostId(p.id);
    return parsed.slug === folderId && parsed.lang === alternateLang;
  });
  if (!alternate) return undefined;

  const isDefaultLang = alternateLang === defaultLang;
  const prefix = isDefaultLang ? '' : `/${alternateLang}`;
  return `${prefix}/blog/${alternate.data.category}/${alternate.data.permalink}`;
}

export function getPostUrl(post: CollectionEntry<'blog'>, lang: Language): string {
  const isDefaultLang = lang === defaultLang;
  const prefix = isDefaultLang ? '' : `/${lang}`;
  return `${prefix}/blog/${post.data.category}/${post.data.permalink}`;
}

export function getCategoryUrl(category: string, lang: Language): string {
  const isDefaultLang = lang === defaultLang;
  const prefix = isDefaultLang ? '' : `/${lang}`;
  return `${prefix}/blog/${category}`;
}

export function formatDate(date: Date, lang: Language): string {
  return date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const categories = ['devops', 'web', 'ai', 'tooling', 'thoughts'] as const;
export type Category = (typeof categories)[number];
