// n8n — nœud Code « Test de maturité — inscription base marketing », mode « Run Once for All Items ».
// Placé après « Respond — Success 200 », en parallèle de « Test de maturité — préparer les emails ».
// Ne retient que les visiteurs du test qui ont ouvert leur plan SANS demander de rappel et SANS s’opposer aux
// communications : ceux-là rejoignent la base marketing gérée par capture-leads. Les demandes de rappel et d’échange
// sont traitées par Althoce et n’y vont pas. Le nœud suivant envoie `{{ $json.intake }}` à capture-leads, qui ne
// modifie pas un contact déjà présent dans Brevo.
// Copie de référence : le code exécuté est celui du nœud dans n8n. Voir docs/test-maturite-ia/emails.md.

const WEBHOOK = 'Webhook — Receive Lead';
return $(WEBHOOK).all()
  .map(item => item.json.body ?? {})
  .filter(lead => lead.source === 'test-maturite-ia' && lead.demande === 'plan' && lead.rappel === false && lead.opposition_marketing === false)
  .map(lead => ({ json: { intake: {
    email: lead.email,
    prenom: lead.prenom,
    secteur_slug: lead.secteur_slug,
    ...(lead.secteur_personnalise ? { secteur_personnalise: lead.secteur_personnalise } : {}),
    taille: lead.taille_code,
    role: lead.role,
    score: lead.score ?? null,
    stade: lead.stade ?? null,
    stade_nom: lead.stade_nom ?? null,
    offre_recommandee: lead.offre_recommandee,
    lien_resultat: lead.lien_resultat,
    opposition_marketing: false,
    source_url: lead.source_url,
  } } }));
