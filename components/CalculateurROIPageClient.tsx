'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { defaultProfile, type Profile, type Agent, POLES } from '@/lib/roi/data';
import { recommendAgents, computeTotalROI, type ROITotal } from '@/lib/roi/calculator';
import { CALC_CSS, T, useResponsive, CTA, Eyebrow, Toast } from '@/components/roi/RoiComponents';
import { Section01, Section02, Section03, Section04, Section05 } from '@/components/roi/RoiSections';
import { LivePanel } from '@/components/roi/RoiLivePanel';
import { LeadModal } from '@/components/roi/RoiLeadModal';
import { Report } from '@/components/roi/RoiReport';
import Footer from '@/components/Footer';

const PROFILE_VERSION = 'v3';

const STEPS = [
  { n: 1, label: 'Entreprise' },
  { n: 2, label: 'Équipes' },
  { n: 3, label: 'Défis' },
  { n: 4, label: 'Résultats' },
];

function fmtCA(v: number): string {
  if (v >= 1_000_000_000) return `${(v / 1_000_000_000).toFixed(1)}Md€`;
  if (v >= 1_000_000) return `${Math.round(v / 1_000_000)}M€`;
  if (v >= 1_000) return `${Math.round(v / 1_000)}k€`;
  return `${v}€`;
}

function getStepSummary(n: number, profile: Profile): string {
  if (n === 1) {
    const parts: string[] = [];
    if (profile.nomEntreprise) parts.push(profile.nomEntreprise);
    if (profile.secteur) parts.push(profile.secteur);
    if (profile.effectifTotal) parts.push(`${profile.effectifTotal} pers.`);
    if (profile.ca) parts.push(`CA ${fmtCA(profile.ca)}`);
    return parts.join(' · ') || 'Profil entreprise';
  }
  if (n === 2) {
    const poles = profile.polesActifs;
    if (!poles.length) return 'Aucun pôle sélectionné';
    const labels = poles.map(id => POLES.find(p => p.id === id)?.label || id);
    return labels.slice(0, 3).join(', ') + (labels.length > 3 ? ` +${labels.length - 3}` : '');
  }
  if (n === 3) {
    const total = Object.values(profile.irritants).reduce((s, arr) => s + arr.length, 0);
    return total === 0 ? 'Aucun défi sélectionné' : `${total} défi${total > 1 ? 's' : ''} identifié${total > 1 ? 's' : ''}`;
  }
  return '';
}

function StepProgress({ step, onGoTo, isMobile }: { step: number; onGoTo: (n: number) => void; isMobile: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: isMobile ? 28 : 36 }}>
      {STEPS.map((s, i) => {
        const done = s.n < step;
        const active = s.n === step;
        return (
          <React.Fragment key={s.n}>
            <button
              onClick={() => done ? onGoTo(s.n) : undefined}
              disabled={!done}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                background: 'none', border: 'none', padding: '0 4px',
                cursor: done ? 'pointer' : 'default',
                opacity: done || active ? 1 : 0.4,
                flexShrink: 0,
              }}
            >
              <div style={{
                width: isMobile ? 28 : 32, height: isMobile ? 28 : 32,
                borderRadius: '50%',
                background: done ? T.good : active ? T.accent : 'transparent',
                border: `2px solid ${done ? T.good : active ? T.accent : T.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700,
                color: done || active ? '#fff' : T.textMuted,
                transition: 'all .3s ease',
                boxShadow: active ? `0 0 0 4px rgba(37,99,235,.15)` : 'none',
              }}>
                {done ? '✓' : s.n}
              </div>
              {!isMobile && (
                <span style={{
                  fontSize: 11, fontFamily: T.mono, fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: active ? T.accent : done ? T.good : T.textMuted,
                  whiteSpace: 'nowrap',
                }}>
                  {s.label}
                </span>
              )}
            </button>
            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1, height: 2,
                background: s.n < step ? T.good : T.border,
                transition: 'background .3s ease',
                margin: isMobile ? '0 4px' : '0 8px',
                marginBottom: isMobile ? 0 : 18,
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function StepDoneRow({ n, profile, onEdit }: { n: number; profile: Profile; onEdit: () => void }) {
  const s = STEPS.find(st => st.n === n)!;
  return (
    <button
      onClick={onEdit}
      style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 16px', borderRadius: T.r, marginBottom: 8,
        background: 'rgba(34,197,94,.05)', border: '1px solid rgba(34,197,94,.2)',
        cursor: 'pointer', textAlign: 'left',
        transition: 'background .2s',
      }}
    >
      <div style={{
        width: 24, height: 24, borderRadius: '50%', background: T.good,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, color: '#fff', fontWeight: 700, flexShrink: 0,
      }}>✓</div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: 11, fontFamily: T.mono, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          color: T.good, marginBottom: 2,
        }}>
          Étape {n} · {s.label}
        </div>
        <div style={{ fontSize: 13, color: T.textSoft, fontWeight: 500 }}>
          {getStepSummary(n, profile)}
        </div>
      </div>
      <div style={{ fontSize: 12, color: T.textMuted, fontFamily: T.mono, flexShrink: 0 }}>
        Modifier
      </div>
    </button>
  );
}

export default function CalculateurROIPageClient() {
  const { isMobile } = useResponsive();
  const px = isMobile ? 20 : 48;

  const [profile, setProfile] = useState<Profile>(() => {
    if (typeof window === 'undefined') return defaultProfile();
    try {
      const saved = localStorage.getItem('althoce-roi-profile');
      const ts = parseInt(localStorage.getItem('althoce-roi-ts') || '0', 10);
      const ver = localStorage.getItem('althoce-roi-ver');
      if (saved && ver === PROFILE_VERSION && Date.now() - ts < 30 * 60 * 1000) {
        const p = JSON.parse(saved) as Profile;
        if (p.polesActifs && p.effectifTotal) return p;
      }
    } catch {}
    return defaultProfile();
  });
  const [step, setStep] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const [lead, setLead] = useState<{ prenom?: string; nom?: string; email?: string; tel?: string; entreprise?: string } | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const savedLead = localStorage.getItem('althoce-roi-lead');
      const leadTs = parseInt(localStorage.getItem('althoce-roi-lead-ts') || '0', 10);
      if (savedLead && Date.now() - leadTs < 4 * 60 * 60 * 1000) return JSON.parse(savedLead);
    } catch {}
    return null;
  });
  const [view, setView] = useState<'calc' | 'report'>(() => {
    if (typeof window === 'undefined') return 'calc';
    try {
      const savedLead = localStorage.getItem('althoce-roi-lead');
      const leadTs = parseInt(localStorage.getItem('althoce-roi-lead-ts') || '0', 10);
      if (savedLead && Date.now() - leadTs < 4 * 60 * 60 * 1000) return 'report';
    } catch {}
    return 'calc';
  });
  const [showLead, setShowLead] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('althoce-roi-profile', JSON.stringify(profile));
      localStorage.setItem('althoce-roi-ts', String(Date.now()));
      localStorage.setItem('althoce-roi-ver', PROFILE_VERSION);
    } catch {}
  }, [profile]);

  const set = (patch: Partial<Profile>) => setProfile(p => ({ ...p, ...patch }));

  const [stepError, setStepError] = useState<string | null>(null);

  const goTo = (n: number) => {
    setStep(n);
    setAnimKey(k => k + 1);
    setStepError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateStep = (n: number): string | null => {
    if (n === 1) {
      if (!profile.nomEntreprise.trim()) return 'Le nom de l\'entreprise est requis.';
      if (profile.secteur === 'Autre / Non listé' && !(profile.secteurPersonnalise || '').trim())
        return 'Précisez votre secteur d\'activité.';
    }
    if (n === 2) {
      if (profile.polesActifs.length === 0) return 'Sélectionnez au moins un pôle métier.';
    }
    return null;
  };

  const next = () => {
    const err = validateStep(step);
    if (err) { setStepError(err); return; }
    if (step < 4) goTo(step + 1);
  };
  const prev = () => { if (step > 1) goTo(step - 1); };

  const recommendedByPole = useMemo(() => {
    return recommendAgents(profile, { grouped: true }) as Record<string, Agent[]>;
  }, [profile]);

  const recommendedFlat = useMemo(() => {
    const flat: Agent[] = [];
    profile.polesActifs.forEach(p => (recommendedByPole[p] || []).forEach(a => flat.push(a)));
    return flat;
  }, [recommendedByPole, profile.polesActifs]);

  const activeAgents = useMemo(
    () => recommendedFlat.filter(a => !profile.agentsDeselectionnes.includes(a.id)),
    [recommendedFlat, profile.agentsDeselectionnes],
  );

  const total: ROITotal = useMemo(() => computeTotalROI(activeAgents, profile), [activeAgents, profile]);
  const empty = activeAgents.length === 0 || profile.polesActifs.length === 0;

  const handleSubmitLead = (data: { prenom: string; nom: string; email: string; tel: string; entreprise: string; consentement: boolean }) => {
    setLead(data);
    setShowLead(false);
    setView('report');
    window.scrollTo({ top: 0 });
    try {
      localStorage.setItem('althoce-roi-lead', JSON.stringify(data));
      localStorage.setItem('althoce-roi-lead-ts', String(Date.now()));
    } catch {}
  };

  if (view === 'report') {
    return (
      <>
        <style>{CALC_CSS}</style>
        <Report
          profile={profile}
          lead={lead}
          agents={activeAgents}
          total={total}
          onBackToCalc={() => {
            setView('calc');
            setLead(null);
            window.scrollTo({ top: 0 });
            try {
              localStorage.removeItem('althoce-roi-lead');
              localStorage.removeItem('althoce-roi-lead-ts');
            } catch {}
          }}
        />
        <Footer showCta={false} />
      </>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: T.bg, color: T.text, fontFamily: T.font, position: 'relative' }}>
      <style>{CALC_CSS}</style>

      {/* Subtle grid pattern */}
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,0,0,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.018) 1px,transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse 90% 50% at 50% 0%,black,transparent)',
      }} />

      {/* Accent glow */}
      <div aria-hidden="true" style={{
        position: 'fixed', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(37,99,235,.07) 0%,transparent 65%)',
        filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Hero */}
      <section style={{
        position: 'relative', zIndex: 1, maxWidth: 1320, margin: '0 auto',
        padding: `${isMobile ? 32 : 64}px ${px}px ${isMobile ? 28 : 44}px`,
        paddingTop: isMobile ? 110 : 144,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: isMobile ? 20 : 28, flexWrap: 'wrap' }}>
          <Eyebrow>Calculateur ROI · Agents IA</Eyebrow>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px',
            borderRadius: 9999, background: 'rgba(34,197,94,.08)', border: '1px solid rgba(34,197,94,.25)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: T.good, animation: 'alt-pulse-dot 1.6s infinite', display: 'inline-block' }} />
            <span style={{ fontFamily: T.mono, fontSize: 10, fontWeight: 700, color: T.good, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {isMobile ? 'Live' : 'Calcul en direct'}
            </span>
          </div>
        </div>

        <h1 style={{ margin: 0, fontSize: 'clamp(30px,4.5vw,60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.07, maxWidth: 900, color: T.text }}>
          Combien un agent IA Althoce ferait gagner à{' '}
          <span style={{ color: T.accent }}>votre entreprise</span>&nbsp;?
        </h1>
        <p style={{ margin: '16px 0 0', fontSize: isMobile ? 15 : 17, color: T.textSoft, maxWidth: 620, lineHeight: 1.72 }}>
          Réponse personnalisée en 3 minutes. Calcul transparent, hypothèses visibles qui s&apos;animent à chaque réponse.
        </p>
      </section>

      {/* Split layout */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1320, margin: '0 auto',
        padding: `0 ${px}px ${isMobile ? 120 : 140}px`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'minmax(0,1.35fr) minmax(360px,1fr)',
        gap: isMobile ? 16 : 36,
        alignItems: 'flex-start',
      }}>
        <main>
          {/* Step progress */}
          <StepProgress step={step} onGoTo={goTo} isMobile={isMobile} />

          {/* Completed step summaries */}
          {step > 1 && <StepDoneRow n={1} profile={profile} onEdit={() => goTo(1)} />}
          {step > 2 && <StepDoneRow n={2} profile={profile} onEdit={() => goTo(2)} />}
          {step > 3 && <StepDoneRow n={3} profile={profile} onEdit={() => goTo(3)} />}

          {/* Current step */}
          <div key={animKey} className="roi-step-in">
            {step === 1 && <Section01 profile={profile} set={set} />}
            {step === 2 && <Section02 profile={profile} set={set} />}
            {step === 3 && <Section03 profile={profile} set={set} />}
            {step === 4 && (
              <>
                <Section04 profile={profile} set={set} />
                <Section05 profile={profile} set={set} recommendedByPole={recommendedByPole} onToast={setToast} />

                {/* Final CTA block */}
                <div style={{
                  marginTop: 20, padding: isMobile ? 22 : 32, borderRadius: T.rXl,
                  background: 'linear-gradient(135deg,rgba(37,99,235,.06) 0%,#fff 70%)',
                  border: '1px solid rgba(37,99,235,.2)',
                  boxShadow: '0 2px 12px rgba(37,99,235,.08)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: 16, flexWrap: 'wrap',
                }}>
                  <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ margin: 0, fontSize: isMobile ? 17 : 20, fontWeight: 700, letterSpacing: '-0.025em', color: T.text }}>
                      Prêt à recevoir le rapport détaillé ?
                    </h3>
                    <p style={{ margin: '6px 0 0', fontSize: 13, color: T.textSoft, lineHeight: 1.55 }}>
                      Avant/après · graphiques · plan d&apos;action chiffré.
                    </p>
                  </div>
                  <CTA size={isMobile ? 'md' : 'lg'} onClick={() => {
                    const e1 = validateStep(1);
                    if (e1) { goTo(1); setStepError(e1); return; }
                    const e2 = validateStep(2);
                    if (e2) { goTo(2); setStepError(e2); return; }
                    setShowLead(true);
                  }} disabled={empty}>
                    Voir mon rapport ROI
                  </CTA>
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: step > 1 ? 'space-between' : 'flex-end',
            alignItems: 'center',
            marginTop: 24, gap: 12,
          }}>
            {step > 1 && (
              <CTA primary={false} onClick={prev}>← Précédent</CTA>
            )}
            {step < 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                {stepError && (
                  <div style={{
                    fontSize: 12, color: T.warn, fontFamily: T.mono, fontWeight: 600,
                    padding: '8px 12px', borderRadius: T.rSm,
                    background: 'rgba(239,68,68,.06)', border: '1px solid rgba(239,68,68,.2)',
                  }}>
                    ⚠ {stepError}
                  </div>
                )}
                <CTA onClick={next}>Étape suivante</CTA>
              </div>
            )}
          </div>
        </main>

        <LivePanel
          profile={profile}
          recommended={recommendedFlat}
          onSubmit={() => {
            const e1 = validateStep(1);
            if (e1) { goTo(1); setStepError(e1); return; }
            const e2 = validateStep(2);
            if (e2) { goTo(2); setStepError(e2); return; }
            setShowLead(true);
          }}
        />
      </div>

      {showLead && (
        <LeadModal
          onClose={() => setShowLead(false)}
          onSubmit={handleSubmitLead}
          summary={total}
          profile={profile}
          activeAgents={activeAgents}
          total={total}
        />
      )}

      {toast && <Toast message={toast} onDone={() => setToast(null)} />}

      <Footer showCta={false} />
    </div>
  );
}
