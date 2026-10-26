import type { ReactNode } from 'react';
import { CONNECTOR_BOOKING_URL, pennylane } from '@/lib/connectors-content';
import b from '../brand/Brand.module.css';
import s from './Connectors.module.css';

/*
 * CGV de l'abonnement au connecteur Pennylane (clients professionnels).
 * Faits de l'offre : lib/connectors-content.ts. Société : mentions légales du site.
 * Toute modification de l'offre (prix, essai, résiliation) doit être reportée ici.
 */
export const CGV_UPDATED = '26 octobre 2026';

const mail = <a href="mailto:espoir@contact.althoce.com">espoir@contact.althoce.com</a>;

const articles: { id: string; title: string; body: ReactNode }[] = [
  { id: 'objet', title: 'Objet et champ d’application', body: <>
    <p>Les présentes conditions générales de vente (les « CGV ») encadrent la vente de l’abonnement au connecteur Pennylane (le « Service ») par ALTHOCE CONSEIL à ses clients professionnels (le « Client »).</p>
    <p>Le Service est réservé aux professionnels. La souscription en ligne vaut acceptation des CGV en vigueur à cette date. Elles prévalent sur les conditions d’achat du Client.</p>
    <p>Pour plus de 10 utilisateurs, une offre est établie sur rendez-vous. Des conditions particulières peuvent alors compléter les CGV.</p>
  </> },
  { id: 'vendeur', title: 'Vendeur', body: <>
    <p>ALTHOCE CONSEIL, société par actions simplifiée (SAS), immatriculée au RCS de Bordeaux sous le numéro SIREN 999 696 404, dont le siège est situé 5 rue Fénelon, 33000 Bordeaux, France. Contact : {mail}.</p>
  </> },
  { id: 'service', title: 'Description du Service', body: <>
    <p>Le Service est un connecteur MCP qui relie les dossiers Pennylane du Client à l’intelligence artificielle de son choix : Claude, ChatGPT ou une autre IA compatible MCP.</p>
    <p>En lecture, le Service donne accès aux dossiers, transactions, factures, écritures et FEC. En écriture, il permet de catégoriser une transaction, affecter un tiers, ventiler une facture fournisseur, lettrer, rapprocher et passer des écritures.</p>
    <p>Le Service n’agit que dans la limite de l’accès Pennylane du Client, ouvert par la clé API que le Client crée et fournit. L’abonnement couvre jusqu’à 10 comptes, avec un lien de connexion par compte.</p>
    <p>Ne sont pas inclus : l’abonnement à l’IA choisie par le Client et l’abonnement Pennylane. Le Client les souscrit et les règle directement auprès de ces éditeurs.</p>
  </> },
  { id: 'souscription', title: 'Souscription et mise en service', body: <>
    <p>Le Client souscrit en ligne sur la page de paiement sécurisée de notre prestataire de paiement Stripe et y enregistre sa carte bancaire.</p>
    <p>Après la souscription, le Client reçoit un mail d’activation avec sa page personnelle. Il y colle la clé API Pennylane du cabinet, puis crée un lien par compte et l’ajoute dans son IA.</p>
  </> },
  { id: 'essai', title: 'Essai gratuit', body: <>
    <p>L’abonnement commence par un essai gratuit de 7 jours. La carte bancaire est enregistrée à l’inscription. Aucun prélèvement n’a lieu pendant l’essai.</p>
    <p>Un rappel est envoyé par mail 2 jours avant la fin de l’essai. Sauf résiliation avant la fin de l’essai, le premier prélèvement a lieu à la fin de l’essai.</p>
  </> },
  { id: 'prix', title: 'Prix et paiement', body: <>
    <p>Le prix est de {pennylane.priceHt} € HT par mois et par cabinet, soit {pennylane.priceTtc} € TTC avec une TVA de 20 %. Il est payable chaque mois, d’avance, par prélèvement sur la carte enregistrée.</p>
    <p>Une facture est émise pour chaque paiement. Toute évolution du prix est annoncée par mail au moins 30 jours avant son application. Le Client peut résilier avant cette date.</p>
    <p>Tout retard ou échec de paiement entraîne la coupure immédiate du Service, sans préavis, jusqu’à régularisation. Les liens de connexion sont alors désactivés.</p>
    <p>En cas de retard de paiement, des pénalités sont également dues au taux d’intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus récente, majoré de 10 points, ainsi qu’une indemnité forfaitaire pour frais de recouvrement de 40 € (articles L441-10 et D441-5 du Code de commerce).</p>
  </> },
  { id: 'duree', title: 'Durée et résiliation', body: <>
    <p>L’abonnement est mensuel et sans engagement. Il se renouvelle chaque mois jusqu’à sa résiliation.</p>
    <p>Le Client résilie seul, à tout moment, depuis son espace client. La résiliation prend effet en fin de période en cours. Le mois commencé reste dû et n’est pas remboursé. Si le Client résilie pendant l’essai, il n’est pas prélevé.</p>
    <p>À la fin de l’abonnement, les liens de connexion sont désactivés. En cas de manquement grave du Client aux CGV, ALTHOCE CONSEIL peut suspendre ou résilier l’abonnement après une mise en demeure restée sans effet pendant 15 jours.</p>
  </> },
  { id: 'client', title: 'Engagements du Client', body: <>
    <p>Le Client fournit une clé API Pennylane valide et choisit les droits qu’elle ouvre. Il garde ses liens de connexion confidentiels : chaque lien donne accès à ses dossiers. Il prévient ALTHOCE CONSEIL sans délai en cas de perte ou d’usage non autorisé.</p>
    <p>Le Client règle les autorisations de son IA. Nous lui conseillons d’exiger une validation pour toutes les écritures (réglage « validation requise » dans Claude).</p>
    <p>Le Client utilise le Service dans le respect de la loi et de ses obligations professionnelles et déontologiques.</p>
  </> },
  { id: 'validation', title: 'Utilisation du Service et responsabilité', body: <>
    <p>Le Client est seul responsable de l’utilisation qu’il fait du Service et du connecteur MCP : choix de son IA, réglages des autorisations, demandes faites à l’IA, actions qu’il autorise ou valide, et leurs conséquences. ALTHOCE CONSEIL n’est pas responsable de cette utilisation.</p>
    <p>L’IA propose, le Client valide. Les propositions de l’IA peuvent contenir des erreurs. Le Client vérifie chaque action avant de la valider et reste seul responsable des écritures passées dans Pennylane et de ses obligations comptables, fiscales et sociales.</p>
    <p>ALTHOCE CONSEIL n’est responsable ni des propositions de l’IA, ni des écritures passées dans Pennylane, ni des décisions prises par le Client. Pour le reste, elle est tenue d’une obligation de moyens. Sa responsabilité ne peut être engagée qu’en cas de faute prouvée de sa part et est limitée, tous préjudices confondus, aux sommes payées par le Client au titre du Service pendant les 12 mois précédant le fait générateur. Elle ne couvre pas les préjudices indirects, comme une perte de chiffre d’affaires, de clientèle ou de données.</p>
  </> },
  { id: 'disponibilite', title: 'Disponibilité du Service', body: <>
    <p>Le Service dépend de l’API de Pennylane et de l’IA choisie par le Client. Une évolution ou une interruption de ces services peut limiter le Service, sans engager la responsabilité d’ALTHOCE CONSEIL.</p>
    <p>Le Service peut être interrompu pour maintenance. ALTHOCE CONSEIL s’efforce de limiter ces interruptions.</p>
  </> },
  { id: 'donnees', title: 'Données personnelles et confidentialité', body: <>
    <p>Le Client est responsable du traitement des données contenues dans ses dossiers Pennylane. Pour les traitements réalisés par le connecteur, ALTHOCE CONSEIL agit comme sous-traitant, au sens de l’article 28 du RGPD, sur les seules instructions du Client et pour fournir le Service.</p>
    <p>ALTHOCE CONSEIL fait appel à un prestataire technique, sous-traitant ultérieur, pour faire fonctionner le connecteur. Son identité est communiquée au Client sur simple demande. ALTHOCE CONSEIL garde confidentielles les données du Client et met en œuvre des mesures de sécurité adaptées.</p>
    <p>Les données transmises à l’IA relèvent du contrat entre le Client et l’éditeur de cette IA. Si les dossiers contiennent des données personnelles, nous conseillons une offre professionnelle, comme Claude Team, dont le contrat de traitement des données est inclus.</p>
    <p>À la fin de l’abonnement, ALTHOCE CONSEIL supprime ou restitue, au choix du Client, les données traitées pour son compte, sauf obligation légale de conservation. Les données de facturation du Client sont traitées selon notre <a href="/confidentialite/">politique de confidentialité</a>.</p>
  </> },
  { id: 'propriete', title: 'Propriété intellectuelle et marques', body: <>
    <p>Le Service et ses éléments restent la propriété d’ALTHOCE CONSEIL ou de ses prestataires. Le Client dispose d’un droit d’utilisation personnel et non exclusif, pour la durée de l’abonnement. Les données du Client restent sa propriété.</p>
    <p>Pennylane est une marque de Pennylane SAS, Claude un produit d’Anthropic et ChatGPT un produit d’OpenAI. ALTHOCE CONSEIL n’est affiliée à aucune de ces sociétés.</p>
  </> },
  { id: 'modification', title: 'Modification des CGV', body: <>
    <p>ALTHOCE CONSEIL peut modifier les CGV. Le Client est informé par mail au moins 30 jours avant leur application et peut résilier avant cette date. La version applicable est celle publiée sur cette page.</p>
  </> },
  { id: 'droit', title: 'Droit applicable et litiges', body: <>
    <p>Les CGV sont soumises au droit français. En cas de différend, les parties cherchent d’abord une solution amiable. À défaut, le litige est porté devant le tribunal de commerce de Bordeaux.</p>
  </> },
];

export default function CgvConnecteurs() {
  return <main className={b.page}>
    <section className={s.cgv} aria-labelledby="cgv-title"><div className={s.cgvInner}>
      <nav className={b.breadcrumb} aria-label="Fil d’Ariane"><a href="/">Accueil</a><span aria-hidden="true">/</span><a href="/connecteurs/">Connecteurs</a><span aria-hidden="true">/</span><span aria-current="page">CGV</span></nav>
      <h1 id="cgv-title">Conditions générales de vente<br /><span>du connecteur Pennylane.</span></h1>
      <p className={s.cgvDate}>Dernière mise à jour : {CGV_UPDATED}</p>
      <nav className={s.cgvToc} aria-label="Sommaire des CGV">{articles.map((a, i) => <a key={a.id} href={`#${a.id}`}>{i + 1}. {a.title}</a>)}</nav>
      {articles.map((a, i) => <section key={a.id} id={a.id} className={s.cgvArticle} aria-labelledby={`${a.id}-title`}>
        <h2 id={`${a.id}-title`}><span>{String(i + 1).padStart(2, '0')}</span>{a.title}</h2>
        {a.body}
      </section>)}
      <p className={s.cgvContact}>Une question sur ces conditions ? Écrivez-nous à {mail} ou <a href={CONNECTOR_BOOKING_URL} target="_blank" rel="noopener noreferrer">prenez rendez-vous</a>.</p>
    </div></section>
  </main>;
}
