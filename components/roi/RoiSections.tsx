'use client';

import React, { useState } from 'react';
import { POLES, AGENTS, IRRITANTS, type Profile, type Agent } from '@/lib/roi/data';
import { computeAgentROI, computeCoutHoraire, getAllAgentsForPole, fmtEur, fmtNum } from '@/lib/roi/calculator';
import { T, useResponsive, SectionCard, Field, TextInput, LogSlider, LinSlider, ToggleCard } from './RoiComponents';

// ── Section 01 — Entreprise ───────────────────────────────────────────
export function Section01({ profile, set }: { profile: Profile; set: (p: Partial<Profile>) => void }) {
  const { isMobile } = useResponsive();
  const onEffectifTotalChange = (v: number) => {
    const newEffectifs = { ...profile.effectifs };
    profile.polesActifs.forEach(pole => {
      if (!profile.effectifsManuels[pole]) {
        const repart = (POLES.find(p => p.id === pole) || { repartition: 0.05 }).repartition;
        newEffectifs[pole] = Math.max(1, Math.round(v * repart));
      }
    });
    set({ effectifTotal: v, effectifs: newEffectifs });
  };
  return (
    <SectionCard n="01" title="Votre entreprise" subtitle="L'effectif et le CA pilotent l'ensemble du calcul.">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24 }}>
        <Field label="Nom de l'entreprise">
          <TextInput value={profile.nomEntreprise} onChange={v => set({ nomEntreprise: v })} placeholder="Ex : Acme Industries" />
        </Field>
        <Field label="Secteur d'activité">
          <select value={profile.secteur}
            onChange={e => set({ secteur: e.target.value, secteurPersonnalise: e.target.value === 'Autre / Non listé' ? (profile.secteurPersonnalise || '') : '' })}
            style={{
              width: '100%', padding: '12px 14px', borderRadius: T.rSm,
              background: T.bgCard2, border: `1px solid ${T.border}`,
              color: T.text, fontSize: 15, fontFamily: T.font,
              outline: 'none', cursor: 'pointer',
            }}>
            {['Conseil & Services B2B','Commerce & Distribution','Industrie & Fabrication','BTP & Construction',
              'Hôtellerie & Restauration','Santé & Bien-être','Immobilier','Tech & SaaS','Finance & Assurance',
              'Éducation & Formation','Artisanat','Autre / Non listé'].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {profile.secteur === 'Autre / Non listé' && (
            <div className="alt-fade-in" style={{ marginTop: 10 }}>
              <TextInput value={profile.secteurPersonnalise || ''} onChange={v => set({ secteurPersonnalise: v })} placeholder="Précisez votre secteur…" />
            </div>
          )}
        </Field>
        <Field label="Effectif total" hint="Réparti automatiquement entre les pôles activés.">
          <LogSlider min={1} max={1000} value={profile.effectifTotal} onChange={onEffectifTotalChange}
            format={v => v >= 1000 ? '1000+ pers.' : `${v} pers.`} />
        </Field>
        <Field label="Chiffre d'affaires annuel" hint="Module la séniorité moyenne et le volume de transactions.">
          <LogSlider min={100_000} max={1_000_000_000} value={profile.ca}
            onChange={v => set({ ca: v })} format={v => fmtEur(v, { short: true })} />
        </Field>
      </div>
    </SectionCard>
  );
}

// ── Section 02 — Pôles ────────────────────────────────────────────────
export function Section02({ profile, set }: { profile: Profile; set: (p: Partial<Profile>) => void }) {
  const { isMobile } = useResponsive();
  const MAX_POLES = 3;
  const togglePole = (id: string) => {
    const active = profile.polesActifs.includes(id);
    let nextPoles: string[], nextEffectifs = { ...profile.effectifs }, nextManuels = { ...profile.effectifsManuels };
    if (active) {
      nextPoles = profile.polesActifs.filter(p => p !== id);
      delete nextEffectifs[id]; delete nextManuels[id];
    } else {
      if (profile.polesActifs.length >= MAX_POLES) return;
      nextPoles = [...profile.polesActifs, id];
      const repart = (POLES.find(p => p.id === id) || { repartition: 0.05 }).repartition;
      nextEffectifs[id] = Math.max(1, Math.round(profile.effectifTotal * repart));
    }
    set({ polesActifs: nextPoles, effectifs: nextEffectifs, effectifsManuels: nextManuels });
  };
  const atMax = profile.polesActifs.length >= MAX_POLES;
  const setEffectifPole = (id: string, v: number) => {
    set({
      effectifs: { ...profile.effectifs, [id]: v },
      effectifsManuels: { ...profile.effectifsManuels, [id]: true },
    });
  };
  const totalReparti = profile.polesActifs.reduce((s, p) => s + (profile.effectifs[p] || 0), 0);
  return (
    <SectionCard n="02" title="Vos pôles concernés"
      subtitle={`Sélectionnez les métiers à activer. Effectifs préremplis depuis l'effectif total (${profile.effectifTotal} pers.).`}>
      {atMax && (
        <div style={{
          marginBottom: 12, padding: '8px 14px', borderRadius: T.rSm,
          background: 'rgba(37,99,235,.06)', border: '1px solid rgba(37,99,235,.2)',
          fontSize: 12, color: T.accent, fontFamily: T.mono, fontWeight: 600,
        }}>
          Maximum 3 pôles — désélectionnez-en un pour en choisir un autre.
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
        {POLES.map(p => {
          const active = profile.polesActifs.includes(p.id);
          const isManual = profile.effectifsManuels[p.id];
          const disabled = atMax && !active;
          return (
            <div key={p.id} style={{ opacity: disabled ? 0.4 : 1, transition: 'opacity .2s' }}>
              <ToggleCard active={active} onClick={() => togglePole(p.id)}
                title={<span><span style={{ marginRight: 8 }}>{p.icon}</span>{p.label}</span>}
                right={active ? <span style={{ fontFamily: T.mono, fontSize: 12, color: T.accent, flexShrink: 0 }}>
                  {profile.effectifs[p.id] || 0} pers.{isManual ? ' *' : ''}
                </span> : undefined}
              />
              {active && (
                <div className="alt-fade-in" style={{
                  padding: '14px 16px 10px', marginTop: -2,
                  borderRadius: `0 0 ${T.r} ${T.r}`,
                  background: 'rgba(37,99,235,.03)', border: `1px solid rgba(37,99,235,.15)`, borderTop: 'none',
                }}>
                  <LinSlider min={1} max={Math.max(50, profile.effectifTotal)}
                    value={profile.effectifs[p.id] || 1}
                    onChange={v => setEffectifPole(p.id, v)}
                    format={v => `${v} pers.${isManual ? ' · ajusté' : ' · auto'}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {profile.polesActifs.length > 0 && (
        <div style={{
          marginTop: 14, padding: '10px 14px', borderRadius: T.rSm,
          background: T.bgSoft, border: `1px solid ${T.border}`,
          fontSize: 12, color: T.textMuted, fontFamily: T.mono, fontWeight: 500,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span>Réparti sur les pôles actifs</span>
          <span style={{ color: T.text, fontWeight: 700 }}>{totalReparti} / {profile.effectifTotal} pers.</span>
        </div>
      )}
    </SectionCard>
  );
}

// ── Section 03 — Irritants ────────────────────────────────────────────
export function Section03({ profile, set }: { profile: Profile; set: (p: Partial<Profile>) => void }) {
  const polesActifs = profile.polesActifs;
  const toggle = (pole: string, id: string) => {
    const cur = profile.irritants[pole] || [];
    const active = cur.includes(id);
    set({ irritants: { ...profile.irritants, [pole]: active ? cur.filter(x => x !== id) : [...cur, id] } });
  };
  if (polesActifs.length === 0) {
    return (
      <SectionCard n="03" title="Vos irritants quotidiens" subtitle="Activez d'abord des pôles pour voir les irritants spécifiques.">
        <div style={{ padding: 28, textAlign: 'center', borderRadius: T.r, border: `1px dashed ${T.borderStrong}`, background: T.bgCard2, color: T.textMuted, fontSize: 14 }}>
          Aucun pôle actif — passez à la section 02.
        </div>
      </SectionCard>
    );
  }
  return (
    <SectionCard n="03" title="Vos irritants quotidiens" subtitle="Pour chaque pôle actif, cochez ce qui vous parle. Plus c'est précis, mieux on recommande.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {polesActifs.map(pole => {
          const meta = POLES.find(p => p.id === pole);
          const irritantsPole = IRRITANTS.filter(i => i.pole === pole);
          const selected = profile.irritants[pole] || [];
          return (
            <div key={pole} className="alt-fade-in">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10, paddingBottom: 8, borderBottom: `1px solid ${T.border}` }}>
                <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em', color: T.text }}>
                  <span style={{ marginRight: 8 }}>{meta?.icon}</span>{meta?.label}
                </div>
                <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {selected.length} / {irritantsPole.length} sélectionné{selected.length > 1 ? 's' : ''}
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
                {irritantsPole.map(i => (
                  <ToggleCard key={i.id} active={selected.includes(i.id)} onClick={() => toggle(pole, i.id)} title={i.texte} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

// ── Section 04 — Productivité ─────────────────────────────────────────
export function Section04({ profile, set }: { profile: Profile; set: (p: Partial<Profile>) => void }) {
  const { isMobile } = useResponsive();
  const ch = computeCoutHoraire(profile.salaire, profile.ca);
  return (
    <SectionCard n="04" title="Productivité & coûts" subtitle="Le coût horaire moyen ajusté à la séniorité de votre taille d'entreprise.">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24, alignItems: 'start' }}>
        <Field label="Salaire brut moyen / mois" hint="Sert de base au coût horaire interne (39h × 4 sem).">
          <LinSlider min={2000} max={8000} step={100} value={profile.salaire}
            onChange={v => set({ salaire: v })} format={v => fmtEur(v) + '/mois'} />
        </Field>
        <div style={{ padding: 20, borderRadius: T.r, background: `linear-gradient(135deg,rgba(37,99,235,.05) 0%,#fff 100%)`, border: `1px solid rgba(37,99,235,.18)` }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: T.accent, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Coût horaire calculé
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', color: T.accent, lineHeight: 1 }}>
            {fmtEur(ch)}<span style={{ fontSize: 14, color: T.textMuted, fontWeight: 500, marginLeft: 4 }}>/heure</span>
          </div>
          <div style={{ fontSize: 12, color: T.textSoft, marginTop: 10, lineHeight: 1.6, borderTop: `1px solid rgba(37,99,235,.12)`, paddingTop: 10 }}>
            Multiplicateur séniorité : <span style={{ fontFamily: T.mono, fontWeight: 600, color: T.text }}>×{(ch / (profile.salaire / 156)).toFixed(2)}</span> selon votre CA
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

// ── Agent Row (shared) ────────────────────────────────────────────────
function AgentRow({ a, off, marked, isTop, gain, heures, onToggle, variant }: {
  a: Agent; off?: boolean; marked?: boolean; isTop?: boolean;
  gain: number; heures: number; onToggle: () => void; variant: 'inclus' | 'complementaire';
}) {
  const { isMobile } = useResponsive();
  const isInclus = variant === 'inclus';
  const checked = isInclus ? !off : marked;
  const bg = isInclus ? (off ? 'transparent' : T.bgCard2) : (marked ? T.accentGlow : 'transparent');
  const border = isInclus
    ? (off ? `1px dashed ${T.border}` : `1px solid ${T.border}`)
    : (marked ? `1px solid ${T.accent}` : `1px solid ${T.border}`);

  const Checkbox = () => (
    <button type="button" onClick={onToggle} style={{
      width: isMobile ? 20 : 22, height: isMobile ? 20 : 22, borderRadius: isMobile ? 5 : 6, flexShrink: 0,
      background: checked ? T.accent : 'transparent',
      border: checked ? 'none' : `1.5px solid ${T.borderStrong}`,
      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
    }}>
      {checked && (
        <svg width={isMobile ? 11 : 13} height={isMobile ? 11 : 13} viewBox="0 0 24 24" fill="none">
          <path d="M5 12l5 5L20 7" stroke={T.accentInk} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );

  if (isMobile) {
    return (
      <div style={{ padding: '12px 14px', borderRadius: T.r, background: bg, border, opacity: (!isInclus && !marked) ? 0.7 : (off ? 0.55 : 1), transition: 'all .15s' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8 }}>
          <Checkbox />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em', color: T.text }}>{a.nom}</span>
              {isTop && <span style={{ padding: '1px 6px', borderRadius: 99, background: T.accent, color: T.accentInk, fontFamily: T.mono, fontSize: 9, fontWeight: 600, textTransform: 'uppercase' }}>⭐ Top</span>}
              {!isInclus && marked && <span style={{ padding: '1px 6px', borderRadius: 99, background: T.accentGlow, color: T.accent, fontFamily: T.mono, fontSize: 9, fontWeight: 600, textTransform: 'uppercase' }}>📌 Audit</span>}
            </div>
            <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.4, marginTop: 2 }}>{a.tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, paddingLeft: 32 }}>
          <div>
            <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{isInclus ? 'Gain /mois' : 'Potentiel'}</div>
            <div style={{ fontSize: 15, fontWeight: 500, color: (isInclus && !off) ? T.accent : T.textMuted, fontVariantNumeric: 'tabular-nums' }}>{fmtEur(gain, { short: true })}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.06em' }}>H /sem</div>
            <div style={{ fontSize: 15, fontWeight: 500, fontVariantNumeric: 'tabular-nums', color: T.text }}>{fmtNum(heures, 0)}h</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      padding: '14px 16px', borderRadius: T.r, background: bg, border,
      opacity: (!isInclus && !marked) ? 0.7 : (off ? 0.55 : 1), transition: 'all .15s',
      display: 'grid', gridTemplateColumns: 'auto 1fr auto auto', gap: 16, alignItems: 'center',
    }}>
      <Checkbox />
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em', color: T.text }}>{a.nom}</span>
          {isTop && <span style={{ padding: '2px 7px', borderRadius: 99, background: T.accent, color: T.accentInk, fontFamily: T.mono, fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>⭐ Top match</span>}
          {!isInclus && marked && <span style={{ padding: '2px 7px', borderRadius: 99, background: T.accentGlow, color: T.accent, fontFamily: T.mono, fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>📌 Marqué pour l&apos;audit</span>}
          {!isInclus && !marked && <span style={{ padding: '2px 7px', borderRadius: 99, background: 'transparent', color: T.textFaint, fontFamily: T.mono, fontSize: 9, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', border: `1px solid ${T.border}` }}>💬 À discuter</span>}
        </div>
        <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.4 }}>{a.tagline}</div>
      </div>
      <div style={{ textAlign: 'right', borderRight: `1px solid ${T.border}`, paddingRight: 14, opacity: isInclus ? 1 : 0.5 }}>
        <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{isInclus ? 'Gain /mois' : 'Gain potentiel'}</div>
        <div style={{ fontSize: 16, fontWeight: 500, color: (isInclus && !off) ? T.accent : T.textMuted, letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>
          {fmtEur(gain, { short: true })}
        </div>
      </div>
      <div style={{ textAlign: 'right', opacity: isInclus ? 1 : 0.5 }}>
        <div style={{ fontSize: 10, color: T.textFaint, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Heures /sem</div>
        <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums', color: T.text }}>{fmtNum(heures, 0)}h</div>
      </div>
    </div>
  );
}

// ── Section 05 — Recommandations ──────────────────────────────────────
export function Section05({ profile, set, recommendedByPole, onToast }: {
  profile: Profile; set: (p: Partial<Profile>) => void;
  recommendedByPole: Record<string, Agent[]>;
  onToast: (msg: string) => void;
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const polesActifs = profile.polesActifs.filter(p => recommendedByPole[p] && recommendedByPole[p].length);

  const toggleInclus = (id: string) => {
    const off = profile.agentsDeselectionnes.includes(id);
    set({ agentsDeselectionnes: off
      ? profile.agentsDeselectionnes.filter(a => a !== id)
      : [...profile.agentsDeselectionnes, id] });
  };
  const toggleMarque = (id: string) => {
    const cur = profile.agentsMarques || [];
    const isOn = cur.includes(id);
    if (!isOn) {
      onToast('📌 Cet agent est marqué pour votre audit. Il n\'est pas inclus dans le ROI affiché — discutez-en avec un expert pour un chiffrage précis.');
    }
    set({ agentsMarques: isOn ? cur.filter(a => a !== id) : [...cur, id] });
  };

  if (polesActifs.length === 0) {
    return (
      <SectionCard n="05" title="Vos agents recommandés" subtitle="Activez des pôles pour voir les recommandations.">
        <div style={{ padding: 32, textAlign: 'center', borderRadius: T.r, border: `1px dashed ${T.borderStrong}`, background: T.bgCard2, color: T.textMuted, fontSize: 14 }}>
          Pas encore d&apos;éléments — complétez les sections 02 et 03.
        </div>
      </SectionCard>
    );
  }

  const totalInclus = polesActifs.reduce((s, p) => s + recommendedByPole[p].filter(a => !profile.agentsDeselectionnes.includes(a.id)).length, 0);
  const totalMarques = (profile.agentsMarques || []).length;

  return (
    <SectionCard n="05" title="Vos agents recommandés"
      subtitle={`${totalInclus} agent${totalInclus > 1 ? 's' : ''} inclus dans le ROI · ${totalMarques} complémentaire${totalMarques > 1 ? 's' : ''} marqué${totalMarques > 1 ? 's' : ''} pour l'audit.`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        {polesActifs.map(pole => {
          const meta = POLES.find(p => p.id === pole);
          const inclus = recommendedByPole[pole];
          const all = getAllAgentsForPole(pole, profile);
          const inclusIds = new Set(inclus.map(a => a.id));
          const complementaires = all.filter(a => !inclusIds.has(a.id));
          const isExpanded = expanded[pole];
          return (
            <div key={pole}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12, paddingBottom: 8, borderBottom: `1px solid ${T.border}` }}>
                <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em', color: T.text }}>
                  <span style={{ marginRight: 8 }}>{meta?.icon}</span>{meta?.label}
                </div>
                <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {inclus.length} inclus · {complementaires.length} en plus
                </span>
              </div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 10, fontFamily: T.mono, color: T.accent, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 15, height: 15, borderRadius: 4, background: T.accent, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, flexShrink: 0 }}>✓</span>
                  Inclus dans le calcul ROI
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
                  {inclus.map((a, i) => {
                    const off = profile.agentsDeselectionnes.includes(a.id);
                    const r = computeAgentROI(a, profile);
                    return <AgentRow key={a.id} a={a} off={off} isTop={i === 0 && !off}
                      gain={r.gainMensuel} heures={r.heuresSemaine}
                      onToggle={() => toggleInclus(a.id)} variant="inclus" />;
                  })}
                </div>
              </div>
              {complementaires.length > 0 && (
                <div>
                  <button type="button" onClick={() => setExpanded({ ...expanded, [pole]: !isExpanded })}
                    style={{
                      width: '100%', padding: '10px 14px', borderRadius: T.rSm,
                      background: 'transparent', border: `1px dashed ${T.borderStrong}`,
                      color: T.textSoft, fontSize: 12, cursor: 'pointer',
                      fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.06em',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                    <span>{isExpanded ? '▴ Masquer' : '▾ Voir'} {complementaires.length} agent{complementaires.length > 1 ? 's' : ''} complémentaire{complementaires.length > 1 ? 's' : ''}</span>
                    <span style={{ color: T.textFaint }}>à étudier en audit</span>
                  </button>
                  {isExpanded && (
                    <div className="alt-fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 8 }}>
                      {complementaires.map(a => {
                        const marked = (profile.agentsMarques || []).includes(a.id);
                        const r = computeAgentROI(a, profile);
                        return <AgentRow key={a.id} a={a} off={!marked} marked={marked}
                          gain={r.gainMensuel} heures={r.heuresSemaine}
                          onToggle={() => toggleMarque(a.id)} variant="complementaire" />;
                      })}
                      <div style={{ fontSize: 11, color: T.textFaint, padding: '4px', fontStyle: 'italic' }}>
                        ↳ Cocher pour les évoquer lors de votre audit. Ne change pas le ROI affiché.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
