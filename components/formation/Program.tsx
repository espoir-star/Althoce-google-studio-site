import s from './Formation.module.css';
export interface ProgramStep { time:string; title:string; points:string[]; outcome?:{label:string;text:string} }
export default function Program({steps,name}:{steps:ProgramStep[];name:string}) {
 return <div className={s.program}>{steps.map((step,i)=><details key={`${step.time}-${i}`} name={name} open={i===0}><summary><span className={s.stepNumber} aria-hidden="true">{String(i+1).padStart(2,'0')}</span><span className={s.stepHeading}><span className={s.time}>{step.time}</span><span>{step.title}</span></span><span className={s.expand} aria-hidden="true">+</span></summary><div className={s.programBody}><ul>{step.points.map(x=><li key={x}>{x}</li>)}</ul>{step.outcome&&<div className={s.workshop}><span className={s.outcomeIcon} aria-hidden="true">↗</span><p><strong>{step.outcome.label}</strong>{step.outcome.text}</p></div>}</div></details>)}</div>;
}
