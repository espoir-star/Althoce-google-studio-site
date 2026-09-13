'use client';

import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { agentTags } from '@/lib/data';
import s from './HomePage.module.css';

const visibleTags = agentTags.filter(item => item.href !== '/agent-ia/secteurs/');

export default function AgentMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className={s.marquee}>
      <div className={s.marqueeToolbar}>
        <p>Des usages concrets pour votre quotidien.</p>
        <button type="button" aria-label={paused ? 'Reprendre le défilement des agents' : 'Mettre en pause le défilement des agents'} aria-pressed={paused} onClick={() => setPaused(!paused)}>
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {paused ? 'Reprendre' : 'Pause'}
        </button>
      </div>
      <div className={s.marqueeViewport}>
        <div className={s.marqueeTrack} style={{ animationPlayState: paused ? 'paused' : undefined }}>
          <nav className={s.marqueeGroup} aria-label="Agents IA spécialisés">
            {visibleTags.map(item => <a className={s.agentPill} href={item.href} key={item.name}>{item.name}</a>)}
          </nav>
          <div className={`${s.marqueeGroup} ${s.marqueeDuplicate}`} aria-hidden="true">
            {visibleTags.map(item => <a className={s.agentPill} href={item.href} tabIndex={-1} key={item.name}>{item.name}</a>)}
          </div>
        </div>
      </div>
    </div>
  );
}
