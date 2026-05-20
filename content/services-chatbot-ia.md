# `/services/chatbot-ia/` — Service satellite Silo 1 (modèle vivant Service · adaptation #4)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**

---

## 0. Préambule

### Sections héritées (sans rédaction propre)

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 10 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> **Note d'arbitrage** : la section Pricing héritée de la home n'apparaît PAS sur la page Chatbot IA. Le chatbot RAG est un produit d'entrée bordé (tarif fixe 1 400 € HT mentionné en FAQ Q3 et en meta description). On évite la redondance d'un bloc pricing complet sur ce satellite.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Chatbot IA RAG : pas un chatbot scripté, un assistant qui répond depuis votre base de connaissances » |
| `Sous-titre hero` | sec.1 | 2 lignes : différenciation chatbot scripté / chatbot RAG / employé IA |
| `Pills hero` | sec.1 | 3 pills (chiffres marque, sans mention découverte) |
| `Définition pédagogique` | sec.2 | Différencier chatbot IA, assistant IA, et employé IA |
| `Tableau comparatif` | sec.3 | 2 colonnes : Chatbot scripté / Chatbot RAG Althoce |
| `Architecture chatbot RAG` | sec.4 | Schéma SVG flux : question utilisateur → embedding → recherche vectorielle → contexte → réponse LLM |
| `5 cas d'usage` | sec.5 | Liste verticale numérotée 01→05 |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ` | sec.9 | 6 Q/R adaptées chatbot |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Services › Chatbot IA`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « Architecture chatbot RAG »
- **Pricing** : pas de section pricing sur cette page. Le tarif (1 400 € HT cas simple) est mentionné en FAQ Q3 et en meta description uniquement.
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans pills hero)
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial, schéma SVG flux, tableau dense, liste verticale numérotée, Marquee, accordéon FAQ. Pas de label décoratif.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 1, satellite Services**

### Rôle dans l'architecture

Page satellite qui capte les requêtes "chatbot IA" très volumiques. Différencie clairement le chatbot scripté (peu de valeur, déçoit l'utilisateur) du chatbot RAG (Retrieval Augmented Generation, ancré dans la base de connaissances client). Sert d'entrée de gamme : un chatbot RAG bien pensé vaut souvent 1 400 € HT (cas simple) et sert de premier projet IA pour des PME qui veulent se familiariser sans engagement lourd.

### Objectif trafic

1. Capter "chatbot IA", "chatbot intelligent", "chatbot RAG", "agent conversationnel", "chatbot site internet PME".
2. Différencier vs solutions SaaS standardisées (Zendesk Answer Bot, Intercom Fin, etc.) en mettant en avant le sur-mesure et la souveraineté.
3. Distribuer vers `/services/agents-ia/` (le chatbot peut évoluer en agent), `/services/employe-ia/` (l'employé IA support absorbe le chatbot), et les pages métier.

### Mots-clés cibles principaux

chatbot IA · chatbot intelligent · chatbot RAG · agent conversationnel · chatbot pour site internet · chatbot français · chatbot PME · assistant IA conversationnel · chatbot interne entreprise · chatbot FAQ

### Mots-clés longue traîne

« créer un chatbot IA pour son site », « chatbot RAG vs chatbot scripté », « chatbot français RGPD », « combien coûte un chatbot IA »

---

## 2. Title / Meta description / Open Graph

```html
<title>Chatbot IA RAG sur-mesure pour site et intranet : ancré sur votre base de connaissances | Althoce</title>

<meta name="description" content="Pas un chatbot scripté qui frustre vos visiteurs. Un chatbot RAG ancré sur votre base de connaissances, vos FAQ, vos docs internes. Souverain, français, à partir de 1 400 € HT. 30 min offertes avec un expert.">

<meta name="keywords" content="chatbot IA, chatbot RAG, chatbot intelligent, agent conversationnel, chatbot site internet, chatbot français, chatbot PME, assistant IA conversationnel">

<link rel="canonical" href="https://althoce.com/services/chatbot-ia/">

<meta property="og:title" content="Chatbot IA RAG sur-mesure : ancré sur votre base de connaissances | Althoce">
<meta property="og:description" content="Vos visiteurs en ont marre des chatbots scriptés. Un chatbot RAG répond avec votre vraie connaissance, en temps réel, en français, souverain.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/chatbot-ia/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup conversation chatbot stylisée (3 échanges) |
| 2 | 🟢 Définition pédagogique | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Tableau comparatif Chatbot scripté vs RAG Althoce | Propre | Tableau dense 2 colonnes × 8 lignes |
| 4 | 🟢 Architecture chatbot RAG | Propre | Schéma SVG flux horizontal (5 étapes) |
| 5 | 🟢 5 cas d'usage chatbot | Propre | Liste verticale numérotée 01→05 |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ chatbot IA | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'interface chatbot stylisée. Bulle visiteur en haut ("Quels sont vos délais de livraison ?"), bulle chatbot avec citation de la source ("D'après notre page Conditions de livraison, page 3..."), bulle visiteur de relance ("Et pour la Belgique ?"), bulle chatbot avec réponse ancrée. Visuel léger, pas une vraie copie d'écran.

### H1

> **Chatbot IA RAG : pas un chatbot scripté qui frustre vos visiteurs. Un assistant qui répond depuis votre vraie connaissance.**

### Sous-titre (2 lignes max)

> Un chatbot scripté répond aux questions prévues, panique sur les autres. Un chatbot RAG ancré sur votre base de connaissances (FAQ, docs, base produit, intranet) répond à toutes les questions que cette base couvre, cite ses sources, et escalade quand il ne sait pas. Souverain, français, intégrable à votre site ou intranet.

### Pills (3 max)

> +758 agents en production · Sources citées dans chaque réponse · 100 % auto-hébergeable

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir l'architecture RAG ↓ *(ancre `#architecture`)*

### Note Claude Design

Le mockup conversation à droite est un composant `<ChatbotConversationMockup />` à concevoir : 4 bulles de conversation alternées (visiteur / chatbot), citation de source dans la réponse chatbot, indicateur "● en ligne", typo Inter pour le contenu des bulles. Pas une image PNG.

---

## 5. Section 2 — Qu'est-ce qu'un chatbot IA chez Althoce

### H2

> **Chatbot IA, assistant IA, employé IA : trois choses différentes**

### Paragraphe principal

> Le mot "chatbot" est utilisé pour tout et n'importe quoi en 2026. Chez Althoce, nous distinguons clairement trois formats. Un **chatbot IA** est un agent conversationnel ciblé sur une fonction (FAQ visiteur, qualification prospect, support N0 simple). Il ne sort pas de son périmètre. Il cite ses sources. Il escalade quand il ne sait pas. Un **assistant IA** est un agent plus large qui peut prendre des actions (créer un ticket, envoyer un email, prendre un RDV) en plus de répondre. Un **employé IA** couvre un poste entier, avec mémoire long-terme, identité, et rituels d'équipe (voir [Employé IA](/services/employe-ia/) pour la description complète).

### Sous-paragraphe

> Pour la plupart de nos clients PME en 2026, le bon point d'entrée IA est un chatbot RAG. Tarif fixe **1 400 € HT** (cas simple, 1 semaine de delivery). C'est un projet bordé, mesurable, à fort ROI immédiat (taux de déflexion support, qualification prospect mieux ciblée, accès facilité à la base interne). Quand le besoin grandit, le chatbot évolue vers un agent IA capable d'actions, puis vers un employé IA support. Voir notre [palette d'agents IA](/services/agents-ia/) pour le détail des cas d'usage avancés.

### Callout `<DarkBlock />`

> **Chatbot scripté vs chatbot RAG : la différence en 30 secondes**
>
> Un chatbot scripté est un arbre de décision. Vous prévoyez les questions, vous écrivez les réponses, vous cliquez sur des boutons. Limite : votre visiteur n'utilise jamais exactement vos mots, il pose des questions imprévues, le chatbot répond "Je n'ai pas compris" et le visiteur part frustré. Un chatbot RAG (Retrieval Augmented Generation) lit votre base de connaissances en temps réel, comprend la question même reformulée, cite les sources, escalade vers un humain si la réponse n'est pas couverte. Plus de "Je n'ai pas compris".

---

## 6. Section 3 — Tableau comparatif : Chatbot scripté vs Chatbot RAG Althoce

### H2

> **Chatbot scripté vs Chatbot RAG Althoce. Le détail honnête.**

### Sous-titre

> Deux approches souvent confondues. Voici ce qui change vraiment dans l'expérience visiteur et dans la maintenance long-terme.

### Tableau (`<ComparisonTable />`)

| Critère | Chatbot scripté | **Chatbot RAG Althoce** |
|---------|-----------------|--------------------------|
| Compréhension | Mots-clés exacts | **Reformulations, synonymes, fautes de frappe** |
| Couverture des questions | Limitée à l'arbre prévu | **Toute votre base de connaissances** |
| Citation des sources | Non | **Oui (page, paragraphe, lien)** |
| Maintenance | Mise à jour manuelle de l'arbre | **Mise à jour automatique : on update la base, le chatbot suit** |
| Escalade humain | Oui mais brutale | **Avec contexte enrichi (question initiale, ce qu'il a compris, pourquoi il bloque)** |
| Personnalité de marque | Robotique | **Identité de marque cohérente (prénom, ton, signature)** |
| Souveraineté France | Variable | **Native (Mistral, OVH, Scaleway)** |
| Pricing entrée | Variable selon SaaS | **1 400 € HT (cas simple, 1 semaine de delivery)** |

### Note sous le tableau

> Le chatbot scripté reste pertinent dans 1 cas : un funnel d'achat très linéaire avec 5 ou 6 étapes prévisibles. Pour tout le reste (FAQ visiteur, support, qualification, intranet interne), un chatbot RAG vous donne un meilleur taux de réponse et une meilleure expérience. Pour la migration depuis un chatbot scripté existant, voir notre service [Intégration IA](/services/integration-ia/).

---

## 7. Section 4 — Architecture chatbot RAG *(ancre `#architecture`)*

### H2

> **Comment fonctionne un chatbot RAG. Sans jargon.**

### Sous-titre

> Cinq étapes que le chatbot exécute en moins d'une seconde, à chaque message reçu. Comprendre le flux vous permet de comprendre pourquoi un chatbot RAG est plus fiable qu'un scripté.

### Schéma SVG flux horizontal (`<RAGFlowDiagram />`)

Schéma horizontal en 5 étapes connectées par des flèches azure. Chaque étape est un bloc avec icône simple, label, et 1 ligne de description.

**Étape 1. Question reçue**

> Le visiteur écrit une question en langage naturel sur le site, l'intranet, l'app. Pas de bouton à cliquer, pas d'arbre de décision.

**Étape 2. Embedding**

> La question est transformée en vecteur numérique (embedding). C'est ce qui permet au chatbot de comprendre les reformulations et les synonymes.

**Étape 3. Recherche vectorielle**

> Le système cherche dans votre base de connaissances (FAQ, docs, intranet) les passages les plus proches sémantiquement de la question. Top 3 à 5 passages remontés.

**Étape 4. Génération de réponse**

> Le LLM (Mistral, OpenAI, ou autre selon souveraineté) reçoit la question + les passages pertinents et génère une réponse en langage naturel, en citant les sources.

**Étape 5. Vérification et envoi**

> Garde-fous : si aucun passage pertinent n'est trouvé, le chatbot escalade vers un humain avec contexte enrichi. Si la réponse mentionne quelque chose qui n'est pas dans les sources, elle est filtrée. Pas d'hallucination autorisée.

### Callout sous le schéma

> Cette architecture standard est implémentée chez tous nos clients chatbot. Ce qui change d'un client à l'autre : la base de connaissances injectée (vos FAQ, vos docs, votre intranet), le modèle LLM choisi (selon souveraineté), l'identité de marque du chatbot. Le reste est éprouvé sur +150 PME.

---

## 8. Section 5 — 5 cas d'usage du chatbot RAG

### H2

> **5 cas où nos clients déploient un chatbot RAG**

### Liste verticale numérotée 01→05 (`<NumberedListVertical />`)

**01. Chatbot FAQ visiteur (site public)**

> Sur votre site corporate ou e-commerce. Répond aux questions visiteur (produits, livraison, conditions, contact). Source : votre site + FAQ + CGV. Délai 1 semaine. **1 400 € HT.**

**02. Chatbot qualification prospect (avant le commercial)**

> Engage les visiteurs en haut du funnel, qualifie l'intention (BANT léger : besoin, autorité, urgence), prend le RDV avec votre commercial via Calendly. Réduit le coût d'acquisition. Voir aussi [Agent IA SDR](/services/agents-ia/) pour la version employé IA.

**03. Chatbot support N0 (déflexion tickets)**

> Sur votre interface client connectée. Répond aux questions support de niveau 0 (réinitialisation mot de passe, statut commande, info produit). Cite les sources. Escalade au support N1 humain pour les cas complexes. Réduit la charge support de 30 à 60 %.

**04. Chatbot intranet (assistant interne)**

> Pour vos collaborateurs internes. Répond aux questions sur les procédures internes (RH, IT, juridique, finance). Source : votre intranet, vos docs RH, vos process. Réduit le temps perdu à chercher l'info. Particulièrement efficace dans les ETI où l'intranet est touffu.

**05. Chatbot base produit (e-commerce ou SaaS)**

> Aide à la décision d'achat ou à l'usage du produit. Source : catalogue produit + base de connaissances utilisateurs. Pour un e-commerce : "quel modèle pour un usage X ?". Pour un SaaS : "comment fait-on pour Y ?". Réduit le taux d'abandon panier ou le churn.

### Note sous la liste

> Votre cas n'est pas listé ? Les **30 minutes offertes avec un expert** servent à valider la faisabilité de votre chatbot et à cadrer la base de connaissances cible. Pour des cas plus larges qu'un chatbot, voir [Employé IA support](/services/employe-ia/).

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée. Réutilisation stricte du composant `<Marquee />` de la home.**
> Aucun contenu textuel à fournir ici.

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />`.**
> Aucun contenu textuel à fournir ici.

---

## 11. Section 8 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />`.**

---

## 12. Section 9 — FAQ Chatbot IA (6 Q/R)

### H2

> **Questions fréquentes sur les chatbots IA Althoce**

### Liste accordéon `<FAQItem />`

**Q1. Quelle est la différence entre un chatbot et un agent IA chez Althoce ?**

Un chatbot répond aux questions à partir d'une base de connaissances. Un [agent IA](/services/agents-ia/) répond ET prend des actions (créer un ticket, envoyer un email, prendre un RDV, mettre à jour une base). Un chatbot RAG est une porte d'entrée typique vers un agent IA, qui peut lui-même évoluer vers un [employé IA](/services/employe-ia/).

**Q2. Comment évite-t-on les hallucinations (réponses inventées) ?**

Trois garde-fous : (1) la réponse doit s'appuyer sur les passages remontés depuis votre base, (2) si aucun passage pertinent n'est trouvé, le chatbot escalade au lieu d'inventer, (3) un filtre vérifie que la réponse ne mentionne pas d'éléments absents des sources. Voir le détail dans la section [Architecture](#architecture).

**Q3. Combien coûte un chatbot IA chez Althoce ?**

Un chatbot RAG simple sur une base de connaissances unique (FAQ + docs ou intranet) est facturé **1 400 € HT** (tarif fixe, 1 semaine de delivery). Pour un chatbot multi-bases, multilingue, ou avec actions complexes (qualification + RDV + CRM), c'est un système : sur devis. Tout démarre par **30 minutes offertes avec un expert**.

**Q4. En combien de temps un chatbot RAG est-il opérationnel ?**

1 semaine pour un chatbot simple sur 1 base de connaissances. 2 à 4 semaines pour un chatbot multi-bases ou multilingue. La vitesse dépend principalement de la qualité de votre base de connaissances. Si votre FAQ est à jour et bien structurée, c'est rapide. Si l'intranet est fragmenté, le travail de cadrage prend plus de temps. Voir aussi notre service [Audit IA](/services/audit-ia/) pour les cadrages plus profonds.

**Q5. Le chatbot peut-il s'intégrer à notre site ou intranet existant ?**

Oui. Intégration en 2 lignes de code (script embed, comme un chatbot SaaS) ou via API si vous voulez un design custom complet. Compatibles : Next.js, WordPress, Shopify, Webflow, intranets propriétaires, Sharepoint, Notion. Pour les intégrations plus complexes au SI, voir [Intégration IA](/services/integration-ia/).

**Q6. Est-ce que le chatbot apprend dans le temps ?**

Oui, mais pas comme un chatbot scripté. Au lieu de réécrire des arbres de décision, vous mettez à jour votre base de connaissances et le chatbot s'aligne automatiquement. En complément, nous monitorons les conversations (anonymisées, RGPD) pour identifier les questions fréquentes mal couvertes et alimenter la base. Voir aussi notre service [Formation IA](/services/formation-ia/) qui forme votre équipe à piloter et faire évoluer le chatbot.

---

## 13. Section 10 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 14. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/chatbot-ia/#service",
      "name": "Chatbot IA RAG sur-mesure",
      "serviceType": "Conversational AI",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Chatbot IA RAG ancré sur votre base de connaissances (FAQ, docs, intranet). Souverain, français, intégrable à votre site ou intranet. À partir de 1 400 € HT.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/chatbot-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "À partir de 1 400 € HT pour un chatbot RAG simple. Sur devis pour les systèmes multi-bases ou multilingues."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Chatbot IA", "item": "https://althoce.com/services/chatbot-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Différence entre chatbot et agent IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un chatbot répond. Un agent IA répond ET prend des actions (créer ticket, envoyer email, prendre RDV)." } },
        { "@type": "Question", "name": "Comment éviter les hallucinations ?", "acceptedAnswer": { "@type": "Answer", "text": "Trois garde-fous : ancrage strict sur passages remontés, escalade si rien trouvé, filtre anti-hallucination." } },
        { "@type": "Question", "name": "Combien coûte un chatbot IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Chatbot RAG simple : 1 400 € HT. Multi-bases ou multilingue : sur devis. 30 min offertes avec un expert." } },
        { "@type": "Question", "name": "En combien de temps est-il opérationnel ?", "acceptedAnswer": { "@type": "Answer", "text": "1 semaine pour un chatbot simple. 2 à 4 semaines pour multi-bases ou multilingue." } },
        { "@type": "Question", "name": "Intégrable à notre site existant ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Script embed ou API. Compatible Next.js, WordPress, Shopify, Webflow, Sharepoint, Notion." } },
        { "@type": "Question", "name": "Le chatbot apprend-il ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui via mise à jour de la base de connaissances. Monitoring continu des conversations pour alimenter la base." } }
      ]
    }
  ]
}
```

---

## 15. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 paragraphe principal : lien vers `/services/employe-ia/`
- Sec.2 sous-paragraphe : lien vers `/services/agents-ia/`
- Sec.3 note sous tableau : lien vers `/services/integration-ia/`
- Sec.5 cas 02 : lien vers `/services/agents-ia/` (mention "Agent IA SDR")
- Sec.5 note finale : lien vers `/services/employe-ia/`
- Sec.10 Q1 : liens vers `/services/agents-ia/` et `/services/employe-ia/`
- Sec.10 Q2 : lien vers ancre `#architecture`
- Sec.10 Q4 : lien vers `/services/audit-ia/`
- Sec.10 Q5 : lien vers `/services/integration-ia/`
- Sec.10 Q6 : lien vers `/services/formation-ia/`

### Liens entrants attendus (≥ 5)

- Home (mention "chatbot" dans la grille des services)
- `/services/agents-ia/` (FAQ Q sur la différence chatbot / agent)
- `/services/employe-ia/` (mention "le chatbot peut évoluer vers un employé IA support")
- `/services/integration-ia/` (cas typique : chatbot intégré au site)
- Articles blog (cluster "chatbot RAG", "chatbot intelligent", "FAQ automatisée")

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.7), langage visuel pricing home (sec.8), `<SouveraineteSection />` (sec.9), `<CTAFinalSection />` (sec.11), `<Marquee />` (sec.6).

### Composants existants à réutiliser

`<DarkBlock />` (sec.2), `<FAQItem />` (sec.10), `<ComparisonTable />` (sec.3), `<NumberedListVertical />` (sec.5).

### Nouveaux composants à concevoir

- `<ChatbotConversationMockup />` : 4 bulles de conversation alternées dans le hero. Pas une image PNG, un composant rendu. Indicateur "● en ligne", police Inter pour le contenu, citation de source dans la réponse chatbot.
- `<RAGFlowDiagram />` : schéma SVG horizontal en 5 étapes (Question → Embedding → Recherche → Génération → Vérification). Flèches azure, blocs avec icône + label + 1 ligne de description.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.16 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Pas de bottom nav "voir aussi". Concrètement : balises `<Link href="/services/...">` directement dans le JSX de chaque section. La sec.16 sert uniquement de récapitulatif pour validation.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous "Services".
2. **Breadcrumb** rendu en haut de page : `Accueil → Services → Chatbot IA`.
3. **Footer** colonne "Services".
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée (robots.txt OK, JSON-LD validé Rich Results Test).
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/`, et la home (au moins 1 mention contextuelle dans la prose de chaque).
7. **Reading time** estimé visible : 4 min de lecture.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec mockup conversation
- Sec.2 : prose + DarkBlock callout
- Sec.3 : tableau dense 2 colonnes
- Sec.4 : schéma SVG horizontal en flux 5 étapes
- Sec.5 : liste verticale numérotée 01→05
- Sec.6 : Marquee horizontal hérité
- Sec.10 : accordéon vertical

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. Les bulles de conversation utilisent un fond légèrement plus clair que le bg, bordure subtile arrondie.

---

## 17. Informations à valider avant publication

1. ✅ **Pricing arbitré (avril 2026)** : 1 400 € HT (chatbot RAG simple) / sur devis (multi-bases, multilingue, système). 30 min offertes avec un expert. Aligné avec home v2 et piliers Silo 1.
2. **Mockup conversation hero** : Claude Design propose 2 ou 3 contenus de bulles candidats, le client valide celui rendu (choix entre exemple e-commerce, support, intranet).
3. **Stat "réduit la charge support de 30 à 60 %"** sec.5 cas 03 : croiser avec données réelles avant publication.
4. **Compatibilité plateformes** listées Q5 (Next.js, WordPress, Shopify, Webflow, Sharepoint, Notion) : confirmer que toutes sont effectivement supportées en standard.

---

*Document de référence rédigé le 2026-05-08. Aligné avec home-v2.md v3 et template Service canonique.*
