'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentTags } from '@/lib/data';
import { FAQAccordion } from '@/components/ui/data-display/FAQAccordion';
import type { FAQv2Item } from '@/lib/data';

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
    <h2 style={{ fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── Invoice Pipeline Mockup ───────────────────────────────────
const invoices = [
  { name: 'Leroy Industries', ref: 'FAC-2024-0891', amount: '2 847,00', account: '401', status: 'validated', dest: 'Sage' },
  { name: 'SARL Martin Conseil', ref: 'FAC-2024-0892', amount: '1 234,50', account: '401', status: 'matched', dest: 'BC#847' },
  { name: 'Duval & Cie Fournitures', ref: 'FAC-2024-0893', amount: '560,00', account: '401', status: 'processing', dest: '' },
];

function InvoicePipelineMockup() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((p) => p + 1), 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: 460, margin: '0 auto' }}>
      {/* Window bar */}
      <div style={{ padding: '11px 16px', borderRadius: '14px 14px 0 0', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ef4444', '#f59e0b', '#22c55e'].map((c) => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#3f3f46' }}>Pipeline comptabilité · Althoce</span>
        <div style={{ width: 24 }} />
      </div>

      {/* Header */}
      <div style={{ padding: '10px 16px', background: '#111', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', animation: 'pulseDot 2s infinite' }} />
          <span style={{ fontSize: 12, fontWeight: 800, color: '#22c55e' }}>Agent actif · Traitement en cours</span>
        </div>
        <span style={{ fontSize: 10, color: '#3f3f46', fontWeight: 600 }}>23 sec / facture</span>
      </div>

      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 20px 1fr', gap: 0, padding: '8px 14px', background: '#0d0d0d', borderBottom: '1px solid #1a1a1a' }}>
        <span style={{ fontSize: 9, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em' }}>Document reçu</span>
        <div />
        <span style={{ fontSize: 9, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', textAlign: 'right' }}>Écriture générée</span>
      </div>

      {/* Invoice rows */}
      <div style={{ background: '#0d0d0d', padding: '6px 0' }}>
        {invoices.map((inv, i) => {
          const isProc = inv.status === 'processing';
          const dots = '.'.repeat((tick % 3) + 1);
          return (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 24px 1fr', alignItems: 'center', gap: 4, padding: '10px 14px', borderBottom: i < invoices.length - 1 ? '1px solid #141414' : 'none' }}>
              {/* Left: document */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: isProc ? '#1e1e1e' : '#16243a', border: `1px solid ${isProc ? '#2a2a2a' : AC + '30'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <rect x="1.5" y="1" width="10" height="11" rx="1.5" stroke={isProc ? '#3f3f46' : AC} strokeWidth="1.2"/>
                    <path d="M4 4.5H9M4 6.5H9M4 8.5H7" stroke={isProc ? '#3f3f46' : AC} strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: isProc ? '#52525b' : '#d4d4d8', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{inv.name}</div>
                  <div style={{ fontSize: 9, color: '#3f3f46', fontWeight: 500, marginTop: 1 }}>{inv.ref}</div>
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {isProc ? (
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: AMBER, animation: 'pulseDot 1s infinite' }} />
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7H12M12 7L8.5 3.5M12 7L8.5 10.5" stroke={AC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>

              {/* Right: entry */}
              {isProc ? (
                <div style={{ fontSize: 12, color: AMBER, fontWeight: 600, fontFamily: 'monospace', textAlign: 'right' }}>En cours{dots}</div>
              ) : (
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#f4f4f5', fontFamily: 'monospace' }}>{inv.account} · {inv.amount} €</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, marginTop: 2 }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path d="M1.5 4L3.5 6L6.5 2" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 9, color: '#22c55e', fontWeight: 700 }}>{inv.status === 'validated' ? `Sage · validé` : `Rapproché · ${inv.dest}`}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress footer */}
      <div style={{ padding: '10px 14px', background: '#111', borderTop: '1px solid #1a1a1a', borderRadius: '0 0 14px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontSize: 10, color: '#8a8a95', fontWeight: 600 }}>38 / 47 factures traitées</span>
          <span style={{ fontSize: 10, color: AC, fontWeight: 800 }}>81 %</span>
        </div>
        <div style={{ height: 4, background: '#1e1e1e', borderRadius: 9999, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '81%', background: `linear-gradient(to right,${AC},${AC}aa)`, borderRadius: 9999, transition: 'width .5s ease' }} />
        </div>
        <div style={{ fontSize: 9, color: '#3f3f46', marginTop: 5, fontWeight: 500 }}>Nuit dernière 02:14 · Pennylane synchronisé · 0 erreur</div>
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
        <div style={{ position: 'absolute', top: '30%', right: '-8%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle,#d9770608 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cpt-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <a href="/services/automatisation-ia/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Automatisation</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Agent IA finance et comptabilité</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Agent IA pour la finance et la comptabilité.{' '}
              <span style={{ color: AC }}>On absorbe 80 % de la saisie,</span>{' '}
              vous gardez 100 % du contrôle.
            </h1>

            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              Factures fournisseurs, rapprochement bancaire, écritures, reporting : un agent IA Althoce traite ces tâches en autonomie sur vos outils existants (Sage, Cegid, Pennylane, QuickBooks, EBP). Votre équipe valide en 1 clic, garde la main sur les arbitrages, et récupère 3 à 5 jours par mois.
            </p>

            <div style={{ marginBottom: 32, overflow: 'hidden' }}>
              <div className="cpt-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['+758 agents en production', '−80 % temps de saisie', 'ROI inférieur à 6 mois', '+758 agents en production', '−80 % temps de saisie', 'ROI inférieur à 6 mois'].map((t, i) => (
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
                Voir les 4 agents comptables ↓
              </a>
            </div>
          </div>

          <div className="cpt-mockup-col">
            <InvoicePipelineMockup />
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
        <H2 style={{ marginBottom: 28 }}>Ce qu'un agent IA peut absorber en comptabilité.</H2>

        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 24 }}>
          Une comptabilité de PME, c'est un flux continu de documents : factures fournisseurs reçues par mail, notes de frais photographiées, relevés bancaires à rapprocher, écritures à passer, déclarations à préparer. La majorité de ce travail est répétitif, déclenché par un événement numérique (un mail, un PDF, un fichier OFX), et obéit à des règles claires une fois la situation comprise. C'est exactement le périmètre dans lequel un agent IA est efficace.
        </p>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 40 }}>
          Concrètement, un agent comptable Althoce lit un PDF de facture, en extrait les données (TTC, TVA, échéance, IBAN, numéro de bon de commande), rapproche avec la commande dans votre ERP, soumet l'écriture à validation au DAF en 1 clic, et la passe dans votre outil comptable. Sur les 3 000 factures mensuelles d'un client moyen, l'agent traite 80 % en autonomie. Les 20 % restants (les cas tordus, les litiges, les exceptions) remontent à votre équipe avec un brief de 3 lignes pour décision. Pour aller plus loin et couvrir un poste entier de DAF automatisé, voir{' '}
          <a href="/services/agents-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>notre catalogue d'agents</a>.
        </p>

        {/* "En une phrase" callout */}
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: AC }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>En une phrase</p>
          </div>
          <div style={{ padding: '28px 32px' }}>
            <p style={{ fontSize: 'clamp(17px,2vw,22px)', fontWeight: 700, color: '#f4f4f5', lineHeight: 1.65, margin: 0 }}>
              Ce qui prend 4 heures à votre comptable chaque jour, l'agent le fait pendant la nuit. Votre équipe arrive le matin, valide, et passe à ce qui demande de l'humain.
            </p>
          </div>
          <div style={{ padding: '14px 24px', borderTop: '1px solid #1a1a1a', background: '#080808', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {['Sage', 'Cegid', 'Pennylane', 'QuickBooks', 'EBP'].map((tool) => (
              <span key={tool} style={{ fontSize: 11, fontWeight: 700, color: '#8a8a95', padding: '3px 10px', borderRadius: 9999, background: '#111', border: '1px solid #222' }}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Before / After ─────────────────────────────────────────────
const avantItems = [
  { time: '7h30', text: 'Ouverture de 47 mails avec factures fournisseurs reçues la veille. Triage manuel.' },
  { time: '9h00', text: 'Saisie manuelle dans Sage, ligne par ligne, 4 minutes par facture. 11 factures traitées.' },
  { time: '11h00', text: 'Pause forcée. Encore 30 factures à saisir. Mal au dos, concentration en baisse.' },
  { time: '14h00', text: 'Rapprochement bancaire : pointage manuel des relevés OFX contre les écritures.' },
  { time: '16h00', text: 'Un fournisseur appelle, sa facture n\'est pas à jour dans le système. Panique, recherche manuelle.' },
  { time: '17h30', text: 'Reporting mensuel commencé hier, toujours pas fini. Repoussé à demain matin.' },
  { time: '18h30', text: 'Départ, frustrée. La file d\'attente n\'a pas bougé.' },
];

const apresItems = [
  { time: '7h30', text: 'L\'agent a traité les 47 factures pendant la nuit. 38 prêtes à valider, 9 cas à arbitrer.' },
  { time: '8h00', text: 'Ouverture du tableau de bord. Validation en 1 clic des 38, arbitrage rapide des 9 exceptions.' },
  { time: '8h45', text: 'Tout est passé dans Sage. Zéro saisie manuelle.' },
  { time: '9h30', text: 'Rapprochement bancaire automatique : 1 seul cas litigieux à traiter, réglé en 10 minutes.' },
  { time: '10h00', text: 'Reporting mensuel : les chiffres se mettent à jour seuls. Elle écrit le commentaire d\'analyse.' },
  { time: '11h00', text: 'Appel avec le DAF pour analyser les écarts vs budget. Travail d\'analyste, pas de saisiseuse.' },
  { time: '14h00', text: 'Projet stratégique : mise en place du nouveau plan analytique pour le prochain trimestre.' },
  { time: '17h30', text: 'Départ sereine. L\'agent continue 24/7 pour la nuit suivante.' },
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
            <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 20, opacity: visible ? 1 : 0, transform: visible ? 'none' : `translateX(${isAvant ? -8 : 8}px)`, transition: `all .5s ${i * .07}s ease` }}>
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
          <H2 style={{ marginBottom: 12 }}>Une journée type au service comptabilité, avant et après.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto' }}>
            Le meilleur moyen de comprendre l'impact d'un agent IA, c'est de regarder une journée concrète.
          </p>
        </div>

        {/* Desktop */}
        <div className="cpt-before-after cpt-ba-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, opacity: visible ? 1 : 0, transition: 'opacity .6s ease' }}>
          <TimelineColumn items={avantItems} isAvant={true} visible={visible} />
          <TimelineColumn items={apresItems} isAvant={false} visible={visible} />
        </div>

        {/* Mobile: tabs */}
        <div className="cpt-ba-mobile" style={{ display: 'none', opacity: visible ? 1 : 0, transition: 'opacity .6s ease' }}>
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

        <div style={{ marginTop: 24, padding: '16px 22px', borderRadius: 14, background: '#fff', border: '1px solid #e4e4e7', fontSize: 14, color: '#52525b', lineHeight: 1.7, textAlign: 'center' }}>
          Le métier change : la comptable n'est plus saisiseuse, elle redevient analyste. C'est ce que ses études lui ont appris à faire.
        </div>
      </div>
    </section>
  );
}

// ── 4 Agents ──────────────────────────────────────────────────
const agents = [
  {
    n: '01', title: 'Agent factures fournisseurs', badge: '3 000 factures/mois · 12h au lieu de 80h', color: AC,
    who: 'DAF et services comptabilité PME avec un volume mensuel de factures fournisseurs à saisir manuellement.',
    what: 'Reçoit les factures par mail (avec ou sans pièce jointe), extrait les données (TTC, TVA, fournisseur, échéance, IBAN, numéro de bon de commande), rapproche avec le bon de commande dans l\'ERP, soumet l\'écriture à validation en 1 clic, puis la passe dans Sage, Cegid, Pennylane, QuickBooks ou EBP.',
    tools: ['Sage', 'Cegid', 'Pennylane', 'QuickBooks', 'EBP', 'ERP interne'],
    kpis: [{ label: 'Traitement autonome', value: '80 %' }, { label: 'Temps gagné', value: '80h → 12h/mois' }, { label: 'Mise en service', value: '2 semaines' }],
  },
  {
    n: '02', title: 'Agent rapprochement bancaire', badge: '2 jours → 2 heures', color: '#7c3aed',
    who: 'Équipes comptables qui font le pointage manuel relevé bancaire vs écritures chaque fin de mois.',
    what: 'Récupère le relevé OFX/CSV, croise avec les écritures comptables, lettre automatiquement les correspondances évidentes, isole les anomalies pour arbitrage humain. Apprend des décisions passées pour s\'améliorer à chaque cycle.',
    tools: ['Relevés OFX / CSV', 'Sage', 'Cegid', 'Pennylane', 'Banques partenaires'],
    kpis: [{ label: 'Lettrage automatique', value: '85 %' }, { label: 'Durée', value: '2 jours → 2h' }, { label: 'Mise en service', value: '1 à 2 semaines' }],
  },
  {
    n: '03', title: 'Agent reporting financier', badge: 'Reporting lundi 7h · sans retard', color: '#0891b2',
    who: 'Dirigeants et DAF qui attendent chaque semaine un reporting consolidé qui arrive en retard ou incomplet.',
    what: 'Consolide les données comptables (Sage, Cegid, Pennylane), bancaires, et commerciales (HubSpot, Shopify, Stripe) pour produire un reporting hebdo ou mensuel automatisé, avec commentaires générés sur les écarts vs budget. Livré par mail ou Slack à l\'heure choisie.',
    tools: ['Sage', 'Pennylane', 'HubSpot', 'Shopify', 'Stripe', 'Slack', 'Mail'],
    kpis: [{ label: 'Ponctualité', value: '100 %' }, { label: 'Sources consolidées', value: 'Jusqu\'à 8' }, { label: 'Mise en service', value: '2 à 3 semaines' }],
  },
  {
    n: '04', title: 'Agent assistant DAF', badge: '70 % des questions financières sans DAF', color: GREEN,
    who: 'Dirigeants et managers qui sollicitent le DAF pour des questions financières basiques (dépenses, impayés, budget restant).',
    what: 'Connecté aux outils comptables et bancaires, répond aux questions en langage naturel ("combien on a dépensé en marketing ce mois ?", "quels clients ont des impayés de plus de 60 jours ?"), génère des extracts à la demande, alerte sur des seuils définis.',
    tools: ['Sage', 'Cegid', 'Pennylane', 'Banques', 'Slack', 'Interface web'],
    kpis: [{ label: 'Questions résolues', value: '70 % sans DAF' }, { label: 'Langage naturel', value: 'Oui' }, { label: 'Mise en service', value: '3 à 4 semaines' }],
  },
];

function AgentsListing() {
  const [ref, visible] = useInView(0.06);
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section ref={ref} id="agents" style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <H2 style={{ marginBottom: 12 }}>4 agents IA déjà déployés en finance et comptabilité chez nos clients.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 560, margin: '0 auto' }}>
            Sur les 30 agents du catalogue Althoce, 4 sont spécifiquement conçus pour la finance et la comptabilité PME (saisie, rapprochement, reporting, assistance DAF). Voici ce qu'ils font et leur impact.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                    <span className="cpt-agent-badge" style={{ padding: '4px 10px', borderRadius: 9999, background: `${ag.color}12`, border: `1px solid ${ag.color}25`, fontSize: 11, fontWeight: 800, color: ag.color, whiteSpace: 'nowrap' }}>{ag.badge}</span>
                    <span style={{ fontSize: 18, color: '#a1a1aa', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .2s', display: 'block', lineHeight: 1 }}>+</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="cpt-agent-expanded" style={{ padding: '0 24px 28px 80px' }}>
                    <div className="cpt-kpi-strip" style={{ display: 'grid', gridTemplateColumns: `repeat(${ag.kpis.length}, 1fr)`, gap: 8, marginBottom: 20, padding: '14px 0', borderBottom: '1px solid #f4f4f5' }}>
                      {ag.kpis.map((k, j) => (
                        <div key={j} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 4 }}>{k.label}</div>
                          <div style={{ fontSize: 14, fontWeight: 800, color: ag.color }}>{k.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="cpt-agents-detail" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 16 }}>
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
                      <span style={{ fontSize: 14, color: '#a1a1aa', fontWeight: 500 }}>Tarif : sur devis selon volume et scope</span>
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
          Voir{' '}
          <a href="/services/agents-ia/" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>l'ensemble des agents Althoce</a>{' '}
          pour une automatisation plus large (RH, commercial, operations). Les 30 minutes offertes avec un expert permettent de cadrer la combinaison optimale pour votre contexte finance et comptabilité.
        </div>
      </div>
    </section>
  );
}

// ── Cas client ────────────────────────────────────────────────
const kpis = [
  { label: 'Documents traités / mois', avant: 'Manuel', apres: '4 200', unit: 'En autonomie' },
  { label: 'Temps de saisie équipe', avant: '70 %', apres: '10 %', unit: '−60 %' },
  { label: 'Capacité clients', avant: 'Plafond atteint', apres: '×2', unit: '+100 %' },
  { label: 'Départs d\'équipe', avant: 'Risque élevé', apres: '0', unit: 'Rétention' },
];

function CasClient() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ background: '#09090b', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px)', backgroundSize: '52px 52px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: `radial-gradient(ellipse,${AMBER}07 0%,transparent 60%)`, filter: 'blur(80px)', pointerEvents: 'none' }} />

      {/* Editorial block */}
      <div style={{ padding: '88px 24px 64px', maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Context strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44, flexWrap: 'wrap', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: 'all .5s ease' }}>
          {['Cabinet comptable', 'Lyon · 2025', '12 collaborateurs', '320 clients TPE/PME'].map((tag) => (
            <span key={tag} style={{ padding: '4px 12px', borderRadius: 9999, border: '1px solid #222', fontSize: 11, fontWeight: 600, color: '#8a8a95', background: '#111' }}>{tag}</span>
          ))}
          <div style={{ height: 1, flex: 1, minWidth: 40, background: 'linear-gradient(to right,#222,transparent)' }} aria-hidden="true" />
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s .12s ease' }}>
          {/* Big KPI */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 'clamp(64px,10vw,96px)', fontWeight: 900, color: '#fff', letterSpacing: '-.05em', lineHeight: 1, marginBottom: 8 }}>×2</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#a1a1aa' }}>clients gérés à effectif constant</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
              {['80 % saisie absorbée', '−60 % temps production', '0 départ d\'équipe'].map((t) => (
                <span key={t} style={{ padding: '4px 12px', borderRadius: 9999, background: '#16a34a10', border: '1px solid #16a34a25', fontSize: 13, fontWeight: 700, color: GREEN }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Citation */}
          <div style={{ position: 'relative', paddingLeft: 20, borderLeft: `3px solid ${AMBER}60`, marginBottom: 0 }}>
            <div aria-hidden="true" style={{ fontSize: 56, lineHeight: 0.65, color: AMBER, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.4, marginBottom: 16 }}>"</div>
            <blockquote style={{ fontSize: 'clamp(16px,2vw,20px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 1.65, margin: '0 0 28px', fontStyle: 'normal' }}>
              On pensait que l'IA allait remplacer mes équipes. En réalité, elle a remplacé la partie de leur job qu'elles détestaient. Elles ont retrouvé du sens, on a doublé notre activité, et personne n'a démissionné.
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${AMBER}15`, border: `1.5px solid ${AMBER}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="8" r="4" stroke={AMBER} strokeWidth="1.5"/>
                  <path d="M4 18C4 15 6.7 13 10 13S16 15 16 18" stroke={AMBER} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#e4e4e7' }}>Directrice associée</div>
                <div style={{ fontSize: 13, color: '#3f3f46', marginTop: 2 }}>Cabinet d'expertise comptable · Lyon · 12 collaborateurs</div>
              </div>
              <a href="/cas-clients/cabinet-comptable-lyon/" style={{ fontSize: 13, fontWeight: 700, color: AMBER, textDecoration: 'none', padding: '6px 14px', borderRadius: 9999, border: `1px solid ${AMBER}35`, flexShrink: 0, transition: 'all .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${AMBER}15`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
                Lire le cas complet →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* KPI bands */}
      <div style={{ borderTop: '1px solid #1a1a1a', position: 'relative', zIndex: 1 }}>
        <div className="cpt-kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', opacity: visible ? 1 : 0, transition: 'opacity .6s .3s ease' }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < kpis.length - 1 ? '1px solid #1a1a1a' : 'none', textAlign: 'center', position: 'relative' }}>
              <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: `linear-gradient(to right,transparent,${AMBER}55,transparent)` }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 18 }}>{k.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#3f3f46', textDecoration: 'line-through', textDecorationColor: `${RED}90` }}>{k.avant}</span>
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
          Avant la mission Althoce, l'équipe passait 70 % de son temps en saisie : factures, banques, déclarations TVA. La direction refusait de prendre de nouveaux clients par peur de la surcharge. La transformation a été simple : un échange initial de 30 minutes avec un expert Althoce pour identifier les 3 processus à plus haut ROI, un cadrage chiffré sur 2 semaines, puis un déploiement progressif sur 8 semaines.
        </p>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.8, marginBottom: 32 }}>
          Aujourd'hui, l'agent factures et l'agent rapprochement traitent 4 200 documents par mois en autonomie. Les collaborateurs valident, arbitrent, conseillent. Le cabinet a accepté 80 nouveaux clients sur les 4 derniers mois et l'expert-comptable junior recruté gagne 1 mois sur sa montée en compétence parce qu'il commence directement par la valeur ajoutée.
        </p>
        <a href="/cas-clients/cabinet-comptable-lyon/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 700, color: AMBER, textDecoration: 'none', padding: '11px 22px', border: `1px solid ${AMBER}40`, borderRadius: 9999, transition: 'all .15s' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${AMBER}15`; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
          Lire l'étude de cas complète →
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
        <div className="ticker-slow" role="marquee" aria-label="Secteurs couverts par les agents IA Althoce">
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit des flux comptables</div>
      {['Saisie factures fournisseurs', 'Rapprochement bancaire', 'Reporting mensuel', 'Déclarations TVA'].map((t, i) => (
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
      {[{ l: 'Agent factures', w: 90 }, { l: 'Agent rapprochement', w: 75 }, { l: 'Agent reporting', w: 60 }, { l: 'Agent assistant DAF', w: 45 }].map((r, i) => (
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
        {[{ n: 'Sage', c: '#00a651' }, { n: 'Pennylane', c: '#3d5af1' }, { n: 'QuickBooks', c: '#2CA01C' }, { n: 'Cegid', c: '#e4002b' }, { n: 'EBP', c: '#ff6600' }, { n: 'Banques OFX', c: AC }].map((t, i) => (
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
        <span style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Agent factures actif</span>
        <span style={{ padding: '2px 8px', borderRadius: 9999, background: '#22c55e15', border: '1px solid #22c55e30', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>24/7</span>
      </div>
      {['Factures traitées cette nuit', 'Taux de traitement auto', 'Écritures en attente validation', 'Erreurs détectées'].map((l, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `countUp .5s ${i * .12}s ease both` : 'none' }}>
          <span style={{ fontSize: 13, color: '#52525b' }}>{l}</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: ['#22c55e', AC, AMBER, GREEN][i] }}>{['38', '80 %', '9', '0'][i]}</span>
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

// ── Security + conformité comptable ──────────────────────────
function Security() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#09090b', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="v2-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
            <H2 style={{ color: '#fff', marginBottom: 20 }}>
              Vos données comptables restent vos données.<br /><span style={{ color: AC }}>En Europe, sous votre contrôle.</span>
            </H2>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 24 }}>
              Vos factures, relevés bancaires et écritures ne quittent jamais votre infrastructure sans votre accord. Hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout.
            </p>
            {/* Conformité comptable callout */}
            <div style={{ padding: '16px 20px', borderRadius: 14, background: '#111', border: '1px solid #222', marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: AMBER, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>Conformité comptable</div>
              <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65, margin: 0 }}>
                Nos agents respectent par défaut le PCG (Plan Comptable Général), le format FEC pour les contrôles fiscaux, et la traçabilité Bofip. Le DAF garde toujours la validation finale sur les écritures sensibles. Documentation de conformité livrée à la mise en production.
              </p>
            </div>
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
const faqComptabilite: FAQv2Item[] = [
  {
    q: 'Mon agent comptable peut-il vraiment se connecter à Sage, Cegid, Pennylane, QuickBooks, EBP ?',
    a: 'Oui, sur tous ces logiciels. Nous utilisons soit les API officielles quand elles existent (Pennylane, QuickBooks, certaines versions Sage cloud), soit des connecteurs RPA quand l\'éditeur ne propose pas d\'API (Sage on-premise, Cegid). Dans tous les cas, les écritures sont passées avec exactement la même rigueur qu\'une saisie humaine, et la validation reste sous votre contrôle.',
  },
  {
    q: 'Que se passe-t-il si l\'agent fait une erreur sur une écriture ?',
    a: 'Trois couches de sécurité : validation humaine obligatoire avant passage en compta sur les écritures sensibles (montants supérieurs à un seuil, fournisseurs nouveaux, comptes de trésorerie), filtres de cohérence (TVA, totaux, IBAN), journalisation exhaustive (chaque action est tracée). Taux d\'erreur observé chez nos clients : inférieur à 0,5 % sur les écritures automatisées. À titre de comparaison, le taux d\'erreur humain en saisie manuelle est typiquement de 1 à 3 %.',
  },
  {
    q: 'Quel investissement pour un agent IA comptable et quel ROI attendre ?',
    a: 'Tarification entièrement sur devis selon votre contexte : volume mensuel de factures, nombre d\'outils branchés, périmètre fonctionnel (factures fournisseurs seul, rapprochement bancaire, reporting, déclarations TVA), exigences de souveraineté. Le ROI typique se mesure en moins de 6 mois sur les cabinets et services compta saturés, avec deux indicateurs concrets : capacité de production doublée sans recruter, et redéploiement de l\'équipe sur le conseil à valeur ajoutée. Tout démarre par 30 minutes offertes avec un expert.',
  },
  {
    q: 'En combien de temps l\'agent est-il opérationnel ?',
    a: '1 à 2 semaines pour un agent simple après validation du cadrage. 4 à 6 semaines pour un système comptable complet. Les délais sont tenus parce que nous ne démarrons jamais sans cadrage chiffré, validé, signé.',
  },
  {
    q: 'Mon expert-comptable ou mon DAF reste-t-il indispensable ?',
    a: 'Plus que jamais. L\'agent absorbe la saisie, votre expert ou DAF se recentre sur l\'analyse, le conseil, les arbitrages, la fiscalité. Aucun de nos clients n\'a remplacé son DAF par un agent IA. Plusieurs ont libéré leur DAF de la saisie pour qu\'il monte en compétence sur le pilotage.',
  },
  {
    q: 'Mes données comptables sont-elles envoyées à OpenAI ou Anthropic ?',
    a: 'Uniquement si vous l\'acceptez, et avec anonymisation préalable des données identifiantes (raisons sociales clients, IBAN, montants). Pour les clients qui exigent la souveraineté totale (cabinets traitant des entreprises soumises au secret professionnel), nous utilisons Mistral hébergé en France ou des modèles open-source auto-hébergés.',
  },
  {
    q: 'L\'agent peut-il préparer une déclaration fiscale (TVA, IS, liasse) ?',
    a: 'L\'agent prépare un brouillon (pré-remplissage à partir des écritures), votre expert ou DAF valide, signe, télétransmet. Nous ne signons jamais une déclaration à la place de l\'humain : ce n\'est ni légal ni souhaitable. Le pré-remplissage automatique fait économiser 50 à 70 % du temps de préparation.',
  },
  {
    q: 'À qui appartient l\'agent à la fin de la mission ?',
    a: 'À vous, à 100 %. Code, prompts, workflows, accès aux LLM, journaux : tout vous est transféré. Vous pouvez reprendre la main en interne, changer de prestataire, ou continuer avec nous en support. C\'est votre choix, sans abonnement obligatoire.',
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Vos questions, nos réponses directes.</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Huit questions qui reviennent systématiquement lors des premiers échanges sur l'automatisation comptable.</p>
        </div>
        <FAQAccordion items={faqComptabilite} />
      </div>
    </section>
  );
}

// ── Responsive CSS ────────────────────────────────────────────
const globalStyles = `
  .cpt-ba-mobile { display: none; }
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
    .cpt-hero-grid { grid-template-columns: 1fr !important; }
    .cpt-mockup-col { display: none !important; }
    .cpt-before-after { grid-template-columns: 1fr !important; }
    .cpt-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .cpt-kpi-grid > div { border-right: none !important; border-bottom: 1px solid #1a1a1a; }
    .cpt-kpi-grid > div:last-child, .cpt-kpi-grid > div:nth-last-child(2) { border-bottom: none !important; }
    .v2-grid4 { grid-template-columns: repeat(2,1fr) !important; }
    .v2-grid-hero { grid-template-columns: 1fr !important; }
    .v2-grid2 { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 640px) {
    .cpt-ba-desktop { display: none !important; }
    .cpt-ba-mobile { display: block !important; }
    .cpt-agent-badge { display: none !important; }
    .cpt-agent-expanded { padding-left: 24px !important; }
    .cpt-agents-detail { grid-template-columns: 1fr !important; }
    .cpt-kpi-strip { grid-template-columns: 1fr 1fr !important; }
    .cpt-kpi-grid { grid-template-columns: 1fr 1fr !important; }
    .v2-grid4 { grid-template-columns: 1fr !important; }
    .cpt-pills { flex-wrap: nowrap !important; width: max-content; animation: pillsScroll 10s linear infinite; }
  }
`;

// ── Page ──────────────────────────────────────────────────────
export default function AgentIAFinancePageClient() {
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
