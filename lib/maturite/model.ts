/**
 * Test de maturité IA — calcul du résultat. Fonctions pures, sans accès réseau ni navigateur.
 * Utilisé à l’identique dans la page (résultat immédiat) et côté serveur (résumé joint à une demande de contact).
 */
import { DIMENSIONS, QUESTIONS, QUESTION_IDS, ROLES, SECTOR_DETAIL_MAX, SECTOR_OPTIONS, SENSITIVE_SECTORS, SIZES, type Answer, type Answers, type DimensionId, type Profile, type QuestionId, type RoleId, type SizeId } from './questions';

export type Band = 'low' | 'mid' | 'high';
export type Stage = 0 | 1 | 2 | 3;
export type SignalId =
  | 'donnees_exposees' | 'comptes_personnels' | 'interdit_sans_alternative' | 'automatisation_sans_validation'
  | 'usages_sans_cadre' | 'relecture_implicite' | 'outils_sans_formation' | 'equipes_sans_cap'
  | 'direction_sans_relais' | 'savoir_concentre' | 'usage_generaliste' | 'sans_mesure';
export type StrengthId = 'cadre_pose' | 'sujet_porte' | 'equipe_formee' | 'methodes_partagees' | 'outils_verifies' | 'ia_reliee' | 'effets_suivis' | 'priorites_classees';
export type ActionId = 'premier_usage' | 'regles_donnees' | 'outil_pro' | 'validation' | 'formation_metier' | 'priorites' | 'methodes' | 'cas_metier' | 'mesure' | 'integration' | 'suivi';
/** Accompagnements du catalogue Althoce. Voir docs/positionnement-2026-10.md. */
export type OfferId = 'coaching_solo' | 'formation_dirigeant' | 'atelier_priorites' | 'diagnostic_organisationnel' | 'formation_metier' | 'formation_personnalisee' | 'diagnostic_technique' | 'deploiement' | 'pilotage' | 'centrale';
export type Result = {
  /** Vrai si le nombre de réponses permet d’établir un score. */
  scored: boolean;
  total: number | null;
  stage: Stage | null;
  dims: Record<DimensionId, number | null>;
  bands: Record<DimensionId, Band | null>;
  weights: Record<DimensionId, number>;
  sensitive: boolean;
  answered: number;
  unknown: QuestionId[];
  signals: SignalId[];
  strengths: StrengthId[];
  priorities: ActionId[];
  /** Accompagnements proposés : le premier est la recommandation principale. */
  offers: OfferId[];
};

/** Quatre stades, alignés sur les quatre situations proposées à chaque question. */
export const STAGES: { name: string; tagline: string; min: number; max: number }[] = [
  { name: 'Exploration', tagline: 'L’IA reste un sujet de veille.', min: 0, max: 24 },
  { name: 'Usages dispersés', tagline: 'Des usages existent, chacun de son côté.', min: 25, max: 49 },
  { name: 'Pratique encadrée', tagline: 'L’IA est utilisée avec méthode.', min: 50, max: 74 },
  { name: 'IA intégrée au métier', tagline: 'L’IA fait partie de vos méthodes de travail.', min: 75, max: 100 },
];
export const MIN_ANSWERS = 10;
export const MIN_DIMENSIONS = 4;
const DIMENSION_IDS = DIMENSIONS.map(dimension => dimension.id);

export function isSensitive(sector: string) { return SENSITIVE_SECTORS.includes(sector); }
/** Pondération sur 100. Dans les secteurs sensibles, le cadre pèse plus que l’intégration. */
export function weightsFor(sector: string): Record<DimensionId, number> {
  return isSensitive(sector)
    ? { cap: 20, usages: 20, cadre: 25, competences: 20, integration: 15 }
    : { cap: 20, usages: 20, cadre: 20, competences: 20, integration: 20 };
}
export function bandOf(score: number): Band { return score <= 33 ? 'low' : score <= 66 ? 'mid' : 'high'; }
export function stageOf(total: number): Stage { return total < 25 ? 0 : total < 50 ? 1 : total < 75 ? 2 : 3; }
export function isValidAnswer(value: unknown): value is Answer { return value === -1 || value === 0 || value === 1 || value === 2 || value === 3; }
export function isProfileComplete(profile: Profile) {
  return SECTOR_OPTIONS.some(sector => sector.slug === profile.sector) && SIZES.some(size => size.id === profile.size) && ROLES.some(role => role.id === profile.role);
}
export function isComplete(answers: Answers) { return QUESTION_IDS.every(id => isValidAnswer(answers[id])); }

const SIGNAL_ORDER: SignalId[] = ['donnees_exposees', 'comptes_personnels', 'interdit_sans_alternative', 'automatisation_sans_validation', 'usages_sans_cadre', 'relecture_implicite', 'outils_sans_formation', 'equipes_sans_cap', 'direction_sans_relais', 'savoir_concentre', 'usage_generaliste', 'sans_mesure'];
export const SIGNAL_ACTION: Record<SignalId, ActionId> = {
  donnees_exposees: 'regles_donnees', comptes_personnels: 'outil_pro', interdit_sans_alternative: 'outil_pro',
  automatisation_sans_validation: 'validation', usages_sans_cadre: 'regles_donnees', relecture_implicite: 'validation',
  outils_sans_formation: 'formation_metier', equipes_sans_cap: 'priorites', direction_sans_relais: 'formation_metier',
  savoir_concentre: 'methodes', usage_generaliste: 'cas_metier', sans_mesure: 'mesure',
};
const STRENGTH_ORDER: StrengthId[] = ['cadre_pose', 'sujet_porte', 'equipe_formee', 'methodes_partagees', 'outils_verifies', 'ia_reliee', 'effets_suivis', 'priorites_classees'];
/** En cas d’égalité entre dimensions, on traite d’abord ce qui conditionne le reste. */
const TIE_ORDER: DimensionId[] = ['usages', 'cadre', 'competences', 'cap', 'integration'];
/** Accompagnement qui répond à une priorité. Les indépendants sont orientés vers le coaching individuel. */
export function offerFor(action: ActionId, solo: boolean): OfferId {
  if (solo && action !== 'regles_donnees' && action !== 'outil_pro' && action !== 'validation' && action !== 'integration' && action !== 'suivi') return 'coaching_solo';
  switch (action) {
    case 'premier_usage': case 'formation_metier': return 'formation_metier';
    case 'methodes': case 'cas_metier': return 'formation_personnalisee';
    case 'regles_donnees': case 'outil_pro': case 'validation': return 'diagnostic_organisationnel';
    case 'priorites': case 'mesure': return 'atelier_priorites';
    case 'integration': return 'diagnostic_technique';
    case 'suivi': return 'pilotage';
  }
}
export const MAX_OFFERS = 3;
export const MAX_SIGNALS = 3;
export const MAX_STRENGTHS = 3;

export function computeResult(profile: Profile, answers: Answers): Result {
  /** Valeur d’une réponse, ou null si absente ou « Je ne sais pas ». */
  const v = (id: QuestionId): number | null => { const value = answers[id]; return isValidAnswer(value) && value >= 0 ? value : null; };
  const atLeast = (id: QuestionId, min: number) => { const value = v(id); return value !== null && value >= min; };
  const atMost = (id: QuestionId, max: number) => { const value = v(id); return value !== null && value <= max; };
  const is = (id: QuestionId, value: number) => v(id) === value;

  const dims = {} as Record<DimensionId, number | null>;
  const bands = {} as Record<DimensionId, Band | null>;
  for (const id of DIMENSION_IDS) {
    const values = QUESTIONS.filter(question => question.dim === id).map(question => v(question.id)).filter((value): value is number => value !== null);
    // Une dimension se lit sur au moins deux réponses.
    dims[id] = values.length >= 2 ? Math.round(100 * values.reduce((sum, value) => sum + value, 0) / (3 * values.length)) : null;
    bands[id] = dims[id] === null ? null : bandOf(dims[id]!);
  }
  const weights = weightsFor(profile.sector);
  const evaluated = DIMENSION_IDS.filter(id => dims[id] !== null);
  const answered = QUESTION_IDS.filter(id => v(id) !== null).length;
  const unknown = QUESTION_IDS.filter(id => answers[id] === -1);
  const scored = evaluated.length >= MIN_DIMENSIONS && answered >= MIN_ANSWERS;
  const total = scored ? Math.round(evaluated.reduce((sum, id) => sum + dims[id]! * weights[id], 0) / evaluated.reduce((sum, id) => sum + weights[id], 0)) : null;
  const d = (id: DimensionId) => dims[id];
  const used = atLeast('usa1', 1);
  const solo = profile.size === 'solo';

  const triggered: Record<SignalId, boolean> = {
    donnees_exposees: is('cad2', 0) && used,
    comptes_personnels: atMost('int1', 1) && used,
    interdit_sans_alternative: is('cad2', 1),
    automatisation_sans_validation: atLeast('int3', 2) && atMost('cad3', 1),
    usages_sans_cadre: false,
    relecture_implicite: false,
    outils_sans_formation: atLeast('int1', 2) && atMost('com1', 1),
    equipes_sans_cap: d('usages') !== null && d('cap') !== null && d('usages')! >= 56 && d('cap')! <= 33,
    direction_sans_relais: d('usages') !== null && d('cap') !== null && d('cap')! >= 67 && d('usages')! <= 33,
    savoir_concentre: !solo && used && is('usa3', 1) && atMost('com2', 1),
    usage_generaliste: atLeast('usa1', 2) && is('usa2', 1),
    sans_mesure: atLeast('usa1', 2) && atMost('cap3', 1),
  };
  // Deux signaux plus généraux ne doublent pas un signal précis déjà relevé.
  triggered.usages_sans_cadre = !triggered.donnees_exposees && d('usages') !== null && d('cadre') !== null && d('usages')! >= 44 && d('usages')! - d('cadre')! >= 30;
  triggered.relecture_implicite = !triggered.automatisation_sans_validation && atLeast('usa2', 2) && atMost('cad3', 1);
  const allSignals = SIGNAL_ORDER.filter(id => triggered[id]);

  const strong: Record<StrengthId, boolean> = {
    cadre_pose: d('cadre') !== null && d('cadre')! >= 67,
    sujet_porte: is('cap1', 3), equipe_formee: is('com1', 3), methodes_partagees: is('usa3', 3),
    outils_verifies: is('int1', 3), ia_reliee: is('int2', 3), effets_suivis: is('cap3', 3), priorites_classees: is('cap2', 3),
  };

  const dimensionAction = (id: DimensionId): ActionId | null => {
    const band = bands[id];
    if (!band) return null;
    if (id === 'cap') return band === 'high' ? null : band === 'low' ? 'priorites' : atMost('cap3', 1) ? 'mesure' : 'priorites';
    if (id === 'usages') return band === 'high' ? null : band === 'low' ? 'premier_usage' : 'methodes';
    if (id === 'cadre') return band === 'high' ? null : band === 'low' ? 'regles_donnees' : 'validation';
    if (id === 'competences') return band === 'high' ? null : 'formation_metier';
    return band === 'high' ? 'suivi' : atMost('int1', 1) ? 'outil_pro' : 'integration';
  };
  const candidates: ActionId[] = [];
  // On n’automatise pas ce qui n’est pas encadré : le cadre passe en premier dès qu’il y a des usages.
  const frameFirst = bands.cadre === 'low' && used;
  if (frameFirst) candidates.push('regles_donnees');
  for (const id of allSignals) candidates.push(SIGNAL_ACTION[id]);
  const byScore = [...evaluated].sort((a, b) => dims[a]! - dims[b]! || TIE_ORDER.indexOf(a) - TIE_ORDER.indexOf(b));
  for (const id of byScore) { const action = dimensionAction(id); if (action) candidates.push(action); }
  candidates.push('mesure', 'methodes', 'suivi');
  const premature = bands.cadre === 'low' || bands.usages === 'low';
  const priorities = [...new Set(candidates)].filter(action => !(premature && (action === 'integration' || action === 'suivi'))).slice(0, 3);

  // Accompagnement recommandé : le coaching pour un indépendant qui débute, le diagnostic organisationnel
  // quand le cadre manque, une décision de direction au stade de l’exploration, sinon ce que demande la première priorité.
  const stage = total === null ? null : stageOf(total);
  const sensitive = isSensitive(profile.sector);
  const decides = profile.role === 'dirigeant' || profile.role === 'direction';
  const early = stage === null || stage <= 1;
  const primary: OfferId = solo && early ? 'coaching_solo'
    : frameFirst ? 'diagnostic_organisationnel'
    : stage === null || stage === 0 ? (decides ? 'formation_dirigeant' : 'atelier_priorites')
    : offerFor(priorities[0], solo);
  // À la suite : la mise en œuvre quand l’intégration est une priorité, la plateforme souveraine pour les
  // secteurs sensibles déjà avancés, puis ce que demandent les autres priorités.
  const next: OfferId[] = [];
  if (!solo && decides && early) next.push('formation_dirigeant');
  if (priorities.includes('integration')) next.push('diagnostic_technique', 'deploiement');
  if (sensitive && priorities.some(action => action === 'integration' || action === 'suivi')) next.push('centrale');
  next.push(...priorities.map(action => offerFor(action, solo)));
  const offers = [...new Set([primary, ...next])].slice(0, MAX_OFFERS);

  return {
    scored, total, stage, dims, bands, weights, sensitive,
    answered, unknown, signals: allSignals.slice(0, MAX_SIGNALS), strengths: STRENGTH_ORDER.filter(id => strong[id]).slice(0, MAX_STRENGTHS), priorities, offers,
  };
}

/** Code compact d’un résultat, pour le lien de partage (placé après le # : il n’est pas transmis au serveur). */
export function encodeShare(profile: Profile, answers: Answers): string {
  return ['1', profile.sector, SIZES.findIndex(size => size.id === profile.size), ROLES.findIndex(role => role.id === profile.role), QUESTION_IDS.map(id => { const value = answers[id]; return value === -1 ? 'x' : String(value); }).join('')].join('.');
}
export function decodeShare(code: string): { profile: Profile; answers: Answers } | null {
  if (typeof code !== 'string' || code.length > 80) return null;
  const parts = code.split('.');
  if (parts.length !== 5 || parts[0] !== '1') return null;
  const [, sector, sizeIndex, roleIndex, values] = parts;
  const size = /^[0-4]$/.test(sizeIndex) ? SIZES[Number(sizeIndex)] : undefined;
  const role = /^[0-3]$/.test(roleIndex) ? ROLES[Number(roleIndex)] : undefined;
  if (!SECTOR_OPTIONS.some(option => option.slug === sector) || !size || !role || !new RegExp(`^[0-3x]{${QUESTION_IDS.length}}$`).test(values)) return null;
  const answers: Answers = {};
  QUESTION_IDS.forEach((id, index) => { answers[id] = values[index] === 'x' ? -1 : Number(values[index]) as Answer; });
  return { profile: { sector, size: size.id, role: role.id }, answers };
}

export const STORAGE_KEY = 'althoce-maturite-v1';
export const DRAFT_TTL = 2 * 60 * 60 * 1000;
/** `unlocked` : le plan d’action a été ouvert dans cet onglet. Aucune coordonnée n’est conservée dans le navigateur. */
export type Draft = { profile: Profile; answers: Answers; index: number; unlocked: boolean };
/** Reprise d’un test en cours dans le même onglet. Toute valeur inattendue invalide le brouillon. */
export function restoreDraft(raw: string | null, now = Date.now()): Draft | null {
  if (!raw) return null;
  try {
    const { version, savedAt, profile, answers, index, unlocked } = JSON.parse(raw);
    if (version !== 1 || !Number.isFinite(savedAt) || savedAt > now || now - savedAt > DRAFT_TTL) return null;
    if (!profile || typeof profile !== 'object' || !answers || typeof answers !== 'object' || Array.isArray(answers)) return null;
    if (profile.sector !== '' && !SECTOR_OPTIONS.some(option => option.slug === profile.sector)) return null;
    if (profile.size !== '' && !SIZES.some(size => size.id === profile.size)) return null;
    if (profile.role !== '' && !ROLES.some(role => role.id === profile.role)) return null;
    if (!Number.isInteger(index) || index < 0 || index > QUESTION_IDS.length) return null;
    if (profile.sectorDetail !== undefined && (typeof profile.sectorDetail !== 'string' || profile.sectorDetail.length > SECTOR_DETAIL_MAX)) return null;
    if (unlocked !== undefined && typeof unlocked !== 'boolean') return null;
    const clean: Answers = {};
    for (const [key, value] of Object.entries(answers)) {
      if (!QUESTION_IDS.includes(key as QuestionId) || !isValidAnswer(value)) return null;
      clean[key as QuestionId] = value;
    }
    const restored: Profile = { sector: profile.sector, size: profile.size as SizeId | '', role: profile.role as RoleId | '' };
    if (profile.sector === 'autre' && profile.sectorDetail) restored.sectorDetail = profile.sectorDetail;
    return { profile: restored, answers: clean, index, unlocked: unlocked === true };
  } catch { return null; }
}
