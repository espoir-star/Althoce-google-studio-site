'use client';

import { useState } from 'react';
import { ArrowUpRight, Building2, ChevronDown, Workflow } from 'lucide-react';
import { usePathname } from 'next/navigation';
import s from './SolutionsMenu.module.css';
import { sectorNavigation, metierNavigation } from '@/lib/solutions-navigation';

const solutionGroups = [
  {
    id: 'secteurs',
    label: 'Secteurs',
    description: 'Vos enjeux, vos exigences métier.',
    icon: Building2,
    href: '/secteurs/',
    all: 'Tous les secteurs',
    links: sectorNavigation,
  },
  {
    id: 'metiers',
    label: 'Métiers',
    description: 'Les usages de vos équipes, au quotidien.',
    icon: Workflow,
    href: '/agent-ia/',
    all: 'Tous les métiers',
    links: metierNavigation,
  },
];

function SolutionLinks({ group, onNavigate }: { group: typeof solutionGroups[number]; onNavigate: () => void }) {
  const pathname = usePathname();
  const isCurrent = (href: string) => pathname?.replace(/\/$/, '') === href.replace(/\/$/, '');

  return <>
    <ul className={s.links}>
      {group.links.map(link => <li key={link.href}>
        <a href={link.href} onClick={onNavigate} aria-current={isCurrent(link.href) ? 'page' : undefined}>
          <span>{link.label}</span><ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </li>)}
    </ul>
    <a className={s.all} href={group.href} onClick={onNavigate} aria-current={isCurrent(group.href) ? 'page' : undefined}>
      {group.all}<ArrowUpRight size={16} aria-hidden="true" />
    </a>
  </>;
}

export function SolutionsMenu({ onNavigate }: { onNavigate: () => void }) {
  return <div className={s.columns}>
    {solutionGroups.map(group => <div className={s.column} key={group.id}>
      <div className={s.heading}>
        <span className={s.icon}><group.icon size={21} aria-hidden="true" /></span>
        <div><p>{group.label}</p><small>{group.description}</small></div>
      </div>
      <SolutionLinks group={group} onNavigate={onNavigate} />
    </div>)}
  </div>;
}

export function MobileSolutionsMenu({ onNavigate }: { onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return <div className={s.mobile}>
    {solutionGroups.map(group => <div className={s.mobileGroup} key={group.id}>
      <button type="button" className={s.mobileTrigger} aria-expanded={expanded === group.id} aria-controls={`mobile-solutions-${group.id}`} onClick={() => setExpanded(expanded === group.id ? null : group.id)}>
        <group.icon size={19} aria-hidden="true" /><span>{group.label}</span><ChevronDown size={16} aria-hidden="true" />
      </button>
      {expanded === group.id && <div id={`mobile-solutions-${group.id}`} className={s.mobileLinks}>
        <SolutionLinks group={group} onNavigate={onNavigate} />
      </div>}
    </div>)}
  </div>;
}
