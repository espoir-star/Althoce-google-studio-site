# Test de maturité IA — contacts reçus

Ce que reçoit l’outil commercial depuis le test. Deux demandes passent par la même route :

- `plan` : le visiteur ouvre son plan d’action avec son prénom et son email. Il indique s’il veut être rappelé par un expert (`rappel`, téléphone alors obligatoire) et peut s’opposer aux communications d’Althoce (`opposition_marketing`) ;
- `echange` : il clique sur « Parler de mon résultat » et envoie ses coordonnées complètes.

Un même visiteur peut envoyer les deux, dans cet ordre : rapprochez-les par l’email. Le traitement commercial est décrit dans `exploitation-commerciale.md`.

## Destination

La route `/api/maturite-lead/` envoie la demande à la première adresse définie parmi :

1. `MATURITE_LEAD_WEBHOOK_URL` — destination dédiée, facultative ;
2. `N8N_LEAD_WEBHOOK_URL` — celle du formulaire de contact.

Sans réglage, les demandes arrivent donc dans le même flux que le formulaire de contact. Le message respecte son format : il contient les mêmes champs, et le résumé du test est placé dans `description`.

Pour traiter ces demandes à part (étiquette, séquence d’emails, tableau de suivi), créer un flux n8n dédié et renseigner `MATURITE_LEAD_WEBHOOK_URL` dans les variables d’environnement Vercel. Aucun changement de code n’est nécessaire. La destination doit répondre avec un statut 200.

## Contenu du message

### Champs du formulaire de contact

| Champ | Contenu |
|---|---|
| `nom` | Prénom et nom ; le prénom seul pour une demande `plan` |
| `entreprise` | Entreprise ou cabinet ; « Non précisée » pour une demande `plan`, qui ne demande que le prénom et l’email |
| `email` | Email professionnel |
| `telephone` | Obligatoire pour une demande de plan avec rappel ; facultatif pour un échange ; vide sinon |
| `taille` | Tranche au format du formulaire de contact (« 10 à 49 personnes ») |
| `budget` | Toujours vide |
| `description` | Résumé lisible du test, moins de 5 000 caractères |

Exemple de `description` :

```
Demande d’échange depuis le test de maturité IA.
Priorité commerciale : A (demande un échange, dirigeant ou associé, 10 à 49 personnes, secteur sensible, risque sur les données ou la validation).
Score : 34/100 · Stade 2 sur 4 (Usages dispersés).
Profil : Droit & professions juridiques · 10 à 49 personnes · Dirigeant ou associé.
Dimensions (sur 100) : Cap 50 · Usages 44 · Cadre 22 · Compétences 33 · Intégration 22.
Signaux : Des documents confidentiels sans consigne ; L’IA passe par des comptes personnels ; Une relecture laissée à chacun.
Priorités proposées : Poser le cadre d’usage ; Choisir un outil professionnel adapté ; Définir qui valide quoi.
Accompagnement recommandé : Diagnostic organisationnel. Aussi proposés : Formation IA Dirigeant & Associés.
Résultat complet : https://althoce.com/test-maturite-ia/#resultat=1.droit.2.0.121111110101x21
Réponses (14 sur 15, auto-évaluation déclarative) :
- Quelle part de vos collaborateurs utilise l’IA au moins une fois par semaine dans son travail ? Quelques personnes.
- …
```

### Champs propres au test

| Champ | Contenu |
|---|---|
| `source` | Toujours `test-maturite-ia` : permet de filtrer ces demandes dans le flux commun |
| `demande` | `plan` ou `echange` |
| `rappel` | `true` si le visiteur veut être recontacté : demande de plan avec rappel, ou demande d’échange. n8n prévient alors Althoce par email |
| `opposition_marketing` | `true` si le visiteur s’oppose aux communications d’Althoce. Toujours `false` pour un échange, dont le formulaire ne propose pas ces communications |
| `priorite_commerciale`, `priorite_raisons` | A, B ou C, et les critères qui l’expliquent |
| `prenom`, `nom_famille` | Prénom et nom séparés ; le nom est vide pour une demande `plan` |
| `secteur`, `secteur_slug` | Intitulé et identifiant du secteur |
| `secteur_personnalise` | Précision saisie quand le secteur est « Autre activité » (obligatoire dans ce cas), vide sinon |
| `taille_test`, `role` | Tranche et rôle tels qu’affichés dans le test |
| `taille_code` | Code de la tranche : `solo`, `2-9`, `10-49`, `50-199` ou `200+` |
| `score` | 0 à 100, ou `null` si le score n’est pas établi |
| `stade`, `stade_nom` | 1 à 4 et son nom, ou `null` |
| `dimensions` | Score de chaque dimension, `null` si non évaluée |
| `signaux`, `priorites` | Identifiants des signaux relevés et des trois priorités |
| `signaux_titres`, `priorites_titres` | Les mêmes, en clair, dans le même ordre. `priorites_titres` est vide si le résultat n’est pas exploitable |
| `offre_recommandee`, `offres_proposees` | Accompagnement recommandé par le test, puis la liste complète proposée (trois au plus) |
| `lien_resultat` | Adresse qui rouvre le résultat complet tel que le visiteur l’a vu. À utiliser dans un email automatique |
| `reponses` | Réponse à chaque question : 0 à 3, ou -1 pour « Je ne sais pas » |
| `reponses_renseignees` | Nombre de réponses hors « Je ne sais pas » |
| `consentement_rgpd` | Toujours `true` : la demande est refusée sinon |
| `pdf_nom`, `pdf_base64` | Le résultat complet en PDF (nom du fichier, contenu encodé en base64, 60 à 120 Ko), joint par n8n à l’email du visiteur. Absents si le rendu a échoué : la demande part quand même |
| `source_url` | Adresse de la page, sans paramètre ni fragment |

## Garanties

- **Le résultat, la priorité commerciale et le lien sont recalculés côté serveur** à partir des réponses. Ce qu’envoie le navigateur pour ces champs est ignoré.
- **Mêmes protections que les autres formulaires** : origine vérifiée, limite de débit, taille maximale, vérification anti-robot (BotID), consentement obligatoire. Une demande refusée n’atteint jamais la destination.
- **Le PDF est construit côté serveur** (`lib/maturite/pdf.tsx`, `lib/maturite/lead-pdf.ts`) à partir du résultat recalculé. Son échec ne bloque jamais la demande.
- **Aucun champ inattendu n’est transmis.**
- La réponse faite au navigateur ne contient jamais le détail d’une erreur de la destination.

## Mesure d’audience

Après un envoi réussi, et seulement si le visiteur a accepté les cookies de mesure : événement GA4 `generate_lead` avec `lead_type = maturite_plan` (plan ouvert) ou `maturite` (échange demandé), et événement `Lead` du pixel Meta. Aucune réponse du test ni coordonnée n’est envoyée à ces outils.

## Première mise en service

Ne pas envoyer de faux formulaire en production : il alimenterait l’outil commercial. À la première demande réelle, ou lors d’un essai avec vos propres coordonnées, vérifier que :

1. la demande apparaît dans l’outil commercial avec son résumé ;
2. le flux n8n du contact accepte les champs supplémentaires sans erreur ;
3. les événements `generate_lead` (`lead_type = maturite_plan`, puis `maturite`) remontent dans GA4.
