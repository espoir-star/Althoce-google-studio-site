import GithubSlugger from 'github-slugger';

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Extrait les H2 et H3 du markdown brut pour construire le sommaire.
 * Utilise github-slugger (même algo que rehype-slug + addHeadingIds dans lib/blog.ts)
 * pour garantir que les ancres correspondent aux IDs générés dans le HTML.
 */
export function extractToc(markdownContent: string): TocItem[] {
  const slugger = new GithubSlugger();
  const toc: TocItem[] = [];
  const lines = markdownContent.split('\n');

  for (const line of lines) {
    // H3 avant H2 pour éviter que "### " soit capturé par le pattern H2
    const h3 = line.match(/^### (.+)$/);
    if (h3) {
      const text = h3[1].trim();
      toc.push({ id: slugger.slug(text), text, level: 3 });
      continue;
    }
    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      const text = h2[1].trim();
      toc.push({ id: slugger.slug(text), text, level: 2 });
    }
  }

  return toc;
}
