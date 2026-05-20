'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  heroLogos, statsV2, agentMetiers, agentTags, steps,
  caseStudies, pricingPlans, securityItems, faqsV2, forWhoCards,
  servicesV2,
} from '@/lib/data';
import { AnimatedCounter } from '@/components/ui/motion/AnimatedCounter';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import { AnimChart } from '@/components/ui/data-display/AnimChart';

const AC = '#2563eb';

// ── Shared hook ──────────────────────────────────────────────
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
  return [ref, visible] as const;
}

// ── Shared UI atoms ──────────────────────────────────────────
function H2({ children, style: sx = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.12, ...sx }}>
      {children}
    </h2>
  );
}

function SectionBadge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 9999, background: dark ? 'rgba(37,99,235,.12)' : 'rgba(37,99,235,.06)', border: `1px solid ${dark ? 'rgba(37,99,235,.3)' : 'rgba(37,99,235,.2)'}`, fontSize: 11, fontWeight: 800, color: AC, letterSpacing: '.1em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
      {children}
    </div>
  );
}

// ── SECTION 1 — Hero ─────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '120px 24px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="hero-h1"
    >
      {/* Animated gradient blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 700, height: 700, borderRadius: '50%', background: `radial-gradient(circle,${AC}14 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '20%', right: '-8%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle,#7c3aed12 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '30%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#0891b20e 0%,transparent 65%)', filter: 'blur(90px)', animation: 'gradDrift3 12s ease-in-out infinite' }} />
      </div>
      {/* Grid pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 820, margin: '0 auto' }}>
        {/* Hero badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px 6px 8px', borderRadius: 9999, border: '1px solid #e4e4e7', background: 'rgba(255,255,255,.92)', fontSize: 12, fontWeight: 700, color: '#52525b', marginBottom: 32, animation: 'fadeUp .5s ease both', backdropFilter: 'blur(10px)', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 9999, background: `${AC}12`, border: `1px solid ${AC}25`, fontSize: 11, fontWeight: 800, color: AC }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 0 2px #22c55e30', animation: 'pulseDot 2s ease-in-out infinite' }} />
            Actif
          </span>
          +150 entreprises nous font confiance
        </div>

        <h1 id="hero-h1" style={{ fontSize: 'clamp(36px,5.5vw,70px)', fontWeight: 800, lineHeight: 1.07, letterSpacing: '-.04em', color: '#09090b', marginBottom: 24, animation: 'fadeUp .6s .1s ease both' }}>
          Agence IA &amp; Automatisation.<br />
          On déploie des <span style={{ color: AC }}>agents IA</span> 100% autonomes.
        </h1>

        <p style={{ fontSize: 17, color: '#52525b', lineHeight: 1.72, maxWidth: 540, margin: '0 auto 36px', animation: 'fadeUp .6s .2s ease both', fontWeight: 400 }}>
          Nous concevons des employés IA sur-mesure pour les PME et ETI françaises : ils libèrent vos talents des tâches répétitives, sans valeur ajoutée.
        </p>

        {/* Proof pills */}
        <div style={{ width: '100%', overflow: 'hidden', marginBottom: 36, animation: 'fadeUp .6s .25s ease both' }}>
          <div className="home-pills" style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { t: '+150 PME accompagnées', dot: '#22c55e' },
              { t: '9 M€ économisés',       dot: AC },
              { t: 'Données hébergées en UE', dot: '#8b5cf6' },
              { t: 'Audit offert 48h',       dot: '#f59e0b' },
              { t: '+150 PME accompagnées', dot: '#22c55e' },
              { t: '9 M€ économisés',       dot: AC },
              { t: 'Données hébergées en UE', dot: '#8b5cf6' },
              { t: 'Audit offert 48h',       dot: '#f59e0b' },
            ].map(({ t, dot }, i) => (
              <span key={i} className={i >= 4 ? 'pill-dup' : undefined} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 14px', borderRadius: 9999, background: '#fff', border: '1px solid #e4e4e7', fontSize: 12, fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: dot, flexShrink: 0 }} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeUp .6s .3s ease both' }}>
          <a href="/contact" className="btn-primary">
            Discutons de votre projet
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M7.5 3.5L11.5 7L7.5 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#agents" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: '#71717a', fontFamily: 'inherit', padding: '13px 8px', transition: 'color .15s', textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#09090b'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#71717a'; }}>
            Explorer nos agents IA
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ transform: 'rotate(90deg)' }}>
              <path d="M7 2.5V11.5M3.5 8L7 11.5L10.5 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Trust logos */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 900, marginTop: 80, overflow: 'hidden' }}>
        <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, color: '#a1a1aa', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 20 }}>Ils nous font confiance</p>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2, pointerEvents: 'none' }} aria-hidden="true" />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2, pointerEvents: 'none' }} aria-hidden="true" />
          <div className="ticker" role="marquee" aria-label="Logos clients">
            {[...heroLogos, ...heroLogos].map((src, i) => (
              <div key={i} style={{ padding: '0 36px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                <img src={src} alt="client Althoce agence IA" style={{ height: 32, width: 'auto', objectFit: 'contain', opacity: .4, filter: 'grayscale(1)', transition: 'opacity .2s' }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 2 — Stats ────────────────────────────────────────
function Stats() {
  const [ref, visible] = useInView();

  const statIcons = [
    // Line chart
    <svg key="s0" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 36L16 24L24 30L40 12" fill="none" stroke={AC} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="24" r="3" fill={AC}><animate attributeName="r" values="3;4.5;3" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx="24" cy="30" r="3" fill={AC}><animate attributeName="r" values="3;4.5;3" dur="2s" begin="0.3s" repeatCount="indefinite" /></circle>
      <circle cx="40" cy="12" r="3" fill={AC}><animate attributeName="r" values="3;4.5;3" dur="2s" begin="0.6s" repeatCount="indefinite" /></circle>
    </svg>,
    // Euro
    <svg key="s1" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="16" fill="none" stroke={AC} strokeWidth="2.5" />
      <path d="M30 16C28 14 26 13 24 13C19 13 15 17 15 24C15 31 19 35 24 35C26 35 28 34 30 32" fill="none" stroke={AC} strokeWidth="3" strokeLinecap="round" />
      <line x1="14" y1="21" x2="28" y2="21" stroke={AC} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="27" x2="28" y2="27" stroke={AC} strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
    // Network nodes
    <svg key="s2" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
      <line x1="12" y1="12" x2="24" y2="24" stroke={AC} strokeWidth="2" opacity="0.3" />
      <line x1="24" y1="24" x2="36" y2="12" stroke={AC} strokeWidth="2" opacity="0.3" />
      <line x1="12" y1="36" x2="24" y2="24" stroke={AC} strokeWidth="2" opacity="0.3" />
      <line x1="24" y1="24" x2="36" y2="36" stroke={AC} strokeWidth="2" opacity="0.3" />
      <circle cx="12" cy="12" r="4" fill={AC} /><circle cx="36" cy="12" r="4" fill={AC} />
      <circle cx="12" cy="36" r="4" fill={AC} /><circle cx="36" cy="36" r="4" fill={AC} />
      <circle cx="24" cy="24" r="5" fill={AC}><animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" /></circle>
    </svg>,
    // Clock
    <svg key="s3" width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="16" fill="none" stroke={AC} strokeWidth="2.5" />
      <path d="M24 24L24 12" stroke={AC} strokeWidth="3" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="3s" repeatCount="indefinite" />
      </path>
      <circle cx="24" cy="24" r="2.5" fill={AC} />
    </svg>,
  ];

  const counterProps = [
    { target: 150, prefix: '+', suffix: '' },
    { target: 95, prefix: '-', suffix: '%' },
    { target: 870, prefix: '+', suffix: '' },
    { target: 9, prefix: '', suffix: ' M€' },
  ];

  return (
    <section ref={ref} style={{ borderTop: '1px solid #e4e4e7', background: 'linear-gradient(180deg,#fafafa 0%,#fff 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 450, background: `radial-gradient(ellipse,${AC}07 0%,transparent 68%)`, pointerEvents: 'none' }} aria-hidden="true" />
      <div className="stats-section" style={{ maxWidth: 1160, margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1 }}>
        <div className="stats-header" style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all .6s ease' }}>
          <H2>Des résultats concrets, mesurés chez nos clients.</H2>
          <p style={{ fontSize: 16, color: '#52525b', marginTop: 14, maxWidth: 520, margin: '14px auto 0', lineHeight: 1.72 }}>On ne promet pas la lune. On mesure avant, pendant, et après chaque mission.</p>
        </div>

        <div className="v2-grid4 stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, border: '1px solid #e4e4e7', borderRadius: 20, overflow: 'hidden', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,.04)' }}>
          {statsV2.map((s, i) => (
            <div key={i} className="stats-card" style={{ padding: '36px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid #e4e4e7' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .6s ${i * .12}s ease`, position: 'relative' }}>
              <div className="stats-icon" style={{ width: 64, height: 64, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${AC}06`, borderRadius: 16, border: `1px solid ${AC}12` }}>
                {statIcons[i]}
              </div>
              <div className="stats-number" style={{ fontSize: 'clamp(36px,4.5vw,52px)', fontWeight: 800, color: '#09090b', letterSpacing: '-.05em', lineHeight: 1, marginBottom: 10 }}>
                {visible ? (
                  <AnimatedCounter target={counterProps[i].target} prefix={counterProps[i].prefix} suffix={counterProps[i].suffix} />
                ) : (
                  <span>{counterProps[i].prefix}0{counterProps[i].suffix}</span>
                )}
              </div>
              <div style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.12em', color: AC, marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 14, color: '#52525b', lineHeight: 1.6 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3 — What is an AI agent ─────────────────────────
function WhatIsAgent() {
  const [ref, visible] = useInView();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const interval = setInterval(() => setActiveStep((s) => (s + 1) % 3), 2800);
    return () => clearInterval(interval);
  }, [visible]);

  const orbSteps = [
    { title: 'Lecture', label: '01', desc: "L'agent perçoit et comprend le contexte : mail, document, CRM, ticket.", color: '#3b82f6', icon: (c: string) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="20" height="18" rx="3" stroke={c} strokeWidth="1.8"/>
        <path d="M4 10H24" stroke={c} strokeWidth="1.5"/>
        <path d="M8 15H14" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 19H17" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="21" cy="19" r="3.5" fill={c} fillOpacity=".15" stroke={c} strokeWidth="1.5"/>
        <path d="M20.2 19L21 19.8L22.2 18.5" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { title: 'Décision', label: '02', desc: "Il raisonne sur le but, choisit l'action optimale, estime la confiance.", color: '#8b5cf6', icon: (c: string) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke={c} strokeWidth="1.8"/>
        <path d="M14 5V7M14 21V23M5 14H7M21 14H23" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3.5" fill={c} fillOpacity=".2" stroke={c} strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="1.5" fill={c}/>
      </svg>
    )},
    { title: 'Action', label: '03', desc: "Il agit sur vos outils : envoie un mail, met à jour le CRM, alerte Slack.", color: '#22c55e', icon: (c: string) => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 14L10 14L13 7L15 21L18 14L24 14" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="14" r="2.5" fill={c}/>
      </svg>
    )},
  ];

  // Orbital positioning: top, bottom-left, bottom-right
  const orbitAngles = [-90, 150, 30];

  return (
    <section id="agents" ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7', position: 'relative', overflow: 'hidden' }}>
      {/* subtle bg blob */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,#7c3aed0a 0%,transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="v2-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

          {/* ── Left ── */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 style={{ marginBottom: 18 }}>Un agent IA, c'est quoi exactement&nbsp;?</H2>
            <p style={{ fontSize: 15.5, color: '#52525b', lineHeight: 1.8, marginBottom: 36 }}>
              Un chatbot répond. Un workflow exécute. Un agent IA, c'est autre chose :
              un <strong style={{ color: '#09090b', fontWeight: 800 }}>collaborateur virtuel qui perçoit, raisonne, puis agit</strong> dans vos outils — sans fatigue, sans oubli, 24h/24.
            </p>

            {/* Steps timeline */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 36 }}>
              {/* Vertical track */}
              <div style={{ position: 'absolute', left: 21, top: 44, bottom: 44, width: 2, background: 'linear-gradient(to bottom,#3b82f640,#8b5cf640,#22c55e40)', borderRadius: 2, zIndex: 0 }} aria-hidden="true" />

              {orbSteps.map((s, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '16px 20px 16px 0', cursor: 'default', position: 'relative', zIndex: 1 }}
                  onMouseEnter={() => setActiveStep(i)}
                >
                  {/* Bullet */}
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: activeStep === i ? s.color : '#f4f4f5', border: `2px solid ${activeStep === i ? s.color : '#e4e4e7'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .35s ease', boxShadow: activeStep === i ? `0 0 0 6px ${s.color}15` : 'none' }}>
                    {activeStep === i
                      ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10L8.5 14.5L16 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      : <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa' }}>{i + 1}</span>
                    }
                  </div>

                  {/* Content card */}
                  <div style={{ flex: 1, padding: '14px 18px', borderRadius: 14, background: activeStep === i ? `${s.color}06` : 'transparent', border: `1.5px solid ${activeStep === i ? s.color + '28' : 'transparent'}`, transition: 'all .35s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                      <span style={{ fontSize: 9, fontWeight: 800, color: s.color, letterSpacing: '.12em', textTransform: 'uppercase' }}>{s.label}</span>
                      <span style={{ fontSize: 15, fontWeight: 800, color: '#09090b', letterSpacing: '-.02em' }}>{s.title}</span>
                    </div>
                    <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Example box — styled as a mini chat/email UI */}
            <div style={{ borderRadius: 16, border: '1px solid #e4e4e7', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,.06)' }}>
              <div style={{ padding: '10px 16px', background: '#fafafa', borderBottom: '1px solid #e4e4e7', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 5 }}>{['#ef4444','#f59e0b','#22c55e'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}</div>
                <span style={{ fontSize: 11, color: '#a1a1aa', fontWeight: 600, marginLeft: 4 }}>Agent Althoce — mail entrant</span>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s ease-in-out infinite' }} />
                  <span style={{ fontSize: 10, color: '#22c55e', fontWeight: 700 }}>En ligne</span>
                </div>
              </div>
              <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { icon: '📧', text: 'Mail reçu — demande de devis', sub: 'il y a 2s', color: '#3b82f6' },
                  { icon: '🔍', text: 'Lecture du contexte + historique client', sub: 'il y a 1s', color: '#8b5cf6' },
                  { icon: '✍️', text: 'Devis rédigé dans votre ton de voix', sub: 'maintenant', color: '#22c55e' },
                  { icon: '👤', text: 'En attente de validation humaine (30 sec)', sub: '', color: AC },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 10, background: i === 3 ? `${AC}08` : '#fafafa', border: i === 3 ? `1px solid ${AC}20` : '1px solid transparent' }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{row.icon}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: i === 3 ? AC : '#374151', flex: 1 }}>{row.text}</span>
                    {row.sub && <span style={{ fontSize: 10, color: '#a1a1aa', whiteSpace: 'nowrap' }}>{row.sub}</span>}
                    {i < 3 && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7L6 10L11 4" stroke={row.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right — orbital ── */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'scale(.95)', transition: 'all .7s .2s ease' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: 'linear-gradient(145deg,#0d1117 0%,#0f172a 60%,#111827 100%)', borderRadius: 28, overflow: 'hidden', border: '1px solid #1e293b', boxShadow: '0 32px 80px rgba(0,0,0,.2)' }}>

              {/* Background grid */}
              <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

              {/* Ambient glow behind center */}
              <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 260, height: 260, borderRadius: '50%', background: `radial-gradient(circle,${AC}20 0%,transparent 70%)`, filter: 'blur(30px)' }} />

              {/* SVG layer: orbit ring + connection lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }} viewBox="0 0 400 400" aria-hidden="true">
                {/* Dashed orbit ring */}
                <circle cx="200" cy="200" r="130" fill="none" stroke="#ffffff08" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="200" cy="200" r="130" fill="none" stroke={`${orbSteps[activeStep].color}30`} strokeWidth="1.5" strokeDasharray="40 200" style={{ transition: 'stroke .4s ease' }}>
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="10s" repeatCount="indefinite" />
                </circle>

                {/* Connection lines */}
                {orbitAngles.map((angleDeg, i) => {
                  const rad = angleDeg * Math.PI / 180;
                  const x2 = 200 + Math.cos(rad) * 130;
                  const y2 = 200 + Math.sin(rad) * 130;
                  const x1 = 200 + Math.cos(rad) * 56;
                  const y1 = 200 + Math.sin(rad) * 56;
                  const isActive = activeStep === i;
                  return (
                    <g key={i}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={isActive ? orbSteps[i].color : '#ffffff15'} strokeWidth={isActive ? 1.5 : 1} strokeDasharray={isActive ? 'none' : '3 5'} style={{ transition: 'all .4s ease' }} />
                      {isActive && (
                        <circle r="4" fill={orbSteps[i].color}>
                          <animateMotion dur="1.2s" repeatCount="indefinite">
                            <mpath xlinkHref={`#path-${i}`} />
                          </animateMotion>
                        </circle>
                      )}
                      <path id={`path-${i}`} d={`M${x1},${y1} L${x2},${y2}`} fill="none" />
                    </g>
                  );
                })}
              </svg>

              {/* Center node */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 10 }}>
                {/* Pulse rings */}
                <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 140, height: 140, borderRadius: '50%', border: `1px solid ${AC}20`, animation: 'pulseDot 3s ease-in-out infinite' }} />
                <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 116, height: 116, borderRadius: '50%', border: `1px solid ${AC}30`, animation: 'pulseDot 3s .5s ease-in-out infinite' }} />
                <div style={{ width: 90, height: 90, borderRadius: '50%', background: `linear-gradient(135deg,${AC},#1d4ed8)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 1px ${AC}60, 0 12px 40px ${AC}40`, position: 'relative' }}>
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                    <circle cx="21" cy="12" r="5" fill="#fff"/>
                    <rect x="15" y="20" width="12" height="13" rx="3" fill="#fff"/>
                    <line x1="13" y1="26" x2="9" y2="30" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="29" y1="26" x2="33" y2="30" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="33" cy="9" r="5" fill="#22c55e" stroke="#0d1117" strokeWidth="2"/>
                    <path d="M31 9L32.5 10.5L35.5 7.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ marginTop: 10, textAlign: 'center', fontSize: 10, fontWeight: 800, color: '#64748b', letterSpacing: '.1em', textTransform: 'uppercase' }}>Agent IA</div>
              </div>

              {/* Orbit nodes */}
              {orbSteps.map((s, i) => {
                const angleDeg = orbitAngles[i];
                const rad = angleDeg * Math.PI / 180;
                const radius = 130;
                const cx = 50 + (Math.cos(rad) * radius / 4);
                const cy = 50 + (Math.sin(rad) * radius / 4);
                return (
                  <div
                    key={i}
                    style={{ position: 'absolute', top: `${cy}%`, left: `${cx}%`, transform: 'translate(-50%,-50%)', zIndex: activeStep === i ? 8 : 2, cursor: 'default' }}
                    onMouseEnter={() => setActiveStep(i)}
                  >
                    <div style={{ width: 76, height: 76, borderRadius: 20, background: activeStep === i ? `linear-gradient(135deg,${s.color}22,${s.color}10)` : 'rgba(255,255,255,.04)', border: `1.5px solid ${activeStep === i ? s.color + '60' : 'rgba(255,255,255,.1)'}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, transition: 'all .4s ease', backdropFilter: 'blur(12px)', boxShadow: activeStep === i ? `0 8px 32px ${s.color}30, inset 0 1px 0 ${s.color}20` : 'none', transform: activeStep === i ? 'scale(1.1)' : 'scale(1)' }}>
                      {s.icon(activeStep === i ? s.color : '#475569')}
                      <span style={{ fontSize: 9.5, fontWeight: 800, color: activeStep === i ? s.color : '#475569', letterSpacing: '.06em', textTransform: 'uppercase', transition: 'color .4s' }}>{s.title}</span>
                    </div>
                  </div>
                );
              })}

              {/* Bottom label */}
              <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, textAlign: 'center' }}>
                <span style={{ fontSize: 11, color: '#334155', fontWeight: 600 }}>
                  <span style={{ color: orbSteps[activeStep].color, transition: 'color .4s', fontWeight: 800 }}>{activeStep + 1}/3 — {orbSteps[activeStep].title}</span>
                  {' '}· Cliquez ou attendez
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── SECTION 4 — For Who ──────────────────────────────────────
function ForWho() {
  const [ref, visible] = useInView();
  const iconColors = [AC, '#8b5cf6', '#0891b2'];
  const forWhoIcons = [
    // Building/PME
    <svg key="fw0" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M7 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="11" cy="13" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>,
    // ETI/industry
    <svg key="fw1" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 18V9l4-3v12M11 18V6l4-3v15M3 18h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Network/scale-up
    <svg key="fw2" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="4"  cy="5"  r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="5"  r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="4"  cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 6.5L9 9M16 6.5L13 9M6 15.5L9 13M16 15.5L13 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>,
  ];

  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'all .5s ease' }}>
          <H2 style={{ marginBottom: 14 }}>Pour qui travaille Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>Trois profils de structures, un point commun : elles veulent que leurs équipes arrêtent de perdre du temps sur ce qu'une machine peut faire mieux.</p>
        </div>
        <div className="v2-grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {forWhoCards.map((c, i) => (
            <div
              key={i}
              style={{ border: '1px solid #e4e4e7', borderRadius: 20, padding: '32px 28px', background: '#fff', display: 'flex', flexDirection: 'column', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${i * .1}s ease, border-color .2s ease, box-shadow .2s ease`, cursor: 'default', boxShadow: '0 1px 4px rgba(0,0,0,.03)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${iconColors[i]}44`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.04)`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e4e4e7'; (e.currentTarget as HTMLDivElement).style.transform = visible ? 'none' : 'translateY(20px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 4px rgba(0,0,0,.03)'; }}>
              {/* Icon badge */}
              <div style={{ width: 52, height: 52, marginBottom: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 14, background: `${iconColors[i]}0e`, border: `1.5px solid ${iconColors[i]}22`, color: iconColors[i], flexShrink: 0 }}>
                {forWhoIcons[i]}
              </div>
              {/* Index */}
              <div style={{ fontSize: 11, fontWeight: 800, color: '#a1a1aa', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 8 }}>0{i + 1}</div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: '#09090b', marginBottom: 12, letterSpacing: '-.025em', lineHeight: 1.25 }}>{c.title}</h3>
              <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, flex: 1, marginBottom: 24 }}>{c.desc}</p>
              <a href={c.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 14, fontWeight: 700, color: iconColors[i], textDecoration: 'none', transition: 'gap .15s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '8px'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '5px'; }}>
                {c.cta}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5H11M7 3L11 6.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION 5 — Services (dark) ──────────────────────────────
function Services() {
  const [ref, visible] = useInView();
  const mainServices = [
    { ...servicesV2[0] },
    { ...servicesV2[1] },
    { ...servicesV2[2] },
    { ...servicesV2[4], n: '04' },
    { ...servicesV2[6], n: '05' },
    { ...servicesV2[7], n: '06' },
  ];
  const savings = ['+ROI', '-80%', '×3', '24/7', '→Pro', '48h'];

  return (
    <section id="services" ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ color: '#fff', marginBottom: 14 }}>Nos services IA,<br />de l'audit à l'autonomie.</H2>
          <p style={{ fontSize: 16, color: '#8a8a95', maxWidth: 500, margin: '0 auto', lineHeight: 1.72 }}>Un accompagnement complet : on diagnostique, on construit, on déploie, on forme vos équipes.</p>
        </div>
        <div className="v2-grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, marginBottom: 36, borderRadius: 20, overflow: 'hidden', border: '1px solid #1e1e1e' }}>
          {mainServices.map((s, i) => (
            <a
              key={i}
              href={s.href}
              style={{ borderRight: i % 3 < 2 ? '1px solid #1e1e1e' : 'none', borderBottom: i < 3 ? '1px solid #1e1e1e' : 'none', padding: '32px 28px', background: '#0c0c0c', textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `opacity .5s ${i * .08}s ease, transform .5s ${i * .08}s ease, background .2s ease` }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#131313';
                const discover = el.querySelector('.svc-discover') as HTMLElement | null;
                if (discover) { discover.style.color = AC; discover.style.gap = '8px'; }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#0c0c0c';
                const discover = el.querySelector('.svc-discover') as HTMLElement | null;
                if (discover) { discover.style.color = '#3f3f46'; discover.style.gap = '5px'; }
              }}>
              {/* Top accent line on hover — CSS handles this via the parent group */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${AC}30,transparent)` }} aria-hidden="true" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em' }}>{s.n}</span>
                <span style={{ padding: '2px 9px', borderRadius: 9999, background: `${AC}14`, border: `1px solid ${AC}28`, fontSize: 11, fontWeight: 800, color: AC, letterSpacing: '-.01em' }}>{savings[i]}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: '#f4f4f5', marginBottom: 10, letterSpacing: '-.025em', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.72, marginBottom: 20 }}>{s.desc}</p>
              <div className="svc-discover" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: 13, fontWeight: 700, color: '#52525b', transition: 'color .2s ease, gap .15s ease' }}>
                Découvrir
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="/services/" className="btn-ghost" style={{ fontSize: 14 }}>
            Explorer tous nos services
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5H11M7 3L11 6.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 6 — Agent by Job + Marquee ──────────────────────
function AgentByJob() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'all .5s ease' }}>
          <H2 style={{ marginBottom: 14 }}>L'IA transforme votre métier.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>Chaque métier a ses tâches répétitives, ses irritants, ses pertes de temps. Nous déployons un agent IA adapté à chaque fonction.</p>
        </div>

        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 44 }}>
          {agentMetiers.map((m, i) => (
            <a
              key={i}
              href={m.href}
              style={{ border: '1px solid #e4e4e7', borderRadius: 18, padding: '26px 22px', background: '#fff', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `opacity .5s ${i * .06}s ease, transform .5s ${i * .06}s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease`, boxShadow: '0 1px 3px rgba(0,0,0,.03)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = `${AC}44`;
                el.style.background = '#f5f9ff';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 12px 32px rgba(37,99,235,.08), 0 4px 12px rgba(0,0,0,.04)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = '#e4e4e7';
                el.style.background = '#fff';
                el.style.transform = 'none';
                el.style.boxShadow = '0 1px 3px rgba(0,0,0,.03)';
              }}>
              {/* Icon */}
              <div style={{ width: 40, height: 40, marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, background: `${AC}0c`, border: `1px solid ${AC}1a`, color: AC, flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M3 16c0-3.31 2.686-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="15" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M14.3 4L15 4.7L16.2 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.02em', lineHeight: 1.3 }}>{m.title}</h3>
              <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, flex: 1 }}>{m.desc}</p>
            </a>
          ))}
        </div>

        {/* Agent tags marquee */}
        <div style={{ overflow: 'hidden', position: 'relative', marginBottom: 40 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2, pointerEvents: 'none' }} aria-hidden="true" />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2, pointerEvents: 'none' }} aria-hidden="true" />
          <div className="ticker-slow" role="marquee" aria-label="Liste des agents IA disponibles">
            {[...agentTags, ...agentTags].map((t, i) => (
              <div key={i} style={{ flexShrink: 0, padding: '7px 15px', borderRadius: 9999, border: '1px solid #e4e4e7', background: '#fff', fontSize: 12, fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap', marginRight: 8, display: 'flex', alignItems: 'center', gap: 7, boxShadow: '0 1px 3px rgba(0,0,0,.03)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: AC, flexShrink: 0 }} />
                {t.name}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/agent-ia/" className="btn-ghost" style={{ fontSize: 14 }}>
            Voir tous les agents IA
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5H11M7 3L11 6.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 7 — Methodology ──────────────────────────────────
function StepVisual({ stepIndex, active }: { stepIndex: number; active: boolean }) {
  if (stepIndex === 0) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Rapport d'audit</div>
        {['Saisie manuelle CRM', 'Traitement emails entrants', 'Génération reporting', 'Onboarding candidats'].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `slideIn .4s ${i * .15}s ease both` : 'none' }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: i < 3 ? '#22c55e22' : '#f4f4f5', border: i < 3 ? '1.5px solid #22c55e' : '1.5px solid #d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, color: '#22c55e', fontWeight: 900 }}>
              {i < 3 && '✓'}
            </div>
            <span style={{ fontSize: 12, color: i < 3 ? '#52525b' : '#a1a1aa', fontWeight: i < 3 ? 600 : 400 }}>{t}</span>
            {i < 3 && <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>−{[4, 6, 3, 2][i]}h/sem</span>}
          </div>
        ))}
      </div>
    );
  }
  if (stepIndex === 1) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap IA</div>
        {[{ l: 'Agent email', w: 90 }, { l: 'Agent CRM', w: 70 }, { l: 'Agent reporting', w: 55 }, { l: 'Agent onboarding', w: 40 }].map((r, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>{r.l}</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: AC }}>S{i + 1}</span>
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
        <div style={{ fontSize: 11, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Intégrations actives</div>
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
        <span style={{ fontSize: 11, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Votre agent IA</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif 24/7</span>
      </div>
      {["Emails traités aujourd'hui", 'Leads qualifiés', 'Tickets résolus', 'Heures économisées'].map((l, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 12, color: '#71717a' }}>{l}</span>
          <span style={{ fontSize: 13, fontWeight: 800, color: ['#22c55e', AC, '#f59e0b', '#8b5cf6'][i] }}>{['142', '38', '94', '11.4h'][i]}</span>
        </div>
      ))}
    </div>
  );
}

function Methodology() {
  const [ref, visible] = useInView();
  return (
    <section id="method" ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <H2 style={{ marginBottom: 14 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>Quatre étapes courtes. Vos équipes voient leur premier agent IA en production en moins de 4 semaines.</p>
        </div>
        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .12}s ease` }}>
              <div style={{ marginBottom: 24, minHeight: 176 }}>
                <StepVisual stepIndex={i} active={visible} />
              </div>
              {/* Step index + time pill row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: AC, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{i + 1}</span>
                <span style={{ padding: '2px 10px', borderRadius: 9999, background: `${AC}0c`, border: `1px solid ${AC}1e`, fontSize: 11, fontWeight: 700, color: AC }}>{s.time}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.025em', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: '#52525b', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <a href="/cas-clients/" className="btn-ghost" style={{ fontSize: 14 }}>
            Voir nos cas clients
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5H11M7 3L11 6.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 8 — Case Studies (dark) ─────────────────────────
function CaseStudies() {
  const [ref, visible] = useInView();
  return (
    <section id="cases" ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ color: '#fff', marginBottom: 14 }}>Nos cas clients.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>Des résultats concrets, chiffrés et vérifiables. Cliquez sur chaque cas pour voir la mission détaillée.</p>
        </div>
        <div className="v2-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
          {caseStudies.map((c, i) => (
            <a key={i} href={c.href} style={{ border: '1px solid #1e1e1e', padding: '32px 28px', background: '#0c0c0c', textDecoration: 'none', display: 'block', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `opacity .5s ${i * .1}s ease, transform .5s ${i * .1}s ease, background .2s ease, border-color .2s ease`, borderRadius: 20 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#131313'; el.style.borderColor = `${AC}35`;
                const lnk = el.querySelector('.case-lnk') as HTMLElement | null;
                if (lnk) lnk.style.gap = '8px';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#0c0c0c'; el.style.borderColor = '#1e1e1e';
                const lnk = el.querySelector('.case-lnk') as HTMLElement | null;
                if (lnk) lnk.style.gap = '5px';
              }}>
              <div style={{ marginBottom: 20, padding: 16, borderRadius: 14, background: '#141414', border: '1px solid #1f1f1f', display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <AnimChart type={c.chart} active={visible} />
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <span style={{ padding: '4px 12px', borderRadius: 9999, background: `${AC}16`, border: `1px solid ${AC}2e`, fontSize: 11, fontWeight: 800, color: AC }}>{c.tag}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#f4f4f5', marginBottom: 8, letterSpacing: '-.025em', lineHeight: 1.25 }}>{c.client}</h3>
              <p style={{ fontSize: 15, color: '#8a8a95', lineHeight: 1.72, marginBottom: 18 }}>{c.desc}</p>
              <span className="case-lnk" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: 14, fontWeight: 700, color: AC, transition: 'gap .15s ease' }}>
                Lire le cas complet
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="/cas-clients/" className="btn-ghost" style={{ fontSize: 14 }}>
            Voir tous les cas
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5H11M7 3L11 6.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 9 — Pricing ──────────────────────────────────────
function Pricing() {
  const [ref, visible] = useInView();
  return (
    <section id="pricing" ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <H2 style={{ marginBottom: 14 }}>Combien ça coûte, en combien de temps ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>Nous sommes une des rares agences IA à afficher nos prix. Parce que la transparence, c'est le début de la confiance.</p>
        </div>
        <div className="v2-grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginBottom: 36, maxWidth: 900, margin: '0 auto 36px' }}>
          {pricingPlans.map((p, i) => (
            <div key={i} style={{ border: p.dark ? `2px solid ${AC}` : '2px solid #e4e4e7', borderRadius: 28, padding: '40px 36px', background: p.dark ? 'linear-gradient(135deg,#09090b 0%,#0d1117 100%)' : '#fff', position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .6s ${i * .15}s ease`, boxShadow: p.dark ? `0 20px 60px ${AC}20` : '0 4px 20px rgba(0,0,0,.04)' }}>
              {p.dark && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,transparent,${AC},transparent)`, borderRadius: '28px 28px 0 0' }} aria-hidden="true" />}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: p.dark ? '#d4d4d8' : '#09090b', letterSpacing: '-.01em' }}>{p.name}</span>
                <span style={{ padding: '4px 12px', borderRadius: 9999, background: p.dark ? `${AC}20` : '#f4f4f5', fontSize: 11, fontWeight: 800, color: p.dark ? AC : '#52525b', border: p.dark ? `1px solid ${AC}40` : 'none' }}>{p.badge}</span>
              </div>
              <div style={{ fontSize: 'clamp(17px,1.9vw,21px)', fontWeight: 700, lineHeight: 1.35, color: p.dark ? '#e4e4e7' : '#09090b', marginBottom: 32, letterSpacing: '-.02em', minHeight: 90 }}>
                {p.titleText}<span style={{ color: p.dark ? '#93c5fd' : AC }}>{p.titleAccent}</span>
                {!p.dark && <>, pour un cas d'usage ciblé et ROI immédiat</>}
                {p.dark && <> qui automatisent votre back-office de bout en bout</>}
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: p.dark ? '#71717a' : '#a1a1aa', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.08em' }}>À partir de</div>
                <div style={{ fontSize: 44, fontWeight: 800, color: p.dark ? '#fff' : '#09090b', letterSpacing: '-.05em', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  {p.price}
                  {p.price !== 'Sur devis' && <span style={{ fontSize: 16, fontWeight: 600, color: p.dark ? '#71717a' : '#a1a1aa' }}>HT</span>}
                </div>
              </div>
              <a href="/contact" style={{ display: 'block', width: '100%', padding: '15px', borderRadius: 9999, background: p.dark ? AC : '#09090b', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 700, fontFamily: 'inherit', marginBottom: 32, transition: 'all .2s', boxShadow: p.dark ? `0 4px 16px ${AC}40` : '0 4px 16px rgba(0,0,0,.1)', textDecoration: 'none', textAlign: 'center' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}>
                {p.cta}
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: p.dark ? '#a1a1aa' : '#374151', lineHeight: 1.6 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                      <circle cx="9" cy="9" r="8" fill={p.dark ? `${AC}15` : '#f0f7ff'} stroke={AC} strokeWidth="1.5" />
                      <path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontWeight: 600 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', padding: '22px 32px', borderRadius: 18, background: `${AC}06`, border: `1px solid ${AC}18`, maxWidth: 680, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${AC}12`, border: `1.5px solid ${AC}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke={AC} strokeWidth="1.6"/>
              <path d="M9 6v3.5l2 2" stroke={AC} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.65, fontWeight: 500, margin: 0 }}>
            <strong style={{ color: AC }}>30 minutes offertes</strong> — repartez avec une feuille de route claire et concrète, que l'on travaille ensemble ou non.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 10 — Security (dark) ────────────────────────────
function Security() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="v2-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 style={{ color: '#fff', marginBottom: 20 }}>
              Vos données restent vos données.<br /><span style={{ color: AC }}>En Europe, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.78, marginBottom: 32 }}>
              La plupart des outils IA envoient vos données chez des prestataires américains. Chez Althoce, on fait l'inverse : hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout, et un humain toujours dans la boucle.
            </p>
            <a href="/conseil/" className="btn-ghost" style={{ fontSize: 14 }}>
              Notre approche conseil
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5H11M7 3L11 6.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <div className="v2-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s .15s ease' }}>
            {securityItems.map((it, i) => (
              <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '24px 20px', background: '#0f0f0f', position: 'relative', overflow: 'hidden', transition: 'border-color .2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${AC}44`; (e.currentTarget as HTMLDivElement).style.background = '#111'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; (e.currentTarget as HTMLDivElement).style.background = '#0f0f0f'; }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right,transparent,${AC}40,transparent)`, opacity: 0.6 }} aria-hidden="true" />
                <div style={{ width: 48, height: 48, marginBottom: 12 }}>
                  <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
                    {i === 0 && (<>
                      <rect x="10" y="10" width="28" height="28" rx="4" fill="none" stroke={AC} strokeWidth="2" />
                      <path d="M16 24L22 30L32 18" stroke={AC} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </>)}
                    {i === 1 && (<>
                      <circle cx="24" cy="24" r="16" fill="none" stroke={`${AC}30`} strokeWidth="2" />
                      <circle cx="24" cy="24" r="10" fill={`${AC}15`} stroke={AC} strokeWidth="2" />
                      <circle cx="24" cy="24" r="4" fill={AC} />
                    </>)}
                    {i === 2 && (<>
                      <rect x="14" y="18" width="20" height="16" rx="2" fill="none" stroke={AC} strokeWidth="2" />
                      <path d="M14 18C14 14 18 12 24 12C30 12 34 14 34 18" fill="none" stroke={AC} strokeWidth="2" />
                      <circle cx="24" cy="26" r="2" fill={AC} />
                    </>)}
                    {i === 3 && (<>
                      <circle cx="20" cy="18" r="6" fill="none" stroke={AC} strokeWidth="2" />
                      <path d="M10 38C10 30 14 26 20 26C26 26 30 30 30 38" fill="none" stroke={AC} strokeWidth="2" />
                      <path d="M30 16L38 8M38 8L34 8M38 8L38 12" stroke={AC} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>)}
                  </svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#d4d4d8', marginBottom: 6, lineHeight: 1.3 }}>{it.title}</h3>
                <p style={{ fontSize: 13, color: '#8a8a95', lineHeight: 1.65 }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 11 — FAQ ─────────────────────────────────────────
function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 740, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 14 }}>Vos questions, nos réponses directes.</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>Chaque question vient de prospects ou clients. Les réponses sont factuelles, sans jargon.</p>
        </div>
        <FAQAccordion items={faqsV2} />
      </div>
    </section>
  );
}

// ── App ──────────────────────────────────────────────────────
const homeStyles = `
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @media (max-width: 860px) {
    .home-pills { flex-wrap: nowrap !important; justify-content: flex-start !important; width: max-content !important; animation: pillsScroll 10s linear infinite; }
  }
`;

export default function HomePageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: homeStyles }} />
      <Hero />
      <Stats />
      <WhatIsAgent />
      <ForWho />
      <Services />
      <AgentByJob />
      <Methodology />
      <CaseStudies />
      <Pricing />
      <Security />
      <FAQ />
    </main>
  );
}
