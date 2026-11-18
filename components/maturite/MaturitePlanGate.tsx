'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, LockKeyhole, X } from 'lucide-react';
import type { Answers, Profile } from '@/lib/maturite/questions';
import type { Result } from '@/lib/maturite/model';
import { ACTION_TEXTS } from '@/lib/maturite/report-content';
import { trackLead } from '@/lib/analytics';
import { trackFb } from '@/lib/fbpixel';
import { sendMaturite, type Contact } from './sendMaturite';
import s from '@/components/roi/Calculator.module.css';
import m from './Maturite.module.css';

type GateProps = { profile: Profile; answers: Answers; result: Result; contact: Contact; onUnlocked: (contact: Contact) => void };

/** Le constat est partiel sans email ; le plan d’action s’ouvre avec un prénom et un email. Affichage immédiat après l’envoi, et n8n envoie le lien du résultat par email (docs/test-maturite-ia/emails.md). */
function GateForm({ profile, answers, contact, onUnlocked, prefix, children }: Omit<GateProps, 'result'> & { prefix: string; children?: React.ReactNode }) {
  const [data, setData] = useState<Contact>(contact);
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const sending = useRef(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true; setBusy(true); setError('');
    const response = await sendMaturite('plan', data, consent, profile, answers);
    sending.current = false; setBusy(false);
    if (!response.ok) { setError(response.error || 'Envoi impossible. Réessayez dans un instant.'); return; }
    trackLead('maturite_plan'); trackFb('Lead', { content_name: 'Test de maturité IA : plan d’action' });
    onUnlocked(data);
  }
  // Deux champs seulement : chaque champ en plus fait perdre des contacts. L’entreprise est demandée au moment de l’échange.
  const field = (key: 'prenom' | 'email', label: string, type: string, autoComplete: string) => <div className={s.field}>
    <label htmlFor={`${prefix}-${key}`}>{label}</label>
    <input id={`${prefix}-${key}`} name={key} type={type} autoComplete={autoComplete} required maxLength={key === 'email' ? 254 : 100} value={data[key]} onChange={e => setData(prev => ({ ...prev, [key]: e.target.value }))} disabled={busy} />
  </div>;
  return <form className={m.gateForm} onSubmit={handleSubmit} aria-busy={busy}>
    {field('prenom', 'Prénom', 'text', 'given-name')}
    {field('email', 'Email professionnel', 'email', 'email')}
    <label className={s.consent}><input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} disabled={busy} /><span>J’accepte qu’Althoce reçoive mes réponses au test et me recontacte à ce sujet. <a href="/confidentialite/" target="_blank" rel="noopener noreferrer">Utilisation de mes données</a>.</span></label>
    {error && <p role="alert" className={s.error}>{error}</p>}
    <button type="submit" className={s.primary} disabled={busy}>{busy ? 'Ouverture…' : 'Afficher mon plan d’action'}<ArrowRight size={18} aria-hidden="true" /></button>
    {children}
  </form>;
}
function Priorities({ result }: { result: Result }) {
  return <ol className={m.gateList}>{result.priorities.map(id => <li key={id}>{ACTION_TEXTS[id].title}</li>)}</ol>;
}
const contents = 'Vos cinq dimensions, tous les points relevés, le détail de chaque priorité, l’accompagnement adapté à votre situation et la version imprimable. Vous recevez aussi le lien de votre résultat par email.';

/** Bloc en bas du résultat : toujours présent tant que le plan n’est pas ouvert. */
export function PlanGate({ onContact, ...props }: GateProps & { onContact: () => void }) {
  return <section className={`${m.gate} ${s.noPrint}`} aria-labelledby="maturite-plan-title">
    <div className={m.gateIntro}>
      <span className={m.gateLabel}><LockKeyhole size={14} strokeWidth={2} aria-hidden="true" />Votre plan d’action</span>
      <h3 id="maturite-plan-title">Trois priorités, dans l’ordre.</h3>
      <Priorities result={props.result} />
      <p>{contents}</p>
    </div>
    <GateForm {...props} prefix="maturite-plan"><button type="button" className={s.textButton} onClick={onContact}>Ou parlons-en directement</button></GateForm>
  </section>;
}

/** Fenêtre proposée une fois, quand le visiteur fait défiler son résultat jusqu’aux parties verrouillées. */
export function PlanGateDialog({ onClose, ...props }: GateProps & { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current!;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element.showModal();
    // Avec une souris, le curseur va droit au premier champ. Sur écran tactile, on n’ouvre pas le clavier d’office.
    if (matchMedia('(pointer: fine)').matches) element.querySelector<HTMLInputElement>('input')?.focus();
    return () => { element.close(); document.body.style.overflow = overflow; previous?.focus({ preventScroll: true }); };
  }, []);
  return <dialog ref={dialog} className={`${s.dialog} ${m.gateDialog}`} aria-labelledby="maturite-gate-title" aria-describedby="maturite-gate-description" onKeyDown={e => {
    if (e.key !== 'Tab') return;
    const elements = [...e.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), a[href]')].filter(el => el.getClientRects().length);
    const first = elements[0]; const last = elements[elements.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }} onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className={s.dialogContent}>
      <button type="button" className={s.close} onClick={onClose} aria-label="Fermer et revenir à mon résultat"><X size={20} aria-hidden="true" /></button>
      <span className={m.gateLabel}><LockKeyhole size={14} strokeWidth={2} aria-hidden="true" />Votre plan d’action</span>
      <h2 id="maturite-gate-title">La suite de votre résultat est prête.</h2>
      <p id="maturite-gate-description">{contents}</p>
      <Priorities result={props.result} />
      <GateForm {...props} prefix="maturite-gate"><button type="button" className={s.textButton} onClick={onClose}>Continuer sans le plan</button></GateForm>
    </div>
  </dialog>;
}
