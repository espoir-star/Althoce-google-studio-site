/**
 * Aperçu local du PDF du test de maturité IA : /api/maturite-pdf-apercu/?r=<code de partage>&prenom=<facultatif>.
 * Disponible seulement en développement (`npm run dev`) ; en production, la route répond 404.
 */
import { decodeShare } from '@/lib/maturite/model';
import { maturitePdfName, renderMaturitePdf } from '@/lib/maturite/pdf';
import { sectorNotes } from '@/lib/maturite/sector-notes';
export const runtime = 'nodejs';
export async function GET(req: Request) {
  if (process.env.NODE_ENV === 'production') return new Response('Not found', { status: 404 });
  const params = new URL(req.url).searchParams, code = params.get('r') ?? '';
  const shared = decodeShare(code);
  if (!shared) return new Response('Code de résultat invalide.', { status: 400 });
  const pdf = await renderMaturitePdf({ ...shared, sector: sectorNotes[shared.profile.sector], prenom: params.get('prenom')?.slice(0, 100) || 'Camille' });
  return new Response(new Uint8Array(pdf), { headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': `inline; filename="${maturitePdfName()}"`, 'Cache-Control': 'no-store' } });
}
