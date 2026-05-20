# `/services/employe-ia/` — Service pilier Silo 1 (modèle vivant Service · adaptation #2)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2 (instanciation stricte, contenu non redéfini ici)**

---

## 0. Préambule — Cadre du modèle vivant Service appliqué à `Employé IA`

### Sections héritées (sans rédaction propre)

| # | Section | Source d'héritage | Composant |
|---|---------|-------------------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` § Méthode | `<MethodologySection />` |
| 8 | Pricing (2 tiers) | `home-v2.md` § Pricing | langage visuel pricing home |
| 9 | Souveraineté | `home-v2.md` § Souveraineté | `<SouveraineteSection />` |
| 11 | CTA final | `home-v2.md` § CTA final | `<CTAFinalSection />` |

Ces 4 sections sont **rendues par Claude Code en réutilisant les composants existants** — **aucun contenu textuel n'est redéfini ici**.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Employé IA — Un poste à temps plein automatisé, intégré à votre équipe » |
| `Sous-titre hero` | sec.1 | 2 lignes — promesse de couverture totale d'un rôle, pas d'un cas d'usage |
| `Micro-preuves pills` | sec.1 | 3 pills max (sans « 30 min offertes » — mentionné ailleurs) |
| `Définition pédagogique` | sec.2 | Différenciation explicite **agent simple vs système vs employé IA** |
| `Tableau comparatif` | sec.3 | 2 colonnes : Agent IA · Employé IA — pour expliciter ce qui change quand on passe d'un cas borné à un poste entier |
| `Anatomie employé IA` | sec.4 | Schéma SVG exploded : cerveau LLM + mémoire + outils + identité + rituels d'équipe |
| `Archétypes employés IA` | sec.5 | 5 archétypes en liste verticale numérotée 01→05 (cohérence templates) |
| `Métiers ciblés` | sec.6 | Marquee home (réutilisation stricte) |
| `FAQ` | sec.10 | 8 Q/R adaptées à l'employé IA |

### Blocs immuables (jamais modifiés d'une page Service à l'autre)

- **Breadcrumb pattern** : `Accueil › Services › Employé IA`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « Anatomie d'un employé IA »
- **Pricing affiché** :
  - Cas simple / agent unitaire = **1 400 € HT** (tarif fixe) — *non applicable à l'employé IA, mais affiché pour cohérence du tableau pricing*
  - Multi-agents, **employé IA**, refonte process = **sur devis** (chiffré après cadrage)
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans les pills hero — uniquement dans pricing, FAQ, CTA final, ou méthode)
- **Souveraineté** : héritée de la home (`SouveraineteSection`)
- **Méthode** : héritée de la home (`MethodologySection`)
- **Pricing** : héritée de la home (langage visuel)
- **CTA final** : hérité de la home (`CTAFinalSection`)
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList` + `HowTo`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Cette page **ne réutilise jamais le pattern « grille de cartes 3×3 »** par défaut. Chaque section choisit un pattern visuel distinct (split éditorial zig-zag, schéma SVG exploded, liste verticale numérotée, Marquee horizontal, tableau dense, KPI bands pleine largeur, citation pleine page). Pas de labels décoratifs (pas de stickers, pas de pills "✨ NOUVEAU").

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 1 — Services** (3e pilier, après `/services/agents-ia/` et `/services/automatisation-ia/`)

### Rôle dans l'architecture

C'est **la page produit phare** d'Althoce. Là où agents-ia / automatisation-ia décrivent les briques, employe-ia décrit le **livrable maximal** : un membre d'équipe IA à temps plein, intégré à la culture et aux rituels de l'entreprise. Elle attire les requêtes hautes en intention d'achat et convertit sur des projets à plus forte valeur.

### Objectif trafic

1. **Capter** les requêtes intentionnistes : « employé IA », « salarié IA », « agent IA temps plein », « assistant IA dédié », « SDR IA », « comptable IA », « collaborateur virtuel IA ».
2. **Différencier** clairement employé IA vs agent simple vs assistant chatbot dans l'esprit du visiteur.
3. **Convertir** sur RDV découverte (30 minutes offertes avec un expert).
4. **Distribuer** vers les pages métiers `/agent-ia/[métier]/` (chaque employé IA est typé par métier) et vers les cas clients `/cas-clients/`.

### Intention de recherche

Mix **commerciale haute** (« employé IA prix », « combien coûte un salarié IA », « créer un employé IA ») et **transactionnelle** (« acheter employé IA », « employé IA SDR », « employé IA comptable »). Le visiteur sait ce qu'il cherche et compare des solutions concrètes.

### Mots-clés cibles principaux

- employé IA *(volume FR : 1 600–2 400 / mois, croissance forte)*
- salarié IA
- agent IA temps plein
- collaborateur virtuel IA
- assistant IA dédié
- créer un employé IA
- employé IA SDR / employé IA comptable / employé IA RH

### Mots-clés longue traîne (secondaires)

- « combien coûte un employé IA »
- « différence agent IA et employé IA »
- « employé IA français RGPD »
- « employé IA pour PME »
- « remplacer un poste avec une IA »

---

## 2. Title / Meta description / Open Graph

```html
<title>Employé IA — Un poste à temps plein automatisé, intégré à votre équipe | Althoce</title>

<meta name="description" content="Un employé IA Althoce couvre un rôle entier (SDR, support, comptable, ops, RH) : disponible 24/7, intégré à votre SI et à vos rituels d'équipe. Souverain, français, sur devis. 30 min offertes avec un expert.">

<meta name="keywords" content="employé IA, salarié IA, agent IA temps plein, collaborateur virtuel IA, assistant IA dédié, employé IA SDR, employé IA comptable, employé IA RH, créer un employé IA, employé IA PME">

<link rel="canonical" href="https://althoce.com/services/employe-ia/">

<!-- Open Graph -->
<meta property="og:title" content="Employé IA Althoce — Un poste à temps plein automatisé">
<meta property="og:description" content="Pas un chatbot, pas un workflow : un membre d'équipe IA dédié à un rôle. SDR, support, comptable, ops. Souverain, français, intégré à vos rituels.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/employe-ia/">
<meta property="og:image" content="https://althoce.com/og/employe-ia.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Employé IA Althoce — Un poste à temps plein automatisé">
<meta name="twitter:description" content="Pas un chatbot, pas un workflow : un membre d'équipe IA dédié à un rôle. Souverain, français, intégré à vos rituels.">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel principal |
|---|---------|------|--------------------------|
| 1 | 🟢 Hero — H1 + sous-titre + pills + CTA + visuel | Propre | Split éditorial zig-zag : à gauche le H1+CTA, à droite carte d'identité de l'employé IA (avatar + nom + rôle + KPI live mockup) |
| 2 | 🟢 Définition pédagogique — Qu'est-ce qu'un employé IA ? | Propre | Long paragraphe + sous-paragraphe + callout `<DarkBlock />` "Pas un agent, pas un chatbot" |
| 3 | 🟢 Tableau comparatif — Agent IA vs Employé IA | Propre | Tableau dense 2 colonnes × 8 lignes (périmètre, mémoire, outils, identité, rituels, délai, pricing, cas type) |
| 4 | 🟢 Anatomie d'un employé IA — schéma exploded | Propre | Schéma SVG exploded view : 5 briques (cerveau LLM, mémoire long-terme, outils branchés, identité de marque, rituels d'équipe) |
| 5 | 🟢 5 archétypes d'employés IA — liste verticale 01→05 | Propre | `<NumberedListVertical />` (cohérence automatisation-ia sec.4) |
| 6 | 🟢 Métiers ciblés — Marquee | Propre (composant home) | `<Marquee />` réutilisation stricte |
| 7 | 🏠 Méthode (4 étapes) | Hérité home | `<MethodologySection />` |
| 8 | 🏠 Pricing | Hérité home | langage visuel pricing home |
| 9 | 🏠 Souveraineté | Hérité home | `<SouveraineteSection />` |
| 10 | 🟢 FAQ employé IA — 8 Q/R | Propre | Accordéon `<FAQItem />` |
| 11 | 🏠 CTA final | Hérité home | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial pleine largeur : à gauche le H1, le sous-titre, les pills et les 2 CTA. À droite, **carte d'identité visuelle** d'un employé IA : avatar (motif géométrique + initiales), nom de poste, rôle, et 3 stats live mockup ("RDV générés ce mois : 87 · Tickets résolus : 1 240 · Heures absorbées : 168 / 168"). Pas de photo stock. Pas de pill décorative en haut du hero.

### H1

> **Un employé IA. Pas un chatbot. Pas un agent. Un poste à temps plein.**

### Sous-titre (2 lignes max)

> Un employé IA Althoce couvre un rôle entier de votre équipe : SDR, support client, comptable, ops, RH. Disponible 24/7, intégré à votre SI, à votre culture et à vos rituels — il participe aux stand-ups, prend des décisions dans son périmètre, et fait reporter ses indicateurs comme tout autre collaborateur.

### Micro-preuves (pills, max 3)

> +758 agents en production · +150 PME équipées · 100 % autonome dans son périmètre

*Les « 30 minutes offertes avec un expert » n'apparaissent PAS dans le hero — c'est mentionné dans la section pricing héritée de la home, dans la FAQ Q3, et dans le CTA final hérité de la home.*

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir l'anatomie d'un employé IA ↓ *(ancre `#anatomie`)*

### Visuel hero (côté droit)

Carte d'identité fictive (à instancier) :

```
┌─────────────────────────┐
│  ◆  Sarah               │
│     SDR — Employé IA    │
│                         │
│  ▸ RDV générés ce mois  │
│       87                │
│  ▸ Emails envoyés       │
│       1 420             │
│  ▸ Disponibilité        │
│       24/7              │
│                         │
│  Statut : ● en service  │
└─────────────────────────┘
```

*Note Claude Design* : la carte d'identité doit utiliser le langage visuel des composants Althoce (bord arrondi, bordure subtile, fond légèrement plus clair que le `bg-[#000000]`, accent azure `#38BDF8` sur le statut).

---

## 5. Section 2 — Qu'est-ce qu'un employé IA ?

### H2

> **Un employé IA n'est pas un outil. C'est un poste.**

### Paragraphe principal

> Un agent IA exécute **un cas d'usage borné** : il qualifie un lead, traite une facture, répond à un type de question. Un système d'automatisation **chaîne plusieurs agents** sur un processus métier. Un employé IA fait quelque chose de différent : **il occupe un rôle entier** de votre organigramme. Il a un nom, un périmètre de responsabilités, des objectifs trimestriels, des outils dédiés, une mémoire qui s'enrichit dans le temps. Il participe aux rituels de l'équipe — stand-ups, points hebdo, revues de performance — et son manager humain le pilote comme il piloterait un junior.

### Sous-paragraphe

> Concrètement, derrière un employé IA Althoce, on trouve **plusieurs agents orchestrés** (typiquement 4 à 8), une couche de mémoire long-terme (vector store + base relationnelle), des intégrations profondes au SI (CRM, ERP, outils métier), et une identité de marque cohérente (ton, prénom, signature, photo de profil). Le tout est piloté par un orchestrateur qui décide à chaque instant **quel agent activer**, **quel outil mobiliser**, et **quand escalader à un humain**.

### Callout `<DarkBlock />`

> **Différence rapide pour un dirigeant pressé**
>
> - **Chatbot** : il répond à des questions standard sur votre site. Pas d'autonomie.
> - **Agent IA** : il exécute 1 cas d'usage de bout en bout. Autonome sur ce périmètre.
> - **Système d'automatisation** : plusieurs agents enchaînés sur un processus.
> - **Employé IA Althoce** : il couvre un poste entier. Plusieurs cas, mémoire, objectifs, rituels d'équipe. Le seul format qui remplace réellement un ETP.

---

## 6. Section 3 — Tableau comparatif : Agent IA vs Employé IA

### H2

> **Agent IA · Employé IA — Ce qui change quand on passe d'un cas borné à un poste entier**

### Sous-titre

> Deux briques Althoce qui se ressemblent en surface mais répondent à des besoins très différents. Voici la grille de lecture honnête pour choisir le bon format selon votre contexte.

### Tableau (composant `<ComparisonTable />` réutilisé depuis agents-ia)

| Critère | Agent IA | **Employé IA Althoce** |
|---------|----------|------------------------|
| **Périmètre** | 1 cas d'usage borné (qualifier un lead, traiter une facture) | **Un rôle entier** (SDR, support, comptable, ops) |
| **Mémoire** | Stateless ou mémoire courte par tâche | **Mémoire long-terme** (vector store + base relationnelle) |
| **Outils branchés** | 1 à 3 outils nécessaires au cas d'usage | **Tout l'écosystème du poste** (CRM + ERP + messagerie + agenda + outils métier) |
| **Identité de marque** | Optionnelle | **Obligatoire** (prénom, photo, ton, signature) |
| **Rituels d'équipe** | Aucun | **Reporting hebdo, stand-ups, revue mensuelle** |
| **Délai de mise en service** | 1 semaine | **6 à 12 semaines** (cadrage + build + POC + déploiement) |
| **Pricing** | **1 400 € HT** (tarif fixe) | **Sur devis** (chiffré au cadrage) |
| **Cas type** | Tâche répétitive isolée à automatiser | **Poste à temps plein non tenable** en interne |

### Note sous le tableau

> L'employé IA n'est pas une « grosse version » de l'agent IA. **C'est un produit différent**, conçu pour couvrir un rôle complet — pas une tâche. Si votre besoin est borné (ex : qualifier des leads), un agent IA simple à 1 400 € HT suffit. Si vous voulez remplacer un poste entier qui ne tient plus en interne (turnover, charge, recrutement impossible), c'est un employé IA.

---

## 7. Section 4 — Anatomie d'un employé IA *(ancre `#anatomie`)*

### H2

> **Ce qu'il y a vraiment derrière un employé IA Althoce**

### Sous-titre

> Cinq briques techniques qui transforment des modèles de langage en collaborateur fiable, prévisible, et intégré à votre culture. Pas de boîte noire.

### Schéma SVG exploded view (composant `<EmployeeIAAnatomy />`)

Schéma central : un avatar stylisé au centre, et 5 briques en orbite autour, reliées par des lignes fines azure. Chaque brique est cliquable / hoverable → ouvre une description courte.

**Brique 1 — Cerveau LLM**

> Modèle de langage (Mistral, GPT, Claude selon la souveraineté demandée) qui pilote la prise de décision. C'est le « système 2 » : il lit, comprend, choisit l'action suivante, écrit. Choix du modèle adapté à la criticité du poste.

**Brique 2 — Mémoire long-terme**

> Vector store + base relationnelle. L'employé IA se souvient des interactions passées, des préférences clients, des arbitrages métier déjà rendus. Sans mémoire, pas de fiabilité durable. C'est ce qui distingue un employé IA d'un simple chatbot stateless.

**Brique 3 — Outils branchés**

> Connecteurs vers votre SI : CRM (HubSpot, Salesforce, Pipedrive), ERP (Sage, Cegid, Pennylane), messagerie (Outlook, Gmail), agenda, outils métier. L'employé IA agit dans vos outils, pas dans une interface séparée. **C'est non négociable** pour qu'il s'intègre vraiment.

**Brique 4 — Identité de marque**

> Prénom, photo de profil, ton de communication, signature email, charte de réponse. L'employé IA n'est pas anonyme : il a une voix cohérente avec votre marque. Sarah la SDR, Thomas le comptable. Vos clients savent qu'ils ont en face un assistant IA — la transparence est totale, mais l'identité est définie.

**Brique 5 — Rituels d'équipe**

> L'employé IA participe aux rituels : reporting hebdo automatique, alerte sur Slack quand un cas dépasse son périmètre, point mensuel avec son manager humain pour ajuster les règles métier. **C'est la différence Althoce** : on ne livre pas une boîte qui tourne dans un coin. On livre un collaborateur qui s'inscrit dans votre culture.

### Callout sous le schéma

> Ces 5 briques sont systématiquement présentes dans tous nos employés IA. Ce qui varie d'un client à l'autre : le modèle LLM choisi (selon souveraineté + criticité), les outils branchés (selon SI), l'identité de marque (selon culture). **Tout le reste est standardisé et éprouvé sur +150 PME**.

---

## 8. Section 5 — 5 archétypes d'employés IA Althoce

### H2

> **5 rôles que nos clients confient à un employé IA**

### Sous-titre

> Les rôles à forte récurrence, à forte charge cognitive, à faible variabilité. Voici les 5 employés IA les plus déployés chez nos clients PME et ETI en 2026.

### Liste verticale numérotée 01→05 (composant `<NumberedListVertical />`)

**01 — Employé IA SDR (Sales Development Representative)**

> Génère des leads qualifiés, envoie les premiers messages personnalisés, qualifie au téléphone, prend les RDV. S'intègre à votre CRM (HubSpot, Salesforce). Brief reçu chaque matin avec les ICP cibles, reporting hebdo automatique sur les KPI commerciaux.
>
> *Cas typique* : PME B2B avec 1 commercial débordé qui ne peut plus prospecter. L'employé IA SDR génère 80–150 RDV qualifiés / mois, le commercial se concentre sur le closing.
>
> *Outils intégrés* : LinkedIn Sales Navigator, Apollo, HubSpot, Lemlist, Calendly.
>
> *Délai de mise en service* : 6 à 8 semaines.

**02 — Employé IA Support Client (N1)**

> Répond aux demandes clients standard 24/7, en plusieurs langues si besoin. Crée et résout les tickets de niveau 1 (questions récurrentes, statut commande, info produit). Escalade les cas complexes à l'équipe humaine avec contexte enrichi.
>
> *Cas typique* : e-commerce ou SaaS avec une équipe support saturée par les questions répétitives. L'employé IA absorbe 70–80 % des tickets, l'équipe se concentre sur l'escalation et la satisfaction.
>
> *Outils intégrés* : Zendesk, Intercom, Freshdesk, Gorgias, base de connaissances interne.
>
> *Délai de mise en service* : 4 à 6 semaines.

**03 — Employé IA Comptable**

> Absorbe la saisie de factures fournisseurs, le rapprochement bancaire, la préparation des écritures, la pré-validation des notes de frais. L'expert-comptable humain valide, conseille, arbitre.
>
> *Cas typique* : cabinet d'expertise-comptable saturé qui refuse des clients faute de capacité. L'employé IA double la capacité de production sans embauche.
>
> *Outils intégrés* : Sage, Cegid, Pennylane, QuickBooks, EBP, banques (BNP, CIC, CA, etc.).
>
> *Délai de mise en service* : 6 à 10 semaines (selon nombre d'outils branchés).

**04 — Employé IA Ops / Back-office**

> Couvre les tâches administratives répétitives transversales : traitement de mails entrants, mise à jour de bases de données, génération de rapports, suivi de fournisseurs, gestion documentaire. Le rôle « pluri-tâches » qu'aucun ETP humain n'aime tenir longtemps.
>
> *Cas typique* : ETI industrielle avec un poste d'assistant administratif en burn-out cyclique. L'employé IA tient le poste, l'humain monte sur des sujets plus stratégiques.
>
> *Outils intégrés* : Outlook, SharePoint, Google Workspace, ERP métier, Slack.
>
> *Délai de mise en service* : 8 à 12 semaines (forte variance selon périmètre).

**05 — Employé IA RH / Recrutement**

> Trie les CV entrants, qualifie les candidats au téléphone (script standardisé), prend les RDV avec les recruteurs humains, gère le suivi candidat post-entretien (relances, retours, NPS).
>
> *Cas typique* : cabinet de recrutement avec 500+ CV / semaine ou DRH PME qui absorbe 100 % du recrutement seul. L'employé IA absorbe le tri et la qualification, l'humain se concentre sur l'évaluation et l'arbitrage.
>
> *Outils intégrés* : Workday, Lever, Welcome to the Jungle, calendriers, base CV.
>
> *Délai de mise en service* : 6 à 10 semaines.

### Callout sous la liste

> Votre rôle n'est pas dans la liste ? **9 fois sur 10, on peut le concevoir.** Les 30 minutes offertes avec un expert servent à cartographier votre poste cible et à valider la faisabilité technique avant tout engagement.

---

## 9. Section 6 — Métiers ciblés *(composant `<Marquee />` hérité de la home)*

### Note Claude Code

> **🏠 Section semi-héritée — Réutilisation stricte du composant `<Marquee />` de la home.**
>
> Le défilement horizontal infini liste les 8 métiers couverts par Althoce (comptabilité, RH, support client, commerce, marketing, ops, juridique, achats). Chaque métier renvoie vers `/agent-ia/[métier]/` quand la page existe.
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — Réutilisation stricte du composant `<MethodologySection />` de la home v2.**
>
> 4 étapes : Cadrage · Build · POC · Mise en production + support.
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## 11. Section 8 — Pricing (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — Réutilisation stricte du langage visuel pricing de la home v2.**
>
> On NE redéfinit PAS le pricing sur la page Service. Composant et contenu **identiques** à la home :
>
> - **Cas simple = 1 400 € HT** (tarif fixe affiché)
> - **Système, employé IA, refonte process = Sur devis** (chiffré au cadrage)
> - **30 minutes offertes avec un expert** mentionnées — unique format d'entrée gratuit
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## 12. Section 9 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — Réutilisation stricte du composant `<SouveraineteSection />` de la home v2.**
>
> Argumentaire souveraineté française : Mistral, hébergement France (OVH / Scaleway), RGPD natif, données qui ne quittent pas le territoire.
>
> **Aucun contenu textuel à fournir ici.**

---

## 13. Section 10 — FAQ Employé IA (8 Q/R)

### H2

> **Questions fréquentes sur les employés IA Althoce**

### Liste accordéon `<FAQItem />`

**Q1 — Quelle est la différence entre un agent IA et un employé IA ?**

Un agent IA exécute **1 cas d'usage borné** (ex : qualifier un lead, traiter une facture). Un employé IA **couvre un poste entier** (ex : SDR de bout en bout, comptable de bout en bout). Techniquement, un employé IA est composé de plusieurs agents orchestrés ensemble + une mémoire long-terme + des outils branchés + une identité de marque cohérente. Conséquence : un agent simple coûte 1 400 € HT, un employé IA est sur devis (chiffré au cadrage).

**Q2 — Un employé IA va-t-il remplacer mes salariés ?**

Non. Les clients qui réussissent l'intégration d'un employé IA ne licencient pas — ils **redéploient**. Vos humains montent sur des sujets à forte valeur ajoutée cognitive (conseil, arbitrage, relation client complexe). L'employé IA absorbe les tâches répétitives à faible valeur cognitive. Statistique observée chez nos clients PME : **0 départ d'équipe imputable au déploiement IA** sur les 4 derniers trimestres, et même un effet positif sur la rétention (les équipes ne quittent plus l'entreprise pour fuir la saisie).

**Q3 — Combien coûte un employé IA chez Althoce ?**

Un employé IA est **sur devis**, chiffré au cadrage en fonction du périmètre du rôle, du nombre d'outils branchés, du volume traité, des exigences de souveraineté et du support souhaité. Tout démarre par **30 minutes offertes avec un expert** : vous repartez avec une cartographie du rôle cible et un devis ferme avant tout engagement.

**Q4 — En combien de temps un employé IA est-il opérationnel ?**

Compter **6 à 12 semaines** entre la signature du cadrage et la mise en production complète. Décomposé : 1–2 semaines de cadrage et conception, 3–6 semaines de build (selon nombre d'agents et d'outils), 1–2 semaines de POC en parallèle de l'humain, 1 semaine de bascule complète. Le délai paraît long comparé à un agent simple (1 semaine), mais il reflète la complexité d'un rôle entier — pas d'un cas borné.

**Q5 — Mes données restent-elles en France ?**

Oui, par défaut. Pour les clients qui exigent une souveraineté maximale, nous utilisons **Mistral** (modèle français hébergé en France) et hébergeons l'infra sur **OVH** ou **Scaleway**. Pour les clients qui acceptent les modèles propriétaires (OpenAI, Anthropic), l'anonymisation est appliquée par défaut sur les données entrantes et les conditions d'usage data des fournisseurs sont respectées (pas de réutilisation pour entraînement). Le choix se fait au cadrage, en fonction de votre exigence métier.

**Q6 — Peut-on intégrer un employé IA à nos outils existants (CRM, ERP, etc.) ?**

Oui. C'est même **la condition de réussite**. Un employé IA déconnecté du SI ne sert à rien. Nous intégrons en standard : HubSpot, Salesforce, Pipedrive, Sage, Cegid, Pennylane, QuickBooks, Outlook, Google Workspace, Slack, Teams, Zendesk, Intercom, Freshdesk, et la plupart des bases SQL/PostgreSQL. Pour les outils internes propriétaires, nous développons les connecteurs dédiés au cadrage (chiffrés dans le devis).

**Q7 — Que se passe-t-il quand l'employé IA rencontre un cas qu'il ne sait pas traiter ?**

Il **escalade à un humain de l'équipe** avec contexte enrichi : ce qu'il a compris, ce qu'il a déjà fait, pourquoi il bloque, ce qu'il propose comme suite. C'est un protocole standardisé chez nous. L'employé IA n'invente pas de réponse quand il n'est pas sûr — il transmet. Cette discipline est ce qui distingue un employé IA fiable d'un chatbot qui hallucine.

**Q8 — Comment l'employé IA est-il intégré à la culture de l'équipe ?**

Trois rituels obligatoires que nous mettons en place dès la mise en production :
1. **Reporting hebdo automatique** envoyé chaque vendredi à son manager humain (KPI, cas escaladés, propositions d'amélioration).
2. **Présence aux stand-ups** : un récapitulatif court de son activité de la veille apparaît dans le canal Slack ou Teams comme tout autre collaborateur.
3. **Revue mensuelle** entre l'employé IA (représenté par son manager) et le reste de l'équipe pour ajuster les règles métier, prioriser les évolutions, et valider la feuille de route.

C'est ce qui transforme un outil dans un coin en collaborateur intégré.

---

## 14. Section 11 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée — Réutilisation stricte du composant `<CTAFinalSection />` de la home v2.**
>
> Bandeau grand format, bouton « Discuter de votre projet → », mention « Sans engagement · 30 min offertes avec un expert · Réponse sous 24h ».
>
> **Aucun contenu textuel à fournir ici.**

---

## 15. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/employe-ia/#service",
      "name": "Employé IA",
      "alternateName": "Salarié IA",
      "serviceType": "AI Workforce",
      "provider": {
        "@type": "Organization",
        "@id": "https://althoce.com/#organization",
        "name": "Althoce",
        "url": "https://althoce.com/"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "description": "Conception et déploiement d'employés IA — collaborateurs IA dédiés à un rôle entier (SDR, support, comptable, ops, RH). Souverains, intégrés au SI et à la culture d'équipe.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/employe-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Sur devis — chiffré au cadrage. Build initial à partir de plusieurs dizaines de milliers d'euros HT + récurrence mensuelle (modèle LLM + infra + support)."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Employé IA", "item": "https://althoce.com/services/employe-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Quelle est la différence entre un agent IA et un employé IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un agent IA exécute 1 cas d'usage borné. Un employé IA couvre un poste entier (plusieurs agents orchestrés + mémoire + outils + identité de marque). Conséquence : agent simple = 1 400 € HT, employé IA = sur devis." } },
        { "@type": "Question", "name": "Un employé IA va-t-il remplacer mes salariés ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Les clients qui réussissent l'intégration redéploient leurs humains sur des sujets à forte valeur ajoutée cognitive. L'employé IA absorbe la saisie répétitive — pas la stratégie, pas l'arbitrage." } },
        { "@type": "Question", "name": "Combien coûte un employé IA chez Althoce ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis, chiffré au cadrage. Tout démarre par 30 minutes offertes avec un expert, avec un devis ferme à la sortie." } },
        { "@type": "Question", "name": "En combien de temps un employé IA est-il opérationnel ?", "acceptedAnswer": { "@type": "Answer", "text": "6 à 12 semaines entre signature du cadrage et mise en production complète." } },
        { "@type": "Question", "name": "Mes données restent-elles en France ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Mistral + OVH/Scaleway pour la souveraineté maximale. Anonymisation systématique sur les modèles propriétaires." } },
        { "@type": "Question", "name": "Peut-on intégrer un employé IA à nos outils existants ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui — c'est la condition de réussite. Connecteurs standards : HubSpot, Salesforce, Sage, Cegid, Pennylane, Outlook, Slack, Zendesk, etc. Connecteurs propriétaires développés au cadrage." } },
        { "@type": "Question", "name": "Que se passe-t-il quand l'employé IA rencontre un cas qu'il ne sait pas traiter ?", "acceptedAnswer": { "@type": "Answer", "text": "Il escalade à un humain avec contexte enrichi. Pas d'invention, pas d'hallucination — c'est un protocole standardisé chez Althoce." } },
        { "@type": "Question", "name": "Comment l'employé IA est-il intégré à la culture de l'équipe ?", "acceptedAnswer": { "@type": "Answer", "text": "Trois rituels obligatoires : reporting hebdo automatique, présence aux stand-ups, revue mensuelle avec son manager humain." } }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Comment Althoce déploie un employé IA en 4 étapes",
      "step": [
        { "@type": "HowToStep", "name": "Cadrage", "text": "30 min avec un expert + cartographie du rôle cible + devis ferme sous 5 jours." },
        { "@type": "HowToStep", "name": "Build", "text": "Conception et développement des agents qui composent l'employé IA, intégration aux outils du SI, mise en place de la mémoire long-terme et de l'identité de marque." },
        { "@type": "HowToStep", "name": "POC", "text": "1 à 2 semaines de fonctionnement en parallèle de l'équipe humaine, ajustement des règles métier et de l'identité, validation des KPI." },
        { "@type": "HowToStep", "name": "Mise en production + support", "text": "Bascule complète, formation du manager humain, mise en place des rituels (reporting, stand-ups, revue mensuelle), support continu." }
      ]
    }
  ]
}
```

---

## 16. Maillage interne (liens sortants depuis cette page)

- Vers `/services/agents-ia/` (« un employé IA est composé d'agents »)
- Vers `/services/automatisation-ia/` (« orchestration des agents »)
- Vers `/services/integration-ia/` (« intégration au SI »)
- Vers `/services/audit-ia/` (« cadrage initial »)
- Vers `/services/formation-ia/` (« formation du manager humain »)
- Vers `/agent-ia/finance/`, `/agent-ia/commercial/`, `/agent-ia/service-client/`, `/agent-ia/rh/`, `/agent-ia/ops/` (les 5 archétypes typés métier)
- Vers `/cas-clients/` (preuves)
- Vers `/conseil/calculateur-roi-employe-ia/` (calculateur ROI dédié)
- Vers home (`/`) via breadcrumb et CTA final

### Liens entrants attendus (≥ 5)

- Home (mention « employé IA » dans hero v2)
- `/services/agents-ia/` (paragraphe différenciation)
- `/services/automatisation-ia/` (FAQ Q : « différence entre automatisation et employé IA »)
- Toutes les pages métier (`/agent-ia/[métier]/`) : « pour aller plus loin, voir l'employé IA [métier] »
- Tous les cas clients qui sont des employés IA déployés
- Articles blog (cluster « employé IA »)

---

## 17. Notes Claude Design

### Composants HOME à réutiliser strictement (4 sections héritées)

- `<MethodologySection />` (sec.7)
- Langage visuel pricing home (sec.8)
- `<SouveraineteSection />` (sec.9)
- `<CTAFinalSection />` (sec.11)
- `<Marquee />` (sec.6) pour les métiers ciblés

### Composants à réutiliser (déjà existants sur Service canonique)

- `<DarkBlock />` pour callouts (sec.2)
- `<FAQItem />` pour la sec.10
- `<ComparisonTable />` pour la sec.3 (déjà créé pour `/services/agents-ia/`)
- `<NumberedListVertical />` pour la sec.5 (déjà créé pour `/services/automatisation-ia/`)

### Nouveaux composants à concevoir

- `<EmployeeIDCard />` — carte d'identité visuelle de l'employé IA (hero, sec.1) : avatar géométrique + nom + rôle + 3 stats live mockup + statut "● en service".
- `<EmployeeIAAnatomy />` — schéma SVG exploded view (sec.4) : avatar central + 5 briques en orbite + lignes de connexion azure. Hover ouvre une description courte de chaque brique.

### Règle pas de labels visuels

Aucune pill / sticker / badge décoratif (« ✨ NOUVEAU », « ⚡ POPULAIRE », « 🚀 BEST-SELLER ») nulle part sur la page. Les pills hero contiennent uniquement les chiffres marque canoniques.

### Règle créativité visuelle

Chaque section utilise un pattern visuel distinct :
- Hero : split éditorial zig-zag avec carte d'identité
- Sec.2 : prose éditoriale + callout DarkBlock
- Sec.3 : tableau dense 3 colonnes
- Sec.4 : schéma SVG exploded view orbital
- Sec.5 : liste verticale numérotée 01→05
- Sec.6 : Marquee horizontal hérité
- Sec.10 : accordéon vertical

**Aucun usage du pattern « grille de cartes 3×3 ».**

### Tons / langage visuel

- Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`
- Inter pour le corps de texte, Satoshi pour les titres et display
- Pas d'illustration stock. Schémas SVG géométriques uniquement.
- Animations Framer Motion subtiles (apparition au scroll, hover discret sur cartes)

---

## 18. Informations à valider avant publication

1. **Carte d'identité hero** — valider le prénom et le rôle affichés (Sarah la SDR ? autre ?). Choix non neutre culturellement.
2. ✅ **Pricing arbitré (avril 2026)** : agent simple = **1 400 € HT** (tarif fixe affiché publiquement) · multi-agents, **employé IA**, refonte process = **sur devis** (chiffré après cadrage). Aucune fourchette publique. Entrée découverte unique : **30 minutes offertes avec un expert**. Aligné strictement avec `/services/agents-ia/`, `/services/automatisation-ia/` et la home v2.
3. **Statistique « 0 départ d'équipe imputable au déploiement IA »** mentionnée Q2 — croiser avec données HR client réelles.
4. **Stat « rétention améliorée »** Q2 — vérifier sourçage avant publication.
5. **Logos tech partenaires** cités (Mistral, OpenAI, Anthropic, Sage, Cegid, Pennylane, HubSpot, Salesforce, etc.) — usage en mention technique non-commerciale, OK si pas de logos visuels sans autorisation.

---

## 19. Procédure d'adaptation pour les pages Service satellites suivantes

Cette page sert de référence pour les 4 pages Service satellites restantes (`/services/developpement-ia/`, `/services/chatbot-ia/`, `/services/integration-ia/`, `/services/formation-ia/`, `/services/audit-ia/`) et le hub `/services/`. Procédure :

1. **Conserver le squelette en 11 sections** avec marqueurs 🟢 / 🏠.
2. **Réutiliser strictement les 4 sections héritées** (Méthode, Pricing, Souveraineté, CTA final).
3. **Adapter les slots variables** propres au service (H1, sous-titre, anatomie, archétypes, FAQ, métiers ciblés).
4. **Choisir un pattern visuel distinct par section** — ne jamais retomber sur la grille de cartes 3×3.
5. **Vérifier la cohérence pricing et 30 min offertes** avant livraison à Claude Design.
6. **Mettre à jour le maillage interne** pour pointer vers les pages Silo 1 cousines + métiers + cas clients.

---

*Document de référence rédigé le 2026-05-08 · Aligné avec `home-v2.md` v3 (entrée découverte unique : 30 minutes offertes avec un expert).*
