import { ArrowDown, ArrowUpRight, CheckCheck, Layers3, Plug, Server } from 'lucide-react';
import { centrale } from '@/lib/centrale-content';
import { centraleLinks, type CentraleLinkContext } from '@/lib/centrale-links';
import b from '@/components/brand/Brand.module.css';
import s from './CentraleDiscovery.module.css';

type Props = {
  context: CentraleLinkContext;
  featured?: boolean;
  inset?: boolean;
};

/** Un seul encart par page. Le format compact prolonge le sujet sans ajouter une offre. */
export default function CentraleDiscovery({ context, featured = false, inset = false }: Props) {
  const copy = centraleLinks[context];
  return <section id="decouvrir-la-centrale" className={`${s.section} ${inset ? s.inset : ''}`} aria-labelledby="decouvrir-la-centrale-title">
    <div className={inset ? undefined : b.container}>
      <div className={`${s.card} ${featured ? s.featured : s.compact}`}>
        <div className={s.copy}>
          <p className={s.signature}><Layers3 size={20} aria-hidden="true" />La Centrale <span>by Althoce</span></p>
          <h2 id="decouvrir-la-centrale-title">{copy.title}</h2>
          <p className={s.description}>{copy.description}</p>
          {featured && <a href={centrale.path} className={`${b.primary} ${s.button}`}>Découvrir La Centrale<ArrowUpRight size={18} aria-hidden="true" /></a>}
        </div>
        {featured ? <figure className={s.visual}>
          <div className={s.source}><Plug size={20} aria-hidden="true" /><span>Vos outils et données autorisés</span></div>
          <ArrowDown size={22} className={s.arrow} aria-hidden="true" />
          <div className={s.platform}><Layers3 size={28} strokeWidth={1.5} aria-hidden="true" /><div><strong>La Centrale</strong><span>Vos agents IA sur mesure</span></div></div>
          <ArrowDown size={22} className={s.arrow} aria-hidden="true" />
          <div className={s.team}><CheckCheck size={22} aria-hidden="true" /><div><strong>Vos équipes valident</strong><span>La décision reste humaine.</span></div></div>
          <figcaption><Server size={17} aria-hidden="true" />En France ou sur vos serveurs</figcaption>
        </figure> : <a href={centrale.path} className={s.link}>Découvrir La Centrale<ArrowUpRight size={20} aria-hidden="true" /></a>}
      </div>
    </div>
  </section>;
}
