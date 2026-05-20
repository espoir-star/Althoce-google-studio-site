# /services/agents-ia/ — Althoce (Silo 1, page pilier)

> **Brief de contenu** destiné à Claude Design (conception) et Claude Code (intégration).
> Version : 1.0 — Avril 2026
> Silo : 1 · Services IA · **Page pilier**
> URL : `/services/agents-ia/`
> Statut Miro : tâche #7 — Critique 🔥
> **🟢 Modèle vivant Service** : ce brief est la page modèle canonique du Silo 1. Toutes les autres pages Service réutilisent strictement la structure ci-dessous — seuls les slots variables changent.

---

## 0. Statut « modèle vivant Service » (template du Silo 1)

Ce brief sert de **template vivant** pour les 7 autres pages du Silo 1 Services :
`/services/automatisation-ia/`, `/services/employe-ia/`, `/services/developpement-ia/`, `/services/chatbot-ia/`, `/services/integration-ia/`, `/services/formation-ia/`, `/services/audit-ia/`.

Chaque page Service réutilise **strictement** la même structure. Trois types de blocs cohabitent :

- **Sections héritées de la home** (réutilisation directe des composants v2, pas de redéfinition)
- **Sections propres au service** (contenu spécifique, slots à remplir)
- **Blocs immuables** (CTA, audit pitch, JSON-LD, chiffres marque) — identiques à la home

### Sections héritées de la home (réutilisation stricte des composants v2)

Ces 4 sections ne sont **jamais redéfinies** dans le brief Service. On réutilise tel quel le composant de la home, avec exactement le même contenu visuel et textuel. Pas de nouveau langage à introduire.

| Section | Composant home réutilisé | Position sur la page Service |
|---------|--------------------------|------------------------------|
| **Méthode** | `MethodologySection` (4 étapes timeline) | après le bloc « propre au service » sur la typologie |
| **Pricing** | suivre intégralement le langage visuel home pour les cartes prix (logique 1 400 € fixe / sur devis) | avant la section sécurité |
| **Souveraineté** | `SouveraineteSection` (3 engagements EU / propriété / RGPD) | telle quelle, identique à la home |
| **CTA final** | `CTAFinalSection` (fond sombre, CTA unique, micro-garantie) | dernière section, identique à la home |

**Règle stricte** : Claude Code n'introduit **aucune variation visuelle** sur ces 4 sections. Si une variation semble nécessaire, retour à Vincent pour arbitrage.

### Slots variables (à adapter par page)

| Slot | Section | Variation par page |
|------|---------|--------------------|
| `H1` | Hero (sec.1) | Adapté au service (ex : « Automatisation IA sur-mesure », « Employé IA », etc.) |
| `Sous-titre hero` | sec.1 | 2 lignes spécifiques au service |
| `Micro-preuves pills` | sec.1 | 3 pills max (sans « 30 min offertes » — l'offre découverte est mentionnée ailleurs) |
| `Définition pédagogique` | sec.2 | 1 paragraphe + 1 sous-paragraphe + callout |
| `Tableau comparatif` | sec.3 | Colonnes adaptées (ex : ChatGPT vs Workflow vs Agent ; ou RPA vs IA, etc.) |
| `Détail technique` | sec.4 | Pattern visuel à varier selon le service (pas systématiquement une grille de cartes) |
| `Archétypes/Typologie` | sec.5 | Pattern visuel à varier (split éditorial, zig-zag, accordéon, etc.) |
| `Métiers ciblés` | sec.6 | Réutiliser le `Marquee` de la home plutôt qu'une grille — cohérence visuelle home |
| `FAQ 10 Q/R` | sec.10 | Questions spécifiques au service |
| `Maillage interne` | §4 | Liens sortants/entrants spécifiques |
| `Mots-clés cibles` | §1 | Cluster sémantique du service |
| `JSON-LD serviceType` | §2 | `"serviceType"` adapté |

### Règle « pas de labels visuels »

Les pages Service n'utilisent **aucun label décoratif** au-dessus des H2 (du type `Service · Silo 1`, `Définition`, `Anatomie`, etc.). Le H2 porte directement le mot-clé SEO et le sens. Cohérence avec la home v2 où Vincent a retiré tous les labels.

### Règle « créativité visuelle, pas de réflexe grille »

On ne tombe **jamais** dans le pattern systématique « label + H2 + grille de cartes ». Chaque section propre au service propose un pattern visuel adapté à son contenu :

- **Section 2 Définition** : long paragraphe éditorial + 1 callout sombre
- **Section 3 Comparatif** : tableau (déjà varié, OK)
- **Section 4 Détail technique** : éviter la grille — préférer un schéma SVG inline « exploded view », ou un format conversation pédagogique, ou une timeline horizontale qui assemble les briques
- **Section 5 Typologie** : éviter la grille 3 colonnes — préférer un split éditorial zig-zag (alternance gauche/droite), ou un accordéon vertical, ou une rotation auto plein écran
- **Section 6 Métiers** : réutiliser le **`Marquee`** de la home (30 agents qui défilent) plutôt qu'une grille 8 cartes — cohérence home garantie
- **Section 10 FAQ** : accordéon (OK)

### Blocs immuables (jamais modifiés d'une page Service à l'autre)

- **Breadcrumb pattern** : `Accueil › Services › [Nom du service]`
- **CTA primaire** : « Discuter de votre projet → »
- **CTA secondaire** : ancre vers une section explicative (typologie ou détail technique)
- **Pricing affiché** :
  - Cas simple / agent unitaire = **1 400 € HT** (tarif fixe)
  - Multi-agents, employé IA, refonte process = **sur devis** (chiffré après cadrage)
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans les pills hero — uniquement dans pricing, FAQ, CTA final, ou méthode)
- **Souveraineté** : héritée de la home (`SouveraineteSection`)
- **Méthode** : héritée de la home (`MethodologySection`)
- **Pricing** : héritée de la home (langage visuel)
- **CTA final** : hérité de la home (`CTAFinalSection`)
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList` + `HowTo`
- **Chiffres marque (utilisables dans micro-preuves)** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Procédure d'adaptation pour une nouvelle page Service

1. Dupliquer ce fichier en `services-[nom-service].md`
2. Remplacer les slots variables (sans toucher aux blocs immuables)
3. Vérifier maillage interne : ≥ 2 liens vers les autres piliers Silo 1 + ≥ 5 liens vers Silo 2 + ≥ 1 lien vers Silo 4 (Conseil) + ≥ 1 lien vers Silo 6 (Cas)
4. Vérifier les 4 JSON-LD
5. Cocher la checklist SEO/AEO §5 entièrement

---

## 1. Stratégie de la page

### Rôle dans l'architecture
C'est **la page pilier de marque** d'Althoce. Elle porte le mot-clé identitaire « agents IA » et définit ce qu'Althoce conçoit, comment, avec quelle méthode. Toutes les autres pages du site y renvoient (≥ 6 liens entrants prévus). Elle transforme le positionnement « agence d'automatisation agentique » en page SEO + conversion.

### Objectif trafic
1. **Capter** les requêtes concept : « agents IA », « agent IA entreprise », « création agent IA », « développement agent IA ».
2. **Convertir** sur RDV découverte (30 min offertes avec un expert).
3. **Distribuer** vers les 3 types d'agents (commercial, opérationnel, support) et vers les pages métiers `/agent-ia/[métier]/`.

### Intention de recherche
**Informationnelle forte** (« c'est quoi un agent IA ? ») + **commerciale** (« agence agent IA », « prix agent IA », « faire développer un agent IA »). La page doit répondre aux deux en même temps.

### Cible prioritaire
Dirigeant·e PME/ETI (décideur tech ou non-tech) qui a entendu parler d'agents IA mais n'a pas de référentiel clair. Il vient chercher une compréhension + une preuve qu'on sait les construire. **Ton pédagogue maintenu**, concepts traduits en bénéfices business.

### Mots-clés cibles

**Principal** : agent IA

**Secondaires** :
- agents IA entreprise
- agence agent IA
- création agent IA
- développement agent IA
- agent IA autonome
- agent IA sur-mesure
- agent IA métier
- automatisation agentique
- employé IA

**Longue traîne** :
- agent IA pour PME
- agent IA commercial
- agent IA service client
- différence agent IA chatbot
- agent IA vs automatisation
- combien coûte un agent IA

---

## 2. Méta SEO

```html
<title>Agents IA sur-mesure — Création & déploiement pour PME et ETI | Althoce</title>

<meta name="description" content="Althoce conçoit des agents IA 100% autonomes pour les PME et ETI françaises. Commerciaux, opérationnels, support : des employés virtuels qui lisent, décident et agissent. Premier agent en 1 semaine, à partir de 1 400 €.">

<meta name="keywords" content="agents IA, agent IA, création agent IA, développement agent IA, agence agent IA, agent IA entreprise, agent IA autonome, automatisation agentique, employé IA">

<link rel="canonical" href="https://althoce.com/services/agents-ia/">

<!-- Open Graph -->
<meta property="og:title" content="Agents IA sur-mesure pour PME et ETI — Althoce">
<meta property="og:description" content="Des employés virtuels qui lisent, décident et agissent. 100% autonomes, en production en 1 semaine.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/agents-ia/">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Agents IA sur-mesure — Althoce">
<meta name="twitter:description" content="Des employés virtuels qui raisonnent, décident et agissent à la place de vos équipes.">
```

### Schémas JSON-LD requis (à injecter par Claude Code dans `<head>`)

1. **Service** — `@type: Service`, `serviceType: "Agents IA sur-mesure"`, `provider: @id de Organization`, `areaServed: FR`, offre avec prix « From 1400 EUR ».
2. **FAQPage** — les 10 Q/R de la section FAQ.
3. **BreadcrumbList** — Accueil → Services → Agents IA.
4. **Article** (optionnel, si on considère cette page comme pilier rédactionnel).

---

## 3. Structure de la page (11 sections + FAQ)

Légende : 🟢 Section **propre au service** (slot à adapter par page) · 🏠 Section **héritée de la home v2** (composant réutilisé tel quel).

| # | Section | Origine | Objectif | Liens sortants |
|---|---------|---------|----------|----------------|
| 1 | Hero | 🟢 propre | H1 + promesse + CTA | — |
| 2 | Définition (pédagogie) | 🟢 propre | Capter les requêtes concept | → /blog/ lexique IA |
| 3 | Chatbot vs Workflow vs Agent IA | 🟢 propre | Différenciation claire (tableau comparatif) | — |
| 4 | Comment ça marche (anatomie d'un agent) | 🟢 propre | Pédagogie technique | — |
| 5 | Les 3 types d'agents Althoce | 🟢 propre | Distribution vers pages métiers | → 3 ancres internes |
| 6 | Cas d'usage par métier | 🟢 propre (Marquee home réutilisé) | Hub Silo 2 | → 8 pages `/agent-ia/[métier]/` |
| 7 | Méthode de déploiement | 🏠 **héritée** (`MethodologySection`) | HowTo JSON-LD | → /services/audit-ia/ |
| 8 | Prix & délais | 🏠 **héritée** (langage pricing home) | Transparence + conversion | — |
| 9 | Sécurité, souveraineté, éthique | 🏠 **héritée** (`SouveraineteSection`) | Objections RGPD, remplacement humain | → /conseil/ |
| 10 | FAQ (10 Q/R) | 🟢 propre | AEO / LLM | Schema FAQPage |
| 11 | CTA final | 🏠 **héritée** (`CTAFinalSection`) | Conversion | — |

**Bilan template** : 7 sections propres au service (slots à adapter), 4 sections héritées de la home (jamais redéfinies). Aucun label décoratif au-dessus des H2.

**Liens sortants internes prévus : ~15** (dont 8 vers le Silo 2 `/agent-ia/[métier]/`, 3 vers d'autres pages Services, 1 vers Conseil, 2 vers Cas clients).

---

# CONTENU SECTION PAR SECTION

---

## Section 1 — Hero

**Fil d'Ariane** (breadcrumb)
`Accueil › Services › Agents IA`

**H1 (unique) — pas de label décoratif au-dessus**

> Agents IA sur-mesure.
> On conçoit vos **employés virtuels** qui décident et agissent à votre place.

**Sous-titre (2 lignes)**

> Un agent IA Althoce, ce n'est pas un chatbot ni un simple workflow. C'est un collaborateur numérique autonome, capable de lire une situation, de raisonner dessus, et d'exécuter des tâches complexes sur vos outils — 24h/24, sans supervision humaine continue.

**Micro-preuves (pills, max 3)**

> +758 agents en production · +150 PME équipées · 100 % autonome

*Les « 30 minutes offertes avec un expert » n'apparaissent PAS dans le hero — c'est mentionné dans la section pricing héritée de la home, dans la FAQ Q3, et dans le CTA final hérité de la home.*

**CTA principal**

> Discuter de votre projet →

**CTA secondaire**

> Voir comment un agent fonctionne ↓ *(ancre vers section 4)*

**Note Claude Design**
- Reprendre le système visuel home v2.1 (fond `bg-base`, typo display serif, gradient violet→bleu sur « employés virtuels »).
- Ajouter à droite du texte (desktop uniquement) une illustration schématique minimaliste : un agent IA au centre (cercle avec icône), 4 flèches partant vers 4 icônes outils (Gmail, CRM, Slack, base de données). Animation : les flèches pulsent doucement.

---

## Section 2 — Un agent IA, c'est quoi exactement ?

**Pattern visuel** : long paragraphe éditorial pleine largeur, sans grille, sans cartes. Un seul callout sombre en encart à la fin pour la phrase « En une phrase ».

**H2**

> Un agent IA, c'est quoi exactement ?

**Paragraphe d'ouverture**

> Un agent IA est un programme qui associe deux composants : un **modèle de langage** (GPT, Claude, Mistral, Gemini) et un **accès à vos outils professionnels** (mails, CRM, ERP, bases de données, API). La combinaison des deux lui permet de **lire** une information, **raisonner** dessus, puis **agir** — exactement comme le ferait un collaborateur humain qui aurait accès aux mêmes outils.

**Sous-paragraphe pédagogue**

> La différence avec un chatbot classique tient en trois mots : **autonomie**, **raisonnement**, **action**. Un chatbot répond à une question. Un agent IA résout un problème. Il choisit quels outils utiliser, dans quel ordre, et corrige sa trajectoire si un imprévu survient. C'est ce qu'on appelle l'**automatisation agentique**.

**Callout "En une phrase"** (encart illustré, fond `bg-dark`)

> **En une phrase :** un agent IA, c'est un employé virtuel qui pense avant d'agir, qui sait utiliser vos outils, et qui apprend de ses erreurs.

---

## Section 3 — Chatbot, workflow, agent IA : ne pas confondre

**Pattern visuel** : tableau comparatif 4 colonnes en desktop, transformé en accordéon par ligne sur mobile. Pas de cartes, pas de grille — un vrai tableau éditorial.

**H2**

> Chatbot, workflow, agent IA : quelle différence ?

**Paragraphe intro**

> Ces trois technologies sont souvent confondues. Elles résolvent pourtant des problèmes très différents. Voici le comparatif que nous donnons à tous nos clients au démarrage d'une mission.

### Tableau comparatif (grille 4 colonnes desktop / accordéon mobile)

| Critère | Chatbot classique | Workflow classique (Zapier, Make) | **Agent IA (Althoce)** |
|---------|-------------------|----------------------------------|------------------------|
| **Nature** | Réponses scriptées | Chaîne de règles « si X alors Y » | Raisonnement autonome |
| **Peut prendre des décisions ?** | Non | Non (règles fixes) | **Oui** |
| **Gère les cas imprévus ?** | Non | Non (il plante) | **Oui, il s'adapte** |
| **Lit des documents non-structurés ?** | Non | Difficilement | **Oui (PDF, mails, images)** |
| **Apprend de ses erreurs ?** | Non | Non | **Oui (via logs + retraining)** |
| **Exemple typique** | FAQ sur site vitrine | Envoyer un Slack quand un lead arrive | Traiter un mail client de A à Z : lire, comprendre, répondre, mettre à jour le CRM |
| **Coût typique** | 50–500 €/mois | 20–200 €/mois | **1 400 € HT pour un cas simple (tarif fixe) — sur devis pour les systèmes** |

**Pitch conclusion**

> Les chatbots et les workflows ont leur utilité, mais ils s'arrêtent dès qu'un cas sort du scénario prévu. Un agent IA continue — parce qu'il ne suit pas un script, il suit un objectif.

---

## Section 4 — Comment fonctionne un agent IA Althoce

**Pattern visuel proposé (au lieu d'une grille 2×3 de cartes)** : un **schéma SVG inline « exploded view »** qui assemble les 5 briques visuellement (cerveau au centre, mémoire/outils/orchestrateur/garde-fous reliés par des connecteurs animés). À côté du schéma, une liste verticale numérotée 01→05 avec, pour chaque brique, le nom + 1 phrase manifeste + un bouton « Détail » qui développe le paragraphe en accordéon. Sur mobile : schéma au-dessus, accordéon dessous. *À challenger si autre préférence visuelle.*

**H2**

> Anatomie d'un agent IA : les 5 briques techniques

**Paragraphe intro**

> Techniquement, un agent IA Althoce repose sur cinq briques que nous assemblons sur-mesure pour chaque mission. Voici ce qu'elles font et pourquoi chacune compte.

### Les 5 briques (liste verticale numérotée, accordéon)

**Brique 1 — Le cerveau (LLM)**
Un modèle de langage (Claude, GPT-4, Mistral Large, selon vos contraintes de souveraineté). C'est lui qui comprend la situation, raisonne, et décide. Le choix du modèle dépend de la complexité des tâches et de vos exigences de confidentialité.

**Brique 2 — La mémoire**
Vecteurs et bases de connaissances (RAG). L'agent se souvient des précédents dossiers, connaît vos procédures internes, accède à vos documents sans que vous ayez à les lui redonner à chaque fois.

**Brique 3 — Les outils (tools)**
Chaque agent dispose d'un arsenal d'outils : lire un mail, écrire dans un CRM, envoyer un Slack, lancer une requête SQL, générer un PDF. Nous développons les outils manquants sur-mesure.

**Brique 4 — L'orchestrateur**
Une logique de prise de décision qui choisit, à chaque étape, quelle brique utiliser. Basée sur n8n, LangGraph ou notre framework maison selon la complexité.

**Brique 5 — Les garde-fous**
Validation humaine sur les actions sensibles, filtres de contenu, limites de coût, journalisation exhaustive. L'agent est encadré, auditable, contrôlable.

**Callout technique (encart discret)**

> **Pour les DSI :** nous utilisons n8n comme backbone d'orchestration pour la plupart des projets, avec des nœuds custom en TypeScript/Python. Les LLM sont branchés via API (OpenAI, Anthropic, Mistral) ou auto-hébergés sur vos serveurs selon vos contraintes de souveraineté. Code source et documentation vous appartiennent à 100 %.

---

## Section 5 — Les 3 types d'agents IA que nous déployons

**Pattern visuel proposé (au lieu d'une grille 3 colonnes)** : **split éditorial zig-zag**, alternance gauche/droite. Pour chaque archétype : à gauche (ou droite) une grosse icône animée + le nom + 1 phrase manifeste, à l'opposé un bloc texte (mission, exemple, bénéfice, lien interne). 3 archétypes = 3 blocs alternés (gauche-droite-gauche). Espacement généreux entre les blocs, pas de cartes encadrées. *À challenger si autre préférence visuelle.*

**H2**

> Trois grandes familles d'agents IA, selon la mission.

**Paragraphe intro**

> Toutes les missions ne se ressemblent pas. Selon ce que vous voulez automatiser, l'agent prend une forme différente. Voici les trois archétypes que nous déployons chez nos clients.

### Split éditorial zig-zag (alternance gauche/droite)

**Agent commercial**

*Icône* : `Briefcase`

*Mission* : qualifier les leads entrants, enrichir les contacts, préparer les appels, relancer les dossiers dormants, assister vos commerciaux avant/pendant/après les rendez-vous.

*Exemple* : un agent qui reçoit un lead via formulaire, enrichit automatiquement (LinkedIn + base SIRENE + signaux d'achat), scorre la qualité du lead, prépare un brief de 3 lignes pour le commercial, puis suit la relance jusqu'à l'entrée en pipe CRM.

*Bénéfice mesuré chez nos clients* : +30 % de leads qualifiés, −50 % de temps passé en préparation d'appel.

*Lien interne* : En savoir plus → `/agent-ia/commercial/`

---

**Agent opérationnel**

*Icône* : `Settings2`

*Mission* : absorber les tâches administratives répétitives (lecture de documents, saisie, rapprochement, reporting) qui saturent les équipes.

*Exemple* : un agent qui reçoit les factures fournisseurs par mail, extrait les données (TTC, TVA, échéance, IBAN), rapproche automatiquement avec le bon de commande, soumet à validation en 1 clic au DAF, met à jour le logiciel comptable.

*Bénéfice mesuré chez nos clients* : −80 % de temps de saisie, 0 erreur humaine sur les tâches automatisées.

*Lien interne* : En savoir plus → `/agent-ia/operations/`

---

**Agent support**

*Icône* : `MessageSquare`

*Mission* : prendre en charge les demandes client de niveau 1 et 2 (suivi de commande, questions récurrentes, résolutions simples), escalader intelligemment les cas complexes, apprendre de chaque interaction.

*Exemple* : un agent qui traite les tickets entrants, identifie l'intention (réclamation, question technique, demande de résiliation), consulte la base documentaire, rédige une réponse dans le ton de voix de la marque, et ne fait remonter à l'humain que les cas à forte valeur ou sensibles.

*Bénéfice mesuré chez nos clients* : 70 % des tickets résolus en autonomie, satisfaction client +12 points.

*Lien interne* : En savoir plus → `/agent-ia/service-client/`

---

## Section 6 — Cas d'usage par métier

**Pattern visuel** : **on réutilise strictement le `Marquee` de la home** (catalogue 30 agents en marquee double-ligne). Cohérence home garantie, zéro duplication de pattern. Sur cette page Service, on ne fait que pointer vers le composant déjà construit, en filtrant éventuellement les agents pertinents pour la page (ici : tous les 30, puisque c'est le pilier marque agents IA).

**H2**

> Un agent IA pour chaque métier.

**Paragraphe intro**

> Au-delà des trois grandes familles (commercial, opérationnel, support), chaque métier a ses agents spécialisés. Voici tous les agents que nous déployons chez nos clients PME.

### Marquee 30 agents (réutilisation composant home)

*Même composant `Marquee` que la home. Liens individuels vers `/agent-ia/[métier]/` quand publiés.*

**CTA central**

> Voir toutes les automatisations métier → `/automatisation/`

---

## Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `MethodologySection` de la home v2.**
>
> On NE redéfinit PAS la méthode sur la page Service. On utilise **exactement** le composant et le contenu de la home (4 étapes timeline). Aucun ajout, aucune variation textuelle, aucun nouveau visuel. Si une variante est nécessaire pour ce service en particulier, retour à Vincent pour arbitrage.
>
> **JSON-LD `HowTo`** : généré côté server à partir des 4 étapes du composant home (à factoriser dans un util partagé).
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## Section 8 — Pricing (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du langage visuel pricing de la home v2.**
>
> On NE redéfinit PAS le pricing sur la page Service. Le composant et le contenu sont **identiques** à la home. Logique pricing arbitrée :
>
> - **Agent simple = 1 400 € HT** (tarif fixe affiché)
> - **Multi-agents, employé IA, refonte process = Sur devis** (chiffré au cadrage)
>
> **30 minutes offertes avec un expert** mentionnées dans cette section — c'est l'unique format d'entrée gratuit.
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## Section 9 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `SouveraineteSection` de la home v2.**
>
> On NE redéfinit PAS la souveraineté sur la page Service. Composant et contenu **identiques** à la home (3 engagements : hébergement UE, contrôle humain, traçabilité).
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## Section 10 — FAQ enrichie (AEO / LLM)

**H2**

> Vos questions, nos réponses directes.

### 10 Q/R (à intégrer avec schema FAQPage)

**Q1 — Quelle est la différence entre un agent IA et un chatbot ?**

Un chatbot répond à des questions. Un agent IA **exécute des tâches de bout en bout**. Un chatbot suit un script ; un agent IA suit un objectif. Un chatbot ne peut pas ouvrir votre CRM, lire un contrat PDF ou envoyer un mail en votre nom ; un agent IA le peut. Concrètement : un chatbot, c'est « FAQ en 24/7 ». Un agent IA, c'est « collaborateur virtuel ».

**Q2 — Quelle est la différence entre un agent IA et une automatisation classique (Zapier, Make, n8n) ?**

Une automatisation classique (workflow) suit des règles fixes : « si X alors Y ». Un agent IA utilise un modèle de langage pour **comprendre le contexte** et **choisir** quoi faire. Résultat : il gère les cas imprévus, les documents non structurés, les exceptions. Techniquement, chez Althoce, nos agents utilisent n8n comme backbone mais avec des briques LLM — c'est ce qui les rend « agentiques ».

**Q3 — Combien coûte la création d'un agent IA chez Althoce ?**

Un agent IA simple est facturé **1 400 € HT** — tarif fixe, 1 cas d'usage borné, 1 semaine de delivery. Pour les systèmes multi-agents et les employés IA complets remplaçant un poste à temps plein : **sur devis**, chiffré au cadrage. Tout démarre par **30 minutes offertes avec un expert** : on cartographie vos processus prioritaires et vous repartez avec un devis ferme, que vous décidiez ensuite de travailler avec nous ou pas.

**Q4 — En combien de temps un agent IA est-il opérationnel ?**

Pour un agent simple : **1 semaine après validation du cadrage**. Pour un système multi-agents : 2 à 6 semaines. Pour un employé IA complet : 8 à 12 semaines. Les délais sont tenus parce qu'on ne commence pas sans cadrage chiffré et validé.

**Q5 — Un agent IA peut-il se tromper ?**

Oui, comme un humain. Les LLM font des erreurs (on parle d'hallucinations). Nous gérons ce risque avec trois couches : validation humaine obligatoire sur les actions sensibles, filtres de contenu, journalisation exhaustive pour traçabilité. En pratique, chez nos clients, le taux d'erreur observé est **inférieur à 1 % sur les tâches automatisées** — largement en-dessous du taux d'erreur humain sur les mêmes tâches.

**Q6 — Mes employés vont-ils être remplacés par un agent IA ?**

Non. Nos agents absorbent les tâches répétitives à faible valeur ajoutée (80 % d'une journée administrative). Vos équipes se recentrent sur ce qui demande de l'humain : relation client, créativité, stratégie. Aucun de nos clients n'a supprimé de poste suite à une mission Althoce. Plusieurs en ont créé.

**Q7 — Mes données vont-elles être envoyées à OpenAI ou Anthropic ?**

Uniquement si vous le décidez. Pour les clients qui exigent la souveraineté totale, nous utilisons des modèles hébergés en Europe (Mistral) ou auto-hébergés (Llama, Mixtral) sur votre infrastructure. Les données sensibles peuvent être filtrées/anonymisées avant tout appel LLM externe.

**Q8 — À qui appartient l'agent IA à la fin de la mission ?**

À vous, à 100 %. Nous développons sur votre infrastructure ou sur un environnement dédié que nous vous transférons. Code, accès, logs, workflows : tout vous revient. Pas de rétention technique, pas d'abonnement obligatoire au-delà du support que vous choisissez.

**Q9 — Faut-il avoir des compétences tech en interne pour utiliser un agent IA Althoce ?**

Non pour l'usage quotidien : l'agent tourne seul, votre équipe n'a rien à faire. Oui si vous voulez le faire évoluer vous-même : nous formons 1 à 2 personnes chez vous à opérer et modifier l'agent. Alternative : vous restez en support chez nous, sans toucher au code.

**Q10 — Quelle est la différence entre un agent IA et un « employé IA » ?**

Un agent IA exécute une tâche (ou une famille de tâches). Un **employé IA** est un assemblage de plusieurs agents qui couvrent un poste entier (ex : SDR complet = prospection + enrichissement + qualification + relance + reporting). C'est la différence entre un outil et un collaborateur. Les employés IA sont **sur devis** (chiffrage à l'issue du cadrage) et remplacent typiquement 1 à 3 ETP.

**Note pour Claude Code** : injecter le schéma `FAQPage` JSON-LD reprenant ces 10 Q/R. Gain AEO/LLM (ChatGPT, Perplexity, Claude, Gemini).

---

## Section 11 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `CTAFinalSection` de la home v2.**
>
> On NE redéfinit PAS le CTA final sur la page Service. Composant, fond `bg-dark`, sous-titre, CTA unique « Réserver mon audit gratuit » et micro-garantie : **identiques** à la home.
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## 4. Maillage interne

### Liens sortants depuis cette page (~15)

**Vers Silo 1 (services associés)** :
- `/services/audit-ia/` (section 7 — démarrer par l'audit)
- `/services/automatisation-ia/` (section 3 — différenciation)
- `/services/employe-ia/` (section 10 Q10 — montée en gamme)

**Vers Silo 2 (métiers)** :
- `/agent-ia/commercial/` (section 5)
- `/agent-ia/operations/` (section 5)
- `/agent-ia/service-client/` (section 5)
- `/agent-ia/marketing/` (section 6)
- `/agent-ia/rh/` (section 6)
- `/agent-ia/finance/` (section 6)
- `/agent-ia/juridique/` (section 6)
- `/agent-ia/secteurs/` (section 6)
- `/automatisation/` (hub Silo 2, section 6)

**Vers Silo 4 (conseil)** :
- `/conseil/` (section 9)

**Vers Silo 6 (cas clients)** :
- `/cas-clients/` (ancre implicite section 5 bénéfices)

### Liens entrants attendus (depuis les autres pages)

Règle d'or Miro : ≥ 3 liens entrants. Ici on en vise **8+** :
1. Home section 4 « Qu'est-ce qu'un agent IA »
2. Home section 6 grille services
3. `/services/` hub
4. `/automatisation/` hub
5. Toutes les pages `/agent-ia/[métier]/` (8 pages)
6. `/services/employe-ia/` (cross-link)
7. `/services/automatisation-ia/` (cross-link)
8. Blog cluster « agents IA » (articles à venir Silo 5)

---

## 5. Checklist SEO / GEO / AEO

**On-page**
- [ ] H1 unique : « Agents IA sur-mesure. On conçoit vos employés virtuels qui décident et agissent à votre place. »
- [ ] 1 seul H1, hiérarchie H2 → H3 respectée
- [ ] Mot-clé « agent IA » dans : H1, H2 section 2, H2 section 5, URL, meta title, meta description, 1er paragraphe
- [ ] Densité mot-clé raisonnable (≤ 2 %), pas de bourrage
- [ ] `alt` des 3 illustrations agents contiennent « agent IA [commercial|opérationnel|support] »

**Structured data**
- [ ] Schema `Service` injecté
- [ ] Schema `FAQPage` injecté (10 Q/R)
- [ ] Schema `BreadcrumbList` injecté
- [ ] Schema `HowTo` section méthode injecté

**Maillage**
- [ ] 15 liens sortants internes (voir section 4)
- [ ] Ancres optimisées (pas « cliquez ici »)
- [ ] Profondeur depuis la home = 1 clic

**Performance**
- [ ] Image schéma agent en SVG inline (pas PNG)
- [ ] Section FAQ en `<details>` natif (SEO + perf)
- [ ] Lighthouse cible : Performance ≥ 90, SEO = 100, Accessibilité ≥ 95

**AEO (réponses dans LLM)**
- [ ] Premier paragraphe répond directement à « c'est quoi un agent IA » (réponse extractible)
- [ ] Tableau comparatif chatbot vs workflow vs agent IA (structure extractible par LLM)
- [ ] FAQ 10 Q/R structurées (structure extractible par LLM)

---

## 6. Notes pour Claude Design

### Composants HOME à réutiliser strictement (4 sections héritées)
- `<MethodologySection />` (section 7) — héritée de la home v2. Aucune variation.
- Langage visuel pricing home (section 8) — héritée de la home v2. Aucune variation.
- `<SouveraineteSection />` (section 9) — héritée de la home v2. Aucune variation.
- `<CTAFinalSection />` (section 11) — héritée de la home v2. Aucune variation.
- `<Marquee />` agents (section 6) — réutilisé tel quel depuis la home v2.

### Composants à réutiliser (définis dans design-brief.md)
- `<DarkBlock />` (section 2 callout « En une phrase »)
- `<FAQItem />` (section 10)

### Nouveaux composants à créer (sections propres au service)
- `<ComparisonTable />` (section 3) — tableau responsive 4 colonnes desktop, transformé en accordéon par ligne sur mobile. Mutualisé avec `/services/automatisation-ia/`.
- `<AgentAnatomyExploded />` (section 4) — schéma SVG inline « exploded view » des 5 briques (cerveau central + mémoire/outils/orchestrateur/garde-fous reliés par connecteurs animés) + à droite/dessous une liste verticale numérotée 01→05 avec accordéon « Détail » par brique. **Pas de grille de cartes.**
- `<TypologieSplit />` (section 5) — split éditorial zig-zag, alternance gauche/droite pour les 3 archétypes d'agents. Espacement généreux, pas de cartes encadrées.
- `<AgentSchemaIllustration />` (section 1 hero) — illustration SVG minimaliste : agent central + 4 outils connectés.

### Règle « pas de labels visuels »
Aucun label décoratif au-dessus des H2. Le H2 porte directement le mot-clé SEO. Cohérence avec home v2.

### Ton visuel
Même univers que la home v2.1 : fond `bg-base`, alternance avec sections `bg-subtle` et `bg-dark`. Pas de nouveau langage visuel à introduire.

---

## 7. Notes pour Claude Code

### Route
Créer `/services/agents-ia/page.tsx` en Next.js App Router.

### Metadata
Exporter la `metadata` (title, description, OG, Twitter, canonical) via l'API Next 15.

### JSON-LD
Injecter les 4 schémas dans le `<head>` via un composant `<Script type="application/ld+json">` côté server.

### Redirections
Aucune nécessaire (nouvelle page).

### Dépendances
- `framer-motion` pour animations de section
- `lucide-react` pour icônes (Briefcase, Settings2, MessageSquare, Cpu, Layers, ScanLine, ShieldCheck)
- Composant `<Breadcrumbs />` global à créer si absent

---

## 8. Informations à valider avant publication

1. **Logos tech partenaires** cités implicitement (n8n, OpenAI, Anthropic, Mistral, LangGraph) — confirmer l'accord avec chacun ou leur usage en mention technique non-commerciale.
2. **Chiffres des cas Althoce** (70 % tickets résolus, +12 points satisfaction, +30 % leads qualifiés) — à croiser avec les cas clients publics sur `/cas-clients/`.
3. ✅ **Pricing arbitré (avril 2026)** : agent simple = **1 400 € HT** (tarif fixe affiché publiquement) · multi-agents, employé IA, refonte process = **sur devis** (chiffré après cadrage). Entrée découverte unique : **30 minutes offertes avec un expert**. Aligné avec `/services/automatisation-ia/` et la home.
4. **Ajout d'un encart cross-référence vers `/agent-ia/`** (décision mai 2026) → ajouter en fin de la section "archétypes commercial / opérationnel / support" un encart `<DarkBlock />` distinct : « Vous préférez entrer par votre métier ? Voir le catalogue par fonction → » avec lien vers `/agent-ia/`. Cet encart matérialise la complémentarité entre cette page (entrée produit) et le hub `/agent-ia/` (entrée métier), évite la cannibalisation SEO et facilite l'orientation utilisateur. Voir `content/agent-ia-hub.md` sec.2 pour le tableau comparatif détaillé des deux entrées.

---

## 9. Prochaine page du Silo 1

Une fois `/services/agents-ia/` validée et publiée :

1. **`/services/automatisation-ia/`** — deuxième pilier critique, 1500 mots + FAQ
2. **`/services/employe-ia/`** — différenciateur Althoce, 1200 mots
3. Puis `/services/developpement-ia/`, `/services/chatbot-ia/`, `/services/integration-ia/`, `/services/formation-ia/`, `/services/audit-ia/`
4. Enfin **`/services/`** hub (vue d'ensemble du Silo 1)

Le Silo 1 complet vise une cohérence sémantique forte : chaque page renvoie à minimum 2 autres pages du silo, + liens vers Silo 2 (métiers) et Silo 6 (cas clients).

---

*Document généré par Claude (content strategist) · v1.0 · avril 2026*
*À valider par Vincent avant transmission à Claude Design puis Claude Code.*
