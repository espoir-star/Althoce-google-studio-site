import { ArrowUpRight, Check, FileText, MapPin } from 'lucide-react';
import { Breadcrumb, FaqSection } from '../brand/Sections';
import { BookingLink } from './OfferChoice';
import { connectorsHubFaq, pennylane } from '@/lib/connectors-content';
import b from '../brand/Brand.module.css';
import s from './Connectors.module.css';

export default function ConnectorsHub() {
  return <main className={b.page}>
    <section className={s.hero} aria-labelledby="connecteurs-title"><div className={b.container}>
      <Breadcrumb label="Connecteurs" />
      <h1 id="connecteurs-title">Claude branché<br /><span>sur vos logiciels métier.</span></h1>
      <p className={b.lead}>Un connecteur permet à Claude de travailler dans votre logiciel, dans la limite de l’accès du cabinet. Claude propose, vous validez.</p>
    </div></section>

    <section className={b.section} aria-labelledby="catalogue-title"><div className={b.container}>
      <div className={s.sectionHeading}><h2 id="catalogue-title">Nos connecteurs.</h2><p>Un connecteur disponible en ligne. Les autres logiciels se voient en rendez-vous.</p></div>
      <div className={s.hubCards}>
        <a className={`${s.hubCard} ${s.hubCardMain}`} href="/connecteurs/pennylane/">
          <span className={s.hubBadge}>Disponible</span>
          <h3>Pennylane</h3>
          <p>Claude lit et écrit dans vos dossiers Pennylane : catégoriser, lettrer, rapprocher, passer des écritures. Vous validez chaque écriture.</p>
          <ul>
            <li><Check size={18} aria-hidden="true" />Lecture et écriture</li>
            <li><Check size={18} aria-hidden="true" />{pennylane.priceHt}&nbsp;€ HT par mois et par cabinet, jusqu’à 10 comptes Claude</li>
            <li><Check size={18} aria-hidden="true" />Essai gratuit de 7 jours, sans engagement</li>
          </ul>
          <span className={s.hubMore}>Découvrir le connecteur Pennylane<ArrowUpRight size={18} aria-hidden="true" /></span>
        </a>
        <article className={s.hubCard}>
          <span className={`${s.hubBadge} ${s.hubBadgeSoft}`}>Sur rendez-vous</span>
          <h3>Autres logiciels comptables</h3>
          <p>Possibles : ACD, MyUnisoft, Cegid Loop, Sage Génération Experts, Inqom. Nous regardons ensemble vos dossiers, vos logiciels et le nombre de comptes.</p>
          <p className={s.hubFec}><FileText size={18} aria-hidden="true" /><span>Logiciels fermés (Cegid Quadra, Quadratus, Coala, Isacompta) : par le fichier FEC.</span></p>
          <BookingLink connector="hub" placement="hub_logiciels" className={s.hubMore}>Prendre rendez-vous<ArrowUpRight size={18} aria-hidden="true" /></BookingLink>
        </article>
        <article className={s.hubCard}>
          <span className={`${s.hubBadge} ${s.hubBadgeSoft}`}>Sur rendez-vous</span>
          <h3>Tout doit rester en France&nbsp;?</h3>
          <p className={s.hubFec}><MapPin size={18} aria-hidden="true" /><span>Althoce construit un agent hébergé sur un serveur en France, au nom du cabinet.</span></p>
          <BookingLink connector="hub" placement="hub_france" className={s.hubMore}>Prendre rendez-vous<ArrowUpRight size={18} aria-hidden="true" /></BookingLink>
        </article>
      </div>
    </div></section>

    <FaqSection id="faq-connecteurs" title="Vos questions sur les connecteurs." description="L’essentiel avant de brancher Claude sur vos outils." items={connectorsHubFaq} showContactLink={false} />
    <section className={s.legal} aria-label="Mentions de marques"><div className={s.legalInner}><p>Pennylane est une marque de Pennylane SAS et Claude un produit d’Anthropic. Althoce n’est affilié à aucune de ces sociétés.</p></div></section>
  </main>;
}
