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

export const stats: StatItem[] = [
  { value: "-70%", label: "Temps de Saisie", description: "Administratif réduit." },
  { value: "+758", label: "Flows Créés", description: "Actifs 24h/24." },
  { value: "+5M€", label: "Économisés", description: "Pour nos clients." }
];

export const methodologySteps = [
  {
    id: "01",
    title: "L'Audit",
    desc: "On ne devine pas, on mesure. Cartographie précise des tâches chronophages.",
    icon: BarChart3
  },
  {
    id: "02",
    title: "Le Plan",
    desc: "Roadmap claire : quels outils, pour quels résultats, en combien de temps.",
    icon: Layers
  },
  {
    id: "03",
    title: "La Création",
    desc: "Développement des agents et connexion à vos logiciels (Slack, CRM, Mails).",
    icon: Cpu
  },
  {
    id: "04",
    title: "L'Autonomie",
    desc: "Formation des équipes. Vous repartez avec les clés d'un système autonome.",
    icon: CheckCircle2
  }
];

export const useCases: UseCaseItem[] = [
  {
    title: "Vente & Growth",
    quote: "\"Fini le copier-coller dans le CRM.\"",
    description: "Automatisez la prospection ultra-personnalisée et le scoring de leads. Vos commerciaux ne parlent qu'à des gens qualifiés."
  },
  {
    title: "Relation Client",
    quote: "\"Répondez à 3h du matin.\"",
    description: "Des agents IA qui résolvent les tickets complexes avec votre ton de voix et une disponibilité totale."
  },
  {
    title: "Opérations & Admin",
    quote: "\"Zéro saisie manuelle.\"",
    description: "Facturation automatique, tri de documents intelligents. L'erreur humaine disparaît de l'équation."
  },
  {
    title: "Ressources Humaines",
    quote: "\"Recrutez sur les compétences.\"",
    description: "Analyse prédictive des CV et automatisation de l'onboarding pour une expérience candidat impeccable."
  }
];

export const detailedUseCases = [
  { ...useCases[0], icon: Briefcase, stat: "+30% Leads" },
  { ...useCases[1], icon: MessageSquare, stat: "-80% Latence" },
  { ...useCases[2], icon: Settings2, stat: "0 Erreur" },
  { ...useCases[3], icon: UserCheck, stat: "x2 Vitesse" }
];

export const services: ServiceItem[] = [
  {
    title: "Audit & Roadmap IA",
    description: "Diagnostic 48h. Arrêtez de tester, commencez à implémenter.",
    icon: ScanLine
  },
  {
    title: "Agents IA Autonomes",
    description: "Entités capables de réfléchir, prioriser et exécuter des tâches complexes.",
    icon: Cpu
  },
  {
    title: "Apps Métiers sur-mesure",
    description: "Outils internes boostés à l'IA pour centraliser votre puissance.",
    icon: Blocks
  },
  {
    title: "Formation & Workshops",
    description: "On lève les peurs et on installe une culture de l'efficacité.",
    icon: Zap
  }
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "Althoce ne se contente pas d'automatiser : ils repensent vos process pour supprimer l'inutile. Une vision claire, une exécution rapide et un vrai accompagnement stratégique.",
    author: "Marc A.",
    role: "Head of Performance",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
  },
  {
    quote: "On a divisé par deux notre temps administratif. L'expérience client est plus fluide et j'ai pu me concentrer sur la vente : nos résultats ont doublé en quelques mois.",
    author: "Sarah L.",
    role: "Responsable Développement Commercial",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3"
  },
  {
    quote: "Althoce n'a pas installé un logiciel, ils ont installé une nouvelle ère. On fait enfin notre vrai métier : le conseil.",
    author: "Sophie M.",
    role: "Fondatrice",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3"
  },
  {
    quote: "On passait 15h/semaine sur les leads. C'est tombé à 10 min. On a doublé nos RDV en deux mois.",
    author: "Thomas L.",
    role: "Directeur des Opérations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
  },
  {
    quote: "Grâce à Althoce, l'IA est devenue un collègue sur qui on peut compter. On a retrouvé du temps pour nos clients.",
    author: "Lise K.",
    role: "Agence Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Comment gérez-vous la maintenance du système ?",
    answer: "Nous ne nous contentons pas de \"livrer et partir\". Le monde de l'API et des LLM évolue vite : nous assurons une veille constante pour mettre à jour vos connecteurs, optimiser vos modèles d'IA et corriger le moindre bug. En bref : on garde le cap sous le capot pour que votre moteur ne s'arrête jamais."
  },
  {
    question: "À qui appartient le système si notre collaboration s'arrête ?",
    answer: "À vous, à 100 %. Nous développons exclusivement sur votre propre instance n8n. Contrairement à d'autres agences, nous ne pratiquons pas la \"rétention technique\" : si vous décidez de voler de vos propres ailes, vous gardez les clés, les accès et l'intégralité du code instantanément."
  },
  {
    question: "Combien de temps faut-il pour voir mes premières automatisations en production ?",
    answer: "L'agilité est notre priorité. Selon la complexité de vos processus, comptez entre 2 et 7 semaines pour passer du concept à une automatisation fonctionnelle et testée. Nous privilégions des cycles courts pour que vous puissiez mesurer le ROI le plus vite possible."
  },
  {
    question: "Peut-on héberger les workflows sur nos propres serveurs ?",
    answer: "Absolument. Nous prônons la souveraineté numérique. Si vous avez les ressources en interne, nous installons le système sur votre infrastructure. Il faudra simplement nous assurer ensemble que votre configuration (VPS/Serveur) est assez robuste pour encaisser la puissance de nos automatisations."
  },
  {
    question: "Comment garantissez-vous la protection de nos données ?",
    answer: "La data est votre actif le plus précieux. Nous utilisons des serveurs (VPS) exclusivement situés en Union Européenne et sélectionnons des outils 100% conformes au RGPD. Aucun compromis n'est fait sur la confidentialité : vos données restent sous votre contrôle, dans un environnement sécurisé et cloisonné."
  },
  {
    question: "L'IA va-t-elle remplacer mes employés ?",
    answer: "Non, elle va remplacer leur ennui. Notre mission est d'automatiser les 80 % de tâches répétitives et sans valeur ajoutée qui saturent vos journées. L'objectif ? Libérer vos talents pour qu'ils se concentrent sur les 20 % de missions stratégiques là où l'humain est irremplaçable (et là où se crée la vraie croissance)."
  }
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
