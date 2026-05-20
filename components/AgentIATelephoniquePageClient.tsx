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

// ── Phone Call Mockup ─────────────────────────────────────────
function PhoneCallMockup() {
  const [tick, setTick] = useState(0);
  const [wavePhase, setWavePhase] = useState(0);

  useEffect(() => {
    const total = 4;
    const t = setInterval(() => setTick((p) => p >= total ? 0 : p + 1), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setWavePhase((p) => p + 1), 80);
    return () => clearInterval(t);
  }, []);

  const conversation = [
    { from: 'caller', text: 'Bonjour, je voulais savoir si vous prenez de nouveaux clients en janvier ?', time: '10:14' },
    { from: 'agent', text: 'Bonjour, oui nous prenons jusqu\'à 5 nouveaux clients TPE par mois. Vous êtes dans quel secteur ?', time: '10:14' },
    { from: 'caller', text: 'Je suis dans la restauration, 2 établissements.', time: '10:15' },
    { from: 'agent', text: 'Parfait. Je peux vous proposer un créneau de 30 minutes avec notre équipe ce jeudi ou vendredi ?', time: '10:15' },
  ];

  const visibleMessages = conversation.slice(0, tick + 1);

  const waveHeights = Array.from({ length: 18 }, (_, i) =>
    4 + Math.abs(Math.sin((i + wavePhase * 0.3) * 0.6)) * 18
  );

  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, boxShadow: `0 0 6px ${GREEN}` }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#52525b' }}>Appel en cours · 02:14</span>
        </div>
        <div style={{ fontSize: 12, color: '#3f3f46' }}>voix FR</div>
      </div>

      {/* Waveform */}
      <div style={{ background: '#111', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, borderBottom: '1px solid #1a1a1a' }}>
        {waveHeights.map((h, i) => (
          <div key={i} style={{ width: 3, height: h, borderRadius: 9999, background: i % 2 === 0 ? AC : `${AC}60`, transition: 'height .08s ease' }} />
        ))}
      </div>

      {/* Transcript */}
      <div style={{ background: '#0f0f0f', padding: '16px 14px', minHeight: 200, display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto', maxHeight: 220 }}>
        {visibleMessages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.from === 'caller' ? 'flex-start' : 'flex-end', animation: 'slideIn .3s ease' }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#3f3f46', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '.08em' }}>
              {msg.from === 'caller' ? 'Appelant' : 'Agent IA'} · {msg.time}
            </span>
            <div style={{ maxWidth: '78%', padding: '8px 12px', borderRadius: msg.from === 'caller' ? '12px 12px 12px 2px' : '12px 12px 2px 12px', background: msg.from === 'caller' ? '#1a1a1a' : `${AC}20`, border: msg.from === 'agent' ? `1px solid ${AC}35` : '1px solid #222', fontSize: 13, color: msg.from === 'caller' ? '#a1a1aa' : '#e4e4e7', lineHeight: 1.65, fontWeight: 500 }}>
              {msg.text}
            </div>
          </div>
        ))}
        {tick < conversation.length - 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', borderRadius: 10, background: `${AC}15`, border: `1px solid ${AC}25`, alignSelf: 'flex-end', width: 'fit-content' }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: AC, animation: `pulseDot 1.2s ${i * 0.2}s ease-in-out infinite` }} />
            ))}
          </div>
        )}
      </div>

      {/* Footer status */}
      <div style={{ padding: '10px 16px', background: '#0a0a0a', borderRadius: '0 0 14px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #1a1a1a' }}>
        <span style={{ fontSize: 10, color: '#3f3f46', fontWeight: 600 }}>Voix : naturelle française</span>
        <span style={{ fontSize: 10, color: GREEN, fontWeight: 700 }}>Latence : 280 ms</span>
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
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#16a34a0d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="tel-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA téléphonique</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA téléphonique : réception et émission d'appels en{' '}
              <span style={{ color: AC }}>pilote automatique, voix naturelle.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Votre standard sature, votre SAV vocal frustre, vos rappels RDV se font à la main. Un agent IA Althoce répond aux appels entrants en 24/7, mène une vraie conversation en voix naturelle française, qualifie ou résout, et transfère à un humain quand c'est complexe. Pas un IVR à touches.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="tel-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', 'Voix naturelle française', 'Disponibilité 24/7', '+758 agents en production', 'Voix naturelle française', 'Disponibilité 24/7'].map((t, i) => (
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
                Voir les 4 agents téléphoniques ↓
              </a>
            </div>
          </div>

          <div className="tel-mockup-col">
            <PhoneCallMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── KPI Strip ─────────────────────────────────────────────────
const kpiStrip = [
  { value: '0', label: 'Appel raté', sub: 'couverture 24/7/365' },
  { value: '280 ms', label: 'Latence voix', sub: 'réponse temps réel' },
  { value: '70 %', label: 'Résolus en autonomie', sub: 'sans intervention humaine' },
  { value: '< 6 mois', label: 'Payback typique', sub: 'sur standards saturés' },
];

function KPIStrip() {
  const [ref, visible] = useInView(0.1);
  return (
    <section ref={ref} style={{ borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', background: '#fafafa' }}>
      <div className="tel-kpi-strip" style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
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
const compRows = [
  { crit: 'Comprend le langage naturel', ivr: false, centre: true, althoce: true },
  { crit: 'Disponible 24/7 sans surcoût', ivr: true, centre: false, althoce: true },
  { crit: 'Voix naturelle indistinguable', ivr: false, centre: true, althoce: true },
  { crit: 'Agit dans le CRM / back-office', ivr: false, centre: true, althoce: true },
  { crit: 'Coût fixe prévisible', ivr: true, centre: false, althoce: true },
  { crit: 'Apprend et s\'améliore', ivr: false, centre: false, althoce: true },
  { crit: 'Intégration numéro existant', ivr: true, centre: false, althoce: true },
  { crit: 'Escalade avec contexte enrichi', ivr: false, centre: true, althoce: true },
];

function Check({ ok, na }: { ok: boolean; na?: boolean }) {
  if (na) return <span style={{ fontSize: 14, color: '#52525b' }}>–</span>;
  return ok
    ? <span style={{ color: GREEN, fontSize: 16, fontWeight: 900 }}>✓</span>
    : <span style={{ color: RED, fontSize: 16, fontWeight: 900 }}>✗</span>;
}

function Definition() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 16 }}>IVR à touches, centre d'appel humain, agent IA : trois choses différentes</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 40, maxWidth: 720 }}>
          En 2026, la téléphonie d'entreprise oscille entre deux extrêmes coûteux. L'agent IA Althoce se positionne là où ni l'IVR ni le centre d'appel ne peuvent aller : une vraie conversation, disponible 24/7, intégrée à votre SI, sans patience demandée à l'appelant.
        </p>

        {/* Comparison table */}
        <div style={{ marginBottom: 40, borderRadius: 20, border: '1px solid #e4e4e7', overflow: 'hidden' }}>
          {/* Header */}
          <div className="tel-comp-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', background: '#f9fafb', borderBottom: '1px solid #e4e4e7' }}>
            <div style={{ padding: '14px 16px', fontSize: 11, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Critère</div>
            {[
              { label: 'IVR', sub: 'classique' },
              { label: 'Centre', sub: "d'appel" },
              { label: 'Agent IA', sub: 'Althoce', highlight: true },
            ].map((col, i) => (
              <div key={i} style={{ padding: '12px 8px', textAlign: 'center', borderLeft: '1px solid #e4e4e7', background: col.highlight ? `${AC}08` : 'transparent' }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: col.highlight ? AC : '#09090b' }}>{col.label}</div>
                <div style={{ fontSize: 10, color: '#a1a1aa', marginTop: 2 }}>{col.sub}</div>
              </div>
            ))}
          </div>
          {/* Rows */}
          {compRows.map((row, i) => (
            <div key={i} className="tel-comp-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', borderBottom: i < compRows.length - 1 ? '1px solid #f4f4f5' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
              <div style={{ padding: '12px 16px', fontSize: 14, color: '#52525b', fontWeight: 500, lineHeight: 1.4 }}>{row.crit}</div>
              <div style={{ padding: '12px 8px', textAlign: 'center', borderLeft: '1px solid #f4f4f5' }}><Check ok={row.ivr} /></div>
              <div style={{ padding: '12px 8px', textAlign: 'center', borderLeft: '1px solid #f4f4f5' }}><Check ok={row.centre} /></div>
              <div style={{ padding: '12px 8px', textAlign: 'center', borderLeft: '1px solid #f4f4f5', background: `${AC}04` }}><Check ok={row.althoce} /></div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 32 }}>
          Concrètement, derrière un agent IA téléphonique Althoce : une couche <strong>VoIP</strong> (intégration à votre numéro via Twilio, Ringover, Aircall ou votre opérateur), un <strong>LLM</strong> en streaming faible latence, une <strong>voix synthétique</strong> production (ElevenLabs, Cartesia, OpenAI TTS — indistinguable d'un humain pour 80 % des appelants), et une intégration directe à votre{' '}
          <a href="/services/integration-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>CRM ou outil métier</a>. Pour un poste entier de standardiste ou d'agent SAV automatisé de bout en bout, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        {/* Qualify callout */}
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Trois questions pour qualifier votre besoin</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', q: 'Votre standard téléphonique ou SAV vocal est-il tenu par 1 à 3 personnes saturées sur les heures de pointe ?' },
              { n: '02', q: 'Avez-vous des appels répétitifs pouvant être gérés sans humain (statut commande, prise de RDV, info générale, qualification légère) ?' },
              { n: '03', q: "Faites-vous beaucoup d'appels sortants manuels (rappels RDV, relances paiement, sondages) qui pourraient être automatisés ?" },
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
              Si oui à 1 question sur 3, un agent IA téléphonique transforme votre productivité. Si oui aux 3, vous êtes en train de perdre des appels et de l'argent en ce moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Before / After ────────────────────────────────────────────
const avantItems = [
  { time: '8h30', label: "14 appels nocturnes sur répondeur. Triage manuel à l'ouverture." },
  { time: '9h00', label: "40 appels entrants : statut commande, RDV, questions. 3 appels ratés faute de double ligne." },
  { time: '11h00', label: "Rappels prospects demandés par le commercial. Pas le temps. Reportés à demain." },
  { time: '14h00', label: "Pic d'appels. La direction reçoit en escalade. Productivité divisée par 2." },
  { time: '17h30', label: "8 nouveaux messages répondeur. Rappels reportés à demain matin." },
  { time: 'Bilan', label: "50 appels traités, 6 ratés, 10 rappels en retard. Le standard est épuisé." },
];

const apresItems = [
  { time: '8h30', label: "L'agent IA a traité 14 appels nocturnes : 12 résolus (RDV, info, commandes), 2 escalés avec contexte par mail." },
  { time: '9h00', label: "40 appels reçus : 32 résolus en autonomie par l'agent, 8 transférés (litige, urgence, cas complexes)." },
  { time: '11h00', label: "L'agent IA passe 2 rappels sortants. Qualification BANT légère transmise au commercial." },
  { time: '14h00', label: "Pic absorbé. La direction n'est plus sollicitée en escalade." },
  { time: '17h30', label: "6 nouveaux appels. L'agent IA continue 24/7. Aucun rappel en retard." },
  { time: 'Bilan', label: '80 appels traités (60 agent, 20 humain), 0 raté, 100 % des rappels passés. Standard libéré.' },
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
          <H2 style={{ marginBottom: 12 }}>Avant Althoce vs Après Althoce. La journée type d'un standard saturé.</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Journée type observée chez nos clients avec un standard téléphonique de 1 à 3 personnes.</p>
        </div>

        {/* Desktop split */}
        <div className="tel-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e4e4e7', background: '#fff' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #f4f4f5', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '.08em' }}>Avant Althoce</span>
            </div>
            {avantItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 24px', borderBottom: i < avantItems.length - 1 ? '1px solid #f4f4f5' : 'none', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-8px)', transition: `all .5s ${i * .08}s ease` }}>
                <div style={{ flexShrink: 0, width: 44, paddingTop: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.time === 'Bilan' ? RED : '#a1a1aa', letterSpacing: '.02em' }}>{item.time}</span>
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
                <div style={{ flexShrink: 0, width: 44, paddingTop: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: item.time === 'Bilan' ? GREEN : AC, letterSpacing: '.02em' }}>{item.time}</span>
                </div>
                <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="tel-ba-mobile" style={{ display: 'none', flexDirection: 'column', gap: 0 }}>
          {/* Tab switcher */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: 4, background: '#f0f0f0', borderRadius: 14, marginBottom: 16 }}>
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                style={{
                  padding: '11px 8px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: 14, fontWeight: 800,
                  background: tab === t.key ? '#fff' : 'transparent',
                  color: tab === t.key ? t.color : '#52525b',
                  boxShadow: tab === t.key ? '0 1px 8px rgba(0,0,0,.10)' : 'none',
                  transition: 'all .2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: tab === t.key ? t.color : '#d4d4d8', flexShrink: 0, display: 'inline-block' }} />
                {t.label} Althoce
              </button>
            ))}
          </div>

          {/* Items list */}
          <div style={{ borderRadius: 18, overflow: 'hidden', border: `1.5px solid ${active.color}28`, background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,.05)' }}>
            {active.items.map((item, i) => (
              <div
                key={`${tab}-${i}`}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '14px 16px',
                  borderBottom: i < active.items.length - 1 ? '1px solid #f4f4f5' : 'none',
                  background: item.time === 'Bilan' ? (active.color === RED ? '#fff5f5' : '#f0fdf4') : (i % 2 === 0 ? '#fff' : '#fafafa'),
                }}
              >
                <span style={{
                  flexShrink: 0, fontSize: 10, fontWeight: 900, whiteSpace: 'nowrap',
                  padding: '4px 8px', borderRadius: 7,
                  background: item.time === 'Bilan' ? active.color : '#ebebeb',
                  color: item.time === 'Bilan' ? '#fff' : '#52525b',
                  marginTop: 2,
                }}>
                  {item.time}
                </span>
                <p style={{
                  fontSize: 14, lineHeight: 1.65, margin: 0,
                  color: item.time === 'Bilan' ? '#09090b' : '#8a8a95',
                  fontWeight: item.time === 'Bilan' ? 700 : 400,
                }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40, padding: '20px 28px', borderRadius: 16, background: `${AC}08`, border: `1px solid ${AC}20` }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0, textAlign: 'center' }}>
            Ce gain ne se mesure pas seulement en volume d'appels traités. Il se mesure aussi en <strong>qualité de l'expérience client</strong> (pas d'appel raté, pas de mise en attente longue, voix naturelle qui rassure), et en <strong>libération du standard humain</strong> qui peut enfin se concentrer sur les cas qui méritent vraiment son expertise.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Agents listing ────────────────────────────────────────────
const agents = [
  {
    num: '01',
    name: 'Agent IA réception standard',
    color: AC,
    badge: 'Entrant',
    who: 'Standard téléphonique, accueil entreprise, PME tout secteur',
    desc: 'Décroche tous les appels entrants en 24/7 en voix naturelle française. Identifie l\'objet de l\'appel (commande, RDV, info, urgence), résout les cas standards en autonomie, transfère l\'appelant à la bonne personne quand c\'est complexe avec contexte vocal pré-passé au collaborateur.',
    tools: ['Twilio', 'Ringover', 'Aircall', 'Google Calendar', 'Outlook'],
    impact: '60 à 80 % des appels résolus en autonomie. Zéro appel raté.',
    delai: '2 à 3 semaines',
  },
  {
    num: '02',
    name: 'Agent IA qualification commerciale entrante',
    color: '#7c3aed',
    badge: 'Qualification',
    who: 'Directeurs commerciaux, SDR, équipes growth B2B',
    desc: 'Spécialisé pour les appels prospects entrants. Mène une conversation BANT light (besoin, autorité, urgence), qualifie le lead, prend le RDV avec le bon commercial selon disponibilité et expertise, met à jour la fiche CRM. Répond aux prospects 24/7 sans laisser refroidir.',
    tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Calendly', 'VoIP'],
    impact: '100 % des leads téléphoniques qualifiés sous 30 secondes, 24/7.',
    delai: '3 à 4 semaines',
  },
  {
    num: '03',
    name: 'Agent IA rappels sortants automatisés',
    color: '#d97706',
    badge: 'Sortant',
    who: 'Cabinets médicaux, e-commerce, SAV, recouvrement amiable',
    desc: 'Passe des appels sortants sur des cas standardisés : rappel de RDV, relance de paiement amiable, sondage de satisfaction post-vente, rappel d\'échéance contrat. Mène une vraie conversation, capte la réponse, met à jour le CRM ou le back-office.',
    tools: ['Back-office', 'VoIP sortante', 'CRM', 'Base de données RDV'],
    impact: 'Plusieurs centaines à milliers d\'appels sortants/mois à coût marginal proche de zéro.',
    delai: '3 à 5 semaines',
  },
  {
    num: '04',
    name: 'Agent IA support vocal niveau 0',
    color: '#16a34a',
    badge: 'SAV vocal',
    who: 'E-commerce, SaaS B2B, retail, logistique',
    desc: 'Spécialisé SAV. Répond aux questions vocales standards (statut commande, statut livraison, conditions de retour, info produit), résout en autonomie 60 à 70 % des appels SAV, escalade au support humain avec contexte enrichi pour les cas complexes. Cohérent avec{" "}<a href="/agent-ia/service-client/">Agent IA service client</a> côté ticket écrit.',
    tools: ['VoIP', 'Base de connaissances', 'Back-office', 'Zendesk', 'Intercom'],
    impact: '60 à 70 % des appels SAV résolus en autonomie.',
    delai: '2 à 4 semaines',
  },
];

function AgentCard({ agent, index, visible }: { agent: typeof agents[0]; index: number; visible: boolean }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      style={{ borderRadius: 20, background: '#fff', border: '1px solid #e4e4e7', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${index * .1}s ease` }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
      >
        <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 12, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 900, color: agent.color }}>{agent.num}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', letterSpacing: '-.01em' }}>{agent.name}</div>
          <div className="tel-agent-badge" style={{ marginTop: 4 }}>
            <span style={{ padding: '3px 10px', borderRadius: 9999, background: `${agent.color}12`, border: `1px solid ${agent.color}30`, fontSize: 11, fontWeight: 800, color: agent.color }}>{agent.badge}</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .25s', color: '#a1a1aa' }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {expanded && (
        <div className="tel-agent-expanded" style={{ padding: '0 24px 24px', paddingLeft: 80 }}>
          <p style={{ fontSize: 14, color: '#a1a1aa', marginBottom: 12, fontStyle: 'italic' }}>{agent.who}</p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: agent.desc }} />

          <div className="tel-agents-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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
          <H2 style={{ marginBottom: 12 }}>4 agents IA téléphoniques Althoce déployés en standard</H2>
          <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.65 }}>
            Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner selon votre contexte. Tous fonctionnent en voix naturelle française et s'intègrent à votre numéro existant.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {agents.map((agent, i) => (
            <AgentCard key={agent.num} agent={agent} index={i} visible={visible} />
          ))}
        </div>

        <div style={{ marginTop: 32, padding: '20px 24px', borderRadius: 16, background: '#fff', border: '1px solid #e4e4e7' }}>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            Pour un poste entier de standardiste ou d'agent SAV vocal automatisé de bout en bout, voir{' '}
            <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>{' '}
            qui couvre un rôle complet (combinaison de plusieurs agents téléphoniques + mémoire long-terme + identité de marque). Les <strong>30 minutes offertes avec un expert</strong> servent à qualifier la combinaison d'agents la plus pertinente pour votre contexte.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Cas Client ────────────────────────────────────────────────
const kpis = [
  { label: 'Appels traités / semaine', avant: '80', apres: '140', unit: '+75 %' },
  { label: 'Appels perdus', avant: '18 %', apres: '0 %', unit: '−100 %' },
  { label: 'RDV qualifiés / semaine', avant: '6', apres: '14', unit: '+133 %' },
  { label: 'Temps libéré assistante', avant: '0h/sem', apres: '12h/sem', unit: '+12h' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: `radial-gradient(ellipse,${AC}0a 0%,transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ padding: '88px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['Lyon', 'Droit des affaires', '18 collaborateurs', 'Cabinet d\'avocats'].map((tag, i) => (
            <span key={i} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111', letterSpacing: '.02em' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.65, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.45, marginBottom: 20, display: 'block' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(18px,2.3vw,26px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 36px', fontStyle: 'normal', paddingLeft: 20, borderLeft: `3px solid ${AC}55` }}>
            Avant, on perdait des appels. Notre assistante de direction prenait les appels entre deux dossiers urgents. On a déployé l'agent IA téléphonique en 3 semaines. Aujourd'hui, 70 % des appels sont résolus directement par l'IA, 30 % nous arrivent avec un contexte pré-qualifié. On a doublé nos prises de RDV sans embaucher personne.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${AC}15`, border: `1.5px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="9" r="4.5" stroke={AC} strokeWidth="1.5"/>
                <path d="M4 20C4 16.7 7.1 14 11 14S18 16.7 18 20" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#e4e4e7', letterSpacing: '-.01em' }}>Associé gérant</div>
              <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>Cabinet d'avocats lyonnais · 18 collaborateurs · Droit des affaires</div>
            </div>
            <div style={{ padding: '7px 16px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a30', fontSize: 14, fontWeight: 800, color: GREEN, flexShrink: 0 }}>0 appel perdu</div>
          </div>

          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 12 }}>
            Avant la mission Althoce, l'assistante de direction jonglait entre réception téléphonique, gestion des plannings, facturation et suivi dossier. Les heures de pointe (10h-12h, 14h-17h) saturaient le standard et 18 % des appels étaient perdus, sans rappel possible.
          </p>
          <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.75, marginBottom: 24 }}>
            En 3 semaines, l'agent IA téléphonique a été déployé sur le numéro principal du cabinet. Il répond en voix naturelle française, identifie l'objet de l'appel, résout en autonomie 70 % des appels, et transfère le reste avec contexte. L'assistante est libérée 12 heures par semaine. Zéro appel raté depuis 4 mois.
          </p>

          <a href="/cas-clients/cabinet-avocats-agent-ia-telephonique/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Lire le cas client complet →
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="tel-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
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
        <div className="ticker-slow" role="marquee" aria-label="Secteurs couverts par les agents IA téléphoniques">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit téléphonique</div>
      {["Volume d'appels entrants", 'Pics horaires identifiés', 'Scénarios répétitifs', 'Intégration VoIP'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap téléphonique</div>
      {[{ l: 'Agent réception standard', w: 90 }, { l: 'Agent qualification entrante', w: 70 }, { l: 'Agent rappels sortants', w: 55 }, { l: 'Agent support vocal', w: 40 }].map((r, i) => (
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
        {[{ n: 'Twilio', c: '#f22f46' }, { n: 'Ringover', c: '#5b21b6' }, { n: 'Aircall', c: '#00c853' }, { n: 'HubSpot', c: '#ff7a59' }, { n: 'Calendly', c: '#006bff' }, { n: 'ElevenLabs', c: '#09090b' }].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 10px', borderRadius: 8, border: '1px solid #f0f0f0', background: '#fafafa', animation: active ? `slideIn .4s ${i * .1}s ease both` : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.c }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t.n}</span>
            <span style={{ marginLeft: 'auto', fontSize: 9, color: '#22c55e', fontWeight: 800 }}>●</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1.5s ease-in-out infinite' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent standard actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>24/7</span>
      </div>
      {[{ t: "Appels traités aujourd'hui", v: '147' }, { t: 'Appels escalés humain', v: '31' }, { t: 'RDV pris auto.', v: '18' }, { t: 'Taux résolution', v: '79 %' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>Quatre étapes courtes. Votre premier appel traité par l'IA en production en moins de 4 semaines.</p>
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

// ── Security / Sovereignty ────────────────────────────────────
const secIcons = [
  <svg key="0" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2L3 5v5c0 4.4 3 8.3 7 9 4-0.7 7-4.6 7-9V5l-7-3z" stroke={AC} strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 10l2 2 4-4" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="9" width="14" height="9" rx="2" stroke={AC} strokeWidth="1.5"/><path d="M7 9V6a3 3 0 016 0v3" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke={AC} strokeWidth="1.5"/><path d="M10 6v4l3 2" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="7" r="3.5" stroke={AC} strokeWidth="1.5"/><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/><path d="M15 2l1.5 1.5L18 2" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

function Security() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 64 }} className="v2-grid-hero">
          <div>
            <span style={{ fontSize: 12, fontWeight: 800, color: AC, textTransform: 'uppercase', letterSpacing: '.14em' }}>Souveraineté & conformité</span>
            <H2 style={{ marginTop: 12, marginBottom: 20, color: '#fff' }}>Vos appels, vos données. Hébergés en France.</H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 24 }}>
              Enregistrements et transcriptions stockés sur <strong style={{ color: '#a1a1aa' }}>OVH ou Scaleway</strong> en France. Anonymisation automatique des données personnelles. Mention légale d'enregistrement en début d'appel — conforme RGPD native.
            </p>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75 }}>
              Pour les contextes à souveraineté maximale (médical, juridique, financier), nous utilisons <strong style={{ color: '#a1a1aa' }}>Mistral</strong> pour le pilotage de conversation et auto-hébergeons la voix synthétique sur modèles open-source. Zéro donnée hors UE.
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
const faqTel: FAQv2Item[] = [
  {
    q: 'Quelle est la différence entre un agent IA téléphonique Althoce et un IVR à touches classique ?',
    a: 'Un IVR classique est un menu à touches. Si votre demande sort du menu, il ne sait rien faire. Il ne comprend pas le langage naturel et frustre vos appelants. Un agent IA téléphonique Althoce mène une vraie conversation en voix naturelle française. Vous parlez normalement, il comprend, il répond, il agit. Pas de menu, pas de touches, pas de patience demandée. C\'est la différence entre un robot téléphonique des années 2000 et un collaborateur intelligent disponible 24/7.',
  },
  {
    q: 'La voix de l\'agent IA est-elle vraiment naturelle ou robotique ?',
    a: 'Naturelle. Nous utilisons les meilleurs moteurs de synthèse vocale 2026 (ElevenLabs, Cartesia, OpenAI TTS) qui produisent une voix française indistinguable d\'un humain pour 80 % des appelants dans les tests A/B. Vous pouvez choisir au cadrage le degré de transparence : "Bonjour, je suis l\'assistant IA du cabinet X" en début d\'appel, ou simplement "Bonjour, j\'écoute votre demande".',
  },
  {
    q: 'Quel investissement pour un agent IA téléphonique et quel ROI attendre ?',
    a: 'Tarification entièrement sur devis selon votre contexte : volume d\'appels traités, intégration à votre VoIP existante (Twilio, Ringover, Aircall, opérateur), nombre de scénarios scriptés, intégration CRM, exigences de souveraineté. Le ROI se mesure typiquement en moins de 6 mois sur les standards saturés et les SAV vocaux débordés. Tout démarre par 30 minutes offertes avec un expert pour cadrer.',
  },
  {
    q: 'L\'agent peut-il s\'intégrer à mon numéro de téléphone existant ?',
    a: 'Oui. Nous nous interfaçons à votre VoIP actuelle (Twilio, Ringover, Aircall, OnOff, ou directement à votre opérateur télécom via SIP trunk). Le numéro de votre entreprise reste le même : l\'agent IA prend les appels qui arrivent dessus. Pour le détail technique, voir Intégration IA (/services/integration-ia/).',
  },
  {
    q: 'Que se passe-t-il si l\'agent ne comprend pas l\'appelant ou bloque ?',
    a: 'Trois garde-fous. L\'agent demande poliment une reformulation si la première compréhension est incertaine. Dès qu\'il identifie un cas hors périmètre (litige, urgence, émotion forte), il transfère immédiatement à un humain avec contexte vocal pré-passé. Monitoring continu de la qualité des appels (taux de transfert, taux de résolution, sentiment). Voir Intégration IA (/services/integration-ia/) pour le détail des garde-fous.',
  },
  {
    q: 'Mes données d\'appels et conversations restent-elles en France ?',
    a: 'Oui, par défaut. Les enregistrements et transcriptions sont stockés sur OVH ou Scaleway en France. Pour les clients qui exigent une souveraineté maximale, nous utilisons Mistral pour le pilotage de conversation et auto-hébergeons la voix synthétique. Conformité RGPD native, mention obligatoire de l\'enregistrement en début d\'appel.',
  },
  {
    q: 'L\'agent IA téléphonique va-t-il remplacer mon standard humain ?',
    a: 'Non. L\'agent absorbe la partie répétitive du métier téléphonique (appels standards, demandes d\'info, prise de RDV, statut commande) et libère vos humains pour les cas qui nécessitent une vraie intelligence relationnelle (litige, urgence, vente complexe, fidélisation). Statistique observée : zéro départ d\'équipe imputable au déploiement, libération de plusieurs heures par semaine.',
  },
  {
    q: 'Comment l\'agent gère-t-il les appels d\'urgence (médical, sécurité) ?',
    a: 'Au cadrage, vous définissez vos critères d\'urgence (mots-clés, ton de l\'appelant, type de demande). Quand l\'agent détecte une urgence, il transfère immédiatement à un humain disponible avec priorité maximale, ou suit le protocole défini (numéro d\'astreinte, transfert vers SAMU/15 pour le médical). Aucun appel d\'urgence ne reste sans réponse humaine.',
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les agents IA téléphoniques</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqTel} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .tel-ba-mobile { display: none; }
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes gradDrift2 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4%,-3%) scale(1.08)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  @keyframes pulseDot { 0%,100%{opacity:1}50%{opacity:0.3} }
  .ticker-slow { display:flex;animation:tickerSlide 70s linear infinite;width:max-content; }
  @keyframes tickerSlide { from{transform:translateX(0)}to{transform:translateX(-50%)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @media (max-width: 860px) {
    .tel-hero-grid { grid-template-columns: 1fr !important; }
    .tel-mockup-col { display: none !important; }
    .tel-kpi-strip { grid-template-columns: repeat(2, 1fr) !important; }
    .tel-kpi-strip > div:nth-child(odd) { border-right: 1px solid #e4e4e7 !important; }
    .tel-kpi-strip > div:nth-child(1), .tel-kpi-strip > div:nth-child(2) { border-bottom: 1px solid #e4e4e7 !important; }
    .tel-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .tel-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .tel-kpi-grid > div:last-child, .tel-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
    .v2-grid2 { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 860px) {
    .tel-ba-desktop { display: none !important; }
    .tel-ba-mobile { display: flex !important; }
  }
  @media (max-width: 640px) {
    .tel-comp-grid { grid-template-columns: 1.4fr 50px 54px 72px !important; }
    .tel-agent-badge { display: none !important; }
    .tel-agent-expanded { padding-left: 24px !important; }
    .tel-agents-detail { grid-template-columns: 1fr !important; }
    .tel-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .tel-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIATelephoniquePageClient() {
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
