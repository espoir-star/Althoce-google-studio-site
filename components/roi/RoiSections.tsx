import { FileSearch, FilePenLine, Mail, ArrowLeftRight, Search, ChartNoAxesCombined, Plus, Check, SlidersHorizontal } from 'lucide-react';
import { TASKS, SECTORS, taskTitle, type Simulation, type TaskId } from '@/lib/roi/data';
import { fmtNum, type SimulationErrors } from '@/lib/roi/calculator';
import { NumberField, Notice } from './RoiComponents';
import s from './Calculator.module.css';

type Props = { simulation: Simulation; update: (patch: Partial<Simulation>) => void; errors: SimulationErrors };
const icons = { documents: FileSearch, redaction: FilePenLine, messages: Mail, saisie: ArrowLeftRight, recherche: Search, reporting: ChartNoAxesCombined, autre: Plus };

export function UsesStep({ simulation: v, update, errors }: Props) {
  const toggle = (id: TaskId) => update({ tasks: v.tasks.some(t => t.id === id) ? v.tasks.filter(t => t.id !== id) : [...v.tasks, { id, hours: null }] });
  return <>
    <div className={s.fields}>
      <div className={s.field}><label htmlFor="roi-sector">Votre activité <span className={s.optional}>(facultatif)</span></label><select id="roi-sector" value={v.sector} onChange={e => update({ sector: e.target.value })}><option value="">Choisir mon secteur</option>{SECTORS.map(x => <option key={x}>{x}</option>)}</select></div>
      <NumberField id="roi-people" label="Personnes concernées" value={v.people} onChange={people => update({ people })} unit="pers." min={1} max={10000} step={1} placeholder="Ex. 5" hint="Uniquement l’équipe dont vous estimez le temps." error={errors.people} />
    </div>
    <fieldset className={s.taskFieldset} aria-describedby={errors.tasks ? 'roi-tasks-error' : undefined}>
      <legend>Quelles tâches prennent trop de place ?</legend>
      <p className={s.hint}>Sélectionnez les usages que vous aimeriez étudier.</p>
      <div className={s.taskGrid}>{TASKS.map(task => {
        const Icon = icons[task.id]; const active = v.tasks.some(t => t.id === task.id);
        return <label key={task.id} className={`${s.taskChoice} ${active ? s.selected : ''} ${task.id === 'autre' ? s.customChoice : ''}`}>
          <input type="checkbox" checked={active} onChange={() => toggle(task.id)} />
          <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
          <span><strong>{task.title}</strong><small>{task.description}</small></span>
          <span className={s.checkmark} aria-hidden="true">{active && <Check size={14} />}</span>
        </label>;
      })}</div>
      {errors.tasks && <p className={s.error} id="roi-tasks-error">{errors.tasks}</p>}
    </fieldset>
    {v.tasks.some(t => t.id === 'autre') && <div className={s.field}>
      <label htmlFor="roi-custom">La tâche à étudier</label><input id="roi-custom" type="text" maxLength={100} value={v.customTask} placeholder="Ex. Préparer les dossiers de renouvellement" onChange={e => update({ customTask: e.target.value })} aria-invalid={Boolean(errors.customTask)} aria-describedby={errors.customTask ? 'roi-custom-error' : undefined} />
      {errors.customTask && <p className={s.error} id="roi-custom-error">{errors.customTask}</p>}
    </div>}
  </>;
}

export function Hypotheses({ simulation: v, update, errors }: Props) {
  return <>
    <div className={s.assumptionHeading}><SlidersHorizontal size={19} aria-hidden="true" /><h3>Des hypothèses que vous maîtrisez.</h3></div>
    <p className={s.hint}>Ces valeurs sont des points de départ pour simuler, pas des moyennes observées.</p>
    <div className={s.fields}>
      <NumberField id="roi-reduction" label="Réduction du temps par tâche (%)" value={v.reduction} onChange={reduction => update({ reduction })} unit="%" max={100} hint="Gain net, après relecture et validation humaine." error={errors.reduction} />
      <NumberField id="roi-adoption" label="Part des usages réellement adoptés (%)" value={v.adoption} onChange={adoption => update({ adoption })} unit="%" max={100} hint="Une marge pour les usages partiels ou abandonnés." error={errors.adoption} />
      <NumberField id="roi-hourly" label="Coût horaire chargé (€ / h)" value={v.hourlyCost} onChange={hourlyCost => update({ hourlyCost })} unit="€/h" min={1} max={1000} hint="Rémunération et charges, ramenées à une heure." error={errors.hourlyCost} />
      <NumberField id="roi-weeks" label="Semaines travaillées par an" value={v.weeks} onChange={weeks => update({ weeks })} unit="sem." min={1} max={52} step={1} hint="Hors congés et périodes non travaillées." error={errors.weeks} />
    </div>
  </>;
}

export function TimeStep({ simulation: v, update, errors }: Props) {
  const total = v.tasks.reduce((sum, t) => sum + (t.hours || 0), 0);
  return <>
    <Notice><strong>Comptez le temps de toute l’équipe.</strong> Si 3 personnes passent 2 heures sur une tâche, indiquez 6 h. Ne comptez chaque heure qu’une fois.</Notice>
    <div className={s.timeList}>{v.tasks.map(task => <div className={s.timeRow} key={task.id}>
      <span>{taskTitle(task, v)}</span>
      <NumberField id={`roi-hours-${task.id}`} label={`Heures par semaine : ${taskTitle(task, v)}`} value={task.hours} onChange={hours => update({ tasks: v.tasks.map(t => t.id === task.id ? { ...t, hours } : t) })} unit="h / sem." min={0.25} max={350000} placeholder="Ex. 5" error={errors[task.id]} />
    </div>)}</div>
    <div className={s.timeTotal}><span>Temps actuel sur ces tâches</span><strong>{fmtNum(total, 2)} h / semaine</strong></div>
    {errors.capacity && <p className={s.error}>{errors.capacity}</p>}
    {!errors.capacity && v.people && total > v.people * 35 ? <p className={s.hint}>Ce volume dépasse 35 h par personne et par semaine. Vérifiez que les tâches ne se chevauchent pas et que le périmètre couvre bien toute l’équipe.</p> : null}
    <div className={s.assumptions}><Hypotheses simulation={v} update={update} errors={errors} /></div>
  </>;
}
