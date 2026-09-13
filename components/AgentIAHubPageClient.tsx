import Image from 'next/image';
import {ArrowUpRight} from 'lucide-react';
import {FaqSection,PreAuditCTA,TextLink} from './brand/Sections';
import TrustStrip from './brand/TrustStrip';
import {MissionPath} from './services/ServicePage';
import {MetierDirectory} from './metiers/MetierPage';
import {metierHubFaq} from '@/lib/metiers-content';
import b from './brand/Brand.module.css';
import s from './metiers/Metiers.module.css';
export default function AgentIAHubPageClient(){return <main className={b.page}>
 <section className={s.hero}><div className={`${b.container} ${s.grid}`}><div><nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>/</span><span aria-current="page">Agents IA par métier</span></nav><h1>Des agents IA.<br/><span>À la mesure de vos métiers.</span></h1><p className={b.lead}>Chaque entreprise travaille différemment. Althoce conçoit des agents IA et des automatisations sur mesure, à partir de vos outils, de vos équipes et des tâches qui leur prennent du temps.</p><a href="#metiers" className={b.primary}>Explorer les usages<ArrowUpRight size={18} aria-hidden="true"/></a><p className={s.note}>Les exemples ci-dessous servent à vous projeter. Votre solution se construit avec vous.</p></div><div className={s.photo}><Image src="/images/services/metiers-collaboration.webp" alt="Des collègues échangent autour de leurs documents et d’un ordinateur dans un bureau." fill priority sizes="(max-width:900px) 90vw, 50vw"/></div></div></section>
 <TrustStrip className={b.container}/>
 <section className={b.section} id="metiers"><div className={b.container}><div className={s.heading}><h2>Quel quotidien<br/><span>voulez-vous simplifier ?</span></h2><p>Du commercial aux opérations, découvrez des situations concrètes et la place que l’IA peut y prendre.</p></div><MetierDirectory/></div></section>
 <section className={`${b.section} ${s.soft}`} id="agents"><div className={`${b.container} ${s.grid}`}><div className={s.photo}><Image src="/images/services/diagnostic.webp" alt="Deux professionnels examinent les documents et les priorités d’une entreprise." fill sizes="(max-width:900px) 90vw, 50vw"/></div><div><h2>Un besoin réel.<br/><span>Le bon niveau d’IA.</span></h2><p className={b.lead}>Un outil existant suffit parfois. Ailleurs, une automatisation ou un agent connecté à vos données fait la différence. Nous partons du travail à accomplir pour choisir l’approche.</p><div className={s.followup}><div><strong>Comprendre</strong><p>Observer les étapes, les données et les décisions prises par l’équipe.</p></div><div><strong>Vérifier</strong><p>Tester un périmètre utile, mesurer les résultats et traiter les exceptions.</p></div></div><TextLink href="/services/audit-ia/">Commencer par le diagnostic</TextLink></div></div></section>
 <section className={b.section}><div className={b.container}><div className={s.heading}><h2>Concevoir ensemble.<br/><span>Transmettre pour la suite.</span></h2><p>La réussite du projet passe aussi par les compétences des personnes qui l’utilisent.</p></div><MissionPath/><div className={s.links}><TextLink href="/services/formation-ia/">Former vos équipes</TextLink><TextLink href="/services/agents-ia/">Comprendre la conception sur mesure</TextLink><TextLink href="/services/pilotage-ia/">Organiser le suivi</TextLink></div></div></section>
 <FaqSection id="faq" title="Avant d’imaginer votre agent IA." description="Des repères pour choisir le bon point de départ." items={metierHubFaq}/>
 <PreAuditCTA id="footer-pre-audit"/>
 </main>}
