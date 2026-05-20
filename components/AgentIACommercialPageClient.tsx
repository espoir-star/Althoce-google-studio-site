'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentTags } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';
const GREEN = '#16a34a';
const RED = '#ef4444';

// ── Hook ─────────────────────────────────────────────────────
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

// ── Conversation mockup ───────────────────────────────────────
function ProspectingConversationMockup() {
  const msgs = [
    { from: 'agent', text: 'Bonjour Martin, Nexatech vient de lever 4 M€ et recrute 5 commerciaux. Comment gérez-vous la qualification du pipeline à ce stade ?', time: '09:12' },
    { from: 'prospect', text: 'Exactement, on monte en charge. Notre principale difficulté c\'est le temps de qualification des leads entrants.', time: '09:18' },
    { from: 'agent', text: 'C\'est précisément là qu\'on intervient. Pour deux PME comparables : 80 RDV qualifiés/mois sans alourdir l\'équipe. 15 minutes pour vous montrer ?', time: '09:19' },
    { from: 'prospect', text: 'Oui volontiers. Jeudi 15h00 ?', time: '09:22' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
      {/* macOS bar */}
      <div style={{ padding: '12px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#3f3f46' }}>Prospection · en cours</span>
        <div style={{ width: 24 }} />
      </div>

      {/* Agent header */}
      <div style={{ padding: '12px 16px', background: '#111', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${AC}20`, border: `2px solid ${AC}45`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="7" r="3.5" stroke={AC} strokeWidth="1.5"/>
            <path d="M3 16C3 13 5.7 11 9 11S15 13 15 16" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#f4f4f5' }}>Agent IA SDR · Althoce</div>
          <div style={{ fontSize: 12, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            En ligne · Prospection active
          </div>
        </div>
        <div style={{ padding: '3px 8px', borderRadius: 6, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 700, color: '#22c55e' }}>24/7</div>
      </div>

      {/* Messages */}
      <div style={{ padding: '16px', background: '#0d0d0d', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 220 }}>
        {msgs.map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'agent' ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth: '80%', padding: '10px 13px', borderRadius: msg.from === 'agent' ? '14px 14px 4px 14px' : '14px 14px 14px 4px', background: msg.from === 'agent' ? AC : '#1e1e1e', fontSize: 13, color: msg.from === 'agent' ? '#fff' : '#d4d4d8', lineHeight: 1.65 }}>
              {msg.text}
              <div style={{ fontSize: 9, color: msg.from === 'agent' ? 'rgba(255,255,255,0.45)' : '#8a8a95', marginTop: 4, textAlign: 'right' }}>{msg.time}</div>
            </div>
          </div>
        ))}
        {/* Typing */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px', borderRadius: '14px 14px 14px 4px', background: '#1e1e1e', width: 'fit-content' }}>
          {[0, 1, 2].map((i) => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: AC, animation: `pulseDot 1.4s ${i * 0.2}s infinite` }} />)}
        </div>
      </div>

      {/* Input */}
      <div style={{ padding: '12px 14px', background: '#111', borderTop: '1px solid #1e1e1e', borderRadius: '0 0 14px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1, padding: '8px 12px', borderRadius: 20, background: '#1a1a1a', fontSize: 13, color: '#3f3f46', border: '1px solid #2a2a2a' }}>Répondre...</div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: AC, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#16a34a0d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="com-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500, flexWrap: 'wrap' }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA commercial</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA pour le commercial : prospection, qualification et prise de RDV{' '}
              <span style={{ color: AC }}>en pilote automatique.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Vos commerciaux passent 70 % de leur temps à prospecter, qualifier des leads froids, relancer un pipeline en panne. Et 30 % seulement à closer. Un agent IA Althoce inverse le ratio : il absorbe la prospection, la qualification et la prise de RDV. Vos commerciaux ferment.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="com-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', '+80 RDV qualifiés/mois en moyenne', 'ROI inférieur à 6 mois', '+758 agents en production', '+80 RDV qualifiés/mois en moyenne', 'ROI inférieur à 6 mois'].map((t, i) => (
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
                Voir les 4 agents commerciaux ↓
              </a>
            </div>
          </div>

          <div className="com-mockup-col">
            <ProspectingConversationMockup />
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
        <H2 style={{ marginBottom: 28 }}>Ce qu'un agent IA absorbe vraiment dans le commercial</H2>

        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 24 }}>
          Dans le métier commercial, 80 % du temps d'un SDR et 50 % du temps d'un Account Executive sont absorbés par des tâches répétitives à faible valeur ajoutée cognitive : identifier les ICP dans LinkedIn Sales Navigator ou Apollo, écrire des séquences d'emails personnalisés, relancer des prospects qui ne répondent pas, qualifier les leads inbound, prendre des RDV, mettre à jour les fiches CRM après chaque interaction.
        </p>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 40 }}>
          Un agent IA Althoce absorbe ces tâches en autonomie sur un périmètre borné. Vos commerciaux humains se concentrent sur ce qui demande de l'intelligence relationnelle : le closing, la négociation, la gestion des grands comptes, l'arbitrage des cas complexes. Pour un déploiement couvrant un poste entier à temps plein, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        {/* Dark callout */}
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Trois questions pour qualifier votre besoin</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', q: 'Vos commerciaux passent-ils plus de 50 % de leur temps en prospection plutôt qu\'en closing ?' },
              { n: '02', q: 'Avez-vous des leads inbound qui restent qualifiés trop tard (plus de 24 heures) faute de temps humain ?' },
              { n: '03', q: 'Votre pipeline a-t-il des deals endormis depuis plus de 30 jours sur lesquels personne n\'a le temps de revenir ?' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${AC}18`, border: `1px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: AC }}>{row.n}</span>
                </div>
                <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>{row.q}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: '14px 24px', borderTop: '1px solid #1a1a1a', background: '#080808' }}>
            <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>
              Un «oui» sur trois signifie un gain de productivité immédiat. Trois «oui» signifient que vous perdez du chiffre d'affaires en ce moment même.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Avant / Après ─────────────────────────────────────────────
const avantItems = [
  { time: '9h00', text: 'LinkedIn Sales Navigator en manuel. 30 minutes pour identifier 5 prospects pertinents.', bad: true },
  { time: '9h30', text: 'Écriture de 5 messages de prospection personnalisés. 45 minutes (chaque profil demande une vraie lecture).', bad: true },
  { time: '10h30', text: 'Relances de prospects silencieux, mise à jour fastidieuse du CRM, tentative de qualifier 2 leads inbound reçus la veille.', bad: true },
  { time: '14h00', text: '2 RDV avec des prospects, préparés à la va-vite car la matinée a été absorbée.', bad: true },
  { time: '18h30', text: '7 prospects froids contactés. 1 lead inbound qualifié. 0 closing. On rentre.', bad: true },
];

const apresItems = [
  { time: '9h00', text: 'Rapport de l\'agent reçu à 8h. 50 ICP identifiés cette nuit, 15 messages envoyés, 3 prospects qualifiés à RDV.', bad: false },
  { time: '9h30', text: '2 RDV qualifiés préparés sérieusement grâce aux synthèses de l\'agent : contexte sectoriel, pain points, 5 questions à poser.', bad: false },
  { time: '11h00', text: '4 RDV de closing back-to-back avec des opportunités matures. L\'agenda a été calé par l\'agent.', bad: false },
  { time: '14h00', text: '5 nouveaux RDV qualifiés, dont 2 closings signés. Pas une seule séquence écrite manuellement.', bad: false },
  { time: '17h00', text: 'Revue rapide du log de l\'agent. 1 escalade à valider sur une question technique complexe. On répond, l\'agent reprend.', bad: false },
];

function TimelineColumn({ items, isAvant, visible }: { items: typeof avantItems; isAvant: boolean; visible: boolean }) {
  const accentColor = isAvant ? RED : AC;
  const headerBg = isAvant ? '#fef2f2' : '#f0f7ff';
  const borderColor = isAvant ? '#fecaca' : `${AC}30`;
  const lineBg = isAvant ? '#fee2e2' : `${AC}20`;
  return (
    <div style={{ borderRadius: 20, border: `1px solid ${borderColor}`, background: '#fff', overflow: 'hidden' }}>
      <div style={{ padding: '16px 20px', background: headerBg, borderBottom: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: accentColor }} />
        <span style={{ fontSize: 13, fontWeight: 800, color: accentColor, textTransform: 'uppercase', letterSpacing: '.08em' }}>{isAvant ? 'Avant Althoce' : 'Après Althoce'}</span>
      </div>
      <div style={{ padding: '20px 20px 8px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 32, bottom: 32, left: 36, width: 1, background: lineBg }} aria-hidden="true" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 20, opacity: visible ? 1 : 0, transform: visible ? 'none' : `translateX(${isAvant ? -8 : 8}px)`, transition: `all .5s ${i * .08}s ease` }}>
              <div style={{ flexShrink: 0, width: 32 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: headerBg, border: `1.5px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {isAvant ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="6" stroke={RED} strokeWidth="1.2"/>
                      <path d="M7 4V7L9 9" stroke={RED} strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="6" fill={`${AC}12`} stroke={AC} strokeWidth="1.2"/>
                      <path d="M4.5 7L6.5 9L9.5 5" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <div style={{ paddingTop: 6, flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: accentColor, letterSpacing: '.06em' }}>{item.time}</span>
                <p style={{ fontSize: 14, color: isAvant ? '#52525b' : '#52525b', lineHeight: 1.65, margin: '4px 0 0', fontWeight: isAvant ? 400 : 500 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BeforeAfter() {
  const [ref, visible] = useInView(0.06);
  const [activeTab, setActiveTab] = useState<'avant' | 'apres'>('avant');
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>La journée type d'un commercial. Avant et après Althoce.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto' }}>Pas une projection théorique. La journée observée chez nos 30+ clients commerciaux après déploiement.</p>
        </div>

        {/* Desktop: side-by-side */}
        <div className="com-before-after com-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, opacity: visible ? 1 : 0, transition: 'opacity .6s ease' }}>
          <TimelineColumn items={avantItems} isAvant={true} visible={visible} />
          <TimelineColumn items={apresItems} isAvant={false} visible={visible} />
        </div>

        {/* Mobile: tab switcher */}
        <div className="com-ba-mobile" style={{ display: 'none', opacity: visible ? 1 : 0, transition: 'opacity .6s ease' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {(['avant', 'apres'] as const).map((tab) => {
              const isAvant = tab === 'avant';
              const isActive = activeTab === tab;
              const color = isAvant ? RED : AC;
              return (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  style={{ flex: 1, padding: '12px 8px', borderRadius: 12, border: `1.5px solid ${isActive ? color : '#e4e4e7'}`, background: isActive ? (isAvant ? '#fef2f2' : '#f0f7ff') : '#fff', fontSize: 14, fontWeight: 800, color: isActive ? color : '#a1a1aa', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s' }}>
                  {isAvant ? 'Avant Althoce' : 'Après Althoce'}
                </button>
              );
            })}
          </div>
          <TimelineColumn items={activeTab === 'avant' ? avantItems : apresItems} isAvant={activeTab === 'avant'} visible={visible} />
        </div>

        <div style={{ marginTop: 24, padding: '14px 22px', borderRadius: 14, background: '#fff', border: '1px solid #e4e4e7', fontSize: 14, color: '#52525b', lineHeight: 1.7, textAlign: 'center' }}>
          Cette journée type est une moyenne observée sur 3 mois après déploiement. La première semaine, les commerciaux apprennent à piloter l'agent. À partir de la deuxième semaine, le ratio bascule.
        </div>
      </div>
    </section>
  );
}

// ── 4 Agents ──────────────────────────────────────────────────
const agents = [
  {
    n: '01', title: 'Agent IA SDR (prospection outbound)', badge: '80 à 150 RDV/mois', color: AC,
    who: 'Équipes commerciales saturées par la prospection outbound sur LinkedIn, email ou téléphone.',
    what: 'Identifie les prospects ICP, écrit les premiers messages personnalisés sur LinkedIn et email, relance jusqu\'à 4 fois, qualifie quand pertinent, prend le RDV avec le commercial humain via Calendly.',
    tools: ['LinkedIn Sales Navigator', 'Apollo', 'Lemlist', 'HubSpot ou Salesforce', 'Calendly'],
    kpis: [{ label: 'Volume/mois', value: '80 à 150 RDV qualifiés' }, { label: 'Mise en service', value: '1 à 2 semaines' }, { label: 'Payback', value: 'Moins de 6 mois' }],
  },
  {
    n: '02', title: 'Agent IA qualification inbound', badge: 'Impact dès J+1', color: '#7c3aed',
    who: 'Entreprises qui reçoivent des leads inbound (formulaire, chat, salon) et les qualifient trop lentement.',
    what: 'Reçoit les leads inbound et les qualifie en moins de 5 minutes. Pose les questions BANT en mode conversation naturelle, écrit la fiche CRM, prend le RDV avec le bon commercial selon disponibilité et expertise.',
    tools: ['Chatbot site', 'Formulaires', 'CRM', 'Calendly'],
    kpis: [{ label: 'Time-to-first-touch', value: '18h → moins de 5 min' }, { label: 'Disponibilité', value: '24/7' }, { label: 'Mise en service', value: '1 semaine' }],
    note: { text: 'Fonctionne avec le service', link: '/services/chatbot-ia/', linkText: 'Chatbot IA' },
  },
  {
    n: '03', title: 'Agent IA relance pipeline (deals endormis)', badge: '15 à 30 % de deals réveillés', color: '#0891b2',
    who: 'Directeurs commerciaux avec un pipeline qui stagne et des deals sans activité depuis 30 jours ou plus.',
    what: 'Identifie les opportunités du pipeline qui n\'ont pas avancé depuis X jours, écrit une relance contextualisée (rappelle le dernier échange, propose une valeur nouvelle, propose un nouveau créneau), suit la réponse, escalade quand un humain est requis.',
    tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Email', 'Calendly'],
    kpis: [{ label: 'Deals réveillés', value: '15 à 30 % du pipeline' }, { label: 'Sans effort humain', value: 'Oui' }, { label: 'Mise en service', value: '1 à 2 semaines' }],
  },
  {
    n: '04', title: 'Agent IA suivi post-vente et upsell', badge: '+12 à +25 % revenus upsell', color: GREEN,
    who: 'Équipes Customer Success qui n\'ont pas le temps de suivre chaque client à 30, 60 et 90 jours.',
    what: 'Après la signature, l\'agent suit le client à 30, 60, 90 jours, mesure la satisfaction, identifie les signaux d\'upsell (utilisation accrue, demande de licences supplémentaires, mention d\'un nouveau besoin), passe le relais au commercial quand un upsell concret est détecté.',
    tools: ['CRM', 'Outils CSM', 'Données produit (si SaaS)'],
    kpis: [{ label: 'Revenus upsell', value: '+12 à +25 %' }, { label: 'Sans alourdir CS', value: 'Oui' }, { label: 'Mise en service', value: '2 à 3 semaines' }],
  },
];

function AgentsListing() {
  const [ref, visible] = useInView(0.06);
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section ref={ref} id="agents" style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>4 agents IA Althoce déployés en standard dans le commercial</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto' }}>
            Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner. Chacun couvre une partie spécifique du cycle de vente.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {agents.map((ag, i) => {
            const isOpen = expanded === i;
            const isLast = i === agents.length - 1;
            return (
              <div key={i} style={{
                border: '1px solid #e4e4e7',
                borderBottom: isLast ? '1px solid #e4e4e7' : 'none',
                background: isOpen ? '#fafafa' : '#fff',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(16px)',
                transition: `opacity .5s ${i * .09}s ease, transform .5s ${i * .09}s ease, background .2s`,
                borderRadius: i === 0 ? '16px 16px 0 0' : isLast ? '0 0 16px 16px' : 0,
              }}>
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '22px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                  aria-expanded={isOpen}
                >
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: isOpen ? ag.color : `${ag.color}12`, border: `1px solid ${ag.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
                    <span style={{ fontSize: 13, fontWeight: 900, color: isOpen ? '#fff' : ag.color, transition: 'color .2s' }}>{ag.n}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#09090b', marginBottom: 2 }}>{ag.title}</div>
                    <div style={{ fontSize: 13, color: '#8a8a95', fontWeight: 500 }}>{ag.who.slice(0, 80)}…</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                    <span className="com-agent-badge" style={{ padding: '4px 10px', borderRadius: 9999, background: `${ag.color}12`, border: `1px solid ${ag.color}25`, fontSize: 11, fontWeight: 800, color: ag.color }}>{ag.badge}</span>
                    <span style={{ fontSize: 18, color: '#a1a1aa', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}>+</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="com-agent-expanded" style={{ padding: '0 24px 28px 80px' }}>
                    {/* KPI strip */}
                    <div className="com-kpi-strip" style={{ display: 'grid', gridTemplateColumns: `repeat(${ag.kpis.length}, 1fr)`, gap: 8, marginBottom: 20, padding: '14px 0', borderBottom: '1px solid #f4f4f5' }}>
                      {ag.kpis.map((k, j) => (
                        <div key={j} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 4 }}>{k.label}</div>
                          <div style={{ fontSize: 14, fontWeight: 800, color: ag.color }}>{k.value}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 16 }} className="com-agents-detail">
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 800, color: ag.color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Pour qui</p>
                        <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7 }}>{ag.who}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 800, color: ag.color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 8 }}>Ce que ça inclut</p>
                        <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7 }}>{ag.what}</p>
                      </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <p style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 8 }}>Outils intégrés</p>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {ag.tools.map((t, j) => (
                          <span key={j} style={{ padding: '4px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 12, fontWeight: 600, color: '#52525b' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                      <span style={{ fontSize: 14, color: '#a1a1aa', fontWeight: 500 }}>
                        Tarif : sur devis selon scope
                        {ag.note && <> · <a href={ag.note.link} style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>{ag.note.linkText}</a></>}
                      </span>
                      <a href="/contact" style={{ padding: '10px 20px', borderRadius: 9999, background: ag.color, color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
                        Discuter de ce cas →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 24, padding: '20px 24px', borderRadius: 16, background: `${AC}06`, border: `1px solid ${AC}20`, fontSize: 15, color: '#52525b', lineHeight: 1.7 }}>
          Votre besoin ne rentre pas exactement dans la liste ? Pour un poste entier de SDR ou de Customer Success automatisé de bout en bout, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a> qui couvre un rôle complet. Les 30 minutes offertes avec un expert permettent de qualifier la combinaison d'agents la plus pertinente.
        </div>
      </div>
    </section>
  );
}

// ── Cas client ────────────────────────────────────────────────
const kpis = [
  { label: 'RDV qualifiés / mois', avant: '12', apres: '36', unit: '+200 %' },
  { label: 'Time-to-first-touch lead inbound', avant: '18 h', apres: '4 min', unit: '−96 %' },
  { label: 'Volume prospection traité', avant: '80 / sem', apres: '400 / sem', unit: '×5' },
  { label: 'Coût d\'acquisition par RDV qualifié', avant: '480 €', apres: '95 €', unit: '−80 %' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      {/* Background depth */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: `radial-gradient(ellipse,${AC}0a 0%,transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      {/* Quote section */}
      <div style={{ padding: '88px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Context strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['Bordeaux', 'Négoce de vins', 'Export 65 %', '28 collaborateurs'].map((tag, i) => (
            <span key={i} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111', letterSpacing: '.02em' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        {/* Blockquote */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          {/* Large quote mark inline */}
          <div aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.65, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.45, marginBottom: 20, display: 'block' }}>"</div>

          <blockquote style={{ fontSize: 'clamp(18px,2.3vw,26px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 36px', fontStyle: 'normal', paddingLeft: 20, borderLeft: `3px solid ${AC}55` }}>
            On a déployé l'agent IA SDR multilingue en 6 semaines. Avant, j'étais le seul à pouvoir prospecter en mandarin et japonais. Maintenant, il prospecte 24/7 sur 4 langues. Les 4 personnes de mon équipe se concentrent sur le closing et la fidélisation client. On a fait +200 % de RDV qualifiés en 4 mois, sans embauche supplémentaire.
          </blockquote>

          {/* Attribution */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${AC}15`, border: `1.5px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="9" r="4.5" stroke={AC} strokeWidth="1.5"/>
                <path d="M4 20C4 16.7 7.1 14 11 14S18 16.7 18 20" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#e4e4e7', letterSpacing: '-.01em' }}>Directeur commercial</div>
              <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>Négoce de vins bordelais · 28 collaborateurs · Export 65 %</div>
            </div>
            <div style={{ padding: '7px 16px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a30', fontSize: 14, fontWeight: 800, color: GREEN, flexShrink: 0 }}>+200 % de RDV</div>
          </div>
        </div>
      </div>

      {/* KPI bands */}
      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="com-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < kpis.length - 1 ? '1px solid #1a1a1a' : 'none', textAlign: 'center', position: 'relative' }}>
              {/* Top accent bar */}
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
      <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 28 }}>Déployé dans tous les métiers commerciaux</p>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" aria-label="Métiers couverts par les agents IA commerciaux">
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
      {[{ l: 'Agent SDR', w: 90 }, { l: 'Agent inbound', w: 70 }, { l: 'Agent pipeline', w: 55 }, { l: 'Agent upsell', w: 40 }].map((r, i) => (
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
        {[{ n: 'HubSpot', c: '#ff7a59' }, { n: 'Salesforce', c: '#00a1e0' }, { n: 'LinkedIn', c: '#0077b5' }, { n: 'Calendly', c: '#006bff' }, { n: 'Apollo', c: '#7c3aed' }, { n: 'Lemlist', c: '#22c55e' }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent SDR actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>24/7</span>
      </div>
      {['RDV qualifiés aujourd\'hui', 'Messages envoyés', 'Leads qualifiés', 'Coût / RDV'].map((l, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b' }}>{l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: ['#22c55e', AC, '#f59e0b', GREEN][i] }}>{['14', '68', '9', '95 €'][i]}</span>
        </div>
      ))}
    </div>
  );
}

function Methodology() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
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
              La plupart des outils IA envoient vos données prospects chez des prestataires américains. Chez Althoce, on fait l'inverse : hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout, et un humain toujours dans la boucle.
            </p>
            <a href="/#souverainete" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', border: `1px solid ${AC}40`, borderRadius: 9999, transition: 'all .15s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = AC; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = AC; }}>
              Notre approche souveraineté →
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
const faqCommercial: FAQv2Item[] = [
  {
    q: 'Un agent IA SDR peut-il vraiment remplacer un commercial humain ?',
    a: 'Non, et ce n\'est pas l\'objectif. Un agent IA SDR remplace la partie répétitive et chronophage du métier commercial : prospection, qualification, relance, prise de RDV. Vos commerciaux humains gardent les tâches à forte valeur cognitive : closing, négociation, gestion des grands comptes, arbitrage des cas complexes. Statistique observée chez nos clients : +200 % de RDV qualifiés en moyenne, 0 départ d\'équipe commercial imputable au déploiement.',
  },
  {
    q: 'Comment l\'agent gère-t-il la personnalisation des messages de prospection ?',
    a: 'L\'agent s\'appuie sur trois couches. La première : la fiche entreprise (taille, secteur, croissance récente, levée de fonds, embauches signalées). La deuxième : la fiche personne (rôle, ancienneté, publications LinkedIn récentes, signaux d\'achat). La troisième : votre propre ICP et votre proposition de valeur paramétrés au cadrage. Le LLM compose un message court qui combine ces trois couches. Résultat : un taux de réponse 3 à 5 fois supérieur à un mail de prospection générique.',
  },
  {
    q: 'Quel investissement pour un agent IA commercial et quel ROI attendre ?',
    a: 'Tarification entièrement sur devis selon votre contexte : taille de l\'équipe commerciale, volume de prospection visé, nombre de canaux activés (LinkedIn, email, téléphone), intégration au CRM existant, exigences de souveraineté. Le payback se mesure typiquement en moins de 6 mois sur les équipes saturées par la prospection. Le bon repère : si un commercial passe plus de 50 % de son temps en prospection au lieu du closing, l\'agent IA paye sa mise en service en quelques mois. Tout démarre par 30 minutes offertes avec un expert.',
  },
  {
    q: 'L\'agent peut-il s\'intégrer à mon CRM existant (HubSpot, Salesforce, Pipedrive) ?',
    a: 'Oui, c\'est même la condition de réussite. Nous intégrons en standard HubSpot, Salesforce, Pipedrive, Zoho. L\'agent lit et écrit dans votre CRM : mise à jour des contacts, ajout d\'activités, création de RDV, changement de stage. Les permissions sont héritées du CRM. Pour les CRM internes propriétaires, voir Intégration IA qui détaille les connecteurs custom.',
  },
  {
    q: 'Que se passe-t-il si l\'agent envoie un message inapproprié ou commet une erreur ?',
    a: 'Trois garde-fous. Premièrement, revue humaine sur les premiers envois (200 premiers messages typiquement) avant passage en autonomie complète. Deuxièmement, règles strictes d\'escalade : tout message qui mentionne un sujet sensible (litige, RGPD, technique complexe, demande prix exceptionnelle) est transmis à un humain avec contexte. Troisièmement, monitoring continu des taux de réponse et de sentiment : si une dérive est détectée, alerte automatique au manager.',
  },
  {
    q: 'Mes prospects savent-ils qu\'ils parlent à un agent IA ?',
    a: 'Oui, par défaut. Nos agents IA SDR Althoce sont transparents : ils se présentent comme assistants IA pour qualifier un besoin, et précisent qu\'un commercial humain reprend la suite. Cette transparence n\'impacte pas négativement les taux de réponse. Vous pouvez personnaliser le degré de divulgation au cadrage selon votre culture commerciale.',
  },
  {
    q: 'En combien de temps voit-on les premiers RDV qualifiés ?',
    a: 'Pour un agent SDR : premier RDV qualifié en moyenne sous 5 à 10 jours après le go-live. Pour un agent qualification inbound : impact immédiat dès le premier jour (le time-to-first-touch passe de plusieurs heures à quelques minutes). Pour un agent relance pipeline : premiers réveils dans les 7 jours.',
  },
  {
    q: 'Mes données prospects restent-elles en France ?',
    a: 'Oui, par défaut. Pour les clients qui exigent une souveraineté maximale (ETI cotées, secteurs sensibles), nous utilisons Mistral hébergé en France et hébergeons l\'infra sur OVH ou Scaleway. Pour les autres, l\'anonymisation des données personnelles est appliquée par défaut avant tout envoi aux modèles propriétaires. Voir notre page Souveraineté pour le détail.',
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les agents IA commerciaux</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqCommercial} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .com-ba-mobile { display: none; }
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
    .com-hero-grid { grid-template-columns: 1fr !important; }
    .com-mockup-col { display: none !important; }
    .com-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .com-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .com-kpi-grid > div:nth-child(even) { border-right: none !important; }
    .com-kpi-grid > div:last-child, .com-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
  }
  @media (max-width: 640px) {
    .com-ba-desktop { display: none !important; }
    .com-ba-mobile { display: block !important; }
    .com-agent-badge { display: none !important; }
    .com-agent-expanded { padding-left: 24px !important; }
    .com-agents-detail { grid-template-columns: 1fr !important; }
    .com-kpi-strip { grid-template-columns: 1fr 1fr !important; }
    .com-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .com-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIACommercialPageClient() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Hero />
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
