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

Dans n8n, flux **« Site Althoce — Lead Contact Form → Google Sheets — v1 »**, qui reçoit déjà les contacts du site (`N8N_LEAD_WEBHOOK_URL`). Une branche est ajoutée après le Webhook, sans toucher au reste :

1. **IF « Test de maturité ? »** : `{{ $json.body.source }}` est égal à `test-maturite-ia`. Les contacts du formulaire classique s’arrêtent là.
2. **Code « Préparer les emails »**, mode *Run Once for All Items* : le code est la copie de [`n8n/preparer-emails.js`](n8n/preparer-emails.js). Il produit deux éléments, l’email au visiteur puis l’alerte, au format de l’API Brevo.
3. **HTTP Request « Envoyer avec Brevo »** : `POST https://api.brevo.com/v3/smtp/email`, authentification par l’identifiant Brevo de n8n, corps JSON `{{ $json.brevo }}`.

L’enregistrement dans Google Sheets continue comme avant, pour les deux types de contacts.

## Modifier un email

1. Modifier `docs/test-maturite-ia/n8n/preparer-emails.js`.
2. Vérifier : `npm run test:maturite` (aucun envoi). `node scripts/test-maturite-emails.mjs <dossier>` enregistre en plus un aperçu HTML de chaque email.
3. Recopier le code dans le nœud Code du flux n8n, puis publier le flux.

Les champs utilisés sont décrits dans `webhook.md` : `prenom`, `email`, `demande`, `stade`, `stade_nom`, `score`, `priorites_titres`, `lien_resultat`, `priorite_commerciale`, `description`… Le code refuse un `lien_resultat` qui ne pointe pas vers `https://althoce.com/test-maturite-ia/`.

## Relances

Les relances à J+3 et J+10 décrites dans `exploitation-commerciale.md` ne sont pas automatisées : elles dépendent de ce qui s’est passé entre-temps (rendez-vous pris ou non), que n8n ne sait pas. Elles restent manuelles, à partir de l’alerte.
