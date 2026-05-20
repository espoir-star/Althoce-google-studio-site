# `/agent-ia/` — Hub Silo 2 · Agents IA par métier

> **Cette page est le hub Silo 2. Elle aggrège, organise et oriente le visiteur vers les 9 pages métier. Elle est DISTINCTE de `/services/agents-ia/` (page pilier qui parle du produit "agent IA" en tant que concept Althoce).**

---

## 0. Préambule

### Différence avec `/services/agents-ia/`

| Page | Question à laquelle elle répond | Orientation |
|------|--------------------------------|-------------|
| `/services/agents-ia/` | **« Qu'est-ce qu'un agent IA Althoce et comment ça marche concrètement ? »** | Produit, concept, méthode, archétypes commercial/opérationnel/support, comparaison vs chatbot/workflow |
| `/agent-ia/` (cette page) | **« Je suis [DRH / DAF / directeur commercial / juriste]. Quels agents Althoce peuvent m'aider concrètement ? »** | Métier, fonction, cas d'usage, sélection rapide par profil professionnel |

Les deux pages sont complémentaires : le visiteur qui cherche à comprendre le produit Althoce arrive sur `/services/agents-ia/`. Le visiteur qui sait ce qu'il fait dans sa journée et cherche quoi automatiser arrive sur `/agent-ia/`. **Aucun chevauchement dans le rôle commercial.**

### Sections héritées

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 4 | Méthode | `home-v2.md` | `<MethodologySection />` |
| 5 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 7 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> **Note d'arbitrage** : la section Pricing héritée de la home n'apparaît PAS sur le hub `/agent-ia/` (cohérent avec la règle Silo 2 appliquée à toutes les pages métier). Aucun prix dans le contenu visible. Toute la communication est orientée valeur.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero | « Agents IA par métier : trouvez ce qui fait la différence dans votre fonction » |
| `Sous-titre` | Hero | 1 ligne qui pose l'angle "par métier" vs "par concept" |
| `Quizz d'orientation` | sec.2 | 4 questions courtes pour orienter vers le bon métier |
| `Liste des 8 métiers` | sec.3 | Présentation visuelle des 8 fonctions cœur (finance, commercial, service client, RH, marketing, ops, juridique, achats) |
| `Modalité transverse téléphonique` | sec.4 | Présentation distincte du téléphonique (modalité plutôt que métier) |
| `FAQ hub` | sec.6 | 5 Q/R d'orientation métier |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Automatisation › Agents IA par métier`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers quizz d'orientation
- **Pricing** : aucun prix dans le contenu visible. Page orientée valeur. Tarification partagée en RDV.
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **JSON-LD obligatoires** : `CollectionPage` + `BreadcrumbList` + `ItemList` (les 9 pages métier)
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3 par défaut. Patterns : split éditorial, quizz interactif, liste éditoriale en alternance, accordéon FAQ, schéma SVG écosystème. Aucun label décoratif.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 2 — Hub métiers**

### Rôle dans l'architecture

Le hub `/agent-ia/` est le point d'entrée central du Silo 2 pour les visiteurs qui pensent **par métier / fonction** plutôt que par produit. Il sert deux publics distincts :

1. Le **dirigeant ou manager opérationnel** (DRH, DAF, directeur commercial, directeur marketing, directeur ops) qui sait ce que son équipe fait et cherche quoi automatiser concrètement. Il n'a pas le temps de lire un argumentaire produit générique. Il veut voir directement "voici les agents IA pour ma fonction".

2. Le **visiteur en exploration** qui hésite sur le bon point d'entrée et veut une vue d'ensemble cartographiée des cas d'usage Althoce. Le quizz d'orientation lui permet de se positionner en 30 secondes.

### Objectif trafic

1. Capter les requêtes par métier : « agent IA par métier », « cas d'usage agent IA », « agent IA pour [DRH / DAF / commercial / marketing] », « catalogue agents IA entreprise ».
2. Distribuer vers les 9 pages métier `/agent-ia/[métier]/` (objectif : maximiser le clic vers la bonne page).
3. Renforcer le SEO global sur les requêtes longue traîne "agent IA + métier".

### Mots-clés cibles principaux

agents IA par métier · catalogue agents IA · cas d'usage agent IA · agent IA pour DRH · agent IA pour DAF · agent IA pour direction commerciale · agents IA fonctions entreprise · hub agents IA Althoce · agent IA par fonction

### Mots-clés longue traîne

« quels agents IA pour ma fonction », « catalogue agent IA PME », « agent IA pour ma direction commerciale », « agent IA par département entreprise »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agents IA par métier : trouvez ce qui fait la différence dans votre fonction | Althoce</title>

<meta name="description" content="Catalogue des agents IA Althoce par métier : finance, commercial, service client, RH, marketing, ops, juridique, achats, téléphonique. Cas d'usage concrets par fonction, agents pré-conçus, déploiement en quelques semaines. Tarification sur devis, 30 min offertes avec un expert.">

<meta name="keywords" content="agents IA par métier, catalogue agents IA, cas d'usage agent IA, agent IA pour DRH, agent IA pour DAF, agent IA pour direction commerciale, hub agents IA Althoce, agent IA par fonction">

<link rel="canonical" href="https://althoce.com/agent-ia/">

<meta property="og:title" content="Agents IA par métier : trouvez ce qui fait la différence dans votre fonction | Althoce">
<meta property="og:description" content="Vous êtes DRH, DAF, directeur commercial ou marketing ? Voyez directement les agents IA Althoce pour votre fonction. 9 métiers couverts, cas concrets, déploiement rapide.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agent-ia/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite schéma SVG écosystème (9 métiers en cercle autour d'un avatar Althoce central) |
| 2 | 🟢 Définition + différenciation avec /services/agents-ia/ | Propre | Prose + tableau comparatif 2 colonnes |
| 3 | 🟢 Quizz d'orientation 4 questions | Propre | Composant interactif vertical |
| 4 | 🟢 8 métiers cœur (présentation détaillée) | Propre | Liste éditoriale alternance gauche/droite (zig-zag), 1 métier par bloc |
| 5 | 🟢 Modalité transverse : agent IA téléphonique | Propre | Bloc dédié distinct (pas dans la liste métier, présenté comme modalité) |
| 6 | 🏠 Méthode | Hérité home | `<MethodologySection />` |
| 7 | 🏠 Souveraineté | Hérité home | `<SouveraineteSection />` |
| 8 | 🟢 FAQ hub d'orientation | Propre | Accordéon `<FAQItem />` |
| 9 | 🏠 CTA final | Hérité home | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : schéma SVG écosystème. Un avatar Althoce stylisé au centre, 9 bulles métier en orbite autour (Finance, Commercial, Service client, Téléphonique, RH, Marketing, Ops, Juridique, Achats), reliées par des lignes fines azure. Chaque bulle est cliquable / hoverable, renvoie vers la page métier correspondante. Une bulle se distingue visuellement comme "modalité transverse" (téléphonique).

### H1

> **Agents IA par métier : trouvez ce qui fait la différence dans votre fonction.**

### Sous-titre (1 à 2 lignes)

> Vous savez ce que votre équipe fait dans la journée. Vous savez où le temps se perd. Plutôt que de comprendre un produit en abstraction, voyez directement les agents IA Althoce conçus pour votre métier : finance, commercial, service client, RH, marketing, ops, juridique, achats. Plus la modalité téléphonique qui transverse les autres.

### Pills (3 max)

> 9 métiers couverts · +758 agents en production · 4 cas d'usage par métier en moyenne

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Trouver le bon métier en 4 questions ↓ *(ancre `#orientation`)*

### Note Claude Design

Le schéma écosystème à droite est un composant `<MetiersEcosystemMockup />` à concevoir. 9 bulles métier disposées en cercle autour d'un avatar Althoce central, lignes de connexion azure subtiles. Survol révèle un titre court + nombre d'agents pour le métier. Click renvoie vers la page métier. Le bouton "téléphonique" est visuellement distinct (modalité plutôt que fonction). Pas une image, un rendu SVG/HTML.

---

## 5. Section 2 — Pourquoi cette page et pas `/services/agents-ia/`

### H2

> **Deux entrées dans nos agents IA. Vous choisissez celle qui vous parle.**

### Paragraphe principal

> Quand on parle d'agents IA, il y a deux façons d'aborder le sujet. **L'entrée produit** : qu'est-ce qu'un agent IA Althoce, comment ça fonctionne techniquement, en quoi c'est différent d'un chatbot ou d'un workflow no-code, quelle méthode de déploiement. Cette entrée est traitée dans notre page [Agents IA sur-mesure](/services/agents-ia/), qui s'adresse aux DSI, CTO et dirigeants qui veulent comprendre le produit avant d'engager. **L'entrée métier** : je suis DRH, DAF, directeur commercial ou directeur marketing, qu'est-ce qu'Althoce a déjà conçu pour ma fonction ? Cette entrée est celle de la page que vous lisez actuellement. Les deux pages sont complémentaires : si vous êtes en exploration, commencez par votre métier (ci-dessous). Si vous voulez comprendre le produit en profondeur, passez par [/services/agents-ia/](/services/agents-ia/).

### Tableau comparatif (`<ComparisonTable />`)

| Vous êtes... | Allez plutôt sur... |
|--------------|----------------------|
| Dirigeant ou responsable d'une fonction (commercial, RH, finance, marketing, etc.) | **`/agent-ia/` (cette page)** : sélection par votre métier |
| DSI / CTO / responsable IA interne qui veut comprendre le produit | **[`/services/agents-ia/`](/services/agents-ia/)** : produit, méthode, archétypes commercial/opérationnel/support |
| Acheteur en exploration sans angle préféré | Les deux fonctionnent. Le quizz ci-dessous oriente en 30 secondes |

### Callout `<DarkBlock />`

> **En une phrase**
>
> `/services/agents-ia/` répond à « qu'est-ce qu'on vend ». `/agent-ia/` répond à « qu'est-ce qu'on fait pour vous spécifiquement ». Les deux sont fondés sur les mêmes agents, présentés sous deux angles.

---

## 6. Section 3 — Quizz d'orientation par métier *(ancre `#orientation`)*

### H2

> **Quel agent IA Althoce pour vous ? Quatre questions pour vous orienter en 30 secondes.**

### Sous-titre

> Plutôt que de parcourir 9 pages métier en aveugle, quatre questions courtes vous orientent vers la fonction la plus pertinente pour votre cas. Vous pouvez aussi parcourir directement la liste plus bas.

### Composant `<MetierWizard />` (à concevoir)

Quatre questions séquentielles, une réponse par question, animations de transition douces.

**Question 1. Dans votre quotidien, où le temps se perd le plus ?**

- Saisie comptable, factures, rapprochement bancaire → orienté **Finance**
- Prospection commerciale, qualification leads, prise de RDV → orienté **Commercial**
- Réponses aux questions clients, tickets répétitifs → orienté **Service client**
- Tri CV, gestion paie, questions internes collaborateurs → orienté **RH**
- Production de contenu, posts LinkedIn, articles, emails → orienté **Marketing**
- Mails entrants, ADV, gestion documentaire, suivi fournisseurs → orienté **Ops**
- Analyse contrats, veille réglementaire, rédaction NDA → orienté **Juridique**
- Sourcing fournisseurs, analyse devis, suivi contrats → orienté **Achats**
- Appels téléphoniques (entrants ou sortants) → orienté **Téléphonique**

**Question 2. Vous êtes plutôt...**

- Dirigeant / responsable d'une équipe → on continue vers le métier identifié en Q1
- DSI / CTO → orientation supplémentaire vers `/services/agents-ia/` pour le contexte produit
- Acheteur externe (consultant, intégrateur) → on présente le pricing arbitré et la méthode

**Question 3. Quelle est votre maturité IA actuelle ?**

- Aucun déploiement IA → on oriente vers le métier choisi + l'audit IA en amont
- Quelques outils en test (ChatGPT entreprise, copilote) → on oriente vers le métier + l'onboarding outils
- Déjà déployé des agents IA → on présente les agents avancés + l'employé IA

**Question 4. Quel est votre horizon ?**

- Tester rapidement un cas → page métier + agent simple cas borné
- Couvrir un poste entier → page métier + [employé IA](/services/employe-ia/)
- Refondre un processus complet → page métier + [automatisation IA](/services/automatisation-ia/)

### Note sous le quizz

> Le quizz vous oriente, il ne décide pas. Vous pouvez à tout moment réserver les **30 minutes offertes avec un expert** pour valider votre orientation et construire un programme adapté.

---

## 7. Section 4 — 8 métiers cœur (présentation détaillée)

### H2

> **8 fonctions cœur d'entreprise, 8 pages métier dédiées**

### Sous-titre

> Pour chaque métier, retrouvez 4 agents IA Althoce déjà déployés en production, des cas clients chiffrés, et la grille des questions fréquentes spécifiques à votre fonction.

### Présentation en liste éditoriale alternance zig-zag (`<MetierBlockSplit />`)

**01. Finance et comptabilité** *(image / mockup à droite)*

[Agent IA pour la finance et la comptabilité →](/agent-ia/finance/)

> Saisie, factures fournisseurs, rapprochement bancaire, reporting financier, assistance DAF. 80 % de la saisie absorbée, capacité doublée sans recruter, ROI inférieur à 6 mois. Cas client : cabinet d'expertise comptable Lyon, ×2 capacité à effectif constant. **Public** : DAF, expert-comptable, responsable comptable.

**02. Commercial** *(image / mockup à gauche)*

[Agent IA pour le commercial →](/agent-ia/commercial/)

> Prospection, qualification leads, prise de RDV, relance pipeline, suivi post-vente. Vos commerciaux passent du temps de prospection au temps de closing. Cas client : négoce de vins bordelais, +200 % de RDV qualifiés en 4 mois. **Public** : dirigeant PME, directeur commercial, responsable développement.

**03. Service client** *(image / mockup à droite)*

[Agent IA pour le service client →](/agent-ia/service-client/)

> Support N1, tickets multilingue, statut commande e-commerce, escalade enrichie. 70 % du N1 résolu en autonomie en 4 minutes au lieu de 18 heures. CSAT +12 points. Cas client : éditeur SaaS B2B 8 000 clients PME. **Public** : Head of Customer Success, responsable SAV, e-commerce.

**04. RH** *(image / mockup à gauche)*

[Agent IA pour les RH →](/agent-ia/rh/)

> Tri CV anti-biais documenté, qualification candidats téléphonique, assistant RH interne 24/7, onboarding new hire. Conformité RGPD native opposable. Cas client : cabinet de recrutement parisien, 700 CV/semaine triés sérieusement. **Public** : DRH, responsable recrutement, cabinet de recrutement.

**05. Marketing** *(image / mockup à droite)*

[Agent IA pour le marketing →](/agent-ia/marketing/)

> Génération contenu multi-canal au ton de marque, SEO sémantique, email marketing segmenté, veille concurrentielle continue. Volume contenu ×3 à ×5 sans embauche. Cas client : éditeur SaaS B2B, trafic organique +140 % en 6 mois. **Public** : CMO, responsable marketing, directeur communication.

**06. Opérations / back-office** *(image / mockup à gauche)*

[Agent IA pour les opérations →](/agent-ia/ops/)

> Traitement mails entrants, ADV automatisée, gestion documentaire, suivi fournisseurs. Fin du burn-out cyclique sur le poste assistant ops (turnover historique 80 % → 0 %). Cas client : distributeur B2B, mails ×3 absorbés sans embauche. **Public** : directeur opérations, responsable back-office, COO.

**07. Juridique** *(image / mockup à droite)*

[Agent IA pour le juridique →](/agent-ia/juridique/)

> Analyse contractuelle de pré-décision, veille réglementaire, rédaction documents standards, recherche jurisprudence. Strict mode pré-analyse à décharge (jamais conseil opposable). Souveraineté France maximale par défaut. Cas client : direction juridique ETI agroalimentaire, 600 contrats/an. **Public** : juriste interne, directeur juridique, avocat.

**08. Achats** *(image / mockup à gauche)*

[Agent IA pour les achats →](/agent-ia/achats/)

> Sourcing fournisseurs accéléré, analyse devis comparatif pondéré transparent, suivi contrats avec alertes, vigilance financière continue. 3 à 7 % d'économies achats supplémentaires la première année. Cas client : ETI industrielle, 1,2 M€ d'économies sur 30 M€ d'achats annuels. **Public** : directeur des achats, responsable achats, DAF.

---

## 8. Section 5 — Modalité transverse : agent IA téléphonique

### H2

> **Une modalité transverse, pas un métier : l'agent IA téléphonique**

### Sous-titre

> Le téléphonique est traité à part dans notre catalogue car ce n'est pas une fonction d'entreprise mais une **modalité technique** qui peut servir n'importe quel métier ayant des appels (commercial, service client, RH avec qualification candidats, achats avec relances fournisseurs).

### Bloc présentation

[Agent IA téléphonique →](/agent-ia/telephonique/)

> Réception standard 24/7 en voix naturelle française, qualification commerciale entrante, rappels sortants automatisés (RDV médical, relances paiement, sondages), support vocal N0. Stack VoIP (Twilio, Ringover, Aircall) + voix naturelle (ElevenLabs, Cartesia) + intégration CRM. Pas un IVR à touches, une vraie conversation.

### Note sur la combinaison

> En pratique, beaucoup de nos clients combinent un agent métier (commercial, RH, service client) avec la modalité téléphonique. Exemple : un agent SDR commercial qui prospecte sur LinkedIn et email, doublé d'un agent téléphonique qui qualifie les appels prospects entrants en 24/7. Au cadrage, on identifie la bonne combinaison.

---

## 9. Section 6 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />`.**

---

## 10. Section 7 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />`.**

---

## 11. Section 8 — FAQ hub d'orientation (5 Q/R)

### H2

> **Questions fréquentes pour vous orienter**

### Liste accordéon `<FAQItem />`

**Q1. Quelle est la différence entre `/agent-ia/` et `/services/agents-ia/` ?**

Les deux pages traitent du même produit (les agents IA Althoce) sous deux angles différents. **`/services/agents-ia/`** est la page produit : qu'est-ce qu'un agent IA, comment ça fonctionne, méthode, archétypes commercial/opérationnel/support, comparaison vs chatbot et workflow no-code. C'est l'entrée pour les DSI, CTO, et dirigeants qui veulent comprendre la nature de notre offre avant d'engager. **`/agent-ia/`** (cette page) est l'entrée par métier : je suis DRH ou directeur commercial, montrez-moi directement ce que vous avez pour ma fonction. Les deux pages sont complémentaires et se renvoient mutuellement.

**Q2. Si je ne vois pas mon métier exact dans la liste des 8, que faire ?**

Les 8 métiers couverts sont les fonctions cœur des PME et ETI françaises (finance, commercial, service client, RH, marketing, ops, juridique, achats). Si votre fonction est plus spécifique (par exemple chargé de mission RSE, responsable qualité, contrôleur de gestion industriel), réservez les **30 minutes offertes avec un expert**. Dans 9 cas sur 10, votre besoin se rattache à une des 8 fonctions cœur, ou nécessite une combinaison de 2-3 agents existants. Les nouveaux cas d'usage rares font l'objet d'un cadrage spécifique.

**Q3. Comment se passe la première prise de contact ?**

Trois étapes simples. Vous prenez les **30 minutes offertes avec un expert** via le bouton "Discuter de votre projet". On qualifie votre besoin métier en 30 minutes (cas concret, contraintes, urgence). On vous envoie un devis ferme sous 5 jours ouvrés. Vous décidez de signer ou pas, sans engagement.

**Q4. Faut-il combiner plusieurs métiers / agents ?**

Souvent, oui. Les fonctions d'entreprise s'imbriquent. Un agent commercial qui qualifie les leads inbound peut envoyer les bons profils à un agent téléphonique pour la qualification. Un agent finance qui traite les factures fournisseurs s'articule avec un agent achats qui suit les contrats. Un agent service client gère les tickets écrits, l'agent téléphonique prend les appels. Le bon mix se définit au cadrage en fonction de votre architecture organisationnelle.

**Q5. Et si je veux couvrir un poste entier plutôt que des agents séparés ?**

Voyez [Employé IA](/services/employe-ia/). Là où les agents traitent des cas d'usage bornés, un employé IA couvre **un rôle entier** (SDR de bout en bout, comptable de bout en bout, support 24/7) avec mémoire long-terme, identité de marque, rituels d'équipe (stand-ups, revue mensuelle). Le format le plus radical, pour les structures dont un poste n'est plus tenable en interne.

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
      "@id": "https://althoce.com/agent-ia/#collection",
      "name": "Agents IA Althoce par métier",
      "description": "Catalogue des agents IA Althoce organisés par métier : finance, commercial, service client, RH, marketing, ops, juridique, achats. Plus la modalité transverse téléphonique. Cas d'usage concrets, cas clients chiffrés.",
      "url": "https://althoce.com/agent-ia/"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agents IA par métier", "item": "https://althoce.com/agent-ia/" }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Agents IA Althoce par métier",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://althoce.com/agent-ia/finance/", "name": "Agent IA pour la finance et la comptabilité" },
        { "@type": "ListItem", "position": 2, "url": "https://althoce.com/agent-ia/commercial/", "name": "Agent IA pour le commercial" },
        { "@type": "ListItem", "position": 3, "url": "https://althoce.com/agent-ia/service-client/", "name": "Agent IA pour le service client" },
        { "@type": "ListItem", "position": 4, "url": "https://althoce.com/agent-ia/rh/", "name": "Agent IA pour les RH" },
        { "@type": "ListItem", "position": 5, "url": "https://althoce.com/agent-ia/marketing/", "name": "Agent IA pour le marketing" },
        { "@type": "ListItem", "position": 6, "url": "https://althoce.com/agent-ia/ops/", "name": "Agent IA pour les opérations" },
        { "@type": "ListItem", "position": 7, "url": "https://althoce.com/agent-ia/juridique/", "name": "Agent IA pour le juridique" },
        { "@type": "ListItem", "position": 8, "url": "https://althoce.com/agent-ia/achats/", "name": "Agent IA pour les achats" },
        { "@type": "ListItem", "position": 9, "url": "https://althoce.com/agent-ia/telephonique/", "name": "Agent IA téléphonique (modalité transverse)" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Différence /agent-ia/ vs /services/agents-ia/ ?", "acceptedAnswer": { "@type": "Answer", "text": "/services/agents-ia/ = entrée produit (qu'est-ce qu'un agent IA). /agent-ia/ = entrée métier (qu'est-ce qu'on a pour votre fonction). Complémentaires." } },
        { "@type": "Question", "name": "Mon métier exact n'est pas dans la liste ?", "acceptedAnswer": { "@type": "Answer", "text": "8 métiers cœur. 30 min offertes avec un expert pour valider votre besoin spécifique ou trouver la bonne combinaison." } },
        { "@type": "Question", "name": "Comment se passe la première prise de contact ?", "acceptedAnswer": { "@type": "Answer", "text": "30 minutes offertes, devis ferme sous 5 jours, décision sans engagement." } },
        { "@type": "Question", "name": "Faut-il combiner plusieurs métiers / agents ?", "acceptedAnswer": { "@type": "Answer", "text": "Souvent oui. Les fonctions s'imbriquent. Le bon mix se définit au cadrage." } },
        { "@type": "Question", "name": "Couvrir un poste entier au lieu d'agents séparés ?", "acceptedAnswer": { "@type": "Answer", "text": "Voir Employé IA. Rôle entier avec mémoire, identité de marque, rituels d'équipe." } }
      ]
    }
  ]
}
```

---

## 14. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.1 schéma écosystème hero : 9 bulles cliquables vers chaque page métier
- Sec.2 paragraphe principal : 2 liens vers `/services/agents-ia/` (entrée produit alternative)
- Sec.2 tableau comparatif : lien vers `/services/agents-ia/`
- Sec.4 (les 8 métiers) : 8 liens (1 par métier) vers les pages dédiées
- Sec.5 (téléphonique) : lien vers `/agent-ia/telephonique/`
- Sec.8 Q1 : 2 liens vers `/services/agents-ia/` et `/agent-ia/` (auto-référence pour clarifier)
- Sec.8 Q5 : lien vers `/services/employe-ia/`

### Liens entrants attendus (≥ 8)

- Home (mention "agents IA par métier" dans la section grille des cas d'usage)
- Header navigation (lien direct depuis le menu principal)
- `/services/agents-ia/` (section voir aussi : "Pour entrer par votre métier")
- `/services/automatisation-ia/` (section 5 cas concrets)
- `/services/employe-ia/` (cross-référence)
- `/services/audit-ia/` (référence aux métiers à cartographier)
- Toutes les 9 pages métier `/agent-ia/[métier]/` (breadcrumb + lien retour)
- Footer (colonne "Agents IA par métier")
- Articles blog (cluster "cas d'usage par métier")
- Cas clients (mention du métier concerné)

---

## 15. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />`, `<SouveraineteSection />`, `<CTAFinalSection />`. Pas de section Pricing héritée. Pas de Marquee ici (le contenu est plus dense, le Marquee serait redondant avec la liste métier sec.4).

### Composants existants à réutiliser

`<DarkBlock />` (sec.2), `<FAQItem />` (sec.8), `<ComparisonTable />` (sec.2 tableau de différenciation avec /services/agents-ia/).

### Nouveaux composants à concevoir

- `<MetiersEcosystemMockup />` : schéma SVG écosystème hero (sec.1). Avatar Althoce central + 9 bulles métier en orbite + lignes de connexion azure subtiles. Survol révèle titre court + nombre d'agents. Click renvoie vers la page métier. Bulle téléphonique visuellement distincte (modalité). Pas une image, un rendu SVG.
- `<MetierWizard />` : quizz interactif 4 questions vertical sec.3. État conservé en session (pas de localStorage). Résultat propose 1-2 métiers + service complémentaire éventuel.
- `<MetierBlockSplit />` : bloc présentation métier zig-zag (sec.4). Alternance gauche/droite, 1 métier par bloc. Composant réutilisable pour les 8 métiers cœur.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.14 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Pas de bottom nav "voir aussi". La sec.14 sert uniquement de récapitulatif pour validation.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** : l'entrée "Agents IA" du menu pointe vers cette page (`/agent-ia/`). Le menu déroulant peut afficher en sous-niveau les 9 pages métier.
2. **Breadcrumb** : `Accueil → Automatisation → Agents IA par métier`.
3. **Footer** : colonne dédiée "Agents IA par métier" listant les 9 pages.
4. **Sitemap.xml** avec `<priority>0.9</priority>` (priorité maximale, point d'entrée Silo 2) et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `CollectionPage` + `ItemList` validé.
6. **Pages enfants** : toutes les pages `/agent-ia/[métier]/` ont un breadcrumb et un lien retour vers ce hub.
7. **Lien depuis `/services/agents-ia/`** : ajouter explicitement un encart "Vous préférez entrer par votre métier ? Voir le catalogue par fonction" qui pointe vers cette page.
8. **Lien depuis home v2** : la grille des services / cas d'usage doit avoir un lien direct vers `/agent-ia/` en plus des liens vers les piliers /services/.
9. **Reading time** estimé visible : 4 min de lecture (page d'orientation, lecture rapide).

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec schéma SVG écosystème orbital
- Sec.2 : prose + tableau comparatif 2 colonnes + DarkBlock
- Sec.3 : quizz interactif vertical
- Sec.4 : liste éditoriale zig-zag alternance gauche/droite (8 blocs métier)
- Sec.5 : bloc unique distinct (modalité transverse téléphonique)
- Sec.8 : accordéon vertical FAQ

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. Les 8 blocs métier sec.4 utilisent une typographie cohérente mais peuvent avoir une icône métier distinctive (sans tomber dans le cliché : pas de chapeau d'avocat pour le juridique, pas de calculatrice pour la finance).

### Hiérarchie visuelle

- Les 8 métiers cœur ont une mise en avant visuelle équivalente entre eux (aucun privilégié)
- La modalité téléphonique a une mise en avant distincte (bloc séparé sec.5)
- La différenciation avec `/services/agents-ia/` doit être visuellement claire en sec.2 (tableau comparatif marquant)

---

## 16. Décisions arbitrées (mai 2026)

1. ✅ **Règle pricing métier** : aucun prix affiché dans le contenu visible. Tarification partagée en RDV.

2. ✅ **Schéma SVG écosystème (sec.1 hero) — décision** :
   - **8 métiers cœur en cercle autour de l'avatar Althoce central**, équidistants, mise en avant visuelle équivalente entre eux (aucun privilégié).
   - **Téléphonique placé en bulle satellite hors du cercle principal**, reliée par des **lignes pointillées** vers 4 des bulles métier (commercial, service client, RH, achats) pour signaler la **transversalité** (le téléphonique peut servir ces métiers).
   - Effet visuel : on lit immédiatement "8 fonctions cœur + 1 modalité transverse" sans avoir besoin de légende.
   - Avatar central Althoce : pastille géométrique azure subtile avec le logo en monogramme.

3. ✅ **Quizz d'orientation 4 questions — logique validée** :
   - **Q1** (intention métier) **détermine la page de destination principale**. Les Q2, Q3, Q4 affinent mais ne changent pas la cible primaire.
   - **Q2** (rôle visiteur) ajoute une recommandation produit secondaire : dirigeant / responsable métier → page métier directement ; DSI/CTO → page métier + lien vers `/services/agents-ia/` pour le contexte produit ; acheteur externe → page métier + lien vers `/services/audit-ia/`.
   - **Q3** (maturité IA) ajoute une recommandation parcours : pas de déploiement → recommander `/services/audit-ia/` en amont ; outils en test → recommander `/services/formation-ia/` ; déjà déployé → directement la page métier.
   - **Q4** (horizon) ajoute une recommandation profondeur : tester rapidement → page métier (agent simple) ; couvrir un poste → page métier + `/services/employe-ia/` ; refondre un processus → page métier + `/services/automatisation-ia/`.
   - **Résultat final** : 1 page métier primaire (issue de Q1) + 1 à 2 pages secondaires (issues de Q2-Q4). Affichage en bloc final avec CTA "Découvrir mon agent IA cible →".

4. ✅ **Cohérence des descriptions sec.4** : confirmées au moment de la rédaction. Chaque résumé reflète le H1, le sous-titre hero, et le cas client de la page enfant correspondante. À recroiser une fois si les pages enfants évoluent.

5. ✅ **Disposition téléphonique en modalité séparée — décision** : **maintenue distincte** en sec.5 propre, pas dans la liste des 8 métiers cœur. Justification commerciale : c'est une **compétence technique transverse** (voix synthétique, VoIP, streaming LLM faible latence) qui peut servir plusieurs métiers, pas une fonction d'entreprise au sens organigramme. Le visiteur DRH cherche "agent IA RH", il découvre ensuite que le téléphonique peut s'intégrer à la qualification candidats. Ce double mouvement (métier → modalité) est plus pédagogique que "tout au même niveau".

6. ✅ **Lien depuis home v2 vers ce hub — décision propagée** : à ajouter dans la grille des services / cas d'usage de la home v2 sous la forme d'un bloc dédié "Découvrir nos agents IA par fonction" qui pointe vers `/agent-ia/`. Note ajoutée dans le brief `home-v2.md` (sec.18 Informations à valider) pour Claude Design.

7. ✅ **Lien depuis /services/agents-ia/ vers ce hub — décision propagée** : à ajouter en fin de la section "archétypes commercial / opérationnel / support" sous la forme d'un encart `<DarkBlock />` "Vous préférez entrer par votre métier ? Voir le catalogue par fonction →". Note ajoutée dans le brief `services-agents-ia.md` pour Claude Design.

---

## 17. Procédure de cohérence avec /services/agents-ia/

Cette page hub `/agent-ia/` doit rester complémentaire à `/services/agents-ia/`, jamais redondante. Les deux pages doivent :

1. **Se renvoyer explicitement** dans leur sec.2 respective (différenciation des angles).
2. **Partager les chiffres marque** (+758 / +150 / −70 % / +5 M€) et la méthode (héritée home v2).
3. **Diverger sur le focus** :
   - `/services/agents-ia/` : qu'est-ce qu'un agent IA, méthode, archétypes commercial/opérationnel/support génériques, ROI produit
   - `/agent-ia/` : organisation par fonction, sélection par métier, agents pré-conçus par métier, cas clients par fonction
4. **Avoir des intentions de recherche distinctes** :
   - `/services/agents-ia/` : « agents IA », « création agent IA », « développement agent IA »
   - `/agent-ia/` : « agent IA pour [métier] », « catalogue agents IA », « agents IA par fonction »

Cette discipline évite la cannibalisation SEO et clarifie le parcours utilisateur.

---

*Document de référence rédigé le 2026-05-08. Hub Silo 2 distinct de `/services/agents-ia/`. Aligné avec home-v2.md v3 et règle "focus valeur, pas de prix dans le contenu".*
