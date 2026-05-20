# `/services/developpement-ia/` — Service satellite Silo 1 (modèle vivant Service · adaptation #3)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2 (instanciation stricte, contenu non redéfini ici)**

---

## 0. Préambule

### Sections héritées (sans rédaction propre)

| # | Section | Source d'héritage | Composant |
|---|---------|-------------------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Pricing (2 tiers) | `home-v2.md` | langage visuel pricing home |
| 9 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 11 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Développement IA sur-mesure : on code vraiment, on ne se contente pas d'orchestrer du no-code » |
| `Sous-titre hero` | sec.1 | 2 lignes ciblant DSI/CTO : code de production, monitoring, MLOps, dette technique maîtrisée |
| `Pills hero` | sec.1 | 3 pills (chiffres marque, sans mention découverte) |
| `Définition pédagogique` | sec.2 | Différencier développement IA chez Althoce vs no-code (Make, Zapier, n8n hosted) vs SSII classique |
| `Tableau comparatif` | sec.3 | 3 colonnes : No-code/RPA, SSII classique, Développement IA Althoce |
| `Stack technique` | sec.4 | Schéma SVG architecture : briques de notre stack (LLM, orchestration, mémoire, intégrations, monitoring, CI/CD) |
| `5 livrables types` | sec.5 | Liste verticale numérotée 01→05 (cohérence templates) |
| `Métiers ciblés` | sec.6 | Marquee home (réutilisation stricte) |
| `FAQ` | sec.10 | 6 Q/R adaptées DSI/CTO |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Services › Développement IA`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « Stack technique »
- **Pricing affiché** : 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte)
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans pills hero)
- **Souveraineté, Méthode, Pricing, CTA final** : hérités stricts de la home
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial zig-zag, schéma SVG architecture, liste verticale numérotée, Marquee horizontal, accordéon FAQ. Aucun label décoratif.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 1, satellite Services**

### Rôle dans l'architecture

Page satellite qui s'adresse au persona DSI / CTO. Pendant que `/services/agents-ia/` parle des produits et `/services/employe-ia/` du livrable maximal, cette page parle de la *capacité technique* d'Althoce : on développe du code de production, pas du no-code orchestré. Argument différenciant fort vs. les agences "IA" qui se contentent d'assembler Make ou Zapier.

### Objectif trafic

1. Capter les requêtes techniques : « développement IA sur-mesure », « agence développement IA », « développeur IA », « MLOps PME », « intégration LLM custom ».
2. Rassurer le DSI/CTO sur la dette technique et la qualité de code.
3. Distribuer vers `/services/integration-ia/` (intégration SI) et vers les pages métier.

### Mots-clés cibles principaux

développement IA · agence développement IA · développeur IA freelance vs agence · IA sur-mesure · MLOps · intégration LLM · agent IA custom · solution IA personnalisée · IA Python · API IA

### Mots-clés longue traîne

« combien coûte un développeur IA », « différence no-code et développement IA », « agence IA Python France », « monitoring agents IA en production »

---

## 2. Title / Meta description / Open Graph

```html
<title>Développement IA sur-mesure pour PME & ETI : code de production, MLOps, monitoring | Althoce</title>

<meta name="description" content="Althoce développe vos solutions IA en code de production : agents, employés IA, intégrations API LLM, monitoring continu. Stack maîtrisée (Python, TypeScript, n8n, LangGraph). 30 min offertes avec un expert.">

<meta name="keywords" content="développement IA, agence développement IA, développeur IA, IA sur-mesure, MLOps, intégration LLM, agent IA custom, IA Python, IA TypeScript">

<link rel="canonical" href="https://althoce.com/services/developpement-ia/">

<meta property="og:title" content="Développement IA sur-mesure : code de production, MLOps, monitoring | Althoce">
<meta property="og:description" content="On code vraiment vos solutions IA. Pas du no-code orchestré, pas de boîte noire. Stack maîtrisée, monitoring continu, dette technique transparente.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/developpement-ia/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero (H1, sous-titre, pills, CTA, visuel) | Propre | Split éditorial zig-zag : à gauche le H1+CTA, à droite extrait de code (snippet Python ou TypeScript stylisé) |
| 2 | 🟢 Définition pédagogique | Propre | Prose éditoriale + callout `<DarkBlock />` |
| 3 | 🟢 Tableau comparatif No-code vs SSII vs Althoce | Propre | Tableau dense 3 colonnes × 8 lignes |
| 4 | 🟢 Stack technique (schéma SVG architecture) | Propre | Schéma exploded view : 6 briques techniques |
| 5 | 🟢 5 livrables types | Propre | Liste verticale numérotée 01→05 |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité home | `<MethodologySection />` |
| 8 | 🏠 Pricing | Hérité home | langage visuel pricing home |
| 9 | 🏠 Souveraineté | Hérité home | `<SouveraineteSection />` |
| 10 | 🟢 FAQ développement IA | Propre | Accordéon `<FAQItem />` |
| 11 | 🏠 CTA final | Hérité home | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : extrait de code stylisé (Python ou TypeScript), avec coloration syntaxique, en bordure arrondie sur fond légèrement plus clair que `bg-[#000000]`. Le code montre une fonction d'agent simple (lecture d'un email, classification, action).

### H1

> **Développement IA sur-mesure. On code vraiment. Pas du no-code orchestré.**

### Sous-titre (2 lignes max)

> Vos solutions IA méritent du code de production : tests, monitoring, MLOps, gouvernance. Notre équipe développe vos agents et employés IA en Python et TypeScript, sur une stack maîtrisée (LangGraph, n8n, FastAPI, vector DBs), avec une dette technique mesurée et documentée.

### Pills (3 max)

> +758 agents en production · Stack maîtrisée Python + TypeScript · 100 % code livré au client

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir notre stack technique ↓ *(ancre `#stack`)*

### Note Claude Design

L'extrait de code à droite n'est pas un screenshot. C'est un bloc `<CodeSnippetVisual />` à concevoir : code formaté avec coloration syntaxique propre au site, pas une image PNG. Police monospace dédiée (JetBrains Mono ou similaire).

---

## 5. Section 2 — Qu'est-ce que le développement IA chez Althoce

### H2

> **Développement IA chez Althoce : ce que ça veut dire concrètement**

### Paragraphe principal

> La promesse "IA sur-mesure" est galvaudée. La plupart des agences appellent "développement IA" un assemblage de briques no-code (Make, Zapier, n8n hosted) avec quelques appels API à OpenAI au milieu. Ça fonctionne pour des prototypes. Ça craque dès qu'on monte en volume, en criticité ou en intégration au système d'information. Chez Althoce, développer une solution IA signifie écrire du **code de production en Python ou TypeScript**, versionné dans Git, testé, monitoré, déployé via une CI/CD propre. Vous repartez avec le code source, la documentation, et la liberté de prendre votre indépendance à tout moment.

### Sous-paragraphe

> Notre stack par défaut combine [n8n](https://n8n.io/) auto-hébergé pour la couche orchestration visuelle (utile pour vos équipes métier), [LangGraph](https://www.langchain.com/langgraph) pour les flows agentiques complexes, FastAPI pour les APIs internes, et [pgvector](https://github.com/pgvector/pgvector) ou Qdrant pour la mémoire long-terme. Cette stack est ouverte, documentée, et n'enferme jamais le client dans une dépendance propriétaire Althoce. C'est cohérent avec notre [argument souveraineté](/#souverainete) : pas de boîte noire, pas de lock-in.

### Callout `<DarkBlock />`

> **Différence rapide entre les 3 approches**
>
> 1. **No-code (Make, Zapier, n8n hosted)** : montage rapide, plafond bas. OK pour POC, casse au-delà.
> 2. **SSII classique (CGI, Capgemini, Sopra)** : code de production mais cycles longs, dette technique forte sur les sujets IA récents (LLM, agents, RAG).
> 3. **Althoce** : code de production sur stack IA moderne, cycles courts (cadrage à mise en production en 6 à 12 semaines selon périmètre), code livré client.

---

## 6. Section 3 — Tableau comparatif : 3 façons de "faire de l'IA"

### H2

> **No-code, SSII classique, ou Althoce. Comment se positionner.**

### Sous-titre

> Trois approches pour développer une solution IA en 2026. Chacune a ses cas d'usage légitimes. Voici la grille honnête pour choisir selon votre contexte.

### Tableau (`<ComparisonTable />`)

| Critère | No-code (Make, Zapier) | SSII classique | **Althoce** |
|---------|------------------------|-----------------|-------------|
| Code de production | Non (assemblage) | Oui | **Oui (Python, TypeScript)** |
| Stack IA récente (LLM, agents, RAG) | Limitée | Faible maturité | **Maîtrisée** |
| Délai cadrage → MEP | 1 à 4 semaines | 6 à 18 mois | **6 à 12 semaines** |
| Coût build (cas système) | 5 à 15 K€ | 80 à 300 K€ | **Sur devis (chiffré au cadrage)** |
| Code livré au client | N/A | Oui mais propriétaire | **Oui, ouvert, documenté** |
| Monitoring, MLOps | Inexistant | À ajouter | **Inclus par défaut** |
| Souveraineté France | Variable | Variable | **Native (Mistral, OVH, Scaleway)** |
| Dette technique post-livraison | Élevée | Élevée | **Mesurée, documentée** |

### Note sous le tableau

> Le no-code reste pertinent pour des automatisations simples, peu critiques, à faible volume. Si votre besoin IA touche un processus critique ou doit tenir 3 ans en production, choisissez du code. Pour une analyse plus complète des choix d'architecture, voir notre ressource [Comment choisir entre no-code et développement IA](/conseil/no-code-vs-developpement-ia/).

---

## 7. Section 4 — Stack technique *(ancre `#stack`)*

### H2

> **Notre stack par défaut**

### Sous-titre

> Six briques techniques que nous combinons selon votre contexte. Chacune est ouverte, documentée, et auto-hébergeable. Vous pouvez à tout moment reprendre la main sur l'ensemble.

### Schéma SVG architecture (`<TechStackArchitecture />`)

Schéma horizontal en flux : **Sources de données** (CRM, ERP, mails, docs) → **Couche d'ingestion** (FastAPI, n8n) → **Couche IA** (LangGraph, modèles LLM) → **Mémoire** (pgvector, Qdrant, Postgres) → **Couche d'action** (intégrations API métier) → **Monitoring** (Langfuse, OpenTelemetry).

**Brique 1. Orchestration**

> n8n auto-hébergé pour les flows visuels métier (vos équipes peuvent lire et auditer). LangGraph pour les flows agentiques complexes nécessitant boucles, conditions, mémoire d'état. Choix selon criticité et complexité.

**Brique 2. Modèles LLM**

> [Mistral](https://mistral.ai/) pour la souveraineté française par défaut. OpenAI, Anthropic ou modèles open-source auto-hébergés selon le besoin. Le choix se fait au cadrage, en fonction de votre exigence souveraineté et de la criticité métier.

**Brique 3. Mémoire long-terme**

> pgvector (extension Postgres) ou Qdrant (vector store dédié) selon volumétrie. Couplé à une base relationnelle Postgres pour les références structurées. Indispensable pour un [employé IA](/services/employe-ia/) ou un agent qui apprend dans le temps.

**Brique 4. Intégrations**

> Connecteurs natifs vers HubSpot, Salesforce, Pipedrive, Sage, Cegid, Pennylane, Outlook, Google Workspace, Slack, Teams, Zendesk, Intercom. Connecteurs custom développés au cadrage pour vos outils internes propriétaires. Détails dans [Intégration IA](/services/integration-ia/).

**Brique 5. Monitoring et MLOps**

> Langfuse pour le tracing des appels LLM (latence, coût, qualité réponses), OpenTelemetry pour le monitoring infra, alerting Slack ou email sur dérive. Reporting hebdomadaire automatique pour le manager humain.

**Brique 6. CI/CD et déploiement**

> GitHub Actions ou GitLab CI selon votre standard, déploiement Docker, infrastructure auto-hébergeable (OVH, Scaleway, on-premise). Tests automatisés sur chaque commit. Documentation à jour livrée avec le code.

---

## 8. Section 5 — 5 livrables types

### H2

> **5 types de projets que nous livrons**

### Liste verticale numérotée 01→05 (`<NumberedListVertical />`)

**01. Agent IA unitaire**

> Un cas d'usage borné, code de production, déployé en 1 semaine après cadrage. Tarif fixe 1 400 € HT. Voir [Agents IA](/services/agents-ia/) pour la palette complète et les archétypes.

**02. Système d'automatisation multi-agents**

> Plusieurs agents orchestrés sur un processus métier (ADV, support, comptabilité, RH). 4 à 8 semaines de delivery selon périmètre. Sur devis. Voir [Automatisation IA](/services/automatisation-ia/).

**03. Employé IA dédié à un poste**

> Le livrable maximal : un membre d'équipe IA couvrant un rôle entier, avec mémoire, identité, rituels d'équipe. 6 à 12 semaines de delivery. Sur devis. Voir [Employé IA](/services/employe-ia/) pour le détail.

**04. Intégration IA dans un produit existant**

> Vous avez un SaaS ou un produit interne et voulez y embarquer un assistant, une recherche augmentée RAG, ou des flows agentiques. Nous développons les API et composants côté backend, votre équipe gère le front. 4 à 10 semaines selon scope.

**05. Refonte d'un processus avec IA**

> Vous avez un processus métier mature mais coûteux (saisie, validation, qualification, reporting) et voulez le repenser de zéro avec l'IA au centre. Cadrage approfondi, parfois en mode atelier sur 2 à 4 semaines, suivi du build. Sur devis. Voir aussi [Audit IA](/services/audit-ia/) qui peut précéder la refonte.

### Note sous la liste

> Votre projet n'entre pas exactement dans une de ces 5 catégories ? Les **30 minutes offertes avec un expert** servent à cadrer votre cas particulier et à identifier le bon livrable.

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée. Réutilisation stricte du composant `<Marquee />` de la home.**
>
> Liste défilante des 8 métiers couverts (comptabilité, RH, support client, commerce, marketing, ops, juridique, achats). Chaque métier renvoie vers `/agent-ia/[métier]/` quand la page existe.

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />` de la home v2.**
> 4 étapes : Cadrage, Build, POC, Mise en production + support.
> Aucun contenu textuel à fournir ici.

---

## 11. Section 8 — Pricing (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du langage visuel pricing de la home v2.**
> 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte). 30 minutes offertes avec un expert.
> Aucun contenu textuel à fournir ici.

---

## 12. Section 9 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />`.**
> Aucun contenu textuel à fournir ici.

---

## 13. Section 10 — FAQ Développement IA (6 Q/R)

### H2

> **Questions fréquentes sur le développement IA**

### Liste accordéon `<FAQItem />`

**Q1. En quoi vous différenciez-vous d'une agence no-code (Make, Zapier, n8n hosted) ?**

Le no-code est rapide à démarrer mais plafonne vite. Dès que vous avez besoin de logique métier complexe, de tests automatisés, de monitoring, ou de tenir 3 ans en production, il faut du code. Chez Althoce, vous obtenez les deux : du n8n quand c'est pertinent (pour les équipes métier qui veulent voir et auditer les flows), du code Python ou TypeScript quand c'est nécessaire. Voir le [tableau comparatif](#tableau-comparatif) pour le détail.

**Q2. Le code livré nous appartient-il ?**

Oui. À la fin du projet, vous recevez le code source complet (repo Git), la documentation technique, et les credentials d'infrastructure. Vous pouvez à tout moment reprendre la maintenance en interne, changer de prestataire, ou continuer avec nous. Pas de lock-in propriétaire. C'est un pilier de notre [argument souveraineté](/#souverainete).

**Q3. Quelle est votre stack technique principale ?**

Python pour les services IA (FastAPI, LangGraph), TypeScript pour les couches front et certains backends. n8n auto-hébergé pour l'orchestration visuelle. Mistral / OpenAI / Anthropic pour les modèles LLM (choix au cadrage). pgvector ou Qdrant pour la mémoire vectorielle. Docker + GitHub Actions pour CI/CD. Détail complet dans la section [Stack technique](#stack).

**Q4. Combien coûte un développement IA chez Althoce ?**

Un agent IA simple est facturé **1 400 € HT** (tarif fixe, 1 semaine de delivery). Un système multi-agents, un [employé IA](/services/employe-ia/), une [intégration produit](/services/integration-ia/) ou une refonte de process : **sur devis**, chiffré au cadrage. Tout démarre par **30 minutes offertes avec un expert**.

**Q5. Travaillez-vous avec les DSI ou directement avec les directions métier ?**

Les deux. Sur les projets où la direction métier porte le besoin, nous incluons systématiquement la DSI dans la phase cadrage (revue d'architecture, validation des choix techniques, sécurité, intégration au SI). Sur les projets DSI-driven, nous travaillons avec votre équipe technique au quotidien. Notre objectif est que votre DSI puisse maintenir en interne ce que nous livrons.

**Q6. Comment monitorez-vous la qualité et le coût des modèles LLM en production ?**

Langfuse en standard : tracing de chaque appel LLM avec latence, coût en tokens, qualité de la réponse. Alertes Slack ou email en cas de dérive (coût qui explose, latence qui dégrade, taux d'erreur qui monte). Reporting hebdomadaire automatique au manager humain de la solution. Voir aussi notre service [Intégration IA](/services/integration-ia/) qui détaille la couche monitoring.

---

## 14. Section 11 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<CTAFinalSection />`.**

---

## 15. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/developpement-ia/#service",
      "name": "Développement IA sur-mesure",
      "serviceType": "Custom AI development",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Développement de solutions IA en code de production : agents, employés IA, intégrations LLM, monitoring continu. Stack Python, TypeScript, n8n, LangGraph.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/developpement-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "À partir de 1 400 € HT pour un agent simple. Sur devis pour les systèmes, employés IA et refontes."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Développement IA", "item": "https://althoce.com/services/developpement-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "En quoi vous différenciez-vous d'une agence no-code ?", "acceptedAnswer": { "@type": "Answer", "text": "Le no-code plafonne vite. Chez Althoce, vous obtenez du code de production (Python, TypeScript) et du n8n quand c'est pertinent. Pas de lock-in propriétaire." } },
        { "@type": "Question", "name": "Le code livré nous appartient-il ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Repo Git complet, documentation, credentials infra. Pas de lock-in." } },
        { "@type": "Question", "name": "Quelle est votre stack technique ?", "acceptedAnswer": { "@type": "Answer", "text": "Python (FastAPI, LangGraph), TypeScript, n8n auto-hébergé, Mistral / OpenAI / Anthropic, pgvector / Qdrant, Docker, GitHub Actions." } },
        { "@type": "Question", "name": "Combien coûte un développement IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Agent simple : 1 400 € HT. Système, employé IA, refonte : sur devis. 30 min offertes avec un expert." } },
        { "@type": "Question", "name": "Travaillez-vous avec les DSI ou les métiers ?", "acceptedAnswer": { "@type": "Answer", "text": "Les deux. DSI systématiquement incluse au cadrage. Objectif : votre DSI peut maintenir en interne ce qu'on livre." } },
        { "@type": "Question", "name": "Comment monitorez-vous la qualité des modèles ?", "acceptedAnswer": { "@type": "Answer", "text": "Langfuse en standard : tracing des appels LLM, alertes sur dérive, reporting hebdo automatique." } }
      ]
    }
  ]
}
```

---

## 16. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** (pas en bottom nav) :

- Sec.2 paragraphe principal : lien vers home `/#souverainete`
- Sec.2 sous-paragraphe : liens vers n8n, LangGraph, pgvector (externes)
- Sec.3 note sous tableau : lien vers `/conseil/no-code-vs-developpement-ia/`
- Sec.4 brique 2 : lien vers `https://mistral.ai/` (externe)
- Sec.4 brique 3 : lien vers `/services/employe-ia/`
- Sec.4 brique 4 : lien vers `/services/integration-ia/`
- Sec.5 livrable 01 : lien vers `/services/agents-ia/`
- Sec.5 livrable 02 : lien vers `/services/automatisation-ia/`
- Sec.5 livrable 03 : lien vers `/services/employe-ia/`
- Sec.5 livrable 05 : lien vers `/services/audit-ia/`
- Sec.10 Q1 : lien vers ancre `#tableau-comparatif`
- Sec.10 Q2 : lien vers ancre home `/#souverainete`
- Sec.10 Q3 : lien vers ancre `#stack`
- Sec.10 Q4 : liens vers `/services/employe-ia/` et `/services/integration-ia/`
- Sec.10 Q6 : lien vers `/services/integration-ia/`

### Liens entrants attendus (≥ 5)

- Home (mention "développement sur-mesure" dans les sections services)
- `/services/agents-ia/` (paragraphe stack technique)
- `/services/employe-ia/` (FAQ Q1, mention "plusieurs agents orchestrés")
- `/services/integration-ia/` (FAQ et stack)
- `/services/audit-ia/` (cadrage qui peut précéder un développement)
- Articles blog (cluster "développement IA", "stack IA")

---

## 17. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.7), langage visuel pricing home (sec.8), `<SouveraineteSection />` (sec.9), `<CTAFinalSection />` (sec.11), `<Marquee />` (sec.6).

### Composants existants à réutiliser

`<DarkBlock />` (sec.2), `<FAQItem />` (sec.10), `<ComparisonTable />` (sec.3), `<NumberedListVertical />` (sec.5).

### Nouveaux composants à concevoir

- `<CodeSnippetVisual />` : bloc de code avec coloration syntaxique propre au site, police monospace dédiée, bordure arrondie. Utilisé dans le hero (sec.1).
- `<TechStackArchitecture />` : schéma SVG horizontal en flux, 6 briques reliées par des lignes fines azure. Hover ouvre une description courte de chaque brique. Utilisé sec.4.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens internes listés en sec.16 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**, jamais dans une section "voir aussi" en bas de page. Exemple : le lien vers `/services/employe-ia/` mentionné dans le livrable 03 sec.5 doit être posé sur l'expression `[Employé IA]` du paragraphe, pas dans une bottom nav. La sec.16 sert uniquement de récapitulatif éditorial pour validation. Concrètement : utiliser des balises `<Link href="/services/employe-ia/">Employé IA</Link>` (Next.js App Router) directement dans le JSX de chaque section.

### Règle d'intégration au site (CRITIQUE)

La page doit être pleinement intégrée au site Althoce :

1. **Menu principal** (header) : apparaître sous le menu déroulant "Services" avec icône cohérente.
2. **Breadcrumb** : `Accueil → Services → Développement IA` rendu visuellement en haut de page (composant `<Breadcrumb />` existant).
3. **Footer** : apparaître dans la colonne "Services" du footer, ordre alphabétique ou par importance (à décider avec home).
4. **Sitemap.xml** : ajouter l'URL avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** : page autorisée dans `robots.txt` (pas de `noindex`), JSON-LD validé via Rich Results Test de Google avant mise en ligne.
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/` vers cette page (au moins 1 mention contextuelle dans la prose de chaque page cousine).
7. **Reading time** estimé visible en haut de page : 4 min de lecture.

### Règle créativité visuelle

Aucune grille de cartes 3×3 par défaut. Patterns par section :
- Hero : split éditorial avec extrait de code
- Sec.2 : prose + DarkBlock callout
- Sec.3 : tableau dense 3 colonnes
- Sec.4 : schéma SVG horizontal en flux
- Sec.5 : liste verticale numérotée 01→05
- Sec.6 : Marquee horizontal hérité
- Sec.10 : accordéon vertical

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. JetBrains Mono pour les snippets de code. Pas d'illustration stock.

---

## 18. Informations à valider avant publication

1. ✅ **Pricing arbitré (avril 2026)** : 1 400 € HT (agent simple) / sur devis (système, employé IA, refonte). 30 min offertes avec un expert. Aligné strictement avec home v2 et piliers Silo 1.
2. **Stack technique listée** (n8n, LangGraph, FastAPI, pgvector, Qdrant, Mistral, Langfuse, Docker, GitHub Actions) : confirmer l'usage en mention technique non-commerciale, OK si pas de logos visuels sans autorisation.
3. **Cas client implicites** mentionnés : aucun cas nominal cité dans cette page, donc rien à valider côté NDA. Les 758 agents en production servent de preuve agrégée.
4. **Snippet de code hero** : Claude Design doit proposer 2 ou 3 snippets candidats, le client valide celui qui est rendu (Python prioritaire pour cohérence avec persona DSI).

---

*Document de référence rédigé le 2026-05-08. Aligné avec home-v2.md v3 et template Service canonique (services-agents-ia.md, services-employe-ia.md).*
