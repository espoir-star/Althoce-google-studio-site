# `/agent-ia/service-client/` — Métier Silo 2 (modèle vivant Métier · adaptation #3, ex-support)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 10 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> **Note d'arbitrage** : la section Pricing héritée de la home n'apparaît PAS sur les pages métier (Silo 2). **Aucun prix n'est affiché dans le contenu visible** (ni dans la prose, ni dans les modules, ni dans la FAQ, ni dans la meta description, ni dans le JSON-LD). Toute la communication est orientée valeur : ROI, payback, transformation opérationnelle. Le tarif réel est partagé en RDV après les 30 minutes offertes avec un expert.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Agent IA pour le service client : N1 absorbé en 24/7, équipe humaine concentrée sur les cas complexes » |
| `Sous-titre hero` | sec.1 | 2 lignes ciblant douleur (équipe saturée, tickets répétitifs) + libération |
| `Pills hero` | sec.1 | 3 pills chiffres marque + ROI métier |
| `Définition métier` | sec.2 | Ce qu'absorbe l'agent dans le métier support |
| `Avant / Après` | sec.3 | Split éditorial : journée type d'un agent support avant / avec agent IA |
| `Agents recommandés` | sec.4 | 4 agents Althoce support (FAQ N0, ticket N1 multilingue, statut commande, escalade enrichie) |
| `Cas client support` | sec.5 | Citation + KPI bands |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ support` | sec.10 | 8 Q/R adaptées support |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Automatisation › Agent IA service client`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « Agents recommandés »
- **Pricing** : aucun prix dans le contenu visible. Toute la page est orientée valeur (ROI, payback, transformation). Tarification partagée en RDV après les 30 minutes offertes avec un expert.
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans les pills hero)
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial, tableau dense, liste verticale, Marquee, accordéon FAQ.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 2 — Métiers** (adaptation #3 après comptabilité et commercial)

### Rôle dans l'architecture

Page métier qui cible les **directions support client** et **dirigeants SaaS / e-commerce** dont l'équipe support est saturée par les questions répétitives. Différencie clairement notre offre du simple [chatbot RAG](/services/chatbot-ia/) : ici, c'est un agent qui **prend des actions** (créer un ticket, mettre à jour un statut, escalader avec contexte) en plus de répondre.

### Objectif trafic

1. Capter les requêtes métier : « agent IA support », « agent IA tickets », « automatisation support client », « IA pour service client », « agent IA Zendesk », « agent IA Intercom », « agent IA multilingue ».
2. Convertir sur RDV découverte spécifique support.
3. Distribuer vers les pages services pertinentes ([Agents IA](/services/agents-ia/), [Chatbot IA](/services/chatbot-ia/), [Employé IA](/services/employe-ia/)) et vers les cas clients support.

### Mots-clés cibles principaux

agent IA support · agent IA tickets · automatisation support client · IA pour service client · agent IA Zendesk · agent IA Intercom · agent IA Freshdesk · IA support multilingue · agent IA support 24/7 · automatisation tickets niveau 1

### Mots-clés longue traîne

« comment automatiser le support client niveau 1 », « agent IA pour résoudre les tickets répétitifs », « IA support multilingue PME », « différence chatbot et agent IA support »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agent IA pour le service client : N1 absorbé en 24/7, équipe humaine sur les cas complexes | Althoce</title>

<meta name="description" content="Un agent IA Althoce absorbe 70 % des tickets support niveau 1, répond en 4 langues, escalade avec contexte enrichi quand c'est complexe. Temps de réponse divisé par 100, CSAT en hausse de 12 points. Tarification sur devis, 30 min offertes avec un expert.">

<meta name="keywords" content="agent IA support, agent IA tickets, automatisation support client, IA pour service client, agent IA Zendesk, agent IA Intercom, IA support multilingue">

<link rel="canonical" href="https://althoce.com/agent-ia/service-client/">

<meta property="og:title" content="Agent IA pour le service client : N1 absorbé en 24/7 | Althoce">
<meta property="og:description" content="Vos agents support saturés par les tickets répétitifs. Un agent IA absorbe le N1, escalade le complexe, libère votre équipe humaine pour la valeur.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agent-ia/service-client/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup ticket support stylisé avec timeline résolution |
| 2 | 🟢 Définition métier | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Avant / Après agent IA | Propre | Split éditorial vertical zig-zag |
| 4 | 🟢 4 agents Althoce support | Propre | Liste verticale numérotée 01→04 |
| 5 | 🟢 Cas client support | Propre | Citation pleine page + KPI bands |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ support | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'un ticket support stylisé. En-tête avec statut "✓ Résolu en 4 min · IA niveau 1", question client en français ("Bonjour, ma commande #2847 n'est pas arrivée, vous pouvez me dire où elle est ?"), réponse agent IA citant la source (suivi UPS), statut tracking inséré, signature "Agent IA Althoce · supervisé par l'équipe support". Pas une copie d'écran Zendesk réelle.

### H1

> **Agent IA pour le service client : N1 absorbé en 24/7, équipe humaine concentrée sur les cas complexes.**

### Sous-titre (2 lignes max)

> 70 % des tickets de votre support sont des questions répétitives (statut commande, réinitialisation mot de passe, info produit, retour, facturation). Un agent IA Althoce les résout en 24/7, en 4 langues, cite les sources, et escalade au support humain avec contexte enrichi dès qu'un cas demande une vraie intelligence relationnelle.

### Pills (3 max)

> +758 agents en production · 70 % de déflexion tickets N1 · Disponibilité 24/7 multilingue

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir les 4 agents support ↓ *(ancre `#agents`)*

### Note Claude Design

Le mockup ticket support est un composant `<SupportTicketMockup />` à concevoir. En-tête avec statut résolution + temps, bulle question client, bulle réponse agent IA avec citation de source, mention "supervisé par équipe". Pas une image Zendesk, un rendu HTML/CSS Althoce.

---

## 5. Section 2 — Définition métier

### H2

> **Ce qu'un agent IA absorbe vraiment dans le support client**

### Paragraphe principal

> Dans une équipe support B2C ou B2B, **70 à 80 % des tickets niveau 1 sont des questions répétitives à faible valeur ajoutée cognitive** : statut commande, suivi livraison, réinitialisation mot de passe, info produit basique, conditions de retour, statut facturation, accès compte client. Un agent IA Althoce absorbe ces tickets en autonomie complète. Il lit la question (texte libre, langage naturel, fautes de frappe ou reformulations), retrouve l'information dans votre base de connaissances ou votre back-office (commandes, factures, comptes), répond en citant la source, met à jour le ticket dans votre outil support (Zendesk, Intercom, Freshdesk, Gorgias), et clôt le ticket sans intervention humaine. Vos agents humains se concentrent sur ce qui demande de l'intelligence relationnelle : litige complexe, client mécontent, demande exceptionnelle, escalade légale ou commerciale.

### Sous-paragraphe

> Concrètement, un agent IA support Althoce est plus qu'un simple [chatbot RAG](/services/chatbot-ia/) qui répond à partir d'une FAQ. Il **agit** : il consulte votre base de commandes, met à jour les statuts CRM, déclenche un remboursement automatique sous seuil, escalade un cas complexe avec contexte enrichi (question initiale, ce qu'il a compris, pourquoi il bloque, ce qu'il propose). Pour un poste entier de support automatisé de bout en bout (couvrant N1, partie du N2, escalade orchestrée, formation continue), voir [Employé IA support](/services/employe-ia/).

### Callout `<DarkBlock />`

> **Trois questions pour qualifier votre besoin support**
>
> 1. Votre temps de réponse moyen au premier ticket dépasse-t-il 4 heures, alors que la majorité des questions ont des réponses standards ?
> 2. Votre équipe support traite-t-elle plus de 30 % de tickets répétitifs (statut commande, réinit mot de passe, FAQ basique) qui pourraient être automatisés ?
> 3. Avez-vous des pics saisonniers (Black Friday, soldes, rentrée) qui forcent à recruter en intérim ou à dégrader la qualité de service ?
>
> Si oui à 2 questions sur 3, un agent IA support transforme votre productivité. Si oui aux 3, vous perdez en CSAT (satisfaction client) en ce moment.

---

## 6. Section 3 — Avant / Après agent IA dans une équipe support

### H2

> **Avant Althoce vs Après Althoce. La journée type d'un agent support.**

### Sous-titre

> Journée type observée chez nos clients e-commerce et SaaS après déploiement.

### Split éditorial vertical zig-zag (`<BeforeAfterSplit />`)

**Avant Althoce — Journée type d'un agent support**

> **9h00** : 47 tickets en attente reçus pendant la nuit. Triage manuel. 30 minutes pour identifier les urgents.
>
> **9h30 à 11h30** : traitement répétitif. "Où est ma commande #X" (15 fois), "comment réinitialiser mon mot de passe" (8 fois), "quels sont vos délais de livraison" (12 fois). Chaque ticket prend 4 à 7 minutes en moyenne.
>
> **11h30** : un client B2B mécontent appelle en colère. 45 minutes pour calmer, comprendre, escalader au commercial.
>
> **12h30 à 14h00** : pause déjeuner, 18 nouveaux tickets s'accumulent.
>
> **14h00 à 18h00** : alternance entre tickets répétitifs et 3 cas complexes (litige facturation, problème produit défectueux, demande RGPD).
>
> **18h30** : on a traité 60 tickets, dont 50 étaient répétitifs. 2 cas complexes restent à reprendre demain. La file d'attente n'a pas vraiment diminué.

**Après Althoce — Journée type d'un agent support**

> **9h00** : lecture du dashboard. 47 tickets reçus pendant la nuit, **38 résolus automatiquement par l'agent IA** (statut commande, mot de passe, FAQ). 9 tickets escalés avec contexte enrichi (la question initiale, ce que l'agent a compris, pourquoi il a escaladé).
>
> **9h30 à 11h30** : traitement concentré des 9 tickets escalés. Chaque ticket prend 6 à 12 minutes parce qu'on entre dans le détail (l'agent a déjà fait le travail de base). 9 tickets résolus en 2 heures avec un vrai soin client.
>
> **11h30** : l'agent IA a déjà résolu 22 nouveaux tickets entrants. La file d'attente baisse.
>
> **12h30 à 14h00** : pause déjeuner, l'agent IA continue de fonctionner 24/7. Aucun ticket en backlog au retour.
>
> **14h00 à 18h00** : 5 cas complexes de l'après-midi traités sereinement (litige, RGPD, demande commerciale exceptionnelle, problème produit, escalade légale). Temps consacré : 3 heures pour 5 cas, avec qualité.
>
> **18h00** : on rentre. CSAT mensuelle en hausse de 12 points. L'agent IA continue 24/7 pendant la nuit.

### Callout sous le split

> Cette transformation se mesure aussi en CSAT (satisfaction client). Nos clients support observent en moyenne **+12 points de CSAT** sur 3 mois, principalement parce que (1) les questions simples sont résolues en 4 minutes au lieu de 18 heures, (2) les cas complexes reçoivent plus d'attention humaine, (3) l'équipe humaine n'est plus à bout.

---

## 7. Section 4 — 4 agents Althoce support *(ancre `#agents`)*

### H2

> **4 agents IA Althoce déployés en standard dans le support client**

### Sous-titre

> Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. Agent IA FAQ niveau 0 (chatbot RAG)**

> Sur votre site public ou interface client. Répond aux questions visiteur ou client à partir de votre base de connaissances (FAQ, docs produit, conditions générales, conditions de livraison). Cite les sources. Multilingue par défaut (français, anglais + 2 langues au choix). Voir aussi [Chatbot IA RAG](/services/chatbot-ia/) pour la version produit standalone.
>
> **Outils intégrés** : embed site, base de connaissances Notion / Confluence / interne, multilingue.
>
> **Délai** : 1 semaine. **Impact** : 30 à 50 % de tickets niveau 0 absorbés en autonomie complète, en moins de 30 secondes par réponse.

**02. Agent IA tickets niveau 1 multilingue**

> Intégré à votre outil support (Zendesk, Intercom, Freshdesk, Gorgias). Lit les tickets entrants, identifie les types répétitifs (statut commande, réinit, FAQ, retour, facturation), répond, met à jour le ticket et le clôt. Escalade au support humain avec contexte enrichi quand le ticket sort de son périmètre.
>
> **Outils intégrés** : Zendesk, Intercom, Freshdesk, Gorgias, votre back-office (commandes, factures, comptes).
>
> **Volume typique traité** : 60 à 80 % des tickets N1 absorbés en autonomie complète.
>
> **Délai** : 2 à 4 semaines selon le nombre d'outils branchés. **Tarif** : sur devis selon scope.

**03. Agent IA statut commande / livraison (e-commerce)**

> Spécialisé pour les e-commerces. Reçoit la question "où est ma commande ?" sur tous les canaux (mail, chat, formulaire, Instagram, Facebook), consulte la base commande + le suivi transporteur (Colissimo, UPS, DPD, Chronopost), répond avec le statut précis et le lien tracking, escalade si la commande est en anomalie (retard anormal, perdue, retour fournisseur).
>
> **Outils intégrés** : votre e-commerce (Shopify, WooCommerce, PrestaShop, Magento), transporteurs, outil support.
>
> **Impact typique** : 90 % des questions "où est ma commande" résolues en autonomie complète, sans toucher l'équipe humaine.
>
> **Délai** : 2 à 3 semaines. **Impact** : 90 % des questions "où est ma commande" résolues en autonomie, libération d'une demi-journée par agent humain et par semaine.

**04. Agent IA escalade enrichie**

> Le moins visible des quatre mais souvent le plus apprécié de l'équipe support humaine. Quand un cas est escalé, l'agent IA fait le travail de préparation : il résume le contexte, identifie les éléments clés du dossier client, propose une réponse type pré-rédigée, suggère les compensations possibles selon votre politique. L'agent humain n'arrive plus jamais "à froid" sur un ticket complexe.
>
> **Outils intégrés** : votre outil support, CRM, back-office.
>
> **Impact typique** : temps de traitement d'un cas complexe divisé par 2 grâce au pré-travail de l'agent IA.
>
> **Délai** : 2 semaines. **Tarif** : sur devis selon nombre d'outils branchés.

### Note sous la liste

> Pour un poste entier de support automatisé de bout en bout (couvrant N0, N1, partie du N2, escalade orchestrée, formation continue de la base de connaissances), voir [Employé IA support](/services/employe-ia/). Les **30 minutes offertes avec un expert** servent à qualifier la combinaison d'agents la plus pertinente pour votre contexte.

---

## 8. Section 5 — Cas client support

### H2

> **Cas client : éditeur SaaS B2B, 12 personnes au support, 70 % du N1 absorbé par l'agent IA**

### Sous-titre

> Comment un SaaS B2B a réduit son temps de réponse de 18h à 4 minutes sans embaucher.

### Bloc citation pleine page (typographie display serif XL)

> « Avant, mon équipe support croulait. 200 tickets par jour, 70 % de questions basiques qu'on aurait pu automatiser. On a déployé l'agent IA en 4 semaines. Aujourd'hui, l'IA résout 70 % du N1 en 4 minutes, et mes agents humains se concentrent sur les cas complexes. La CSAT a gagné 12 points. Personne n'a quitté l'équipe. C'est le projet IT qui a le plus changé notre quotidien en 3 ans. »
>
> *— Head of Customer Support, éditeur SaaS B2B (120 collaborateurs, 8 000 clients PME)*

### KPI bands pleine largeur (`<KPIBand />`)

| KPI | Avant | Après |
|-----|-------|-------|
| **Temps moyen de première réponse** | 18 heures | 4 minutes |
| **Taux de résolution autonome N1** | 0 % | 70 % |
| **Tickets traités / agent humain / jour** | 60 | 22 (cas complexes uniquement) |
| **CSAT mensuelle** | 67/100 | 79/100 |

### Récit court (2 paragraphes)

> Avant la mission Althoce, l'équipe support de l'éditeur SaaS gérait 200 tickets par jour avec 12 agents. 70 % des tickets étaient des questions répétitives (réinitialisation mot de passe, accès compte, statut facturation, FAQ produit). Le temps de réponse moyen au premier contact dépassait 18 heures. La direction envisageait de recruter 4 agents supplémentaires.
>
> En 4 semaines, l'agent IA a été déployé sur Zendesk avec accès à la base de connaissances produit et au back-office facturation. Aujourd'hui, l'agent IA absorbe 70 % du N1 en autonomie complète, en 4 minutes de moyenne. Les 12 agents humains sont restés mais traitent désormais 22 tickets complexes par jour au lieu de 60 répétitifs. La CSAT a gagné 12 points en 3 mois. Aucun recrutement supplémentaire n'a été nécessaire.

### Lien vers le cas complet

> [Voir le cas client complet de l'éditeur SaaS →](/cas-clients/saas-b2b-agent-ia-service-client/)

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée. Réutilisation stricte du composant `<Marquee />`.**

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 11. Section 8 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 12. Section 9 — FAQ Support (8 Q/R)

### H2

> **Questions fréquentes sur les agents IA support**

### Liste accordéon `<FAQItem />`

**Q1. Quelle est la différence entre votre agent IA support et un chatbot RAG classique ?**

Un [chatbot RAG](/services/chatbot-ia/) répond aux questions à partir d'une base de connaissances. Notre agent IA support **agit** en plus : il consulte le back-office (commandes, factures, comptes), met à jour les statuts dans Zendesk ou Intercom, déclenche un remboursement sous seuil, escalade avec contexte enrichi. C'est la différence entre une porte d'entrée informationnelle et une vraie résolution autonome.

**Q2. L'agent peut-il vraiment résoudre 70 % du N1 sans intervention humaine ?**

Oui, sur les types de tickets standardisés. Les 30 % restants se répartissent entre : 15 % de cas complexes (litiges, demandes exceptionnelles, problèmes produit) escalés à l'humain avec contexte, 10 % de questions hors périmètre (commerciales, légales) escalées au bon service, 5 % d'incertitudes où l'agent préfère escalader plutôt qu'inventer. Le ratio dépend de la qualité de votre base de connaissances et du périmètre cadré.

**Q3. Quel investissement pour un agent IA support et quel ROI attendre ?**

Tarification entièrement **sur devis** selon votre contexte : volume de tickets, nombre d'outils branchés (Zendesk, Intercom, back-office), nombre de langues à couvrir, intégration au CRM, exigences de souveraineté. Le ROI se mesure typiquement en 3 à 6 mois sur les équipes saturées, avec deux gains visibles dès le premier mois : temps moyen de première réponse divisé par 100 (passe d'heures à minutes), CSAT mensuelle en hausse de 10 à 15 points. Voir aussi [Employé IA support](/services/employe-ia/) pour un poste entier couvert de bout en bout. Tout démarre par **30 minutes offertes avec un expert** pour un devis ferme.

**Q4. L'agent peut-il s'intégrer à mon outil support existant ?**

Oui. Zendesk, Intercom, Freshdesk, Gorgias en standard. Pour les outils support internes propriétaires, voir [Intégration IA](/services/integration-ia/) qui détaille les connecteurs custom. L'agent lit et écrit dans votre outil (création de tickets escalés, mise à jour de statuts, ajout d'activités).

**Q5. L'agent supporte-t-il plusieurs langues ?**

Oui, par défaut. Français, anglais, espagnol, italien, allemand, portugais, néerlandais, mandarin et japonais en standard. Pour d'autres langues, c'est un cadrage spécifique au démarrage. L'agent répond dans la langue de la question reçue, sans configuration manuelle.

**Q6. Que se passe-t-il si l'agent IA donne une mauvaise réponse à un client ?**

Trois garde-fous. **Ancrage strict** sur la base de connaissances : pas de réponse inventée hors source. **Filtrage** des sujets sensibles (litige, RGPD, technique critique) qui sont escalés systématiquement. **Monitoring continu** : chaque réponse est notée (auto + spot-check humain), une dérive déclenche une alerte. Voir [Intégration IA](/services/integration-ia/) pour le détail des garde-fous standards.

**Q7. En combien de temps voit-on le ROI ?**

Pour un agent FAQ niveau 0 : impact dès J1 (taux de déflexion mesurable la première semaine). Pour un agent tickets niveau 1 : montée en charge progressive sur 4 à 8 semaines (l'agent apprend les patterns de votre catalogue de tickets). ROI plein typique : 3 à 6 mois selon le volume de tickets et la maturité de la base de connaissances.

**Q8. L'agent IA va-t-il remplacer mes agents support ?**

Non. Les clients qui réussissent l'intégration ne licencient pas, ils **redéploient**. Vos agents humains montent sur les cas complexes (litige, fidélisation, vente complémentaire), gagnent en compétences relationnelles, et arrêtent de s'épuiser sur la saisie. Statistique observée chez nos clients support : **0 départ d'équipe imputable au déploiement, +12 points de CSAT, et même un effet positif sur la rétention équipe** (les agents ne quittent plus l'entreprise pour fuir la répétition).

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
      "@id": "https://althoce.com/agent-ia/service-client/#service",
      "name": "Agent IA pour le service client",
      "serviceType": "AI agent for customer support",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Agents IA Althoce pour le support client : FAQ N0, tickets N1 multilingue, statut commande e-commerce, escalade enrichie. Intégration Zendesk, Intercom, Freshdesk, Gorgias. 70 % de déflexion N1 typique.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/service-client/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume de tickets, outils branchés, langues couvertes. ROI typique en 3 à 6 mois avec CSAT +10 à +15 points."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA service client", "item": "https://althoce.com/agent-ia/service-client/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Différence chatbot RAG vs agent IA support ?", "acceptedAnswer": { "@type": "Answer", "text": "Le chatbot répond, l'agent IA agit (consulte back-office, met à jour Zendesk, déclenche remboursement, escalade avec contexte enrichi)." } },
        { "@type": "Question", "name": "70 % du N1 résolu sans humain, vraiment ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui sur les types de tickets standardisés. Les 30 % restants : cas complexes escalés avec contexte. Ratio dépend de la qualité de la base de connaissances." } },
        { "@type": "Question", "name": "Quel investissement et quel ROI pour un agent IA support ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon scope. ROI typique 3 à 6 mois. Temps de réponse divisé par 100, CSAT +10 à +15 points. 30 min offertes avec un expert." } },
        { "@type": "Question", "name": "Intégration outil support existant ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Zendesk, Intercom, Freshdesk, Gorgias en standard. Outils propriétaires : connecteurs custom." } },
        { "@type": "Question", "name": "Multilingue ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Français, anglais, espagnol, italien, allemand, portugais, néerlandais, mandarin, japonais." } },
        { "@type": "Question", "name": "Si l'agent donne une mauvaise réponse ?", "acceptedAnswer": { "@type": "Answer", "text": "Ancrage strict sur base de connaissances, filtrage sujets sensibles, monitoring continu, alertes sur dérive." } },
        { "@type": "Question", "name": "ROI en combien de temps ?", "acceptedAnswer": { "@type": "Answer", "text": "Agent N0 : impact J1. Agent N1 : montée en charge sur 4-8 semaines. ROI plein typique 3 à 6 mois." } },
        { "@type": "Question", "name": "Va-t-il remplacer mes agents support ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Redéploiement sur cas complexes. +12 points CSAT, 0 départ d'équipe, meilleure rétention." } }
      ]
    }
  ]
}
```

---

## 15. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 paragraphe principal : lien vers `/services/chatbot-ia/`
- Sec.2 sous-paragraphe : liens vers `/services/chatbot-ia/` et `/services/employe-ia/`
- Sec.4 agent 01 : lien vers `/services/chatbot-ia/`
- Sec.4 note finale : lien vers `/services/employe-ia/`
- Sec.5 (cas client) : lien vers `/cas-clients/saas-b2b-agent-ia-service-client/` (à créer)
- Sec.10 Q1 : lien vers `/services/chatbot-ia/`
- Sec.10 Q3 : lien vers `/services/employe-ia/`
- Sec.10 Q4 : lien vers `/services/integration-ia/`
- Sec.10 Q6 : lien vers `/services/integration-ia/`

### Liens entrants attendus (≥ 5)

- Home (mention "agent IA support" dans la grille des cas d'usage)
- `/services/agents-ia/` (paragraphe sur les archétypes support)
- `/services/chatbot-ia/` (FAQ Q sur la différence chatbot / agent IA support)
- `/services/employe-ia/` (mention "employé IA support 24/7")
- `/services/automatisation-ia/` (12 cas concrets, support y figure)
- `/cas-clients/` (cas support pointent vers cette page)

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />`, langage visuel pricing home, `<SouveraineteSection />`, `<CTAFinalSection />`, `<Marquee />`.

### Composants existants à réutiliser

`<DarkBlock />`, `<FAQItem />`, `<NumberedListVertical />`, `<BeforeAfterSplit />`, `<KPIBand />`.

### Nouveaux composants à concevoir

- `<SupportTicketMockup />` : mockup ticket support hero (sec.1). En-tête statut + temps, bulle question client, bulle réponse agent IA avec citation source, mention "supervisé par équipe". Pas une image, un rendu HTML/CSS.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.16 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Pas de bottom nav "voir aussi".

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous-menu "Métiers" listant les 8 pages métier.
2. **Breadcrumb** : `Accueil → Automatisation → Agent IA service client`.
3. **Footer** colonne "Métiers".
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée.
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/chatbot-ia/`, `/services/employe-ia/`, `/services/automatisation-ia/`.
7. **Reading time** estimé visible : 6 min de lecture.

### Règle créativité visuelle

Patterns identiques au template métier commercial (split hero, prose+DarkBlock, split éditorial Avant/Après, liste numérotée, citation pleine page + KPI bands, Marquee, accordéon FAQ).

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres.

---

## 17. Informations à valider avant publication

1. ✅ **Règle pricing métier (mai 2026)** : aucun prix affiché dans le contenu visible (prose, modules, FAQ, meta, JSON-LD). Page entièrement orientée valeur (ROI, payback, transformation). Tarification partagée en RDV. Aligné avec home v2.
2. **Cas client éditeur SaaS B2B** : confirmer l'accord du client ou anonymiser. Cas représentatif de notre portefeuille.
3. **Chiffres KPI sec.5** (18h → 4 min, 70 % résolution N1, 60 → 22 tickets/agent, CSAT 67 → 79) : croiser avec données réelles.
4. **Outils tech cités** (Zendesk, Intercom, Freshdesk, Gorgias, Colissimo, UPS, DPD, Chronopost, Shopify, WooCommerce, PrestaShop, Magento) : usage en mention technique non-commerciale OK.
5. **Stat "+12 points CSAT" et "0 départ d'équipe imputable"** : croiser avec données HR client.
6. **9 langues supportées** Q5 (FR, EN, ES, IT, DE, PT, NL, mandarin, japonais) : confirmer le périmètre opérationnel réel chez Althoce.

---

*Document de référence rédigé le 2026-05-08. Adaptation #3 du template Métier vivant (après comptabilité et commercial). Aligné avec home-v2.md v3 et template Service canonique.*
