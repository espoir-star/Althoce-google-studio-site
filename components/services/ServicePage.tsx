import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { TextLink, FaqSection } from '../brand/Sections';
import { homeMethod } from '@/lib/home-content';
import { serviceStories, type ServiceStory } from '@/lib/services-content';
import { agentMetiers } from '@/lib/data';
import b from '../brand/Brand.module.css';
import s from './Services.module.css';

export function MissionPath() {
  return <ol className={s.method}>{homeMethod.map(step=><li key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.purpose}</p></li>)}</ol>;
}
export function ServiceLinks({ current }: { current?: string }) {
  return <details className={s.directory}><summary>Tous nos services IA<span aria-hidden="true">+</span></summary><nav className={s.serviceCards} aria-label="Tous les services IA">{serviceStories.filter(x=>x.slug!==current).map(x=><a key={x.slug} href={`/services/${x.slug}/`}><span><strong>{x.name}</strong><small>{x.accent}</small></span><ArrowUpRight size={19} aria-hidden="true" /></a>)}<a href="/services/formation-ia/"><span><strong>Formation IA</strong><small>Faire grandir les compétences.</small></span><ArrowUpRight size={19} aria-hidden="true" /></a></nav></details>;
}
export function MetierLinks() {
  return <details className={s.directory}><summary>Explorer les usages par métier<span aria-hidden="true">+</span></summary><nav aria-label="Usages IA par métier">{agentMetiers.map(item=><a key={item.href} href={item.href}>{item.title}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</nav></details>;
}
export default function ServicePage({ service: d }: { service: ServiceStory }) {
  const audit = d.slug==='audit-ia';
  const pilotage = d.slug==='pilotage-ia';
  const faqSubject: Record<string,string> = {'pilotage-ia':'le pilotage IA','audit-ia':'l’audit IA','agents-ia':'les agents IA','automatisation-ia':'l’automatisation IA','integration-ia':'l’intégration IA','developpement-ia':'le développement IA','chatbot-ia':'les chatbots IA','employe-ia':'l’employé IA'};
  const contentAnchor = ({'pilotage-ia':'suivi','audit-ia':'livrables','agents-ia':'anatomie','automatisation-ia':'cas-concrets','integration-ia':'securite','developpement-ia':'stack','chatbot-ia':'architecture','employe-ia':'anatomie'} as Record<string,string>)[d.slug];
  return <main className={b.page}>
    <section className={s.hero} aria-labelledby="service-title"><div className={`${b.container} ${s.heroGrid}`}>
      <div><nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span aria-hidden="true">/</span><a href="/services/">Services</a><span aria-hidden="true">/</span><span aria-current="page">{d.name}</span></nav><h1 id="service-title">{d.title}<br /><span>{d.accent}</span></h1><p className={b.lead}>{d.description}</p><a className={b.primary} href="/contact/">Parlons de votre projet<ArrowUpRight size={18} aria-hidden="true" /></a><p className={s.note}>Pré-audit offert · 30 min · Sans engagement</p></div>
      <div className={`${s.heroPhoto} ${audit ? s.auditPhoto : ''}`}><Image src={`/images/services/${d.image}.webp`} alt={d.alt} fill priority sizes="(max-width: 900px) 92vw, 52vw" /><span className={s.photoLabel}>{audit ? 'Observer. Comprendre. Choisir.' : 'Le point de départ : votre quotidien.'}</span></div>
    </div></section>

    <section className={`${b.section} ${s.fieldwork}`} aria-labelledby="question-title">
      <div className={`${b.container} ${s.fieldGrid}`}>
        <div className={s.fieldPhoto}><Image src={audit ? '/images/home/collaboration-bureau.webp' : '/images/home/atelier-equipes.webp'} alt={audit ? 'Deux collègues observent ensemble une tâche sur ordinateur dans leur environnement de travail.' : 'Une équipe travaille ensemble sur un cas concret autour d’un carnet et d’un ordinateur.'} fill sizes="(max-width: 900px) 90vw, 48vw" /><span>{audit ? 'Le travail réel, avant les recommandations.' : pilotage ? 'Faire le point, avec les personnes qui l’utilisent.' : 'Vos équipes participent à la conception.'}</span></div>
        <div className={s.fieldCopy}><h2 id="question-title">{audit ? <>Partir du terrain<br /><span>pour décider où agir.</span></> : d.question}</h2><p>{audit ? 'Nous prenons le temps d’observer vos tâches, d’écouter vos équipes et de comprendre les détours entre vos outils. Le diagnostic IA part de ce qui se passe vraiment chez vous.' : d.answer}</p>
          <div className={s.contextSteps}>{(audit ? [['Écouter','Les personnes qui font le travail.'],['Observer','Les tâches, les outils, les difficultés.'],['Prioriser','L’impact, la faisabilité et les efforts.']] : pilotage ? [['Les usages','Ce qui aide vraiment vos équipes.'],['La fiabilité','Les difficultés à traiter en priorité.'],['La suite','Les évolutions à construire ensemble.']] : [['Vos usages','Les tâches et les objectifs de l’équipe.'],['Vos outils','Les données et les logiciels en place.'],['Vos règles','Les exceptions et les validations.']]).map(([title,text])=><div key={title}><strong>{title}</strong><span>{text}</span></div>)}</div>
        </div>
      </div>
    </section>

    <section className={b.section} id={contentAnchor} aria-labelledby="example-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="example-title">{d.exampleTitle}</h2><p>{audit ? 'Le diagnostic transforme vos observations en décisions.' : ['agents-ia','automatisation-ia'].includes(d.slug) ? 'Un exemple pour vous projeter. Nous construisons votre solution sur mesure, à partir de votre contexte.' : pilotage ? 'Un rythme de suivi adapté à votre organisation, défini au démarrage.' : 'Un exemple de parcours, à adapter à votre organisation.'}</p></div>
      <div className={`${s.example} ${audit ? s.auditExample : ''}`}>{d.example.map((item,i)=><div key={item}><span className={s.exampleNumber}>{String(i+1).padStart(2,'0')}</span><p>{item}</p>{i<2&&<ArrowRight aria-hidden="true" size={24} />}</div>)}</div>
      <div className={s.uses}>{d.uses.map((item,i)=><article key={item.title}><span aria-hidden="true">{['↗','◎','↔'][i]}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      {d.slug==='agents-ia'&&<div className={s.metiers}><TextLink href="/agent-ia/">Explorer des exemples d’agents IA par métier</TextLink><nav aria-label="Métiers des agents IA">{agentMetiers.map(item=><a key={item.href} href={item.href}>{item.title}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</nav></div>}
    </div></section>

    <section className={s.delivery} aria-labelledby="delivery-title"><div className={`${b.container} ${s.deliveryGrid}`}>
      <div><h2 id="delivery-title">{d.deliveryTitle}</h2><p>{d.next}</p><TextLink href={audit ? '/services/agents-ia/' : '/services/formation-ia/'}>{audit ? 'Et après le diagnostic ?' : 'Faire grandir les compétences de l’équipe'}</TextLink></div>
      <ul className={audit ? s.auditDeliverables : undefined}>{d.delivery.map((item,i)=><li key={item}>{audit ? <strong className={s.deliverableIndex} aria-hidden="true">0{i+1}</strong> : <Check size={21} aria-hidden="true" />}<span>{item}</span></li>)}</ul>
    </div></section>

    <section className={b.section} aria-labelledby="mission-title"><div className={b.container}><div className={s.sectionHeading}><h2 id="mission-title">Avec vous,<br /><span>du début à la suite.</span></h2><p>Une méthode commune, adaptée à votre besoin. Les décisions sont prises avec les personnes qui utiliseront la solution.</p></div><MissionPath /><div className={s.related}><TextLink href="/a-propos/">Découvrir le cabinet</TextLink><TextLink href="/cas-clients/">Explorer nos cas clients</TextLink>{!audit&&<TextLink href="/services/audit-ia/">Clarifier vos priorités avec un audit IA</TextLink>}</div>{!pilotage&&<TextLink href="/services/pilotage-ia/">Faire durer votre projet avec le pilotage IA</TextLink>}<ServiceLinks current={d.slug} />{['automatisation-ia','integration-ia'].includes(d.slug)&&<MetierLinks />}</div></section>
    <FaqSection id="faq-service" title={`Vos questions sur ${faqSubject[d.slug]}.`} description="Des repères pour décider de la prochaine étape." items={d.faq} />
  </main>;
}
