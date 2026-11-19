/**
 * Test de maturité IA — contacts (côté serveur).
 * Deux demandes passent par ici : l’ouverture du plan d’action (`plan` : prénom et email) et la demande
 * d’échange (`echange` : coordonnées complètes). Le navigateur transmet les coordonnées, le profil et les
 * réponses ; le résultat est recalculé ici, de sorte que le résumé remis à l’équipe commerciale ne dépend
 * pas de ce qu’affiche le navigateur.
 * Le message suit le contrat du formulaire de contact (nom, entreprise, email, telephone, taille, budget,
 * description) et ajoute des champs structurés. Voir docs/test-maturite-ia/webhook.md.
 */
import { LeadError } from '../lead-security';
import { DIMENSIONS, QUESTIONS, QUESTION_IDS, ROLES, SECTOR_DETAIL_MAX, SECTOR_OPTIONS, SIZES, UNKNOWN_LABEL, questionText, sectorLabel, type Answers, type Profile, type QuestionId } from './questions';
import { STAGES, computeResult, encodeShare, isComplete, isProfileComplete, isValidAnswer, type Result, type SignalId } from './model';
import { ACTION_TEXTS, OFFER_TEXTS, SIGNAL_TEXTS } from './report-content';

export const MATURITE_SOURCE = 'test-maturite-ia';
export const MATURITE_URL = 'https://althoce.com/test-maturite-ia/';
export type Demande = 'plan' | 'echange';
const CRITICAL_SIGNALS: SignalId[] = ['donnees_exposees', 'comptes_personnels', 'interdit_sans_alternative', 'automatisation_sans_validation'];

function text(value: unknown, max: number, required: boolean): string {
  if (value === undefined || value === null) value = '';
  if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw new LeadError(400, 'Veuillez vérifier les champs du formulaire.');
  return value.trim();
}

/**
 * Ordre de traitement proposé à l’équipe commerciale : A (à appeler sous 24 h), B (dans la semaine), C (suivi par email).
 * Une aide au tri, fondée sur des faits déclarés. Voir docs/test-maturite-ia/exploitation-commerciale.md.
 */
export function commercialPriority(demande: Demande, profile: Profile, result: Result, rappel = false): { grade: 'A' | 'B' | 'C'; reasons: string[] } {
  let points = 0; const reasons: string[] = [];
  if (demande === 'echange') { points += 3; reasons.push('demande un échange'); }
  else if (rappel) { points += 3; reasons.push('demande à être rappelé'); }
  if (profile.role === 'dirigeant') { points += 2; reasons.push('dirigeant ou associé'); }
  else if (profile.role === 'direction') { points += 1; reasons.push('membre de la direction'); }
  if (profile.size === '10-49') { points += 1; reasons.push('10 à 49 personnes'); }
  else if (profile.size === '50-199' || profile.size === '200+') { points += 2; reasons.push('50 personnes et plus'); }
  if (result.sensitive) { points += 1; reasons.push('secteur sensible'); }
  if (result.signals.some(id => CRITICAL_SIGNALS.includes(id))) { points += 1; reasons.push('risque sur les données ou la validation'); }
  return { grade: points >= 6 ? 'A' : points >= 3 ? 'B' : 'C', reasons };
}

export function buildMaturiteLead(body: Record<string, unknown>): Record<string, unknown> {
  const demande = body.demande;
  if (demande !== 'plan' && demande !== 'echange') throw new LeadError(400, 'Demande invalide.');
  const full = demande === 'echange';
  const prenom = text(body.prenom, 100, true), nom = text(body.nom, 100, full), entreprise = text(body.entreprise, 200, full);
  // Demande de plan : rappel par un expert (téléphone obligatoire) et opposition aux communications, tous deux explicites.
  if (!full && (typeof body.rappel !== 'boolean' || typeof body.opposition_marketing !== 'boolean')) throw new LeadError(400, 'Veuillez vérifier les champs du formulaire.');
  const rappel = !full && body.rappel === true;
  const email = text(body.email, 254, true), telephone = text(body.telephone, 30, rappel);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new LeadError(400, 'Email invalide.');
  if (telephone && telephone.replace(/\D/g, '').length < 10) throw new LeadError(400, 'Numéro de téléphone invalide.');
  if (body.consentement_rgpd !== true) throw new LeadError(400, 'Consentement requis.');

  const rawProfile = body.profil, rawAnswers = body.reponses;
  if (!rawProfile || typeof rawProfile !== 'object' || Array.isArray(rawProfile) || !rawAnswers || typeof rawAnswers !== 'object' || Array.isArray(rawAnswers))
    throw new LeadError(400, 'Résultat invalide.');
  const { sector, size, role, sectorDetail } = rawProfile as Record<string, unknown>;
  if (typeof sector !== 'string' || typeof size !== 'string' || typeof role !== 'string') throw new LeadError(400, 'Résultat invalide.');
  const profile = { sector, size, role } as Profile;
  const detail = text(sectorDetail, SECTOR_DETAIL_MAX, false);
  if (profile.sector === 'autre' && detail) profile.sectorDetail = detail;
  // Refuse aussi « Autre activité » sans précision.
  if (!isProfileComplete(profile)) throw new LeadError(400, 'Résultat invalide.');
  const answers: Answers = {};
  const entries = Object.entries(rawAnswers as Record<string, unknown>);
  if (entries.length !== QUESTION_IDS.length) throw new LeadError(400, 'Résultat invalide.');
  for (const [key, value] of entries) {
    if (!QUESTION_IDS.includes(key as QuestionId) || !isValidAnswer(value)) throw new LeadError(400, 'Résultat invalide.');
    answers[key as QuestionId] = value;
  }
  if (!isComplete(answers)) throw new LeadError(400, 'Résultat invalide.');

  let source_url = text(body.source_url, 500, false);
  if (source_url) {
    try { const url = new URL(source_url); if (!['https:', 'http:'].includes(url.protocol)) throw new Error(); source_url = url.origin + url.pathname; }
    catch { throw new LeadError(400, 'Adresse invalide.'); }
  }

  const result = computeResult(profile, answers);
  const sectorName = SECTOR_OPTIONS.find(option => option.slug === profile.sector)!.name;
  const sizeItem = SIZES.find(item => item.id === profile.size)!;
  const roleLabel = ROLES.find(item => item.id === profile.role)!.label;
  const priority = commercialPriority(demande, profile, result, rappel);
  const offers = result.offers.map(id => OFFER_TEXTS[id].title);
  const link = `${MATURITE_URL}#resultat=${encodeShare(profile, answers)}`;
  const readable = Object.values(result.dims).some(value => value !== null);
  const stageLabel = result.stage === null ? 'non établi' : `${result.stage + 1} sur 4 (${STAGES[result.stage].name})`;
  const dimensionLine = DIMENSIONS.map(dimension => `${dimension.name} ${result.dims[dimension.id] === null ? 'non évalué' : result.dims[dimension.id]}`).join(' · ');
  const answerLines = QUESTIONS.map(question => {
    const shown = questionText(question, profile.size), value = answers[question.id]!;
    return `- ${shown.q} ${value === -1 ? UNKNOWN_LABEL : shown.opts[value]}`;
  });
  const description = [
    full ? 'Demande d’échange depuis le test de maturité IA.' : rappel ? `Demande de rappel par un expert depuis le test de maturité IA (téléphone : ${telephone}).` : 'Plan d’action ouvert depuis le test de maturité IA, sans demande de rappel.',
    `Priorité commerciale : ${priority.grade}${priority.reasons.length ? ` (${priority.reasons.join(', ')})` : ''}.`,
    `Score : ${result.total === null ? 'non établi (trop de réponses « Je ne sais pas »)' : `${result.total}/100`} · Stade ${stageLabel}.`,
    `Profil : ${sectorLabel(profile)}${profile.sectorDetail ? ' (autre activité)' : ''} · ${sizeItem.label} · ${roleLabel}.`,
    `Dimensions (sur 100) : ${dimensionLine}.`,
    result.signals.length ? `Signaux : ${result.signals.map(id => SIGNAL_TEXTS[id].title).join(' ; ')}.` : 'Signaux : aucun.',
    readable ? `Priorités proposées : ${result.priorities.map(id => ACTION_TEXTS[id].title).join(' ; ')}.` : 'Priorités proposées : aucune, faute de réponses exploitables.',
    `Accompagnement recommandé : ${offers[0]}${offers.length > 1 ? `. Aussi proposés : ${offers.slice(1).join(' ; ')}` : ''}.`,
    `Résultat complet : ${link}`,
    `Réponses (${result.answered} sur ${QUESTION_IDS.length}, auto-évaluation déclarative) :`,
    ...answerLines,
  ].join('\n');

  return {
    // Contrat du formulaire de contact.
    nom: [prenom, nom].filter(Boolean).join(' '), entreprise: entreprise || 'Non précisée', email, telephone, taille: sizeItem.contactLabel, budget: '', description,
    // Champs structurés propres au test.
    source: MATURITE_SOURCE, demande, priorite_commerciale: priority.grade, priorite_raisons: priority.reasons,
    // Rappel : Althoce rappelle le visiteur. Sinon, sans opposition, il rejoint la base marketing (capture-leads).
    rappel: full || rappel, opposition_marketing: full ? false : body.opposition_marketing === true,
    prenom, nom_famille: nom, secteur: sectorName, secteur_slug: profile.sector, secteur_personnalise: profile.sectorDetail ?? '', taille_test: sizeItem.label, taille_code: profile.size, role: roleLabel,
    score: result.total, stade: result.stage === null ? null : result.stage + 1, stade_nom: result.stage === null ? null : STAGES[result.stage].name,
    dimensions: result.dims, signaux: result.signals, signaux_titres: result.signals.map(id => SIGNAL_TEXTS[id].title),
    priorites: result.priorities, priorites_titres: readable ? result.priorities.map(id => ACTION_TEXTS[id].title) : [],
    offre_recommandee: offers[0], offres_proposees: offers, lien_resultat: link, reponses: answers,
    reponses_renseignees: result.answered, consentement_rgpd: true, source_url,
  };
}
