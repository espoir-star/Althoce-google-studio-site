import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCheck, Cloud, FileStack, Fingerprint, Layers3, LockKeyhole, MessageSquare, Network, Plug, Server, Settings2, ShieldCheck, SlidersHorizontal, Users } from 'lucide-react';
import { Breadcrumb, FaqSection, MethodSection, PreAuditCTA } from '@/components/brand/Sections';
import { centrale, centraleFaqs, centraleMethod, centraleSectors, centraleUses } from '@/lib/centrale-content';
import collaboration from '@/public/images/home/collaboration-bureau.webp';
import atelier from '@/public/images/home/atelier-equipes.webp';
import b from '@/components/brand/Brand.module.css';
import s from './Centrale.module.css';

const useIcons = [FileStack, Users, MessageSquare, Layers3];

/** Schéma de principe éditorial, pas une capture ni une interface produit interactive. */
function PlatformDiagram() {
  return <figure className={s.diagram} aria-label="Vos outils sont reliés à La Centrale. Vos agents travaillent dans le périmètre autorisé et vos équipes valident.">
    <figcaption className={s.diagramCaption}><span>Votre environnement de travail</span><span>Schéma de principe</span></figcaption>
    <div className={s.diagramTools}><span><FileStack size={18} aria-hidden="true" />Vos documents</span><span><Plug size={18} aria-hidden="true" />Vos logiciels</span><span><MessageSquare size={18} aria-hidden="true" />Vos échanges</span></div>
    <div className={s.connection} aria-hidden="true"><i /><i /><i /></div>
    <div className={s.platform}>
      <div className={s.platformHeading}><span className={s.platformIcon}><Network size={26} aria-hidden="true" /></span><div><strong>La Centrale<span>by Althoce</span></strong><p>Vos agents, dans un même espace.</p></div></div>
      <div className={s.agentNodes}><span>Collecter</span><span>Analyser</span><span>Préparer</span></div>
      <div className={s.platformPermissions}><LockKeyhole size={14} aria-hidden="true" />Des accès définis avec vous</div>
    </div>
    <div className={s.validationConnection} aria-hidden="true"><ArrowDown size={22} /></div>
    <div className={s.teamNode}><span><CheckCheck size={21} aria-hidden="true" /></span><div><strong>Vos équipes gardent la main</strong><p>Elles relisent, décident et valident.</p></div></div>
  </figure>;
}

export default function CentralePage() {
  return <main className={`${b.page} ${s.page}`}>
    <section className={s.hero} aria-labelledby="centrale-title"><div className={b.container}>
      <Breadcrumb label="La Centrale" />
      <div className={s.heroGrid}>
        <div className={s.heroCopy}><p className={s.signature}>La Centrale <span>by Althoce</span></p><h1 id="centrale-title">Vos agents IA, <br />chez vous, <br /><span>sur une seule plateforme.</span></h1><p className={s.intro}>Althoce installe La Centrale, une plateforme d’agents IA souveraine et sur mesure, branchée sur l’ensemble de vos outils, hébergée en France ou sur vos propres serveurs.</p><ul className={s.heroPromises}><li><Check size={15} aria-hidden="true" />Sur mesure</li><li><Check size={15} aria-hidden="true" />Reliée à vos outils</li><li><Check size={15} aria-hidden="true" />Évolutive</li></ul><a href={centrale.contactHref} className={b.primary}>Prendre rendez-vous<ArrowUpRight size={18} aria-hidden="true" /></a><p className={s.heroNote}>Installée, connectée et accompagnée par Althoce.</p></div>
        <PlatformDiagram />
      </div>

    </div></section>

    <section className={b.section} aria-labelledby="centrale-lien-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="centrale-lien-title">Vos outils sont là.<br /><span>Il manque le lien.</span></h2><p>Un assistant ici, un document ailleurs, des informations recopiées entre logiciels. L’IA entre dans les habitudes, mais il devient difficile de savoir où vont les données et qui y accède.</p></div>
      <div className={s.connectionStory}>
        <div className={s.fragmented}><p className={s.smallLabel}>Quand les usages s’éparpillent</p><ul><li><FileStack size={20} aria-hidden="true" />Les informations restent dispersées.</li><li><ArrowRight size={20} aria-hidden="true" />Les équipes font le lien à la main.</li><li><LockKeyhole size={20} aria-hidden="true" />Le cadre d’utilisation devient flou.</li></ul></div>
        <div className={s.unified}><span className={s.bridgeIcon}><Network size={28} aria-hidden="true" /></span><div><h3>Un espace commun.<br />Un cadre qui vous ressemble.</h3><p>La Centrale relie vos outils et donne à vos agents les informations utiles à leur mission. Vos équipes retrouvent leurs usages au même endroit et restent décisionnaires.</p></div></div>
      </div>
      <p className={s.scopeNote}>Les connexions et les données accessibles sont définies avec vous, selon vos outils et vos règles métier.</p>
    </div></section>

    <section className={`${b.section} ${s.usesSection}`} aria-labelledby="centrale-usages-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="centrale-usages-title">Des agents construits<br /><span>pour votre quotidien.</span></h2><p>Nous partons de ce qui prend du temps à vos équipes. Ces exemples illustrent des usages à construire ensemble, selon votre contexte.</p></div>
      <div className={s.useGrid}>{centraleUses.map((item, i) => { const Icon = useIcons[i]; return <article key={item.title} className={s.useCard}><div className={s.useTop}><Icon size={25} aria-hidden="true" /><span>{item.action}</span></div><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>
      <p className={s.usesEnd}><span aria-hidden="true">+</span>Et d’autres agents, en fonction de vos besoins.</p>
    </div></section>

    <section className={`${b.section} ${s.hostingSection}`} aria-labelledby="centrale-donnees-title"><div className={b.container}>
      <div className={s.hostingIntro}><ShieldCheck size={30} aria-hidden="true" /><h2 id="centrale-donnees-title">Vos données.<br /><span>Votre choix d’hébergement.</span></h2><p>La souveraineté repose sur des choix concrets : où la plateforme est installée, quels modèles elle utilise et quels accès vous autorisez.</p></div>
      <div className={s.hostingGrid}><article><Cloud size={26} aria-hidden="true" /><h3>Cloud sécurisé en France</h3><p>La Centrale est hébergée en France, dans un environnement défini selon les exigences de votre entreprise.</p></article><article><Server size={26} aria-hidden="true" /><h3>Vos propres serveurs</h3><p>La plateforme peut être installée dans votre environnement, avec vos équipes et vos règles d’accès.</p></article><article className={s.openModels}><Layers3 size={26} aria-hidden="true" /><h3>Modèles open source par défaut</h3><p>C’est le point de départ de votre plateforme, quel que soit le mode d’hébergement retenu.</p></article></div>
      <p className={s.hostingNote}>Le cadre retenu est précisé pendant le cadrage, en fonction de vos données et des exigences de votre activité.</p>
    </div></section>

    <section className={b.section} aria-labelledby="centrale-controle-title"><div className={`${b.container} ${s.controlGrid}`}>
      <div className={s.controlPhoto}><Image src={collaboration} alt="Deux collègues relisent un dossier ensemble sur un ordinateur." fill sizes="(max-width: 900px) calc(100vw - 40px), 48vw" placeholder="blur" /><div className={s.photoNote}><CheckCheck size={20} aria-hidden="true" />La décision reste humaine.</div></div>
      <div><h2 id="centrale-controle-title">L’IA propose.<br /><span>Vos équipes décident.</span></h2><p className={s.controlIntro}>La Centrale s’intègre à votre façon de travailler. Vous définissez ce que les agents peuvent consulter, préparer et soumettre à validation.</p><ul className={s.controlList}><li><Fingerprint size={23} aria-hidden="true" /><div><h3>Des accès réglés outil par outil</h3><p>Chaque agent travaille dans le périmètre que vous lui accordez.</p></div></li><li><CheckCheck size={23} aria-hidden="true" /><div><h3>Vos validations au bon endroit</h3><p>Les agents préparent. Les envois restent soumis à votre validation.</p></div></li><li><Settings2 size={23} aria-hidden="true" /><div><h3>Vos règles métier comme repères</h3><p>Les usages sont ajustés avec vous, selon vos exigences et vos retours.</p></div></li></ul></div>
    </div></section>

    <section className={`${b.section} ${s.evolutionSection}`} aria-labelledby="centrale-evolution-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="centrale-evolution-title">Un premier besoin.<br /><span>Une plateforme qui grandit.</span></h2><p>Votre activité évolue. La Centrale aussi. Althoce ajuste la plateforme au fil de l’usage, avec vos équipes.</p></div>
      <ol className={s.evolution}><li><span className={s.evolutionMark}><Check size={24} aria-hidden="true" /></span><h3>Commencer par l’utile</h3><p>Un usage prioritaire, vos outils et un cadre défini ensemble.</p></li><li><span className={s.evolutionMark}><Network size={24} aria-hidden="true" /></span><h3>Relier de nouveaux usages</h3><p>Des agents et des connexions ajoutés selon vos besoins.</p></li><li><span className={s.evolutionMark}><SlidersHorizontal size={24} aria-hidden="true" /></span><h3>Ajuster avec le terrain</h3><p>Des améliorations guidées par les retours de vos collaborateurs.</p></li></ol>
    </div></section>

    <section className={b.section} aria-labelledby="centrale-secteurs-title"><div className={`${b.container} ${s.sectorsLayout}`}>
      <div><h2 id="centrale-secteurs-title">Quand vos données<br /><span>méritent toute votre attention.</span></h2><p className={b.lead}>Dirigeants, DSI et DAF : La Centrale s’adresse aux professions réglementées et aux entreprises qui veulent garder le contrôle de leurs données et de leurs usages IA.</p></div>
      <ul className={s.sectors}>{centraleSectors.map(item => <li key={item.name}><h3>{item.name}</h3><p>{item.need}</p></li>)}</ul>
    </div></section>

    <MethodSection id="accompagnement-centrale" title="Une plateforme. Une équipe à vos côtés." description="Althoce construit le projet avec vous, l’installe et accompagne vos collaborateurs dans la durée." steps={centraleMethod} image={atelier} alt="Une équipe échange autour de documents et d’un ordinateur pendant un atelier." />
    <section className={s.proof} aria-labelledby="centrale-terrain-title"><div className={`${b.container} ${s.proofInner}`}><span className={s.proofIcon}><Layers3 size={28} aria-hidden="true" /></span><div><h2 id="centrale-terrain-title">Déjà sur le terrain.</h2><p>La technologie est déjà en service dans des cabinets d’expertise comptable.</p></div><a href={centrale.contactHref}>Parlons de votre contexte<ArrowUpRight size={18} aria-hidden="true" /></a></div></section>

    <FaqSection id="questions-centrale" title="Avant de nous rencontrer." description="Quelques repères pour envisager La Centrale dans votre entreprise." items={centraleFaqs} showContactLink={false} />
    <PreAuditCTA id="rendez-vous-centrale" title={<>Votre expertise.<br />Votre Centrale.</>} description="Parlons de vos outils, de vos données et de ce que vous aimeriez simplifier. Nous définirons ensemble un premier usage à construire." ctaLabel="Prendre rendez-vous" note="Un projet construit avec vous, de l’installation au suivi." />
  </main>;
}
