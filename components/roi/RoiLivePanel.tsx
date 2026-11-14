import { ArrowUpRight, Clock3, ShieldCheck } from 'lucide-react';
import { fmtEur, fmtNum, type SimulationResult } from '@/lib/roi/calculator';
import { type Simulation } from '@/lib/roi/data';
import s from './Calculator.module.css';

export function LivePanel({ simulation, result, step }: { simulation: Simulation; result: SimulationResult | null; step: number }) {
  return <aside className={s.sidebar} aria-label="Repères de votre simulation">
    <div className={s.preview}>
      <div className={s.previewTitle}><Clock3 size={20} aria-hidden="true" /><span>{step === 3 ? 'Pour passer à la pratique' : result ? 'Votre potentiel de temps' : 'Un premier repère concret'}</span></div>
      {step === 3 ? <>
        <h3>Un usage utile.<br />Puis la suite.</h3>
        <p>Commencez par une tâche précise. Un premier test permet de mesurer le temps gagné et la qualité du résultat.</p>
        <ol className={s.previewSteps}><li>Observer le travail réel</li><li>Tester avec vos outils</li><li>Valider avec votre équipe</li></ol>
      </> : result ? <>
        <p className={s.previewNumber}>{fmtNum(result.savedWeeklyHours, 1)}<span> h</span></p>
        <p className={s.previewCaption}>potentiellement libérables par semaine</p>
        <div className={s.previewDivider} />
        <div className={s.previewLine}><span>Sur {simulation.weeks} semaines</span><strong>{fmtNum(result.savedAnnualHours, 1)} h / an</strong></div>
        <div className={s.previewLine}><span>Valeur de ce temps</span><strong>{fmtEur(result.annualValue)} / an</strong></div>
        <p className={s.previewNote}>Une capacité à réinvestir dans votre expertise, pas une économie de trésorerie acquise.</p>
      </> : <>
        <h3>Du temps pour<br />votre expertise.</h3>
        <p>Votre estimation se construit à partir de votre quotidien, avec des hypothèses visibles.</p>
        <ol className={s.previewSteps}><li data-done={simulation.tasks.length > 0}>Les tâches à alléger</li><li data-done={step > 2}>Le temps et les hypothèses</li><li>Le potentiel pour votre équipe</li></ol>
      </>}
    </div>
    <div className={s.sidebarNote}><ShieldCheck size={20} aria-hidden="true" /><p>Des agents IA et des automatisations conçus sur mesure. La faisabilité se confirme avec vos outils, vos données et vos règles métier.</p></div>
    <a className={s.sidebarLink} href="/services/audit-ia/">Comprendre notre diagnostic <ArrowUpRight size={16} aria-hidden="true" /></a>
  </aside>;
}
