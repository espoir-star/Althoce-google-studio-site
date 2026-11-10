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

export const centraleUses = [
  { title: 'Collecte de pièces', action: 'Rassembler', description: 'Rassembler les documents d’un dossier et préparer les demandes de pièces manquantes.' },
  { title: 'Prospection', action: 'Préparer', description: 'Préparer une prise de contact à partir des informations disponibles dans vos outils.' },
  { title: 'Relation client', action: 'Répondre', description: 'Retrouver le contexte d’une demande et proposer une réponse à faire valider.' },
  { title: 'Analyse et bilan', action: 'Éclairer', description: 'Croiser les informations d’un dossier et préparer une synthèse pour votre revue.' },
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
  { q: 'Que signifie « IA souveraine » pour La Centrale ?', a: 'La Centrale utilise des modèles open source par défaut. Elle peut être hébergée en France ou sur vos propres serveurs. Le choix de l’environnement, les accès aux données et les validations sont définis avec vous dans le cadre du projet.' },
  { q: 'Comment La Centrale se branche-t-elle à nos outils ?', a: 'Althoce identifie avec vous les outils et les données utiles à vos agents. Nous vérifions les possibilités de connexion et les autorisations nécessaires avant de définir les raccordements du projet.' },
  { q: 'Peut-on commencer par un seul besoin ?', a: 'Oui. La Centrale est construite autour de vos priorités. Vous pouvez commencer par un usage, puis ajouter des agents et des outils au fil de vos besoins, avec l’accompagnement d’Althoce.' },
  { q: 'Qui installe et accompagne la plateforme ?', a: 'Althoce prend en charge le cadrage, l’installation, les connexions prévues, la formation de vos équipes et le suivi. Le premier rendez-vous sert à comprendre votre contexte et à définir le projet avec vous.' },
];
