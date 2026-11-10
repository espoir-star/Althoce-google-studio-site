import { Plus } from 'lucide-react';
import type { WorkflowExample } from '@/lib/expertise';
import s from './Expertise.module.css';

export default function WorkflowExamples({ items, id }: { items: WorkflowExample[]; id: string }) {
  return (
    <div className={s.scenarios}>
      {items.map((item, i) => (
        <details key={item.title} className={s.scenario} name={id} open={i === 0}>
          <summary id={`${id}-${i}`}>
            <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.situation}</p>
            <Plus size={21} aria-hidden="true" />
          </summary>
          <dl className={s.scenarioBody} aria-labelledby={`${id}-${i}`}>
            <div>
              <dt>Le point de départ</dt>
              <dd>{item.input}</dd>
            </div>
            <div>
              <dt>Ce que l’agent prépare</dt>
              <dd>{item.output}</dd>
            </div>
            <div>
              <dt>Ce que votre équipe valide</dt>
              <dd>{item.review}</dd>
            </div>
          </dl>
        </details>
      ))}
    </div>
  );
}
