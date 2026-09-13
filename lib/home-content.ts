import { faqsV2, type FAQv2Item } from './data';

// Homepage editorial source (12 September 2026):
// https://espoir-metareglage.notion.site/Althoce-Notre-approche-notre-m-thode-nos-offres-3d9c7d01a0e88143bd73e9c1e722f1cf
// Kept separate from service-page copy until the wider site reorganisation.
export const homeOffers = [
  {
    title: 'Diagnostic IA',
    purpose: 'Savoir quoi faire.',
    desc: 'Repérez où l’IA peut vraiment vous aider. Nous étudions vos usages et construisons une feuille de route claire, avec vos priorités.',
    deliverable: 'Une feuille de route sur six mois, une bibliothèque de prompts et une note de conformité RGPD et AI Act.',
    href: '/services/audit-ia/',
    linkLabel: 'Découvrir notre audit IA',
  },
  {
    title: 'Déploiement & agents IA',
    purpose: 'Construire ce qui fait gagner du temps.',
    desc: 'Libérez vos équipes des tâches répétitives grâce à des agents IA et des automatisations sur mesure, intégrés à vos outils.',
    deliverable: 'Mise en production, session de transfert, documentation d’usage et un mois de maintenance inclus.',
    href: '/services/automatisation-ia/',
    linkLabel: 'Découvrir nos automatisations IA',
  },
  {
    title: 'Pilotage & maintenance',
    purpose: 'Faire durer ce qui tourne.',
    desc: 'Gardez des solutions fiables au fil du temps. Nous suivons les usages, entretenons vos automatisations et les faisons évoluer avec vous.',
    deliverable: 'Un accompagnement dans la durée, avec un contrat annuel et un suivi de l’adoption.',
    href: '/services/pilotage-ia/',
    linkLabel: 'Découvrir le pilotage IA',
  },
  {
    title: 'Formation IA',
    purpose: 'Monter en compétence.',
    desc: 'Donnez à vos équipes la confiance et les compétences pour utiliser l’IA au quotidien. Des formations et du coaching sur vos cas réels.',
    deliverable: 'Des formations éligibles à un financement OPCO via notre organisme partenaire.',
    href: '/services/formation-ia/',
    linkLabel: 'Découvrir nos formations IA',
  },
];

export const homeMethod = [
  { n: '01', title: 'Comprendre', purpose: 'Savoir quoi faire, et dans quel ordre.', desc: 'Nous écoutons vos équipes et observons leur quotidien pour choisir les sujets qui méritent votre attention.' },
  { n: '02', title: 'Équiper', purpose: 'Avoir les bons outils, bien cadrés.', desc: 'Nous choisissons les bons outils et posons un cadre simple. Si vos logiciels actuels suffisent, nous vous le disons.' },
  { n: '03', title: 'Automatiser', purpose: 'Construire ce qui fait gagner du temps.', desc: 'Nous construisons, testons avec vous et accompagnons la prise en main. Vos équipes savent utiliser ce qui a été mis en place.' },
  { n: '04', title: 'Faire durer', purpose: 'Entretenir ce qui tourne.', desc: 'Nous faisons le point à 30 et à 90 jours, puis entretenons les solutions pour qu’elles continuent à vous servir.' },
];

export const diagnosticSteps = [
  { title: 'Cadrage', desc: 'Périmètre, objectifs, critères de succès et interlocuteurs. La note de cadrage, y compris ce qui est hors périmètre, est validée par écrit.' },
  { title: 'Immersion et mesure', desc: 'Entretiens avec les personnes qui exécutent les tâches. On chronomètre, on observe les détours et les ressaisies d’un outil à l’autre.' },
  { title: 'Qualification', desc: 'Chaque cas d’usage est testé sur vos dossiers réels. On vérifie en parallèle la connectivité de vos outils.' },
  { title: 'Priorisation et chiffrage', desc: 'Impact en heures, complexité, risque : on classe chaque cas et on chiffre le coût annuel des irritants avec vos données.' },
  { title: 'Restitution', desc: 'On vous remet le dossier et on présente les résultats. Le diagnostic recommande et chiffre ; il précise aussi ce qu’il ne traite pas.' },
];

export const homeCommitments = [
  { title: 'La prise en main est comprise.', desc: 'Chaque déploiement inclut une session de transfert avec les personnes concernées, une documentation d’usage et un mois de maintenance. Un outil que personne n’utilise n’est pas un projet livré.' },
  { title: 'La conformité fait partie du projet.', desc: 'RGPD, AI Act, charte d’usage et choix d’outils européens quand c’est pertinent. Pour les professions réglementées, le cadre est adapté au secret professionnel.' },
  { title: 'L’adoption se mesure dans le temps.', desc: 'Les usages sont mesurés à 30 et à 90 jours. La mise en production est une étape : ce qui compte, c’est que la solution continue à servir vos équipes.' },
];

// Keep the established questions and vocabulary where relevant. Both the visible
// disclosures and FAQPage JSON-LD consume this exact array.
const faqOverrides: Record<number, FAQv2Item> = {
  2: { q: faqsV2[2].q, a: 'Le chiffrage dépend des outils à connecter, de la qualité de leurs API et du périmètre visé. Tout démarre par un premier échange. Nous mesurons ensuite les tâches et qualifions les cas d’usage avant de chiffrer. Le diagnostic remet une feuille de route ; il recommande et chiffre, mais n’exécute pas les déploiements.' },
  3: { q: faqsV2[3].q, a: 'Le calendrier dépend du périmètre et de vos outils. On le précise après le cadrage et la mesure des tâches, avant de lancer les chantiers. Le diagnostic fournit déjà des prompts utilisables immédiatement et une feuille de route sur six mois. Après déploiement, les usages sont mesurés à 30 et à 90 jours.' },
  4: { q: faqsV2[4].q, a: 'Notre démarche part du travail réel de vos équipes. Les agents IA et automatisations prennent en charge des tâches répétitives pour libérer du temps sur les missions qui demandent du jugement et de la relation client. Chaque déploiement comprend une session de transfert et une documentation d’usage pour les personnes concernées.' },
  5: { q: faqsV2[5].q, a: 'Le choix des outils et des données qu’ils peuvent traiter fait partie du cadrage. Nous examinons les exigences RGPD, AI Act et de confidentialité, avec des outils européens quand c’est pertinent. Une charte d’usage encadre les pratiques. Pour les professions réglementées, ce cadre est adapté au secret professionnel.' },
  7: { q: faqsV2[7].q, a: 'Oui. Althoce accompagne les PME, cabinets et agences. Le point de départ est un besoin concret, pas un nombre de salariés : des tâches qui prennent du temps, des outils mal utilisés ou des usages IA à structurer. Si votre logiciel actuel suffit, nous le disons avant de proposer une automatisation.' },
  8: { q: 'Comment travaille votre cabinet de conseil IA ?', a: 'Althoce accompagne les entreprises en quatre temps : comprendre, équiper, automatiser et faire durer. On part de votre organisation et de vos usages, puis on décide ce qui mérite d’être construit. Le diagnostic, l’équipement, le déploiement, le pilotage et les formations sont des accompagnements distincts, adaptés à votre point de départ.' },
  10: { q: faqsV2[10].q, a: 'On définit le périmètre et les critères de succès avant de construire. Les cas d’usage sont qualifiés sur vos dossiers réels, avec une attention à leur impact, leur complexité et leur risque. Les actions sensibles sont cadrées avec vous et les équipes sont accompagnées dans la prise en main.' },
};
export const homeFaqs: FAQv2Item[] = faqsV2.map((item, index) => faqOverrides[index] ?? item);
