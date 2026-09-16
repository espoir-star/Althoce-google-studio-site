'use client';

import { useState, type ReactNode } from 'react';
import b from '@/components/brand/Brand.module.css';
import s from './Resources.module.css';

type Group = { id: string; title: string; count: number };

export default function GuideLibrary({ groups, children }: { groups: Group[]; children: ReactNode[] }) {
  const [selected, setSelected] = useState('all');
  const count = groups.filter(g => selected === 'all' || g.id === selected).reduce((total, g) => total + g.count, 0);
  return <>
    <div className={`${b.container} ${s.filters}`}>
      <div className={s.categories} role="group" aria-label="Filtrer les guides par secteur">
        {[{id:'all',title:'Tous les guides'}, ...groups].map(g => <button type="button" key={g.id} aria-pressed={selected === g.id} aria-controls="guide-results" onClick={() => setSelected(g.id)}>{g.title}</button>)}
      </div>
      <p className={s.resultCount} role="status">{count} guide{count > 1 ? 's' : ''} disponible{count > 1 ? 's' : ''}</p>
    </div>
    <div id="guide-results">{groups.map((g, i) => <div key={g.id} hidden={selected !== 'all' && selected !== g.id}>{children[i]}</div>)}</div>
  </>;
}
