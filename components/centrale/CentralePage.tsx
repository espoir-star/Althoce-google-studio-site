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
  return <figure className={s.diagram}>
    <figcaption className={s.diagramCaption}><strong>Comment tout se relie</strong><span>Schéma de principe</span></figcaption>
    <div className={s.diagramTools}><span><FileStack size={20} aria-hidden="true" />Documents</span><span><Plug size={20} aria-hidden="true" />Logiciels</span><span><MessageSquare size={20} aria-hidden="true" />Échanges</span></div>
    <div className={s.connection} aria-hidden="true"><svg viewBox="0 0 300 32" preserveAspectRatio="none"><path d="M50 0V8Q50 16 58 16H242Q250 16 250 8V0M150 0V32" /></svg></div>
    <p className={s.accessLabel}><LockKeyhole size={13} aria-hidden="true" />Uniquement les données autorisées</p>
    <div className={s.platform}>
      <div className={s.platformHeading}><div><strong>La Centrale</strong><p>Vos agents IA sur mesure</p></div><span className={s.platformIcon}><Network size={27} aria-hidden="true" /></span></div>
      <div className={s.agentNodes}><span><FileStack size={18} aria-hidden="true" />Collecter</span><span><Layers3 size={18} aria-hidden="true" />Analyser</span><span><MessageSquare size={18} aria-hidden="true" />Préparer</span></div>
    </div>
    <div className={s.validationConnection}><ArrowDown size={20} aria-hidden="true" /><span>Des propositions à valider</span></div>
    <div className={s.teamNode}><span><Users size={23} aria-hidden="true" /></span><div><strong>Vos équipes décident</strong><p>Elles relisent et valident avant envoi.</p></div><CheckCheck className={s.teamCheck} size={22} aria-hidden="true" /></div>
    <div className={s.diagramHosting}><ShieldCheck size={16} aria-hidden="true" /><span>Hébergement en France ou sur vos serveurs</span></div>
  </figure>;
}

export default function CentralePage() {
  return <main className={`${b.page} ${s.page}`}>
    <section className={s.hero} aria-labelledby="centrale-title"><div className={b.container}>
      <Breadcrumb label="La Centrale" />
      <div className={s.heroGrid}>
        <div className={s.heroCopy}><p className={s.signature}>La Centrale <span>by Althoce</span></p><h1 id="centrale-title">Vos agents IA, <br />chez vous, <br /><span>sur une seule plateforme.</span></h1><p className={s.intro}>Une plateforme d’agents IA sur mesure, reliée à vos outils et hébergée en France ou sur vos serveurs. <strong>Althoce l’installe, forme vos équipes et la fait évoluer avec vous.</strong></p><ul className={s.heroPromises}><li><Check size={15} aria-hidden="true" />Sur mesure</li><li><Check size={15} aria-hidden="true" />Reliée à vos outils</li><li><Check size={15} aria-hidden="true" />Évolutive</li></ul><a href={centrale.contactHref} className={b.primary}>Prendre rendez-vous<ArrowUpRight size={18} aria-hidden="true" /></a><p className={s.heroNote}>Un premier échange pour cadrer votre projet.</p></div>
        <PlatformDiagram />
      </div>

    </div></section>

    <section className={b.section} aria-labelledby="centrale-lien-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="centrale-lien-title">Vos outils sont là.<br /><span>Il manque le lien.</span></h2><p>Des documents ici, des échanges ailleurs. Vos équipes recopient les informations et il devient difficile de savoir quelles données l’IA utilise.</p></div>
      <div className={s.connectionStory}>
        <div className={s.fragmented}><h3>Des usages dispersés</h3><ul><li><FileStack size={20} aria-hidden="true" />Des informations dans plusieurs outils</li><li><ArrowRight size={20} aria-hidden="true" />Des passages d’un logiciel à l’autre</li><li><LockKeyhole size={20} aria-hidden="true" />Des accès difficiles à suivre</li></ul></div>
        <div className={s.storyArrow} aria-hidden="true"><ArrowRight size={21} /></div>
        <div className={s.unified}><h3>Avec La Centrale</h3><ul><li><Plug size={20} aria-hidden="true" />Vos outils reliés à un espace commun</li><li><Network size={20} aria-hidden="true" />Des agents qui préparent le travail</li><li><ShieldCheck size={20} aria-hidden="true" />Des accès définis et vos équipes qui valident</li></ul></div>
      </div>
      <p className={s.scopeNote}>Les connexions et les données accessibles sont définies avec vous, selon vos outils et vos règles métier.</p>
    </div></section>

    <section className={`${b.section} ${s.usesSection}`} aria-labelledby="centrale-usages-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="centrale-usages-title">Des agents construits<br /><span>pour votre quotidien.</span></h2><p>Chaque agent est conçu pour votre façon de travailler. Voici quelques exemples de missions à construire ensemble.</p></div>
      <div className={s.useGrid}>{centraleUses.map((item, i) => { const Icon = useIcons[i]; return <article key={item.title} className={s.useCard}><div className={s.useTop}><Icon size={25} aria-hidden="true" /><span>{item.action}</span></div><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div>
      <p className={s.usesEnd}><span aria-hidden="true">+</span>Et d’autres agents, en fonction de vos besoins.</p>
    </div></section>

    <section className={`${b.section} ${s.hostingSection}`} aria-labelledby="centrale-donnees-title"><div className={b.container}>
      <div className={s.hostingIntro}><ShieldCheck size={30} aria-hidden="true" /><h2 id="centrale-donnees-title">Une IA souveraine.<br /><span>Des choix concrets.</span></h2><p>Choisissez où installer votre plateforme. Dans les deux cas, nous partons de modèles open source et d’accès définis avec vous.</p></div>
      <div className={s.hostingGrid}><article><span className={s.hostingIcon}><Cloud size={30} aria-hidden="true" /></span><h3>Dans un cloud sécurisé en France</h3><p>Un environnement d’hébergement choisi selon les exigences de votre activité.</p></article><span className={s.hostingOr}>ou</span><article><span className={s.hostingIcon}><Server size={30} aria-hidden="true" /></span><h3>Sur vos propres serveurs</h3><p>La Centrale est installée dans votre environnement, avec vos équipes.</p></article></div>
      <div className={s.openModels}><Layers3 size={25} aria-hidden="true" /><div><h3>Modèles open source par défaut</h3><p>Le même point de départ, quel que soit l’hébergement retenu.</p></div><span>Dans les deux cas</span></div>
      <p className={s.hostingNote}>Nous définissons ensemble l’hébergement, les accès et les validations adaptés à vos données et à votre métier.</p>
    </div></section>

    <section className={b.section} aria-labelledby="centrale-controle-title"><div className={`${b.container} ${s.controlGrid}`}>
      <div className={s.controlPhoto}><Image src={collaboration} alt="Deux collègues relisent un dossier ensemble sur un ordinateur." fill sizes="(max-width: 900px) calc(100vw - 40px), 48vw" placeholder="blur" /><div className={s.photoNote}><CheckCheck size={20} aria-hidden="true" />La décision reste humaine.</div></div>
      <div><h2 id="centrale-controle-title">L’IA propose.<br /><span>Vos équipes décident.</span></h2><p className={s.controlIntro}>Vous fixez les règles. Les agents travaillent dans ce cadre.</p><ul className={s.controlList}><li><Fingerprint size={23} aria-hidden="true" /><div><h3>Ce que l’agent peut consulter</h3><p>Des accès réglés outil par outil, limités au périmètre que vous autorisez.</p></div></li><li><CheckCheck size={23} aria-hidden="true" /><div><h3>Ce qui peut être envoyé</h3><p>Les agents préparent. Les envois restent soumis à votre validation.</p></div></li><li><Settings2 size={23} aria-hidden="true" /><div><h3>Ce qui doit être ajusté</h3><p>Althoce adapte les usages à vos règles métier et aux retours de vos équipes.</p></div></li></ul></div>
    </div></section>

    <section className={`${b.section} ${s.evolutionSection}`} aria-labelledby="centrale-evolution-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="centrale-evolution-title">Un premier besoin.<br /><span>Une plateforme qui grandit.</span></h2><p>Vous commencez par une priorité. Nous ajoutons ensuite les agents et les connexions utiles, puis les ajustons avec vos retours.</p></div>
      <ol className={s.evolution}><li><div className={s.evolutionSketch} aria-hidden="true"><span><FileStack size={22} />Un besoin</span><ArrowRight size={22} /><span><Network size={22} />Un premier agent</span></div><h3>Commencer par l’utile</h3><p>Un usage concret et un périmètre défini ensemble.</p></li><li><div className={s.evolutionSketch} aria-hidden="true"><span><Plug size={22} />Vos besoins</span><ArrowRight size={22} /><span><Layers3 size={22} />Agents et outils</span></div><h3>Étendre à votre rythme</h3><p>De nouveaux agents et outils reliés à la même plateforme.</p></li><li><div className={s.evolutionSketch} aria-hidden="true"><span><MessageSquare size={22} />Vos retours</span><ArrowRight size={22} /><span><SlidersHorizontal size={22} />Des ajustements</span></div><h3>Améliorer avec vous</h3><p>Althoce affine les usages à partir de l’expérience de vos équipes.</p></li></ol>
    </div></section>

    <section className={b.section} aria-labelledby="centrale-secteurs-title"><div className={`${b.container} ${s.sectorsLayout}`}>
      <div><h2 id="centrale-secteurs-title">Pour les métiers<br /><span>où la maîtrise des données compte.</span></h2><p className={b.lead}>Dirigeants, DSI et DAF : une plateforme adaptée aux professions réglementées et aux entreprises qui partagent cette exigence.</p></div>
      <ul className={s.sectors}>{centraleSectors.map(item => <li key={item.name}><h3>{item.name}</h3><p>{item.need}</p></li>)}</ul>
    </div></section>

    <MethodSection id="accompagnement-centrale" title="Une plateforme. Une équipe à vos côtés." description="Althoce construit le projet avec vous, l’installe et accompagne vos collaborateurs dans la durée." steps={centraleMethod} image={atelier} alt="Une équipe échange autour de documents et d’un ordinateur pendant un atelier." />
    <section className={s.proof} aria-labelledby="centrale-terrain-title"><div className={`${b.container} ${s.proofInner}`}><span className={s.proofIcon}><Layers3 size={28} aria-hidden="true" /></span><div><h2 id="centrale-terrain-title">Déjà sur le terrain.</h2><p>La technologie est déjà en service dans des cabinets d’expertise comptable.</p></div><a href={centrale.contactHref}>Parlons de votre contexte<ArrowUpRight size={18} aria-hidden="true" /></a></div></section>

    <FaqSection id="questions-centrale" title="Avant de nous rencontrer." description="Quelques repères pour envisager La Centrale dans votre entreprise." items={centraleFaqs} showContactLink={false} />
    <PreAuditCTA id="rendez-vous-centrale" title={<>Votre expertise.<br />Votre Centrale.</>} description="Parlons de vos outils, de vos données et de ce que vous aimeriez simplifier. Nous définirons ensemble un premier usage à construire." ctaLabel="Prendre rendez-vous" note="Un projet construit avec vous, de l’installation au suivi." />
  </main>;
}
