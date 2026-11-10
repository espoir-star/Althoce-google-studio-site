import { metierDossiers, type MetierDossier } from './metier-dossiers';
import type { ExpertiseFaq } from './expertise';
export type MetierStory = {
  slug: string;
  name: string;
  intro: string;
  situation: string;
  tools: string;
  guard: string;
  measure: string;
  image: string;
  dossier: MetierDossier;
  promise: string;
  description: string;
  faq: ExpertiseFaq[];
};
const base = [
  {
    slug: 'marketing',
    name: 'Agent IA marketing',
    intro:
      'Contenu, SEO, newsletters, veille : concevez un agent IA marketing qui prépare le travail dans votre ton de marque, avec votre équipe à la validation.',
    situation:
      'Le brief est prêt. Mais entre les déclinaisons, les corrections et la publication, votre équipe manque de temps pour travailler le fond.',
    tools:
      'CMS, CRM et outils email : WordPress, Webflow, HubSpot ou Brevo selon les accès disponibles.',
    guard:
      'La stratégie éditoriale, les vérifications factuelles et la publication restent sous votre contrôle.',
    measure: 'Temps de préparation, taux de reprise des brouillons et qualité éditoriale.',
    image: 'case-marketing',
  },
  {
    slug: 'commercial',
    name: 'Agent IA commercial',
    intro:
      'Prospection, qualification, CRM et relances : un agent IA commercial sur mesure prépare les prochaines actions, pour que vos commerciaux se concentrent sur les échanges utiles.',
    situation:
      'Après chaque rendez-vous, il reste le compte rendu à saisir, le CRM à mettre à jour et la prochaine relance à préparer.',
    tools:
      'Votre CRM et votre messagerie : HubSpot, Salesforce ou Pipedrive, selon les possibilités de connexion.',
    guard:
      'L’équipe décide des contacts, du message et de l’envoi. Les règles de prospection sont cadrées avec vous.',
    measure: 'Temps administratif, qualité du CRM et régularité du suivi.',
    image: 'case-vins',
  },
  {
    slug: 'service-client',
    name: 'Agent IA service client',
    intro:
      'Tickets, demandes récurrentes et recherche d’information : construisez un agent IA de support connecté à vos connaissances et à vos règles de traitement.',
    situation:
      'La réponse existe, mais elle est répartie entre les procédures, les anciens tickets et les personnes qui connaissent le dossier.',
    tools: 'Votre helpdesk, base documentaire et CRM, selon les API et les droits disponibles.',
    guard:
      'Les cas sensibles, les remboursements et les engagements client suivent vos règles de validation.',
    measure: 'Temps de recherche, qualité des réponses et fréquence des reprises humaines.',
    image: 'support',
  },
  {
    slug: 'telephonique',
    name: 'Agent IA téléphonique',
    intro:
      'Accueil, qualification et prise de rendez-vous : un agent vocal sur mesure s’intègre à votre organisation téléphonique et transmet les demandes utiles à votre équipe.',
    situation:
      'Un appel arrive pendant un rendez-vous. À votre retour, il manque souvent le contexte nécessaire pour rappeler efficacement.',
    tools:
      'Votre téléphonie, agenda et CRM ; faisabilité des transferts et disponibilité des connexions à vérifier.',
    guard:
      'Le scénario précise comment annoncer l’assistance automatisée, gérer les données et proposer un interlocuteur humain.',
    measure: 'Appels pris en charge, qualité des informations et réussite des transferts.',
    image: 'case-avocats',
  },
  {
    slug: 'rh',
    name: 'Agent IA RH',
    intro:
      'Questions internes, documents et onboarding : un agent IA RH sur mesure aide votre équipe à retrouver l’information et à organiser le suivi des collaborateurs.',
    situation:
      'Les mêmes questions reviennent, les documents sont dispersés et chaque arrivée demande de reprendre une longue liste d’actions.',
    tools:
      'SIRH, espace documentaire, messagerie et outils de recrutement, selon les accès autorisés.',
    guard:
      'Les décisions de recrutement et d’évaluation appartiennent aux personnes habilitées. Le périmètre ne repose pas sur un classement autonome des candidats.',
    measure: 'Temps consacré aux demandes récurrentes et complétude des parcours d’arrivée.',
    image: 'case-recrutement',
  },
  {
    slug: 'finance',
    name: 'Agent IA finance',
    intro:
      'Pièces comptables, rapprochements et relances : un agent IA finance prépare les traitements à partir de vos documents, avec des contrôles adaptés à votre organisation.',
    situation:
      'Avant d’analyser, il faut retrouver les pièces, ressaisir les informations et comprendre les écarts entre plusieurs outils.',
    tools:
      'Logiciel comptable, ERP et stockage documentaire, en fonction des exports et API disponibles.',
    guard:
      'Les paiements, écritures définitives et décisions financières nécessitent les validations définies avec les personnes habilitées.',
    measure: 'Temps de saisie, taux de corrections et nombre d’écarts correctement détectés.',
    image: 'metiers-operations',
  },
  {
    slug: 'operations',
    name: 'Agent IA opérations',
    intro:
      'Mails, documents, ADV et commandes : un agent IA opérations sur mesure relie les étapes de votre back-office et prépare les actions répétitives.',
    situation:
      'Une commande arrive par mail, une information manque dans l’ERP et plusieurs personnes se relancent pour savoir où en est le dossier.',
    tools: 'Messagerie, ERP, CRM et outils documentaires, selon les possibilités d’intégration.',
    guard:
      'Les engagements, modifications de commande et situations inhabituelles passent par une validation explicite.',
    measure: 'Délai de traitement, ressaisies évitées et dossiers nécessitant une reprise.',
    image: 'case-operations',
  },
  {
    slug: 'juridique',
    name: 'Agent IA juridique',
    intro:
      'Lecture de contrats, recherche documentaire et veille : un agent IA juridique prépare les éléments à examiner, à partir de vos sources et de vos règles.',
    situation:
      'Pour préparer une revue, il faut retrouver la bonne version, comparer les clauses et rassembler les références avant de pouvoir se prononcer.',
    tools:
      'Votre base de contrats, gestion documentaire et sources autorisées, avec permissions adaptées aux dossiers.',
    guard:
      'L’analyse, le conseil et la décision juridiques restent sous la responsabilité des professionnels habilités.',
    measure: 'Temps de préparation, traçabilité des sources et pertinence des points signalés.',
    image: 'case-juridique',
  },
  {
    slug: 'achats',
    name: 'Agent IA achats',
    intro:
      'Sourcing, analyse de devis et suivi fournisseurs : un agent IA achats sur mesure rassemble l’information et met les écarts en évidence pour votre équipe.',
    situation:
      'Trois devis arrivent dans des formats différents. Avant de négocier, votre acheteur doit reconstituer les prix, délais et conditions.',
    tools:
      'ERP achats, fichiers fournisseurs et base documentaire, selon la qualité des données et des connexions.',
    guard:
      'Le choix des fournisseurs, les commandes et les engagements contractuels restent validés par votre équipe.',
    measure: 'Temps de comparaison, qualité des dossiers et anticipation des échéances.',
    image: 'case-achats',
  },
];
const budgetFaq = {
  q: 'Comment définir le périmètre, le budget et le calendrier ?',
  a: 'Ils dépendent du processus, des sources, des connexions et des contrôles nécessaires. Le premier échange permet de choisir un point de départ. Le cadrage précise ensuite les livrables, les responsabilités et le chiffrage.',
};
export const metierStories: MetierStory[] = base.map((x) => ({
  ...x,
  dossier: metierDossiers[x.slug],
  promise: metierDossiers[x.slug].headline,
  description: metierDossiers[x.slug].description,
  faq: [...metierDossiers[x.slug].faq, budgetFaq],
}));
export const metierHubFaq: ExpertiseFaq[] = [
  {
    q: 'Quelle différence entre un agent IA et une automatisation classique ?',
    a: 'Une automatisation suit des règles définies. Un agent peut interpréter une demande ou un document pour préparer des actions. Nous combinons ces approches selon le processus, avec des limites et des validations explicites.',
  },
  {
    q: 'Les agents présentés sont-ils prêts à acheter ?',
    a: 'Les pages présentent des processus et des exemples. Votre solution se construit à partir de vos outils, de vos données et des décisions à conserver dans votre équipe. Le périmètre est défini et testé avec vous.',
  },
  {
    q: 'Comment choisir entre une entrée par secteur et par métier ?',
    a: 'Le secteur décrit votre type d’organisation et ses exigences. Le métier détaille les tâches d’une équipe, comme les achats, la finance ou le commercial. Les deux entrées se complètent pour préparer le même projet.',
  },
  {
    q: 'Qui valide les résultats et les actions ?',
    a: 'Le circuit de contrôle est défini avec les personnes habilitées. Les exceptions et les informations manquantes doivent être visibles. Le niveau d’action dans les outils se décide après les essais, il n’est pas présumé automatique.',
  },
  budgetFaq,
];
