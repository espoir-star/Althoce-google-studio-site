'use client';

import React, { useMemo } from 'react';
import { type Profile, type Agent } from '@/lib/roi/data';
import { computeTotalROI, fmtEur, fmtNum } from '@/lib/roi/calculator';
import { T, useResponsive, AnimNumber, CTA } from './RoiComponents';

function StatRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${T.border}`, fontSize: 13 }}>
      <span style={{ color: T.textSoft, fontWeight: 500 }}>{label}</span>
      <span style={{ color: accent ? T.accent : T.text, fontFamily: T.mono, fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </span>
    </div>
  );
}

function CapaciteBar({ heuresGaspillees, heuresRendues }: { heuresGaspillees: number; heuresRendues: number }) {
  const pct = heuresGaspillees > 0 ? Math.min(100, Math.round((heuresRendues / heuresGaspillees) * 100)) : 0;
  return (
    <div style={{ padding: '16px 18px', borderRadius: T.r, background: T.bgSoft, border: `1px solid ${T.border}`, marginTop: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
        <div style={{ fontSize: 11, color: T.textMuted, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 600 }}>
          Capacité libérée / sem
        </div>
        <div style={{ fontSize: 13, color: T.accent, fontFamily: T.mono, fontWeight: 700 }}>+{pct}%</div>
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
        <div style={{ flex: 1, fontSize: 12, color: T.textSoft }}>
          <div style={{ color: T.textFaint, fontSize: 11, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Aujourd&apos;hui</div>
          <div style={{ fontWeight: 600, color: T.textSoft }}>{fmtNum(heuresGaspillees, 0)} h gaspillées</div>
        </div>
        <div style={{ flex: 1, fontSize: 12, textAlign: 'right' }}>
          <div style={{ color: T.textFaint, fontSize: 11, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Avec Althoce</div>
          <div style={{ fontWeight: 700, color: T.accent }}>{fmtNum(heuresRendues, 0)} h libérées</div>
        </div>
      </div>
      <div style={{ position: 'relative', height: 6, borderRadius: 99, background: T.bgSoft2, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: `linear-gradient(90deg,${T.accent},#3b82f6)`, borderRadius: 99, transition: 'width .5s cubic-bezier(.16,1,.3,1)' }} />
      </div>
    </div>
  );
}

function MetricGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: T.border, borderRadius: T.r, overflow: 'hidden', margin: '20px 0' }}>
      {children}
    </div>
  );
}

function MetricCell({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: T.bgCard, padding: '14px 16px' }}>
      <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 600, marginBottom: 5 }}>{label}</div>
      <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', color: T.text }}>{value}</div>
    </div>
  );
}

export function LivePanel({ profile, recommended, onSubmit }: {
  profile: Profile; recommended: Agent[]; onSubmit: () => void;
}) {
  const { isMobile } = useResponsive();
  const activeAgents = useMemo(
    () => recommended.filter(a => !profile.agentsDeselectionnes.includes(a.id)),
    [recommended, profile.agentsDeselectionnes],
  );
  const total = useMemo(() => computeTotalROI(activeAgents, profile), [activeAgents, profile]);
  const empty = activeAgents.length === 0 || profile.polesActifs.length === 0;

  // Mobile: fixed bottom bar
  if (isMobile) {
    return (
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${T.border}`,
        padding: '10px 20px 10px', display: 'flex', alignItems: 'center', gap: 12,
        boxShadow: '0 -4px 24px rgba(0,0,0,.08)',
      }} aria-live="polite">
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: T.good, animation: 'alt-pulse-dot 1.6s infinite', display: 'inline-block' }} />
          <span style={{ fontFamily: T.mono, fontSize: 9, fontWeight: 700, color: T.good, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live</span>
        </div>
        {empty ? (
          <div style={{ flex: 1, fontSize: 13, color: T.textMuted, lineHeight: 1.3 }}>
            Sélectionnez des pôles pour voir vos économies
          </div>
        ) : (
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.04em', color: T.accent, fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
              <AnimNumber value={total.gainAnnuel} format={v => fmtEur(v, { short: true })} />
            </div>
            <div style={{ fontSize: 10, color: T.textMuted, fontFamily: T.mono, letterSpacing: '0.05em', marginTop: 1, fontWeight: 600, textTransform: 'uppercase' }}>estimé / an</div>
          </div>
        )}
        <CTA size="sm" onClick={onSubmit} disabled={empty} style={{ flexShrink: 0 }}>Rapport</CTA>
      </div>
    );
  }

  // Desktop: sticky sidebar
  return (
    <aside style={{
      position: 'sticky', top: 88,
      background: T.bgCard,
      border: `1px solid ${T.border}`,
      borderRadius: T.rXl,
      padding: 28,
      color: T.text,
      boxShadow: '0 4px 24px rgba(0,0,0,.07), 0 1px 4px rgba(0,0,0,.04)',
      overflow: 'hidden',
    }} aria-live="polite">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: T.textMuted, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
          Estimation · {profile.nomEntreprise || 'votre entreprise'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: T.good, animation: 'alt-pulse-dot 1.6s infinite', display: 'inline-block' }} />
          <span style={{ fontFamily: T.mono, fontSize: 10, fontWeight: 700, color: T.good, textTransform: 'uppercase', letterSpacing: '0.09em' }}>Live</span>
        </div>
      </div>

      {/* Main metric — always visible */}
      {empty ? (
        <div style={{ padding: '20px 0 12px' }}>
          <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: T.textFaint }}>—</div>
          <div style={{ fontSize: 13, color: T.textSoft, marginTop: 14, lineHeight: 1.65, maxWidth: 260 }}>
            Sélectionnez vos pôles et irritants pour voir vos économies annuelles s&apos;animer.
          </div>
        </div>
      ) : (
        <div style={{ marginBottom: 4 }}>
          <div style={{ fontSize: 11, fontFamily: T.mono, color: T.accent, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 6 }}>
            Économies estimées / an
          </div>
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1, color: T.accent }}>
            <AnimNumber value={total.gainAnnuel} format={v => fmtEur(v, { short: true })} duration={500} />
          </div>
          <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8, fontFamily: T.mono, fontWeight: 500 }}>
            fourchette {fmtEur(total.gainAnnuel * 0.85, { short: true })} → {fmtEur(total.gainAnnuel * 1.15, { short: true })}
          </div>
        </div>
      )}

      {/* Details — blurred when locked */}
      {!empty && (
        <div style={{ position: 'relative', marginTop: 20 }}>
          <div style={{ filter: 'blur(5px)', userSelect: 'none', pointerEvents: 'none' }}>
            <MetricGrid>
              <MetricCell label="Heures / sem" value={`${fmtNum(total.heuresSemaine, 0)} h`} />
              <MetricCell label="Heures / mois" value={`${fmtNum(total.heuresSemaine * 4.33, 0)} h`} />
              <MetricCell label="Agents activés" value={`${activeAgents.length}`} />
              <MetricCell label="Pôles transformés" value={`${profile.polesActifs.length}`} />
            </MetricGrid>
            <div>
              <StatRow label="ROI net an 1" value={fmtEur(total.roiNetAn1, { short: true })} accent />
              <StatRow label="Retour sur invest." value={`~${Math.max(1, Math.round(total.paybackMois))} mois`} />
            </div>
            <CapaciteBar heuresGaspillees={total.heuresGaspillees} heuresRendues={total.heuresSemaine} />
          </div>

          <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 10, padding: 16,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(37,99,235,.1)', border: '1px solid rgba(37,99,235,.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
              }}>🔒</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', color: T.text, marginBottom: 4 }}>
                  Rapport détaillé
                </div>
                <div style={{ fontSize: 12, color: T.textSoft, lineHeight: 1.6, maxWidth: 190 }}>
                  Complétez les étapes pour débloquer l&apos;analyse complète.
                </div>
              </div>
            </div>
        </div>
      )}

      {/* CTA */}
      <div style={{ marginTop: 20 }}>
        <CTA size="lg" onClick={onSubmit} style={{ width: '100%', justifyContent: 'center' }}>
          Voir mon rapport ROI
        </CTA>
        <div style={{ fontSize: 11, color: T.textFaint, textAlign: 'center', marginTop: 10, fontFamily: T.mono, fontWeight: 500, letterSpacing: '0.03em' }}>
          Calcul transparent · hypothèses visibles
        </div>
      </div>
    </aside>
  );
}
