'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps } from '@/lib/data';

const AC     = '#2563eb';
const INDIGO = '#4338ca';
const RED    = '#ef4444';
const AMBER  = '#d97706';
const GREEN  = '#16a34a';

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
      <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 220, background: `radial-gradient(ellipse,${INDIGO}18 0%,transparent 65%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, opacity: count ? 1 : 0, transform: count ? 'none' : 'translateY(16px)', transition: 'all .6s ease' }}>
        <div style={{ fontSize: 'clamp(72px,10vw,120px)', fontWeight: 900, color: INDIGO, letterSpacing: '-.06em', lineHeight: 0.9, marginBottom: 16 }}>0 %</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#a1a1aa', lineHeight: 1.65, maxWidth: 240 }}>appels perdus depuis 4 mois</div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#3f3f46', fontWeight: 500 }}>contre 18 % avant déploiement</div>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 20, zIndex: 1 }}>
        {[{ v: '+130 %', l: 'RDV qualifiés' }, { v: '12h', l: 'libérées / semaine' }, { v: '0', l: 'heure sup' }].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: INDIGO }}>{s.v}</div>
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
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle,${INDIGO}0a 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="cc4-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a><span>›</span>
              <a href="/cas-clients/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Cas clients</a><span>›</span>
              <span style={{ color: '#09090b' }}>Cabinet d'avocats lyonnais</span>
            </nav>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Téléphonique', 'Cabinet d\'avocats', '18 collab.', 'Droit des affaires', 'Lyon · 2025-2026'].map((t) => (
                <span key={t} style={{ padding: '3px 10px', borderRadius: 9999, background: '#f4f4f5', fontSize: 11, fontWeight: 700, color: '#8a8a95' }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontSize: 'clamp(26px,3.8vw,48px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              0 appel raté et +130 % de RDV qualifiés pour un cabinet d'avocats lyonnais grâce à un agent IA téléphonique.
            </h1>
            <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
              18 collaborateurs, droit des affaires, une assistante de direction qui jonglait entre 80 appels par semaine, les plannings et la facturation. Un agent IA téléphonique en voix naturelle française déployé en 3 semaines. Voici comment le cabinet a éliminé tous les appels perdus sans recruter.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s,box-shadow .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,0,0,.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}>
                Discuter de votre projet →
              </a>
              <a href="#resultats" style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = INDIGO; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Voir les résultats ↓
              </a>
            </div>
          </div>
          <div className="cc4-stat-col"><HeroStat /></div>
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
        <H2 style={{ marginBottom: 28 }}>Le cabinet : 18 personnes, droit des affaires, accueil téléphonique sous tension</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 24 }}>
          Le cabinet d'avocats lyonnais (nom anonymisé) est un cabinet de droit des affaires implanté dans le 2ᵉ arrondissement depuis 2009. <strong style={{ color: '#09090b' }}>18 collaborateurs</strong> : 3 associés, 6 avocats collaborateurs, 4 juristes seniors, 2 stagiaires, 2 assistants juridiques, 1 assistante de direction. Spécialités : droit des sociétés, fusions-acquisitions, droit fiscal des entreprises, contentieux commercial. Clientèle : <strong style={{ color: '#09090b' }}>280 sociétés clientes actives</strong>, principalement des PME et ETI régionales en Rhône-Alpes-Auvergne.
        </p>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.8, marginBottom: 32 }}>
          Le cabinet recevait environ <strong style={{ color: '#09090b' }}>80 appels par semaine</strong>. La répartition était plus problématique que le volume : 18 % des appels étaient perdus, principalement aux heures de pointe entre 10h et 12h et entre 14h et 17h. L'assistante de direction unique jonglait entre la réception téléphonique, la gestion des plannings des avocats, la facturation client et l'accueil physique. Recruter un second poste d'accueil était difficile à justifier économiquement face à une charge fluctuante.
        </p>
        <div style={{ padding: '28px 32px', borderRadius: 20, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `4px solid ${RED}` }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Le coût invisible des appels perdus</div>
          <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75 }}>
            La direction estimait qu'<strong style={{ color: '#09090b' }}>1 prospect sur 5 ne donnait pas suite après un appel manqué</strong>. En croisant ce ratio avec les honoraires moyens d'un nouveau dossier, le manque à gagner estimé atteignait <strong style={{ color: '#09090b' }}>80 k€ d'honoraires annuels</strong>. Un chiffre qui a convaincu les associés d'investir dans une solution, là où le recrutement d'un poste d'accueil dédié semblait disproportionné.
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
        <H2 style={{ marginBottom: 40 }}>La situation avant : 18 % d'appels perdus, assistante sous tension permanente</H2>
        <div className="cc4-avant-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${RED}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-16px)', transition: 'all .6s ease' }}>
            <div style={{ padding: '16px 22px', background: `${RED}08`, borderBottom: `1px solid ${RED}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: RED }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: RED, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté standard téléphonique</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                '80 appels par semaine en moyenne',
                'Pics 10h-12h et 14h-17h : 60 % du volume sur 30 % du temps',
                '18 % des appels perdus (sonneries sans réponse)',
                'Délai de rappel messagerie : 24 à 48 heures',
                'Prise de RDV : 40 % des appels · Info générale : 25 %',
                'Statut dossier : 20 % · Urgences : 10 % · Divers : 5 %',
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < arr.length - 1 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${RED}12`, border: `1.5px solid ${RED}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: RED }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 18, background: '#fff', border: `1px solid ${AMBER}22`, overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(16px)', transition: 'all .6s .1s ease' }}>
            <div style={{ padding: '16px 22px', background: `${AMBER}08`, borderBottom: `1px solid ${AMBER}15`, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: AMBER }} />
              <span style={{ fontSize: 13, fontWeight: 800, color: AMBER, textTransform: 'uppercase', letterSpacing: '.08em' }}>Côté assistante de direction</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {[
                'Charge cumulée : réception + plannings + facturation + accueil physique',
                'Heures sup régulières : 6 à 10 heures par semaine',
                'Plaintes informelles à la direction sur la pression',
                '1 prospect sur 5 perdu après appel manqué',
                'Manque à gagner estimé : 80 k€ d\'honoraires annuels',
                'Recrutement dédié difficile à justifier économiquement',
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 22px', borderBottom: i < arr.length - 1 ? '1px solid #f4f4f5' : 'none' }}>
                  <div style={{ flexShrink: 0, width: 18, height: 18, borderRadius: '50%', background: `${AMBER}12`, border: `1.5px solid ${AMBER}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: AMBER }}>✕</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.65, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden' }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1L1 3.5v3.5c0 3.1 2.1 5.8 4.9 6.3C8.9 12.8 11 10.1 11 7V3.5L7 1z" stroke={INDIGO} strokeWidth="1.2" strokeLinejoin="round"/><path d="M4.5 7l2 2 3-3" stroke={INDIGO} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>Exigence déontologique — secret professionnel</p>
          </div>
          <div style={{ padding: '24px 28px' }}>
            <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
              Avant tout déploiement, les associés posent une exigence non négociable : l'agent ne doit jamais avoir accès au contenu des dossiers clients. L'intégration Lexis Lawyer reste en <strong style={{ color: '#e4e4e7' }}>lecture seule sur les statuts de dossier</strong>, sans accès aux pièces ou aux actes. La réponse Althoce : <strong style={{ color: INDIGO }}>Mistral hébergé en France</strong>, aucune donnée sensible transmise à un LLM externe, transparence totale en début d'appel sur la nature de l'interlocuteur IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Solution ──────────────────────────────────────────────────
const timeline = [
  {
    week: 'Sem. 0', title: 'Cadrage initial', color: AC,
    items: ['Cartographie des 5 catégories d\'appels typiques', 'Validation stack : Ringover + Outlook + Lexis Lawyer', 'Choix LLM : Mistral hébergé France (secret professionnel)', 'Choix voix : ElevenLabs française féminine — prénommée Camille', 'Devis ferme sous 5 jours'],
  },
  {
    week: 'Sem. 1', title: 'Build de l\'agent', color: INDIGO,
    items: ['Développement agent avec accès Ringover (SIP trunk)', 'Scripts conversationnels pour les 5 catégories d\'appels', 'Intégration Outlook pour prise de RDV', 'Intégration Lexis Lawyer en lecture seule (statut dossier)', 'Règles d\'escalade : urgence judiciaire, demande sensible, client demandant son avocat', 'Mention transparence : "Bonjour, je suis Camille, l\'assistante IA du cabinet"'],
  },
  {
    week: 'Sem. 2', title: 'POC en mode ombre', color: INDIGO,
    items: ['Agent écoute les appels sans déclencher d\'action', 'Propose en parallèle ce qu\'il aurait répondu', 'Revue quotidienne 30 min avec l\'assistante de direction', 'Calibrage final scripts et règles d\'escalade'],
  },
  {
    week: 'Sem. 3', title: 'Mise en production', color: GREEN,
    items: ['Bascule complète en réception téléphonique', 'Assistante humaine en backup sur les transferts (urgences, cas complexes)', 'Reporting hebdo automatique aux 3 associés', 'Formation de l\'assistante au pilotage (ajustements scripts, exceptions)'],
  },
];

function ArchitectureSVG() {
  const routes = [
    { label: 'RDV demandé', action: 'Agenda Outlook + confirmation mail', color: INDIGO },
    { label: 'Info générale', action: 'Réponse + mail récapitulatif', color: AC },
    { label: 'Statut dossier', action: 'Lexis Lawyer + transfert avocat si nécessaire', color: AMBER },
    { label: 'Urgence / cas complexe', action: 'Transfert immédiat humain avec contexte pré-passé', color: RED },
  ];
  return (
    <div style={{ borderRadius: 16, background: '#09090b', border: '1px solid #1a1a1a', padding: '24px 20px', overflow: 'hidden' }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 20 }}>Architecture déployée · Agent téléphonique Camille</div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8a8a95', marginBottom: 10 }}>Flux entrant principal</div>
        <div className="cc4-arch-flow-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {[
            { label: 'Appels entrants Ringover', color: '#3f3f46' },
            { label: 'Agent IA voix Camille (Mistral FR + ElevenLabs)', color: INDIGO },
            { label: 'Identification objet en conversation naturelle', color: INDIGO },
            { label: 'Routage intelligent', color: AC },
          ].map((node, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ padding: '6px 12px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 10, fontWeight: 700, color: node.color, whiteSpace: 'nowrap' }}>{node.label}</div>
              {i < arr.length - 1 && <span style={{ color: '#2a2a2a', fontSize: 15, fontWeight: 900 }}>→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="cc4-arch-flow-mobile">
          {[
            { label: 'Appels entrants Ringover', color: '#3f3f46' },
            { label: 'Agent IA voix Camille (Mistral FR)', color: INDIGO },
            { label: 'Identification objet en conversation', color: INDIGO },
            { label: 'Routage intelligent', color: AC },
          ].map((node, i, arr) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ padding: '7px 14px', borderRadius: 8, background: '#111', border: `1px solid ${node.color}30`, fontSize: 13, fontWeight: 700, color: node.color }}>{node.label}</div>
              {i < arr.length - 1 && <div style={{ width: 2, height: 10, background: '#2a2a2a', marginLeft: 20 }} />}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#8a8a95', marginBottom: 10 }}>4 routes selon l'objet de l'appel</div>
        <div className="cc4-routes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
          {routes.map((r, i) => (
            <div key={i} style={{ padding: '12px 14px', borderRadius: 10, background: '#111', border: `1px solid ${r.color}20` }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: r.color, marginBottom: 6 }}>{r.label}</div>
              <div style={{ fontSize: 10, color: '#8a8a95', fontWeight: 500, lineHeight: 1.65 }}>{r.action}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '10px 14px', borderRadius: 8, background: '#0a0a0a', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: INDIGO, flexShrink: 0 }} />
        <span style={{ fontSize: 11, color: '#3f3f46', fontWeight: 600 }}>Mistral hébergé France · Ringover SIP trunk · Outlook partagé · Lexis Lawyer lecture seule · Transparence IA obligatoire en début d'appel</span>
      </div>
    </div>
  );
}

function LaSolution() {
  const [ref, visible] = useInView(0.05);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <H2 style={{ marginBottom: 12 }}>Agent IA téléphonique en voix naturelle française déployé en 3 semaines sur Ringover</H2>
        <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.75, marginBottom: 48, maxWidth: 700 }}>
          Le cabinet utilisait Ringover comme solution VoIP. Nous avons déployé un agent IA qui prend les appels entrants en voix naturelle française (voix prénommée Camille), identifie l'objet de chaque appel, résout en autonomie les demandes standard, et transfère à l'assistante ou à l'avocat concerné avec contexte vocal pré-passé quand le sujet le nécessite.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
          {timeline.map((step, i) => (
            <div key={i} className="cc4-tl-row" style={{ display: 'flex', gap: 0, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-10px)', transition: `all .5s ${i * .08}s ease` }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 100 }}>
                <div style={{ padding: '6px 10px', borderRadius: 9999, background: `${step.color}10`, border: `2px solid ${step.color}40`, display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: 10, fontWeight: 900, color: step.color }}>{step.week}</span>
                </div>
                {i < timeline.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 24, background: `linear-gradient(to bottom,${step.color}30,#e4e4e7)` }} />}
              </div>
              <div style={{ flex: 1, marginBottom: i < timeline.length - 1 ? 16 : 0, paddingBottom: i < timeline.length - 1 ? 8 : 0 }}>
                <div style={{ borderRadius: 14, background: '#fafafa', border: '1px solid #e4e4e7', borderLeft: `3px solid ${step.color}`, padding: '18px 22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: '#09090b' }}>{step.title}</span>
                    <span className="cc4-tl-week-inline" style={{ padding: '2px 8px', borderRadius: 9999, background: `${step.color}10`, border: `1px solid ${step.color}25`, fontSize: 10, fontWeight: 800, color: step.color, flexShrink: 0 }}>{step.week}</span>
                  </div>
                  <div className="cc4-tl-items">
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
  { delta: '0 %', label: 'appels perdus (vs 18 % avant)', avant: '18 % perdus', apres: '0 % · disponible 24/7', color: AC, size: 'hero' },
  { delta: '+130 %', label: 'prises de RDV qualifiées / semaine', avant: '6 RDV / semaine', apres: '14 RDV / semaine', color: AC, size: 'normal' },
  { delta: '12h', label: 'libérées pour l\'assistante / semaine', avant: '6-10h sup / semaine', apres: '0 heure sup', color: AC, size: 'normal' },
  { delta: '+75 %', label: 'volume appels traités / semaine', avant: '80 appels', apres: '140 appels', color: AC, size: 'normal' },
  { delta: '0', label: 'délai de rappel messagerie', avant: '24 à 48 heures', apres: 'Plus de messagerie : réponse directe', color: AC, size: 'small' },
  { delta: '+2', label: 'dossiers grands clients identifiés (4 mois)', avant: 'prospects perdus', apres: 'convertis en dossiers', color: AC, size: 'small' },
];

function KPICard({ k, i, visible }: { k: typeof kpiCards[0]; i: number; visible: boolean }) {
  const isHero = k.size === 'hero';
  const isSmall = k.size === 'small';
  return (
    <div className={isHero ? 'cc4-kpi-card cc4-kpi-hero' : 'cc4-kpi-card'}
      style={{ borderRadius: 18, background: isHero ? 'linear-gradient(135deg,#080c18 0%,#0d1220 100%)' : '#111', border: `1px solid ${k.color}${isHero ? '40' : '20'}`, padding: isHero ? '32px 28px' : '22px 20px', display: 'flex', flexDirection: 'column', gap: isHero ? 14 : 10, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .55s ${i * .08}s ease`, position: 'relative', overflow: 'hidden' }}>
      {isHero && <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '-10%', width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle,${AC}18 0%,transparent 65%)`, filter: 'blur(30px)', pointerEvents: 'none' }} />}
      <div style={{ fontSize: isHero ? 'clamp(48px,6vw,72px)' : isSmall ? 28 : 38, fontWeight: 900, color: k.color, letterSpacing: '-.04em', lineHeight: 0.95, position: 'relative' }}>{k.delta}</div>
      <div style={{ fontSize: isHero ? 14 : 12, fontWeight: 700, color: '#8a8a95', lineHeight: 1.4, textTransform: isHero ? 'none' : 'uppercase', letterSpacing: isHero ? 'normal' : '.06em' }}>{k.label}</div>
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
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2, background: `linear-gradient(to right,transparent,${INDIGO},transparent)` }} />
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 14 }}>Mesure 4 mois après mise en production</div>
          <H2 style={{ color: '#fff' }}>Ce qui a changé concrètement</H2>
        </div>
        <div className="cc4-kpi-bento">
          {kpiCards.map((k, i) => <KPICard key={i} k={k} i={i} visible={visible} />)}
        </div>
        <div style={{ marginTop: 32, padding: '24px 28px', borderRadius: 18, background: `${AC}0c`, border: `1px solid ${AC}22` }}>
          <p style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.75, margin: 0 }}>
            Le cabinet a éliminé tous les appels perdus en 4 mois. L'assistante de direction est libérée de 12 heures par semaine, qu'elle redéploie sur la facturation et l'accueil physique. Les associés ont reçu plusieurs retours positifs de clients sur la qualité d'accueil : <strong style={{ color: '#f0f0f0' }}>réponse immédiate, professionnalisme, courtoisie de la voix synthétique</strong>. Le cabinet a identifié 2 nouveaux dossiers grands clients qui auraient probablement été perdus avant déploiement.
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
        <div style={{ fontSize: 13, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 32, textAlign: 'center' }}>Le mot de l'associé gérant</div>
        <div style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(28px)', transition: 'all .7s ease' }}>
          <div aria-hidden="true" style={{ fontSize: 120, lineHeight: 0.6, color: INDIGO, fontFamily: 'Georgia, serif', fontWeight: 900, opacity: 0.1, marginBottom: 24, display: 'block', textAlign: 'center' }}>"</div>
          <blockquote style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 700, color: '#09090b', lineHeight: 1.65, margin: '0 0 40px', fontStyle: 'normal', textAlign: 'center' }}>
            Avant, on perdait des appels. Notre assistante prenait les appels entre deux dossiers urgents, et on savait qu'on ratait des prospects. On a déployé l'agent IA téléphonique en 3 semaines. Aujourd'hui, 70 % des appels sont résolus par l'IA, 30 % nous arrivent avec un contexte <span style={{ color: INDIGO }}>pré-qualifié</span>. On a doublé nos prises de RDV, on n'a embauché personne, et l'assistante est enfin libérée pour les tâches qui demandent vraiment son expertise.
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${INDIGO}15`, border: `1.5px solid ${INDIGO}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="9" r="4.5" stroke={INDIGO} strokeWidth="1.5"/>
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke={INDIGO} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b' }}>Associé gérant, cabinet d'avocats lyonnais</div>
              <div style={{ fontSize: 13, color: '#8a8a95', marginTop: 2 }}>18 collaborateurs · Droit des affaires · 4 mois après mise en production</div>
            </div>
            <div style={{ padding: '6px 16px', borderRadius: 9999, background: `${INDIGO}10`, border: `1px solid ${INDIGO}30`, fontSize: 13, fontWeight: 800, color: INDIGO }}>0 appel perdu</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Apprentissages ────────────────────────────────────────────
function IconCheck() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke={GREEN} strokeWidth="1.5"/><path d="M6 10l3 3 5-5" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconWrench() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke={AMBER} strokeWidth="1.5"/><path d="M13 7a3 3 0 01-4 4L6 14" stroke={AMBER} strokeWidth="1.6" strokeLinecap="round"/><circle cx="6.5" cy="13.5" r="1" fill={AMBER}/></svg>;
}
function IconWarning() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3L18 16H2L10 3z" stroke={RED} strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 9v3" stroke={RED} strokeWidth="1.8" strokeLinecap="round"/><circle cx="10" cy="14" r="0.8" fill={RED}/></svg>;
}

const lessons = [
  {
    num: '01', Icon: IconCheck, tag: 'Facteurs de succès', title: 'Ce qui a très bien marché', color: GREEN,
    items: [
      { bold: 'Le mode "ombre" pendant 1 semaine avant la bascule.', text: ' L\'agent écoute, propose, ne déclenche pas d\'action. L\'assistante valide ou corrige. Une semaine d\'observation a évité 3 semaines de réajustements en production.' },
      { bold: 'Le choix d\'une voix prénommée et caractérisée (Camille).', text: ' Plutôt qu\'une voix anonyme robotique, l\'agent a une identité cohérente avec la marque du cabinet. Les clients existants l\'ont rapidement adoptée comme "la nouvelle au standard".' },
    ],
  },
  {
    num: '02', Icon: IconWrench, tag: 'Ajustements', title: "Ce qu'on ajusterait", color: AMBER,
    items: [
      { bold: 'Les scripts pour les urgences judiciaires ont été retravaillés deux fois après le go-live.', text: ' Nous avions sous-estimé la variété des urgences en droit des affaires (garde à vue, perquisition, audience urgente). Sur les futurs déploiements cabinets d\'avocats, nous prévoyons un atelier dédié de 2 heures sur cette catégorie.' },
    ],
  },
  {
    num: '03', Icon: IconWarning, tag: 'Piège fréquent', title: 'Le piège à éviter', color: RED,
    items: [
      { bold: 'Ne pas masquer que l\'interlocuteur est une IA.', text: ' La tentation existe (la voix est très naturelle). Mauvaise idée pour deux raisons : éthique (tromperie qui finira par créer une crise de confiance) et déontologique (les Ordres d\'avocats exigent la transparence sur la nature de l\'interlocuteur). Notre recommandation : transparence systématique en début d\'appel. Les clients préfèrent une bonne réponse rapide à un débat sur la nature de l\'interlocuteur.' },
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
        <div className="cc4-lessons-grid">
          {lessons.map((lesson, i) => (
            <div key={i} style={{ borderRadius: 20, background: '#111', border: `1px solid ${lesson.color}20`, overflow: 'hidden', display: 'flex', flexDirection: 'column', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: `all .55s ${i * .12}s ease`, position: 'relative' }}>
              <div style={{ height: 3, background: `linear-gradient(to right,${lesson.color},${lesson.color}44)` }} />
              <div aria-hidden="true" style={{ position: 'absolute', top: 12, right: 16, fontSize: 72, fontWeight: 900, color: `${lesson.color}08`, letterSpacing: '-.06em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{lesson.num}</div>
              <div style={{ padding: '24px 24px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: `${lesson.color}12`, border: `1px solid ${lesson.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <lesson.Icon />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: lesson.color, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>{lesson.tag}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#f0f0f0', lineHeight: 1.3 }}>{lesson.title}</div>
                </div>
              </div>
              <div style={{ height: 1, background: '#1a1a1a', margin: '0 24px' }} />
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                {lesson.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10 }}>
                    <div style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: lesson.color, marginTop: 8, opacity: 0.7 }} />
                    <p style={{ fontSize: 14, color: '#52525b', lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: '#d4d4d8' }}>{item.bold}</strong>{item.text}{'.'}
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Audit téléphonique</div>
      {['5 catégories d\'appels cartographiées', 'Ringover + Outlook + Lexis Lawyer', 'Déontologie avocat validée', 'Devis ferme 5 jours'].map((t, i) => (
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
      <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Roadmap voix</div>
      {[{ l: 'Agent téléphonique Camille', w: 90 }, { l: 'Intégration Ringover + Outlook', w: 75 }, { l: 'Scripts 5 catégories', w: 60 }, { l: 'Formation assistante', w: 40 }].map((r, i) => (
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
        {[{ n: 'Ringover (VoIP)', c: '#6200ea' }, { n: 'Outlook partagé', c: '#0078d4' }, { n: 'Mistral OVH FR', c: '#6366f1' }, { n: 'ElevenLabs (voix)', c: '#000' }, { n: 'Lexis Lawyer', c: '#c00' }, { n: 'Slack (alertes)', c: '#4a154b' }].map((t, i) => (
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
      {[{ t: 'Appels perdus', v: '0 %' }, { t: 'RDV / semaine', v: '14' }, { t: 'H libérées assistante', v: '12h' }, { t: 'Heures sup', v: '0' }].map((r, i) => (
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
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 500, margin: '0 auto' }}>La même méthode appliquée ici en 3 semaines. Vérifiable sur ce cas concret.</p>
        </div>
        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={i}>
              <div style={{ marginBottom: 24, minHeight: 180, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: `all .6s ${i * .12}s ease` }}>
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

// ── Votre cas similaire ───────────────────────────────────────
function VotreCas() {
  const [ref, visible] = useInView(0.08);
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'all .6s ease' }}>
        <H2 style={{ marginBottom: 12 }}>Vous êtes un cabinet, une profession libérale ou une PME services dont le standard sature ?</H2>
        <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 36 }}>
          Trois questions pour évaluer si ce cas est transposable au vôtre.
        </p>
        <div style={{ borderRadius: 20, background: '#09090b', border: '1px solid #1e1e1e', overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '14px 24px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: INDIGO }} />
            <p style={{ fontSize: 12, fontWeight: 800, color: '#8a8a95', textTransform: 'uppercase', letterSpacing: '.12em', margin: 0 }}>3 critères de transposabilité</p>
          </div>
          {[
            { n: '01', text: 'Vous recevez plus de 40 appels par semaine sur votre standard principal.' },
            { n: '02', text: 'Vous perdez plus de 10 % des appels aux heures de pointe.' },
            { n: '03', text: 'Votre accueil téléphonique repose sur 1 personne unique ou est mutualisé avec d\'autres tâches.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 24px', borderBottom: i < 2 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `${INDIGO}18`, border: `1px solid ${INDIGO}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: INDIGO }}>{item.n}</span>
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
          <a href="/agent-ia/telephonique/" style={{ padding: '14px 28px', borderRadius: 9999, background: '#09090b', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'transform .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
            Découvrir Agent IA téléphonique →
          </a>
          <a href="/contact" style={{ padding: '14px 28px', borderRadius: 9999, border: `1.5px solid ${INDIGO}40`, color: INDIGO, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: `${INDIGO}08`, transition: 'border-color .15s,background .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${INDIGO}80`; (e.currentTarget as HTMLAnchorElement).style.background = `${INDIGO}14`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${INDIGO}40`; (e.currentTarget as HTMLAnchorElement).style.background = `${INDIGO}08`; }}>
            Discuter de votre projet (30 min offertes) →
          </a>
        </div>
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #e4e4e7' }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 16 }}>Voir d'autres cas clients</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/cas-clients/" style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
              <span style={{ fontSize: 12 }}>←</span> Tous les cas clients
            </a>
            {[
              { href: '/cas-clients/cabinet-comptable-lyon/', label: 'Cabinet comptable Lyon' },
              { href: '/cas-clients/saas-b2b-agent-ia-service-client/', label: 'SaaS B2B · Service client' },
            ].map((c) => (
              <a key={c.href} href={c.href} style={{ padding: '9px 18px', borderRadius: 9999, border: '1px solid #e4e4e7', fontSize: 14, fontWeight: 700, color: '#8a8a95', textDecoration: 'none', background: '#fff', display: 'inline-flex', alignItems: 'center', gap: 7, transition: 'border-color .15s,color .15s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#09090b'; el.style.color = '#09090b'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e4e4e7'; el.style.color = '#8a8a95'; }}>
                {c.label} <span style={{ fontSize: 12 }}>→</span>
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

  .cc4-kpi-bento { display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:auto auto auto; gap:14px; }
  .cc4-kpi-hero { grid-column:1/2; grid-row:1/3; }
  .cc4-tl-items { display:grid; grid-template-columns:repeat(2,1fr); gap:6px 20px; }
  .cc4-tl-week-inline { display:inline-flex; }
  .cc4-lessons-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; align-items:start; }
  .cc4-arch-flow-mobile { display:none; }
  .cc4-routes-grid { grid-template-columns:repeat(2,1fr); }

  @media (max-width:860px) {
    .cc4-hero-grid { grid-template-columns:1fr !important; }
    .cc4-stat-col { display:none !important; }
    .cc4-avant-grid { grid-template-columns:1fr !important; }
    .cc4-kpi-bento { grid-template-columns:1fr 1fr !important; grid-template-rows:auto !important; }
    .cc4-kpi-hero { grid-column:1/-1 !important; grid-row:auto !important; }
    .cc4-lessons-grid { grid-template-columns:1fr !important; }
    .v2-grid4 { grid-template-columns:repeat(2,1fr) !important; }
    .cc4-arch-flow-desktop { display:none !important; }
    .cc4-arch-flow-mobile { display:flex; flex-direction:column; gap:0; }
  }
  @media (max-width:680px) {
    .cc4-tl-items { grid-template-columns:1fr !important; }
    .cc4-tl-row > div:first-child { width:52px !important; }
    .cc4-tl-week-inline { display:none !important; }
    .cc4-routes-grid { grid-template-columns:1fr !important; }
  }
  @media (max-width:500px) {
    .cc4-kpi-bento { grid-template-columns:1fr !important; }
    .cc4-kpi-hero { grid-column:1/-1 !important; }
    .v2-grid4 { grid-template-columns:1fr !important; }
  }
`;

export default function CasClientCabinetAvocatsPageClient() {
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
