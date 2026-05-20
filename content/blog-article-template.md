# /blog/[slug]/ — Althoce (Silo 5, modèle vivant Article blog)

> **Brief de contenu** destiné à Claude Design (conception) et Claude Code (intégration).
> Version : 1.0 — Avril 2026
> Silo : 5 · Blog & Ressources · **Page modèle vivante**
> URL : `/blog/[slug]/`
> Statut Miro : tâche #29
> **🍏 Modèle vivant Article blog** : ce brief est la page modèle canonique du Silo 5. Les ~50 articles à venir réutilisent strictement la même structure — seuls les slots changent.

---

## 0. Statut « modèle vivant Article » (template du Silo 5)

Ce brief sert de **template vivant** pour tous les articles blog. Trois types de blocs : section héritée de la home (CTA final), sections propres à l'article (le contenu lui-même), blocs immuables (header article, encart auteur, sommaire, articles connexes).

### Section héritée de la home (réutilisation stricte)

| Section | Composant home réutilisé | Position |
|---------|--------------------------|----------|
| **CTA final** | `CTAFinalSection` | dernière section, identique à la home |

> ⚠️ **Note importante** : sur les pages Article blog, on n'hérite **que** du CTA final. La page **n'inclut pas** de section pricing, méthode, ou souveraineté complètes — un article éducatif doit rester centré sur le contenu. La méthode et le pricing sont mentionnés via 1 à 2 CTA contextuels mid-article (vers `/services/agents-ia/` ou `/services/[service]/` selon le sujet).

### Slots variables (à adapter par article)

| Slot | Section | Variation |
|------|---------|-----------|
| `H1 article` | sec.1 hero | Titre H1 unique (idéalement la requête cible reformulée) |
| `Méta lecteur` | sec.1 | Date publication, durée de lecture estimée, auteur, cluster sémantique |
| `Sommaire` | sec.2 | TOC navigable auto-généré depuis les H2 |
| `Corps article` | sec.3 | 1 500 à 3 500 mots structurés H2/H3, 8 à 15 sous-sections |
| `Encart auteur` | sec.4 | Bio Althoce ou contributeur invité |
| `CTA mid-article` | sec.5 | 1 lien contextuel vers service ou métier mentionné |
| `Articles connexes` | sec.7 | 3 articles du même cluster sémantique |
| `Mots-clés cibles` | §1 | Cluster sémantique + intention |
| `JSON-LD type` | §2 | `Article` + éventuellement `HowTo` ou `FAQPage` selon format |

### Règle « pas de labels visuels »

Aucun label décoratif (`Article`, `Sommaire`, `Articles connexes`, etc.). Les H2 portent directement le sens.

### Règle « créativité visuelle, pas de réflexe grille »

- **Section 1 Hero article** : composition épurée, H1 dominant, sous-titre, méta lecteur sur 1 ligne. Pas de carte, pas de grille.
- **Section 2 Sommaire** : liste verticale ancrée (TOC sticky desktop / accordéon mobile). Pas de grille.
- **Section 3 Corps** : typographie longue éditoriale, prose dominante. Patterns visuels variés selon le contenu (callout, citation, tableau, schéma SVG, accordéon FAQ inline). **Pas de grilles de cartes systématiques.**
- **Section 4 Encart auteur** : composition horizontale (photo ronde + bio + liens). Pas de carte.
- **Section 5 CTA mid-article** : bandeau pleine largeur typé, intégré dans la lecture (pas un encart pop-up). Réutilisable.
- **Section 7 Articles connexes** : 3 vignettes horizontales (composant `<RelatedArticles />` mutualisable). Cohérence avec `<RelatedCases />`.

### Blocs immuables (jamais modifiés d'un article à l'autre)

- **Breadcrumb pattern** : `Accueil › Blog › [Cluster] › [Titre article]` (cluster facultatif)
- **CTA principal** : « Discuter de votre projet → » (en encart auteur et mid-article)
- **CTA final** : hérité de la home (`CTAFinalSection`)
- **JSON-LD obligatoires** : `Article` + `BreadcrumbList` (+ `HowTo` si l'article est un how-to, + `FAQPage` si un bloc FAQ inline est présent)
- **Mention auteur Althoce** : présente dans toutes les pages (même si auteur invité, signature « publié par l'équipe Althoce » à minima)

### Procédure d'adaptation pour un nouvel article

1. Définir le cluster sémantique (= silo SEO de l'article : « agents IA », « automatisation comptable », « employés IA », « SEO local », etc.)
2. Définir l'intention de recherche (informationnelle / commerciale / transactionnelle)
3. Rédiger le H1 (= reformulation naturelle de la requête cible)
4. Construire l'ossature H2/H3 (8 à 15 sous-sections selon longueur)
5. Rédiger le corps en respectant la règle créativité visuelle (varier les patterns)
6. Encart auteur Althoce (à minima)
7. CTA contextuel mid-article (1 ou 2 max — sinon ça parasite la lecture)
8. 3 articles connexes (à choisir dans le cluster)
9. Vérifier maillage : ≥ 1 lien Silo 1 service + ≥ 1 lien Silo 2 métier + ≥ 1 lien autre article même cluster Silo 5
10. Cocher la checklist SEO/AEO §5

---

## 1. Stratégie de la page (modèle générique)

### Rôle dans l'architecture

Le Silo 5 (~50 articles) sert à **capturer la longue traîne** SEO/AEO et à **alimenter la confiance** (un site qui publie de la pédagogie de qualité gagne en autorité). Chaque article répond à une intention précise et redirige vers les pages services / métiers / cas pertinentes.

### Objectif trafic

1. **Capter** la longue traîne informationnelle (« comment automatiser X », « différence entre Y et Z », « ROI de … »).
2. **Alimenter** les LLM (ChatGPT, Perplexity, Claude, Gemini) avec du contenu Althoce (mention de marque dans les réponses génératives).
3. **Distribuer** vers les pages de conversion (services, métiers, cas).

### Intention de recherche (à préciser par article)

3 grandes intentions possibles :
- **Informationnelle** (« c'est quoi », « différence entre », « comment ça marche ») — le plus gros volume Silo 5
- **Comparative** (« X vs Y », « meilleur outil pour Z ») — bonne valeur de conversion
- **How-to** (« comment automatiser X », « comment choisir Y ») — fort en AEO et conversion

### Cible prioritaire (à préciser par article)

Soit dirigeant·e PME (style éditorial vulgarisé, ROI-orienté), soit DSI/CTO (style éditorial technique, transparent sur les limites), soit responsable opérationnel (style pragmatique, exemples concrets). Le ton s'adapte au persona dominant du cluster.

### Mots-clés cibles (à adapter par article)

**Principal** : 1 mot-clé requête cible (~ titre de l'article)

**Secondaires** : 4 à 6 mots-clés du même cluster sémantique

**Longue traîne** : 3 à 5 questions naturelles que se posent les lecteurs

---

## 2. Méta SEO

```html
<title>[Titre H1 article] | Althoce</title>

<meta name="description" content="[Résumé de l'article en 150-160 caractères, avec mot-clé principal et bénéfice lecteur]">

<meta name="keywords" content="[mot-clé principal], [secondaires], [longue traîne]">

<link rel="canonical" href="https://althoce.com/blog/[slug]/">

<!-- Open Graph -->
<meta property="og:title" content="[Titre H1]">
<meta property="og:description" content="[Résumé court]">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:image" content="[image hero article]">
<meta property="og:url" content="https://althoce.com/blog/[slug]/">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
```

### Schémas JSON-LD requis

1. **Article** — `@type: Article`, `headline`, `datePublished`, `dateModified`, `author: Althoce`, `publisher: Althoce`, `image`.
2. **BreadcrumbList** — Accueil → Blog → [Cluster] → [Titre].
3. **HowTo** (optionnel) — si l'article est un tutoriel, ajouter le schéma HowTo.
4. **FAQPage** (optionnel) — si un bloc FAQ inline est inclus dans l'article.

---

## 3. Structure de la page (7 sections)

Légende : 🍏 Section **propre à l'article** (slot à adapter par article) · 🏠 Section **héritée de la home v2**.

| # | Section | Origine | Objectif |
|---|---------|---------|----------|
| 1 | Hero article | 🍏 propre | H1 + méta lecteur |
| 2 | Sommaire navigable | 🍏 propre | Navigation TOC sticky desktop |
| 3 | Corps de l'article | 🍏 propre | 1 500 à 3 500 mots H2/H3 |
| 4 | Encart auteur Althoce | 🍏 propre | Crédibilité + bio |
| 5 | CTA contextuel mid-article | 🍏 propre | Distribution vers service/métier |
| 6 | Articles connexes | 🍏 propre | Maillage interne cluster |
| 7 | CTA final | 🏠 **héritée** (`CTAFinalSection`) | Conversion |

**Bilan template** : 6 sections propres à l'article (l'article EST le contenu), 1 section héritée de la home. Aucun label décoratif. Pas de pricing ni méthode redondants.

**Liens sortants internes prévus : 5 à 10 selon longueur** (≥ 1 service Silo 1, ≥ 1 métier Silo 2, ≥ 3 articles cluster Silo 5, optionnel cas client Silo 6).

---

# CONTENU SECTION PAR SECTION (modèle générique avec exemple « Comment automatiser la saisie comptable avec l'IA »)

---

## Section 1 — Hero article

**Pattern visuel** : composition épurée. H1 dominant, sous-titre éditorial, méta lecteur sur 1 ligne (date · durée lecture · auteur · cluster). Image héro optionnelle (illustration éditoriale, pas obligatoire). Pas de carte. Fond `bg-base`.

**Fil d'Ariane**
`Accueil › Blog › Automatisation IA › [Titre article]`

**H1 (unique) — pas de label décoratif**

> Comment automatiser la saisie comptable avec l'IA en 2026.

**Sous-titre (1-2 lignes éditorial)**

> Saisir 800 factures par mois ne devrait plus être un métier. Voici exactement comment un agent IA peut absorber 80 % de cette charge en 2 semaines, ce que ça coûte, et où sont les pièges à éviter.

**Méta lecteur (ligne discrète sous le H1)**

> Publié le 25 avril 2026 · Mis à jour le 25 avril 2026 · 12 min de lecture · Cluster : automatisation comptable · Par l'équipe Althoce

**Image hero (optionnelle)**

> Illustration éditoriale — par défaut, pas d'image. Si présente, format paysage 16:9, sobre, métaphorique (ex : pile de factures qui se transforme en lignes de tableau de bord).

---

## Section 2 — Sommaire navigable

**Pattern visuel** : TOC auto-généré depuis les H2/H3 du corps. Sticky en colonne droite desktop (max 280px de large), accordéon repliable au-dessus de la prose mobile. Lien d'ancre actif highlighté pendant le scroll. Pas de grille.

**H2 (visuellement discret, juste un séparateur)**

> Au programme

**Liste TOC (générée dynamiquement)**

- Pourquoi la saisie comptable est le terrain de jeu idéal de l'IA
- Ce qu'un agent IA peut vraiment faire (et pas faire)
- Les 4 étapes d'un déploiement réussi
- Combien ça coûte en 2026
- Les 3 erreurs qu'on voit le plus souvent
- Sage, Cegid, Pennylane, QuickBooks : qui est compatible avec quoi
- FAQ rapide

---

## Section 3 — Corps de l'article

**Pattern visuel global** : prose éditoriale longue. Largeur de lecture confortable (max 720px de texte). Variations visuelles fines selon le contenu :

- **Paragraphe long** : prose justifiée, line-height généreux
- **Citation marquante** : encart `<blockquote>` typé, pas de carte
- **Tableau comparatif** : tableau éditorial natif (pas de cartes empilées)
- **Schéma technique** : SVG inline minimaliste
- **Liste numérotée d'étapes** : grosses puces display serif (cohérence template Métier sec.4)
- **FAQ inline** : accordéon en fin d'article (cohérence template Service)
- **Callout important** : bloc `<DarkBlock />` réutilisé (cohérence templates)

**Pas de grille de cartes systématique** — la prose est le héros.

### Structure type d'un corps d'article (8 à 15 H2)

#### H2 #1 — Pourquoi la saisie comptable est le terrain de jeu idéal de l'IA

> [3 paragraphes : pourquoi c'est répétitif, à faible valeur, déclenché par un événement numérique, et obéit à des règles claires une fois la situation comprise. Renvoi de fond vers `/agent-ia/finance/`.]

#### H2 #2 — Ce qu'un agent IA peut vraiment faire (et pas faire)

> [Bloc « peut faire » : extraction PDF, rapprochement bancaire, génération d'écritures, reporting. Bloc « ne peut pas faire » : signer une déclaration fiscale, prendre une décision stratégique, remplacer le jugement professionnel sur un litige. Tableau éditorial 2 colonnes ✅ / ⚠️.]

#### H2 #3 — Les 4 étapes d'un déploiement réussi

> [Liste numérotée 01→04 (cohérence template Métier sec.4) : audit, cadrage, build POC, mise en production. 1 paragraphe par étape, durée indicative, prix indicatif si pertinent.]

#### H2 #4 — Combien ça coûte en 2026

> [Paragraphe court avec mention du pricing Althoce arbitré (1 400 € HT cas simple / sur devis système) et grille indicative des autres acteurs du marché. Lien vers `/services/agents-ia/`.]

#### H2 #5 — Les 3 erreurs qu'on voit le plus souvent

> [3 sous-blocs ⚠️ avec retour d'expérience honnête : tomber dans le piège du « tout automatiser », sous-estimer la couche d'intégration ERP, négliger la validation humaine sur les écritures sensibles.]

#### H2 #6 — Sage, Cegid, Pennylane, QuickBooks : qui est compatible avec quoi

> [Tableau comparatif éditorial 4 colonnes (logiciel comptable × type d'API × surcoût d'intégration × cas d'usage typique). Mutualisé avec template Service sec.3.]

#### H2 #7 — FAQ rapide

> [Bloc FAQ inline 4 à 6 Q/R en accordéon. Schéma `FAQPage` JSON-LD à injecter.]

### Patterns visuels mobilisables dans le corps

- `<DarkBlock />` pour 1 ou 2 callouts importants
- Tableau natif (au moins 1 par article comparatif)
- Schéma SVG inline (au moins 1 par article technique)
- Citation marquante (1 à 2 max par article)
- Grosse puces display serif pour listes numérotées (cohérence templates)
- Accordéon FAQ inline en fin d'article

---

## Section 4 — Encart auteur

**Pattern visuel** : composition horizontale. Photo ronde 80px à gauche (ou monogramme si auteur collectif), bio 3 lignes au milieu, lien social à droite. Fond `bg-subtle`. Pas de carte encadrée — c'est un bandeau intégré.

**H2 (visuellement discret)**

> Qui a écrit cet article

**Bloc auteur**

> **L'équipe Althoce** — agence d'automatisation IA basée à Bordeaux, +150 PME équipées en France, +758 agents en production. Spécialisée dans la conception d'agents IA sur-mesure pour PME et ETI.
>
> [Lien LinkedIn] · [Lien `/a-propos/`]

> *Si auteur invité : ajouter encart spécifique en plus.*

---

## Section 5 — CTA contextuel mid-article (intégré dans la lecture)

**Pattern visuel** : bandeau pleine largeur, fond `bg-dark`, intégré entre 2 H2 (typiquement après la moitié de l'article ou après le H2 sur les coûts). 3 lignes maximum + 1 bouton. Pas de pop-up, pas d'encart latéral — c'est dans le flux de lecture.

**Bandeau CTA mid-article**

> Vous voulez voir comment ça pourrait s'appliquer à votre comptabilité ?
>
> 30 minutes offertes avec un expert pour cartographier vos processus à plus haut ROI.
>
> **[Discuter de votre projet →]**

> *Note : 1 seul CTA mid-article par article (max 2 si l'article fait > 3 000 mots). Au-delà, ça parasite la lecture.*

---

## Section 6 — Articles connexes

**Pattern visuel** : 3 vignettes horizontales en bas de page. Composant `<RelatedArticles />` à mutualiser. Vignette = image hero compactée + titre + cluster + durée lecture. Cohérent visuellement avec `<RelatedCases />` du template Cas client.

**H2 (visuellement discret)**

> À lire aussi sur le même sujet

**3 vignettes**

> - Comment choisir entre un agent IA et un workflow Zapier en comptabilité
> - ROI d'un agent IA comptable : comment le calculer avant de se lancer
> - Sage cloud vs Sage on-premise : impact sur un projet d'agent IA

> *Critère de choix : 3 articles du même cluster sémantique. Si moins de 3 disponibles, élargir au cluster parent.*

---

## Section 7 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `CTAFinalSection` de la home v2.**
>
> **Aucun contenu textuel à fournir ici.**

---

## 4. Maillage interne

### Liens sortants depuis cette page (5 à 10)

**Vers Silo 1 (services pertinents)** :
- `/services/agents-ia/` (sec.3 corps + CTA mid-article)
- `/services/audit-ia/` (sec.3 corps, étapes déploiement)
- `/services/automatisation-ia/` (cross-link générique)

**Vers Silo 2 (métier concerné)** :
- `/agent-ia/finance/` (sec.3 corps + CTA mid-article)
- `/agent-ia/finance/` (cross-link métier sœur)

**Vers Silo 5 (articles cluster)** :
- 3 articles cluster (sec.6 articles connexes)

**Vers Silo 6 (cas clients pertinents)** :
- `/cas-clients/cabinet-comptable-lyon/` (sec.3 corps, comme exemple concret)

### Liens entrants attendus (≥ 3)

1. Hub `/blog/` (toutes les vignettes du cluster pointent ici)
2. Page métier concernée (`/agent-ia/finance/` FAQ ou maillage)
3. Pilier service concerné (`/services/agents-ia/` FAQ ou maillage)
4. 2 à 3 autres articles du même cluster (cross-link)

---

## 5. Checklist SEO / GEO / AEO

**On-page**
- [ ] H1 unique, reformulation naturelle de la requête cible
- [ ] Hiérarchie H2 → H3 cohérente, 8 à 15 H2 selon longueur
- [ ] Mot-clé principal dans : H1, premier paragraphe, ≥ 3 H2, URL, meta title, meta description
- [ ] Densité raisonnable (1-2 %), pas de bourrage
- [ ] `alt` images : descriptions naturelles avec mot-clé contextuel

**Structured data**
- [ ] Schema `Article` injecté (headline, datePublished, dateModified, author, publisher, image)
- [ ] Schema `BreadcrumbList` injecté
- [ ] Schema `HowTo` injecté si l'article est un tutoriel
- [ ] Schema `FAQPage` injecté si bloc FAQ inline présent

**Maillage**
- [ ] 5 à 10 liens sortants internes (voir §4)
- [ ] ≥ 1 lien Silo 1 service + ≥ 1 lien Silo 2 métier + ≥ 3 liens articles cluster
- [ ] Profondeur depuis la home = 2 clics (via `/blog/` ou cluster)

**Performance**
- [ ] Image hero optimisée (WebP, lazy)
- [ ] Schémas SVG inline (pas PNG)
- [ ] Lighthouse cible : Performance ≥ 90, SEO = 100, Accessibilité ≥ 95

**AEO (réponses dans LLM)**
- [ ] Premier paragraphe = réponse directe à la requête (extractible LLM)
- [ ] Réponses structurées : tableaux, listes numérotées, encadrés Q/R
- [ ] FAQ inline en fin d'article (très fort signal AEO)
- [ ] Citations attribuées (source si externe, équipe Althoce si interne)

**Éthique éditoriale**
- [ ] Pas de surpromesse (« multipliez votre CA par 10 »)
- [ ] Pas de greenwashing IA (« 100 % autonome, 0 erreur »)
- [ ] Limites honnêtes mentionnées (au moins 1 paragraphe ⚠️ par article)
- [ ] Sources externes citées si données factuelles

---

## 6. Notes pour Claude Design

### Composants HOME à réutiliser strictement (1 section héritée)
- `<CTAFinalSection />` (sec.7)

### Composants à réutiliser
- `<DarkBlock />` (callouts dans le corps)
- `<FAQItem />` (bloc FAQ inline si présent)
- Tableau natif (pas de composant spécifique)

### Nouveaux composants à créer (mutualisables avec autres templates)
- `<ArticleHero />` (sec.1) — composition épurée H1 + sous-titre + méta. Mutualisable avec template Conseil.
- `<TOCSticky />` (sec.2) — sommaire sticky desktop / accordéon mobile. Mutualisable.
- `<AuthorBox />` (sec.4) — bandeau auteur horizontal. Mutualisable.
- `<MidArticleCTA />` (sec.5) — bandeau CTA intégré dans le flux. Mutualisable.
- `<RelatedArticles />` (sec.6) — 3 vignettes horizontales. Mutualisable avec `<RelatedCases />`.
- `<ArticleProse />` — wrapper typographique pour le corps avec largeur de lecture max 720px et styles markdown propres.

### Règle « pas de labels visuels »
Aucun label décoratif. Les H2 portent directement le sens.

### Ton visuel
Lisible, dépouillé, éditorial. Pas de couleurs vives parasites. Alternance bg-base / bg-subtle pour les callouts et bandeaux. Espacement généreux entre les sections.

---

## 7. Notes pour Claude Code

### Route
Créer `/blog/[slug]/page.tsx` en route dynamique avec `generateStaticParams` pour les articles publiés.

### Source de données
1 fichier MDX par article dans `content/blog/[slug].mdx` avec frontmatter (title, description, datePublished, dateModified, author, cluster, tags, image, readTime, canonical).

### Metadata
Exporter `generateMetadata({ params })` qui charge l'article par slug et expose title/description/OG par article.

### JSON-LD
Injecter `Article` + `BreadcrumbList` côté server, paramétrés par slug. Ajouter conditionnellement `HowTo` ou `FAQPage` selon frontmatter.

### Composants MDX
Mapper les composants du template (`<DarkBlock />`, `<FAQItem />`, etc.) au scope MDX pour qu'ils soient utilisables dans le contenu.

### Sitemap
Ajouter chaque article au sitemap.xml automatiquement.

### Dépendances
- `next-mdx-remote` ou MDX natif Next 15
- `framer-motion` pour animations légères
- `lucide-react` pour icônes
- `<Breadcrumbs />` partagé

---

## 8. Informations à valider avant publication d'un article

1. **Cluster sémantique** défini et validé (pour le maillage)
2. **Mot-clé principal** validé (volume + difficulté SEO acceptable)
3. **Auteur identifié** (équipe Althoce par défaut, sinon contributeur invité avec autorisation)
4. **Sources externes** citées si données factuelles (études, rapports)
5. **Articles connexes** identifiés (3 minimum, sinon écrire d'abord les autres articles cluster)

---

## 9. Procédure d'adaptation pour les ~50 articles à venir

Plan éditorial type par cluster :

| Cluster sémantique | ~Articles | Pillier Silo 1 lié |
|--------------------|-----------|--------------------|
| Agents IA (concept) | 8 | `/services/agents-ia/` |
| Automatisation IA (concept) | 8 | `/services/automatisation-ia/` |
| Comptabilité & finance | 6 | `/agent-ia/finance/` |
| Service client & support | 5 | `/agent-ia/service-client/` |
| RH & recrutement | 4 | `/agent-ia/rh/` |
| Marketing & commercial | 6 | `/agent-ia/commercial/` |
| Souveraineté & RGPD | 4 | `/conseil/souverainete/` |
| ROI & business case | 5 | `/conseil/roi-automatisation-ia/` |
| Outils & intégrations | 4 | `/services/integration-ia/` |

**Pour chaque article**, dupliquer ce template, remplir les slots, ajuster maillage et FAQ inline si besoin.

**Sections héritées (jamais modifiées)** : 7.
**Blocs immuables** : breadcrumb, CTA primaire, JSON-LD types.

---

*Document généré par Claude (content strategist) · v1.0 · avril 2026*
*Modèle vivant Article blog validé par Vincent.*
