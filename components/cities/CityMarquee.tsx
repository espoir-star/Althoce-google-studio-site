'use client';

import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import s from '../HomePage.module.css';
import b from '../brand/Brand.module.css';

export default function CityMarquee({ cities }: { cities: { slug: string; name: string }[] }) {
  const [paused, setPaused] = useState(false);
  return <section style={{ padding: '32px 0', background: '#f6f8fb' }} aria-label="Althoce dans votre ville">
    <div className={b.container}>
      <div className={s.marqueeToolbar}>
        <p>Retrouvez Althoce dans votre ville.</p>
        <button type="button" aria-pressed={paused} aria-label={paused ? 'Reprendre le défilement des villes' : 'Mettre en pause le défilement des villes'} onClick={() => setPaused(!paused)}>
          {paused ? <Play size={14} aria-hidden="true"/> : <Pause size={14} aria-hidden="true"/>}{paused ? 'Reprendre' : 'Pause'}
        </button>
      </div>
      <div className={s.marqueeViewport}>
        <div className={s.marqueeTrack} style={{ animationDuration: '85s', animationPlayState: paused ? 'paused' : undefined }}>
          <nav className={s.marqueeGroup} aria-label="Accompagnement IA par ville">
            {cities.map(city => <a className={s.agentPill} key={city.slug} href={`/agence-ia-${city.slug}/`}>{city.name}</a>)}
          </nav>
          <div className={`${s.marqueeGroup} ${s.marqueeDuplicate}`} aria-hidden="true">
            {cities.map(city => <a className={s.agentPill} key={city.slug} href={`/agence-ia-${city.slug}/`} tabIndex={-1}>{city.name}</a>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
