# /cas-clients/[slug]/ — Althoce (Silo 6, modèle vivant Cas client)

> **Brief de contenu** destiné à Claude Design (conception) et Claude Code (intégration).
> Version : 1.0 — Avril 2026
> Silo : 6 · Cas Clients · **Page modèle vivante**
> URL : `/cas-clients/[slug]/`
> Statut Miro : tâche #28
> **🟢 Modèle vivant Cas client** : ce brief est la page modèle canonique du Silo 6. Les autres cas clients (premiers prévus : `cabinet-comptable-lyon`, `negoce-vins-bordeaux`, `agence-seo-paris`, `e-commerce-medical`, `industrie-btp-toulouse`) réutilisent strictement la même structure — seuls les slots changent.

---

## 0. Statut « modèle vivant Cas client » (template du Silo 6)

Ce brief sert de **template vivant** pour tous les cas clients à publier. Trois types de blocs : sections héritées de la home, sections propres au cas (quasi tout le contenu), blocs immuables.

### Sections héritées de la home (réutilisation stricte des composants v2)

| Section | Composant home réutilisé | Position |
|---------|--------------------------|----------|
| **Méthode** | `MethodologySection` (4 étapes timeline) | après les résultats, avant les apprentissages |
| **CTA final** | `CTAFinalSection` | dernière section |

> ⚠️ **Note importante** : sur les pages Cas client, on n'hérite **que** de Méthode et CTA final. La page **n'inclut pas** de section pricing ni de section souveraineté complète — un cas est une preuve, pas un argumentaire commercial. Pricing et souveraineté sont mentionnés via des liens contextuels vers `/services/agents-ia/`.

### Slots variables (à adapter par cas)

| Slot | Section | Variation |
|------|---------|-----------|
| `Hero héro client` | sec.1 | Logo/photo client (consenti), 1 chiffre KPI principal en gros, secteur, taille |
| `Le client` | sec.2 | Identité, contexte, défi initial |
| `La situation avant` | sec.3 | Pain point quantifié (chiffres avant Althoce) |
| `La solution déployée` | sec.4 | Quels agents, quelles intégrations, quelle équipe Althoce |
| `Les résultats chiffrés` | sec.5 | 3 à 5 KPI principaux + courbes/comparaisons |
| `Témoignage client` | sec.6 | Citation longue, photo (consentie), nom, fonction |
| `Apprentissages & limites` | sec.7 | Honnêteté éditoriale : ce qui a marché / ce qu'on aurait fait différemment |
| `CTA contextualisé` | sec.8 | « Votre cas est-il similaire ? » + 2 liens services pertinents |
| `Mots-clés cibles` | §1 | Cluster sémantique du cas (secteur + métier + taille) |
| `JSON-LD type` | §2 | `Article` + `Organization` (client) |

### Règle « pas de labels visuels »

Aucun label décoratif (`Cas client`, `Le client`, `Les résultats`, etc.). Les H2 portent directement le sens narratif.

### Règle « créativité visuelle, pas de réflexe grille »

- **Section 1 Hero héro client** : pleine largeur, gros chiffre KPI principal en display serif géant (effet « stat héros »), logo client à côté. Pas de carte.
- **Section 2 Le client** : long paragraphe éditorial, ambiance journalistique. Photo d'illustration en pleine largeur en haut (pas obligatoire).
- **Section 3 Situation avant** : split éditorial gauche/droite (vie quotidienne avant + chiffres avant en colonne droite avec gros nombres rouge/sobre). Pas de grille.
- **Section 4 Solution** : timeline horizontale (étapes du déploiement) + diagramme schématique de l'architecture (qui parle à quoi : agent → outils client). Pas de grille de cartes.
- **Section 5 Résultats** : « stat héros » répétée — chaque KPI prend une bande pleine largeur avec gros chiffre + 1 phrase commentaire + petite courbe sparkline. Empilage vertical, pas de grille 4 colonnes.
- **Section 6 Témoignage** : citation pleine largeur, typographie display serif, fond sombre. Photo client en circulaire à droite. Pas de carte.
- **Section 7 Apprentissages** : long paragraphe éditorial avec 3 sous-blocs typés (✅ ce qui a marché / 🔧 ce qu'on a ajusté / ⚠️ limites honnêtes). Pas de grille.

### Blocs immuables (jamais modifiés d'un cas à l'autre)

- **Breadcrumb pattern** : `Accueil › Cas Clients › [Nom du client]`
- **CTA primaire (sec.8)** : « Discuter de votre cas → »
- **CTA secondaire (sec.8)** : « Voir tous les cas clients → /cas-clients/ »
- **Mention pricing** : non affichée explicitement sur la page cas — un lien contextuel vers `/services/agents-ia/` permet d'aller voir
- **Audit pitch** : mentionné dans le CTA final hérité de la home
- **JSON-LD obligatoires** : `Article` (le cas est un article éditorial) + `Organization` (le client) + `BreadcrumbList`
- **Chiffres marque (footer du cas)** : ligne discrète « Cas n°X sur les +758 agents en production · +150 PME équipées »

### Procédure d'adaptation pour un nouveau cas client

1. Dupliquer ce fichier en `cas-clients-[slug].md`
2. Recueillir le consentement écrit du client (ou anonymiser explicitement et le mentionner dans la page)
3. Remplir les slots dans l'ordre : sec.1 KPI héros → sec.2 identité → sec.3 avant → sec.4 solution → sec.5 résultats → sec.6 témoignage → sec.7 apprentissages
4. Vérifier la traçabilité de chaque chiffre cité (source : tableau de bord client, mesure interne, déclaratif client)
5. Vérifier maillage : ≥ 1 lien vers pilier Silo 1 + ≥ 1 lien vers métier Silo 2 + ≥ 1 lien vers autre cas Silo 6
6. Vérifier les 3 JSON-LD
7. Cocher la checklist SEO §5

---

## 1. Stratégie de la page (modèle générique)

### Rôle dans l'architecture

Les pages Cas client sont les **preuves sociales détaillées** du site. Elles convertissent en cycle long (lecteur convaincu par le détail concret) et alimentent le SEO longue traîne (« étude de cas IA [secteur] », « ROI agent IA [métier] »).

### Objectif trafic & conversion

1. **Capter** les requêtes longue traîne « cas client IA », « étude de cas automatisation », « ROI IA [secteur] ».
2. **Convaincre** les prospects en cycle de réflexion long (visite répétée de la page).
3. **Distribuer** vers les services et métiers pertinents au cas.

### Intention de recherche

**Commerciale réfléchie** : un prospect qui lit un cas est déjà éduqué. Il cherche la preuve qu'on a déjà résolu son problème. La page doit livrer la preuve de manière dense, honnête, lisible.

### Cible prioritaire

Décideur en cycle long (3 à 12 mois de réflexion avant achat) qui veut comprendre **comment ça s'est passé concrètement**, **combien ça a coûté**, **qu'est-ce qui a marché ou pas**.

### Mots-clés cibles (à adapter par cas)

**Principal** : étude de cas IA + [secteur du client]

**Secondaires (exemples)** :
- ROI agent IA [secteur]
- automatisation IA [secteur]
- agent IA [métier]
- exemple agent IA PME
- cas concret automatisation [métier]

---

## 2. Méta SEO

```html
<title>[Nom client ou secteur anonymisé] — Cas client : [résultat principal] | Althoce</title>

<meta name="description" content="Comment [nom ou secteur] a [résultat] grâce à un agent IA Althoce. Avant/après chiffré, méthode, témoignage. Cas client détaillé.">

<meta name="keywords" content="cas client IA, étude de cas automatisation, agent IA [secteur], ROI IA, [métier]">

<link rel="canonical" href="https://althoce.com/cas-clients/[slug]/">

<!-- Open Graph -->
<meta property="og:title" content="[Nom client] — Cas client Althoce">
<meta property="og:description" content="[Résultat principal en 1 phrase]">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:image" content="[image hero du cas]">
<meta property="og:url" content="https://althoce.com/cas-clients/[slug]/">
```

### Schémas JSON-LD requis

1. **Article** — `@type: Article`, `headline`, `datePublished`, `author: Althoce`, `publisher: Althoce`, `image`.
2. **Organization** — l'entreprise cliente (avec consentement).
3. **BreadcrumbList** — Accueil → Cas Clients → [Nom].

---

## 3. Structure de la page (8 sections)

Légende : 🟢 Section **propre au cas** (slot à adapter par cas) · 🏠 Section **héritée de la home v2**.

| # | Section | Origine | Objectif |
|---|---------|---------|----------|
| 1 | Hero héro client | 🟢 propre | KPI principal en grand + identité client |
| 2 | Le client | 🟢 propre | Contexte journalistique |
| 3 | La situation avant | 🟢 propre | Pain point chiffré |
| 4 | La solution déployée | 🟢 propre | Architecture, agents, équipe |
| 5 | Les résultats chiffrés | 🟢 propre | 3 à 5 KPI en bandes pleine largeur |
| 6 | Témoignage client | 🟢 propre | Citation pleine page |
| 7 | Apprentissages & limites | 🟢 propre | Honnêteté éditoriale |
| 8 | Méthode de déploiement | 🏠 **héritée** (`MethodologySection`) | Rappel de méthode Althoce |
| 9 | Votre cas est-il similaire ? | 🟢 propre | CTA contextualisé |
| 10 | CTA final | 🏠 **héritée** (`CTAFinalSection`) | Conversion |

**Bilan template** : 8 sections propres au cas (le cas EST le contenu), 2 sections héritées de la home. Aucun label décoratif. Pas de section pricing ni souveraineté redondantes.

**Liens sortants internes prévus : ~5** (1 pilier Silo 1, 1 métier Silo 2, 1 autre cas Silo 6, 1 article blog Silo 5 si pertinent).

---

# CONTENU SECTION PAR SECTION (modèle générique avec exemple « cabinet-comptable-lyon »)

---

## Section 1 — Hero héro client

**Pattern visuel** : pleine largeur, fond noir. Gros chiffre KPI principal en display serif géant (taille 12-16rem desktop). À côté ou en-dessous, logo client (ou icône secteur si anonymisé) + 1 ligne d'identité. Pas de carte, pas de grille.

**Fil d'Ariane**
`Accueil › Cas Clients › [Nom client]`

**Bandeau d'identité (en haut, discret)**
> *[Secteur] · [Taille équipe ou clients] · [Localisation] · Mission [année]*

Exemple :
> *Expertise comptable · 12 collaborateurs · 320 clients TPE/PME · Lyon · 2025*

**KPI héros (gigantesque, display serif)**

> **×2**
>
> *clients gérés à effectif constant*

**Sous-ligne (1 phrase)**

> Comment un cabinet comptable lyonnais a doublé sa capacité en 4 mois, sans recruter, sans perdre en qualité.

**CTA**

> Discuter de votre cas →

---

## Section 2 — Le client : qui ils sont, ce qu'ils faisaient

**Pattern visuel** : long paragraphe éditorial pleine largeur, ambiance journalistique. Optionnel : 1 photo d'illustration en bandeau en haut (locaux, équipe, secteur — consentie). Pas de carte.

**H2**

> Un cabinet d'expertise comptable lyonnais qui voulait grandir sans recruter.

**Paragraphe identité (1)**

> Le cabinet est implanté à Lyon depuis 2014. 12 collaborateurs, 320 clients TPE/PME (artisans, professions libérales, e-commerçants, restaurateurs), une croissance régulière de 8 % par an depuis la pandémie. Direction associée : un expert-comptable senior et une responsable de production. Ambiance familiale, exigence technique, fidélité client.

**Paragraphe contexte (2)**

> En 2024, la direction se retrouve face à un dilemme classique : refuser de nouveaux clients (deux prospects refusés sur quatre faute de capacité) ou recruter (mais le marché de l'embauche en expertise comptable est tendu, recrutements longs et coûteux). L'équipe en place est experte mais saturée par la saisie : 70 % de son temps passe à entrer des factures, faire des rapprochements, préparer des liasses. La discussion avec Althoce démarre par un échange de 30 minutes avec un expert.

---

## Section 3 — La situation avant Althoce

**Pattern visuel** : split éditorial pleine largeur, deux colonnes. Colonne gauche « Vie quotidienne avant » en paragraphes courts. Colonne droite « Les chiffres avant » avec 3-4 gros nombres en display serif (typographie sobre/grise pour évoquer la pesanteur). Pas de grille de cartes.

**H2**

> Avant la mission Althoce : 70 % de saisie, 0 marge de manœuvre.

**Colonne gauche — Vie quotidienne avant**

- Saisie manuelle des factures fournisseurs : 4 minutes par facture, 800 factures/mois
- Rapprochement bancaire : 2 jours/mois par client, fait par les juniors
- Préparation TVA : 1 journée par client par trimestre
- Reporting client : envoyé en retard 1 mois sur 3
- 2 collaborateurs en burn-out déclaré sur les 18 derniers mois
- Direction qui refuse 50 % des prospects entrants

**Colonne droite — Les chiffres avant**

> **70 %** du temps en saisie
>
> **2 burn-out** déclarés sur 18 mois
>
> **50 %** des prospects refusés
>
> **−30 NPS** équipe (note interne)

---

## Section 4 — La solution Althoce déployée

**Pattern visuel** : timeline horizontale des étapes du déploiement (4 à 6 jalons : audit → cadrage → POC → déploiement → run → optimisation), chaque jalon = bulle date + 1 phrase. Sous la timeline, un schéma SVG simple de l'architecture : agents Althoce → connecteurs → outils client (Sage, banques, mails). Pas de grille de cartes.

**H2**

> Ce que nous avons déployé : 2 agents IA en 8 semaines, sur les outils existants.

**Paragraphe contexte (1)**

> Le cadrage initial a identifié les 3 processus à plus haut ROI : factures fournisseurs, rapprochement bancaire, génération du reporting mensuel. Le devis ferme (livré en 5 jours après les 30 minutes avec un expert) a permis de prioriser les 2 premiers — facteurs ROI les plus rapides. Le déploiement s'est fait en 8 semaines, en 4 jalons.

### Timeline déploiement

- **Semaine 0 — Cadrage initial** · 30 min avec un expert + cartographie de 3 processus, devis ferme sous 5 jours
- **Semaines 1-2 — Cadrage** · ateliers avec 4 collaborateurs, validation périmètre, signature
- **Semaines 3-5 — Build agent factures** · développement, intégration Sage cloud, tests sur 200 factures historiques
- **Semaine 6 — POC factures** · 1 semaine en parallèle de la saisie humaine, comparaison, ajustements
- **Semaine 7 — Build agent rapprochement** · développement et intégration banques (BNP, CIC, Crédit Agricole)
- **Semaine 8 — Mise en production complète** · formation 2 collaborateurs, monitoring activé

### Schéma architecture (description pour Claude Code)

> **Schéma SVG inline simple** : 2 carrés « Agent factures » et « Agent rapprochement » au centre. À gauche, sources de données : « Mails entrants » et « Relevés bancaires (OFX) ». À droite, outils client : « Sage » et « Tableau de bord interne ». Connecteurs animés avec flèches. Encadré dessous : « Validation humaine en 1 clic », flèche vers Sage. Layout horizontal.

**Équipe Althoce dédiée**

- 1 lead consultant (architecte agent + comm client)
- 1 développeur senior (build agents + intégrations)
- 1 product designer (interface validation)

---

## Section 5 — Les résultats chiffrés (4 mois après mise en production)

**Pattern visuel** : 4 KPI en **bandes pleine largeur empilées verticalement**. Chaque bande = gros chiffre display serif géant à gauche, à droite courbe sparkline (avant/après) + 1 phrase commentaire. Alternance fond `bg-base` / `bg-subtle` entre chaque KPI. Pas de grille 4 colonnes — chaque résultat respire seul.

**H2**

> 4 mois après la mise en production : les chiffres parlent.

**KPI 1 — Bande pleine largeur**

> **×2 capacité**
>
> *320 → 640 clients gérés (effectif constant)*
>
> En 4 mois post-déploiement, le cabinet a accepté 80 nouveaux clients (cumul) et a doublé sa capacité de production sans recruter un seul saisisseur.

**KPI 2 — Bande pleine largeur (fond `bg-subtle`)**

> **−80 %**
>
> *temps de saisie par mois*
>
> Le temps cumulé passé en saisie est passé de 1 200 heures/mois à 240 heures/mois. Les 960 heures libérées sont allées au conseil client et à l'analyse.

**KPI 3 — Bande pleine largeur**

> **0 départ**
>
> *équipe sur 12 mois*
>
> Aucun départ d'équipe depuis le déploiement (vs 2 démissions sur les 18 mois précédents). NPS interne passé de −30 à +42.

**KPI 4 — Bande pleine largeur (fond `bg-subtle`)**

> **ROI < 4 mois**
>
> *retour sur investissement*
>
> L'investissement total Althoce (audit, cadrage, 2 agents, formation, support) a été amorti en 4 mois par le chiffre d'affaires des 80 nouveaux clients acquis.

---

## Section 6 — Le témoignage client

**Pattern visuel** : citation pleine page, typographie display serif géante, fond `bg-dark`. Photo circulaire du client à droite (consentie) + nom + fonction sous la citation. Pas de carte, pas de cadre — c'est la citation qui porte la composition.

**H2**

> « On pensait que l'IA allait remplacer mes équipes. Elle a remplacé la partie qu'elles détestaient. »

**Citation pleine page (typographie display serif XL)**

> « On a démarré le projet en pensant que ça nous coûterait des emplois. En réalité, c'est l'inverse. L'agent absorbe la saisie — et la saisie, c'est exactement ce qui faisait fuir mes équipes. Aujourd'hui, mes collaborateurs analysent, conseillent, rencontrent les clients. Ils ne quittent plus le cabinet. On a doublé l'activité, on a embauché un junior pour suivre la croissance, et il monte en compétence directement sur le conseil — pas sur la saisie. C'est l'investissement le mieux placé qu'on ait fait depuis 5 ans. »

**Signature**

> *— Directrice associée du cabinet · 12 ans d'expertise comptable · 4 mois après mise en production*

---

## Section 7 — Apprentissages & limites honnêtes

**Pattern visuel** : long paragraphe éditorial pleine largeur, divisé en 3 sous-blocs typés visuellement (✅ vert subtil / 🔧 bleu / ⚠️ jaune). Pas de grille — c'est de la lecture continue.

**H2**

> Ce qui a marché, ce qu'on a ajusté, ce qu'il faut savoir.

**Bloc ✅ Ce qui a marché immédiatement**

> L'extraction des factures PDF a fonctionné dès la première semaine de POC, avec un taux d'exactitude de 96 % sur 800 factures testées. Le rapprochement bancaire a été plus simple que prévu : la majorité des relevés OFX étaient propres et exploitables. La validation en 1 clic dans Sage a été massivement adoptée par l'équipe (4 collaborateurs sur 4 l'utilisent quotidiennement).

**Bloc 🔧 Ce qu'on a dû ajuster en cours de route**

> Sur les factures de fournisseurs étrangers (≈ 8 % du volume), l'extraction butait sur les formats inhabituels (langue, devise, formats de date). Nous avons ajouté une couche de pré-traitement spécifique en semaine 7. Sur la prise en main, il a fallu rassurer une collaboratrice senior qui craignait que la validation rapide finisse par cacher des erreurs : nous avons ajouté un mode « audit aléatoire » qui force la lecture détaillée d'1 facture sur 20.

**Bloc ⚠️ Limites honnêtes (à savoir avant de se lancer)**

> L'agent ne remplace pas le jugement humain sur les cas litigieux (≈ 4 % des factures). Il faut un collaborateur disponible pour arbitrer ces cas dans la journée — sinon l'effet ROI s'érode. Le cabinet a dédié un slot quotidien de 30 minutes pour cela. Par ailleurs, le modèle ne fonctionne aussi bien que parce que le cabinet utilise Sage cloud (API native). Pour les cabinets sur Sage on-premise ou Cegid, le coût de l'agent peut grimper de 30 à 50 % à cause de la complexité d'intégration.

---

## Section 8 — Méthode de déploiement (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `MethodologySection` de la home v2.**
>
> Sur une page Cas client, on rappelle la méthode Althoce générique pour rassurer un prospect lecteur qui découvrirait Althoce par le cas. **Aucune variation textuelle.**
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## Section 9 — Votre cas est-il similaire ?

**Pattern visuel** : bloc CTA contextualisé pleine largeur. Texte court (3 lignes) + 2 boutons CTA. Optionnel : bandeau « cas connexes » en-dessous (3 vignettes mini de cas du même secteur ou métier — réutilisation d'un composant `<RelatedCases />` à mutualiser).

**H2**

> Vous gérez un cabinet comptable, un cabinet d'expertise, ou un service comptable interne ?

**Texte CTA**

> Si votre quotidien ressemble à celui décrit plus haut, votre cas est probablement transposable. Les **30 minutes offertes avec un expert** vous donneront la cartographie précise et un devis ferme avant tout engagement.

**CTA principal**

> Discuter de votre cas →

**CTA secondaire (lien contextuel vers services)**

> Voir tous les agents IA pour la comptabilité → `/agent-ia/finance/`

**Bandeau cas connexes (optionnel)**

> *Cas connexes :*
> - `/cas-clients/expert-comptable-marseille/`
> - `/cas-clients/cabinet-paye-bordeaux/`
> - `/cas-clients/daf-pme-industrie-toulouse/`

---

## Section 10 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `CTAFinalSection` de la home v2.**
>
> **Aucun contenu textuel à fournir ici.**

---

## 4. Maillage interne

### Liens sortants depuis cette page (~5)

**Vers Silo 1 (services)** :
- `/services/agents-ia/` (sec.4 — pilier marque)
- `/services/audit-ia/` (sec.7 et sec.8 — méthode)

**Vers Silo 2 (métier du cas)** :
- `/agent-ia/finance/` (sec.9 — métier concerné)
- `/agent-ia/finance/` (sec.9 — métier sœur)

**Vers Silo 6 (cas connexes)** :
- 3 liens vers cas connexes (sec.9, bandeau)

### Liens entrants attendus (≥ 3)

1. Hub `/cas-clients/` (toutes les vignettes pointent vers la page détaillée)
2. Page métier concernée (ici `/agent-ia/finance/` sec.5)
3. Home v2 section 6 « Cas clients » (4 cas mis en avant)
4. Article blog sectoriel (Silo 5 à venir)

---

## 5. Checklist SEO / GEO / AEO

**On-page**
- [ ] H1 unique : KPI héros + sous-ligne, 1 seul H1
- [ ] Hiérarchie H2 → H3 respectée
- [ ] Mots-clés cluster (secteur + métier + résultat) dans : H1, H2 sec.2, sec.5, URL, meta title, meta description
- [ ] `alt` photos contiennent « cas client + secteur + résultat »

**Structured data**
- [ ] Schema `Article` injecté (headline, datePublished, author, publisher, image)
- [ ] Schema `Organization` injecté (le client, avec consentement)
- [ ] Schema `BreadcrumbList` injecté

**Maillage**
- [ ] 5 liens sortants internes (voir §4)
- [ ] Profondeur depuis la home = 2 clics (via section 6 home ou hub `/cas-clients/`)

**Performance**
- [ ] Photos optimisées (WebP, lazy-loading, dimensions raisonnables)
- [ ] Schéma SVG inline (pas PNG/JPG pour l'architecture)
- [ ] Lighthouse cible : Performance ≥ 90, SEO = 100

**AEO (réponses dans LLM)**
- [ ] Sec.5 résultats structurée (chaque KPI extractible)
- [ ] Citation client identifiable (extractible LLM)
- [ ] Sec.7 apprentissages structurée (✅ / 🔧 / ⚠️ extractibles)

**Éthique éditoriale**
- [ ] Consentement écrit du client obtenu (ou anonymisation explicite mentionnée)
- [ ] Tous les chiffres traçables (source interne ou déclarative client)
- [ ] Pas de cas inventé / composite sans mention explicite

---

## 6. Notes pour Claude Design

### Composants HOME à réutiliser strictement (2 sections héritées)
- `<MethodologySection />` (sec.8)
- `<CTAFinalSection />` (sec.10)

### Composants à réutiliser
- `<DarkBlock />` (sec.6 témoignage avec fond sombre)
- `<CaseStudyEditorial />` (déjà mutualisé avec template Métier sec.5 et SEO local sec.5)

### Nouveaux composants à créer
- `<HeroStatHuge />` (sec.1) — gros chiffre display serif XXL pleine largeur, à mutualiser pour autres cas. Variation : 1 chiffre / 2 chiffres / KPI + label.
- `<BeforeAfterSplit />` (sec.3) — déjà créé pour template Métier sec.3, réutilisé tel quel.
- `<DeploymentTimeline />` (sec.4) — timeline horizontale 4-6 jalons. Mutualisable.
- `<ArchitectureSchemaSVG />` (sec.4) — schéma SVG simple agents → connecteurs → outils. Variation par cas.
- `<KPIBand />` (sec.5) — bande pleine largeur empilable verticalement avec gros chiffre + sparkline + commentaire. Mutualisable et stockable dans la lib globale.
- `<TestimonialFullPage />` (sec.6) — citation pleine page display serif XL fond sombre. Mutualisable.
- `<LessonsBlocks />` (sec.7) — 3 blocs typés ✅ / 🔧 / ⚠️ en lecture continue.
- `<RelatedCases />` (sec.9) — bandeau 3 cas connexes. Mutualisable.

### Règle « pas de labels visuels »
Aucun label décoratif au-dessus des H2. Les H2 portent directement le sens narratif.

### Ton visuel
Ambiance journalistique/éditoriale — la page se lit comme un long-form article de presse économique de qualité. Pas de couleurs trop vives, alternance bg-base / bg-subtle / bg-dark pour rythmer. Espacement généreux entre sections.

---

## 7. Notes pour Claude Code

### Route
Créer `/cas-clients/[slug]/page.tsx` en route dynamique avec `generateStaticParams` pour les cas publiés.

### Metadata
Exporter `generateMetadata({ params })` qui charge le cas par slug et expose title/description/OG par cas.

### Source de données
Une approche simple : 1 fichier MDX par cas dans `content/cas-clients/[slug].mdx`, avec frontmatter (title, kpis, tags, datePublished, image). Loader fs au build.

### JSON-LD
Injecter `Article` + `Organization` + `BreadcrumbList` côté server, paramétrés par slug.

### Redirections
Aucune (nouvelles pages).

### Dépendances
- `framer-motion` pour animations bandes KPI et timeline
- `lucide-react` pour icônes
- `<Breadcrumbs />` partagé

---

## 8. Informations à valider avant publication d'un cas

1. **Consentement écrit du client** — obligatoire avant publication (mail signé suffit). Ou anonymisation explicite si refus.
2. **Photos / logos** — droits validés (consentement + cession d'usage web).
3. **Chiffres traçables** — source interne ou déclarative client documentée. Pas de chiffre sorti du chapeau.
4. **Citation client** — relue et validée par le client (mail).
5. **Apprentissages honnêtes (sec.7)** — passage relu avec le client pour éviter de divulguer des infos sensibles.

---

## 9. Procédure d'adaptation pour les futurs cas clients

Pour chaque nouveau cas client à publier :

| Slot | Variation par cas |
|------|-------------------|
| Hero KPI | 1 chiffre fort (×2, −80%, +30 pts NPS, 4 mois ROI…) |
| Identité | secteur, taille, localisation, année |
| Avant | situation chiffrée, vie quotidienne |
| Solution | timeline + architecture + équipe |
| Résultats | 3 à 5 KPI en bandes |
| Témoignage | citation longue (50-100 mots) signée |
| Apprentissages | ✅ / 🔧 / ⚠️ structurés |
| CTA contextuel | 1 lien métier + 1 lien service + 3 cas connexes |

**Sections héritées (jamais modifiées)** : 8, 10.
**Blocs immuables** : breadcrumb, CTA primaire, JSON-LD types.

**Premiers cas à produire** (priorité) :
1. `cabinet-comptable-lyon` (référencé dans `/agent-ia/finance/`)
2. `negoce-vins-bordeaux` (référencé dans `/agence-ia-bordeaux/`)
3. `agence-seo-paris` (référencé dans la home v2)
4. `e-commerce-medical` (référencé dans la home v2)
5. `industrie-btp-toulouse` (référencé dans la home v2)

---

*Document généré par Claude (content strategist) · v1.0 · avril 2026*
*Modèle vivant Cas client validé par Vincent.*
