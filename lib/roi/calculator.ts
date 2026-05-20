import { AGENTS, POLES, type Agent, type Profile, type ROITotal } from './data';
export type { ROITotal } from './data';

const COUT_SETUP_PAR_AGENT   = 1000;
const COUT_MENSUEL_PAR_AGENT = 100;
const HEURES_DISPO_MOIS      = 156;
const TAUX_PLAFOND_CAPACITE  = 0.40;
const CALIBRATION_FACTOR     = 0.80;
const TAUX_ADOPTION_DEFAUT   = 0.7;

export function fmtEur(v: number, opts: { short?: boolean } = {}): string {
  if (!isFinite(v)) v = 0;
  const abs = Math.abs(v);
  if (opts.short) {
    if (abs >= 1_000_000) return `${(v / 1_000_000).toFixed(1).replace(/\.0$/, '')}M€`;
    if (abs >= 10_000)    return `${Math.round(v / 1000)}k€`;
    if (abs >= 1000)      return `${(v / 1000).toFixed(1).replace(/\.0$/, '')}k€`;
  }
  return Math.round(v).toLocaleString('fr-FR') + ' €';
}

export function fmtNum(v: number, dec = 0): string {
  if (!isFinite(v)) v = 0;
  return v.toLocaleString('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

export function getMaxAgentsPole(effectifPole: number): number {
  if (effectifPole <= 1)  return 1;
  if (effectifPole <= 2)  return 2;
  if (effectifPole <= 8)  return 3;
  if (effectifPole <= 25) return 4;
  return 5;
}

export function computeCoutHoraire(salaireMoyen: number, caAnnuel: number): number {
  const horaireBase = salaireMoyen / HEURES_DISPO_MOIS;
  // Smooth log interpolation: 0.82× at 100k€ CA → 1.38× at 1B€ CA
  // (ensures the CA slider always produces a visible change)
  const logMin = Math.log10(100_000);
  const logMax = Math.log10(1_000_000_000);
  const t = Math.max(0, Math.min(1,
    (Math.log10(Math.max(100_000, caAnnuel)) - logMin) / (logMax - logMin)
  ));
  const multSeniorite = 0.82 + t * (1.38 - 0.82);
  return horaireBase * multSeniorite;
}

function plafondCapacitePole(effectifPole: number): number {
  return Math.max(0, effectifPole) * HEURES_DISPO_MOIS * TAUX_PLAFOND_CAPACITE;
}

function heuresAgent(agent: Agent): number {
  const h = agent.heuresEcoTotales ?? 0;
  const adoption = agent.tauxAdoption ?? TAUX_ADOPTION_DEFAUT;
  return h * adoption;
}

// Scale agent hours with pole headcount (calibrated at 10 people = 1.0×)
// Ensures the effectif slider always influences the ROI
function effectifScale(effectifPole: number): number {
  const n = Math.max(1, effectifPole);
  return Math.max(0.35, Math.min(2.0, 0.6 + 0.4 * Math.log10(n)));
}

export function computeAgentROI(agent: Agent, profil: Profile) {
  const coutHoraire = computeCoutHoraire(profil.salaire, profil.ca);
  const effectifPole = profil.effectifs[agent.pole] || 1;
  const heures = heuresAgent(agent) * effectifScale(effectifPole);
  const gainMensuel = coutHoraire * heures;
  const heuresSemaine = heures / 4.33;
  return {
    gainMensuel: Math.round(gainMensuel),
    heuresSemaine,
    coutHoraire,
  };
}

function scoreAgent(agent: Agent, profil: Profile) {
  let score = 0;
  const effectif = profil.effectifs[agent.pole] || 0;
  if (effectif >= 1) score += 20;
  if (effectif >= 5) score += 10;

  const irritantsPole = profil.irritants[agent.pole] || [];
  const matched = (agent.triggersIrritants || []).filter(t => irritantsPole.includes(t)).length;
  score += matched * 25;

  const r = computeAgentROI(agent, profil);
  if (r.gainMensuel > 2000) score += 10;
  if (r.gainMensuel > 5000) score += 10;

  const h = agent.heuresEcoTotales || 0;
  if (h >= 80) score += 10;
  if (h >= 50) score += 5;

  return { agent, score };
}

export function recommendAgents(profil: Profile, opts: { grouped?: boolean } = {}): Agent[] | Record<string, Agent[]> {
  const grouped = !!opts.grouped;
  const polesActifs = profil.polesActifs || [];
  const groupedResult: Record<string, Agent[]> = {};
  const flat: Agent[] = [];

  polesActifs.forEach(pole => {
    const effectifPole = (profil.effectifs && profil.effectifs[pole]) || 1;
    const max = getMaxAgentsPole(effectifPole);
    const candidats = AGENTS.filter(a => a.pole === pole);
    const scored = candidats.map(a => scoreAgent(a, profil)).sort((a, b) => b.score - a.score);
    const top = scored.slice(0, max).map(s => s.agent);
    groupedResult[pole] = top;
    top.forEach(a => flat.push(a));
  });

  return grouped ? groupedResult : flat;
}

export function getAllAgentsForPole(pole: string, profil: Profile): Agent[] {
  const candidats = AGENTS.filter(a => a.pole === pole);
  return candidats.map(a => scoreAgent(a, profil))
    .sort((a, b) => b.score - a.score)
    .map(s => s.agent);
}

export function computeTotalROIByPole(agentsParPole: Record<string, Agent[]>, profil: Profile): ROITotal {
  const coutHoraire = computeCoutHoraire(profil.salaire, profil.ca);
  let gainMensuel = 0, heuresMensuelles = 0, nbAgents = 0;

  Object.entries(agentsParPole).forEach(([pole, agents]) => {
    if (!agents || !agents.length) return;
    const effectifPole = profil.effectifs[pole] || 1;
    const scale = effectifScale(effectifPole);
    const heuresBrutes = agents.reduce((s, a) => s + heuresAgent(a) * scale, 0);
    const plafond = plafondCapacitePole(effectifPole);
    const heuresCapees = Math.min(heuresBrutes, plafond);
    gainMensuel += coutHoraire * heuresCapees * CALIBRATION_FACTOR;
    heuresMensuelles += heuresCapees;
    nbAgents += agents.length;
  });

  const coutSetup   = nbAgents * COUT_SETUP_PAR_AGENT;
  const coutMensuel = nbAgents * COUT_MENSUEL_PAR_AGENT;
  const gainAnnuel  = gainMensuel * 12;
  const coutAn1     = coutSetup + coutMensuel * 12;
  const roiNetAn1   = gainAnnuel - coutAn1;
  const amortiMois  = coutSetup / Math.max(1, gainMensuel - coutMensuel);
  const heuresSemaine = heuresMensuelles / 4.33;

  let heuresGaspillees = 0;
  Object.entries(agentsParPole).forEach(([pole, agents]) => {
    const scale = effectifScale(profil.effectifs[pole] || 1);
    (agents || []).forEach(a => { heuresGaspillees += (a.heuresEcoTotales || 0) * scale / 4.33; });
  });

  return {
    gainMensuel: Math.round(gainMensuel),
    gainAnnuel:  Math.round(gainAnnuel),
    heuresSemaine: Math.round(heuresSemaine),
    heuresGaspillees: Math.round(heuresGaspillees),
    coutSetup, coutMensuel, coutAn1,
    roiNetAn1: Math.round(roiNetAn1),
    amortiMois,
    paybackMois: amortiMois,
    nbAgents,
    multiplicateur3ans: (gainAnnuel * 3) / Math.max(1, coutSetup + coutMensuel * 36),
  };
}

export function computeTotalROI(agents: Agent[], profil: Profile): ROITotal {
  const byPole: Record<string, Agent[]> = {};
  (agents || []).forEach(a => {
    if (!byPole[a.pole]) byPole[a.pole] = [];
    byPole[a.pole].push(a);
  });
  return computeTotalROIByPole(byPole, profil);
}

export async function submitLead(payload: Record<string, unknown>): Promise<{ ok: boolean; score?: number; error?: string; dev?: boolean }> {
  try {
    const response = await fetch('/api/roi-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[submitLead] Erreur réseau :', msg);
    return { ok: false, error: msg };
  }
}

export function buildLeadPayload(
  formData: { prenom: string; nom: string; email: string; tel: string; entreprise: string; consentement: boolean },
  profile: Profile,
  activeAgents: Agent[],
  total: ROITotal,
): Record<string, unknown> {
  const irritantsIds: string[] = [];
  Object.values(profile.irritants || {}).forEach(arr => {
    arr.forEach(id => { if (!irritantsIds.includes(id)) irritantsIds.push(id); });
  });

  const agentsMarquesNoms = (profile.agentsMarques || [])
    .map(id => { const a = AGENTS.find(x => x.id === id); return a ? a.nom : id; })
    .join(', ');

  const etp = total.heuresSemaine / 35;

  return {
    prenom: formData.prenom,
    nom: formData.nom,
    email: formData.email,
    telephone: formData.tel,
    entreprise: formData.entreprise,
    secteur: profile.secteur,
    secteur_personnalise: profile.secteurPersonnalise || '',
    effectif: profile.effectifTotal,
    ca_annuel: fmtEur(profile.ca, { short: true }),
    salaire_moyen: profile.salaire,
    poles_actifs: profile.polesActifs.join(', '),
    effectifs_par_pole: profile.effectifs,
    irritants_selectionnes: irritantsIds.join(', '),
    agents_recommandes_inclus_roi: activeAgents.map(a => a.nom).join(', '),
    agents_complementaires_marques: agentsMarquesNoms,
    roi_annuel: total.gainAnnuel,
    gain_mensuel: total.gainMensuel,
    heures_rendues_sem: total.heuresSemaine,
    equivalent_etp: parseFloat(etp.toFixed(1)),
    nb_agents_inclus: activeAgents.length,
    nb_agents_marques: (profile.agentsMarques || []).length,
    consentement_rgpd: formData.consentement === true,
    source_url: typeof window !== 'undefined' ? window.location.href : '',
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 200) : '',
  };
}

// Re-exports for convenience
export { AGENTS, POLES } from './data';
