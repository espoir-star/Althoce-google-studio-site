# `/services/` — Hub Silo 1 · Vue d'ensemble des 7 services Althoce

> **Cette page est un hub de navigation Silo 1. Elle ne suit pas le template Service canonique : elle agrège, oriente et qualifie l'intention du visiteur vers les 7 services satellites.**

---

## 0. Préambule

### Rôle dans l'architecture

Le hub `/services/` est le point d'entrée central du Silo 1. Il s'adresse à un visiteur qui sait qu'il a un besoin IA mais qui ne sait pas encore quel service Althoce répond précisément à son cas. La page le guide vers le bon service en moins de 30 secondes via un mini-questionnaire visuel ou via la liste des 7 services. Elle hérite du langage visuel de la home (Méthode, Pricing, Souveraineté, CTA final) pour rester cohérente avec le reste du site.

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 4 | Méthode | `home-v2.md` | `<MethodologySection />` |
| 5 | Pricing | `home-v2.md` | langage visuel pricing home |
| 6 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 8 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero | « Tous nos services IA. Du chatbot à 1 400 € HT à l'employé IA dédié à un poste. » |
| `Sous-titre` | Hero | 1 ligne qui pose la promesse Silo 1 |
| `Quizz d'orientation` | sec.2 | 3 questions courtes pour orienter vers le bon service |
| `Liste des 3 piliers` | sec.3 | Présentation visuelle des 3 produits cœur (agents-ia, automatisation-ia, employé IA) |
| `Liste des 4 satellites` | sec.4 | Présentation visuelle des 4 services support (développement, chatbot, intégration, formation, audit) |
| `FAQ hub` | sec.7 | 5 Q/R d'orientation |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Services`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers le quizz d'orientation
- **Pricing affiché** : 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte)
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **JSON-LD obligatoires** : `CollectionPage` + `BreadcrumbList` + `ItemList` (les 7 services)

### Règle créativité visuelle

Pas de grille de cartes 3×3 par défaut. Patterns par section : split éditorial hero, quizz interactif vertical, listes éditoriales avec hiérarchie visuelle (les 3 piliers en grand, les 4 satellites plus petits), Marquee, accordéon FAQ. Aucun label décoratif.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 1, hub Services**

### Objectif trafic

1. Capter "services IA agence", "agence IA services", "services automatisation IA", "agence IA française services".
2. Servir de page d'orientation : un visiteur qui ne sait pas quel service il veut atterrit ici et trouve sa direction en moins de 30 secondes.
3. Distribuer vers les 7 pages services satellites.

### Mots-clés cibles principaux

services IA · services agence IA · agence IA services · automatisation IA services · solutions IA entreprise · prestations IA · services IA PME · catalogue services IA

### Mots-clés longue traîne

« quel service IA pour ma PME », « comparatif services IA agence française », « services IA souverains France »

---

## 2. Title / Meta description / Open Graph

```html
<title>Tous nos services IA pour PME et ETI : agents, automatisation, employé IA, audit | Althoce</title>

<meta name="description" content="Le catalogue complet des services IA Althoce : 3 piliers (agents IA, automatisation, employé IA) et 4 services support (développement, chatbot, intégration, formation, audit). Souverains, français, à partir de 1 400 € HT.">

<meta name="keywords" content="services IA, agence IA services, automatisation IA services, solutions IA entreprise, prestations IA, services IA PME">

<link rel="canonical" href="https://althoce.com/services/">

<meta property="og:title" content="Tous nos services IA pour PME et ETI | Althoce">
<meta property="og:description" content="Du chatbot à 1 400 € HT à l'employé IA dédié à un poste. 7 services pour couvrir tous les besoins IA d'une PME ou ETI française.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : H1+CTA à gauche, à droite mini-cartographie visuelle des 7 services (treemap léger) |
| 2 | 🟢 Quizz d'orientation 3 questions | Propre | Composant interactif vertical |
| 3 | 🟢 3 piliers Silo 1 (présentation détaillée) | Propre | Format split éditorial vertical, 1 pilier par bloc, alternance gauche/droite |
| 4 | 🟢 4 satellices Silo 1 (présentation condensée) | Propre | Liste verticale numérotée 01→04 |
| 5 | 🏠 Méthode | Hérité home | `<MethodologySection />` |
| 6 | 🏠 Pricing | Hérité home | langage visuel pricing home |
| 7 | 🏠 Souveraineté | Hérité home | `<SouveraineteSection />` |
| 8 | 🟢 FAQ hub d'orientation | Propre | Accordéon `<FAQItem />` |
| 9 | 🏠 CTA final | Hérité home | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mini-cartographie visuelle des 7 services en treemap léger. Trois grands blocs (les 3 piliers : agents IA, automatisation, employé IA) avec accent azure, et 4 blocs plus petits autour (développement, chatbot, intégration, formation, audit). Chaque bloc est cliquable et renvoie directement vers la page service correspondante.

### H1

> **Tous nos services IA. Du chatbot à 1 400 € HT à l'employé IA dédié à un poste.**

### Sous-titre (1 ligne)

> Trois produits cœur, quatre services support. Pour les PME et ETI françaises qui veulent passer à l'action sans dépendre d'un cabinet de conseil ni d'un SaaS américain.

### Pills (3 max)

> 7 services intégrés · +758 agents en production · 100 % souverain France

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Trouver le bon service en 3 questions ↓ *(ancre `#orientation`)*

### Note Claude Design

Le treemap à droite est un composant `<ServicesMapVisual />` à concevoir. Trois grands blocs (les piliers) en haut + 4 blocs plus petits en dessous. Survol révèle un titre court + description en une ligne. Click renvoie vers la page service correspondante. Pas une image PNG.

---

## 5. Section 2 — Quizz d'orientation *(ancre `#orientation`)*

### H2

> **Quel service Althoce pour vous ? Trois questions pour vous orienter.**

### Sous-titre

> Plutôt qu'une grille générique, trois questions courtes vous orientent vers le service le plus adapté à votre besoin actuel. Vous pouvez aussi parcourir directement la liste plus bas.

### Composant `<ServiceWizard />` (à concevoir)

Trois questions séquentielles, une réponse par question, animations de transition douces.

**Question 1. Quel est votre besoin principal aujourd'hui ?**

- A. Automatiser une tâche répétitive précise (saisie, mail, classification) → orienté **Agents IA**
- B. Couvrir un poste entier qui n'est plus tenable en interne (SDR, support, comptable, ops) → orienté **Employé IA**
- C. Avoir un assistant qui répond aux questions de mes visiteurs ou collaborateurs → orienté **Chatbot IA**
- D. Refondre un processus métier complet avec l'IA au centre → orienté **Automatisation IA**
- E. Cartographier mes opportunités IA avant d'investir → orienté **Audit IA**

**Question 2. Avez-vous déjà déployé une solution IA dans votre entreprise ?**

- Oui, et tout va bien → on continue vers le service identifié en Q1
- Oui, mais ça pose problème → orientation conditionnelle vers **Audit IA Post-incident** ou **Intégration IA**
- Non, c'est notre premier projet IA → on continue vers le service identifié en Q1, avec une note d'accompagnement

**Question 3. Quelle est votre maturité interne ?**

- Une équipe IT / DSI structurée qui peut piloter techniquement → orienté **Développement IA** + service identifié
- Pas d'équipe IT mature → orienté service identifié + **Formation IA** en complément

### Note sous le quizz

> Le quizz vous oriente, il ne décide pas. Vous pouvez à tout moment réserver les **30 minutes offertes avec un expert** pour valider votre orientation et obtenir un devis ferme.

---

## 6. Section 3 — Les 3 piliers Silo 1

### H2

> **Trois produits cœur, trois échelles de besoin**

### Sous-titre

> 80 % de nos clients démarrent par l'un de ces trois produits. Ils répondent à trois échelles de besoin distinctes, du plus borné au plus ambitieux.

### Bloc 1. Agents IA (split éditorial, image à gauche)

**Titre** : [Agents IA sur-mesure](/services/agents-ia/)

**Sous-titre** : Un cas d'usage borné, automatisé de bout en bout

**Description (3 à 4 lignes)** : Un agent IA Althoce absorbe une tâche répétitive précise dans votre quotidien : qualification de leads, traitement de factures, classification de mails, génération de rapports. Tarif fixe **1 400 € HT** (1 cas d'usage borné, 1 semaine de delivery). Le format d'entrée le plus utilisé chez nos clients PME en 2026.

**CTA** : [Découvrir les agents IA →](/services/agents-ia/)

### Bloc 2. Automatisation IA (split éditorial, image à droite)

**Titre** : [Automatisation IA agentique](/services/automatisation-ia/)

**Sous-titre** : Un processus métier complet, repensé avec l'IA au centre

**Description (3 à 4 lignes)** : Pour les processus qui dépassent un agent unitaire : ADV, support, comptabilité, RH, ops. Plusieurs agents orchestrés ensemble sur un flux cohérent. Sur devis. Délai 4 à 8 semaines. Voir les 12 cas concrets que nous avons déjà livrés sur la page dédiée.

**CTA** : [Voir les cas d'automatisation →](/services/automatisation-ia/)

### Bloc 3. Employé IA (split éditorial, image à gauche)

**Titre** : [Employé IA dédié à un poste](/services/employe-ia/)

**Sous-titre** : Un membre d'équipe IA à temps plein, intégré à votre culture

**Description (3 à 4 lignes)** : Pas un agent. Pas un chatbot. Un poste entier couvert : SDR, support 24/7, comptable, ops back-office, RH. Mémoire long-terme, identité de marque, rituels d'équipe (stand-ups, revue mensuelle). Sur devis. 6 à 12 semaines de delivery. Le format le plus radical, pour les structures dont un poste n'est plus tenable en interne.

**CTA** : [Découvrir l'employé IA →](/services/employe-ia/)

---

## 7. Section 4 — Les 4 services support Silo 1

### H2

> **Quatre services support pour sécuriser vos déploiements IA**

### Sous-titre

> Au-delà des produits cœur, quatre services support adressent les questions techniques, organisationnelles et stratégiques qui se posent autour d'un déploiement IA.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. [Développement IA sur-mesure](/services/developpement-ia/)**

> Vous voulez du code de production, pas du no-code orchestré. Stack maîtrisée Python + TypeScript + n8n + LangGraph. Code livré au client, pas de lock-in. Pour les DSI exigeants.

**02. [Chatbot IA RAG](/services/chatbot-ia/)**

> Pas un chatbot scripté. Un chatbot RAG ancré sur votre base de connaissances (FAQ, docs, intranet). Cite ses sources, escalade quand il ne sait pas. **1 400 € HT** pour un chatbot simple.

**03. [Intégration IA dans votre SI](/services/integration-ia/)**

> SSO, RBAC, audit log, monitoring, fallback humain, kill switch. Pour que vos agents IA passent un audit ISO 27001, un comité sécurité DSI, une revue RGPD.

**04. [Formation IA pour vos équipes](/services/formation-ia/)**

> Qualiopi, finançable OPCO. Trois niveaux : utilisateur, pilote, architecte. Contextualisée sur vos agents Althoce déployés. Pas une formation IA généraliste type "Maîtrisez ChatGPT".

**05. [Audit IA stratégique](/services/audit-ia/)**

> Cartographie chiffrée des opportunités IA dans votre entreprise. 6 livrables actionnables. Pas un PowerPoint de cabinet de conseil. 4 formats : Express, Standard, Approfondi, Post-incident.

### Note sous la liste

> Pas sûr du service qui vous convient ? Le [quizz d'orientation](#orientation) plus haut vous guide en 3 questions, ou les **30 minutes offertes avec un expert** valident votre choix avec un devis ferme.

---

## 8. Section 5 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />`.**
> Aucun contenu textuel à fournir ici.

---

## 9. Section 6 — Pricing (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte). 30 minutes offertes avec un expert.**
> Aucun contenu textuel à fournir ici.

---

## 10. Section 7 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />`.**

---

## 11. Section 8 — FAQ hub d'orientation (5 Q/R)

### H2

> **Questions fréquentes pour vous orienter**

### Liste accordéon `<FAQItem />`

**Q1. Par quel service commencer quand on n'a jamais déployé d'IA ?**

Dans 80 % des cas, le bon point d'entrée est un [agent IA simple](/services/agents-ia/) à 1 400 € HT (1 cas d'usage borné, 1 semaine de delivery). C'est un projet calibré, mesurable, à fort ROI immédiat. Si vous avez un site avec beaucoup de visiteurs et une FAQ à valoriser, un [chatbot RAG](/services/chatbot-ia/) est aussi un excellent premier projet. Si vous cherchez à cartographier l'ensemble avant de vous engager, l'[audit IA](/services/audit-ia/) est conçu pour ça.

**Q2. Qu'est-ce qui différencie agent IA, automatisation IA, et employé IA ?**

Trois échelles distinctes. Un [agent IA](/services/agents-ia/) couvre 1 cas d'usage borné (qualifier un lead, traiter une facture). Une [automatisation IA](/services/automatisation-ia/) chaîne plusieurs agents sur un processus métier complet (ADV, support, comptabilité). Un [employé IA](/services/employe-ia/) couvre un poste entier (SDR, support 24/7, comptable) avec mémoire, identité de marque et rituels d'équipe. Pricing : 1 400 € HT pour l'agent simple, sur devis pour les deux autres.

**Q3. Comment se passe la première prise de contact ?**

Trois étapes. Vous prenez les **30 minutes offertes avec un expert** via le bouton "Discuter de votre projet". On qualifie votre besoin en 30 minutes (cas, périmètre, contraintes, urgence). On vous envoie un devis ferme sous 5 jours ouvrés. Vous décidez de signer ou pas, sans engagement.

**Q4. Quel service pour une entreprise qui a déjà déployé une solution IA qui pose problème ?**

L'[audit IA Post-incident](/services/audit-ia/) (typologie 04). Nous auditons l'existant, identifions les causes des dérives, et proposons un plan de remédiation. Le service [Intégration IA](/services/integration-ia/) intervient ensuite pour mettre en place la couche gouvernance qui aurait dû être présente : SSO, RBAC, audit log, monitoring, kill switch.

**Q5. Faut-il combiner plusieurs services ?**

Souvent, oui. Un déploiement type combine généralement : (1) un audit ou les 30 minutes offertes pour cadrer, (2) un produit cœur (agent, automatisation, ou employé IA), (3) une intégration IA pour la couche gouvernance, (4) une formation IA pour outiller les équipes en interne. Le bon mix se définit au cadrage.

---

## 12. Section 9 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 13. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://althoce.com/services/#collection",
      "name": "Services IA Althoce",
      "description": "Catalogue des 7 services IA Althoce : 3 piliers (agents IA, automatisation IA, employé IA) et 4 services support (développement, chatbot, intégration, formation, audit).",
      "url": "https://althoce.com/services/"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Services Althoce",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://althoce.com/services/agents-ia/", "name": "Agents IA sur-mesure" },
        { "@type": "ListItem", "position": 2, "url": "https://althoce.com/services/automatisation-ia/", "name": "Automatisation IA agentique" },
        { "@type": "ListItem", "position": 3, "url": "https://althoce.com/services/employe-ia/", "name": "Employé IA dédié à un poste" },
        { "@type": "ListItem", "position": 4, "url": "https://althoce.com/services/developpement-ia/", "name": "Développement IA sur-mesure" },
        { "@type": "ListItem", "position": 5, "url": "https://althoce.com/services/chatbot-ia/", "name": "Chatbot IA RAG" },
        { "@type": "ListItem", "position": 6, "url": "https://althoce.com/services/integration-ia/", "name": "Intégration IA dans le SI" },
        { "@type": "ListItem", "position": 7, "url": "https://althoce.com/services/formation-ia/", "name": "Formation IA pour entreprises" },
        { "@type": "ListItem", "position": 8, "url": "https://althoce.com/services/audit-ia/", "name": "Audit IA stratégique" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Par quel service commencer ?", "acceptedAnswer": { "@type": "Answer", "text": "Dans 80 % des cas : agent IA simple à 1 400 € HT, ou chatbot RAG, ou audit IA si vous voulez cartographier en amont." } },
        { "@type": "Question", "name": "Différence agent IA, automatisation, employé IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Agent : 1 cas borné. Automatisation : processus métier complet. Employé IA : poste entier avec mémoire et rituels d'équipe." } },
        { "@type": "Question", "name": "Comment se passe la première prise de contact ?", "acceptedAnswer": { "@type": "Answer", "text": "30 minutes offertes avec un expert, devis ferme sous 5 jours ouvrés, vous décidez sans engagement." } },
        { "@type": "Question", "name": "Quel service après un déploiement IA qui pose problème ?", "acceptedAnswer": { "@type": "Answer", "text": "Audit IA Post-incident, puis Intégration IA pour mettre en place la couche gouvernance." } },
        { "@type": "Question", "name": "Faut-il combiner plusieurs services ?", "acceptedAnswer": { "@type": "Answer", "text": "Souvent oui. Cadrage initial + produit cœur + intégration + formation. Mix défini au cadrage." } }
      ]
    }
  ]
}
```

---

## 14. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.1 visuel hero : 8 liens cliquables (1 par bloc du treemap) vers les 7 services + l'audit
- Sec.3 (les 3 piliers) : lien dans chaque titre + lien CTA en bas de chaque bloc, soit 6 liens vers les piliers
- Sec.4 (les 4 satellites) : lien dans chaque titre des 5 entrées (développement, chatbot, intégration, formation, audit), soit 5 liens
- Sec.4 note finale : lien vers ancre `#orientation`
- Sec.7 Q1 : 3 liens (`/services/agents-ia/`, `/services/chatbot-ia/`, `/services/audit-ia/`)
- Sec.7 Q2 : 3 liens (`/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/`)
- Sec.7 Q4 : 2 liens (`/services/audit-ia/`, `/services/integration-ia/`)

### Liens entrants attendus (≥ 8)

- Home (mention "tous nos services" dans le menu et dans les sections services)
- Header / nav principale (l'entrée "Services" du menu pointe vers cette page)
- Footer (colonne "Services" en haut)
- Toutes les pages services satellites (breadcrumb + lien retour vers le hub)
- Pages métiers `/agent-ia/[métier]/` (mention "voir tous les services" en bas)
- Pages SEO local `/agence-ia-[ville]/` (mention "nos services")
- Articles blog (cluster "services IA")
- Cas clients (mention "le service mobilisé sur ce projet")

---

## 15. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.5), langage visuel pricing home (sec.6), `<SouveraineteSection />` (sec.7), `<CTAFinalSection />` (sec.9).

### Composants existants à réutiliser

`<FAQItem />` (sec.8), `<NumberedListVertical />` (sec.4).

### Nouveaux composants à concevoir

- `<ServicesMapVisual />` : treemap léger hero (sec.1). Trois blocs piliers en haut + 4 blocs satellites en dessous. Hover révèle un titre + une ligne. Click vers la page service. Pas une image PNG, un rendu SVG/HTML.
- `<ServiceWizard />` : quizz interactif vertical sec.2. Trois questions séquentielles avec animations de transition douces. État conservé en session (pas de localStorage). Résultat final propose 1 à 2 services adaptés.
- `<PillarBlockSplit />` : bloc split éditorial vertical pour les 3 piliers sec.3. Image / mockup à gauche ou à droite (alternance), texte de l'autre côté. Composant réutilisable.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.14 doivent être **câblés à l'endroit exact où ils apparaissent dans le rendu**. Sec.14 sert uniquement de récapitulatif pour validation.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** : l'entrée "Services" du menu pointe vers cette page (`/services/`). Le menu déroulant peut afficher en sous-niveau les 7 services individuels.
2. **Breadcrumb** : `Accueil → Services`.
3. **Footer** : colonne "Services" en première position. Lister les 7 services + le hub en haut.
4. **Sitemap.xml** avec `<priority>0.9</priority>` (priorité maximale, point d'entrée Silo 1) et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `CollectionPage` + `ItemList` validé.
6. **Pages enfants** : toutes les pages `/services/[slug]/` ont un breadcrumb et un lien retour vers ce hub.
7. **Page d'accueil** : ajouter un lien fort depuis la home vers le hub services dans la grille des services.
8. **Reading time** estimé visible : 3 min de lecture.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec treemap
- Sec.2 : quizz interactif vertical
- Sec.3 : 3 blocs split éditorial alternance gauche/droite
- Sec.4 : liste verticale numérotée 01→04 (avec 5 entrées comprenant l'audit)
- Sec.8 : accordéon vertical

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. Les blocs piliers sec.3 utilisent une mise en avant visuelle plus forte que les satellites sec.4 pour respecter la hiérarchie commerciale.

---

## 16. Informations à valider avant publication

1. ✅ **Pricing arbitré (avril 2026)** : 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte). 30 min offertes avec un expert. Aligné avec home v2 et les 7 pages satellites.
2. **Quizz d'orientation** : valider les 3 questions et la logique de routage avant développement (peut nécessiter un atelier court avec l'équipe commerciale).
3. **Treemap hero** : valider que les 8 blocs cliquables + animations restent rapides à charger (lighthouse score > 90).
4. **Hiérarchie visuelle piliers vs satellites** : confirmer que les 3 piliers ont une mise en avant visuelle distinctement plus forte que les 4 satellites + audit.
5. **Mention "5 entrées" en sec.4** : la liste contient développement, chatbot, intégration, formation, **et audit IA**. L'audit IA est donc à la fois positionné comme service satellite ici, et comme produit d'entrée commerciale via le quizz. Confirmer que cette double position ne crée pas de confusion.

---

*Document de référence rédigé le 2026-05-08. Aligné avec home-v2.md v3 et les 7 pages services satellites du Silo 1.*
