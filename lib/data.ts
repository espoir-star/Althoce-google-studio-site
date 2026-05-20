import {
  Zap, BarChart3, Layers, Cpu, CheckCircle2,
  ScanLine, Blocks, Briefcase, MessageSquare, Settings2, UserCheck
} from 'lucide-react';
import type { ServiceItem, TestimonialItem, FAQItem, StatItem, UseCaseItem } from '../types';

export const getOptimizedImage = (url: string, width = 600) => {
  if (url.includes('images.unsplash.com')) {
    return `${url}&w=${width}&q=60&auto=format`;
  }
  return url;
};

// ── Legacy exports preserved for blog/other pages ────────────────────────────

export const stats: StatItem[] = [
  { value: "-70%", label: "Temps de Saisie", description: "Administratif réduit." },
  { value: "+758", label: "Flows Créés", description: "Actifs 24h/24." },
  { value: "+5M€", label: "Économisés", description: "Pour nos clients." }
];

export const methodologySteps = [
  { id: "01", title: "L'Audit", desc: "On ne devine pas, on mesure. Cartographie précise des tâches chronophages.", icon: BarChart3 },
  { id: "02", title: "Le Plan", desc: "Roadmap claire : quels outils, pour quels résultats, en combien de temps.", icon: Layers },
  { id: "03", title: "La Création", desc: "Développement des agents et connexion à vos logiciels (Slack, CRM, Mails).", icon: Cpu },
  { id: "04", title: "L'Autonomie", desc: "Formation des équipes. Vous repartez avec les clés d'un système autonome.", icon: CheckCircle2 }
];

export const useCases: UseCaseItem[] = [
  { title: "Vente & Growth", quote: "\"Fini le copier-coller dans le CRM.\"", description: "Automatisez la prospection ultra-personnalisée et le scoring de leads. Vos commerciaux ne parlent qu'à des gens qualifiés." },
  { title: "Relation Client", quote: "\"Répondez à 3h du matin.\"", description: "Des agents IA qui résolvent les tickets complexes avec votre ton de voix et une disponibilité totale." },
  { title: "Opérations & Admin", quote: "\"Zéro saisie manuelle.\"", description: "Facturation automatique, tri de documents intelligents. L'erreur humaine disparaît de l'équation." },
  { title: "Ressources Humaines", quote: "\"Recrutez sur les compétences.\"", description: "Analyse prédictive des CV et automatisation de l'onboarding pour une expérience candidat impeccable." }
];

export const detailedUseCases = [
  { ...useCases[0], icon: Briefcase, stat: "+30% Leads" },
  { ...useCases[1], icon: MessageSquare, stat: "-80% Latence" },
  { ...useCases[2], icon: Settings2, stat: "0 Erreur" },
  { ...useCases[3], icon: UserCheck, stat: "x2 Vitesse" }
];

export const services: ServiceItem[] = [
  { title: "Audit & Roadmap IA", description: "Diagnostic 48h. Arrêtez de tester, commencez à implémenter.", icon: ScanLine },
  { title: "Agents IA Autonomes", description: "Entités capables de réfléchir, prioriser et exécuter des tâches complexes.", icon: Cpu },
  { title: "Apps Métiers sur-mesure", description: "Outils internes boostés à l'IA pour centraliser votre puissance.", icon: Blocks },
  { title: "Formation & Workshops", description: "On lève les peurs et on installe une culture de l'efficacité.", icon: Zap }
];

export const testimonials: TestimonialItem[] = [
  { quote: "Althoce ne se contente pas d'automatiser : ils repensent vos process pour supprimer l'inutile. Une vision claire, une exécution rapide et un vrai accompagnement stratégique.", author: "Marc A.", role: "Head of Performance", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3" },
  { quote: "On a divisé par deux notre temps administratif. L'expérience client est plus fluide et j'ai pu me concentrer sur la vente : nos résultats ont doublé en quelques mois.", author: "Sarah L.", role: "Responsable Développement Commercial", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3" },
  { quote: "Althoce n'a pas installé un logiciel, ils ont installé une nouvelle ère. On fait enfin notre vrai métier : le conseil.", author: "Sophie M.", role: "Fondatrice", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3" },
  { quote: "On passait 15h/semaine sur les leads. C'est tombé à 10 min. On a doublé nos RDV en deux mois.", author: "Thomas L.", role: "Directeur des Opérations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" },
  { quote: "Grâce à Althoce, l'IA est devenue un collègue sur qui on peut compter. On a retrouvé du temps pour nos clients.", author: "Lise K.", role: "Agence Marketing", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3" }
];

export const faqs: FAQItem[] = [
  { question: "Comment gérez-vous la maintenance du système ?", answer: "Nous ne nous contentons pas de \"livrer et partir\". Le monde de l'API et des LLM évolue vite : nous assurons une veille constante pour mettre à jour vos connecteurs, optimiser vos modèles d'IA et corriger le moindre bug. En bref : on garde le cap sous le capot pour que votre moteur ne s'arrête jamais." },
  { question: "À qui appartient le système si notre collaboration s'arrête ?", answer: "À vous, à 100 %. Nous développons exclusivement sur votre propre instance n8n. Contrairement à d'autres agences, nous ne pratiquons pas la \"rétention technique\" : si vous décidez de voler de vos propres ailes, vous gardez les clés, les accès et l'intégralité du code instantanément." },
  { question: "Combien de temps faut-il pour voir mes premières automatisations en production ?", answer: "L'agilité est notre priorité. Selon la complexité de vos processus, comptez entre 2 et 7 semaines pour passer du concept à une automatisation fonctionnelle et testée. Nous privilégions des cycles courts pour que vous puissiez mesurer le ROI le plus vite possible." },
  { question: "Peut-on héberger les workflows sur nos propres serveurs ?", answer: "Absolument. Nous prônons la souveraineté numérique. Si vous avez les ressources en interne, nous installons le système sur votre infrastructure. Il faudra simplement nous assurer ensemble que votre configuration (VPS/Serveur) est assez robuste pour encaisser la puissance de nos automatisations." },
  { question: "Comment garantissez-vous la protection de nos données ?", answer: "La data est votre actif le plus précieux. Nous utilisons des serveurs (VPS) exclusivement situés en Union Européenne et sélectionnons des outils 100% conformes au RGPD. Aucun compromis n'est fait sur la confidentialité : vos données restent sous votre contrôle, dans un environnement sécurisé et cloisonné." },
  { question: "L'IA va-t-elle remplacer mes employés ?", answer: "Non, elle va remplacer leur ennui. Notre mission est d'automatiser les 80 % de tâches répétitives et sans valeur ajoutée qui saturent vos journées. L'objectif ? Libérer vos talents pour qu'ils se concentrent sur les 20 % de missions stratégiques là où l'humain est irremplaçable (et là où se crée la vraie croissance)." }
];

export const PartnerLogos = [
  { name: "Partner 1", src: "https://i.ibb.co/8DgmnnLp/1.png" },
  { name: "Partner 2", src: "https://i.ibb.co/LdGWJpBw/2.png" },
  { name: "Partner 3", src: "https://i.ibb.co/4w5VnnNG/3.png" },
  { name: "Partner 4", src: "https://i.ibb.co/bgYwxFTs/4.png" },
  { name: "Partner 5", src: "https://i.ibb.co/HfxvFHYm/5.png" }
];

export const HeroLogos = [
  "https://i.ibb.co/QvCn9FsK/1-1.png",
  "https://i.ibb.co/9khZ8TVL/2-1.png",
  "https://i.ibb.co/ns9DWTLB/3-1.png",
  "https://i.ibb.co/Ps230D63/4-1.png",
  "https://i.ibb.co/4wcnk99K/5-1.png",
  "https://i.ibb.co/6R20gLT2/6.png",
  "https://i.ibb.co/zh3cCrgm/7.png",
  "https://i.ibb.co/Rkxh2p7z/8.png"
];

// ── v2 Data (Home Page v2) ────────────────────────────────────────────────────

export const AC = '#2563eb';

export interface StatV2Item {
  value: string;
  label: string;
  sub: string;
}

export const statsV2: StatV2Item[] = [
  { value: '+150', label: 'PME accompagnées', sub: 'Des structures de 5 à 500 salariés, dans tous les secteurs.' },
  { value: '-95%', label: 'Temps de saisie', sub: 'Ce qui prenait des heures prend désormais quelques minutes.' },
  { value: '+870', label: 'Agents & flows', sub: 'Ils tournent 24h/24 chez nos clients, sans supervision.' },
  { value: '9 M€', label: 'Économisés', sub: 'En temps libéré, erreurs évitées et revenus débloqués.' },
];

export interface ServiceV2Item {
  n: string;
  title: string;
  desc: string;
  href: string;
}

export const servicesV2: ServiceV2Item[] = [
  { n: '01', title: 'Agents IA', desc: 'Des employés virtuels autonomes qui raisonnent et agissent sur vos outils.', href: '/services/agents-ia/' },
  { n: '02', title: 'Automatisation IA', desc: 'Des workflows intelligents qui éliminent 80 % de vos tâches répétitives.', href: '/services/automatisation-ia/' },
  { n: '03', title: 'Employé IA', desc: 'Un collaborateur virtuel dédié à un poste complet (SDR, support, ops).', href: '/services/employe-ia/' },
  { n: '04', title: 'Développement IA', desc: "Développement sur-mesure d'applications boostées par LLM et APIs IA.", href: '/services/developpement-ia/' },
  { n: '05', title: 'Chatbot IA', desc: 'Assistants conversationnels intelligents pour site, WhatsApp, Teams.', href: '/services/chatbot-ia/' },
  { n: '06', title: 'Intégration IA', desc: 'Branchement de l\'IA dans votre SI existant (CRM, ERP, outils métier).', href: '/services/integration-ia/' },
  { n: '07', title: 'Formation IA', desc: 'On forme vos équipes à utiliser et opérer les agents IA au quotidien.', href: '/services/formation-ia/' },
  { n: '08', title: 'Audit IA', desc: 'Diagnostic 48h de vos processus : où l\'IA peut libérer du temps et de la marge.', href: '/services/audit-ia/' },
];

export interface AgentMetierItem {
  title: string;
  desc: string;
  href: string;
}

export const agentMetiers: AgentMetierItem[] = [
  { title: 'Marketing', desc: "Génération de contenu, SEO, emailing personnalisés à l'échelle.", href: '/agent-ia/marketing/' },
  { title: 'Commercial', desc: 'Prospection hyper-personnalisée, scoring, relances automatiques.', href: '/agent-ia/commercial/' },
  { title: 'Service client', desc: 'Tickets niveau 1 & 2 traités automatiquement, support 24/7.', href: '/agent-ia/service-client/' },
  { title: 'Téléphonique', desc: 'Standard 24/7, qualification entrante, rappels sortants, voix naturelle.', href: '/agent-ia/telephonique/' },
  { title: 'Ressources humaines', desc: 'Tri de CV, pré-qualification, onboarding guidé.', href: '/agent-ia/rh/' },
  { title: 'Finance & compta', desc: 'Extraction de pièces, rapprochements, relances impayés.', href: '/agent-ia/finance/' },
  { title: 'Opérations', desc: 'Mails entrants, ADV, gestion documentaire, suivi fournisseurs.', href: '/agent-ia/operations/' },
  { title: 'Juridique', desc: 'Lecture de contrats, détection de clauses à risque, rédaction assistée.', href: '/agent-ia/juridique/' },
  { title: 'Achats', desc: 'Sourcing fournisseurs, analyse devis comparatif, suivi contrats, vigilance financière.', href: '/agent-ia/achats/' },
];

export interface AgentTagItem {
  name: string;
  href: string;
}

export const agentTags: AgentTagItem[] = [
  { name: 'Agent SEO IA', href: '/agent-ia/marketing/' },
  { name: 'Agent Content Manager IA', href: '/agent-ia/marketing/' },
  { name: 'Agent Emailing IA', href: '/agent-ia/marketing/' },
  { name: 'Agent Social Media IA', href: '/agent-ia/marketing/' },
  { name: 'Agent Reporting Marketing IA', href: '/agent-ia/marketing/' },
  { name: 'Agent Prospection IA', href: '/agent-ia/commercial/' },
  { name: 'Agent Qualification leads IA', href: '/agent-ia/commercial/' },
  { name: 'Agent CRM IA', href: '/agent-ia/commercial/' },
  { name: 'Agent Relance IA', href: '/agent-ia/commercial/' },
  { name: 'Agent Closing assistant IA', href: '/agent-ia/commercial/' },
  { name: 'Agent Support N1 IA', href: '/agent-ia/service-client/' },
  { name: 'Agent Chatbot IA', href: '/agent-ia/service-client/' },
  { name: 'Agent Voice IA', href: '/agent-ia/service-client/' },
  { name: 'Agent Ticketing IA', href: '/agent-ia/service-client/' },
  { name: 'Agent Standard téléphonique IA', href: '/agent-ia/telephonique/' },
  { name: 'Agent Rappels sortants IA', href: '/agent-ia/telephonique/' },
  { name: 'Agent Qualification appels IA', href: '/agent-ia/telephonique/' },
  { name: 'Agent Support vocal IA', href: '/agent-ia/telephonique/' },
  { name: 'Agent Tri CV IA', href: '/agent-ia/rh/' },
  { name: 'Agent Onboarding IA', href: '/agent-ia/rh/' },
  { name: 'Agent Paie assistante IA', href: '/agent-ia/rh/' },
  { name: 'Agent Facturation IA', href: '/agent-ia/finance/' },
  { name: 'Agent Rapprochement bancaire IA', href: '/agent-ia/finance/' },
  { name: 'Agent Relance impayés IA', href: '/agent-ia/finance/' },
  { name: 'Agent Reporting finance IA', href: '/agent-ia/finance/' },
  { name: 'Agent Documentation IA', href: '/agent-ia/operations/' },
  { name: 'Agent Data entry IA', href: '/agent-ia/operations/' },
  { name: 'Agent Architecture système IA', href: '/agent-ia/operations/' },
  { name: 'Agent Data & BI IA', href: '/agent-ia/operations/' },
  { name: 'Agent Lecture contrats IA', href: '/agent-ia/juridique/' },
  { name: 'Agent Conformité IA', href: '/agent-ia/juridique/' },
  { name: 'Agent Clauses-risque IA', href: '/agent-ia/juridique/' },
  { name: 'Agent BTP devis IA', href: '/agent-ia/secteurs/' },
  { name: 'Agent Cabinet médical IA', href: '/agent-ia/secteurs/' },
  { name: 'Agent Immobilier IA', href: '/agent-ia/secteurs/' },
];

export interface StepItem {
  n: string;
  title: string;
  time: string;
  desc: string;
}

export const steps: StepItem[] = [
  { n: '01', title: "L'audit", time: '48h', desc: "Nous passons 2 jours avec vous pour cartographier les tâches qui saturent les journées. Qui fait quoi, combien de temps, avec quels outils. Livré : un rapport clair des 3 à 5 automatisations qui vont vous rapporter le plus." },
  { n: '02', title: "Le plan", time: '1 semaine', desc: "On vous remet une roadmap chiffrée : quels agents construire, dans quel ordre, combien de temps, combien ça coûte, quel ROI attendu. Vous validez, on démarre. Pas de mauvaise surprise." },
  { n: '03', title: "La construction", time: '1 à 6 semaines', desc: "On développe vos agents IA et on les branche à vos outils (Gmail, Slack, HubSpot, Notion, votre CRM). On teste avec vous sur des cas réels. Jamais de boîte noire." },
  { n: '04', title: "L'autonomie", time: '1 semaine', desc: "On forme vos équipes à opérer, maintenir et faire évoluer le système. Le code, les accès, l'environnement : tout vous appartient. Vous reprenez seul quand vous voulez." },
];

export interface CaseStudyItem {
  chart: 'line' | 'bar' | 'donut' | 'wave';
  tag: string;
  client: string;
  desc: string;
  href: string;
}

export const caseStudies: CaseStudyItem[] = [
  { chart: 'line', tag: '×2 capacité à effectif constant', client: 'Cabinet comptable · Lyon', desc: "80 % de la saisie absorbée par les agents IA factures et rapprochement bancaire. −60 % de temps de production. +80 clients en 4 mois sans embauche.", href: '/cas-clients/cabinet-comptable-lyon/' },
  { chart: 'bar', tag: '+200 % RDV qualifiés en 4 mois', client: 'Négoce de vins bordelais', desc: "Agent SDR multilingue (français, anglais, mandarin, japonais) qui prospecte 24/7. Time-to-touch 18h → 4 min. Coût par RDV −80 %.", href: '/cas-clients/negoce-vins-bordelais-agent-ia-sdr/' },
  { chart: 'donut', tag: '70 % tickets N1 résolus en autonomie', client: 'Éditeur SaaS B2B · Service client', desc: "Time-to-response 18h → 4 min. CSAT 67 → 79. L'équipe support se concentre sur les cas complexes. Zéro départ d'équipe.", href: '/cas-clients/saas-b2b-agent-ia-service-client/' },
  { chart: 'wave', tag: 'Appels perdus 18 % → 0 %', client: "Cabinet d'avocats · Lyon", desc: "70 % des appels résolus directement par l'agent IA téléphonique. Prises de RDV ×2,3. 12h libérées par semaine pour l'assistante.", href: '/cas-clients/cabinet-avocats-agent-ia-telephonique/' },
];

export interface PricingPlan {
  name: string;
  badge: string;
  dark: boolean;
  titleText: string;
  titleAccent: string;
  price: string;
  features: string[];
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Agent simple',
    badge: 'Démarrage',
    dark: false,
    titleText: 'Agent IA sur-mesure en ',
    titleAccent: '1 semaine',
    price: '1 400 €',
    features: ['Agents IA sur-mesure', 'Architecture système incluse', 'Documentation & transfert', 'Solutions IA en data', 'Opérationnel en 1 semaine', '1 mois de support inclus'],
    cta: 'Parler à un consultant',
  },
  {
    name: 'Système multi-agents',
    badge: 'Le plus choisi',
    dark: true,
    titleText: 'Des ',
    titleAccent: 'agents IA orchestrés',
    price: 'Sur devis',
    features: ['3 à 6 agents intégrés', 'Architecture agentique', 'Déploiement 2 à 6 semaines', 'Formation équipe incluse', '3 mois de support', 'App métier sur-mesure'],
    cta: 'Parler à un consultant',
  },
];

export interface SecurityItem {
  title: string;
  desc: string;
}

export const securityItems: SecurityItem[] = [
  { title: '100 % conforme RGPD', desc: "Stockage, logs, droit à l'oubli. Documentation technique fournie sur demande." },
  { title: 'Hébergement en UE', desc: "Vos données ne quittent jamais le territoire européen. Serveurs en France." },
  { title: 'Instance privée', desc: "Votre environnement est totalement isolé. Aucun autre client n'y accède." },
  { title: "L'humain reste le pilote", desc: "Actions critiques soumises à validation humaine avant exécution. L'IA propose, l'humain décide." },
];

export interface FAQv2Item {
  q: string;
  a: string;
}

export const faqsV2: FAQv2Item[] = [
  { q: "Qu'est-ce qu'un agent IA, concrètement ?", a: "Un agent IA est un programme qui combine un modèle de langage (GPT, Claude, Mistral) et un accès à vos outils (mails, CRM, bases de données). Il peut lire une information, raisonner dessus, puis agir. Contrairement à un chatbot qui répond à des questions, un agent IA exécute des tâches de bout en bout." },
  { q: "Quelle est la différence entre automatisation classique et automatisation agentique ?", a: "Une automatisation classique suit des règles fixes : « si X alors Y ». Dès qu'un cas sort du scénario prévu, elle plante. Une automatisation agentique utilise l'IA pour comprendre le contexte et s'adapter. Elle gère les cas imprévus, apprend de ses erreurs et évolue. C'est ce qu'Althoce déploie." },
  { q: "Combien coûte un agent IA chez Althoce ?", a: "Nos agents démarrent à 1 400 € HT pour un cas d'usage unitaire. Un système multi-agents est sur devis. Un employé IA complet démarre à 30 000 € HT. L'audit initial (48h) est toujours offert, et chaque devis s'appuie sur un ROI chiffré." },
  { q: "En combien de temps voit-on les premiers résultats ?", a: "Un agent simple est opérationnel en 1 semaine. Un système multi-agents demande 2 à 6 semaines. Un employé IA complet, 8 à 12 semaines. Nos cycles sont volontairement courts : on déploie du concret rapidement, on mesure, on itère." },
  { q: "Mes employés vont-ils être remplacés par l'IA ?", a: "Non. Nos agents IA absorbent les tâches répétitives à faible valeur ajoutée. Vos équipes sont redéployées sur des missions à plus forte valeur. Aucun de nos clients n'a supprimé de poste suite à une mission Althoce — plusieurs en ont créé." },
  { q: "Mes données vont-elles être envoyées à OpenAI ou ChatGPT ?", a: "Uniquement si vous le décidez. Pour les clients qui exigent la souveraineté totale, nous utilisons des modèles hébergés en Europe (Mistral) ou auto-hébergés sur votre infrastructure. Les données sensibles sont filtrées avant tout appel à un LLM externe." },
  { q: "À qui appartient l'agent IA si on arrête notre collaboration ?", a: "À vous, à 100 %. Nous développons sur votre infrastructure. Code, accès, workflows : tout vous revient. Pas de rétention technique, pas d'abonnement obligatoire." },
  { q: "Est-ce que ça fonctionne pour une petite équipe (moins de 10 personnes) ?", a: "Oui, c'est même souvent là que le ROI est le plus rapide. Notre plus petit client faisait 4 salariés. Automatiser 20 % des tâches d'une personne lui rend un jour complet de travail par semaine." },
  { q: "Quelle est la différence entre Althoce et un cabinet de conseil IA ?", a: "Un cabinet vous remet un rapport et s'en va. Althoce conçoit, construit et déploie un système qui tourne réellement. Nous sommes un hybride : conseil + agence de développement. On réfléchit avec vous, puis on met les mains dans le code." },
  { q: "Travaillez-vous avec des entreprises hors de France ?", a: "Majoritairement, nous accompagnons des clients francophones (France, Belgique, Luxembourg, Suisse, Québec). Pour les missions en anglais, nous étudions au cas par cas." },
  { q: "Comment garantissez-vous que l'IA ne dira pas n'importe quoi à mes clients ?", a: "Chaque agent déployé en front client est encadré par des garde-fous : validation humaine sur les cas sensibles, filtres de contenu, base de connaissance fermée. Nous testons des centaines de cas avant la mise en production." },
  { q: "Où est basée Althoce ? Intervenez-vous dans toute la France ?", a: "Althoce est basée à Bordeaux, en Nouvelle-Aquitaine. Nous intervenons dans toute la France (Paris, Lyon, Toulouse, Marseille, et +15 villes secondaires). L'audit se fait idéalement sur site, le reste en distanciel." },
];

export const cities = {
  main: ['Paris', 'Lyon', 'Bordeaux', 'Toulouse', 'Marseille'],
  secondary: ['Nantes', 'Lille', 'Strasbourg', 'Nice', 'Rennes', 'Montpellier', 'Grenoble', 'Dijon', 'Reims', 'Angers', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Nîmes'],
};

export const heroLogos = [
  "https://i.ibb.co/QvCn9FsK/1-1.png",
  "https://i.ibb.co/9khZ8TVL/2-1.png",
  "https://i.ibb.co/ns9DWTLB/3-1.png",
  "https://i.ibb.co/Ps230D63/4-1.png",
  "https://i.ibb.co/4wcnk99K/5-1.png",
  "https://i.ibb.co/6R20gLT2/6.png",
  "https://i.ibb.co/zh3cCrgm/7.png",
  "https://i.ibb.co/Rkxh2p7z/8.png",
];

export interface ForWhoCard {
  title: string;
  desc: string;
  cta: string;
  href: string;
}

export const forWhoCards: ForWhoCard[] = [
  { title: 'PME — 20 à 200 salariés', desc: "Vous gérez des devis, des commandes, du SAV, du reporting financier ? On installe des agents IA qui absorbent les flux répétitifs. Marge retrouvée sans embaucher.", cta: "Automatisation IA pour PME →", href: "/solutions/pme/" },
  { title: 'ETI — 200 à 5 000 salariés', desc: "Vous avez déjà un SI robuste. On déploie des agents IA intégrés à vos outils existants (SAP, Salesforce, ServiceNow) pour décharger vos équipes. ROI garanti.", cta: "Automatisation IA pour ETI →", href: "/solutions/eti/" },
  { title: 'Agences & cabinets', desc: "Vous vendez du temps expert. Arrêtez d'en perdre à produire des reportings, trier des CV ou lire des contrats. Nos agents libèrent vos talents pour ce qui est facturable.", cta: "Voir nos automatisations métier →", href: "/automatisation/" },
];
