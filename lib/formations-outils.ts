/**
 * Formations par outil : Claude, ChatGPT et Copilot. Une page par écosystème, trois niveaux par page.
 * Les niveaux 1 et 2 reprennent les formats existants (Formation IA métier et Formation IA métier
 * personnalisée, voir lib/formations.ts) ; le niveau 3 est un atelier sur mesure, sans durée annoncée.
 * Les cas pratiques sont des exercices de formation, pas des références clients.
 * Noms de produits vérifiés le 25 novembre 2026 ; à revoir quand un éditeur renomme une offre.
 */

export type ToolSlug = 'claude' | 'chatgpt' | 'copilot';

export interface ToolLevel {
  name: string;            // « Prendre en main »
  title: string;           // « Claude au quotidien »
  text: string;
  skills: string[];
  prereq: string;
  format: string;
  link: { href: string; label: string };
}

export interface ToolCase {
  field: string;           // métier
  feature: string;         // fonction de l'outil mise en pratique
  title: string;
  text: string;
}

export interface ToolTraining {
  slug: ToolSlug;
  name: string;            // nom de l'outil
  publisher: string;
  title: string;           // « Formation Claude »
  heroSpan: string;
  chapo: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  image: { src: string; alt: string };
  audiences: { title: string; text: string }[];
  levels: ToolLevel[];
  casesIntro: string;
  cases: ToolCase[];
  dataIntro: string;
  dataPoints: string[];
  choose: string;          // quand choisir cet outil, pour le comparatif
  card: string;            // résumé pour la page Formation IA
  faq: { q: string; a: string }[];
  cta: { title: string; text: string; label: string };
}

const funding = {
  q: 'La formation peut-elle être financée ?',
  a: 'Une prise en charge peut être étudiée via notre organisme partenaire, selon votre situation et les conditions de votre financeur. Elle n’est pas automatique : nous précisons les modalités avant toute démarche.',
};

const levelOneFormat = (tool: string) => `Formation IA métier : 1 journée de 7 heures, centrée sur ${tool}, en présentiel ou en visioconférence.`;
const levelTwoFormat = 'Formation IA métier personnalisée : 1 journée de 7 heures, préparée lors d’un entretien de 1 à 2 heures sur vos cas.';
const levelThreeFormat = 'Atelier sur mesure : programme et durée définis avec vous lors d’un premier échange.';
const levelOneLink = { href: '/services/formation-ia/ia-fondamentaux/', label: 'Voir le programme de la Formation IA métier' };
const levelTwoLink = { href: '/services/formation-ia/ia-avancee/', label: 'Voir le programme de la formation personnalisée' };
const levelThreeLink = { href: '/contact/', label: 'Préparer un atelier' };
const buildPrereq = 'Être à l’aise avec les fichiers et les outils de votre poste. Des notions de développement aident, sans être obligatoires.';
const sensitiveData = 'les informations à ne pas saisir selon votre cadre : secret professionnel, données de santé, données clients identifiantes.';

export const claudeTraining: ToolTraining = {
  slug: 'claude',
  name: 'Claude',
  publisher: 'Anthropic',
  title: 'Formation Claude',
  heroSpan: 'De la prise en main à Claude Code.',
  chapo: 'Formez vos équipes à Claude, l’IA d’Anthropic, en trois niveaux : l’usage au quotidien, les Skills et les connecteurs, puis la construction d’automatisations avec Claude Code. Sur vos cas métier, avec vos règles de confidentialité.',
  metaTitle: 'Formation Claude : Skills, Cowork et Claude Code',
  metaDescription: 'Formation Claude en entreprise : prise en main, Skills, connecteurs et Cowork, puis Claude Code pour construire vos automatisations. En présentiel ou en visio.',
  keywords: ['formation Claude', 'formation Claude entreprise', 'formation Claude Code', 'formation Claude AI', 'Claude Skills', 'Claude Cowork', 'formation Anthropic Claude'],
  image: { src: '/images/services/formation.webp', alt: 'Une formatrice accompagne une petite équipe pendant un atelier dans un bureau.' },
  audiences: [
    { title: 'Équipes métier', text: 'Juristes, comptables, assistants, chargés de clientèle : utiliser Claude chaque jour pour rédiger, synthétiser et vérifier.' },
    { title: 'Dirigeants et managers', text: 'Fixer les règles d’usage, choisir l’offre adaptée et repérer les tâches à confier à Claude.' },
    { title: 'Profils techniques et opérations', text: 'Construire des automatisations et des outils internes avec Claude Code, en gardant la main sur le résultat.' },
  ],
  levels: [
    {
      name: 'Prendre en main', title: 'Claude au quotidien',
      text: 'Rédiger, synthétiser, analyser un document et vérifier les réponses, avec les bons réflexes de confidentialité.',
      skills: [
        'Structurer une demande et obtenir une réponse exploitable.',
        'Analyser un document, un tableau ou un PDF, puis vérifier le résultat.',
        'Organiser son travail en projets, avec des documents et des consignes communs.',
        'Repérer les données à ne pas confier à l’outil.',
      ],
      prereq: 'Usage courant d’un ordinateur. Aucune connaissance en IA.',
      format: levelOneFormat('Claude'), link: levelOneLink,
    },
    {
      name: 'Personnaliser', title: 'Skills, connecteurs et Cowork',
      text: 'Faire travailler Claude avec vos méthodes, vos outils et vos fichiers.',
      skills: [
        'Créer un Skill qui applique la méthode de votre équipe dès que la tâche s’y prête.',
        'Relier Claude à vos outils grâce aux connecteurs, en choisissant les droits accordés.',
        'Confier à Cowork une tâche sur vos fichiers, puis contrôler le résultat.',
        'Partager les Skills et les bonnes pratiques au sein de l’équipe.',
      ],
      prereq: 'Avoir suivi le niveau 1 ou utiliser Claude régulièrement. Certaines fonctions demandent une offre payante.',
      format: levelTwoFormat, link: levelTwoLink,
    },
    {
      name: 'Construire', title: 'Claude Code',
      text: 'Passer de l’usage à la construction : scripts, automatisations et petits outils internes.',
      skills: [
        'Décrire un besoin à Claude Code et suivre son plan de travail.',
        'Automatiser un traitement de fichiers ou un rapprochement de données.',
        'Relire, tester et versionner ce qui a été produit.',
        'Décider ce qui peut passer en production, et avec quel suivi.',
      ],
      prereq: buildPrereq,
      format: levelThreeFormat, link: levelThreeLink,
    },
  ],
  casesIntro: 'Des exercices construits sur des situations de votre métier, avec des données fictives, anonymisées ou autorisées.',
  cases: [
    { field: 'Expertise comptable', feature: 'Skill', title: 'Une note de synthèse au format du cabinet', text: 'Un Skill reprend la trame du cabinet et prépare une première note à partir d’un export comptable fictif. Le collaborateur vérifie chaque montant avant envoi.' },
    { field: 'Cabinet d’avocats', feature: 'Projet', title: 'Relire une clause avec vos modèles', text: 'Un projet réunit les clauses types du cabinet. Claude signale les écarts d’un contrat fictif ; l’avocat tranche.' },
    { field: 'Direction administrative', feature: 'Cowork', title: 'Classer et renommer des pièces', text: 'Cowork range un dossier de pièces selon une règle de nommage, puis produit un tableau récapitulatif à contrôler.' },
    { field: 'Opérations', feature: 'Claude Code', title: 'Rapprocher deux exports', text: 'Claude Code écrit un script qui compare deux fichiers et liste les écarts. L’équipe relit le script et le teste sur un échantillon.' },
  ],
  dataIntro: 'La confidentialité se règle avant le premier exercice. Nous passons en revue avec vous :',
  dataPoints: [
    'l’offre utilisée, individuelle ou d’équipe, et ses conditions d’utilisation des données ;',
    'les réglages de conservation et d’utilisation des conversations ;',
    'les connecteurs autorisés et les droits accordés à chacun ;',
    sensitiveData,
  ],
  choose: 'Apprécié pour la rédaction et l’analyse de documents, avec les Skills, Cowork et Claude Code pour aller plus loin.',
  card: 'Prise en main, Skills, connecteurs et Cowork, puis Claude Code pour construire vos automatisations.',
  faq: [
    { q: 'Faut-il un abonnement payant pour suivre la formation Claude ?', a: 'Pas pour découvrir : le niveau 1 peut se suivre avec l’offre gratuite. Cowork, Claude Code et un usage régulier en équipe demandent une offre payante. Nous vérifions avec vous l’offre adaptée avant la session ; les licences ne sont pas incluses dans la formation.' },
    { q: 'Claude Code est-il réservé aux développeurs ?', a: 'Non. Claude Code sert aussi aux profils opérations et données qui veulent automatiser un traitement. L’atelier part d’un besoin concret et apprend à relire et à tester ce que Claude produit. Des notions de développement aident, sans être obligatoires.' },
    { q: 'Quelle différence entre un projet, un Skill et un connecteur ?', a: 'Un projet réunit les documents et les consignes d’un même sujet. Un Skill décrit une méthode que Claude applique dès que la tâche s’y prête, dans toutes vos conversations. Un connecteur relie Claude à un outil, comme une messagerie ou un espace de stockage, avec les droits que vous choisissez.' },
    { q: 'Nos données servent-elles à entraîner Claude ?', a: 'Cela dépend de l’offre et des réglages. Les offres pour les entreprises relèvent des conditions commerciales d’Anthropic ; les offres individuelles proposent un réglage à vérifier. Nous passons ces points en revue avec vous avant les exercices.' },
    funding,
    { q: 'Où se déroule la formation ?', a: 'Dans vos locaux, partout en France, ou en visioconférence. Les niveaux 1 et 2 accueillent jusqu’à 12 participants. L’atelier Claude Code se prépare selon votre projet.' },
  ],
  cta: { title: 'Formons votre équipe à Claude.', text: 'En 30 minutes, faisons le point sur vos usages, le niveau de vos équipes et l’offre Claude dont vous disposez. Nous vous proposons ensuite le bon niveau.', label: 'Parlons de votre formation Claude' },
};

export const chatgptTraining: ToolTraining = {
  slug: 'chatgpt',
  name: 'ChatGPT',
  publisher: 'OpenAI',
  title: 'Formation ChatGPT',
  heroSpan: 'De la prise en main à Codex.',
  chapo: 'Formez vos équipes à ChatGPT en trois niveaux : l’usage au quotidien, les GPTs, les projets et les connecteurs, puis la construction avec Codex. Sur vos cas métier, avec vos règles de confidentialité.',
  metaTitle: 'Formation ChatGPT en entreprise : GPTs, connecteurs et Codex',
  metaDescription: 'Formation ChatGPT en entreprise : prise en main, GPTs personnalisés, projets et connecteurs, puis Codex pour construire vos automatisations. En présentiel ou en visio.',
  keywords: ['formation ChatGPT', 'formation ChatGPT entreprise', 'formation ChatGPT professionnel', 'formation GPT personnalisé', 'formation Codex', 'formation OpenAI Codex', 'formation OpenAI'],
  image: { src: '/images/home/atelier-equipes.webp', alt: 'Quatre collègues apprennent ensemble autour d’un ordinateur et d’un carnet dans un bureau.' },
  audiences: [
    { title: 'Équipes métier', text: 'Commerciaux, RH, assistants, chargés de clientèle : utiliser ChatGPT chaque jour pour rédiger, analyser et préparer.' },
    { title: 'Dirigeants et managers', text: 'Encadrer les usages, choisir l’offre adaptée et partager des GPTs utiles à toute l’équipe.' },
    { title: 'Profils techniques et opérations', text: 'Construire avec Codex des scripts et des automatisations, en gardant la maîtrise de ce qui est produit.' },
  ],
  levels: [
    {
      name: 'Prendre en main', title: 'ChatGPT au quotidien',
      text: 'Rédiger, résumer, analyser un fichier et vérifier les réponses, avec les bons réflexes de confidentialité.',
      skills: [
        'Structurer une demande et obtenir une réponse exploitable.',
        'Analyser un fichier Excel ou un PDF et contrôler les chiffres obtenus.',
        'Utiliser la recherche web en vérifiant les sources citées.',
        'Repérer les données à ne pas confier à l’outil.',
      ],
      prereq: 'Usage courant d’un ordinateur. Aucune connaissance en IA.',
      format: levelOneFormat('ChatGPT'), link: levelOneLink,
    },
    {
      name: 'Personnaliser', title: 'GPTs, projets et connecteurs',
      text: 'Faire de ChatGPT un outil d’équipe, adapté à vos méthodes.',
      skills: [
        'Créer un GPT avec vos consignes et vos documents de référence.',
        'Organiser les travaux récurrents en projets.',
        'Relier ChatGPT à vos outils avec les connecteurs, en limitant les droits.',
        'Confier une recherche approfondie et en vérifier les sources.',
      ],
      prereq: 'Avoir suivi le niveau 1 ou utiliser ChatGPT régulièrement. Certaines fonctions demandent une offre payante.',
      format: levelTwoFormat, link: levelTwoLink,
    },
    {
      name: 'Construire', title: 'Codex',
      text: 'Passer de l’usage à la construction : scripts, automatisations et petits outils internes.',
      skills: [
        'Décrire une tâche à Codex et suivre son avancement.',
        'Automatiser un traitement de fichiers ou une mise en forme récurrente.',
        'Relire, tester et versionner le code produit.',
        'Décider ce qui peut passer en production, et avec quel suivi.',
      ],
      prereq: buildPrereq,
      format: levelThreeFormat, link: levelThreeLink,
    },
  ],
  casesIntro: 'Des exercices construits sur des situations de votre métier, avec des données fictives, anonymisées ou autorisées.',
  cases: [
    { field: 'Agence immobilière', feature: 'GPT', title: 'Des annonces au ton de l’agence', text: 'Un GPT reprend la charte de l’agence et rédige une annonce à partir d’une fiche descriptive fictive. Le négociateur relit avant publication.' },
    { field: 'Ressources humaines', feature: 'GPT', title: 'Répondre aux questions internes', text: 'Un GPT répond aux questions courantes à partir d’un règlement intérieur fictif, en citant le passage utilisé. Le service RH valide les réponses sensibles.' },
    { field: 'Direction financière', feature: 'Analyse de fichiers', title: 'Commenter un suivi budgétaire', text: 'ChatGPT analyse un export budgétaire fictif, produit un graphique et propose un commentaire. Le contrôleur vérifie les écarts avant diffusion.' },
    { field: 'Opérations', feature: 'Codex', title: 'Automatiser une mise en forme', text: 'Codex écrit un script qui transforme un export brut en tableau prêt à l’emploi. L’équipe relit le code et le teste sur un échantillon.' },
  ],
  dataIntro: 'La confidentialité se règle avant le premier exercice. Nous passons en revue avec vous :',
  dataPoints: [
    'l’offre utilisée, individuelle ou entreprise, et ses conditions d’utilisation des données ;',
    'l’historique, la mémoire et les réglages d’amélioration des modèles ;',
    'les GPTs et les connecteurs autorisés, et qui peut les partager ;',
    sensitiveData,
  ],
  choose: 'Polyvalent et très répandu, avec les GPTs à partager et Codex pour construire.',
  card: 'Prise en main, GPTs, projets et connecteurs, puis Codex pour construire vos automatisations.',
  faq: [
    { q: 'Faut-il un abonnement payant pour suivre la formation ChatGPT ?', a: 'Pas pour découvrir : le niveau 1 peut se suivre avec l’offre gratuite. La création de GPTs, le travail partagé et un usage régulier en équipe demandent une offre payante. Nous vérifions avec vous l’offre adaptée avant la session ; les licences ne sont pas incluses dans la formation.' },
    { q: 'Codex est-il réservé aux développeurs ?', a: 'Non. Codex sert aussi aux profils opérations et données qui veulent automatiser un traitement. L’atelier part d’un besoin concret et apprend à relire et à tester ce que Codex produit. Des notions de développement aident, sans être obligatoires.' },
    { q: 'GPT ou projet : que choisir ?', a: 'Un GPT sert un usage précis et se partage : il garde ses consignes et ses documents de référence. Un projet regroupe les conversations, les fichiers et les consignes d’un même dossier. Nous vous aidons à choisir selon l’usage.' },
    { q: 'Nos données servent-elles à entraîner les modèles d’OpenAI ?', a: 'Cela dépend de l’offre et des réglages. Les offres pour les entreprises relèvent de conditions spécifiques ; les offres individuelles proposent un réglage à vérifier. Nous passons ces points en revue avec vous avant les exercices.' },
    { q: 'Notre équipe utilise ChatGPT et Claude : peut-on former aux deux ?', a: 'Oui. Le niveau 1 peut comparer les outils sur les mêmes exercices, pour choisir le bon outil selon la tâche. Les niveaux suivants se concentrent sur l’outil retenu.' },
    funding,
  ],
  cta: { title: 'Formons votre équipe à ChatGPT.', text: 'En 30 minutes, faisons le point sur vos usages, le niveau de vos équipes et l’offre ChatGPT dont vous disposez. Nous vous proposons ensuite le bon niveau.', label: 'Parlons de votre formation ChatGPT' },
};

export const copilotTraining: ToolTraining = {
  slug: 'copilot',
  name: 'Copilot',
  publisher: 'Microsoft',
  title: 'Formation Copilot',
  heroSpan: 'De Word et Teams à Copilot Studio.',
  chapo: 'Formez vos équipes à Microsoft 365 Copilot, des premiers pas dans Word, Excel, Outlook et Teams jusqu’à la création d’agents avec Copilot Studio Lite et Copilot Studio. Sur vos cas métier, dans le respect de vos droits d’accès.',
  metaTitle: 'Formation Copilot : Microsoft 365 Copilot et Copilot Studio',
  metaDescription: 'Formation Copilot pour débutants et équipes : Word, Excel, Outlook et Teams, puis création d’agents avec Copilot Studio Lite et Copilot Studio. En présentiel ou en visio.',
  keywords: ['formation Copilot', 'formation Microsoft 365 Copilot', 'formation Copilot Studio', 'formation Copilot débutant', 'Copilot Studio Lite', 'agent builder Copilot', 'créer un agent Copilot'],
  image: { src: '/images/home/reunion-bureau.webp', alt: 'Trois collègues échangent autour d’un ordinateur portable et de documents dans un bureau.' },
  audiences: [
    { title: 'Équipes métier, débutants compris', text: 'Utiliser Copilot dans Word, Excel, Outlook et Teams, sans prérequis technique.' },
    { title: 'Managers et référents', text: 'Créer des agents simples pour l’équipe avec Copilot Studio Lite et en fixer les règles de partage.' },
    { title: 'DSI et profils techniques', text: 'Concevoir avec Copilot Studio des agents reliés à vos données, à vos flux et à vos applications.' },
  ],
  levels: [
    {
      name: 'Prendre en main', title: 'Copilot dans vos applications',
      text: 'Les premiers pas dans Word, Excel, PowerPoint, Outlook et Teams, pensés pour les débutants.',
      skills: [
        'Rédiger et reformuler un document dans Word.',
        'Analyser un tableau dans Excel et vérifier les calculs proposés.',
        'Résumer un fil d’emails dans Outlook et préparer une réponse.',
        'Obtenir le compte rendu et les actions d’une réunion Teams.',
      ],
      prereq: 'Usage courant de Microsoft 365. Aucune connaissance en IA.',
      format: levelOneFormat('Copilot'), link: levelOneLink,
    },
    {
      name: 'Personnaliser', title: 'Agents avec Copilot Studio Lite',
      text: 'Créer vos premiers agents sans code, directement dans Microsoft 365 Copilot. L’outil s’appelait auparavant agent builder.',
      skills: [
        'Décrire un agent en langage courant : rôle, consignes et ton.',
        'Lui donner des sources fiables : sites SharePoint, fichiers, pages web.',
        'Tester ses réponses et corriger les consignes.',
        'Partager l’agent avec les bonnes personnes.',
      ],
      prereq: 'Avoir suivi le niveau 1 ou utiliser Copilot régulièrement. Licence et réglages à vérifier avec votre administrateur.',
      format: levelTwoFormat, link: levelTwoLink,
    },
    {
      name: 'Construire', title: 'Copilot Studio',
      text: 'Construire des agents reliés à vos données, à vos flux et à vos applications.',
      skills: [
        'Reprendre dans Copilot Studio un agent créé dans la version Lite quand le besoin grandit.',
        'Relier l’agent à vos outils avec les connecteurs et les flux.',
        'Publier l’agent dans Teams ou sur un site, avec les bons accès.',
        'Suivre l’usage et la consommation, puis faire évoluer l’agent.',
      ],
      prereq: 'Un référent technique ou un administrateur Microsoft 365 associé au projet.',
      format: levelThreeFormat, link: levelThreeLink,
    },
  ],
  casesIntro: 'Pour les débutants comme pour les équipes avancées : des exercices construits sur vos situations, avec des données fictives ou autorisées.',
  cases: [
    { field: 'Cabinet comptable', feature: 'Outlook et Teams', title: 'Préparer un rendez-vous client', text: 'Copilot résume les derniers échanges avec un client fictif et prépare l’ordre du jour. Après la réunion, il propose le compte rendu et les actions, relus par le collaborateur.' },
    { field: 'Assistanat de direction', feature: 'Word et PowerPoint', title: 'D’une note à une présentation', text: 'Copilot transforme une note interne en présentation. L’assistant ajuste le fond et la forme avant diffusion.' },
    { field: 'Ressources humaines', feature: 'Copilot Studio Lite', title: 'Un agent pour les procédures internes', text: 'Un agent répond aux questions courantes à partir d’un site SharePoint de procédures fictives, et renvoie vers le document source.' },
    { field: 'Accueil et service client', feature: 'Copilot Studio', title: 'Un agent qui oriente les demandes', text: 'Un agent qualifie une demande entrante et la transmet au bon service grâce à un flux. L’équipe définit ce que l’agent ne doit jamais traiter seul.' },
  ],
  dataIntro: 'Copilot s’appuie sur votre environnement Microsoft 365. Nous passons en revue avec vous :',
  dataPoints: [
    'la licence de chacun : Copilot Chat ou Microsoft 365 Copilot ;',
    'les droits d’accès : Copilot ne trouve que ce que l’utilisateur peut déjà ouvrir, mais un partage trop large devient plus visible ;',
    'les sources et le partage des agents créés ;',
    sensitiveData,
  ],
  choose: 'Le choix naturel si votre entreprise travaille dans Microsoft 365 : il s’appuie sur vos contenus et vos droits d’accès.',
  card: 'Word, Excel, Outlook et Teams pour débuter, puis vos agents avec Copilot Studio Lite et Copilot Studio.',
  faq: [
    { q: 'Copilot Chat ou Microsoft 365 Copilot : quelle différence ?', a: 'Copilot Chat est proposé avec les comptes professionnels Microsoft 365 : il s’appuie sur le web et sur les fichiers que vous lui donnez. Microsoft 365 Copilot, avec une licence dédiée, travaille aussi sur vos emails, vos fichiers et vos réunions, dans la limite de vos droits. La formation s’adapte à votre licence.' },
    { q: 'Copilot Studio Lite ou Copilot Studio : lequel choisir ?', a: 'Copilot Studio Lite, auparavant appelé agent builder, suffit pour un agent qui répond à partir de documents et se partage dans l’équipe. Copilot Studio sert quand l’agent doit agir : lancer un flux, interroger une application, être publié sur un site. Un agent créé dans la version Lite peut être repris dans Copilot Studio.' },
    { q: 'Faut-il une licence particulière pour Copilot Studio ?', a: 'Les conditions dépendent de votre contrat Microsoft et évoluent régulièrement. Nous les vérifions avec votre administrateur avant la session ; les licences ne sont pas incluses dans la formation.' },
    { q: 'Copilot voit-il tous nos documents ?', a: 'Non. Copilot respecte les droits d’accès de Microsoft 365 : il ne trouve que ce que l’utilisateur peut déjà ouvrir. En revanche, un dossier partagé trop largement devient plus facile à retrouver. Nous vous aidons à repérer ces situations.' },
    { q: 'La formation convient-elle à des débutants ?', a: 'Oui. Le niveau 1 part des applications que vos équipes utilisent déjà, sans prérequis technique. Chaque exercice part d’une tâche réelle du poste.' },
    funding,
  ],
  cta: { title: 'Formons votre équipe à Copilot.', text: 'En 30 minutes, faisons le point sur vos licences Microsoft 365, le niveau de vos équipes et les agents qui vous seraient utiles. Nous vous proposons ensuite le bon niveau.', label: 'Parlons de votre formation Copilot' },
};

export const toolTrainings: ToolTraining[] = [claudeTraining, chatgptTraining, copilotTraining];

export const toolTrainingUrl = (slug: ToolSlug) => `/services/formation-ia/${slug}/`;

export function buildToolTrainingJsonLd(t: ToolTraining) {
  const url = `https://althoce.com${toolTrainingUrl(t.slug)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': `${url}#course`,
        name: t.title,
        description: t.metaDescription,
        url,
        inLanguage: 'fr-FR',
        about: { '@type': 'SoftwareApplication', name: t.name, publisher: { '@type': 'Organization', name: t.publisher } },
        provider: { '@type': 'Organization', '@id': 'https://althoce.com/#organization', name: 'Althoce' },
        educationalLevel: 'Beginner',
        teaches: t.levels.flatMap(level => level.skills),
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: ['Onsite', 'Online'] },
      },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: t.faq.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://althoce.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://althoce.com/services/' },
          { '@type': 'ListItem', position: 3, name: 'Formation IA', item: 'https://althoce.com/services/formation-ia/' },
          { '@type': 'ListItem', position: 4, name: t.title, item: url },
        ],
      },
    ],
  };
}
