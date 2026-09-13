import Image from 'next/image';
import TrustStrip from '@/components/brand/TrustStrip';
import Program from './Program';
import Funding from './Funding';
import { ArrowUpRight, Check } from 'lucide-react';
import { TextLink, PreAuditCTA, FaqSection } from '../brand/Sections';
import type { FormationDetail, RichLinkText } from '@/lib/formations';
import b from '../brand/Brand.module.css';
import s from './Formation.module.css';
function RichLink({data}:{data:RichLinkText}) { return <>{data.before}<a href={data.href}>{data.linkText}</a>{data.after}</>; }
export default function FormationDetailClient({formation:f}:{formation:FormationDetail}) {
 const advanced=f.educationalLevel==='Advanced';
 return <main className={b.page}>
  <section className={s.hero}><div className={`${b.container} ${s.grid}`}><div><nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>/</span><a href="/services/formation-ia/">Formation IA</a><span>/</span><span aria-current="page">{f.title}</span></nav><h1>{f.title}.<br /><span>{advanced?'Donnez forme à vos idées.':'Prenez confiance, en pratiquant.'}</span></h1><p className={b.lead}>{f.chapo}</p><a className={b.primary} href="/contact/">Parlons de votre formation<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className={s.photo}><Image src={advanced?'/images/home/atelier-equipes.webp':'/images/services/formation.webp'} alt="Une équipe apprend à utiliser ses outils lors d’un atelier dans un bureau." fill priority sizes="(max-width:900px) 90vw, 50vw" /></div></div></section>
  <TrustStrip className={b.container}/>
  <div className={`${b.container} ${s.facts}`}>{f.infos.map(item=><div key={item.label}><strong>{item.label}</strong><p>{item.value}</p></div>)}</div>
  <section className={b.section}><div className={`${b.container} ${s.grid}`}><div><h2>Des compétences<br /><span>pour votre quotidien.</span></h2><p className={b.lead}>Nous partons des situations de votre équipe. Les exercices servent à essayer, comparer les résultats et apprendre à garder la main.</p>{f.infoNote&&<p className={s.note}><RichLink data={f.infoNote}/></p>}</div><ul className={s.checks}>{f.objectifs.map(x=><li key={x}><Check size={20} aria-hidden="true"/><span>{x}</span></li>)}</ul></div></section>
  <section className={`${b.section} ${s.soft}`} id="programme"><div className={`${b.container} ${s.programGrid}`}><div><h2>Une journée<br /><span>pour passer à la pratique.</span></h2><p className={b.lead}>Le programme alterne repères, démonstrations et ateliers. Ouvrez chaque étape pour en découvrir le contenu.</p><p className={s.note}>Les exemples de formation sont des supports d’apprentissage. Un déploiement en entreprise se cadre ensuite selon vos outils et vos règles.</p></div><Program name="programme" steps={f.timeline.map(m=>({time:m.horaire,title:m.titre,points:m.contenu,outcome:m.atelier?{label:m.atelier.label,text:m.atelier.description}:undefined}))}/></div></section>
  <section className={b.section}><div className={`${b.container} ${s.grid}`}><div className={s.photo}><Image src={advanced?'/images/services/formation.webp':'/images/home/atelier-equipes.webp'} alt="Des collègues pratiquent ensemble autour d’un ordinateur et d’un carnet." fill sizes="(max-width:900px) 90vw, 50vw" /></div><div><h2>La journée se termine.<br /><span>Les usages commencent.</span></h2><ul className={s.checks}>{f.deliverables.map(x=><li key={x}><Check size={20} aria-hidden="true"/><span>{x}</span></li>)}</ul><p className={s.note}>Une visio de suivi d’une heure à 30 jours pour faire le point sur la pratique.</p></div></div></section>
  <section className={`${b.section} ${s.soft}`}><div className={`${b.container} ${s.grid}`}><div><h2>Préparons une session<br /><span>adaptée à votre équipe.</span></h2><p className={b.lead}>{f.mentions}</p></div><div><Funding/><p className={s.next}><RichLink data={f.allerPlusLoin}/></p><p className={s.note}>Vous dirigez l’entreprise ? <a href="/services/formation-ia/coaching-dirigeant/">Découvrez le coaching IA individuel pour dirigeants.</a></p><TextLink href="/services/formation-ia/">Découvrir tous les parcours</TextLink></div></div></section>
  <FaqSection id="faq" title={`Vos questions sur ${f.title}.`} description="Niveau, ateliers et suivi : les réponses pour préparer votre formation." items={f.faq}/>
  <PreAuditCTA title={f.ctaTitle} description={f.ctaBody}/>
 </main>;
}
