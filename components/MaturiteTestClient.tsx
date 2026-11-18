'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowLeft, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { QUESTIONS, emptyProfile, type Answer, type Answers, type Profile } from '@/lib/maturite/questions';
import { STORAGE_KEY, computeResult, decodeShare, isComplete, isProfileComplete, restoreDraft } from '@/lib/maturite/model';
import { ProfileStep, QuestionStep } from './maturite/MaturiteSteps';
import { MaturitePanel } from './maturite/MaturitePanel';
import type { SectorNote } from './maturite/MaturiteReport';
import { emptyContact, type Contact } from './maturite/sendMaturite';
import { trackMaturiteResult } from '@/lib/analytics';
import s from './roi/Calculator.module.css';

// Les textes du rapport ne sont chargés qu’au moment d’afficher le résultat.
const Report = dynamic(() => import('./maturite/MaturiteReport').then(module => module.Report), { loading: () => <p className={s.hint} role="status">Calcul de votre résultat…</p> });
const LeadModal = dynamic(() => import('./maturite/MaturiteLeadModal').then(module => module.MaturiteLeadModal));

type Step = 1 | 2 | 3;
const labels = ['Votre profil', 'Vos pratiques', 'Votre résultat'];
const last = QUESTIONS.length - 1;
const shareCode = () => location.hash.match(/^#resultat=([a-z0-9.x-]{10,80})$/)?.[1] ?? null;

export default function MaturiteTestClient({ sectorNotes }: { sectorNotes: Record<string, SectorNote> }) {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState<Step>(1);
  const [ready, setReady] = useState(false);
  const [resumed, setResumed] = useState(false);
  const [shared, setShared] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  // Plan d’action ouvert : mémorisé dans l’onglet. Les coordonnées, elles, ne quittent pas la mémoire de la page.
  const [unlocked, setUnlocked] = useState(false);
  const [contact, setContact] = useState<Contact>(emptyContact);
  // Change à chaque lien ouvert, pour repartir d’un rapport neuf.
  const [sharedCode, setSharedCode] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const legend = useRef<HTMLLegendElement>(null);
  const navigated = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const result = useMemo(() => computeResult(profile, answers), [profile, answers]);
  const question = QUESTIONS[Math.min(index, last)];
  const complete = isProfileComplete(profile) && isComplete(answers);

  useEffect(() => {
    try {
      const code = shareCode();
      const fromLink = code ? decodeShare(code) : null;
      if (code && fromLink) { setProfile(fromLink.profile); setAnswers(fromLink.answers); setShared(true); setSharedCode(code); setStep(3); }
      else {
        const draft = restoreDraft(sessionStorage.getItem(STORAGE_KEY));
        if (draft) {
          setProfile(draft.profile); setAnswers(draft.answers); setIndex(Math.min(draft.index, last)); setUnlocked(draft.unlocked);
          const profileDone = isProfileComplete(draft.profile);
          setStep(profileDone && isComplete(draft.answers) ? 3 : profileDone && Object.keys(draft.answers).length > 0 ? 2 : 1);
          setResumed(profileDone);
        }
      }
    } catch {}
    setReady(true);
    // Un lien de résultat collé dans un onglet déjà ouvert sur la page ne la recharge pas : on écoute le changement d’adresse.
    function onHashChange() {
      const code = shareCode();
      const fromLink = code ? decodeShare(code) : null;
      if (code && fromLink) {
        clearTimeout(timer.current);
        setProfile(fromLink.profile); setAnswers(fromLink.answers); setShared(true); setSharedCode(code);
        setShowContact(false); setConfirmReset(false); setShowErrors(false); setStep(3);
        // Après le rendu du résultat et la gestion de l’historique par Next.js, qui remet la page en haut.
        setTimeout(() => document.getElementById('test')?.scrollIntoView({ block: 'start', behavior: 'instant' }), 300);
      } else if (!location.hash && document.querySelector('#test[data-shared="true"]')) {
        // Retour arrière depuis un résultat partagé : le visiteur retrouve son propre test.
        location.reload();
      }
    }
    addEventListener('hashchange', onHashChange);
    return () => { clearTimeout(timer.current); removeEventListener('hashchange', onHashChange); };
  }, []);
  useEffect(() => {
    // Un résultat reçu par lien ne remplace jamais le test en cours du visiteur.
    if (!ready || shared) return;
    const save = setTimeout(() => { try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, savedAt: Date.now(), profile, answers, index, unlocked })); } catch {} }, 250);
    return () => clearTimeout(save);
  }, [profile, answers, index, unlocked, ready, shared]);
  function focusStep() {
    if (!navigated.current) return;
    (step === 2 ? legend.current : heading.current)?.focus({ preventScroll: true });
    const top = document.getElementById('test')?.getBoundingClientRect().top ?? 0;
    if (top < 0 || top > innerHeight * 0.5) document.getElementById('test')?.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(focusStep, [step, index]);

  function goTo(next: Step) { clearTimeout(timer.current); navigated.current = true; setShowErrors(false); setStep(next); }
  function move(next: number) { navigated.current = true; setShowErrors(false); setIndex(next); }
  function answer(value: Answer, advance: boolean) {
    setAnswers(prev => ({ ...prev, [question.id]: value })); setShowErrors(false);
    clearTimeout(timer.current);
    if (advance && index < last) timer.current = setTimeout(() => move(index + 1), 220);
  }
  function finish(current: Answers) {
    const missing = QUESTIONS.findIndex(item => current[item.id] === undefined);
    if (missing >= 0) { move(missing); setShowErrors(true); return; }
    trackMaturiteResult(result.stage === null ? 0 : result.stage + 1);
    goTo(3);
  }
  function next() {
    if (step === 1) { if (!isProfileComplete(profile)) { setShowErrors(true); requestAnimationFrame(() => document.querySelector<HTMLElement>('#test [aria-invalid="true"]')?.focus()); return; } goTo(2); return; }
    if (answers[question.id] === undefined) { setShowErrors(true); return; }
    if (index < last) move(index + 1); else finish(answers);
  }
  function back() { if (step === 2 && index > 0) move(index - 1); else goTo((step - 1) as Step); }
  function reset() {
    clearTimeout(timer.current);
    setProfile(emptyProfile()); setAnswers({}); setIndex(0); setResumed(false); setShared(false); setSharedCode(''); setConfirmReset(false); setShowContact(false); setUnlocked(false); goTo(1);
    try { sessionStorage.removeItem(STORAGE_KEY); if (location.hash) history.replaceState(null, '', location.pathname + location.search); } catch {}
  }

  return <section id="test" className={s.simulation} aria-label="Test de maturité IA" data-shared={shared || undefined}>
    <noscript>Activez JavaScript pour passer le test. Les dimensions, les stades et la méthode sont décrits plus bas sur cette page.</noscript>
    <div className={s.layout}>
      <div className={s.workspace}>
        <div className={`${s.toolbar} ${s.noPrint}`}><span>Votre test</span>{!shared && <button type="button" onClick={() => setConfirmReset(!confirmReset)}><RotateCcw size={14} aria-hidden="true" />Recommencer</button>}</div>
        {confirmReset && <div className={`${s.resetNotice} ${s.noPrint}`} role="alert"><span>Effacer vos réponses ?</span><button type="button" onClick={reset}>Oui, recommencer</button><button type="button" onClick={() => setConfirmReset(false)}>Conserver</button></div>}
        {resumed && step !== 3 && <p className={`${s.resume} ${s.noPrint}`}>Votre test a été repris dans cet onglet.</p>}
        <nav aria-label="Étapes du test" className={`${s.stepper} ${s.noPrint}`}><ol>{labels.map((label, i) => {
          const target = (i + 1) as Step, reachable = !shared && (target === 1 || (target === 2 ? isProfileComplete(profile) : complete));
          return <li key={label} data-active={step === target} data-done={step > target}><button type="button" disabled={!reachable && step !== target} aria-current={step === target ? 'step' : undefined} onClick={() => goTo(target)}><span>{step > target ? <Check size={16} aria-hidden="true" /> : target}</span>{label}</button></li>;
        })}</ol></nav>
        <div className={s.panel}>
          {step === 1 && <>
            <header className={s.panelHeading}><span className={s.stepCount}>Étape 1 sur 3</span><h2 ref={heading} tabIndex={-1}>Parlons de votre structure.</h2><p>Trois informations pour adapter les questions et le résultat.</p></header>
            <ProfileStep profile={profile} update={patch => { setProfile(prev => ({ ...prev, ...patch })); }} showErrors={showErrors} />
          </>}
          {step === 2 && <>
            <h2 className={s.srOnly}>Vos pratiques</h2>
            <QuestionStep key={question.id} question={question} size={profile.size} value={answers[question.id]} index={index} heading={legend} onAnswer={answer} />
            {showErrors && answers[question.id] === undefined && <p role="alert" className={s.errorSummary}>Choisissez la situation la plus proche de la vôtre, ou « Je ne sais pas ».</p>}
          </>}
          {step === 3 && <Report key={sharedCode || 'test'} profile={profile} answers={answers} result={result} sector={sectorNotes[profile.sector]} shared={shared} unlocked={unlocked} contact={contact} heading={heading} onReady={focusStep} onUnlocked={next => { setContact(next); setUnlocked(true); }} onContact={() => setShowContact(true)} onRestart={reset} />}
          {step !== 3 && <div className={`${s.panelNav} ${s.noPrint}`}>
            {step === 1 ? <span /> : <button type="button" className={s.secondary} onClick={back}><ArrowLeft size={16} aria-hidden="true" />Précédent</button>}
            <button type="button" className={s.primary} onClick={next}>{step === 1 ? 'Commencer les questions' : index < last ? 'Question suivante' : 'Voir mon résultat'}<ArrowRight size={18} aria-hidden="true" /></button>
          </div>}
        </div>
        {step !== 3 && <p className={s.privacyNote}>Score et stade sans inscription. Le résultat complet et votre plan d’action s’ouvrent ensuite avec votre prénom et votre email.</p>}
      </div>
      <MaturitePanel step={step} answers={answers} current={step === 2 ? question.dim : null} result={result} unlocked={unlocked || shared} />
    </div>
    {showContact && <LeadModal profile={profile} answers={answers} result={result} contact={contact} onSent={next => { setContact(next); setUnlocked(true); }} onClose={() => setShowContact(false)} />}
  </section>;
}
