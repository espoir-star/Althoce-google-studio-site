'use client';

import React, { useState } from 'react';
import { type Profile, type Agent } from '@/lib/roi/data';
import { type ROITotal, buildLeadPayload, submitLead, fmtEur } from '@/lib/roi/calculator';
import { T, useResponsive, CTA } from './RoiComponents';

function Input({ label, v, onChange, err, type = 'text', placeholder }: {
  label: string; v: string; onChange: (v: string) => void;
  err?: string; type?: string; placeholder?: string;
}) {
  return (
    <label style={{ display: 'block' }}>
      <div style={{ fontSize: 11, color: T.textMuted, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
        {label}
      </div>
      <input type={type} value={v} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{
          width: '100%', padding: '12px 14px', borderRadius: T.rSm,
          background: T.bgCard2,
          border: `1px solid ${err ? T.warn : T.border}`,
          color: T.text, fontSize: 14, fontFamily: T.font, outline: 'none',
          boxSizing: 'border-box',
        }} />
      {err && <div style={{ fontSize: 11, color: T.warn, marginTop: 4 }}>{err}</div>}
    </label>
  );
}

interface LeadModalProps {
  onClose: () => void;
  onSubmit: (data: { prenom: string; nom: string; email: string; tel: string; entreprise: string; consentement: boolean }) => void;
  summary: ROITotal;
  profile: Profile;
  activeAgents: Agent[];
  total: ROITotal;
}

export function LeadModal({ onClose, onSubmit, summary, profile, activeAgents, total }: LeadModalProps) {
  const { isMobile } = useResponsive();
  const [data, setData] = useState({ prenom: '', nom: '', email: '', tel: '', entreprise: '' });
  const [rgpd, setRgpd] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setData(d => ({ ...d, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.prenom.trim()) e.prenom = 'Champ requis';
    if (!data.nom.trim()) e.nom = 'Champ requis';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Email invalide';
    const digits = data.tel.replace(/\D/g, '');
    if (digits.length < 10) e.tel = 'Minimum 10 chiffres requis';
    if (!data.entreprise.trim()) e.entreprise = 'Champ requis';
    if (!rgpd) e.rgpd = 'Consentement requis';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const formData = { ...data, consentement: rgpd };
    const payload = buildLeadPayload(formData, profile, activeAgents, total);
    submitLead(payload).catch(() => {});
    onSubmit(formData);
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(9,9,11,.6)', backdropFilter: 'blur(12px)',
      display: 'flex', alignItems: isMobile ? 'flex-end' : 'center', justifyContent: 'center',
      padding: isMobile ? 0 : 24, animation: 'alt-fade-in .2s',
    }}>
      <form onClick={e => e.stopPropagation()} onSubmit={handle} style={{
        width: '100%', maxWidth: isMobile ? '100%' : 500,
        background: T.bgCard, border: `1px solid ${T.border}`,
        borderRadius: isMobile ? `${T.rXl} ${T.rXl} 0 0` : T.rXl,
        padding: isMobile ? '24px 20px 32px' : 36,
        maxHeight: isMobile ? '90vh' : 'none', overflowY: isMobile ? 'auto' : 'visible',
        boxShadow: '0 24px 80px rgba(0,0,0,.25), 0 4px 16px rgba(0,0,0,.12)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em', color: T.text }}>Althoce</span>
          <button type="button" onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 99, background: 'transparent',
            border: `1px solid ${T.border}`, color: T.textMuted, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>×</button>
        </div>
        <h2 style={{ margin: '16px 0 6px', fontSize: isMobile ? 22 : 26, fontWeight: 500, letterSpacing: '-0.02em', color: T.text }}>
          Recevez votre rapport détaillé
        </h2>

        {summary && (
          <div style={{
            margin: '14px 0 18px', padding: '12px 14px', borderRadius: T.r,
            background: T.accentGlow, border: `1px solid ${T.accent}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
          }}>
            <div style={{ fontSize: 11, color: T.accent, fontFamily: T.mono, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Votre ROI estimé
            </div>
            <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', color: T.accent }}>
              {fmtEur(summary.roiNetAn1, { short: true })}/an
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          <Input label="Prénom" v={data.prenom} onChange={v => set('prenom', v)} err={errors.prenom} placeholder="Marc" />
          <Input label="Nom" v={data.nom} onChange={v => set('nom', v)} err={errors.nom} placeholder="Dupont" />
        </div>
        <div style={{ marginBottom: 12 }}>
          <Input label="Email professionnel" v={data.email} onChange={v => set('email', v)} err={errors.email} type="email" placeholder="marc@entreprise.fr" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
          <Input label="Téléphone" v={data.tel} onChange={v => set('tel', v.replace(/[^\d\s+\-().]/g, ''))} err={errors.tel} type="tel" placeholder="06 12 34 56 78" />
          <Input label="Entreprise" v={data.entreprise} onChange={v => set('entreprise', v)} err={errors.entreprise} placeholder="Acme" />
        </div>

        <label style={{ display: 'flex', gap: 10, marginBottom: 22, cursor: 'pointer', alignItems: 'flex-start' }}>
          <input type="checkbox" checked={rgpd} onChange={e => setRgpd(e.target.checked)}
            style={{ marginTop: 3, accentColor: T.accent }} />
          <span style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.5 }}>
            J&apos;accepte que mes données soient utilisées pour recevoir le rapport et un audit personnalisé. Pas de spam, désinscription à tout moment.
            {errors.rgpd && <div style={{ color: T.warn, marginTop: 4 }}>{errors.rgpd}</div>}
          </span>
        </label>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <CTA primary={false} type="button" onClick={onClose}>Annuler</CTA>
          <CTA type="submit" disabled={loading}>{loading ? 'Envoi...' : 'Voir mon rapport'}</CTA>
        </div>
      </form>
    </div>
  );
}
