import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.ROI_LEAD_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  if (!WEBHOOK_URL) {
    console.error('[ROI LEAD] ROI_LEAD_WEBHOOK_URL non configuré');
    return NextResponse.json({ ok: false, error: 'Service non configuré.' }, { status: 503 });
  }

  try {
    const payload = await req.json();

    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const text = await res.text();
    try {
      return NextResponse.json(JSON.parse(text));
    } catch {
      return NextResponse.json({ ok: true });
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[ROI LEAD] Erreur :', msg);
    return NextResponse.json({ ok: false, error: 'Erreur serveur.' }, { status: 500 });
  }
}
