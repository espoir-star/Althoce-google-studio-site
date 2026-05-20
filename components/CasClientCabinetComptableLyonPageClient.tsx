'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';

const AC = '#2563eb';
const GREEN = '#16a34a';
const RED = '#ef4444';
const AMBER = '#d97706';

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
    <h2 style={{ fontSize: 'clamp(22px,2.8vw,36px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── Hero Stat ─────────────────────────────────────────────────
function HeroStat() {
  const [count, setCount] = useState(false);
  useEffect(() => { const t = setTimeout(() => setCount(true), 400); return () => clearTimeout(t); }, []);
  return (
    <div style={{ borderRadius: 24, background: '#09090b', border: '1px solid #1a1a1a', padding: '48px 36px', position: 'relative', overflow: 'hidden', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 260 }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 220, background: `radial-gradient(ellipse,${GREEN}14 0%,transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, opacity: count ? 1 : 0, transform: count ? 'none' : 'translateY(16px)', transition: 'all .6s ease' }}>
        <div style={{ fontSize: 'clamp(72px,10vw,120px)', fontWeight: 900, color: GREEN, letterSpacing: '-.06em', lineHeight: 0.9, marginBottom: 16 }}>×2</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#a1a1aa', lineHeight: 1.65, maxWidth: 240 }}>capacité gérée à effectif constant</div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#3f3f46', fontWeight: 500 }}>en 4 mois après mise en production</div>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 16, zIndex: 1 }}>
        {[
          { v: '80 %', l: 'saisie absorbée' },
          { v: '0', l: 'départ équipe' },
          { v: '+80', l: 'clients en 4 mois' },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: GREEN }}>{s.v}</div>
            <div style={{ fontSize: 10, color: '#3f3f46', fontWeight: 500 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${GREEN}0e 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cc1-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/cas-clients/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Cas clients</a><span>›</span>
              <span style={{ color: '#09090b' }}>Cabinet comptable Lyon</span>
            </nav>

            {/* Tags identité */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Finance', 'Expertise comptable', 'PME · 12 collab.', 'Lyon · 2025-2026'].map((t) => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t}</span>
              ))}
            </div>

            <h1 style={{ fontSize: 'clamp(26px,3.8vw,48px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              ×2 capacité en 4 mois pour un cabinet d'expertise comptable lyonnais.
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              12 collaborateurs, 320 clients TPE/PME, 1 cabinet qui refusait des nouveaux clients par peur de la surcharge. 2 agents IA Althoce déployés en 8 semaines. Voici comment la directrice associée a transformé son cabinet sans supprimer un seul poste.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#resultats"
                style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = GREEN; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les résultats ↓
              </a>
            </div>
          </div>

          <div className="cc1-stat-col">
            <HeroStat />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Le Client ─────────────────────────────────────────────────
function LeClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 28 }}>Le cabinet : 12 personnes, 320 clients, croissance bloquée par la saisie</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 24 }}>
          Le cabinet d'expertise comptable lyonnais (nom anonymisé) existe depuis 2014. Implanté dans le 6ᵉ arrondissement, il compte <strong style={{ color: '#09090b' }}>12 collaborateurs</strong> : 2 associés expert-comptable, 4 collaborateurs comptables, 3 assistants, 2 chargés de mission, 1 office manager. Sa clientèle est composée de <strong style={{ color: '#09090b' }}>320 TPE et PME locales</strong> : artisans, professions libérales, restaurateurs, e-commerçants, structures de services. Spécialité : la comptabilité fine de TPE en croissance avec accompagnement DAF externalisé pour les plus matures.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 32 }}>
          Croissance organique de 8 % par an depuis la pandémie, sans démarche commerciale active : la clientèle vient par recommandation. Ambiance familiale, exigence technique, fidélité client. Le cabinet ne s'est jamais positionné comme leader prix, mais comme partenaire de proximité.
        </p>

        <div style={{ padding: '28px 32px', borderRadius: 20, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `4px solid ${RED}` }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Le dilemme de 2024</div>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 16 }}>
            En 2024, la direction se retrouve face à un choix classique : <strong style={{ color: '#09090b' }}>refuser de nouveaux clients ou recruter</strong>. Deux prospects refusés sur quatre faute de capacité. Le marché de l'embauche en expertise comptable est tendu à Lyon (turnover sur les collaborateurs débutants, montée en compétence longue, coût en hausse).
          </p>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75 }}>
            L'équipe en place est experte mais saturée : <strong style={{ color: '#09090b' }}>70 % de son temps part en saisie</strong> (factures fournisseurs, rapprochements bancaires, écritures, déclarations TVA). Les associés sentent que cette situation n'est plus tenable. C'est dans ce contexte que la directrice associée nous a contactés via une recommandation d'un autre cabinet client.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Avant Althoce ─────────────────────────────────────────────
function AvantAlthoce() {
  const [ref, visible] = useInView(0.06);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 40 }}>La journée type avant : 70 % de saisie, frustration croissante</H2>

        <div className="cc1-avant-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
          {/* Équipe */}
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${RED}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: 'all .6s ease' }}>
            <div style={{ padding: '16px 22px', background: `${RED}08`, borderBottom: `1px solid ${RED}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté équipe</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                '70 % du temps des collaborateurs comptables passe en saisie',
                '4 minutes par facture fournisseur en moyenne',
                'Rapprochement bancaire mensuel = 2 jours par client',
                'Reporting client mensuel = chronique du retard',
                '"Je ne fais plus mon métier" — frustration croissante',
                'Plaintes informelles aux associés sur la charge',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < 5 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${RED}12`, border: `1.5px solid ${RED}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: RED }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial */}
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${AMBER}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(16px)', transition: 'all .6s .1s ease' }}>
            <div style={{ padding: '16px 22px', background: `${AMBER}08`, borderBottom: `1px solid ${AMBER}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: AMBER }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: AMBER, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté commercial</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                '2 prospects refusés sur 4 faute de capacité (Q4 2024)',
                'Recommandations entrantes non converties',
                'Sentiment de plafonner à 320 clients',
                'Recrutement junior considéré : coût et délai dissuasifs',
                'Manque à gagner estimé : 80 à 120 k€ / an refusés',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < 4 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${AMBER}12`, border: `1.5px solid ${AMBER}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: AMBER }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Callout souveraineté */}
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1L1 3.5v3.5c0 3.1 2.1 5.8 4.9 6.3C8.9 12.8 11 10.1 11 7V3.5L7 1z" stroke={AC} strokeWidth="1.2" strokeLinejoin="round"/><path d="M4.5 7l2 2 3-3" stroke={AC} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Exigence souveraineté — avant tout déploiement</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
              Avant de signer, la directrice associée pose une <strong style={{ color: '#e4e4e7' }}>exigence non négociable</strong> : aucune donnée comptable client ne doit transiter par OpenAI ou Anthropic. Le cabinet est soumis au secret professionnel (CNCC, CSOEC) et la confidentialité des comptes clients est sacrée. La réponse Althoce : <strong style={{ color: AC }}>Mistral hébergé en France sur infrastructure OVH</strong>, confidentialité contractuellement garantie. Cette exigence est devenue la norme pour tous nos clients comptables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Solution déployée ─────────────────────────────────────────
const timeline = [
  { week: 'Sem. 0', title: 'Cadrage initial', color: AC, items: ['30 min téléphoniques pour qualifier le besoin', '3 processus candidats cartographiés', 'Devis ferme livré sous 5 jours', 'Validation et signature par les 2 associés'] },
  { week: 'Sem. 1-2', title: 'Cadrage approfondi', color: AC, items: ['Ateliers avec 4 collaborateurs', 'Spécification fonctionnelle des 2 agents', 'Cartographie outils : Sage cloud + 4 banques', 'Règles de validation humaine définies', 'Souveraineté : Mistral OVH France validée'] },
  { week: 'Sem. 3-5', title: 'Build agent factures', color: GREEN, items: ['Développement par l\'équipe Althoce', 'Intégration Sage cloud (API officielle)', 'OCR extraction factures PDF mail', 'Tests sur 200 factures historiques', 'Taux de concordance POC : 99,2 %'] },
  { week: 'Sem. 6', title: 'POC factures', color: GREEN, items: ['1 semaine en parallèle saisie humaine', 'Comparaison ligne à ligne', '99,2 % de concordance', 'Ajustements finaux 0,8 % d\'écart'] },
  { week: 'Sem. 7', title: 'Build rapprochement bancaire', color: AMBER, items: ['Intégration 4 banques (OFX + CSV)', 'Tests sur 3 mois de relevés historiques', 'Calibrage règles de lettrage automatique'] },
  { week: 'Sem. 8', title: 'Mise en production complète', color: GREEN, items: ['Bascule complète des 2 agents', 'Formation des 4 collaborateurs', 'Monitoring Slack + reporting hebdo', 'Documentation livrée au cabinet'] },
];

function ArchitectureSVG() {
  return (
    <div style={{ borderRadius: 16, background: '#09090b', border: '1px solid #1a1a1a', padding: '24px 20px', overflow: 'hidden' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>Architecture déployée</div>
      {/* Flow 1 */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8a8a95', marginBottom: 10 }}>Flux 1 — Factures fournisseurs</div>
        <div className="cc1-arch-flow" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {[
            { label: 'Mails fournisseurs', color: '#3f3f46' },
            { label: 'OCR Mindee', color: AC },
            { label: 'Agent IA (Mistral FR)', color: GREEN },
            { label: 'Validation 1-clic', color: AMBER },
            { label: 'Sage cloud', color: AC },
            { label: 'Reporting hebdo', color: GREEN },
          ].map((node, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ padding: '6px 12px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 10, fontWeight: 700, color: node.color, whiteSpace: 'nowrap' }}>{node.label}</div>
              {i < arr.length - 1 && <span style={{ color: '#2a2a2a', fontSize: 15, fontWeight: 900 }}>→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Flow 2 */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#52525b', marginBottom: 10 }}>Flux 2 — Rapprochement bancaire</div>
        <div className="cc1-arch-flow" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {[
            { label: 'Relevés OFX/CSV (4 banques)', color: '#3f3f46' },
            { label: 'Agent IA rapprochement', color: GREEN },
            { label: 'Lettrage auto + anomalies', color: AMBER },
            { label: 'Validation (cas litigieux)', color: AMBER },
            { label: 'Écritures Sage', color: AC },
          ].map((node, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ padding: '6px 12px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 10, fontWeight: 700, color: node.color, whiteSpace: 'nowrap' }}>{node.label}</div>
              {i < arr.length - 1 && <span style={{ color: '#2a2a2a', fontSize: 15, fontWeight: 900 }}>→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 16, padding: '10px 14px', borderRadius: 8, background: '#0a0a0a', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: '#3f3f46', fontWeight: 600 }}>Infrastructure 100 % France · Mistral hébergé OVH · Aucune donnée hors territoire</span>
      </div>
    </div>
  );
}

function LaSolution() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>2 agents IA déployés en 8 semaines, sur les outils existants</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 48, maxWidth: 700 }}>
          Plutôt que de promettre une refonte totale, nous avons commencé par les 2 processus à plus haut ROI identifiés au cadrage : factures fournisseurs et rapprochement bancaire. Ces 2 processus représentaient à eux seuls <strong style={{ color: '#09090b' }}>60 % du temps de saisie du cabinet</strong>.
        </p>

        {/* Timeline verticale */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
          {timeline.map((step, i) => (
            <div key={i} className="cc1-tl-row" style={{ display: 'flex', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-10px)', transition: `all .5s ${i * .08}s ease` }}>

              {/* Colonne dot + ligne */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 100 }}>
                <div style={{ padding: '6px 10px', borderRadius: 9999, background: `${step.color}10`, border: `2px solid ${step.color}40`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: step.color, letterSpacing: '-.01em' }}>{step.week}</span>
                </div>
                {i < timeline.length - 1 && (
                  <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(to bottom, ${step.color}30, #e4e4e7)` }} />
                )}
              </div>

              {/* Contenu — card sur desktop */}
              <div className="cc1-tl-card" style={{ flex: 1, marginBottom: i < timeline.length - 1 ? 16 : 0, paddingBottom: i < timeline.length - 1 ? 8 : 0 }}>
                <div style={{ borderRadius: 14, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `3px solid ${step.color}`, padding: '18px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>{step.title}</span>
                    <span className="cc1-tl-week-inline" style={{ flexShrink: 0, padding: '2px 8px', borderRadius: 9999, background: `${step.color}10`, border: `1px solid ${step.color}25`, fontSize: 10, fontWeight: 800, color: step.color }}>{step.week}</span>
                  </div>
                  <div className="cc1-tl-items">
                    {step.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: step.color, marginTop: 7, opacity: 0.6 }} />
                        <span style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        <ArchitectureSVG />
      </div>
    </section>
  );
}

// ── Résultats ─────────────────────────────────────────────────
const kpiCards = [
  {
    delta: '×2',
    label: 'documents traités / mois',
    avant: '2 100 docs',
    apres: '4 200 docs',
    color: AC,
    size: 'hero',
  },
  {
    delta: '−68 %',
    label: 'temps de saisie / collaborateur',
    avant: '5h30 / jour',
    apres: '1h45 / jour',
    color: AC,
    size: 'normal',
  },
  {
    delta: '−79 %',
    label: "taux d'erreur sur les écritures",
    avant: '1,4 %',
    apres: '0,3 %',
    color: AC,
    size: 'normal',
  },
  {
    delta: '+80',
    label: 'nouveaux clients (4 mois)',
    avant: '0 accepté / 4 refusés',
    apres: '80 nouveaux clients',
    color: AC,
    size: 'normal',
  },
  {
    delta: '0',
    label: 'démission équipe',
    avant: 'frustration croissante',
    apres: 'équipe ré-engagée',
    color: AC,
    size: 'small',
  },
  {
    delta: '+22 %',
    label: 'CA la 1ʳᵉ année',
    avant: 'plafond à 320 clients',
    apres: 'sans recruter de saisisseur',
    color: AC,
    size: 'small',
  },
];

function KPICard({ k, i, visible }: { k: typeof kpiCards[0]; i: number; visible: boolean }) {
  const isHero = k.size === 'hero';
  const isSmall = k.size === 'small';
  return (
    <div
      className={isHero ? 'cc1-kpi-card cc1-kpi-hero' : isSmall ? 'cc1-kpi-card cc1-kpi-small' : 'cc1-kpi-card'}
      style={{
        borderRadius: 18,
        background: isHero ? `linear-gradient(135deg, #0d1220 0%, #080c18 100%)` : '#111',
        border: `1px solid ${k.color}${isHero ? '40' : '20'}`,
        padding: isHero ? '32px 28px' : '22px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: isHero ? 14 : 10,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `all .55s ${i * .08}s ease`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {isHero && (
        <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle,${AC}18 0%,transparent 65%)`, filter: 'blur(30px)', pointerEvents: 'none' }} />
      )}

      {/* Delta — the hero number */}
      <div style={{ fontSize: isHero ? 'clamp(48px,6vw,72px)' : isSmall ? 28 : 38, fontWeight: 900, color: k.color, letterSpacing: '-.04em', lineHeight: 0.95, position: 'relative' }}>
        {k.delta}
      </div>

      {/* Label */}
      <div style={{ fontSize: isHero ? 14 : 12, fontWeight: 700, color: '#52525b', lineHeight: 1.4, textTransform: isHero ? 'none' : 'uppercase', letterSpacing: isHero ? 'normal' : '.06em' }}>
        {k.label}
      </div>

      {/* Avant → Après */}
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#3f3f46', textDecoration: 'line-through', textDecorationColor: `${RED}60` }}>{k.avant}</span>
        <span style={{ fontSize: 10, color: '#2a2a2a', fontWeight: 900 }}>→</span>
        <span style={{ fontSize: 13, fontWeight: 800, color: '#d4d4d8' }}>{k.apres}</span>
      </div>
    </div>
  );
}

function Resultats() {
  const [ref, visible] = useInView(0.06);
  return (
    <section id="resultats" ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2, background: `linear-gradient(to right,transparent,${GREEN},transparent)` }} />
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 14 }}>Mesure 4 mois après mise en production</div>
          <H2 style={{ color: '#fff', marginBottom: 0 }}>Ce qui a changé concrètement</H2>
        </div>

        {/* Bento grid */}
        <div className="cc1-kpi-bento">
          {kpiCards.map((k, i) => (
            <KPICard key={i} k={k} i={i} visible={visible} />
          ))}
        </div>

        <div style={{ marginTop: 32, padding: '24px 28px', borderRadius: 18, background: `${AC}0c`, border: `1px solid ${AC}22` }}>
          <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
            Le cabinet a accepté <strong style={{ color: '#f0f0f0' }}>80 nouveaux clients</strong> sur les 4 mois suivant la mise en production. L'expert-comptable junior recruté en mois 3 ne fait pas de saisie : il monte directement en compétence sur le conseil et la relation client. Les associés peuvent enfin se concentrer sur le développement et le conseil DAF à valeur ajoutée.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Témoignage ────────────────────────────────────────────────
function Temoignage() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 32, textAlign: 'center' }}>Le mot de la directrice associée</div>

        <div style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 120, lineHeight: 0.6, color: GREEN, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.12, marginBottom: 24, display: 'block', textAlign: 'center' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 700, color: '#09090b', lineHeight: 1.65, margin: '0 0 40px', fontStyle: 'normal', textAlign: 'center' }}>
            On pensait que l'IA allait remplacer mes équipes. En réalité, elle a remplacé la partie de leur job qu'elles <span style={{ color: GREEN }}>détestaient</span>. Elles ont retrouvé du sens, on a doublé notre activité, on a embauché un junior pour le conseil pur, et personne n'a démissionné. Et la souveraineté est totale : mes données clients n'ont jamais quitté la France. Le projet le plus impactant qu'on ait fait depuis l'ouverture du cabinet en 2014.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${GREEN}15`, border: `1.5px solid ${GREEN}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="9" r="4.5" stroke={GREEN} strokeWidth="1.5"/>
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>Directrice associée du cabinet</div>
              <div style={{ fontSize: 13, color: '#8a8a95', marginTop: 2 }}>12 ans d'expertise comptable · Lyon · 4 mois après mise en production</div>
            </div>
            <div style={{ padding: '6px 16px', borderRadius: 9999, background: `${GREEN}10`, border: `1px solid ${GREEN}30`, fontSize: 13, fontWeight: 800, color: GREEN }}>×2 capacité</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Apprentissages ────────────────────────────────────────────
function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke={GREEN} strokeWidth="1.5"/>
      <path d="M6 10l3 3 5-5" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconWrench() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke={AMBER} strokeWidth="1.5"/>
      <path d="M13 7a3 3 0 01-4 4L6 14" stroke={AMBER} strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="6.5" cy="13.5" r="1" fill={AMBER}/>
    </svg>
  );
}
function IconWarning() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3L18 16H2L10 3z" stroke={RED} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 9v3" stroke={RED} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="10" cy="14" r="0.8" fill={RED}/>
    </svg>
  );
}

const lessons = [
  {
    num: '01',
    Icon: IconCheck,
    tag: 'Facteurs de succès',
    title: 'Ce qui a très bien marché',
    color: GREEN,
    items: [
      { bold: 'Commencer par 2 processus seulement', text: " plutôt que 5. Concentration sur le ROI maximum, déploiement maîtrisé, succès rapide qui crédibilise pour la suite." },
      { bold: 'La souveraineté Mistral hébergé France', text: " posée dès le cadrage initial, qui a levé l'objection majeure de la directrice et a évité tout sujet de confidentialité ensuite." },
      { bold: 'Le rituel mensuel de revue agent', text: " mis en place dès le go-live. L'équipe pilote, ajuste, fait évoluer les règles. Personne ne subit l'agent." },
    ],
  },
  {
    num: '02',
    Icon: IconWrench,
    tag: 'Ajustements',
    title: "Ce qu'on ajusterait",
    color: AMBER,
    items: [
      { bold: 'Le POC de 1 semaine en parallèle humain', text: " s'est avéré trop court pour le rapprochement bancaire (variabilité saisonnière). Sur les prochains déploiements similaires, nous allongeons à 3 semaines." },
      { bold: 'La formation initiale', text: " des collaborateurs aurait gagné à être plus structurée. Première fois pour eux de « manager un agent IA ». Format à formaliser avec ", link: { text: 'Formation IA Althoce', href: '/services/formation-ia/' } },
    ],
  },
  {
    num: '03',
    Icon: IconWarning,
    tag: 'Piège fréquent',
    title: 'Le piège à éviter',
    color: RED,
    items: [
      { bold: 'Ne pas réduire l\'effectif après déploiement.', text: " Tentation classique : « on a doublé la capacité, on pourrait réduire d'un poste ». Erreur stratégique. La capacité libérée doit aller sur des missions à valeur ajoutée. Sinon l'équipe se démotive et la croissance attendue ne se matérialise pas." },
    ],
  },
];

function Apprentissages() {
  const [ref, visible] = useInView(0.06);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 12 }}>Retour d'expérience</div>
          <H2 style={{ color: '#fff' }}>Trois choses qui ont fait la réussite de ce déploiement</H2>
        </div>

        <div className="cc1-lessons-grid">
          {lessons.map((lesson, i) => (
            <div
              key={i}
              style={{
                borderRadius: 20,
                background: '#111',
                border: `1px solid ${lesson.color}20`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(24px)',
                transition: `all .55s ${i * .12}s ease`,
                position: 'relative',
              }}
            >
              {/* Colored top stripe */}
              <div style={{ height: 3, background: `linear-gradient(to right, ${lesson.color}, ${lesson.color}44)` }} />

              {/* Decorative number watermark */}
              <div aria-hidden="true" style={{ position: 'absolute', top: 12, right: 16, fontSize: 72, fontWeight: 900, color: `${lesson.color}08`, letterSpacing: '-.06em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
                {lesson.num}
              </div>

              {/* Header */}
              <div style={{ padding: '24px 24px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: `${lesson.color}12`, border: `1px solid ${lesson.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <lesson.Icon />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: lesson.color, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>{lesson.tag}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#f0f0f0', lineHeight: 1.3, letterSpacing: '-.01em' }}>{lesson.title}</div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: '#1a1a1a', margin: '0 24px' }} />

              {/* Items */}
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                {lesson.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10 }}>
                    <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: lesson.color, marginTop: 8, opacity: 0.7 }} />
                    <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#d4d4d8' }}>{item.bold}</strong>
                      {item.text}
                      {'link' in item && item.link && (
                        <a href={item.link.href} style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>{item.link.text}</a>
                      )}{'.'}
                    </p>
                  </div>
                ))}
              </div>
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit comptable</div>
      {['Processus cartographiés', 'KPI de départ mesurés', 'Souveraineté validée', 'Devis ferme 5 jours'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `slideIn .4s ${i * .15}s ease both` : 'none' }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: i < 3 ? '#22c55e22' : '#f4f4f5', border: i < 3 ? '1.5px solid #22c55e' : '1.5px solid #d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, color: '#22c55e', fontWeight: 900 }}>{i < 3 && '✓'}</div>
          <span style={{ fontSize: 13, color: i < 3 ? '#52525b' : '#a1a1aa', fontWeight: i < 3 ? 600 : 400 }}>{t}</span>
          {i < 3 && <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>OK</span>}
        </div>
      ))}
    </div>
  );
  if (stepIndex === 1) return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1s ease-in-out infinite' : 'none' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap</div>
      {[{ l: 'Agent factures fournisseurs', w: 90 }, { l: 'Agent rapprochement bancaire', w: 70 }, { l: 'Formation équipe', w: 55 }, { l: 'Monitoring', w: 38 }].map((r, i) => (
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
        {[{ n: 'Sage cloud', c: '#00b050' }, { n: 'Mistral OVH FR', c: '#6366f1' }, { n: 'OCR Mindee', c: '#0891b2' }, { n: 'BNP', c: '#009966' }, { n: 'CIC', c: '#e4002b' }, { n: 'Crédit Agricole', c: '#00843d' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Résultats 4 mois</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: 'Documents traités / mois', v: '4 200' }, { t: 'Saisie par collaborateur', v: '1h45 / j' }, { t: 'Nouveaux clients', v: '+80' }, { t: 'Taux d\'erreur', v: '0,3 %' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 12, color: '#52525b', fontWeight: 500 }}>{r.t}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: GREEN }}>{r.v}</span>
        </div>
      ))}
    </div>
  );
}

function Methodology() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <H2 style={{ marginBottom: 12 }}>Comment se passe une mission avec Althoce ?</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>La même méthode appliquée ici en 8 semaines. Vérifiable sur ce cas concret.</p>
        </div>
        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i}>
              {/* Card animée — s'affiche quand visible */}
              <div style={{ marginBottom: 24, minHeight: 180, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .6s ${i * .12}s ease` }}>
                <StepVisual stepIndex={i} active={visible} />
              </div>
              {/* Texte toujours visible */}
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

// ── Votre cas similaire ───────────────────────────────────────
function VotreCas() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 12 }}>Vous êtes un cabinet d'expertise comptable ou un service compta PME ?</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Trois questions pour évaluer si ce cas est transposable au vôtre.
        </p>

        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>3 critères de transposabilité</p>
          </div>
          {[
            { n: '01', text: "Vous avez 8 à 25 collaborateurs, dont au moins 4 affectés à la saisie comptable." },
            { n: '02', text: "Vous traitez plus de 1 500 documents comptables par mois (factures fournisseurs, écritures, rapprochements)." },
            { n: '03', text: "Votre équipe est saturée et vous refusez des clients ou repoussez des recrutements faute de soutenabilité." },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${GREEN}18`, border: `1px solid ${GREEN}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: GREEN }}>{item.n}</span>
              </div>
              <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
            </div>
          ))}
          <div style={{ padding: '16px 24px', borderTop: '1px solid #1a1a1a', background: '#0a0a0a' }}>
            <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>
              Si vous répondez oui aux 3, la transposition est très probable. Les <strong style={{ color: '#a1a1aa' }}>30 minutes offertes avec un expert</strong> servent à valider en détail.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/agent-ia/finance/"
            style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
            Découvrir Agent IA pour la finance →
          </a>
          <a href="/contact"
            style={{ padding: '14px 28px', borderRadius: 9999, border: `1.5px solid ${GREEN}40`, color: GREEN, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: `${GREEN}08`, transition: 'border-color .15s,background .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${GREEN}80`; (e.currentTarget as HTMLAnchorElement).style.background = `${GREEN}14`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${GREEN}40`; (e.currentTarget as HTMLAnchorElement).style.background = `${GREEN}08`; }}>
            Discuter de votre projet (30 min offertes) →
          </a>
        </div>

        {/* Autres cas */}
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #e4e4e7' }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>Voir d'autres cas clients</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/cas-clients/"
              style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
              <span style={{ fontSize: 12 }}>←</span> Tous les cas clients
            </a>
            {[
              { href: '/cas-clients/negoce-vins-bordelais-agent-ia-sdr/', label: 'Négoce vins', sub: 'Agent SDR' },
              { href: '/cas-clients/saas-b2b-agent-ia-service-client/', label: 'SaaS B2B', sub: 'Service client' },
            ].map((c) => (
              <a key={c.href} href={c.href}
                style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
                {c.label} <span style={{ color: '#a1a1aa', fontWeight: 500 }}>·</span> {c.sub} <span style={{ fontSize: 12 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CSS ───────────────────────────────────────────────────────
const globalStyles = `
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  /* Timeline verticale */
  .cc1-tl-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 20px;
  }
  .cc1-tl-week-inline { display: inline-flex; }
  @media (max-width: 680px) {
    .cc1-tl-items { grid-template-columns: 1fr !important; }
    .cc1-tl-row { gap: 0 !important; }
    .cc1-tl-row > div:first-child { width: 52px !important; }
    .cc1-tl-week-inline { display: none !important; }
  }
  /* Lessons 3-col grid */
  .cc1-lessons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-items: start;
  }
  @media (max-width: 860px) {
    .cc1-lessons-grid { grid-template-columns: 1fr !important; }
  }
  /* KPI Bento Grid — desktop: hero spans 2 rows left, 5 cards 2-col right */
  .cc1-kpi-bento {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 14px;
  }
  .cc1-kpi-hero {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  @media (max-width: 860px) {
    .cc1-hero-grid { grid-template-columns: 1fr !important; }
    .cc1-stat-col { display: none !important; }
    .cc1-avant-grid { grid-template-columns: 1fr !important; }
    .cc1-kpi-bento {
      grid-template-columns: 1fr 1fr !important;
      grid-template-rows: auto !important;
    }
    .cc1-kpi-hero {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .cc1-arch-flow { gap: 4px !important; }
  }
  @media (max-width: 500px) {
    .cc1-kpi-bento { grid-template-columns: 1fr !important; }
    .cc1-kpi-hero { grid-column: 1 / -1 !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
  }
`;

export default function CasClientCabinetComptableLyonPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <LeClient />
      <AvantAlthoce />
      <LaSolution />
      <Resultats />
      <Temoignage />
      <Apprentissages />
      <Methodology />
      <VotreCas />
    </main>
  );
}
