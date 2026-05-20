'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';

const AC = '#2563eb';

// ── Scroll-triggered visibility hook ────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

const valeurs = [
  {
    num: '01',
    title: 'Concret avant stratégique',
    desc: "Un agent en production en 1 semaine vaut mieux qu'un PowerPoint en 6 mois. Cadrage court, livrable opérationnel précoce.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 13l4-4 3 3 7-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 17h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".4"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Souveraineté par défaut',
    desc: "Mistral France, OVH, Scaleway. Aucune donnée nominative chez OpenAI ou Anthropic sans accord client explicite.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l7 3v5c0 4-3 7-7 8C3 17 0 14 0 10V5l10-3z" stroke="none" fill="currentColor" fillOpacity=".15"/>
        <path d="M10 2l7 3v5c0 4-3 7-7 8C3 17 0 14 0 10V5l10-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Humain au centre',
    desc: "Nous refusons les missions dont l'objectif est un plan de licenciement. L'IA libère du temps, jamais ne remplace masquément.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M3 18c0-3.87 3.134-7 7-7s7 3.13 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M10 12v4M8 14l2 2 2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".5"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Transparence technique',
    desc: "Code, prompts, workflows, accès : tout est livré au client en fin de mission. Pas de boîte noire, pas de lock-in.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 8l-2 2 2 2M13 8l2 2-2 2M10 7l-1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Comment Althoce est-elle organisée au quotidien ?",
    a: "Un noyau permanent qui arbitre collectivement les sujets stratégiques, et un réseau de consultants spécialisés mobilisés selon les missions. Pas de pyramide, pas de département stratégie déconnecté. Chaque consultant intervient sur le cadrage, la conception et la mise en production, ce qui nous permet de livrer un agent sous une semaine.",
  },
  {
    q: 'Est-ce que vous recrutez ?',
    a: "L'équipe grandit avec ses missions. Profils ciblés : développeurs IA seniors, experts métier sectoriels avec expérience PME ou ETI (pas grand compte), expertises rares alignées avec nos valeurs. Candidatures à espoir@contact.althoce.com.",
  },
  {
    q: "Pourquoi Bordeaux ?",
    a: "Ancrage culturel et professionnel. Tissu PME dense, exigeant, où l'on attend du concret et où la parole vaut le contrat. Nous intervenons aujourd'hui partout en France, mais l'ADN reste bordelais.",
  },
  {
    q: "Quelles sont les ambitions d'Althoce ?",
    a: "Densifier le portefeuille français : 200, 500, 1 000 PME équipées d'ici 3 ans. Étendre le réseau de consultants partenaires. Approfondir l'expertise sectorielle sur les verticales déjà signature : finance, commercial, juridique, RH, achats, ops, marketing, téléphonique.",
  },
];

const tlSteps = [
  {
    num: '01',
    label: 'Le constat',
    text: `Le marché de l'IA en entreprise s'est construit pour les grands groupes. Un cabinet comptable de 12 personnes qui voulait s'équiper avait le choix entre un audit parisien à 200 000 € (inaccessible) ou un SaaS américain générique (frustrant). Les PME (50 % de l'emploi privé français) restaient sur le bord du chemin.`,
    active: false,
  },
  {
    num: '02',
    label: 'La décision',
    text: `Cette asymétrie nous a paru insoutenable. L'IA peut faire beaucoup pour une PME aujourd'hui : agents en production sous une semaine, ROI mesurable en moins de 6 mois, sur des sujets concrets (saisie comptable, qualification commerciale, support N1, tri CV). Encore fallait-il un acteur sérieux pour s'y consacrer. C'est ce qu'Althoce a décidé d'être.`,
    active: false,
  },
  {
    num: '03',
    label: "L'ancrage",
    text: null,
    richText: (
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.9, margin: 0 }}>
        <strong style={{ fontWeight: 700, color: '#09090b' }}>Nous sommes une agence française d'origine bordelaise.</strong> Pas un cabinet parisien qui découvre les régions. Notre culture professionnelle est ancrée dans un territoire industriel et viticole où l'on attend du concret et où la parole vaut le contrat. Nous intervenons aujourd'hui dans{' '}
        <a href="/agences/" style={{ color: AC, textDecoration: 'underline', textUnderlineOffset: 3 }}>20 villes françaises</a>, mais l'ADN reste bordelais.
      </p>
    ),
    active: false,
  },
  {
    num: '04',
    label: "Aujourd'hui",
    text: null,
    active: true,
  },
];

const CSS = `
  @keyframes abt-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes abt-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes abt-slideLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes abt-lineDraw {
    from { clip-path: inset(0 0 100% 0); }
    to   { clip-path: inset(0 0 0% 0); }
  }
  @keyframes abt-pulse {
    0%,100% { box-shadow: 0 0 0 0 ${AC}40; }
    50%      { box-shadow: 0 0 0 8px ${AC}00; }
  }
  @keyframes abt-blob1 {
    0%,100% { transform: translate(0,0) scale(1); }
    33%      { transform: translate(30px,-20px) scale(1.05); }
    66%      { transform: translate(-20px,15px) scale(.97); }
  }
  @keyframes abt-blob2 {
    0%,100% { transform: translate(0,0) scale(1); }
    40%      { transform: translate(-40px,25px) scale(1.07); }
    70%      { transform: translate(20px,-15px) scale(.95); }
  }
  @keyframes abt-countUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .abt-page { background: #fff; }

  /* ── Hero ── */
  .abt-hero-wrap {
    position: relative; overflow: hidden;
    padding: 120px 24px 96px;
    background: #fff; border-bottom: 1px solid #e4e4e7;
    text-align: center;
  }
  .abt-hero-grid {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(0,0,0,.028) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,.028) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }
  .abt-hero-inner { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
  .abt-breadcrumb {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    font-size: 14px; color: #a1a1aa; margin-bottom: 32px;
    animation: abt-fadeIn .4s ease both;
  }
  .abt-breadcrumb a { color: #a1a1aa; text-decoration: none; transition: color .15s; }
  .abt-breadcrumb a:hover { color: #8a8a95; }
  .abt-h1 {
    font-size: clamp(38px, 5.5vw, 76px);
    font-weight: 800; letter-spacing: -.055em;
    color: #09090b; line-height: 1.02; margin-bottom: 24px;
    animation: abt-fadeUp .65s .1s ease both;
  }
  .abt-hero-sub {
    font-size: clamp(15px, 1.8vw, 18px);
    color: #8a8a95; line-height: 1.78; margin-bottom: 36px;
    max-width: 580px; margin-left: auto; margin-right: auto;
    animation: abt-fadeUp .65s .18s ease both;
  }
  .abt-pills {
    display: flex; flex-wrap: wrap; gap: 8px;
    margin-bottom: 40px; justify-content: center;
    animation: abt-fadeUp .6s .26s ease both;
  }
  .abt-pill {
    font-size: 13px; font-weight: 600; color: #52525b;
    background: #fff; border-radius: 9999px; padding: 6px 14px;
    border: 1px solid #e4e4e7; box-shadow: 0 1px 3px rgba(0,0,0,.04);
  }
  .abt-ctas {
    display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
    animation: abt-fadeUp .6s .34s ease both;
  }
  .abt-cta-primary {
    padding: 13px 26px; border-radius: 9999px; background: #09090b; color: #fff;
    font-size: 15px; font-weight: 700; text-decoration: none;
    display: inline-flex; align-items: center; gap: 7px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 4px 12px rgba(0,0,0,.14), inset 0 1px 0 rgba(255,255,255,.06);
    transition: transform .18s cubic-bezier(.16,1,.3,1), box-shadow .18s ease;
  }
  .abt-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,.16), 0 10px 28px rgba(0,0,0,.22); }
  .abt-cta-ghost {
    padding: 13px 8px; font-size: 15px; font-weight: 600;
    color: #8a8a95; text-decoration: none;
    display: inline-flex; align-items: center; gap: 6px;
    transition: color .15s;
  }
  .abt-cta-ghost:hover { color: #09090b; }

  /* ── Timeline ── */
  .abt-histoire-section { padding: 96px 24px; border-bottom: 1px solid #e4e4e7; }
  .abt-histoire-inner { max-width: 960px; margin: 0 auto; }
  .abt-histoire-h2 {
    font-size: clamp(26px, 3vw, 42px); font-weight: 800;
    letter-spacing: -.045em; color: #09090b;
    line-height: 1.08; margin-bottom: 64px; max-width: 640px;
  }
  .abt-timeline { position: relative; padding-left: 52px; }
  .abt-timeline-track {
    position: absolute; left: 11px; top: 12px; bottom: 48px;
    width: 1.5px;
    background: linear-gradient(to bottom, ${AC}80, ${AC}20, transparent);
  }
  .abt-tl-item { position: relative; margin-bottom: 56px; }
  .abt-tl-item:last-child { margin-bottom: 0; }
  .abt-tl-dot {
    position: absolute; left: -52px; top: 2px;
    width: 24px; height: 24px; border-radius: 50%;
    background: #fff; border: 1.5px solid #e4e4e7;
    display: flex; align-items: center; justify-content: center;
    transition: all .3s ease;
  }
  .abt-tl-dot span { font-size: 8.5px; font-weight: 800; color: #a1a1aa; }
  .abt-tl-dot.active {
    background: ${AC}; border-color: ${AC};
    animation: abt-pulse 2.5s ease-in-out infinite;
  }
  .abt-tl-dot.active span { color: #fff; }
  .abt-tl-label { font-size: 12px; font-weight: 800; color: #a1a1aa; text-transform: uppercase; letter-spacing: .13em; margin-bottom: 10px; }
  .abt-tl-label.active { color: ${AC}; }
  .abt-tl-text { font-size: 16px; color: #8a8a95; line-height: 1.9; }
  .abt-tl-text strong { font-weight: 700; color: #09090b; }
  .abt-tl-text a { color: ${AC}; text-decoration: underline; text-underline-offset: 3px; }

  /* Results dark card */
  .abt-results-card {
    background: #09090b; border-radius: 20px; padding: 36px 40px;
    border: 1px solid #1a1a1a;
    position: relative; overflow: hidden;
  }
  .abt-results-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, ${AC}50, transparent);
  }
  .abt-results-kpis {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 0; margin-bottom: 24px;
    border-bottom: 1px solid rgba(255,255,255,.06); padding-bottom: 24px;
  }
  .abt-results-kpi { padding-right: 24px; border-right: 1px solid rgba(255,255,255,.06); }
  .abt-results-kpi:last-child { padding-right: 0; border-right: none; padding-left: 24px; }
  .abt-results-kpi:nth-child(2) { padding-left: 24px; }
  .abt-results-val {
    font-size: clamp(24px, 2.8vw, 34px); font-weight: 900;
    letter-spacing: -.05em; color: #fff; margin-bottom: 4px; line-height: 1;
  }
  .abt-results-val em { color: ${AC}; font-style: normal; }
  .abt-results-lbl { font-size: 13px; color: #52525b; }
  .abt-results-note { font-size: 15px; color: #52525b; line-height: 1.78; }
  .abt-results-note strong { color: #a1a1aa; font-weight: 700; }

  /* ── Prose section ── */
  .abt-prose-section { padding: 96px 24px; position: relative; overflow: hidden; }
  .abt-prose-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }
  .abt-watermark {
    position: absolute; right: -10px; top: 50%; transform: translateY(-50%);
    font-size: clamp(100px,14vw,180px); font-weight: 900; color: #09090b;
    opacity: .022; line-height: 1; pointer-events: none;
    letter-spacing: -.05em; user-select: none; z-index: 0;
  }
  .abt-sh2 {
    font-size: clamp(22px, 2.5vw, 32px); font-weight: 800;
    letter-spacing: -.04em; color: #09090b; margin-bottom: 28px; line-height: 1.15;
  }
  .abt-p { font-size: 16px; color: #8a8a95; line-height: 1.9; margin-bottom: 20px; }
  .abt-p:last-child { margin-bottom: 0; }
  .abt-p a { color: ${AC}; text-decoration: underline; text-underline-offset: 3px; }
  .abt-p strong { font-weight: 700; color: #09090b; }

  /* Dark blockquote */
  .abt-dark-block {
    background: #09090b; border-radius: 20px; padding: 44px 52px;
    margin-top: 52px; position: relative; overflow: hidden;
    border: 1px solid #1a1a1a;
  }
  .abt-dark-block::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, ${AC}40, transparent);
  }
  .abt-dark-block::after {
    content: '"'; position: absolute; top: -30px; left: 28px;
    font-size: 180px; color: ${AC}; opacity: .06;
    font-family: Georgia, serif; line-height: 1; pointer-events: none;
  }
  .abt-dark-quote {
    font-size: 16px; color: #e4e4e7; line-height: 1.88;
    font-style: italic; margin-bottom: 20px; position: relative; z-index: 1;
  }
  .abt-dark-attr { font-size: 14px; font-weight: 700; color: #52525b; position: relative; z-index: 1; }
  .abt-dark-attr span { color: ${AC}; }

  /* ── Valeurs ── */
  .abt-valeurs-section { padding: 96px 24px; border-top: 1px solid #e4e4e7; }
  .abt-valeurs-inner { max-width: 1100px; margin: 0 auto; }
  .abt-valeurs-top {
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
    align-items: end; margin-bottom: 52px;
  }
  .abt-valeurs-sub { font-size: 16px; color: #52525b; line-height: 1.75; }
  .abt-valeurs-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1px; background: #e4e4e7; border-radius: 24px; overflow: hidden;
  }
  .abt-valeur-card {
    background: #fff; padding: 44px 40px;
    position: relative; overflow: hidden;
    transition: background .25s ease, transform .25s cubic-bezier(.16,1,.3,1);
    cursor: default;
  }
  .abt-valeur-card:hover { background: #f9f9fb; }
  .abt-valeur-card:hover .abt-valeur-accent { transform: scaleY(1); opacity: 1; }
  .abt-valeur-card:hover .abt-valeur-icon { background: ${AC}18; border-color: ${AC}30; color: ${AC}; }
  .abt-valeur-accent {
    position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
    background: linear-gradient(to bottom, ${AC}, ${AC}60);
    transform: scaleY(0); transform-origin: top;
    opacity: 0; transition: transform .3s cubic-bezier(.16,1,.3,1), opacity .2s;
    border-radius: 0 2px 2px 0;
  }
  .abt-valeur-wm {
    position: absolute; right: -8px; bottom: -20px;
    font-size: 88px; font-weight: 900; color: ${AC};
    opacity: .04; line-height: 1; letter-spacing: -.05em;
    user-select: none; pointer-events: none;
    transition: opacity .3s ease;
  }
  .abt-valeur-card:hover .abt-valeur-wm { opacity: .07; }
  .abt-valeur-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: #f4f4f5; border: 1.5px solid #e4e4e7;
    display: flex; align-items: center; justify-content: center;
    color: #8a8a95; margin-bottom: 20px;
    transition: background .25s ease, border-color .25s ease, color .25s ease;
  }
  .abt-valeur-num { font-size: 11px; font-weight: 800; color: ${AC}; letter-spacing: .18em; text-transform: uppercase; margin-bottom: 10px; }
  .abt-valeur-title { font-size: 17px; font-weight: 800; color: #09090b; letter-spacing: -.025em; margin-bottom: 10px; line-height: 1.3; }
  .abt-valeur-desc { font-size: 15px; color: #8a8a95; line-height: 1.82; }

  /* ── Équipe ── */
  .abt-equipe-section { padding: 96px 24px; border-top: 1px solid #e4e4e7; }
  .abt-equipe-inner { max-width: 1100px; margin: 0 auto; }
  .abt-equipe-top { max-width: 640px; margin-bottom: 56px; }
  .abt-equipe-sub { font-size: 16px; color: #52525b; line-height: 1.75; margin-top: 16px; }
  .abt-equipe-layers {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 16px; margin-bottom: 0;
  }
  .abt-equipe-layer {
    background: #fff; padding: 36px 32px; border-radius: 20px;
    border: 1px solid #e4e4e7;
    box-shadow: 0 1px 4px rgba(0,0,0,.03);
    transition: transform .22s cubic-bezier(.16,1,.3,1), border-color .2s ease, box-shadow .22s ease;
    position: relative; overflow: hidden;
  }
  .abt-equipe-layer::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, ${AC}, ${AC}40);
    transform: scaleX(0); transform-origin: left;
    transition: transform .3s cubic-bezier(.16,1,.3,1);
  }
  .abt-equipe-layer:hover::before { transform: scaleX(1); }
  .abt-equipe-layer:hover {
    transform: translateY(-5px);
    border-color: ${AC}30;
    box-shadow: 0 14px 40px rgba(37,99,235,.08), 0 4px 12px rgba(0,0,0,.04);
  }
  .abt-equipe-layer-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 12px; border-radius: 9999px;
    background: ${AC}0c; border: 1px solid ${AC}1e;
    font-size: 11px; font-weight: 800; color: ${AC};
    letter-spacing: .1em; text-transform: uppercase; margin-bottom: 18px;
  }
  .abt-equipe-layer-num { font-size: 12px; font-weight: 800; color: ${AC}; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 14px; }
  .abt-equipe-layer-title { font-size: 16px; font-weight: 800; color: #09090b; letter-spacing: -.025em; margin-bottom: 10px; line-height: 1.3; }
  .abt-equipe-layer-desc { font-size: 15px; color: #8a8a95; line-height: 1.82; }

  /* ── FAQ ── */
  .abt-faq-section { background: #fafafa; padding: 96px 24px; border-top: 1px solid #e4e4e7; }
  .abt-faq-inner { max-width: 720px; margin: 0 auto; }
  .abt-faq-header { margin-bottom: 48px; }
  .abt-faq-h2 { font-size: clamp(22px, 2.5vw, 32px); font-weight: 800; letter-spacing: -.04em; color: #09090b; line-height: 1.15; margin-bottom: 10px; }
  .abt-faq-sub { font-size: 16px; color: #8a8a95; line-height: 1.68; }
  .abt-faq-list {
    border: 1px solid #e4e4e7; border-radius: 18px; overflow: hidden;
    background: #fff; box-shadow: 0 2px 12px rgba(0,0,0,.04);
  }
  .abt-faq-item { border-bottom: 1px solid #f0f0f0; }
  .abt-faq-item:last-child { border-bottom: none; }
  .abt-faq-btn {
    width: 100%; text-align: left; background: none; border: none;
    padding: 20px 24px; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center;
    gap: 16px; font-family: inherit;
    transition: background .15s ease;
  }
  .abt-faq-btn:hover { background: #fafafa; }
  .abt-faq-q { font-size: 16px; font-weight: 700; color: #09090b; line-height: 1.4; transition: color .2s ease; flex: 1; }
  .abt-faq-q.active { color: ${AC}; }
  .abt-faq-icon {
    width: 26px; height: 26px; flex-shrink: 0; border-radius: 50%;
    background: #f4f4f5; display: flex; align-items: center; justify-content: center;
    font-size: 18px; font-weight: 300; color: #8a8a95; line-height: 1;
    transition: background .22s ease, color .22s ease, transform .22s cubic-bezier(.16,1,.3,1);
  }
  .abt-faq-icon.open { background: ${AC}; color: #fff; transform: rotate(45deg); }
  .abt-faq-body { max-height: 0; overflow: hidden; transition: max-height .32s cubic-bezier(.4,0,.2,1); }
  .abt-faq-body.open { max-height: 300px; }
  .abt-faq-answer { font-size: 14.5px; color: #52525b; line-height: 1.82; padding: 0 24px 22px; }

  /* ── Mobile ── */
  @media (max-width: 900px) {
    .abt-hero-wrap { padding: 100px 20px 72px; }
    .abt-prose-section { padding: 64px 20px; }
    .abt-watermark { display: none; }
    .abt-valeurs-section { padding: 64px 20px; }
    .abt-valeurs-top { grid-template-columns: 1fr; gap: 12px; margin-bottom: 32px; }
    .abt-valeurs-grid { grid-template-columns: 1fr; border-radius: 16px; }
    .abt-valeur-card { padding: 32px 28px; }
    .abt-equipe-section { padding: 64px 20px; }
    .abt-equipe-layers { grid-template-columns: 1fr; }
    .abt-faq-section { padding: 64px 20px; }
    .abt-dark-block { padding: 32px 28px; }
    .abt-histoire-section { padding: 64px 20px; }
    .abt-histoire-h2 { margin-bottom: 48px; }
    .abt-results-kpis { grid-template-columns: 1fr 1fr; gap: 16px; }
    .abt-results-kpi, .abt-results-kpi:last-child, .abt-results-kpi:nth-child(2) { padding: 0; border: none; }
  }
  @media (max-width: 560px) {
    .abt-results-kpis { grid-template-columns: 1fr; }
    .abt-results-card { padding: 28px 24px; }
  }
`;

// ── Equipe layer icons ────────────────────────────────────────
const equipeIcons = [
  <svg key="e0" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 14c0-3.31 2.686-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="e1" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="11" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M1 13c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
  <svg key="e2" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2l5 2v4c0 3-2 5-5 6C3 13 1 11 1 8V4l7-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

export default function AProposPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [heroRef]    = useInView(0);
  const [histRef, histVisible]   = useInView(0.06);
  const [proseRef, proseVisible] = useInView(0.08);
  const [valRef, valVisible]     = useInView(0.06);
  const [eqRef, eqVisible]       = useInView(0.06);
  const [faqRef, faqVisible]     = useInView(0.06);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Navbar />

      <main className="abt-page">

        {/* ── Section 1 : Hero ── */}
        <div className="abt-hero-wrap" ref={heroRef as React.RefObject<HTMLDivElement>}>
          {/* Gradient blobs */}
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '-15%', left: '-8%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}0f 0%,transparent 65%)`, filter: 'blur(70px)', animation: 'abt-blob1 14s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', top: '10%', right: '-6%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,#7c3aed0a 0%,transparent 65%)', filter: 'blur(90px)', animation: 'abt-blob2 18s ease-in-out infinite' }} />
          </div>
          <div className="abt-hero-grid" aria-hidden="true" />

          <div className="abt-hero-inner">
            <nav className="abt-breadcrumb" aria-label="Fil d'Ariane">
              <a href="/">Accueil</a>
              <span>›</span>
              <span style={{ color: '#52525b', fontWeight: 600 }}>À propos</span>
            </nav>

            <h1 className="abt-h1">L'histoire d'Althoce.</h1>

            <p className="abt-hero-sub">
              Agence IA française d'origine bordelaise. Une équipe concentrée sur un seul cap : démocratiser l'IA responsable dans les PME et ETI françaises.
            </p>

            <div className="abt-pills">
              {[
                { t: 'Origine Bordeaux', dot: AC },
                { t: '+150 PME équipées', dot: '#22c55e' },
                { t: 'Fondée en 2025',   dot: '#8b5cf6' },
              ].map(({ t, dot }) => (
                <span key={t} className="abt-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: dot, flexShrink: 0 }} />
                  {t}
                </span>
              ))}
            </div>

            <div className="abt-ctas">
              <a href="/contact/" className="abt-cta-primary">
                Discuter de votre projet
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M7.5 3.5L11.5 7L7.5 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#histoire" className="abt-cta-ghost">
                Lire l'histoire
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" style={{ transform: 'rotate(90deg)' }}>
                  <path d="M6.5 2v9M3 8l3.5 3.5L10 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Section 2 : Notre histoire ── */}
        <section id="histoire" className="abt-histoire-section" ref={histRef as React.RefObject<HTMLElement>}>
          <div className="abt-histoire-inner">
            <h2
              className="abt-histoire-h2"
              style={{ opacity: histVisible ? 1 : 0, transform: histVisible ? 'none' : 'translateY(24px)', transition: 'opacity .6s ease, transform .6s ease' }}
            >
              D'un constat à une agence IA française d'origine bordelaise
            </h2>

            <div className="abt-timeline">
              {/* Animated vertical track */}
              <div
                className="abt-timeline-track"
                style={{ opacity: histVisible ? 1 : 0, transition: 'opacity .4s .3s ease' }}
                aria-hidden="true"
              />

              {tlSteps.map((s, i) => (
                <div
                  key={i}
                  className="abt-tl-item"
                  style={{
                    opacity: histVisible ? 1 : 0,
                    transform: histVisible ? 'none' : 'translateX(-16px)',
                    transition: `opacity .6s ${.2 + i * .15}s ease, transform .6s ${.2 + i * .15}s ease`,
                  }}
                >
                  <div className={`abt-tl-dot${s.active ? ' active' : ''}`}>
                    {s.active ? (
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5l2.5 2.5L9 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <span>{s.num}</span>
                    )}
                  </div>
                  <div className={`abt-tl-label${s.active ? ' active' : ''}`}>{s.label}</div>

                  {s.active ? (
                    /* Results card */
                    <div className="abt-results-card">
                      {/* Subtle ambient glow */}
                      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 200, background: `radial-gradient(ellipse,${AC}10 0%,transparent 70%)`, pointerEvents: 'none' }} />
                      <div className="abt-results-kpis">
                        {[
                          { val: '+150', lbl: 'PME équipées' },
                          { val: '+758', lbl: 'agents en production' },
                          { val: '+5 M€', lbl: 'économisés' },
                        ].map(({ val, lbl }, j) => (
                          <div
                            key={j}
                            className="abt-results-kpi"
                            style={{ animation: histVisible ? `abt-countUp .5s ${.4 + j * .12}s ease both` : 'none' }}
                          >
                            <div className="abt-results-val" style={{ color: '#fff' }}>
                              <em>{val.charAt(0)}</em>{val.slice(1)}
                            </div>
                            <div className="abt-results-lbl">{lbl}</div>
                          </div>
                        ))}
                      </div>
                      <p className="abt-results-note">
                        Et <strong>aucune mission acceptée dont l'objectif serait un plan de licenciement</strong>, c'est inscrit dans notre méthode. La mission ne change pas : démocratiser l'usage de l'IA dans les entreprises françaises, de manière responsable.
                      </p>
                    </div>
                  ) : s.richText ? (
                    s.richText
                  ) : (
                    <p className="abt-tl-text">{s.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3 : Pourquoi Althoce existe ── */}
        <section
          className="abt-prose-section"
          style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}
          ref={proseRef as React.RefObject<HTMLElement>}
        >
          <span className="abt-watermark" aria-hidden="true">02</span>
          <div
            className="abt-prose-inner"
            style={{ opacity: proseVisible ? 1 : 0, transform: proseVisible ? 'none' : 'translateY(28px)', transition: 'opacity .65s ease, transform .65s ease' }}
          >
            <h2 className="abt-sh2">Trois choix structurants qui guident chaque mission</h2>

            <p className="abt-p">
              Une PME, c'est un dirigeant qui décide vite, qui finance sur sa trésorerie, qui veut du résultat opérationnel. Cela impose une discipline qu'on ne voit pas dans le conseil traditionnel : délais courts, prix accessibles, ROI mesurable, engagement humain. C'est exigeant. C'est ce que nous faisons depuis le premier jour.
            </p>

            <p className="abt-p">
              Notre stack standard est française : Mistral hébergé en France via OVH et Scaleway, anonymisation systématique avant toute API tierce. Pas par idéologie. Par pragmatisme : une PME qui exfiltre ses données vers les serveurs US perd une partie de sa souveraineté économique.
            </p>

            <p className="abt-p">
              Pas de plan de licenciement caché derrière l'IA. Pas de tri CV sans documentation anti-biais opposable. Pas de boîte noire technologique. Ces trois engagements ne sont pas du marketing, c'est ce qui fait que nos clients nous gardent.
            </p>

            <div
              className="abt-dark-block"
              style={{ opacity: proseVisible ? 1 : 0, transform: proseVisible ? 'none' : 'translateY(16px)', transition: 'opacity .65s .2s ease, transform .65s .2s ease' }}
            >
              {/* Ambient glow */}
              <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 300, height: 150, background: `radial-gradient(ellipse,${AC}12 0%,transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} />
              <p className="abt-dark-quote">
                « Une PME française qui se transforme par l'IA n'a pas besoin d'un cabinet stratégique à 200 000 €. Elle a besoin d'un partenaire qui descend dans l'opérationnel, qui livre vite, qui respecte ses équipes, et qui garde les données en France. »
              </p>
              <div className="abt-dark-attr"><span>L'équipe Althoce</span></div>
            </div>
          </div>
        </section>

        {/* ── Section 4 : Nos valeurs ── */}
        <section className="abt-valeurs-section" ref={valRef as React.RefObject<HTMLElement>}>
          <div className="abt-valeurs-inner">
            <div
              className="abt-valeurs-top"
              style={{ opacity: valVisible ? 1 : 0, transform: valVisible ? 'none' : 'translateY(20px)', transition: 'opacity .6s ease, transform .6s ease' }}
            >
              <div>
                <h2 className="abt-sh2" style={{ marginBottom: 0 }}>Quatre valeurs concrètes</h2>
              </div>
              <div>
                <p className="abt-valeurs-sub">Pas des slogans. Des arbitrages que nous faisons au quotidien, qui orientent nos choix de missions, de prestations et de partenariats.</p>
              </div>
            </div>

            <div className="abt-valeurs-grid">
              {valeurs.map((v, i) => (
                <div
                  key={v.num}
                  className="abt-valeur-card"
                  style={{
                    opacity: valVisible ? 1 : 0,
                    transform: valVisible ? 'none' : 'translateY(20px)',
                    transition: `opacity .55s ${.1 + i * .1}s ease, transform .55s ${.1 + i * .1}s ease, background .25s ease`,
                  }}
                >
                  <div className="abt-valeur-accent" />
                  <div className="abt-valeur-wm" aria-hidden="true">{v.num}</div>
                  <div className="abt-valeur-icon">{v.icon}</div>
                  <div className="abt-valeur-num">{v.num}</div>
                  <div className="abt-valeur-title">{v.title}</div>
                  <div className="abt-valeur-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5 : Équipe ── */}
        <section className="abt-equipe-section" ref={eqRef as React.RefObject<HTMLElement>}>
          <div className="abt-equipe-inner">

            <div
              className="abt-equipe-top"
              style={{ opacity: eqVisible ? 1 : 0, transform: eqVisible ? 'none' : 'translateY(20px)', transition: 'opacity .6s ease, transform .6s ease' }}
            >
              <h2 className="abt-sh2">Une équipe française, exigeante, concentrée</h2>
              <p className="abt-equipe-sub">
                Organisation volontairement dense : pas de pyramide à 5 étages, pas de département PowerPoint. Chaque consultant intervient sur le cadrage, la conception et la mise en production de ses missions, ce qui garantit la cohérence de bout en bout.
              </p>
            </div>

            <div className="abt-equipe-layers">
              {[
                {
                  badge: 'Noyau permanent',
                  title: 'Arbitrage collectif',
                  desc: 'Sélection des missions, souveraineté, anti-biais, gouvernance. Les décisions stratégiques sont prises collectivement, pas en silo.',
                },
                {
                  badge: 'Consultants spécialisés',
                  title: 'Mobilisés à la mission',
                  desc: 'Développeurs IA seniors, experts métier sectoriels, juristes IT, designers conversationnels. Sélectionnés sur expertise objectivable et expérience PME avérée.',
                },
                {
                  badge: 'Partenaires techniques',
                  title: 'Stack souveraine',
                  desc: 'OVH, Scaleway, Mistral. Hébergement et modèles 100 % français. Aucune donnée nominative transmise à des tiers sans accord client explicite.',
                },
              ].map((layer, i) => (
                <div
                  key={i}
                  className="abt-equipe-layer"
                  style={{
                    opacity: eqVisible ? 1 : 0,
                    transform: eqVisible ? 'none' : 'translateY(24px)',
                    transition: `opacity .55s ${.1 + i * .12}s ease, transform .55s ${.1 + i * .12}s ease, border-color .2s ease, box-shadow .22s ease`,
                  }}
                >
                  <div className="abt-equipe-layer-badge">
                    <span style={{ color: equipeIcons[i] ? 'inherit' : AC }}>{equipeIcons[i]}</span>
                    {layer.badge}
                  </div>
                  <div className="abt-equipe-layer-title">{layer.title}</div>
                  <div className="abt-equipe-layer-desc">{layer.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Section 6 : FAQ ── */}
        <section className="abt-faq-section" ref={faqRef as React.RefObject<HTMLElement>}>
          <div className="abt-faq-inner">
            <div
              className="abt-faq-header"
              style={{ opacity: faqVisible ? 1 : 0, transform: faqVisible ? 'none' : 'translateY(20px)', transition: 'opacity .6s ease, transform .6s ease' }}
            >
              <h2 className="abt-faq-h2">Questions fréquentes sur Althoce</h2>
              <p className="abt-faq-sub">Organisation, recrutement, ancrage bordelais, ambitions : ce que vous vous demandez sur nous.</p>
            </div>

            <div
              className="abt-faq-list"
              style={{ opacity: faqVisible ? 1 : 0, transform: faqVisible ? 'none' : 'translateY(16px)', transition: 'opacity .6s .1s ease, transform .6s .1s ease' }}
            >
              {faqs.map((faq, i) => (
                <div key={i} className="abt-faq-item">
                  <button
                    className="abt-faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className={`abt-faq-q${openFaq === i ? ' active' : ''}`}>{faq.q}</span>
                    <span className={`abt-faq-icon${openFaq === i ? ' open' : ''}`}>+</span>
                  </button>
                  <div className={`abt-faq-body${openFaq === i ? ' open' : ''}`}>
                    <p className="abt-faq-answer">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
