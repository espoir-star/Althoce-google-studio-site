# /conseil/[slug]/ — Althoce (Silo 4, modèle vivant Conseil & ressources)

> **Brief de contenu** destiné à Claude Design (conception) et Claude Code (intégration).
> Version : 1.0 — Avril 2026
> Silo : 4 · Conseil & Transformation · **Page modèle vivante**
> URL : `/conseil/[slug]/`
> Statut Miro : tâche #30
> **🩷 Modèle vivant Conseil** : ce brief est la page modèle canonique du Silo 4. Les autres pages Conseil/ressources (premiers prévus : `roi-automatisation-ia`, `souverainete-ia-pme`, `gouvernance-ia-conformite`, `cartographier-ses-processus-automatisables`, `feuille-de-route-ia-12-mois`) réutilisent strictement la même structure — seuls les slots changent.

---

## 0. Statut « modèle vivant Conseil » (template du Silo 4)

Ce brief sert de **template vivant** pour toutes les ressources stratégiques destinées aux décideurs (DAF, DG, DSI, COO). Trois types de blocs : sections héritées de la home, sections propres à la ressource (le contenu lui-même + outil interactif si pertinent), blocs immuables.

### Sections héritées de la home (réutilisation stricte)

| Section | Composant home réutilisé | Position |
|---------|--------------------------|----------|
| **Souveraineté** | `SouveraineteSection` (uniquement si la ressource traite de souveraineté/conformité) | optionnelle |
| **CTA final** | `CTAFinalSection` | dernière section |

> ⚠️ **Note importante** : les pages Conseil sont des **ressources stratégiques** (frameworks, calculateurs ROI, checklists, livres blancs courts). Elles n'incluent **pas** systématiquement les sections Méthode/Pricing/Souveraineté de la home — uniquement quand la ressource le justifie. Le CTA final reste hérité dans tous les cas.

### Slots variables (à adapter par ressource)

| Slot | Section | Variation |
|------|---------|-----------|
| `H1 ressource` | sec.1 hero | Titre H1 (idéalement la promesse outcome) |
| `Format ressource` | sec.1 | Type : framework / calculateur / checklist / livre blanc / cartographie |
| `Pourquoi cette ressource` | sec.2 | Pain point décideur ciblé |
| `Cœur de la ressource` | sec.3 | Le contenu utile (framework / outil / checklist / contenu long) |
| `Mode d'emploi / interprétation` | sec.4 | Comment utiliser la ressource concrètement |
| `Téléchargement / accès complet` | sec.5 | PDF / version étendue (avec opt-in mail si lead magnet) |
| `CTA aller plus loin` | sec.6 | Lien vers RDV découverte (30 min offertes) ou service Silo 1 |
| `Mots-clés cibles` | §1 | Cluster décideur (ROI, gouvernance, conformité, stratégie IA) |
| `JSON-LD type` | §2 | `Article` + `HowTo` si applicable |

### Règle « pas de labels visuels »

Aucun label décoratif (`Conseil`, `Framework`, etc.). Les H2 portent directement le sens.

### Règle « créativité visuelle, pas de réflexe grille »

- **Section 1 Hero ressource** : composition épurée. H1 + sous-titre + 1 ligne format/durée/audience. Pas de carte.
- **Section 2 Pourquoi** : long paragraphe éditorial pleine largeur + 1 callout avec 3 chiffres décideurs (à adapter). Pas de grille.
- **Section 3 Cœur de la ressource** : pattern visuel **dépendant du format** :
    - **Framework** → schéma SVG inline étapes/quadrants/canvas + paragraphe par bloc
    - **Calculateur ROI** → composant interactif `<ROICalculator />` avec inputs et résultat live
    - **Checklist** → liste éditoriale numérotée avec cases à cocher (composant `<InteractiveChecklist />`)
    - **Livre blanc** → prose longue éditoriale avec sommaire sticky (cohérence Silo 5)
    - **Cartographie** → tableau ou diagramme SVG des processus
- **Section 4 Mode d'emploi** : numérotée 01→0X (cohérence templates) + exemple concret. Pas de grille.
- **Section 5 Téléchargement** : bandeau pleine largeur typé, optin minimal (mail uniquement si lead magnet). Pas de carte.
- **Section 6 CTA aller plus loin** : bandeau intégré, lien vers RDV découverte (30 min offertes avec un expert).

### Blocs immuables (jamais modifiés d'une ressource à l'autre)

- **Breadcrumb pattern** : `Accueil › Conseil › [Cluster] › [Titre ressource]`
- **CTA principal** : « Discuter de votre projet → » (sec.6 et CTA final hérité)
- **Découverte offerte** : « 30 minutes offertes avec un expert » (mentionné en sec.6 et CTA final hérité)
- **JSON-LD obligatoires** : `Article` + `BreadcrumbList` (+ `HowTo` si la ressource est un guide d'action)
- **Mention auteur Althoce** : footer ou encart auteur en fin de page
- **Pas de pricing affiché** : une ressource Conseil n'est pas une page de conversion brute — le pricing est mentionné via lien vers les pages Service quand pertinent

### Procédure d'adaptation pour une nouvelle ressource

1. Définir le **format** (framework / calculateur / checklist / livre blanc / cartographie)
2. Définir le **persona décideur cible** (DG, DAF, DSI, COO) et le **pain point**
3. Construire le **cœur de la ressource** (sec.3) — c'est là où passe 70 % de l'effort
4. Rédiger sec.2 (pourquoi) et sec.4 (mode d'emploi)
5. Préparer la version téléchargeable PDF (si applicable)
6. Définir le CTA contextuel sec.6 (lien Silo 1 audit ou service spécifique)
7. Vérifier maillage : ≥ 1 service Silo 1 + ≥ 1 article Silo 5 + autres ressources Silo 4 connexes
8. Cocher la checklist SEO/AEO §5

---

## 1. Stratégie de la page (modèle générique)

### Rôle dans l'architecture

Le Silo 4 « Conseil & Transformation » est la couche **stratégique** du site, destinée aux **décideurs en mode réflexion long**. Les ressources servent à :
1. **Asseoir l'autorité** d'Althoce sur les questions stratégiques (ROI, gouvernance, souveraineté, feuille de route).
2. **Capturer des leads qualifiés** (lead magnets téléchargeables avec opt-in mail).
3. **Convertir** en cycle long (un décideur qui a téléchargé un calculateur ROI revient).

### Objectif trafic & conversion

1. **Capter** les requêtes décideur (« calcul ROI agent IA », « feuille de route IA PME », « gouvernance IA », « cartographie processus IA »).
2. **Établir l'autorité** d'Althoce dans les requêtes stratégiques.
3. **Générer des leads qualifiés** via lead magnets.
4. **Distribuer** vers les services et le RDV découverte (30 min offertes avec un expert).

### Intention de recherche (à préciser par ressource)

3 grandes intentions :
- **Stratégique** (décideur cherche un cadre de réflexion : framework, feuille de route)
- **Opérationnelle décideur** (décideur cherche un outil : calculateur ROI, checklist conformité)
- **Pédagogique haute valeur** (décideur cherche à comprendre profondément : livre blanc 20 pages)

### Cible prioritaire

**Décideur senior** : DG, DAF, DSI, COO en PME/ETI 50-500 personnes. Ton éditorial : sobre, factuel, sans jargon technique inutile, ROI-orienté, transparent sur les limites. Pas de promesse magique.

### Mots-clés cibles (à adapter par ressource)

**Principal** : 1 mot-clé requête cible

**Secondaires** : 4 à 6 mots-clés du cluster décideur

**Longue traîne** : questions naturelles que se pose un décideur

---

## 2. Méta SEO

```html
<title>[Titre H1 ressource] | Althoce — Conseil</title>

<meta name="description" content="[Résumé de la ressource en 150-160 caractères, avec mot-clé principal et bénéfice décideur]">

<meta name="keywords" content="[mot-clé principal], [secondaires], [longue traîne]">

<link rel="canonical" href="https://althoce.com/conseil/[slug]/">

<!-- Open Graph -->
<meta property="og:title" content="[Titre H1]">
<meta property="og:description" content="[Résumé court]">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:image" content="[image hero ressource]">
<meta property="og:url" content="https://althoce.com/conseil/[slug]/">
```

### Schémas JSON-LD requis

1. **Article** — `@type: Article`, `headline`, `datePublished`, `dateModified`, `author: Althoce`.
2. **BreadcrumbList** — Accueil → Conseil → [Cluster] → [Titre].
3. **HowTo** (optionnel) — si la ressource est un guide d'action séquencé.

---

## 3. Structure de la page (6 sections)

Légende : 🩷 Section **propre à la ressource** (slot à adapter) · 🏠 Section **héritée de la home v2**.

| # | Section | Origine | Objectif |
|---|---------|---------|----------|
| 1 | Hero ressource | 🩷 propre | H1 + format + audience |
| 2 | Pourquoi cette ressource | 🩷 propre | Pain point décideur |
| 3 | Cœur de la ressource | 🩷 propre | Le contenu utile (framework / outil / checklist / livre blanc) |
| 4 | Mode d'emploi / interprétation | 🩷 propre | Comment utiliser concrètement |
| 5 | Téléchargement / accès complet | 🩷 propre | Lead magnet ou accès libre |
| 6 | Aller plus loin | 🩷 propre | CTA contextuel vers audit/services |
| 7 | CTA final | 🏠 **héritée** (`CTAFinalSection`) | Conversion |

**Bilan template** : 6 sections propres à la ressource, 1 section héritée. Aucun label décoratif. Pas de pricing/méthode/souveraineté redondants (sauf si la ressource les justifie).

**Liens sortants internes prévus : 4 à 8** (≥ 1 service Silo 1, ≥ 1 article Silo 5 cluster, ≥ 1 autre ressource Silo 4, optionnel cas client Silo 6).

---

# CONTENU SECTION PAR SECTION (modèle générique avec exemple « Calculateur ROI agent IA »)

---

## Section 1 — Hero ressource

**Pattern visuel** : composition épurée. H1 dominant, sous-titre éditorial, ligne méta (format · durée d'usage · audience). Pas de carte. Fond `bg-base`. Optionnel : 1 illustration éditoriale métaphorique (calculateur, balance, schéma).

**Fil d'Ariane**
`Accueil › Conseil › ROI & business case › [Titre ressource]`

**H1 (unique) — pas de label décoratif**

> Calculez le ROI réel d'un agent IA en 3 minutes.

**Sous-titre (1-2 lignes éditorial)**

> Avant d'investir dans une automatisation IA, vous devez savoir combien ça vous rapporte vraiment. Ce calculateur prend en compte le coût complet (build, support, modèles), les économies de temps mesurées et les gains qualité. Résultat : un payback en mois, validable en réunion direction.

**Méta ligne (sous le H1)**

> Calculateur interactif · 3 min d'usage · Pour DG, DAF, DSI · Mise à jour avril 2026

---

## Section 2 — Pourquoi cette ressource

**Pattern visuel** : long paragraphe éditorial pleine largeur, sans grille. 1 callout sombre en encart à la fin avec 3 chiffres décideurs (taux de projets IA sans business case, % qui dépassent budget, ROI typique des projets bien cadrés).

**H2**

> Pourquoi le ROI d'un projet IA reste flou — et comment y voir clair en 3 minutes.

**Paragraphe d'ouverture**

> 64 % des projets d'IA en entreprise sont lancés sans business case formalisé (étude Gartner 2025). Conséquence : 1 projet sur 3 dépasse le budget initial de plus de 40 %, et 1 sur 5 est abandonné en cours de route. Pourtant, calculer un ROI prévisionnel d'agent IA n'est pas sorcier — il faut juste poser les bons paramètres et accepter qu'on ne calcule pas un ROI marketing comme un ROI agent IA.

**Sous-paragraphe pédagogue**

> Un projet d'agent IA bien cadré rentabilise typiquement son investissement en 4 à 9 mois chez nos clients PME. Le calcul tient en 4 variables : (1) coût total du projet (build + run + modèles), (2) heures économisées par mois × coût horaire chargé, (3) gains qualité (erreurs évitées × coût d'une erreur), (4) opportunités captées (capacité libérée × valeur d'usage). Ce calculateur fait l'arithmétique pour vous.

**Callout chiffres décideurs** *(encart, fond `bg-dark`)*

> **Le constat marché 2025 :**
> - **64 %** des projets IA lancés sans business case (Gartner)
> - **+40 %** de dépassement budget pour 1 projet sur 3
> - **4 à 9 mois** : payback typique d'un projet agent IA bien cadré chez nos clients

---

## Section 3 — Cœur de la ressource (CALCULATEUR INTERACTIF)

**Pattern visuel** : composant interactif `<ROICalculator />` plein écran sur desktop, accordéon sur mobile. Inputs sur 1 colonne (ou 2 colonnes desktop), résultat live à droite (ou en-dessous mobile). Pas de carte encadrée — le calculateur EST la composition. Fond `bg-subtle` pour distinguer du reste.

**H2**

> Le calculateur ROI agent IA — 6 paramètres, 1 résultat.

**Paragraphe intro**

> Renseignez les 6 paramètres ci-dessous. Le calculateur livre instantanément :
> - Coût total du projet sur 12 mois
> - Économies cumulées sur 12 mois
> - **Payback en mois** (résultat principal)
> - Graphique courbe coût vs économies dans le temps

### Composant `<ROICalculator />` (description Claude Code)

**Inputs (6 sliders/champs)** :

1. **Coût horaire chargé moyen de l'équipe concernée** (€) — slider 25 à 120 €, défaut 45 €
2. **Heures absorbées par l'agent par mois** — slider 20 à 800 h, défaut 160 h
3. **Coût build agent (one-shot)** — radio : « Cas simple Althoce 1 400 € » / « Système Althoce sur devis (à saisir manuellement après cadrage) » / « Autre »
4. **Coût run mensuel** (modèles + support) — slider 100 à 2 000 €, défaut 400 €
5. **Gains qualité estimés par mois** (€) — input libre, défaut 0 (pour rester conservateur)
6. **Horizon de calcul** — radio : 6 / 12 / 24 mois, défaut 12

**Outputs (mis à jour en live)** :

- **Coût total sur 12 mois** : build + (run × 12) — affiché en grand
- **Économies sur 12 mois** : (heures × coût horaire × 12) + (gains qualité × 12)
- **ROI net 12 mois** : économies − coût total
- **Payback en mois** : coût total / économies mensuelles, arrondi
- **Graphique sparkline** : courbes superposées coût cumulé vs économies cumulées

**Callout sous le calculateur**

> **Bon réflexe** : restez conservateur sur les gains qualité (input #5). Le ROI vrai inclut les opportunités captées (capacité libérée × valeur d'usage), souvent 2× les économies de temps. Mais c'est plus difficile à défendre en réunion direction. Mieux vaut un payback prudent que défendable.

---

## Section 4 — Mode d'emploi & interprétation

**Pattern visuel** : 4 sous-blocs numérotés 01→04 (cohérence templates). Pour chaque bloc : gros chiffre display serif, titre, paragraphe explicatif. Pas de grille. Sur mobile : pile verticale naturelle.

**H2**

> Comment lire le résultat du calculateur.

**01 — Si le payback est inférieur à 6 mois**

Vous tenez un cas évident. Il faut le lancer. Mais le payback < 6 mois cache souvent une sous-estimation du coût build : vérifiez que vous avez bien intégré le cadrage, le delivery, la formation équipe et 3 mois de support post-prod. Si tout est inclus et que ça reste < 6 mois, foncez.

**02 — Si le payback est entre 6 et 12 mois**

C'est la zone la plus commune chez nos clients PME (payback médian 4-9 mois). Validez-le auprès du DAF, démarrez par les 30 minutes offertes avec un expert pour fiabiliser le coût build, et présentez en CODIR avec une marge de prudence (+20 % sur le coût). Probabilité de feu vert : élevée.

**03 — Si le payback est entre 12 et 24 mois**

Cas plus rare. Soit le coût horaire absorbé est trop bas (équipe junior), soit le volume traité est trop faible, soit le projet est sous-spécifié. Reposez la question : est-ce que ce processus mérite vraiment d'être automatisé en priorité ? Souvent, un autre processus rentabilise plus vite.

**04 — Si le payback est supérieur à 24 mois**

N'investissez pas. Le projet n'est pas un bon candidat à l'automatisation IA — soit le volume est insuffisant, soit la valeur du temps libéré est trop faible. Cherchez un autre processus avec plus de répétition ou plus de coût horaire absorbé.

---

## Section 5 — Téléchargement / accès complet

**Pattern visuel** : bandeau pleine largeur, fond `bg-dark`. Texte court (3 lignes) + 1 input mail + 1 bouton « Recevoir le PDF ». Mention RGPD discrète sous le formulaire. Pas de carte. Si la ressource est en accès libre (pas de lead magnet), remplacer le formulaire par un bouton « Télécharger le PDF ».

**H2 (visuellement discret)**

> Recevoir la version PDF complète du calculateur

**Texte CTA**

> Recevez le PDF complet (calculateur figé + grille de lecture + 3 exemples de business case réels chez nos clients PME). Envoyé par mail, pas de spam, désinscription en 1 clic.

**Formulaire opt-in**

> [Champ email] [Bouton « Recevoir le PDF →»]
>
> *En soumettant ce formulaire, vous acceptez de recevoir 1 mail avec le PDF + maximum 1 mail par mois avec d'autres ressources Althoce. Conformément au RGPD, vous pouvez vous désinscrire à tout moment. Voir notre politique de confidentialité.*

> *Variante accès libre (sans formulaire)* : remplacer par un bouton **« Télécharger le PDF (1.2 Mo) →»** si la ressource n'est pas un lead magnet.

---

## Section 6 — Aller plus loin

**Pattern visuel** : bandeau intégré dans le flux de lecture, fond `bg-subtle`. Texte court (2-3 lignes) + 2 boutons CTA (1 principal vers audit, 1 secondaire vers service ou autre ressource).

**H2 (visuellement discret)**

> Vous voulez fiabiliser ce calcul sur votre cas réel ?

**Texte CTA**

> Le calculateur donne un ordre de grandeur. Pour un chiffrage ferme adapté à vos processus, votre ERP, votre volume et vos exigences de souveraineté, démarrez par les **30 minutes offertes avec un expert** : vous repartez avec un devis ferme avant tout engagement.

**CTA principal**

> Discuter de votre projet →

**CTA secondaire (lien contextuel)**

> Voir notre service Audit IA → `/services/audit-ia/`

**Bandeau ressources connexes (optionnel, en fin de section)**

> *Ressources connexes :*
> - `/conseil/feuille-de-route-ia-12-mois/`
> - `/conseil/cartographier-ses-processus-automatisables/`
> - `/conseil/gouvernance-ia-conformite/`

---

## Section 7 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `CTAFinalSection` de la home v2.**
>
> **Aucun contenu textuel à fournir ici.**

---

## 4. Maillage interne

### Liens sortants depuis cette page (4 à 8)

**Vers Silo 1 (services pertinents)** :
- `/services/audit-ia/` (sec.6 — démarrage et fiabilisation)
- `/services/agents-ia/` (sec.4 — service à plus haut ROI)

**Vers Silo 5 (articles cluster)** :
- 1 à 2 articles cluster (sec.3 ou sec.6 contextuel)

**Vers Silo 4 (autres ressources)** :
- 3 ressources connexes (sec.6 bandeau)

**Vers Silo 6 (cas clients chiffrés, optionnel)** :
- 1 cas avec ROI explicite si pertinent

### Liens entrants attendus (≥ 3)

1. Hub `/conseil/` (toutes les vignettes pointent ici)
2. Pilier service concerné (ex : `/services/agents-ia/` FAQ Q3 sur le ROI)
3. Articles blog cluster ROI (Silo 5 cross-link)
4. Cas clients chiffrés (Silo 6 mention ROI)

---

## 5. Checklist SEO / GEO / AEO

**On-page**
- [ ] H1 unique, reformulation naturelle de la requête cible décideur
- [ ] Hiérarchie H2 → H3 cohérente
- [ ] Mot-clé principal dans : H1, premier paragraphe, ≥ 2 H2, URL, meta title, meta description
- [ ] Densité raisonnable, pas de bourrage
- [ ] `alt` images / icônes calculateur descriptifs

**Structured data**
- [ ] Schema `Article` injecté
- [ ] Schema `BreadcrumbList` injecté
- [ ] Schema `HowTo` injecté si la ressource est un guide d'action

**Maillage**
- [ ] 4 à 8 liens sortants internes (voir §4)
- [ ] ≥ 1 lien Silo 1 audit + ≥ 1 lien Silo 5 article + ≥ 1 lien Silo 4 ressource connexe
- [ ] Profondeur depuis la home = 2 clics (via `/conseil/` ou cluster)

**Performance**
- [ ] Calculateur en composant React léger (pas de lib lourde)
- [ ] Schémas SVG inline si présents
- [ ] Lighthouse cible : Performance ≥ 90, SEO = 100, Accessibilité ≥ 95

**Conversion (lead magnet)**
- [ ] Formulaire opt-in minimal (mail uniquement, pas de champs superflus)
- [ ] Mention RGPD claire sous le formulaire
- [ ] Confirmation par mail automatique avec le PDF
- [ ] Lead enregistré dans le CRM avec source « ressource [slug] »

**AEO (réponses dans LLM)**
- [ ] Premier paragraphe répond à la requête décideur (extractible LLM)
- [ ] Sections structurées (paramètres calculateur, grille de lecture, mode d'emploi) extractibles
- [ ] Chiffres marché cités avec source

**Éthique éditoriale**
- [ ] Pas de surpromesse ROI (« multipliez votre productivité par 10 »)
- [ ] Limites du calcul mentionnées (sec.4 #04)
- [ ] Sources externes citées (Gartner, IDC, McKinsey, etc.)

---

## 6. Notes pour Claude Design

### Composants HOME à réutiliser strictement (1 section héritée)
- `<CTAFinalSection />` (sec.7)

### Composants à réutiliser
- `<DarkBlock />` (sec.2 callout chiffres décideurs, sec.5 bandeau opt-in)
- `<MidArticleCTA />` (sec.6) — mutualisé avec template Article blog

### Nouveaux composants à créer (mutualisables avec autres templates Conseil)
- `<ResourceHero />` (sec.1) — composition épurée H1 + sous-titre + méta. Mutualisable avec template Article.
- `<ROICalculator />` (sec.3) — composant interactif spécifique à cette ressource. Possibilité de variante par ressource (CalculatorTemplate générique).
- `<NumberedInterpretation />` (sec.4) — 4 blocs numérotés 01→04. Mutualisable.
- `<LeadMagnetForm />` (sec.5) — formulaire opt-in mail minimal avec mention RGPD. Mutualisable.
- `<RelatedResources />` (sec.6) — bandeau 3 ressources connexes. Mutualisable avec `<RelatedArticles />` et `<RelatedCases />`.

### Variation par format de ressource (sec.3)
- Framework → `<FrameworkCanvas />` (schéma SVG quadrants ou étapes)
- Calculateur → `<ROICalculator />` (cet exemple)
- Checklist → `<InteractiveChecklist />` (cases à cocher avec progress bar)
- Livre blanc → wrapper `<ArticleProse />` + `<TOCSticky />` (mutualisé Silo 5)
- Cartographie → `<ProcessMapTable />` ou `<ProcessSVGDiagram />`

### Règle « pas de labels visuels »
Aucun label décoratif. Les H2 portent directement le sens.

### Ton visuel
Sobre, sérieux, factuel. Couleurs neutres dominantes, accent azure pour les éléments interactifs (calculateur, formulaire). Espacement généreux, lisibilité maximale.

---

## 7. Notes pour Claude Code

### Route
Créer `/conseil/[slug]/page.tsx` en route dynamique avec `generateStaticParams` pour les ressources publiées.

### Source de données
1 fichier MDX par ressource dans `content/conseil/[slug].mdx` avec frontmatter (title, description, format, audience, datePublished, dateModified, leadMagnet: true|false, pdfPath, calculatorComponent: string|null).

### Composants interactifs
- `<ROICalculator />` : composant React client autonome, state local, pas de backend nécessaire (calcul pur en frontend).
- `<LeadMagnetForm />` : formulaire qui POST vers une route API `/api/lead-magnet` qui (1) enregistre dans le CRM, (2) envoie le PDF par mail via service transactionnel (Resend, Postmark, SendGrid).

### Metadata
Exporter `generateMetadata({ params })` qui charge la ressource par slug.

### JSON-LD
Injecter `Article` + `BreadcrumbList` côté server, conditionnellement `HowTo`.

### Sitemap
Ajouter chaque ressource au sitemap.xml automatiquement.

### Dépendances
- `next-mdx-remote` ou MDX natif Next 15
- `framer-motion` pour animations légères
- `lucide-react` pour icônes (Calculator, ListChecks, Map, FileText, etc.)
- `<Breadcrumbs />` partagé
- Service mail transactionnel (Resend recommandé)

---

## 8. Informations à valider avant publication d'une ressource

1. **Format de la ressource** validé (framework / calculateur / checklist / livre blanc / cartographie)
2. **Persona décideur cible** précisé (DG, DAF, DSI, COO)
3. **Sources externes** citées si chiffres marché (Gartner, IDC, etc.)
4. **PDF téléchargeable** préparé (si lead magnet)
5. **Service mail transactionnel** configuré (si lead magnet)
6. **CRM** prêt à recevoir les leads avec tag source « ressource [slug] »

---

## 9. Procédure d'adaptation pour les futures ressources

Plan éditorial type Silo 4 :

| Cluster décideur | Format dominant | Ressources prévues |
|------------------|-----------------|--------------------|
| ROI & business case | Calculateur, framework | `roi-automatisation-ia` (cet exemple), `business-case-agent-ia-template` |
| Souveraineté & RGPD | Checklist, livre blanc | `souverainete-ia-pme`, `checklist-rgpd-agent-ia` |
| Gouvernance IA | Framework, livre blanc | `gouvernance-ia-conformite`, `framework-comite-ia` |
| Cartographie processus | Cartographie, checklist | `cartographier-ses-processus-automatisables` |
| Feuille de route IA | Framework | `feuille-de-route-ia-12-mois` |

**Pour chaque ressource**, dupliquer ce template, choisir le format de cœur (sec.3), et adapter le mode d'emploi (sec.4).

**Sections héritées (jamais modifiées)** : 7.
**Blocs immuables** : breadcrumb, CTA primaire, JSON-LD types.

---

*Document généré par Claude (content strategist) · v1.0 · avril 2026*
*Modèle vivant Conseil & ressources validé par Vincent.*
