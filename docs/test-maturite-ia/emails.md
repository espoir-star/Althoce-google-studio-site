# Test de maturité IA — emails automatiques

Ce que reçoivent le visiteur et Althoce à chaque contact du test, et comment c’est branché dans n8n.

## Ce qui part

| Demande | Email au visiteur | Alerte à Althoce |
|---|---|---|
| `plan` (plan d’action ouvert) | « Votre résultat au test de maturité IA » : stade, score, trois priorités, bouton vers le résultat complet, proposition d’échange | « [Test maturité A/B/C] Plan ouvert · Prénom · Secteur » |
| `echange` (échange demandé) | « Votre demande d’échange est bien reçue » : rappel sous 24 heures ouvrées, bouton vers le résultat | « [Test maturité A/B/C] Échange demandé · Nom · Secteur » |

- **Expéditeur** : Espoir Mwami, `espoir@contact.althoce.com` (domaine authentifié dans Brevo). Une réponse du visiteur arrive dans cette boîte.
- **Alerte** : envoyée à `espoir@contact.althoce.com`, avec la priorité commerciale, le profil, le résultat et le résumé complet. Répondre à l’alerte écrit directement au contact.
- **Score non établi** (trop de « Je ne sais pas ») : l’email le dit et renvoie vers le résultat, sans afficher de stade.
- Le site annonce l’email dans la demande de plan : « Vous recevez aussi le lien de votre résultat par email ». Si le branchement est coupé, retirer cette phrase de `components/maturite/MaturitePlanGate.tsx`.

## Où c’est branché

Dans n8n, flux **« Site Althoce — Lead Contact Form → Google Sheets — v1 »**, qui reçoit déjà les contacts du site (`N8N_LEAD_WEBHOOK_URL`) : Webhook → Set — Normalize Lead → Google Sheets — Append Lead → Respond — Success 200 (ou Error 500).

Deux nœuds sont ajoutés **après « Respond — Success 200 »** : ils ne tournent qu’une fois le contact enregistré dans la feuille et la réponse rendue au site. Un échec d’envoi ne peut donc ni bloquer ni faire échouer le formulaire ; il apparaît comme une exécution en erreur dans n8n.

1. **Code « Test de maturité — préparer les emails »**, mode *Run Once for All Items* : copie de [`n8n/preparer-emails.js`](n8n/preparer-emails.js). Il relit les données du nœud « Webhook — Receive Lead » et ne produit rien si `source` n’est pas `test-maturite-ia` : les contacts du formulaire classique s’arrêtent là. Sinon, deux éléments : l’email au visiteur, puis l’alerte, au format de l’API Brevo.
2. **HTTP Request « Test de maturité — envoyer avec Brevo »** : `POST https://api.brevo.com/v3/smtp/email`, identifiant n8n « Brevo account » (clé API Brevo), corps JSON `{{ JSON.stringify($json.brevo) }}`.

Dans le nœud « Set — Normalize Lead », la colonne **Source** de la feuille vaut « Site Althoce — Test de maturité IA (plan ouvert) » ou « (échange demandé) » pour ces contacts, et toujours « Site Althoce — Formulaire contact » pour les autres.

Pour tester sans écrire dans la feuille : épingler une donnée sur le Webhook et une sortie factice sur « Google Sheets — Append Lead », exécuter le nœud d’envoi, puis retirer les deux épingles. Les emails partent réellement : utiliser sa propre adresse.

## Modifier un email

1. Modifier `docs/test-maturite-ia/n8n/preparer-emails.js`.
2. Vérifier : `npm run test:maturite` (aucun envoi). `node scripts/test-maturite-emails.mjs <dossier>` enregistre en plus un aperçu HTML de chaque email.
3. Recopier le code dans le nœud Code du flux n8n, puis publier le flux.

Les champs utilisés sont décrits dans `webhook.md` : `prenom`, `email`, `demande`, `stade`, `stade_nom`, `score`, `priorites_titres`, `lien_resultat`, `priorite_commerciale`, `description`… Le code refuse un `lien_resultat` qui ne pointe pas vers `https://althoce.com/test-maturite-ia/`.

## Relances

Les relances à J+3 et J+10 décrites dans `exploitation-commerciale.md` ne sont pas automatisées : elles dépendent de ce qui s’est passé entre-temps (rendez-vous pris ou non), que n8n ne sait pas. Elles restent manuelles, à partir de l’alerte.
