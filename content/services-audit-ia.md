# `/services/audit-ia/` — Service satellite Silo 1 (modèle vivant Service · adaptation #7)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**

---

## 0. Préambule

### Sections héritées (sans rédaction propre)

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Pricing (2 tiers) | `home-v2.md` | langage visuel pricing home |
| 9 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 11 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Audit IA : la cartographie complète des opportunités IA dans votre entreprise. Pas un PowerPoint de cabinet de conseil. » |
| `Sous-titre hero` | sec.1 | 2 lignes : différencier l'audit Althoce d'un audit cabinet conseil et des 30 min offertes |
| `Pills hero` | sec.1 | 3 pills (chiffres marque, sans mention découverte) |
| `Définition pédagogique` | sec.2 | Trois échelles : 30 min offertes / Audit Althoce / Audit cabinet conseil |
| `Tableau comparatif` | sec.3 | 2 colonnes : Audit cabinet (BCG, McKinsey, Accenture) / Audit Althoce |
| `6 livrables` | sec.4 | Liste verticale numérotée 01→06 |
| `4 typologies` | sec.5 | Liste verticale numérotée 01→04 (Express, Standard, Approfondi, Post-incident) |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ` | sec.10 | 6 Q/R adaptées audit |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Services › Audit IA`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « 6 livrables »
- **Pricing affiché** : 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte). L'audit IA est sur devis selon scope.
- **Découverte offerte** : « 30 minutes offertes avec un expert » (qualification du besoin d'audit)
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial, tableau dense, liste verticale numérotée, Marquee, accordéon FAQ. Aucun label décoratif.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 1, satellite Services**

### Rôle dans l'architecture

Page satellite qui adresse le besoin de cadrage stratégique avant tout déploiement IA. Sert deux publics distincts : (1) les dirigeants qui hésitent à investir et veulent une cartographie complète chiffrée avant d'engager, (2) les DSI / CTO qui ont besoin d'un livrable formalisé pour présenter en CODIR. Différencie clairement ce qu'Althoce livre d'un audit cabinet de conseil classique (long, cher, abstrait), et de notre offre de qualification gratuite (30 minutes offertes avec un expert).

### Objectif trafic

1. Capter "audit IA", "audit IA entreprise", "cartographie IA", "stratégie IA PME", "feuille de route IA", "diagnostic IA", "audit ChatGPT entreprise".
2. Positionner Althoce comme alternative pragmatique aux cabinets de conseil sur l'IA.
3. Distribuer vers les services concrets une fois l'audit livré (`/services/agents-ia/`, `/services/employe-ia/`, etc.).

### Mots-clés cibles principaux

audit IA · audit IA entreprise · cartographie IA · stratégie IA PME · feuille de route IA · diagnostic IA · audit ChatGPT entreprise · maturité IA · roadmap IA · gouvernance IA

### Mots-clés longue traîne

« comment auditer la maturité IA d'une PME », « différence audit IA cabinet conseil et agence IA », « combien coûte un audit IA », « livrables d'un audit IA »

---

## 2. Title / Meta description / Open Graph

```html
<title>Audit IA pour PME et ETI : cartographie chiffrée des opportunités IA | Althoce</title>

<meta name="description" content="Audit IA Althoce : cartographie de vos opportunités, calcul de ROI projet par projet, feuille de route chiffrée, gouvernance, conformité. Pas un PowerPoint de cabinet de conseil. Sur devis. 30 min offertes avec un expert.">

<meta name="keywords" content="audit IA, audit IA entreprise, cartographie IA, stratégie IA PME, feuille de route IA, diagnostic IA, maturité IA, roadmap IA">

<link rel="canonical" href="https://althoce.com/services/audit-ia/">

<meta property="og:title" content="Audit IA pour PME et ETI : cartographie chiffrée des opportunités | Althoce">
<meta property="og:description" content="Pas un PowerPoint de cabinet de conseil. 6 livrables concrets, ROI par projet, gouvernance, conformité, formation associée.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/audit-ia/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup couverture rapport audit (titre, logo client fictif, 6 livrables listés) |
| 2 | 🟢 Définition pédagogique | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Tableau comparatif Audit cabinet vs Althoce | Propre | Tableau dense 2 colonnes × 8 lignes |
| 4 | 🟢 6 livrables d'un audit IA | Propre | Liste verticale numérotée 01→06 |
| 5 | 🟢 4 typologies d'audit | Propre | Liste verticale numérotée 01→04 |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Pricing | Hérité | langage visuel pricing home |
| 9 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 10 | 🟢 FAQ audit IA | Propre | Accordéon `<FAQItem />` |
| 11 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'une couverture de rapport audit. Cadre A4 portrait avec en-tête "Audit IA stratégique", logo client fictif (carré géométrique anonymisé), date, 6 puces livrables visibles ("Cartographie · Maturité · ROI · Roadmap · Gouvernance · Formation"), signature Althoce en bas. Visuel léger, pas une vraie copie de PDF.

### H1

> **Audit IA : la cartographie complète des opportunités IA dans votre entreprise. Pas un PowerPoint de cabinet de conseil.**

### Sous-titre (2 lignes max)

> Vous voulez investir dans l'IA mais vous ne savez pas par où commencer, combien ça coûte, ni ce que ça rapporte. Notre audit livre 6 livrables actionnables : cartographie processus, maturité IA, ROI projet par projet, roadmap chiffrée, plan de gouvernance, plan de formation. Sur devis selon scope. Restitution sous 2 à 6 semaines.

### Pills (3 max)

> +150 PME équipées · 6 livrables actionnables · Restitution sous 2 à 6 semaines

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir les 6 livrables ↓ *(ancre `#livrables`)*

### Note Claude Design

Le mockup couverture rapport est un composant `<AuditReportCoverMockup />` à concevoir. Cadre A4 portrait stylisé (pas une image PNG). En-tête, logo carré fictif, date, 6 puces livrables, signature Althoce. Effet ombre subtile.

---

## 5. Section 2 — Qu'est-ce qu'un audit IA chez Althoce

### H2

> **30 minutes offertes, audit Althoce, audit cabinet conseil. Trois échelles, trois usages.**

### Paragraphe principal

> Quand un dirigeant nous dit "je veux un audit IA", il faut clarifier l'échelle. Notre offre se positionne sur trois niveaux distincts. Les **30 minutes offertes avec un expert** servent à qualifier un cas borné (faut-il déployer un agent IA SDR, un chatbot RAG, ou autre) et chiffrer un projet. C'est gratuit, c'est rapide, c'est l'entrée naturelle vers un [agent IA simple](/services/agents-ia/) ou un [chatbot](/services/chatbot-ia/). Notre **audit IA payant** sert à cartographier l'ensemble des opportunités IA dans l'entreprise, calculer le ROI projet par projet, et bâtir une feuille de route chiffrée. C'est pour les structures qui veulent une vue d'ensemble avant d'engager. Un **audit cabinet de conseil** (BCG, McKinsey, Accenture) sert à autre chose : produire un PowerPoint stratégique long, abstrait, présenté en CODIR, souvent à 80 à 200 K€. Nous ne nous battons pas sur ce terrain.

### Sous-paragraphe

> Un audit IA Althoce est conçu pour être **directement actionnable**. Chaque opportunité identifiée est chiffrée (coût build, coût run, ROI, payback), priorisée, et associée à un livrable Althoce concret (un [agent IA](/services/agents-ia/), un [système d'automatisation](/services/automatisation-ia/), un [employé IA](/services/employe-ia/), ou simplement une [formation](/services/formation-ia/) si la maturité interne suffit). Pas de slide générique. Pas de "il faudrait étudier plus en profondeur". À la fin de l'audit, vous savez exactement quel projet lancer en premier, à quel coût, avec quel payback.

### Callout `<DarkBlock />`

> **L'audit IA Althoce répond à 4 questions concrètes**
>
> 1. Quels sont les 5 à 10 cas d'usage IA à plus haut ROI dans mon entreprise, classés par payback ?
> 2. Combien coûte chacun (build, run, formation) et combien il rapporte ?
> 3. Dans quel ordre les lancer pour minimiser le risque et maximiser l'apprentissage ?
> 4. Quelle gouvernance, quelle conformité RGPD, quelle formation mettre en place pour rendre tout ça pérenne ?

---

## 6. Section 3 — Tableau comparatif : Audit cabinet vs Audit Althoce

### H2

> **Audit cabinet de conseil vs Audit Althoce. Deux usages très différents.**

### Sous-titre

> Si vous cherchez un PowerPoint stratégique pour votre conseil d'administration, prenez un cabinet de conseil. Si vous cherchez une cartographie chiffrée et actionnable de vos opportunités IA, voici ce qui change avec nous.

### Tableau (`<ComparisonTable />`)

| Critère | Audit cabinet de conseil | **Audit IA Althoce** |
|---------|--------------------------|----------------------|
| Public visé | CODIR / conseil d'administration | **Direction opérationnelle, DSI, responsables métier** |
| Livrable principal | PowerPoint stratégique 60 à 120 slides | **Rapport de 30 à 60 pages + tableur ROI + roadmap chiffrée** |
| Identification de cas concrets | Génériques, sectoriels | **Spécifiques à votre entreprise, processus identifiés un par un** |
| Chiffrage projet par projet | Rare ou ordres de grandeur | **Build + run + formation chiffrés au cadrage** |
| Calcul ROI / payback | Macroéconomique | **Concret par cas, méthodologie transparente** |
| Délai de livraison | 2 à 6 mois | **2 à 6 semaines** |
| Coût | 80 à 200 K€ | **Sur devis (typiquement bien inférieur)** |
| Suite logique | Nouveau cycle de conseil | **Lancement direct des projets identifiés** |

### Note sous le tableau

> Les deux approches sont légitimes, dans des contextes différents. Si votre entreprise est une grande ETI cotée et que vous devez justifier d'une gouvernance auprès d'actionnaires, un cabinet de conseil peut être pertinent. Pour une PME ou ETI qui veut passer à l'action en quelques semaines, notre audit livre directement le carburant pour démarrer. Pour qualifier votre besoin avant de choisir, prenez les **30 minutes offertes avec un expert** : nous vous orienterons honnêtement.

---

## 7. Section 4 — 6 livrables d'un audit IA *(ancre `#livrables`)*

### H2

> **Les 6 livrables que vous recevez à la fin de l'audit**

### Sous-titre

> Six documents et tableurs que vous gardez, que vous diffusez en interne, et qui restent actionnables 12 mois plus tard. Pas de slide marketing.

### Liste verticale numérotée 01→06 (`<NumberedListVertical />`)

**01. Cartographie des processus IA-éligibles**

> Inventaire structuré des processus métier de votre entreprise (par direction, par équipe), avec une qualification IA par processus : automatisable simple, automatisable avec agent, automatisable avec employé IA, ou non automatisable à ce stade. Format livré : tableur navigable + carte visuelle des processus.

**02. Diagnostic de maturité IA**

> Évaluation de votre maturité actuelle sur 6 axes : data, outils, gouvernance, compétences, culture, conformité. Score sur chaque axe + benchmark par rapport à un panel de PME / ETI comparables. Permet d'identifier les blocages structurels avant tout build technique.

**03. ROI projet par projet (top 5 à 10 candidats)**

> Pour les 5 à 10 cas d'usage à plus haut potentiel : calcul du coût build, du coût run mensuel, des gains attendus (heures économisées, capacité ajoutée, qualité améliorée), du payback en mois, et du ROI 3 ans. Méthodologie transparente, vous pouvez challenger chaque hypothèse.

**04. Feuille de route chiffrée 12 à 24 mois**

> Roadmap proposée des projets IA à lancer dans le bon ordre, avec budget annuel, prérequis (données, outils, équipes), et jalons de validation. Pensée pour minimiser le risque (commencer petit, apprendre, scaler), pas pour maximiser le volume de prestations.

**05. Plan de gouvernance et conformité**

> Règles internes pour piloter l'IA dans la durée : qui décide d'un nouveau projet, qui valide les déploiements, comment gérer les escalades et incidents, comment documenter en RGPD, quels indicateurs suivre. Voir aussi notre service [Intégration IA](/services/integration-ia/) pour la mise en œuvre technique.

**06. Plan de formation associé**

> Cartographie des formations à prévoir pour chaque public concerné (utilisateurs, pilotes, architectes), planning de déploiement, budget formation, dispositifs OPCO mobilisables. Voir [Formation IA](/services/formation-ia/) pour les modules disponibles.

---

## 8. Section 5 — 4 typologies d'audit

### H2

> **4 formats d'audit selon votre contexte**

### Sous-titre

> Tous les audits ne se ressemblent pas. Selon votre maturité actuelle, l'urgence, et le périmètre, nous proposons 4 formats. Le bon format est identifié pendant les 30 minutes offertes avec un expert.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. Audit Express (2 semaines)**

> Pour les PME qui veulent avancer vite. Périmètre 1 direction (commercial OU comptabilité OU support, par exemple). 4 livrables sur les 6 (cartographie, ROI top 3 cas, roadmap 12 mois, plan formation court). Idéal pour démarrer sans ralentir l'organisation.

**02. Audit Standard (4 semaines)**

> Le format le plus demandé. Périmètre toute l'entreprise (toutes directions), 6 livrables complets, atelier de restitution avec direction et DSI, plan de mise en œuvre détaillé pour les 3 premiers projets prioritaires. Pour PME structurées et ETI.

**03. Audit Approfondi sectoriel (6 semaines)**

> Pour les ETI ou groupes avec spécificités sectorielles fortes (industrie, santé, finance, juridique). Inclut une analyse des contraintes réglementaires sectorielles (HDS, MIFID, RGPD avancé, IA Act), un benchmark sectoriel, et un volet souveraineté approfondi. Voir aussi notre [souveraineté](/#souverainete) pour le cadre général.

**04. Audit Post-incident (3 semaines)**

> Vous avez déployé une solution IA (ChatGPT entreprise, RPA, agent IA externe) qui a posé problème : dérive, fuite de données, hallucination, conformité contestée. Nous auditons l'existant, identifions les causes, proposons un plan de remédiation. Différent des autres audits par son angle sécurité / conformité prioritaire.

### Note sous la liste

> Vous hésitez entre les 4 formats ? Les **30 minutes offertes avec un expert** servent précisément à cadrer le format adapté à votre contexte avant tout devis.

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée. Réutilisation stricte du composant `<Marquee />` de la home.**
> Aucun contenu textuel à fournir ici.

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />`.**
> Aucun contenu textuel à fournir ici.

---

## 11. Section 8 — Pricing (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte). 30 minutes offertes avec un expert.**
> Aucun contenu textuel à fournir ici.
>
> *Note éditoriale propre à l'audit* : un audit IA est par défaut **sur devis**. Le scope varie fortement selon la taille de l'entreprise (PME 50 personnes vs ETI 800 personnes), le périmètre couvert (1 direction vs toutes directions), et le format choisi (Express, Standard, Approfondi, Post-incident). Tous les chiffrages se font après les 30 minutes offertes avec un expert. Pas de tarif public affiché, alignement strict avec règle home.

---

## 12. Section 9 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />`.**

---

## 13. Section 10 — FAQ Audit IA (6 Q/R)

### H2

> **Questions fréquentes sur l'audit IA**

### Liste accordéon `<FAQItem />`

**Q1. Quelle est la différence entre les 30 minutes offertes avec un expert et l'audit IA Althoce ?**

Les **30 minutes offertes** sont gratuites et servent à qualifier un cas borné ou à orienter vers le bon format d'audit. C'est l'entrée naturelle pour un [agent IA simple](/services/agents-ia/) ou un [chatbot RAG](/services/chatbot-ia/) à 1 400 € HT. L'**audit IA payant** sert à cartographier l'ensemble des opportunités IA dans l'entreprise, avec 6 livrables actionnables. Il s'adresse aux structures qui veulent une vue d'ensemble avant de lancer plusieurs projets.

**Q2. Combien coûte un audit IA chez Althoce ?**

Sur devis selon scope. Le coût varie en fonction du format (Express, Standard, Approfondi, Post-incident), du périmètre couvert, et de la taille de l'entreprise. Un audit Express PME démarre à un coût significativement inférieur à un audit cabinet de conseil. Tous les chiffrages se font après les 30 minutes offertes avec un expert pour cadrer le scope.

**Q3. Combien de temps prend un audit IA ?**

Entre 2 et 6 semaines selon le format choisi. Audit Express : 2 semaines. Audit Standard : 4 semaines. Audit Approfondi sectoriel : 6 semaines. Audit Post-incident : 3 semaines. La restitution se fait en atelier avec direction et DSI à la fin du sprint, suivie d'un Q&R d'une semaine pour les précisions.

**Q4. Que se passe-t-il après l'audit ? Est-on lié à Althoce pour les projets identifiés ?**

Non, jamais. L'audit livre 6 livrables que vous gardez et qui restent actionnables avec n'importe quel prestataire (Althoce ou autre). Nous proposons logiquement un devis pour les projets prioritaires identifiés, mais vous pouvez les confier à votre équipe interne, à un freelance, à une autre agence, ou ne rien lancer du tout. Aucune clause d'exclusivité.

**Q5. Comment garantissez-vous la qualité des chiffrages ROI ?**

Méthodologie transparente. Chaque calcul ROI s'appuie sur des hypothèses explicites : coût horaire chargé, heures absorbées par le processus, coût build (chiffré au cadrage), coût run mensuel (modèle LLM + infra + support). Vous pouvez challenger chaque hypothèse, modifier les paramètres dans le tableur livré, et recalculer vous-même. Pour aller plus loin sur le ROI, voir notre [calculateur ROI agent IA](/conseil/calculateur-roi-agent-ia/) en libre accès.

**Q6. Pouvez-vous auditer une solution IA déployée par un autre prestataire ?**

Oui. C'est typiquement le format **Audit Post-incident** (typologie 04 sec.5). Nous auditons l'existant (architecture, conformité, sécurité, performance), identifions les causes des dérives, et proposons un plan de remédiation. Nous le faisons régulièrement sur des solutions ChatGPT entreprise mal cadrées, des RPA qui n'ont jamais bien tourné, ou des agents IA externes qui ont créé des incidents. Voir aussi notre service [Intégration IA](/services/integration-ia/) pour la couche gouvernance qui aurait dû être en place.

---

## 14. Section 11 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 15. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/audit-ia/#service",
      "name": "Audit IA pour PME et ETI",
      "serviceType": "AI strategic audit",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Audit IA stratégique : cartographie des opportunités, diagnostic maturité, ROI projet par projet, feuille de route chiffrée, plan de gouvernance, plan de formation. 4 formats : Express, Standard, Approfondi sectoriel, Post-incident.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/audit-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Sur devis selon format et scope. 30 minutes offertes avec un expert pour cadrer le format adapté."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Audit IA", "item": "https://althoce.com/services/audit-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Différence entre 30 min offertes et audit Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "30 min offertes : gratuit, qualification d'un cas borné. Audit IA payant : cartographie complète, 6 livrables actionnables." } },
        { "@type": "Question", "name": "Combien coûte un audit IA Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon format et scope. Significativement moins cher qu'un audit cabinet de conseil." } },
        { "@type": "Question", "name": "Combien de temps ?", "acceptedAnswer": { "@type": "Answer", "text": "2 à 6 semaines selon format. Express 2 semaines, Standard 4, Approfondi 6, Post-incident 3." } },
        { "@type": "Question", "name": "Lié à Althoce après l'audit ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Aucune clause d'exclusivité. Les 6 livrables restent actionnables avec n'importe quel prestataire." } },
        { "@type": "Question", "name": "Qualité des chiffrages ROI ?", "acceptedAnswer": { "@type": "Answer", "text": "Méthodologie transparente. Hypothèses explicites. Tableur livré, vous pouvez challenger et recalculer." } },
        { "@type": "Question", "name": "Audit d'une solution déployée par un autre prestataire ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Format Audit Post-incident. On audite l'existant, identifie les causes, propose un plan de remédiation." } }
      ]
    }
  ]
}
```

---

## 16. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 paragraphe principal : liens vers `/services/agents-ia/` et `/services/chatbot-ia/`
- Sec.2 sous-paragraphe : liens vers `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/`, `/services/formation-ia/`
- Sec.3 note sous tableau : pas de lien (c'est l'incitation aux 30 min)
- Sec.4 livrable 05 : lien vers `/services/integration-ia/`
- Sec.4 livrable 06 : lien vers `/services/formation-ia/`
- Sec.5 typologie 03 : lien vers `/#souverainete`
- Sec.10 Q1 : liens vers `/services/agents-ia/` et `/services/chatbot-ia/`
- Sec.10 Q5 : lien vers `/conseil/calculateur-roi-agent-ia/` (ressource publique gratuite)
- Sec.10 Q6 : lien vers `/services/integration-ia/`

### Liens entrants attendus (≥ 5)

- Home (mention "audit" dans la grille des services et dans le funnel découverte)
- Tous les services pilier et satellite Silo 1 (mention "pour cadrer en amont, voir Audit IA")
- Articles blog (cluster "audit IA", "ROI IA", "stratégie IA")
- Cas clients (mention "le projet a démarré par un audit Althoce" quand applicable)
- Page conseil "calculateur ROI" (lien retour mutuel)

---

## 17. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.7), langage visuel pricing home (sec.8), `<SouveraineteSection />` (sec.9), `<CTAFinalSection />` (sec.11), `<Marquee />` (sec.6).

### Composants existants à réutiliser

`<DarkBlock />` (sec.2), `<FAQItem />` (sec.10), `<ComparisonTable />` (sec.3), `<NumberedListVertical />` (sec.4 et sec.5).

### Nouveaux composants à concevoir

- `<AuditReportCoverMockup />` : cadre A4 portrait stylisé pour le hero (sec.1). En-tête, logo carré fictif, date, 6 puces livrables, signature Althoce. Effet ombre subtile. Pas une image PNG, un rendu HTML/CSS.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.16 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Pas de bottom nav "voir aussi". Concrètement : balises `<Link href="/services/...">` directement dans le JSX de chaque section. La sec.16 sert uniquement de récapitulatif pour validation.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous "Services". L'audit IA est souvent le point d'entrée commercial : envisager de le mettre en première position du menu Services après les 3 piliers.
2. **Breadcrumb** : `Accueil → Services → Audit IA`.
3. **Footer** colonne "Services".
4. **Sitemap.xml** avec `<priority>0.8</priority>` (priorité forte car page d'entrée commerciale) et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `Service`, `BreadcrumbList`, `FAQPage` validés.
6. **Pages cousines** : ajouter le lien sortant depuis tous les services Silo 1 et la home (mention "pour cadrer en amont, voir Audit IA").
7. **Reading time** estimé visible : 5 min de lecture.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec mockup couverture rapport audit
- Sec.2 : prose + DarkBlock callout
- Sec.3 : tableau dense 2 colonnes
- Sec.4 : liste verticale numérotée 01→06
- Sec.5 : liste verticale numérotée 01→04
- Sec.6 : Marquee horizontal hérité
- Sec.10 : accordéon vertical

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. Le mockup couverture rapport sec.1 utilise un fond crème ou blanc cassé pour suggérer le papier, en contraste avec le bg noir global de la page.

---

## 18. Informations à valider avant publication

1. ✅ **Pricing arbitré (avril 2026)** : 1 400 € HT (cas simple) / sur devis (audit, système, employé IA, refonte). 30 min offertes avec un expert. Aligné avec home v2 et piliers Silo 1. Aucune fourchette publique mentionnée pour l'audit.
2. **Comparaison cabinet conseil "80 à 200 K€"** sec.3 : confirmer que c'est représentatif du marché 2026 avant publication.
3. **Référence "IA Act" et "HDS / MIFID / RGPD avancé"** sec.5 typologie 03 : confirmer la couverture réelle de ces réglementations dans nos audits sectoriels.
4. **Lien vers `/conseil/calculateur-roi-agent-ia/`** Q5 : vérifier que la ressource existe ou la créer en parallèle.
5. **Délai garanti "2 à 6 semaines"** : confirmer la capacité opérationnelle réelle à respecter ces délais sur tous les formats.

---

*Document de référence rédigé le 2026-05-08. Aligné avec home-v2.md v3 et template Service canonique.*
