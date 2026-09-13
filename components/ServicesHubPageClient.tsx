import Image from 'next/image';
import { ArrowUpRight, Compass, Layers, RefreshCw, Users, Plus } from 'lucide-react';
import { Breadcrumb, FaqSection } from './brand/Sections';
import TrustStrip from './brand/TrustStrip';
import { homeOffers, homeMethod } from '@/lib/home-content';
import { hubFaq, serviceStories } from '@/lib/services-content';
import b from './brand/Brand.module.css';
import s from './services/Services.module.css';
import h from './services/ServicesHub.module.css';
const icons = [Compass, Layers, RefreshCw, Users];
const benefits = ['Des priorités claires.', 'Du temps retrouvé.', 'Des usages qui durent.', 'Une équipe autonome.'];
export default function ServicesHubPageClient() {
 return <main className={b.page}>
  <section className={`${s.hero} ${h.hero}`} aria-labelledby="services-title"><div className={`${b.container} ${s.heroGrid}`}><div><Breadcrumb label="Services" /><h1 id="services-title">Vos projets IA.<br /><span>Un cap, une équipe,<br />du concret.</span></h1><p className={b.lead}>Diagnostic, formations IA, agents et automatisation : Althoce vous accompagne pour transformer une intention en usages qui comptent dans votre PME.</p><a className={b.primary} href="#orientation">Trouver mon point de départ<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className={s.heroPhoto}><Image src="/images/services/diagnostic.webp" alt="Une consultante et un dirigeant échangent sur leurs priorités dans un bureau." fill priority sizes="(max-width: 900px) 92vw, 52vw" /><span className={s.photoLabel}>Votre besoin donne la direction.</span></div></div></section>
  <TrustStrip className={b.container} />
  <section className={`${b.section} ${h.offering}`} id="orientation" aria-labelledby="offers-title"><div className={b.container}>
   <div className={h.heading}><h2 id="offers-title">Le bon accompagnement.<br /><span>Au bon moment.</span></h2><p>Quatre façons d’avancer ensemble. Nous choisissons avec vous celle qui répond à votre situation.</p></div>
   <div className={h.cards}>{homeOffers.map((offer,i)=>{const Icon=icons[i];return <article key={offer.title} className={h.card}>
    <div className={h.cardTop}><Icon size={28} strokeWidth={1.5} aria-hidden="true"/><span aria-hidden="true">0{i+1}</span></div>
    <h3>{offer.title}</h3><p>{offer.desc}</p><div className={h.cardBottom}><strong>{benefits[i]}</strong><a href={offer.href}>{offer.linkLabel}<ArrowUpRight size={20} aria-hidden="true"/></a></div>
   </article>})}</div>
  </div></section>
  <section className={`${b.section} ${h.working}`} aria-labelledby="method-title"><div className={`${b.container} ${h.workingGrid}`}>
   <div className={h.scene}><Image src="/images/services/construction.webp" alt="Des collègues construisent une solution ensemble autour d’un ordinateur." fill sizes="(max-width:900px) 90vw, 42vw"/><div className={h.sceneCaption}>Vos outils. Vos habitudes.<br/><strong>Notre point de départ.</strong></div></div>
   <div className={h.method}><h2 id="method-title">Du premier échange<br /><span>à l’usage quotidien.</span></h2><p>Un projet sur mesure se construit avec les personnes qui vont l’utiliser.</p><ol>{homeMethod.map(step=><li key={step.n}><span aria-hidden="true">{step.n}</span><div><h3>{step.title}</h3><p>{step.desc}</p></div></li>)}</ol></div>
  </div></section>
  <section className={h.people} aria-labelledby="formation-title"><div className={`${b.container} ${h.peopleGrid}`}>
   <div><h2 id="formation-title">La technologie compte.<br/><span>Ceux qui l’utilisent, encore plus.</span></h2><p>Nous transmettons autant que nous construisons. Formations IA, prise en main et suivi donnent à votre équipe les moyens d’avancer en confiance.</p><div className={h.commitments}><span>Apprendre sur vos cas réels</span><span>Garder la main sur vos outils</span><span>Être accompagné dans la durée</span></div><a className={h.cabinetLink} href="/a-propos/">Rencontrer le cabinet<ArrowUpRight size={20} aria-hidden="true"/></a></div>
   <div className={h.peoplePhoto}><Image src="/images/home/atelier-equipes.webp" alt="Une équipe partage ses apprentissages pendant un atelier de travail." fill sizes="(max-width:900px) 90vw, 44vw"/></div>
  </div></section>
  <FaqSection id="faq-services" title="Trouvons le bon point de départ." description="Quelques réponses avant notre premier échange." items={hubFaq} showContactLink={false}/>
  <div className={`${b.container} ${h.expertise}`}><details><summary>Explorer nos expertises techniques<Plus size={20} aria-hidden="true"/></summary><p>La forme de la solution vient après le besoin. Ces expertises servent vos projets sur mesure.</p><nav aria-label="Expertises IA complémentaires">{serviceStories.filter(x=>!['audit-ia','automatisation-ia','pilotage-ia'].includes(x.slug)).map(x=><a key={x.slug} href={`/services/${x.slug}/`}>{x.name}<ArrowUpRight size={16} aria-hidden="true"/></a>)}</nav></details></div>
 </main>;
}
