import { formationDirigeant } from './coaching-dirigeant';

/** Résumés communs aux pages formations et aux pages locales. */
export const formationCards = [
  { slug: 'ia-fondamentaux', title: 'Formation IA métier', note: 'Un programme adapté à votre profession', duration: '1 journée · 7 h · 12 participants maximum', text: 'Prompts, assistants, connexions et prototypes : pratiquer avec méthode, confidentialité et vérification des réponses.' },
  { slug: 'ia-avancee', title: 'Formation IA métier personnalisée', note: 'Deux à trois cas propres à votre organisation', duration: '1 journée · 7 h · Entretien préalable inclus', text: 'Des exercices et supports préparés avec vous, à partir de vos outils, de vos processus et de vos exigences.' },
  { slug: formationDirigeant.slug, title: formationDirigeant.title, ...formationDirigeant.card },
  { slug: 'coaching-independant', title: 'Coaching IA Solo', note: 'Pour indépendants et dirigeants de TPE', duration: '1 journée · 4 h 30 · Individuel en visio', text: 'Créer un assistant métier et prototyper une automatisation simple sur deux cas préparés en amont. Suivi à J+15.' },
];
