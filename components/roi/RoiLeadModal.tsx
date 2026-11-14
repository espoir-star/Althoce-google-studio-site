'use client';
import { useEffect, useRef, useState } from 'react';
import { X, Check, ArrowUpRight } from 'lucide-react';
import type { Simulation } from '@/lib/roi/data';
import { buildLeadPayload, submitLead, fmtNum, type SimulationResult, type LeadData } from '@/lib/roi/calculator';
import { trackLead } from '@/lib/analytics';
import s from './Calculator.module.css';

export function LeadModal({ onClose, simulation, result }: { onClose: () => void; simulation: Simulation; result: SimulationResult }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [data, setData] = useState<LeadData>({ prenom: '', nom: '', email: '', tel: '', entreprise: '', consentement: false });
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const sending = useRef(false);
  useEffect(() => {
    const element = dialog.current!;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.showModal();
    return () => { element.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending.current) return;
    if (data.tel.replace(/\D/g, '').length < 10) { setError('Vérifiez le numéro de téléphone : au moins 10 chiffres.'); return; }
    sending.current = true; setBusy(true); setError('');
    const response = await submitLead(buildLeadPayload(data, simulation, result));
    sending.current = false; setBusy(false);
    if (!response.ok) { setError(response.error || 'Envoi impossible. Réessayez dans un instant.'); return; }
    setSent(true); trackLead('roi');
  }
  return <dialog ref={dialog} className={s.dialog} aria-labelledby="roi-contact-title" aria-describedby="roi-contact-description" onKeyDown={e => {
    if (e.key !== 'Tab') return;
    const elements = [...e.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), a[href]')].filter(el => el.getClientRects().length);
    const first = elements[0]; const last = elements[elements.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }} onCancel={e => { e.preventDefault(); if (!busy) onClose(); }} onClick={e => { if (e.target === e.currentTarget && !busy) onClose(); }}>
    <div className={s.dialogContent}>
      <button type="button" className={s.close} onClick={onClose} disabled={busy} aria-label="Fermer la demande de contact"><X size={20} aria-hidden="true" /></button>
      {sent ? <div className={s.success} role="status"><Check size={32} aria-hidden="true" /><h2 id="roi-contact-title">Votre demande est transmise.</h2><p id="roi-contact-description">Nous avons reçu vos coordonnées et les hypothèses de votre simulation pour préparer notre échange.</p><button className={s.primary} onClick={onClose}>Revenir à mon estimation</button></div> : <>
        <h2 id="roi-contact-title">Parlons de votre quotidien.</h2>
        <p id="roi-contact-description">Votre estimation de {fmtNum(result.savedWeeklyHours, 1)} h par semaine est un point de départ. Voyons ce qui est réalisable chez vous.</p>
        <form onSubmit={handleSubmit} aria-busy={busy}>
          <div className={s.fields}>{([
            ['prenom', 'Prénom', 'text', 'given-name'], ['nom', 'Nom', 'text', 'family-name'],
            ['email', 'Email professionnel', 'email', 'email'], ['tel', 'Téléphone', 'tel', 'tel'],
          ] as const).map(([key, label, type, autoComplete]) => <div className={s.field} key={key}><label htmlFor={`roi-contact-${key}`}>{label}</label><input id={`roi-contact-${key}`} name={key} type={type} autoComplete={autoComplete} required maxLength={key === 'email' ? 254 : key === 'tel' ? 30 : 100} value={data[key]} onChange={e => setData(prev => ({ ...prev, [key]: e.target.value }))} disabled={busy} /></div>)}</div>
          <div className={s.field}><label htmlFor="roi-contact-company">Entreprise ou cabinet</label><input id="roi-contact-company" name="entreprise" autoComplete="organization" required maxLength={200} value={data.entreprise} onChange={e => setData(prev => ({ ...prev, entreprise: e.target.value }))} disabled={busy} /></div>
          <label className={s.consent}><input type="checkbox" required checked={data.consentement} onChange={e => setData(prev => ({ ...prev, consentement: e.target.checked }))} disabled={busy} /><span>J’accepte d’être recontacté par Althoce au sujet de cette simulation. <a href="/confidentialite/" target="_blank" rel="noopener noreferrer">Utilisation de mes données</a>.</span></label>
          {error && <p role="alert" className={s.error}>{error}</p>}
          <button type="submit" className={s.primary} disabled={busy}>{busy ? 'Envoi en cours…' : 'Demander mon échange offert'}<ArrowUpRight size={18} aria-hidden="true" /></button>
          <p className={s.hint}>Vos résultats restent disponibles, même sans envoyer ce formulaire.</p>
        </form>
      </>}
    </div>
  </dialog>;
}
