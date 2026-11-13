import { ArrowUpRight, Printer, SlidersHorizontal, Info } from 'lucide-react';
import type { Simulation } from '@/lib/roi/data';
import { fmtEur, fmtNum, type SimulationResult, type SimulationErrors } from '@/lib/roi/calculator';
import { NumberField } from './RoiComponents';
import { Hypotheses } from './RoiSections';
import s from './Calculator.module.css';

type Props = {
  simulation: Simulation; result: SimulationResult | null; update: (patch: Partial<Simulation>) => void;
  errors: SimulationErrors; onContact: () => void;
};
export function Report({ simulation: v, result: r, update, errors, onContact }: Props) {
  return <div data-roi-report>
    <p className={s.reportScope}>Périmètre : {v.people} personne{v.people! > 1 ? 's' : ''}{v.sector ? ` · ${v.sector}` : ''}</p>
    {r ? <>
      <div className={s.resultHero}>
        <span className={s.resultLabel}>À réinvestir dans votre expertise</span>
        <div className={s.resultNumber}>{fmtNum(r.savedWeeklyHours, 1)} <span>h / semaine</span></div>
        <p>de temps potentiellement libérable pour votre équipe.</p>
        <div className={s.resultMetrics}><div><strong>{fmtNum(r.savedAnnualHours, 1)} h</strong><span>sur {v.weeks} semaines travaillées</span></div><div><strong>{fmtEur(r.annualValue)}</strong><span>de temps valorisé sur un an</span></div></div>
      </div>
      <div className={s.resultContext}><Info size={18} aria-hidden="true" /><p>Cette valeur représente du temps disponible. Elle ne devient une économie que si vos dépenses diminuent réellement.</p></div>
      <section className={s.resultBlock} aria-labelledby="roi-breakdown-title">
        <h3 id="roi-breakdown-title">Où retrouver ce temps ?</h3>
        <p className={s.hint}>Par semaine, sur le périmètre de votre équipe. La longueur des barres représente le temps actuel.</p>
        <div className={s.barLegend}><span><i />Temps restant</span><span><i />Temps libérable</span></div>
        <div className={s.breakdown}>{r.tasks.map(t => <div key={t.id}>
          <div className={s.breakdownLabel}><strong>{t.title}</strong><span>{fmtNum(t.savedHours, 1)} h <small>sur {fmtNum(t.currentHours, 1)} h</small></span></div>
          <div className={s.bar} style={{ width: `${t.currentHours / Math.max(...r.tasks.map(task => task.currentHours)) * 100}%` }} role="img" aria-label={`${t.title} : ${fmtNum(t.savedHours, 2)} heures libérables sur ${fmtNum(t.currentHours, 2)} heures actuelles.`}><span style={{ width: `${(1 - r.reductionEffective) * 100}%` }} /><span style={{ width: `${r.reductionEffective * 100}%` }} /></div>
        </div>)}</div>
      </section>
    </> : <div className={s.notice} role="status">Ajustez les champs signalés ci-dessous pour recalculer votre estimation.</div>}

    <section className={s.budget} aria-labelledby="roi-budget-title">
      <div className={s.sectionTop}><h3 id="roi-budget-title">Et par rapport à votre budget ?</h3><span className={s.optional}>Facultatif</span></div>
      <p>Ajoutez vos coûts pour estimer un retour sur investissement. Laissez vide si vous ne les connaissez pas encore.</p>
      <div className={s.fields}>
        <NumberField id="roi-setup" label="Budget de mise en place (€)" value={v.setupCost} onChange={setupCost => update({ setupCost })} unit="€" max={10000000} placeholder="À renseigner" hint="Cadrage, intégration, tests et formation." error={errors.setupCost} />
        <NumberField id="roi-monthly" label="Coûts récurrents mensuels (€)" value={v.monthlyCost} onChange={monthlyCost => update({ monthlyCost })} unit="€/mois" max={10000000} placeholder="À renseigner" hint="Licences, maintenance et suivi compris." error={errors.monthlyCost} />
      </div>
      {r && r.annualCost !== null ? <>
        <dl className={s.budgetResults}>
          <div><dt>Coût total la première année</dt><dd>{fmtEur(r.annualCost)}</dd></div>
          <div><dt>Valeur du temps, coûts déduits</dt><dd className={r.netAnnualValue! < 0 ? s.negative : s.positive}>{fmtEur(r.netAnnualValue!)}</dd></div>
          <div><dt>ROI estimé à un an</dt><dd>{r.roiPercent === null ? 'Non calculable¹' : `${fmtNum(r.roiPercent)} %`}</dd></div>
          <div><dt>Équilibre estimé</dt><dd>{r.paybackMonths === null ? 'Non atteint' : r.paybackMonths === 0 ? 'Sans coût initial' : r.paybackMonths > 36 ? 'Au-delà de 36 mois' : `${fmtNum(r.paybackMonths, 1)} mois`}</dd></div>
        </dl>
        <p className={s.hint}>{r.roiPercent === null ? '¹ Le ratio ne peut pas être calculé avec un coût total nul. ' : ''}{r.paybackMonths === null ? 'La valeur du temps ne couvre pas les coûts récurrents dans ce scénario. ' : ''}Projection à usage constant dès le démarrage, hors montée en charge. Le ROI est fondé sur la valeur du temps, pas sur un flux de trésorerie.</p>
      </> : <p className={s.budgetEmpty}>Le ROI apparaîtra lorsque les deux montants seront renseignés. Saisissez 0 uniquement si un coût est réellement nul.</p>}
    </section>

    <details className={`${s.adjustment} ${s.noPrint}`}>
      <summary><SlidersHorizontal size={18} aria-hidden="true" />Ajuster les hypothèses <span aria-hidden="true">+</span></summary>
      <div><Hypotheses simulation={v} update={update} errors={errors} /></div>
    </details>
    {Object.keys(errors).some(key => !['setupCost', 'monthlyCost'].includes(key)) && <p role="alert" className={s.error}>Vérifiez les hypothèses dans « Ajuster les hypothèses ».</p>}

    {r && <>
      <details className={s.formula}>
        <summary>Comment ce résultat est-il calculé ? <span aria-hidden="true">+</span></summary>
        <div>
          <dl><div><dt>Temps libérable chaque semaine</dt><dd>{fmtNum(r.currentWeeklyHours, 2)} h × {v.reduction} % de réduction × {v.adoption} % d’adoption = {fmtNum(r.savedWeeklyHours, 2)} h</dd></div><div><dt>Valeur annuelle du temps</dt><dd>{fmtNum(r.savedWeeklyHours, 2)} h × {v.weeks} semaines × {fmtEur(v.hourlyCost!)} / h = {fmtEur(r.annualValue)}</dd></div>{r.annualCost !== null && <div><dt>Retour sur investissement</dt><dd>(Valeur annuelle − coût de la première année) ÷ coût de la première année × 100.</dd></div>}</dl>
          <p className={s.hint}>Les calculs utilisent les valeurs non arrondies. Le taux de réduction inclut vos relectures et contrôles. Le taux d’adoption tient compte des usages qui ne seront pas systématiques.</p>
        </div>
      </details>
      <section className={`${s.contactCta} ${s.noPrint}`}>
        <div><h3>Passons de l’hypothèse<br />à votre réalité.</h3><p>Ensemble, vérifions les tâches, les contraintes de confidentialité et le premier usage à tester.</p></div>
        <button className={s.primary} type="button" onClick={onContact}>Parler de mon estimation <ArrowUpRight size={18} aria-hidden="true" /></button>
        <span>Premier échange de 30 minutes offert. Sans engagement.</span>
      </section>
      <button className={`${s.printButton} ${s.noPrint}`} type="button" onClick={() => window.print()}><Printer size={17} aria-hidden="true" />Imprimer ou enregistrer en PDF</button>
    </>}
  </div>;
}
