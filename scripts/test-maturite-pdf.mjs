// Test de maturité IA : le PDF joint à l’email se construit pour tous les profils, sans erreur et à une taille raisonnable.
// Les sources TypeScript sont transpilées dans node_modules/.cache pour que @react-pdf/renderer se résolve normalement.
// `node scripts/test-maturite-pdf.mjs <dossier>` enregistre aussi trois exemples. Aucun appel extérieur.
import assert from 'node:assert/strict';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = join(root, 'node_modules/.cache/test-maturite-pdf');
rmSync(out, { recursive: true, force: true });
const files = ['lib/maturite/pdf.tsx', 'lib/maturite/questions.ts', 'lib/maturite/model.ts', 'lib/maturite/report-content.ts', 'lib/brand-content.ts'];
for (const file of files) {
  const code = ts.transpileModule(readFileSync(join(root, file), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText
    .replace(/from '(\.{1,2}\/[^']+)'/g, (_, spec) => `from '${spec}.js'`);
  const target = join(out, file.replace(/\.tsx?$/, '.js'));
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, code);
}
const { renderMaturitePdf, maturitePdfName } = await import(pathToFileURL(join(out, 'lib/maturite/pdf.js')).href);
const { QUESTION_IDS, SECTOR_OPTIONS, SIZES, ROLES } = await import(pathToFileURL(join(out, 'lib/maturite/questions.js')).href);

let seed = 7;
const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const pick = list => list[Math.floor(random() * list.length)];
const sector = { name: 'Secteur', href: '/secteurs/exemple/', boundaries: 'Les décisions restent humaines.', examples: [{ title: 'Exemple', output: 'Ce que prépare l’agent.', review: 'Ce que vérifie l’expert.' }], guides: [{ title: 'Guide', href: 'https://althoce.com/guides/' }], caseStudy: { label: 'Cas client', href: '/cas-clients/exemple/' } };
const cases = [
  { name: 'exemple-standard', profile: { sector: 'comptabilite', size: '10-49', role: 'direction' }, answers: Object.fromEntries(QUESTION_IDS.map((id, i) => [id, [0, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1][i]])), sector, prenom: 'Camille' },
  { name: 'exemple-independant', profile: { sector: 'autre', sectorDetail: 'Architecte d’intérieur', size: 'solo', role: 'dirigeant' }, answers: Object.fromEntries(QUESTION_IDS.map(id => [id, 0])) },
  { name: 'exemple-non-etabli', profile: { sector: 'droit', size: '200+', role: 'collaborateur' }, answers: Object.fromEntries(QUESTION_IDS.map(id => [id, -1])), sector },
  ...Array.from({ length: 12 }, (_, n) => ({ name: `aleatoire-${n}`, profile: { sector: pick(SECTOR_OPTIONS).slug, size: pick(SIZES).id, role: pick(ROLES).id, sectorDetail: 'Activité précisée' }, answers: Object.fromEntries(QUESTION_IDS.map(id => [id, pick([-1, 0, 1, 2, 3])])), sector: random() > 0.5 ? sector : undefined, prenom: random() > 0.5 ? 'Dominique' : undefined })),
];
const started = Date.now();
for (const item of cases) {
  const pdf = await renderMaturitePdf({ ...item, date: new Date('2026-11-18T10:00:00Z') });
  assert.equal(pdf.subarray(0, 5).toString(), '%PDF-', item.name);
  assert.ok(pdf.length > 20_000 && pdf.length < 400_000, `${item.name} : ${pdf.length} octets`);
  const pages = (pdf.toString('latin1').match(/\/Type \/Page\b/g) ?? []).length;
  assert.ok(pages >= 3 && pages <= 14, `${item.name} : ${pages} pages`);
  if (process.argv[2] && item.name.startsWith('exemple')) writeFileSync(join(process.argv[2], `${item.name}.pdf`), pdf);
}
assert.equal(maturitePdfName(new Date('2026-11-18T23:30:00Z')), 'Althoce-test-maturite-IA-2026-11-19.pdf');
rmSync(out, { recursive: true, force: true });
console.log(`Maturity test PDF passed: ${cases.length} profiles rendered (standard, sole trader, unscored, random) in ${((Date.now() - started) / 1000).toFixed(1)} s, size and page count checked. Nothing sent.`);
