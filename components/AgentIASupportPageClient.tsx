'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentTags } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

const AC = '#2563eb';
const GREEN = '#16a34a';
const ORANGE = '#f59e0b';
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

// ── Support Ticket Mockup ─────────────────────────────────────
function SupportTicketMockup() {
  return (
    <div style={{ width: '100%', maxWidth: 440, margin: '0 auto' }}>
      {/* Window bar */}
      <div style={{ padding: '11px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#3f3f46' }}>Ticket #4821 · Support client</span>
        <div style={{ width: 24 }} />
      </div>

      {/* Ticket status header */}
      <div style={{ padding: '10px 16px', background: '#111', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#22c55e18', border: '1.5px solid #22c55e40', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 5L4 7L8 3" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 12, fontWeight: 800, color: '#22c55e' }}>Résolu en 4 min</span>
        </div>
        <span style={{ padding: '2px 8px', borderRadius: 6, background: `${AC}15`, border: `1px solid ${AC}30`, fontSize: 10, fontWeight: 700, color: AC }}>IA · Niveau 1</span>
      </div>

      {/* Messages */}
      <div style={{ padding: '14px', background: '#0d0d0d', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Customer question */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1e1e1e', border: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 800, color: '#8a8a95' }}>C</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, color: '#3f3f46', marginBottom: 4, fontWeight: 600 }}>Client · 22:47</div>
            <div style={{ padding: '10px 13px', borderRadius: '4px 14px 14px 14px', background: '#1e1e1e', fontSize: 13, color: '#d4d4d8', lineHeight: 1.65 }}>
              Bonjour, ma commande #2847 n&apos;est pas arrivée, c&apos;est censé être livré hier. Vous pouvez me dire où elle en est ?
            </div>
          </div>
        </div>

        {/* Agent IA response */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${AC}20`, border: `1.5px solid ${AC}45`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="2" y="4" width="10" height="7" rx="1.5" stroke={AC} strokeWidth="1.2"/>
              <path d="M5 4V3C5 2.4 5.4 2 6 2H8C8.6 2 9 2.4 9 3V4" stroke={AC} strokeWidth="1.2"/>
              <path d="M5 8H9M7 6V10" stroke={AC} strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, color: '#3f3f46', marginBottom: 4, fontWeight: 600, textAlign: 'right' }}>Agent IA · 22:51</div>
            <div style={{ padding: '10px 13px', borderRadius: '14px 4px 14px 14px', background: AC, fontSize: 13, color: '#fff', lineHeight: 1.65 }}>
              Bonjour, j&apos;ai consulté votre commande #2847. Elle est en transit chez UPS depuis le 09/05 avec un retard d&apos;un jour sur la chaîne d&apos;Orly. Livraison estimée demain avant 13h.
              <div style={{ marginTop: 8, padding: '6px 8px', borderRadius: 6, background: 'rgba(255,255,255,0.12)', fontSize: 10, color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: 5 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <circle cx="5" cy="5" r="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1"/>
                  <path d="M5 3V5.5L6.5 7" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                Source : suivi UPS · Mise à jour il y a 2h
              </div>
            </div>
          </div>
        </div>

        {/* Second customer message */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1e1e1e', border: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 800, color: '#52525b' }}>C</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, color: '#3f3f46', marginBottom: 4, fontWeight: 600 }}>Client · 22:52</div>
            <div style={{ padding: '10px 13px', borderRadius: '4px 14px 14px 14px', background: '#1e1e1e', fontSize: 13, color: '#d4d4d8', lineHeight: 1.65 }}>
              Ok merci, c&apos;est rassurant !
            </div>
          </div>
        </div>
      </div>

      {/* Footer signature */}
      <div style={{ padding: '10px 14px', background: '#111', borderTop: '1px solid #1a1a1a', borderRadius: '0 0 14px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 10, color: '#3f3f46', fontWeight: 600 }}>Agent IA Althoce · supervisé par l&apos;équipe support</span>
        <span style={{ padding: '3px 8px', borderRadius: 6, background: '#22c55e12', border: '1px solid #22c55e25', fontSize: 10, fontWeight: 700, color: '#22c55e' }}>Ticket clôturé</span>
      </div>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}0d 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#22c55e0a 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="sup-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA service client</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA pour le service client : N1 absorbé{' '}
              <span style={{ color: AC }}>en 24/7, équipe humaine concentrée sur les cas complexes.</span>
            </h1>

            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              70 % des tickets de votre support sont des questions répétitives (statut commande, réinitialisation mot de passe, info produit, retour, facturation). Un agent IA Althoce les résout en 24/7, en 4 langues, cite les sources, et escalade au support humain avec contexte enrichi dès qu'un cas demande une vraie intelligence relationnelle.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="sup-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', '70 % déflexion tickets N1', 'Disponible 24/7 multilingue', '+758 agents en production', '70 % déflexion tickets N1', 'Disponible 24/7 multilingue'].map((t, i) => (
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
                Voir les 4 agents support ↓
              </a>
            </div>
          </div>

          <div className="sup-mockup-col">
            <SupportTicketMockup />
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
        <H2 style={{ marginBottom: 28 }}>Ce qu'un agent IA absorbe vraiment dans le support client</H2>

        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 24 }}>
          Dans une équipe support B2C ou B2B, 70 à 80 % des tickets niveau 1 sont des questions répétitives à faible valeur ajoutée cognitive : statut commande, suivi livraison, réinitialisation mot de passe, info produit basique, conditions de retour, statut facturation, accès compte client. Un agent IA Althoce absorbe ces tickets en autonomie complète. Il lit la question en langage naturel (fautes de frappe comprises), retrouve l'information dans votre base de connaissances ou votre back-office, répond en citant la source, met à jour le ticket dans votre outil support (Zendesk, Intercom, Freshdesk, Gorgias), et clôt le ticket sans intervention humaine.
        </p>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 40 }}>
          Concrètement, notre agent est plus qu'un simple{' '}
          <a href="/services/chatbot-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>chatbot RAG</a>{' '}
          qui répond à partir d'une FAQ. Il <strong>agit</strong> : il consulte votre base de commandes, met à jour les statuts CRM, déclenche un remboursement automatique sous seuil, et escalade un cas complexe avec contexte enrichi (question initiale, ce qu'il a compris, pourquoi il bloque, ce qu'il propose). Pour un poste entier de support automatisé de bout en bout, voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>.
        </p>

        {/* Dark callout */}
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Trois questions pour qualifier votre besoin support</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', q: 'Votre temps de réponse moyen au premier ticket dépasse-t-il 4 heures, alors que la majorité des questions ont des réponses standards ?' },
              { n: '02', q: 'Votre équipe traite-t-elle plus de 30 % de tickets répétitifs (statut commande, réinit mot de passe, FAQ basique) qui pourraient être automatisés ?' },
              { n: '03', q: 'Avez-vous des pics saisonniers (Black Friday, soldes, rentrée) qui forcent à recruter en intérim ou à dégrader la qualité de service ?' },
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
              Deux «oui» sur trois signifient un gain de productivité immédiat. Trois «oui» signifient que vous perdez en CSAT en ce moment même.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Before / After ─────────────────────────────────────────────
const avantItems = [
  { time: '9h00', text: '47 tickets en attente reçus pendant la nuit. Triage manuel. 30 minutes pour identifier les urgents.' },
  { time: '9h30–11h30', text: 'Traitement répétitif : "où est ma commande" (15 fois), "réinitialiser mon mot de passe" (8 fois), "délais de livraison" (12 fois). 4 à 7 minutes par ticket.' },
  { time: '11h30', text: 'Un client B2B mécontent appelle en colère. 45 minutes pour calmer, comprendre, escalader au commercial.' },
  { time: '12h30–14h00', text: 'Pause déjeuner. 18 nouveaux tickets s\'accumulent sans personne pour les traiter.' },
  { time: '14h00–18h00', text: 'Alternance entre tickets répétitifs et 3 cas complexes (litige facturation, problème produit défectueux, demande RGPD).' },
  { time: '18h30', text: '60 tickets traités dont 50 étaient répétitifs. 2 cas complexes restent pour demain. La file n\'a pas vraiment diminué.' },
];

const apresItems = [
  { time: '9h00', text: 'Lecture du dashboard : 47 tickets reçus cette nuit, 38 résolus automatiquement par l\'agent IA. 9 tickets escalés avec contexte enrichi (question initiale, ce que l\'agent a compris, pourquoi il a escaladé).' },
  { time: '9h30–11h30', text: '9 tickets complexes traités avec soin. Chaque ticket prend 6 à 12 minutes parce que l\'agent a déjà fait le travail de base. 9 tickets résolus en 2 heures avec un vrai soin client.' },
  { time: '11h30', text: 'L\'agent IA a déjà résolu 22 nouveaux tickets entrants. La file d\'attente baisse sans intervention humaine.' },
  { time: '12h30–14h00', text: 'Pause déjeuner. L\'agent IA continue de fonctionner 24/7. Aucun ticket en backlog au retour.' },
  { time: '14h00–18h00', text: '5 cas complexes traités sereinement (litige, RGPD, demande commerciale exceptionnelle, problème produit, escalade légale). Temps consacré : 3 heures pour 5 cas, avec qualité.' },
  { time: '18h00', text: 'On rentre. CSAT mensuelle en hausse de 12 points. L\'agent IA continue 24/7 pendant la nuit.' },
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
          <H2 style={{ marginBottom: 12 }}>La journée type d'un agent support. Avant et après Althoce.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto' }}>Journée type observée chez nos clients e-commerce et SaaS après déploiement.</p>
        </div>

        {/* Desktop */}
        <div className="sup-before-after sup-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, opacity: visible ? 1 : 0, transition: 'opacity .6s ease' }}>
          <TimelineColumn items={avantItems} isAvant={true} visible={visible} />
          <TimelineColumn items={apresItems} isAvant={false} visible={visible} />
        </div>

        {/* Mobile: tabs */}
        <div className="sup-ba-mobile" style={{ display: 'none', opacity: visible ? 1 : 0, transition: 'opacity .6s ease' }}>
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

        <div style={{ marginTop: 24, padding: '16px 22px', borderRadius: 14, background: '#fff', border: '1px solid #e4e4e7', fontSize: 14, color: '#8a8a95', lineHeight: 1.7, textAlign: 'center' }}>
          Transformation mesurable aussi en CSAT : nos clients support observent en moyenne <strong style={{ color: '#09090b' }}>+12 points de CSAT</strong> sur 3 mois, les questions simples résolues en 4 min au lieu de 18h, et les cas complexes qui reçoivent enfin l'attention humaine qu'ils méritent.
        </div>
      </div>
    </section>
  );
}

// ── 4 Agents ──────────────────────────────────────────────────
const agents = [
  {
    n: '01', title: 'Agent IA FAQ niveau 0 (chatbot RAG)', badge: '30 à 50 % déflexion N0', color: AC,
    who: 'Sites e-commerce, SaaS et plateformes B2B qui reçoivent des questions répétitives de visiteurs ou clients.',
    what: 'Répond aux questions depuis votre base de connaissances (FAQ, docs produit, CGV, conditions de livraison). Cite les sources. Multilingue par défaut. Voir aussi Chatbot IA pour la version produit standalone.',
    tools: ['Embed site', 'Notion / Confluence / base interne', 'Multilingue (9 langues)'],
    kpis: [{ label: 'Déflexion N0', value: '30 à 50 %' }, { label: 'Temps de réponse', value: 'Moins de 30 sec' }, { label: 'Mise en service', value: '1 semaine' }],
    note: { text: 'Voir aussi', link: '/services/chatbot-ia/', linkText: 'Chatbot IA RAG' },
  },
  {
    n: '02', title: 'Agent IA tickets niveau 1 multilingue', badge: '60 à 80 % tickets N1 absorbés', color: '#7c3aed',
    who: 'Équipes support saturées par les tickets répétitifs entrants sur Zendesk, Intercom, Freshdesk ou Gorgias.',
    what: 'Lit les tickets entrants, identifie les types répétitifs (statut commande, réinit, FAQ, retour, facturation), répond, met à jour le ticket et le clôt. Escalade au support humain avec contexte enrichi quand le ticket sort de son périmètre.',
    tools: ['Zendesk', 'Intercom', 'Freshdesk', 'Gorgias', 'Back-office commandes/factures'],
    kpis: [{ label: 'Résolution N1', value: '60 à 80 %' }, { label: 'Langues', value: '9 en standard' }, { label: 'Mise en service', value: '2 à 4 semaines' }],
  },
  {
    n: '03', title: 'Agent IA statut commande et livraison', badge: '90 % questions livraison résolues', color: '#0891b2',
    who: 'E-commerces saturés par les questions "où est ma commande" sur mail, chat, formulaire et réseaux sociaux.',
    what: 'Reçoit la question "où est ma commande" sur tous les canaux, consulte la base commande + le suivi transporteur (Colissimo, UPS, DPD, Chronopost), répond avec le statut précis et le lien tracking, escalade si la commande est en anomalie (retard anormal, perdue, retour fournisseur).',
    tools: ['Shopify', 'WooCommerce', 'PrestaShop', 'Magento', 'Colissimo, UPS, DPD, Chronopost'],
    kpis: [{ label: 'Résolution autonome', value: '90 %' }, { label: 'Canaux couverts', value: 'Mail, chat, formulaire' }, { label: 'Mise en service', value: '2 à 3 semaines' }],
  },
  {
    n: '04', title: 'Agent IA escalade enrichie', badge: 'Traitement cas complexes ÷2', color: GREEN,
    who: 'Équipes support qui arrivent "à froid" sur les tickets complexes escalés, sans contexte préparé.',
    what: 'Quand un cas est escalé, l\'agent fait le travail de préparation : il résume le contexte, identifie les éléments clés du dossier client, propose une réponse type pré-rédigée, suggère les compensations possibles selon votre politique. L\'agent humain n\'arrive plus jamais sans contexte.',
    tools: ['Outil support (Zendesk, Intercom)', 'CRM', 'Back-office'],
    kpis: [{ label: 'Temps cas complexe', value: 'Divisé par 2' }, { label: 'Qualité contexte', value: 'Enrichi automatique' }, { label: 'Mise en service', value: '2 semaines' }],
  },
];

function AgentsListing() {
  const [ref, visible] = useInView(0.06);
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section ref={ref} id="agents" style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>4 agents IA Althoce déployés en standard dans le support client</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto' }}>
            Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner.
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
                    <div style={{ fontSize: 13, color: '#8a8a95', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ag.who.slice(0, 80)}…</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                    <span className="sup-agent-badge" style={{ padding: '4px 10px', borderRadius: 9999, background: `${ag.color}12`, border: `1px solid ${ag.color}25`, fontSize: 11, fontWeight: 800, color: ag.color, whiteSpace: 'nowrap' }}>{ag.badge}</span>
                    <span style={{ fontSize: 18, color: '#a1a1aa', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .2s', display: 'block', lineHeight: 1 }}>+</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="sup-agent-expanded" style={{ padding: '0 24px 28px 80px' }}>
                    {/* KPI strip */}
                    <div className="sup-kpi-strip" style={{ display: 'grid', gridTemplateColumns: `repeat(${ag.kpis.length}, 1fr)`, gap: 8, marginBottom: 20, padding: '14px 0', borderBottom: '1px solid #f4f4f5' }}>
                      {ag.kpis.map((k, j) => (
                        <div key={j} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 4 }}>{k.label}</div>
                          <div style={{ fontSize: 14, fontWeight: 800, color: ag.color }}>{k.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="sup-agents-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 16 }}>
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
          Pour un poste entier de support automatisé de bout en bout (N0, N1, partie du N2, escalade orchestrée), voir{' '}
          <a href="/services/employe-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>Employé IA</a>. Les 30 minutes offertes avec un expert permettent de qualifier la combinaison d'agents la plus pertinente pour votre contexte.
        </div>
      </div>
    </section>
  );
}

// ── Cas client ────────────────────────────────────────────────
const kpis = [
  { label: 'Temps première réponse', avant: '18 h', apres: '4 min', unit: '÷100' },
  { label: 'Résolution N1 autonome', avant: '0 %', apres: '70 %', unit: '+70 pts' },
  { label: 'Tickets / agent / jour', avant: '60', apres: '22', unit: 'Cas complexes' },
  { label: 'CSAT mensuelle', avant: '67', apres: '79', unit: '+12 pts' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse,#22c55e08 0%,transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ padding: '88px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Context strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['SaaS B2B', '120 collaborateurs', '8 000 clients PME', 'Zendesk'].map((tag) => (
            <span key={tag} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111', letterSpacing: '.02em' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        {/* Blockquote */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.65, color: AC, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.45, marginBottom: 20 }}>"</div>

          <blockquote style={{ fontSize: 'clamp(18px,2.3vw,25px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 36px', fontStyle: 'normal', paddingLeft: 20, borderLeft: `3px solid ${AC}55` }}>
            Avant, mon équipe support croulait. 200 tickets par jour, 70 % de questions basiques qu'on aurait pu automatiser. On a déployé l'agent IA en 4 semaines. Aujourd'hui, l'IA résout 70 % du N1 en 4 minutes, et mes agents humains se concentrent sur les cas complexes. La CSAT a gagné 12 points. Personne n'a quitté l'équipe. C'est le projet IT qui a le plus changé notre quotidien en 3 ans.
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${AC}15`, border: `1.5px solid ${AC}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="9" r="4.5" stroke={AC} strokeWidth="1.5"/>
                <path d="M4 20C4 16.7 7.1 14 11 14S18 16.7 18 20" stroke={AC} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#e4e4e7', letterSpacing: '-.01em' }}>Head of Customer Support</div>
              <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>Éditeur SaaS B2B · 120 collaborateurs · 8 000 clients PME</div>
            </div>
            <div style={{ padding: '7px 16px', borderRadius: 9999, background: '#16a34a12', border: '1px solid #16a34a30', fontSize: 14, fontWeight: 800, color: GREEN, flexShrink: 0 }}>+12 pts CSAT</div>
          </div>
        </div>
      </div>

      {/* KPI bands */}
      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="sup-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
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

      {/* Narrative */}
      <div style={{ padding: '56px 24px 72px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1, opacity: visible ? 1 : 0, transition: 'opacity .7s .5s ease' }}>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 20 }}>
          Avant la mission Althoce, l'équipe support de l'éditeur SaaS gérait 200 tickets par jour avec 12 agents. 70 % des tickets étaient des questions répétitives (réinitialisation mot de passe, accès compte, statut facturation, FAQ produit). Le temps de réponse moyen au premier contact dépassait 18 heures. La direction envisageait de recruter 4 agents supplémentaires.
        </p>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 32 }}>
          En 4 semaines, l'agent IA a été déployé sur Zendesk avec accès à la base de connaissances produit et au back-office facturation. Aujourd'hui, l'agent absorbe 70 % du N1 en autonomie complète, en 4 minutes de moyenne. Les 12 agents humains traitent désormais 22 tickets complexes par jour au lieu de 60 répétitifs. La CSAT a gagné 12 points en 3 mois. Aucun recrutement supplémentaire n'a été nécessaire.
        </p>
        <a href="/cas-clients/saas-b2b-agent-ia-service-client/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none', padding: '11px 22px', border: `1px solid ${AC}40`, borderRadius: 9999, transition: 'all .15s' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = AC; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = AC; }}>
          Voir le cas client complet →
        </a>
      </div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────
function MarqueeMetiers() {
  return (
    <section style={{ padding: '64px 0', background: '#fff', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 28 }}>Déployé dans tous les métiers et secteurs</p>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2 }} aria-hidden="true" />
        <div className="ticker-slow" role="marquee" aria-label="Secteurs couverts par les agents IA support">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit tickets support</div>
      {['Questions statut commande', 'Réinitialisations mot de passe', 'FAQ produit répétitives', 'Escalades complexes'].map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `slideIn .4s ${i * .15}s ease both` : 'none' }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: i < 3 ? '#22c55e22' : '#f4f4f5', border: i < 3 ? '1.5px solid #22c55e' : '1.5px solid #d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, color: '#22c55e', fontWeight: 900 }}>{i < 3 && '✓'}</div>
          <span style={{ fontSize: 13, color: i < 3 ? '#52525b' : '#a1a1aa', fontWeight: i < 3 ? 600 : 400 }}>{t}</span>
          {i < 3 && <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>Automatisable</span>}
        </div>
      ))}
    </div>
  );
  if (stepIndex === 1) return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s 1s ease-in-out infinite' : 'none' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Agents à déployer</div>
      {[{ l: 'Agent FAQ N0', w: 90 }, { l: 'Agent tickets N1', w: 75 }, { l: 'Agent statut commande', w: 60 }, { l: 'Agent escalade enrichie', w: 45 }].map((r, i) => (
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
        {[{ n: 'Zendesk', c: '#0052CC' }, { n: 'Intercom', c: '#1F8DEE' }, { n: 'Freshdesk', c: '#25C16F' }, { n: 'Gorgias', c: '#FF5C35' }, { n: 'Shopify', c: '#95BF47' }, { n: 'Back-office', c: AC }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent support actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>24/7</span>
      </div>
      {['Tickets résolus aujourd\'hui', 'Temps moyen réponse', 'Taux résolution N1', 'CSAT du mois'].map((l, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b' }}>{l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: ['#22c55e', AC, ORANGE, GREEN][i] }}>{['138', '4 min', '70 %', '79/100'][i]}</span>
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
              Vos données clients restent vos données.<br /><span style={{ color: AC }}>En Europe, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 32 }}>
              La plupart des outils IA envoient vos données support chez des prestataires américains. Chez Althoce, on fait l'inverse : hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout, et un humain toujours dans la boucle.
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
const faqSupport: FAQv2Item[] = [
  {
    q: 'Quelle est la différence entre votre agent IA support et un chatbot RAG classique ?',
    a: 'Un chatbot RAG répond aux questions à partir d\'une base de connaissances. Notre agent IA support agit en plus : il consulte le back-office (commandes, factures, comptes), met à jour les statuts dans Zendesk ou Intercom, déclenche un remboursement sous seuil, escalade avec contexte enrichi. C\'est la différence entre une porte d\'entrée informationnelle et une vraie résolution autonome.',
  },
  {
    q: 'L\'agent peut-il vraiment résoudre 70 % du N1 sans intervention humaine ?',
    a: 'Oui, sur les types de tickets standardisés. Les 30 % restants se répartissent entre : 15 % de cas complexes (litiges, demandes exceptionnelles, problèmes produit) escalés à l\'humain avec contexte, 10 % de questions hors périmètre (commerciales, légales) escalées au bon service, 5 % d\'incertitudes où l\'agent préfère escalader plutôt qu\'inventer. Le ratio dépend de la qualité de votre base de connaissances et du périmètre cadré.',
  },
  {
    q: 'Quel investissement pour un agent IA support et quel ROI attendre ?',
    a: 'Tarification entièrement sur devis selon votre contexte : volume de tickets, nombre d\'outils branchés (Zendesk, Intercom, back-office), nombre de langues à couvrir, intégration au CRM, exigences de souveraineté. Le ROI se mesure typiquement en 3 à 6 mois, avec deux gains visibles dès le premier mois : temps moyen de première réponse divisé par 100, et CSAT mensuelle en hausse de 10 à 15 points. Voir aussi Employé IA support (/services/employe-ia/) pour un poste entier couvert de bout en bout. Tout démarre par 30 minutes offertes avec un expert pour un devis ferme.',
  },
  {
    q: 'L\'agent peut-il s\'intégrer à mon outil support existant ?',
    a: 'Oui. Zendesk, Intercom, Freshdesk, Gorgias en standard. L\'agent lit et écrit dans votre outil : création de tickets escalés, mise à jour de statuts, ajout d\'activités. Pour les outils support internes propriétaires, voir Intégration IA (/services/integration-ia/) qui détaille les connecteurs custom.',
  },
  {
    q: 'L\'agent supporte-t-il plusieurs langues ?',
    a: 'Oui, par défaut. Français, anglais, espagnol, italien, allemand, portugais, néerlandais, mandarin et japonais en standard. L\'agent répond dans la langue de la question reçue, sans configuration manuelle par langue.',
  },
  {
    q: 'Que se passe-t-il si l\'agent IA donne une mauvaise réponse à un client ?',
    a: 'Trois garde-fous. Ancrage strict sur la base de connaissances : pas de réponse inventée hors source. Filtrage des sujets sensibles (litige, RGPD, technique critique) qui sont escalés systématiquement. Monitoring continu : chaque réponse est notée (auto + spot-check humain), une dérive déclenche une alerte. Voir Intégration IA (/services/integration-ia/) pour le détail des garde-fous standards.',
  },
  {
    q: 'En combien de temps voit-on le ROI ?',
    a: 'Pour un agent FAQ niveau 0 : impact dès J1 (taux de déflexion mesurable la première semaine). Pour un agent tickets niveau 1 : montée en charge progressive sur 4 à 8 semaines. ROI plein typique : 3 à 6 mois selon le volume de tickets et la maturité de la base de connaissances.',
  },
  {
    q: 'L\'agent IA va-t-il remplacer mes agents support ?',
    a: 'Non. Les clients qui réussissent l\'intégration ne licencient pas, ils redéploient. Vos agents humains montent sur les cas complexes (litige, fidélisation, vente complémentaire), gagnent en compétences relationnelles, et arrêtent de s\'épuiser sur la saisie. Statistique observée : 0 départ d\'équipe imputable au déploiement, +12 points de CSAT, et un effet positif sur la rétention équipe.',
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes sur les agents IA support</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges.</p>
        </div>
        <FAQAccordion items={faqSupport} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .sup-ba-mobile { display: none; }
  @keyframes gradDrift1 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3%,4%) scale(1.06)} }
  @keyframes gradDrift2 { 0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4%,-3%) scale(1.08)} }
  @keyframes floatCard { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)} }
  @keyframes countUp { from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)} }
  .ticker-slow { display:flex;animation:tickerSlide 70s linear infinite;width:max-content; }
  @keyframes tickerSlide { from{transform:translateX(0)}to{transform:translateX(-50%)} }
  @keyframes pillsScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @media (max-width: 860px) {
    .sup-hero-grid { grid-template-columns: 1fr !important; }
    .sup-mockup-col { display: none !important; }
    .sup-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .sup-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .sup-kpi-grid > div:last-child, .sup-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
    .v2-grid2 { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 640px) {
    .sup-ba-desktop { display: none !important; }
    .sup-ba-mobile { display: block !important; }
    .sup-agent-badge { display: none !important; }
    .sup-agent-expanded { padding-left: 24px !important; }
    .sup-agents-detail { grid-template-columns: 1fr !important; }
    .sup-kpi-strip { grid-template-columns: 1fr 1fr !important; }
    .sup-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .sup-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIASupportPageClient() {
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
