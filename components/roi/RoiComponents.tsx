import { useId, type ReactNode } from 'react';
import type { NumericInput } from '@/lib/roi/data';
import s from './Calculator.module.css';

export function NumberField({ label, value, onChange, unit, hint, error, min = 0, max, step = 'any', placeholder = '', id: suppliedId }: {
  label: string; value: NumericInput; onChange: (value: NumericInput) => void; unit?: string;
  hint?: string; error?: string; min?: number; max?: number; step?: number | 'any'; placeholder?: string; id?: string;
}) {
  const generatedId = useId();
  const id = suppliedId || generatedId;
  return <div className={s.field}>
    <label htmlFor={id}>{label}</label>
    <div className={s.inputWrap}>
      <input id={id} type="number" inputMode={step === 1 ? 'numeric' : 'decimal'} min={min} max={max} step={step} value={value ?? ''} placeholder={placeholder}
        onChange={e => onChange(e.target.value === '' ? null : e.target.valueAsNumber)}
        aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined} />
      {unit && <span aria-hidden="true">{unit}</span>}
    </div>
    {error ? <p className={s.error} id={`${id}-error`}>{error}</p> : hint ? <p className={s.hint} id={`${id}-hint`}>{hint}</p> : null}
  </div>;
}
export function Notice({ children }: { children: ReactNode }) {
  return <div className={s.notice}>{children}</div>;
}
