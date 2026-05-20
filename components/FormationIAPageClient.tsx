'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentTags } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

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

function H2({ children, style: sx = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── TrainingPathMockup ────────────────────────────────────────
function TrainingPathMockup() {
  const formats = [
    {
      n: '01', label: 'Atelier IA', desc: 'Prise en main pratique · Claude, ChatGPT, Copilot',
      color: AC, icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="14" height="10" rx="2" stroke={AC} strokeWidth="1.5"/>
          <path d="M7 17H13M10 13V17" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 8L8 10L12 6" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      detail: '4h à 7h · Présentiel ou distanciel',
    },
    {
      n: '02', label: 'Onboarding outils IA', desc: 'Déploiement cadré dans votre organisation',
      color: '#7c3aed', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="7" stroke="#7c3aed" strokeWidth="1.5"/>
          <path d="M10 6V10L13 12" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="10" cy="10" r="2" fill="#7c3aed"/>
        </svg>
      ),
      detail: '2 à 6 semaines · Charte + suivi inclus',
    },
    {
      n: '03', label: 'Mission conseil', desc: 'Question stratégique tranchée en 1 à 4 semaines',
      color: '#0891b2', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 14L8 10L11 13L16 7" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="7" r="2" fill="#0891b2"/>
        </svg>
      ),
      detail: 'Diagnostic · Recommandations · Livrable',
    },
    {
      n: '04', label: 'Accompagnement long', desc: 'Référent IA externe à temps partagé',
      color: '#16a34a', icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="8" cy="7" r="3" stroke="#16a34a" strokeWidth="1.5"/>
          <path d="M3 17C3 14 5 12 8 12" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M13 10L15 12L19 8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      detail: '6 à 12 mois · 1 à 3 jours/mois',
    },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 440, margin: '0 auto' }}>
      <div style={{ padding: '14px 18px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>formats-formation.althoce</span>
        <div style={{ width: 24 }} />
      </div>
      <div style={{ border: '1px solid #e4e4e7', borderTop: 'none', borderRadius: '0 0 16px 16px', background: '#fff', overflow: 'hidden' }}>
        {formats.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderBottom: i < formats.length - 1 ? '1px solid #f4f4f5' : 'none' }}>
            <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: `${f.color}12`, border: `1px solid ${f.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {f.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: f.color, letterSpacing: '.08em' }}>{f.n}</span>
                <span style={{ fontSize: 14, fontWeight: 800, color: '#09090b' }}>{f.label}</span>
              </div>
              <div style={{ fontSize: 12, color: '#8a8a95', lineHeight: 1.4 }}>{f.desc}</div>
            </div>
            <div style={{ flexShrink: 0, padding: '3px 8px', borderRadius: 6, background: '#f4f4f5', fontSize: 9, fontWeight: 700, color: '#8a8a95', textAlign: 'center', lineHeight: 1.4 }}>
              {f.detail}
            </div>
          </div>
        ))}
        <div style={{ padding: '12px 18px', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f4f4f5' }}>
          <span style={{ fontSize: 12, color: '#a1a1aa', fontWeight: 500 }}>Tous formats sur devis · contextualisés par métier</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: AC }}>→</span>
        </div>
      </div>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}10 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#0891b20d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="frm-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Services</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Formation IA</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Formation IA en entreprise : ateliers, conseil et{' '}
              <span style={{ color: AC }}>accompagnement sur-mesure.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 500 }}>
              Vos collaborateurs ont entendu parler de Claude, ChatGPT et Copilot. Beaucoup les ouvrent, ne savent pas quoi en faire, et abandonnent au bout de deux jours. Quatre formats opérationnels pour rendre vos équipes vraiment efficaces avec l&apos;IA.
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['Sur-mesure', 'Multi-outils (Claude, ChatGPT, Copilot, Mistral)', 'Pratique et contextualisé'].map((t) => (
                <span key={t} style={{ padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#offre"
                style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les 4 formats ↓
              </a>
            </div>
          </div>

          <div className="frm-mockup-col">
            <TrainingPathMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Definition ────────────────────────────────────────────────
function Definition() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 28 }}>Quatre façons complémentaires de faire monter vos équipes en compétences IA</H2>

        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 24 }}>
          Le marché de la &ldquo;formation IA&rdquo; en 2026 propose principalement deux modèles. D&apos;un côté, des formations en ligne à 30 €, génériques, théoriques, abandonnées au bout de trois jours. De l&apos;autre, des cabinets de conseil qui livrent un PowerPoint stratégique en six mois pour 100 000 €. Entre les deux, vos équipes restent seules face à Claude ou ChatGPT, et ne savent pas comment intégrer ces outils dans leur métier réel.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 40 }}>
          Notre offre se positionne exactement dans cet espace : <strong style={{ color: '#09090b' }}>quatre formats opérationnels, contextualisés, qui partent du quotidien de vos équipes</strong> et pas d&apos;un programme générique. Un atelier pratique, un onboarding outils, une mission conseil ou un accompagnement long. Chacun répond à un besoin distinct.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          {/* Header strip */}
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Quel format vous correspond ?</p>
          </div>

          {/* 3-panel grid */}
          <div className="frm-fmt-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            {[
              { n: '01', format: 'Atelier IA', color: AC, tag: '4h à 7h', q: 'Vos équipes ont-elles besoin de prendre en main Claude, ChatGPT ou Copilot rapidement ?' },
              { n: '02', format: 'Onboarding outils IA', color: '#7c3aed', tag: '2 à 6 sem.', q: 'Voulez-vous déployer un outil IA dans votre organisation avec un cadre et un suivi ?' },
              { n: '03', format: 'Mission conseil', color: '#0891b2', tag: '1 à 4 sem.', q: 'Avez-vous une question stratégique à trancher : cartographier, choisir, gouverner ?' },
            ].map((row, i) => (
              <a key={i} href="#offre"
                style={{ display: 'flex', flexDirection: 'column', padding: '24px 20px 20px', textDecoration: 'none', borderRight: i < 2 ? '1px solid #1a1a1a' : 'none', position: 'relative', overflow: 'hidden', transition: 'background .2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#111'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
                {/* Colored top bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${row.color}, ${row.color}44)` }} />
                {/* Large ghost number */}
                <span style={{ fontSize: 52, fontWeight: 900, color: `${row.color}25`, lineHeight: 1, marginBottom: 10, letterSpacing: '-.04em', display: 'block', userSelect: 'none' }}>
                  {row.n}
                </span>
                {/* Format name */}
                <span style={{ fontSize: 16, fontWeight: 800, color: '#f4f4f5', lineHeight: 1.2, marginBottom: 5 }}>
                  {row.format}
                </span>
                {/* Duration tag */}
                <span style={{ fontSize: 10, fontWeight: 700, color: row.color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 14 }}>
                  {row.tag}
                </span>
                {/* Divider */}
                <div style={{ height: 1, background: '#1e1e1e', marginBottom: 14 }} />
                {/* Question */}
                <p style={{ fontSize: 13, color: '#a1a1aa', lineHeight: 1.7, flex: 1, margin: 0 }}>
                  {row.q}
                </p>
                {/* CTA */}
                <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: row.color }}>Voir ce format</span>
                  <div style={{ width: 18, height: 18, borderRadius: 5, background: `${row.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 10, color: row.color }}>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div style={{ padding: '14px 24px', borderTop: '1px solid #1a1a1a', background: '#080808' }}>
            <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65, margin: 0 }}>
              Vous cumulez plusieurs besoins ? <strong style={{ color: '#a1a1aa' }}>L&apos;accompagnement entreprise</strong> combine tout ce qui précède sur six à douze mois.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Comparison Table ──────────────────────────────────────────
const compRows = [
  { critere: 'Sujet principal', mooc: 'ChatGPT générique, prompting théorique', althoce: 'Claude, ChatGPT, Copilot, Mistral, agents IA intégrés dans votre métier réel' },
  { critere: 'Contextualisation', mooc: 'Faible (cas génériques)', althoce: 'Forte : vos métiers, vos process, vos cas d\'usage' },
  { critere: 'Public cible', mooc: 'Tout collaborateur, indistinctement', althoce: '3 profils distincts : Utilisateurs, Pilotes, Architectes' },
  { critere: 'Format', mooc: 'Vidéos asynchrones, peu d\'interaction', althoce: 'Présentiel ou distanciel synchrone, exercices sur cas réels' },
  { critere: 'Sécurité & confidentialité', mooc: 'Survolées', althoce: 'Module dédié, exercices concrets sur données sensibles' },
  { critere: 'Suite après la session', mooc: 'Aucune', althoce: 'Accompagnement long ou mission conseil possible en enchaînement' },
  { critere: 'Adapté à votre contexte', mooc: 'Non', althoce: 'Oui : programme co-construit au cadrage' },
];

function ComparisonTable() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} id="comparatif" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>Formation en ligne mass-market vs Accompagnement Althoce. La grille honnête.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto' }}>
            Deux univers très différents qui partagent malheureusement le même mot &ldquo;formation IA&rdquo;. Voici les sept différences vues côté entreprise cliente.
          </p>
        </div>

        {/* Desktop table */}
        <div className="frm-comp-desktop">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, marginBottom: 8 }}>
            <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Critère</div>
            <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 800, color: '#52525b', textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #e4e4e7' }}>Formation en ligne mass-market</div>
            <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.1em', borderLeft: '1px solid #e4e4e7' }}>Accompagnement Althoce</div>
          </div>
          <div style={{ border: '1px solid #e4e4e7', borderRadius: 16, overflow: 'hidden', background: '#fff' }}>
            {compRows.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: i < compRows.length - 1 ? '1px solid #f4f4f5' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(10px)', transition: `all .4s ${i * .07}s ease` }}>
                <div style={{ padding: '16px 18px', fontSize: 14, fontWeight: 700, color: '#8a8a95', display: 'flex', alignItems: 'center' }}>{row.critere}</div>
                <div style={{ padding: '16px 18px', fontSize: 14, color: '#a1a1aa', display: 'flex', alignItems: 'center', borderLeft: '1px solid #f4f4f5', lineHeight: 1.65 }}>{row.mooc}</div>
                <div style={{ padding: '16px 18px', fontSize: 14, color: '#09090b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, borderLeft: `2px solid ${AC}30`, background: '#f0f7ff', lineHeight: 1.65 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }} aria-hidden="true">
                    <circle cx="7" cy="7" r="6" fill={`${AC}15`} stroke={AC} strokeWidth="1.2"/>
                    <path d="M4.5 7L6.5 9L9.5 5" stroke={AC} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {row.althoce}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="frm-comp-mobile" style={{ display: 'none', flexDirection: 'column', gap: 12 }}>
          {compRows.map((row, i) => (
            <div key={i} style={{ border: '1px solid #e4e4e7', borderRadius: 14, overflow: 'hidden', background: '#fff', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(10px)', transition: `all .4s ${i * .06}s ease` }}>
              <div style={{ padding: '10px 16px', background: '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#52525b', textTransform: 'uppercase', letterSpacing: '.06em' }}>{row.critere}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ padding: '14px 16px', borderRight: '1px solid #f4f4f5' }}>
                  <p style={{ fontSize: 10, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>En ligne</p>
                  <p style={{ fontSize: 13, color: '#a1a1aa', lineHeight: 1.65 }}>{row.mooc}</p>
                </div>
                <div style={{ padding: '14px 16px', background: '#f0f7ff', borderLeft: `2px solid ${AC}30` }}>
                  <p style={{ fontSize: 10, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>Althoce</p>
                  <p style={{ fontSize: 13, color: '#09090b', fontWeight: 600, lineHeight: 1.65 }}>{row.althoce}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14, color: '#8a8a95', marginTop: 20, lineHeight: 1.7, textAlign: 'center' }}>
          Si vous voulez d&apos;abord acculturer largement vos équipes à l&apos;IA générative en mode découverte, une formation en ligne à bas coût (LinkedIn Learning, Coursera) reste pertinente comme premier pas. Notre offre prend le relais quand il s&apos;agit que vos équipes <strong style={{ color: '#09090b' }}>utilisent vraiment l&apos;IA</strong> dans leur quotidien. Pour cadrer en amont, voir{' '}
          <a href="/services/audit-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Audit IA</a> ou prenez les 30 minutes offertes avec un expert.
        </p>
      </div>
    </section>
  );
}

// ── 4 Formats ─────────────────────────────────────────────────
const formats = [
  {
    n: '01', title: 'Atelier IA', badge: '4h à 7h', color: AC,
    who: 'Équipes métier qui veulent prendre en main rapidement Claude, ChatGPT, Copilot ou des agents IA dans leur quotidien.',
    what: 'Session pratique en présentiel ou distanciel synchrone, animée par un consultant Althoce. Exercices sur les cas réels du métier des participants. Pas de slides théoriques, on travaille en direct sur Claude ou ChatGPT.',
    examples: [
      'Équipe commerciale : "Préparer un RDV en 5 minutes avec Claude"',
      'Équipe comptable : "Faire rédiger des mails clients par l\'IA"',
      'RH : "Structurer une fiche de poste à partir de 3 lignes de besoin"',
      'Marketing : "Brainstormer 20 idées de posts LinkedIn en 2 minutes"',
    ],
  },
  {
    n: '02', title: 'Onboarding outils IA', badge: '2 à 6 sem.', color: '#7c3aed',
    who: 'Entreprises qui veulent déployer Claude pour Entreprises, ChatGPT Enterprise, Microsoft Copilot ou Mistral Enterprise dans leur organisation avec un cadre clair.',
    what: 'Audit du besoin, choix de l\'outil, set-up des comptes et sécurité (SSO, MFA, RBAC), rédaction de la charte d\'usage interne, atelier de prise en main, suivi sur les 30 à 90 premiers jours.',
    examples: [
      'Claude pour Entreprises sur 80 collaborateurs d\'un cabinet d\'expertise comptable',
      'ChatGPT Enterprise sur une équipe marketing de 12 personnes',
      'Migration depuis ChatGPT perso non encadré vers une solution entreprise',
    ],
  },
  {
    n: '03', title: 'Mission conseil IA', badge: '1 à 4 sem.', color: '#0891b2',
    who: 'Direction, DSI, responsables métier qui ont une question stratégique précise à trancher sur le sujet IA, sans engager un cabinet de conseil sur six mois.',
    what: 'Diagnostic ou analyse selon la question posée, recommandations actionnables, livrable formalisé (rapport, plan d\'action, charte, cartographie), restitution en atelier avec votre équipe.',
    examples: [
      'Cartographie d\'opportunités IA dans un département',
      'Choix entre Claude, ChatGPT Enterprise et Copilot selon votre contexte',
      'Rédaction d\'une charte IA d\'entreprise',
      'Plan de remédiation post-incident',
    ],
    note: { text: 'Pour une analyse couvrant l\'ensemble de l\'entreprise, voir notre service ', link: '/services/audit-ia/', linkText: 'Audit IA' },
  },
  {
    n: '04', title: 'Accompagnement entreprise', badge: '6 à 12 mois', color: '#16a34a',
    who: 'Direction et DSI qui veulent un référent IA externe à temps partagé, sans recruter un Chief AI Officer en interne. Idéal pour les PME et ETI qui démarrent leur transformation IA.',
    what: 'Référent IA externe à temps partagé (1 à 3 jours/mois). Combine selon les phases ateliers, onboarding outils, missions conseil, et veille active. À la fin de la mission, votre entreprise pilote sa transformation IA de manière autonome.',
    examples: [
      'Revue mensuelle avec direction et DSI',
      'Animation des ateliers prioritaires identifiés',
      'Accompagnement sur les choix d\'outils',
      'Formation continue des référents internes',
    ],
  },
];

function Formats() {
  const [ref, visible] = useInView(0.06);
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section ref={ref} id="offre" style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>Quatre formats commerciaux pour quatre besoins distincts</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto' }}>
            Chaque format peut se vendre indépendamment ou se combiner. Tous sont sur-mesure, contextualisés par métier, animés par des consultants qui pratiquent l&apos;IA en production tous les jours.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {formats.map((f, i) => {
            const isOpen = expanded === i;
            const isLast = i === formats.length - 1;
            return (
              <div key={i} style={{
                border: '1px solid #e4e4e7',
                borderBottom: isLast ? '1px solid #e4e4e7' : 'none',
                background: isOpen ? '#fafafa' : '#fff',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(16px)',
                transition: `opacity .5s ${i * .1}s ease, transform .5s ${i * .1}s ease, background .2s`,
                borderRadius: i === 0 ? '16px 16px 0 0' : isLast ? '0 0 16px 16px' : 0,
              }}>
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                  aria-expanded={isOpen}
                >
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: isOpen ? f.color : `${f.color}12`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
                    <span style={{ fontSize: 13, fontWeight: 900, color: isOpen ? '#fff' : f.color, transition: 'color .2s' }}>{f.n}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', marginBottom: 2 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: '#8a8a95', fontWeight: 500 }}>{f.who.slice(0, 80)}…</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                    <span style={{ padding: '4px 10px', borderRadius: 9999, background: `${f.color}12`, border: `1px solid ${f.color}25`, fontSize: 11, fontWeight: 800, color: f.color }}>{f.badge}</span>
                    <span style={{ fontSize: 18, color: '#a1a1aa', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 28px 24px' }}>
                    <div style={{ paddingLeft: 56 }} className="frm-detail-inner">
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 20 }} className="frm-detail-grid">
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 800, color: f.color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Pour qui</p>
                          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7 }}>{f.who}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 800, color: f.color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Ce que ça inclut</p>
                          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7 }}>{f.what}</p>
                        </div>
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <p style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Exemples concrets</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {f.examples.map((ex, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#52525b', lineHeight: 1.65 }}>
                              <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                                <circle cx="7" cy="7" r="6" fill={`${f.color}10`} stroke={f.color} strokeWidth="1.2"/>
                                <path d="M4.5 7L6 8.5L9.5 5" stroke={f.color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {ex}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                        <span style={{ fontSize: 14, color: '#a1a1aa', fontWeight: 500 }}>
                          Tarif : sur devis selon scope
                          {f.note && <> · <a href={f.note.link} style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>{f.note.linkText}</a> pour une analyse plus large</>}
                        </span>
                        <a href="/contact" style={{ padding: '10px 20px', borderRadius: 9999, background: f.color, color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
                          Demander un devis →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: 15, color: '#8a8a95', marginTop: 24, lineHeight: 1.7, textAlign: 'center', marginBottom: 32 }}>
          Beaucoup de clients démarrent par un <strong style={{ color: '#09090b' }}>atelier IA</strong> ou une <strong style={{ color: '#09090b' }}>mission conseil</strong> courte, puis enchaînent sur un <strong style={{ color: '#09090b' }}>onboarding outils</strong> ou un <strong style={{ color: '#09090b' }}>accompagnement</strong> une fois la conviction installée.
        </p>

        <div style={{ padding: '32px 36px', borderRadius: 20, background: `${AC}06`, border: `1px solid ${AC}20`, textAlign: 'center' }}>
          <p style={{ fontSize: 17, fontWeight: 800, color: '#09090b', marginBottom: 10 }}>Construisez votre devis personnalisé en 30 minutes</p>
          <p style={{ fontSize: 15, color: '#8a8a95', lineHeight: 1.7, marginBottom: 24, maxWidth: 580, margin: '0 auto 24px' }}>
            Chaque entreprise a un contexte différent : taille des équipes, maturité IA, outils déjà déployés, métiers ciblés. Les tarifs et les programmes sont entièrement adaptés à votre cas.
          </p>
          <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 9999, background: AC, color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'transform .15s,box-shadow .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 28px ${AC}40`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
            Réserver 30 minutes offertes avec un expert →
          </a>
          <p style={{ fontSize: 13, color: '#a1a1aa', marginTop: 12 }}>Devis ferme sous 5 jours ouvrés · Sans engagement</p>
        </div>
      </div>
    </section>
  );
}

// ── 3 Profils (Pyramide redessinée) ──────────────────────────
function ProfilsPyramide() {
  const [ref, visible] = useInView(0.1);
  const [active, setActive] = useState<number | null>(null);

  const profils = [
    {
      level: 3, label: 'Architecte', color: AC, bg: '#f0f7ff',
      who: 'Direction, DSI, CTO, responsables IA internes, futurs Chief AI Officer.',
      format: 'Mission conseil sur la stratégie et la gouvernance, accompagnement entreprise sur la durée.',
      pct: '1 à 3 personnes',
    },
    {
      level: 2, label: 'Pilote', color: '#7c3aed', bg: '#f5f3ff',
      who: 'Managers d\'équipe métier, référents IA internes, responsables de processus.',
      format: 'Atelier IA orienté manager, mission conseil sur la charte d\'usage, participation aux onboarding outils.',
      pct: '15 à 20 % de l\'effectif',
    },
    {
      level: 1, label: 'Utilisateur', color: '#0891b2', bg: '#f0f9ff',
      who: 'Tous les collaborateurs qui veulent gagner du temps grâce à l\'IA (commerciaux, comptables, RH, ops, support, marketing).',
      format: 'Atelier IA (prise en main pratique) et onboarding outils IA.',
      pct: '70 à 80 % de l\'effectif',
    },
  ];

  const handleToggle = (i: number) => setActive(active === i ? null : i);

  return (
    <section ref={ref} id="profils" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>Trois profils, trois usages, trois entrées dans nos formats</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 540, margin: '0 auto' }}>
            Selon que vos équipes utilisent l&apos;IA au quotidien, la pilotent dans leur équipe, ou la gouvernent à l&apos;échelle de l&apos;entreprise, le bon format n&apos;est pas le même.
          </p>
        </div>

        <div className="frm-profils-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start', opacity: visible ? 1 : 0, transition: 'opacity .6s ease' }}>

          {/* Pyramid — CSS trapezoid layers */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {[
              { i: 0, label: 'Architecte', sub: '1 à 3 personnes', color: AC, colorDark: '#1d4ed8', bgOn: AC, bgOff: '#dbeafe', textOff: AC, subOff: '#93c5fd', widthPct: 48, clip: 'polygon(14% 0%, 86% 0%, 100% 100%, 0% 100%)' },
              { i: 1, label: 'Pilote', sub: '15 à 20 % de l\'effectif', color: '#7c3aed', colorDark: '#6d28d9', bgOn: '#7c3aed', bgOff: '#ede9fe', textOff: '#7c3aed', subOff: '#a78bfa', widthPct: 73, clip: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' },
              { i: 2, label: 'Utilisateur', sub: '70 à 80 % de l\'effectif', color: '#0891b2', colorDark: '#0e7490', bgOn: '#0891b2', bgOff: '#e0f2fe', textOff: '#0891b2', subOff: '#67e8f9', widthPct: 100, clip: 'polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)' },
            ].map((lvl) => (
              <div
                key={lvl.i}
                onClick={() => handleToggle(lvl.i)}
                onMouseEnter={() => setActive(lvl.i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  width: `${lvl.widthPct}%`,
                  clipPath: lvl.clip,
                  background: active === lvl.i ? lvl.bgOn : lvl.bgOff,
                  paddingTop: 18,
                  paddingBottom: 18,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background .25s',
                  marginBottom: 3,
                  position: 'relative',
                }}
                role="button"
                tabIndex={0}
                aria-label={lvl.label}
                onKeyDown={(e) => e.key === 'Enter' && handleToggle(lvl.i)}
              >
                {active === lvl.i && (
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${lvl.bgOn}cc 0%, ${lvl.colorDark} 100%)`, pointerEvents: 'none' }} />
                )}
                <span style={{ position: 'relative', zIndex: 1, fontSize: 15, fontWeight: 800, color: active === lvl.i ? '#fff' : lvl.textOff, transition: 'color .25s', userSelect: 'none', lineHeight: 1.2 }}>
                  {lvl.label}
                </span>
                <span style={{ position: 'relative', zIndex: 1, fontSize: 12, fontWeight: 600, color: active === lvl.i ? 'rgba(255,255,255,0.65)' : lvl.subOff, transition: 'color .25s', userSelect: 'none', marginTop: 3 }}>
                  {lvl.sub}
                </span>
              </div>
            ))}

            <p style={{ fontSize: 13, color: '#a1a1aa', textAlign: 'center', marginTop: 16 }}>
              Cliquez sur un niveau pour voir le détail
            </p>
          </div>

          {/* Detail panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {profils.map((p, i) => (
              <div
                key={i}
                onClick={() => handleToggle(i)}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  padding: '20px 22px',
                  borderRadius: 16,
                  border: `1.5px solid ${active === i ? p.color : '#e4e4e7'}`,
                  background: active === i ? p.bg : '#fff',
                  transition: 'all .2s',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: active === i ? p.color : '#09090b', transition: 'color .2s' }}>
                    Niveau {3 - i} : {p.label}
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: p.color, padding: '2px 8px', borderRadius: 9999, background: `${p.color}12`, whiteSpace: 'nowrap' }}>{p.pct}</span>
                </div>
                <p style={{ fontSize: 13, color: '#8a8a95', lineHeight: 1.65, marginBottom: 8 }}><strong style={{ color: '#8a8a95' }}>Public :</strong> {p.who}</p>
                <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}><strong style={{ color: '#52525b' }}>Format adapté :</strong> {p.format}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36, padding: '16px 22px', borderRadius: 14, background: '#fff', border: '1px solid #e4e4e7', fontSize: 15, color: '#52525b', lineHeight: 1.7, textAlign: 'center' }}>
          Les 3 profils ne sont pas séquentiels obligatoires. Nous cartographions les 3 publics dans votre entreprise lors du cadrage et choisissons le bon mix de formats pour chacun.
        </div>
      </div>
    </section>
  );
}

// ── Marquee métiers ───────────────────────────────────────────
function MarqueeMetiers() {
  return (
    <section style={{ padding: '64px 0', background: '#fff', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 28 }}>Contextualisé pour tous les métiers</p>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" aria-label="Métiers couverts par la formation IA">
          {[...agentTags, ...agentTags].map((t, i) => (
            <div key={i} style={{ flexShrink: 0, padding: '8px 16px', borderRadius: 9999, border: '1px solid #e4e4e7', background: '#fafafa', fontSize: 13, fontWeight: 600, color: '#52525b', whiteSpace: 'nowrap', marginRight: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC, flexShrink: 0 }} />
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Methodology ───────────────────────────────────────────────
function StepVisual({ stepIndex, active }: { stepIndex: number; active: boolean }) {
  if (stepIndex === 0) return (
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
  if (stepIndex === 1) return (
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
  if (stepIndex === 2) return (
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

function Methodology() {
  const [ref, visible] = useInView();
  return (
    <section id="methode" ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <H2 style={{ marginBottom: 12 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Vos équipes voient leur premier agent IA en production en moins de 4 semaines.</p>
        </div>
        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .6s ${i * .12}s ease` }}>
              <div style={{ marginBottom: 24, minHeight: 180 }}>
                <StepVisual stepIndex={i} active={visible} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 6 }}>STEP {i + 1}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 10px', borderRadius: 9999, background: '#f0f7ff', border: `1px solid ${AC}20`, fontSize: 12, fontWeight: 700, color: AC, marginBottom: 10 }}>{s.time}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.02em' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Security ──────────────────────────────────────────────────
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
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32 }}>
              La plupart des outils IA envoient vos données chez des prestataires américains. Chez Althoce, on fait l&apos;inverse : hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout, et un humain toujours dans la boucle.
            </p>
            <a href="/conseil/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', border: `1px solid ${AC}40`, borderRadius: 9999, transition: 'all .15s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = AC; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = AC; }}>
              Notre approche conseil →
            </a>
          </div>
          <div className="v2-grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s .15s ease' }}>
            {securityItems.map((it, i) => (
              <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '24px 20px', background: '#0f0f0f', position: 'relative', overflow: 'hidden', transition: 'border-color .2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${AC}44`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right,transparent,${AC}40,transparent)`, opacity: 0.6 }} aria-hidden="true" />
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${AC}15`, border: `1px solid ${AC}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="7" fill="none" stroke={AC} strokeWidth="1.5"/><path d="M6 9L8 11L12 7" stroke={AC} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#d4d4d8', marginBottom: 6, lineHeight: 1.3 }}>{it.title}</h3>
                <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
const faqFormation: FAQv2Item[] = [
  {
    q: 'Quelle est la différence entre vos ateliers et une formation en ligne type "Maîtrisez ChatGPT en 1 jour" ?',
    a: 'Trois choses. Premièrement, nous travaillons sur plusieurs outils du marché (Claude, ChatGPT, Copilot, Mistral) et pas un seul. Deuxièmement, nous travaillons sur les cas réels du métier des participants, pas sur des exemples génériques. Troisièmement, l\'animateur est un consultant Althoce qui pratique l\'IA en production tous les jours. Voir le tableau comparatif plus haut pour le détail.',
  },
  {
    q: 'Combien coûte un atelier, un onboarding ou une mission conseil ?',
    a: 'Sur devis selon scope. Un atelier court démarre à un budget accessible aux PME. Un onboarding outils se chiffre selon le nombre d\'utilisateurs et la complexité du déploiement. Une mission conseil dépend de la profondeur d\'analyse demandée. Un accompagnement long est calé sur 6 à 12 mois avec un volume mensuel défini au cadrage. Tous les chiffrages se font après les 30 minutes offertes avec un expert.',
  },
  {
    q: 'Présentiel ou distanciel ?',
    a: 'Les deux. Présentiel dans vos locaux (la plupart des clients le préfèrent pour les ateliers), chez nous à Bordeaux, ou distanciel synchrone via Zoom ou Teams. Pour l\'accompagnement long, le format est généralement hybride avec quelques journées présentielles par trimestre.',
  },
  {
    q: 'Faut-il avoir déjà déployé des agents IA chez Althoce pour faire appel à vous ?',
    a: 'Non, et c\'est même rarement le cas. La majorité de nos clients sur cette ligne de produit n\'ont pas encore déployé d\'agent IA quand ils nous contactent. Ils veulent que leurs équipes maîtrisent d\'abord les outils du marché (Claude, ChatGPT, Copilot). L\'atelier IA peut donner les bases pour décider si un agent IA est pertinent par la suite.',
  },
  {
    q: 'Qui anime les ateliers et les missions ?',
    a: 'Les consultants Althoce qui pratiquent l\'IA en production tous les jours. Pas de formateurs externes, pas de stagiaires. Vos équipes posent des questions à des praticiens qui répondent avec des cas réels (anonymisés). Tous nos consultants sont eux-mêmes utilisateurs intensifs de Claude, ChatGPT, Copilot et des agents IA dans leur quotidien.',
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur nos ateliers, conseil et accompagnements</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Cinq questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqFormation} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  @media (max-width: 860px) {
    .frm-hero-grid { grid-template-columns: 1fr !important; }
    .frm-mockup-col { display: none !important; }
    .frm-profils-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  }
  @media (max-width: 720px) {
    .frm-fmt-grid { grid-template-columns: 1fr !important; }
    .frm-fmt-grid > a { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .frm-fmt-grid > a:last-child { border-bottom: none; }
  }
  @media (max-width: 640px) {
    .frm-detail-grid { grid-template-columns: 1fr !important; }
    .frm-detail-inner { padding-left: 0 !important; }
    .frm-comp-desktop { display: none !important; }
    .frm-comp-mobile { display: flex !important; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function FormationIAPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <Definition />
      <ComparisonTable />
      <Formats />
      <ProfilsPyramide />
      <MarqueeMetiers />
      <Methodology />
      <Security />
      <FAQ />
    </main>
  );
}
