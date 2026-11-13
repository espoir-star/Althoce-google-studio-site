import { metierDossiers, type MetierDossier } from "./metier-dossiers";
import type { ExpertiseFaq } from "./expertise";
export type MetierStory = {
  slug: string;
  name: string;
  intro: string;
  image: string;
  dossier: MetierDossier;
  promise: string;
  description: string;
  faq: ExpertiseFaq[];
};
const base = [
  { slug: "marketing", name: "Agent IA marketing", image: "case-marketing" },
  { slug: "commercial", name: "Agent IA commercial", image: "case-vins" },
  { slug: "service-client", name: "Agent IA service client", image: "support" },
  {
    slug: "telephonique",
    name: "Agent IA téléphonique",
    image: "case-avocats",
  },
  { slug: "rh", name: "Agent IA RH", image: "case-recrutement" },
  { slug: "finance", name: "Agent IA finance", image: "metiers-operations" },
  { slug: "operations", name: "Agent IA opérations", image: "case-operations" },
  { slug: "juridique", name: "Agent IA juridique", image: "case-juridique" },
  { slug: "achats", name: "Agent IA achats", image: "case-achats" },
];
const budgetFaq = {
  q: "Comment connaître le budget du projet ?",
  a: "Le premier échange permet de choisir la tâche à améliorer. Nous précisons ensuite les outils à relier, les fonctionnalités et l’accompagnement dans une proposition chiffrée.",
};
export const metierStories: MetierStory[] = base.map((x) => ({
  ...x,
  dossier: metierDossiers[x.slug],
  intro: metierDossiers[x.slug].intro,
  promise: metierDossiers[x.slug].headline,
  description: metierDossiers[x.slug].description,
  faq: [...metierDossiers[x.slug].faq, budgetFaq],
}));
export const metierHubFaq: ExpertiseFaq[] = [
  {
    q: "Que fait concrètement un agent IA ?",
    a: "Il utilise vos documents et vos consignes pour préparer un travail récurrent : retrouver une information, comparer des pièces ou rédiger un suivi. Nous le relions aux outils utiles et définissons avec vous les actions à valider.",
  },
  {
    q: "Faut-il créer plusieurs agents dès le départ ?",
    a: "Non. Nous commençons par une tâche prioritaire, puis évaluons son utilité avec votre équipe. D’autres usages peuvent être ajoutés progressivement.",
  },
  {
    q: "Formez-vous aussi les personnes qui vont les utiliser ?",
    a: "Oui. La prise en main porte sur le travail quotidien : vérifier une réponse, traiter une exception et faire remonter une amélioration. Le suivi après installation est défini avec vous.",
  },
  budgetFaq,
];
