'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import { steps, securityItems } from '@/lib/data';

const AC = '#2563eb';

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── SVG illustrations ─────────────────────────────────────── */
function SvgShield() {
  return (
    <svg viewBox="0 0 72 72" fill="none" width="64" height="64" aria-hidden="true">
      <defs>
        <linearGradient id="shFill" x1="36" y1="6" x2="36" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.03"/>
        </linearGradient>
      </defs>
      <path d="M36 6 L60 17 L60 40 C60 54 36 66 36 66 C36 66 12 54 12 40 L12 17 Z" stroke="#2563eb" strokeWidth="1.5" fill="url(#shFill)" strokeLinejoin="round"/>
      <rect x="24" y="28" width="24" height="5" rx="2" fill="#2563eb" fillOpacity="0.18"/>
      <rect x="24" y="36" width="24" height="5" rx="2" fill="#2563eb" fillOpacity="0.38"/>
      <rect x="24" y="44" width="24" height="5" rx="2" fill="#2563eb" fillOpacity="0.62"/>
      <circle cx="44" cy="30.5" r="1.8" fill="#22c55e"/>
      <circle cx="44" cy="38.5" r="1.8" fill="#22c55e"/>
      <circle cx="44" cy="46.5" r="1.8" fill="#22c55e"/>
      <circle cx="36" cy="18" r="5" fill="#2563eb" fillOpacity="0.14" stroke="#2563eb" strokeWidth="1.3"/>
      <path d="M33.5 18 L35.3 20.2 L39 15.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function SvgNetwork() {
  return (
    <svg viewBox="0 0 72 72" fill="none" width="64" height="64" aria-hidden="true">
      <line x1="36" y1="30" x2="14" y2="16" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.35"/>
      <line x1="36" y1="30" x2="58" y2="16" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.35"/>
      <line x1="36" y1="42" x2="10" y2="55" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.35"/>
      <line x1="36" y1="42" x2="62" y2="55" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.35"/>
      <line x1="36" y1="26" x2="36" y2="8" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.35"/>
      <circle cx="14" cy="16" r="5.5" fill="#2563eb" fillOpacity="0.1" stroke="#2563eb" strokeWidth="1.3"/>
      <circle cx="58" cy="16" r="5.5" fill="#2563eb" fillOpacity="0.1" stroke="#2563eb" strokeWidth="1.3"/>
      <circle cx="10" cy="55" r="5.5" fill="#2563eb" fillOpacity="0.1" stroke="#2563eb" strokeWidth="1.3"/>
      <circle cx="62" cy="55" r="5.5" fill="#2563eb" fillOpacity="0.1" stroke="#2563eb" strokeWidth="1.3"/>
      <circle cx="36" cy="8" r="4.5" fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="1.3"/>
      <circle cx="36" cy="36" r="14" fill="#2563eb" fillOpacity="0.06" stroke="#2563eb" strokeWidth="1.5"/>
      <circle cx="36" cy="30" r="5" fill="#2563eb"/>
      <path d="M26 46 C26 40 46 40 46 46" stroke="#2563eb" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
function SvgBalance() {
  return (
    <svg viewBox="0 0 72 72" fill="none" width="64" height="64" aria-hidden="true">
      <line x1="36" y1="10" x2="36" y2="62" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="26" y1="62" x2="46" y2="62" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="36" cy="18" r="3" fill="#2563eb"/>
      <line x1="8" y1="22" x2="64" y2="22" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="22" x2="12" y2="36" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round"/>
      <line x1="16" y1="22" x2="16" y2="36" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round"/>
      <rect x="7" y="36" width="18" height="4" rx="2" fill="#2563eb" fillOpacity="0.2" stroke="#2563eb" strokeWidth="1.2"/>
      <path d="M10 46 L13 50 L18 43" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="56" y1="22" x2="56" y2="36" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round"/>
      <line x1="60" y1="22" x2="60" y2="36" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round"/>
      <rect x="47" y="36" width="18" height="4" rx="2" fill="#2563eb" fillOpacity="0.2" stroke="#2563eb" strokeWidth="1.2"/>
      <path d="M50 46 L53 50 L58 43" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function SvgLock() {
  return (
    <svg viewBox="0 0 72 72" fill="none" width="64" height="64" aria-hidden="true">
      <rect x="14" y="32" width="44" height="32" rx="6" fill="#2563eb" fillOpacity="0.06" stroke="#2563eb" strokeWidth="1.5"/>
      <path d="M26 32 L26 20 C26 12 46 12 46 20 L46 26" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <line x1="22" y1="44" x2="38" y2="44" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="22" y1="50" x2="31" y2="50" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3"/>
      <line x1="22" y1="56" x2="40" y2="56" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
      <circle cx="50" cy="46" r="5" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1.4"/>
      <circle cx="50" cy="46" r="2" fill="#22c55e"/>
    </svg>
  );
}
function SvgChart() {
  return (
    <svg viewBox="0 0 72 72" fill="none" width="64" height="64" aria-hidden="true">
      <line x1="12" y1="60" x2="64" y2="60" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="12" x2="12" y2="60" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="9" y1="48" x2="12" y2="48" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="9" y1="36" x2="12" y2="36" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="9" y1="24" x2="12" y2="24" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.4"/>
      <rect x="18" y="46" width="10" height="14" rx="2" fill="#2563eb" fillOpacity="0.22"/>
      <rect x="32" y="32" width="10" height="28" rx="2" fill="#2563eb" fillOpacity="0.48"/>
      <rect x="46" y="18" width="10" height="42" rx="2" fill="#2563eb" fillOpacity="0.85"/>
      <line x1="51" y1="14" x2="51" y2="6" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M47 10 L51 6 L55 10" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Regional landmark SVGs (white line art, for dark cards) ── */
function SvgParis() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <line x1="32" y1="3" x2="32" y2="1" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="32" cy="2" r="1.4" fill="#fff"/>
      <path d="M29 10 L28 20 L36 20 L35 10 Z" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.08"/>
      <line x1="28" y1="26" x2="36" y2="26" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
      <path d="M24 20 L20 52 L44 52 L40 20 Z" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.06" strokeLinejoin="round"/>
      <line x1="22" y1="36" x2="42" y2="36" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M22 44 Q32 39 42 44" stroke="#fff" strokeWidth="1" strokeLinecap="round" fill="none"/>
      <line x1="8" y1="52" x2="56" y2="52" stroke="#fff" strokeWidth="1" strokeOpacity="0.2"/>
    </svg>
  );
}
function SvgAlpes() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <path d="M6 52 L22 24 L36 52 Z" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.07" strokeLinejoin="round"/>
      <path d="M22 52 L40 12 L58 52 Z" stroke="#fff" strokeWidth="1.5" fill="#fff" fillOpacity="0.1" strokeLinejoin="round"/>
      <path d="M35 26 L40 12 L45 26 Z" fill="#fff" fillOpacity="0.55"/>
      <line x1="4" y1="52" x2="60" y2="52" stroke="#fff" strokeWidth="1" strokeOpacity="0.2"/>
    </svg>
  );
}
function SvgPACA() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <circle cx="32" cy="24" r="9" stroke="#fff" strokeWidth="1.5" fill="#fff" fillOpacity="0.1"/>
      <line x1="32" y1="11" x2="32" y2="7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="24" x2="15" y2="24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="45" y1="24" x2="49" y2="24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="21" y1="14" x2="18" y2="11" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="43" y1="14" x2="46" y2="11" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="43" y1="34" x2="46" y2="37" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="21" y1="34" x2="18" y2="37" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
      <path d="M6 46 Q18 42 28 46 Q36 50 44 46 Q52 42 58 46" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M6 54 Q18 50 28 54 Q36 58 44 54 Q52 50 58 54" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round" strokeOpacity="0.35"/>
    </svg>
  );
}
function SvgOccitanie() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <rect x="12" y="38" width="40" height="14" rx="2" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.06"/>
      <line x1="20" y1="38" x2="20" y2="52" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.35"/>
      <line x1="28" y1="38" x2="28" y2="52" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.35"/>
      <line x1="36" y1="38" x2="36" y2="52" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.35"/>
      <line x1="44" y1="38" x2="44" y2="52" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.35"/>
      <path d="M18 38 Q32 18 46 38" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.07"/>
      <rect x="29" y="22" width="6" height="8" rx="1" stroke="#fff" strokeWidth="1" fill="#fff" fillOpacity="0.1"/>
      <line x1="32" y1="22" x2="32" y2="17" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
      <line x1="32" y1="15" x2="32" y2="10" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="29" y1="12" x2="35" y2="12" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="8" y1="52" x2="56" y2="52" stroke="#fff" strokeWidth="1" strokeOpacity="0.15"/>
    </svg>
  );
}
function SvgAquitaine() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <rect x="4" y="26" width="56" height="10" rx="2" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.07"/>
      <path d="M4 36 Q12 24 20 36" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.06"/>
      <path d="M20 36 Q28 24 36 36" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.06"/>
      <path d="M36 36 Q44 24 52 36" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.06"/>
      <line x1="20" y1="36" x2="20" y2="50" stroke="#fff" strokeWidth="1.4" strokeOpacity="0.45"/>
      <line x1="36" y1="36" x2="36" y2="50" stroke="#fff" strokeWidth="1.4" strokeOpacity="0.45"/>
      <path d="M4 48 Q20 44 32 48 Q44 52 56 48" stroke="#fff" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M4 55 Q20 51 32 55 Q44 59 56 55" stroke="#fff" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeOpacity="0.35"/>
    </svg>
  );
}
function SvgHdF() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <rect x="22" y="30" width="20" height="22" rx="2" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.06"/>
      <rect x="24" y="16" width="16" height="16" rx="2" stroke="#fff" strokeWidth="1.3" fill="#fff" fillOpacity="0.06"/>
      <rect x="28" y="37" width="8" height="10" rx="1" stroke="#fff" strokeWidth="1" fill="#fff" fillOpacity="0.1"/>
      <circle cx="32" cy="24" r="4" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.6"/>
      <line x1="32" y1="20" x2="32" y2="22" stroke="#fff" strokeWidth="1" strokeOpacity="0.8"/>
      <path d="M22 16 L32 5 L42 16 Z" stroke="#fff" strokeWidth="1.3" fill="#fff" fillOpacity="0.12" strokeLinejoin="round"/>
      <line x1="32" y1="5" x2="32" y2="2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="6" y1="52" x2="58" y2="52" stroke="#fff" strokeWidth="1" strokeOpacity="0.15"/>
    </svg>
  );
}
function SvgLoire() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <rect x="16" y="30" width="32" height="20" rx="2" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.06"/>
      <rect x="20" y="36" width="5" height="8" rx="1" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.45"/>
      <rect x="29" y="36" width="6" height="8" rx="1" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.45"/>
      <rect x="39" y="36" width="5" height="8" rx="1" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.45"/>
      <rect x="8" y="20" width="12" height="30" rx="2" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.06"/>
      <path d="M8 20 L14 11 L20 20 Z" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.12" strokeLinejoin="round"/>
      <rect x="44" y="20" width="12" height="30" rx="2" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.06"/>
      <path d="M44 20 L50 11 L56 20 Z" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.12" strokeLinejoin="round"/>
      <path d="M16 30 L32 16 L48 30" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.05"/>
      <line x1="4" y1="50" x2="60" y2="50" stroke="#fff" strokeWidth="1" strokeOpacity="0.15"/>
    </svg>
  );
}
function SvgBretagne() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <path d="M26 52 L22 18 L42 18 L38 52 Z" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.06" strokeLinejoin="round"/>
      <line x1="23" y1="30" x2="41" y2="30" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.3"/>
      <line x1="24" y1="42" x2="40" y2="42" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.3"/>
      <rect x="24" y="10" width="16" height="10" rx="2" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.15"/>
      <line x1="32" y1="10" x2="32" y2="5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 10 L8 5" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.45"/>
      <path d="M46 10 L56 5" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.45"/>
      <path d="M4 52 Q18 48 30 52 Q42 56 52 52" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M8 58 Q22 54 34 58 Q46 62 56 58" stroke="#fff" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeOpacity="0.35"/>
    </svg>
  );
}
function SvgGrandEst() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <rect x="20" y="30" width="24" height="22" rx="1" stroke="#fff" strokeWidth="1.3" fill="#fff" fillOpacity="0.05"/>
      <circle cx="32" cy="38" r="5" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.7"/>
      <line x1="32" y1="33" x2="32" y2="43" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.4"/>
      <line x1="27" y1="38" x2="37" y2="38" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.4"/>
      <path d="M27 52 L27 44 Q32 40 37 44 L37 52" stroke="#fff" strokeWidth="1" fill="#fff" fillOpacity="0.08"/>
      <rect x="10" y="16" width="14" height="36" rx="1" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.06"/>
      <path d="M10 16 L17 6 L24 16 Z" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.12" strokeLinejoin="round"/>
      <rect x="40" y="16" width="14" height="36" rx="1" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.06"/>
      <path d="M40 16 L47 6 L54 16 Z" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.12" strokeLinejoin="round"/>
    </svg>
  );
}
function SvgNormandie() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <path d="M4 52 L4 22 Q10 10 18 20 L18 52" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.07" strokeLinejoin="round"/>
      <path d="M5 42 Q11 30 18 42" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M46 52 L46 18 Q52 8 60 18 L60 52" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.07" strokeLinejoin="round"/>
      <path d="M18 40 Q32 34 46 40" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round" strokeOpacity="0.5"/>
      <path d="M4 52 Q28 48 46 52" stroke="#fff" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M26 24 Q32 20 38 24" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
function SvgBourgogne() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <ellipse cx="32" cy="14" rx="14" ry="5" stroke="#fff" strokeWidth="1.3" fill="none"/>
      <path d="M18 14 L14 50 Q32 58 50 50 L46 14" stroke="#fff" strokeWidth="1.4" fill="#fff" fillOpacity="0.07"/>
      <ellipse cx="32" cy="50" rx="16" ry="5" stroke="#fff" strokeWidth="1.2" fill="none"/>
      <ellipse cx="32" cy="26" rx="17" ry="4" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.45"/>
      <ellipse cx="32" cy="38" rx="17" ry="4" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.45"/>
      <circle cx="32" cy="32" r="3.5" stroke="#fff" strokeWidth="1.2" fill="#fff" fillOpacity="0.2"/>
      <line x1="32" y1="28.5" x2="32" y2="24" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5"/>
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────── */
const kpis = [
  { val: '+758', label: 'agents en production' },
  { val: '+150', label: 'PME équipées' },
  { val: '−70 %', label: 'temps de saisie' },
  { val: '+5 M€', label: 'économisés' },
];

const engagements: { num: string; title: string; body: string; link: { text: string; href: string } | null; Svg: () => React.ReactElement }[] = [
  {
    num: '01',
    Svg: SvgShield,
    title: 'Souveraineté France par défaut',
    body: 'Notre stack standard est française : Mistral hébergé en France (OVH, Scaleway), aucune donnée nominative envoyée à OpenAI ou Anthropic sans accord client explicite. Pour les secteurs réglementés (défense, santé, juridique, finance privée), nous étudions au cas par cas des configurations renforcées.',
    link: { text: 'Voir notre approche', href: '/#souverainete' },
  },
  {
    num: '02',
    Svg: SvgNetwork,
    title: 'Humain au centre, jamais de remplacement masqué',
    body: 'Pas de remplacement masqué, pas de plan social déguisé. Nous refusons toute mission dont l\'objectif explicite est un plan de licenciement. Les humains libérés des tâches répétitives sont redéployés sur la valeur ajoutée. Plusieurs clients ont augmenté leur effectif grâce à la croissance rendue possible par les agents.',
    link: null,
  },
  {
    num: '03',
    Svg: SvgBalance,
    title: 'Documentation anti-biais opposable',
    body: 'Pour les sujets sensibles (tri CV, scoring fournisseurs, qualification candidats), nous livrons une documentation anti-biais opposable à votre DPO. Tests statistiques sur cas piégés, logs auditables, exclusion explicite des critères protégés par la loi.',
    link: { text: 'Voir le cas client', href: '/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/' },
  },
  {
    num: '04',
    Svg: SvgLock,
    title: 'Transparence technique totale, pas de boîte noire',
    body: 'Le code développé vous est livré à 100 % : code source, prompts, workflows, accès LLM, documentation technique. Pas de lock-in propriétaire, pas de dépendance opaque. Vous pouvez reprendre la main ou changer de prestataire à tout moment.',
    link: { text: 'Développement IA', href: '/services/developpement-ia/' },
  },
  {
    num: '05',
    Svg: SvgChart,
    title: 'Premier agent en production en 1 semaine, ROI en moins de 6 mois',
    body: 'Un agent simple est en production sous une semaine après cadrage signé. Le ROI typique se mesure en moins de 6 mois : +200 % de RDV qualifiés, capacité doublée à effectif constant, +12 points de CSAT, 4 % d\'économies achats supplémentaires.',
    link: { text: 'Voir nos cas clients', href: '/cas-clients/' },
  },
];


type RegionCity = { name: string; href: string };
type Region = { name: string; Svg: () => React.ReactElement; accent: string; isOrigin?: boolean; cities: RegionCity[] };

const regions: Region[] = [
  { name: 'Île-de-France', Svg: SvgParis, accent: '#6366f1', cities: [{ name: 'Paris', href: '/agence-ia-paris/' }] },
  { name: 'Auvergne-Rhône-Alpes', Svg: SvgAlpes, accent: '#22c55e', cities: [{ name: 'Lyon', href: '/agence-ia-lyon/' }, { name: 'Grenoble', href: '/agence-ia-grenoble/' }, { name: 'Saint-Étienne', href: '/agence-ia-saint-etienne/' }] },
  { name: 'Provence-Alpes-Côte d\'Azur', Svg: SvgPACA, accent: '#f59e0b', cities: [{ name: 'Marseille', href: '/agence-ia-marseille/' }, { name: 'Nice', href: '/agence-ia-nice/' }, { name: 'Toulon', href: '/agence-ia-toulon/' }] },
  { name: 'Occitanie', Svg: SvgOccitanie, accent: '#ef4444', cities: [{ name: 'Toulouse', href: '/agence-ia-toulouse/' }, { name: 'Montpellier', href: '/agence-ia-montpellier/' }, { name: 'Nîmes', href: '/agence-ia-nimes/' }] },
  { name: 'Nouvelle-Aquitaine', Svg: SvgAquitaine, accent: '#f59e0b', isOrigin: true, cities: [{ name: 'Bordeaux', href: '/agence-ia-bordeaux/' }] },
  { name: 'Hauts-de-France', Svg: SvgHdF, accent: '#2563eb', cities: [{ name: 'Lille', href: '/agence-ia-lille/' }] },
  { name: 'Pays de la Loire', Svg: SvgLoire, accent: '#10b981', cities: [{ name: 'Nantes', href: '/agence-ia-nantes/' }, { name: 'Angers', href: '/agence-ia-angers/' }] },
  { name: 'Bretagne', Svg: SvgBretagne, accent: '#0ea5e9', cities: [{ name: 'Rennes', href: '/agence-ia-rennes/' }, { name: 'Brest', href: '/agence-ia-brest/' }] },
  { name: 'Grand Est', Svg: SvgGrandEst, accent: '#8b5cf6', cities: [{ name: 'Strasbourg', href: '/agence-ia-strasbourg/' }, { name: 'Reims', href: '/agence-ia-reims/' }] },
  { name: 'Normandie', Svg: SvgNormandie, accent: '#64748b', cities: [{ name: 'Le Havre', href: '/agence-ia-le-havre/' }] },
  { name: 'Bourgogne-Franche-Comté', Svg: SvgBourgogne, accent: '#dc2626', cities: [{ name: 'Dijon', href: '/agence-ia-dijon/' }] },
];

const faqs = [
  {
    q: 'Qu\'est-ce qui rend Althoce différent des autres agences IA ?',
    a: 'Trois choses réunies nulle part ailleurs sur le marché français. Premièrement, notre positionnement PME-ETI : délais courts (1 semaine pour un agent simple), méthodes opérationnelles et tarifs adaptés à votre échelle. Deuxièmement, notre engagement souveraineté France : Mistral hébergé France par défaut, infrastructure OVH et Scaleway. Troisièmement, notre exigence anti-biais et humain au centre : pas de remplacement masqué, documentation anti-biais opposable, pas de boîte noire.',
  },
  {
    q: 'Vous parlez de mission, de responsabilité. C\'est sincère ou c\'est du marketing ?',
    a: 'C\'est cohérent avec notre pratique opérationnelle. Trois vérifications concrètes que vous pouvez faire. Vérification 1 : demandez à voir notre documentation anti-biais sur un projet RH. C\'est un document juridique livré à chaque déploiement, pas un argumentaire. Vérification 2 : demandez à parler à un de nos clients sur l\'impact effectif sur ses effectifs. La majorité a stabilisé ou augmenté l\'effectif. Vérification 3 : demandez à voir le code source d\'un projet livré (sous NDA). Tout est livré, rien n\'est propriétaire.',
  },
  {
    q: 'Vous travaillez avec des secteurs sensibles (défense, santé, juridique, finance) ?',
    a: 'Oui, sur les quatre. Défense : configurations renforcées étudiées au cas par cas. Santé / biotech : Mistral hébergé France, anonymisation systématique des données patient. Juridique : mode pré-analyse à décharge, l\'agent ne signe jamais. Finance privée : anonymisation PII, contrats Enterprise sans réutilisation pour entraînement. Les détails techniques pour votre secteur sont discutés pendant les 30 minutes offertes.',
  },
  {
    q: 'Combien coûte un déploiement Althoce ?',
    a: 'Sur devis. Notre tarification est entièrement adaptée à votre contexte : volume traité, nombre d\'outils branchés, périmètre fonctionnel, exigences de souveraineté. Tout démarre par les 30 minutes offertes avec un expert : on qualifie votre besoin, vous repartez avec un devis ferme sous 5 jours, sans engagement.',
  },
  {
    q: 'Comment se passe la première prise de contact ?',
    a: 'Trois étapes. Étape 1 : vous prenez les 30 minutes offertes avec un expert. On qualifie votre besoin métier (cas, périmètre, urgence, contraintes souveraineté). Étape 2 : on vous envoie un devis ferme sous 5 jours ouvrés avec décomposition du cadrage, du build et du support. Étape 3 : vous décidez de signer ou pas, sans engagement. Si vous signez, le cadrage démarre dans la semaine. Si vous ne signez pas, vous repartez avec une cartographie de votre opportunité IA.',
  },
];


const agcStyles = `
  @keyframes agcBlob1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,20px) scale(1.08)} }
  @keyframes agcBlob2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-25px) scale(1.05)} }
  @keyframes agcBlob3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-15px,30px) scale(1.06)} }
  @keyframes agcFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }

  .agc-fade { opacity:0; transform:translateY(24px); transition:opacity .6s ease,transform .6s ease; }
  .agc-fade.agc-on { opacity:1; transform:none; }
  .agc-d1{transition-delay:.08s} .agc-d2{transition-delay:.16s} .agc-d3{transition-delay:.24s} .agc-d4{transition-delay:.32s} .agc-d5{transition-delay:.40s}

  /* CTA final */
  .agc-cta-section { padding:80px 24px; background:#fafafa; border-top:1px solid #e4e4e7; }
  .agc-cta-card { border-radius:28px; padding:72px 48px; text-align:center; position:relative; overflow:hidden; background:#09090b; }
  .agc-cta-desc { display:block; font-size: 16px; color:#8a8a95; margin-bottom:32px; line-height:1.65; }
  .agc-cta-btn { padding:14px 28px; border-radius:9999px; background:#fff; color:#09090b; font-size: 15px; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:8px; margin-bottom:16px; transition:transform .15s,box-shadow .15s; white-space:nowrap; }
  .agc-cta-btn:hover { transform:scale(1.03); box-shadow:0 8px 30px rgba(255,255,255,.2); }
  @media (max-width:640px) {
    .agc-cta-section { padding:40px 16px; }
    .agc-cta-card { border-radius:20px; padding:40px 24px; }
    .agc-cta-desc { display:none; }
    .agc-cta-btn { padding:14px 24px; font-size: 16px; width:100%; justify-content:center; }
  }

  /* hero */
  .agc-hero { min-height:90vh; display:flex; flex-direction:column; justify-content:center; padding:120px 24px 80px; position:relative; overflow:hidden; background:#fff; }
  .agc-hero-inner { max-width:1160px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; width:100%; position:relative; z-index:1; }
  .agc-hero-badge { display:inline-flex; align-items:center; gap:7px; padding:5px 14px; border-radius:9999px; border:1px solid #e4e4e7; background:rgba(255,255,255,.9); font-size: 13px; font-weight:700; color:#8a8a95; margin-bottom:22px; backdrop-filter:blur(8px); animation:agcFadeUp .5s ease both; }
  .agc-hero-h1 { font-size:clamp(34px,5vw,62px); font-weight:800; line-height:1.09; letter-spacing:-.04em; color:#09090b; margin-bottom:20px; animation:agcFadeUp .6s .1s ease both; }
  .agc-hero-h1 em { font-style:normal; color:${AC}; }
  .agc-hero-lead { font-size:16px; color:#8a8a95; line-height:1.75; max-width:500px; margin-bottom:28px; animation:agcFadeUp .6s .2s ease both; }
  .agc-hero-lead strong { color:#09090b; font-weight:700; }
  .agc-hero-pills { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px; animation:agcFadeUp .6s .25s ease both; }
  .agc-hero-pill { display:inline-flex; align-items:center; gap:6px; padding:5px 13px; border-radius:9999px; background:#f4f4f5; font-size: 13px; font-weight:700; color:#8a8a95; }
  .agc-hero-pill-blue { background:${AC}10; color:${AC}; border:1px solid ${AC}25; }
  .agc-hero-ctas { display:flex; gap:12px; flex-wrap:wrap; animation:agcFadeUp .6s .3s ease both; }
  .agc-hero-btn-dark { padding:13px 26px; border-radius:9999px; background:#09090b; color:#fff; font-size: 15px; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:transform .15s,box-shadow .15s; }
  .agc-hero-btn-dark:hover { transform:scale(1.03); box-shadow:0 6px 24px rgba(0,0,0,.25); }
  .agc-hero-btn-ghost { background:none; border:none; cursor:pointer; font-size: 15px; font-weight:700; color:#8a8a95; padding:13px 4px; transition:color .15s; text-decoration:none; display:inline-flex; align-items:center; }
  .agc-hero-btn-ghost:hover { color:#09090b; }

  /* quote card */
  .agc-quote { background:linear-gradient(145deg,#0d1117 0%,#0f172a 60%,#111827 100%); border-radius:24px; padding:40px 36px; border:1px solid #1e293b; box-shadow:0 32px 80px rgba(0,0,0,.2); position:relative; overflow:hidden; animation:agcFadeUp .7s .2s ease both; }
  .agc-quote-glow { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:240px; height:240px; border-radius:50%; background:radial-gradient(circle,${AC}20 0%,transparent 70%); filter:blur(30px); pointer-events:none; }
  .agc-quote-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px); background-size:40px 40px; }
  .agc-quote-inner { position:relative; z-index:1; }
  .agc-guillemet { font-size:64px; line-height:1; color:${AC}; margin-bottom:8px; opacity:.8; font-family:Georgia,serif; }
  .agc-quote-text { font-size:clamp(15px,1.6vw,19px); line-height:1.75; color:#e2e8f0; font-family:Georgia,'Times New Roman',serif; font-style:italic; margin-bottom:24px; }
  .agc-quote-attrib { display:flex; align-items:center; gap:12px; border-top:1px solid #1e293b; padding-top:18px; }
  .agc-quote-dot { width:32px; height:32px; border-radius:50%; background:${AC}; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .agc-quote-name { font-size: 12px; font-weight:800; color:#94a3b8; letter-spacing:.1em; text-transform:uppercase; }

  /* kpi strip */
  .agc-kpi-strip { background:linear-gradient(180deg,#fafafa 0%,#fff 100%); border-top:1px solid #e4e4e7; padding:0 24px; }
  .agc-kpi-grid { max-width:1160px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:0; }
  .agc-kpi-item { padding:32px 24px; text-align:center; border-right:1px solid #e4e4e7; }
  .agc-kpi-item:last-child { border-right:none; }
  .agc-kpi-val { font-size:clamp(28px,3.5vw,42px); font-weight:800; letter-spacing:-.04em; color:#09090b; line-height:1; margin-bottom:6px; }
  .agc-kpi-lbl { font-size: 12px; font-weight:800; text-transform:uppercase; letter-spacing:.1em; color:${AC}; }

  /* sections */
  .agc-section { max-width:1160px; margin:0 auto; padding:96px 24px; }
  .agc-section-narrow { max-width:800px; margin:0 auto; padding:96px 24px; }
  .agc-h2 { font-size:clamp(26px,3.5vw,44px); font-weight:800; letter-spacing:-.03em; color:#09090b; line-height:1.15; }
  .agc-h2-white { color:#fff; }

  /* mission — manifesto layout */
  .agc-manifesto { max-width:800px; margin:0 auto; padding:0 24px; }
  .agc-manifesto-intro { font-size:17px; color:#8a8a95; line-height:1.85; margin-bottom:56px; }
  .agc-manifesto-intro strong { color:#09090b; font-weight:700; }
  .agc-manifest-list { border-top:1px solid #e4e4e7; }
  .agc-manifest-item { display:grid; grid-template-columns:52px 1fr; gap:28px; padding:48px 0; border-bottom:1px solid #e4e4e7; align-items:start; }
  .agc-manifest-left { display:flex; flex-direction:column; align-items:center; padding-top:6px; }
  .agc-manifest-badge { width:36px; height:36px; border-radius:10px; background:${AC}12; border:1px solid ${AC}28; display:flex; align-items:center; justify-content:center; font-size: 12px; font-weight:800; color:${AC}; flex-shrink:0; }
  .agc-manifest-vline { width:1px; flex:1; min-height:32px; margin-top:10px; background:linear-gradient(to bottom,${AC}40,transparent); }
  .agc-manifest-stmt { font-size:clamp(20px,2.8vw,28px); font-weight:800; color:#09090b; letter-spacing:-.035em; line-height:1.2; margin-bottom:14px; }
  .agc-manifest-stmt em { font-style:normal; color:${AC}; }
  .agc-manifest-body { font-size: 16px; color:#8a8a95; line-height:1.8; max-width:580px; }
  .agc-callout { background:#09090b; border-radius:20px; padding:32px 36px; margin-top:56px; border:1px solid #1a1a1a; position:relative; overflow:hidden; }
  .agc-callout-top { position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(to right,transparent,${AC}60,transparent); }
  .agc-callout-label { font-size: 11px; font-weight:800; color:${AC}; text-transform:uppercase; letter-spacing:.12em; margin-bottom:10px; }
  .agc-callout-text { font-size: 16px; color:#d4d4d8; line-height:1.75; }
  @media (max-width:540px) {
    .agc-manifest-item { grid-template-columns:40px 1fr; gap:18px; padding:36px 0; }
    .agc-manifest-vline { display:none; }
    .agc-callout { padding:24px 20px; }
  }

  /* engagements */
  .agc-eng-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:16px; align-items:stretch; }
  .agc-eng-card { border:1px solid #e4e4e7; border-radius:20px; background:#fff; overflow:hidden; display:flex; flex-direction:column; transition:border-color .2s,transform .25s,box-shadow .25s; }
  .agc-eng-card:hover { border-color:${AC}40; transform:translateY(-4px); box-shadow:0 16px 48px ${AC}0e; }
  .agc-eng-card-lg { grid-column:span 3; }
  .agc-eng-card-sm { grid-column:span 2; }
  .agc-eng-icon-zone { border-bottom:1px solid ${AC}12; padding:36px 24px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; min-height:128px; background:linear-gradient(145deg,${AC}07 0%,transparent 80%); }
  .agc-eng-icon-zone::before { content:''; position:absolute; inset:0; background-image:linear-gradient(${AC}07 1px,transparent 1px),linear-gradient(90deg,${AC}07 1px,transparent 1px); background-size:22px 22px; }
  .agc-eng-icon-zone::after { content:''; position:absolute; inset:0; background:radial-gradient(circle at 50% 60%,${AC}16 0%,transparent 65%); }
  .agc-eng-svg-wrap { position:relative; z-index:1; }
  .agc-eng-content { padding:24px 22px 22px; flex:1; display:flex; flex-direction:column; }
  .agc-eng-num-label { font-size: 11px; font-weight:800; color:${AC}; text-transform:uppercase; letter-spacing:.14em; margin-bottom:8px; }
  .agc-eng-title { font-size: 16px; font-weight:800; color:#09090b; letter-spacing:-.025em; line-height:1.35; margin-bottom:10px; }
  .agc-eng-body { font-size: 14px; color:#8a8a95; line-height:1.75; flex:1; }
  .agc-eng-link { font-size: 13px; font-weight:700; color:${AC}; text-decoration:none; display:inline-flex; align-items:center; gap:4px; margin-top:14px; }
  .agc-eng-link:hover { text-decoration:underline; }
  @media (max-width:960px) {
    .agc-eng-card-lg,.agc-eng-card-sm { grid-column:span 3; }
  }
  @media (max-width:640px) {
    .agc-eng-grid { grid-template-columns:1fr; }
    .agc-eng-card-lg,.agc-eng-card-sm { grid-column:span 1; }
  }



  /* cities — 1 ligne défilante */
  @keyframes agcScrollLeft { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .agc-cit-track { overflow:hidden; position:relative; }
  .agc-cit-track::before { content:''; position:absolute; top:0; left:0; bottom:0; width:56px; background:linear-gradient(90deg,#ffffff,rgba(255,255,255,0)); z-index:3; pointer-events:none; }
  .agc-cit-track::after { content:''; position:absolute; top:0; right:0; bottom:0; width:56px; background:linear-gradient(270deg,#ffffff,rgba(255,255,255,0)); z-index:3; pointer-events:none; }
  .agc-cit-inner { display:flex; gap:14px; width:max-content; animation:agcScrollLeft 48s linear infinite; }
  .agc-cit-track:hover .agc-cit-inner { animation-play-state:paused; }
  .agc-cit-card { background:#0b0b0f; border:1px solid #1e1e2e; border-radius:20px; overflow:hidden; transition:border-color .25s,box-shadow .25s; flex-shrink:0; width:256px; }
  .agc-cit-illus { height:130px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
  .agc-cit-illus::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px); background-size:20px 20px; pointer-events:none; }
  .agc-cit-svg-wrap { position:relative; z-index:1; }
  .agc-cit-origin-badge { position:absolute; top:10px; right:10px; font-size:9px; font-weight:800; color:#f59e0b; background:#f59e0b18; border:1px solid #f59e0b35; padding:3px 9px; border-radius:9999px; text-transform:uppercase; letter-spacing:.1em; z-index:2; }
  .agc-cit-body { padding:16px 18px 18px; border-top:1px solid #1e1e2e; }
  .agc-cit-region-name { font-size: 11px; font-weight:800; color:#3a3a4a; text-transform:uppercase; letter-spacing:.11em; margin-bottom:11px; }
  .agc-cit-chips { display:flex; flex-wrap:wrap; gap:5px; }
  .agc-cit-chip { font-size: 13px; font-weight:700; color:#9090a0; text-decoration:none; padding:4px 11px; border-radius:9999px; background:#141420; border:1px solid #222232; transition:color .15s,border-color .15s,background .15s; }
  .agc-cit-chip:hover { color:#fff; border-color:#2563eb55; background:#1a1a2e; }

  /* responsive */
  @media (max-width:1024px) {
    .agc-hero-inner { grid-template-columns:1fr; gap:48px; }
    .agc-pil-item { grid-template-columns:1fr; gap:32px; padding:48px 0; }
    .agc-pil-item.rev .agc-pil-visual { order:-1; }
    .agc-steps-grid { grid-template-columns:repeat(2,1fr); }
    .agc-sec-inner { grid-template-columns:1fr; }
    .agc-kpi-grid { grid-template-columns:repeat(2,1fr); }
    .agc-kpi-item:nth-child(2) { border-right:none; }
    .agc-kpi-item:nth-child(3) { border-right:1px solid #e4e4e7; border-top:1px solid #e4e4e7; }
    .agc-kpi-item:nth-child(4) { border-right:none; border-top:1px solid #e4e4e7; }
  }
  @media (max-width:640px) {
    .agc-steps-grid { grid-template-columns:1fr; }
    .agc-eng-card { grid-template-columns:1fr; }
    .agc-sec-cards { grid-template-columns:1fr; }
    .agc-kpi-grid { grid-template-columns:1fr 1fr; }
    .agc-quote { padding:28px 24px; }
  }
`;

/* ── StepVisual — copie exacte de HomePageClient ──────────── */
function StepVisual({ stepIndex, active }: { stepIndex: number; active: boolean }) {
  if (stepIndex === 0) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Rapport d&apos;audit</div>
        {['Saisie manuelle CRM', 'Traitement emails entrants', 'Génération reporting', 'Onboarding candidats'].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `slideIn .4s ${i * .15}s ease both` : 'none' }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: i < 3 ? '#22c55e22' : '#f4f4f5', border: i < 3 ? '1.5px solid #22c55e' : '1.5px solid #d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, color: '#22c55e', fontWeight: 900 }}>{i < 3 && '✓'}</div>
            <span style={{ fontSize: 13, color: i < 3 ? '#52525b' : '#a1a1aa', fontWeight: i < 3 ? 600 : 400 }}>{t}</span>
            {i < 3 && <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>−{[4, 6, 3, 2][i]}h/sem</span>}
          </div>
        ))}
      </div>
    );
  }
  if (stepIndex === 1) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap IA</div>
        {[{ l: 'Agent email', w: 90 }, { l: 'Agent CRM', w: 70 }, { l: 'Agent reporting', w: 55 }, { l: 'Agent onboarding', w: 40 }].map((r, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{r.l}</span>
              <span style={{ fontSize: 12, fontWeight: 800, color: AC }}>S{i + 1}</span>
            </div>
            <div style={{ height: 5, background: '#f4f4f5', borderRadius: 9999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: active ? `${r.w}%` : '0%', background: `linear-gradient(to right,${AC},${AC}88)`, borderRadius: 9999, transition: `width .8s ${i * .1 + .3}s ease` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (stepIndex === 2) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 2s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Intégrations actives</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[{ n: 'Gmail', c: '#ea4335' }, { n: 'HubSpot', c: '#ff7a59' }, { n: 'Slack', c: '#4a154b' }, { n: 'Notion', c: '#000' }, { n: 'Salesforce', c: '#00a1e0' }, { n: 'Drive', c: '#0f9d58' }].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, border: '1px solid #f0f0f0', background: '#fafafa', animation: active ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.c }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{t.n}</span>
              <span style={{ marginLeft: 'auto', fontSize: 9, color: '#22c55e', fontWeight: 800 }}>●</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1.5s ease-in-out infinite' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Votre agent IA</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif 24/7</span>
      </div>
      {["Emails traités aujourd'hui", 'Leads qualifiés', 'Tickets résolus', 'Heures économisées'].map((l, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b' }}>{l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: ['#22c55e', AC, '#f59e0b', '#8b5cf6'][i] }}>{['142', '38', '94', '11.4h'][i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function AgencesHubPageClient() {
  const heroRef = useInView(0.05);
  const missionRef = useInView(0.08);
  const engRef = useInView(0.06);

  const methRef = useInView(0.08);
  const secRef = useInView(0.08);
  const citRef = useInView(0.08);
  const faqRef = useInView(0.08);
  const ctaRef = useInView(0.08);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: agcStyles }} />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="agc-hero" aria-labelledby="agc-h1">
        {/* Animated blobs */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}12 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'agcBlob1 14s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', top: '20%', right: '-8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,#7c3aed0e 0%,transparent 65%)', filter: 'blur(100px)', animation: 'agcBlob2 18s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '5%', left: '35%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,#0891b20b 0%,transparent 65%)', filter: 'blur(90px)', animation: 'agcBlob3 12s ease-in-out infinite' }} />
        </div>
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.022) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

        {/* Breadcrumb */}
        <div style={{ position: 'absolute', top: 88, left: 0, right: 0, zIndex: 2 }}>
          <nav style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#a1a1aa' }} aria-label="Fil d'Ariane">
            <a href="/" style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#09090b'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#a1a1aa'; }}>Accueil</a>
            <span style={{ color: '#d4d4d8' }}>›</span>
            <span style={{ color: '#09090b', fontWeight: 600 }}>Agences</span>
          </nav>
        </div>

        <div className="agc-hero-inner" ref={heroRef.ref}>
          {/* Gauche */}
          <div>
            <h1 id="agc-h1" className="agc-hero-h1">
              Agence IA <em>souveraine,</em><br />
              responsable,<br />
              pour toutes les<br />
              PME françaises.
            </h1>
            <p className="agc-hero-lead">
              Notre mission : que chaque dirigeant puisse utiliser l&apos;IA pour gagner du temps, <strong>sans renoncer à la souveraineté de ses données, ni à l&apos;humain au centre de l&apos;organisation.</strong>
            </p>
            <div className="agc-hero-pills">
              <span className="agc-hero-pill agc-hero-pill-blue">+150 PME équipées</span>
              <span className="agc-hero-pill agc-hero-pill-blue">Souveraineté France</span>
              <span className="agc-hero-pill">Humain au centre</span>
              <span className="agc-hero-pill">20 villes</span>
            </div>
            <div className="agc-hero-ctas">
              <a href="https://cal.com/althoce/30min" target="_blank" rel="noopener noreferrer" className="agc-hero-btn-dark">
                Discuter de votre projet →
              </a>
              <a href="#mission" className="agc-hero-btn-ghost">
                Lire notre manifeste ↓
              </a>
            </div>
          </div>

          {/* Droite — citation dark card */}
          <div className="agc-quote">
            <div className="agc-quote-glow" aria-hidden="true" />
            <div className="agc-quote-grid" aria-hidden="true" />
            <div className="agc-quote-inner">
              <div className="agc-guillemet" aria-hidden="true">«</div>
              <blockquote className="agc-quote-text">
                L&apos;IA ne doit pas être réservée aux grands groupes. Notre métier, c&apos;est de la rendre accessible et responsable pour la PME française qui a besoin d&apos;avancer concrètement, sans renoncer à ses valeurs.
              </blockquote>
              <div className="agc-quote-attrib">
                <div className="agc-quote-dot" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2L12 7L7 12" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 7H12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </div>
                <cite style={{ fontStyle: 'normal' }}>
                  <div className="agc-quote-name">L&apos;équipe Althoce</div>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KPI STRIP ────────────────────────────────────────── */}
      <div className="agc-kpi-strip">
        <div className="agc-kpi-grid">
          {kpis.map((k, i) => (
            <div key={i} className="agc-kpi-item">
              <div className="agc-kpi-val">{k.val}</div>
              <div className="agc-kpi-lbl">{k.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION ──────────────────────────────────────────── */}
      <section id="mission" style={{ background: '#fafafa', borderTop: '1px solid #e4e4e7', padding: '96px 0' }}>
        <div
          className={`agc-manifesto agc-fade${missionRef.visible ? ' agc-on' : ''}`}
          ref={missionRef.ref}
        >
          <h2 className="agc-h2" style={{ marginBottom: 20 }}>
            Démocratiser l&apos;IA dans les entreprises françaises, sans compromis sur la responsabilité
          </h2>
          <p className="agc-manifesto-intro">
            Quand nous avons fondé Althoce, nous avons fait un constat simple : l&apos;IA en entreprise se construit selon un schéma qui ne nous va pas. <strong>Les grands groupes</strong> expérimentent pendant 18 mois et livrent des PowerPoints. <strong>Les PME françaises</strong> (50 % de l&apos;emploi privé) restent sur le bord du chemin, faute d&apos;un partenaire qui parle leur langage. <strong>Les outils américains</strong> dominent et capturent les données européennes. Notre réponse tient en trois convictions.
          </p>

          <div className="agc-manifest-list">
            {/* Conviction 01 */}
            <div className={`agc-manifest-item agc-fade agc-d1${missionRef.visible ? ' agc-on' : ''}`}>
              <div className="agc-manifest-left">
                <div className="agc-manifest-badge">01</div>
                <div className="agc-manifest-vline" aria-hidden="true" />
              </div>
              <div>
                <p className="agc-manifest-stmt">
                  L&apos;IA est un <em>levier humain,</em><br />pas un outil de remplacement
                </p>
                <p className="agc-manifest-body">
                  Les collaborateurs libérés de la saisie répétitive font un meilleur métier sur la valeur ajoutée. Nous refusons toute mission dont l&apos;objectif explicite est un plan de licenciement. Plusieurs de nos clients ont augmenté leurs effectifs grâce à la croissance rendue possible par les agents IA.
                </p>
              </div>
            </div>

            {/* Conviction 02 */}
            <div className={`agc-manifest-item agc-fade agc-d2${missionRef.visible ? ' agc-on' : ''}`}>
              <div className="agc-manifest-left">
                <div className="agc-manifest-badge">02</div>
                <div className="agc-manifest-vline" aria-hidden="true" />
              </div>
              <div>
                <p className="agc-manifest-stmt">
                  La souveraineté de vos données<br /><em>n&apos;est pas une option</em>
                </p>
                <p className="agc-manifest-body">
                  Notre stack standard est française : Mistral hébergé sur OVH et Scaleway, aucune donnée nominative transmise à des tiers sans votre accord documenté. Pour les secteurs réglementés (défense, santé, juridique), nous étudions des configurations renforcées au cas par cas.
                </p>
              </div>
            </div>

            {/* Conviction 03 */}
            <div className={`agc-manifest-item agc-fade agc-d3${missionRef.visible ? ' agc-on' : ''}`}>
              <div className="agc-manifest-left">
                <div className="agc-manifest-badge">03</div>
                <div className="agc-manifest-vline" aria-hidden="true" />
              </div>
              <div>
                <p className="agc-manifest-stmt">
                  Un agent en production en <em>1 semaine</em><br />vaut mieux qu&apos;un PowerPoint en 6 mois
                </p>
                <p className="agc-manifest-body">
                  La valeur de l&apos;IA pour une PME n&apos;est pas dans la note stratégique, elle est dans l&apos;agent qui qualifie vos rendez-vous commerciaux 24h/24 ou qui absorbe la saisie comptable de votre cabinet. Premier agent déployé en moins d&apos;une semaine après cadrage signé. ROI typique en moins de 6 mois.
                </p>
              </div>
            </div>
          </div>

          <div className="agc-callout">
            <div className="agc-callout-top" aria-hidden="true" />
            <div className="agc-callout-label">Notre engagement</div>
            <p className="agc-callout-text">
              Vous équiper d&apos;agents IA en production en quelques semaines. Souveraineté France garantie, sans licenciement, sans biais discriminatoire, sans boîte noire, sans dépendance au prestataire. C&apos;est exigeant. C&apos;est ce que nous faisons.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5 ENGAGEMENTS ────────────────────────────────────── */}
      <section style={{ background: '#fff', borderTop: '1px solid #e4e4e7', padding: '96px 0' }}>
        <div className="agc-section">
          <div
            className={`agc-fade${engRef.visible ? ' agc-on' : ''}`}
            ref={engRef.ref}
          >
            <h2 className="agc-h2" style={{ marginBottom: 10 }}>Cinq engagements concrets qui font la différence</h2>
            <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, marginBottom: 48 }}>Pas des slogans. Des engagements opérationnels, vérifiables et documentés, que nous tenons sur chaque projet.</p>
            <div className="agc-eng-grid">
              {engagements.map((e, i) => {
                const Svg = e.Svg;
                const isLg = i < 2;
                return (
                  <div
                    key={i}
                    className={`agc-eng-card ${isLg ? 'agc-eng-card-lg' : 'agc-eng-card-sm'} agc-fade agc-d${Math.min(i + 1, 5)}${engRef.visible ? ' agc-on' : ''}`}
                  >
                    <div className="agc-eng-icon-zone">
                      <div className="agc-eng-svg-wrap">
                        <Svg />
                      </div>
                    </div>
                    <div className="agc-eng-content">
                      <div className="agc-eng-num-label">{e.num}</div>
                      <h3 className="agc-eng-title">{e.title}</h3>
                      <p className="agc-eng-body">{e.body}</p>
                      {e.link && (
                        <a href={e.link.href} className="agc-eng-link">
                          {e.link.text} →
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODE — identique à la home ───────────────────── */}
      <section style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <h2 className="agc-h2" style={{ marginBottom: 12 }}>Comment se passe une mission avec Althoce ?</h2>
            <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Vos équipes voient leur premier agent IA en production en moins de 4 semaines.</p>
          </div>
          <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} ref={methRef.ref}>
            {steps.map((s, i) => (
              <div key={i} style={{ opacity: methRef.visible ? 1 : 0, transform: methRef.visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .12}s ease` }}>
                <div style={{ marginBottom: 24, minHeight: 180 }}>
                  <StepVisual stepIndex={i} active={methRef.visible} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 6 }}>STEP {i + 1}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 10px', borderRadius: 9999, background: '#f0f7ff', border: `1px solid ${AC}20`, fontSize: 12, fontWeight: 700, color: AC, marginBottom: 10 }}>{s.time}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.02em' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href="/cas-clients/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'; }}>
              Voir nos cas clients →
            </a>
          </div>
        </div>
      </section>

      {/* ── SOUVERAINETÉ — identique à la home ───────────────── */}
      <section style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }} ref={secRef.ref}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div className="v2-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
            <div style={{ opacity: secRef.visible ? 1 : 0, transform: secRef.visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
              <h2 className="agc-h2" style={{ color: '#fff', marginBottom: 20 }}>
                Vos données restent vos données.<br /><span style={{ color: AC }}>En France, sous votre contrôle.</span>
              </h2>
              <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32 }}>
                La plupart des outils IA envoient vos données chez des prestataires américains. Chez Althoce, on fait l&apos;inverse : hébergement en France, instance dédiée, chiffrement de bout en bout, et un humain toujours dans la boucle.
              </p>
              <a href="/services/developpement-ia/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', border: `1px solid ${AC}40`, borderRadius: 9999, transition: 'all .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = AC; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = AC; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AC}40`; }}>
                Notre approche technique →
              </a>
            </div>
            <div className="v2-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, opacity: secRef.visible ? 1 : 0, transform: secRef.visible ? 'none' : 'translateY(24px)', transition: 'all .6s .15s ease' }}>
              {securityItems.map((it, i) => (
                <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '24px 20px', background: '#0f0f0f', position: 'relative', overflow: 'hidden', transition: 'border-color .2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${AC}44`; (e.currentTarget as HTMLDivElement).style.background = '#111'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; (e.currentTarget as HTMLDivElement).style.background = '#0f0f0f'; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right,transparent,${AC}40,transparent)`, opacity: 0.6 }} aria-hidden="true" />
                  <div style={{ width: 48, height: 48, marginBottom: 12 }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
                      {i === 0 && (<><rect x="10" y="10" width="28" height="28" rx="4" fill="none" stroke={AC} strokeWidth="2" /><path d="M16 24L22 30L32 18" stroke={AC} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>)}
                      {i === 1 && (<><circle cx="24" cy="24" r="16" fill="none" stroke={`${AC}30`} strokeWidth="2" /><circle cx="24" cy="24" r="10" fill={`${AC}15`} stroke={AC} strokeWidth="2" /><circle cx="24" cy="24" r="4" fill={AC} /></>)}
                      {i === 2 && (<><rect x="14" y="18" width="20" height="16" rx="2" fill="none" stroke={AC} strokeWidth="2" /><path d="M14 18C14 14 18 12 24 12C30 12 34 14 34 18" fill="none" stroke={AC} strokeWidth="2" /><circle cx="24" cy="26" r="2" fill={AC} /></>)}
                      {i === 3 && (<><circle cx="20" cy="18" r="6" fill="none" stroke={AC} strokeWidth="2" /><path d="M10 38C10 30 14 26 20 26C26 26 30 30 30 38" fill="none" stroke={AC} strokeWidth="2" /><path d="M30 16L38 8M38 8L34 8M38 8L38 12" stroke={AC} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>)}
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: '#d4d4d8', marginBottom: 6, lineHeight: 1.3 }}>{it.title}</h3>
                  <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}>{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRÉSENCE EN FRANCE ───────────────────────────────── */}
      <section style={{ background: '#fff', borderTop: '1px solid #e4e4e7', padding: '96px 0' }}>
        <div className="agc-section">
          <div
            className={`agc-fade${citRef.visible ? ' agc-on' : ''}`}
            ref={citRef.ref}
          >
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 className="agc-h2" style={{ marginBottom: 12 }}>Une présence locale dans 20 villes</h2>
              <p style={{ fontSize: 16, color: '#52525b', maxWidth: 540, margin: '0 auto' }}>Agence d&apos;origine bordelaise. Présentiel régulier dans 20 villes, distanciel structuré sans contrainte géographique.</p>
            </div>
            <div className="agc-cit-track">
              <div className="agc-cit-inner">
                {[...regions, ...regions].map((r, i) => {
                  const RegSvg = r.Svg;
                  return (
                    <div
                      key={`cit-${i}`}
                      className="agc-cit-card"
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${r.accent}55`; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 50px rgba(0,0,0,.5)`; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e2e'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                    >
                      <div className="agc-cit-illus" style={{ background: `radial-gradient(ellipse at 50% 80%, ${r.accent}28 0%, #0b0b0f 70%)` }}>
                        <div className="agc-cit-svg-wrap"><RegSvg /></div>
                        {r.isOrigin && <span className="agc-cit-origin-badge">Ville d&apos;origine</span>}
                      </div>
                      <div className="agc-cit-body">
                        <div className="agc-cit-region-name">{r.name}</div>
                        <div className="agc-cit-chips">
                          {r.cities.map((c) => <a key={c.name} href={c.href} className="agc-cit-chip">{c.name}</a>)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <p style={{ fontSize: 15, color: '#8a8a95', textAlign: 'center', maxWidth: 580, margin: '40px auto 0', lineHeight: 1.7 }}>
              Votre ville n&apos;apparaît pas ? Nous intervenons sur l&apos;ensemble du territoire métropolitain en distanciel structuré. Les <strong style={{ color: '#09090b' }}>30 minutes offertes avec un expert</strong> permettent de valider l&apos;organisation projet selon votre localisation.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff', borderTop: '1px solid #e4e4e7', padding: '96px 0' }}>
        <div
          className={`agc-section-narrow agc-fade${faqRef.visible ? ' agc-on' : ''}`}
          ref={faqRef.ref}
        >
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 className="agc-h2" style={{ marginBottom: 12 }}>Questions fréquentes sur Althoce et notre mission</h2>
            <p style={{ fontSize: 16, color: '#52525b' }}>Chaque question vient de prospects ou clients. Les réponses sont factuelles, sans jargon.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section className="agc-cta-section">
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div
            className={`agc-cta-card agc-fade${ctaRef.visible ? ' agc-on' : ''}`}
            ref={ctaRef.ref}
          >
            <div style={{ position: 'absolute', top: -80, left: -80, width: 320, height: 320, background: `radial-gradient(circle,${AC}30,rgba(37,99,235,0))`, pointerEvents: 'none' }} aria-hidden="true" />
            <div style={{ position: 'absolute', bottom: -80, right: -80, width: 320, height: 320, background: 'radial-gradient(circle,rgba(59,130,246,.13),rgba(59,130,246,0))', pointerEvents: 'none' }} aria-hidden="true" />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: 16 }}>
                Prêt à déployer votre premier agent IA ?
              </h2>
              <p className="agc-cta-desc">
                30 minutes offertes avec un expert Althoce. On part de votre cas concret, pas d&apos;un deck générique.
              </p>
              <a
                href="https://cal.com/althoce/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="agc-cta-btn"
              >
                Réserver 30 min offertes →
              </a>
              <p style={{ fontSize: 13, color: '#52525b' }}>Sans engagement · Souveraineté France · Humain au centre</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
