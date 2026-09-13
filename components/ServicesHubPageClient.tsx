import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Breadcrumb, TextLink, FaqSection } from './brand/Sections';
import TrustStrip from './brand/TrustStrip';
import { MissionPath, MetierLinks } from './services/ServicePage';
import { homeOffers } from '@/lib/home-content';
import { hubFaq, serviceStories } from '@/lib/services-content';
import b from './brand/Brand.module.css';
import s from './services/Services.module.css';
export default function ServicesHubPageClient() {
 return <main className={b.page}>
  <section className={`${s.hero} ${s.hubHero}`} aria-labelledby="services-title"><div className={`${b.container} ${s.heroGrid}`}><div><Breadcrumb label="Services" /><h1 id="services-title">Vos projets IA.<br /><span>Un cap, une équipe,<br />du concret.</span></h1><p className={b.lead}>Diagnostic, formations IA, agents et automatisation : Althoce vous accompagne pour transformer une intention en usages qui comptent dans votre PME.</p><a className={b.primary} href="#orientation">Trouver mon point de départ<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className={s.heroPhoto}><Image src="/images/services/diagnostic.webp" alt="Une consultante et un dirigeant échangent sur leurs priorités dans un bureau." fill priority sizes="(max-width: 900px) 92vw, 52vw" /><span className={s.photoLabel}>Votre besoin donne la direction.</span></div></div></section>
  <TrustStrip className={b.container} />
  <section className={b.section} id="orientation" aria-labelledby="orientation-title"><div className={b.container}><div className={s.sectionHeading}><h2 id="orientation-title">Vous en êtes où<br /><span>avec l’IA ?</span></h2><p>Pas besoin d’avoir déjà la solution.<br />Commençons par votre situation.</p></div><div className={s.orientation}>{[
   ['J’ai besoin d’y voir clair.','Identifier les usages utiles et les priorités.','/services/audit-ia/','Faire le point'],
   ['Je veux faire progresser l’équipe.','Apprendre sur vos cas réels et gagner en autonomie.','/services/formation-ia/','Découvrir les formations'],
   ['J’ai une tâche à simplifier.','Construire un premier usage dans vos outils.','/services/automatisation-ia/','Passer au concret']
  ].map(([title,text,href,label])=><a key={href} href={href}><h3>{title}</h3><p>{text}</p><span>{label}<ArrowUpRight size={22} aria-hidden="true" /></span></a>)}</div></div></section>
  <section className={`${b.section} ${s.offerSection}`} aria-labelledby="offers-title"><div className={b.container}><div className={s.sectionHeading}><h2 id="offers-title">De la première idée<br /><span>à l’usage quotidien.</span></h2><p>Quatre accompagnements qui se complètent, selon vos besoins.</p></div><div className={s.offers}>{homeOffers.map((o,i)=><article key={o.title}><span className={s.offerNumber} aria-hidden="true">0{i+1}</span><div><h3>{o.title}</h3><p>{o.purpose}</p></div><TextLink href={o.href}>{o.linkLabel}</TextLink></article>)}</div></div></section>
  <section className={b.section} aria-labelledby="solutions-title"><div className={b.container}><div className={s.sectionHeading}><h2 id="solutions-title">La bonne réponse<br /><span>à votre façon de travailler.</span></h2><p>Un agent, un chatbot ou du développement sur mesure : nous choisissons la forme après avoir compris le besoin.</p></div><div className={s.solutions}>{serviceStories.filter(x=>x.slug!=='audit-ia').map(x=><a href={`/services/${x.slug}/`} key={x.slug}><h3>{x.name}</h3><p>{x.accent}</p><ArrowUpRight size={20} aria-hidden="true" /></a>)}</div><MetierLinks /></div></section>
  <section className={s.formationBand} aria-labelledby="formation-title"><div className={`${b.container} ${s.formationGrid}`}><div className={s.formationPhoto}><Image src="/images/home/atelier-equipes.webp" alt="Une équipe apprend ensemble à partir d’un cas concret autour d’un ordinateur." fill sizes="(max-width: 900px) 90vw, 50vw" /></div><div><h2 id="formation-title">La solution avance.<br /><span>Vos équipes aussi.</span></h2><p>Nous transmettons autant que nous construisons. Formations IA, prise en main et documentation donnent à chacun les moyens de s’approprier les nouveaux usages.</p><a href="/services/formation-ia/">Découvrir nos formations IA<ArrowUpRight size={20} aria-hidden="true" /></a></div></div></section>
  <section className={b.section} aria-labelledby="method-title"><div className={b.container}><div className={s.sectionHeading}><h2 id="method-title">Un même fil conducteur.</h2><p>Nous avançons avec vous, du premier échange au suivi après le projet.</p></div><MissionPath /><div className={s.related}><TextLink href="/a-propos/">Rencontrer le cabinet</TextLink><TextLink href="/cas-clients/">Découvrir les cas clients</TextLink></div></div></section>
  <FaqSection id="faq-services" title="Trouvons le bon point de départ." description="Quelques réponses avant notre premier échange." items={hubFaq} />
 </main>;
}
