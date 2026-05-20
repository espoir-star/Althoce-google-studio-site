'use client';

import React from 'react';
import { POLES, AGENTS, IRRITANTS, SECTEUR_REINVESTISSEMENT, type Profile, type Agent } from '@/lib/roi/data';
import { type ROITotal, computeAgentROI, fmtEur, fmtNum } from '@/lib/roi/calculator';
import { T, useResponsive, Eyebrow, CTA } from './RoiComponents';

// ── Icon system ───────────────────────────────────────────────────────
function Ic({ d, size = 20, color = 'currentColor', fill = 'none' }: { d: string; size?: number; color?: string; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const SVG: Record<string, string> = {
  target:    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-14a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 3h.01',
  megaphone: 'M3 11l19-9-9 19-2-8-8-2z',
  chat:      'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  phone:     'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.12 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z',
  users:     'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  finance:   'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  settings:  'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v6m0-18v3M5.27 5.27l2.12 2.12M3 12H6m-.73 6.73 2.12-2.12M12 21v-3m6.73-2.27-2.12-2.12M21 12h-3m.73-6.73-2.12 2.12',
  briefcase: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2',
  rocket:    'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zm10-1L11 13M3 21l3-3M12.5 2.5l9 9-2.5 2.5-9-9 2.5-2.5zm-5 5 4 4M15 8.5l2 2',
  trendUp:   'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
  lightbulb: 'M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3M6.343 6.343l-.707-.707M12 17c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z',
  building:  'M3 21h18M3 7v14M3 7l9-4 9 4M6 10v1m0 4v1m6-5v1m0 4v1m6-5v1m0 4v1M6 7v0m6 0v0m6 0v0M17 21V7',
  plug:      'M7 6v2m10-2v2M5 8h14M5 8a2 2 0 0 0 0 4h14a2 2 0 0 0 0-4M12 12v6m-3 4h6',
  zap:       'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  bookmark:  'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z',
  check:     'M5 13l4 4L19 7',
  arrowRight:'M5 12h14M12 5l7 7-7 7',
  star:      'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  info:      'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8h.01M12 12v4',
};

const POLE_ICON: Record<string, string> = {
  Commercial:   'target',
  Marketing:    'megaphone',
  SAV:          'chat',
  Telephonique: 'phone',
  RH:           'users',
  Finance:      'finance',
  Ops:          'settings',
  Direction:    'briefcase',
};

function PoleIcon({ id, size = 22 }: { id: string; size?: number }) {
  const iconName = POLE_ICON[id] || 'briefcase';
  return <Ic d={SVG[iconName]} size={size} color={T.accent} />;
}

function IconBox({ name, size = 20, bgColor = 'rgba(37,99,235,.08)', borderColor = 'rgba(37,99,235,.2)', iconColor = T.accent }: {
  name: string; size?: number; bgColor?: string; borderColor?: string; iconColor?: string;
}) {
  return (
    <div style={{
      width: 44, height: 44, borderRadius: T.r, flexShrink: 0,
      background: bgColor, border: `1px solid ${borderColor}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Ic d={SVG[name] || SVG.star} size={size} color={iconColor} />
    </div>
  );
}

// ── Report Root ───────────────────────────────────────────────────────
type LeadData = { prenom?: string; nom?: string; email?: string; tel?: string; entreprise?: string } | null;

export function Report({ profile, lead, agents, total, onBackToCalc }: {
  profile: Profile;
  lead: LeadData;
  agents: Agent[];
  total: ROITotal;
  onBackToCalc: () => void;
}) {
  const { isMobile } = useResponsive();
  const px = isMobile ? 16 : 48;
  const date = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const entreprise = lead?.entreprise || profile.nomEntreprise || 'votre entreprise';

  return (
    <div style={{ background: T.bg, color: T.text, minHeight: '100vh' }}>
      {/* Web header — hidden in print */}
      <header className="no-print" style={{
        position: 'sticky', top: 64, zIndex: 50,
        backdropFilter: 'blur(20px)', background: 'rgba(250,250,250,.92)',
        borderBottom: `1px solid ${T.border}`,
        padding: `12px ${px}px`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
        flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em', color: T.text }}>Rapport ROI</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>

          <button onClick={() => window.print()} style={{
            background: 'transparent', border: `1px solid ${T.borderStrong}`,
            color: T.text, padding: isMobile ? '8px 14px' : '10px 16px', borderRadius: 99,
            fontSize: isMobile ? 12 : 13, cursor: 'pointer', fontWeight: 600, fontFamily: T.font,
          }}>Télécharger PDF</button>
          <CTA size="sm" href="/contact">Réserver mon audit 30 min</CTA>
        </div>
      </header>


      <main className="report-main" style={{ maxWidth: 1100, margin: '0 auto', padding: `${isMobile ? 32 : 64}px ${px}px 120px` }}>
        <ReportHero profile={profile} lead={lead} total={total} agents={agents} />
        <Top3Impacts profile={profile} total={total} agents={agents} />
        <PolesTransformes profile={profile} agents={agents} />
        <Reinvestissement profile={profile} total={total} />
        <ChartsValue agents={agents} total={total} profile={profile} />
        <AgentDetailsValue agents={agents} profile={profile} />
        <Roadmap agents={agents} isMobile={isMobile} />
        <AgentsMarques profile={profile} />
        <TableauValue agents={agents} profile={profile} />
        <DisclaimerEstimation />
        <div className="no-print"><FinalCTA lead={lead} total={total} /></div>
      </main>

      <style>{`
        /* ── Screen responsive ────────────────────────────────── */
        @media (max-width: 600px) {
          .report-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .report-pole-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Print — document layout ──────────────────────────── */
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          /* Force print colors */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          /* Root background + compensate for zero @page margin */
          html { background: #fff !important; }
          body {
            background: #fff !important;
            padding: 14mm 14mm 16mm !important;
            margin: 0 !important;
          }

          /* Hide web chrome */
          .no-print { display: none !important; }

          /* Remove shadows, blurs, fixed positioning */
          * {
            box-shadow: none !important;
            text-shadow: none !important;
            backdrop-filter: none !important;
            filter: none !important;
          }


          /* Main layout — full width */
          .report-main {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Sections */
          section {
            margin-bottom: 6mm !important;
          }

          /* Prevent cards from being cut across pages */
          .pdf-card {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }

          /* Section-level page breaks */
          .pdf-break {
            break-before: page !important;
            page-break-before: always !important;
          }

          /* Typography scale for A4 */
          h1 { font-size: 20pt !important; line-height: 1.1 !important; margin-bottom: 4mm !important; }
          h2 { font-size: 14pt !important; line-height: 1.2 !important; margin-bottom: 3mm !important; }
          h3 { font-size: 11pt !important; line-height: 1.3 !important; }
          p  { font-size: 9pt  !important; line-height: 1.55 !important; }

          /* Preserve grids */
          .report-hero-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 6px !important; }
          .report-pole-grid { grid-template-columns: 1fr 1fr !important; }

          /* Cards — clean borders, white bg */
          [style*="background: rgb(255, 255, 255)"],
          [style*="background: #fff"],
          [style*="background: white"] {
            background: #fff !important;
            border-color: #e4e4e7 !important;
          }

          /* Soften subtle bg areas */
          [style*="background: rgb(250, 250, 250)"],
          [style*="rgba(37,99,235,.03)"],
          [style*="rgba(37,99,235,.06)"] {
            background: #f8fafc !important;
          }

          /* Remove border-radius extremes for print */
          [style*="border-radius: 28px"] { border-radius: 6px !important; }
          [style*="border-radius: 20px"] { border-radius: 5px !important; }
          [style*="border-radius: 16px"] { border-radius: 4px !important; }

          /* Table */
          table { font-size: 8pt !important; border-collapse: collapse !important; width: 100% !important; }
          th, td { padding: 6px 10px !important; font-size: 8pt !important; }

          /* Chart height */
          svg { max-height: 120px; }

          /* Avoid orphan cards */
          [style*="border-radius"][style*="padding"] { page-break-inside: avoid; }

          /* Eyebrow badges */
          [style*="border-radius: 9999px"][style*="rgba(37,99,235"] {
            background: #eff6ff !important;
            border-color: #bfdbfe !important;
          }

          /* Hide interactive elements */
          button[onclick] { display: none !important; }
        }
      `}</style>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────
function HeroStat({ label, value, sub, big }: { label: string; value: string; sub: string; big?: boolean }) {
  return (
    <div style={{
      padding: '20px 22px', borderRadius: T.rLg,
      background: big ? T.accent : T.bgCard,
      border: big ? 'none' : `1px solid ${T.border}`,
      color: big ? '#fff' : T.text,
      boxShadow: big ? '0 4px 24px rgba(37,99,235,.22)' : 'none',
    }}>
      <div style={{ fontFamily: T.mono, fontSize: 10, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 10 }}>{label}</div>
      <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div style={{ fontSize: 11, opacity: big ? 0.75 : 0.5, marginTop: 8, fontFamily: T.mono }}>{sub}</div>
    </div>
  );
}

function ReportHero({ profile, lead, total, agents }: { profile: Profile; lead: LeadData; total: ROITotal; agents: Agent[] }) {
  const { isMobile } = useResponsive();
  const verdict = (() => {
    if (total.gainAnnuel >= 500_000) return "Un levier de transformation majeur — l'IA peut soutenir votre croissance dès cette année.";
    if (total.gainAnnuel >= 150_000) return "Un gain de capacité significatif — des ressources libérées sur vos pôles prioritaires.";
    if (total.gainAnnuel >= 50_000)  return "Un premier palier solide — démarrer avec un périmètre ciblé pour valider rapidement.";
    return "Un point de départ pragmatique, concentrez-vous sur 1 à 2 agents à fort impact.";
  })();
  const date = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const etp = total.heuresSemaine / 35;
  const pct = total.heuresGaspillees > 0 ? Math.min(100, Math.round((total.heuresSemaine / total.heuresGaspillees) * 100)) : 0;

  return (
    <section style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: isMobile ? 20 : 32 }}>Rapport ROI · Agents IA Althoce</Eyebrow>
      <div style={{ marginBottom: isMobile ? 28 : 44 }}>
        <div style={{ fontFamily: T.mono, fontSize: 12, color: T.textMuted, marginBottom: 12 }}>
          Préparé pour {lead?.entreprise || profile.nomEntreprise || 'votre entreprise'} · {date}
        </div>
        <h1 style={{ margin: 0, fontSize: 'clamp(28px,5.5vw,72px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.04, maxWidth: 980, color: T.text }}>
          Vous pouvez gagner <span style={{ color: T.accent }}>{fmtEur(total.gainAnnuel, { short: true })}</span> par an
          <span style={{ color: T.textMuted }}> en libérant </span>
          <span style={{ color: T.accent }}>{fmtNum(total.heuresSemaine, 0)} h/semaine</span>.
        </h1>
        <p style={{ margin: '18px 0 0', fontSize: isMobile ? 15 : 18, color: T.textSoft, maxWidth: 780, lineHeight: 1.6 }}>
          {verdict} {agents.length} agent{agents.length > 1 ? 's' : ''} déployé{agents.length > 1 ? 's' : ''} sur {profile.polesActifs.length} pôle{profile.polesActifs.length > 1 ? 's' : ''}, soit l&apos;équivalent de
          <strong style={{ color: T.text }}> ~{fmtNum(etp, 1)} ETP</strong> redéployable{etp > 1 ? 's' : ''} sur des missions à plus forte valeur.
        </p>
      </div>
      <div className="report-hero-grid" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? 8 : 14 }}>
        <HeroStat big label="Économies / an" value={fmtEur(total.gainAnnuel, { short: true })} sub={`${fmtEur(total.gainAnnuel * 0.85, { short: true })} → ${fmtEur(total.gainAnnuel * 1.15, { short: true })}`} />
        <HeroStat label="Heures / sem" value={`${fmtNum(total.heuresSemaine, 0)} h`} sub={`~${fmtNum(etp, 1)} ETP libéré${etp > 1 ? 's' : ''}`} />
        <HeroStat label="Agents activés" value={`${agents.length}`} sub={`sur ${profile.polesActifs.length} pôle${profile.polesActifs.length > 1 ? 's' : ''}`} />
        <HeroStat label="Capacité récupérée" value={`+${pct}%`} sub="du temps perdu" />
      </div>
    </section>
  );
}

// ── Top 3 Impacts ─────────────────────────────────────────────────────
function Top3Impacts({ profile, total, agents }: { profile: Profile; total: ROITotal; agents: Agent[] }) {
  const { isMobile } = useResponsive();
  const byPole: Record<string, { gain: number; heures: number; count: number }> = {};
  agents.forEach(a => {
    const r = computeAgentROI(a, profile);
    if (!byPole[a.pole]) byPole[a.pole] = { gain: 0, heures: 0, count: 0 };
    byPole[a.pole].gain += r.gainMensuel;
    byPole[a.pole].heures += r.heuresSemaine;
    byPole[a.pole].count += 1;
  });
  const polesRanked = Object.entries(byPole).sort((a, b) => b[1].gain - a[1].gain);
  const etp = total.heuresSemaine / 35;

  const impacts: { icon: string; titre: string; texte: string; poleId?: string }[] = [];
  if (polesRanked[0]) {
    const [pid, p] = polesRanked[0];
    const pole = POLES.find(x => x.id === pid);
    impacts.push({
      icon: POLE_ICON[pid] || 'target',
      poleId: pid,
      titre: `${pole?.label} : impact n°1 sur votre P&L`,
      texte: `${p.count} agent${p.count > 1 ? 's' : ''} ${pole?.label.toLowerCase()} libère${p.count > 1 ? 'nt' : ''} ~${fmtNum(p.heures, 0)}h/sem, soit ${fmtEur(p.gain * 12, { short: true })}/an.`,
    });
  }
  if (etp >= 0.3) {
    impacts.push({
      icon: 'rocket',
      titre: 'Capacité supplémentaire sans recruter',
      texte: `Vous récupérez l'équivalent de ${fmtNum(etp, 1)} ETP — la capacité de prendre ${etp >= 2 ? 'plusieurs nouveaux clients' : etp >= 1 ? 'un nouveau client majeur' : 'des projets supplémentaires'} sans alourdir votre masse salariale.`,
    });
  }
  if (polesRanked[1]) {
    const [pid, p] = polesRanked[1];
    const pole = POLES.find(x => x.id === pid);
    impacts.push({
      icon: POLE_ICON[pid] || 'zap',
      poleId: pid,
      titre: `${pole?.label} : exécution accélérée`,
      texte: `${p.count} agent${p.count > 1 ? 's' : ''} sur ce pôle réduisent les délais et standardisent la qualité — moins d'erreurs, plus de temps sur les sujets à forte valeur.`,
    });
  }
  if (impacts.length < 3) {
    impacts.push({ icon: 'target', titre: 'Recentrage sur la valeur ajoutée', texte: 'Vos équipes peuvent se concentrer sur ce que la machine ne sait pas faire : la relation client, la stratégie, la créativité.' });
  }

  return (
    <section style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: 16 }}>Top 3 · Impacts stratégiques</Eyebrow>
      <h2 style={{ margin: '0 0 28px', fontSize: isMobile ? 24 : 34, fontWeight: 700, letterSpacing: '-0.035em', maxWidth: 800, color: T.text }}>Trois leviers concrets pour votre entreprise.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 12 }}>
        {impacts.slice(0, 3).map((imp, i) => (
          <div key={i} className="pdf-card" style={{
            padding: '28px 24px', borderRadius: T.rLg, background: T.bgCard,
            border: `1px solid ${T.border}`, position: 'relative',
            boxShadow: '0 1px 4px rgba(0,0,0,.04)',
          }}>
            <div style={{ position: 'absolute', top: 22, right: 22, fontFamily: T.mono, fontSize: 11, color: T.textFaint, letterSpacing: '0.08em', fontWeight: 600 }}>0{i + 1}</div>
            <div style={{ marginBottom: 18 }}>
              <IconBox name={imp.icon} size={18} />
            </div>
            <h3 style={{ margin: '0 0 10px', fontSize: isMobile ? 17 : 19, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.3, color: T.text }}>{imp.titre}</h3>
            <p style={{ margin: 0, fontSize: 14, color: T.textSoft, lineHeight: 1.65 }}>{imp.texte}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Pôles Transformés ─────────────────────────────────────────────────
function PolesTransformes({ profile, agents }: { profile: Profile; agents: Agent[] }) {
  const { isMobile } = useResponsive();
  const byPole: Record<string, { agents: (Agent & { _gain: number; _h: number })[]; gain: number; heures: number }> = {};
  agents.forEach(a => {
    const r = computeAgentROI(a, profile);
    if (!byPole[a.pole]) byPole[a.pole] = { agents: [], gain: 0, heures: 0 };
    byPole[a.pole].agents.push({ ...a, _gain: r.gainMensuel, _h: r.heuresSemaine });
    byPole[a.pole].gain += r.gainMensuel;
    byPole[a.pole].heures += r.heuresSemaine;
  });
  const polesEntries = Object.entries(byPole);
  if (!polesEntries.length) return null;

  return (
    <section style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: 16 }}>Vos pôles · transformés</Eyebrow>
      <h2 style={{ margin: '0 0 10px', fontSize: isMobile ? 24 : 34, fontWeight: 700, letterSpacing: '-0.035em', maxWidth: 800, color: T.text }}>Un avant / après par pôle.</h2>
      <p style={{ margin: '0 0 28px', fontSize: isMobile ? 14 : 16, color: T.textSoft, maxWidth: 700, lineHeight: 1.6 }}>
        Pour chaque pôle activé, voici ce que les agents Althoce changent dans votre quotidien.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {polesEntries.map(([pid, data]) => {
          const pole = POLES.find(p => p.id === pid);
          const irritantsPole = (profile.irritants[pid] || []).map(id => IRRITANTS.find(i => i.id === id)?.texte).filter(Boolean) as string[];
          return (
            <div key={pid} className="pdf-card" style={{
              borderRadius: T.rLg, background: T.bgCard, border: `1px solid ${T.border}`,
              overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,.04)',
            }}>
              {/* Pole header */}
              <div style={{
                padding: isMobile ? '16px 18px' : '18px 28px',
                borderBottom: `1px solid ${T.border}`,
                display: 'flex', alignItems: 'center', gap: 14,
                background: T.bgCard2,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: T.rSm, flexShrink: 0,
                  background: 'rgba(37,99,235,.08)', border: '1px solid rgba(37,99,235,.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <PoleIcon id={pid} size={18} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', color: T.text }}>{pole?.label}</h3>
                  <div style={{ fontFamily: T.mono, fontSize: 11, color: T.textMuted, marginTop: 2 }}>
                    {data.agents.length} agent{data.agents.length > 1 ? 's' : ''} · {profile.effectifs[pid] || 0} pers. concernées
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 20, flexShrink: 0 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 2 }}>Heures /sem</div>
                    <div style={{ fontSize: 20, color: T.accent, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{fmtNum(data.heures, 0)} h</div>
                  </div>
                  {!isMobile && <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 2 }}>Économies /an</div>
                    <div style={{ fontSize: 20, color: T.accent, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{fmtEur(data.gain * 12, { short: true })}</div>
                  </div>}
                </div>
              </div>
              {/* Before / After */}
              <div className="report-pole-grid" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 0 }}>
                <div style={{ padding: isMobile ? '16px 18px' : '22px 28px', borderRight: isMobile ? 'none' : `1px solid ${T.border}`, borderBottom: isMobile ? `1px solid ${T.border}` : 'none' }}>
                  <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textFaint, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 99, background: T.borderStrong, display: 'inline-block' }} />
                    Avant
                  </div>
                  {irritantsPole.length ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {irritantsPole.map((t, i) => (
                        <div key={i} style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.55, paddingLeft: 12, borderLeft: `2px solid ${T.border}` }}>{t}</div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ fontSize: 13, color: T.textMuted, fontStyle: 'italic', lineHeight: 1.6 }}>Friction quotidienne, charge mentale, manque de temps sur les sujets à valeur ajoutée.</div>
                  )}
                </div>
                <div style={{ padding: isMobile ? '16px 18px' : '22px 28px' }}>
                  <div style={{ fontFamily: T.mono, fontSize: 10, color: T.accent, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 99, background: T.accent, display: 'inline-block' }} />
                    Après · avec Althoce
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {data.agents.map(a => (
                      <div key={a.id} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: 99, flexShrink: 0, marginTop: 1,
                          background: T.accent, color: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Ic d={SVG.check} size={10} color="#fff" />
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{a.nom}</div>
                          <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.45 }}>{a.tagline}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Réinvestissement ──────────────────────────────────────────────────
function Reinvestissement({ profile, total }: { profile: Profile; total: ROITotal }) {
  const { isMobile } = useResponsive();
  const secteurKey = SECTEUR_REINVESTISSEMENT[profile.secteur] ? profile.secteur : 'Autre / Non listé';
  const reinv = SECTEUR_REINVESTISSEMENT[secteurKey];
  const secteurLabel = profile.secteur === 'Autre / Non listé' && profile.secteurPersonnalise ? profile.secteurPersonnalise : profile.secteur;
  const etp = total.heuresSemaine / 35;

  return (
    <section style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: 16 }}>Réinvestissement business</Eyebrow>
      <h2 style={{ margin: '0 0 10px', fontSize: isMobile ? 22 : 34, fontWeight: 700, letterSpacing: '-0.035em', maxWidth: 900, color: T.text }}>
        Et si vous réinvestissiez ces <span style={{ color: T.accent }}>{fmtNum(total.heuresSemaine, 0)} h/semaine</span> dans votre croissance&nbsp;?
      </h2>
      <p style={{ margin: '0 0 24px', fontSize: isMobile ? 14 : 16, color: T.textSoft, maxWidth: 760, lineHeight: 1.6 }}>
        Pour une entreprise du secteur <strong style={{ color: T.text }}>{secteurLabel}</strong>, voici trois leviers de réinvestissement directement actionnables.
      </p>

      {/* Priority levier */}
      <div style={{
        padding: isMobile ? '18px 20px' : '24px 28px', borderRadius: T.rLg, marginBottom: 14,
        background: `linear-gradient(135deg,rgba(37,99,235,.06) 0%,${T.bgCard} 70%)`,
        border: `1px solid rgba(37,99,235,.2)`,
        display: 'flex', gap: 18, alignItems: 'center',
      }}>
        <IconBox name="trendUp" size={18} bgColor="rgba(37,99,235,.1)" borderColor="rgba(37,99,235,.25)" />
        <div>
          <div style={{ fontFamily: T.mono, fontSize: 10, color: T.accent, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 6, fontWeight: 700 }}>Levier prioritaire pour votre secteur</div>
          <h3 style={{ margin: 0, fontSize: isMobile ? 17 : 22, fontWeight: 600, letterSpacing: '-0.02em', color: T.text }}>{reinv.accroche}</h3>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 10 }}>
        {reinv.leviers.map((l, i) => (
          <div key={i} className="pdf-card" style={{
            padding: '20px 22px', borderRadius: T.rLg, background: T.bgCard, border: `1px solid ${T.border}`,
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: T.rSm,
              background: T.bgSoft, border: `1px solid ${T.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: T.mono, fontSize: 11, fontWeight: 700, color: T.textMuted,
            }}>0{i + 1}</div>
            <p style={{ margin: 0, fontSize: 14, color: T.text, lineHeight: 1.55, fontWeight: 500 }}>{l}</p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 14, padding: '16px 20px', borderRadius: T.r, background: T.bgSoft,
        border: `1px solid ${T.border}`, display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{ fontSize: 13, color: T.textSoft, lineHeight: 1.5, flex: '1 1 280px' }}>
          Ces heures correspondent à <strong style={{ color: T.text }}>~{fmtNum(etp, 1)} ETP</strong> redéployable{etp > 1 ? 's' : ''} — c&apos;est l&apos;équivalent {etp >= 2 ? `de ${Math.floor(etp)} personnes à plein temps` : "d'une personne à temps partiel"}.
        </div>
        <div style={{ fontFamily: T.mono, fontSize: 12, color: T.textMuted, flexShrink: 0 }}>{fmtNum(total.heuresSemaine * 52, 0)} h libérées par an</div>
      </div>
    </section>
  );
}

// ── Charts ────────────────────────────────────────────────────────────
const CHART_COLORS = ['#2563eb','#3b82f6','#60a5fa','#22c55e','#a855f7','#f59e0b','#ec4899','#84cc16'];

function Donut({ entries, total }: { entries: [string, number][]; total: number }) {
  const r = 55, sw = 20;
  const c = 2 * Math.PI * r;
  let off = 0;
  return (
    <svg width="140" height="140" viewBox="-70 -70 140 140" style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle r={r} fill="none" stroke={T.bgSoft2} strokeWidth={sw} />
      {entries.map(([pid, val], i) => {
        const len = (val / total) * c;
        const dash = `${len} ${c - len}`;
        const dashoffset = -off;
        off += len;
        return <circle key={pid} r={r} fill="none" stroke={CHART_COLORS[i % CHART_COLORS.length]} strokeWidth={sw} strokeDasharray={dash} strokeDashoffset={dashoffset} strokeLinecap="butt" />;
      })}
    </svg>
  );
}

function CumulHeures({ proj, maxProj }: { proj: number[]; maxProj: number }) {
  const W = 800, H = 180;
  const points = proj.map((v, i) => {
    const x = (i / (proj.length - 1)) * W;
    const y = H - (v / maxProj) * (H - 20) - 10;
    return [x, y];
  });
  const path = 'M' + points.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' L ');
  return (
    <div style={{ position: 'relative' }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} preserveAspectRatio="none" style={{ display: 'block' }}>
        <defs>
          <linearGradient id="cumul-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={T.accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={T.accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1={H - 10} x2={W} y2={H - 10} stroke={T.border} strokeWidth="1" />
        <path d={`${path} L ${W},${H - 10} L 0,${H - 10} Z`} fill="url(#cumul-grad)" />
        <path d={path} fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinejoin="round" />
        {[2, 5, 11].map(idx => {
          const x = (idx / 35) * W;
          const y = H - (proj[idx] / maxProj) * (H - 20) - 10;
          return <circle key={idx} cx={x} cy={y} r="5" fill={T.accent} stroke="#fff" strokeWidth="2" />;
        })}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontFamily: T.mono, fontSize: 10, color: T.textFaint }}>
        <span>M0</span>
        <span style={{ color: T.accent }}>M3 · {fmtNum(proj[2], 0)}h</span>
        <span style={{ color: T.accent }}>M6 · {fmtNum(proj[5], 0)}h</span>
        <span style={{ color: T.accent }}>M12 · {fmtNum(proj[11], 0)}h</span>
        <span>M36 · {fmtNum(proj[35], 0)}h</span>
      </div>
    </div>
  );
}

function ChartsValue({ agents, total, profile }: { agents: Agent[]; total: ROITotal; profile: Profile }) {
  const { isMobile } = useResponsive();
  const byPole: Record<string, number> = {};
  agents.forEach(a => { const r = computeAgentROI(a, profile); byPole[a.pole] = (byPole[a.pole] || 0) + r.gainMensuel; });
  const poleEntries = Object.entries(byPole).sort((a, b) => b[1] - a[1]);
  const sumGain = poleEntries.reduce((s, [, v]) => s + v, 0) || 1;
  const barData = agents.map(a => { const r = computeAgentROI(a, profile); return { nom: a.nom, h: r.heuresSemaine }; }).sort((a, b) => b.h - a.h);
  const maxBar = Math.max(...barData.map(b => b.h), 1);
  const proj: number[] = [];
  let cumulH = 0;
  for (let m = 0; m < 36; m++) {
    const adoption = m === 0 ? 0.3 : m < 3 ? 0.5 + 0.1 * m : m < 6 ? 0.7 + 0.05 * (m - 3) : 1;
    cumulH += total.heuresSemaine * 4.33 * adoption;
    proj.push(cumulH);
  }
  const maxProj = Math.max(...proj);

  return (
    <section style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: 16 }}>Visualisations</Eyebrow>
      <h2 style={{ margin: '0 0 28px', fontSize: isMobile ? 24 : 34, fontWeight: 700, letterSpacing: '-0.035em', color: T.text }}>Où va votre temps libéré.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
        {/* Donut */}
        <div className="pdf-card" style={{ padding: '24px 24px', borderRadius: T.rLg, background: T.bgCard, border: `1px solid ${T.border}` }}>
          <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textFaint, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 20, fontWeight: 600 }}>Répartition des économies par pôle</div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <Donut entries={poleEntries} total={sumGain} />
            <div style={{ flex: 1, minWidth: 120, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {poleEntries.map(([pid, val], i) => (
                <div key={pid} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, fontSize: 13 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', minWidth: 0 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 99, background: CHART_COLORS[i % CHART_COLORS.length], flexShrink: 0 }} />
                    <span style={{ color: T.textSoft, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{POLES.find(m => m.id === pid)?.label}</span>
                  </div>
                  <span style={{ fontFamily: T.mono, color: T.text, fontVariantNumeric: 'tabular-nums', fontWeight: 600, flexShrink: 0 }}>{Math.round(val / sumGain * 100)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bar chart */}
        <div className="pdf-card" style={{ padding: '24px 24px', borderRadius: T.rLg, background: T.bgCard, border: `1px solid ${T.border}` }}>
          <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textFaint, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 20, fontWeight: 600 }}>Heures rendues par semaine · par agent</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {barData.slice(0, 7).map((b, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                  <span style={{ color: T.textSoft, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '75%' }}>{b.nom}</span>
                  <span style={{ fontFamily: T.mono, color: T.accent, fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{fmtNum(b.h, 0)} h</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: T.bgSoft2, overflow: 'hidden' }}>
                  <div style={{ width: `${(b.h / maxBar) * 100}%`, height: '100%', background: `linear-gradient(90deg,${T.accent},#3b82f6)`, borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Cumul line */}
      <div style={{ padding: '24px 24px', borderRadius: T.rLg, background: T.bgCard, border: `1px solid ${T.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20, gap: 12, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textFaint, textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 600 }}>Capacité libérée · cumul sur 36 mois</div>
          <div style={{ fontSize: 13, color: T.accent, fontFamily: T.mono, fontWeight: 600 }}>{fmtNum(proj[35], 0)} h · {fmtNum(proj[35] / 1600, 1)} ETP-années</div>
        </div>
        <CumulHeures proj={proj} maxProj={maxProj} />
      </div>
    </section>
  );
}

// ── Agent Details ─────────────────────────────────────────────────────
function ACell({ label, v, accent }: { label: string; v: string; accent?: boolean }) {
  return (
    <div style={{ background: T.bgCard2, padding: '12px 14px' }}>
      <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: accent ? T.accent : T.text, letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>{v}</div>
    </div>
  );
}

function AgentDetailsValue({ agents, profile }: { agents: Agent[]; profile: Profile }) {
  const { isMobile } = useResponsive();
  return (
    <section className="pdf-break" style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: 16 }}>Détail · agents activés</Eyebrow>
      <h2 style={{ margin: '0 0 10px', fontSize: isMobile ? 24 : 34, fontWeight: 700, letterSpacing: '-0.035em', color: T.text }}>Vos {agents.length} agent{agents.length > 1 ? 's' : ''}, en détail.</h2>
      <p style={{ margin: '0 0 28px', fontSize: isMobile ? 14 : 16, color: T.textSoft, maxWidth: 700, lineHeight: 1.6 }}>
        Chaque agent est calibré sur l&apos;effectif du pôle correspondant et un taux d&apos;adoption réaliste post-déploiement.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
        {agents.map((a, i) => {
          const r = computeAgentROI(a, profile);
          const isPriority = i === 0;
          return (
            <div key={a.id} className="pdf-card" style={{
              borderRadius: T.rLg, background: T.bgCard, overflow: 'hidden',
              border: isPriority ? `1px solid ${T.accent}` : `1px solid ${T.border}`,
              boxShadow: isPriority ? '0 0 0 1px rgba(37,99,235,.1), 0 4px 16px rgba(37,99,235,.08)' : '0 1px 4px rgba(0,0,0,.04)',
            }}>
              {/* Card header */}
              <div style={{
                padding: '16px 20px',
                borderBottom: `1px solid ${isPriority ? 'rgba(37,99,235,.15)' : T.border}`,
                background: isPriority ? 'rgba(37,99,235,.03)' : T.bgCard2,
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                      background: isPriority ? 'rgba(37,99,235,.1)' : T.bgSoft,
                      border: `1px solid ${isPriority ? 'rgba(37,99,235,.2)' : T.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <PoleIcon id={a.pole} size={13} />
                    </div>
                    <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textFaint, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      {POLES.find(m => m.id === a.pole)?.label} · {a.id}
                    </div>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em', color: T.text }}>{a.nom}</h3>
                </div>
                {isPriority && (
                  <span style={{
                    padding: '3px 10px', borderRadius: 99, flexShrink: 0,
                    background: T.accent, color: '#fff',
                    fontFamily: T.mono, fontSize: 10, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.07em',
                  }}>Priorité 1</span>
                )}
              </div>
              {/* Card body */}
              <div style={{ padding: '16px 20px' }}>
                <p style={{ margin: '0 0 16px', fontSize: 13, color: T.textSoft, lineHeight: 1.6 }}>{a.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: T.border, borderRadius: T.r, overflow: 'hidden' }}>
                  <ACell label="Heures rendues" v={`${fmtNum(r.heuresSemaine, 0)} h /sem`} accent />
                  <ACell label="Économies / an" v={fmtEur(r.gainMensuel * 12, { short: true })} accent />
                  <ACell label="Adoption visée" v={`${Math.round(a.tauxAdoption * 100)}%`} />
                  <ACell label="Délai de mise en route" v={`${a.delaiJours} jours`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Roadmap ───────────────────────────────────────────────────────────
function Roadmap({ agents, isMobile }: { agents: Agent[]; isMobile: boolean }) {
  const n = agents.length;
  let waves: Agent[][];
  if (n <= 1) waves = [agents.slice(0, 1), [], [], []];
  else if (n <= 3) waves = [agents.slice(0, 1), agents.slice(1), [], []];
  else if (n <= 6) { const h = Math.ceil(n / 2); waves = [agents.slice(0, h), agents.slice(h), [], []]; }
  else { const q = Math.ceil(n / 3); waves = [agents.slice(0, q), agents.slice(q, 2 * q), agents.slice(2 * q), []]; }

  const phases = [
    { jalon: 'J+2',  titre: 'Cadrage & 1ère mise en production', sous: 'Périmètre confirmé, premières données connectées, agent prioritaire en bêta interne.', agents: waves[0], livrables: ['Atelier de cadrage 2j', 'Connecteurs de données vérifiés', 'Premier agent en mode test'] },
    { jalon: 'J+7',  titre: 'Déploiement de la 1ère vague', sous: "L'agent prioritaire passe en production sur l'équipe pilote, suivi quotidien des métriques d'adoption.", agents: waves[1], livrables: ['Mise en production 1er agent', 'Formation utilisateurs clés', 'Rituel hebdo de pilotage'] },
    { jalon: 'J+15', titre: 'Extension & 2nde vague', sous: "Élargissement à l'ensemble des utilisateurs concernés, déploiement des agents complémentaires.", agents: waves[2], livrables: ['Roll-out complet périmètre v1', 'Tableaux de bord de gain', 'Documentation interne'] },
    { jalon: 'J+30', titre: 'Optimisation & vague suivante', sous: "Premier bilan ROI mesuré, ajustements, lancement de la vague d'agents complémentaires si pertinent.", agents: waves[3], livrables: ['Bilan ROI réel vs estimé', 'Itérations sur les agents existants', 'Cadrage vague suivante'] },
  ];

  return (
    <section className="pdf-break" style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: 16 }}>Plan de déploiement · 4 mois</Eyebrow>
      <h2 style={{ margin: '0 0 10px', fontSize: isMobile ? 22 : 34, fontWeight: 700, letterSpacing: '-0.035em', maxWidth: 900, color: T.text }}>
        Une roadmap réaliste, calibrée pour {n} agent{n > 1 ? 's' : ''}.
      </h2>
      <p style={{ margin: '0 0 28px', fontSize: isMobile ? 14 : 16, color: T.textSoft, maxWidth: 740, lineHeight: 1.6 }}>
        Le déploiement se fait par vagues pour limiter le risque, mesurer l&apos;impact à chaque étape et ajuster au plus tôt.
      </p>
      <div style={{ position: 'relative' }}>
        {!isMobile && <div style={{ position: 'absolute', left: 21, top: 44, bottom: 0, width: 2, background: `linear-gradient(180deg,${T.accent} 0%,${T.border} 100%)` }} />}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {phases.map((ph, i) => {
            const active = ph.agents.length > 0;
            return (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '44px 1fr', gap: isMobile ? 0 : 22, alignItems: 'flex-start' }}>
                {!isMobile && (
                  <div style={{
                    width: 44, height: 44, borderRadius: 99, flexShrink: 0,
                    background: active ? T.accent : T.bgCard,
                    color: active ? '#fff' : T.textMuted,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: T.mono, fontSize: 10, fontWeight: 700, letterSpacing: '-0.01em',
                    border: active ? 'none' : `1px solid ${T.border}`,
                    position: 'relative', zIndex: 1,
                    boxShadow: active ? '0 2px 8px rgba(37,99,235,.3)' : 'none',
                  }}>{ph.jalon}</div>
                )}
                <div className="pdf-card" style={{
                  padding: isMobile ? '16px 16px' : '20px 24px', borderRadius: T.rLg,
                  background: T.bgCard, border: `1px solid ${T.border}`,
                  opacity: !active && i > 0 ? 0.5 : 1,
                }}>
                  {isMobile && (
                    <div style={{ fontFamily: T.mono, fontSize: 10, color: active ? T.accent : T.textMuted, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{ph.jalon}</div>
                  )}
                  <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: T.text }}>{ph.titre}</h3>
                  <p style={{ margin: '0 0 16px', fontSize: 13, color: T.textSoft, lineHeight: 1.55 }}>{ph.sous}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 12 : 20 }}>
                    <div>
                      <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textFaint, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>Agents · {ph.agents.length}</div>
                      {ph.agents.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {ph.agents.map(a => (
                            <div key={a.id} style={{ fontSize: 13, color: T.text, display: 'flex', gap: 8, alignItems: 'center' }}>
                              <Ic d={SVG.arrowRight} size={12} color={T.accent} />
                              {a.nom}
                            </div>
                          ))}
                        </div>
                      ) : <div style={{ fontSize: 13, color: T.textMuted, fontStyle: 'italic' }}>{i === 3 ? 'Selon vos besoins post-bilan.' : '—'}</div>}
                    </div>
                    <div>
                      <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textFaint, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>Livrables clés</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {ph.livrables.map((l, j) => (
                          <div key={j} style={{ fontSize: 13, color: T.textSoft, display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.5 }}>
                            <span style={{ width: 5, height: 5, borderRadius: 99, background: T.accent, flexShrink: 0, marginTop: 6 }} />
                            {l}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Agents Marqués ────────────────────────────────────────────────────
function AgentsMarques({ profile }: { profile: Profile }) {
  const { isMobile } = useResponsive();
  const marques = (profile?.agentsMarques || []).map(id => AGENTS.find(a => a.id === id)).filter(Boolean) as Agent[];
  if (!marques.length) return null;
  return (
    <section style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: 16 }}>À explorer · audit dédié</Eyebrow>
      <h2 style={{ margin: '0 0 10px', fontSize: isMobile ? 22 : 34, fontWeight: 700, letterSpacing: '-0.035em', maxWidth: 800, color: T.text }}>
        {marques.length} agent{marques.length > 1 ? 's' : ''} complémentaire{marques.length > 1 ? 's' : ''} à approfondir.
      </h2>
      <p style={{ margin: '0 0 24px', fontSize: isMobile ? 14 : 16, color: T.textSoft, maxWidth: 760, lineHeight: 1.6 }}>
        Vous avez identifié ces agents comme pertinents. Ils ne sont <strong style={{ color: T.text }}>pas inclus dans l&apos;estimation</strong> mais nous les chiffrerons lors de votre audit gratuit.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
        {marques.map(a => (
          <div key={a.id} className="pdf-card" style={{
            padding: '18px 20px', borderRadius: T.rLg,
            background: 'rgba(37,99,235,.04)', border: `1px solid rgba(37,99,235,.18)`,
            display: 'flex', gap: 14, alignItems: 'flex-start',
          }}>
            <IconBox name="bookmark" size={16} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textFaint, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>
                {POLES.find(p => p.id === a.pole)?.label} · {a.id}
              </div>
              <h3 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 600, letterSpacing: '-0.02em', color: T.text }}>{a.nom}</h3>
              <p style={{ margin: 0, fontSize: 13, color: T.textSoft, lineHeight: 1.5 }}>{a.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Tableau de synthèse ───────────────────────────────────────────────
function TableauValue({ agents, profile }: { agents: Agent[]; profile: Profile }) {
  const { isMobile } = useResponsive();
  return (
    <section style={{ marginBottom: isMobile ? 56 : 96 }}>
      <Eyebrow style={{ marginBottom: 16 }}>Tableau de synthèse</Eyebrow>
      <h2 style={{ margin: '0 0 24px', fontSize: isMobile ? 22 : 34, fontWeight: 700, letterSpacing: '-0.035em', color: T.text }}>Tous vos gains, en clair.</h2>
      <div style={{ overflowX: 'auto', borderRadius: T.rLg, border: `1px solid ${T.border}` }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 540 }}>
          <thead>
            <tr style={{ background: T.bgCard2, textAlign: 'left' }}>
              {['Agent', 'Pôle', 'Heures /sem', 'Économies /an', 'Adoption', 'Délai'].map(h => (
                <th key={h} style={{ padding: '12px 16px', fontFamily: T.mono, fontSize: 10, fontWeight: 600, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', borderBottom: `1px solid ${T.border}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {agents.map((a, i) => {
              const r = computeAgentROI(a, profile);
              return (
                <tr key={a.id} style={{ background: i % 2 === 0 ? T.bgCard : 'transparent' }}>
                  <td style={{ padding: '12px 16px', borderBottom: `1px solid ${T.border}` }}>
                    <div style={{ fontWeight: 600, color: T.text, fontSize: 13 }}>{a.nom}</div>
                    <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, marginTop: 2 }}>{a.id}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: T.textSoft, borderBottom: `1px solid ${T.border}`, fontSize: 13 }}>{POLES.find(m => m.id === a.pole)?.label}</td>
                  <td style={{ padding: '12px 16px', fontFamily: T.mono, color: T.accent, borderBottom: `1px solid ${T.border}`, fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{fmtNum(r.heuresSemaine, 0)} h</td>
                  <td style={{ padding: '12px 16px', fontFamily: T.mono, color: T.accent, borderBottom: `1px solid ${T.border}`, fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{fmtEur(r.gainMensuel * 12, { short: true })}</td>
                  <td style={{ padding: '12px 16px', fontFamily: T.mono, color: T.textSoft, borderBottom: `1px solid ${T.border}` }}>{Math.round(a.tauxAdoption * 100)}%</td>
                  <td style={{ padding: '12px 16px', fontFamily: T.mono, color: T.textSoft, borderBottom: `1px solid ${T.border}` }}>{a.delaiJours} j</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr style={{ background: 'rgba(37,99,235,.05)' }}>
              <td colSpan={2} style={{ padding: '14px 16px', fontWeight: 600, color: T.text }}>Total · {agents.length} agent{agents.length > 1 ? 's' : ''}</td>
              <td style={{ padding: '14px 16px', fontFamily: T.mono, color: T.accent, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                {fmtNum(agents.reduce((s, a) => s + computeAgentROI(a, profile).heuresSemaine, 0), 0)} h
              </td>
              <td style={{ padding: '14px 16px', fontFamily: T.mono, color: T.accent, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                {fmtEur(agents.reduce((s, a) => s + computeAgentROI(a, profile).gainMensuel * 12, 0), { short: true })}
              </td>
              <td colSpan={2}></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

// ── Disclaimer ────────────────────────────────────────────────────────
function DiscFactor({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={{ padding: '18px 20px', borderRadius: T.r, background: T.bgCard, border: `1px solid ${T.border}` }}>
      <div style={{ marginBottom: 12 }}>
        <IconBox name={icon} size={16} bgColor={T.bgSoft} borderColor={T.border} iconColor={T.textSoft} />
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6 }}>{text}</div>
    </div>
  );
}

function DisclaimerEstimation() {
  const { isMobile } = useResponsive();
  return (
    <section style={{ marginBottom: 60 }}>
      <div style={{
        padding: isMobile ? '20px 18px' : '28px 32px', borderRadius: T.rLg,
        background: T.bgSoft, border: `1px solid ${T.border}`,
        borderLeft: `3px solid ${T.accent}`,
      }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
          <IconBox name="info" size={16} bgColor="rgba(37,99,235,.08)" borderColor="rgba(37,99,235,.2)" />
          <h3 style={{ margin: 0, fontSize: isMobile ? 15 : 19, fontWeight: 600, letterSpacing: '-0.02em', color: T.text }}>Estimation indicative · à valider en audit</h3>
        </div>
        <p style={{ margin: '0 0 16px', fontSize: 13, color: T.textSoft, lineHeight: 1.65, maxWidth: 880 }}>
          Les économies et heures rendues présentées ici sont des <strong style={{ color: T.text }}>estimations</strong> construites à partir de moyennes sectorielles et des paramètres que vous avez saisis.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 10, marginBottom: 20 }}>
          <DiscFactor icon="building" title="Taille et complexité" text="Nombre d'utilisateurs réels, processus existants, niveau d'intégration souhaité." />
          <DiscFactor icon="plug" title="Outils et intégrations" text="CRM, téléphonie, ERP, outils métiers spécifiques peuvent simplifier ou enrichir le déploiement." />
          <DiscFactor icon="zap" title="Volume et adoption" text="Plus vos équipes utilisent les agents, plus le gain réel s'approche du haut de la fourchette." />
        </div>
        <p style={{ margin: 0, fontSize: 14, color: T.textSoft, lineHeight: 1.65, maxWidth: 880 }}>
          Pour un <strong style={{ color: T.text }}>chiffrage précis</strong>, nos experts Althoce vous proposent un audit gratuit de 30 minutes. Vous repartez avec un plan d&apos;action concret.
        </p>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────
function FinalCTA({ lead, total }: { lead: LeadData; total: ROITotal }) {
  const { isMobile } = useResponsive();
  return (
    <section style={{
      padding: isMobile ? '32px 22px' : 52, borderRadius: T.rXl,
      background: T.bgCard, border: `1px solid ${T.border}`,
      position: 'relative', overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(0,0,0,.07)',
    }}>
      {/* Accent glow */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(37,99,235,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
        <Eyebrow style={{ marginBottom: isMobile ? 16 : 22 }}>La prochaine étape</Eyebrow>
        <h2 style={{ margin: `0 0 ${isMobile ? 14 : 18}px`, fontSize: isMobile ? 26 : 44, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: T.text }}>
          Échangeons 30 minutes.{' '}
          <span style={{ color: T.textMuted }}>On valide ensemble votre périmètre.</span>
        </h2>
        <p style={{ margin: `0 0 ${isMobile ? 24 : 32}px`, fontSize: isMobile ? 14 : 16, color: T.textSoft, lineHeight: 1.6 }}>
          {lead?.prenom ? `${lead.prenom}, on` : 'On'} regarde votre stack, vos process et vos contraintes et on vous dit franchement
          si l&apos;IA peut vous faire gagner les <strong style={{ color: T.text }}>{fmtEur(total.gainAnnuel, { short: true })}</strong> annoncés. Pas de slides, pas de relance commerciale.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <CTA size={isMobile ? 'md' : 'lg'} href="/contact">Réserver mon audit gratuit 30 min</CTA>
        </div>
      </div>
    </section>
  );
}
