import { createHash } from 'node:crypto';

export class LeadError extends Error {
  constructor(public status: number, message: string) { super(message); }
}
const attempts = new Map<string, { count: number; expires: number }>();
// Best effort per process. Configure a distributed limit at the trusted ingress in production.
export async function readLead(req: Request): Promise<Record<string, unknown>> {
  const origin = req.headers.get('origin');
  if ((origin && origin !== new URL(req.url).origin) || req.headers.get('sec-fetch-site') === 'cross-site')
    throw new LeadError(403, 'Origine non autorisée.');
  if (!req.headers.get('content-type')?.toLowerCase().startsWith('application/json'))
    throw new LeadError(415, 'Format non accepté.');
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const key = createHash('sha256').update(ip).digest('hex');
  const entry = attempts.get(key) || { count: 0, expires: now + 60_000 };
  if (entry.count >= 10 || (!attempts.has(key) && attempts.size >= 10_000))
    throw new LeadError(429, 'Trop de demandes. Réessayez dans une minute.');
  entry.count++; attempts.set(key, entry);
  if (Number(req.headers.get('content-length')) > 32768) throw new LeadError(413, 'Message trop volumineux.');
  const reader = req.body?.getReader();
  if (!reader) throw new LeadError(400, 'Message vide.');
  const chunks: Uint8Array[] = []; let length = 0;
  while (true) {
    const { value, done } = await reader.read(); if (done) break;
    length += value.byteLength;
    if (length > 32768) { await reader.cancel(); throw new LeadError(413, 'Message trop volumineux.'); }
    chunks.push(value);
  }
  try {
    const data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error();
    return data;
  } catch { throw new LeadError(400, 'Message invalide.'); }
}
export function validateLead(body: Record<string, unknown>, kind: 'contact' | 'roi') {
  const payload: Record<string, unknown> = {};
  const strings = kind === 'contact'
    ? ['nom','entreprise','email','telephone','taille','budget','description']
    : ['prenom','nom','email','telephone','entreprise','secteur','secteur_personnalise','ca_annuel','poles_actifs','irritants_selectionnes','agents_recommandes_inclus_roi','agents_complementaires_marques','source_url','user_agent'];
  const required = kind === 'contact' ? ['nom','entreprise','email','description'] : ['prenom','nom','email','telephone','entreprise'];
  for (const key of strings) {
    const value = body[key] ?? '';
    const limit = key === 'description' ? 5000 : key.includes('agents_') || key === 'irritants_selectionnes' ? 6000 : 500;
    if (typeof value !== 'string' || value.length > limit || (required.includes(key) && !value.trim()))
      throw new LeadError(400, 'Veuillez vérifier les champs du formulaire.');
    payload[key] = value.trim();
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email as string) || (payload.email as string).length > 254)
    throw new LeadError(400, 'Email invalide.');
  if (kind === 'roi') {
    if (body.consentement_rgpd !== true) throw new LeadError(400, 'Consentement requis.');
    payload.consentement_rgpd = true;
    for (const key of ['effectif','salaire_moyen','roi_annuel','gain_mensuel','heures_rendues_sem','equivalent_etp','nb_agents_inclus','nb_agents_marques']) {
      const value = body[key];
      if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > 1e12)
        throw new LeadError(400, 'Estimation invalide.');
      payload[key] = value;
    }
    const poles = body.effectifs_par_pole;
    if (!poles || typeof poles !== 'object' || Array.isArray(poles) || Object.keys(poles).length > 20)
      throw new LeadError(400, 'Effectifs invalides.');
    for (const [key, value] of Object.entries(poles)) {
      if (!/^[a-zA-Z_-]{1,40}$/.test(key) || ['__proto__','constructor','prototype'].includes(key) || typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > 1e6)
        throw new LeadError(400, 'Effectifs invalides.');
    }
    payload.effectifs_par_pole = poles;
    if (payload.source_url) {
      try { const url = new URL(payload.source_url as string); if (!['https:','http:'].includes(url.protocol)) throw new Error(); payload.source_url = url.origin + url.pathname; }
      catch { throw new LeadError(400, 'Adresse invalide.'); }
    }
  }
  return payload;
}
export async function deliverLead(req: Request, kind: 'contact' | 'roi') {
  try {
    const payload = validateLead(await readLead(req), kind);
    const endpoint = process.env[kind === 'contact' ? 'N8N_LEAD_WEBHOOK_URL' : 'ROI_LEAD_WEBHOOK_URL'];
    if (!endpoint || new URL(endpoint).protocol !== 'https:') throw new LeadError(503, 'Service momentanément indisponible.');
    const upstream = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: AbortSignal.timeout(10000) });
    if (!upstream.ok) throw new LeadError(502, 'Envoi impossible pour le moment. Veuillez réessayer.');
    if (kind === 'roi') {
      const result = await upstream.json().catch(() => null);
      if (!result || result.ok !== true) throw new LeadError(502, 'Envoi non confirmé. Veuillez réessayer.');
    } else { await upstream.body?.cancel(); }
    return Response.json(kind === 'contact' ? { success: true } : { ok: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    const status = error instanceof LeadError ? error.status : 502;
    const message = error instanceof LeadError ? error.message : 'Service momentanément indisponible.';
    return Response.json({ ok: false, error: message }, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '60' } : {}) } });
  }
}
