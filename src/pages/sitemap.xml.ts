import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
export const GET: APIRoute = async () => {
  const pages = ['/', '/agentes/', '/casos-de-uso/', '/planes/', '/contacto/', '/demo/', '/roadmap/', '/blog/', '/nutriabot/'];
  const articles = await getCollection('articles', entry => entry.data.status === 'published');
  const urls = [...pages, ...articles.map(entry => `/blog/${entry.id}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(path => `<url><loc>${new URL(path, 'https://ainutria.com').href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
