// Test de maturité IA : emails préparés par n8n (docs/test-maturite-ia/n8n/preparer-emails.js). Aucun envoi.
// `node scripts/test-maturite-emails.mjs <dossier>` enregistre aussi un aperçu HTML de chaque email.
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
const root = fileURLToPath(new URL('../', import.meta.url));
const out = process.argv[2];
const compile = path => ts.transpileModule(readFileSync(root + path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const dataUrl = code => 'data:text/javascript;base64,' + Buffer.from(code).toString('base64');
const q = dataUrl(compile('lib/maturite/questions.ts'));
const m = dataUrl(compile('lib/maturite/model.ts').replace("'./questions'", JSON.stringify(q)));
const c = dataUrl(compile('lib/maturite/report-content.ts'));
const sec = dataUrl(compile('lib/lead-security.ts'));
const l = dataUrl(compile('lib/maturite/lead.ts').replace("'../lead-security'", JSON.stringify(sec)).replace("'./questions'", JSON.stringify(q)).replace("'./model'", JSON.stringify(m)).replace("'./report-content'", JSON.stringify(c)));
const { buildMaturiteLead } = await import(l);
const { decodeShare } = await import(m);
const code = readFileSync(root + 'docs/test-maturite-ia/n8n/preparer-emails.js', 'utf8');
const run = body => new Function('$', code)(name => { assert.equal(name, 'Webhook — Receive Lead'); return { all: () => [{ json: { headers: {}, body } }] }; });
const share = decodeShare('1.comptabilite.2.0.121111110101x21');
const base = { prenom: 'Camille <b>', email: 'camille@example.com', consentement_rgpd: true, profil: share.profile, reponses: share.answers, source_url: 'https://althoce.com/test-maturite-ia/' };
const plan = buildMaturiteLead({ ...base, demande: 'plan' });
const echange = buildMaturiteLead({ ...base, demande: 'echange', nom: 'Martin', entreprise: 'Cabinet Martin', telephone: '06 12 34 56 78' });
const unknown = buildMaturiteLead({ ...base, demande: 'plan', reponses: Object.fromEntries(Object.keys(share.answers).map(k => [k, -1])) });
const BOOKING = 'https://calendar.app.google/JmhxjFqk2kybuFLR9';
const withPdf = lead => ({ ...lead, pdf_nom: 'Althoce-test-maturite-IA-2026-11-18.pdf', pdf_base64: 'JVBERi0xLjMK' });
for (const [name, lead] of [['plan', withPdf(plan)], ['echange', withPdf(echange)], ['inconnu', withPdf(unknown)], ['plan-sans-pdf', plan], ['echange-sans-pdf', echange]]) {
  const items = run(lead);
  // Un seul email, au visiteur : plus d’alerte interne.
  assert.equal(items.length, 1, name);
  const mail = items[0].json.brevo;
  assert.equal(mail.to[0].email, 'camille@example.com'); assert.equal(mail.sender.email, 'espoir@contact.althoce.com'); assert.equal(mail.replyTo.email, 'espoir@contact.althoce.com');
  assert.ok(!mail.htmlContent.includes('<b>'), 'échappement');
  assert.ok(mail.htmlContent.includes(BOOKING) && mail.textContent.includes(BOOKING), `${name} : lien de prise de rendez-vous`);
  assert.ok(!/undefined|null|NaN/.test(mail.htmlContent + mail.textContent + mail.subject), name + ' : valeur vide affichée');
  if (lead.pdf_base64) {
    // Avec le PDF : la pièce jointe remplace le lien vers le site.
    assert.deepEqual(mail.attachment, [{ name: lead.pdf_nom, content: lead.pdf_base64 }]);
    assert.ok(!mail.htmlContent.includes('#resultat=') && !mail.textContent.includes('#resultat='), `${name} : pas de lien vers le résultat en ligne`);
    assert.ok(/pièce jointe/.test(mail.htmlContent));
  } else {
    // Sans PDF (rendu en échec) : le lien vers le résultat en ligne le remplace.
    assert.equal(mail.attachment, undefined); assert.ok(mail.htmlContent.includes(lead.lien_resultat), `${name} : lien de secours`);
  }
  if (out) writeFileSync(`${out}/email-${name}.html`, mail.htmlContent);
}
assert.throws(() => run({ ...plan, lien_resultat: 'https://evil.example/' }));
// Un contact du formulaire classique ne déclenche aucun email.
assert.deepEqual(run({ nom: 'Client', email: 'client@example.com', description: 'Demande' }), []);
console.log('Maturity test emails passed: one visitor email per request (plan, call, unscored), PDF attached or link fallback, booking link, escaping, no internal alert. Nothing sent.');
