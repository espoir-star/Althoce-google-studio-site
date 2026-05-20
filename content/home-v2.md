# Home Page — Althoce v2.1 (aligné Miro + feedback visuel)

> **Brief de contenu** destiné à Claude Design (conception) et Claude Code (intégration).
> Version : 2.1 — Avril 2026
> Rédigé par : Claude (content strategist)
> **Contexte** : cette v2.1 intègre le dernier feedback PDF du client : nouveaux chiffres (+150 PME, −80%, +958, +7M€), nouveau H1 « agents IA 100% autonomes », nouvelle architecture Silo 2 (`/automatisation/` hub unique + `/agent-ia/[métier]/` enfants), section 7 renommée « Agent IA par métier » avec ~30 tags agents, pricing revu (Employé IA à partir de 30 k€), CTA principal « Discuter de votre projet ».

---

## 1. Stratégie de la page

### Positionnement
Althoce est une **agence IA qui conçoit des automatisations agentiques** : des employés IA autonomes qui lisent, décident et agissent à la place de vos équipes sur les tâches répétitives. On ne vend pas des workflows bas de gamme — on déploie des agents capables de raisonner sur votre métier.

### Objectif trafic
La home sert de hub SEO pour les 75 pages du site. Elle doit :
1. **Convertir** → faire réserver un appel découverte.
2. **Distribuer le jus SEO** → mailler vers les 6 silos (min. 12 liens internes sortants).
3. **Capter les requêtes marques + génériques** → « Althoce », « agence IA », « agence automatisation IA », « agents IA entreprise ».

### Cible
Mixte (home générique + pages sectorielles dédiées en phase 2) :
1. **PME industrielles & de services** (20–200 salariés) — cible #1 pour le ROI court terme.
2. **ETI** — cycles longs, missions plus lourdes.
3. **Agences & cabinets** — reventes, partenariats.

### Ton de voix
**Pédagogue et accessible.** On explique les agents IA comme on expliquerait un nouveau collaborateur à un dirigeant non-tech. Zéro jargon gratuit. Les concepts techniques sont toujours traduits en bénéfices concrets.

### Mots-clés prioritaires *(pivot stratégique vs v1)*
On se positionne sur les **concepts** et les **cas d'usage métier**, pas sur les noms d'outils. n8n, Make, Zapier disparaissent comme mots-clés ciblés — ils ne sont mentionnés qu'en section tech subtile.

**Mots-clés principaux ciblés :**
- agence IA
- agents IA / agent IA
- automatisation IA
- automatisation métier
- employé IA
- agence automatisation IA
- automatisation agentique
- automatisation entreprise
- intelligence artificielle entreprise
- transformation IA

**Mots-clés secondaires (longue traîne) :**
- agence IA Bordeaux / Paris / Lyon / Toulouse / Marseille
- automatisation marketing / recrutement / finance / service client / commercial / logistique / juridique
- employé IA comptabilité / support client / back-office
- développement agent IA sur-mesure
- audit IA entreprise

---

## 2. Méta SEO

```html
<title>Althoce — Agence IA & Automatisation pour PME et ETI | France</title>

<meta name="description" content="Althoce conçoit des agents IA 100% autonomes et des automatisations métier pour les PME et ETI françaises. Premier agent opérationnel en 1 semaine, à partir de 1 400 € HT. +150 PME accompagnées, +5 M€ économisés.">

<meta name="keywords" content="agence IA, agents IA, agent IA autonome, automatisation IA, automatisation métier, employé IA, agence automatisation, transformation IA, France, Bordeaux">

<!-- Open Graph -->
<meta property="og:title" content="Althoce — Agence IA & Automatisation">
<meta property="og:description" content="On ne vend pas des chatbots. On déploie des employés IA qui lisent, décident et agissent à la place de vos équipes sur les tâches répétitives.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Althoce — Agence IA & Automatisation">
<meta name="twitter:description" content="Premier agent IA en production en 1 semaine, à partir de 1 400 € HT.">
```

### Schémas JSON-LD requis (à ajouter par Claude Code dans `<head>`)

1. **Organization** — nom Althoce, logo, fondateur, sameAs (LinkedIn, etc.)
2. **LocalBusiness** — adresse à Bordeaux, zone desservie France, horaires
3. **Service** (×4) — un schéma par service principal : Agents IA, Automatisation IA, Employé IA, Développement IA
4. **FAQPage** — les 12 Q/R de la section FAQ
5. **HowTo** — la méthodologie 4 étapes
6. **WebSite** — avec SearchAction pointant vers le blog

---

## 3. Structure de la home (14 sections)

| # | Section | Objectif | Maillage SEO |
|---|---------|----------|--------------|
| 1 | Hero | H1 + promesse + CTA RDV | — |
| 2 | Preuve rapide | +50 PME, trust signals | — |
| 3 | Chiffres-clés | Crédibilité | — |
| 4 | Qu'est-ce qu'un agent IA | Pédagogie + SEO concept | → /services/agents-ia/ |
| 5 | À qui on parle | Segmentation | → /solutions/pme/ ; /solutions/eti/ |
| 6 | Nos services IA | Silo 1 hub | → 8 pages /services/ |
| 7 | Agent IA par métier | Silo 2 hub | → 1 page `/automatisation/` + 8 pages `/agent-ia/[métier]/` |
| 8 | Notre méthode en 4 étapes | HowTo | — |
| 9 | Cas clients chiffrés | Silo 6 hub | → /cas-clients/ |
| 10 | Prix & délais | Transparence | — |
| 11 | Sécurité & souveraineté | Objection RGPD | → /conseil/ |
| 12 | Zone géographique | SEO local | → 20 pages /agence-ia-[ville]/ |
| 13 | FAQ enrichie | AEO / LLM | Schema FAQPage |
| 14 | CTA final | Conversion | — |

**Liens sortants internes prévus depuis la home : ~18 liens.** Cela respecte (et dépasse) la règle d'or du Miro (min. 3 liens entrants par page enfant).

---

# CONTENU SECTION PAR SECTION

---

## Section 1 — Hero

**Label au-dessus du H1**

> Agence IA · Bordeaux · France entière

**H1 (unique de la page — imposé par le Miro + feedback client v2.1)**

> Agence IA & Automatisation.
> On déploie des **agents IA** 100% autonomes.

**Sous-titre (2 lignes max, pédagogue)**

> Nous concevons des **employés IA sur-mesure** pour les PME et ETI françaises : ils libèrent vos talents des tâches répétitives, sans valeur ajoutée. Gagnez en productivité et transformez l'IA en opportunité pour votre entreprise.

**Micro-preuves sous le sous-titre (pill badges)**

> +150 PME accompagnées · +7 M€ économisés · Données hébergées en UE · Audit offert 48h

**CTA principal (bouton)**

> Discuter de votre projet →

**CTA secondaire (lien texte)**

> Explorer nos agents IA ↓ *(ancre vers section 4)*

**Note pour Claude Design**
- Garder l'univers visuel actuel (orbites, blobs de couleur, typographie display).
- Remplacer le titre animé `Conception des automatisations qui génèrent (vraiment) du ROI.` par le H1 ci-dessus. L'animation mot-par-mot peut être conservée.
- Mettre le mot « agents IA » en gradient (comme `(vraiment)` aujourd'hui).
- Conserver la bande de logos tech partenaires en bas du hero (proof, pas SEO).

---

## Section 2 — Bande de confiance rapide

**Accroche (petit texte gris au-dessus)**

> Ils nous font confiance pour leurs automatisations IA.

**Logos** *(à alimenter)*
Digitalised · Gemeos · LegalPlace · + autres clients PME/ETI.

**Note SEO**
Les `alt` des logos doivent contenir le nom du client ET le secteur (ex : `alt="Digitalised — agence marketing digital cliente Althoce"`).

---

## Section 3 — Chiffres-clés

**Titre (H2)**

> Des résultats concrets, mesurés chez nos clients.

**Sous-titre**

> On ne promet pas la lune. On mesure avant, pendant, et après chaque mission.

**Les 4 statistiques** *(grille 4 colonnes, responsive 2×2 sur mobile)*

| Valeur | Label | Description |
|--------|-------|-------------|
| +150 | **PME accompagnées** | Des structures de 5 à 500 salariés, dans tous les secteurs. |
| −80 % | **Temps de saisie** | Ce qui prenait des heures prend désormais quelques minutes. |
| +958 | **Agents & flows en production** | Ils tournent 24h/24 chez nos clients, sans supervision. |
| +7 M€ | **Économisés** | En temps libéré, erreurs évitées et revenus débloqués. |

**Note pour Claude Code**
- Garder le composant `StatCard` existant avec l'animation `animate(0, numericValue)` au scroll.
- **Remplacer** les valeurs actuelles de `stats` dans `lib/data.ts` : `{ value: "+150", label: "PME accompagnées" }`, `{ value: "-80%", label: "Temps de saisie" }`, `{ value: "+958", label: "Agents & flows" }`, `{ value: "+7M€", label: "Économisés" }`.

---

## Section 4 — Qu'est-ce qu'un agent IA ? *(nouvelle section pédagogique + SEO)*

**Label** : `Concept`

**Titre (H2)**

> Un agent IA, c'est quoi exactement ?

**Paragraphe pédagogue d'introduction**

> Un chatbot répond à des questions. Un workflow exécute une série d'actions. Un **agent IA**, c'est autre chose : c'est un employé virtuel capable de **lire une situation, de prendre une décision, puis d'agir** sur vos outils — comme le ferait un humain, mais sans fatigue, sans oubli, et 24h/24.

**Exemple concret (encart illustré)**

> **Exemple réel.** Un mail client arrive. L'agent le lit, identifie la demande (résiliation, réclamation, question technique), consulte votre base documentaire, rédige une réponse personnalisée dans votre ton de voix, la soumet à validation humaine si nécessaire, puis l'envoie et met à jour votre CRM. Temps humain sur le dossier : 30 secondes de validation.

**Trois types d'agents (grille 3 colonnes)**

**Agent commercial**
Qualifie les leads, enrichit les contacts, prépare les appels, relance automatiquement les dossiers dormants. Un SDR virtuel qui ne dort jamais.

**Agent opérationnel**
Traite les documents entrants (factures, devis, contrats), met à jour vos outils, génère les reportings. Le bras droit administratif de votre équipe.

**Agent support**
Répond aux tickets de niveau 1 et 2, escalade intelligemment les cas complexes, apprend de chaque interaction. Un support 24/7 sans plateau offshore.

**CTA intégré (lien interne vers Silo 1)**

> Découvrir tous nos types d'agents IA →
> *(pointe vers /services/agents-ia/)*

---

## Section 5 — À qui on parle

**Titre (H2)**

> Pour qui travaille Althoce ?

**Sous-titre**

> Trois profils de structures, un point commun : elles veulent que leurs équipes arrêtent de perdre du temps sur ce qu'une machine peut faire mieux.

### Trois cartes cliquables *(→ liens internes vers futures pages sectorielles)*

**Carte 1 — PME (20 à 200 salariés)**

*Description* : Vous gérez des devis, des commandes, du SAV, du reporting financier ? On installe des agents IA qui absorbent les flux répétitifs de votre production et de votre back-office. Marge retrouvée sans embaucher.

*Lien interne* : Automatisation IA pour PME → `/solutions/pme/`

**Carte 2 — ETI (200 à 5000 salariés)**

*Description* : Vous avez déjà un SI robuste et une DSI structurée. On déploie des agents IA intégrés à vos outils existants (SAP, Salesforce, ServiceNow, Office 365) pour décharger vos équipes des tâches à faible valeur ajoutée. Projet cadré, ROI garanti.

*Lien interne* : Automatisation IA pour ETI → `/solutions/eti/`

**Carte 3 — Agences & cabinets**

*Description* : Vous vendez du temps expert. Arrêtez d'en perdre à produire des reportings, trier des CV ou lire des contrats. Nos agents IA libèrent vos talents pour qu'ils se concentrent sur ce qui est facturable.

*Lien interne* : Voir nos automatisations métier → `/automatisation/`

---

## Section 6 — Nos services IA *(Hub Silo 1 — 8 pages)*

**Label** : `Silo services`

**Titre (H2)**

> Nos services IA, de l'audit à l'autonomie.

**Sous-titre**

> Un accompagnement complet : on diagnostique, on construit, on déploie, on forme vos équipes.

### Grille de 8 services *(4 colonnes × 2 lignes — chaque carte = lien vers la page du Silo 1)*

| Service | Accroche pédagogue | URL cible |
|---------|-------------------|-----------|
| **Agents IA** | Des employés virtuels autonomes qui raisonnent et agissent sur vos outils. | `/services/agents-ia/` |
| **Automatisation IA** | Des workflows intelligents qui éliminent 80 % de vos tâches répétitives. | `/services/automatisation-ia/` |
| **Employé IA** | Un collaborateur virtuel dédié à un poste complet (SDR, support, ops). | `/services/employe-ia/` |
| **Développement IA** | Développement sur-mesure d'applications boostées par LLM et APIs IA. | `/services/developpement-ia/` |
| **Chatbot IA** | Assistants conversationnels intelligents pour site, WhatsApp, Teams. | `/services/chatbot-ia/` |
| **Intégration IA** | Branchement de l'IA dans votre SI existant (CRM, ERP, outils métier). | `/services/integration-ia/` |
| **Formation IA** | On forme vos équipes à utiliser et opérer les agents IA au quotidien. | `/services/formation-ia/` |
| **Audit IA** | Diagnostic 48h de vos processus : où l'IA peut libérer du temps et de la marge. | `/services/audit-ia/` |

**CTA sous la grille**

> Explorer tous nos services → `/services/`

---

## Section 7 — Agent IA par métier *(Hub Silo 2 — 1 page hub + 8 pages enfants)*

> **⚠️ Changement architectural v2.1.** Le Silo 2 a été restructuré : **une seule page `/automatisation/` sert de hub** (vue d'ensemble, positionnement « automatisation agentique »), et les 8 anciennes pages `/automatisation/[métier]/` deviennent **`/agent-ia/[métier]/`**. Cela permet de capturer à la fois la requête générique « automatisation » et les requêtes concept « agent IA marketing », « agent IA commercial », etc.

**Label** : `Silo agents métiers`

**Titre (H2)**

> L'IA transforme votre métier.

**Sous-titre**

> Chaque métier a ses tâches répétitives, ses irritants, ses pertes de temps. Nous déployons un agent IA adapté à chaque fonction — marketing, commercial, RH, finance, ops, support, juridique, sectoriel.

### 8 cartes métier *(liens vers Silo 2, URL `/agent-ia/[métier]/`)*

| Métier | Bénéfice pédagogue | URL cible |
|--------|-------------------|-----------|
| **Marketing** | Génération de contenu, SEO, emailing personnalisés à l'échelle. | `/agent-ia/marketing/` |
| **Commercial** | Prospection hyper-personnalisée, scoring, relances automatiques. | `/agent-ia/commercial/` |
| **Service client** | Tickets niveau 1 & 2 traités automatiquement, support 24/7. | `/agent-ia/service-client/` |
| **Ressources humaines** | Tri de CV, pré-qualification, onboarding guidé. | `/agent-ia/rh/` |
| **Finance & compta** | Extraction de pièces, rapprochements, relances impayés. | `/agent-ia/finance/` |
| **Opérations & logistique** | Suivi de commandes, alertes stock, optimisation tournées. | `/agent-ia/operations/` |
| **Juridique** | Lecture de contrats, détection de clauses à risque, rédaction assistée. | `/agent-ia/juridique/` |
| **Secteurs verticaux** | BTP, santé, immobilier, cabinet conseil : agents métier clés-en-main. | `/agent-ia/secteurs/` |

### Rendu visuel attendu (section tags scrollables — inspirée PDF client)

En-dessous de la grille 8 cartes, afficher un **nuage de tags « agents » défilant** (marquee horizontal ou grille dense) : chaque tag = un nom d'agent spécialisé, survolable, cliquable vers la page `/agent-ia/[métier]/` correspondante. Fond blanc, bordures arrondies fines, icône à gauche de chaque tag, typo display condensée.

**Liste des ~30 agents IA à afficher en tags** *(regroupés par famille métier)* :

**Marketing** : Agent SEO IA · Agent Content Manager IA · Agent Emailing IA · Agent Social Media IA · Agent Reporting Marketing IA
**Commercial** : Agent Prospection IA · Agent Qualification leads IA · Agent CRM IA · Agent Relance IA · Agent Closing assistant IA
**Service client** : Agent Support N1 IA · Agent Chatbot IA · Agent Voice IA · Agent Ticketing IA
**RH** : Agent Tri CV IA · Agent Onboarding IA · Agent Paie assistante IA
**Finance** : Agent Facturation IA · Agent Rapprochement bancaire IA · Agent Relance impayés IA · Agent Reporting finance IA
**Opérations** : Agent Documentation IA · Agent Data entry IA · Agent Architecture système IA · Agent Data & BI IA
**Juridique** : Agent Lecture contrats IA · Agent Conformité IA · Agent Clauses-risque IA
**Sectoriel** : Agent BTP devis IA · Agent Cabinet médical IA · Agent Immobilier IA

**CTA sous la grille**

> Voir toutes les automatisations métier → `/automatisation/`
> *(hub unique Silo 2 — vue d'ensemble « automatisation agentique »)*

**Note pour Claude Design**
- Fond blanc ou très légèrement bleuté, grille subtile en arrière-plan.
- Tags agents : composant `Pill` réutilisable, hover = léger scale + ombre douce + bordure bleu accent.
- Le marquee scroll horizontal doit respecter `prefers-reduced-motion`.
- Prévoir un composant `<AgentTag name icon href />` réutilisable (car sera repris sur la page `/services/agents-ia/` et la page hub `/automatisation/`).

**Note pour Claude Code**
- Créer **UNE** route hub : `/automatisation/page.tsx` (vue d'ensemble Silo 2).
- Créer **8 routes enfants** : `/agent-ia/[metier]/page.tsx` avec params `marketing | commercial | service-client | rh | finance | operations | juridique | secteurs`.
- Redirection 301 à prévoir depuis `/automatisation/[métier]/` → `/agent-ia/[métier]/` (au cas où des URLs anciennes auraient été indexées).
- Schéma `BreadcrumbList` JSON-LD sur chaque page enfant : Accueil → Automatisation → Agent IA [Métier].

---

## Section 8 — Notre méthode en 4 étapes

**Titre (H2)**

> Comment se passe une mission avec Althoce ?

**Sous-titre**

> Quatre étapes courtes. Vos équipes voient leur premier agent IA en production en moins de 4 semaines.

### Les 4 étapes *(pédagogue)*

**Étape 01 — L'audit (48h)**
Nous passons 2 jours avec vous et vos équipes pour cartographier les tâches qui saturent les journées. Qui fait quoi, combien de temps, avec quels outils. Livré : un rapport clair des 3 à 5 automatisations qui vont vous rapporter le plus.

**Étape 02 — Le plan (1 semaine)**
On vous remet une roadmap chiffrée : quels agents construire, dans quel ordre, combien de temps, combien ça coûte, quel ROI attendu. Vous validez, on démarre. Pas de mauvaise surprise.

**Étape 03 — La construction (1 à 6 semaines)**
On développe vos agents IA et on les branche à vos outils (Gmail, Slack, HubSpot, Notion, votre CRM, vos bases de données). On teste avec vous sur des cas réels. Vous voyez le système prendre vie au fur et à mesure — jamais de boîte noire.

**Étape 04 — L'autonomie (1 semaine)**
On forme vos équipes à opérer, maintenir et faire évoluer le système. Le code, les accès, l'environnement : tout vous appartient. Vous continuez avec nous pour évoluer, ou vous reprenez seul quand vous voulez.

**CTA sous les étapes**

> Voir nos cas clients → `/cas-clients/`

---

## Section 9 — Cas clients chiffrés *(Hub Silo 6)*

**Titre (H2)**

> Quatre missions, quatre impacts mesurés.

**Sous-titre**

> Des résultats concrets, chiffrés et vérifiables. Cliquez sur chaque cas pour voir la mission détaillée.

### Grille 4 cartes *(chacune = lien vers /cas-clients/[slug]/)*

**Cas 1 — Agence marketing digital**

*Icône* : graphique croissance

*Chiffre phare* : **×4 trafic organique en 90 jours**

*Pitch* : Notre client (agence de 15 personnes) croulait sous la production de contenu SEO. Nous avons déployé 2 agents IA : un pour l'idéation + recherche de mots-clés, un pour la rédaction assistée avec validation humaine. Résultat : 4× plus d'articles publiés, 4× plus de trafic organique en 3 mois.

*Lien* : Lire le cas complet → `/cas-clients/agence-marketing-x4-trafic/`

**Cas 2 — Entreprise du BTP**

*Icône* : casque / grue

*Chiffre phare* : **100 000 € économisés dès le 1ᵉʳ mois**

*Pitch* : Un acteur régional du BTP perdait des chantiers par retards administratifs sur les devis. Nous avons construit un agent IA qui extrait les demandes depuis les mails, rédige les devis en base documentaire, les soumet au dirigeant pour validation en 1 clic. Chiffre d'affaires débloqué : 100 k€ dès le premier mois.

*Lien* : Lire le cas complet → `/cas-clients/btp-100k-economises/`

**Cas 3 — Boutique e-commerce**

*Icône* : panier

*Chiffre phare* : **70 heures libérées chaque semaine**

*Pitch* : Boutique e-commerce à fort trafic, équipe SAV saturée. Mise en place d'un agent IA qui traite les questions récurrentes (suivi de commande, retours, tailles), génère les étiquettes retour, met à jour le CRM. 70 heures de travail humain libérées chaque semaine, taux de satisfaction client +12 points.

*Lien* : Lire le cas complet → `/cas-clients/ecommerce-70h-liberees/`

**Cas 4 — Cabinet médical**

*Icône* : stéthoscope

*Chiffre phare* : **100+ appels traités chaque jour**

*Pitch* : Cabinet médical multi-praticiens, secrétariat débordé, appels perdus = patients perdus. Nous avons mis en place un agent IA vocal qui prend les RDV, gère les annulations, répond aux questions simples (horaires, remboursements, parking). Plus de 100 appels traités par jour en autonomie, zéro appel manqué.

*Lien* : Lire le cas complet → `/cas-clients/cabinet-medical-100-appels/`

**CTA sous la grille**

> Voir tous nos cas clients → `/cas-clients/`

---

## Section 10 — Prix & délais *(nouvelle section, transparence totale)*

**Label** : `Transparent · Pas de devis caché`

**Titre (H2)**

> Combien ça coûte, en combien de temps ?

**Sous-titre**

> Nous sommes une des rares agences IA à afficher nos prix. Parce qu'on pense que la transparence, c'est le début de la confiance.

### Bloc pricing 2 colonnes (arbitrage avril 2026)

**Agent simple — 1 400 € HT (tarif fixe)**

- Agent IA sur-mesure (1 cas d'usage borné)
- Architecture système incluse
- Documentation et transfert de propriété
- Solutions IA en data (connexions sources)
- Opérationnel en **1 semaine**
- 1 mois de support inclus

*Exemple* : tri auto des mails entrants, relance impayés, qualification leads entrants.

*CTA* : Demander un devis →

**Système, employé IA, refonte process — Sur devis**

- Plusieurs agents intégrés ou poste complet automatisé (SDR, support, ops, comptabilité)
- Architecture agentique complète, intégration profonde au SI (CRM, ERP, outils métier)
- Délais : 2 à 12 semaines selon périmètre
- Formation équipe + support adapté inclus
- Documentation technique et fonctionnelle complète
- Chiffrage ferme à l'issue du cadrage initial (30 min offertes avec un expert)

*Exemples* : orchestration commerciale complète, back-office administratif, employé IA SDR qui couvre un poste à temps plein.

*CTA* : Réserver un cadrage →

**Note sous les 2 blocs**

> L'audit initial (48h) est toujours **offert** et démarre par 30 minutes avec un expert. Vous repartez avec au moins 3 automatisations concrètes à fort ROI et un devis ferme, que l'on travaille ensemble ou non.

---

## Section 11 — Sécurité & souveraineté

**Label** : `Éthique & sécurité`

**Titre (H2)**

> Vos données restent vos données. En Europe, sous votre contrôle.

**Paragraphe pédagogue**

> La plupart des outils IA grand public envoient vos données chez des prestataires américains, sans contrôle sur ce qui en est fait. Chez Althoce, on fait l'inverse : hébergement en Union Européenne, instance dédiée, chiffrement de bout en bout, et un humain toujours dans la boucle pour les décisions sensibles.

### 4 engagements *(grille 2×2)*

**100 % conforme RGPD**
Chaque agent est audité sur la conformité : stockage, logs, droit à l'oubli. Documentation technique fournie sur demande.

**Hébergement en Union Européenne**
Vos données ne quittent jamais le territoire européen. Serveurs situés en France ou dans des pays UE au choix.

**Instance privée, pas de mutualisation**
Votre environnement est isolé. Aucun autre client n'y accède.

**L'humain reste le pilote**
Les actions critiques (envoi client, facturation, embauche) sont toujours soumises à validation humaine avant exécution. L'IA propose, l'humain décide.

**CTA (lien vers Silo 4)**

> En savoir plus sur notre approche conseil → `/conseil/`

---

## Section 12 — Zone géographique *(Hub Silo 3 — 20 villes)*

**Titre (H2)**

> Une agence IA basée à Bordeaux, qui accompagne toute la France.

**Texte principal**

> Althoce est installée à **Bordeaux**, en Nouvelle-Aquitaine. Nous intervenons dans toute la France, en présentiel pour les phases d'audit et de cadrage, à distance pour la construction et le suivi.

**Bloc SEO local avec liens vers les 5 villes prioritaires**

> Nos équipes se déplacent régulièrement à :
> Paris · Lyon · Bordeaux · Toulouse · Marseille

*(Chaque ville = lien interne vers la page dédiée du Silo 3)*

**Liste secondaire (grille discrète)**

> Nous intervenons également à : Nantes · Lille · Strasbourg · Nice · Rennes · Montpellier · Rouen · Grenoble · Dijon · Reims · Angers · Le Havre · Brest · Clermont-Ferrand · Tours.

*(Liens internes vers les 15 pages villes secondaires du Silo 3.)*

**CTA**

> Parler à un consultant Althoce →

**Note pour Claude Code**
- Implémenter un composant `<GeoSection />` paramétrable : `city`, `region`, `highlightedCities[]`.
- Ajouter le schéma `LocalBusiness` JSON-LD avec l'adresse Bordeaux (à préciser), `areaServed: "FR"`.
- Créer la brique qui lie automatiquement les noms de villes aux pages `/agence-ia-[ville]/`.

---

## Section 13 — FAQ enrichie *(optimisée AEO/LLM — schema FAQPage)*

**Titre (H2)**

> Vos questions, nos réponses directes.

**Intro courte**

> Chaque question ci-dessous vient vraiment de prospects ou clients. Les réponses sont factuelles, sans jargon, sans langue de bois.

### 12 Q/R *(à intégrer avec schema.org FAQPage)*

**Q1 — Qu'est-ce qu'un agent IA, concrètement ?**

Un agent IA est un programme qui combine un modèle de langage (GPT, Claude, Mistral) et un accès à vos outils (mails, CRM, bases de données). Il peut **lire** une information, **raisonner** dessus (classifier, décider, résumer), puis **agir** (répondre, saisir, notifier). Contrairement à un chatbot qui répond à des questions, un agent IA exécute des tâches de bout en bout.

**Q2 — Quelle est la différence entre automatisation classique et automatisation agentique ?**

Une automatisation classique suit des règles fixes : « si X alors Y ». Dès qu'un cas sort du scénario prévu, elle plante. Une automatisation agentique utilise l'IA pour **comprendre le contexte** et **s'adapter**. Elle gère les cas imprévus, apprend de ses erreurs et évolue. C'est ce qu'Althoce déploie.

**Q3 — Combien coûte un agent IA chez Althoce ?**

Un agent simple (1 cas d'usage borné) est facturé **1 400 € HT** — tarif fixe, 1 semaine de delivery. Un système multi-agents, un employé IA qui couvre un poste à temps plein ou une refonte complète de process : **sur devis**, chiffré au cadrage. Le cadrage démarre par **30 minutes offertes avec un expert** : vous repartez avec une cartographie de vos processus prioritaires et un devis ferme, que l'on travaille ensemble ou non.

**Q4 — En combien de temps voit-on les premiers résultats ?**

Un **agent simple est opérationnel en 1 semaine** après validation du cadrage. Un système multi-agents demande 2 à 6 semaines. Un employé IA complet, 8 à 12 semaines. Nos cycles sont volontairement courts : on déploie du concret rapidement, on mesure, on itère.

*Chiffres de référence chez nos clients : −70 % de temps de saisie, +758 agents en production, +5 M€ économisés cumulés sur l'ensemble du portefeuille.*

**Q5 — Mes employés vont-ils être remplacés par l'IA ?**

Non. Nos agents IA absorbent les tâches répétitives à faible valeur ajoutée (80 % des journées administratives). Vos équipes sont redéployées sur des missions à plus forte valeur : relation client, stratégie, créativité. Aucun de nos clients n'a supprimé de poste suite à une mission Althoce — plusieurs en ont créé.

**Q6 — Mes données vont-elles être envoyées à OpenAI ou ChatGPT ?**

Uniquement si vous le décidez. Pour les clients qui exigent la souveraineté totale, nous utilisons des modèles hébergés en Europe (Mistral) ou auto-hébergés sur votre infrastructure. Les données sensibles sont filtrées avant tout appel à un LLM externe. Vous gardez le contrôle.

**Q7 — À qui appartient l'agent IA si on arrête notre collaboration ?**

À vous, à 100 %. Nous développons sur votre infrastructure (ou sur un environnement dédié que nous vous transférons). Code, accès, workflows : tout vous revient. Pas de rétention technique, pas d'abonnement obligatoire.

**Q8 — Est-ce que ça fonctionne pour une petite équipe (moins de 10 personnes) ?**

Oui, c'est même souvent là que le ROI est le plus rapide. Quand une personne cumule plusieurs rôles, automatiser 20 % de ses tâches lui rend un jour complet de travail par semaine. Notre plus petit client faisait 4 salariés.

**Q9 — Quelle est la différence entre Althoce et un cabinet de conseil IA ?**

Un cabinet de conseil vous remet un rapport et s'en va. Althoce **conçoit, construit et déploie** un système qui tourne réellement. Nous sommes un hybride : conseil + agence de développement. On réfléchit avec vous, puis on met les mains dans le code jusqu'à ce que ça marche.

**Q10 — Travaillez-vous avec des entreprises hors de France ?**

Majoritairement, nous accompagnons des clients francophones (France, Belgique, Luxembourg, Suisse, Québec). Nos livrables sont en français. Pour les missions en anglais, nous étudions au cas par cas.

**Q11 — Comment garantissez-vous que l'IA ne dira pas n'importe quoi à mes clients ?**

Chaque agent déployé en front client est encadré par des garde-fous : validation humaine obligatoire sur les cas sensibles, filtres de contenu, base de connaissance fermée (l'IA ne peut pas inventer à partir de sa mémoire générale). Nous testons des centaines de cas avant la mise en production. Les erreurs sont traçables et corrigibles.

**Q12 — Où est basée Althoce ? Intervenez-vous dans toute la France ?**

Althoce est basée à **Bordeaux**, en Nouvelle-Aquitaine. Nous intervenons dans toute la France (Paris, Lyon, Toulouse, Marseille, et +15 villes secondaires). L'audit et le cadrage se font idéalement sur site, le reste en distanciel avec des points hebdomadaires.

**Note pour Claude Code** : injecter le schéma `FAQPage` JSON-LD reprenant ces 12 Q/R. Gain AEO/LLM majeur (ChatGPT, Perplexity, Claude, Gemini).

---

## Section 14 — CTA final

**Titre (H2)**

> Prêt à déployer votre premier agent IA 100% autonome ?

**Sous-titre**

> 30 minutes d'échange. Pas de démo commerciale. À la fin, vous repartez avec au moins trois idées concrètes d'automatisation — même si on ne travaille pas ensemble.

**CTA principal**

> Discuter de votre projet →

**Micro-garantie sous le bouton**

> Sans engagement · 30 min offertes avec un expert · Réponse sous 24h

---

## 4. Checklist SEO / GEO / AEO pour Claude Code

**On-page**
- [ ] H1 unique : « Agence IA & Automatisation. On déploie des agents IA 100% autonomes. »
- [ ] Hiérarchie H2 → H3 respectée
- [ ] `alt` optimisés sur toutes les images (contiennent mot-clé + contexte)
- [ ] Meta title < 60 caractères, meta description < 160 caractères
- [ ] URL canoniques définies
- [ ] Open Graph + Twitter Card complets
- [ ] Schema.org JSON-LD : `Organization` + `LocalBusiness` + `Service` ×4 + `FAQPage` + `HowTo` + `WebSite`

**Maillage (règle d'or du Miro)**
- [ ] ≥ 12 liens internes sortants depuis la home (sections 5, 6, 7, 9, 11, 12)
- [ ] Chaque silo reçoit au moins 2 liens depuis la home
- [ ] Ancres optimisées (pas « cliquez ici » mais le nom du service)

**Performance**
- [ ] Lazy-loading images hors viewport initial
- [ ] Fonts préchargées (`font-display: swap`)
- [ ] Lighthouse cible : Performance ≥ 90, SEO = 100, Accessibilité ≥ 95, Best Practices ≥ 95

**Local SEO**
- [ ] Fiche Google Business Profile Bordeaux liée au site (voir tâche #3 Miro)
- [ ] Schéma `LocalBusiness` avec adresse complète, téléphone, horaires
- [ ] NAP (Name, Address, Phone) identique sur toutes les pages

---

## 5. Changements majeurs vs. v1 *(résumé des évolutions après feedback client)*

**v2.1 (dernière version — feedback PDF)**
1. **H1 précisé** → « Agence IA & Automatisation. On déploie des agents IA **100% autonomes**. »
2. **Nouveaux chiffres** → +150 PME (au lieu de +50), −80% (au lieu de −70%), +958 agents & flows (au lieu de +758), +7 M€ économisés (au lieu de +5 M€).
3. **CTA principal changé** → « Discuter de votre projet » (au lieu de « Réserver mon appel découverte »).
4. **CTA secondaire changé** → « Explorer nos agents IA ↓ ».
5. **Architecture Silo 2 restructurée** → Une seule page hub `/automatisation/` + 8 pages enfants `/agent-ia/[métier]/` (au lieu de `/automatisation/[métier]/`). Capture dual keyword : concept générique « automatisation » + concept agent « agent IA [métier] ».
6. **Section 7 renommée** → « Agent IA par métier » (titre H2 : « L'IA transforme votre métier »), avec ajout d'un **nuage de ~30 tags agents** (Agent SEO IA, Agent Prospection IA, Agent Facturation IA, etc.) affiché en pills cliquables.
7. **Pricing enrichi** → Agent simple à partir de 1 400 € HT avec 6 items détaillés (Agents IA, Architecture, Documentation/transfert, Solutions IA data, 1 semaine, 1 mois support). Employé IA à partir de **30 000 € HT** (au lieu de 40 000 €+).

**v2.0 (précédent tour de boucle)**
8. **Pivot sémantique** → tout centré sur « agents IA / automatisation agentique / employé IA ». Les outils (n8n, Make, Zapier) ne sont plus des mots-clés cibles.
9. **Section « Qu'est-ce qu'un agent IA ? »** → pédagogie + capture SEO sur le concept clé.
10. **Services étendus à 8** (Silo 1 complet, au lieu de 4 en v1).
11. **Cas clients** → 4 cas réels chiffrés (Agence marketing ×4 trafic, BTP 100 k€, E-commerce 70h, Cabinet médical 100+ appels).
12. **Section Prix & délais ajoutée** → transparence, gain sur les requêtes « prix agent IA ».
13. **Ville confirmée** → Bordeaux (tâche #3 du Miro : Google Business Profile Bordeaux).
14. **Maillage** → ~18 liens internes sortants vers les 6 silos (vs 0 en v1).

---

## 6. Informations encore à valider pour finaliser

1. **Adresse exacte à Bordeaux** (pour le schéma `LocalBusiness`)
2. **Téléphone public** (idem)
3. **Réseaux sociaux actifs** (LinkedIn, YouTube, Twitter/X ?) → pour `sameAs` dans `Organization`
4. **Validation pricing public** → affiche-t-on vraiment « À partir de 1 400 € » en section 10 ? (Recommandation forte : oui, c'est un différenciateur majeur.)
5. **Slugs définitifs des cas clients** → je propose `/cas-clients/agence-marketing-x4-trafic/` etc., à valider.
6. **Noms publics des cas clients** → les clients Digitalised / Gemeos / LegalPlace mentionnés dans le Miro sont-ils les mêmes que les 4 cas chiffrés que tu m'as donnés ? Si oui, on nomme explicitement. Sinon, on reste sur les secteurs.
7. **Ajout d'un bloc "Agents IA par métier" dans la grille des services** (décision mai 2026) → ajouter un bloc visuel dédié dans la section "Services" ou "Cas d'usage" qui pointe vers `/agent-ia/` (hub Silo 2). Format proposé : un bloc plus large que les autres, intitulé « Découvrir nos agents IA par fonction » avec mention des 8 métiers cœur (finance, commercial, service client, RH, marketing, ops, juridique, achats) + modalité téléphonique. CTA : « Voir le catalogue par métier → ». Voir `content/agent-ia-hub.md` pour le détail du hub. Cette intégration évite la cannibalisation SEO entre `/services/agents-ia/` (entrée produit) et `/agent-ia/` (entrée métier).

---

## 7. Prochaines livraisons (après validation home)

Dans l'ordre de priorité du Miro (impact SEO × proximité temporelle) :

1. **`/services/agents-ia/`** — page pilier Silo 1 (tâche #7, critique, 1500 mots)
2. **`/services/automatisation-ia/`** — page pilier Silo 1 (tâche #6, critique, 1500 mots + FAQ)
3. **`/services/employe-ia/`** — différenciateur Althoce (tâche #8, critique, 1200 mots)
4. **`/cas-clients/`** hub + 3 études de cas (tâche #11, critique)
5. **`/services/developpement-ia/`** (tâche #9, fort)
6. **`/a-propos/` + `/contact/`** (tâche #12, fort)
7. Puis Silo 2 (automatisations métier — 8 pages)
8. Puis Silo 3 (SEO local — 20 villes)

Dis-moi dès que tu valides ce brief home, et on attaque la page `/services/agents-ia/` ensuite (c'est la page pilier qui portera le positionnement de marque).
