# Test de maturité IA — demandes d’échange

Ce que reçoit l’outil commercial quand un visiteur clique sur « Parler de mon résultat » et envoie le formulaire.

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
| `nom` | Prénom et nom |
| `entreprise` | Entreprise ou cabinet |
| `email` | Email professionnel |
| `telephone` | Facultatif, vide si non renseigné |
| `taille` | Tranche au format du formulaire de contact (« 10 à 49 personnes ») |
| `budget` | Toujours vide |
| `description` | Résumé lisible du test, moins de 5 000 caractères |

Exemple de `description` :

```
Demande d’échange depuis le test de maturité IA.
Score : 34/100 · Stade 2 sur 4 (Usages dispersés).
Profil : Droit & professions juridiques · 10 à 49 personnes · Dirigeant ou associé.
Dimensions (sur 100) : Cap 50 · Usages 44 · Cadre 22 · Compétences 33 · Intégration 22.
Signaux : Des documents confidentiels sans consigne ; L’IA passe par des comptes personnels ; Une relecture laissée à chacun.
Priorités proposées : Poser le cadre d’usage ; Choisir un outil professionnel adapté ; Définir qui valide quoi.
Réponses (14 sur 15, auto-évaluation déclarative) :
- Quelle part de vos collaborateurs utilise l’IA au moins une fois par semaine dans son travail ? Quelques personnes.
- …
```

### Champs propres au test

| Champ | Contenu |
|---|---|
| `source` | Toujours `test-maturite-ia` : permet de filtrer ces demandes dans le flux commun |
| `prenom`, `nom_famille` | Prénom et nom séparés |
| `secteur`, `secteur_slug` | Intitulé et identifiant du secteur |
| `taille_test`, `role` | Tranche et rôle tels qu’affichés dans le test |
| `score` | 0 à 100, ou `null` si le score n’est pas établi |
| `stade`, `stade_nom` | 1 à 4 et son nom, ou `null` |
| `dimensions` | Score de chaque dimension, `null` si non évaluée |
| `signaux`, `priorites` | Identifiants des signaux relevés et des trois priorités |
| `reponses` | Réponse à chaque question : 0 à 3, ou -1 pour « Je ne sais pas » |
| `reponses_renseignees` | Nombre de réponses hors « Je ne sais pas » |
| `consentement_rgpd` | Toujours `true` : la demande est refusée sinon |
| `source_url` | Adresse de la page, sans paramètre ni fragment |

## Garanties

- **Le résultat est recalculé côté serveur** à partir des réponses. Un score ou un résumé envoyé par le navigateur est ignoré.
- **Mêmes protections que les autres formulaires** : origine vérifiée, limite de débit, taille maximale, vérification anti-robot (BotID), consentement obligatoire. Une demande refusée n’atteint jamais la destination.
- **Aucun champ inattendu n’est transmis.**
- La réponse faite au navigateur ne contient jamais le détail d’une erreur de la destination.

## Mesure d’audience

Après un envoi réussi, et seulement si le visiteur a accepté les cookies de mesure : événement GA4 `generate_lead` avec `lead_type = maturite`, et événement `Lead` du pixel Meta. Aucune réponse du test ni coordonnée n’est envoyée à ces outils.

## Première mise en service

Ne pas envoyer de faux formulaire en production : il alimenterait l’outil commercial. À la première demande réelle, ou lors d’un essai avec vos propres coordonnées, vérifier que :

1. la demande apparaît dans l’outil commercial avec son résumé ;
2. le flux n8n du contact accepte les champs supplémentaires sans erreur ;
3. l’événement `generate_lead` (`lead_type = maturite`) remonte dans GA4.
