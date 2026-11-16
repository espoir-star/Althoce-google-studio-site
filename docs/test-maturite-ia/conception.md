# Test de maturité IA — conception

Document de référence du test publié sur `/test-maturite-ia/`. Rédigé le 16 novembre 2026.
Il explique pourquoi le test existe, comment il est construit et ce qu’il ne faut pas modifier sans y réfléchir.

## 1. Pourquoi ce test

Un dirigeant qui arrive sur le site ne sait pas toujours quoi demander : une formation, un diagnostic, un agent ? Le test lui donne en cinq minutes une lecture de sa situation et trois priorités. Pour Althoce, il remplit trois rôles :

- **Qualifier** : chaque dimension faible correspond à une offre du catalogue (voir §7).
- **Ouvrir la discussion** : une demande d’échange arrive avec le score, les réponses et les priorités proposées.
- **Référencer** : la page vise les recherches « test maturité IA », « diagnostic maturité IA », « évaluer la maturité IA de son entreprise ».

Le test est gratuit et sans inscription. Il se distingue du **Diagnostic IA** payant (`/services/audit-ia/`) : c’est une auto-évaluation déclarative, pas une étude. Le nom « test » a été choisi pour éviter la confusion.

## 2. Ce que nous avons observé chez un concurrent

Analyse du 14 novembre 2026 du simulateur publié par Mister IA (`maturite-ia.mister-ia.com`).

| Point | Leur choix | Notre lecture |
|---|---|---|
| Format | 4 questions de profil, 22 questions, 6 dimensions, 5 niveaux | Solide, mais long pour un premier contact |
| Résultat | Score, niveau, radar et « pièges » sans inscription ; rapport de 14 pages contre email | Bon principe : la valeur avant le contact |
| Adaptation | Pondération selon la taille. Le secteur est demandé mais ne change rien | Leur principal angle mort |
| Benchmark | Médianes fixes écrites dans le code tant qu’une tranche n’a pas 30 répondants | Un pourcentage affiché sans données réelles |
| Consentement | Case cochée d’avance | Fragile au regard du RGPD |
| Hébergement | Sous-domaine séparé | N’apporte rien au référencement du site principal |

Nous avons repris des **principes généraux** (résultat immédiat, questions factuelles, lecture par dimension). Nous n’avons repris **aucun contenu** : dimensions, questions, noms de stades, signaux et textes sont propres à Althoce.

## 3. Nos partis pris

1. **Quinze questions, cinq minutes.** Trois par dimension : assez pour lire une dimension, assez court pour être terminé sur téléphone.
2. **Quatre stades, alignés sur les quatre situations de chaque question.** Chaque question décrit la même progression que l’échelle finale. Le score se comprend sans mode d’emploi.
3. **« Je ne sais pas » est une réponse.** Elle n’est pas comptée comme une mauvaise note. Elle est signalée, parce qu’un dirigeant qui ne sait pas ce qui se pratique a déjà appris quelque chose.
4. **Aucun benchmark tant que nous n’avons pas de données.** Le résultat situe par rapport à quatre stades décrits, pas par rapport à une moyenne inventée.
5. **Les réponses restent dans le navigateur.** Le calcul se fait sur l’appareil du visiteur. Rien n’est envoyé tant qu’il ne demande pas un échange. C’est cohérent avec ce que nous disons aux professions réglementées, et c’est un argument en soi.
6. **Le cadre avant l’automatisation.** Le test ne recommande jamais de relier l’IA aux outils tant que le cadre ou les usages sont faibles.
7. **Adapté au secteur.** Le secteur modifie la pondération, les liens proposés et ajoute un bloc d’exemples tiré de la page secteur correspondante.
8. **Adapté aux indépendants.** Chaque question a une formulation dédiée à la personne qui exerce seule.

Un point a changé par rapport à l’idée de départ : le barème n’est pas caché côté serveur. Le calcul dans le navigateur garantit la confidentialité des réponses, et un concurrent peut de toute façon reconstituer un barème en passant le test plusieurs fois. La confidentialité l’a emporté.

## 4. Le modèle

### Cinq dimensions

| Dimension | Ce qu’elle regarde | Lien avec la méthode Althoce |
|---|---|---|
| **Cap** — Direction et priorités | Qui porte le sujet, comment les usages sont choisis, ce qui est mesuré | Comprendre |
| **Usages** — Pratiques réelles | Part d’utilisateurs, nature des tâches, partage des bons usages | Former |
| **Cadre** — Confidentialité et contrôle | Règles, documents confidentiels, validation des réponses | Équiper, encadrer |
| **Compétences** — Formation et autonomie | Mode d’apprentissage, appui en cas de blocage, capacité à vérifier | Former |
| **Intégration** — Outils et processus | Outils fournis, lien avec les logiciels, automatisations | Automatiser, faire durer |

L’ordre du questionnaire va du plus concret au plus stratégique : Usages, Compétences, Intégration, Cadre, Cap. On répond plus facilement sur ce que l’on fait que sur la gouvernance.

### Calcul

- Chaque réponse vaut de 0 à 3. « Je ne sais pas » est exclu du calcul.
- Une dimension est la moyenne de ses réponses, ramenée sur 100. Elle se lit sur au moins deux réponses.
- Le score total pondère les dimensions évaluées :
  - cas général : 20 % chacune ;
  - secteurs sensibles (professions réglementées et secteur public) : Cadre 25 %, Intégration 15 %, les autres 20 %.
- Un score n’est établi qu’avec au moins 10 réponses renseignées et 4 dimensions évaluées.

Secteurs sensibles : finance, expertise comptable, droit, santé, assurance et patrimoine, immobilier, secteur public. La liste suit le groupe « professions » des pages secteurs, plus le secteur public. Un test automatique vérifie cet alignement.

### Quatre stades

| Stade | Score | En une phrase |
|---|---|---|
| 1. Exploration | 0 à 24 | L’IA reste un sujet de veille. |
| 2. Usages dispersés | 25 à 49 | Des usages existent, chacun de son côté. |
| 3. Pratique encadrée | 50 à 74 | L’IA est utilisée avec méthode. |
| 4. IA intégrée au métier | 75 à 100 | L’IA fait partie des méthodes de travail. |

Les seuils sont des quarts : ils correspondent aux quatre situations proposées à chaque question.

### Signaux

Douze signaux décrivent des **déséquilibres**, pas des mauvaises notes. Ils sont déclenchés par une réponse précise ou par un écart entre deux dimensions. Trois au plus sont affichés, du plus critique au moins critique.

| Signal | Déclencheur | Priorité associée |
|---|---|---|
| Des documents confidentiels sans consigne | Usages présents et aucune consigne sur les documents confidentiels | Poser le cadre d’usage |
| L’IA passe par des comptes personnels | Usages présents sans outil professionnel fourni | Choisir un outil professionnel |
| Un interdit sans solution | Usage interdit ou déconseillé, sans alternative | Choisir un outil professionnel |
| Des automatisations sans validation définie | Automatisations en service et relecture laissée à chacun | Définir qui valide quoi |
| Des usages en avance sur le cadre | Usages supérieurs au cadre d’au moins 30 points | Poser le cadre d’usage |
| Une relecture laissée à chacun | Tâches du métier sans règle de vérification | Définir qui valide quoi |
| Des outils fournis, peu de formation | Abonnements professionnels et apprentissage en autonomie | Former sur vos propres cas |
| Des usages en avance sur le cap | Usages élevés, cap faible | Choisir vos priorités |
| Un cap sans pratique | Cap élevé, usages faibles | Former sur vos propres cas |
| Un savoir-faire qui repose sur quelques personnes | Usages non partagés et aide informelle (hors indépendants) | Transformer les usages en méthodes |
| Une IA cantonnée aux tâches générales | Usage fréquent, limité à la reformulation et au résumé | Appliquer l’IA aux tâches du métier |
| Des usages sans repère | Usage fréquent sans mesure | Mesurer ce que l’IA apporte |

Huit points d’appui valorisent ce qui est acquis (cadre posé, sujet porté, formation sur des cas réels, etc.). Trois au plus sont affichés.

### Trois priorités

Le test propose toujours exactement trois priorités, dans cet ordre :

1. le cadre d’abord, s’il est faible alors que l’IA est déjà utilisée ;
2. les priorités associées aux signaux, du plus critique au moins critique ;
3. le prochain pas des dimensions les plus faibles ;
4. à défaut, trois priorités d’entretien (suivre, mesurer, formaliser).

« Relier l’IA à vos outils » et « Organiser le suivi » ne sont jamais proposés tant que le cadre ou les usages sont faibles.

## 5. Parcours

1. **Profil** : secteur, rôle, taille. Trois champs, obligatoires.
2. **Quinze questions**, une par écran. Un clic passe à la suivante ; au clavier, on choisit puis on valide.
3. **Résultat immédiat** : score et stade, lecture des cinq dimensions, signaux et points d’appui, trois priorités, bloc secteur, méthode de calcul.
4. **Suites possibles** : imprimer ou enregistrer en PDF, copier un lien de partage, demander un échange.

Le test en cours est conservé deux heures dans l’onglet. Le lien de partage contient les réponses après le signe `#` : cette partie d’une adresse n’est pas transmise au serveur.

## 6. Ce qui est volontairement absent

- **Pas de comparaison chiffrée** avec d’autres entreprises.
- **Pas de feuille de route à 90 jours** : c’est un livrable de la Formation IA Dirigeant & Associés et de l’atelier Priorités IA. Le test s’arrête à trois priorités.
- **Pas d’envoi du rapport par email** : il demanderait de collecter l’adresse avant de montrer le résultat. Le rapport s’imprime et se partage par lien.
- **Aucun pourcentage, aucune promesse de conformité** dans les textes. Un test automatique le vérifie.

## 7. Lien avec le catalogue

| Priorité proposée | Page de destination |
|---|---|
| Tester un premier usage, transformer les usages en méthodes | `/guides/` |
| Poser le cadre d’usage, choisir un outil professionnel | Guide RGPD du blog ; guide sur les données sensibles pour les secteurs sensibles |
| Définir qui valide quoi, choisir vos priorités | `/services/audit-ia/` |
| Former sur vos propres cas | Formation IA métier ; Coaching IA Solo pour les indépendants |
| Appliquer l’IA aux tâches du métier | Formation IA métier personnalisée ; Coaching IA Solo pour les indépendants |
| Mesurer ce que l’IA apporte | `/calculateur-roi/` |
| Relier l’IA à vos outils | `/services/automatisation-ia/` |
| Organiser le suivi dans la durée | `/services/pilotage-ia/` |

Un test automatique vérifie que chaque page de destination existe.

## 8. Où se trouve quoi

| Fichier | Rôle |
|---|---|
| `lib/maturite/questions.ts` | Dimensions, questions, variantes pour indépendants, profil |
| `lib/maturite/model.ts` | Calcul du score, stades, signaux, priorités, lien de partage, reprise |
| `lib/maturite/report-content.ts` | Tous les textes du rapport et la FAQ |
| `lib/maturite/lead.ts` | Demande d’échange : validation et résumé recalculé côté serveur |
| `components/MaturiteTestClient.tsx`, `components/maturite/` | Interface |
| `app/test-maturite-ia/page.tsx` | Page, métadonnées, données structurées |
| `app/api/maturite-lead/route.ts` | Réception des demandes d’échange |
| `scripts/test-maturite.mjs` | Tests automatiques (`npm run test:maturite`) |

La structure visuelle (en-tête, panneau, étapes, boutons, dialogue) est partagée avec le calculateur ROI : `components/roi/Calculator.module.css`. Une modification de ce fichier touche les deux outils.

## 9. Faire évoluer le test

- **Modifier un texte** : `report-content.ts` ou `questions.ts`, puis `npm run test:maturite`.
- **Ajouter un secteur** : il doit exister dans les pages secteurs, dans `SECTOR_OPTIONS` et dans le calculateur ROI. Les tests échouent sinon.
- **Changer une question ou un barème** : cela rend les anciens liens de partage incohérents. Passer le préfixe du code de partage de `1` à `2` dans `model.ts`.
- **Publier un benchmark** : seulement à partir de réponses réelles, en nombre suffisant par tranche, avec un enregistrement anonyme consenti. Rien n’est enregistré aujourd’hui.
