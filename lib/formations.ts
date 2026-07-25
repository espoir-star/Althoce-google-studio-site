import type { FormationInfoItem } from '@/components/formation/FormationInfoGrid';
import type { TimelineModule } from '@/components/formation/FormationTimeline';

/** Texte avec un lien interne enchâssé, rendu proprement côté page. */
export interface RichLinkText {
  before: string;
  linkText: string;
  href: string;
  after: string;
}

export interface FormationDetail {
  slug: string;
  accent: string;
  level: string;
  title: string;
  breadcrumbLabel: string;
  chapo: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  educationalLevel: 'Beginner' | 'Advanced';
  infos: FormationInfoItem[];
  infoNote?: RichLinkText;    // encart sous la grille d'infos
  objectifsTitre: string;
  objectifs: string[];
  timeline: TimelineModule[];
  deliverables: string[];     // « Ce que vos équipes repartent avec »
  allerPlusLoin: RichLinkText;
  ctaTitle: string;
  ctaBody: string;
  mentions: string;
}

const AC = '#2563eb';
const PURPLE = '#7c3aed';

// ── Formation 1 : IA Fondamentaux ────────────────────────────────
export const fondamentaux: FormationDetail = {
  slug: 'ia-fondamentaux',
  accent: AC,
  level: 'Niveau 1',
  title: 'IA Fondamentaux',
  breadcrumbLabel: 'IA Fondamentaux',
  chapo:
    "Une journée pour passer de « j'ai testé ChatGPT » à une utilisation quotidienne, efficace et sécurisée de l'IA dans son travail.",
  metaTitle: 'Formation IA Fondamentaux',
  metaDescription:
    "Une journée pour maîtriser l'IA générative au quotidien professionnel. Aucun prérequis, sur vos vrais dossiers, jusqu'à 10 participants.",
  ogImage: '/og-default.png',
  educationalLevel: 'Beginner',
  infos: [
    { label: 'Durée', value: '1 journée, 7 heures' },
    { label: 'Public', value: 'Dirigeants, managers, équipes opérationnelles. Aucun prérequis.' },
    { label: 'Effectif', value: "Jusqu'à 10 participants" },
    { label: 'Format', value: 'Présentiel ou distanciel, intra ou inter-entreprise' },
  ],
  objectifsTitre: 'À la fin de la journée, vos équipes savent',
  objectifs: [
    "Expliquer le fonctionnement d'un LLM et identifier ses limites : hallucinations, biais, fraîcheur des données",
    "Choisir le modèle d'IA adapté à chaque type de tâche",
    'Rédiger des prompts structurés produisant des résultats exploitables du premier coup',
    'Appliquer l\'IA à au moins 3 tâches récurrentes de leur poste',
    "Utiliser l'IA en conformité RGPD et IA Act, et identifier les données à ne jamais partager",
  ],
  timeline: [
    {
      horaire: '9h00',
      titre: 'Accueil et positionnement',
      contenu: [
        'Tour de table, recueil des attentes',
        'Quiz de positionnement qui sert de référence pour mesurer la progression en fin de journée',
      ],
    },
    {
      horaire: '9h30 · Module 1',
      titre: "Comprendre l'IA générative et les LLM",
      contenu: [
        "Qu'est-ce qu'un LLM ? Fonctionnement vulgarisé, sans jargon",
        "Modèle contre interface : pourquoi ChatGPT n'est pas GPT",
        'Comparatif des grands modèles : ChatGPT, Claude, Gemini, Mistral, Copilot',
        'Quel modèle pour quel besoin : rédaction, analyse, recherche, données sensibles',
        'Les limites : hallucinations, biais, données d\'entraînement, avec démonstration en direct',
      ],
      atelier: {
        label: 'Atelier',
        description:
          'Les participants soumettent la même tâche à 2 modèles différents et comparent les résultats.',
      },
    },
    {
      horaire: '11h15 · Module 2',
      titre: 'Les bases du prompting efficace',
      contenu: [
        'Anatomie d\'un bon prompt : rôle, contexte, tâche, format, contraintes',
        'Les erreurs classiques et comment les corriger',
        'Itérer plutôt que recommencer',
      ],
      atelier: {
        label: 'Atelier',
        description:
          'Chaque participant reprend 3 de ses prompts ratés et les transforme. Comparaison avant et après.',
      },
    },
    {
      horaire: '13h30 · Module 3',
      titre: "L'IA dans son quotidien professionnel",
      contenu: [
        'Cas d\'usage par profil : dirigeant, commercial, administratif, marketing',
        'Travailler avec ses documents : résumer, extraire, reformuler, traduire',
      ],
      atelier: {
        label: 'Cas pratique central',
        description:
          'Chaque participant traite une vraie tâche de son poste apportée le matin, avec accompagnement individuel du formateur.',
      },
    },
    {
      horaire: '15h15 · Module 4',
      titre: 'Réglementation et bonnes pratiques',
      contenu: [
        'RGPD appliqué à l\'IA : quelles données partager, lesquelles jamais',
        "L'IA Act européen : ce qui concerne concrètement une PME",
        'Confidentialité : paramètres des outils, versions professionnelles contre gratuites',
        'Construire une charte d\'usage interne',
      ],
      atelier: {
        label: 'Atelier',
        description:
          "Auto-audit des pratiques et rédaction des 5 règles d'or pour l'entreprise.",
      },
    },
    {
      horaire: '16h15 · Module 5',
      titre: "Plan d'action et évaluation",
      contenu: [
        'Constituer sa boîte à outils personnelle',
        'Chaque participant repart avec 3 cas d\'usage prêts à déployer',
        'Quiz final, évaluation à chaud',
      ],
    },
  ],
  deliverables: [
    'Un livret participant complet',
    "Une bibliothèque de prompts prête à l'emploi",
    '3 cas d\'usage identifiés et prêts à déployer sur leur poste',
    "Les 5 règles d'or de l'usage de l'IA dans votre entreprise",
    'Un certificat de réalisation',
  ],
  allerPlusLoin: {
    before: 'Une fois les fondamentaux acquis, la ',
    linkText: 'formation IA Avancée',
    href: '/services/formation-ia/ia-avancee/',
    after: ' permet de créer des assistants IA métier et de construire un premier agent d\'automatisation.',
  },
  ctaTitle: 'Former vos équipes aux fondamentaux',
  ctaBody:
    '30 minutes offertes pour cadrer votre besoin et valider le niveau de vos équipes.',
  mentions:
    'Formation évaluée par quiz de positionnement et quiz final. Certificat de réalisation remis à chaque participant. Visio de suivi d\'une heure à 30 jours. Formation accessible aux personnes en situation de handicap, nous contacter en amont. Finançable OPCO.',
};

// ── Formation 2 : IA Avancée ─────────────────────────────────────
export const avancee: FormationDetail = {
  slug: 'ia-avancee',
  accent: PURPLE,
  level: 'Niveau 2',
  title: 'IA Avancée',
  breadcrumbLabel: 'IA Avancée',
  chapo:
    "Une journée pour passer d'utilisateur à power-user : assistants IA sur mesure, prompting avancé, connexion de l'IA à vos outils et premier agent d'automatisation fonctionnel.",
  metaTitle: 'Formation IA Avancée',
  metaDescription:
    "Une journée pour créer vos assistants IA métier, connecter l'IA à vos outils et construire un agent d'automatisation fonctionnel.",
  ogImage: '/og-default.png',
  educationalLevel: 'Advanced',
  infos: [
    { label: 'Durée', value: '1 journée, 7 heures' },
    { label: 'Public', value: 'Professionnels utilisant déjà l\'IA régulièrement' },
    { label: 'Prérequis', value: 'Pratique régulière d\'un outil IA ou formation Fondamentaux' },
    { label: 'Effectif', value: "Jusqu'à 10 participants" },
  ],
  infoNote: {
    before: 'Un questionnaire de vérification des prérequis est envoyé en amont. Les participants qui ne les remplissent pas sont orientés vers la ',
    linkText: 'formation IA Fondamentaux',
    href: '/services/formation-ia/ia-fondamentaux/',
    after: '.',
  },
  objectifsTitre: 'À la fin de la journée, vos équipes savent',
  objectifs: [
    'Concevoir des prompts avancés réutilisables : few-shot, chaîne de raisonnement, méta-prompting, prompts système',
    'Créer un assistant IA personnalisé adossé à une base de connaissances métier',
    'Expliquer le rôle des API et du protocole MCP, et identifier les connexions pertinentes',
    "Construire un workflow d'automatisation intégrant l'IA",
    'Définir un cadre de gouvernance et une feuille de route de déploiement',
  ],
  timeline: [
    {
      horaire: '9h00',
      titre: 'Accueil',
      contenu: [
        'Tour de table express : chacun présente un usage IA actuel et un processus métier répétitif qu\'il aimerait automatiser',
        'Ces éléments alimentent la feuille de route construite en fin de journée',
        'Quiz de positionnement',
      ],
    },
    {
      horaire: '9h15 · Module 1',
      titre: 'Prompting avancé',
      contenu: [
        'Few-shot : guider par l\'exemple pour obtenir un format constant',
        'Chaîne de raisonnement : faire décomposer avant de conclure',
        'Méta-prompting : faire écrire et améliorer ses prompts par l\'IA',
        'Prompts système : poser un cadre permanent de comportement',
      ],
      atelier: {
        label: 'Atelier',
        description:
          'Construire un prompt métier réutilisable, sous forme de template paramétrable, sur un cas réel de son poste.',
      },
    },
    {
      horaire: '11h00 · Module 2',
      titre: 'Son assistant IA métier',
      contenu: [
        'Assistants personnalisés : GPTs côté ChatGPT, Projets côté Claude. Instructions, base de connaissances, exemples',
        'Préparer sa base de connaissances : quels documents, quel format, quels pièges',
      ],
      atelier: {
        label: 'Cas pratique',
        description:
          'Chaque participant crée un assistant fonctionnel pour un besoin réel, réponse aux devis, onboarding client ou FAQ interne, et le teste sur des cas concrets.',
      },
    },
    {
      horaire: '13h30 · Module 3',
      titre: "Connecter l'IA à ses outils",
      contenu: [
        'L\'API expliquée simplement : quand l\'interface ne suffit plus',
        'MCP : le standard qui branche l\'IA sur vos outils, agenda, CRM, drive, boîte mail',
        'Démonstrations en direct : IA connectée à des documents, un agenda, un CRM',
        'Panorama : connecteurs natifs, API et plateformes d\'automatisation',
      ],
      atelier: {
        label: 'Atelier guidé',
        description: 'Activer et tester un connecteur sur son propre outil.',
      },
    },
    {
      horaire: '15h15 · Module 4',
      titre: 'Construire son agent mail',
      contenu: [
        'Anatomie d\'un workflow : déclencheur, actions, IA, sortie',
        'Comparaison des plateformes d\'automatisation et critères de choix',
        'Démonstration du résultat final par le formateur',
      ],
      atelier: {
        label: 'Atelier standardisé',
        description:
          'Tous les participants construisent le même agent mail IA à partir d\'un modèle fourni. Réception d\'un email, analyse et classification par l\'IA en urgent, client ou administratif, étiquetage automatique, puis brouillon de réponse généré. Progression par étapes avec points de contrôle. Chacun repart avec un agent fonctionnel. Variantes présentées en fin d\'atelier : veille automatique, génération de comptes-rendus, alimentation d\'un CRM.',
      },
    },
    {
      horaire: '16h30 · Module 5',
      titre: 'Gouvernance et feuille de route',
      contenu: [
        'Sécurité des automatisations : accès, données, supervision humaine',
        'Prioriser ses chantiers IA avec une matrice effort contre impact',
        'Feuille de route personnelle à 90 jours',
        'Quiz final, évaluation à chaud',
      ],
    },
  ],
  deliverables: [
    'Un prompt template métier réutilisable',
    'Un assistant IA fonctionnel adossé à leur base de connaissances',
    'Un agent mail opérationnel, classification et brouillons de réponse',
    'Une feuille de route personnelle à 90 jours',
    'Un certificat de réalisation',
  ],
  allerPlusLoin: {
    before: 'Vos équipes ont construit leur premier agent pendant la formation. Pour industrialiser ces automatisations à l\'échelle de votre entreprise, nous concevons des ',
    linkText: 'agents IA sur mesure',
    href: '/services/agents-ia/',
    after: ' intégrés à vos outils métier.',
  },
  ctaTitle: 'Passer au niveau avancé',
  ctaBody:
    '30 minutes offertes pour vérifier les prérequis de vos équipes et cadrer les cas d\'usage à travailler.',
  mentions:
    'Formation évaluée par quiz de positionnement, quiz final et évaluation des productions en atelier. Certificat de réalisation remis à chaque participant. Visio de suivi d\'une heure à 30 jours. Formation accessible aux personnes en situation de handicap, nous contacter en amont. Finançable OPCO.',
};

export const formations: Record<string, FormationDetail> = {
  'ia-fondamentaux': fondamentaux,
  'ia-avancee': avancee,
};

/**
 * JSON-LD d'une page détail : Course + BreadcrumbList.
 * Aucune propriété `offers`, aucun prix (règle du brief).
 */
export function buildFormationJsonLd(f: FormationDetail) {
  const url = `https://althoce.com/services/formation-ia/${f.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        'name': f.title,
        'description': f.metaDescription,
        'url': url,
        'provider': {
          '@type': 'Organization',
          '@id': 'https://althoce.com/#organization',
          'name': 'Althoce',
        },
        'hasCourseInstance': {
          '@type': 'CourseInstance',
          'courseMode': ['Onsite', 'Online'],
          'courseWorkload': 'PT7H',
        },
        'educationalLevel': f.educationalLevel,
        'teaches': f.objectifs,
        'inLanguage': 'fr-FR',
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': 'https://althoce.com/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://althoce.com/services/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Formation IA', 'item': 'https://althoce.com/services/formation-ia/' },
          { '@type': 'ListItem', 'position': 4, 'name': f.breadcrumbLabel, 'item': url },
        ],
      },
    ],
  };
}
