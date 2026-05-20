'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentTags } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';
const GREEN = '#16a34a';
const RED = '#ef4444';

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

// ── HR Scoring Mockup ─────────────────────────────────────────
function HRScoringMockup() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  const candidates = [
    { initials: 'J.D.', score: 87, status: 'Prioritaire', color: GREEN },
    { initials: 'A.R.', score: 82, status: 'Prioritaire', color: GREEN },
    { initials: 'M.K.', score: 64, status: 'À évaluer', color: '#f59e0b' },
    { initials: 'S.L.', score: 41, status: 'Hors profil', color: '#52525b' },
    { initials: 'T.B.', score: 28, status: 'Hors profil', color: '#52525b' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
      <div style={{ padding: '12px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, boxShadow: `0 0 6px ${GREEN}` }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>Tri en cours · Dev Senior Python</span>
        </div>
        <div style={{ fontSize: 12, color: '#3f3f46' }}>RH IA</div>
      </div>

      <div style={{ background: '#111', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr 38px 76px', padding: '8px 14px', borderBottom: '1px solid #1a1a1a', gap: 8 }}>
          {['', 'Score adéquation', '%', 'Statut'].map((h, i) => (
            <div key={i} style={{ fontSize: 9, fontWeight: 700, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.08em' }}>{h}</div>
          ))}
        </div>
        {candidates.map((c, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr 38px 76px', padding: '11px 14px', borderBottom: i < candidates.length - 1 ? '1px solid #1a1a1a' : 'none', alignItems: 'center', gap: 8, animation: loaded ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${AC}15`, border: `1px solid ${AC}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 8, fontWeight: 900, color: AC }}>{c.initials}</span>
            </div>
            <div style={{ height: 5, background: '#1a1a1a', borderRadius: 9999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: loaded ? `${c.score}%` : '0%', background: `linear-gradient(to right,${c.color},${c.color}88)`, borderRadius: 9999, transition: `width .9s ${i * .12 + .3}s ease` }} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 900, color: c.color, textAlign: 'right' }}>{c.score}%</div>
            <div style={{ padding: '3px 7px', borderRadius: 6, background: `${c.color}15`, border: `1px solid ${c.color}30`, fontSize: 10, fontWeight: 700, color: c.color, whiteSpace: 'nowrap', textAlign: 'center' }}>{c.status}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px 14px', background: '#0a0a0a', borderRadius: '0 0 14px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #1a1a1a', flexWrap: 'wrap', gap: 6 }}>
        {[{ icon: '✓', label: 'Conforme RGPD', color: GREEN }, { icon: '✓', label: 'Sans biais documenté', color: GREEN }, { icon: '⚡', label: '4 min / 80 CV', color: AC }].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 9, fontWeight: 900, color: item.color }}>{item.icon}</span>
            <span style={{ fontSize: 9, color: '#52525b', fontWeight: 600 }}>{item.label}</span>
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
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}10 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#16a34a0d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="rh-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA RH</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA pour les RH : tri CV, qualification candidats,{' '}
              <span style={{ color: AC }}>assistance interne 24/7.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Vous recevez 500 CV par semaine, votre équipe paie répond aux mêmes questions chaque mardi, vos new hires attendent leur badge. Un agent IA Althoce absorbe ces tâches en conformité RGPD stricte, anti-biais documenté. Votre équipe RH se recentre sur la marque employeur et la relation humaine.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="rh-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', 'Conforme RGPD natif', 'Anti-biais documenté', '+758 agents en production', 'Conforme RGPD natif', 'Anti-biais documenté'].map((t, i) => (
                  <span key={i} className={i >= 3 ? 'pill-dup' : undefined} style={{ padding: '5px 13px', borderRadius: 9999, background: '#f4f4f5', fontSize: 13, fontWeight: 700, color: '#52525b', whiteSpace: 'nowrap', flexShrink: 0 }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#agents"
                style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les 4 agents RH ↓
              </a>
            </div>
          </div>

          <div className="rh-mockup-col">
            <HRScoringMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── KPI Strip ─────────────────────────────────────────────────
const kpiStrip = [
  { value: '700', label: 'CV triés / semaine', sub: 'sans erreur, sans biais' },
  { value: '24 h', label: 'Qualification candidat', sub: 'vs 5-10 jours avant' },
  { value: '80 %', label: 'Temps tri libéré', sub: 'pour les recruteurs' },
  { value: '< 6 mois', label: 'Payback typique', sub: 'sur services RH saturés' },
];

function KPIStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', background: '#fafafa' }}>
      <div className="rh-kpi-strip" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {kpiStrip.map((k, i) => (
          <div key={i} style={{ padding: '36px 24px', borderRight: i < 3 ? '1px solid #e4e4e7' : 'none', textAlign: 'center', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: `all .5s ${i * .1}s ease`, background: '#fff' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 3, background: `linear-gradient(to right,transparent,${AC},transparent)`, borderRadius: '0 0 4px 4px' }} />
            <div style={{ fontSize: 'clamp(28px,3vw,44px)', fontWeight: 900, color: AC, letterSpacing: '-.04em', lineHeight: 1, marginBottom: 8 }}>{k.value}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#09090b', marginBottom: 4, letterSpacing: '-.01em' }}>{k.label}</div>
            <div style={{ fontSize: 12, color: '#a1a1aa', fontWeight: 500 }}>{k.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Definition ────────────────────────────────────────────────
function Definition() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 16 }}>Ce qu'un agent IA absorbe vraiment dans les RH</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 24, maxWidth: 800 }}>
          Dans un service RH ou un cabinet de recrutement, <strong style={{ color: '#09090b' }}>60 à 70 % du temps est absorbé par des tâches répétitives à faible valeur ajoutée cognitive</strong> : trier les CV, qualifier les candidats par téléphone, répondre pour la 50ᵉ fois aux questions sur les congés ou la paie, préparer les documents des new hires, suivre les contrats temporaires. Un agent IA Althoce absorbe ces tâches avec deux engagements stricts : <strong style={{ color: '#09090b' }}>conformité RGPD native</strong> (les CV sont des données personnelles sensibles) et <strong style={{ color: '#09090b' }}>anti-biais documenté</strong> (le scoring n'intègre jamais le genre, l'âge, l'origine ou tout critère discriminatoire). Votre équipe RH se concentre sur la marque employeur, l'entretien final, la fidélisation et la stratégie talents.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 40 }}>
          Concrètement, derrière un agent IA RH Althoce : une cartographie des processus RH ciblés, une intégration à votre{' '}
          <a href="/services/integration-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>SI RH</a>{' '}
          (Workday, Lever, Welcome to the Jungle, HRIS interne, outils paie), une couche RGPD renforcée (anonymisation, durée de conservation paramétrable, droit à l'oubli), et une documentation anti-biais opposable. Pour un poste entier d'assistant RH automatisé, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        {/* Qualify callout */}
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Trois questions pour qualifier votre besoin RH</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', q: "Recevez-vous plus de 100 CV par semaine sur certains postes, dont la majorité ne sont pas en adéquation avec le profil cible ?" },
              { n: '02', q: "Votre équipe paie ou RH répond-elle aux mêmes 30 questions chaque mois (congés, RTT, contrat, mutuelle, formation) avec un temps de réponse trop long ?" },
              { n: '03', q: "Vos new hires attendent-ils plus de 3 jours pour finaliser leur onboarding administratif (badge, accès SI, documents) ?" },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${AC}18`, border: `1px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: AC }}>{row.n}</span>
                </div>
                <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>{row.q}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: '16px 24px', borderTop: '1px solid #1a1a1a', background: '#0a0a0a' }}>
            <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>
              Si oui à 1 question sur 3, un agent IA RH transforme votre quotidien. Si oui aux 3, votre équipe RH passe son temps sur la mauvaise chose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Before / After ────────────────────────────────────────────
const avantItems = [
  { time: '8h30', label: "80 CV reçus sur 3 postes ouverts. Tri manuel à caser dans la semaine." },
  { time: '9h-11h', label: "6 mails collaborateurs sur congés et paie. 10 min par mail, chaque jour." },
  { time: '11h', label: "2 entretiens téléphoniques candidats préparés à la va-vite : la matinée était absorbée." },
  { time: '14h-16h', label: "Préparation admin 2 new hires : contrats, accès SI à demander à l'IT, badges." },
  { time: '16h', label: "Retour aux 80 CV. Tri rapide en 30 min. Des bons profils probablement perdus dans le lot." },
  { time: '17h30', label: "Un manager appelle pour un point recrutement. Pas d'avancée significative à raconter." },
  { time: 'Bilan', label: "80 CV à finir demain. Marque employeur reportée, encore. On rentre à 18h30." },
];

const apresItems = [
  { time: '8h30', label: "Dashboard RH : 80 CV triés pendant la nuit. 12 prioritaires identifiés et contactés pour entretien téléphonique." },
  { time: '9h', label: "4 entretiens téléphoniques candidats déjà calés dans la journée par l'agent IA qualification." },
  { time: '10h-12h', label: "4 entretiens humains à valeur ajoutée. L'agent a préparé une synthèse par candidat : parcours, motivations, points à creuser." },
  { time: '14h', label: "L'agent IA assistant RH a répondu à 22 questions collaborateurs. 2 cas sensibles escalés avec contexte." },
  { time: '15h', label: "Onboarding 2 new hires préparé par l'agent : contrats, accès SI, badges, welcome pack. DRH valide en 10 min." },
  { time: '17h', label: "Point recrutement avec 2 managers. 4 candidats vus, 2 retenus pour 2ᵉ tour — avancées concrètes." },
  { time: 'Bilan', label: "0 CV en retard. Marque employeur avancée. On rentre à 18h00 pétantes." },
];

function BeforeAfter() {
  const [ref, visible] = useInView(0.06);
  const [tab, setTab] = useState<'avant' | 'apres'>('avant');

  const tabs = [
    { key: 'avant' as const, label: 'Avant', color: RED, items: avantItems },
    { key: 'apres' as const, label: 'Après', color: GREEN, items: apresItems },
  ];
  const active = tabs.find((t) => t.key === tab)!;

  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <H2 style={{ marginBottom: 12 }}>Avant Althoce vs Après Althoce. La journée type d'un DRH PME.</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Journée type observée chez nos clients DRH PME (50 à 250 collaborateurs) après déploiement.</p>
        </div>

        {/* Desktop split */}
        <div className="rh-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', background: '#fff' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #f4f4f5', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '.08em' }}>Avant Althoce</span>
            </div>
            {avantItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 24px', borderBottom: i < avantItems.length - 1 ? '1px solid #f4f4f5' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-8px)', transition: `all .5s ${i * .08}s ease` }}>
                <div style={{ flexShrink: 0, paddingTop: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.time === 'Bilan' ? RED : '#a1a1aa', letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{item.time}</span>
                </div>
                <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${AC}25`, background: '#fff' }}>
            <div style={{ padding: '16px 24px', borderBottom: `1px solid ${AC}15`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: GREEN }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '.08em' }}>Après Althoce</span>
            </div>
            {apresItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 24px', borderBottom: i < apresItems.length - 1 ? `1px solid ${AC}10` : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(8px)', transition: `all .5s ${i * .08}s ease` }}>
                <div style={{ flexShrink: 0, paddingTop: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.time === 'Bilan' ? GREEN : AC, letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{item.time}</span>
                </div>
                <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="rh-ba-mobile" style={{ display: 'none', flexDirection: 'column', gap: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: 4, background: '#f0f0f0', borderRadius: 14, marginBottom: 16 }}>
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                style={{ padding: '11px 8px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 800, background: tab === t.key ? '#fff' : 'transparent', color: tab === t.key ? t.color : '#52525b', boxShadow: tab === t.key ? '0 1px 8px rgba(0,0,0,.10)' : 'none', transition: 'all .2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: tab === t.key ? t.color : '#d4d4d8', flexShrink: 0, display: 'inline-block' }} />
                {t.label} Althoce
              </button>
            ))}
          </div>
          <div style={{ borderRadius: 18, overflow: 'hidden', border: `1.5px solid ${active.color}28`, background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,.05)' }}>
            {active.items.map((item, i) => (
              <div key={`${tab}-${i}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', borderBottom: i < active.items.length - 1 ? '1px solid #f4f4f5' : 'none', background: item.time === 'Bilan' ? (active.color === RED ? '#fff5f5' : '#f0fdf4') : (i % 2 === 0 ? '#fff' : '#fafafa') }}>
                <span style={{ flexShrink: 0, fontSize: 10, fontWeight: 900, whiteSpace: 'nowrap', padding: '4px 8px', borderRadius: 7, background: item.time === 'Bilan' ? active.color : '#ebebeb', color: item.time === 'Bilan' ? '#fff' : '#8a8a95', marginTop: 2 }}>
                  {item.time}
                </span>
                <p style={{ fontSize: 14, lineHeight: 1.65, margin: 0, color: item.time === 'Bilan' ? '#09090b' : '#8a8a95', fontWeight: item.time === 'Bilan' ? 700 : 400 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40, padding: '20px 28px', borderRadius: 16, background: `${AC}08`, border: `1px solid ${AC}20` }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0, textAlign: 'center' }}>
            Ce gain ne se mesure pas seulement en CV triés ou en mails répondus. Il se mesure aussi en <strong>temps libéré pour la marque employeur et la stratégie talents</strong>, deux sujets que la plupart des DRH PME repoussent perpétuellement faute de bande passante.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Agents Listing ────────────────────────────────────────────
const agents = [
  {
    num: '01',
    name: 'Agent IA tri CV',
    color: AC,
    badge: 'Recrutement',
    who: 'DRH PME, cabinets de recrutement, chargés de recherche',
    desc: 'Reçoit les CV (mail, ATS, formulaire site carrière), les analyse, les score sur l\'adéquation au profil cible. Élimine les hors profil avec justification, identifie les bons profils, contacte les candidats prioritaires pour proposer un entretien de qualification. Anti-biais documenté : exclusion explicite du genre, âge, origine, adresse. Logs de chaque décision conservés pour audit.',
    tools: ['Workday', 'Lever', 'Welcome to the Jungle', 'Recruitee', 'Smartrecruiters'],
    impact: '200 à 800 CV triés / semaine. 80 % du temps de tri libéré. Zéro CV oublié.',
    delai: '2 à 3 semaines',
  },
  {
    num: '02',
    name: 'Agent IA qualification candidat',
    color: '#7c3aed',
    badge: 'Téléphonique',
    who: 'Recruteurs, chargés de recherche, cabinets de recrutement cadres',
    desc: "Appelle les candidats pré-sélectionnés, mène une qualification structurée en conversation naturelle française (parcours, motivation, disponibilité, prétentions, mobilité), produit une synthèse écrite, propose un entretien humain avec le bon recruteur. Peut aussi traiter les appels entrants des candidats. Cohérent avec <a href='/agent-ia/telephonique/' style='color:#2563eb;font-weight:700;text-decoration:none'>Agent IA téléphonique</a>. Transparence systématique en début d'appel.",
    tools: ['Twilio', 'Ringover', 'Calendly', 'ATS', 'Agenda recruteur'],
    impact: '100 % des candidats prioritaires qualifiés sous 24h. Recruteurs libérés pour l\'entretien à valeur.',
    delai: '3 à 4 semaines',
  },
  {
    num: '03',
    name: 'Agent IA assistant RH interne',
    color: '#d97706',
    badge: 'Chatbot RH',
    who: 'Équipe paie, RH généraliste, responsable administration du personnel',
    desc: "Répond aux questions des collaborateurs sur les sujets RH récurrents (congés, RTT, paie, mutuelle, formation, télétravail, conventions collectives), en se basant sur votre charte RH et vos accords d'entreprise. Cite les sources. Escalade les cas sensibles (litige, RGPD, harcèlement) à un humain avec contexte. Cohérent avec <a href='/services/chatbot-ia/' style='color:#2563eb;font-weight:700;text-decoration:none'>Chatbot IA RAG</a>.",
    tools: ['Slack', 'Teams', 'Notion', 'Sharepoint', 'PayFit', 'Lucca'],
    impact: '60 à 70 % des questions résolues en autonomie. 4 à 8 heures / semaine libérées côté équipe paie.',
    delai: '2 à 4 semaines',
  },
  {
    num: '04',
    name: 'Agent IA onboarding new hire',
    color: GREEN,
    badge: 'Onboarding',
    who: 'RH, office manager, DSI, managers recruteurs',
    desc: "Prépare l'onboarding administratif des nouveaux collaborateurs : génération du contrat depuis le template, demande automatique des accès SI, commande du matériel (poste, badge, téléphone), envoi du welcome pack, programmation des rendez-vous d'accueil avec manager, RH et buddy. Suit l'onboarding sur 30, 60, 90 jours. Pour un poste entier d'assistant RH automatisé, voir <a href='/services/employe-ia/' style='color:#2563eb;font-weight:700;text-decoration:none'>Employé IA</a>.",
    tools: ['HRIS', 'Yousign', 'DocuSign', 'DSI ticketing', 'Agenda'],
    impact: 'Onboarding admin réduit de 3 jours à quelques heures. Zéro oubli sur accès et matériel.',
    delai: '3 à 5 semaines',
  },
];

function AgentCard({ agent, index, visible }: { agent: typeof agents[0]; index: number; visible: boolean }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{ borderRadius: 20, background: '#fff', border: '1px solid #e4e4e7', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${index * .1}s ease` }}>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
      >
        <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 12, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 900, color: agent.color }}>{agent.num}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>{agent.name}</div>
          <div className="rh-agent-badge" style={{ marginTop: 4 }}>
            <span style={{ padding: '3px 10px', borderRadius: 9999, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, fontSize: 11, fontWeight: 800, color: agent.color }}>{agent.badge}</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .25s', color: '#a1a1aa' }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {expanded && (
        <div className="rh-agent-expanded" style={{ padding: '0 24px 24px', paddingLeft: 80 }}>
          <p style={{ fontSize: 14, color: '#a1a1aa', marginBottom: 12, fontStyle: 'italic' }}>{agent.who}</p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: agent.desc }} />
          <div className="rh-agents-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>Outils intégrés</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {agent.tools.map((t) => (
                  <span key={t} style={{ padding: '3px 10px', borderRadius: 6, background: '#f4f4f5', fontSize: 12, fontWeight: 600, color: '#52525b' }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>Impact typique</p>
              <p style={{ fontSize: 14, color: '#09090b', fontWeight: 700, lineHeight: 1.65, margin: 0 }}>{agent.impact}</p>
              <p style={{ fontSize: 13, color: '#8a8a95', marginTop: 6, margin: 0 }}>Délai : {agent.delai}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AgentsListing() {
  const [ref, visible] = useInView(0.06);
  return (
    <section id="agents" ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
          <H2 style={{ marginBottom: 12 }}>4 agents IA Althoce déployés en standard dans les RH</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.65 }}>
            Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner. Tous conformes RGPD natif, avec documentation anti-biais opposable en cas d'audit.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {agents.map((agent, i) => (
            <AgentCard key={agent.num} agent={agent} index={i} visible={visible} />
          ))}
        </div>
        <div style={{ marginTop: 32, padding: '20px 24px', borderRadius: 16, background: '#fff', border: '1px solid #e4e4e7' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Votre besoin n'est pas exactement dans la liste ? Pour un poste entier de chargé de recrutement ou d'assistant RH automatisé de bout en bout, voir{' '}
            <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.{' '}
            Les <strong>30 minutes offertes avec un expert</strong> servent à qualifier la combinaison d'agents la plus pertinente et à valider la conformité RGPD avant tout engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Cas Client ────────────────────────────────────────────────
const kpis = [
  { label: 'CV triés sérieusement / sem.', avant: '200', apres: '700', unit: '+250 %' },
  { label: 'Time-to-first-touch candidat', avant: '5-10j', apres: '24h', unit: '−95 %' },
  { label: 'Placements réalisés / mois', avant: '8', apres: '17', unit: '+113 %' },
  { label: 'Audit RGPD candidats', avant: 'Aléatoire', apres: 'Opposable', unit: '✓' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: `radial-gradient(ellipse,${AC}0a 0%,transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ padding: '88px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['Paris', 'Cabinet de recrutement', '6 consultants', '700 CV/semaine'].map((tag, i) => (
            <span key={i} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111', letterSpacing: '.02em' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.65, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.45, marginBottom: 20, display: 'block' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(17px,2.2vw,24px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 36px', fontStyle: 'normal', paddingLeft: 20, borderLeft: `3px solid ${AC}55` }}>
            On reçoit 700 CV par semaine sur des postes de cadres. Avant Althoce, on en triait sérieusement 200 au maximum. Les 500 autres étaient survolés. On a déployé l'agent IA tri CV en 3 semaines. Aujourd'hui les 700 CV sont triés en quelques heures, avec un scoring justifié et anti-biais. On a doublé le volume placé sans embaucher. Aucun retour RGPD défavorable en 6 mois.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${AC}15`, border: `1.5px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="9" r="4.5" stroke={AC} strokeWidth="1.5"/>
                <path d="M4 20C4 16.7 7.1 14 11 14S18 16.7 18 20" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#e4e4e7', letterSpacing: '-.01em' }}>Directeur associé</div>
              <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>Cabinet de recrutement cadres · 6 consultants · Paris</div>
            </div>
            <div style={{ padding: '7px 16px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a30', fontSize: 14, fontWeight: 800, color: GREEN, flexShrink: 0 }}>0 CV oublié</div>
          </div>

          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 12 }}>
            Avant la mission Althoce, les 6 consultants triaient sérieusement environ 200 CV sur les 700 reçus chaque semaine. Les 500 autres étaient survolés par contrainte de temps. La direction savait qu'elle ratait de bons profils mais ne pouvait pas recruter un chargé de recherche supplémentaire.
          </p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 24 }}>
            En 3 semaines, l'agent IA tri CV a été déployé. Il analyse chaque CV sur l'adéquation au poste cible défini par le consultant, exclut explicitement tout critère discriminatoire, et produit un scoring justifié avec logs auditables. Les consultants reçoivent chaque matin une short list avec synthèse pré-rédigée. Le volume placé a doublé en 4 mois, sans embauche.
          </p>

          <a href="/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Lire le cas client complet →
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="rh-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < kpis.length - 1 ? '1px solid #1a1a1a' : 'none', textAlign: 'center', position: 'relative' }}>
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: `linear-gradient(to right,transparent,${AC}55,transparent)` }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 18 }}>{k.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#3f3f46', textDecoration: 'line-through', textDecorationColor: `${RED}90` }}>{k.avant}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M2 7H12M12 7L8.5 3.5M12 7L8.5 10.5" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 26, fontWeight: 900, color: '#ffffff', letterSpacing: '-.03em', lineHeight: 1 }}>{k.apres}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 800, color: GREEN, padding: '4px 14px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a28' }}>{k.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────
function MarqueeMetiers() {
  return (
    <section style={{ padding: '64px 0', background: '#fff', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 28 }}>Déployé dans tous les secteurs d'activité</p>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" aria-label="Secteurs couverts par les agents IA RH">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit RH</div>
      {['Volume CV / semaine', 'Questions RH récurrentes', "Processus d'onboarding", 'Outils ATS / HRIS'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap RH</div>
      {[{ l: 'Agent tri CV', w: 90 }, { l: 'Agent qualification candidat', w: 72 }, { l: 'Agent assistant RH interne', w: 55 }, { l: 'Agent onboarding', w: 40 }].map((r, i) => (
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
        {[{ n: 'Lever', c: '#1a73e8' }, { n: 'Workday', c: '#f7941d' }, { n: 'Welcome', c: '#00b5ad' }, { n: 'PayFit', c: '#6366f1' }, { n: 'Yousign', c: '#4ade80' }, { n: 'Notion', c: '#000' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent RH actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Actif</span>
      </div>
      {[{ t: "CV triés aujourd'hui", v: '80' }, { t: 'Candidats qualifiés', v: '12' }, { t: 'Questions RH répondues', v: '22' }, { t: 'Onboardings en cours', v: '2' }].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 12, color: '#52525b', fontWeight: 500 }}>{r.t}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: AC }}>{r.v}</span>
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Votre premier agent RH en production en moins de 4 semaines.</p>
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
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="/cas-clients/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'; }}>
            Voir nos cas clients →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Security ──────────────────────────────────────────────────
const secIcons = [
  <svg key="0" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2L3 5v5c0 4.4 3 8.3 7 9 4-0.7 7-4.6 7-9V5l-7-3z" stroke={AC} strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="9" width="14" height="9" rx="2" stroke={AC} strokeWidth="1.5"/><path d="M7 9V6a3 3 0 016 0v3" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke={AC} strokeWidth="1.5"/><path d="M10 6v4l3 2" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="7" r="3.5" stroke={AC} strokeWidth="1.5"/><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/></svg>,
];

function Security() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="v2-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 48 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.14em' }}>Souveraineté & conformité</span>
            <H2 style={{ marginTop: 12, marginBottom: 20, color: '#fff' }}>Vos données RH. Hébergées en France. Anti-biais opposable.</H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 20 }}>
              Les CV sont des données personnelles sensibles. Anonymisation automatique des PII (nom, prénom, adresse, téléphone, mail) avant tout traitement LLM. Stockage sur <strong style={{ color: '#a1a1aa' }}>OVH ou Scaleway</strong> en France. Durée de conservation paramétrable selon votre charte RGPD, droit à l'oubli implémenté, registre de traitements complet livré à votre DPO.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>
              Pour les contextes à souveraineté maximale (cabinets de recrutement cadres, secteurs réglementés), nous utilisons <strong style={{ color: '#a1a1aa' }}>Mistral</strong> hébergé en France. Documentation anti-biais opposable livrée à votre DPO — opposable en cas de contrôle CNIL ou de contentieux prud'hommal.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {securityItems.map((item, i) => (
              <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 16, padding: '22px 18px', background: '#0f0f0f', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${i * .1}s ease` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = `${AC}40`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e'; }}
              >
                <div aria-hidden="true" style={{ position: 'absolute', top: -16, right: -16, width: 60, height: 60, background: `radial-gradient(circle,${AC}08,transparent)` }} />
                <div style={{ marginBottom: 10 }}>{secIcons[i]}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#e4e4e7', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
const faqRH: FAQv2Item[] = [
  {
    q: "L'agent IA tri CV est-il vraiment anti-biais ? Comment garantissez-vous l'absence de discrimination ?",
    a: "Oui, et c'est documenté. Trois niveaux de garantie. Premier niveau : exclusion explicite des critères protégés par la loi (genre, âge, origine ethnique, adresse, situation familiale, nom de famille, photo). Le scoring ne les voit jamais. Deuxième niveau : tests de cohérence statistique sur les premiers 200 tris avec CV synthétiques piégés sur des critères biaisés. Troisième niveau : logs auditables de chaque décision de scoring, opposables en cas de contentieux. Documentation anti-biais livrée à votre DPO, opposable en cas de contrôle CNIL.",
  },
  {
    q: "Mes CV sont-ils envoyés à OpenAI ou Anthropic ?",
    a: "Pour la souveraineté maximale (cabinets traitant des cadres, dirigeants ou secteurs sensibles), nous utilisons Mistral hébergé en France ou un modèle open-source auto-hébergé. Pour les autres clients, anonymisation automatique des PII (nom, prénom, adresse, téléphone, mail) avant tout envoi LLM. Les contrats Enterprise avec OpenAI / Anthropic excluent par défaut la réutilisation pour entraînement.",
  },
  {
    q: "Quel investissement pour un agent IA RH et quel ROI attendre ?",
    a: "Tarification entièrement sur devis selon votre contexte : volume de CV ou de questions internes à traiter, nombre d'outils branchés (ATS, HRIS, paie), périmètre fonctionnel, exigences de souveraineté. ROI typique en moins de 6 mois : pour un cabinet de recrutement, doublement du volume placé sans embauche. Pour un service RH PME, libération de 4 à 8 heures par semaine. Tout démarre par 30 minutes offertes avec un expert.",
  },
  {
    q: "L'agent IA peut-il prendre des décisions de recrutement ?",
    a: "Non, et ce n'est pas l'objectif. L'agent trie et score les CV, qualifie les candidats par téléphone, et propose une short list au recruteur humain. La décision finale (entretien, embauche) reste systématiquement humaine. Ce protocole est ce qui permet de respecter le RGPD article 22 (interdiction de décision entièrement automatisée à effet significatif sur une personne).",
  },
  {
    q: "L'agent peut-il s'intégrer à mon ATS ou HRIS existant ?",
    a: "Oui. Workday, Lever, Welcome to the Jungle, Recruitee, Smartrecruiters côté recrutement. Cegid, ADP, Sage Paie, PayFit, Lucca côté HRIS et paie. Pour les outils internes propriétaires, voir Intégration IA (/services/integration-ia/) qui détaille les connecteurs custom développés au cadrage.",
  },
  {
    q: "Comment l'agent IA assistant RH gère-t-il les questions sensibles (harcèlement, RGPD, litige) ?",
    a: "Détection systématique des sujets sensibles au cadrage (liste explicite : harcèlement, discrimination, RGPD, prud'hommes, IRP, syndicat, alerte éthique, signalement). Quand l'agent détecte un de ces mots-clés ou un ton émotionnel critique, il escalade immédiatement à un humain RH avec contexte. Aucune tentative de réponse automatisée sur ces sujets.",
  },
  {
    q: "L'agent IA va-t-il remplacer mon équipe RH ?",
    a: "Non. L'agent absorbe la partie répétitive (tri, qualification, réponses FAQ, onboarding administratif) et libère votre équipe RH pour les sujets à forte valeur : marque employeur, fidélisation, conflits, accompagnement managers, stratégie talents. Statistique observée : aucun de nos clients RH n'a réduit son effectif, plusieurs ont doublé leur volume traité sans embaucher.",
  },
  {
    q: "En combien de temps voit-on les premiers résultats ?",
    a: "Pour un agent tri CV : impact dès J1 sur le volume traité, mesurable la première semaine. Pour un agent qualification téléphonique : 1 à 2 semaines de calibrage puis montée en charge. Pour un assistant RH interne : 2 à 3 semaines (le temps d'enrichir la base de connaissances). ROI plein typique : 3 à 6 mois.",
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les agents IA RH</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqRH} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .rh-ba-mobile { display: none; }
  .rh-comp-mobile { display: none; }
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes gradDrift2 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4%,-3%) scale(1.08)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .ticker-slow { display:flex;animation:tickerSlide 70s linear infinite;width:max-content; }
  @keyframes tickerSlide { from{transform:translateX(0)}to{transform:translateX(-50%)} }
  @media (max-width: 860px) {
    .rh-hero-grid { grid-template-columns: 1fr !important; }
    .rh-mockup-col { display: none !important; }
    .rh-kpi-strip { grid-template-columns: repeat(2, 1fr) !important; }
    .rh-kpi-strip > div:nth-child(odd) { border-right: 1px solid #e4e4e7 !important; }
    .rh-kpi-strip > div:nth-child(1), .rh-kpi-strip > div:nth-child(2) { border-bottom: 1px solid #e4e4e7 !important; }
    .rh-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .rh-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .rh-kpi-grid > div:last-child, .rh-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
    .rh-ba-desktop { display: none !important; }
    .rh-ba-mobile { display: flex !important; }
  }
  @media (max-width: 640px) {
    .rh-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .rh-agent-badge { display: none !important; }
    .rh-agent-expanded { padding-left: 24px !important; }
    .rh-agents-detail { grid-template-columns: 1fr !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .rh-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIARHPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
      <KPIStrip />
      <Definition />
      <BeforeAfter />
      <AgentsListing />
      <CasClient />
      <MarqueeMetiers />
      <Methodology />
      <Security />
      <FAQ />
    </main>
  );
}
