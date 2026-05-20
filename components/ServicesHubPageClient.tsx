'use client';

import React, { useState, useEffect, useRef } from 'react';
import { steps, securityItems, agentMetiers, agentTags } from '@/lib/data';
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
    <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 800, letterSpacing: '-.03em', color: '#09090b', lineHeight: 1.15, ...sx }}>
      {children}
    </h2>
  );
}

// ── ServicesMapVisual ────────────────────────────────────────
const mapServices = [
  {
    n: '01',
    label: 'Agents IA',
    sub: 'Une tâche répétitive, automatisée de bout en bout',
    href: '/services/agents-ia/',
    color: AC,
    stat: '1 semaine',
  },
  {
    n: '02',
    label: 'Automatisation IA',
    sub: 'Un processus métier complet, repensé avec l\'IA',
    href: '/services/automatisation-ia/',
    color: '#7c3aed',
    stat: '4 à 8 sem.',
  },
  {
    n: '03',
    label: 'Formation IA',
    sub: 'Ateliers, conseil et accompagnement sur-mesure',
    href: '/services/formation-ia/',
    color: '#0891b2',
    stat: 'Sur-mesure',
  },
];

function ServicesMapVisual() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Connecting spine */}
      <div style={{ position: 'absolute', left: 27, top: 32, bottom: 32, width: 1, background: 'linear-gradient(to bottom,#e4e4e7,#e4e4e7 60%,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {mapServices.map((s, i) => {
          const isHov = hovered === s.label;
          return (
            <a
              key={s.label}
              href={s.href}
              onMouseEnter={() => setHovered(s.label)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none',
                borderRadius: 16, overflow: 'hidden',
                border: `1.5px solid ${isHov ? s.color : '#e4e4e7'}`,
                background: '#fff',
                boxShadow: isHov ? `0 8px 28px ${s.color}18` : '0 1px 4px rgba(0,0,0,.04)',
                transition: 'all .22s',
                transform: isHov ? 'translateX(4px)' : 'translateX(0)',
              }}
            >
              {/* Left accent + number */}
              <div style={{
                flexShrink: 0, width: 56, alignSelf: 'stretch',
                background: isHov ? s.color : '#f4f4f5',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 6, transition: 'background .22s', padding: '16px 0',
              }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: isHov ? 'rgba(255,255,255,.5)' : '#d4d4d8', letterSpacing: '.06em', transition: 'color .22s' }}>{s.n}</span>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: isHov ? '#fff' : s.color, transition: 'background .22s' }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, padding: '16px 18px' }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#09090b', marginBottom: 4, letterSpacing: '-.01em' }}>{s.label}</div>
                <div style={{ fontSize: 13, color: '#8a8a95', lineHeight: 1.45 }}>{s.sub}</div>
              </div>

              {/* Right stat */}
              <div style={{
                flexShrink: 0, padding: '0 16px',
                display: 'flex', alignItems: 'center',
              }}>
                <span style={{
                  fontSize: 10, fontWeight: 800, color: isHov ? s.color : '#a1a1aa',
                  letterSpacing: '.04em', whiteSpace: 'nowrap',
                  transition: 'color .22s',
                }}>{s.stat}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #e4e4e7' }}>
      {/* Gradient blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle,${AC}10 0%,transparent 65%)`, filter: 'blur(80px)', animation: 'gradDrift1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '20%', right: '-8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle,#7c3aed0d 0%,transparent 65%)', filter: 'blur(100px)', animation: 'gradDrift2 18s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)', zIndex: 0 }} aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto' }}>
        <div className="hub-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Left: text */}
          <div>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#a1a1aa', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
              <a href="/" style={{ color: '#8a8a95', textDecoration: 'none' }}>Accueil</a>
              <span>›</span>
              <span style={{ color: '#09090b' }}>Services</span>
            </nav>

            <h1 style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.03em', color: '#09090b', marginBottom: 20 }}>
              Tous nos services IA.<br />
              <span style={{ color: AC }}>De l&apos;agent simple</span> à<br />
              l&apos;employé IA dédié à un poste.
            </h1>

            <p style={{ fontSize: 16, color: '#52525b', lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
              Pour les PME et ETI françaises qui veulent passer à l&apos;action sans dépendre d&apos;un cabinet de conseil ni d&apos;un SaaS américain.
            </p>

            {/* Pills */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
              {['7 services intégrés', '+758 agents en production', '100 % souverain France'].map((t) => (
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
              <a href="#orientation"
                style={{ padding: '14px 28px', borderRadius: 9999, border: '1.5px solid #e4e4e7', color: '#09090b', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', transition: 'border-color .15s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; }}>
                Trouver le bon service en 3 questions ↓
              </a>
            </div>
          </div>

          {/* Right: ServicesMapVisual */}
          <div className="hub-map-col">
            <ServicesMapVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ServiceWizard ────────────────────────────────────────────
type WizardResult = { label: string; href: string; note?: string };

const q1Options = [
  { id: 'A', text: 'Automatiser une tâche répétitive précise (saisie, mail, classification)', result: { label: 'Agents IA', href: '/services/agents-ia/' } },
  { id: 'B', text: 'Couvrir un poste entier qui n\'est plus tenable en interne (SDR, support, comptable, ops)', result: { label: 'Employé IA', href: '/services/employe-ia/' } },
  { id: 'C', text: 'Un assistant qui répond aux questions de vos visiteurs ou collaborateurs', result: { label: 'Chatbot IA', href: '/services/chatbot-ia/' } },
  { id: 'D', text: 'Refondre un processus métier complet avec l\'IA au centre', result: { label: 'Automatisation IA', href: '/services/automatisation-ia/' } },
  { id: 'E', text: 'Cartographier vos opportunités IA avant d\'investir', result: { label: 'Audit IA', href: '/services/audit-ia/' } },
];

function ServiceWizard() {
  const [step, setStep] = useState(0);
  const [q1, setQ1] = useState<(typeof q1Options)[0] | null>(null);
  const [q2, setQ2] = useState<string | null>(null);
  const [q3, setQ3] = useState<string | null>(null);

  function reset() { setStep(0); setQ1(null); setQ2(null); setQ3(null); }

  function getResult(): WizardResult[] {
    if (!q1) return [];
    const main = q1.result;
    const extra: WizardResult[] = [];
    if (q2 === 'problem') {
      extra.push({ label: 'Audit IA Post-incident', href: '/services/audit-ia/', note: 'Pour identifier les causes et corriger' });
      extra.push({ label: 'Intégration IA', href: '/services/integration-ia/', note: 'Pour mettre en place la couche gouvernance' });
    }
    if (q3 === 'noIT') {
      extra.push({ label: 'Formation IA', href: '/services/formation-ia/', note: 'Pour outiller vos équipes' });
    }
    if (q3 === 'IT') {
      extra.push({ label: 'Développement IA', href: '/services/developpement-ia/', note: 'Si votre DSI veut piloter techniquement' });
    }
    return [main, ...extra].filter((v, i, arr) => arr.findIndex(x => x.label === v.label) === i);
  }

  const stepVisible = step < 3;

  return (
    <section id="orientation" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <H2 style={{ marginBottom: 12 }}>Quel service Althoce pour vous ? Trois questions pour vous orienter.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto' }}>
            Plutôt qu&apos;une grille générique, trois questions courtes vous orientent vers le service le plus adapté à votre besoin actuel.
          </p>
        </div>

        {/* Progress */}
        {step < 3 && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 36 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ flex: 1, height: 3, borderRadius: 9999, background: i <= step ? AC : '#e4e4e7', transition: 'background .3s' }} />
            ))}
          </div>
        )}

        {/* Q1 */}
        {step === 0 && (
          <div>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#09090b', marginBottom: 20 }}>Question 1. Quel est votre besoin principal aujourd&apos;hui ?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q1Options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setQ1(opt); setStep(1); }}
                  style={{ textAlign: 'left', padding: '16px 20px', borderRadius: 14, border: '1.5px solid #e4e4e7', background: '#fff', cursor: 'pointer', fontSize: 15, color: '#09090b', fontWeight: 500, fontFamily: 'inherit', transition: 'all .15s', display: 'flex', alignItems: 'center', gap: 14 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = AC; (e.currentTarget as HTMLButtonElement).style.background = '#f0f7ff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e4e4e7'; (e.currentTarget as HTMLButtonElement).style.background = '#fff'; }}
                >
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: '#f4f4f5', fontSize: 13, fontWeight: 800, color: '#8a8a95', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{opt.id}</span>
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Q2 */}
        {step === 1 && (
          <div>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#09090b', marginBottom: 20 }}>Question 2. Avez-vous déjà déployé une solution IA dans votre entreprise ?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { id: 'yes', text: 'Oui, et tout va bien' },
                { id: 'problem', text: 'Oui, mais ça pose problème' },
                { id: 'no', text: 'Non, c\'est notre premier projet IA' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setQ2(opt.id); setStep(2); }}
                  style={{ textAlign: 'left', padding: '16px 20px', borderRadius: 14, border: '1.5px solid #e4e4e7', background: '#fff', cursor: 'pointer', fontSize: 15, color: '#09090b', fontWeight: 500, fontFamily: 'inherit', transition: 'all .15s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = AC; (e.currentTarget as HTMLButtonElement).style.background = '#f0f7ff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e4e4e7'; (e.currentTarget as HTMLButtonElement).style.background = '#fff'; }}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Q3 */}
        {step === 2 && (
          <div>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#09090b', marginBottom: 20 }}>Question 3. Quelle est votre maturité interne ?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { id: 'IT', text: 'Une équipe IT / DSI structurée qui peut piloter techniquement' },
                { id: 'noIT', text: 'Pas d\'équipe IT mature en interne' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setQ3(opt.id); setStep(3); }}
                  style={{ textAlign: 'left', padding: '16px 20px', borderRadius: 14, border: '1.5px solid #e4e4e7', background: '#fff', cursor: 'pointer', fontSize: 15, color: '#09090b', fontWeight: 500, fontFamily: 'inherit', transition: 'all .15s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = AC; (e.currentTarget as HTMLButtonElement).style.background = '#f0f7ff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e4e4e7'; (e.currentTarget as HTMLButtonElement).style.background = '#fff'; }}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {step === 3 && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#09090b', marginBottom: 16 }}>Votre orientation :</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {getResult().map((r, i) => (
                  <a
                    key={i}
                    href={r.href}
                    style={{ padding: '18px 22px', borderRadius: 14, border: i === 0 ? `2px solid ${AC}` : '1.5px solid #e4e4e7', background: i === 0 ? '#f0f7ff' : '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, transition: 'transform .15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(0)'; }}
                  >
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: i === 0 ? AC : '#09090b', marginBottom: r.note ? 4 : 0 }}>{r.label}</div>
                      {r.note && <div style={{ fontSize: 13, color: '#8a8a95', fontWeight: 500 }}>{r.note}</div>}
                    </div>
                    <span style={{ fontSize: 16, color: i === 0 ? AC : '#a1a1aa' }}>→</span>
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={reset}
              style={{ background: 'none', border: '1px solid #e4e4e7', borderRadius: 9999, padding: '10px 22px', fontSize: 14, fontWeight: 700, color: '#52525b', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#a1a1aa'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e4e4e7'; }}
            >
              Recommencer le quizz
            </button>
          </div>
        )}

        {/* Note */}
        <div style={{ marginTop: 40, padding: '16px 22px', borderRadius: 14, background: `${AC}08`, border: `1px solid ${AC}20`, fontSize: 14, color: '#374151', lineHeight: 1.7 }}>
          Le quizz vous oriente, il ne décide pas. Vous pouvez à tout moment réserver les{' '}
          <a href="/contact" style={{ color: AC, fontWeight: 700, textDecoration: 'none' }}>30 minutes offertes avec un expert</a>{' '}
          pour valider votre orientation et obtenir un devis ferme.
        </div>
      </div>
    </section>
  );
}

// ── 3 Pillars ────────────────────────────────────────────────
function PillarBlock({ title, href, subtitle, desc, cta, visual, reverse, visible, delay }: {
  title: string; href: string; subtitle: string; desc: string; cta: string;
  visual: React.ReactNode; reverse?: boolean; visible: boolean; delay: number;
}) {
  return (
    <div
      className="hub-pillar-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `all .7s ${delay}s ease`,
      }}
    >
      {reverse ? (
        <>
          <div style={{ order: 2 }}>
            <PillarText title={title} href={href} subtitle={subtitle} desc={desc} cta={cta} />
          </div>
          <div style={{ order: 1 }}>
            {visual}
          </div>
        </>
      ) : (
        <>
          <div>{visual}</div>
          <div>
            <PillarText title={title} href={href} subtitle={subtitle} desc={desc} cta={cta} />
          </div>
        </>
      )}
    </div>
  );
}

function PillarText({ title, href, subtitle, desc, cta }: { title: string; href: string; subtitle: string; desc: string; cta: string }) {
  return (
    <div>
      <a href={href} style={{ textDecoration: 'none' }}>
        <h3 style={{ fontSize: 'clamp(20px,2.5vw,32px)', fontWeight: 800, color: '#09090b', letterSpacing: '-.02em', marginBottom: 10, lineHeight: 1.2, transition: 'color .15s' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = AC; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = '#09090b'; }}>
          {title}
        </h3>
      </a>
      <p style={{ fontSize: 15, fontWeight: 700, color: AC, marginBottom: 14 }}>{subtitle}</p>
      <p style={{ fontSize: 16, color: '#8a8a95', lineHeight: 1.75, marginBottom: 28 }}>{desc}</p>
      <a href={href}
        style={{ fontSize: 15, fontWeight: 700, color: '#09090b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '12px 22px', border: '1.5px solid #e4e4e7', borderRadius: 9999, transition: 'all .15s' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; (e.currentTarget as HTMLAnchorElement).style.color = AC; (e.currentTarget as HTMLAnchorElement).style.background = '#f0f7ff'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; (e.currentTarget as HTMLAnchorElement).style.color = '#09090b'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}>
        {cta}
      </a>
    </div>
  );
}

// Pillar visuals — lightweight illustrated cards
function AgentsVisual() {
  return (
    <div style={{ padding: 24, borderRadius: 20, border: '1px solid #e4e4e7', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
        <span style={{ fontSize: 13, color: '#a1a1aa', marginLeft: 8, fontWeight: 600 }}>agent-qualif-leads.ai</span>
      </div>
      {[
        { icon: '📩', text: 'Nouveau lead entrant — analyse en cours...', color: '#f0f7ff' },
        { icon: '🔍', text: 'Score : 87/100 — profil qualifié PME', color: '#f0fdf4' },
        { icon: '📅', text: 'RDV créé dans HubSpot · relance J+2', color: '#fff7ed' },
        { icon: '✅', text: 'Lead transmis au commercial — 2 min', color: '#f0f7ff' },
      ].map((row, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 14px', borderRadius: 10, background: row.color, marginBottom: i < 3 ? 8 : 0, fontSize: 14, color: '#374151', fontWeight: 500 }}>
          <span>{row.icon}</span>
          <span>{row.text}</span>
        </div>
      ))}
      <div style={{ marginTop: 16, padding: '10px 14px', borderRadius: 10, background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, color: '#a1a1aa', fontWeight: 500 }}>Agents actifs</span>
        <span style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>+758</span>
      </div>
    </div>
  );
}

function AutomatisationVisual() {
  const nodes = ['ADV', 'Facturation', 'Support', 'Logistique', 'Reporting'];
  return (
    <div style={{ padding: 28, borderRadius: 20, border: '1px solid #e4e4e7', background: '#09090b', boxShadow: '0 8px 32px rgba(0,0,0,.14)' }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: '#8a8a95', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '.1em' }}>Processus orchestré</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {nodes.map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 8, background: `${AC}20`, border: `1px solid ${AC}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: AC, animation: 'pulseDot 2s ease-in-out infinite', animationDelay: `${i * .3}s` }} />
            </div>
            <div style={{ flex: 1, height: 2, background: `linear-gradient(90deg,${AC}60,transparent)` }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#d4d4d8' }}>{n}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, padding: '12px 16px', borderRadius: 12, background: '#0f0f0f', border: '1px solid #1e1e1e', fontSize: 13, color: '#8a8a95' }}>
        <span style={{ color: AC, fontWeight: 700 }}>4 à 8 semaines</span> de delivery · sur devis
      </div>
    </div>
  );
}

function FormationVisual() {
  const levels = [
    { label: 'Atelier IA', desc: 'Prise en main pratique · 4h à 7h', fill: 0.4 },
    { label: 'Onboarding outils', desc: 'Claude, ChatGPT, Copilot en organisation', fill: 0.65 },
    { label: 'Mission conseil', desc: 'Question stratégique · 1 à 4 semaines', fill: 0.9 },
  ];
  return (
    <div style={{ padding: 24, borderRadius: 20, border: '1px solid #e4e4e7', background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em' }}>Formats de montée en compétences</div>
        <div style={{ padding: '3px 10px', borderRadius: 9999, background: '#f0f7ff', border: `1px solid ${AC}25`, fontSize: 12, fontWeight: 800, color: AC }}>Sur-mesure</div>
      </div>
      {levels.map((l, i) => (
        <div key={i} style={{ marginBottom: i < 2 ? 16 : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <div>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#09090b' }}>Niveau {i + 1} — {l.label}</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: AC }}>Sur devis</span>
          </div>
          <div style={{ fontSize: 12, color: '#8a8a95', marginBottom: 6 }}>{l.desc}</div>
          <div style={{ height: 6, background: '#f4f4f5', borderRadius: 9999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${l.fill * 100}%`, background: `linear-gradient(to right,${AC},${AC}88)`, borderRadius: 9999 }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 18, padding: '10px 14px', borderRadius: 10, background: '#f0f7ff', border: `1px solid ${AC}20`, fontSize: 13, color: '#374151', fontWeight: 500 }}>
        + Accompagnement long à temps partagé (6 à 12 mois)
      </div>
    </div>
  );
}

function Pillars() {
  const [ref, visible] = useInView(0.08);
  const pillarData = [
    {
      title: 'Agents IA sur-mesure',
      href: '/services/agents-ia/',
      subtitle: 'Un cas d\'usage borné, automatisé de bout en bout',
      desc: 'Un agent IA Althoce absorbe une tâche répétitive précise dans votre quotidien : qualification de leads, traitement de factures, classification de mails, génération de rapports. Tarif fixe 1 400 € HT (1 cas d\'usage borné, 1 semaine de delivery). Le format d\'entrée le plus utilisé chez nos clients PME en 2026.',
      cta: 'Découvrir les agents IA →',
      visual: <AgentsVisual />,
      reverse: false,
    },
    {
      title: 'Automatisation IA agentique',
      href: '/services/automatisation-ia/',
      subtitle: 'Un processus métier complet, repensé avec l\'IA au centre',
      desc: 'Pour les processus qui dépassent un agent unitaire : ADV, support, comptabilité, RH, ops. Plusieurs agents orchestrés ensemble sur un flux cohérent. Sur devis. Délai 4 à 8 semaines. Voir les 12 cas concrets que nous avons déjà livrés sur la page dédiée.',
      cta: 'Voir les cas d\'automatisation →',
      visual: <AutomatisationVisual />,
      reverse: true,
    },
    {
      title: 'Formation IA pour vos équipes',
      href: '/services/formation-ia/',
      subtitle: 'Ateliers pratiques, conseil, accompagnement. Sur-mesure, contextualisé par métier.',
      desc: 'Pas une formation IA généraliste. Quatre formats complémentaires : ateliers pratiques sur Claude, ChatGPT et Copilot, onboarding outils IA dans votre organisation, missions conseil sur une question stratégique précise, accompagnement long à temps partagé. Contextualisé sur votre métier réel, animé par des consultants qui pratiquent l\'IA en production.',
      cta: 'Voir le programme formation →',
      visual: <FormationVisual />,
      reverse: false,
    },
  ];

  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fff', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <H2 style={{ marginBottom: 12 }}>Trois produits cœur, trois échelles de besoin</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 540, margin: '0 auto' }}>
            80 % de nos clients démarrent par l&apos;un de ces trois produits. Ils répondent à trois échelles de besoin distinctes, du plus borné au plus ambitieux.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {pillarData.map((p, i) => (
            <PillarBlock key={i} {...p} visible={visible} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 5 Satellites ─────────────────────────────────────────────
const satelliteServices = [
  {
    n: '01',
    title: 'Développement IA sur-mesure',
    href: '/services/developpement-ia/',
    desc: 'Vous voulez du code de production, pas du no-code orchestré. Stack maîtrisée Python + TypeScript + n8n + LangGraph. Code livré au client, pas de lock-in. Pour les DSI exigeants.',
  },
  {
    n: '02',
    title: 'Chatbot IA RAG',
    href: '/services/chatbot-ia/',
    desc: 'Pas un chatbot scripté. Un chatbot RAG ancré sur votre base de connaissances (FAQ, docs, intranet). Cite ses sources, escalade quand il ne sait pas. 1 400 € HT pour un chatbot simple.',
    badge: '1 400 € HT',
  },
  {
    n: '03',
    title: 'Intégration IA dans votre SI',
    href: '/services/integration-ia/',
    desc: 'SSO, RBAC, audit log, monitoring, fallback humain, kill switch. Pour que vos agents IA passent un audit ISO 27001, un comité sécurité DSI, une revue RGPD.',
  },
  {
    n: '04',
    title: 'Formation IA pour vos équipes',
    href: '/services/formation-ia/',
    desc: 'Ateliers pratiques (Claude, ChatGPT, Copilot), onboarding outils IA, missions conseil, accompagnement long à temps partagé. Sur-mesure, contextualisé par métier, animé par des consultants praticiens.',
  },
  {
    n: '05',
    title: 'Audit IA stratégique',
    href: '/services/audit-ia/',
    desc: 'Cartographie chiffrée des opportunités IA dans votre entreprise. 6 livrables actionnables. Pas un PowerPoint de cabinet de conseil. 4 formats : Express, Standard, Approfondi, Post-incident.',
  },
];

// ── L'IA transforme votre métier (identique home) ────────────
function AgentByJob() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'all .5s ease' }}>
          <H2 style={{ marginBottom: 12 }}>L&apos;IA transforme votre métier.</H2>
          <p style={{ fontSize: 16, color: '#52525b', maxWidth: 520, margin: '0 auto' }}>Chaque métier a ses tâches répétitives, ses irritants, ses pertes de temps. Nous déployons un agent IA adapté à chaque fonction.</p>
        </div>

        <div className="v2-grid4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 44 }}>
          {agentMetiers.map((m, i) => (
            <a key={i} href={m.href} style={{ border: '1px solid #e4e4e7', borderRadius: 16, padding: '24px 20px', background: '#fff', textDecoration: 'none', display: 'block', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `all .5s ${i * .06}s ease` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AC}55`; (e.currentTarget as HTMLAnchorElement).style.background = '#f0f7ff'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e4e4e7'; (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; (e.currentTarget as HTMLAnchorElement).style.transform = 'none'; }}>
              <div style={{ width: 36, height: 36, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" fill={`${AC}10`} stroke={AC} strokeWidth="1.5" />
                  <circle cx="18" cy="18" r="5" fill={AC} />
                  <path d="M18 4L18 8" stroke={AC} strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 28L18 32" stroke={AC} strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 18L8 18" stroke={AC} strokeWidth="2" strokeLinecap="round" />
                  <path d="M28 18L32 18" stroke={AC} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: '#09090b', marginBottom: 8, letterSpacing: '-.01em' }}>{m.title}</h3>
              <p style={{ fontSize: 14, color: '#8a8a95', lineHeight: 1.65 }}>{m.desc}</p>
            </a>
          ))}
        </div>

        {/* Agent tags marquee */}
        <div style={{ overflow: 'hidden', position: 'relative', marginBottom: 36 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 60, background: 'linear-gradient(to right,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 60, background: 'linear-gradient(to left,#fafafa,transparent)', zIndex: 2 }} aria-hidden="true" />
          <div className="ticker-slow" role="marquee" aria-label="Liste des agents IA disponibles">
            {[...agentTags, ...agentTags].map((t, i) => (
              <div key={i} style={{ flexShrink: 0, padding: '8px 16px', borderRadius: 9999, border: '1px solid #e4e4e7', background: '#fff', fontSize: 13, fontWeight: 700, color: '#52525b', whiteSpace: 'nowrap', marginRight: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <circle cx="7" cy="7" r="5" fill="none" stroke={AC} strokeWidth="1.5" />
                  <circle cx="7" cy="7" r="2" fill={AC} />
                </svg>
                {t.name}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/automatisation/" style={{ fontSize: 15, fontWeight: 700, color: AC, textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'; }}>
            Voir toutes les automatisations métier →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Methodology — StepVisual identique home ──────────────────
function StepVisual({ stepIndex, active }: { stepIndex: number; active: boolean }) {
  if (stepIndex === 0) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid #e4e4e7', animation: active ? 'floatCard 4s ease-in-out infinite' : 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>Rapport d&apos;audit</div>
        {['Saisie manuelle CRM', 'Traitement emails entrants', 'Génération reporting', 'Onboarding candidats'].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #f4f4f5', animation: active ? `slideIn .4s ${i * .15}s ease both` : 'none' }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: i < 3 ? '#22c55e22' : '#f4f4f5', border: i < 3 ? '1.5px solid #22c55e' : '1.5px solid #d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, color: '#22c55e', fontWeight: 900 }}>
              {i < 3 && '✓'}
            </div>
            <span style={{ fontSize: 13, color: i < 3 ? '#52525b' : '#a1a1aa', fontWeight: i < 3 ? 600 : 400 }}>{t}</span>
            {i < 3 && <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 800, color: '#22c55e' }}>−{[4, 6, 3, 2][i]}h/sem</span>}
          </div>
        ))}
      </div>
    );
  }
  if (stepIndex === 1) {
    return (
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
  }
  if (stepIndex === 2) {
    return (
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
  }
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

// ── Pricing (inherited) ───────────────────────────────────────
// ── Security (inherited) ──────────────────────────────────────
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
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = AC; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = AC; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = AC; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${AC}40`; }}>
              Notre approche conseil →
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
                    {i === 0 && (<><rect x="10" y="10" width="28" height="28" rx="4" fill="none" stroke={AC} strokeWidth="2" /><path d="M16 24L22 30L32 18" stroke={AC} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></>)}
                    {i === 1 && (<><circle cx="24" cy="24" r="16" fill="none" stroke={`${AC}30`} strokeWidth="2" /><circle cx="24" cy="24" r="10" fill={`${AC}15`} stroke={AC} strokeWidth="2" /><circle cx="24" cy="24" r="4" fill={AC} /></>)}
                    {i === 2 && (<><rect x="14" y="18" width="20" height="16" rx="2" fill="none" stroke={AC} strokeWidth="2" /><path d="M14 18C14 14 18 12 24 12C30 12 34 14 34 18" fill="none" stroke={AC} strokeWidth="2" /><circle cx="24" cy="26" r="2" fill={AC} /></>)}
                    {i === 3 && (<><circle cx="20" cy="18" r="6" fill="none" stroke={AC} strokeWidth="2" /><path d="M10 38C10 30 14 26 20 26C26 26 30 30 30 38" fill="none" stroke={AC} strokeWidth="2" /><path d="M30 16L38 8M38 8L34 8M38 8L38 12" stroke={AC} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>)}
                  </svg>
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
const hubFaqs: FAQv2Item[] = [
  {
    q: 'Par quel service commencer quand on n\'a jamais déployé d\'IA ?',
    a: 'Dans 80 % des cas, le bon point d\'entrée est un agent IA simple (1 cas d\'usage borné, 1 semaine de delivery). C\'est un projet calibré, mesurable, à fort ROI immédiat. Si vous avez un site avec beaucoup de visiteurs et une FAQ à valoriser, un chatbot RAG est aussi un excellent premier projet. Si vous cherchez à cartographier l\'ensemble avant de vous engager, l\'audit IA est conçu pour ça.',
  },
  {
    q: 'Qu\'est-ce qui différencie agent IA, automatisation IA, et employé IA ?',
    a: 'Trois échelles distinctes. Un agent IA couvre 1 cas d\'usage borné (qualifier un lead, traiter une facture). Une automatisation IA chaîne plusieurs agents sur un processus métier complet (ADV, support, comptabilité). Un employé IA couvre un poste entier (SDR, support 24/7, comptable) avec mémoire, identité de marque et rituels d\'équipe.',
  },
  {
    q: 'Comment se passe la première prise de contact ?',
    a: 'Trois étapes. Vous prenez les 30 minutes offertes avec un expert via le bouton "Discuter de votre projet". On qualifie votre besoin en 30 minutes (cas, périmètre, contraintes, urgence). On vous envoie un devis ferme sous 5 jours ouvrés. Vous décidez de signer ou pas, sans engagement.',
  },
  {
    q: 'Quel service pour une entreprise qui a déjà déployé une solution IA qui pose problème ?',
    a: 'L\'audit IA Post-incident (typologie 04). Nous auditons l\'existant, identifions les causes des dérives, et proposons un plan de remédiation. Le service Intégration IA intervient ensuite pour mettre en place la couche gouvernance qui aurait dû être présente : SSO, RBAC, audit log, monitoring, kill switch.',
  },
  {
    q: 'Faut-il combiner plusieurs services ?',
    a: 'Souvent, oui. Un déploiement type combine généralement : (1) un audit ou les 30 minutes offertes pour cadrer, (2) un produit cœur (agent, automatisation, ou employé IA), (3) une intégration IA pour la couche gouvernance, (4) une formation IA pour outiller les équipes en interne. Le bon mix se définit au cadrage.',
  },
];

function FAQ() {
  return (
    <section id="faq" style={{ padding: '96px 24px', background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <H2 style={{ marginBottom: 12 }}>Questions fréquentes pour vous orienter</H2>
          <p style={{ fontSize: 16, color: '#52525b' }}>Cinq questions qui reviennent systématiquement lors des premiers échanges avec nos prospects.</p>
        </div>
        <FAQAccordion items={hubFaqs} />
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function ServicesHubPageClient() {
  return (
    <main>
      <Hero />
      <ServiceWizard />
      <Pillars />
      <AgentByJob />
      <Methodology />
      <Security />
      <FAQ />
    </main>
  );
}
