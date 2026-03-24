import type { APIRoute } from 'astro';
import { languages, defaultLang, type Language } from '@/lib/i18n';
import { routeSlugs, getTranslatedPath } from '@/lib/registry';
import { getPostsByLang, categories } from '@/lib/posts';

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function urlEntry(baseUrl: string, paths: Record<string, string>, priority: string, changefreq: string) {
  return Object.entries(paths)
    .map(([, path]) => {
      const loc = escapeXml(`${baseUrl}${path}`);
      const alternates = Object.entries(paths)
        .map(([aLang, aPath]) => `    <xhtml:link rel="alternate" hreflang="${aLang}" href="${escapeXml(`${baseUrl}${aPath}`)}"/>`)
        .join('\n');
      const xDefault = escapeXml(`${baseUrl}${paths[defaultLang]}`);
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}"/>
  </url>`;
    })
    .join('\n');
}

const priorityMap: Record<string, [string, string]> = {
  home: ['1.0', 'weekly'],
  services: ['0.9', 'monthly'],
  projects: ['0.9', 'monthly'],
  contact: ['0.8', 'monthly'],
  blog: ['0.8', 'weekly'],
  about: ['0.7', 'monthly'],
  imprint: ['0.3', 'yearly'],
  privacy: ['0.3', 'yearly'],
};

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://benkner-it.com';
  const urls: string[] = [];

  // View-based routes
  const allKeys = [...new Set([...Object.keys(routeSlugs), 'home'])];
  for (const key of allKeys) {
    const [priority, changefreq] = priorityMap[key] ?? ['0.5', 'monthly'];
    const paths: Record<string, string> = {};
    for (const lang of languages) paths[lang] = getTranslatedPath(key, lang);
    urls.push(urlEntry(baseUrl, paths, priority, changefreq));
  }

  // Category pages
  for (const cat of categories) {
    const paths: Record<string, string> = {};
    for (const lang of languages) {
      const isDefault = lang === defaultLang;
      paths[lang] = isDefault ? `/blog/${cat}` : `/${lang}/blog/${cat}`;
    }
    urls.push(urlEntry(baseUrl, paths, '0.6', 'weekly'));
  }

  // Blog posts
  for (const lang of languages) {
    const posts = await getPostsByLang(lang);
    const isDefault = lang === defaultLang;
    for (const post of posts) {
      const prefix = isDefault ? '' : `/${lang}`;
      const path = `${prefix}/blog/${post.data.category}/${post.data.permalink}`;
      urls.push(`  <url>
    <loc>${escapeXml(`${baseUrl}${path}`)}</loc>
    <lastmod>${post.data.date.toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
