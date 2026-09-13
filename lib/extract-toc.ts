export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Use the rendered headings as the single source of truth for the TOC.
 * This preserves IDs for inline formatting, repeated titles and entities,
 * and excludes Markdown heading examples inside fenced code blocks.
 */
export function extractToc(renderedHtml: string): TocItem[] {
  const decode = (text: string) => text.replace(
    /&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi,
    (entity, value: string) => {
      if (value[0] === '#') {
        const code = value[1].toLowerCase() === 'x' ? parseInt(value.slice(2), 16) : parseInt(value.slice(1), 10);
        return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
      }
      return ({ amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' } as Record<string, string>)[value.toLowerCase()] ?? entity;
    }
  );
  return Array.from(renderedHtml.matchAll(/<h([23])\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g), match => ({
    id: decode(match[2]),
    text: decode(match[3].replace(/<[^>]*>/g, '')).trim(),
    level: Number(match[1]) as 2 | 3,
  }));
}
