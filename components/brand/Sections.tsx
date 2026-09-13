import type { ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ArrowUpRight, Plus } from 'lucide-react';
import s from './Brand.module.css';

export type Faq = { q: string; a: string };
export type MethodStep = { n: string; title: string; desc: string };

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className={s.textLink} href={href}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
export function Breadcrumb({ label }: { label: string }) {
  return <nav className={s.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>;
}
export function PhotoHero({ title, description, image, alt, label, children }: { title: ReactNode; description: string; image: StaticImageData; alt: string; label: string; children?: ReactNode }) {
  return <section className={s.hero}><div className={`${s.container} ${s.heroGrid}`}><div><Breadcrumb label={label} /><h1>{title}</h1><p className={s.lead}>{description}</p>{children}</div><div className={s.heroPhoto}><Image src={image} alt={alt} fill priority sizes="(max-width: 900px) calc(100vw - 40px), 48vw" placeholder="blur" /></div></div></section>;
}
export function MethodSection({ id = 'method', title, description, steps, image, alt }: { id?: string; title: string; description: string; steps: MethodStep[]; image: StaticImageData; alt: string }) {
  return <section id={id} className={`${s.section} ${s.soft}`} aria-labelledby={`${id}-title`}><div className={s.container}><div className={s.sectionHeading}><h2 id={`${id}-title`}>{title}</h2><p>{description}</p></div><div className={s.methodGrid}><div className={s.methodPhoto}><Image src={image} alt={alt} fill sizes="(max-width: 900px) calc(100vw - 40px), 48vw" placeholder="blur" /></div><ol className={s.methodSteps}>{steps.map(item => <li key={item.n}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div></li>)}</ol></div></div></section>;
}
export function FaqItem({ item, id, group }: { item: Faq; id: string; group: string }) {
  return <details className={s.faqItem} name={group}><summary id={id}><span>{item.q}</span><Plus size={20} aria-hidden="true" /></summary><div role="region" aria-labelledby={id}><p>{item.a}</p></div></details>;
}
export function FaqSection({ id, title, description, items, showContactLink = true }: { id: string; title: string; description: string; items: Faq[]; showContactLink?: boolean }) {
  return <section id={id} className={s.section} aria-labelledby={`${id}-title`}><div className={`${s.container} ${s.faqGrid}`}><div><h2 id={`${id}-title`}>{title}</h2><p className={s.lead}>{description}</p>{showContactLink && <TextLink href="/contact/">Parlons de votre projet</TextLink>}</div><div className={s.faqList}>{items.map((item,i) => <FaqItem key={item.q} item={item} id={`${id}-${i}`} group={id} />)}</div></div></section>;
}
export function PreAuditCTA({ id = 'pre-audit', title = <>Et si votre équipe<br />retrouvait du temps&nbsp;?</>, description = 'Parlons de ce qui vous prend trop de place aujourd’hui. En 30 minutes, faisons le point sur vos besoins et les premières pistes à explorer avec l’IA.' }: { id?: string; title?: ReactNode; description?: string }) {
  return <section id={id} className={s.callSection} aria-labelledby={`${id}-title`}><div className={`${s.container} ${s.callContent}`}><div><h2 id={`${id}-title`}>{title}</h2><p>{description}</p></div><div className={s.callAction}><a className={s.primary} href="/contact/">Réserver mon pré-audit offert<ArrowUpRight size={18} aria-hidden="true" /></a><p>30 minutes ensemble. Sans engagement.</p></div></div></section>;
}
