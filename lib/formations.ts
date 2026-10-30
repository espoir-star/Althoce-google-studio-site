import { formationDetailFaq } from './formation-faq';
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
  individual?: boolean;
  courseWorkload?: string;
  courseMode?: string[];
  followup?: string;
  programIntro?: string;
  showFunding?: boolean;
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
  faq: { q: string; a: string }[];
}

// Les URL historiques sont conservées ; seuls les programmes sont actualisés.
export const fondamentaux: FormationDetail = {
  "accent": "#2563eb",
  "ogImage": "/og-default.png",
  "educationalLevel": "Beginner",
  "objectifsTitre": "Des compétences pour votre quotidien.",
  "followup": "Un point de suivi à J+30 pour revenir sur les usages et les difficultés rencontrées.",
  "mentions": "Évaluation des acquis et attestation de réalisation selon les modalités de l’organisme porteur. Les besoins d’accessibilité sont étudiés avant la session. Licences, API et frais éventuels sont précisés séparément. Les réalisations sont pédagogiques : aucune mise en production n’est incluse.",
  "programIntro": "Sept modules alternent démonstrations, exercices et vérifications. De 9h à 17h, avec une heure de déjeuner hors des 7 heures pédagogiques.",
  "slug": "ia-fondamentaux",
  "level": "Métier",
  "title": "Formation IA métier",
  "breadcrumbLabel": "Formation IA métier",
  "chapo": "Professions réglementées et entreprises exigeantes : apprenez à utiliser l’IA dans votre métier. Prompts, assistants, connexions et prototypes, avec confidentialité et vérification à chaque étape.",
  "metaTitle": "Formation IA métier : fondamentaux et pratique en 7 h",
  "metaDescription": "Formation IA métier en 7 h pour professions réglementées et entreprises exigeantes : prompts, assistants, connexions et prototypes, avec suivi à J+30.",
  "infos": [
    {
      "label": "Durée",
      "value": "1 journée · 7 heures"
    },
    {
      "label": "Public",
      "value": "Professionnels et équipes · usage courant d’un ordinateur"
    },
    {
      "label": "Groupe",
      "value": "1 à 10 inclus · 12 participants maximum"
    },
    {
      "label": "Format",
      "value": "En présentiel ou en visioconférence"
    }
  ],
  "objectifs": [
    "Choisir un outil IA adapté à une tâche et à ses contraintes.",
    "Structurer une demande, vérifier les réponses et protéger les données.",
    "Créer et tester un Skill ou assistant métier réutilisable.",
    "Comprendre les connexions MCP et les autorisations associées.",
    "Prototyper un processus avec une validation humaine.",
    "Construire un tableau de bord d’exercice et contrôler ses calculs."
  ],
  "timeline": [
    {
      "horaire": "09h00 · 45 min",
      "titre": "Panorama des IA et usages responsables",
      "contenu": [
        "Comparer ChatGPT, Claude, Gemini, Copilot et Mistral selon les tâches.",
        "Comprendre les limites, la confidentialité et la validation humaine."
      ]
    },
    {
      "horaire": "09h45 · 45 min",
      "titre": "Produire et vérifier avec l’IA",
      "contenu": [
        "Structurer une demande pour rédiger, synthétiser ou analyser.",
        "Exercice : résumer un document et vérifier trois informations."
      ]
    },
    {
      "horaire": "10h30 · 1h15",
      "titre": "Créer un Skill ou assistant métier",
      "contenu": [
        "Transformer une procédure en instructions et exemples réutilisables.",
        "Créer et tester un assistant de compte rendu sur des données fictives."
      ]
    },
    {
      "horaire": "11h45 · 45 min",
      "titre": "Comprendre les connexions MCP",
      "contenu": [
        "Découvrir les connecteurs, les permissions et les accès en lecture.",
        "Démonstration guidée ou simulation selon les outils disponibles."
      ]
    },
    {
      "horaire": "13h30 · 1h30",
      "titre": "Prototyper une automatisation métier",
      "contenu": [
        "Définir les étapes, les données, les exceptions et le contrôle humain.",
        "Atelier : suivi de pièces manquantes et préparation de relances."
      ]
    },
    {
      "horaire": "15h00 · 1h15",
      "titre": "Construire un tableau de bord d’exercice",
      "contenu": [
        "Utiliser un fichier fictif pour produire trois indicateurs, deux graphiques et un filtre.",
        "Contrôler les calculs et les sources avant d’interpréter les résultats."
      ]
    },
    {
      "horaire": "16h15 · 45 min",
      "titre": "Mettre en pratique et évaluer",
      "contenu": [
        "Combiner les acquis sur un cas métier.",
        "Évaluer les compétences et préparer un plan individuel d’utilisation."
      ]
    }
  ],
  "deliverables": [
    "Des supports et une bibliothèque de prompts métier.",
    "Un assistant pédagogique testable et un workflow d’exercice documenté.",
    "Un tableau de bord prototype et une grille de vérification.",
    "Un bilan des acquis et une attestation de réalisation."
  ],
  "allerPlusLoin": {
    "before": "Pour travailler sur deux à trois cas spécifiques à votre organisation, découvrez la ",
    "linkText": "formation IA métier personnalisée",
    "href": "/services/formation-ia/ia-avancee/",
    "after": ", préparée avec votre référent avant la journée."
  },
  "ctaTitle": "Former vos équipes dans le cadre de leur métier.",
  "ctaBody": "Un premier échange offert pour préciser les usages, les participants et les exigences de votre activité.",
  faq: formationDetailFaq['ia-fondamentaux']
};

export const avancee: FormationDetail = {
  "accent": "#7c3aed",
  "ogImage": "/og-default.png",
  "educationalLevel": "Beginner",
  "objectifsTitre": "Des compétences pour votre quotidien.",
  "followup": "Un point de suivi à J+30 pour revenir sur les usages et les difficultés rencontrées.",
  "mentions": "Évaluation des acquis et attestation de réalisation selon les modalités de l’organisme porteur. Les besoins d’accessibilité sont étudiés avant la session. Licences, API et frais éventuels sont précisés séparément. Les réalisations sont pédagogiques : aucune mise en production n’est incluse.",
  "programIntro": "Sept modules alternent démonstrations, exercices et vérifications. De 9h à 17h, avec une heure de déjeuner hors des 7 heures pédagogiques.",
  "slug": "ia-avancee",
  "level": "Personnalisée",
  "title": "Formation IA métier personnalisée",
  "breadcrumbLabel": "Formation personnalisée",
  "chapo": "Une journée préparée autour de deux à trois cas de votre organisation. Pour les professions réglementées et les entreprises exigeantes, les exercices s’adaptent à vos outils, à vos données et au quotidien des collaborateurs.",
  "metaTitle": "Formation IA personnalisée : vos cas métier en 7 h",
  "metaDescription": "Formation IA personnalisée en 7 h pour professions réglementées et entreprises exigeantes. Vos cas métier, entretien préparatoire et suivi à J+30.",
  "infos": [
    {
      "label": "Formation",
      "value": "1 journée · 7 heures pédagogiques"
    },
    {
      "label": "Préparation",
      "value": "Entretien de 1 à 2 h inclus, avant la journée"
    },
    {
      "label": "Groupe",
      "value": "1 à 10 inclus · 12 participants maximum"
    },
    {
      "label": "Format",
      "value": "En présentiel ou en visioconférence"
    }
  ],
  "infoNote": {
    "before": "L’entretien préalable ne fait pas partie des 7 heures et ne constitue pas un audit technique. Pour un programme commun à votre profession, découvrez la ",
    "linkText": "formation IA métier",
    "href": "/services/formation-ia/ia-fondamentaux/",
    "after": "."
  },
  "objectifs": [
    "Choisir et configurer un environnement IA autorisé.",
    "Transformer une procédure en Skill ou assistant et tester les cas limites.",
    "Évaluer les connexions, leurs permissions et les risques associés.",
    "Prototyper un processus métier avec contrôle et reprise humaine.",
    "Analyser ou visualiser les données validées selon vos besoins.",
    "Documenter les réalisations, leurs limites et leur réutilisation."
  ],
  "timeline": [
    {
      "horaire": "09h00 · 45 min",
      "titre": "Partir de vos objectifs métier",
      "contenu": [
        "Reprendre les deux à trois cas sélectionnés avant la journée.",
        "Poser les règles de confidentialité et les critères de réussite."
      ]
    },
    {
      "horaire": "09h45 · 45 min",
      "titre": "Personnaliser votre environnement IA",
      "contenu": [
        "Configurer des consignes et un contexte métier dans un outil retenu.",
        "Pratiquer sur des données d’exercice non sensibles."
      ]
    },
    {
      "horaire": "10h30 · 1h15",
      "titre": "Construire un Skill personnalisé",
      "contenu": [
        "Traduire une procédure métier en instructions et critères de validation.",
        "Tester deux situations, dont une exception, puis corriger."
      ]
    },
    {
      "horaire": "11h45 · 45 min",
      "titre": "Explorer vos connexions et vos données",
      "contenu": [
        "Identifier une source autorisée, les permissions et les validations nécessaires.",
        "Démonstration ou simulation d’un connecteur MCP selon les accès disponibles."
      ]
    },
    {
      "horaire": "13h30 · 1h30",
      "titre": "Prototyper votre processus métier",
      "contenu": [
        "Construire le déroulé du cas principal, avec les exceptions.",
        "Tester le prototype et prévoir une reprise manuelle."
      ]
    },
    {
      "horaire": "15h00 · 1h15",
      "titre": "Visualiser les données utiles",
      "contenu": [
        "Créer un tableau de bord d’exercice et contrôler ses indicateurs.",
        "Selon le cadrage, approfondir à la place un second cas documentaire ou de reporting."
      ]
    },
    {
      "horaire": "16h15 · 45 min",
      "titre": "Transmettre et préparer l’adoption",
      "contenu": [
        "Évaluer les réalisations et documenter leurs limites.",
        "Préparer les fiches de prise en main et le plan d’application à J+30."
      ]
    }
  ],
  "deliverables": [
    "Un Skill ou assistant personnalisé et testable.",
    "Deux fiches de cas approfondis et un troisième exercice si faisable.",
    "Des modèles de consignes, un prototype de workflow et, si pertinent, un tableau de bord d’exercice.",
    "Les règles de validation, le plan d’adoption et le bilan des acquis."
  ],
  "allerPlusLoin": {
    "before": "Pour connecter une solution à votre environnement réel et la mettre en production, nous cadrons une mission d’",
    "linkText": "intégration IA sur mesure",
    "href": "/services/integration-ia/",
    "after": " distincte de la formation."
  },
  "ctaTitle": "Préparons une formation autour de vos usages.",
  "ctaBody": "Parlons des cas à travailler, des outils et des responsabilités de votre équipe lors d’un premier échange offert.",
  faq: formationDetailFaq['ia-avancee']
};

export const formations: Record<string, FormationDetail> = {'ia-fondamentaux': fondamentaux, 'ia-avancee': avancee};

/**
 * JSON-LD d'une page détail : Course + BreadcrumbList.
 * Aucune propriété `offers`, aucun prix (règle du brief).
 */
export function buildFormationJsonLd(f: FormationDetail) {
  const url = `https://althoce.com/services/formation-ia/${f.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: f.faq.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
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
          'courseMode': f.courseMode ?? ['Onsite', 'Online'],
          'courseWorkload': f.courseWorkload ?? 'PT7H',
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

export const formationFaq = [
  {
    "q": "Quelle formation IA choisir pour mon activité ?",
    "a": "La Formation IA métier propose un programme adapté à votre profession. La Formation IA métier personnalisée se prépare autour de deux à trois cas propres à votre organisation. Le Coaching IA Solo accompagne un indépendant sur une journée ; la Formation IA Dirigeant & Associés réunit 1 à 5 décideurs pour travailler leurs usages, la gouvernance et une feuille de route à 90 jours."
  },
  {
    "q": "Quelles sont les durées des parcours Althoce ?",
    "a": "Les formations métier et la Formation IA Dirigeant & Associés durent 7 heures sur une journée. Le parcours dirigeant inclut un entretien préparatoire de 45 minutes, distinct des 7 heures. Le Coaching IA Solo comprend 4h30 en visioconférence sur une journée."
  },
  {
    "q": "Les formations conviennent-elles aux professions réglementées ?",
    "a": "Oui. Les usages sont préparés en tenant compte du métier, de la confidentialité et des responsabilités des participants. Les ateliers utilisent des données fictives, anonymisées ou autorisées, avec vérification des réponses et validation humaine."
  },
  {
    "q": "Faut-il réaliser un diagnostic avant la formation ?",
    "a": "Non. Une formation peut être achetée directement. Le questionnaire et les entretiens préparatoires des formules personnalisée et Dirigeant & Associés servent à préparer la pédagogie. Ils ne constituent pas un audit technique."
  },
  {
    "q": "Les formations comprennent-elles un agent IA en production ?",
    "a": "Les formations métier, Dirigeant & Associés et le Coaching IA Solo produisent des outils et prototypes pédagogiques. Une intégration en production nécessite un périmètre, des accès, des tests et un accompagnement distincts."
  },
  {
    "q": "Combien de personnes peuvent participer ?",
    "a": "Les formations métier incluent 1 à 10 participants au tarif de base, avec un supplément pour les 11e et 12e. Au-delà de 12, plusieurs journées sont organisées. La Formation IA Dirigeant & Associés accueille un dirigeant et jusqu’à quatre associés ou décideurs, soit cinq personnes maximum. Le Coaching IA Solo est individuel."
  },
  {
    "q": "Intervenez-vous partout en France ?",
    "a": "Depuis Bordeaux, Althoce accompagne les équipes en présentiel ou à distance partout en France. Le Coaching IA Solo se déroule en visioconférence. Les modalités et les dates sont convenues avant la session."
  },
  {
    "q": "Un financement OPCO peut-il être étudié ?",
    "a": "Une prise en charge des formations peut être étudiée via notre organisme partenaire. Elle dépend de votre situation et de l’accord du financeur. Nous précisons les modalités du parcours avant toute démarche, sans garantir le financement."
  },
  {
    "q": "Quel suivi est prévu ?",
    "a": "Les formations métier et la Formation IA Dirigeant & Associés prévoient un point à J+30 sur les premiers usages et les difficultés rencontrées. Le Coaching IA Solo inclut un suivi individuel à J+15."
  },
  {
    "q": "Comment préparer les besoins d’accessibilité ?",
    "a": "Signalez vos besoins en amont pour que nous étudiions les aménagements nécessaires avec l’organisme porteur, avant de confirmer les modalités de la session."
  }
];
