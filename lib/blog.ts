import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export type BlogCategory = "Cas d'usage" | 'Guide pratique' | 'Décryptage' | 'Coulisses';

export interface BlogPost {
  title: string;
  date: string;
  category: BlogCategory;
  excerpt: string;
  readingTime: string;
  slug: string;
  published: boolean;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith('.md') || file.startsWith('_')) continue;
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    if (!data.published) continue;

    posts.push({
      title: data.title ?? '',
      date: data.date ?? '',
      category: (data.category as BlogCategory) ?? "Cas d'usage",
      excerpt: data.excerpt ?? '',
      readingTime: data.readingTime ?? '5 min',
      slug: data.slug ?? '',
      published: true,
      content: marked(content) as string,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find(p => p.slug === slug) ?? null;
}
