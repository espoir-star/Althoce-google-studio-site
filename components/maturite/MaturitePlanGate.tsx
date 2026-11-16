'use client';
import { useRef, useState } from 'react';
import { ArrowRight, LockKeyhole } from 'lucide-react';
import type { Answers, Profile } from '@/lib/maturite/questions';
import type { Result } from '@/lib/maturite/model';
import { ACTION_TEXTS } from '@/lib/maturite/report-content';
import { trackLead } from '@/lib/analytics';
import { trackFb } from '@/lib/fbpixel';
import { sendMaturite, type Contact } from './sendMaturite';
import s from '@/components/roi/Calculator.module.css';
import m from './Maturite.module.css';

/** Le constat est libre ; le plan d’action s’ouvre avec un prénom et un email. Affichage immédiat après l’envoi. */
export function PlanGate({ profile, answers, result, contact, onUnlocked, onContact }: {
  profile: Profile; answers: Answers; result: Result; contact: Contact;
  onUnlocked: (contact: Contact) => void; onContact: () => void;
}) {
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
  const field = (key: 'prenom' | 'email' | 'entreprise', label: string, type: string, autoComplete: string, required: boolean) => <div className={s.field}>
    <label htmlFor={`maturite-plan-${key}`}>{label}{!required && <span className={s.optional}> (facultatif)</span>}</label>
    <input id={`maturite-plan-${key}`} name={key} type={type} autoComplete={autoComplete} required={required} maxLength={key === 'email' ? 254 : key === 'entreprise' ? 200 : 100} value={data[key]} onChange={e => setData(prev => ({ ...prev, [key]: e.target.value }))} disabled={busy} />
  </div>;
  return <section className={`${m.gate} ${s.noPrint}`} aria-labelledby="maturite-plan-title">
    <div className={m.gateIntro}>
      <span className={m.gateLabel}><LockKeyhole size={14} strokeWidth={2} aria-hidden="true" />Votre plan d’action</span>
      <h3 id="maturite-plan-title">Trois priorités, dans l’ordre.</h3>
      <ol className={m.gateList}>{result.priorities.map(id => <li key={id}>{ACTION_TEXTS[id].title}</li>)}</ol>
      <p>Avec le détail de chaque priorité, le prochain pas par dimension, l’accompagnement adapté à votre situation et la version imprimable.</p>
    </div>
    <form className={m.gateForm} onSubmit={handleSubmit} aria-busy={busy}>
      {field('prenom', 'Prénom', 'text', 'given-name', true)}
      {field('email', 'Email professionnel', 'email', 'email', true)}
      {field('entreprise', 'Entreprise ou cabinet', 'text', 'organization', false)}
      <label className={s.consent}><input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} disabled={busy} /><span>J’accepte qu’Althoce reçoive mes réponses au test et me recontacte à ce sujet. <a href="/confidentialite/" target="_blank" rel="noopener noreferrer">Utilisation de mes données</a>.</span></label>
      {error && <p role="alert" className={s.error}>{error}</p>}
      <button type="submit" className={s.primary} disabled={busy}>{busy ? 'Ouverture…' : 'Afficher mon plan d’action'}<ArrowRight size={18} aria-hidden="true" /></button>
      <button type="button" className={s.textButton} onClick={onContact} disabled={busy}>Ou parlons-en directement</button>
    </form>
  </section>;
}
