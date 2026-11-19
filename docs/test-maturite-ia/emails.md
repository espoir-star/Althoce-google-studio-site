# Test de maturité IA — email au visiteur

Ce que reçoit le visiteur après le test, et comment c’est branché dans n8n.

## Ce qui part

| Demande | Email au visiteur |
|---|---|
| `plan`, sans rappel | « Votre résultat au test de maturité IA » : stade, score, trois priorités, **résultat complet en PDF joint**, bouton « Choisir un créneau » pour un échange de 30 minutes |
| `plan`, avec rappel (`rappel = true`) | Le même email, qui annonce l’appel d’un expert sous 24 heures ouvrées au numéro saisi, avec le bouton « Choisir un créneau » en alternative |
| `echange` (échange demandé) | « Votre demande d’échange est bien reçue » : rappel sous 24 heures ouvrées, bouton « Choisir un créneau », **résultat complet en PDF joint** |

- **Expéditeur** : Espoir Mwami, `espoir@contact.althoce.com` (domaine authentifié dans Brevo). Une réponse du visiteur arrive dans cette boîte.
- **Le PDF** est construit par le site au moment de la demande (`lib/maturite/pdf.tsx`) : même contenu que le rapport affiché, avec le logo, le prénom et les coordonnées d’Althoce, 60 à 120 Ko. Il arrive dans n8n avec le contact (`pdf_nom`, `pdf_base64`, voir `webhook.md`).
- **Si le PDF n’a pas pu être produit**, la demande part quand même et l’email remplace la pièce jointe par un lien vers le résultat en ligne.
- **Prise de rendez-vous** : le même agenda que les séquences marketing (`https://calendar.app.google/JmhxjFqk2kybuFLR9`, défini dans capture-leads, `lib/sequences/links.ts`).
- **Alerte à Althoce, seulement pour les demandes de rappel et d’échange** : « [Rappel A/B/C] Nom · téléphone · secteur », envoyée à `espoir@contact.althoce.com` avec le téléphone cliquable, le profil, la priorité commerciale, le résumé complet et le PDF. Répondre à l’alerte écrit directement au contact. Les autres contacts se suivent dans la feuille « Althoce — Prospects » et dans la base marketing.
- Le site annonce l’email dans la demande de plan : « Vous le recevez aussi par email, en PDF ». Si le branchement est coupé, retirer cette phrase de `components/maturite/MaturitePlanGate.tsx`.

## Où c’est branché

Dans n8n, flux **« Site Althoce — Lead Contact Form → Google Sheets — v1 »**, qui reçoit déjà les contacts du site (`N8N_LEAD_WEBHOOK_URL`) : Webhook → Set — Normalize Lead → Google Sheets — Append Lead → Respond — Success 200 (ou Error 500).

Deux nœuds sont ajoutés **après « Respond — Success 200 »** : ils ne tournent qu’une fois le contact enregistré dans la feuille et la réponse rendue au site. Un échec d’envoi ne peut donc ni bloquer ni faire échouer le formulaire ; il apparaît comme une exécution en erreur dans n8n.

1. **Code « Test de maturité — préparer les emails »**, mode *Run Once for All Items* : copie de [`n8n/preparer-emails.js`](n8n/preparer-emails.js). Il relit les données du nœud « Webhook — Receive Lead » et ne produit rien si `source` n’est pas `test-maturite-ia` : les contacts du formulaire classique s’arrêtent là. Sinon, un élément : l’email au visiteur, au format de l’API Brevo, PDF compris.
2. **HTTP Request « Test de maturité — envoyer avec Brevo »** : `POST https://api.brevo.com/v3/smtp/email`, identifiant n8n « Brevo account » (clé API Brevo), corps JSON `{{ JSON.stringify($json.brevo) }}`.

Dans le nœud « Set — Normalize Lead », la colonne **Source** de la feuille vaut « Site Althoce — Test de maturité IA (plan ouvert) » ou « (échange demandé) » pour ces contacts, et toujours « Site Althoce — Formulaire contact » pour les autres. Le PDF n’est pas écrit dans la feuille.

## Modifier l’email ou le PDF

1. Modifier `docs/test-maturite-ia/n8n/preparer-emails.js` (email) ou `lib/maturite/pdf.tsx` (PDF).
2. Vérifier : `npm run test:maturite` (aucun envoi). `node scripts/test-maturite-emails.mjs <dossier>` enregistre un aperçu HTML de chaque email ; `node scripts/test-maturite-pdf.mjs <dossier>` enregistre trois exemples de PDF. En développement, `/api/maturite-pdf-apercu/?r=<code de partage>` affiche le PDF d’un résultat.
3. Pour l’email : recopier le code dans le nœud Code du flux n8n, puis publier le flux. Pour le PDF : fusionner sur `main`.

Pour tester dans n8n sans écrire dans la feuille : épingler une donnée sur le Webhook et une sortie factice sur « Google Sheets — Append Lead », exécuter le nœud d’envoi, puis retirer les deux épingles. Les emails partent réellement : utiliser sa propre adresse.

## Base marketing

Les visiteurs qui ouvrent leur plan **sans demander de rappel** et **sans s’opposer** aux communications rejoignent la base Brevo gérée par capture-leads (route d’entrée dédiée, voir `docs/INTAKE_TEST_MATURITE.md` dans capture-leads) : liste « LM - Test de maturité IA », statut marketing calculé par les règles de la base, jeton de désinscription. Un contact déjà présent dans Brevo n’est pas modifié. Les demandes de rappel et d’échange n’y sont pas envoyées : Althoce les traite directement.

Dans n8n, une seconde branche part de « Respond — Success 200 » : un nœud Code ne retient que ces contacts, puis une requête HTTP les transmet à capture-leads avec l’identifiant « Althoce · n8n → Vercel (Bearer) ».

Le nurturing dédié (séquence propre au test) reste à construire : décision du 18 novembre 2026, à reprendre plus tard.
