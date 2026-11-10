import { ArrowUpRight } from 'lucide-react';
import { sectorStories } from '@/lib/sectors-content';
import { metierStories } from '@/lib/metiers-content';
import s from './Expertise.module.css';
export default function RelatedExpertise({
  type,
  slugs,
}: {
  type: 'sectors' | 'metiers';
  slugs: string[];
}) {
  const links = slugs.flatMap((slug) => {
    if (type === 'sectors') {
      const d = sectorStories.find((x) => x.slug === slug);
      return d ? [{ name: d.name, text: d.promise, href: `/secteurs/${slug}/` }] : [];
    }
    const d = metierStories.find((x) => x.slug === slug);
    return d ? [{ name: d.dossier.label, text: d.dossier.focus, href: `/agent-ia/${slug}/` }] : [];
  });
  return (
    <nav
      className={s.related}
      aria-label={
        type === 'sectors' ? 'Contextes sectoriels associés' : 'Processus métiers associés'
      }
    >
      {links.map((x) => (
        <a href={x.href} key={x.href}>
          <div>
            <strong>{x.name}</strong>
            <p>{x.text}</p>
          </div>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
