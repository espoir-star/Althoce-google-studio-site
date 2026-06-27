import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import GithubSlugger from 'github-slugger';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export type BlogCategory = "Cas d'usage" | 'Guide pratique' | 'Décryptage' | 'Coulisses' | 'Finance' | 'Local';

export interface BlogPost {
  title: string;
  date: string;
  publishedAt?: string;
  category: BlogCategory | string;
  excerpt: string;
  readingTime: string;
  slug: string;
  published: boolean;
  image?: string;
  imageAlt?: string;
  rawContent: string;
  content: string;
}

/**
 * Post-processing du HTML marqué : ajoute id="..." sur les <h2> et <h3>
 * en utilisant github-slugger pour garantir l'alignement avec extract-toc.ts.
 */
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&apos;/g, "'");
}

function addHeadingIds(html: string, slugger: GithubSlugger): string {
  // marked génère les headings sur une ligne unique (<h2>text</h2>\n)
  return html.replace(
    /<h([23])>([^\n]*?)<\/h[23]>/g,
    (_, depth, inner) => {
      const plainText = decodeHtmlEntities(inner.replace(/<[^>]+>/g, '')).trim();
      const id = slugger.slug(plainText);
      return `<h${depth} id="${id}">${inner}</h${depth}>`;
    }
  );
}

export function getAllPosts(): BlogPost[] {
  const now = new Date();
  const files = fs.readdirSync(BLOG_DIR);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith('.md') || file.startsWith('_')) continue;
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data, content: rawContent } = matter(raw);

    // Articles explicitement cachés (rétrocompatibilité field `published`)
    if (data.published === false) continue;

    // Articles avec date de publication future
    if (data.publishedAt && new Date(data.publishedAt) > now) continue;

    const readingTimeRaw = data.readingTime;
    const readingTime =
      typeof readingTimeRaw === 'number'
        ? `${readingTimeRaw} min`
        : (readingTimeRaw ?? '5 min');

    const slugger = new GithubSlugger();
    const htmlRaw = marked(rawContent) as string;
    const htmlWithIds = addHeadingIds(htmlRaw, slugger);

    posts.push({
      title: data.title ?? '',
      date: data.date ?? data.publishedAt ?? '',
      publishedAt: data.publishedAt ?? data.date ?? undefined,
      category: (data.category as BlogCategory) ?? "Cas d'usage",
      excerpt: data.excerpt ?? data.description ?? '',
      readingTime,
      slug: data.slug ?? '',
      published: true,
      image: data.image ?? undefined,
      imageAlt: data.imageAlt ?? undefined,
      rawContent,
      content: htmlWithIds,
    });
  }

  return posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt ?? a.date ?? 0).getTime();
    const dateB = new Date(b.publishedAt ?? b.date ?? 0).getTime();
    return dateB - dateA;
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  // getAllPosts() filtre déjà les articles futurs et cachés
  return getAllPosts().find(p => p.slug === slug) ?? null;
}
