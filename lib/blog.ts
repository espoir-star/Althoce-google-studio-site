import { marked } from 'marked';

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

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    data[key] = val;
  }

  return { data, body: match[2] };
}

const mdModules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: false });

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const [filePath, loader] of Object.entries(mdModules)) {
    if (filePath.includes('_template')) continue;
    const raw = (await loader()) as string;
    const { data, body } = parseFrontmatter(raw);
    if (data.published !== 'true') continue;

    posts.push({
      title: data.title ?? '',
      date: data.date ?? '',
      category: (data.category as BlogCategory) ?? "Cas d'usage",
      excerpt: data.excerpt ?? '',
      readingTime: data.readingTime ?? '5 min',
      slug: data.slug ?? '',
      published: true,
      content: marked(body) as string,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(p => p.slug === slug) ?? null;
}
