import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

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
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const now = new Date();
  const files = fs.readdirSync(BLOG_DIR);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith('.md') || file.startsWith('_')) continue;
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data, content } = matter(raw);

    // Articles explicitement cachés (rétrocompatibilité field `published`)
    if (data.published === false) continue;

    // Articles avec date de publication future
    if (data.publishedAt && new Date(data.publishedAt) > now) continue;

    const readingTimeRaw = data.readingTime;
    const readingTime =
      typeof readingTimeRaw === 'number'
        ? `${readingTimeRaw} min`
        : (readingTimeRaw ?? '5 min');

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
      content: marked(content) as string,
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
