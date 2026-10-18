import Image from 'next/image';
import Funding from './formation/Funding';
import { ArrowUpRight } from 'lucide-react';
import { Breadcrumb, TextLink, FaqSection, PreAuditCTA } from './brand/Sections';
import TrustStrip from './brand/TrustStrip';
import { formationFaq } from '@/lib/formations';
import { formationCards } from '@/lib/formation-catalogue';
import b from './brand/Brand.module.css';
import s from './formation/Formation.module.css';
export default function FormationIAPageClient() {
 return <main className={b.page}>
  <section className={s.hero}><div className={`${b.container} ${s.grid}`}><div><Breadcrumb label="Formation IA"/><h1>La formation IA.<br/><span>Une compétence qui se partage.</span></h1><p className={b.lead}>Professions réglementées et entreprises exigeantes : développez une pratique de l’IA adaptée à votre métier. Deux formations collectives, un coaching dirigeant et un parcours Solo pour indépendants, avec confidentialité et contrôle des résultats.</p><a className={b.primary} href="#formations">Choisir votre parcours<ArrowUpRight size={18} aria-hidden="true"/></a></div><div className={s.photo}><Image src="/images/services/formation.webp" alt="Une formatrice accompagne une petite équipe pendant un atelier dans un bureau." fill priority sizes="(max-width:900px) 90vw, 50vw"/></div></div></section>
  <TrustStrip className={b.container}/>
  <section className={b.section} id="formations"><div className={b.container}><div className={b.sectionHeading}><h2>Un point de départ<br/><span>pour chacun.</span></h2><p>En équipe ou en individuel : choisissez le parcours adapté à votre rôle et à votre pratique.</p></div><div className={s.courses}>{formationCards.map((f,i)=><article className={s.course} key={f.slug}><span className={s.courseNumber} aria-hidden="true">0{i+1}</span><h3>{f.title}</h3><p>{f.text}</p><small>{f.note}<br/>{f.duration}</small><a href={`/services/formation-ia/${f.slug}/`}>Découvrir le programme<ArrowUpRight size={20} aria-hidden="true"/></a></article>)}</div></div></section>
  <section className={`${b.section} ${s.soft}`}><div className={`${b.container} ${s.grid}`}><div className={s.photo}><Image src="/images/home/atelier-equipes.webp" alt="Des collègues travaillent ensemble sur un cas pratique autour d’un carnet et d’un ordinateur." fill sizes="(max-width:900px) 90vw, 50vw"/></div><div><h2>Votre métier.<br/><span>Au cœur des exercices.</span></h2><p className={b.lead}>Un document à synthétiser, un assistant à configurer, une information à vérifier. La formule métier propose un cadre commun à la profession ; la formule personnalisée se prépare autour de deux à trois cas de votre organisation.</p><ul className={s.checks}><li>Avant : comprendre les attentes et vérifier le niveau.</li><li>Pendant : essayer, comparer et améliorer sur des cas concrets.</li><li>Après : des supports et un suivi adapté au parcours, à J+30 pour les équipes et J+15 pour le Solo.</li></ul></div></div></section>
  <section className={b.section}><div className={`${b.container} ${s.grid}`}><div><h2>Préparée pour vous.<br/><span>Accessible à votre équipe.</span></h2><p className={b.lead}>Les formations collectives se déroulent en présentiel ou en visioconférence, avec 12 participants maximum par journée. Nous préparons les modalités et les besoins d’aménagement avec vous. Le parcours Solo se déroule en visio, en individuel.</p></div><Funding/></div></section>
  <FaqSection id="faq-formations" title="Avant de vous lancer." description="Niveau, outils et organisation : les repères utiles." items={formationFaq}/>
  <PreAuditCTA title="Et si votre équipe passait à la pratique ?" description="Parlons de vos usages et du niveau de vos équipes lors d’un premier échange de 30 minutes offert."/>
 </main>;
}
