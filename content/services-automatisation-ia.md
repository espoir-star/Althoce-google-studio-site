# /services/automatisation-ia/ — Althoce (Silo 1, page pilier #2)

> **Brief de contenu** destiné à Claude Design (conception) et Claude Code (intégration).
> Version : 1.0 — Avril 2026
> Silo : 1 · Services IA · **Page pilier**
> URL : `/services/automatisation-ia/`
> Statut Miro : tâche #11 — Critique 🔥
> Pair avec : `/services/agents-ia/` (pilier #1) et `/services/employe-ia/` (pilier #3)
> **🔵 Adaptation #1 du modèle vivant Service** — ce brief suit la structure canonique définie dans `services-agents-ia.md` §0. Seuls les slots variables ont été remplis (H1, sous-titre, tableau comparatif, FAQ, méthode, maillage). Tous les blocs immuables (CTA, pricing, audit pitch, souveraineté, JSON-LD types, chiffres marque) sont strictement identiques.

---

## 1. Stratégie de la page

### Rôle dans l'architecture
C'est **la page pilier "entrée générique"** du Silo 1. Elle capte les requêtes larges (« automatisation IA », « automatisation entreprise », « automatiser avec l'IA ») qui représentent le plus gros volume de recherche en France dans notre niche. Là où `/services/agents-ia/` porte le positionnement marque, cette page porte le **positionnement marché** : Althoce est une agence d'automatisation IA moderne, agentique, complète.

Elle sert de **hub sémantique** : tous les silos opérationnels (chatbot, intégration, développement, audit, formation) y renvoient, et elle distribue vers eux comme vers le Silo 2 métiers.

### Objectif trafic
1. **Capter** le trafic volume : « automatisation IA », « automatisation des tâches », « automatisation entreprise », « agence automatisation IA ».
2. **Éduquer** sur la différence entre l'ancienne automatisation (RPA, workflows fixes) et la nouvelle (agentique, LLM).
3. **Convertir** sur RDV découverte (30 minutes offertes avec un expert).
4. **Distribuer** vers les services opérationnels (`/services/chatbot-ia/`, `/services/integration-ia/`, `/services/developpement-ia/`) et vers les 8 pages métier (`/agent-ia/[métier]/`).

### Intention de recherche
**Mixte** : informationnelle (« comment automatiser avec l'IA ? », « quels processus automatiser ? ») + commerciale (« agence automatisation IA », « coût automatisation IA »). La page doit répondre aux deux sans alourdir.

### Cible prioritaire
Dirigeant·e ou responsable opérationnel (DSI, DAF, DRH, COO) qui cherche à **réduire des coûts** ou **absorber un pic de charge** sans embaucher. Il ne cherche pas forcément « un agent IA » — il cherche à « automatiser ». Notre rôle : l'emmener de son cadre mental (workflow Zapier, RPA) vers le cadre agentique qui est notre différenciateur.

### Mots-clés cibles

**Principal** : automatisation IA

**Secondaires** :
- automatisation intelligente
- automatisation entreprise
- automatisation PME
- automatisation processus IA
- agence automatisation IA
- automatiser avec l'IA
- automatisation agentique
- automatisation sur-mesure
- automatisation métier IA

**Longue traîne** :
- comment automatiser son entreprise avec l'IA
- automatiser les tâches répétitives en entreprise
- différence RPA et IA
- différence automatisation et agent IA
- ROI automatisation IA
- quels processus automatiser en priorité
- combien coûte une automatisation IA

---

## 2. Méta SEO

```html
<title>Automatisation IA pour PME & ETI — Cadrage, chiffrage, mise en production | Althoce</title>

<meta name="description" content="Agence d'automatisation IA française. On identifie, chiffre et déploie les automatisations qui libèrent vos équipes : mails, documents, CRM, reporting. 30 min offertes avec un expert. Premier livrable sous 7 jours.">

<meta name="keywords" content="automatisation IA, automatisation intelligente, agence automatisation IA, automatisation entreprise, automatiser avec l'IA, automatisation processus, automatisation agentique, automatisation PME">

<link rel="canonical" href="https://althoce.com/services/automatisation-ia/">

<!-- Open Graph -->
<meta property="og:title" content="Automatisation IA sur-mesure pour PME & ETI — Althoce">
<meta property="og:description" content="On automatise les 20 % de tâches qui vous coûtent 80 % de votre temps. 30 min offertes avec un expert, premier livrable en 7 jours.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/automatisation-ia/">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Automatisation IA sur-mesure — Althoce">
<meta name="twitter:description" content="Automatisez ce qui doit l'être, gardez l'humain là où il compte.">
```

### Schémas JSON-LD requis (à injecter par Claude Code dans `<head>`)

1. **Service** — `@type: Service`, `serviceType: "Automatisation IA sur-mesure"`, `provider: @id de Organization`, `areaServed: FR`, offre « From 1400 EUR ».
2. **FAQPage** — les 10 Q/R de la section FAQ.
3. **BreadcrumbList** — Accueil → Services → Automatisation IA.
4. **HowTo** — section 6 méthode de déploiement.
5. **Article** (optionnel) — considérer cette page comme pilier rédactionnel SEO.

---

## 3. Structure de la page (10 sections + FAQ)

Légende : 🟢 Section **propre au service** (slot à adapter par page) · 🏠 Section **héritée de la home v2** (composant réutilisé tel quel — aligné avec `services-agents-ia.md` §0).

| # | Section | Origine | Objectif | Liens sortants |
|---|---------|---------|----------|----------------|
| 1 | Hero | 🟢 propre | H1 + promesse + CTA | — |
| 2 | Ce qu'on appelle « automatisation IA » aujourd'hui | 🟢 propre | Pédagogie + mot-clé | → blog lexique |
| 3 | Ancienne vs nouvelle automatisation | 🟢 propre | Différenciation RPA/Zapier vs agentique | → /services/agents-ia/ |
| 4 | 6 familles de processus à automatiser | 🟢 propre | Capture longue traîne, distribution métier | → 6 pages Silo 2 |
| 5 | Ce qu'on automatise concrètement (12 cas) | 🟢 propre (Marquee horizontal) | Preuve, SEO longue traîne | → 4 cas clients |
| 6 | Méthode Althoce en 4 étapes | 🏠 **héritée** (`MethodologySection`) | HowTo JSON-LD | → /services/audit-ia/ |
| 7 | Prix & délais transparents | 🏠 **héritée** (langage pricing home) | Conversion | → /services/agents-ia/ |
| 8 | Sécurité, souveraineté, conformité | 🏠 **héritée** (`SouveraineteSection`) | Objections RGPD, AI Act | → /conseil/ |
| 9 | FAQ (10 Q/R) | 🟢 propre | AEO / LLM | Schema FAQPage |
| 10 | CTA final | 🏠 **héritée** (`CTAFinalSection`) | Conversion | — |

**Bilan template** : 6 sections propres au service (slots adaptés depuis le modèle agents-ia), 4 sections héritées de la home (jamais redéfinies). Aucun label décoratif au-dessus des H2.

**Liens sortants internes prévus : ~14** (dont 6 vers le Silo 2 `/agent-ia/[métier]/`, 4 vers d'autres pages Services, 1 vers Conseil, 3 vers Cas clients).

---

# CONTENU SECTION PAR SECTION

---

## Section 1 — Hero

**Fil d'Ariane** (breadcrumb)
`Accueil › Services › Automatisation IA`

**H1 (unique) — pas de label décoratif au-dessus**

> Automatisation IA sur-mesure.
> On **libère vos équipes** des 80 % de tâches qui ne créent pas de valeur.

**Sous-titre (2 lignes)**

> Mails, documents, CRM, reporting, saisie, rapprochements : ce que votre équipe fait chaque jour en mode « pilote automatique », on le fait tourner dans un agent IA. Pas de script rigide, pas de projet-usine : un audit en 48h, un premier livrable en 7 jours.

**Micro-preuves (pills, max 3)**

> +150 PME équipées · Premier agent en 1 semaine · ROI validé en 90 jours

*Les « 30 minutes offertes avec un expert » n'apparaissent PAS dans le hero — c'est mentionné dans la section pricing héritée de la home, dans la FAQ Q3, et dans le CTA final hérité de la home.*

**CTA principal**

> Discuter de votre projet →

**CTA secondaire**

> Voir ce qu'on automatise ↓ *(ancre vers section 5)*

**Note Claude Design**
- Reprendre le système visuel home v2.1 (fond `bg-base`, typo display serif, gradient violet→bleu sur « libère vos équipes »).
- À droite du texte (desktop uniquement) : illustration animée — un flux de 5 tâches entrantes (icônes mail, facture, ticket, doc, CRM), qui traversent une "pipeline" Althoce et ressortent cochées/traitées. Animation douce, 4 s de boucle.

---

## Section 2 — Ce qu'on appelle « automatisation IA » aujourd'hui

**Pattern visuel** : long paragraphe éditorial pleine largeur (pas de grille, pas de cartes) + 1 callout sombre en encart à la fin pour la phrase « En une phrase ».

**H2**

> L'automatisation IA, c'est quoi exactement ?

**Paragraphe d'ouverture**

> L'**automatisation IA** désigne l'utilisation de modèles d'intelligence artificielle — et en particulier de modèles de langage comme GPT, Claude ou Mistral — pour **exécuter à votre place des tâches professionnelles**. Pas seulement répondre à des questions : comprendre un contexte, lire des documents, interagir avec vos outils (mail, CRM, ERP), prendre des décisions, et agir.

**Sous-paragraphe pédagogue**

> La différence avec l'**automatisation classique** (Zapier, Make, RPA) tient en un mot : la **compréhension**. Les automatisations traditionnelles suivent des règles figées — « si la case X est cochée, envoie le mail Y ». Elles plantent dès qu'une exception arrive. Une automatisation IA, elle, s'adapte : elle lit un mail client en langage naturel, comprend qu'il s'agit d'une réclamation complexe, décide d'escalader au bon interlocuteur et rédige un accusé de réception personnalisé.

**Callout "En une phrase"** (encart illustré, fond `bg-dark`)

> **En une phrase :** automatiser avec l'IA, c'est déléguer à une machine tout ce qui est répétitif **et** demande un peu de jugement. Pas seulement ce qui est répétitif et déterministe.

---

## Section 3 — L'ancienne vs la nouvelle automatisation

**Pattern visuel** : tableau comparatif 3 colonnes en desktop, transformé en accordéon par ligne sur mobile. Pas de cartes — un vrai tableau éditorial.

**H2**

> Ce qui a changé en 2025 : l'automatisation est devenue agentique.

**Paragraphe intro**

> Jusqu'en 2022, automatiser en entreprise voulait dire RPA (UiPath, Automation Anywhere) ou iPaaS (Zapier, Make, n8n). Ces outils connectent des applications et exécutent des règles. Depuis l'arrivée des modèles de langage avancés, une nouvelle génération d'automatisation est apparue : l'**automatisation agentique**. Voici ce qui change concrètement.

### Tableau comparatif (grille 3 colonnes desktop / accordéon mobile)

| Critère | Automatisation classique (RPA, Zapier, Make) | **Automatisation IA / agentique (Althoce)** |
|---------|---------------------------------------------|---------------------------------------------|
| **Logique** | « Si X alors Y » (règles fixes) | « Quel est le but ? » (raisonnement) |
| **Données non structurées** | Plantent (PDF, mails libres, images) | Lues et comprises nativement |
| **Gestion des exceptions** | Escalade humaine systématique | Traitement autonome de la majorité |
| **Mise à jour quand le process change** | Recâbler tous les workflows | L'agent s'adapte seul ou avec prompt léger |
| **Maintenance** | Coûteuse (workflows cassent) | Faible (l'agent est résilient) |
| **Usage typique** | Synchro CRM → outil comptable | Traiter un mail client de bout en bout |
| **Coût de démarrage** | 1 000 – 50 000 € selon périmètre | **À partir de 1 400 € HT** |

**Pitch conclusion**

> Les deux coexistent. Nous combinons les deux en production : la plomberie reste du n8n classique, l'intelligence vient de briques LLM. C'est cette architecture hybride qu'on appelle **automatisation agentique**.

**Lien interne**

> Voir notre service dédié aux agents IA → `/services/agents-ia/`

---

## Section 4 — 6 familles de processus qu'on automatise

**Pattern visuel proposé (au lieu d'une grille 6 cartes 2×3)** : **liste verticale numérotée en pleine largeur**, chaque famille = un grand chiffre display serif (01 à 06), un titre, un bloc texte (description + exemple chiffré + lien métier). Séparateurs horizontaux discrets entre chaque famille. Sur mobile : même rythme, juste plus dense. *À challenger si autre préférence visuelle.*

**H2**

> Quels processus en entreprise se prêtent à l'automatisation IA ?

**Paragraphe intro**

> Toutes les tâches ne sont pas bonnes à automatiser. Une règle simple guide nos audits : on cible les tâches **récurrentes, consommatrices de temps, à faible valeur ajoutée cognitive**, idéalement déclenchées par un événement numérique (mail, document, API). Six grandes familles ressortent chez nos clients.

### Liste verticale numérotée 01 → 06

**1 — Traitement de flux entrants**
Mails, tickets, formulaires, appels téléphoniques (transcrits). L'agent lit, classe, priorise, répond ou route. *Exemple : un cabinet de recrutement qui traite 500 CV/semaine de façon automatisée.*
→ `/agent-ia/service-client/`

**2 — Extraction & structuration de documents**
Factures, bons de commande, contrats, rapports, PV. L'agent extrait les données, structure, rapproche, archive. *Exemple : un DAF qui économise 3 ETP sur la comptabilité fournisseurs.*
→ `/agent-ia/finance/`

**3 — Automatisation commerciale & marketing**
Qualification leads, enrichissement CRM, rédaction d'e-mails, relance, reporting de pipe. *Exemple : une équipe sales qui double son volume de RDV sans recruter.*
→ `/agent-ia/commercial/`

**4 — Opérations internes & reporting**
Rapports hebdo, consolidation multi-outils, alertes sur KPI, synthèse de données. *Exemple : un COO qui reçoit chaque lundi 7h un brief complet généré automatiquement.*
→ `/agent-ia/operations/`

**5 — Processus RH**
Pré-qualification candidats, onboarding, réponses internes (congés, paie, règlement), gestion de la paperasse. *Exemple : un SIRH augmenté qui traite 80 % des questions RH en autonomie.*
→ `/agent-ia/rh/`

**6 — Conformité, juridique, souveraineté**
Analyse de contrats, veille réglementaire, revue de clauses, génération de documents types. *Exemple : un juriste qui passe de 4h à 20 min sur la revue d'un contrat standard.*
→ `/agent-ia/juridique/`

**CTA central**

> Toutes les automatisations par métier → `/automatisation/`

---

## Section 5 — 12 cas concrets qu'on a déjà livrés

**Pattern visuel proposé (au lieu d'une grille 12 cartes 3×4)** : **`Marquee` horizontal défilant** (cohérence directe avec le marquee 30 agents de la home), bandeau pleine largeur, défilement infini, hover pour stopper. Chaque tuile = titre court + délai + ordre de grandeur prix. Cliquable vers `/cas-clients/[slug]/` quand publié. Économise du scroll vertical, dynamise visuellement, et fait écho au pattern home. Alternative à challenger : un format « ticker » vertical en sidebar avec scroll narratif. *Choix par défaut : marquee horizontal.*

**H2**

> Concrètement, qu'est-ce qu'Althoce automatise ?

**Paragraphe intro**

> Voici 12 automatisations réellement livrées chez nos clients en 2025, chacune opérationnelle en moins de 4 semaines. Celles qui fonctionnent chez un client fonctionnent généralement chez d'autres, avec un cadrage léger.

### Marquee horizontal 12 cas (cohérence avec home)

**1. Tri et réponse automatique des mails support niveau 1**
1–2 semaines · À partir de 1 400 €

**2. Qualification & enrichissement des leads entrants**
1 semaine · À partir de 1 400 €

**3. Extraction des factures fournisseurs → logiciel comptable**
2–3 semaines · À partir de 4 000 €

**4. Génération de comptes-rendus de réunion à partir d'enregistrements**
1 semaine · À partir de 1 400 €

**5. Analyse automatique de contrats + alerte clauses à risque**
3–4 semaines · À partir de 6 000 €

**6. Agent de relance clients en souffrance (mail + téléphone via voicebot)**
3 semaines · À partir de 5 000 €

**7. Reporting hebdo multi-sources (Stripe, HubSpot, GSC, GA4)**
1–2 semaines · À partir de 3 000 €

**8. Pré-qualification CV + scoring + brief recruteur**
2 semaines · À partir de 4 500 €

**9. Traitement des demandes internes RH (FAQ + formulaires)**
2 semaines · À partir de 4 000 €

**10. Veille concurrentielle automatisée + digest hebdo**
1–2 semaines · À partir de 3 500 €

**11. Génération de fiches produit / descriptions à partir d'une base**
1–2 semaines · À partir de 1 400 €

**12. Agent SDR complet : ciblage, message, relance, RDV**
6–8 semaines · À partir de 12 000 €

**Callout sous la grille**

> Votre cas n'est pas dans la liste ? 9 fois sur 10, on peut le traiter avec une variation d'un cas existant. Les 30 min offertes avec un expert servent précisément à cartographier ça.

**CTA**

> Voir les cas clients détaillés → `/cas-clients/`

---

## Section 6 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `MethodologySection` de la home v2.**
>
> On NE redéfinit PAS la méthode sur la page Service. On utilise **exactement** le composant et le contenu de la home (4 étapes timeline). Aucun ajout, aucune variation textuelle, aucun nouveau visuel.
>
> **JSON-LD `HowTo`** : généré côté server à partir des 4 étapes du composant home (factorisation dans un util partagé).
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## Section 7 — Pricing (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du langage visuel pricing de la home v2.**
>
> On NE redéfinit PAS le pricing sur la page Service. Composant et contenu **identiques** à la home :
>
> - **Cas simple = 1 400 € HT** (tarif fixe affiché)
> - **Système, refonte process, employé IA = Sur devis** (chiffré au cadrage)
> - **30 minutes offertes avec un expert** mentionnées — unique format d'entrée gratuit
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## Section 8 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `SouveraineteSection` de la home v2.**
>
> On NE redéfinit PAS la souveraineté sur la page Service. Composant et contenu **identiques** à la home (3 engagements : hébergement UE, contrôle humain, traçabilité).
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## Section 9 — FAQ enrichie (AEO / LLM)

**H2**

> Vos questions, nos réponses directes.

### 10 Q/R (à intégrer avec schema FAQPage)

**Q1 — Quelle est la différence entre automatisation classique et automatisation IA ?**

L'automatisation classique (RPA, Zapier, Make) exécute des **règles fixes** écrites à l'avance. Elle est rapide et fiable tant qu'aucune exception n'arrive. L'automatisation IA utilise un modèle de langage pour **comprendre le contexte** et **adapter son comportement**. Résultat : elle gère les cas imprévus, lit des documents non-structurés (PDF, mails), et prend des décisions. Concrètement, on combine souvent les deux : plomberie classique pour la stabilité, briques IA pour l'intelligence.

**Q2 — Quels processus sont les plus rentables à automatiser en premier ?**

Les processus qui cochent les 4 cases : **récurrents** (au moins 10 occurrences par semaine), **chronophages** (15 min ou plus par occurrence), **à faible valeur ajoutée cognitive**, et **déclenchés par un événement numérique**. Les meilleurs candidats chez nos clients : tri de mails entrants, extraction de factures, qualification de leads, génération de rapports, réponses aux questions internes RH. ROI typique : 3 à 10× la première année.

**Q3 — Combien coûte une automatisation IA en 2026 ?**

**1 400 € HT** (tarif fixe) pour un cas simple — 1 semaine de dev. Pour les systèmes multi-agents, employés IA et refontes complètes de process : **sur devis**, chiffré au cadrage selon la complexité, le nombre d'outils branchés, le volume traité, les exigences de souveraineté et le support souhaité. Tout démarre par **30 minutes offertes avec un expert** : vous repartez avec un chiffrage ferme avant tout engagement.

**Q4 — Combien de temps faut-il pour mettre une automatisation en production ?**

Une automatisation simple est en production **sous 7 jours après validation du cadrage**. Un système d'automatisation (3 à 6 processus orchestrés) : 2 à 6 semaines. Une refonte complète de département : 6 à 12 semaines. Les délais sont tenus parce qu'on ne démarre jamais sans cadrage ferme et chiffré.

**Q5 — Peut-on automatiser avec l'IA sans compétences techniques en interne ?**

Oui pour l'usage quotidien : une fois livrée, l'automatisation tourne seule. Votre équipe a juste à la superviser via un dashboard. Si vous voulez pouvoir la modifier vous-même, nous formons 1 à 2 personnes chez vous (1 journée de formation incluse dans les systèmes à 8 000 € HT et plus). Alternative : vous restez en support chez nous, sans toucher au code.

**Q6 — Mes données vont-elles transiter par OpenAI ou Anthropic ?**

Uniquement si vous l'acceptez, et jamais sans filtre d'anonymisation préalable sur les données sensibles. Pour les clients qui exigent la souveraineté totale, nous utilisons Mistral (hébergé en France) ou des modèles open-source (Llama, Mixtral) **auto-hébergés sur votre propre infrastructure**. Aucune donnée ne sort du périmètre sans votre validation explicite.

**Q7 — Les automatisations IA sont-elles conformes RGPD et AI Act ?**

Oui. Nos déploiements intègrent par défaut : registre des traitements mis à jour, analyses d'impact (PIA) si nécessaire, clauses contractuelles types si des sous-traitants tiers sont impliqués, documentation de conformité AI Act (niveau de risque, transparence, supervision humaine). Un document unique de conformité vous est livré à chaque mise en production.

**Q8 — Une automatisation IA peut-elle remplacer un employé ?**

Elle peut absorber **80 % des tâches répétitives** d'un poste, rarement un poste entier. Chez nos clients, l'effet observé est systématiquement le même : les équipes gagnent du temps qu'elles réinvestissent sur les tâches à forte valeur (relation client, stratégie, créativité). Aucun de nos clients n'a supprimé de poste suite à une mission Althoce. Plusieurs ont réaffecté ou recruté différemment.

**Q9 — Que se passe-t-il si l'automatisation commet une erreur ?**

Trois couches de sécurité la rendent très peu probable, et récupérable si elle arrive : validation humaine obligatoire sur les actions sensibles, filtres de contenu et de coût, journalisation exhaustive (on sait exactement ce que l'agent a fait, quand, pourquoi). Taux d'erreur observé chez nos clients : inférieur à 1 % sur les tâches automatisées — largement en-dessous du taux d'erreur humain sur les mêmes tâches.

**Q10 — À qui appartient l'automatisation à la fin du projet ?**

À vous, à 100 %. Code, workflows, prompts, accès LLM, bases de données : tout vous est transféré. Nous n'imposons aucun abonnement récurrent au-delà du support que vous choisissez explicitement. Vous pouvez reprendre la main en interne, changer de prestataire, ou continuer avec nous — c'est votre choix.

**Note pour Claude Code** : injecter le schéma `FAQPage` JSON-LD reprenant ces 10 Q/R. Gain AEO/LLM (ChatGPT, Perplexity, Claude, Gemini).

---

## Section 10 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée — réutilisation stricte du composant `CTAFinalSection` de la home v2.**
>
> On NE redéfinit PAS le CTA final sur la page Service. Composant, fond `bg-dark`, sous-titre, CTA unique « Réserver mon audit gratuit » et micro-garantie : **identiques** à la home.
>
> **Aucun contenu textuel à fournir ici** — Claude Code instancie le composant home tel quel.

---

## 4. Maillage interne

### Liens sortants depuis cette page (~14)

**Vers Silo 1 (services associés)** :
- `/services/agents-ia/` (section 3 et section 7 — différenciation + montée en gamme)
- `/services/audit-ia/` (section 6 — démarrage)
- `/services/employe-ia/` (FAQ Q8 — niveau au-dessus)
- `/services/chatbot-ia/` (section 4 cas n°1 — agent support)

**Vers Silo 2 (métiers)** :
- `/agent-ia/service-client/` (section 4)
- `/agent-ia/finance/` (section 4)
- `/agent-ia/commercial/` (section 4)
- `/agent-ia/operations/` (section 4)
- `/agent-ia/rh/` (section 4)
- `/agent-ia/juridique/` (section 4)
- `/automatisation/` (section 4 hub)

**Vers Silo 4 (conseil)** :
- `/conseil/` (section 8)

**Vers Silo 6 (cas clients)** :
- `/cas-clients/` (section 5)

### Liens entrants attendus (depuis les autres pages)

Règle d'or Miro : ≥ 3 liens entrants. Ici on en vise **10+** (cette page est un hub de gros volume) :
1. Home section 4 « Ce qu'on fait »
2. Home section 6 grille services
3. `/services/` hub
4. `/services/agents-ia/` (cross-link)
5. `/services/employe-ia/` (cross-link)
6. `/services/chatbot-ia/` (remontée Silo 1)
7. `/services/integration-ia/` (remontée Silo 1)
8. `/services/developpement-ia/` (remontée Silo 1)
9. Toutes les pages `/agent-ia/[métier]/` (8 pages, ancre commune)
10. Blog cluster « automatisation » (articles à venir Silo 5)

---

## 5. Checklist SEO / GEO / AEO

**On-page**
- [ ] H1 unique : « Automatisation IA sur-mesure. On libère vos équipes des 80 % de tâches qui ne créent pas de valeur. »
- [ ] 1 seul H1, hiérarchie H2 → H3 respectée
- [ ] Mot-clé « automatisation IA » dans : H1, H2 section 2, H2 section 3, URL, meta title, meta description, 1er paragraphe
- [ ] Densité mot-clé raisonnable (≤ 2 %), pas de bourrage
- [ ] `alt` des 6 illustrations familles contiennent « automatisation IA [domaine] »

**Structured data**
- [ ] Schema `Service` injecté
- [ ] Schema `FAQPage` injecté (10 Q/R)
- [ ] Schema `BreadcrumbList` injecté
- [ ] Schema `HowTo` section 6 méthode injecté

**Maillage**
- [ ] 14 liens sortants internes (voir section 4)
- [ ] Ancres optimisées (pas « cliquez ici »)
- [ ] Profondeur depuis la home = 1 clic

**Performance**
- [ ] Illustration pipeline hero en SVG animé inline (pas GIF)
- [ ] Section FAQ en `<details>` natif (SEO + perf)
- [ ] Grille 12 cas en `<ul>` sémantique + CSS grid
- [ ] Lighthouse cible : Performance ≥ 90, SEO = 100, Accessibilité ≥ 95

**AEO (réponses dans LLM)**
- [ ] Premier paragraphe répond directement à « c'est quoi l'automatisation IA » (réponse extractible)
- [ ] Tableau comparatif RPA/Zapier vs automatisation IA (structure extractible par LLM)
- [ ] Grille 12 cas concrets (structure extractible par LLM pour requêtes longue traîne)
- [ ] FAQ 10 Q/R structurées (structure extractible par LLM)

---

## 6. Notes pour Claude Design

### Composants HOME à réutiliser strictement (4 sections héritées)
- `<MethodologySection />` (section 6) — héritée de la home v2. Aucune variation.
- Langage visuel pricing home (section 7) — héritée de la home v2. Aucune variation.
- `<SouveraineteSection />` (section 8) — héritée de la home v2. Aucune variation.
- `<CTAFinalSection />` (section 10) — héritée de la home v2. Aucune variation.
- `<Marquee />` (section 5, 12 cas concrets) — réutilise le composant marquee de la home, juste avec un dataset différent (12 cas livrés au lieu des 30 agents).

### Composants à réutiliser (définis dans design-brief.md)
- `<DarkBlock />` (section 2 callout « En une phrase »)
- `<FAQItem />` (section 9)
- `<ComparisonTable />` (section 3) — réutilise celui créé pour `/services/agents-ia/`.

### Nouveaux composants à créer (sections propres au service)
- `<NumberedListVertical />` (section 4) — liste verticale numérotée 01 → 06 pleine largeur, gros chiffres display serif, titre, description, exemple chiffré, lien métier. Séparateurs horizontaux discrets. **Pas de grille de cartes.** Mutualisable pour d'autres pages Service.
- `<AutomationFlow />` (section 1 hero) — illustration SVG animée minimaliste : 5 entrées → pipeline Althoce → 5 sorties cochées. Boucle 4 s, `prefers-reduced-motion` respecté.

### Règle « pas de labels visuels »
Aucun label décoratif au-dessus des H2. Le H2 porte directement le mot-clé SEO. Cohérence avec home v2 et `/services/agents-ia/`.

### Ton visuel
Même univers que la home v2.1 et que `/services/agents-ia/` : fond `bg-base`, alternance avec sections `bg-subtle` (section 5 les 12 cas) et `bg-dark` (section 2 callout, section 10 CTA final). Pas de nouveau langage visuel à introduire — cohérence pilier obligatoire.

---

## 7. Notes pour Claude Code

### Route
Créer `/services/automatisation-ia/page.tsx` en Next.js App Router.

### Metadata
Exporter la `metadata` (title, description, OG, Twitter, canonical) via l'API Next 15.

### JSON-LD
Injecter les 4 schémas (`Service`, `FAQPage`, `BreadcrumbList`, `HowTo`) dans le `<head>` via un composant `<Script type="application/ld+json">` côté server.

### Redirections
Aucune nécessaire (nouvelle page). Vérifier toutefois que l'ancien slug `/automatisation/` (hub Silo 2) ne rentre pas en conflit — celui-ci reste réservé au hub métiers.

### Dépendances
- `framer-motion` pour animations de section et de pipeline hero
- `lucide-react` pour icônes (Inbox, FileText, TrendingUp, Users, Scale, Building2, ClipboardCheck, ShieldCheck)
- Composant `<Breadcrumbs />` partagé avec `/services/agents-ia/`

---

## 8. Informations à valider avant publication

1. **Les 12 cas clients** cités section 5 — vérifier que chacun correspond à un cas réellement livré ou à un cas composite anonymisé. Marquer explicitement « cas composite » si nécessaire.
2. **Chiffres des 6 familles section 4** (ex : « 500 CV/semaine », « 3 ETP économisés », « double volume de RDV ») — à croiser avec les cas clients publics sur `/cas-clients/` avant mise en ligne.
3. ✅ **Pricing arbitré (avril 2026)** : agent / cas simple = **1 400 € HT** (tarif fixe affiché publiquement) · système d'automatisation, refonte process, employé IA = **sur devis** (chiffré après cadrage). Entrée découverte unique : **30 minutes offertes avec un expert**. Aligné avec `/services/agents-ia/` et la home v2.
4. **Logos tech** cités implicitement (n8n, OpenAI, Anthropic, Mistral, Zapier, Make, UiPath) — usage en mention technique non-commerciale, OK si on ne met pas de logos visuels sans autorisation.

---

## 9. Prochaine page du Silo 1

Une fois `/services/automatisation-ia/` validée et publiée :

1. ✅ `/services/agents-ia/` — pilier #1 (fait)
2. ✅ `/services/automatisation-ia/` — pilier #2 (présente page)
3. **`/services/employe-ia/`** — pilier #3, différenciateur Althoce, 1200 mots
4. Puis en cascade : `/services/developpement-ia/`, `/services/chatbot-ia/`, `/services/integration-ia/`, `/services/formation-ia/`, `/services/audit-ia/`
5. Enfin **`/services/`** hub (vue d'ensemble du Silo 1)

Maillage croisé à vérifier : chaque pilier référence les deux autres piliers ≥ 1 fois, et les 5 pages opérationnelles. Silo 1 pensé comme un triangle pilier + 5 satellites + 1 hub.

---

*Document généré par Claude (content strategist) · v1.0 · avril 2026*
*À valider par Vincent avant transmission à Claude Design puis Claude Code.*
