import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { parsePostId, localePath } from './i18n';
import type { Locale, Category } from './i18n';

export async function getPostsByLang(lang: Locale) {
  const allPosts = await getCollection('blog');
  return allPosts
    .filter((post) => {
      const { lang: postLang } = parsePostId(post.id);
      return postLang === lang && !post.data.draft;
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPostsByCategory(lang: Locale, category: Category) {
  const posts = await getPostsByLang(lang);
  return posts.filter((post) => post.data.category === category);
}

export async function getAlternatePostUrl(
  post: CollectionEntry<'blog'>,
): Promise<string | undefined> {
  const { slug: folderId, lang } = parsePostId(post.id);
  const alternateLang = lang === 'en' ? 'de' : 'en';
  const allPosts = await getCollection('blog');
  const alternate = allPosts.find((p) => {
    const parsed = parsePostId(p.id);
    return parsed.slug === folderId && parsed.lang === alternateLang;
  });
  if (!alternate) return undefined;
  return localePath(
    `/${alternate.data.category}/${alternate.data.permalink}`,
    alternateLang,
  );
}

export function formatDate(date: Date, lang: Locale): string {
  return date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
