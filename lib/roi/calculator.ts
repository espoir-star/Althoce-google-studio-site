import { TASKS, SECTORS, taskTitle, type Simulation, type NumericInput } from './data';
export type SimulationErrors = Record<string, string>;
export type SimulationResult = {
  currentWeeklyHours: number; savedWeeklyHours: number; savedAnnualHours: number; annualValue: number;
  reductionEffective: number; annualCost: number | null; netAnnualValue: number | null;
  roiPercent: number | null; paybackMonths: number | null;
  tasks: { id: string; title: string; currentHours: number; savedHours: number }[];
};
export function fmtNum(value: number, decimals = 0) {
  return (Number.isFinite(value) ? value : 0).toLocaleString('fr-FR', { maximumFractionDigits: decimals });
}
export function fmtEur(value: number) { return `${fmtNum(value)} €`; }
function inRange(value: NumericInput, min: number, max: number): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
}
export function validateSimulation(s: Simulation, step: 1 | 2 | 3 = 3): SimulationErrors {
  const errors: SimulationErrors = {};
  if (!inRange(s.people, 1, 10000) || !Number.isInteger(s.people)) errors.people = 'Indiquez entre 1 et 10 000 personnes.';
  if (!s.tasks.length) errors.tasks = 'Choisissez au moins une tâche à étudier.';
  if (s.tasks.some(t => !TASKS.some(known => known.id === t.id)) || new Set(s.tasks.map(t => t.id)).size !== s.tasks.length) errors.tasks = 'Vérifiez les tâches sélectionnées : chaque usage doit apparaître une seule fois.';
  if (s.tasks.some(t => t.id === 'autre') && !s.customTask.trim()) errors.customTask = 'Décrivez votre tâche en quelques mots.';
  if (s.customTask.length > 100) errors.customTask = 'Limitez la description à 100 caractères.';
  if (step === 1) return errors;
  s.tasks.forEach(t => { if (!inRange(t.hours, 0.25, 350000)) errors[t.id] = 'Indiquez un temps hebdomadaire supérieur ou égal à 0,25 h.'; });
  const total = s.tasks.reduce((sum, task) => sum + (task.hours || 0), 0);
  // Physical upper bound only. Hours are never multiplied by headcount.
  if (inRange(s.people, 1, 10000) && total > s.people * 168) errors.capacity = 'Ce total représente plus de 168 heures par personne et par semaine. Vérifiez les durées et le nombre de personnes concernées.';
  if (!inRange(s.reduction, 0, 100)) errors.reduction = 'Choisissez un pourcentage entre 0 et 100.';
  if (!inRange(s.adoption, 0, 100)) errors.adoption = 'Choisissez un pourcentage entre 0 et 100.';
  if (!inRange(s.hourlyCost, 1, 1000)) errors.hourlyCost = 'Indiquez un coût compris entre 1 et 1 000 € / h.';
  if (!inRange(s.weeks, 1, 52) || !Number.isInteger(s.weeks)) errors.weeks = 'Indiquez entre 1 et 52 semaines complètes.';
  // Budget fields only exist on the results step. Keep them reachable after navigating back.
  if (step === 2) return errors;
  for (const key of ['setupCost', 'monthlyCost'] as const) {
    if (s[key] !== null && !inRange(s[key], 0, 10000000)) errors[key] = 'Indiquez un montant entre 0 et 10 000 000 €.';
  }
  return errors;
}
export function calculateSimulation(s: Simulation): SimulationResult | null {
  if (Object.keys(validateSimulation(s)).length) return null;
  const reductionEffective = s.reduction! / 100 * s.adoption! / 100;
  const tasks = s.tasks.map(task => ({ id: task.id, title: taskTitle(task, s), currentHours: task.hours!, savedHours: task.hours! * reductionEffective }));
  const currentWeeklyHours = tasks.reduce((sum, task) => sum + task.currentHours, 0);
  const savedWeeklyHours = currentWeeklyHours * reductionEffective;
  const savedAnnualHours = savedWeeklyHours * s.weeks!;
  const annualValue = savedAnnualHours * s.hourlyCost!;
  const hasBudget = s.setupCost !== null && s.monthlyCost !== null;
  const annualCost = hasBudget ? s.setupCost! + s.monthlyCost! * 12 : null;
  const netAnnualValue = annualCost !== null ? annualValue - annualCost : null;
  const monthlyNetValue = annualValue / 12 - (s.monthlyCost ?? 0);
  return {
    currentWeeklyHours, savedWeeklyHours, savedAnnualHours, annualValue, reductionEffective, tasks, annualCost, netAnnualValue,
    roiPercent: annualCost !== null && annualCost > 0 ? netAnnualValue! / annualCost * 100 : null,
    // Never manufacture a payback when recurring costs exceed the value of time.
    paybackMonths: hasBudget && monthlyNetValue > 0 ? s.setupCost! / monthlyNetValue : null,
  };
}
export const STORAGE_KEY = 'althoce-roi-simulation-v4';
export function restoreSimulation(raw: string | null, now = Date.now()): Simulation | null {
  if (!raw) return null;
  try {
    const { version, savedAt, simulation: s } = JSON.parse(raw);
    if (version !== 4 || !Number.isFinite(savedAt) || savedAt > now || now - savedAt > 30 * 60 * 1000 || !s || typeof s !== 'object') return null;
    if (typeof s.sector !== 'string' || (s.sector && !SECTORS.includes(s.sector)) || typeof s.customTask !== 'string' || s.customTask.length > 100) return null;
    if (!Array.isArray(s.tasks) || s.tasks.length > TASKS.length || new Set(s.tasks.map(t => t?.id)).size !== s.tasks.length) return null;
    if (s.tasks.some(t => !t || !TASKS.some(p => p.id === t.id) || (t.hours !== null && !inRange(t.hours, 0, 350000)))) return null;
    const bounds = { people: 10000, reduction: 100, adoption: 100, hourlyCost: 1000, weeks: 52, setupCost: 10000000, monthlyCost: 10000000 };
    for (const [key, max] of Object.entries(bounds)) if (s[key] !== null && !inRange(s[key], 0, max)) return null;
    return { sector: s.sector, customTask: s.customTask, tasks: s.tasks.map(t => ({ id: t.id, hours: t.hours })), people: s.people, reduction: s.reduction, adoption: s.adoption, hourlyCost: s.hourlyCost, weeks: s.weeks, setupCost: s.setupCost, monthlyCost: s.monthlyCost };
  } catch { return null; }
}
export type LeadData = { prenom: string; nom: string; email: string; tel: string; entreprise: string; consentement: boolean };
export function buildLeadPayload(form: LeadData, s: Simulation, result: SimulationResult): Record<string, unknown> {
  // Existing webhook contract retained. No catalogue agents are recommended.
  const assumptions = `${result.tasks.map(t => `${t.title}: ${fmtNum(t.currentHours, 2)} h/sem pour l’équipe`).join('; ')}. Réduction nette ${s.reduction} %, adoption ${s.adoption} %, ${s.weeks} sem/an, ${s.hourlyCost} €/h. Budget initial: ${s.setupCost ?? 'non renseigné'}; mensuel: ${s.monthlyCost ?? 'non renseigné'}. Valeur du temps, pas une économie de trésorerie.`;
  return {
    prenom: form.prenom, nom: form.nom, email: form.email, telephone: form.tel, entreprise: form.entreprise,
    secteur: s.sector || 'Non précisé', secteur_personnalise: '', effectif: s.people,
    ca_annuel: 'Non renseigné', salaire_moyen: s.hourlyCost! * 35 * 52 / 12,
    poles_actifs: 'Périmètre de simulation', effectifs_par_pole: { equipe: s.people },
    irritants_selectionnes: assumptions, agents_recommandes_inclus_roi: '', agents_complementaires_marques: '',
    roi_annuel: result.annualValue, gain_mensuel: result.annualValue / 12,
    heures_rendues_sem: result.savedWeeklyHours, equivalent_etp: result.savedWeeklyHours / 35,
    nb_agents_inclus: 0, nb_agents_marques: 0, consentement_rgpd: form.consentement,
    source_url: typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '',
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 200) : '',
  };
}
export async function submitLead(payload: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch('/api/roi-lead/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const result = await response.json();
    return response.ok && result.ok === true ? { ok: true } : { ok: false, error: result.error || 'Envoi impossible. Veuillez réessayer.' };
  } catch { return { ok: false, error: 'Connexion impossible. Votre estimation reste disponible. Réessayez dans un instant.' }; }
}
