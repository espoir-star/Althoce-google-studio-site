import { Check } from "lucide-react";
import type { WorkflowExample } from "@/lib/expertise";
import s from "./Expertise.module.css";

export default function WorkflowExamples({
  items,
  id,
}: {
  items: WorkflowExample[];
  id: string;
}) {
  return (
    <div className={s.useGrid}>
      {items.map((item, i) => (
        <article
          key={item.title}
          className={s.useCard}
          aria-labelledby={`${id}-${i}`}
        >
          <span className={s.useNumber} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 id={`${id}-${i}`}>{item.title}</h3>
          <p>{item.output}</p>
          <div className={s.useReview}>
            <Check size={17} aria-hidden="true" />
            <p>{item.review}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
