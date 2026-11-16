'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import type { Answers, Profile } from '@/lib/maturite/questions';
import { STAGES, type Result } from '@/lib/maturite/model';
import { trackLead } from '@/lib/analytics';
import { trackFb } from '@/lib/fbpixel';
import s from '@/components/roi/Calculator.module.css';

type Form = { prenom: string; nom: string; email: string; telephone: string; entreprise: string; consentement: boolean };

async function submit(form: Form, profile: Profile, answers: Answers): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch('/api/maturite-lead/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
      prenom: form.prenom, nom: form.nom, email: form.email, telephone: form.telephone, entreprise: form.entreprise,
      consentement_rgpd: form.consentement, profil: profile, reponses: answers, source_url: location.origin + location.pathname,
    }) });
    const result = await response.json().catch(() => null);
    return response.ok && result?.ok === true ? { ok: true } : { ok: false, error: typeof result?.error === 'string' ? result.error : 'Envoi impossible. Veuillez réessayer.' };
  } catch { return { ok: false, error: 'Connexion impossible. Votre résultat reste disponible. Réessayez dans un instant.' }; }
}

export function MaturiteLeadModal({ onClose, profile, answers, result }: { onClose: () => void; profile: Profile; answers: Answers; result: Result }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [data, setData] = useState<Form>({ prenom: '', nom: '', email: '', telephone: '', entreprise: '', consentement: false });
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
    if (data.telephone.trim() && data.telephone.replace(/\D/g, '').length < 10) { setError('Vérifiez le numéro de téléphone : au moins 10 chiffres.'); return; }
    sending.current = true; setBusy(true); setError('');
    const response = await submit(data, profile, answers);
    sending.current = false; setBusy(false);
    if (!response.ok) { setError(response.error || 'Envoi impossible. Réessayez dans un instant.'); return; }
    setSent(true); trackLead('maturite'); trackFb('Lead', { content_name: 'Test de maturité IA' });
  }
  const summary = result.stage === null ? 'Votre résultat est un point de départ.' : `Votre résultat, stade « ${STAGES[result.stage].name} », est un point de départ.`;
  return <dialog ref={dialog} className={s.dialog} aria-labelledby="maturite-contact-title" aria-describedby="maturite-contact-description" onKeyDown={e => {
    if (e.key !== 'Tab') return;
    const elements = [...e.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), a[href]')].filter(el => el.getClientRects().length);
    const first = elements[0]; const last = elements[elements.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }} onCancel={e => { e.preventDefault(); if (!busy) onClose(); }} onClick={e => { if (e.target === e.currentTarget && !busy) onClose(); }}>
    <div className={s.dialogContent}>
      <button type="button" className={s.close} onClick={onClose} disabled={busy} aria-label="Fermer la demande de contact"><X size={20} aria-hidden="true" /></button>
      {sent ? <div className={s.success} role="status"><Check size={32} aria-hidden="true" /><h2 id="maturite-contact-title">Votre demande est transmise.</h2><p id="maturite-contact-description">Nous avons reçu vos coordonnées et vos réponses au test pour préparer notre échange. Nous revenons vers vous sous 24 heures ouvrées.</p><button className={s.primary} onClick={onClose}>Revenir à mon résultat</button></div> : <>
        <h2 id="maturite-contact-title">Parlons de votre résultat.</h2>
        <p id="maturite-contact-description">{summary} Voyons ce qui est prioritaire chez vous.</p>
        <form onSubmit={handleSubmit} aria-busy={busy}>
          <div className={s.fields}>{([
            ['prenom', 'Prénom', 'text', 'given-name', true], ['nom', 'Nom', 'text', 'family-name', true],
            ['email', 'Email professionnel', 'email', 'email', true], ['telephone', 'Téléphone', 'tel', 'tel', false],
          ] as const).map(([key, label, type, autoComplete, required]) => <div className={s.field} key={key}><label htmlFor={`maturite-contact-${key}`}>{label}{!required && <span className={s.optional}> (facultatif)</span>}</label><input id={`maturite-contact-${key}`} name={key} type={type} autoComplete={autoComplete} required={required} maxLength={key === 'email' ? 254 : key === 'telephone' ? 30 : 100} value={data[key]} onChange={e => setData(prev => ({ ...prev, [key]: e.target.value }))} disabled={busy} /></div>)}</div>
          <div className={s.field}><label htmlFor="maturite-contact-company">Entreprise ou cabinet</label><input id="maturite-contact-company" name="entreprise" autoComplete="organization" required maxLength={200} value={data.entreprise} onChange={e => setData(prev => ({ ...prev, entreprise: e.target.value }))} disabled={busy} /></div>
          <label className={s.consent}><input type="checkbox" required checked={data.consentement} onChange={e => setData(prev => ({ ...prev, consentement: e.target.checked }))} disabled={busy} /><span>J’accepte qu’Althoce reçoive mes réponses au test et me recontacte à ce sujet. <a href="/confidentialite/" target="_blank" rel="noopener noreferrer">Utilisation de mes données</a>.</span></label>
          {error && <p role="alert" className={s.error}>{error}</p>}
          <button type="submit" className={s.primary} disabled={busy}>{busy ? 'Envoi en cours…' : 'Demander mon échange offert'}<ArrowUpRight size={18} aria-hidden="true" /></button>
          <p className={s.hint}>Votre résultat reste disponible, même sans envoyer ce formulaire.</p>
        </form>
      </>}
    </div>
  </dialog>;
}
