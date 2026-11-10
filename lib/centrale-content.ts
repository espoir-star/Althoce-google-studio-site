import type { Faq, MethodStep } from '@/components/brand/Sections';

/** Promesses issues du brief propriétaire du 10/11/2026. Pas de prix ni de compatibilité présumée. */
export const centrale = {
  name: 'La Centrale by Althoce',
  path: '/ia-souveraine/',
  url: 'https://althoce.com/ia-souveraine/',
  title: 'IA souveraine pour entreprises : La Centrale by Althoce',
  description: 'Vos agents IA sur une seule plateforme sur mesure, reliée à vos outils et hébergée en France ou sur vos serveurs, avec La Centrale by Althoce.',
  // Même parcours que les CTA des services. Le calendrier connecteurs a un autre objet.
  contactHref: '/contact/',
};

export type CentraleUseCase = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  sources: string;
  mission: string;
  outputs: string[];
  validation: string;
};

/** Exemples éditoriaux à cadrer avec le client, pas un catalogue de modules standard. */
export const centraleUses: CentraleUseCase[] = [
  {
    slug: 'collecte', title: 'Collecte de pièces',
    headline: 'Un dossier rassemblé. Les pièces manquantes identifiées.',
    description: 'L’agent rapproche les pièces disponibles dans vos outils et prépare les demandes de complément. Votre équipe vérifie le dossier avant de relancer.',
    sources: 'Documents du dossier et échanges autorisés.',
    mission: 'Compléter un dossier client',
    outputs: ['Les pièces déjà disponibles', 'Les éléments encore à demander', 'Une demande de complément à relire'],
    validation: 'Votre équipe vérifie et valide la demande.',
  },
  {
    slug: 'prospection', title: 'Prospection',
    headline: 'Une prise de contact préparée avec le bon contexte.',
    description: 'L’agent s’appuie sur les informations de vos outils pour préparer une approche. Vous choisissez le destinataire et ajustez le message avant tout envoi.',
    sources: 'Informations commerciales auxquelles vous donnez accès.',
    mission: 'Préparer une approche commerciale',
    outputs: ['Les informations utiles sur le prospect', 'Un angle de prise de contact', 'Un message à personnaliser et valider'],
    validation: 'Vous décidez à qui écrire et quoi envoyer.',
  },
  {
    slug: 'relation-client', title: 'Relation client',
    headline: 'Le contexte retrouvé. Une réponse prête à relire.',
    description: 'L’agent rassemble les éléments utiles à une demande et propose un brouillon. Votre équipe le complète et valide la réponse.',
    sources: 'Historique d’échanges et documents autorisés.',
    mission: 'Répondre à une demande client',
    outputs: ['Le contexte de la demande', 'Les éléments à confirmer', 'Un brouillon de réponse'],
    validation: 'Votre équipe relit, complète et valide l’envoi.',
  },
  {
    slug: 'analyse', title: 'Analyse et bilan',
    headline: 'Les informations réunies pour éclairer votre décision.',
    description: 'L’agent croise les données accessibles d’un dossier et prépare une synthèse. Votre équipe apporte son analyse et valide les conclusions.',
    sources: 'Pièces du dossier et données de gestion autorisées.',
    mission: 'Faire le point sur un dossier',
    outputs: ['Les éléments à examiner', 'Une synthèse du dossier', 'Les points à approfondir'],
    validation: 'L’analyse finale et la décision vous appartiennent.',
  },
];

export const centraleSectors = [
  { name: 'Santé', need: 'Des informations sensibles, des accès à encadrer.' },
  { name: 'Juridique', need: 'Des dossiers confidentiels, une expertise à préserver.' },
  { name: 'Finance', need: 'Des analyses à relier aux données de vos outils.' },
  { name: 'Expertise comptable', need: 'Des pièces et des dossiers à faire circuler.' },
  { name: 'Industrie', need: 'Des savoir-faire et des processus à protéger.' },
  { name: 'Secteur public', need: 'Des usages à adapter à votre cadre de travail.' },
];

export const centraleMethod: MethodStep[] = [
  { n: '01', title: 'Cadrer avec vous', desc: 'Nous partons de vos priorités, de vos données et de vos exigences. Les outils à relier et les validations sont définis ensemble.' },
  { n: '02', title: 'Installer et connecter', desc: 'Nous installons La Centrale dans l’environnement retenu et raccordons les outils prévus dans votre projet.' },
  { n: '03', title: 'Former vos équipes', desc: 'Vos collaborateurs prennent en main leurs agents à partir de leurs tâches et de leurs dossiers du quotidien.' },
  { n: '04', title: 'Suivre et faire évoluer', desc: 'Nous ajustons les usages avec vos retours et ajoutons des agents ou des connexions selon vos besoins.' },
];

export const centraleFaqs: Faq[] = [
  { q: 'Comment La Centrale s’intègre-t-elle à nos logiciels actuels ?', a: 'Nous partons des logiciels que vos équipes utilisent déjà. Althoce identifie les données utiles aux agents et vérifie les possibilités de connexion avant de définir le périmètre du projet. Les raccordements sont choisis selon vos outils, vos autorisations et vos règles métier.' },
  { q: 'Les agents peuvent-ils envoyer une réponse sans notre validation ?', a: 'Les agents préparent le travail. Les envois restent soumis à votre validation. Nous définissons avec vous ce que chaque agent peut consulter et les étapes où vos équipes doivent relire et donner leur accord.' },
  { q: 'Que signifie « IA souveraine » pour La Centrale ?', a: 'La Centrale utilise des modèles open source par défaut. Elle peut être hébergée en France ou sur vos propres serveurs. Le choix de l’environnement, les accès aux données et les validations sont définis avec vous dans le cadre du projet.' },
  { q: 'Peut-on commencer par un seul besoin ?', a: 'Oui. La Centrale est construite autour de vos priorités. Vous pouvez commencer par un usage, puis ajouter des agents et des outils au fil de vos besoins, avec l’accompagnement d’Althoce.' },
  { q: 'Qui installe la plateforme et forme nos collaborateurs ?', a: 'Althoce prend en charge le cadrage, l’installation, les connexions prévues, la formation de vos équipes et le suivi. Vos collaborateurs prennent en main les agents à partir de situations de leur quotidien. Nous ajustons ensuite les usages avec leurs retours.' },
  { q: 'Que prépare-t-on pour le premier rendez-vous ?', a: 'Venez avec un exemple de tâche qui prend du temps à vos équipes, les outils concernés et les contraintes à respecter. Nous regardons ensemble quel premier usage envisager et les points à vérifier pour le construire sur mesure.' },
];
