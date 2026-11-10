'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, CheckCheck, FileStack, FileText, Layers3, MessageSquare, Plug, Users } from 'lucide-react';
import type { CentraleUseCase } from '@/lib/centrale-content';
import s from './CentraleUseCases.module.css';

const icons = [FileStack, Users, MessageSquare, Layers3];

export default function CentraleUseCases({ cases, contactHref }: { cases: CentraleUseCase[]; contactHref: string }) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % cases.length; break;
      case 'ArrowLeft': next = (index + cases.length - 1) % cases.length; break;
      case 'Home': next = 0; break;
      case 'End': next = cases.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }

  return <div className={s.examples}>
    <div className={s.tabs} role="tablist" aria-label="Exemples de missions sur mesure">
      {cases.map((item, index) => {
        const Icon = icons[index];
        return <button
          key={item.slug}
          ref={element => { buttons.current[index] = element; }}
          type="button"
          role="tab"
          id={`${id}-tab-${item.slug}`}
          aria-controls={`${id}-panel-${item.slug}`}
          aria-selected={active === index}
          tabIndex={active === index ? 0 : -1}
          onClick={() => setActive(index)}
          onKeyDown={event => navigate(event, index)}
        ><Icon size={21} aria-hidden="true" /><span>{item.title}</span></button>;
      })}
    </div>

    {/* Toutes les missions sont présentes dans le HTML serveur. */}
    {cases.map((item, index) => <div
      key={item.slug}
      id={`${id}-panel-${item.slug}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-${item.slug}`}
      tabIndex={0}
      hidden={active !== index}
      className={s.panel}
    >
      <div className={s.copy}>
        <h3>{item.headline}</h3>
        <p>{item.description}</p>
        <div className={s.sources}><Plug size={20} aria-hidden="true" /><div><strong>À partir de vos outils</strong><p>{item.sources}</p></div></div>
      </div>

      <figure className={s.scenario}>
        <figcaption><span>Exemple de mission</span><strong>{item.mission}</strong></figcaption>
        <div className={s.work}>
          <p className={s.workLabel}>Ce que l’agent prépare</p>
          <ul>{item.outputs.map(output => <li key={output}><FileText size={18} aria-hidden="true" /><span>{output}</span></li>)}</ul>
        </div>
        <div className={s.validation}><CheckCheck size={22} aria-hidden="true" /><div><strong>La décision reste humaine</strong><p>{item.validation}</p></div></div>
      </figure>
    </div>)}

    <div className={s.footer}><p>Des exemples pour vous projeter. Vos agents seront conçus autour de vos besoins.</p><a href={contactHref}>Parlons de votre usage<ArrowUpRight size={17} aria-hidden="true" /></a></div>
  </div>;
}
