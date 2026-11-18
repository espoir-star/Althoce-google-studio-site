/**
 * Repères sectoriels du test de maturité IA, repris des pages /secteurs/ : une seule source pour les exemples,
 * les limites, les guides et les cas clients. Utilisés par la page du test et par le PDF envoyé par email.
 */
import { SECTOR_OPTIONS } from './questions';
import { sectorStories } from '../sectors-content';
import { guides, guideUrl } from '../resources';

export type SectorNote = {
  name: string; href: string; boundaries: string;
  examples: { title: string; output: string; review: string }[];
  guides: { title: string; href: string }[];
  caseStudy?: { label: string; href: string };
};

export const sectorNotes: Record<string, SectorNote> = Object.fromEntries(SECTOR_OPTIONS.flatMap(option => {
  const story = sectorStories.find(item => item.slug === option.slug);
  if (!story) return [];
  const note: SectorNote = {
    name: option.name, href: `/secteurs/${story.slug}/`, boundaries: story.boundaries,
    examples: story.scenarios.slice(0, 3).map(({ title, output, review }) => ({ title, output, review })),
    guides: story.guides.flatMap(slug => { const guide = guides.find(item => item.slug === slug); return guide ? [{ title: guide.title, href: guideUrl(slug) }] : []; }).slice(0, 2),
    ...(story.caseSlug && story.caseLabel ? { caseStudy: { label: story.caseLabel, href: `/cas-clients/${story.caseSlug}/` } } : {}),
  };
  return [[option.slug, note]];
}));
