import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = ts.transpileModule(readFileSync(new URL('../lib/lead-security.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { deliverLead } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const contact = { nom: 'Test', entreprise: 'Exemple', email: 'test@example.com', description: 'Demande de test' };
const roi = { ...contact, prenom:'Test', telephone:'0600000000', consentement_rgpd:true, effectifs_par_pole:{commercial:2}, effectif:2, salaire_moyen:40000, roi_annuel:12000, gain_mensuel:1000, heures_rendues_sem:5, equivalent_etp:0.1, nb_agents_inclus:1, nb_agents_marques:0 };
let sequence = 0, calls = 0, sent;
process.env.N8N_LEAD_WEBHOOK_URL = 'https://example.com/contact';
process.env.ROI_LEAD_WEBHOOK_URL = 'https://example.com/roi';
const originalFetch = globalThis.fetch;
globalThis.fetch = async (_, init) => { calls++; sent = JSON.parse(init.body); return Response.json({ok:true, internal:'must not be returned'}); };
function request(body, headers = {}, raw = false) { return new Request('https://althoce.com/api/contact/', { method:'POST', headers:{'content-type':'application/json','origin':'https://althoce.com','x-forwarded-for':String(++sequence),...headers}, body: raw ? body : JSON.stringify(body) }); }
try {
  for (const [body, status] of [[null,400],[[],400],[{},400],[{...contact,nom:{}},400],[{...contact,email:'invalid'},400],[{...contact,description:'x'.repeat(5001)},400]]) assert.equal((await deliverLead(request(body),'contact')).status,status);
  assert.equal((await deliverLead(request('{',{},true),'contact')).status,400);
  assert.equal((await deliverLead(request(contact,{'origin':'https://evil.example'}),'contact')).status,403);
  assert.equal((await deliverLead(request(contact,{'content-type':'text/plain'}),'contact')).status,415);
  assert.equal((await deliverLead(request('x'.repeat(32769),{},true),'contact')).status,413);
  assert.equal(calls,0,'Rejected requests must never reach a webhook');
  assert.equal((await deliverLead(request({...contact,injected:'discard'}),'contact')).status,200);
  assert.equal(sent.injected,undefined);
  assert.equal((await deliverLead(request({...roi,consentement_rgpd:false}),'roi')).status,400);
  assert.equal((await deliverLead(request({...roi,effectif:-1}),'roi')).status,400);
  let response = await deliverLead(request(roi),'roi');
  assert.deepEqual(await response.json(),{ok:true});
  globalThis.fetch = async () => new Response('upstream secret', {status:500});
  response = await deliverLead(request(contact),'contact'); assert.equal(response.status,502); assert.ok(!(await response.text()).includes('secret'));
  globalThis.fetch = async () => new Response('not JSON');
  assert.equal((await deliverLead(request(roi),'roi')).status,502);
  globalThis.fetch = async () => { throw new Error('credential must stay private'); };
  response = await deliverLead(request(contact),'contact'); assert.equal(response.status,502); assert.ok(!(await response.text()).includes('credential'));
  delete process.env.N8N_LEAD_WEBHOOK_URL;
  assert.equal((await deliverLead(request(contact),'contact')).status,503);
  for (let i=0;i<10;i++) await deliverLead(request({}, {'x-forwarded-for':'rate-test'}),'contact');
  response = await deliverLead(request({}, {'x-forwarded-for':'rate-test'}),'contact'); assert.equal(response.status,429); assert.equal(response.headers.get('retry-after'),'60');
  console.log('Security checks passed: validation, origin, body limits, throttling, consent, whitelist, webhook failures and response privacy. No external calls.');
} finally { globalThis.fetch = originalFetch; }
