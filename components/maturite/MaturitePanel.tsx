import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { DIMENSIONS, QUESTIONS, type Answers, type DimensionId } from '@/lib/maturite/questions';
import { STAGES, type Result } from '@/lib/maturite/model';
import s from '@/components/roi/Calculator.module.css';
import m from './Maturite.module.css';

export function MaturitePanel({ step, answers, current, result, unlocked }: { step: 1 | 2 | 3; answers: Answers; current: DimensionId | null; result: Result; unlocked: boolean }) {
  const done = (id: DimensionId) => QUESTIONS.filter(question => question.dim === id).every(question => answers[question.id] !== undefined);
  return <aside className={s.sidebar} aria-label="Repères du test">
    <div className={s.preview}>
      <div className={s.previewTitle}><Compass size={20} aria-hidden="true" /><span>{step === 3 ? 'Et maintenant ?' : step === 2 ? 'Cinq dimensions' : 'Cinq minutes pour vous situer'}</span></div>
      {step === 3 ? <>
        {result.total !== null && result.stage !== null && <><p className={s.previewNumber}>{result.total}<span> / 100</span></p><p className={s.previewCaption}>{STAGES[result.stage].name}</p></>}
        <ol className={s.previewSteps}><li data-done={unlocked}>Ouvrir votre plan d’action</li><li>Partager le résultat autour de vous</li><li>En parler avec nous, si vous le souhaitez</li></ol>
      </> : step === 2 ? <ol className={m.panelDims}>{[...new Set(QUESTIONS.map(question => question.dim))].map(id => <li key={id} data-done={done(id)} data-current={current === id}>{DIMENSIONS.find(dimension => dimension.id === id)!.name}</li>)}</ol> : <>
        <h3>Où en êtes-vous,<br />concrètement ?</h3>
        <p>Des situations réelles plutôt que des intentions : choisissez celle qui ressemble le plus à votre quotidien.</p>
        <ol className={s.previewSteps}><li>Votre structure</li><li>Quinze situations à reconnaître</li><li>Votre stade et vos priorités</li></ol>
      </>}
    </div>
    <div className={s.sidebarNote}><ShieldCheck size={20} aria-hidden="true" /><p>Vos réponses restent dans votre navigateur tant que vous n’ouvrez pas votre plan d’action et ne demandez pas d’échange.</p></div>
    {step === 3 ? <a className={s.sidebarLink} href="/calculateur-roi/">Estimer le temps à libérer <ArrowUpRight size={16} aria-hidden="true" /></a> : <a className={s.sidebarLink} href="/services/audit-ia/">Comprendre notre diagnostic <ArrowUpRight size={16} aria-hidden="true" /></a>}
  </aside>;
}
