import fs from 'fs';
import path from 'path';
import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://althoce.com';
const APP_DIR = path.join(process.cwd(), 'app');

// Routes à exclure du scan automatique
const EXCLUDED = new Set([
  '_not-found',
  'api',
  'sitemap',
  'robots',
]);

function getPriority(route: string): number {
  if (route === '')                                    return 1.0;
  if (/^(services|calculateur-roi)/.test(route))      return 0.8;
  if (/^(blog|agences|agent-ia|cas-clients|agence-ia)/.test(route)) return 0.7;
  if (/^(contact|a-propos)/.test(route))              return 0.6;
  if (/^(mentions-legales|confidentialite)/.test(route)) return 0.3;
  return 0.5;
}

function getChangeFreq(route: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (route === '')                       return 'weekly';
  if (route.startsWith('blog'))           return 'weekly';
  if (route.startsWith('services'))       return 'monthly';
  return 'monthly';
}

// Scanne récursivement app/ et retourne les routes des page.tsx
function scanAppRoutes(dir: string, base = ''): string[] {
  const routes: string[] = [];
  let entries: fs.Dirent[];

  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return routes;
  }

  const hasPage = entries.some(e => e.isFile() && e.name === 'page.tsx');
  if (hasPage && !EXCLUDED.has(base.split('/')[0])) {
    routes.push(base);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    // Exclure dossiers spéciaux Next.js et API
    if (
      entry.name.startsWith('_') ||
      entry.name.startsWith('(') ||
      EXCLUDED.has(entry.name)
    ) continue;

    // Ignorer les routes dynamiques [slug] — gérées séparément
    if (entry.name.startsWith('[')) continue;

    const childBase = base ? `${base}/${entry.name}` : entry.name;
    routes.push(...scanAppRoutes(path.join(dir, entry.name), childBase));
  }

  return routes;
}

// Construit une URL canonique avec trailing slash (sauf pour la home, qui
// reste https://althoce.com/). Aligné sur next.config.ts (trailingSlash:
// true) et sur les `metadata.alternates.canonical` de chaque page.
function buildCanonicalUrl(route: string): string {
  if (route === '') return `${BASE_URL}/`;
  return `${BASE_URL}/${route}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // 1. Routes statiques scannées automatiquement depuis app/
  const staticRoutes = scanAppRoutes(APP_DIR).map(route => ({
    url: buildCanonicalUrl(route),
    lastModified: now,
    changeFrequency: getChangeFreq(route),
    priority: getPriority(route),
  }));

  // 2. Articles de blog (published uniquement)
  const blogRoutes = getAllPosts().map(post => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
