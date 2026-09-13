import { deliverLead } from '@/lib/lead-security';
export const runtime = 'nodejs';
export async function POST(req: Request) { return deliverLead(req, 'roi'); }
