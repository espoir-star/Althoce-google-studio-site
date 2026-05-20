# `/agence-ia-paris/` — Silo 3 SEO local (adaptation #1, version mai 2026 v2)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**
>
> **Note v2 (mai 2026)** : refonte structurelle suite feedback. Ancienne section "Quartiers et zones cibles" remplacée par "Pourquoi Althoce" (focus partenaire idéal). Ancienne logique Marquee métiers + Marquee services fusionnée dans une seule section "L'IA transforme chaque métier parisien" avec 4 métiers + Marquee agents. Mention équilibrée présentiel + distanciel.

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 5 | Méthode | `home-v2.md` | `<MethodologySection />` |
| 7 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 8 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> Pas de section Pricing. Aucun prix dans le contenu visible.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero | « Agence IA à Paris : agents IA, automatisation et formation pour PME et ETI franciliennes » |
| `Sous-titre hero` | sec.1 | 2 lignes ancrées Paris + Île-de-France, mention présentiel ET distanciel |
| `Pourquoi Althoce` | sec.2 | Argumentaire partenaire idéal : +150 PME en France, expertise multi-métiers, accompagnement présentiel et distanciel, formation IA, souveraineté France |
| `4 métiers ciblés Paris` | sec.3 | Finance, Commercial, Service client, Marketing (les 4 plus pertinents pour le tissu PME parisien) + Marquee d'agents en dessous |
| `Cas client local` | sec.4 | Cas anonymisé éditeur SaaS B2B parisien (lien vers cas complet) |
| `FAQ locale` | sec.6 | 6 Q/R adaptées Paris (présentiel ET distanciel, formation, expertise multi-métiers, différenciation cabinets parisiens) |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Agences › Paris`
- **CTA primaire** : « Discuter de votre projet → »
- **Pricing** : pas de section pricing. Aucun prix dans le contenu visible.
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **JSON-LD obligatoires** : `LocalBusiness` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns : split éditorial, blocs métier richement présentés (4 max), Marquee horizontal d'agents, accordéon FAQ.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 3 — SEO local** (adaptation #1, Paris)

### Rôle dans l'architecture

Page SEO local prioritaire numéro 1 du Silo 3. Captation du trafic local francilien (25 % des PME françaises). **Le focus est sur Althoce comme partenaire idéal**, pas sur la géographie parisienne en soi : présentiel + distanciel, expertise multi-métiers, formation IA, souveraineté France. La ville sert d'ancrage SEO et de point d'entrée local.

### Objectif trafic

1. Capter « agence IA Paris », « agence IA Île-de-France », « consultant IA Paris », « automatisation Paris », « IA PME Paris ».
2. Convertir sur RDV (présentiel possible à Paris, distanciel sans contrainte géographique).
3. Renforcer le SEO local global et le maillage régional.

### Mots-clés cibles principaux

agence IA Paris · agence IA Île-de-France · consultant IA Paris · automatisation Paris · IA PME Paris · agent IA Paris · formation IA Paris · IA cabinet Paris

### Mots-clés longue traîne

« meilleure agence IA Paris pour PME », « agence IA française à Paris souverain », « formation IA Paris pour équipes », « consultant IA Paris distanciel et présentiel »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agence IA à Paris : agents IA, automatisation et formation pour PME et ETI franciliennes | Althoce</title>

<meta name="description" content="Althoce, agence IA française qui accompagne les PME et ETI à Paris et partout en France. Présentiel possible à Paris, distanciel sans contrainte, formation IA pour vos équipes, souveraineté France garantie. +150 PME équipées. 30 min offertes avec un expert.">

<meta name="keywords" content="agence IA Paris, agence IA Île-de-France, consultant IA Paris, automatisation Paris, IA PME Paris, agent IA Paris, formation IA Paris">

<link rel="canonical" href="https://althoce.com/agence-ia-paris/">

<meta property="og:title" content="Agence IA à Paris : agents IA, automatisation et formation pour PME franciliennes | Althoce">
<meta property="og:description" content="L'agence IA française qui accompagne vos équipes. Présentiel à Paris + distanciel, souveraineté France, +150 PME équipées.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agence-ia-paris/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite carte SVG France avec Paris mis en avant + indicateurs présentiel/distanciel |
| 2 | 🟢 Pourquoi Althoce | Propre | Liste verticale numérotée 5 raisons + callout `<DarkBlock />` présentiel + distanciel + formation |
| 3 | 🟢 L'IA transforme chaque métier parisien | Propre | 4 blocs métier richement présentés (alternance gauche/droite) + Marquee d'agents en dessous |
| 4 | 🟢 Cas client parisien | Propre | Bloc éditorial avec citation + KPI |
| 5 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 6 | 🟢 FAQ locale Paris | Propre | Accordéon `<FAQItem />` |
| 7 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 8 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : carte SVG France stylisée avec Paris marquée en azure plus marqué (point d'ancrage), pictogrammes "présentiel" et "distanciel" en surbrillance pour signaler les 2 modes d'accompagnement.

### H1

> **Agence IA à Paris : agents IA, automatisation et formation pour PME et ETI franciliennes.**

### Sous-titre (2 lignes)

> Vous dirigez une PME ou une ETI à Paris ou en Île-de-France. Althoce vous accompagne avec une présence parisienne pour les RDV stratégiques en présentiel, un distanciel structuré pour la phase de build et de suivi, et une expertise sur les 8 métiers cœur de l'entreprise.

### Pills (3 max)

> +150 PME équipées en France · Présentiel + distanciel · Premier agent en 1 semaine

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Pourquoi nous choisir ↓ *(ancre `#pourquoi`)*

### Note Claude Design

Composant `<HeroCityMapMockup />` à concevoir (réutilisable pour les 19 pages SEO local) : carte SVG France stylisée avec une ville mise en avant en azure, deux pictogrammes annexes (présentiel + distanciel) en évidence. Mention "+150 PME équipées en France" en pied de carte.

---

## 5. Section 2 — Pourquoi Althoce *(ancre `#pourquoi`)*

### H2

> **Pourquoi travailler avec Althoce pour votre projet IA à Paris**

### Sous-titre

> Vous avez le choix entre plusieurs prestataires IA en Île-de-France. Voici cinq raisons concrètes qui nous distinguent et qui expliquent pourquoi +150 PME françaises nous ont déjà fait confiance.

### Liste verticale numérotée 01→05 (`<NumberedListVertical />`)

**01. Expertise opérationnelle sur les 8 métiers cœur de l'entreprise**

> Nous ne sommes pas généralistes. Nous avons déployé des agents IA dans tous les métiers de PME : [finance](/agent-ia/finance/), [commercial](/agent-ia/commercial/), [service client](/agent-ia/service-client/), [marketing](/agent-ia/marketing/), [RH](/agent-ia/rh/), [ops](/agent-ia/ops/), [juridique](/agent-ia/juridique/), [achats](/agent-ia/achats/). Cette profondeur multi-métiers nous permet de **comprendre votre quotidien rapidement** sans courbe d'apprentissage facturée à votre charge.

**02. Présentiel à Paris ET distanciel structuré : vous choisissez le mode qui sert le projet**

> Pour les phases stratégiques (cadrage initial, ateliers, présentations COMEX), nous nous déplaçons régulièrement à Paris intra-muros (8ᵉ, 9ᵉ, 10ᵉ, 11ᵉ, 16ᵉ, 17ᵉ), à La Défense, à Issy-les-Moulineaux, Boulogne, Levallois-Neuilly, ainsi que sur l'ensemble de la première et grande couronne d'Île-de-France. Pour les phases de build et de suivi (qui composent 70 % du projet), notre **mode distanciel structuré** vous fait gagner du temps : pas de logistique réunion, échanges asynchrones documentés, points hebdomadaires de 30 minutes. Les clients qui veulent du tout-distanciel le peuvent aussi, c'est notre standard pour la majorité des projets.

**03. Formation IA pour vos équipes pour autonomiser le pilotage**

> Au-delà du déploiement technique, nous proposons des [ateliers de formation IA](/services/formation-ia/) pour vos équipes parisiennes : utiliser Claude et ChatGPT au quotidien, bonnes pratiques sécurité, comprendre les agents IA. Ateliers dispensés en présentiel dans vos locaux (Paris, La Défense, première couronne) ou en distanciel synchrone selon votre préférence. C'est la condition pour que vos équipes pilotent les outils déployés au lieu de les subir. Format sur-mesure, ateliers de 4h à 21h selon vos besoins.

**04. Souveraineté France par défaut**

> Notre stack standard est française : Mistral hébergé en France (OVH, Scaleway), infrastructure auto-hébergeable, aucune donnée nominative envoyée à OpenAI ou Anthropic sans accord client explicite. Particulièrement pertinent pour les ETI franciliennes soumises à des contraintes secteur sensible : **finance à La Défense**, **santé et biotech à Saclay et Paris 13ᵉ**, **défense et aérospatial en grande couronne**, **énergie et services publics**. Voir [Souveraineté](/#souverainete).

**05. Premier agent en 1 semaine, ROI mesurable en moins de 6 mois**

> Pas de PowerPoint à 100 000 € en 6 mois. Pas de POC qui dort dans un coin. **Un agent IA simple est en production sous une semaine** après cadrage signé. Le ROI typique se mesure en moins de 6 mois sur les cas concrets : +758 agents déjà en production, +5 M€ d'économies cumulées documentées. Voir [Cas clients](/cas-clients/) pour les preuves chiffrées.

### Callout `<DarkBlock />`

> **Présentiel OU distanciel : c'est vous qui décidez selon le projet**
>
> Nos clients parisiens se répartissent en trois groupes : 30 % préfèrent le présentiel intégral (RDV physique régulier, ateliers chez eux), 50 % choisissent un mix hybride (présentiel pour le stratégique, distanciel pour le build), 20 % travaillent en tout-distanciel. Vous choisissez. **Nos délais et notre qualité sont identiques quelle que soit la modalité.** Pas de pénalité distanciel, pas de surcharge présentiel.

---

## 6. Section 3 — L'IA transforme chaque métier parisien

### H2

> **L'IA transforme chaque métier parisien**

### Sous-titre

> Quatre métiers où nos agents IA ont déjà transformé le quotidien de PME et ETI franciliennes, du 8ᵉ arrondissement à La Défense, de Boulogne à Saint-Denis. Pour la liste complète des 8 métiers couverts, voir notre [hub agents IA par fonction](/agent-ia/).

### 4 blocs métier richement présentés (`<MetierBlockSplit />`, alternance gauche/droite)

**01. Finance et comptabilité** *(image / mockup à droite)*

[Agent IA pour la finance et la comptabilité →](/agent-ia/finance/)

> Les cabinets d'expertise comptable parisiens (forte densité dans le 8ᵉ, 9ᵉ, 16ᵉ et 17ᵉ), les directions financières de PME franciliennes et les services compta de SaaS B2B absorbent 60 à 80 % de saisie répétitive (factures fournisseurs, rapprochement bancaire, écritures, reporting). Notre cas signature : un cabinet d'expertise comptable du 16ᵉ a doublé sa capacité gérée en 4 mois sans recruter, avec souveraineté Mistral France garantie. **Public type Paris** : cabinets d'expertise comptable 8ᵉ / 9ᵉ / 16ᵉ / 17ᵉ, directions financières d'ETI franciliennes, services compta de SaaS B2B au Sentier numérique et à La Défense.

**02. Commercial** *(image / mockup à gauche)*

[Agent IA pour le commercial →](/agent-ia/commercial/)

> Les équipes commerciales parisiennes (scale-up tech du 9ᵉ, 10ᵉ et 11ᵉ, ESN à La Défense, agences B2B à Levallois et Neuilly) sont saturées par la prospection, la qualification de leads inbound et le suivi pipeline. Nos agents IA SDR absorbent ces tâches, les commerciaux humains se concentrent sur le closing et la négociation grands comptes. **Cas type Paris** : éditeur SaaS B2B 11ᵉ qui qualifie 100 % des leads inbound en moins de 5 minutes vs 18h avant déploiement.

**03. Service client** *(image / mockup à droite)*

[Agent IA pour le service client →](/agent-ia/service-client/)

> Les SaaS B2B parisiens (Station F, 11ᵉ, 9ᵉ-10ᵉ) et les e-commerces franciliens (Boulogne, Issy-les-Moulineaux, Saint-Denis pour la logistique) croulent sous les tickets répétitifs (réinitialisation, statut commande, FAQ produit). Notre agent IA absorbe 70 % du niveau 1 en autonomie, les agents humains se concentrent sur les cas complexes et la satisfaction client. **Cas signature Paris** : éditeur SaaS B2B 11ᵉ, 8 000 clients PME, CSAT en hausse de 12 points en 3 mois.

**04. Marketing et content** *(image / mockup à gauche)*

[Agent IA pour le marketing →](/agent-ia/marketing/)

> Les équipes marketing parisiennes (agences communication du 8ᵉ et du 17ᵉ, équipes content de scale-up au Sentier numérique 9ᵉ-10ᵉ, studios créatifs à Issy-les-Moulineaux et Boulogne) sont sous-dimensionnées par rapport à l'ambition éditoriale de leur direction. Notre agent IA produit du contenu multi-canal au ton de marque (articles SEO, posts LinkedIn, newsletters, séquences email segmentées) sans dégradation qualitative. **Cas type Paris** : éditeur SaaS B2B 9ᵉ qui a multiplié sa production contenu par 4 sans recruter.

### Marquee d'agents en dessous (`<Marquee />`)

> **🏠 Section semi-héritée. Réutilisation stricte du composant `<Marquee />` de la home.**
>
> Le défilement horizontal infini liste les agents IA Althoce du catalogue (factures fournisseurs, rapprochement bancaire, SDR, qualification inbound, support N1, tri CV, content marketing, etc.). Permet au visiteur de voir au-delà des 4 métiers présentés au-dessus que la palette Althoce est plus large.

### Note sous le Marquee

> Au total, nous couvrons 8 métiers cœur et la modalité transverse téléphonique. Pour explorer l'ensemble, voir notre [hub agents IA par fonction](/agent-ia/).

---

## 7. Section 4 — Cas client parisien

### H2

> **Cas client parisien : éditeur SaaS B2B 11ᵉ, 70 % du support N1 absorbé en 4 semaines**

### Bandeau d'identité

> *Éditeur SaaS B2B · 120 collaborateurs · 8 000 clients PME · Paris 11ᵉ · 2025-2026 · cas anonymisé*

### Résultat principal

> **70 % du N1 absorbé**
>
> Temps de première réponse 18h → 4 minutes · CSAT +12 points · 0 départ équipe support · 4 embauches annulées (240 k€/an économisés)

### Récit court

> L'éditeur SaaS parisien gérait 200 tickets support par jour avec 12 agents. 70 % des tickets étaient répétitifs. La VP Customer Operations cherchait une alternative aux 4 embauches estimées nécessaires. L'agent IA Althoce intégré à Zendesk a été déployé en 4 semaines, en mode hybride présentiel/distanciel (cadrage présentiel au 11ᵉ, build distanciel). Aujourd'hui, l'éditeur a redéployé son budget recrutement sur 2 customer success managers à plus forte valeur ajoutée. CSAT +12 points. Aucun départ d'équipe support sur 12 mois.

### Lien vers le cas complet

> [Lire le cas client complet →](/cas-clients/saas-b2b-agent-ia-service-client/)

---

## 8. Section 5 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 9. Section 6 — FAQ locale Paris (6 Q/R)

### H2

> **Questions fréquentes : Althoce à Paris et en Île-de-France**

### Liste accordéon `<FAQItem />`

**Q1. Présentiel à Paris ou distanciel : qu'est-ce qui change pour mon projet ?**

Rien sur la qualité ni les délais. Nous délivrons exactement les mêmes prestations en présentiel et en distanciel. Le présentiel est pertinent en phase de cadrage initial (compréhension du contexte, rencontres équipes), pour les ateliers stratégiques (validation périmètre, choix agents prioritaires), et pour les présentations COMEX ou direction. La phase de build (qui représente 60 à 70 % du projet) se fait en distanciel structuré avec points hebdomadaires de 30 minutes. **Vous choisissez la modalité en fonction de votre préférence**, pas de la nôtre.

**Q2. Avez-vous une équipe basée à Paris ?**

Une partie de notre équipe est basée à Paris pour les RDV présentiels et les ateliers stratégiques. Le reste de l'équipe (build, support, monitoring) opère en mode distribué France métropolitaine. Tous nos collaborateurs sont français et basés en France (cohérent avec notre engagement souveraineté).

**Q3. Proposez-vous des formations IA pour mes équipes parisiennes ?**

Oui. Nos [ateliers de formation IA](/services/formation-ia/) sont adaptés aux équipes parisiennes : ateliers en présentiel dans vos locaux ou les nôtres, ou en distanciel synchrone selon votre préférence. Formats : 4h à 21h selon vos objectifs (utilisation Claude/ChatGPT au quotidien, bonnes pratiques sécurité, comprendre les agents IA, manager une équipe avec l'IA). Programme adapté à chaque équipe métier (commerciale, RH, marketing, finance).

**Q4. Mes données restent-elles en France si je travaille avec une agence parisienne ?**

Oui, par défaut. Notre infrastructure est hébergée en France (OVH Bordeaux, Scaleway Paris), nos modèles LLM par défaut sont **Mistral hébergé France**. Pour les clients qui acceptent les modèles propriétaires (OpenAI, Anthropic) sur des cas non sensibles, l'anonymisation des données personnelles est appliquée systématiquement. Voir [Souveraineté](/#souverainete) pour le détail.

**Q5. Quelle est la différence entre votre approche et celle des grands cabinets parisiens (BCG, McKinsey, Accenture) ?**

Trois différences. **Délai** : nous livrons un agent IA en production en 1 semaine, là où un cabinet conseil livre un PowerPoint stratégique en 6 mois. **Livrable** : nous livrons du code de production prêt à l'emploi, pas une note d'orientation. **Coût** : significativement inférieur sur les phases opérationnelles. Nous sommes complémentaires, pas concurrents, des grands cabinets : nous livrons l'opérationnel, ils livrent la stratégie d'ensemble. Voir [Audit IA](/services/audit-ia/) pour notre format de cadrage stratégique.

**Q6. Vos clients sont-ils tous parisiens ?**

Environ 75 % de nos clients ont leur direction à Paris ou en Île-de-France (cohérent avec la densité PME-ETI nationale). Les 25 % restants sont répartis sur les autres métropoles françaises (Lyon, Marseille, Toulouse, Lille, Nantes, etc.). Tous nos déploiements suivent la même méthode et la même qualité, présentiel ou distanciel.

---

## 10. Section 7 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 11. Section 8 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 12. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://althoce.com/agence-ia-paris/#localbusiness",
      "name": "Althoce — Agence IA à Paris",
      "description": "Agence IA française qui accompagne les PME et ETI à Paris et partout en France. Présentiel à Paris, distanciel sans contrainte, formation IA pour vos équipes, souveraineté France.",
      "url": "https://althoce.com/agence-ia-paris/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.8566",
        "longitude": "2.3522"
      },
      "areaServed": [
        { "@type": "City", "name": "Paris" },
        { "@type": "AdministrativeArea", "name": "Île-de-France" },
        { "@type": "Country", "name": "France" }
      ],
      "serviceType": "AI agency, AI agents, automation and training for PMEs and ETIs"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Agences", "item": "https://althoce.com/agences/" },
        { "@type": "ListItem", "position": 3, "name": "Paris", "item": "https://althoce.com/agence-ia-paris/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Présentiel ou distanciel : différence pour mon projet ?", "acceptedAnswer": { "@type": "Answer", "text": "Aucune sur la qualité et les délais. Présentiel pertinent en cadrage et ateliers. Build en distanciel structuré. Vous choisissez la modalité." } },
        { "@type": "Question", "name": "Équipe basée à Paris ?", "acceptedAnswer": { "@type": "Answer", "text": "Une partie à Paris pour RDV présentiels. Reste en mode distribué France. Tous collaborateurs français basés en France." } },
        { "@type": "Question", "name": "Formations IA pour équipes parisiennes ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Ateliers 4h à 21h, présentiel ou distanciel, adaptés par métier (commercial, RH, marketing, finance)." } },
        { "@type": "Question", "name": "Données en France ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral hébergé France, OVH/Scaleway. Anonymisation sur modèles propriétaires si choix client." } },
        { "@type": "Question", "name": "Différence vs BCG/McKinsey/Accenture ?", "acceptedAnswer": { "@type": "Answer", "text": "Délai (1 semaine vs 6 mois), livrable (code production vs PowerPoint), coût inférieur. Complémentaires, pas concurrents." } },
        { "@type": "Question", "name": "Clients tous parisiens ?", "acceptedAnswer": { "@type": "Answer", "text": "75 % direction Paris ou Île-de-France. 25 % autres métropoles. Même méthode et qualité partout." } }
      ]
    }
  ]
}
```

---

## 13. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 raison 01 : liens vers les 8 pages métier (`/agent-ia/finance/`, `/agent-ia/commercial/`, `/agent-ia/service-client/`, `/agent-ia/marketing/`, `/agent-ia/rh/`, `/agent-ia/ops/`, `/agent-ia/juridique/`, `/agent-ia/achats/`)
- Sec.2 raison 03 : lien vers `/services/formation-ia/`
- Sec.2 raison 04 : lien vers `/#souverainete`
- Sec.2 raison 05 : lien vers `/cas-clients/`
- Sec.3 4 blocs métier : 4 liens vers les pages métier correspondantes
- Sec.3 note sous Marquee : lien vers `/agent-ia/`
- Sec.4 cas client : lien vers `/cas-clients/saas-b2b-agent-ia-service-client/`
- Sec.9 Q3 : lien vers `/services/formation-ia/`
- Sec.9 Q4 : lien vers `/#souverainete`
- Sec.9 Q5 : lien vers `/services/audit-ia/`

### Liens entrants attendus

- Home (mention "Paris" dans section présence locale)
- `/agences/` (hub SEO local quand créé)
- Toutes les pages métier (cross-link vers cette page)
- `/cas-clients/saas-b2b-agent-ia-service-client/` (cross-link régional)

---

## 14. Notes Claude Design

### Composants HOME

`<MethodologySection />`, `<SouveraineteSection />`, `<CTAFinalSection />`, `<Marquee />`.

### Composants existants à réutiliser

`<DarkBlock />`, `<FAQItem />`, `<NumberedListVertical />`, `<MetierBlockSplit />` (du hub `/agent-ia/`).

### Nouveaux composants à concevoir

- `<HeroCityMapMockup />` : carte SVG France hero avec ville mise en avant en azure + pictogrammes "présentiel" et "distanciel" (sec.1). Composant réutilisable pour les 19 pages SEO local.

### Règle d'intégration au site

1. **Menu principal** : sous-menu "Agences" listant les villes, Paris en première position.
2. **Breadcrumb** : `Accueil → Agences → Paris`.
3. **Footer** : section "Agences".
4. **Sitemap.xml** avec `<priority>0.7</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD validé.
6. **Pages cousines** : ajouter le lien depuis la home et depuis le hub `/agences/`.
7. **Reading time** : 5 min.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec carte SVG France
- Sec.2 : liste verticale numérotée 01→05 + DarkBlock callout
- Sec.3 : 4 blocs métier alternance zig-zag + Marquee en dessous
- Sec.6 : accordéon FAQ

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`. Inter / Satoshi. La carte SVG France met visuellement en avant Paris (azure marqué) tout en gardant les autres villes du portefeuille Althoce en azure dégradé léger (signal que nous couvrons toute la France).

---

## 15. Informations à valider avant publication

1. ✅ **Pricing** : pas de prix dans le contenu visible.
2. **Stat "75 % de nos clients en Île-de-France"** : confirmer sur le portefeuille réel.
3. **Stat "30 % préfèrent présentiel, 50 % hybride, 20 % distanciel"** : confirmer sur les habitudes réelles de nos clients parisiens.
4. **Mention "équipe partiellement basée à Paris"** Q2 : confirmer la réalité opérationnelle (combien de collaborateurs basés à Paris).
5. **Cas client SaaS B2B parisien 11ᵉ** : cohérent avec `/cas-clients/saas-b2b-agent-ia-service-client/`. Localisation Paris 11ᵉ à confirmer (cas anonymisé donc flexible).
6. **4 métiers présentés sec.3** (finance, commercial, service client, marketing) : valider que c'est bien les 4 plus pertinents pour le tissu PME parisien (alternative possible : remplacer marketing par juridique pour cibler les cabinets professionnels parisiens denses).

---

*Document de référence rédigé le 2026-05-08, refondu v2. Adaptation #1 du template SEO local (Paris). Focus Althoce comme partenaire idéal, présentiel + distanciel + formation. 4 métiers maximum sec.3 + Marquee d'agents en dessous.*
