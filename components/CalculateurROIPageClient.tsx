'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, Check, RotateCcw } from 'lucide-react';
import { initialSimulation, exampleSimulation, type Simulation } from '@/lib/roi/data';
import { calculateSimulation, validateSimulation, restoreSimulation, STORAGE_KEY } from '@/lib/roi/calculator';
import { UsesStep, TimeStep } from './roi/RoiSections';
import { LivePanel } from './roi/RoiLivePanel';
import { Report } from './roi/RoiReport';
import { LeadModal } from './roi/RoiLeadModal';
import s from './roi/Calculator.module.css';

const steps = [
  { label: 'Vos usages', title: 'Partons de votre quotidien.', description: 'Choisissez un périmètre précis, une équipe ou votre propre activité.' },
  { label: 'Votre temps', title: 'Combien de temps y consacrez-vous ?', description: 'Une estimation honnête suffit pour commencer. Vous pourrez la préciser ensuite.' },
  { label: 'Votre estimation', title: 'Un potentiel à confronter au terrain.', description: 'Voici ce que vos hypothèses représentent pour votre équipe.' },
];

export default function CalculateurROIPageClient() {
  const [simulation, setSimulation] = useState<Simulation>(initialSimulation);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [ready, setReady] = useState(false);
  const [resumed, setResumed] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [example, setExample] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const navigated = useRef(false);
  const result = calculateSimulation(simulation);
  const errors = showErrors || step === 3 ? validateSimulation(simulation, step) : {};

  useEffect(() => {
    try {
      const saved = restoreSimulation(sessionStorage.getItem(STORAGE_KEY));
      if (saved) { setSimulation(saved); setResumed(true); }
      // Retire the old version's persisted personal details; the new version stores no contact data.
      ['althoce-roi-profile', 'althoce-roi-ts', 'althoce-roi-ver', 'althoce-roi-lead', 'althoce-roi-lead-ts'].forEach(key => localStorage.removeItem(key));
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 4, savedAt: Date.now(), simulation })); } catch {}
    }, 250);
    return () => clearTimeout(timer);
  }, [simulation, ready]);
  useEffect(() => {
    if (!navigated.current) return;
    heading.current?.focus({ preventScroll: true });
    document.getElementById('simulation')?.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, [step]);

  function update(patch: Partial<Simulation>) { setSimulation(prev => ({ ...prev, ...patch })); setExample(false); }
  function goTo(next: 1 | 2 | 3) { navigated.current = true; setShowErrors(false); setStep(next); }
  function next() {
    const invalid = validateSimulation(simulation, step);
    if (Object.keys(invalid).length) {
      setShowErrors(true);
      requestAnimationFrame(() => document.querySelector<HTMLElement>('#simulation [aria-invalid="true"]')?.focus());
      return;
    }
    if (step < 3) goTo((step + 1) as 2 | 3);
  }
  function reset() {
    setSimulation(initialSimulation()); setResumed(false); setExample(false); setConfirmReset(false); goTo(1);
    try { sessionStorage.removeItem(STORAGE_KEY); } catch {}
  }
  return <section id="simulation" className={s.simulation} aria-label="Simuler le retour sur investissement de l’IA">
    <noscript>Activez JavaScript pour utiliser le calculateur interactif. Notre méthode est expliquée dans la FAQ ci-dessous.</noscript>
    <div className={s.layout}>
      <div className={s.workspace}>
        <div className={`${s.toolbar} ${s.noPrint}`}><span>Votre simulation</span><button type="button" onClick={() => setConfirmReset(!confirmReset)}><RotateCcw size={14} aria-hidden="true" />Recommencer</button></div>
        {confirmReset && <div className={`${s.resetNotice} ${s.noPrint}`} role="alert"><span>Effacer les valeurs de cette simulation ?</span><button type="button" onClick={reset}>Oui, recommencer</button><button type="button" onClick={() => setConfirmReset(false)}>Conserver</button></div>}
        {resumed && <p className={`${s.resume} ${s.noPrint}`}>Votre simulation a été reprise dans cet onglet.</p>}
        <nav aria-label="Étapes de la simulation" className={`${s.stepper} ${s.noPrint}`}><ol>{steps.map((item, i) => <li key={item.label} data-active={step === i + 1} data-done={step > i + 1}><button type="button" disabled={i + 1 > step} aria-current={step === i + 1 ? 'step' : undefined} onClick={() => goTo((i + 1) as 1 | 2 | 3)}><span>{step > i + 1 ? <Check size={16} aria-hidden="true" /> : i + 1}</span>{item.label}</button></li>)}</ol></nav>
        <div className={s.panel}>
          <header className={s.panelHeading}><span className={s.stepCount}>Étape {step} sur 3</span><h2 ref={heading} tabIndex={-1}>{steps[step - 1].title}</h2><p>{steps[step - 1].description}</p></header>
          {example && <p className={s.exampleNotice}>Exemple fictif : 5 personnes, 15 h de tâches par semaine. Remplacez ces valeurs par les vôtres.</p>}
          <p className={s.srOnly} role="status">{result ? `Estimation actualisée : ${result.savedWeeklyHours.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} heures par semaine potentiellement libérables.` : 'Complétez les données pour calculer votre estimation.'}</p>
          {step === 1 && <UsesStep simulation={simulation} update={update} errors={errors} />}
          {step === 2 && <TimeStep simulation={simulation} update={update} errors={errors} />}
          {step === 3 && <Report simulation={simulation} result={result} update={update} errors={errors} onContact={() => setShowContact(true)} />}
          {showErrors && Object.keys(errors).length > 0 && <p role="alert" className={s.errorSummary}>Complétez les champs signalés pour continuer.</p>}
          <div className={`${s.panelNav} ${s.noPrint}`}>
            {step === 1 ? <button type="button" className={s.textButton} onClick={() => { setSimulation(exampleSimulation()); setExample(true); setResumed(false); goTo(2); }}>Essayer avec un exemple</button> : <button type="button" className={s.secondary} onClick={() => goTo((step - 1) as 1 | 2)}><ArrowLeft size={16} aria-hidden="true" />{step === 3 ? 'Modifier mes données' : 'Précédent'}</button>}
            {step < 3 && <button type="button" className={s.primary} onClick={next}>{step === 1 ? 'Renseigner mon temps' : 'Voir mon estimation'}<ArrowRight size={18} aria-hidden="true" /></button>}
          </div>
        </div>
        <p className={`${s.privacyNote} ${s.noPrint}`}>Résultats sans inscription. Vos coordonnées ne sont demandées que si vous souhaitez échanger avec nous.</p>
      </div>
      <LivePanel simulation={simulation} result={result} step={step} />
    </div>
    {showContact && result && <LeadModal simulation={simulation} result={result} onClose={() => setShowContact(false)} />}
  </section>;
}
