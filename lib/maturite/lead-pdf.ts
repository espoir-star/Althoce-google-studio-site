/**
 * Test de maturité IA — ajoute au contact le résultat complet en PDF, que n8n joint à l’email du visiteur.
 * Le PDF est construit depuis le lien de résultat recalculé côté serveur, jamais depuis ce qu’envoie le navigateur.
 * En cas d’échec, le contact part sans PDF : l’email reprend alors le lien du résultat.
 */
import { decodeShare } from './model';
import { maturitePdfName, renderMaturitePdf } from './pdf';
import { sectorNotes } from './sector-notes';

export async function withMaturitePdf(payload: Record<string, unknown>): Promise<Record<string, unknown>> {
  try {
    const code = String(payload.lien_resultat ?? '').split('#resultat=')[1] ?? '';
    const shared = decodeShare(code);
    if (!shared) return payload;
    const pdf = await renderMaturitePdf({ ...shared, sector: sectorNotes[shared.profile.sector], prenom: String(payload.prenom ?? '') || undefined });
    return { ...payload, pdf_nom: maturitePdfName(), pdf_base64: pdf.toString('base64') };
  } catch (error) {
    console.error('Test de maturité IA : PDF non généré', error instanceof Error ? error.message : error);
    return payload;
  }
}
