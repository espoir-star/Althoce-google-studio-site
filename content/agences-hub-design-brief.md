# Althoce — Design Brief · Hub `/agences/` (page de marque mission)

> **Destinataire** : Claude Design
> **Source contenu** : `content/agences-hub.md`
> **Objectif** : intégrer le hub Silo 3 comme **page de marque mission** Althoce (pas un répertoire de villes). Lecture estimée 6 min.
> **Position dans le site** : route `/agences/`, accès depuis menu principal, footer, et 20 pages SEO local en breadcrumb retour.

---

## 1. Cadre design (rappel)

Cette page **réutilise strictement le design system de la home v2.1** (`content/design-brief.md`). Aucun nouveau token couleur, aucune typographie nouvelle. Les seuls nouveaux éléments sont **trois composants** propres à cette page.

**Référentiel mental spécifique au hub** : croisement entre **Anthropic.com** (manifeste mission éditorial, citation hero en serif XL) et **Vercel.com** (densité maîtrisée, accents propres). Le ton est **éditorial, manifeste, presque académique** sur les sections 1, 2, 4 — puis **opérationnel et chiffré** sur la section 3 (engagements).

**Règle de hiérarchie visuelle critique** : la mission est la star (sec.1 à sec.4). La présence territoriale (sec.7) est volontairement **discrète** — une sous-section sobre, pas une grille 4×5 des villes en vedette.

---

## 2. Route et architecture Next.js

### 2.1 Route

```
app/agences/page.tsx
```

Pas de segment dynamique (c'est un hub unique).

### 2.2 Métadonnées

```tsx
export const metadata: Metadata = {
  title: 'Une IA souveraine, responsable, accessible à toutes les PME françaises | Althoce',
  description: "Althoce, agence IA française, accompagne les PME et ETI partout en France dans leur transformation IA. Notre mission : une IA souveraine, responsable, accessible à toutes les PME françaises. Souveraineté France, anti-biais documenté, humain au centre. +150 PME équipées. 30 min offertes avec un expert.",
  keywords: ['agence IA France', 'partenaire IA PME', 'IA souveraine PME', 'agence IA responsable', 'IA éthique entreprise', 'agence IA souveraine France', 'partenaire de confiance IA'],
  alternates: { canonical: 'https://althoce.com/agences/' },
  openGraph: {
    title: 'Une IA souveraine, responsable, accessible à toutes les PME françaises | Althoce',
    description: "Althoce, partenaire de confiance des PME et ETI françaises. Mission : une IA souveraine, responsable, accessible. Pas de boîte noire, pas de remplacement masqué, pas d'exfiltration de données.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://althoce.com/agences/',
  },
};
```

### 2.3 Structure du `page.tsx`

```tsx
export default function AgencesHubPage() {
  return (
    <>
      <JsonLd data={agencesHubJsonLd} />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Agences', href: '/agences/' }]} />
      <HeroManifestoQuote {...heroProps} />        {/* Sec.1 — NOUVEAU */}
      <MissionManifesto {...missionProps} />       {/* Sec.2 — peut réutiliser DarkBlock */}
      <NumberedListVertical {...engagementsProps} />  {/* Sec.3 — réutilise existant */}
      <PilierBlockSplitGroup {...piliersProps} />  {/* Sec.4 — NOUVEAU (4 piliers alternés) */}
      <MethodologySection />                       {/* Sec.5 — hérité home */}
      <SouveraineteSection />                      {/* Sec.6 — hérité home */}
      <CitiesListGrouped {...citiesProps} />       {/* Sec.7 — NOUVEAU */}
      <FAQAccordion {...faqProps} />               {/* Sec.8 — réutilise FAQItem */}
      <CTAFinalSection />                          {/* Sec.9 — hérité home */}
    </>
  );
}
```

---

## 3. Trois nouveaux composants à créer

### 3.1 `<HeroManifestoQuote />`

**Rôle** : hero éditorial split. Différent du hero des pages SEO local (pas de carte SVG France ici — la carte vient discrètement en sec.7).

**Props**

```tsx
type HeroManifestoQuoteProps = {
  h1: string;                    // "Une IA souveraine, responsable, accessible à toutes les PME françaises."
  subtitle: string;              // 2 lignes manifeste
  pills: string[];               // ["+150 PME équipées", "Souveraineté France garantie", "Humain au centre"]
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };  // ancre "#mission"
  quote: string;                 // citation manifeste display serif XL
  quoteAttribution: string;      // "L'équipe Althoce"
};
```

**Layout desktop**

Grid 2 colonnes 1fr/1fr, gap 80px, `py-32` (plus aéré qu'un hero standard, pour signaler le statut éditorial).

- **Colonne gauche** : H1 (serif display 72–88px), sous-titre (body large 20px, max-w-md), pills (`<AgentTag />` style mais sans icône), bloc 2 CTA (primaire + secondaire sous-jacent).
- **Colonne droite** : la citation manifeste dans un **bloc visuellement distinct** :
  - Fond `bg-subtle` avec une **texture azure très discrète** (gradient radial 8% opacity centré sur le coin haut-droite, couleur `#38BDF8`).
  - Padding `p-12`, radius `rounded-3xl`.
  - Citation en **`Instrument Serif` ou `Fraunces` 32–40px** (display serif XL), italique optionnel.
  - Guillemets typographiques larges « » en couleur `accent-violet` (gradient sur le guillemet ouvrant uniquement).
  - Attribution en sans-serif 14px uppercase tracking large, alignée à droite, séparée par un trait fin.

**Layout mobile**

Stack vertical. Citation passe en dessous, padding réduit à `p-8`, taille texte 24–28px.

**Animation entrée**

Fade-in + slide-up sur scroll (intersection observer), 600ms ease-out. Citation en délai +200ms.

### 3.2 `<PilierBlockSplit />` (et son wrapper `<PilierBlockSplitGroup />`)

**Rôle** : afficher les 4 piliers IA responsable en split éditorial alternance gauche/droite. Réutilisable pour d'autres pages (Silo 4 conseil par exemple).

**Props**

```tsx
type PilierBlockSplitProps = {
  index: number;              // 01, 02, 03, 04
  title: string;
  paragraph: string;
  imageSide: 'left' | 'right';
  mockup: ReactNode | string; // composant mockup OU url image
  tags?: string[];            // optionnel : tags techniques sous le paragraphe
};

type PilierBlockSplitGroupProps = {
  h2: string;
  subtitle: string;
  piliers: Omit<PilierBlockSplitProps, 'imageSide'>[];  // alternance auto
};
```

**Layout desktop**

Pour chaque pilier : grid 2 colonnes 5fr/7fr (ou 7fr/5fr selon side), gap 80px, `py-20`.

- **Colonne texte** : numéro (caption serif XL en couleur `text-muted` style « 01 / 04 »), titre serif 40–48px, paragraphe body large 18px max-w-lg.
- **Colonne mockup** : carte `bg-surface` avec bordure `border-subtle`, radius `rounded-3xl`, padding `p-10`. Peut contenir : schéma SVG (anti-biais → diagramme test cas piégés), illustration souveraineté (carte France + logos OVH/Scaleway/Mistral), illustration transparence (extrait code + arborescence repo Git), illustration humain au centre (schéma cycle agent ↔ humain).

**Layout mobile**

Stack vertical, image toujours sous le texte. Padding réduit.

**Séparateurs**

Trait fin `border-subtle` entre chaque pilier (sauf après le dernier). Pas de gros padding entre piliers (économie verticale).

### 3.3 `<CitiesListGrouped />`

**Rôle** : afficher les 20 villes groupées par région française dans une sous-section discrète. **Ne doit pas dominer visuellement.**

**Props**

```tsx
type City = { name: string; href: string; isOrigin?: boolean };
type Region = { name: string; cities: City[] };

type CitiesListGroupedProps = {
  h2: string;
  subtitle: string;
  regions: Region[];
  footerNote: string;
  mapSvg?: ReactNode;  // optionnel : carte SVG France discrète
};
```

**Layout desktop**

Container `max-w-6xl`. Section padding `py-20` (pas `py-32` — section secondaire).

- **Carte SVG France** (optionnelle, en haut de section centrée) : silhouette France contour fin `border-subtle`, 20 points azure `#38BDF8` aux villes couvertes, taille max 480px largeur. **Discrète, monochrome, presque graphique**. Pas de couleurs régionales saturées.
- **H2** centré serif 40px (plus petit que les autres H2 de la page pour signaler hiérarchie).
- **Sous-titre** centré body large `text-secondary`, max-w-2xl.
- **Liste des régions** : grid 2 ou 3 colonnes (responsive), gap 24px.
  - Chaque bloc région : titre caption sans 13px uppercase tracking 0.08em en `text-muted`, séparateur trait 1px, puis liste des villes en inline-flex wrap séparées par `·`.
  - Lien ville : sans 16px, `text-primary`, hover underline. La ville d'origine (Bordeaux) reçoit un petit indicateur discret : *(ville d'origine)* en caption 12px `text-muted` italique à droite du nom.
- **Note footer** centrée sous la liste : body 16px `text-secondary`, max-w-2xl, mentionne le distanciel structuré et les 30 min offertes.

**Layout mobile**

Stack 1 colonne. Carte SVG réduite à 280px.

**Aucune card individuelle par ville.** Pas d'icône. Pas de fond surface. La hiérarchie visuelle doit être **subtile**.

---

## 4. Réutilisations strictes de composants existants

| Section | Composant | Source |
|---|---|---|
| Sec.2 callout manifeste | `<DarkBlock />` | home v2 |
| Sec.3 cinq engagements | `<NumberedListVertical />` | composant existant SEO local |
| Sec.5 méthode | `<MethodologySection />` | home v2 (héritage strict) |
| Sec.6 souveraineté | `<SouveraineteSection />` | home v2 (héritage strict) |
| Sec.8 FAQ | `<FAQItem />` | composant existant |
| Sec.9 CTA final | `<CTAFinalSection />` | home v2 (héritage strict) |

**Aucune adaptation** des 3 composants hérités home. Ils doivent s'afficher exactement comme sur la home.

---

## 5. JSON-LD à injecter

Source : `content/agences-hub.md` section 13. Cinq schemas dans un seul `@graph` :

1. `Organization` (Althoce, areaServed France, knowsAbout, memberOf Mistral AI Partner Network *à valider*)
2. `WebPage` (name = H1 mission, mainEntity → Organization)
3. `BreadcrumbList` (Accueil → Agences)
4. `ItemList` (20 villes avec position 1 à 20, name + url)
5. `FAQPage` (5 questions de la sec.8)

**Wrapper** : créer un fichier `lib/json-ld/agences-hub.ts` qui exporte l'objet, puis injecter via composant `<JsonLd data={...} />` en tête du `page.tsx` (même pattern que pour les pages SEO local).

---

## 6. Maillage interne (liens en prose)

Tous les liens listés ci-dessous sont **câblés directement dans la prose**, à l'endroit exact où ils apparaissent dans `agences-hub.md`. Pas de bottom nav, pas de section "liens internes" dédiée.

| Section | Ancre prose | Lien cible |
|---|---|---|
| Sec.3 engagement 01 | « Voir Souveraineté » | `/#souverainete` |
| Sec.3 engagement 03 | « cabinet de recrutement parisien » | `/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/` |
| Sec.3 engagement 04 | « Développement IA » | `/services/developpement-ia/` |
| Sec.3 engagement 05 | « Cas clients » | `/cas-clients/` |
| Sec.7 liste régions | 20 liens villes | `/agence-ia-{ville}/` |

**Liens entrants à câbler côté site** (≥10) :

- Header menu principal : entrée « Agences » → `/agences/` (avec optionnellement un dropdown des 20 villes en sous-niveau)
- Footer : section « Agences » qui liste les 20 villes + lien vers `/agences/`
- Home (section « À propos d'Althoce ») : lien fort vers `/agences/`
- Hubs `/services/`, `/agent-ia/`, `/cas-clients/` : cross-link « qui sommes-nous »
- Chaque page SEO local (`/agence-ia-paris/` etc.) : breadcrumb `Accueil › Agences › Paris` (lien Agences vers le hub)
- Page institutionnelle `/a-propos/` (à créer plus tard) : lien fort réciproque
- Articles blog des clusters « à propos », « IA responsable », « souveraineté France » : lien câblé dans la prose

---

## 7. Sitemap & robots

```xml
<url>
  <loc>https://althoce.com/agences/</loc>
  <lastmod>2026-05-16</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

**Priorité 0.9** : page de marque centrale du Silo 3, plus haute que les pages villes (0.7) et que la page Bordeaux origine (0.8). Indexation autorisée. Robots `index, follow`.

---

## 8. Breadcrumb pattern

```
Accueil › Agences
```

Affichage en tête de page sous le header, avant le hero. Réutiliser le composant Breadcrumb existant (même pattern que les pages SEO local mais sans le 3e segment ville).

---

## 9. Spécificités éditoriales et tonalité visuelle

### 9.1 Citation manifeste

C'est l'**élément visuel le plus fort de la page**. Elle doit être lisible immédiatement au-dessus de la ligne de flottaison. Typographie serif XL, traitement éditorial premium (pas un bloc témoignage marketing). Référence visuelle : citations en hero sur le site d'Anthropic, ou sur les sites éditoriaux de The Atlantic / The New Yorker.

### 9.2 Section 2 « Notre mission »

Manifeste prose **pleine largeur avec colonne réduite** (max-w-3xl centrée). Largeur de colonne réduite signale au lecteur le statut éditorial (vs largeur standard d'une section produit). Body large 20px line-height 1.65. Trois paragraphes séparés par espacement vertical généreux. Le DarkBlock final agit comme **signature visuelle** du manifeste.

### 9.3 Section 3 « 5 engagements »

Liste verticale numérotée 01→05. Réutilisation stricte de `<NumberedListVertical />`. Chaque engagement : numéro caption serif XL, titre H3 sans 24px, paragraphe body 16–18px. Pas de cards séparées. Le rythme visuel est **rythmique et opérationnel**.

### 9.4 Section 4 « 4 piliers »

Alternance split gauche/droite pour rythmer visuellement. Chaque pilier 1 page-fold. Les mockups doivent être **graphiques et lisibles** (pas des illustrations marketing flashy) — schémas, captures simulées, diagrammes simples.

### 9.5 Section 7 « Présence en France »

**La discrétion est critique.** Carte France SVG monochrome, liste des villes en typographie de label (pas en cartes). Le visiteur qui cherche sa ville la trouve sans effort, mais ce n'est pas la promesse principale de la page.

### 9.6 Section 8 « FAQ »

Accordéon plié par défaut. Q1 ouverte automatiquement (« Qu'est-ce qui rend Althoce différent ? »). Réponses en body 16px max-w-3xl.

---

## 10. Responsive

| Breakpoint | Comportement |
|---|---|
| `sm` (< 640px) | Tout stack en 1 colonne. Hero passe la citation sous le H1. Sec.4 piliers : image sous le texte. Sec.7 : 1 colonne par région. |
| `md` (640–1024px) | Sec.4 piliers : split 1fr/1fr (au lieu de 5fr/7fr). Sec.7 : 2 colonnes régions. |
| `lg` (> 1024px) | Layouts définis dans la section 3 ci-dessus. |

H1 hero : `clamp(2.5rem, 5vw, 5.5rem)` pour la fluidité.

---

## 11. Performance & accessibilité

### 11.1 Performance

- Carte SVG France inline (< 5 ko gzippé), pas d'image raster.
- Mockups des piliers : SVG ou React pur. Pas d'images > 100 ko.
- Aucune dépendance lourde nouvelle (réutiliser ce qui est déjà dans le bundle home).
- LCP cible : < 1.8 s sur 4G. CLS cible : < 0.05.

### 11.2 Accessibilité

- Citation hero : balisage `<blockquote>` avec `<cite>` pour l'attribution.
- Liste régions : balisage sémantique `<section>` avec `<h3>` pour chaque région et `<ul>` pour les villes.
- Tous les contrastes WCAG AA. Couleur `text-secondary` sur `bg-base` validée AA.
- Focus visible sur tous les liens et CTA, `:focus-visible` accent azure.
- Réduction de mouvement : `prefers-reduced-motion` désactive les fade-in et translations.

---

## 12. Checklist de validation avant merge

- [ ] H1 affiché : « Une IA souveraine, responsable, accessible à toutes les PME françaises. »
- [ ] Citation manifeste signée « L'équipe Althoce »
- [ ] Aucune mention « 0 plan de licenciement imputable » (formulation positive uniquement)
- [ ] Aucune mention auto-hébergement Mistral on-premise sur le hub (resté sur Brest)
- [ ] 5 engagements numérotés 01→05 affichés en `<NumberedListVertical />`
- [ ] 4 piliers IA responsable alternés gauche/droite via `<PilierBlockSplit />`
- [ ] Sections Méthode, Souveraineté, CTA final identiques à la home v2
- [ ] 20 villes listées dans `<CitiesListGrouped />` groupées par région (Bordeaux marquée *(ville d'origine)*)
- [ ] Carte France SVG discrète présente en sec.7
- [ ] 5 JSON-LD (Organization, WebPage, BreadcrumbList, ItemList, FAQPage) injectés dans le `<head>`
- [ ] Sitemap.xml entry `/agences/` priorité 0.9 changefreq monthly
- [ ] Header menu : entrée « Agences » câblée vers `/agences/`
- [ ] Footer : section « Agences » avec 20 villes + lien hub
- [ ] Breadcrumb pages villes : segment « Agences » câblé vers `/agences/`
- [ ] FAQ Q1 ouverte par défaut, Q2 à Q5 fermées
- [ ] Liens en prose (sec.3 et sec.7) cliquables et fonctionnels
- [ ] Reading time ~6 min affiché si l'option est activée sur le site
- [ ] Test responsive sm / md / lg validé
- [ ] Lighthouse mobile > 90 sur Performance / Accessibility / SEO

---

*Brief généré le 2026-05-16 à partir de `content/agences-hub.md` v1.1 (post-validation des 4 décisions user : H1 souveraine, esprit sans chiffre, on-prem retiré du hub, signature « L'équipe Althoce »).*
