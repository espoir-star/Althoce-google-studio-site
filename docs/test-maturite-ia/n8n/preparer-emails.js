// n8n — nœud Code « Préparer les emails », mode « Run Once for All Items ».
// Entrée : la sortie du Webhook du formulaire de contact, filtrée sur source = test-maturite-ia.
// Sortie : deux éléments, l’email au visiteur puis l’alerte à Althoce, chacun au format de l’API Brevo
// (POST https://api.brevo.com/v3/smtp/email). Le nœud suivant envoie `{{ $json.brevo }}` tel quel.
// Copie de référence : le code exécuté est celui du nœud dans n8n. Voir docs/test-maturite-ia/emails.md.

const SENDER = { name: 'Espoir Mwami', email: 'espoir@contact.althoce.com' };
const ALERT_TO = { name: 'Althoce', email: 'espoir@contact.althoce.com' };
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
  const secteur = lead.secteur_personnalise ? `${lead.secteur} (${lead.secteur_personnalise})` : lead.secteur;

  function layout(preheader, inner, internal = false) {
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
  ${internal ? 'Alerte interne envoyée par n8n à chaque contact du test de maturité IA.' : `Vous recevez cet email à la suite de votre demande sur althoce.com/test-maturite-ia/. <a href="https://althoce.com/confidentialite/" style="color:${MUTED};">Utilisation de vos données</a>.`}
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
    : `<p style="margin:16px 0;">Votre score n’a pas pu être établi : trop de réponses « Je ne sais pas ». Le lien ci-dessous vous permet de revoir vos réponses.</p>`;

  const prioritiesBlock = priorities.length
    ? `<p style="margin:0 0 8px;font-weight:700;">Vos trois priorités</p><ol style="margin:0;padding-left:22px;">${priorities.map(title => `<li style="margin:4px 0;">${esc(title)}</li>`).join('')}</ol>`
    : '';

  const signature = `<p style="margin:24px 0 0;">Espoir Mwami<br><span style="color:${MUTED};">Althoce · Cabinet de conseil &amp; intégration IA</span></p>`;

  const visitor = plan
    ? {
        subject: 'Votre résultat au test de maturité IA',
        preheader: staged ? `Stade ${lead.stade} sur 4 : ${lead.stade_nom}. Votre plan d’action reste accessible ici.` : 'Votre plan d’action reste accessible ici.',
        html: `<p style="margin:0 0 16px;">Bonjour ${esc(prenom)},</p>
  <p style="margin:0;">Merci d’avoir pris le temps de faire le test de maturité IA. Voici votre résultat, pour le retrouver quand vous le souhaitez.</p>
  ${resultBox}${prioritiesBlock}
  ${button(link, 'Revoir mon résultat complet')}
  <p style="margin:0 0 16px;">Ce lien rouvre votre résultat tel que vous l’avez vu, avec les fiches d’action et le plan sur 30 jours. Vous pouvez le transmettre à vos associés ou à vos responsables d’équipe.</p>
  <p style="margin:0;">Si vous souhaitez en parler, je vous propose un premier échange de 30 minutes, offert et sans engagement. Il suffit de répondre à cet email.</p>
  ${signature}`,
        text: [`Bonjour ${prenom},`, '', 'Merci d’avoir pris le temps de faire le test de maturité IA. Voici votre résultat, pour le retrouver quand vous le souhaitez.', '',
          staged ? `Stade ${lead.stade} sur 4 : ${lead.stade_nom} (${lead.score}/100)` : 'Score non établi : trop de réponses « Je ne sais pas ».',
          ...(priorities.length ? ['', 'Vos trois priorités :', ...priorities.map((title, i) => `${i + 1}. ${title}`)] : []), '',
          `Votre résultat complet : ${link}`, '',
          'Si vous souhaitez en parler, je vous propose un premier échange de 30 minutes, offert et sans engagement. Il suffit de répondre à cet email.', '',
          'Espoir Mwami', 'Althoce · Cabinet de conseil & intégration IA', 'https://althoce.com/'].join('\n'),
      }
    : {
        subject: 'Votre demande d’échange est bien reçue',
        preheader: 'Je reviens vers vous sous 24 heures ouvrées.',
        html: `<p style="margin:0 0 16px;">Bonjour ${esc(prenom)},</p>
  <p style="margin:0 0 16px;">J’ai bien reçu votre demande d’échange à la suite du test de maturité IA. Je reviens vers vous sous 24 heures ouvrées pour convenir d’un créneau de 30 minutes.</p>
  <p style="margin:0;">Votre résultat reste accessible ici, si vous souhaitez le relire ou le transmettre avant notre échange :</p>
  ${button(link, 'Revoir mon résultat complet')}
  <p style="margin:0;">Une contrainte d’agenda ou une question d’ici là ? Répondez simplement à cet email.</p>
  ${signature}`,
        text: [`Bonjour ${prenom},`, '', 'J’ai bien reçu votre demande d’échange à la suite du test de maturité IA. Je reviens vers vous sous 24 heures ouvrées pour convenir d’un créneau de 30 minutes.', '',
          `Votre résultat : ${link}`, '', 'Une contrainte d’agenda ou une question d’ici là ? Répondez simplement à cet email.', '',
          'Espoir Mwami', 'Althoce · Cabinet de conseil & intégration IA', 'https://althoce.com/'].join('\n'),
      };

  const alertLines = [
    ['Demande', plan ? 'Plan d’action ouvert' : 'Échange demandé'],
    ['Priorité', `${lead.priorite_commerciale} (${(lead.priorite_raisons ?? []).join(', ') || 'aucun critère'})`],
    ['Contact', `${lead.nom} · ${lead.email}${lead.telephone ? ` · ${lead.telephone}` : ''}`],
    ['Entreprise', lead.entreprise],
    ['Profil', `${secteur} · ${lead.taille_test} · ${lead.role}`],
    ['Résultat', staged ? `${lead.score}/100 · stade ${lead.stade} (${lead.stade_nom})` : 'non établi'],
    ['Accompagnement', lead.offre_recommandee],
  ];
  const alert = {
    subject: `[Test maturité ${lead.priorite_commerciale}] ${plan ? 'Plan ouvert' : 'Échange demandé'} · ${lead.nom} · ${lead.secteur}`,
    html: `<p style="margin:0 0 16px;">Nouveau contact depuis le test de maturité IA.</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font:14px/1.5 Arial,Helvetica,sans-serif;">${alertLines.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:${MUTED};vertical-align:top;white-space:nowrap;">${esc(k)}</td><td style="padding:6px 0;">${esc(v)}</td></tr>`).join('')}</table>
  ${button(link, 'Ouvrir son résultat')}
  <p style="margin:0 0 8px;font-weight:700;">Résumé complet</p>
  <pre style="white-space:pre-wrap;font:13px/1.5 Menlo,Consolas,monospace;background:${SOFT};border-radius:12px;padding:16px;margin:0;">${esc(lead.description)}</pre>
  <p style="margin:16px 0 0;color:${MUTED};font-size:13px;">Répondre à cet email écrit directement au contact.</p>`,
    text: `Nouveau contact depuis le test de maturité IA.\n\n${alertLines.map(([k, v]) => `${k} : ${v}`).join('\n')}\n\nRésultat : ${link}\n\n${lead.description}`,
  };

  const tags = ['test-maturite-ia', plan ? 'plan' : 'echange'];
  return [
    { json: { role: 'visiteur', brevo: { sender: SENDER, to: [{ email: lead.email, name: prenom || undefined }], replyTo: SENDER, subject: visitor.subject, htmlContent: layout(visitor.preheader, visitor.html), textContent: visitor.text, tags } } },
    { json: { role: 'alerte', brevo: { sender: SENDER, to: [ALERT_TO], replyTo: { email: lead.email, name: String(lead.nom ?? '') || undefined }, subject: alert.subject, htmlContent: layout('Nouveau contact depuis le test de maturité IA.', alert.html, true), textContent: alert.text, tags: [...tags, 'alerte'] } } },
  ];
}

return $input.all().flatMap(item => build(item.json.body ?? item.json));
