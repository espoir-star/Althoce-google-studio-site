# Test de maturité IA — 16 novembre 2026

## Périmètre

Nouvelle page `/test-maturite-ia/`, réalisée sur la branche `feat/test-maturite-ia` depuis `main` (`e0ebf41`). Conception détaillée : `docs/test-maturite-ia/conception.md`. Contrat des demandes d’échange : `docs/test-maturite-ia/webhook.md`.

Ajouts : modèle et textes (`lib/maturite/`), interface (`components/MaturiteTestClient.tsx`, `components/maturite/`), page, route `/api/maturite-lead/`, tests (`npm run test:maturite`), kit de lancement (`content/lancement-test-maturite-ia/`).

Modifications de l’existant :

- `lib/lead-security.ts` : la chaîne d’envoi devient `deliverPayload`, commune à toutes les demandes. `deliverLead` (contact et calculateur ROI) l’appelle sans changement de comportement.
- `instrumentation-client.ts` : la nouvelle route est protégée par BotID.
- `lib/analytics.ts` : type de demande `maturite`.
- `components/Navbar.tsx`, `components/Footer.tsx` : entrée « Test de maturité IA » dans Ressources.
- `components/services/ServicePage.tsx` : lien vers le test depuis la page Diagnostic IA.
- `components/PrivacyPageClient.tsx` : ligne décrivant les données transmises à l’ouverture du plan d’action ou lors d’une demande d’échange ; date de mise à jour. **À valider par le client.**
- `app/globals.css` : la règle d’impression qui masque la navigation s’applique aussi au rapport du test.
- `app/sitemap.ts` : priorité de la page. `.env.example` : variable facultative `MATURITE_LEAD_WEBHOOK_URL`.

Les pages secteurs et le calculateur ROI ne sont pas modifiés. Le calculateur partage sa feuille de style de structure avec le test.

## Choix éditoriaux

Auto-évaluation déclarative, présentée comme telle. Aucune comparaison chiffrée avec d’autres entreprises, aucun pourcentage de marché, aucune promesse de conformité. Les exemples sectoriels et les limites affichés dans le résultat proviennent des pages secteurs. La feuille de route à 90 jours reste un livrable des offres payantes : le test s’arrête à trois priorités.

## Vérifications

- `npm run test:maturite` : structure du questionnaire, variantes pour indépendants, alignement des secteurs avec les pages publiées et le calculateur ROI, calcul et pondération, réponses « Je ne sais pas », douze signaux, priorités sur 4 000 profils aléatoires, existence de chaque page liée, absence de pourcentage et de promesse dans les textes, lien de partage, reprise du test, contrat et envoi des demandes d’échange. Aucun appel extérieur.
- `npm run test:security`, `npm run test:roi`, `node scripts/test-analytics.mjs` : réussis après la refonte de la chaîne d’envoi.
- `npm run typecheck`, `npm run build` (118 pages), `git diff --check` : réussis. Poids de la route : 13,5 kB ; premier chargement annoncé par Next.js : 130 kB. Les textes du rapport sont chargés au moment du résultat.
- Résultat contrôlé à la main sur deux profils complets (score, dimensions, pondération sectorielle, signaux, priorités) : identique au calcul attendu.
- Navigateur : champs obligatoires du profil, avance automatique au clic, sélection au clavier sans avance, « Je ne sais pas », retour en arrière, reprise après rechargement, score non établi, résultat à 100, résultat reçu par lien (lecture seule, sans écraser le test en cours), lien invalide ignoré, dialogue de contact (ouverture, focus, Échap, retour du focus). Console sans erreur.
- Sans débordement horizontal à 320, 390, 768 et 1280 px. Vérification visuelle sur ordinateur et sur mobile.
- Impression : PDF produit avec Chrome sans interface et relu page par page. Navigation, pied de page et panneau latéral masqués, méthode dépliée, date du test en bas de document.
- Route `/api/maturite-lead/` en local : origine étrangère 403, format non JSON 415, JSON invalide 400, vérification anti-robot indisponible 503. Aucune demande transmise.
- HTML serveur : un H1, URL canonique, JSON-LD WebApplication, BreadcrumbList et FAQPage (6 questions identiques à la FAQ visible). Page présente dans le sitemap.
- Graphe mis à jour avec `graphify update .`.

## Complément du 16 novembre : exploitation commerciale

À la demande du client, le test doit produire des contacts et proposer davantage d’accompagnements.

- **Plan d’action contre prénom et email.** Le constat (score, stade, lecture des dimensions, déséquilibres) reste libre. Le détail des priorités, le prochain pas par dimension, le premier pas par signal, l’accompagnement recommandé, le bloc secteur, l’impression et le lien de partage s’ouvrent après la saisie. Affichage immédiat à l’écran ; aucun email automatique n’est annoncé.
- **Accompagnement recommandé.** Chaque plan met en avant une offre du catalogue et en propose jusqu’à deux autres. Intitulés et formats repris des pages services et formations.
- **Deux contacts distincts** par la même route : `plan` et `echange`. Chacun porte une priorité commerciale A, B ou C, l’accompagnement recommandé et un lien qui rouvre le résultat complet. Le dialogue d’échange reprend le prénom et l’email déjà saisis.
- **« Autre activité »** ouvre un champ libre obligatoire : sans précision, le test ne démarre pas et le serveur refuse le contact. La précision s’affiche dans le résultat et accompagne le contact ; elle ne figure jamais dans le lien de partage.
- **Mesure** : événements `maturite_resultat` (test terminé, stade) et `generate_lead` avec `lead_type = maturite_plan`. Aucune réponse ni coordonnée.
- **Guide** : `docs/test-maturite-ia/exploitation-commerciale.md`.

Vérifications ajoutées :

- `npm run test:maturite` : règles de recommandation, existence de chaque page d’offre, contrat des deux demandes, priorité commerciale, lien reconstruit côté serveur, précision du secteur, état « plan ouvert » dans la reprise.
- Navigateur : champ « Autre activité », résultat verrouillé (aucun prochain pas, aucune offre, pas d’impression), envoi refusé sans accord, échec d’envoi (plan toujours verrouillé, message affiché), ouverture après une réponse positive simulée, plan toujours ouvert après rechargement, aucune coordonnée dans le stockage du navigateur, dialogue d’échange prérempli. Sans débordement à 320 px.
- L’ouverture réelle du plan n’a pas pu être testée de bout en bout en local : la vérification anti-robot y refuse toute demande, ce qui est le comportement attendu hors production.

## Second complément : inciter à ouvrir le plan

À la demande du client, l’aperçu libre montre moins et la demande d’email vient au-devant du visiteur.

- **Trois dimensions sur cinq** sans email : les mieux notées. Les deux autres apparaissent verrouillées, sans score. Le radar ne s’affiche qu’une fois le plan ouvert.
- **Un seul signal** sans email, le plus critique ; les autres sont annoncés par leur nombre.
- **Fenêtre de demande d’email** : elle s’ouvre d’elle-même, une seule fois, quand le défilement atteint la première dimension verrouillée. Elle se ferme par la croix, Échap, un clic à l’extérieur ou « Continuer sans le plan ». Le bouton « Voir mes cinq dimensions » et le bloc en bas du résultat la remplacent ensuite.
- **Deux champs** : prénom et email. L’entreprise n’est plus demandée à ce stade.
- **« Autre activité »** : la précision est obligatoire.

Vérifications ajoutées : règle de choix des trois dimensions (`npm run test:maturite`, 4 000 profils) ; dans le navigateur, aucune fenêtre avant défilement, ouverture au défilement, pas de réouverture après fermeture, réouverture par le bouton, ouverture du plan depuis la fenêtre avec une réponse simulée.

## Troisième complément (18 novembre) : un résultat complet plus fourni

Le client jugeait le rendu trop léger. Le plan tenait en trois pages et demie et ne reflétait pas les réponses.

Ajouts, tous dans la partie ouverte après la saisie de l’email : synthèse en trois messages, écart et leviers vers le stade suivant, fiches d’action détaillées pour les trois priorités, plan sur 30 jours, bloc secteur enrichi (usages, contrôle humain, guides, cas client), lecture des quinze réponses, cinq questions à se poser en interne, en-tête de document pour le PDF. L’aperçu libre ne change pas.

Défaut repéré à la relecture du PDF et corrigé : pour dix questions, le cran suivant de l’échelle n’est pas une étape souhaitable (« c’est interdit, sans solution »). L’étape recommandée saute alors ce cran.

Vérifications :

- `npm run test:maturite` : fiches complètes pour les onze actions, étape recommandée par question, leviers et plan sur 30 jours contrôlés sur 4 000 profils, cas calculés à la main.
- PDF produit avec Chrome sans interface et relu page par page : dix pages, tout déplié, étapes numérotées, neuf liens cliquables.
- Navigateur : résultat complet sur ordinateur et mobile, sans débordement à 320 et 390 px ; score maximal, score non établi et aperçu verrouillé sans erreur ; première fiche ouverte, les autres repliées.

Reste à faire par le client : relire les textes ajoutés, en particulier les onze fiches d’action et leurs délais indicatifs, qui sont des ordres de grandeur proposés et non des engagements.

## Limites de la validation

- Aucune demande réelle envoyée : la réception dans l’outil commercial et la tolérance du flux n8n du contact aux champs supplémentaires restent à vérifier lors d’un premier envoi avec les coordonnées du client.
- Pas d’audit d’accessibilité outillé ni de test avec un lecteur d’écran. La structure (fieldset, legend, boutons radio, focus géré) suit celle du calculateur ROI.
- Les questions et les textes n’ont pas été relus par le client ni testés auprès de dirigeants : une relecture métier est recommandée avant de communiquer largement.
- La version n’est pas déployée en production à la date de cette note.
