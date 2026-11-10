import type { SectorStory } from './expertise';
export type { SectorStory } from './expertise';

export const sectorStories: SectorStory[] = [
  {
    slug: 'comptabilite',
    name: 'Expertise comptable',
    group: 'professions',
    audience: 'Associés · Responsables de mission · Collaborateurs',
    title: 'IA pour les cabinets d’expertise comptable',
    promise: 'Des dossiers prêts pour votre expertise.',
    intro:
      'La pièce manquante, la relance à refaire, le commentaire de gestion à préparer : Althoce forme vos collaborateurs et conçoit des agents IA sur mesure autour du cycle de travail de votre cabinet.',
    description:
      'Formation IA et agents sur mesure pour cabinets comptables : collecte des pièces, préparation de la revue et relation client, avec validation du professionnel.',
    image: '/images/sectors/finance-dossiers.webp',
    imageAlt: 'Des collaborateurs examinent ensemble des dossiers et des documents financiers.',
    trainingImage: '/images/sectors/finance-formation.webp',
    friction: [
      'La collecte déborde sur le temps de révision.',
      'Les informations client restent dans les mails.',
      'Chaque collaborateur réinvente ses propres usages IA.',
    ],
    approach: {
      title: 'Votre méthode de cabinet, reliée à vos outils.',
      text: 'Nous suivons un dossier de la collecte à la restitution. Le logiciel comptable, l’espace documentaire et les échanges client sont étudiés ensemble pour éviter de créer un assistant isolé de la production.',
      deliverables: [
        'Une liste de pièces attendues adaptée au dossier.',
        'Des connexions ou exports autorisés, avec séparation des clients.',
        'Un circuit de revue défini avec les responsables de mission.',
      ],
    },
    boundaries:
      'L’agent prépare et signale. La révision, les écritures définitives, les déclarations et le conseil restent sous la responsabilité des professionnels habilités. Les dossiers clients ne sont utilisés qu’après cadrage des accès, de l’hébergement et de la confidentialité.',
    training:
      'Partir d’un dossier d’exercice, poser une question utile, retrouver le justificatif et corriger une réponse : la formation construit une pratique commune aux collaborateurs, aux responsables de mission et aux associés.',
    trainingPractice: [
      'Préparer une relance de pièces précise.',
      'Vérifier un commentaire de gestion contre les chiffres.',
      'Partager des consignes réutilisables au cabinet.',
    ],
    scenarios: [
      {
        title: 'Relancer les bonnes pièces',
        situation:
          'Le client reçoit plusieurs demandes alors qu’une partie des justificatifs est déjà arrivée.',
        input: 'Liste des pièces attendues, documents reçus et historique des demandes.',
        output:
          'Un état des manquants par dossier et un brouillon de relance qui tient compte des dernières réponses.',
        review:
          'Le collaborateur vérifie les doublons, les périodes et les pièces réellement nécessaires avant l’envoi.',
      },
      {
        title: 'Préparer le dossier de révision',
        situation:
          'Avant la revue, il faut rapprocher les exports comptables des justificatifs disponibles.',
        input: 'Exports autorisés, pièces et grille de contrôle du cabinet.',
        output:
          'Une liste d’écarts documentés, avec le lien vers les pièces et les informations incertaines.',
        review:
          'Le responsable de mission apprécie les écarts et décide des contrôles ou corrections. Un signalement ne vaut pas conclusion comptable.',
      },
      {
        title: 'Préparer la restitution au client',
        situation: 'Les chiffres sont disponibles, mais les explications restent à construire.',
        input: 'États validés, comparatif de période et contexte communiqué par le client.',
        output:
          'Un projet de note avec variations, sources chiffrées et questions à poser pendant le rendez-vous.',
        review:
          'L’expert-comptable vérifie les calculs et distingue ce qui est constaté de ce qui reste à expliquer.',
      },
      {
        title: 'Retrouver la réponse dans le dossier',
        situation:
          'Une question client oblige à rechercher le dernier échange et plusieurs documents.',
        input: 'Documents et échanges autorisés du seul dossier concerné.',
        output:
          'Les passages utiles et un projet de réponse, ou une demande de précision si les sources manquent.',
        review:
          'Le collaborateur contrôle la période, la version et la portée du conseil avant de répondre.',
      },
    ],
    guides: ['12-cas-usage-experts-comptables', 'guide-claude-pennylane', '7-chantiers-ia-cabinet'],
    related: ['finance', 'operations', 'service-client'],
    caseSlug: 'cabinet-comptable-lyon',
    caseLabel: 'Un projet dans un cabinet comptable à Lyon',
    faq: [
      {
        q: 'L’IA peut-elle travailler avec notre logiciel comptable ?',
        a: 'Nous examinons les accès, les exports et les possibilités de connexion de votre environnement. Un essai peut commencer sur un export contrôlé. La présence d’un outil dans un guide ne garantit pas sa compatibilité avec votre configuration.',
      },
      {
        q: 'Faut-il équiper tout le cabinet dès le départ ?',
        a: 'Non. Une équipe et un type de dossier permettent de tester la méthode, la qualité des réponses et le travail de vérification. L’extension se décide après ce retour, avec des règles partagées.',
      },
      {
        q: 'Quelle différence avec un assistant de direction financière ?',
        a: 'Le cabinet gère plusieurs clients, des lettres de mission et une production comptable. La direction financière pilote les données d’une entreprise. Les accès, les étapes de revue et les livrables doivent donc être conçus différemment.',
      },
      {
        q: 'Peut-on commencer par une formation IA comptable ?',
        a: 'Oui. La formation peut précéder tout projet de connexion. Les exercices utilisent des données fictives, anonymisées ou expressément autorisées. Un prototype pédagogique ne constitue pas un déploiement en production.',
      },
    ],
  },
  {
    slug: 'droit',
    name: 'Droit & professions juridiques',
    group: 'professions',
    audience: 'Cabinets d’avocats · Études notariales',
    title: 'IA pour les cabinets d’avocats et les études notariales',
    promise: 'Préparer les pièces. Préserver votre jugement.',
    intro:
      'Une chronologie à reconstituer, une version à comparer, une pièce à réclamer : Althoce adapte la formation et les agents IA au travail du cabinet ou de l’étude, avec vos règles de confidentialité et de revue.',
    description:
      'IA pour avocats et notaires : formation, organisation des pièces et préparation documentaire sur mesure, avec sources vérifiables et contrôle du professionnel.',
    image: '/images/sectors/droit.webp',
    imageAlt: 'Des professionnels échangent autour de documents dans un bureau juridique.',
    trainingImage: '/images/sectors/droit-atelier.webp',
    friction: [
      'Les pièces arrivent par plusieurs canaux.',
      'Une version obsolète peut fausser la revue.',
      'La recherche documentaire prend le pas sur l’analyse.',
    ],
    approach: {
      title: 'Un assistant qui respecte le dossier et son périmètre.',
      text: 'Nous partons du circuit d’un dossier : ouverture, collecte, préparation, revue et restitution. L’accès aux documents est défini par dossier et par rôle, avec des sources que le professionnel peut consulter.',
      deliverables: [
        'Une organisation des pièces et versions de référence.',
        'Des consignes de préparation propres au cabinet ou à l’étude.',
        'Des résultats reliés aux documents, avec les points à vérifier.',
      ],
    },
    boundaries:
      'Le secret professionnel, les droits d’accès et les conditions d’utilisation des outils sont examinés avant de traiter des dossiers réels. Une réponse plausible ne suffit pas : références, dates et analyse restent vérifiées par le professionnel.',
    training:
      'Les exercices distinguent la lecture d’une pièce, la comparaison de versions et la rédaction d’un projet. L’équipe apprend aussi à repérer une référence inventée et à écarter les informations qui ne doivent pas entrer dans l’outil.',
    trainingPractice: [
      'Construire une chronologie à partir des pièces.',
      'Comparer deux versions sans perdre leur provenance.',
      'Vérifier les références avant de reprendre un texte.',
    ],
    scenarios: [
      {
        title: 'Reconstituer une chronologie',
        situation:
          'Le dossier contentieux rassemble des mails et pièces dans un ordre difficile à exploiter.',
        input: 'Pièces numérotées, échanges autorisés et consignes du responsable de dossier.',
        output: 'Une chronologie de travail avec dates, faits rapportés et renvois aux pièces.',
        review:
          'L’avocat contrôle l’attribution des faits et leur portée. Une date absente ou contradictoire reste signalée.',
      },
      {
        title: 'Préparer la collecte en étude',
        situation:
          'Un dossier avance, mais une pièce demandée ou sa version actualisée manque encore.',
        input: 'Checklist validée par l’étude, pièces reçues et historique des demandes.',
        output: 'Un état de complétude et un projet de demande ciblée au bon interlocuteur.',
        review:
          'Le notaire ou le collaborateur habilité vérifie la nécessité et la validité des pièces. L’IA ne certifie pas le dossier.',
      },
      {
        title: 'Comparer les versions d’un contrat',
        situation:
          'Les retours de plusieurs interlocuteurs rendent les modifications difficiles à suivre.',
        input: 'Versions datées et grille de lecture retenue pour le dossier.',
        output: 'Un tableau des modifications, avec passages d’origine et questions à arbitrer.',
        review:
          'Le professionnel interprète les clauses et valide la position à défendre ; aucun avis de conformité automatique.',
      },
      {
        title: 'Préparer le prochain échange client',
        situation:
          'Avant un rendez-vous, il faut retrouver les demandes en attente et les dernières avancées.',
        input: 'Échanges, notes et pièces du dossier auxquelles l’utilisateur a accès.',
        output:
          'Une note de préparation séparant faits documentés, questions ouvertes et actions à confirmer.',
        review:
          'Le responsable vérifie les échéances et les engagements avant toute communication au client.',
      },
    ],
    guides: ['claude-droit-10-cas-usage'],
    related: ['juridique', 'operations', 'telephonique'],
    caseSlug: 'cabinet-avocats-agent-ia-telephonique',
    caseLabel: 'L’accueil téléphonique d’un cabinet d’avocats',
    faq: [
      {
        q: 'La page concerne-t-elle aussi les directions juridiques d’entreprise ?',
        a: 'Les besoins de lecture et de comparaison se recoupent. Une page métier distincte détaille la revue contractuelle, les circuits internes et le suivi des engagements pour les équipes juridiques d’entreprise.',
      },
      {
        q: 'Comment démarrer avec des dossiers confidentiels ?',
        a: 'Le premier exercice peut utiliser des documents fictifs ou publics. Avant des données réelles, nous cadrons avec vous les accès, la conservation, l’hébergement et les conditions des outils au regard de vos obligations professionnelles.',
      },
      {
        q: 'L’agent peut-il effectuer seul une recherche juridique ?',
        a: 'Il peut préparer une recherche dans des sources autorisées. L’actualité, l’existence et la portée des références doivent être contrôlées par un professionnel. Le dispositif doit savoir signaler une source absente plutôt que compléter au hasard.',
      },
      {
        q: 'Les formations sont-elles adaptées aux avocats et aux notaires ?',
        a: 'Le programme et les exercices sont définis selon les tâches du groupe. La collecte en étude, la préparation contentieuse et la revue de contrats ne sont pas traitées comme un seul métier.',
      },
    ],
  },
  {
    slug: 'medical',
    name: 'Santé & médical',
    group: 'professions',
    audience: 'Cabinets et centres de santé · Cliniques et établissements',
    title: 'IA pour les cabinets médicaux et les établissements de santé',
    promise: 'Alléger l’organisation autour du soin.',
    intro:
      'Althoce vous accompagne sur les tâches administratives et documentaires : préparer les demandes, retrouver les procédures et coordonner les équipes. Le point de départ dépend de votre structure et des données concernées.',
    description:
      'Formation IA et accompagnement sur mesure pour cabinets médicaux et établissements de santé : organisation administrative, documentation et contrôle des accès.',
    image: '/images/sectors/medical.webp',
    imageAlt:
      'Une coordinatrice et un responsable administratif travaillent dans le bureau d’un centre de santé.',
    trainingImage: '/images/services/formation.webp',
    friction: [
      'Le secrétariat cherche la même information plusieurs fois.',
      'Les consignes évoluent sans être mises à jour partout.',
      'La préparation des dossiers qualité mobilise plusieurs services.',
    ],
    approach: {
      title: 'Un périmètre administratif, défini avec vos équipes.',
      text: 'Nous cartographions la demande, les documents réellement nécessaires et la personne qui doit reprendre la main. Un premier usage peut fonctionner sur des procédures sans données de patients, avant d’envisager un périmètre plus sensible.',
      deliverables: [
        'Des sources de référence validées et datées.',
        'Des droits d’accès liés aux rôles et aux services.',
        'Un parcours de reprise humaine pour les demandes hors cadre.',
      ],
    },
    boundaries:
      'Les usages présentés ne réalisent ni diagnostic, ni triage clinique, ni recommandation de traitement. Tout traitement de données de santé nécessite une analyse spécifique des responsabilités, des accès et de l’hébergement, notamment de l’applicabilité du cadre HDS. Un hébergement en France ne suffit pas à lui seul.',
    paths: [
      {
        id: 'cabinets',
        title: 'Cabinets, maisons et centres de santé',
        text: 'Avec le secrétariat et la coordination : organiser les demandes administratives et partager les consignes pratiques approuvées.',
        result: 'Un dossier de demande complet pour la personne qui le traite.',
      },
      {
        id: 'etablissements',
        title: 'Cliniques et établissements',
        text: 'Avec la direction, la DSI et la qualité : retrouver les procédures en vigueur et préparer la coordination entre services.',
        result: 'Une documentation traçable pour préparer les contrôles et les actions.',
      },
    ],
    training:
      'La formation part des tâches du secrétariat, de la coordination ou des fonctions support. Les exercices utilisent des documents fictifs ou autorisés et apprennent à reconnaître ce qui nécessite un professionnel de santé ou un référent interne.',
    trainingPractice: [
      'Reformuler une consigne administrative validée.',
      'Retrouver la bonne version d’une procédure.',
      'Écarter les données inutiles et les demandes cliniques.',
    ],
    scenarios: [
      {
        title: 'Préparer une demande au secrétariat',
        situation:
          'Plusieurs échanges sont nécessaires pour comprendre une demande administrative.',
        input: 'Motif administratif et informations minimales définies par la structure.',
        output:
          'Une synthèse structurée et la liste des informations à compléter pour le secrétariat.',
        review:
          'Le secrétariat traite la demande ; toute question clinique sort du périmètre de l’assistant.',
      },
      {
        title: 'Retrouver les consignes pratiques',
        situation: 'Horaires, documents administratifs et modalités d’accueil sont dispersés.',
        input: 'Consignes d’accueil approuvées, avec date et responsable de mise à jour.',
        output: 'Un projet de réponse renvoyant à la consigne en vigueur.',
        review:
          'Le personnel confirme la réponse. L’assistant ne déduit aucune consigne de soin à partir d’une situation personnelle.',
      },
      {
        title: 'Préparer un dossier qualité',
        situation:
          'L’équipe qualité doit rassembler les preuves et versions applicables avant une revue.',
        input: 'Référentiel interne, procédures validées et justificatifs autorisés.',
        output:
          'Une table de correspondance entre exigences, documents disponibles et éléments manquants.',
        review:
          'Le responsable qualité apprécie les preuves et valide les conclusions. Aucun statut de conformité n’est attribué automatiquement.',
      },
      {
        title: 'Suivre les actions entre services',
        situation: 'Les suites d’une réunion se perdent entre les comptes rendus et les échanges.',
        input: 'Compte rendu validé et liste des responsables concernés.',
        output: 'Une liste d’actions, de points ouverts et d’échéances à confirmer.',
        review:
          'Les responsables valident l’attribution et le calendrier. Les urgences médicales ne transitent pas par ce dispositif.',
      },
    ],
    guides: [],
    related: ['operations', 'telephonique'],
    faq: [
      {
        q: 'Proposez-vous une IA qui conseille les patients ?',
        a: 'Les usages de cette page concernent l’organisation administrative et documentaire. Ils ne couvrent pas le diagnostic, le triage clinique ni les recommandations thérapeutiques. Les échanges de soin restent pris en charge par les professionnels.',
      },
      {
        q: 'Peut-on commencer sans utiliser de données de santé ?',
        a: 'Oui. Une base de procédures internes ou des exercices sur documents fictifs permettent d’évaluer un usage. Cela n’exonère pas de cadrer les accès et les données personnelles éventuellement présentes.',
      },
      {
        q: 'L’hébergement en France garantit-il un cadre adapté ?',
        a: 'Non. Le lieu d’hébergement est un élément parmi d’autres. La nature des données, les responsabilités, les accès et l’applicabilité des obligations d’hébergement de données de santé doivent être examinés avant le projet.',
      },
      {
        q: 'Le parcours est-il le même pour un cabinet et une clinique ?',
        a: 'Non. Le cabinet privilégie généralement la coordination avec le secrétariat. Dans un établissement, le périmètre se définit aussi avec les responsables qualité, la DSI et les services concernés. Les exemples sont à adapter après étude.',
      },
    ],
  },
  {
    slug: 'assurance-patrimoine',
    name: 'Assurance, courtage & patrimoine',
    group: 'professions',
    audience: 'Cabinets de courtage · Conseil en patrimoine · Équipes de gestion',
    title: 'IA pour l’assurance, le courtage et le patrimoine',
    promise: 'Préparer les dossiers. Consacrer l’échange au client.',
    intro:
      'Recueillir les pièces, retrouver le contexte et préparer les rendez-vous : Althoce étudie avec votre cabinet des usages IA administratifs sur mesure, en séparant la préparation du conseil et de la décision.',
    description:
      'Formation IA et agents sur mesure pour le courtage et le patrimoine : collecte documentaire, préparation des rendez-vous et suivi administratif des dossiers.',
    image: '/images/services/coaching-dirigeant.webp',
    imageAlt: 'Deux professionnels préparent un échange autour de documents de travail.',
    trainingImage: '/images/sectors/finance-formation.webp',
    friction: [
      'Le rendez-vous commence par retrouver le dossier.',
      'Les pièces reçues ne correspondent pas toujours à la dernière demande.',
      'Les échéances sont suivies dans plusieurs outils.',
    ],
    approach: {
      title: 'Structurer la préparation, sans automatiser le conseil.',
      text: 'Le travail commence par votre circuit documentaire, vos modèles et les actes réservés aux personnes habilitées. Chaque connexion et chaque usage sont examinés avec vos responsables, selon votre activité et vos obligations.',
      deliverables: [
        'Une checklist documentaire définie par votre cabinet.',
        'Une séparation entre faits recueillis et éléments à confirmer.',
        'Un suivi des demandes et échéances avec validation.',
      ],
    },
    boundaries:
      'L’IA ne choisit pas un contrat, un investissement ou une couverture à la place du professionnel. Elle n’attribue pas de profil client et ne détermine pas l’adéquation d’un conseil. Les dossiers sensibles et les obligations applicables sont examinés avant tout usage réel.',
    training:
      'Apprendre à préparer une synthèse fidèle à partir de sources autorisées, à repérer les informations anciennes et à distinguer une reformulation d’un conseil. Le contenu varie selon l’activité de courtage ou de patrimoine.',
    trainingPractice: [
      'Préparer la trame d’un rendez-vous.',
      'Vérifier dates et versions des pièces.',
      'Identifier les éléments à faire confirmer au client.',
    ],
    scenarios: [
      {
        title: 'Préparer la collecte documentaire',
        situation: 'Le dossier reste en attente alors que plusieurs échanges ont déjà eu lieu.',
        input: 'Checklist approuvée, pièces reçues et demandes précédentes.',
        output: 'Une liste des pièces manquantes ou à actualiser, avec un brouillon de demande.',
        review:
          'Le gestionnaire vérifie la pertinence de la collecte et la nécessité de chaque donnée.',
      },
      {
        title: 'Rassembler le contexte avant le rendez-vous',
        situation:
          'Le conseiller doit relire l’historique pour retrouver les questions restées ouvertes.',
        input: 'Notes validées et documents autorisés du dossier.',
        output: 'Une fiche factuelle avec sources, dates et questions à confirmer.',
        review:
          'Le professionnel actualise les informations avec le client et conduit seul l’analyse et le conseil.',
      },
      {
        title: 'Suivre les échéances du portefeuille',
        situation: 'Les renouvellements et demandes en attente sont dispersés.',
        input: 'Dates contractuelles vérifiées et état des dossiers dans vos outils.',
        output: 'Une vue des dossiers à revoir et des projets de rappels administratifs.',
        review:
          'L’équipe contrôle les dates, le destinataire et le contenu avant tout envoi ; aucun renouvellement automatique.',
      },
    ],
    guides: [],
    related: ['operations', 'service-client', 'commercial'],
    faq: [
      {
        q: 'L’agent peut-il recommander un produit financier ou un contrat ?',
        a: 'Ce n’est pas le périmètre présenté. Les agents préparent les informations et le suivi administratif. L’analyse du besoin, l’adéquation du conseil et la recommandation restent du ressort des professionnels habilités.',
      },
      {
        q: 'Les usages sont-ils identiques en courtage et en patrimoine ?',
        a: 'Non. Les pièces, les interlocuteurs et les obligations diffèrent. Les exemples de cette page servent à cadrer une première conversation, pas à présumer qu’un même agent convient à toutes les activités.',
      },
      {
        q: 'Comment choisir un premier usage ?',
        a: 'Nous recherchons une tâche de préparation récurrente, des sources accessibles et un contrôle humain clair. Un essai sur données fictives ou autorisées précède toute décision de déploiement.',
      },
    ],
  },
  {
    slug: 'immobilier',
    name: 'Immobilier',
    group: 'professions',
    audience: 'Transaction · Gestion locative · Syndics',
    title: 'IA pour les agences immobilières et les syndics',
    promise: 'Un dossier suivi. Un interlocuteur disponible.',
    intro:
      'Un dossier de vente incomplet, une demande locataire sans suite, des pièces d’assemblée à réunir : Althoce conçoit vos agents IA autour des dossiers, des immeubles et des équipes qui les suivent.',
    description:
      'Agents IA et formation pour l’immobilier : dossiers de transaction, demandes locatives et préparation des assemblées, adaptés à vos outils et validations.',
    image: '/images/sectors/immobilier.webp',
    imageAlt: 'Des professionnels de l’immobilier examinent un dossier dans leur agence.',
    trainingImage: '/images/sectors/immobilier-atelier.webp',
    friction: [
      'Les pièces d’un même bien arrivent en plusieurs fois.',
      'Une demande locataire est transmise sans son historique.',
      'La préparation des assemblées multiplie les recherches.',
    ],
    approach: {
      title: 'Relier les échanges au bon bien et au bon dossier.',
      text: 'Nous distinguons la transaction, la gestion locative et le syndic. L’agent s’appuie sur vos références de dossier, vos procédures et les accès autorisés, au lieu de mélanger toutes les demandes dans une même boîte.',
      deliverables: [
        'Un rattachement des demandes aux dossiers à vérifier.',
        'Des checklists propres à chaque étape de gestion.',
        'Des transmissions avec historique et responsable identifié.',
      ],
    },
    boundaries:
      'Les décisions de sélection de locataires, de prix, d’engagement contractuel ou de dépenses restent humaines. Les dossiers personnels sont accessibles aux seules personnes habilitées ; l’agent ne déduit pas un profil de solvabilité.',
    training:
      'Les négociateurs, gestionnaires et équipes de syndic travaillent sur leurs propres situations : préparer une réponse, vérifier une pièce et transmettre un dossier. Les exercices intègrent la confidentialité et la distinction entre information vérifiée et supposition.',
    trainingPractice: [
      'Préparer une visite à partir d’une fiche bien validée.',
      'Résumer l’historique d’une demande locataire.',
      'Construire une synthèse documentaire pour une assemblée.',
    ],
    scenarios: [
      {
        title: 'Préparer un dossier de transaction',
        situation: 'Le négociateur reprend plusieurs fois la liste des pièces avec le vendeur.',
        input: 'Checklist de l’agence, documents reçus et informations du bien.',
        output: 'Un état des manquants et des incohérences à contrôler, relié aux pièces.',
        review:
          'Le professionnel vérifie validité et portée des documents avant toute communication engageante.',
      },
      {
        title: 'Orienter une demande de gestion',
        situation: 'Un locataire signale un problème dont une partie de l’historique existe déjà.',
        input: 'Demande, référence du logement et interventions autorisées dans le dossier.',
        output:
          'Une fiche de transmission avec faits rapportés, historique et informations à compléter.',
        review:
          'Le gestionnaire apprécie l’urgence et décide de l’intervention. Une urgence ne dépend pas d’une interprétation automatique.',
      },
      {
        title: 'Préparer les documents d’assemblée',
        situation:
          'Devis, échanges et pièces doivent être réunis pour préparer les sujets à examiner.',
        input: 'Documents sélectionnés et consignes du gestionnaire de copropriété.',
        output: 'Un dossier de travail classé par sujet, avec versions et points ouverts.',
        review:
          'Le syndic vérifie les documents, les résolutions et les formalités. L’outil ne décide ni de l’ordre du jour ni de la régularité de l’assemblée.',
      },
    ],
    guides: ['claude-data-gouv-20-prompts'],
    related: ['commercial', 'service-client', 'operations'],
    faq: [
      {
        q: 'Pouvez-vous travailler avec notre logiciel immobilier ?',
        a: 'Nous vérifions les possibilités d’accès, d’export et de connexion à votre configuration. Les références des biens et dossiers doivent être fiables pour éviter de rapprocher des informations sans lien.',
      },
      {
        q: 'L’IA peut-elle sélectionner les candidats locataires ?',
        a: 'Les scénarios proposés ne comprennent pas de sélection ou de notation autonome. Ils portent sur la préparation documentaire ; les décisions et critères restent examinés par les professionnels.',
      },
      {
        q: 'Le guide sur les données publiques sert-il à estimer un bien ?',
        a: 'Il aide à explorer des sources comme les valeurs foncières. Une donnée publique doit être vérifiée et contextualisée. Elle ne remplace ni la connaissance du bien ni l’appréciation professionnelle de sa valeur.',
      },
    ],
  },
  {
    slug: 'commerce-distribution',
    name: 'Commerce',
    group: 'organisations',
    audience: 'Entreprises B2B · Négoce · Développement commercial',
    title: 'IA pour le commerce et le négoce',
    promise: 'Plus de temps pour faire avancer vos affaires.',
    intro:
      'Prospecter les bons comptes, préparer une offre et reprendre un devis au bon moment : Althoce relie votre travail commercial aux informations disponibles dans vos outils, avec des agents IA conçus pour votre cycle de vente.',
    description:
      'IA pour le commerce B2B et le négoce : prospection, devis, relances et appels d’offres. Formation et agents sur mesure connectés à votre organisation commerciale.',
    image: '/images/sectors/commerce-distribution.webp',
    imageAlt: 'Une équipe commerciale prépare ses dossiers et ses échanges clients au bureau.',
    trainingImage: '/images/sectors/commerce-distribution-atelier.webp',
    friction: [
      'La prospection manque de contexte sur les comptes.',
      'Le devis envoyé disparaît du suivi.',
      'Répondre à une consultation mobilise les mêmes documents à chaque fois.',
    ],
    approach: {
      title: 'Votre cycle de vente devient le fil conducteur.',
      text: 'Nous partons de vos segments clients, de vos étapes de vente et des informations qui manquent pour agir. Le CRM, la messagerie et les données d’offre sont reliés selon les accès disponibles, avec des points de validation explicites.',
      deliverables: [
        'Une préparation des comptes selon vos critères commerciaux.',
        'Des propositions de suivi liées à l’historique réel.',
        'Un dossier d’offre alimenté par vos références validées.',
      ],
    },
    boundaries:
      'L’équipe garde la qualification finale, les prix, les remises et les engagements. Les règles de prospection se définissent par canal et par public. Aucun envoi massif, dépôt d’offre ou engagement client n’est présumé automatique.',
    training:
      'Vos commerciaux s’exercent à préparer un rendez-vous, enrichir une note de suivi et structurer une réponse à partir d’informations vérifiées. Le but : une méthode partagée, qui renforce la relation plutôt que d’ajouter des messages génériques.',
    trainingPractice: [
      'Construire une fiche de préparation de compte.',
      'Transformer des notes en prochaine action proposée.',
      'Relire une réponse aux exigences d’une consultation.',
    ],
    scenarios: [
      {
        title: 'Prospecter avec une raison de prendre contact',
        situation:
          'Les listes sont longues, mais les commerciaux manquent d’éléments pour engager l’échange.',
        input: 'Critères de ciblage, historique CRM et sources professionnelles autorisées.',
        output:
          'Une fiche compte, des informations sourcées et un angle de prise de contact à discuter.',
        review:
          'Le commercial vérifie la pertinence du compte, les coordonnées et les règles de contact avant de solliciter.',
      },
      {
        title: 'Reprendre un devis avec le bon contexte',
        situation: 'Une proposition attend une réponse, sans visibilité sur ce qui bloque.',
        input: 'Devis, échanges client et prochaine étape convenue.',
        output:
          'Une synthèse de l’opportunité et un projet de relance centré sur les questions ouvertes.',
        review:
          'Le commercial confirme disponibilité, prix et engagements. L’agent ne propose pas une remise de sa propre initiative.',
      },
      {
        title: 'Préparer une réponse à un appel d’offres',
        situation:
          'Une consultation publique ou privée demande de retrouver les exigences et de réunir les preuves.',
        input:
          'Dossier de consultation, critères, échéances et bibliothèque de références validées.',
        output:
          'Une matrice exigence, réponse, justificatif et responsable ; les pièces manquantes et un projet de réponse ou de mémoire technique, selon le dossier.',
        review:
          'L’équipe décide de répondre, vérifie les exigences, les prix et les capacités annoncées. Les responsables valident et déposent l’offre. Aucune référence ou certification n’est inventée.',
      },
      {
        title: 'Passer le relais à l’administration des ventes',
        situation:
          'L’accord est obtenu, mais la commande arrive avec des informations incomplètes.',
        input: 'Offre acceptée, échanges et champs attendus par l’ADV.',
        output:
          'Une fiche de passage de relais avec références, conditions convenues et éléments à confirmer.',
        review:
          'L’ADV contrôle l’accord et les données avant la saisie ou la confirmation de commande.',
      },
    ],
    guides: [],
    related: ['commercial', 'operations', 'service-client'],
    caseSlug: 'negoce-vins-bordelais-agent-ia-sdr',
    caseLabel: 'Un projet de prospection dans le négoce de vins bordelais',
    faq: [
      {
        q: 'Intervenez-vous uniquement sur la prospection ?',
        a: 'Le périmètre peut couvrir la préparation des comptes, le suivi des opportunités, les consultations ou le passage de relais à l’ADV. Nous choisissons le processus qui bloque votre cycle de vente, plutôt que de tout automatiser en même temps.',
      },
      {
        q: 'Pouvez-vous aider à répondre aux appels d’offres ?',
        a: 'Nous pouvons étudier la lecture du dossier, la préparation d’une matrice d’exigences et l’assemblage de contenus validés. La décision de répondre, les engagements, la vérification finale et le dépôt restent humains. Les règles varient selon la consultation.',
      },
      {
        q: 'L’agent peut-il prospecter automatiquement ?',
        a: 'Le premier périmètre peut se limiter à la préparation. Tout envoi doit être défini explicitement, avec les règles adaptées au canal, au public, aux oppositions et à votre organisation. L’autonomie n’est pas une condition du projet.',
      },
      {
        q: 'Faut-il changer de CRM ?',
        a: 'Nous étudions d’abord votre environnement. Une connexion autorisée ou un export contrôlé peut suffire à un premier essai. La faisabilité est vérifiée avant de promettre une intégration.',
      },
    ],
  },
  {
    slug: 'industrie',
    name: 'Industrie',
    group: 'organisations',
    audience: 'PME industrielles · Achats · Qualité · Fonctions support',
    title: 'IA pour les PME industrielles',
    promise: 'Le bon document, pour la bonne décision.',
    intro:
      'Devis fournisseurs difficiles à comparer, versions de procédures dispersées, dossiers qualité à compléter : Althoce travaille avec vos équipes sur ces tâches documentaires, avant de concevoir un agent ou une automatisation sur mesure.',
    description:
      'IA pour l’industrie : comparaison d’offres fournisseurs, documentation qualité et transmission des actions. Formation et agents adaptés aux processus de votre PME.',
    image: '/images/sectors/industrie.webp',
    imageAlt:
      'Des collègues d’une entreprise industrielle examinent des dossiers techniques au bureau.',
    trainingImage: '/images/sectors/industrie-atelier.webp',
    friction: [
      'Les offres ne présentent pas le même périmètre.',
      'Une ancienne procédure continue de circuler.',
      'Les actions de revue restent dans les comptes rendus.',
    ],
    approach: {
      title: 'Partir des références, des versions et des responsabilités.',
      text: 'Nous observons comment un document entre, est validé et devient une référence. L’agent doit retrouver la bonne source, rendre visibles les écarts et savoir s’arrêter quand une donnée manque.',
      deliverables: [
        'Un corpus documentaire autorisé, daté et versionné.',
        'Une grille de comparaison définie avec les acheteurs ou la qualité.',
        'Une file d’exceptions à reprendre par les responsables.',
      ],
    },
    boundaries:
      'Le périmètre présenté concerne les fonctions documentaires et support. Il n’inclut ni commande autonome de machines, ni consigne de sécurité générée, ni libération de produit. Les décisions qualité et les engagements d’achat restent validés.',
    training:
      'Vos acheteurs et responsables de service pratiquent sur des dossiers représentatifs : comparer, retrouver une référence et préparer un compte rendu. Une réponse n’est utilisable que si sa source et sa version peuvent être vérifiées.',
    trainingPractice: [
      'Comparer des devis à périmètre équivalent.',
      'Retrouver une procédure et sa version applicable.',
      'Distinguer un constat d’une cause supposée.',
    ],
    scenarios: [
      {
        title: 'Comparer les offres fournisseurs',
        situation: 'Les devis mélangent unités, options, transport et délais.',
        input: 'Devis, cahier des charges et critères de comparaison validés.',
        output:
          'Une grille qui sépare prix, périmètre, exclusions, délais et informations absentes.',
        review:
          'L’acheteur vérifie les conversions et conditions, puis décide de la négociation et du choix.',
      },
      {
        title: 'Préparer une revue de non-conformité',
        situation: 'Photos, constats et échanges sont répartis entre plusieurs dossiers.',
        input: 'Constats et documents autorisés, sans supposer leur cause.',
        output:
          'Une synthèse chronologique avec éléments disponibles, manquants et actions déjà enregistrées.',
        review:
          'L’équipe qualité établit les causes, les mesures et les décisions de disposition. L’agent ne conclut pas à la conformité.',
      },
      {
        title: 'Retrouver une procédure en vigueur',
        situation:
          'Les équipes cherchent une information dans plusieurs versions du même document.',
        input: 'Référentiel approuvé, versions et règles d’accès.',
        output:
          'Le passage pertinent avec son document, sa version et sa date, ou un signalement si la référence manque.',
        review:
          'Le responsable confirme l’applicabilité avant utilisation. Aucune consigne de sécurité n’est improvisée.',
      },
      {
        title: 'Préparer une consultation commerciale',
        situation:
          'Une demande industrielle exige de réunir capacités, références et réponses techniques.',
        input:
          'Exigences du client et éléments approuvés par les équipes techniques et commerciales.',
        output: 'Une matrice des exigences couvertes et des questions encore ouvertes.',
        review:
          'Les responsables valident la faisabilité, les capacités et les engagements avant toute offre.',
      },
    ],
    guides: ['copilot-8-cas-usage'],
    related: ['achats', 'operations', 'commercial'],
    caseSlug: 'eti-industrielle-agent-ia-achats',
    caseLabel: 'La préparation des achats dans une ETI industrielle',
    faq: [
      {
        q: 'Intervenez-vous sur les machines ou les systèmes critiques ?',
        a: 'Les usages de cette page portent sur la préparation documentaire et la coordination. Ils ne proposent pas de commande autonome, de modification des paramètres machine ou de décision de sécurité.',
      },
      {
        q: 'Comment traiter les différentes versions des documents ?',
        a: 'Le cadrage identifie la source de référence et les règles de version. Le résultat doit permettre de retrouver le document utilisé. Si la version applicable manque ou est ambiguë, le cas est transmis pour vérification.',
      },
      {
        q: 'Peut-on commencer avec des fichiers plutôt qu’une connexion à l’ERP ?',
        a: 'Oui, si les exports et leur usage sont autorisés. Cela permet d’évaluer un premier scénario. Une connexion en continu demande ensuite de vérifier les droits, la fréquence de mise à jour et les contrôles.',
      },
    ],
  },
  {
    slug: 'marketing-communication',
    name: 'Agences marketing & communication',
    group: 'organisations',
    audience: 'Dirigeants d’agence · Chefs de projet · Équipes de production',
    title: 'IA pour les agences marketing et communication',
    promise: 'Garder du temps pour les idées et les clients.',
    intro:
      'Un brief incomplet, un bilan à reconstruire, des retours client éparpillés : Althoce conçoit vos usages IA autour de la production multi-clients, de vos méthodes et des validations qui font la qualité de vos livrables.',
    description:
      'Formation IA et agents sur mesure pour agences marketing : briefs, bilans de campagne, production multi-clients et circuits de validation des livrables.',
    image: '/images/sectors/marketing-communication.webp',
    imageAlt: 'Une équipe d’agence prépare des contenus et échange autour d’un projet client.',
    trainingImage: '/images/sectors/marketing-communication-atelier.webp',
    friction: [
      'Le brief change entre le commercial et la production.',
      'Le bilan mensuel recommence par les exports.',
      'Les retours se répartissent entre mails et documents.',
    ],
    approach: {
      title: 'Une méthode d’agence, des contextes clients séparés.',
      text: 'Nous distinguons vos standards de production des consignes propres à chaque client. Les données de campagne, contenus approuvés et retours restent rattachés au bon compte, avec les droits et validations nécessaires.',
      deliverables: [
        'Un brief de référence avec objectifs et éléments manquants.',
        'Des bibliothèques de ton et de messages propres à chaque client.',
        'Un circuit de revue avant restitution ou publication.',
      ],
    },
    boundaries:
      'Les données et contenus d’un client ne doivent pas alimenter les livrables d’un autre. L’équipe vérifie les sources, les droits d’utilisation et les allégations. La stratégie, les budgets et les publications restent validés.',
    training:
      'Les chefs de projet et créatifs s’exercent sur un même parcours : clarifier un brief, préparer une première version et organiser la revue. La formation conserve une place au jugement éditorial, à la vérification et aux choix créatifs.',
    trainingPractice: [
      'Transformer un échange en brief exploitable.',
      'Vérifier une analyse contre les données de campagne.',
      'Décliner un message sans mélanger les voix de marque.',
    ],
    scenarios: [
      {
        title: 'Faire passer le brief en production',
        situation:
          'Le chef de projet doit recomposer l’objectif à partir des échanges commerciaux.',
        input: 'Notes approuvées, proposition acceptée et modèle de brief de l’agence.',
        output: 'Un brief structuré avec livrables, contraintes et questions à faire confirmer.',
        review:
          'Le chef de projet valide le périmètre avec le client. L’agent n’ajoute pas de livrable à l’engagement.',
      },
      {
        title: 'Préparer le bilan de campagne',
        situation: 'Les exports de plusieurs canaux ne couvrent pas toujours les mêmes périodes.',
        input: 'Exports autorisés, définitions des indicateurs et objectifs convenus.',
        output: 'Une synthèse des résultats avec périodes, sources et écarts à examiner.',
        review:
          'Le responsable contrôle les calculs et l’attribution. Une corrélation ne devient pas une explication certaine.',
      },
      {
        title: 'Consolider les retours client',
        situation: 'Les commentaires portent sur différentes versions du même livrable.',
        input: 'Version de référence et retours associés à leurs auteurs.',
        output:
          'Une liste de modifications regroupées, avec contradictions et arbitrages à demander.',
        review:
          'Le chef de projet confirme la version et les décisions avant la reprise par la production.',
      },
      {
        title: 'Préparer les déclinaisons éditoriales',
        situation: 'Une idée validée doit être adaptée à plusieurs formats.',
        input: 'Message approuvé, charte éditoriale et contraintes des canaux.',
        output:
          'Des variantes de travail avec les informations à vérifier et les sources utilisées.',
        review:
          'Les créatifs choisissent, réécrivent et valident. Aucune publication ou réutilisation de contenu tiers n’est automatique.',
      },
    ],
    guides: ['guide-claude-meta-ads'],
    related: ['marketing', 'commercial', 'operations'],
    faq: [
      {
        q: 'Peut-on commencer par un seul client ou livrable ?',
        a: 'Oui. Un bilan de campagne ou une étape de production permet de vérifier la qualité, la séparation des données et le temps de reprise. La méthode peut ensuite être adaptée à d’autres comptes après validation.',
      },
      {
        q: 'Comment éviter de mélanger les informations des clients ?',
        a: 'Les espaces, sources et droits doivent être séparés par compte. Les tests incluent la recherche d’informations hors du dossier autorisé. La séparation se vérifie dans les outils retenus, elle ne repose pas sur une simple consigne écrite.',
      },
      {
        q: 'L’IA peut-elle modifier les budgets publicitaires ?',
        a: 'Ce n’est pas le point de départ proposé. L’agent prépare les analyses et les pistes ; les responsables valident les choix et les budgets. Tout autre niveau d’action nécessite un périmètre explicite.',
      },
    ],
  },
  {
    slug: 'associations',
    name: 'Associations & fédérations',
    group: 'organisations',
    audience: 'Associations · Fédérations · Fondations · Réseaux',
    title: 'IA pour les associations et les fédérations',
    promise: 'Moins de suivi dispersé. Plus de place pour votre mission.',
    intro:
      'Adhésions, bilans financeurs, remontées des antennes : Althoce forme vos salariés et bénévoles et construit des usages IA adaptés aux moyens de la structure, à la sensibilité des données et à votre fonctionnement collectif.',
    description:
      'Formation IA et agents sur mesure pour associations : adhésions, demandes de subvention, bilans d’activité et transmission entre salariés et bénévoles.',
    image: '/images/sectors/associations.webp',
    imageAlt:
      'Des membres d’une équipe associative préparent des documents dans un espace de travail partagé.',
    trainingImage: '/images/sectors/associations-atelier.webp',
    friction: [
      'Les adhérents sollicitent plusieurs interlocuteurs.',
      'Les bilans dépendent de fichiers tenus séparément.',
      'Le savoir pratique part avec les bénévoles.',
    ],
    approach: {
      title: 'Un dispositif que votre équipe peut réellement faire vivre.',
      text: 'Nous regardons qui tient les informations, qui les valide et qui peut entretenir l’outil. Le projet part d’une tâche récurrente et de sources accessibles, avec une prise en main adaptée aux changements d’équipe.',
      deliverables: [
        'Un référentiel de réponses et de procédures partagé.',
        'Des données limitées à ce que chaque rôle doit connaître.',
        'Une méthode documentée pour transmettre et mettre à jour.',
      ],
    },
    boundaries:
      'Les informations sur les bénéficiaires, donateurs et adhérents demandent une attention particulière. Les droits sont définis par rôle. Les déclarations aux financeurs, les engagements et les choix d’attribution restent validés par les responsables.',
    training:
      'Salariés et bénévoles travaillent sur des exemples utiles à leur mission : préparer un compte rendu, retrouver une procédure et construire un bilan à partir des preuves disponibles. La méthode doit rester transmissible après l’atelier.',
    trainingPractice: [
      'Construire un compte rendu fidèle.',
      'Rédiger à partir de faits et de pièces vérifiés.',
      'Documenter une procédure pour le prochain bénévole.',
    ],
    scenarios: [
      {
        title: 'Préparer le suivi des adhésions',
        situation:
          'Les demandes de renouvellement et les changements de coordonnées arrivent séparément.',
        input: 'Registre autorisé, demandes reçues et règles d’adhésion validées.',
        output:
          'Une liste des dossiers à compléter et des projets de réponses adaptés à la situation.',
        review:
          'Le responsable confirme les informations et les droits de contact avant envoi ou mise à jour.',
      },
      {
        title: 'Assembler un dossier de financement',
        situation:
          'Une demande de subvention nécessite de réunir des pièces et de décrire précisément l’action.',
        input: 'Critères du financeur, projet réel, budget validé et justificatifs disponibles.',
        output:
          'Une checklist des pièces, une trame de réponse et les informations qui restent à fournir.',
        review:
          'L’équipe vérifie l’éligibilité, les montants et les engagements. L’IA n’invente ni activité, ni bénéficiaires, ni résultat.',
      },
      {
        title: 'Préparer le bilan d’une action',
        situation: 'Les éléments narratifs et financiers viennent de plusieurs antennes.',
        input: 'Remontées vérifiées, pièces de dépenses et format demandé par le financeur.',
        output: 'Un projet de bilan avec sources, périodes et écarts à résoudre.',
        review:
          'Les responsables valident les chiffres, le rattachement des dépenses et la réalité des actions avant transmission.',
      },
      {
        title: 'Transmettre le savoir aux bénévoles',
        situation: 'Chaque arrivée oblige à réexpliquer les mêmes démarches.',
        input: 'Procédures approuvées, contacts internes et documents d’accueil.',
        output:
          'Des réponses sourcées et une orientation vers la personne référente si la procédure ne suffit pas.',
        review:
          'Les responsables entretiennent les sources et gardent la main sur les situations individuelles.',
      },
    ],
    guides: [],
    related: ['operations', 'marketing', 'finance'],
    faq: [
      {
        q: 'Une petite association a-t-elle besoin d’un agent connecté ?',
        a: 'Pas toujours. Une formation et des consignes partagées peuvent suffire. Nous comparons l’intérêt de la solution au temps nécessaire pour l’entretenir et aux moyens de la structure.',
      },
      {
        q: 'L’IA peut-elle garantir l’obtention d’une subvention ?',
        a: 'Non. Elle peut aider à réunir les pièces et préparer la rédaction à partir des informations réelles. L’éligibilité, les engagements et le dépôt doivent être vérifiés ; la décision appartient au financeur.',
      },
      {
        q: 'Les bénévoles peuvent-ils suivre les formations ?',
        a: 'Oui. Le niveau, les outils et les exercices sont adaptés avec la structure. Nous cherchons une pratique simple à transmettre, avec des rôles clairs pour les mises à jour et les validations.',
      },
    ],
  },
];
export function sectorFaq(d: SectorStory) {
  return d.faq;
}
