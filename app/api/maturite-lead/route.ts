import { verifyLeadHuman } from '@/lib/lead-bot-protection';
import { deliverPayload } from '@/lib/lead-security';
import { buildMaturiteLead } from '@/lib/maturite/lead';
export const runtime = 'nodejs';
// Destination dédiée si elle est configurée ; sinon, celle du formulaire de contact, dont le message respecte le contrat.
export async function POST(req: Request) {
  return deliverPayload(req, { validate: buildMaturiteLead, endpoints: ['MATURITE_LEAD_WEBHOOK_URL', 'N8N_LEAD_WEBHOOK_URL'] }, verifyLeadHuman);
}
