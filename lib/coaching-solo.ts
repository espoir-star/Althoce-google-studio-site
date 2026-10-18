import type { FormationDetail } from './formations';

// Programme Drive du 16 octobre 2026. Parcours distinct du coaching dirigeant.
export const coachingSolo: FormationDetail = {
  "accent": "#2563eb",
  "ogImage": "/og-default.png",
  "educationalLevel": "Beginner",
  "objectifsTitre": "Des compétences pour votre quotidien.",
  "followup": "Un point individuel à J+15 pour revenir sur votre pratique et votre plan d’action.",
  "mentions": "Usage courant d’un ordinateur requis ; aucune programmation nécessaire. Données fictives, anonymisées ou autorisées. Licences et frais d’API éventuels en supplément. Le coaching comprend des exercices et prototypes ; aucune intégration complexe ou mise en production n’est incluse.",
  "programIntro": "Trois modules de 1h30, sur la même journée. Pause de 10h30 à 10h45 et déjeuner de 12h15 à 13h15, hors des 4h30 pédagogiques.",
  "slug": "coaching-independant",
  "individual": true,
  "showFunding": false,
  "courseWorkload": "PT4H30M",
  "courseMode": [
    "Online"
  ],
  "level": "Individuel",
  "title": "Coaching IA Solo",
  "breadcrumbLabel": "Coaching IA Solo",
  "chapo": "Une journée individuelle pour créer vos premiers outils IA à partir de deux cas de votre métier. Pour les indépendants et dirigeants de petites structures qui veulent comprendre, pratiquer et garder la main.",
  "metaTitle": "Coaching IA pour indépendants : parcours Solo de 4h30",
  "metaDescription": "Coaching IA Solo : 4h30 en visio pour indépendants. Deux cas métier, un assistant réutilisable, un prototype simple et un suivi à J+15.",
  "infos": [
    {
      "label": "Durée",
      "value": "4h30 sur une seule journée"
    },
    {
      "label": "Format",
      "value": "100 % individuel · visioconférence"
    },
    {
      "label": "Public",
      "value": "Indépendants, consultants, dirigeants de TPE"
    },
    {
      "label": "Préparation",
      "value": "Deux cas métier choisis avant la session"
    }
  ],
  "objectifs": [
    "Choisir et utiliser un assistant adapté à vos tâches.",
    "Structurer vos prompts et créer un Skill réutilisable.",
    "Comprendre les connecteurs MCP et leurs permissions.",
    "Prototyper et tester une automatisation métier simple.",
    "Vérifier les résultats et protéger les données."
  ],
  "timeline": [
    {
      "horaire": "09h00 à 10h30",
      "titre": "Comprendre et maîtriser l’IA",
      "contenu": [
        "Choisir les usages utiles de ChatGPT ou Claude dans votre activité.",
        "Structurer les prompts, contrôler les réponses et protéger les données.",
        "Découvrir les assistants et les connexions MCP, puis confirmer vos deux cas métier."
      ]
    },
    {
      "horaire": "10h45 à 12h15",
      "titre": "Créer votre Skill ou assistant métier",
      "contenu": [
        "Décomposer une tâche récurrente en étapes et règles.",
        "Créer les instructions et les exemples de votre assistant.",
        "Tester, corriger et documenter sa réutilisation."
      ],
      "atelier": {
        "label": "Votre premier outil",
        "description": "Un Skill ou assistant testé, réutilisable dans le cadre autorisé."
      }
    },
    {
      "horaire": "13h15 à 14h45",
      "titre": "Prototyper votre première automatisation",
      "contenu": [
        "Définir les données, les étapes, les exceptions et le contrôle humain.",
        "Explorer un connecteur adapté aux outils disponibles.",
        "Construire et tester un prototype simple, ou le simuler si les accès manquent."
      ],
      "atelier": {
        "label": "Votre second outil",
        "description": "Un workflow d’exercice documenté et une méthode pour le faire évoluer."
      }
    }
  ],
  "deliverables": [
    "Un Skill ou assistant réutilisable avec ses instructions.",
    "Un prototype simple, testé ou simulé, et sa documentation.",
    "Des modèles de prompts et des supports pratiques.",
    "Un plan d’action individuel et un point de suivi à J+15."
  ],
  "allerPlusLoin": {
    "before": "Pour déployer ensuite un agent ou une automatisation dans vos outils, découvrez notre accompagnement en ",
    "linkText": "intégration IA",
    "href": "/services/integration-ia/",
    "after": ", cadré séparément."
  },
  "ctaTitle": "Prenez une journée pour votre pratique de l’IA.",
  "ctaBody": "Un premier échange offert pour choisir les deux cas métier à travailler et préparer votre session individuelle.",
  "faq": [
    {
      "q": "À qui s’adresse le Coaching IA Solo ?",
      "a": "Aux indépendants, consultants et dirigeants de petites structures qui souhaitent créer leurs premiers outils IA à partir de deux cas métier. Un participant est accompagné en visioconférence pendant 4h30 sur une journée."
    },
    {
      "q": "Quelle différence avec le Coaching IA Dirigeant ?",
      "a": "Le Coaching IA Solo est une journée pratique de 4h30 centrée sur deux cas métier, avec un suivi à J+15. Le Coaching IA Dirigeant est un parcours distinct de quatre séances de 1h30 pour travailler sur les usages du dirigeant et la feuille de route de son entreprise."
    },
    {
      "q": "Que faut-il préparer ?",
      "a": "Un questionnaire permet de choisir deux cas d’usage, les outils disponibles et les accès autorisés. Un ordinateur et une connexion Internet sont nécessaires. Aucune compétence en programmation n’est requise."
    },
    {
      "q": "Avec quels outils repart-on ?",
      "a": "Un Skill ou assistant réutilisable, un prototype d’automatisation simple testé ou simulé, leurs instructions, des modèles de prompts et un plan d’action. Le prototype reste pédagogique : une mise en production se cadre dans une mission distincte."
    },
    {
      "q": "Comment protéger les données de mes clients ?",
      "a": "Les exercices utilisent des données fictives, anonymisées ou explicitement autorisées. Nous travaillons les permissions, la confidentialité, la vérification des réponses et la validation humaine selon votre activité."
    },
    {
      "q": "Que se passe-t-il si les accès aux outils ne sont pas disponibles ?",
      "a": "Le cas est simulé sur un environnement ou des données d’exercice pour apprendre le fonctionnement. Les logiciels, licences et frais d’API ne sont pas compris dans l’offre."
    }
  ]
};
