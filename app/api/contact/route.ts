import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = process.env.N8N_LEAD_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  if (!N8N_WEBHOOK_URL) {
    console.error('[CONTACT FORM] N8N_LEAD_WEBHOOK_URL non configuré');
    return NextResponse.json({ error: 'Service non configuré.' }, { status: 503 });
  }

  try {
    const body = await req.json();
    const { nom, entreprise, email, telephone, taille, budget, description } = body;

    if (!nom || !entreprise || !email || !description) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 });
    }

    const payload = { nom, entreprise, email, telephone, taille, budget, description };

    const n8nRes = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!n8nRes.ok) {
      const detail = await n8nRes.text().catch(() => '');
      console.error('[CONTACT FORM] n8n webhook failed', n8nRes.status, detail);
      return NextResponse.json({ error: 'Service indisponible.' }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[CONTACT FORM] unexpected error', err);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
