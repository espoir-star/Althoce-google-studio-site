// Test de maturité IA : modèle, textes, partage, reprise et demande d’échange. Aucun appel extérieur.
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import ts from 'typescript';

const root = new URL('../', import.meta.url);
const compile = path => ts.transpileModule(readFileSync(new URL(path, root), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const dataUrl = code => 'data:text/javascript;base64,' + Buffer.from(code).toString('base64');
const questionsUrl = dataUrl(compile('lib/maturite/questions.ts'));
const modelUrl = dataUrl(compile('lib/maturite/model.ts').replace("'./questions'", JSON.stringify(questionsUrl)));
const contentUrl = dataUrl(compile('lib/maturite/report-content.ts'));
const securityUrl = dataUrl(compile('lib/lead-security.ts'));
const leadUrl = dataUrl(compile('lib/maturite/lead.ts').replace("'../lead-security'", JSON.stringify(securityUrl)).replace("'./questions'", JSON.stringify(questionsUrl)).replace("'./model'", JSON.stringify(modelUrl)).replace("'./report-content'", JSON.stringify(contentUrl)));

const { DIMENSIONS, QUESTIONS, QUESTION_IDS, SECTOR_OPTIONS, SENSITIVE_SECTORS, SIZES, ROLES, questionText, sectorLabel, nextOption } = await import(questionsUrl);
const { STAGES, MIN_ANSWERS, computeResult, stageOf, bandOf, weightsFor, isComplete, isProfileComplete, encodeShare, decodeShare, restoreDraft, DRAFT_TTL, SIGNAL_ACTION, offerFor, freeDimensions, FREE_DIMENSIONS, FREE_SIGNALS, nextStage } = await import(modelUrl);
const { STAGE_TEXTS, DIMENSION_TEXTS, SIGNAL_TEXTS, STRENGTH_TEXTS, ACTION_TEXTS, OFFER_TEXTS, MATURITE_FAQ, DISCUSSION_QUESTIONS, actionLink, monthPlan } = await import(contentUrl);
const { deliverPayload, LeadError } = await import(securityUrl);
const { buildMaturiteLead, commercialPriority, MATURITE_SOURCE } = await import(leadUrl);

const profile = { sector: 'commerce-distribution', size: '10-49', role: 'dirigeant' };
const sensitiveProfile = { ...profile, sector: 'droit' };
const all = value => Object.fromEntries(QUESTION_IDS.map(id => [id, value]));
const withDim = (base, dim, value) => ({ ...base, ...Object.fromEntries(QUESTIONS.filter(q => q.dim === dim).map(q => [q.id, value])) });

// 1. Structure : 5 dimensions, 15 questions, 4 situations par question, variantes pour les indépendants.
assert.equal(DIMENSIONS.length, 5); assert.equal(QUESTIONS.length, 15); assert.equal(new Set(QUESTION_IDS).size, 15);
for (const dimension of DIMENSIONS) assert.equal(QUESTIONS.filter(q => q.dim === dimension.id).length, 3, `3 questions pour ${dimension.id}`);
for (const question of QUESTIONS) {
  assert.equal(question.opts.length, 4); assert.ok(question.q.endsWith(' ?'), question.id);
  assert.ok(question.topic && question.topic.length <= 30, `Sujet court attendu : ${question.id}`);
  if (question.solo) assert.equal(question.solo.opts.length, 4);
  for (const size of SIZES) { const shown = questionText(question, size.id); assert.equal(shown.opts.length, 4); assert.ok(shown.q.length > 10); }
  // Les indépendants ne lisent jamais « vos collaborateurs » ni « nous ».
  const solo = questionText(question, 'solo');
  assert.ok(!/collaborateur|\bnous\b|\bnos\b|collègue|chacun/i.test(solo.q + solo.opts.join(' ')), `Variante indépendant à revoir : ${question.id}`);
}
assert.equal(STAGES.length, 4); assert.deepEqual(STAGES.map(s => [s.min, s.max]), [[0, 24], [25, 49], [50, 74], [75, 100]]);

// 2. Le menu des secteurs reprend les pages publiées ; les secteurs sensibles sont les professions réglementées et le secteur public.
const siteSectors = [];
for (const file of ['lib/sectors-content.ts', 'lib/sector-additions.ts']) {
  const source = readFileSync(new URL(file, root), 'utf8');
  for (const match of source.matchAll(/slug: ?["']([a-z-]+)["'],\s*name: ?["']([^"']+)["'],\s*group: ?["'](\w+)["']/g)) siteSectors.push({ slug: match[1], name: match[2], group: match[3] });
}
assert.equal(siteSectors.length, 13);
assert.deepEqual(SECTOR_OPTIONS.filter(o => o.slug !== 'autre').map(o => `${o.slug}|${o.name}`).sort(), siteSectors.map(s => `${s.slug}|${s.name}`).sort());
assert.equal(SECTOR_OPTIONS.at(-1).slug, 'autre');
assert.deepEqual([...SENSITIVE_SECTORS].sort(), [...siteSectors.filter(s => s.group === 'professions').map(s => s.slug), 'secteur-public'].sort());
const roiSectors = readFileSync(new URL('lib/roi/data.ts', root), 'utf8').match(/export const SECTORS = \[([^\]]+)\]/)[1].match(/'[^']+'/g).map(s => s.slice(1, -1));
assert.deepEqual(SECTOR_OPTIONS.map(o => o.name), roiSectors, 'Même ordre et mêmes intitulés que le calculateur ROI');

// 3. Score et stades.
for (const [value, total, stage] of [[0, 0, 0], [1, 33, 1], [2, 67, 2], [3, 100, 3]]) {
  const result = computeResult(profile, all(value));
  assert.equal(result.total, total); assert.equal(result.stage, stage); assert.equal(result.answered, 15); assert.ok(result.scored);
}
assert.deepEqual([0, 24, 25, 49, 50, 74, 75, 100].map(stageOf), [0, 0, 1, 1, 2, 2, 3, 3]);
assert.deepEqual([0, 33, 34, 66, 67, 100].map(bandOf), ['low', 'low', 'mid', 'mid', 'high', 'high']);
for (const sector of SECTOR_OPTIONS) assert.equal(Object.values(weightsFor(sector.slug)).reduce((a, b) => a + b, 0), 100);
// Le cadre pèse davantage, et l’intégration moins, dans les secteurs sensibles.
assert.equal(computeResult(profile, withDim(all(0), 'cadre', 3)).total, 20);
assert.equal(computeResult(sensitiveProfile, withDim(all(0), 'cadre', 3)).total, 25);
assert.equal(computeResult(profile, withDim(all(0), 'integration', 3)).total, 20);
assert.equal(computeResult(sensitiveProfile, withDim(all(0), 'integration', 3)).total, 15);
assert.equal(computeResult(sensitiveProfile, all(3)).total, 100);

// 4. « Je ne sais pas » : exclu du calcul, jamais compté comme une mauvaise réponse.
let result = computeResult(profile, { ...all(3), cap1: -1 });
assert.equal(result.dims.cap, 100); assert.equal(result.total, 100); assert.deepEqual(result.unknown, ['cap1']); assert.equal(result.answered, 14);
result = computeResult(profile, { ...all(2), cap1: -1, cap2: -1 });
assert.equal(result.dims.cap, null); assert.equal(result.bands.cap, null); assert.ok(result.scored); assert.equal(result.total, 67);
result = computeResult(profile, { ...all(2), cap1: -1, cap2: -1, usa1: -1, usa2: -1 });
assert.equal(result.scored, false); assert.equal(result.total, null); assert.equal(result.stage, null);
result = computeResult(profile, { ...all(2), cap1: -1, usa1: -1, cad1: -1, com1: -1, int1: -1, int2: -1 });
assert.equal(result.answered, 9); assert.ok(result.answered < MIN_ANSWERS); assert.equal(result.scored, false);
assert.equal(computeResult(profile, all(-1)).priorities.length, 3);
assert.ok(isComplete(all(-1))); assert.ok(!isComplete({ ...all(1), cap1: undefined })); assert.ok(!isComplete({ ...all(1), cap1: 4 }));
assert.ok(isProfileComplete(profile)); assert.ok(!isProfileComplete({ ...profile, sector: 'inconnu' })); assert.ok(!isProfileComplete({ ...profile, role: '' }));
// « Autre activité » doit être précisée.
assert.ok(!isProfileComplete({ ...profile, sector: 'autre' })); assert.ok(!isProfileComplete({ ...profile, sector: 'autre', sectorDetail: '   ' })); assert.ok(isProfileComplete({ ...profile, sector: 'autre', sectorDetail: 'Architecte' }));

// 5. Signaux.
const signals = (answers, p = profile) => computeResult(p, answers).signals;
assert.deepEqual(signals(all(0)), [], 'Sans usage, aucun signal d’exposition');
assert.ok(signals({ ...all(1), cad2: 0 }).includes('donnees_exposees'));
assert.ok(!signals({ ...all(1), cad2: 0, usa1: 0 }).includes('donnees_exposees'));
assert.ok(signals({ ...all(2), int1: 1 }).includes('comptes_personnels'));
assert.ok(signals({ ...all(2), cad2: 1 }).includes('interdit_sans_alternative'));
assert.ok(signals({ ...all(2), int3: 2, cad3: 1 }).includes('automatisation_sans_validation'));
assert.ok(!signals({ ...all(2), int3: 2, cad3: 1 }).includes('relecture_implicite'), 'Pas de doublon avec le signal précis');
assert.ok(signals({ ...all(2), cad3: 1, int3: 0 }).includes('relecture_implicite'));
assert.ok(signals(withDim(withDim(all(2), 'usages', 3), 'cadre', 1)).includes('usages_sans_cadre'));
assert.ok(!signals({ ...withDim(withDim(all(2), 'usages', 3), 'cadre', 1), cad2: 0 }).includes('usages_sans_cadre'));
assert.ok(signals({ ...all(3), com1: 1 }).includes('outils_sans_formation'));
assert.ok(signals(withDim(withDim(all(2), 'usages', 3), 'cap', 0)).includes('equipes_sans_cap'));
assert.ok(signals(withDim(withDim(all(2), 'cap', 3), 'usages', 0)).includes('direction_sans_relais'));
assert.ok(signals({ ...all(3), usa3: 1, com2: 1 }).includes('savoir_concentre'));
assert.ok(!signals({ ...all(3), usa3: 1, com2: 1 }, { ...profile, size: 'solo' }).includes('savoir_concentre'));
assert.ok(signals({ ...all(3), usa2: 1 }).includes('usage_generaliste'));
assert.ok(signals({ ...all(3), cap3: 1 }).includes('sans_mesure'));
assert.ok(signals({ ...all(1), cad2: 0, int1: 0, int3: 2, cad3: 0, usa2: 1, usa1: 3, cap3: 0 }).length <= 3);
assert.equal(signals({ ...all(1), cad2: 0, int1: 0, int3: 2, cad3: 0 })[0], 'donnees_exposees', 'Le plus critique en premier');
assert.deepEqual(signals(all(3)), []);
assert.deepEqual(signals({ ...all(-1) }), [], 'Une réponse inconnue ne déclenche aucun signal');
assert.deepEqual(computeResult(profile, all(3)).strengths.length, 3);
assert.deepEqual(computeResult(profile, all(0)).strengths, []);

// 6. Priorités : toujours trois actions distinctes, dans un ordre défendable.
assert.deepEqual(computeResult(profile, all(0)).priorities, ['premier_usage', 'regles_donnees', 'formation_metier']);
assert.equal(computeResult(profile, { ...all(1), cad2: 0 }).priorities[0], 'regles_donnees');
assert.deepEqual(computeResult(profile, all(3)).priorities, ['suivi', 'mesure', 'methodes']);
assert.ok(computeResult(profile, { ...all(2), int1: 3, int2: 1, int3: 0 }).priorities.includes('integration'));
let seed = 20261116;
const random = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
const pick = list => list[Math.floor(random() * list.length)];
for (let i = 0; i < 4000; i++) {
  const p = { sector: pick(SECTOR_OPTIONS).slug, size: pick(SIZES).id, role: pick(ROLES).id };
  const answers = Object.fromEntries(QUESTION_IDS.map(id => [id, pick([-1, 0, 0, 1, 1, 2, 2, 3, 3])]));
  const r = computeResult(p, answers);
  assert.equal(r.priorities.length, 3); assert.equal(new Set(r.priorities).size, 3);
  for (const action of r.priorities) assert.ok(ACTION_TEXTS[action], action);
  if (r.bands.cadre === 'low' || r.bands.usages === 'low') assert.ok(!r.priorities.includes('integration') && !r.priorities.includes('suivi'), 'Pas d’automatisation avant le cadre et les usages');
  if (r.bands.cadre === 'low' && answers.usa1 >= 1) assert.equal(r.priorities[0], 'regles_donnees');
  assert.ok(r.signals.length <= 3 && r.strengths.length <= 3);
  // Sans email : trois dimensions sur cinq, jamais une dimension moins bien notée qu’une dimension masquée.
  const free = freeDimensions(r.dims), hidden = DIMENSIONS.map(d => d.id).filter(id => !free.includes(id));
  assert.equal(free.length, 3); assert.equal(hidden.length, 2);
  for (const shown of free) for (const masked of hidden) assert.ok((r.dims[shown] ?? -1) >= (r.dims[masked] ?? -1));
  // Leviers vers le stade suivant : au plus trois, jamais d’automatisation prématurée, un écart cohérent avec le stade.
  const step = nextStage(r, answers);
  if (r.total === null) assert.equal(step, null);
  else {
    assert.ok(step.levers.length <= 3); assert.equal(new Set(step.levers.map(l => l.id)).size, step.levers.length);
    for (const lever of step.levers) { assert.ok(lever.from >= 0 && lever.from <= 2 && answers[lever.id] === lever.from); assert.ok(lever.to > lever.from && lever.to <= 3); assert.ok(lever.gain > 0); }
    if (r.bands.cadre === 'low' || r.bands.usages === 'low') assert.ok(!step.levers.some(l => l.id === 'int2' || l.id === 'int3'));
    if (r.stage < 3) { assert.equal(step.target, r.stage + 1); assert.equal(step.gap, STAGES[step.target].min - r.total); assert.ok(step.gap > 0); }
    else { assert.equal(step.target, null); assert.equal(step.gap, 100 - r.total); }
    // Les leviers retenus sont ceux qui rapportent le plus.
    for (let k = 1; k < step.levers.length; k++) assert.ok(step.levers[k - 1].gain >= step.levers[k].gain);
  }
  // Plan sur 30 jours : quatre semaines, construites sur les trois priorités, dans l’ordre.
  const month = monthPlan(r.priorities);
  assert.deepEqual(month.map(w => w.week), [1, 2, 3, 4]);
  assert.deepEqual(month.map(w => w.title), [ACTION_TEXTS[r.priorities[0]].title, ACTION_TEXTS[r.priorities[0]].title, ACTION_TEXTS[r.priorities[1]].title, ACTION_TEXTS[r.priorities[2]].title]);
  for (const week of month) assert.equal(week.items.length, 2);
  assert.ok(r.offers.length >= 1 && r.offers.length <= 3); assert.equal(new Set(r.offers).size, r.offers.length);
  for (const offer of r.offers) assert.ok(OFFER_TEXTS[offer], offer);
  if (p.size === 'solo' && (r.stage === null || r.stage <= 1)) assert.equal(r.offers[0], 'coaching_solo');
  if (p.size !== 'solo') assert.ok(!r.offers.includes('coaching_solo'));
  if (r.bands.cadre === 'low' && answers.usa1 >= 1 && !(p.size === 'solo' && (r.stage === null || r.stage <= 1))) assert.equal(r.offers[0], 'diagnostic_organisationnel');
  // La précision libre du secteur ne figure jamais dans le lien de partage.
  assert.ok(!encodeShare({ ...p, sectorDetail: 'Cabinet secret' }, answers).includes('secret'));
  if (r.total !== null) { assert.ok(r.total >= 0 && r.total <= 100); assert.equal(r.stage, stageOf(r.total)); assert.ok(r.answered >= MIN_ANSWERS); }
  for (const dimension of DIMENSIONS) { const value = r.dims[dimension.id]; assert.ok(value === null || (value >= 0 && value <= 100)); }
  // Partage : aller-retour exact.
  const decoded = decodeShare(encodeShare(p, answers));
  assert.deepEqual(decoded, { profile: p, answers });
}

// 7. Tous les textes existent, et chaque lien mène à une page publiée.
for (const stage of [0, 1, 2, 3]) for (const key of ['diagnostic', 'next', 'priority']) assert.ok(STAGE_TEXTS[stage][key].length > 20);
for (const dimension of DIMENSIONS) for (const band of ['low', 'mid', 'high']) { assert.ok(DIMENSION_TEXTS[dimension.id][band].reading); assert.ok(DIMENSION_TEXTS[dimension.id][band].step); }
for (const [signal, action] of Object.entries(SIGNAL_ACTION)) { assert.ok(SIGNAL_TEXTS[signal].title && SIGNAL_TEXTS[signal].finding && SIGNAL_TEXTS[signal].effect && SIGNAL_TEXTS[signal].step, signal); assert.ok(ACTION_TEXTS[action], action); }
assert.equal(Object.keys(SIGNAL_TEXTS).length, Object.keys(SIGNAL_ACTION).length);
assert.equal(Object.keys(STRENGTH_TEXTS).length, 8);
const pageExists = href => href.startsWith('/blog/') ? existsSync(new URL(`content/blog/${href.slice(6, -1)}.md`, root)) : existsSync(new URL(`app${href}page.tsx`, root));
for (const [id, action] of Object.entries(ACTION_TEXTS)) for (const link of [action.link, action.soloLink, action.sensitiveLink].filter(Boolean)) {
  assert.ok(/^\/[a-z0-9/-]+\/$/.test(link.href), `${id}: ${link.href}`); assert.ok(pageExists(link.href), `Page absente : ${link.href}`);
}
assert.equal(actionLink('formation_metier', 'solo', false).href, '/services/formation-ia/coaching-independant/');
assert.equal(actionLink('formation_metier', '10-49', true).href, '/services/formation-ia/ia-fondamentaux/');
assert.notEqual(actionLink('outil_pro', '10-49', true).href, actionLink('outil_pro', '10-49', false).href);
assert.equal(MATURITE_FAQ.length, 7);
// Fiches d’action : chaque priorité est détaillée.
for (const [id, sheet] of Object.entries(ACTION_TEXTS)) {
  assert.equal(sheet.steps.length, 4, id); assert.equal(new Set(sheet.steps).size, 4, id);
  for (const key of ['why', 'outcome', 'horizon', 'pitfall']) assert.ok(sheet[key].length > 20, `${id}.${key}`);
}
assert.deepEqual(Object.keys(DISCUSSION_QUESTIONS).sort(), DIMENSIONS.map(d => d.id).sort());
for (const question of Object.values(DISCUSSION_QUESTIONS)) assert.ok(question.endsWith(' ?'));
// Leviers : cas lisibles à la main.
let step = nextStage(computeResult(profile, all(1)), all(1));
assert.equal(step.target, 2); assert.equal(step.gap, 17); assert.equal(step.levers.length, 3); assert.equal(step.gain, 7);
assert.ok(step.levers.every(l => l.from === 1 && l.to === 2));
// L’étape recommandée ne passe jamais par un état subi : depuis l’absence de consigne, on vise l’anonymisation, pas l’interdit.
const byId = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
assert.equal(nextOption(byId.cad2, 0), 2); assert.equal(nextOption(byId.cad2, 1), 2); assert.equal(nextOption(byId.cad2, 2), 3);
assert.equal(nextOption(byId.usa1, 0), 1); assert.equal(nextOption(byId.int1, 0), 2);
for (const question of QUESTIONS) for (const value of [0, 1, 2]) { const next = nextOption(question, value); assert.ok(next > value && next <= 3); }
step = nextStage(computeResult(profile, { ...all(1), cad2: 0 }), { ...all(1), cad2: 0 });
assert.deepEqual([step.levers[0].id, step.levers[0].from, step.levers[0].to], ['cad2', 0, 2], 'Deux crans d’un coup comptent double');
step = nextStage(computeResult(sensitiveProfile, all(1)), all(1));
assert.deepEqual(step.levers.map(l => l.id), ['cad1', 'cad2', 'cad3'], 'En secteur sensible, le cadre rapporte le plus');
step = nextStage(computeResult(profile, all(3)), all(3));
assert.equal(step.target, null); assert.equal(step.gap, 0); assert.deepEqual(step.levers, []);
assert.equal(nextStage(computeResult(profile, all(-1)), all(-1)), null);
assert.equal(FREE_DIMENSIONS, 3); assert.equal(FREE_SIGNALS, 1);
assert.deepEqual(freeDimensions({ cap: 50, usages: 44, cadre: 22, competences: 33, integration: 22 }), ['cap', 'usages', 'competences']);
assert.deepEqual(freeDimensions({ cap: 0, usages: 0, cadre: 0, competences: 0, integration: 0 }), ['cap', 'usages', 'cadre'], 'À égalité, l’ordre du rapport');
assert.deepEqual(freeDimensions({ cap: null, usages: 10, cadre: null, competences: 5, integration: 0 }), ['usages', 'competences', 'integration'], 'Une dimension non évaluée passe après les autres');
// Accompagnements : chaque fiche pointe vers une page publiée, et la recommandation suit des règles lisibles.
assert.equal(Object.keys(OFFER_TEXTS).length, 10);
for (const [id, offer] of Object.entries(OFFER_TEXTS)) { assert.ok(offer.title && offer.text && offer.format, id); assert.ok(pageExists(offer.href), `Page absente : ${offer.href}`); }
assert.equal(computeResult(profile, all(0)).offers[0], 'formation_dirigeant', 'Un dirigeant qui explore commence par décider');
assert.equal(computeResult({ ...profile, role: 'collaborateur' }, all(0)).offers[0], 'atelier_priorites');
assert.equal(computeResult({ ...profile, size: 'solo' }, all(1)).offers[0], 'coaching_solo');
assert.equal(computeResult(profile, { ...all(1), cad2: 0 }).offers[0], 'diagnostic_organisationnel', 'Le cadre d’abord');
assert.deepEqual(computeResult(profile, { ...all(2), int1: 3, int2: 1, int3: 0 }).offers.filter(o => o === 'diagnostic_technique' || o === 'deploiement').length, 2);
assert.equal(computeResult(profile, all(3)).offers[0], 'pilotage');
assert.ok(computeResult(sensitiveProfile, all(3)).offers.includes('centrale'));
assert.equal(offerFor('formation_metier', true), 'coaching_solo'); assert.equal(offerFor('regles_donnees', true), 'diagnostic_organisationnel');
assert.equal(sectorLabel({ ...profile, sector: 'autre', sectorDetail: ' Cabinet d’architecture ' }), 'Cabinet d’architecture');
assert.equal(sectorLabel({ ...profile, sector: 'autre' }), 'Autre activité'); assert.equal(sectorLabel({ ...profile, sector: 'droit', sectorDetail: 'ignoré' }), 'Droit & professions juridiques');
// Aucune promesse chiffrée ni garantie de conformité dans les textes du test.
const prose = JSON.stringify([STAGE_TEXTS, DIMENSION_TEXTS, SIGNAL_TEXTS, STRENGTH_TEXTS, ACTION_TEXTS, OFFER_TEXTS, DISCUSSION_QUESTIONS, QUESTIONS]);
assert.ok(!/\d+ ?%|garanti|conforme au RGPD|certifi/i.test(prose), 'Ni pourcentage inventé, ni garantie, ni certification');
assert.ok(!/[\u{1F300}-\u{1FAFF}]/u.test(prose + JSON.stringify(MATURITE_FAQ)), 'Pas d’emoji');

// 8. Partage et reprise : toute valeur inattendue est écartée.
for (const bad of ['', '1', '2.droit.1.0.' + '0'.repeat(15), '1.inconnu.1.0.' + '0'.repeat(15), '1.droit.9.0.' + '0'.repeat(15), '1.droit.1.7.' + '0'.repeat(15), '1.droit.1.0.' + '0'.repeat(14), '1.droit.1.0.' + '4'.repeat(15), '1.droit.1.0.' + '0'.repeat(15) + '.x', 'x'.repeat(200), null, 42])
  assert.equal(decodeShare(bad), null, String(bad));
const now = 1800000000000;
const draft = (patch = {}, savedAt = now) => JSON.stringify({ version: 1, savedAt, profile, answers: { usa1: 2, usa2: -1 }, index: 2, ...patch });
assert.deepEqual(restoreDraft(draft(), now), { profile, answers: { usa1: 2, usa2: -1 }, index: 2, unlocked: false });
assert.equal(restoreDraft(draft({ unlocked: true }), now).unlocked, true);
assert.equal(restoreDraft(draft({ profile: { ...profile, sector: 'autre', sectorDetail: 'Architecte' } }), now).profile.sectorDetail, 'Architecte');
assert.equal(restoreDraft(draft({ profile: { ...profile, sectorDetail: 'ignoré hors autre activité' } }), now).profile.sectorDetail, undefined);
assert.deepEqual(restoreDraft(draft({ profile: { sector: '', size: '', role: '' }, answers: {}, index: 0 }), now).profile, { sector: '', size: '', role: '' });
assert.equal(restoreDraft(draft({}, now - DRAFT_TTL - 1), now), null); assert.equal(restoreDraft(draft({}, now + 1000), now), null);
for (const raw of [null, '', '{', draft({ version: 2 }), draft({ profile: { ...profile, sector: 'x' } }), draft({ profile: { ...profile, size: '11-50' } }), draft({ answers: { usa1: 5 } }), draft({ answers: { inconnue: 1 } }), draft({ answers: [1] }), draft({ index: 99 }), draft({ index: 1.5 }), draft({ profile: null }), draft({ unlocked: 'oui' }), draft({ profile: { ...profile, sector: 'autre', sectorDetail: 'x'.repeat(81) } }), draft({ profile: { ...profile, sectorDetail: 42 } })])
  assert.equal(restoreDraft(raw, now), null);

// 9. Contacts : contrat du formulaire de contact, résultat recalculé côté serveur, deux demandes distinctes.
const lead = { demande: 'echange', prenom: 'Test', nom: 'Exemple', email: 'test@example.com', telephone: '', entreprise: 'Cabinet Exemple', consentement_rgpd: true, profil: sensitiveProfile, reponses: all(1), source_url: 'https://althoce.com/test-maturite-ia/?utm=x#resultat=1' };
const plan = { demande: 'plan', prenom: 'Test', email: 'test@example.com', consentement_rgpd: true, profil: sensitiveProfile, reponses: all(1) };
const payload = buildMaturiteLead({ ...lead, score: 99, stade: 4, injected: 'discard', description: 'falsifié', priorite_commerciale: 'A', lien_resultat: 'https://evil.example' });
for (const key of ['nom', 'entreprise', 'email', 'telephone', 'taille', 'budget', 'description']) assert.equal(typeof payload[key], 'string', key);
assert.equal(payload.nom, 'Test Exemple'); assert.equal(payload.taille, '10 à 49 personnes'); assert.equal(payload.source, MATURITE_SOURCE); assert.equal(payload.demande, 'echange');
assert.equal(payload.score, 33); assert.equal(payload.stade, 2); assert.equal(payload.stade_nom, 'Usages dispersés'); assert.equal(payload.injected, undefined);
assert.ok(payload.description.includes('33/100') && payload.description.includes('Droit & professions juridiques') && !payload.description.includes('falsifié'));
assert.ok(payload.description.startsWith('Demande d’échange'));
assert.equal(payload.source_url, 'https://althoce.com/test-maturite-ia/'); assert.equal(payload.consentement_rgpd, true);
// Le lien du résultat est reconstruit côté serveur et rouvre exactement ce résultat.
assert.ok(payload.lien_resultat.startsWith('https://althoce.com/test-maturite-ia/#resultat='));
assert.deepEqual(decodeShare(payload.lien_resultat.split('#resultat=')[1]), { profile: sensitiveProfile, answers: all(1) });
assert.ok(payload.description.includes(payload.lien_resultat));
assert.equal(payload.offre_recommandee, OFFER_TEXTS[computeResult(sensitiveProfile, all(1)).offers[0]].title); assert.ok(payload.description.includes(payload.offre_recommandee));
// Les priorités et les signaux arrivent aussi en clair, pour l’email automatique.
assert.equal(payload.priorites_titres.length, 3); assert.deepEqual(payload.priorites_titres, payload.priorites.map(id => ACTION_TEXTS[id].title));
assert.deepEqual(payload.signaux_titres, payload.signaux.map(id => SIGNAL_TEXTS[id].title));
assert.deepEqual(buildMaturiteLead({ ...plan, reponses: Object.fromEntries(Object.keys(all(1)).map(id => [id, -1])) }).priorites_titres, []);
// Ouverture du plan : prénom et email suffisent ; l’entreprise absente ne bloque pas le contrat du contact.
const planPayload = buildMaturiteLead(plan);
assert.equal(planPayload.demande, 'plan'); assert.equal(planPayload.nom, 'Test'); assert.equal(planPayload.entreprise, 'Non précisée'); assert.equal(planPayload.nom_famille, '');
assert.ok(planPayload.description.startsWith('Plan d’action ouvert')); assert.equal(buildMaturiteLead({ ...plan, entreprise: 'Cabinet Exemple' }).entreprise, 'Cabinet Exemple');
// Priorité commerciale : une aide au tri, fondée sur la demande, le rôle, la taille, le secteur et les risques relevés.
assert.equal(payload.priorite_commerciale, 'A'); assert.equal(planPayload.priorite_commerciale, 'B');
assert.equal(buildMaturiteLead({ ...plan, profil: { sector: 'commerce-distribution', size: 'solo', role: 'collaborateur' }, reponses: all(3) }).priorite_commerciale, 'C');
assert.equal(commercialPriority('echange', { sector: 'autre', size: 'solo', role: 'collaborateur' }, computeResult({ sector: 'autre', size: 'solo', role: 'collaborateur' }, all(3))).grade, 'B', 'Une demande d’échange n’est jamais classée C');
assert.ok(payload.description.includes('Priorité commerciale : A'));
// « Autre activité » : la précision saisie est transmise, et seulement dans ce cas.
const other = buildMaturiteLead({ ...plan, profil: { sector: 'autre', size: '2-9', role: 'dirigeant', sectorDetail: ' Cabinet d’architecture ' } });
assert.equal(other.secteur, 'Autre activité'); assert.equal(other.secteur_personnalise, 'Cabinet d’architecture'); assert.ok(other.description.includes('Cabinet d’architecture (autre activité)'));
assert.equal(buildMaturiteLead({ ...plan, profil: { ...sensitiveProfile, sectorDetail: 'ignoré' } }).secteur_personnalise, '');
assert.ok(!other.lien_resultat.includes('architecture'));
// Le message le plus long reste sous la limite du formulaire de contact.
for (const size of ['solo', '200+']) for (const value of [-1, 0, 1, 2, 3]) assert.ok(buildMaturiteLead({ ...lead, profil: { sector: 'autre', size, role: 'dirigeant', sectorDetail: 'x'.repeat(80) }, reponses: all(value) }).description.length < 5000);
assert.equal(buildMaturiteLead({ ...lead, reponses: all(-1) }).score, null);
const rejected = body => assert.throws(() => buildMaturiteLead(body), error => error instanceof LeadError && error.status === 400);
rejected({ ...lead, demande: undefined }); rejected({ ...lead, demande: 'autre' });
rejected({ ...lead, consentement_rgpd: false }); rejected({ ...lead, consentement_rgpd: 'true' }); rejected({ ...lead, email: 'invalide' }); rejected({ ...lead, prenom: ' ' });
rejected({ ...lead, nom: '' }); rejected({ ...lead, entreprise: '' }); rejected({ ...plan, prenom: '' }); rejected({ ...plan, email: '' }); rejected({ ...plan, consentement_rgpd: undefined });
rejected({ ...lead, entreprise: 'x'.repeat(201) }); rejected({ ...lead, telephone: '123' }); rejected({ ...lead, profil: { ...profile, sector: 'x' } }); rejected({ ...lead, profil: null });
rejected({ ...plan, profil: { sector: 'autre', size: '2-9', role: 'dirigeant' } }); rejected({ ...plan, profil: { sector: 'autre', size: '2-9', role: 'dirigeant', sectorDetail: '  ' } });
rejected({ ...plan, profil: { sector: 'autre', size: '2-9', role: 'dirigeant', sectorDetail: 'x'.repeat(81) } }); rejected({ ...plan, profil: { sector: 'autre', size: '2-9', role: 'dirigeant', sectorDetail: {} } });
rejected({ ...lead, reponses: { ...all(1), cap1: 4 } }); rejected({ ...lead, reponses: { ...all(1), extra: 1 } }); rejected({ ...lead, reponses: { usa1: 1 } }); rejected({ ...lead, reponses: [] });
rejected({ ...lead, source_url: 'javascript:alert(1)' }); rejected({ ...lead, nom: { $ne: '' } });
assert.equal(buildMaturiteLead({ ...lead, telephone: '06 00 00 00 00' }).telephone, '06 00 00 00 00');

// 10. Envoi : destination dédiée si elle existe, sinon celle du contact ; jamais d’envoi sans vérification humaine.
let sequence = 0, calls = [], sent;
const originalFetch = globalThis.fetch;
globalThis.fetch = async (url, init) => { calls.push(String(url)); sent = JSON.parse(init.body); return new Response('ok'); };
const request = (body, headers = {}) => new Request('https://althoce.com/api/maturite-lead/', { method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://althoce.com', 'x-forwarded-for': `m${++sequence}`, ...headers }, body: JSON.stringify(body) });
const delivery = { validate: buildMaturiteLead, endpoints: ['MATURITE_LEAD_WEBHOOK_URL', 'N8N_LEAD_WEBHOOK_URL'] };
try {
  delete process.env.MATURITE_LEAD_WEBHOOK_URL; delete process.env.N8N_LEAD_WEBHOOK_URL;
  assert.equal((await deliverPayload(request(lead), delivery)).status, 503);
  process.env.N8N_LEAD_WEBHOOK_URL = 'https://example.com/contact';
  let response = await deliverPayload(request(lead), delivery, async () => {});
  assert.equal(response.status, 200); assert.deepEqual(await response.json(), { ok: true }); assert.deepEqual(calls, ['https://example.com/contact']); assert.equal(sent.score, 33);
  process.env.MATURITE_LEAD_WEBHOOK_URL = 'https://example.com/maturite';
  await deliverPayload(request(lead), delivery); assert.equal(calls.at(-1), 'https://example.com/maturite');
  const before = calls.length;
  for (const status of [403, 503]) assert.equal((await deliverPayload(request(lead), delivery, async () => { throw new LeadError(status, 'Vérification refusée'); })).status, status);
  assert.equal((await deliverPayload(request({ ...lead, consentement_rgpd: false }), delivery)).status, 400);
  assert.equal((await deliverPayload(request(lead, { origin: 'https://evil.example' }), delivery)).status, 403);
  assert.equal(calls.length, before, 'Une demande refusée n’atteint jamais la destination');
  globalThis.fetch = async () => new Response('secret amont', { status: 500 });
  response = await deliverPayload(request(lead), delivery); assert.equal(response.status, 502); assert.ok(!(await response.text()).includes('secret'));
} finally { globalThis.fetch = originalFetch; }

console.log('Maturity test checks passed: structure, sector alignment, scoring, unknown answers, signals, priorities (4,000 random profiles), texts and links, sharing, draft restore, recommended offers, plan and call requests, commercial priority and delivery, action sheets, next-stage levers and 30-day plan. No external calls.');
