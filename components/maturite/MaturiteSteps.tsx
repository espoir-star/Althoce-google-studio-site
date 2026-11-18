import { useRef, type RefObject } from 'react';
import { Check } from 'lucide-react';
import { DIMENSIONS, QUESTIONS, ROLES, SECTOR_DETAIL_MAX, SECTOR_OPTIONS, SIZES, UNKNOWN_LABEL, questionText, type Answer, type Profile, type Question } from '@/lib/maturite/questions';
import { needsSectorDetail } from '@/lib/maturite/model';
import s from '@/components/roi/Calculator.module.css';
import m from './Maturite.module.css';

export function ProfileStep({ profile, update, showErrors }: { profile: Profile; update: (patch: Partial<Profile>) => void; showErrors: boolean }) {
  const missing = (key: keyof Profile) => showErrors && !profile[key];
  const detailMissing = showErrors && needsSectorDetail(profile);
  return <>
    <div className={s.fields}>
      <div className={s.field}>
        <label htmlFor="maturite-sector">Votre secteur</label>
        <select id="maturite-sector" value={profile.sector} onChange={e => update({ sector: e.target.value })} aria-invalid={missing('sector')} className={missing('sector') ? m.invalid : undefined}>
          <option value="">Choisir mon secteur</option>
          {SECTOR_OPTIONS.map(option => <option key={option.slug} value={option.slug}>{option.name}</option>)}
        </select>
        {missing('sector') && <p className={s.error}>Choisissez un secteur.</p>}
        {profile.sector === 'autre' && <div className={`${s.field} ${m.subField}`}>
          <label htmlFor="maturite-sector-detail">Précisez votre activité</label>
          <input id="maturite-sector-detail" type="text" required maxLength={SECTOR_DETAIL_MAX} placeholder="Ex. cabinet d’architecture" autoComplete="off" value={profile.sectorDetail ?? ''} onChange={e => update({ sectorDetail: e.target.value })} aria-invalid={detailMissing} aria-describedby={detailMissing ? 'maturite-sector-detail-error' : undefined} />
          {detailMissing && <p className={s.error} id="maturite-sector-detail-error">Précisez votre activité.</p>}
        </div>}
      </div>
      <div className={s.field}>
        <label htmlFor="maturite-role">Votre rôle</label>
        <select id="maturite-role" value={profile.role} onChange={e => update({ role: e.target.value as Profile['role'] })} aria-invalid={missing('role')} className={missing('role') ? m.invalid : undefined}>
          <option value="">Choisir mon rôle</option>
          {ROLES.map(role => <option key={role.id} value={role.id}>{role.label}</option>)}
        </select>
        {missing('role') && <p className={s.error}>Choisissez un rôle.</p>}
      </div>
    </div>
    <fieldset className={m.fieldset} aria-describedby={missing('size') ? 'maturite-size-error' : undefined}>
      <legend>Taille de votre structure</legend>
      <div className={m.sizeGrid}>{SIZES.map(size => <label key={size.id} className={m.chip} data-selected={profile.size === size.id}>
        <input type="radio" name="maturite-size" value={size.id} checked={profile.size === size.id} onChange={() => update({ size: size.id })} aria-invalid={missing('size')} />
        {size.label}
      </label>)}</div>
      {missing('size') && <p className={s.error} id="maturite-size-error">Choisissez une taille.</p>}
    </fieldset>
  </>;
}

export function QuestionStep({ question, size, value, index, heading, onAnswer }: {
  question: Question; size: Profile['size']; value: Answer | undefined; index: number;
  heading: RefObject<HTMLLegendElement | null>; onAnswer: (value: Answer, advance: boolean) => void;
}) {
  // Un clic ou un appui passe à la question suivante ; au clavier, on choisit puis on valide avec le bouton.
  const pointer = useRef(false);
  const shown = questionText(question, size);
  const dimension = DIMENSIONS.find(item => item.id === question.dim)!;
  return <>
    <div className={m.progress}>
      <span>{dimension.name}</span>
      <div className={m.progressTrack} aria-hidden="true"><i style={{ width: `${index / QUESTIONS.length * 100}%` }} /></div>
      <span>Question {index + 1} sur {QUESTIONS.length}</span>
    </div>
    <fieldset className={m.question} aria-describedby={shown.help ? 'maturite-help' : undefined}>
      <legend ref={heading} tabIndex={-1}>{shown.q}</legend>
      {shown.help && <p className={m.questionHelp} id="maturite-help">{shown.help}</p>}
      <div className={m.options}>{shown.opts.map((label, i) => <label key={i} className={m.option} data-selected={value === i}
        onClick={e => { if (e.target instanceof HTMLInputElement) return; if (value === i) onAnswer(i as Answer, true); else pointer.current = true; }}>
        <input type="radio" name={`maturite-${question.id}`} checked={value === i} onChange={() => { const advance = pointer.current; pointer.current = false; onAnswer(i as Answer, advance); }} />
        <span className={m.optionMark} aria-hidden="true">{value === i && <Check size={12} strokeWidth={3} />}</span>
        <span className={m.optionText}>{label}</span>
      </label>)}</div>
    </fieldset>
    <button type="button" className={`${s.textButton} ${m.unknown}`} data-selected={value === -1} aria-pressed={value === -1} onClick={() => onAnswer(-1, true)}>{UNKNOWN_LABEL}</button>
  </>;
}
