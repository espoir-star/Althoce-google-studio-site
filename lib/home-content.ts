import { faqsV2, type FAQv2Item } from './data';

// Positionnement et catalogue Drive d’octobre 2026 : voir docs/positionnement-2026-10.md.
export const homeOffers = [
  {
    title: 'Diagnostic IA',
    purpose: 'Savoir quoi faire.',
    desc: 'Clarifiez vos priorités avec un atelier ciblé, ou approfondissez vos usages et la faisabilité d’un projet avec un diagnostic adapté.',
    deliverable: 'Une synthèse et des priorités pour l’atelier ; une cartographie ou une étude de faisabilité pour le diagnostic.',
    href: '/services/audit-ia/',
    linkLabel: 'Découvrir notre audit IA',
  },
  {
    title: 'Déploiement & agents IA',
    purpose: 'Construire ce qui fait gagner du temps.',
    desc: 'Reliez l’IA à vos outils métier. Des agents et automatisations sur mesure, avec des données autorisées, des tests et des validations humaines.',
    deliverable: 'Mise en production, documentation, prise en main, correctifs initiaux pendant 30 jours et bilan à J+30.',
    href: '/services/automatisation-ia/',
    linkLabel: 'Découvrir nos automatisations IA',
  },
  {
    title: 'Pilotage & maintenance',
    purpose: 'Faire durer ce qui tourne.',
    desc: 'Gardez des solutions fiables au fil du temps. Nous suivons les usages, entretenons vos automatisations et les faisons évoluer avec vous.',
    deliverable: 'Un périmètre de maintenance et d’évolution sur devis, distinct de l’intégration initiale.',
    href: '/services/pilotage-ia/',
    linkLabel: 'Découvrir le pilotage IA',
  },
  {
    title: 'Formation IA',
    purpose: 'Monter en compétence.',
    desc: 'Apprenez à utiliser l’IA dans votre métier : vérifier les réponses, protéger les données et créer des outils pédagogiques réutilisables.',
    deliverable: 'Des formations métier et personnalisées, avec un financement à étudier selon votre situation et l’accord du financeur.',
    href: '/services/formation-ia/',
    linkLabel: 'Découvrir nos formations IA',
  },
];

export const homeMethod = [
  { n: '01', title: 'Comprendre', purpose: 'Savoir quoi faire, et dans quel ordre.', desc: 'Nous écoutons vos équipes et identifions les usages utiles, les données sensibles et vos obligations professionnelles.' },
  { n: '02', title: 'Équiper', purpose: 'Avoir les bons outils, bien cadrés.', desc: 'Nous choisissons les outils et définissons les données autorisées, les accès et les règles d’usage avec vos responsables.' },
  { n: '03', title: 'Automatiser', purpose: 'Construire ce qui fait gagner du temps.', desc: 'Nous concevons et testons sur des cas représentatifs, puis accompagnons la prise en main. Les décisions sensibles restent encadrées.' },
  { n: '04', title: 'Faire durer', purpose: 'Entretenir ce qui tourne.', desc: 'Un bilan à 30 jours accompagne l’intégration. La maintenance et les évolutions dans la durée sont définies séparément avec vous.' },
];

export const diagnosticSteps = [
  { title: 'Cadrage', desc: 'Périmètre, objectifs, critères de succès et interlocuteurs. La note de cadrage, y compris ce qui est hors périmètre, est validée par écrit.' },
  { title: 'Immersion et mesure', desc: 'Entretiens avec les personnes qui exécutent les tâches. On chronomètre, on observe les détours et les ressaisies d’un outil à l’autre.' },
  { title: 'Qualification', desc: 'Nous examinons les usages sur des exemples autorisés et vérifions les possibilités de connexion aux outils, selon le diagnostic retenu.' },
  { title: 'Priorisation et chiffrage', desc: 'Impact en heures, complexité, risque : on classe chaque cas et on chiffre le coût annuel des irritants avec vos données.' },
  { title: 'Restitution', desc: 'On vous remet le dossier et on présente les résultats. Le diagnostic recommande et chiffre ; il précise aussi ce qu’il ne traite pas.' },
];

export const homeCommitments = [
  { title: 'La prise en main est comprise.', desc: 'Chaque intégration comprend la prise en main, la documentation et des correctifs initiaux pendant 30 jours dans le périmètre convenu.' },
  { title: 'Vos exigences guident le projet.', desc: 'Nous cadrons les données, les accès et les contrôles avec vos responsables, en tenant compte de vos obligations et du secret professionnel lorsqu’il s’applique.' },
  { title: 'L’adoption se mesure dans le temps.', desc: 'Un bilan à J+30 permet d’examiner les usages. Le pilotage à plus long terme se définit selon vos besoins et les engagements convenus.' },
];

// Keep the established questions and vocabulary where relevant. Both the visible
// disclosures and FAQPage JSON-LD consume this exact array.
const faqOverrides: Record<number, FAQv2Item> = {
  0: { q: faqsV2[0].q, a: 'Un agent IA associe un modèle à des outils et à des actions autorisées. Il peut préparer un dossier, retrouver une information ou proposer une mise à jour. Nous définissons son périmètre, les accès et les validations avec votre équipe.' },
  1: { q: faqsV2[1].q, a: 'Une automatisation classique suit des règles définies. L’IA peut compléter ces règles pour interpréter un document ou qualifier une demande. Les exceptions et les décisions sensibles nécessitent des contrôles adaptés : le système ne devient pas infaillible.' },
  2: { q: faqsV2[2].q, a: 'Le prix dépend des processus, des connexions, des volumes et des risques. Le premier échange est offert. Un atelier peut clarifier les priorités ; un diagnostic technique peut être nécessaire avant de chiffrer une intégration complexe. Ces prestations ont un périmètre distinct.' },
  3: { q: faqsV2[3].q, a: 'Le calendrier dépend du périmètre, des accès et des essais avec vos équipes. Nous le définissons avant de construire. L’intégration comprend des correctifs initiaux pendant 30 jours et un bilan à J+30 ; la maintenance dans la durée se prévoit séparément.' },
  4: { q: faqsV2[4].q, a: 'Notre objectif est de soutenir votre expertise et d’alléger les tâches répétitives. Nous formons les équipes à vérifier les résultats et à garder la main. Les responsabilités et les décisions sensibles restent définies avec les personnes concernées.' },
  5: { q: faqsV2[5].q, a: 'Les fournisseurs, l’hébergement et les données autorisées sont choisis avec vous selon votre contexte. Nous examinons les accès, la confidentialité et les validations nécessaires avec vos responsables. Le secret professionnel et la réglementation applicable font partie du cadrage.' },
  6: { q: faqsV2[6].q, a: 'Les accès, la documentation et les livrables transférés sont définis au contrat, en tenant compte des licences des outils utilisés. La prise en main et les consignes de reprise manuelle font partie de l’intégration.' },
  7: { q: 'À qui s’adresse Althoce ?', a: 'Althoce accompagne les professions réglementées et les entreprises à fortes exigences de confidentialité, de sécurité et de maîtrise des usages. Le projet part de votre activité et de vos obligations, quelle que soit la taille de votre équipe.' },
  8: { q: 'Comment travaille votre cabinet de conseil et d’intégration IA ?', a: 'Nous formons les équipes, encadrons les usages et intégrons des agents IA ou des automatisations sur mesure. Un atelier, un diagnostic, une formation ou une intégration peut être choisi selon votre besoin. Une formation peut commencer sans diagnostic préalable.' },
  10: { q: 'Comment gardons-nous le contrôle sur les résultats de l’IA ?', a: 'Nous définissons les sources, les droits, les tests et les points de validation avec vos équipes. Les cas ambigus doivent pouvoir être repris par une personne. Les résultats sont vérifiés selon leur usage et le niveau de risque, sans promesse d’absence totale d’erreurs.' },
};
export const homeFaqs: FAQv2Item[] = faqsV2.map((item, index) => faqOverrides[index] ?? item);
