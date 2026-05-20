# `/agent-ia/ops/` — Métier Silo 2 (modèle vivant Métier · adaptation #7)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**

---

## 0. Préambule

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 10 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> **Note d'arbitrage** : la section Pricing héritée de la home n'apparaît PAS sur les pages métier (Silo 2). **Aucun prix n'est affiché dans le contenu visible**. Toute la communication est orientée valeur. Tarification partagée en RDV.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Agent IA pour les opérations et le back-office : mails, documents, ADV en pilote automatique » |
| `Sous-titre hero` | sec.1 | 2 lignes : douleur ops (poste pluri-tâches en burn-out cyclique, mails entrants ingérables, ADV bloquée) + libération |
| `Pills hero` | sec.1 | 3 pills chiffres marque + ROI métier |
| `Définition métier` | sec.2 | Ce qu'absorbe l'agent dans les opérations / back-office |
| `Avant / Après` | sec.3 | Split éditorial : journée type d'un assistant ops avant / avec agent IA |
| `Agents recommandés` | sec.4 | 4 agents Althoce ops (mails entrants, ADV, gestion documentaire, suivi fournisseurs) |
| `Cas client ops` | sec.5 | Citation + KPI bands (ETI industrielle ou e-commerce) |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ ops` | sec.9 | 8 Q/R adaptées ops / back-office |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Automatisation › Agent IA ops`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « Agents recommandés »
- **Pricing** : aucun prix dans le contenu visible. Page orientée valeur. Tarification partagée en RDV.
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans les pills hero)
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial, tableau dense, liste verticale, Marquee, accordéon FAQ.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 2 — Métiers** (adaptation #7)

### Rôle dans l'architecture

Page métier qui cible les **directions opérations**, les **responsables back-office**, et les **dirigeants ETI** dont les fonctions support transversales sont saturées par les tâches répétitives (traitement mails entrants, ADV, gestion documentaire, suivi fournisseurs, reporting). Le métier ops est par nature "pluri-tâches" et c'est exactement ce qui le rend épuisant pour un humain : changement de contexte permanent, urgences mélangées au quotidien, peu de visibilité sur le travail accompli. Un agent IA ops absorbe la couche répétitive et structure le reste.

### Objectif trafic

1. Capter les requêtes métier : « agent IA ops », « agent IA back-office », « automatisation ADV », « IA pour assistant administratif », « agent IA traitement mails », « IA gestion documentaire », « automatisation suivi fournisseurs ».
2. Convertir sur RDV découverte spécifique ops (30 minutes offertes avec un expert).
3. Distribuer vers les pages services pertinentes ([Agents IA](/services/agents-ia/), [Employé IA](/services/employe-ia/), [Intégration IA](/services/integration-ia/)) et vers les cas clients ops.

### Mots-clés cibles principaux

agent IA ops · agent IA back-office · automatisation ADV · IA pour assistant administratif · agent IA traitement mails · IA gestion documentaire · automatisation suivi fournisseurs · agent IA reporting opérationnel · IA opérations PME

### Mots-clés longue traîne

« comment automatiser le traitement de mails entrants », « agent IA pour gestion ADV PME », « IA pour libérer un assistant administratif », « différence RPA et agent IA ops »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agent IA pour les opérations et le back-office : mails, documents, ADV en pilote automatique | Althoce</title>

<meta name="description" content="Un agent IA Althoce absorbe les tâches répétitives transversales du back-office : tri et réponse aux mails entrants, gestion documentaire, suivi ADV, mise à jour fournisseurs. Votre équipe ops sort du burn-out cyclique. Tarification sur devis, 30 min offertes avec un expert.">

<meta name="keywords" content="agent IA ops, agent IA back-office, automatisation ADV, IA pour assistant administratif, agent IA traitement mails, IA gestion documentaire, automatisation suivi fournisseurs">

<link rel="canonical" href="https://althoce.com/agent-ia/ops/">

<meta property="og:title" content="Agent IA pour les ops : mails, documents, ADV en pilote automatique | Althoce">
<meta property="og:description" content="Poste pluri-tâches en burn-out cyclique ? Un agent IA absorbe la couche répétitive (mails, ADV, documents, fournisseurs), votre équipe ops sort du chaos.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agent-ia/ops/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup boîte mail triée avec actions automatiques |
| 2 | 🟢 Définition métier | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Avant / Après agent IA | Propre | Split éditorial vertical zig-zag |
| 4 | 🟢 4 agents Althoce ops | Propre | Liste verticale numérotée 01→04 |
| 5 | 🟢 Cas client ops | Propre | Citation pleine page + KPI bands |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ ops | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'une boîte mail triée par l'agent IA. 6 mails entrants visibles avec étiquettes automatiques (`📋 ADV: création commande`, `📦 Fournisseur: avis livraison`, `❓ Question client → escaladé`, `✅ Demande info: répondu automatiquement`, `📊 Reporting: traité`). Indicateur en bas "Mails traités aujourd'hui : 47 · Escalades humaines : 4". Pas une copie d'écran Outlook réelle.

### H1

> **Agent IA pour les opérations et le back-office : mails, documents, ADV en pilote automatique.**

### Sous-titre (2 lignes max)

> Le métier ops est paradoxal : c'est le poste le plus pluri-tâches de l'entreprise et c'est aussi celui qui n'a aucune visibilité sur son propre travail. Mails entrants ingérables, ADV qui prend du retard, documents à classer, fournisseurs à relancer. Un agent IA Althoce absorbe la couche répétitive et structure le reste. Votre équipe ops sort du burn-out cyclique.

### Pills (3 max)

> +758 agents en production · 70 % de mails N1 absorbés · ADV traitée en temps réel

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir les 4 agents ops ↓ *(ancre `#agents`)*

### Note Claude Design

Le mockup boîte mail triée est un composant `<OpsMailboxMockup />` à concevoir. 6 mails entrants avec étiquettes colorées automatiques (catégorie + action prise par l'agent), footer avec compteur de mails traités vs escalades. Pas une image Outlook réelle.

---

## 5. Section 2 — Définition métier

### H2

> **Ce qu'un agent IA absorbe vraiment dans les opérations et le back-office**

### Paragraphe principal

> Le métier ops PME est composé à **80 % de tâches répétitives à faible valeur ajoutée cognitive** : trier les 60 mails entrants quotidiens entre demandes clients, avis fournisseurs, documents administratifs, urgences, et bruit ; créer les commandes dans l'ERP à partir de mails clients ; rapprocher les bons de livraison avec les commandes ; mettre à jour les bases fournisseurs ; suivre les relances de paiement client ; préparer les rapports hebdomadaires de la direction ; gérer les notes de frais. Un agent IA Althoce absorbe ces tâches en autonomie. Vos humains gardent ce qui demande vraiment leur expertise : arbitrage client mécontent, négociation fournisseur exceptionnelle, gestion d'urgence opérationnelle, accompagnement nouveaux managers.

### Sous-paragraphe

> Concrètement, derrière un agent IA ops Althoce, on trouve une cartographie de vos processus transversaux (typiquement 5 à 12 processus identifiés au cadrage), une intégration profonde à votre [ERP / CRM / outils métier](/services/integration-ia/), et une logique d'escalade claire (l'agent fait, l'humain valide les cas sensibles ou nouveaux). Pour un poste entier d'assistant administratif ou de chargé ADV automatisé de bout en bout, voir [Employé IA](/services/employe-ia/).

### Callout `<DarkBlock />`

> **Trois questions pour qualifier votre besoin ops**
>
> 1. Votre poste d'assistant ops ou d'assistant administratif est-il en burn-out cyclique (turnover régulier sur ce poste, difficulté à recruter, plaintes récurrentes de la personne en poste) ?
> 2. Vos mails entrants opérationnels prennent-ils plus de 24 heures pour être traités, alors que la majorité ont des réponses standards ?
> 3. Votre ADV ou suivi fournisseurs prend-il du retard chaque mois, faute de bande passante équipe ?
>
> Si oui à 1 question sur 3, un agent IA ops transforme votre productivité. Si oui aux 3, votre back-office est en train de devenir un goulet d'étranglement pour le reste de l'entreprise.

---

## 6. Section 3 — Avant / Après agent IA dans une équipe ops

### H2

> **Avant Althoce vs Après Althoce. La journée type d'un assistant ops PME.**

### Sous-titre

> Journée type observée chez nos clients ETI industrielles, distributeurs et e-commerces après déploiement.

### Split éditorial vertical zig-zag (`<BeforeAfterSplit />`)

**Avant Althoce — Journée type d'un assistant ops**

> **8h30** : ouverture mail. 60 messages reçus pendant la nuit. Mélange de demandes clients, avis fournisseurs, urgences, factures, notes internes. Tri manuel à venir.
>
> **9h00 à 11h30** : alternance entre tri mails, création de commandes dans l'ERP à partir de mails clients (15 minutes par commande pour ressaisir les coordonnées et les produits), réponse à 8 questions clients basiques. Pas le temps de classer les documents reçus.
>
> **11h30** : un fournisseur appelle pour une commande en retard. 30 minutes pour comprendre où c'est bloqué.
>
> **14h00 à 17h00** : suite des mails du matin pas finis, 4 nouveaux problèmes urgents, préparation du reporting hebdo (3h pour consolider les chiffres). Documents non classés s'accumulent.
>
> **17h30** : la direction passe demander un état des relances paiement client. Pas de réponse précise, à recompiler.
>
> **18h30** : on rentre. 80 mails traités sur 90 reçus. 20 documents non classés. Reporting hebdo pas fini. Demain rebelote.

**Après Althoce — Journée type d'un assistant ops**

> **8h30** : lecture du dashboard. L'agent IA mails entrants a déjà traité 47 mails sur les 60 reçus pendant la nuit (étiquetage automatique, réponse standard envoyée pour les demandes basiques, création de 12 commandes ERP à partir des mails clients structurés). 13 mails escalés à l'humain avec contexte enrichi (cas complexes, urgences, demandes exceptionnelles).
>
> **9h00 à 11h00** : traitement concentré des 13 escalades. Chaque cas reçoit l'attention qu'il mérite, parce que le reste a été fait. L'agent suggère une réponse type pour chaque cas, l'humain ajuste et valide.
>
> **11h00** : appel fournisseur sur commande en retard. L'agent IA suivi fournisseurs a déjà identifié le problème (rupture stock chez le fournisseur déclarée hier soir) et pré-préparé la solution. 10 minutes au lieu de 30.
>
> **14h00** : reporting hebdo automatique reçu ce matin (l'agent l'a généré pendant la nuit avec les indicateurs clés). 20 minutes de relecture stratégique avant envoi direction.
>
> **15h00** : 2h pour avancer le projet de refonte du processus ADV (reportée depuis 6 mois faute de temps).
>
> **17h00** : la direction passe demander un état des relances paiement client. L'agent IA tient le tableau à jour. Réponse en 30 secondes.
>
> **17h45** : on rentre. Tous les mails traités. Documents classés en continu par l'agent. Reporting envoyé. Le projet ADV a avancé.

### Callout sous le split

> Ce gain ne se mesure pas seulement en mails traités ou en commandes créées. Il se mesure aussi en **fin du burn-out cyclique** sur le poste ops. Statistique observée : aucun de nos clients ayant déployé un agent IA ops n'a vu son assistant administratif partir après déploiement (vs un turnover annuel typique de 25 à 40 % sur ce poste dans les PME).

---

## 7. Section 4 — 4 agents Althoce ops *(ancre `#agents`)*

### H2

> **4 agents IA Althoce déployés en standard dans les opérations**

### Sous-titre

> Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. Agent IA traitement mails entrants**

> Reçoit les mails sur une boîte dédiée (`commandes@`, `contact@`, `ops@`), les classifie automatiquement (demande client, avis fournisseur, urgence, document administratif, bruit), répond aux demandes standard, crée les tickets ou les commandes dans les outils métier, escalade les cas complexes avec contexte enrichi à l'humain.
>
> **Outils intégrés** : Outlook, Gmail, ERP (SAP, Sage, Cegid), CRM (HubSpot, Salesforce), outil ticketing (Zendesk, Freshdesk).
>
> **Volume typique absorbé** : 60 à 80 % des mails N1 absorbés en autonomie complète.
>
> **Délai de mise en service** : 2 à 4 semaines selon le nombre de catégories de mails à apprendre.
>
> **Impact** : libération de 3 à 5 heures par jour pour l'humain ops, fin du backlog mails.

**02. Agent IA ADV (Administration des Ventes)**

> Crée les commandes dans l'ERP à partir des bons de commande clients reçus par mail ou portail, suit l'avancement (préparation, expédition, livraison), envoie les avis d'expédition au client, déclenche la facturation au bon moment, gère les relances de paiement amiables.
>
> **Outils intégrés** : ERP (SAP, Sage, Cegid, Microsoft Dynamics), transporteurs (Colissimo, UPS, DPD, Chronopost, FedEx), outils de facturation, banques pour rapprochement paiements.
>
> **Volume typique** : 50 à 200 commandes par mois automatisées, là où un humain en saisit 30 à 80 manuellement.
>
> **Délai** : 3 à 5 semaines (intégration ERP profonde).
>
> **Impact** : ADV en temps réel, time-to-cash réduit de plusieurs jours.

**03. Agent IA gestion documentaire**

> Reçoit les documents entrants (factures, bons de livraison, contrats, attestations, certificats), les classifie automatiquement, les renomme selon votre convention, les range dans la bonne arborescence (SharePoint, Google Drive, Dropbox, GED interne), met à jour les bases de données associées (suivi fournisseurs, suivi clients), alerte sur les documents manquants ou expirés.
>
> **Outils intégrés** : SharePoint, Google Drive, Dropbox, GED interne, OCR (Mindee, AWS Textract).
>
> **Volume typique** : 100 à 500 documents par mois classés automatiquement avec rigueur.
>
> **Délai** : 2 à 3 semaines.
>
> **Impact** : fin des "documents en attente de classement" qui s'accumulent, recherche instantanée.

**04. Agent IA suivi fournisseurs et reporting opérationnel**

> Maintient la base fournisseurs à jour (coordonnées, conditions commerciales, certifications, statut RGPD, vigilance financière), suit les contrats et alertes sur les renouvellements ou expirations, génère le reporting opérationnel hebdomadaire ou mensuel automatisé pour la direction.
>
> **Outils intégrés** : ERP, CRM fournisseurs, sources externes (Pappers, Societe.com, Infogreffe pour vigilance financière), tableurs ou outils BI (Power BI, Looker, Metabase).
>
> **Volume typique** : surveillance de 100 à 500 fournisseurs, reporting hebdo automatique.
>
> **Délai** : 3 à 4 semaines.
>
> **Impact** : zéro contrat échu sans alerte, reporting fiable et ponctuel, libération de plusieurs heures hebdo pour l'humain.

### Note sous la liste

> Pour un poste entier d'assistant administratif, de chargé ADV ou de responsable ops automatisé de bout en bout, voir [Employé IA](/services/employe-ia/). Les **30 minutes offertes avec un expert** servent à qualifier la combinaison d'agents la plus pertinente pour votre contexte.

---

## 8. Section 5 — Cas client ops

### H2

> **Cas client : distributeur B2B, équipe ops 4 personnes, mails entrants ×3 absorbés sans embauche**

### Sous-titre

> Comment un distributeur B2B a sorti son équipe ops du burn-out cyclique en 6 semaines.

### Bloc citation pleine page (typographie display serif XL)

> « On était dans un cycle infernal : assistant ops qui démissionnait tous les 12 à 18 mois, parce que le poste est insoutenable, et 6 mois pour former le remplaçant. On avait évalué le coût caché à plus de 40 000 € par an de turnover. On a déployé l'agent IA ops en 6 semaines. L'assistant en poste a sauvé sa santé mentale, on a triplé le volume de commandes traitées, et personne n'a démissionné en 14 mois. C'est le projet IT le plus rentable qu'on ait fait. »
>
> *— DAF, distributeur B2B (45 collaborateurs, e-commerce industriel)*

### KPI bands pleine largeur (`<KPIBand />`)

| KPI | Avant | Après |
|-----|-------|-------|
| **Mails entrants traités / jour** | 80 | 240 |
| **Commandes ERP créées / jour** | 25 | 75 |
| **Documents classés rapidement** | 60 % | 100 % |
| **Turnover poste ops 12 mois** | 80 % (1 dém.) | 0 % |

### Récit court (2 paragraphes)

> Avant la mission Althoce, l'équipe ops 4 personnes du distributeur B2B subissait un turnover récurrent sur le poste d'assistant administratif. Le poste cumule mails entrants, ADV, gestion documentaire, suivi fournisseurs, relances. La personne en poste tenait 12 à 18 mois avant le burn-out et la démission. Le coût caché du turnover (recrutement, formation, perte de productivité pendant la transition) dépassait 40 000 € annuels.
>
> En 6 semaines, 3 agents IA ops ont été déployés (mails entrants, ADV, gestion documentaire). L'assistant en poste est passé d'exécution sous pression à validation et arbitrage. Le volume traité a triplé sans embauche. 14 mois plus tard, la personne est toujours en poste, monte en compétences sur des sujets plus stratégiques (refonte processus, accompagnement managers), et l'entreprise a gagné en stabilité organisationnelle.

### Lien vers le cas complet

> [Voir le cas client complet du distributeur B2B →](/cas-clients/distributeur-b2b-agent-ia-ops/)

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée.**

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 11. Section 8 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 12. Section 9 — FAQ Ops (8 Q/R)

### H2

> **Questions fréquentes sur les agents IA opérations**

### Liste accordéon `<FAQItem />`

**Q1. Quelle est la différence entre un agent IA ops et un RPA (Robotic Process Automation) classique ?**

Un RPA suit des règles fixes ("si tu reçois un mail avec X, alors Y"). Il plante dès qu'un cas sort du scénario prévu. Un agent IA ops Althoce **comprend le contexte** d'un mail en langage naturel, s'adapte aux reformulations, gère les exceptions, escalade intelligemment. Concrètement : le RPA traite 30 % des cas, l'agent IA en traite 70 à 80 %. Pour les sujets où vous avez déjà un RPA (Blue Prism, UiPath, Automation Anywhere), nous pouvons même intégrer l'agent IA en surcouche pour gérer les exceptions que le RPA ne sait pas traiter.

**Q2. L'agent peut-il vraiment comprendre des mails clients ou fournisseurs en langage naturel ?**

Oui. Modèles LLM (Mistral, Claude, GPT) qui comprennent le français professionnel, les reformulations, les fautes de frappe, les abréviations métier. Détection des intentions sous-jacentes (un client qui écrit "il n'est pas arrivé" doit déclencher un check commande, un fournisseur qui écrit "rupture sur la référence X" doit déclencher une alerte stock). Test au cadrage sur 200 mails historiques de votre boîte pour calibrer la précision.

**Q3. Quel investissement pour un agent IA ops et quel ROI attendre ?**

Tarification entièrement **sur devis** selon votre contexte : volume de mails ou commandes à traiter, nombre d'outils branchés (ERP, CRM, ticketing, transporteurs, GED), profondeur d'intégration. Le ROI typique se mesure en 3 à 6 mois sur les équipes ops saturées. Indicateur fort observé : **fin du turnover sur le poste assistant ops** (coût caché souvent supérieur à 40 K€/an dans les PME). Tout démarre par **30 minutes offertes avec un expert** pour un devis ferme.

**Q4. L'agent peut-il s'intégrer à mon ERP existant (SAP, Sage, Cegid, Dynamics) ?**

Oui. SAP, Sage (toutes versions, on-premise ou cloud), Cegid, Microsoft Dynamics, Odoo en standard. Pour les ERP propriétaires ou anciennes versions sans API, voir [Intégration IA](/services/integration-ia/) qui détaille les connecteurs custom (API quand disponible, RPA en surcouche sinon).

**Q5. Que se passe-t-il si l'agent crée une commande erronée dans l'ERP ?**

Trois garde-fous. **Premier niveau** : validation humaine systématique sur les commandes "sensibles" (montant > seuil défini au cadrage, nouveau client, demande exceptionnelle). **Deuxième niveau** : checks de cohérence automatiques (référence produit existante, prix dans la fourchette du tarif client, conditions de paiement valides). **Troisième niveau** : log auditable de chaque action, possibilité d'annulation rapide. Taux d'erreur observé chez nos clients : inférieur à 0,3 % sur les commandes automatisées.

**Q6. L'agent va-t-il remplacer mon assistant administratif ?**

Non. L'assistant en poste est **redéployé sur les sujets à valeur** (validation, arbitrage, accompagnement managers, projet refonte processus). Statistique observée : aucun assistant ops n'a quitté l'entreprise suite au déploiement, et le turnover historique sur ce poste a chuté drastiquement. La transformation : passage d'exécutant sous pression à pilote orchestrateur.

**Q7. Mes données opérationnelles (clients, fournisseurs, commandes) restent-elles confidentielles ?**

Oui. Anonymisation des PII (noms clients, IBAN, adresses) avant tout envoi LLM si vous utilisez les modèles propriétaires (OpenAI, Anthropic). Pour la souveraineté maximale (secteurs sensibles comme défense, santé, finance), Mistral hébergé en France + auto-hébergement infra possible. Voir [home / Souveraineté](/#souverainete).

**Q8. En combien de temps voit-on les premiers résultats ?**

Pour un agent traitement mails : impact dès la première semaine après go-live (volume traité immédiat, calibrage sur 2-3 semaines). Pour un agent ADV : montée en charge sur 3 à 4 semaines (l'agent apprend les patterns de votre catalogue produits et clients). Pour un agent gestion documentaire : impact immédiat. ROI plein typique 3 à 6 mois.

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
      "@id": "https://althoce.com/agent-ia/ops/#service",
      "name": "Agent IA pour les opérations et le back-office",
      "serviceType": "AI agent for operations and back-office automation",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Agents IA Althoce pour les opérations : traitement mails entrants, ADV automatisée, gestion documentaire, suivi fournisseurs et reporting opérationnel. Intégration ERP (SAP, Sage, Cegid, Dynamics, Odoo).",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/ops/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume, outils branchés, scope. ROI typique 3 à 6 mois. Fin du turnover assistant ops fréquent (coût caché >40 K€/an)."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA ops", "item": "https://althoce.com/agent-ia/ops/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Différence agent IA ops vs RPA classique ?", "acceptedAnswer": { "@type": "Answer", "text": "RPA suit règles fixes (30 % des cas). Agent IA comprend le contexte, s'adapte, escalade (70-80 % des cas)." } },
        { "@type": "Question", "name": "Comprend-il les mails en langage naturel ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. LLM (Mistral, Claude, GPT) en français pro. Détection intentions sous-jacentes. Calibrage sur 200 mails historiques." } },
        { "@type": "Question", "name": "Quel investissement et quel ROI ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon scope. ROI 3-6 mois. Fin du turnover ops (coût caché >40K€/an)." } },
        { "@type": "Question", "name": "Intégration ERP existant ?", "acceptedAnswer": { "@type": "Answer", "text": "SAP, Sage, Cegid, Microsoft Dynamics, Odoo. ERP propriétaires : connecteurs custom." } },
        { "@type": "Question", "name": "Si l'agent crée une commande erronée ?", "acceptedAnswer": { "@type": "Answer", "text": "Validation humaine sur sensibles, checks de cohérence, log auditable. Taux d'erreur <0,3 %." } },
        { "@type": "Question", "name": "Va-t-il remplacer mon assistant ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Redéploiement sur validation et arbitrage. Turnover historique chute drastiquement." } },
        { "@type": "Question", "name": "Confidentialité données ?", "acceptedAnswer": { "@type": "Answer", "text": "Anonymisation PII. Mistral + auto-hébergement pour souveraineté max." } },
        { "@type": "Question", "name": "ROI en combien de temps ?", "acceptedAnswer": { "@type": "Answer", "text": "Mails : impact J1. ADV : 3-4 semaines. Documents : immédiat. ROI plein 3-6 mois." } }
      ]
    }
  ]
}
```

---

## 15. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 sous-paragraphe : liens vers `/services/integration-ia/` et `/services/employe-ia/`
- Sec.4 note finale : lien vers `/services/employe-ia/`
- Sec.5 (cas client) : lien vers `/cas-clients/distributeur-b2b-agent-ia-ops/` (à créer)
- Sec.9 Q4 : lien vers `/services/integration-ia/`
- Sec.9 Q7 : lien vers `/#souverainete`

### Liens entrants attendus (≥ 5)

- Home (mention "agent IA ops" dans la grille des cas d'usage)
- `/services/agents-ia/` (paragraphe sur les archétypes ops)
- `/services/employe-ia/` (mention "employé IA assistant administratif / chargé ADV")
- `/services/automatisation-ia/` (12 cas concrets, ops y figure)
- `/agent-ia/finance/` (cross-link, l'ADV touche la facturation)
- `/cas-clients/` (cas ops pointent vers cette page)

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />`, `<SouveraineteSection />`, `<CTAFinalSection />`, `<Marquee />`. Pas de section Pricing héritée.

### Composants existants à réutiliser

`<DarkBlock />`, `<FAQItem />`, `<NumberedListVertical />`, `<BeforeAfterSplit />`, `<KPIBand />`.

### Nouveaux composants à concevoir

- `<OpsMailboxMockup />` : mockup boîte mail triée hero (sec.1). 6 mails entrants avec étiquettes colorées automatiques (catégorie + action prise par l'agent), footer compteur mails traités vs escalades. Pas une image Outlook.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.15 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous-menu "Métiers".
2. **Breadcrumb** : `Accueil → Automatisation → Agent IA ops`.
3. **Footer** colonne "Métiers".
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée.
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/`, `/agent-ia/finance/` (cross-link ADV / facturation).
7. **Reading time** estimé visible : 6 min de lecture.

### Règle créativité visuelle

Patterns identiques au template métier vivant. Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`. Inter / Satoshi.

---

## 17. Informations à valider avant publication

1. ✅ **Règle pricing métier (mai 2026)** : aucun prix affiché dans le contenu visible. Tarification partagée en RDV.
2. **Cas client distributeur B2B** : confirmer l'accord ou anonymiser.
3. **Chiffres KPI sec.5** (80 → 240 mails/jour, 25 → 75 commandes/jour, turnover 80 % → 0 %) : croiser avec données réelles.
4. **Coût caché turnover assistant ops "> 40 K€/an"** : valider l'évaluation et la formulation.
5. **Outils tech cités** (SAP, Sage, Cegid, Dynamics, Odoo, Outlook, Gmail, SharePoint, Drive, Dropbox, Colissimo, UPS, DPD, Chronopost, FedEx, Pappers, Mindee, AWS Textract, Power BI, Looker, Metabase, Blue Prism, UiPath, Automation Anywhere) : usage en mention technique non-commerciale OK.

---

*Document de référence rédigé le 2026-05-08. Adaptation #7 du template Métier vivant. Aligné avec home-v2.md v3 et règle "focus valeur, pas de prix dans le contenu".*
