/**
 * Connecteurs Althoce : contenu des pages /connecteurs/ et /connecteurs/pennylane/.
 * Le connecteur est un serveur MCP : Claude, ChatGPT et les IA compatibles MCP (Espoir, 26/10/2026).
 * ChatGPT : actions d'écriture confirmées par défaut, MCP complet en bêta (aide OpenAI, 26/10/2026).
 * Uniquement les faits validés par Espoir (brief du 26/10/2026). Aucun chiffre,
 * témoignage ou logo client inventé. Source du connecteur officiel vérifiée le
 * 26/10/2026 : pennylane.com/fr/mcp (« pour le moment […] lecture seule »).
 */
import type { Faq } from '@/components/brand/Sections';

/** Calendrier de rendez-vous dédié aux connecteurs (« Connecteurs IA MCP - By Althoce »). */
export const CONNECTOR_BOOKING_URL = 'https://calendar.app.google/m6thfjDsXzEqKdkKA';

export const pennylane = {
  name: 'Connecteur Pennylane pour votre IA (Claude, ChatGPT, IA compatibles MCP)',
  url: 'https://althoce.com/connecteurs/pennylane/',
  /* Depuis le 26/10/2026, vente uniquement sur rendez-vous : aucun prix affiché (prix fixé dans l'offre, CGV article 1). */
  read: ['Dossiers', 'Transactions', 'Factures', 'Écritures', 'FEC'],
  write: ['Catégoriser une transaction', 'Affecter un tiers', 'Ventiler une facture fournisseur', 'Lettrer', 'Rapprocher', 'Passer des écritures'],
  comparison: [
    { label: 'Lire les dossiers, les transactions, les factures et les écritures', official: true, althoce: true },
    { label: 'Catégoriser les transactions', official: false, althoce: true },
    { label: 'Affecter un tiers', official: false, althoce: true },
    { label: 'Ventiler une facture fournisseur', official: false, althoce: true },
    { label: 'Lettrer et rapprocher', official: false, althoce: true },
    { label: 'Passer des écritures', official: false, althoce: true },
  ],
  permissions: [
    { action: 'Lire les transactions', setting: 'Toujours autorisé' },
    { action: 'Catégoriser', setting: 'Validation requise' },
    { action: 'Lettrer et rapprocher', setting: 'Validation requise' },
    { action: 'Passer des écritures', setting: 'Validation requise' },
  ],
  uses: [
    { title: 'Faire le point d’un dossier', text: 'Les transactions à catégoriser, les justificatifs manquants et les points d’attention.' },
    { title: 'Catégoriser les transactions', text: 'Votre IA propose une catégorie pour chaque transaction. Vous validez.' },
    { title: 'Préparer un lettrage', text: 'Votre IA prépare le lettrage et liste ce qui reste ouvert, avec l’ancienneté.' },
    { title: 'Révision express', text: 'Comptes d’attente, fournisseurs débiteurs, clients créditeurs. Le tout livré dans un fichier Excel.' },
  ],
  steps: [
    { n: '01', title: 'Rendez-vous', desc: 'Vous choisissez un créneau avec un conseiller Althoce.' },
    { n: '02', title: 'Activation', desc: 'Avec le conseiller, en visio, vous créez la clé API Pennylane du cabinet. Elle se crée dans les paramètres du cabinet, sur Pennylane.' },
    { n: '03', title: 'Branchement', desc: 'Vous créez un lien par compte et l’ajoutez dans votre IA comme connecteur MCP. Dans Claude : Paramètres > Connecteurs > Ajouter un connecteur personnalisé.' },
    { n: '04', title: 'Au travail', desc: 'Votre IA propose, vous validez.' },
  ],
  offer: [
    'Lecture et écriture dans vos dossiers Pennylane',
    'Claude, ChatGPT ou une autre IA compatible MCP',
    'Un lien par compte, selon le nombre de personnes du cabinet',
    'Mise en route avec un conseiller Althoce, en visio',
    'Autres logiciels possibles : ACD, MyUnisoft, Cegid Loop, Sage Génération Experts, Inqom',
    'Logiciels fermés (Cegid Quadra, Quadratus, Coala, Isacompta) : par le fichier FEC',
    'Option : un agent hébergé sur un serveur en France, au nom du cabinet',
    'Abonnement à votre IA non inclus : chaque utilisateur a besoin de son compte',
  ],
  faq: [
    { q: 'Avec quelles IA fonctionne le connecteur ?', a: 'Avec Claude, ChatGPT et les autres IA qui acceptent un connecteur MCP personnalisé. Vous ajoutez le lien du connecteur dans votre IA, un lien par compte.' },
    { q: 'Quelle différence avec le connecteur de Pennylane ?', a: 'Pennylane propose son propre connecteur, en lecture seule à ce jour (source : pennylane.com/fr/mcp, consulté en octobre 2026). Le connecteur Althoce ajoute l’écriture : catégoriser, affecter un tiers, ventiler une facture fournisseur, lettrer, rapprocher et passer des écritures.' },
    { q: 'Et si l’IA se trompe ?', a: 'Elle propose, vous validez. Dans Claude, chaque type d’action se règle sur « toujours autorisé », « validation requise » ou « bloqué ». Avec « validation requise », aucune écriture ne part dans Pennylane sans votre accord. Dans ChatGPT, les actions d’écriture demandent une confirmation par défaut.' },
    { q: 'Faut-il un abonnement payant à l’IA ?', a: 'Les abonnements classiques fonctionnent. Dans Claude, toutes les offres acceptent les connecteurs personnalisés, la gratuite est limitée à un seul. Si vos dossiers contiennent des données personnelles, nous conseillons Claude Team : le contrat de traitement des données est inclus. Dans ChatGPT, l’ajout d’un connecteur qui écrit dépend de votre offre (fonction en bêta chez OpenAI). L’abonnement à votre IA n’est pas inclus dans le prix du connecteur.' },
    { q: 'Comment se passe la mise en place ?', a: 'Vous prenez rendez-vous avec un conseiller Althoce. En visio, il branche le connecteur avec vous sur votre cabinet : clé API Pennylane, un lien par compte, réglages de validation.' },
    { q: 'Vous utilisez un autre logiciel que Pennylane ?', a: 'ACD, MyUnisoft, Cegid Loop, Sage Génération Experts et Inqom sont possibles. Pour les logiciels fermés (Cegid Quadra, Quadratus, Coala, Isacompta), nous passons par le fichier FEC. Parlons-en en rendez-vous.' },
  ] satisfies Faq[],
};

export const connectorsHubFaq: Faq[] = [
  { q: 'Qu’est-ce qu’un connecteur MCP ?', a: 'Un lien que vous ajoutez dans votre IA : Claude, ChatGPT ou une autre IA compatible MCP. Elle peut alors travailler dans votre logiciel, dans la limite de l’accès du cabinet. Dans Claude : Paramètres > Connecteurs > Ajouter un connecteur personnalisé.' },
  { q: 'Faut-il un abonnement payant à l’IA ?', a: 'Les abonnements classiques fonctionnent. Dans Claude, toutes les offres acceptent les connecteurs personnalisés, la gratuite est limitée à un seul. Si vos dossiers contiennent des données personnelles, nous conseillons Claude Team. Dans ChatGPT, cela dépend de votre offre.' },
  { q: 'Et si mon logiciel n’est pas dans la liste ?', a: 'Pour les logiciels fermés (Cegid Quadra, Quadratus, Coala, Isacompta), nous passons par le fichier FEC. Pour les autres cas, prenons rendez-vous pour regarder vos dossiers et vos outils.' },
];
