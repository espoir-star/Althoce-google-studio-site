# `/a-propos/` — Page de marque · Histoire d'Althoce (version condensée)

> **Contrepartie narrative du hub `/agences/`. Voix collective Althoce, jamais personnifiée. Format synthétique : paragraphes courts, schémas plutôt que photos, lecture rapide (3 min).**

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---|---|---|
| 6 | Méthode | `home-v2.md` | `<MethodologySection />` |
| 7 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 10 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> Pas de section Pricing. Pas de portraits humains. Pas de bio individuelle.

### Positionnement éditorial

Page de marque collective et condensée. Trois règles éditoriales strictes :

1. **Voix Althoce uniquement** — « nous », « Althoce », « notre équipe ». Jamais de fondateur ou de personne nommée.
2. **Pas de pavé** — paragraphes de 2 à 4 phrases maximum. Lecture rapide.
3. **Schémas plutôt que photos** — chaque visuel est un graphique, un schéma symbolique ou une composition typographique. Aucune photo humaine dans la v1.

### Slots variables

| Slot | Section | Variation |
|---|---|---|
| `H1` | Hero | « L'histoire d'Althoce. » |
| `Schéma hero` | Hero | Composition typographique 3 chiffres + carte France discrète |
| `Histoire` | sec.2 | 4 paragraphes courts (constat → décision → Bordeaux → aujourd'hui) |
| `Pourquoi Althoce` | sec.3 | 3 paragraphes courts + DarkBlock signature |
| `Valeurs` | sec.4 | 4 cards 2×2 |
| `Équipe et culture` | sec.5 | Schéma organisation + 1 paragraphe + bloc candidatures |
| `Chiffres` | sec.6 | `<KPIBand />` 4 stats |
| `FAQ` | sec.8 | 4 Q/R courtes |

### Blocs immuables

- **Breadcrumb** : `Accueil › À propos`
- **CTA primaire** : « Discuter de votre projet → »
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **Chiffres marque** : `+758 agents · +150 PME · −70 % temps · +5 M€`
- **JSON-LD** : `Organization` + `WebPage` + `BreadcrumbList` + `FAQPage` (pas de `Person`)

---

## 1. Méta-info SEO

### Mots-clés cibles

qui est Althoce · équipe Althoce · histoire Althoce · culture Althoce · agence IA Bordeaux histoire · Althoce origine

---

## 2. Title / Meta

```html
<title>L'histoire et la culture d'Althoce | Althoce</title>
<meta name="description" content="Althoce, agence IA française d'origine bordelaise. Histoire, culture d'équipe et valeurs : démocratiser l'IA responsable dans les PME françaises. +150 PME équipées.">
<link rel="canonical" href="https://althoce.com/a-propos/">

<meta property="og:title" content="L'histoire et la culture d'Althoce | Althoce">
<meta property="og:description" content="Agence IA française d'origine bordelaise. Démocratiser l'IA responsable dans les PME françaises.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/a-propos/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---|---|---|
| 1 | 🟢 Hero éditorial | Propre | H1 + sous-titre court + pills + CTA. Schéma typographique à droite ou en fond (pas de photo). |
| 2 | 🟢 Notre histoire | Propre | 4 paragraphes courts datés, prose colonne réduite |
| 3 | 🟢 Pourquoi Althoce existe | Propre | 3 paragraphes courts + DarkBlock signature équipe |
| 4 | 🟢 Nos valeurs | Propre | Grille 2×2 cards sobres |
| 5 | 🟢 Notre équipe et notre culture | Propre | Schéma organisationnel cercles concentriques + 1 paragraphe + bloc candidatures |
| 6 | 🟢 Nos chiffres | Propre | `<KPIBand />` 4 stats |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ marque | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero éditorial

### Layout

**Pas de portrait humain.** Hero typographique. Deux options visuelles :

- **Option A (recommandée)** : H1 centré display serif XL pleine largeur. Sous-titre centré. Pills. CTA. À l'arrière-plan ou en accent latéral : composition typographique discrète avec les 3 chiffres clés (`+758` / `+150` / `+5 M€`) traités comme éléments graphiques en très grand format mais avec opacité faible (10-15 %).
- **Option B** : Split éditorial. À gauche le texte du hero. À droite un **schéma vectoriel** — silhouette France stylisée avec 20 points azure aux villes couvertes (réutilise le composant carte France déjà conçu pour les pages SEO local en taille réduite).

À choisir entre A et B selon l'effet recherché. Par défaut, A.

### H1

> **L'histoire d'Althoce.**

### Sous-titre (2 lignes)

> Agence IA française d'origine bordelaise. Une équipe concentrée sur un seul cap : démocratiser l'IA responsable dans les PME et ETI françaises.

### Pills (3 max)

> Origine Bordeaux · +150 PME équipées · Fondée en [À COMPLÉTER : année]

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Lire l'histoire ↓ *(ancre `#histoire`)*

---

## 5. Section 2 — Notre histoire *(ancre `#histoire`)*

### H2

> **D'un constat à une agence IA française d'origine bordelaise**

### Paragraphe 1 — Le constat

> Le marché de l'IA en entreprise s'est construit pour les grands groupes. Un cabinet comptable de 12 personnes qui voulait s'équiper avait le choix entre un audit parisien à 200 000 € (inaccessible) ou un SaaS américain générique (frustrant). Les PME — 50 % de l'emploi privé français — restaient sur le bord du chemin.

### Paragraphe 2 — La décision

> Cette asymétrie nous a paru insoutenable. La réalité, c'est que l'IA peut faire beaucoup pour une PME aujourd'hui : agents en production sous une semaine, ROI mesurable en moins de 6 mois, sur des sujets concrets — saisie comptable, qualification commerciale, support N1, tri CV. Encore fallait-il un acteur sérieux pour s'y consacrer. C'est ce qu'Althoce a décidé d'être.

### Paragraphe 3 — Le choix de Bordeaux

> **Nous sommes une agence française d'origine bordelaise.** Pas un cabinet parisien qui découvre les régions. Notre culture professionnelle est ancrée dans un territoire industriel et viticole où l'on attend du concret et où la parole vaut le contrat. Nous intervenons aujourd'hui dans 20 villes françaises (voir [notre présence](/agences/)), mais l'ADN reste bordelais.

### Paragraphe 4 — Aujourd'hui

> Aujourd'hui : **+150 PME équipées**, **+758 agents en production**, **+5 M€ économisés**. Et **aucune mission acceptée dont l'objectif serait un plan de licenciement**, parce que c'est inscrit dans notre méthode. La mission ne change pas : démocratiser l'usage de l'IA dans les entreprises françaises, de manière responsable. Voir notre [manifeste mission](/agences/).

---

## 6. Section 3 — Pourquoi Althoce existe

### H2

> **Trois choix structurants qui guident chaque mission**

### Paragraphe 1 — Le choix PME et ETI

> Une PME, c'est un dirigeant qui décide vite, qui finance sur sa trésorerie, qui veut du résultat opérationnel. Cela impose une discipline qu'on ne voit pas dans le conseil traditionnel : délais courts, prix accessibles, ROI mesurable, engagement humain. C'est exigeant. C'est ce que nous faisons depuis le premier jour.

### Paragraphe 2 — Le choix de la souveraineté

> Notre stack standard est française : Mistral hébergé en France via OVH et Scaleway, anonymisation systématique avant toute API tierce. Pas par idéologie. Par pragmatisme — une PME qui exfiltre ses données vers les serveurs US perd une partie de sa souveraineté économique.

### Paragraphe 3 — Le choix de la responsabilité

> Pas de plan de licenciement caché derrière l'IA. Pas de tri CV sans documentation anti-biais opposable. Pas de boîte noire technologique. Ces trois engagements ne sont pas du marketing — c'est ce qui fait que nos clients nous gardent.

### Callout `<DarkBlock />` — Signature collective

> **« Une PME française qui se transforme par l'IA n'a pas besoin d'un cabinet stratégique à 200 000 €. Elle a besoin d'un partenaire qui descend dans l'opérationnel, qui livre vite, qui respecte ses équipes, et qui garde les données en France. »**
>
> *— L'équipe Althoce*

---

## 7. Section 4 — Nos valeurs

### H2

> **Quatre valeurs concrètes**

### Sous-titre (1 ligne)

> Pas des slogans. Des arbitrages que nous faisons au quotidien.

### Grille 2×2 (`<ValueCard />`)

**01. Concret avant stratégique**

> Un agent en production en 1 semaine vaut mieux qu'un PowerPoint en 6 mois. Cadrage court, livrable opérationnel précoce.

**02. Souveraineté par défaut**

> Mistral France, OVH, Scaleway. Aucune donnée nominative chez OpenAI ou Anthropic sans accord client. Voir [Souveraineté](/#souverainete).

**03. Humain au centre**

> Nous refusons les missions dont l'objectif est un plan de licenciement. L'IA libère du temps, jamais ne remplace masquément.

**04. Transparence technique**

> Code, prompts, workflows, accès : tout est livré au client. Pas de boîte noire, pas de lock-in.

---

## 8. Section 5 — Notre équipe et notre culture

### H2

> **Une équipe française, exigeante, concentrée**

### Schéma `<OrgChartConcentric />` (à concevoir)

Schéma vectoriel sobre en cercles concentriques :

- **Cercle central (le plus petit)** : « Noyau permanent Althoce » — arbitrages collectifs, sélection des missions, gouvernance.
- **Cercle intermédiaire** : « Consultants spécialisés » — développeurs IA, experts métier sectoriels, juristes IT, designers conversationnels. Mobilisés à la mission.
- **Cercle extérieur** : « Partenaires techniques » — hébergeurs souverains (OVH, Scaleway), éditeurs IA (Mistral), prestataires complémentaires.

Pas de photos, pas de visages, pas de noms. Juste des labels typographiques sur les cercles.

### Paragraphe (1 seul, court)

> Notre organisation est **volontairement dense et concentrée**. Pas de pyramide à 5 étages, pas de département PowerPoint. Chaque consultant Althoce intervient sur le cadrage, la conception et la mise en production de ses missions, ce qui garantit la cohérence de bout en bout. Les sujets stratégiques (souveraineté, anti-biais, sélection de missions) sont arbitrés collectivement par le noyau permanent.

### Bloc « L'équipe grandit »

> **L'équipe grandit avec les missions.** Développeurs IA seniors, experts métier sectoriels avec vraie expérience en PME ou ETI, expertises rares alignées avec nos valeurs — écrivez à **espoir@contact.althoce.com** avec « Candidature » en objet.

---

## 9. Section 6 — Nos chiffres

### H2

> **Quelques chiffres qui parlent pour nous**

### `<KPIBand />`

**+758 agents IA en production**
**+150 PME et ETI équipées** dans 20 villes
**−70 % temps de saisie** en moyenne (finance, back-office)
**+5 M€ économisés** depuis 2024

### Note sous le KPIBand

> Chiffres cumulés à fin [À COMPLÉTER : date de référence]. Cas signature détaillés dans nos [cas clients](/cas-clients/).

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />` de la home v2.**

---

## 11. Section 8 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />` de la home v2.**

---

## 12. Section 9 — FAQ marque

### H2

> **Questions fréquentes sur Althoce**

### Liste accordéon `<FAQItem />`

**Q1. Comment Althoce est-elle organisée au quotidien ?**

Un noyau permanent qui arbitre collectivement les sujets stratégiques, et un réseau de consultants spécialisés mobilisés selon les missions. Pas de pyramide, pas de département stratégie déconnecté. Chaque consultant intervient sur le cadrage, la conception et la mise en production — c'est ce qui nous permet de livrer un agent sous une semaine.

**Q2. Est-ce qu'Althoce recrute ?**

L'équipe grandit avec ses missions. Profils ciblés : développeurs IA seniors, experts métier sectoriels avec expérience PME ou ETI (pas grand compte), expertises rares alignées avec nos valeurs. Candidatures à espoir@contact.althoce.com.

**Q3. Pourquoi Bordeaux ?**

Ancrage culturel et professionnel. Tissu PME dense, exigeant, où l'on attend du concret et où la parole vaut le contrat. Nous intervenons aujourd'hui partout en France (voir [notre présence](/agences/)), mais l'ADN reste bordelais.

**Q4. Quelles sont les ambitions d'Althoce ?**

Densifier le portefeuille français — 200, 500, 1 000 PME équipées d'ici 3 ans. Étendre le réseau de consultants partenaires. Approfondir l'expertise sectorielle sur les verticales déjà signature (finance, commercial, juridique, RH, achats, ops, marketing, téléphonique). Discuter ? [30 minutes ensemble](/contact/).

---

## 13. Section 10 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<CTAFinalSection />` de la home v2.**

---

## 14. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://althoce.com/#organization",
      "name": "Althoce",
      "legalName": "ALTHOCE CONSEIL",
      "url": "https://althoce.com/",
      "logo": "https://althoce.com/logo.svg",
      "description": "Agence IA française d'origine bordelaise. Mission : démocratiser l'usage de l'IA dans les entreprises françaises de manière responsable. +150 PME équipées.",
      "foundingDate": "[À COMPLÉTER : année de création]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 rue Fénelon",
        "addressLocality": "Bordeaux",
        "postalCode": "33000",
        "addressCountry": "FR"
      },
      "areaServed": { "@type": "Country", "name": "France" }
    },
    {
      "@type": "WebPage",
      "@id": "https://althoce.com/a-propos/#webpage",
      "name": "L'histoire et la culture d'Althoce",
      "url": "https://althoce.com/a-propos/",
      "mainEntity": { "@id": "https://althoce.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "À propos", "item": "https://althoce.com/a-propos/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Comment Althoce est-elle organisée au quotidien ?", "acceptedAnswer": { "@type": "Answer", "text": "Un noyau permanent qui arbitre collectivement les sujets stratégiques, et un réseau de consultants spécialisés mobilisés selon les missions." } },
        { "@type": "Question", "name": "Est-ce qu'Althoce recrute ?", "acceptedAnswer": { "@type": "Answer", "text": "L'équipe grandit avec ses missions. Développeurs IA seniors, experts métier sectoriels avec expérience PME/ETI, candidatures à espoir@contact.althoce.com." } },
        { "@type": "Question", "name": "Pourquoi Bordeaux ?", "acceptedAnswer": { "@type": "Answer", "text": "Ancrage culturel et professionnel : tissu PME dense, exigeant, où on attend du concret. ADN bordelais, intervention partout en France." } },
        { "@type": "Question", "name": "Quelles sont les ambitions d'Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Densifier le portefeuille français (200, 500, 1000 PME équipées d'ici 3 ans), étendre le réseau de consultants partenaires, approfondir l'expertise sectorielle." } }
      ]
    }
  ]
}
```

---

## 15. Maillage interne

Liens **placés directement dans la prose** :

- Sec.2 paragraphe 3 (présence partout) : lien vers `/agences/`
- Sec.2 paragraphe 4 (manifeste mission) : lien vers `/agences/`
- Sec.4 valeur 02 (souveraineté) : lien vers `/#souverainete`
- Sec.6 chiffres (cas signature) : lien vers `/cas-clients/`
- Sec.12 FAQ Q3 (présence) : lien vers `/agences/`
- Sec.12 FAQ Q4 (30 min) : lien vers `/contact/`

### Liens entrants attendus (≥ 10)

- Home (section « À propos » + footer)
- Header (entrée « À propos »)
- Footer (lien permanent)
- Hub `/agences/` (lien réciproque fort, section mission)
- Hubs `/services/`, `/agent-ia/`, `/cas-clients/` (cross-link « qui sommes-nous »)
- Chaque page SEO local (mention « agence d'origine bordelaise » câblée vers `/a-propos/`)
- Articles blog du cluster « histoire » / « culture » (Silo 5)
- Mentions légales + confidentialité

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.7), `<SouveraineteSection />` (sec.8), `<CTAFinalSection />` (sec.10).

### Composants existants à réutiliser

`<DarkBlock />` (sec.3), `<FAQItem />` (sec.9), `<KPIBand />` (sec.6).

### Nouveaux composants à concevoir

- `<ValueCard />` : card sobre pour la grille 2×2 valeurs (sec.4). Numéro caption serif, titre H3 sans, paragraphe body court (2-3 phrases max). Fond `bg-surface`, bordure `border-subtle`, radius `rounded-3xl`, padding `p-8`.

- `<OrgChartConcentric />` (sec.5) : schéma vectoriel sobre en cercles concentriques avec 3 cercles labellisés (Noyau permanent / Consultants spécialisés / Partenaires techniques). Pas de photos, pas de visages, pas de noms. Composition typographique pure.
  - Taille recommandée : 480×480 px desktop, 320×320 px mobile.
  - Couleurs : monochrome avec accent azure (`#38BDF8`) sur le cercle central.
  - Animation entrée : pulsation douce du cercle central au scroll.

- `<HeroTypographic />` (sec.1, option A) : hero éditorial typographique. H1 display serif XL centré, avec à l'arrière-plan ou en accent latéral une composition typographique des 3 chiffres clés (`+758` / `+150` / `+5 M€`) en très grand format mais opacité 10-15 %. **Aucune photo.**

### Règle visuelle stricte

**Aucune photo humaine sur cette page dans la v1.** Hero, équipe, FAQ — tout en typographie, schémas ou compositions graphiques. Cette discipline visuelle renforce le positionnement collectif et reste cohérent quand l'équipe grandira.

### Règle d'intégration au site

1. **Menu principal** : entrée « À propos » qui pointe vers `/a-propos/`.
2. **Breadcrumb** : `Accueil → À propos`.
3. **Footer** : entrée « À propos ».
4. **Sitemap.xml** : `<priority>0.8</priority>`, `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `Organization` + `WebPage` + `BreadcrumbList` + `FAQPage` validés. **Pas de schéma `Person`**.
6. **Reading time** : 3 min de lecture (réduit grâce à la condensation).

### Patterns par section

- Hero : typographique sans photo
- Sec.2 : prose colonne réduite, 4 paragraphes courts datés
- Sec.3 : 3 paragraphes courts + DarkBlock
- Sec.4 : grille 2×2 cards courtes
- Sec.5 : schéma cercles concentriques + 1 paragraphe + bloc candidatures
- Sec.6 : KPIBand
- Sec.9 : accordéon FAQ

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. Signature DarkBlock (sec.3) en italique léger.

---

## 17. Informations à valider avant publication

1. ✅ **Origine bordelaise** : validé.
2. ✅ **Format collectif** : aucune mention personnelle nommée — validé.
3. ✅ **Pas de photo humaine** : règle visuelle validée pour la v1.
4. ✅ **Format synthétique** : paragraphes 2-4 phrases — validé.
5. **Année de création d'Althoce Conseil** : à confirmer (pills hero, JSON-LD).
6. **Date de référence des chiffres** : à confirmer.
7. **Schéma cercles concentriques** (sec.5) : valider la composition des 3 cercles (Noyau permanent / Consultants spécialisés / Partenaires techniques). Adapter si la réalité opérationnelle est différente.
8. **Citation signature DarkBlock sec.3** : signée « L'équipe Althoce ».

---

*Document de référence rédigé le 2026-05-16, refondu en format collectif puis condensé. Page de marque collective synthétique. Voix Althoce, paragraphes courts, schémas plutôt que photos. Reading time : 3 min.*
