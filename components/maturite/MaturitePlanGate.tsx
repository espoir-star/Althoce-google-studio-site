'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, LockKeyhole, X } from 'lucide-react';
import type { Answers, Profile } from '@/lib/maturite/questions';
import type { Result } from '@/lib/maturite/model';
import { ACTION_TEXTS } from '@/lib/maturite/report-content';
import { trackLead } from '@/lib/analytics';
import { trackFb } from '@/lib/fbpixel';
import { sendMaturite, type Contact } from './sendMaturite';
import s from '@/components/roi/Calculator.module.css';
import m from './Maturite.module.css';

type GateProps = { profile: Profile; answers: Answers; result: Result; contact: Contact; onUnlocked: (contact: Contact) => void };

/**
 * Le constat est partiel sans email ; le plan d’action s’ouvre avec un prénom et un email. Affichage immédiat après l’envoi,
 * et n8n envoie le résultat complet en PDF par email (docs/test-maturite-ia/emails.md).
 * Le visiteur choisit d’être rappelé par un expert (téléphone demandé, Althoce est prévenu) ou non (il rejoint la base
 * marketing, sauf opposition). Voir docs/test-maturite-ia/exploitation-commerciale.md.
 */
function GateForm({ profile, answers, contact, onUnlocked, prefix, children }: Omit<GateProps, 'result'> & { prefix: string; children?: React.ReactNode }) {
  const [data, setData] = useState<Contact>(contact);
  const [consent, setConsent] = useState(false);
  const [callback, setCallback] = useState<boolean | null>(null);
  const [opposition, setOpposition] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const sending = useRef(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending.current) return;
    if (callback === null) { setError('Indiquez si vous souhaitez être rappelé par un expert.'); return; }
    sending.current = true; setBusy(true); setError('');
    const response = await sendMaturite('plan', callback ? data : { ...data, telephone: '' }, consent, profile, answers, { rappel: callback, oppositionMarketing: opposition });
    sending.current = false; setBusy(false);
    if (!response.ok) { setError(response.error || 'Envoi impossible. Réessayez dans un instant.'); return; }
    trackLead(callback ? 'maturite' : 'maturite_plan'); trackFb('Lead', { content_name: callback ? 'Test de maturité IA : rappel demandé' : 'Test de maturité IA : plan d’action' });
    onUnlocked(data);
  }
  // Deux champs, puis le choix du rappel : le téléphone n’est demandé qu’à ceux qui veulent être rappelés.
  const field = (key: 'prenom' | 'email' | 'telephone', label: string, type: string, autoComplete: string) => <div className={s.field}>
    <label htmlFor={`${prefix}-${key}`}>{label}</label>
    <input id={`${prefix}-${key}`} name={key} type={type} autoComplete={autoComplete} required maxLength={key === 'email' ? 254 : key === 'telephone' ? 30 : 100} value={data[key]} onChange={e => setData(prev => ({ ...prev, [key]: e.target.value }))} disabled={busy} />
  </div>;
  return <form className={m.gateForm} onSubmit={handleSubmit} aria-busy={busy}>
    {field('prenom', 'Prénom', 'text', 'given-name')}
    {field('email', 'Email professionnel', 'email', 'email')}
    <fieldset className={m.callback}>
      <legend>Souhaitez-vous qu’un expert vous rappelle pour en parler ?</legend>
      <div className={m.callbackChoices}>{([[true, 'Oui, rappelez-moi'], [false, 'Non, merci']] as const).map(([value, label]) => <label key={label} className={m.callbackOption} data-selected={callback === value}>
        <input type="radio" name={`${prefix}-rappel`} checked={callback === value} onChange={() => { setCallback(value); setError(''); }} disabled={busy} required />
        <span className={m.optionMark} aria-hidden="true">{callback === value && <Check size={13} strokeWidth={3} />}</span>{label}
      </label>)}</div>
    </fieldset>
    {callback && <>
      {field('telephone', 'Téléphone', 'tel', 'tel')}
      <p className={m.callbackNote}>Un expert Althoce vous appelle sous 24 heures ouvrées. Votre plan d’action s’affiche tout de suite.</p>
    </>}
    {/* Information métier et opposition, comme sur les formulaires des guides (capture-leads). */}
    <div className={m.marketingNotice}>
      <p>Dans le cadre de votre activité professionnelle, Althoce pourra vous adresser des conseils, actualités IA et invitations en lien avec votre métier. Vous pouvez vous y opposer dès maintenant, puis vous désinscrire à tout moment : votre résultat reste envoyé.</p>
      <button type="button" aria-pressed={opposition} onClick={() => setOpposition(previous => !previous)} disabled={busy}>{opposition ? 'Opposition enregistrée à l’envoi du formulaire — annuler' : 'Ne pas recevoir ces communications'}</button>
    </div>
    <label className={s.consent}><input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} disabled={busy} /><span>J’accepte qu’Althoce reçoive mes réponses au test et me recontacte à ce sujet. <a href="/confidentialite/" target="_blank" rel="noopener noreferrer">Utilisation de mes données</a>.</span></label>
    {error && <p role="alert" className={s.error}>{error}</p>}
    <button type="submit" className={s.primary} disabled={busy}>{busy ? 'Ouverture…' : 'Afficher mon plan d’action'}<ArrowRight size={18} aria-hidden="true" /></button>
    {children}
  </form>;
}
function Priorities({ result }: { result: Result }) {
  return <ol className={m.gateList}>{result.priorities.map(id => <li key={id}>{ACTION_TEXTS[id].title}</li>)}</ol>;
}
const contents = 'Vos cinq dimensions, tous les points relevés, le détail de chaque priorité, l’accompagnement adapté à votre situation et la version imprimable. Vous le recevez aussi par email, en PDF.';

/** Bloc en bas du résultat : toujours présent tant que le plan n’est pas ouvert. */
export function PlanGate(props: GateProps) {
  return <section className={`${m.gate} ${s.noPrint}`} aria-labelledby="maturite-plan-title">
    <div className={m.gateIntro}>
      <span className={m.gateLabel}><LockKeyhole size={14} strokeWidth={2} aria-hidden="true" />Votre plan d’action</span>
      <h3 id="maturite-plan-title">Trois priorités, dans l’ordre.</h3>
      <Priorities result={props.result} />
      <p>{contents}</p>
    </div>
    <GateForm {...props} prefix="maturite-plan" />
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
