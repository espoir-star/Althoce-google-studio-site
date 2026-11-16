/**
 * Test de maturité IA — demande d’échange (côté serveur).
 * Le navigateur transmet les coordonnées, le profil et les réponses ; le résultat est recalculé ici,
 * de sorte que le résumé remis à l’équipe commerciale ne dépend pas de ce qu’affiche le navigateur.
 * Le message suit le contrat du formulaire de contact (nom, entreprise, email, telephone, taille, budget,
 * description) et ajoute des champs structurés. Voir docs/test-maturite-ia/webhook.md.
 */
import { LeadError } from '../lead-security';
import { DIMENSIONS, QUESTIONS, QUESTION_IDS, ROLES, SECTOR_OPTIONS, SIZES, UNKNOWN_LABEL, questionText, type Answers, type Profile, type QuestionId } from './questions';
import { STAGES, computeResult, isComplete, isProfileComplete, isValidAnswer } from './model';
import { ACTION_TEXTS, SIGNAL_TEXTS } from './report-content';

export const MATURITE_SOURCE = 'test-maturite-ia';

function text(value: unknown, max: number, required: boolean): string {
  if (value === undefined || value === null) value = '';
  if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw new LeadError(400, 'Veuillez vérifier les champs du formulaire.');
  return value.trim();
}

export function buildMaturiteLead(body: Record<string, unknown>): Record<string, unknown> {
  const prenom = text(body.prenom, 100, true), nom = text(body.nom, 100, true), entreprise = text(body.entreprise, 200, true);
  const email = text(body.email, 254, true), telephone = text(body.telephone, 30, false);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new LeadError(400, 'Email invalide.');
  if (telephone && telephone.replace(/\D/g, '').length < 10) throw new LeadError(400, 'Numéro de téléphone invalide.');
  if (body.consentement_rgpd !== true) throw new LeadError(400, 'Consentement requis.');

  const rawProfile = body.profil, rawAnswers = body.reponses;
  if (!rawProfile || typeof rawProfile !== 'object' || Array.isArray(rawProfile) || !rawAnswers || typeof rawAnswers !== 'object' || Array.isArray(rawAnswers))
    throw new LeadError(400, 'Résultat invalide.');
  const { sector, size, role } = rawProfile as Record<string, unknown>;
  const profile = { sector, size, role } as Profile;
  if (typeof sector !== 'string' || typeof size !== 'string' || typeof role !== 'string' || !isProfileComplete(profile)) throw new LeadError(400, 'Résultat invalide.');
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
  const stageLabel = result.stage === null ? 'non établi' : `${result.stage + 1} sur 4 (${STAGES[result.stage].name})`;
  const dimensionLine = DIMENSIONS.map(dimension => `${dimension.name} ${result.dims[dimension.id] === null ? 'non évalué' : result.dims[dimension.id]}`).join(' · ');
  const answerLines = QUESTIONS.map(question => {
    const shown = questionText(question, profile.size), value = answers[question.id]!;
    return `- ${shown.q} ${value === -1 ? UNKNOWN_LABEL : shown.opts[value]}`;
  });
  const description = [
    `Demande d’échange depuis le test de maturité IA.`,
    `Score : ${result.total === null ? 'non établi (trop de réponses « Je ne sais pas »)' : `${result.total}/100`} · Stade ${stageLabel}.`,
    `Profil : ${sectorName} · ${sizeItem.label} · ${roleLabel}.`,
    `Dimensions (sur 100) : ${dimensionLine}.`,
    result.signals.length ? `Signaux : ${result.signals.map(id => SIGNAL_TEXTS[id].title).join(' ; ')}.` : 'Signaux : aucun.',
    Object.values(result.dims).some(value => value !== null) ? `Priorités proposées : ${result.priorities.map(id => ACTION_TEXTS[id].title).join(' ; ')}.` : 'Priorités proposées : aucune, faute de réponses exploitables.',
    `Réponses (${result.answered} sur ${QUESTION_IDS.length}, auto-évaluation déclarative) :`,
    ...answerLines,
  ].join('\n');

  return {
    // Contrat du formulaire de contact.
    nom: `${prenom} ${nom}`, entreprise, email, telephone, taille: sizeItem.contactLabel, budget: '', description,
    // Champs structurés propres au test.
    source: MATURITE_SOURCE, prenom, nom_famille: nom, secteur: sectorName, secteur_slug: profile.sector, taille_test: sizeItem.label, role: roleLabel,
    score: result.total, stade: result.stage === null ? null : result.stage + 1, stade_nom: result.stage === null ? null : STAGES[result.stage].name,
    dimensions: result.dims, signaux: result.signals, priorites: result.priorities, reponses: answers,
    reponses_renseignees: result.answered, consentement_rgpd: true, source_url,
  };
}
