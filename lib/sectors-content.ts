import type { SectorStory } from "./expertise";
export type { SectorStory } from "./expertise";

export const sectorStories: SectorStory[] = [
  {
    slug: "comptabilite",
    name: "Expertise comptable",
    group: "professions",
    audience: "Associés · Responsables de mission · Collaborateurs",
    title: "IA pour les cabinets d’expertise comptable",
    promise: "Des dossiers prêts pour votre expertise.",
    intro:
      "Collecte des pièces, rapprochement bancaire, lettrage : Althoce conçoit des agents IA sur mesure et forme vos collaborateurs pour consacrer davantage de temps à la révision et au conseil.",
    description:
      "Agents IA et formation pour experts-comptables : collecte, rapprochement bancaire, lettrage et préparation du bilan, adaptés aux outils de votre cabinet.",
    image: "/images/sectors/finance-dossiers.webp",
    imageAlt:
      "Des collaborateurs examinent ensemble des dossiers et des documents financiers.",
    trainingImage: "/images/sectors/finance-formation.webp",
    approach: {
      title: "Des agents intégrés à votre production comptable.",
      text: "Nous partons de vos logiciels et des contrôles déjà en place. Les agents complètent ce qui fonctionne et prennent en charge les recherches, préparations et relances qui mobilisent encore vos collaborateurs.",
      deliverables: [
        "Des pièces reliées au bon dossier client.",
        "Des rapprochements proposés avec leurs justificatifs.",
        "Les anomalies regroupées pour la revue du collaborateur.",
      ],
    },
    boundaries:
      "Les dossiers clients restent séparés. Les corrections comptables et les déclarations restent validées par les personnes habilitées.",
    training:
      "Vos collaborateurs pratiquent sur des dossiers représentatifs du cabinet : préparer une analyse, contrôler la réponse et réutiliser une méthode commune.",
    trainingPractice: [
      "Relancer une pièce sans redemander ce qui a déjà été reçu.",
      "Contrôler une proposition de rapprochement ou de lettrage.",
      "Préparer un commentaire de gestion à partir de chiffres vérifiés.",
    ],
    scenarios: [
      {
        title: "Collecte et relance des pièces",
        output:
          "L’agent compare les pièces attendues aux documents reçus et prépare une relance ciblée par client et par période.",
        review: "Le collaborateur confirme les manquants avant l’envoi.",
      },
      {
        title: "Agent IA de rapprochement bancaire",
        output:
          "L’agent compare le relevé bancaire aux écritures du compte de banque, propose les correspondances et signale les opérations non pointées ou les écarts.",
        review:
          "Le collaborateur vérifie l’état de rapprochement et décide des régularisations.",
      },
      {
        title: "Agent IA de lettrage",
        output:
          "L’agent propose des associations entre factures, avoirs et règlements dans les comptes clients ou fournisseurs. Les paiements partiels, groupés et écarts restent visibles.",
        review:
          "Le collaborateur valide le lettrage et traite les cas ambigus.",
      },
      {
        title: "Préparation du dossier de révision",
        output:
          "L’agent rassemble les justificatifs, les mouvements à examiner et les pièces manquantes dans une liste de contrôle par dossier.",
        review:
          "Le responsable de mission conduit la révision et valide les corrections.",
      },
      {
        title: "Préparation du rendez-vous bilan",
        output:
          "À partir des états validés, l’agent prépare une note de synthèse avec les variations de l’exercice et les questions à aborder avec le client.",
        review: "L’expert-comptable vérifie l’analyse et apporte son conseil.",
      },
    ],
    guides: [
      "12-cas-usage-experts-comptables",
      "guide-claude-pennylane",
      "7-chantiers-ia-cabinet",
    ],
    related: [],
    caseSlug: "cabinet-comptable-lyon",
    caseLabel: "Un projet dans un cabinet comptable à Lyon",
    faq: [
      {
        q: "Notre logiciel fait déjà du rapprochement et du lettrage. Quel intérêt ?",
        a: "Nous commençons par ces fonctions existantes. Un agent complémentaire est pertinent si des tâches restent manuelles : rechercher un justificatif, examiner des règlements groupés ou préparer les exceptions. Nous ne recréons pas ce que votre logiciel fait déjà correctement.",
      },
      {
        q: "Peut-on connecter l’agent à notre logiciel comptable ?",
        a: "Nous vérifions les connexions et exports disponibles dans votre configuration. Un premier essai peut partir de fichiers sélectionnés avant d’envisager une connexion régulière.",
      },
      {
        q: "Comment protéger les dossiers de nos clients ?",
        a: "Les accès sont définis par collaborateur et par dossier. L’hébergement, la conservation et les conditions des outils sont examinés avant d’utiliser des données réelles.",
      },
      {
        q: "Peut-on commencer par former les collaborateurs ?",
        a: "Oui. La formation IA comptable peut être une première étape indépendante. Nous choisissons les exercices avec vous et travaillons sur des données fictives, anonymisées ou autorisées.",
      },
    ],
    heading: "L’IA pour alléger la production de votre cabinet.",
    usesTitle:
      "De la collecte à la révision : des agents IA utiles au cabinet.",
    cta: {
      title: "Quelle tâche ralentit encore vos dossiers ?",
      description:
        "Parlons de votre production, de votre logiciel comptable et des opérations qui prennent le plus de temps à vos collaborateurs.",
    },
  },
  {
    slug: "droit",
    name: "Droit & professions juridiques",
    group: "professions",
    audience: "Cabinets d’avocats · Études notariales",
    title: "IA pour les cabinets d’avocats et les études notariales",
    promise: "Préparer les pièces. Préserver votre jugement.",
    intro:
      "Avocats et notaires : Althoce conçoit des agents IA pour organiser les pièces, comparer les versions et préparer les échanges clients. Vos équipes sont formées à les utiliser dans le respect de leurs obligations professionnelles.",
    description:
      "IA pour avocats et notaires : formation, organisation des pièces et préparation documentaire sur mesure, avec sources vérifiables et contrôle du professionnel.",
    image: "/images/sectors/droit.webp",
    imageAlt:
      "Des professionnels échangent autour de documents dans un bureau juridique.",
    trainingImage: "/images/sectors/droit-atelier.webp",
    approach: {
      title: "Moins de recherche avant l’analyse du dossier.",
      text: "Vos agents travaillent à partir des pièces et modèles du cabinet ou de l’étude. Chaque information utile renvoie au document qui la justifie.",
      deliverables: [
        "Des pièces classées et plus faciles à retrouver.",
        "Des modifications repérées entre deux versions.",
        "Des échanges clients préparés avec l’historique du dossier.",
      ],
    },
    boundaries:
      "Le secret professionnel et les accès par dossier encadrent le projet. L’analyse et le conseil restent du ressort du professionnel.",
    training:
      "Les exercices sont adaptés au travail du cabinet ou de l’étude : préparation contentieuse, collecte notariale ou revue de contrats.",
    trainingPractice: [
      "Construire une chronologie avec renvois aux pièces.",
      "Vérifier une référence juridique avant de la reprendre.",
      "Rédiger un projet de réponse fidèle au dossier.",
    ],
    scenarios: [
      {
        title: "Chronologie d’un dossier contentieux",
        output:
          "L’agent extrait les dates et faits des pièces et correspondances, puis construit une chronologie avec les références de chaque élément.",
        review:
          "L’avocat vérifie les faits, les contradictions et leur portée.",
      },
      {
        title: "Collecte des pièces en étude notariale",
        output:
          "L’agent suit les documents reçus selon la liste de l’étude et prépare les demandes de pièces manquantes ou à actualiser.",
        review:
          "Le collaborateur habilité confirme la validité et la nécessité des pièces.",
      },
      {
        title: "Comparaison de contrats",
        output:
          "L’agent met en regard les versions d’un contrat et signale les clauses modifiées, supprimées ou ajoutées.",
        review:
          "Le professionnel interprète les modifications et valide la position à retenir.",
      },
      {
        title: "Préparation des rendez-vous clients",
        output:
          "L’agent réunit les derniers échanges, les demandes en attente et les documents utiles dans une note de préparation.",
        review:
          "Le responsable du dossier confirme les échéances et les engagements.",
      },
    ],
    guides: ["claude-droit-10-cas-usage"],
    related: ["juridique"],
    caseSlug: "cabinet-avocats-agent-ia-telephonique",
    caseLabel: "L’accueil téléphonique d’un cabinet d’avocats",
    faq: [
      {
        q: "Peut-on utiliser des dossiers confidentiels ?",
        a: "Le projet commence par le choix des outils et des règles d’accès, d’hébergement et de conservation. Les premiers exercices peuvent utiliser des documents fictifs ou publics, avant toute utilisation de dossiers réels.",
      },
      {
        q: "Comment limiter les erreurs de références juridiques ?",
        a: "Les réponses doivent renvoyer à des sources consultables. Le professionnel vérifie leur existence, leur actualité et leur portée avant de les utiliser. Une référence absente doit être signalée.",
      },
      {
        q: "La formation est-elle différente pour les avocats et les notaires ?",
        a: "Oui. La préparation d’un contentieux, la collecte en étude et la revue contractuelle appellent des exercices distincts. Nous construisons le programme avec les personnes qui suivront la formation.",
      },
    ],
    heading: "L’IA prépare vos dossiers. Vous exercez votre jugement.",
    usesTitle: "Des agents pour les étapes qui précèdent votre analyse.",
    cta: {
      title: "Quel travail préparatoire pourriez-vous alléger ?",
      description:
        "Partons d’un type de dossier et des recherches que votre équipe répète le plus souvent.",
    },
  },
  {
    slug: "medical",
    name: "Santé & médical",
    group: "professions",
    audience: "Cabinets et centres de santé · Cliniques et établissements",
    title: "IA pour les cabinets médicaux et les établissements de santé",
    promise: "Alléger l’organisation autour du soin.",
    intro:
      "Althoce accompagne les cabinets et établissements de santé dans leurs tâches administratives et documentaires. Des agents sur mesure et des formations aident vos équipes à traiter les demandes et à retrouver l’information utile.",
    description:
      "Formation IA et accompagnement sur mesure pour cabinets médicaux et établissements de santé : organisation administrative, documentation et contrôle des accès.",
    image: "/images/sectors/medical.webp",
    imageAlt:
      "Une coordinatrice et un responsable administratif travaillent dans le bureau d’un centre de santé.",
    trainingImage: "/images/services/formation.webp",
    approach: {
      title: "Une aide adaptée à votre organisation de santé.",
      text: "Nous choisissons avec le secrétariat, la coordination ou la direction une tâche qui encombre le quotidien. L’agent s’appuie sur vos consignes et transmet à la bonne personne les demandes à reprendre.",
      deliverables: [
        "Des demandes administratives mieux préparées.",
        "Des procédures à jour plus faciles à consulter.",
        "Moins de recherches pour préparer les dossiers qualité.",
      ],
    },
    boundaries:
      "Ces usages concernent l’administration et la documentation, pas le diagnostic, le triage clinique ou le traitement. Le cadre des données de santé est étudié avant toute utilisation.",
    paths: [
      {
        id: "cabinets",
        title: "Pour les cabinets et centres de santé",
        text: "Soutenir le secrétariat dans les demandes récurrentes et l’accueil administratif.",
      },
      {
        id: "etablissements",
        title: "Pour les cliniques et établissements",
        text: "Aider la qualité et les services support à partager la bonne information.",
      },
    ],
    training:
      "Secrétariat, coordination et fonctions support s’exercent sur les tâches de leur service, avec des documents fictifs ou autorisés.",
    trainingPractice: [
      "Préparer une réponse administrative claire.",
      "Retrouver et vérifier une procédure en vigueur.",
      "Reconnaître une demande à transmettre à un soignant.",
    ],
    scenarios: [
      {
        title: "Préparation des demandes au secrétariat",
        output:
          "L’agent rassemble le motif administratif, les coordonnées utiles et les informations manquantes dans une fiche à traiter.",
        review:
          "Le secrétariat prend en charge la demande ; les questions de soin vont aux professionnels.",
      },
      {
        title: "Réponses aux questions pratiques",
        output:
          "À partir des consignes approuvées, l’agent prépare les réponses sur les horaires, l’accueil ou les documents administratifs à fournir.",
        review: "Le personnel vérifie la réponse et sa source.",
      },
      {
        title: "Préparation des dossiers qualité",
        output:
          "L’agent rassemble les procédures et justificatifs correspondant aux points de la revue, puis signale les pièces absentes ou anciennes.",
        review:
          "Le responsable qualité apprécie les preuves et les conclusions.",
      },
      {
        title: "Suivi des actions entre services",
        output:
          "À partir des comptes rendus validés, l’agent prépare la liste des actions, responsables et échéances à suivre.",
        review:
          "Les responsables confirment l’affectation et les dates ; les urgences médicales restent hors de ce circuit.",
      },
    ],
    guides: [],
    related: ["operations", "telephonique"],
    faq: [
      {
        q: "Peut-on commencer sans données de patients ?",
        a: "Oui. Les procédures internes, consignes d’accueil et documents administratifs sans données de patients constituent des points de départ possibles.",
      },
      {
        q: "Que faut-il prévoir pour les données de santé ?",
        a: "La nature des données, les responsabilités, les droits d’accès et les obligations d’hébergement, notamment le cadre HDS lorsqu’il s’applique, doivent être étudiés. Un hébergement en France ne suffit pas à garantir un cadre adapté.",
      },
      {
        q: "Avec qui construisez-vous le projet ?",
        a: "Dans un cabinet, avec le responsable et le secrétariat ou la coordination. Dans un établissement, les équipes concernées, la DSI et les responsables qualité ou données sont associés selon le projet.",
      },
    ],
    heading: "L’IA pour alléger l’administratif autour du soin.",
    usesTitle: "Deux organisations, des besoins différents.",
    cta: {
      title: "Quel temps administratif pourrait être mieux employé ?",
      description:
        "Décrivons ensemble une tâche de votre secrétariat ou de vos fonctions support, et la façon dont une IA pourrait les aider.",
    },
  },
  {
    slug: "assurance-patrimoine",
    name: "Assurance, courtage & patrimoine",
    group: "professions",
    audience:
      "Cabinets de courtage · Conseil en patrimoine · Équipes de gestion",
    title: "IA pour l’assurance, le courtage et le patrimoine",
    promise: "Préparer les dossiers. Consacrer l’échange au client.",
    intro:
      "Collecte de pièces, préparation des rendez-vous et suivi des échéances : Althoce conçoit des agents IA pour les cabinets de courtage et de patrimoine. Le conseil reste entre les mains de vos professionnels.",
    description:
      "Formation IA et agents sur mesure pour le courtage et le patrimoine : collecte documentaire, préparation des rendez-vous et suivi administratif des dossiers.",
    image: "/images/services/coaching-dirigeant.webp",
    imageAlt:
      "Deux professionnels préparent un échange autour de documents de travail.",
    trainingImage: "/images/sectors/finance-formation.webp",
    approach: {
      title: "Retrouver le contexte avant chaque échange.",
      text: "Les agents réunissent les informations de vos dossiers et préparent le suivi selon les méthodes du cabinet. Votre équipe passe moins de temps à reconstituer l’historique.",
      deliverables: [
        "Les pièces manquantes identifiées avant le rendez-vous.",
        "Une synthèse des échanges et questions en attente.",
        "Les renouvellements et échéances réunis dans une vue de suivi.",
      ],
    },
    boundaries:
      "Les accès restent limités aux personnes habilitées. Le profil client, les recommandations et le choix des produits ne sont pas confiés à ces agents.",
    training:
      "Vos conseillers et gestionnaires apprennent à préparer un rendez-vous et à vérifier une synthèse sans mélanger information factuelle et conseil.",
    trainingPractice: [
      "Repérer une pièce ancienne ou manquante.",
      "Préparer les questions à confirmer avec le client.",
      "Rédiger un suivi fidèle aux engagements pris.",
    ],
    scenarios: [
      {
        title: "Collecte documentaire",
        output:
          "L’agent compare les pièces reçues à la liste du cabinet et prépare une demande ciblée pour compléter ou actualiser le dossier.",
        review: "Le gestionnaire confirme les documents à réclamer.",
      },
      {
        title: "Préparation d’un rendez-vous",
        output:
          "L’agent rassemble les notes, documents récents et questions en attente dans une fiche de préparation datée.",
        review:
          "Le conseiller actualise les informations avec le client et conduit l’analyse.",
      },
      {
        title: "Suivi des échéances",
        output:
          "L’agent réunit les dates de renouvellement et demandes en attente, puis prépare les rappels administratifs.",
        review:
          "L’équipe vérifie les dates et valide les messages avant envoi.",
      },
    ],
    guides: [],
    related: ["operations", "service-client"],
    faq: [
      {
        q: "L’agent recommande-t-il un contrat ou un placement ?",
        a: "Non. Il prépare les informations et le suivi administratif. L’analyse des besoins, l’adéquation du conseil et la recommandation restent assurées par les professionnels habilités.",
      },
      {
        q: "Peut-on adapter les agents à notre activité de courtage ?",
        a: "Oui. Nous partons de vos types de dossiers, pièces et interlocuteurs. Un cabinet de courtage et un cabinet de patrimoine ne travaillent pas avec les mêmes méthodes.",
      },
      {
        q: "Peut-on commencer par la préparation des rendez-vous ?",
        a: "Oui. Nous pouvons tester ce seul usage sur des documents sélectionnés et mesurer le temps de préparation et de relecture avec votre équipe.",
      },
    ],
    heading: "L’IA pour préparer les dossiers et mieux servir vos clients.",
    usesTitle: "Des agents au service du suivi de vos dossiers.",
    cta: {
      title: "Retrouver plus de temps pour le conseil.",
      description:
        "Parlons de la préparation et du suivi qui mobilisent aujourd’hui vos conseillers et gestionnaires.",
    },
  },
  {
    slug: "immobilier",
    name: "Immobilier",
    group: "professions",
    audience: "Transaction · Gestion locative · Syndics",
    title: "IA pour les agences immobilières et les syndics",
    promise: "Un dossier suivi. Un interlocuteur disponible.",
    intro:
      "Transaction, gestion locative ou syndic : Althoce conçoit des agents IA autour de vos dossiers et forme vos équipes. L’objectif : retrouver l’information plus vite et faire avancer les demandes sans multiplier les ressaisies.",
    description:
      "Agents IA et formation pour l’immobilier : dossiers de transaction, demandes locatives et préparation des assemblées, adaptés à vos outils et validations.",
    image: "/images/sectors/immobilier.webp",
    imageAlt:
      "Des professionnels de l’immobilier examinent un dossier dans leur agence.",
    trainingImage: "/images/sectors/immobilier-atelier.webp",
    approach: {
      title: "Chaque demande rattachée au bon bien.",
      text: "Vos agents relient les pièces, les échanges et les tâches dans vos outils de gestion. Le suivi s’adapte à votre activité : vendre un bien, gérer une location ou préparer une assemblée.",
      deliverables: [
        "Une vue des pièces encore attendues.",
        "L’historique utile avant de répondre à un locataire.",
        "Les documents de copropriété réunis par sujet.",
      ],
    },
    boundaries:
      "Vos équipes gardent la décision sur les locataires, les interventions et les engagements. Les dossiers personnels restent accessibles aux seules personnes habilitées.",
    training:
      "Négociateurs, gestionnaires et collaborateurs de syndic pratiquent sur des situations propres à leur activité.",
    trainingPractice: [
      "Préparer une fiche de visite fiable.",
      "Résumer une demande et les actions déjà engagées.",
      "Rédiger une réponse avec les bonnes pièces du dossier.",
    ],
    scenarios: [
      {
        title: "Transaction : compléter le dossier de vente",
        output:
          "L’agent suit les pièces reçues pour le bien, repère celles qui manquent et prépare les demandes au vendeur.",
        review:
          "Le négociateur vérifie la validité des documents avant de les transmettre.",
      },
      {
        title: "Gestion locative : traiter une demande avec son historique",
        output:
          "L’agent réunit le signalement du locataire, les échanges précédents et les interventions déjà réalisées pour préparer la réponse.",
        review:
          "Le gestionnaire apprécie l’urgence et décide de l’intervention.",
      },
      {
        title: "Syndic : préparer les sujets d’assemblée",
        output:
          "L’agent classe les devis, correspondances et justificatifs par sujet pour faciliter la préparation du dossier.",
        review:
          "Le syndic vérifie les documents, les résolutions et les formalités.",
      },
    ],
    guides: ["claude-data-gouv-20-prompts"],
    related: ["operations", "service-client"],
    faq: [
      {
        q: "Faut-il changer de logiciel immobilier ?",
        a: "Nous étudions d’abord les connexions ou exports de votre logiciel actuel. Le projet s’appuie sur vos références de biens et de dossiers.",
      },
      {
        q: "L’IA peut-elle choisir un locataire ?",
        a: "Les agents présentés préparent les dossiers et le suivi. Ils ne sélectionnent ni ne notent les candidats. Les décisions restent prises par les professionnels.",
      },
      {
        q: "La formation convient-elle à une petite agence ?",
        a: "Oui. Nous adaptons le programme aux tâches, aux outils et au niveau de l’équipe. Une formation peut suffire pour démarrer, sans projet d’agent connecté.",
      },
    ],
    heading: "L’IA pour suivre vos biens, vos dossiers et vos clients.",
    usesTitle: "Des agents pour vos trois activités.",
    cta: {
      title: "Quel dossier vous fait perdre le fil ?",
      description:
        "Parlons des demandes qui s’accumulent et des informations que votre équipe doit sans cesse rechercher.",
    },
  },
  {
    slug: "commerce-distribution",
    name: "Commerce",
    group: "organisations",
    audience: "Entreprises B2B · Négoce · Développement commercial",
    title: "IA pour le commerce et le négoce",
    promise: "Plus de temps pour faire avancer vos affaires.",
    intro:
      "Althoce conçoit des agents IA qui préparent la prospection, le suivi des devis et les réponses aux appels d’offres. Reliés à vos outils commerciaux, ils laissent davantage de place aux échanges avec vos clients.",
    description:
      "IA pour le commerce B2B et le négoce : prospection, devis, relances et appels d’offres. Formation et agents sur mesure connectés à votre organisation commerciale.",
    image: "/images/sectors/commerce-distribution.webp",
    imageAlt:
      "Une équipe commerciale prépare ses dossiers et ses échanges clients au bureau.",
    trainingImage: "/images/sectors/commerce-distribution-atelier.webp",
    approach: {
      title: "Des agents construits autour de votre cycle de vente.",
      text: "Nous relions les informations des comptes, des offres et des échanges pour que vos équipes disposent du bon contexte au moment d’agir.",
      deliverables: [
        "Une prospection préparée selon vos critères de ciblage.",
        "Des devis suivis avec l’historique de la relation.",
        "Des réponses aux consultations fondées sur vos références réelles.",
      ],
    },
    boundaries:
      "Vos commerciaux gardent la main sur les contacts, les prix et les engagements. Les envois suivent les règles de prospection et les validations définies avec vous.",
    training:
      "Vos commerciaux travaillent sur leurs rendez-vous, offres et relances pour utiliser l’IA avec précision et conserver leur ton.",
    trainingPractice: [
      "Préparer un rendez-vous à partir du contexte client.",
      "Transformer des notes en suivi commercial.",
      "Vérifier une réponse aux exigences d’un appel d’offres.",
    ],
    scenarios: [
      {
        title: "Prospection ciblée",
        output:
          "L’agent rassemble les informations utiles sur les comptes qui correspondent à vos critères et prépare un angle de prise de contact.",
        review: "Le commercial choisit les prospects et valide le message.",
      },
      {
        title: "Suivi des devis",
        output:
          "L’agent retrouve la proposition, les échanges et les questions restées ouvertes pour préparer une relance adaptée.",
        review:
          "Le commercial confirme les prix, disponibilités et engagements.",
      },
      {
        title: "Réponse aux appels d’offres",
        output:
          "L’agent relève les exigences du dossier, réunit les références et prépare une trame de réponse ou de mémoire technique. Les justificatifs manquants sont signalés.",
        review:
          "L’équipe décide de répondre, valide le chiffrage et les capacités annoncées, puis dépose l’offre.",
      },
      {
        title: "Transmission à l’ADV",
        output:
          "À partir de l’offre acceptée, l’agent prépare la fiche de commande et signale les références ou conditions à compléter.",
        review: "L’ADV vérifie la commande avant confirmation au client.",
      },
    ],
    guides: [],
    related: ["commercial"],
    caseSlug: "negoce-vins-bordelais-agent-ia-sdr",
    caseLabel: "Un projet de prospection dans le négoce de vins bordelais",
    faq: [
      {
        q: "Les appels d’offres publics et privés sont-ils concernés ?",
        a: "Oui. Le travail de préparation dépend du dossier de consultation : exigences, pièces, références et réponse technique. Votre équipe garde la décision de candidater, la validation des engagements et le dépôt.",
      },
      {
        q: "Faut-il changer de CRM ?",
        a: "Nous partons de votre CRM et de votre messagerie. Les possibilités de connexion sont vérifiées avant de choisir le premier usage à mettre en place.",
      },
      {
        q: "L’agent peut-il envoyer les relances ?",
        a: "Cela se définit avec vous. Il peut d’abord préparer des brouillons. Un éventuel envoi repose sur des règles validées, les droits de contact et un suivi des oppositions.",
      },
      {
        q: "Peut-on former les commerciaux avant de créer un agent ?",
        a: "Oui. La formation peut commencer par la préparation des rendez-vous ou des offres, avec vos outils actuels.",
      },
    ],
    heading: "L’IA pour prospecter, répondre et faire avancer vos ventes.",
    usesTitle: "Des agents de la prospection à la commande.",
    cta: {
      title: "Où votre cycle de vente perd-il du temps ?",
      description:
        "Prospection, devis ou appels d’offres : choisissons ensemble la première étape à alléger pour votre équipe.",
    },
  },
  {
    slug: "industrie",
    name: "Industrie",
    group: "organisations",
    audience: "PME industrielles · Achats · Qualité · Fonctions support",
    title: "IA pour les PME industrielles",
    promise: "Le bon document, pour la bonne décision.",
    intro:
      "Devis fournisseurs, procédures qualité, dossiers de consultation : Althoce conçoit des agents IA et forme vos équipes pour retrouver, comparer et préparer les informations nécessaires à leurs décisions.",
    description:
      "IA pour l’industrie : comparaison d’offres fournisseurs, documentation qualité et transmission des actions. Formation et agents adaptés aux processus de votre PME.",
    image: "/images/sectors/industrie.webp",
    imageAlt:
      "Des collègues d’une entreprise industrielle examinent des dossiers techniques au bureau.",
    trainingImage: "/images/sectors/industrie-atelier.webp",
    approach: {
      title: "Vos documents techniques deviennent plus faciles à exploiter.",
      text: "Les agents s’appuient sur vos références et vos versions approuvées. Ils rapprochent les informations dispersées pour éviter à vos équipes de recommencer les mêmes recherches.",
      deliverables: [
        "Des offres fournisseurs présentées sur une base comparable.",
        "La bonne version d’une procédure à portée de main.",
        "Les constats et justificatifs réunis pour les revues qualité.",
      ],
    },
    boundaries:
      "Les décisions qualité, les engagements d’achat et les consignes de sécurité restent validés par vos responsables. Ces usages ne pilotent pas les machines.",
    training:
      "Acheteurs, responsables qualité et fonctions support s’exercent sur leurs documents pour apprendre à comparer, retrouver une référence et vérifier une synthèse.",
    trainingPractice: [
      "Comparer les prix et exclusions de plusieurs devis.",
      "Vérifier la version d’une procédure.",
      "Préparer une synthèse de non-conformité à partir des constats.",
    ],
    scenarios: [
      {
        title: "Comparaison des offres fournisseurs",
        output:
          "L’agent remet les devis dans une grille commune : prix, unités, options, transport et délais. Les différences de périmètre ressortent.",
        review: "L’acheteur vérifie les conditions et conduit la négociation.",
      },
      {
        title: "Préparation des revues de non-conformité",
        output:
          "L’agent rassemble constats, photos et échanges dans une synthèse chronologique, avec les éléments encore manquants.",
        review:
          "L’équipe qualité établit les causes et décide des mesures à prendre.",
      },
      {
        title: "Recherche dans les procédures",
        output:
          "L’agent retrouve le passage utile dans les documents approuvés et indique la version utilisée.",
        review:
          "Le responsable confirme que la procédure s’applique à la situation.",
      },
      {
        title: "Préparation d’une réponse technique",
        output:
          "L’agent rapproche le cahier des charges des capacités et références documentées de l’entreprise pour préparer la réponse.",
        review:
          "Les équipes techniques et commerciales valident la faisabilité et les engagements.",
      },
    ],
    guides: ["copilot-8-cas-usage"],
    related: ["achats"],
    caseSlug: "eti-industrielle-agent-ia-achats",
    caseLabel: "La préparation des achats dans une ETI industrielle",
    faq: [
      {
        q: "Peut-on démarrer à partir de fichiers ?",
        a: "Oui. Des exports ou documents sélectionnés permettent de tester un usage avant d’envisager une connexion à l’ERP ou à la gestion documentaire.",
      },
      {
        q: "Comment éviter d’utiliser une ancienne procédure ?",
        a: "Nous identifions les documents de référence et leur responsable. L’agent doit montrer la version utilisée et signaler une référence manquante ou ambiguë.",
      },
      {
        q: "Intervenez-vous sur le pilotage des machines ?",
        a: "Les usages présentés concernent les documents et les fonctions support. Ils ne commandent pas les machines et ne prennent pas de décision de sécurité.",
      },
    ],
    heading: "L’IA pour alléger le travail documentaire de votre industrie.",
    usesTitle: "Des agents pour les achats, la qualité et les offres.",
    cta: {
      title: "Quel dossier mobilise trop de temps dans vos équipes ?",
      description:
        "Comparaison de devis, documentation qualité ou réponse technique : partons de votre priorité.",
    },
  },
  {
    slug: "marketing-communication",
    name: "Agences marketing & communication",
    group: "organisations",
    audience: "Dirigeants d’agence · Chefs de projet · Équipes de production",
    title: "IA pour les agences marketing et communication",
    promise: "Garder du temps pour les idées et les clients.",
    intro:
      "Du brief au bilan de campagne, Althoce conçoit des agents IA adaptés à vos méthodes et forme vos équipes. Les informations restent rattachées au bon client, et vos créatifs gardent la direction des idées.",
    description:
      "Formation IA et agents sur mesure pour agences marketing : briefs, bilans de campagne, production multi-clients et circuits de validation des livrables.",
    image: "/images/sectors/marketing-communication.webp",
    imageAlt:
      "Une équipe d’agence prépare des contenus et échange autour d’un projet client.",
    trainingImage: "/images/sectors/marketing-communication-atelier.webp",
    approach: {
      title: "Moins de reprises entre le brief et la livraison.",
      text: "Les agents réunissent les échanges, les consignes de marque et les données de campagne pour préparer le travail des chefs de projet et de la production.",
      deliverables: [
        "Un brief clair avant de lancer la production.",
        "Les retours client réunis sur la bonne version.",
        "Des bilans préparés à partir des données de campagne.",
      ],
    },
    boundaries:
      "Les données et les consignes restent séparées par client. Votre équipe valide les contenus, les budgets et les publications.",
    training:
      "Chefs de projet et créatifs pratiquent sur les livrables de l’agence : transformer un brief, décliner un message et vérifier une analyse.",
    trainingPractice: [
      "Préparer un brief à partir d’un échange client.",
      "Conserver le ton de chaque marque.",
      "Contrôler les chiffres d’un bilan de campagne.",
    ],
    scenarios: [
      {
        title: "Passage du brief en production",
        output:
          "L’agent transforme les notes et échanges en brief structuré : objectif, livrables, contraintes et questions à confirmer.",
        review:
          "Le chef de projet valide le brief et le périmètre avec le client.",
      },
      {
        title: "Bilan de campagne",
        output:
          "L’agent rassemble les exports des canaux et prépare une synthèse des résultats, avec les périodes et sources utilisées.",
        review:
          "Le responsable vérifie les calculs et formule les recommandations.",
      },
      {
        title: "Consolidation des retours client",
        output:
          "L’agent regroupe les commentaires sur le livrable et fait ressortir les contradictions ou décisions en attente.",
        review: "Le chef de projet arbitre avant la reprise par la production.",
      },
      {
        title: "Déclinaisons éditoriales",
        output:
          "À partir d’un message approuvé, l’agent prépare des variantes pour les formats demandés en respectant les consignes de marque.",
        review:
          "L’équipe créative sélectionne, retravaille et valide avant publication.",
      },
    ],
    guides: ["guide-claude-meta-ads"],
    related: ["marketing", "operations"],
    faq: [
      {
        q: "Comment conserver la voix de chaque client ?",
        a: "Les agents utilisent des consignes et exemples validés propres à chaque marque. Les espaces et accès sont séparés par client, puis testés avec votre équipe.",
      },
      {
        q: "Peut-on commencer par un seul livrable ?",
        a: "Oui. Un bilan mensuel ou la préparation d’un brief permet de tester l’apport de l’agent et l’effort de relecture avant d’étendre l’usage.",
      },
      {
        q: "L’agent gère-t-il les budgets publicitaires ?",
        a: "Les agents présentés préparent la production et l’analyse. Le choix des campagnes, les budgets et la publication restent validés par vos responsables.",
      },
    ],
    heading: "L’IA pour fluidifier la production de votre agence.",
    usesTitle: "Des agents pour les étapes répétitives de la production.",
    cta: {
      title: "Quelle étape ralentit vos livraisons ?",
      description:
        "Partons d’un brief, d’un bilan ou d’un cycle de retours que votre équipe aimerait simplifier.",
    },
  },
  {
    slug: "associations",
    name: "Associations & fédérations",
    group: "organisations",
    audience: "Associations · Fédérations · Fondations · Réseaux",
    title: "IA pour les associations et les fédérations",
    promise: "Moins de suivi dispersé. Plus de place pour votre mission.",
    intro:
      "Adhésions, demandes de subvention et bilans d’activité : Althoce forme vos salariés et bénévoles et conçoit des agents IA adaptés aux moyens de votre association.",
    description:
      "Formation IA et agents sur mesure pour associations : adhésions, demandes de subvention, bilans d’activité et transmission entre salariés et bénévoles.",
    image: "/images/sectors/associations.webp",
    imageAlt:
      "Des membres d’une équipe associative préparent des documents dans un espace de travail partagé.",
    trainingImage: "/images/sectors/associations-atelier.webp",
    approach: {
      title: "Un appui que salariés et bénévoles peuvent partager.",
      text: "Nous choisissons les tâches qui se répètent et les informations déjà disponibles. L’outil reste simple à utiliser et à transmettre quand l’équipe change.",
      deliverables: [
        "Un suivi plus lisible des demandes d’adhésion.",
        "Les pièces et informations réunies pour les financeurs.",
        "Des procédures faciles à retrouver pour les nouveaux bénévoles.",
      ],
    },
    boundaries:
      "Les données des adhérents et bénéficiaires sont limitées aux personnes concernées. Vos responsables valident les chiffres, déclarations et engagements.",
    training:
      "Les exercices partent de votre mission et du niveau des participants. Chacun repart avec des méthodes réutilisables dans les outils de la structure.",
    trainingPractice: [
      "Rédiger un compte rendu fidèle.",
      "Préparer une demande à partir des pièces disponibles.",
      "Documenter une démarche pour le prochain bénévole.",
    ],
    scenarios: [
      {
        title: "Suivi des adhésions",
        output:
          "L’agent rassemble les demandes de renouvellement et pièces manquantes, puis prépare les réponses adaptées à chaque dossier.",
        review:
          "Le responsable confirme les informations avant mise à jour ou envoi.",
      },
      {
        title: "Dossiers de subvention",
        output:
          "L’agent lit les critères du financeur et prépare la liste des pièces ainsi qu’une trame de réponse à partir du projet et du budget.",
        review:
          "L’équipe vérifie l’éligibilité, les montants et les engagements.",
      },
      {
        title: "Bilans d’activité",
        output:
          "L’agent regroupe les remontées des antennes et prépare un bilan relié aux justificatifs, en signalant les chiffres à compléter.",
        review:
          "Les responsables confirment les résultats et les dépenses déclarées.",
      },
      {
        title: "Accueil des bénévoles",
        output:
          "L’agent retrouve les démarches et contacts dans les documents approuvés pour répondre aux questions récurrentes.",
        review:
          "Le référent maintient les informations à jour et traite les situations particulières.",
      },
    ],
    guides: [],
    related: ["operations", "finance"],
    faq: [
      {
        q: "Est-ce adapté à une petite association ?",
        a: "Oui. Une formation et des méthodes partagées peuvent suffire. Nous vérifions qu’un agent connecté apporte assez d’utilité au regard de son coût et de son entretien.",
      },
      {
        q: "Les bénévoles peuvent-ils être formés ?",
        a: "Oui. Le programme, les outils et les exercices sont adaptés au groupe. Nous privilégions des pratiques simples à transmettre.",
      },
      {
        q: "L’IA peut-elle rédiger une demande de subvention ?",
        a: "Elle peut préparer un projet de réponse à partir de vos activités, pièces et budget réels. Votre équipe vérifie et dépose le dossier ; l’agent ne garantit pas l’obtention du financement.",
      },
    ],
    heading: "L’IA pour donner plus de temps à votre mission.",
    usesTitle: "Des agents pour le suivi administratif de votre association.",
    cta: {
      title: "Quelle tâche prend trop de place dans votre mission ?",
      description:
        "Parlons de votre équipe, de ses moyens et d’un premier usage qui lui serait vraiment utile.",
    },
  },
];
export function sectorFaq(d: SectorStory) {
  return d.faq;
}
