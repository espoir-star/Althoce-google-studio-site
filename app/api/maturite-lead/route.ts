import { verifyLeadHuman } from '@/lib/lead-bot-protection';
import { deliverPayload } from '@/lib/lead-security';
import { buildMaturiteLead } from '@/lib/maturite/lead';
import { withMaturitePdf } from '@/lib/maturite/lead-pdf';
export const runtime = 'nodejs';
// Le rendu du PDF joint à l’email prend une à deux secondes à froid.
export const maxDuration = 30;
// Destination dédiée si elle est configurée ; sinon, celle du formulaire de contact, dont le message respecte le contrat.
export async function POST(req: Request) {
  return deliverPayload(req, { validate: buildMaturiteLead, enrich: withMaturitePdf, endpoints: ['MATURITE_LEAD_WEBHOOK_URL', 'N8N_LEAD_WEBHOOK_URL'] }, verifyLeadHuman);
}
