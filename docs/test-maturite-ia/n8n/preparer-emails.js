// n8n — nœud Code « Préparer les emails », mode « Run Once for All Items ».
// Placé après « Respond — Success 200 » : il ne tourne qu’une fois le contact enregistré et la réponse rendue au site.
// Entrée : les données reçues par le nœud « Webhook — Receive Lead ». Les contacts qui ne viennent pas du test
// (source ≠ test-maturite-ia) ne produisent rien : la branche s’arrête là pour le formulaire de contact.
// Sortie : un élément, l’email au visiteur, au format de l’API Brevo (POST https://api.brevo.com/v3/smtp/email), avec le
// résultat complet en PDF joint (champ `pdf_base64` envoyé par le site). Le nœud suivant envoie `{{ $json.brevo }}` tel quel.
// Copie de référence : le code exécuté est celui du nœud dans n8n. Voir docs/test-maturite-ia/emails.md.

const SENDER = { name: 'Espoir Mwami', email: 'espoir@contact.althoce.com' };
// Prise de rendez-vous : le même agenda que les séquences marketing (capture-leads, lib/sequences/links.ts).
const BOOKING = 'https://calendar.app.google/JmhxjFqk2kybuFLR9';
const LOGO = 'https://althoce.com/favicons/apple-touch-icon.png';
const INK = '#09090b', MUTED = '#52525b', BLUE = '#2563eb', LINE = '#e4e4e7', SOFT = '#f4f7fe';

const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
function build(lead) {
  const prenom = String(lead.prenom ?? '').trim();
  const plan = lead.demande === 'plan';
  const link = String(lead.lien_resultat ?? '');
  if (!/^https:\/\/althoce\.com\/test-maturite-ia\/#resultat=/.test(link)) throw new Error('Lien de résultat absent ou inattendu.');
  const priorities = Array.isArray(lead.priorites_titres) ? lead.priorites_titres : [];
  const staged = lead.stade !== null && lead.stade !== undefined;
  // Le PDF est joint quand le site a pu le produire ; sinon, l’email renvoie vers le résultat en ligne.
  const pdf = typeof lead.pdf_base64 === 'string' && lead.pdf_base64.length > 0;

  function layout(preheader, inner) {
    return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Althoce</title></head>
  <body style="margin:0;padding:0;background:#f4f4f5;">
  <div style="display:none;max-height:0;overflow:hidden;">${esc(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;"><tr><td align="center" style="padding:32px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid ${LINE};border-radius:16px;">
  <tr><td style="padding:28px 32px 0;"><table role="presentation" cellpadding="0" cellspacing="0"><tr>
  <td style="vertical-align:middle;"><img src="${LOGO}" width="36" height="36" alt="" style="display:block;border:0;"></td>
  <td style="vertical-align:middle;padding-left:8px;font:700 22px/1 Arial,Helvetica,sans-serif;color:${INK};letter-spacing:-0.5px;">althoce<span style="color:${BLUE};">.</span></td>
  </tr></table></td></tr>
  <tr><td style="padding:24px 32px 32px;font:16px/1.6 Arial,Helvetica,sans-serif;color:${INK};">${inner}</td></tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;"><tr><td style="padding:16px 32px;font:12px/1.6 Arial,Helvetica,sans-serif;color:${MUTED};">
  ALTHOCE CONSEIL · 5 rue Fénelon, 33000 Bordeaux · <a href="https://althoce.com/" style="color:${MUTED};">althoce.com</a><br>
  Vous recevez cet email à la suite de votre demande sur althoce.com/test-maturite-ia/. <a href="https://althoce.com/confidentialite/" style="color:${MUTED};">Utilisation de vos données</a>.
  </td></tr></table>
  </td></tr></table></body></html>`;
  }

  const button = (href, label) => `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;"><tr><td style="border-radius:999px;background:${INK};">
  <a href="${esc(href)}" style="display:inline-block;padding:13px 26px;font:700 15px/1 Arial,Helvetica,sans-serif;color:#ffffff;text-decoration:none;border-radius:999px;">${esc(label)}</a></td></tr></table>`;

  const resultBox = staged
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SOFT};border-radius:12px;margin:20px 0;"><tr><td style="padding:20px 22px;">
  <div style="font:13px/1.4 Arial,Helvetica,sans-serif;color:${MUTED};">Stade ${esc(lead.stade)} sur 4</div>
  <div style="font:700 22px/1.3 Arial,Helvetica,sans-serif;color:${INK};margin-top:4px;">${esc(lead.stade_nom)}</div>
  <div style="font:15px/1.4 Arial,Helvetica,sans-serif;color:${BLUE};margin-top:4px;">${esc(lead.score)} / 100</div></td></tr></table>`
    : `<p style="margin:16px 0;">Votre score n’a pas pu être établi : trop de réponses « Je ne sais pas ». Le document reprend chacune de vos réponses, pour les faire préciser en interne.</p>`;

  const prioritiesBlock = priorities.length
    ? `<p style="margin:0 0 8px;font-weight:700;">Vos trois priorités</p><ol style="margin:0;padding-left:22px;">${priorities.map(title => `<li style="margin:4px 0;">${esc(title)}</li>`).join('')}</ol>`
    : '';

  const signature = `<p style="margin:24px 0 0;">Espoir Mwami<br><span style="color:${MUTED};">Althoce · Cabinet de conseil &amp; intégration IA</span></p>`;

  const textLink = (href, label) => `<a href="${esc(href)}" style="color:${BLUE};font-weight:700;text-decoration:none;">${esc(label)}</a>`;
  const signatureText = ['Espoir Mwami', 'Althoce · Cabinet de conseil & intégration IA', 'https://althoce.com/'];

  const visitor = plan
    ? {
        subject: 'Votre résultat au test de maturité IA',
        preheader: pdf ? 'Votre résultat complet et votre plan d’action, en PDF.' : 'Votre résultat complet et votre plan d’action.',
        html: `<p style="margin:0 0 16px;">Bonjour ${esc(prenom)},</p>
  <p style="margin:0;">Merci d’avoir pris le temps de faire le test de maturité IA. ${pdf ? 'Vous trouverez en pièce jointe votre résultat complet et votre plan d’action, au format PDF.' : 'Votre résultat complet et votre plan d’action restent accessibles en ligne.'}</p>
  ${resultBox}${prioritiesBlock}
  <p style="margin:16px 0 0;">${pdf ? 'Le document détaille chaque priorité en quatre étapes, avec un rythme pour vos 30 premiers jours. Vous pouvez le transmettre tel quel à vos associés ou à vos responsables d’équipe.' : `Chaque priorité y est détaillée en quatre étapes, avec un rythme pour vos 30 premiers jours : ${textLink(link, 'revoir mon résultat complet')}.`}</p>
  <p style="margin:16px 0 0;">Pour confronter ce résultat à votre réalité, je vous propose un premier échange de 30 minutes, offert et sans engagement.</p>
  ${button(BOOKING, 'Choisir un créneau')}
  <p style="margin:0;">Vous pouvez aussi répondre directement à cet email.</p>
  ${signature}`,
        text: [`Bonjour ${prenom},`, '', `Merci d’avoir pris le temps de faire le test de maturité IA. ${pdf ? 'Vous trouverez en pièce jointe votre résultat complet et votre plan d’action, au format PDF.' : `Votre résultat complet et votre plan d’action : ${link}`}`, '',
          staged ? `Stade ${lead.stade} sur 4 : ${lead.stade_nom} (${lead.score}/100)` : 'Score non établi : trop de réponses « Je ne sais pas ».',
          ...(priorities.length ? ['', 'Vos trois priorités :', ...priorities.map((title, i) => `${i + 1}. ${title}`)] : []), '',
          'Pour confronter ce résultat à votre réalité, je vous propose un premier échange de 30 minutes, offert et sans engagement.',
          `Choisir un créneau : ${BOOKING}`, 'Vous pouvez aussi répondre directement à cet email.', '', ...signatureText].join('\n'),
      }
    : {
        subject: 'Votre demande d’échange est bien reçue',
        preheader: 'Je reviens vers vous sous 24 heures ouvrées.',
        html: `<p style="margin:0 0 16px;">Bonjour ${esc(prenom)},</p>
  <p style="margin:0 0 16px;">J’ai bien reçu votre demande d’échange à la suite du test de maturité IA. Je reviens vers vous sous 24 heures ouvrées pour convenir d’un créneau de 30 minutes.</p>
  <p style="margin:0;">Si vous préférez, choisissez-le directement :</p>
  ${button(BOOKING, 'Choisir un créneau')}
  <p style="margin:0;">${pdf ? 'Votre résultat complet est en pièce jointe, au format PDF, pour préparer notre échange ou le transmettre à vos associés.' : `Votre résultat complet reste accessible ici : ${textLink(link, 'revoir mon résultat')}.`}</p>
  ${signature}`,
        text: [`Bonjour ${prenom},`, '', 'J’ai bien reçu votre demande d’échange à la suite du test de maturité IA. Je reviens vers vous sous 24 heures ouvrées pour convenir d’un créneau de 30 minutes.', '',
          `Si vous préférez, choisissez-le directement : ${BOOKING}`, '',
          pdf ? 'Votre résultat complet est en pièce jointe, au format PDF.' : `Votre résultat complet : ${link}`, '', ...signatureText].join('\n'),
      };

  return [{ json: { role: 'visiteur', brevo: {
    sender: SENDER, to: [{ email: lead.email, name: prenom || undefined }], replyTo: SENDER,
    subject: visitor.subject, htmlContent: layout(visitor.preheader, visitor.html), textContent: visitor.text,
    ...(pdf ? { attachment: [{ name: String(lead.pdf_nom || 'Althoce-test-maturite-IA.pdf'), content: lead.pdf_base64 }] } : {}),
    tags: ['test-maturite-ia', plan ? 'plan' : 'echange'],
  } } }];
}

const WEBHOOK = 'Webhook — Receive Lead';
return $(WEBHOOK).all().map(item => item.json.body ?? {}).filter(lead => lead.source === 'test-maturite-ia').flatMap(build);
