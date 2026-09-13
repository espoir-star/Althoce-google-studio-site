import type { Metadata } from 'next';
import Image from 'next/image';
import TrustStrip from '@/components/brand/TrustStrip';
import Program from '@/components/formation/Program';
import Funding from '@/components/formation/Funding';
import { ArrowUpRight, Check } from 'lucide-react';
import Footer from '@/components/Footer';
import { FaqSection, PreAuditCTA, TextLink } from '@/components/brand/Sections';
import { coaching as c } from '@/lib/coaching-dirigeant';
import b from '@/components/brand/Brand.module.css';
import s from '@/components/formation/Formation.module.css';
export const metadata: Metadata = {
 title: 'Coaching IA pour dirigeants', description: c.description,
 alternates: { canonical: c.url },
 openGraph: { title: 'Coaching IA Dirigeant | Althoce', description: c.description, url: c.url, type: 'website', locale: 'fr_FR', images: [{url:'/images/services/coaching-dirigeant.webp',alt:'Une séance de coaching individuel dans un bureau'}] },
 twitter: { card: 'summary_large_image', title: 'Coaching IA Dirigeant | Althoce', description: c.description },
};
const schema = { '@context':'https://schema.org', '@graph':[
 { '@type':'Course', name:c.title, description:c.description, url:c.url, provider:{'@type':'Organization',name:'Althoce','@id':'https://althoce.com/#organization'}, inLanguage:'fr-FR', teaches:c.objectifs, hasCourseInstance:{'@type':'CourseInstance',courseMode:['Onsite','Online'],courseWorkload:'PT6H'} },
 { '@type':'BreadcrumbList', itemListElement:[{name:'Accueil',item:'https://althoce.com/'},{name:'Formation IA',item:'https://althoce.com/services/formation-ia/'},{name:c.title,item:c.url}].map((x,i)=>({'@type':'ListItem',position:i+1,...x})) },
 { '@type':'FAQPage',mainEntity:c.faq.map(x=>({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}})) },
]};
export default function CoachingDirigeantPage(){return <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
 <main className={b.page}>
  <section className={s.hero}><div className={`${b.container} ${s.grid}`}><div><nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>/</span><a href="/services/formation-ia/">Formation IA</a><span>/</span><span aria-current="page">Coaching dirigeant</span></nav><h1>Coaching IA Dirigeant.<br/><span>Prenez les commandes.</span></h1><p className={b.lead}>Maîtrisez l’IA vous-même, puis donnez un cap à votre entreprise. Un accompagnement individuel, construit autour de vos décisions, de vos dossiers et de votre agenda.</p><a className={b.primary} href="#programme">Découvrir les quatre séances<ArrowUpRight size={18} aria-hidden="true"/></a></div><div className={s.photo}><Image src="/images/services/coaching-dirigeant.webp" alt="Une dirigeante et un consultant travaillent ensemble sur ses dossiers dans un bureau." fill priority sizes="(max-width:900px) 90vw, 50vw"/></div></div></section>
  <TrustStrip className={b.container}/>
  <div className={`${b.container} ${s.facts}`}>{[{label:'Votre rythme',value:'4 séances de 1 h 30 · 6 heures au total'},{label:'Votre espace',value:'Individuel · en visio ou en présentiel'},{label:'Votre point de départ',value:'Dirigeants, DG, CODIR · aucun prérequis'},{label:'Votre calendrier',value:'Une séance toutes les 3–4 semaines · jusqu’à 6 mois'}].map(x=><div key={x.label}><strong>{x.label}</strong><p>{x.value}</p></div>)}</div>
  <section className={b.section}><div className={`${b.container} ${s.grid}`}><div><h2>De vos premiers usages<br/><span>à vos prochains choix.</span></h2><p className={b.lead}>Le programme donne une direction. Vos enjeux font le contenu de chaque séance.</p></div><ul className={s.checks}>{c.objectifs.map(x=><li key={x}><Check size={20} aria-hidden="true"/><span>{x}</span></li>)}</ul></div></section>
  <section id="programme" className={`${b.section} ${s.soft}`}><div className={`${b.container} ${s.programGrid}`}><div><h2>Quatre rendez-vous.<br/><span>Un cap qui se précise.</span></h2><p className={b.lead}>Chaque séance débouche sur un livrable et une mise en pratique. Vous avancez sur votre entreprise, entre deux rendez-vous.</p><TextLink href="/contact/">Préparer mon parcours</TextLink></div><Program name="coaching-programme" steps={c.sessions.map((x,i)=>({time:`Séance ${i+1} · 1 h 30`,title:x.title,points:x.points,outcome:{label:x.livrable,text:x.mission}}))}/></div></section>
  <section className={b.section}><div className={`${b.container} ${s.grid}`}><div className={s.photo}><Image src="/images/services/pilotage.webp" alt="Des professionnels font le point ensemble sur les prochaines actions d’un projet." fill sizes="(max-width:900px) 90vw, 50vw"/></div><div><h2>Entre les séances,<br/><span>vous restez accompagné.</span></h2><ul className={s.checks}><li>Des micro-missions de 15 à 30 minutes pour ancrer la pratique.</li><li>Un accès direct au formateur par email ou WhatsApp, avec une réponse sous 48 h.</li><li>Une bibliothèque de prompts dirigeant enrichie au fil du parcours.</li><li>Une visio de suivi à 30 jours après la dernière séance.</li></ul></div></div></section>
  <section className={`${b.section} ${s.soft}`}><div className={`${b.container} ${s.grid}`}><div><h2>Vous donnez le cap.<br/><span>Vos équipes prennent le relais.</span></h2><p className={b.lead}>Votre feuille de route prévoit aussi leur montée en compétence. Les formations collectives prolongent le travail engagé.</p></div><div><TextLink href="/services/formation-ia/ia-fondamentaux/">IA Fondamentaux pour vos équipes</TextLink><br/><TextLink href="/services/formation-ia/ia-avancee/">Approfondir avec IA Avancée</TextLink><p className={s.note}>Vous préférez partager le parcours avec des pairs ? Le coaching peut aussi se décliner en cohorte de 4 à 6 dirigeants.</p></div></div></section>
  <section className={b.section}><div className={b.container}><Funding/></div></section>
  <FaqSection id="faq-coaching" title="Avant votre premier rendez-vous." description="Le cadre du parcours, simplement." items={c.faq}/>
  <PreAuditCTA title="Et si vous preniez ce temps pour vous ?" description="Un premier échange de 30 minutes offert pour parler de vos priorités et préparer un parcours qui vous ressemble."/>
 </main><Footer showCta={false}/>
 </>}
