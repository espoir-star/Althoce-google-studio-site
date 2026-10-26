import { ArrowDown, ArrowUpRight, BookOpen, Check, FileSpreadsheet, Minus, PenLine, ScanSearch, ShieldCheck, Link2, MapPin } from 'lucide-react';
import { FaqSection } from '../brand/Sections';
import { BookingLink } from './BookingLink';
import { pennylane } from '@/lib/connectors-content';
import b from '../brand/Brand.module.css';
import s from './Connectors.module.css';

const AI_TOOLS = ['Claude', 'ChatGPT', 'Autres IA compatibles MCP'];

const yes = <><Check size={20} aria-hidden="true" /><span className={s.srOnly}>Oui</span></>;
const no = <><Minus size={20} aria-hidden="true" /><span className={s.srOnly}>Non</span></>;
const exampleIcons = [ScanSearch, PenLine, Link2, FileSpreadsheet];

export default function PennylanePage() {
  return <main className={b.page}>
    <section className={s.hero} aria-labelledby="pennylane-title"><div className={`${b.container} ${s.heroGrid}`}>
      <div>
        <nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span aria-hidden="true">/</span><a href="/connecteurs/">Connecteurs</a><span aria-hidden="true">/</span><span aria-current="page">Pennylane</span></nav>
        <p className={s.eyebrow}>Connecteur Pennylane pour votre IA</p>
        <h1 id="pennylane-title">Votre IA branchée sur vos dossiers Pennylane.<br /><span>En lecture et en écriture.</span></h1>
        <p className={b.lead}>Avec le connecteur Althoce, votre IA ne se contente pas de lire vos dossiers. Elle catégorise, lettre, rapproche et passe les écritures dans Pennylane. Elle propose, vous validez chaque écriture.</p>
        <ul className={s.aiTools} aria-label="IA compatibles">{AI_TOOLS.map(t => <li key={t}>{t}</li>)}</ul>
        <a className={s.heroLink} href="#ecriture">Voir ce que l’écriture change<ArrowDown size={18} aria-hidden="true" /></a>
      </div>
      <aside className={s.permissionPanel} aria-labelledby="permissions-title">
        <p className={s.panelLabel}>Exemple dans Claude</p>
        <h2 id="permissions-title">Chaque type d’action a son réglage.</h2>
        <ul>{pennylane.permissions.map(p => <li key={p.action}><span>{p.action}</span><strong className={p.setting === 'Toujours autorisé' ? s.settingOpen : s.settingReview}>{p.setting}</strong></li>)}</ul>
        <p className={s.panelNote}>Exemple de réglage. Nous conseillons « validation requise » pour toutes les écritures.</p>
      </aside>
    </div></section>

    <section id="ecriture" className={`${b.section} ${b.soft}`} aria-labelledby="ecriture-title"><div className={b.container}>
      <div className={s.sectionHeading}>
        <h2 id="ecriture-title">Le connecteur officiel lit.<br /><span>Le connecteur Althoce écrit aussi.</span></h2>
        <p>Pennylane propose son propre connecteur, en lecture seule à ce jour. Votre IA peut alors analyser un dossier et dire ce qu’il faut faire. La saisie reste à faire dans Pennylane. Le connecteur Althoce ajoute l’écriture : votre IA prépare le travail dans le dossier, et vous validez.</p>
      </div>
      <div className={s.tableWrap}>
        <table className={s.compare}>
          <caption className={s.srOnly}>Comparaison du connecteur officiel de Pennylane et du connecteur Althoce</caption>
          <thead><tr><th scope="col">Ce que votre IA peut faire</th><th scope="col">Connecteur officiel de Pennylane</th><th scope="col" className={s.compareAlthoce}>Connecteur Althoce</th></tr></thead>
          <tbody>
            {pennylane.comparison.map(row => <tr key={row.label}><th scope="row">{row.label}</th><td className={row.official ? s.cellYes : s.cellNo}>{row.official ? yes : no}</td><td className={`${s.compareAlthoce} ${s.cellYes}`}>{row.althoce ? yes : no}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div></section>

    <section className={b.section} aria-labelledby="capacites-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="capacites-title">Ce que fait<br /><span>le connecteur.</span></h2><p>Votre IA ne voit et ne fait que ce que l’accès Pennylane du cabinet permet.</p></div>
      <div className={s.capabilities}>
        <article><span className={s.capIcon}><BookOpen size={24} aria-hidden="true" /></span><h3>Lecture</h3><ul>{pennylane.read.map(x => <li key={x}>{x}</li>)}</ul></article>
        <article className={s.capWrite}><span className={s.capIcon}><PenLine size={24} aria-hidden="true" /></span><h3>Écriture</h3><ul>{pennylane.write.map(x => <li key={x}>{x}</li>)}</ul></article>
      </div>
      <div className={s.validation}><ShieldCheck size={28} aria-hidden="true" /><div><h3>Votre IA propose, le cabinet valide.</h3><p>Dans Claude, chaque type d’action se règle sur « toujours autorisé », « validation requise » ou « bloqué ». Nous conseillons « validation requise » pour toutes les écritures. Dans ChatGPT, les actions d’écriture demandent une confirmation par défaut.</p></div></div>
    </div></section>

    <section className={`${b.section} ${b.soft}`} aria-labelledby="usages-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="usages-title">Quelques exemples<br /><span>de demandes.</span></h2><p>Des exemples d’usage, à adapter à vos dossiers.</p></div>
      <div className={s.uses}>{pennylane.uses.map((u, i) => { const Icon = exampleIcons[i]; return <article key={u.title}><span className={s.capIcon}><Icon size={22} aria-hidden="true" /></span><h3>{u.title}</h3><p>{u.text}</p></article>; })}</div>
    </div></section>

    <section className={b.section} id="rendez-vous" aria-labelledby="rdv-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="rdv-title">Sur rendez-vous,<br /><span>branché avec vous.</span></h2><p>Un conseiller Althoce branche le connecteur avec vous sur votre cabinet. Nous regardons ensemble vos dossiers, vos logiciels et le nombre de comptes.</p></div>
      <article className={s.rdvCard} aria-labelledby="rdv-card-title">
        <div><h3 id="rdv-card-title">Le connecteur Pennylane, mis en place avec vous</h3><ul>{pennylane.offer.map(item => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul></div>
        <div className={s.rdvAction}><BookingLink placement="offre" className={b.primary}>Prendre rendez-vous avec un conseiller<ArrowUpRight size={18} aria-hidden="true" /></BookingLink><p>Choisissez un créneau dans notre calendrier dédié aux connecteurs.</p></div>
      </article>
    </div></section>

    <section className={`${b.section} ${b.soft}`} aria-labelledby="etapes-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="etapes-title">En place<br /><span>en quatre étapes.</span></h2><p>Un conseiller Althoce fait la mise en route avec vous, en visio.</p></div>
      <ol className={s.steps}>{pennylane.steps.map(st => <li key={st.n}><span>{st.n}</span><h3>{st.title}</h3><p>{st.desc}</p></li>)}</ol>
    </div></section>

    <section className={b.section} aria-labelledby="donnees-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="donnees-title">Vos données<br /><span>et vos droits.</span></h2><p>Le cabinet garde la main sur ce que l’IA voit et sur ce qu’elle fait.</p></div>
      <div className={s.rights}>
        <article><ShieldCheck size={24} aria-hidden="true" /><h3>L’accès du cabinet</h3><p>Votre IA ne voit et ne fait que ce que l’accès Pennylane du cabinet permet.</p></article>
        <article><BookOpen size={24} aria-hidden="true" /><h3>Des données personnelles&nbsp;?</h3><p>Le connecteur fonctionne avec les abonnements classiques. Si vos dossiers contiennent des données personnelles, nous conseillons Claude Team : le contrat de traitement des données est inclus et vos contenus ne servent pas à entraîner le modèle par défaut.</p></article>
        <article><MapPin size={24} aria-hidden="true" /><h3>Tout doit rester en France&nbsp;?</h3><p>Althoce construit un agent hébergé sur un serveur en France, au nom du cabinet.</p><BookingLink placement="donnees_france" className={s.inlineLink}>Prendre rendez-vous</BookingLink></article>
      </div>
    </div></section>

    <FaqSection id="faq-pennylane" title="Vos questions sur le connecteur Pennylane." description="Des réponses courtes pour décider." items={pennylane.faq} showContactLink={false} />

    <section className={b.callSection} aria-labelledby="pennylane-cta-title"><div className={`${b.container} ${b.callContent}`}>
      <div><h2 id="pennylane-cta-title">Branchez le connecteur<br />sur votre cabinet.</h2><p>Votre IA propose, vous validez. Un conseiller Althoce le met en place avec vous.</p></div>
      <div className={b.callAction}><BookingLink placement="final" className={b.primary}>Prendre rendez-vous avec un conseiller<ArrowUpRight size={18} aria-hidden="true" /></BookingLink><p>Calendrier dédié aux connecteurs.</p></div>
    </div></section>

  </main>;
}
