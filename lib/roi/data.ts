export const TASKS = [
  { id: 'documents', title: 'Analyser des documents', description: 'Lire, comparer, extraire les informations utiles.' },
  { id: 'redaction', title: 'Rédiger et synthétiser', description: 'Comptes rendus, notes et premières versions.' },
  { id: 'messages', title: 'Traiter les mails et relances', description: 'Trier les demandes et préparer les réponses.' },
  { id: 'saisie', title: 'Éviter les ressaisies', description: 'Transférer et rapprocher les données entre outils.' },
  { id: 'recherche', title: 'Retrouver une information', description: 'Chercher dans les procédures et dossiers internes.' },
  { id: 'reporting', title: 'Préparer les reportings', description: 'Consolider les données et préparer les synthèses.' },
  { id: 'autre', title: 'Un autre usage métier', description: 'Décrivez la tâche que vous souhaitez étudier.' },
] as const;
export type TaskId = typeof TASKS[number]['id'];
export type NumericInput = number | null;
export type SimulationTask = { id: TaskId; hours: NumericInput };
export type Simulation = {
  sector: string; people: NumericInput; customTask: string; tasks: SimulationTask[];
  reduction: NumericInput; adoption: NumericInput; hourlyCost: NumericInput; weeks: NumericInput;
  setupCost: NumericInput; monthlyCost: NumericInput;
};
// Mêmes intitulés et même ordre que les pages /secteurs/ (lib/sectors-content.ts et lib/sector-additions.ts).
export const SECTORS = ['Finance', 'Expertise comptable', 'Droit & professions juridiques', 'Santé & médical', 'Assurance, courtage & patrimoine', 'Immobilier', 'Commerce', 'Hôtellerie', 'Retail & luxe', 'Industrie', 'Agences marketing & communication', 'Associations & fédérations', 'Secteur public & collectivités', 'Autre activité'];
export function initialSimulation(): Simulation {
  return { sector: '', people: null, customTask: '', tasks: [], reduction: 30, adoption: 70, hourlyCost: 35, weeks: 46, setupCost: null, monthlyCost: null };
}
export function exampleSimulation(): Simulation {
  return { ...initialSimulation(), sector: 'Expertise comptable', people: 5, tasks: [{ id: 'documents', hours: 10 }, { id: 'messages', hours: 5 }] };
}
export function taskTitle(task: SimulationTask, simulation: Simulation): string {
  return task.id === 'autre' ? simulation.customTask.trim() || 'Autre usage métier' : TASKS.find(t => t.id === task.id)!.title;
}
export const ROI_FAQ = [
  { q: 'Comment ce calculateur de ROI IA fonctionne-t-il ?', a: 'Vous indiquez les tâches étudiées et le temps total que votre équipe y consacre par semaine. Le calcul applique votre hypothèse de réduction du temps, puis le taux d’adoption. Le temps libérable est valorisé avec le coût horaire et le nombre de semaines travaillées que vous renseignez. Toutes ces hypothèses sont modifiables.' },
  { q: 'Le temps valorisé représente-t-il une économie réelle ?', a: 'Pas automatiquement. Il représente la valeur du temps qui pourrait être réaffecté à d’autres tâches. Une économie de trésorerie suppose une baisse effective des dépenses. La qualité du travail, la disponibilité pour les clients et la maîtrise des risques ne sont pas chiffrées dans cette simulation.' },
  { q: 'Quels coûts faut-il intégrer au ROI ?', a: 'La mise en place peut inclure le cadrage, l’intégration, les tests et la formation. Les coûts récurrents peuvent inclure les licences, la consommation des outils, la maintenance et le suivi. Renseignez votre propre budget : aucun tarif Althoce n’est prérempli. Sans budget complet, seul le potentiel de temps et sa valeur sont estimés.' },
  { q: 'Les pourcentages proposés sont-ils des résultats observés ?', a: 'Non. Les valeurs de départ et les scénarios sont des hypothèses d’exploration, pas des statistiques sectorielles ni des promesses de résultat. La réduction du temps doit tenir compte des relectures et des validations humaines. Un essai sur vos tâches permet de remplacer ces hypothèses par des mesures.' },
  { q: 'Cette estimation convient-elle aux professions réglementées ?', a: 'Elle donne un premier repère pour une profession réglementée ou une entreprise à fortes exigences. La faisabilité dépend ensuite des données, des outils, de la confidentialité et des validations propres au métier. Althoce définit ces conditions avec vous avant de concevoir une solution sur mesure.' },
  { q: 'Faut-il laisser ses coordonnées pour voir les résultats ?', a: 'Non. Les résultats et leur impression sont accessibles sans coordonnées. La simulation reste dans cet onglet pendant 30 minutes. Elle est transmise à Althoce uniquement si vous envoyez une demande de contact depuis le calculateur.' },
];
