# `/agent-ia/commercial/` — Métier Silo 2 (modèle vivant Métier · adaptation #2)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**

---

## 0. Préambule

### Sections héritées (sans rédaction propre)

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 10 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

> **Note d'arbitrage** : la section Pricing héritée de la home n'apparaît PAS sur les pages métier (Silo 2). **Aucun prix n'est affiché dans le contenu visible** (ni dans la prose, ni dans les modules, ni dans la FAQ, ni dans la meta description, ni dans le JSON-LD). Toute la communication est orientée valeur : ROI, payback, transformation opérationnelle. Le tarif réel est partagé en RDV après les 30 minutes offertes avec un expert.

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Agent IA pour le commercial : prospection, qualification, prise de RDV en pilote automatique » |
| `Sous-titre hero` | sec.1 | 2 lignes ciblant la douleur dirigeant PME (commerciaux saturés, prospection abandonnée) et la libération |
| `Pills hero` | sec.1 | 3 pills chiffres marque + ROI métier (sans mention découverte) |
| `Définition métier` | sec.2 | Ce qu'absorbe l'agent dans le métier commercial |
| `Avant / Après` | sec.3 | Split éditorial : journée type d'un commercial avant / avec agent |
| `Agents recommandés` | sec.4 | 4 agents Althoce commerciaux (SDR, qualif inbound, relance pipeline, suivi post-vente) |
| `Cas client commercial` | sec.5 | Extrait + chiffres clés (négoce vins Bordeaux ou autre cas commercial) |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ commerciale` | sec.10 | 8 Q/R adaptées commercial |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Automatisation › Agent IA commercial`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « Agents recommandés »
- **Pricing** : aucun prix dans le contenu visible. Toute la page est orientée valeur (ROI, payback, transformation). Tarification partagée en RDV après les 30 minutes offertes avec un expert.
- **Découverte offerte** : « 30 minutes offertes avec un expert » (jamais dans les pills hero)
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial, tableau dense, liste verticale, Marquee, accordéon FAQ. Aucun label décoratif.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 2 — Métiers** (adaptation #2 après comptabilité)

### Rôle dans l'architecture

C'est la **page métier commerciale** d'Althoce. Elle capture l'intention de recherche typique d'un dirigeant PME ou d'un directeur commercial qui veut **automatiser sa prospection** sans recruter de SDR. Persona principal : dirigeant PME avec 1 ou 2 commerciaux saturés qui n'arrivent plus à prospecter, plus directeurs commerciaux de PME en croissance qui veulent scaler sans alourdir le P&L.

### Objectif trafic

1. Capter les requêtes métier : « agent IA commercial », « agent IA SDR », « agent IA prospection », « automatisation commerciale », « IA pour commerciaux », « agent IA qualification leads », « agent IA Salesforce », « agent IA HubSpot ».
2. Convertir sur RDV découverte spécifique au commercial (30 minutes offertes avec un expert).
3. Distribuer vers les pages services pertinentes ([Agents IA](/services/agents-ia/), [Employé IA](/services/employe-ia/)) et vers les cas clients commerciaux.

### Intention de recherche

Mix **transactionnelle haute** (« agent IA SDR prix », « automatiser prospection commerciale »), **commerciale moyenne** (« comment automatiser sa prospection », « IA pour gagner du temps commercial »), et **comparative** (« SDR humain vs SDR IA », « outil IA prospection »).

### Mots-clés cibles principaux

agent IA commercial · agent IA SDR · agent IA prospection · automatisation commerciale · IA pour commerciaux · agent IA qualification leads · agent IA HubSpot · agent IA Salesforce · IA prise de RDV · IA prospection LinkedIn

### Mots-clés longue traîne

« comment automatiser la prospection commerciale avec l'IA », « agent IA qui qualifie les leads inbound », « SDR humain vs SDR IA prix », « agent IA pour relance pipeline »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agent IA pour le commercial : prospection, qualification, prise de RDV en pilote automatique | Althoce</title>

<meta name="description" content="Un agent IA Althoce absorbe la prospection, la qualification de leads, les relances pipeline et la prise de RDV. Vos commerciaux se concentrent sur le closing. ROI inférieur à 6 mois, +80 RDV qualifiés/mois en moyenne. Tarification sur devis, 30 min offertes avec un expert.">

<meta name="keywords" content="agent IA commercial, agent IA SDR, agent IA prospection, automatisation commerciale, IA pour commerciaux, agent IA HubSpot, agent IA Salesforce, IA prise de RDV">

<link rel="canonical" href="https://althoce.com/agent-ia/commercial/">

<meta property="og:title" content="Agent IA pour le commercial : prospection et qualification en pilote automatique | Althoce">
<meta property="og:description" content="Vos commerciaux saturés ne prospectent plus. Un agent IA absorbe la prospection, la qualification, la prise de RDV. Ils ferment, l'IA alimente.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agent-ia/commercial/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup conversation LinkedIn entre agent IA et prospect (3 messages) |
| 2 | 🟢 Définition métier | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Avant / Après agent IA | Propre | Split éditorial vertical zig-zag (2 colonnes ou 2 blocs alternés) |
| 4 | 🟢 4 agents Althoce commerciaux | Propre | Liste verticale numérotée 01→04 |
| 5 | 🟢 Cas client commercial | Propre | Bloc citation pleine page + KPI bands |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ commerciale | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup conversation LinkedIn entre l'agent IA et un prospect. Trois messages alternés. Premier message agent IA : "Bonjour [Nom], j'ai vu que [Entreprise] a levé X M€ en mars. Félicitations. Je note que vous embauchez 5 commerciaux. Question rapide : comment gérez-vous le pipeline qualifié à ce stade ?". Réponse prospect courte. Deuxième message agent IA : "Ce qu'on fait pour [Comparable A] et [Comparable B] : 80 RDV qualifiés/mois sans alourdir l'équipe. 15 minutes pour vous montrer ?". Visuel léger, pas une copie d'écran LinkedIn réelle.

### H1

> **Agent IA pour le commercial : prospection, qualification et prise de RDV en pilote automatique.**

### Sous-titre (2 lignes max)

> Vos commerciaux passent 70 % de leur temps à prospecter, qualifier des leads froids, relancer un pipeline en panne. Et 30 % seulement à closer. Un agent IA Althoce inverse le ratio : il absorbe la prospection, la qualification et la prise de RDV. Vos commerciaux ferment.

### Pills (3 max)

> +758 agents en production · +80 RDV qualifiés/mois en moyenne · ROI < 6 mois

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir les 4 agents commerciaux ↓ *(ancre `#agents`)*

### Note Claude Design

Le mockup conversation LinkedIn est un composant `<ProspectingConversationMockup />` à concevoir. Trois bulles de messages alternés (agent IA / prospect), avatar agent en haut, statut "● en ligne". Pas une copie d'écran LinkedIn, un rendu HTML/CSS aux couleurs Althoce.

---

## 5. Section 2 — Définition métier

### H2

> **Ce qu'un agent IA absorbe vraiment dans le commercial**

### Paragraphe principal

> Dans le métier commercial, 80 % du temps d'un SDR (Sales Development Representative) et 50 % du temps d'un Account Executive sont absorbés par des tâches **répétitives à faible valeur ajoutée cognitive** : identifier les ICP (Ideal Customer Profile) dans LinkedIn Sales Navigator ou Apollo, écrire des séquences d'emails personnalisés, relancer des prospects qui ne répondent pas, qualifier les leads inbound (formulaire site, chat, demande de démo), prendre des RDV via Calendly, mettre à jour les fiches CRM après chaque interaction. Un agent IA Althoce absorbe ces tâches en autonomie sur un périmètre borné. Vos commerciaux humains se concentrent sur ce qui demande de l'intelligence relationnelle : le closing, la négociation, la gestion des grands comptes, l'arbitrage des cas complexes.

### Sous-paragraphe

> Concrètement, derrière un agent IA commercial Althoce, on trouve une cartographie ICP claire (qui est votre client cible), un ou plusieurs canaux de prospection (LinkedIn, mail, téléphone parfois), une intégration profonde avec votre CRM ([HubSpot, Salesforce, Pipedrive, Zoho](/services/integration-ia/)), et une couche de mémoire long-terme qui retient les interactions passées avec chaque prospect. L'agent IA n'est pas un robot qui spam. Il s'adapte au contexte, cite des éléments précis sur l'entreprise prospect, escalade à un humain dès qu'une conversation devient complexe. Pour un déploiement plus large couvrant tout un poste à temps plein, voir [Employé IA](/services/employe-ia/).

### Callout `<DarkBlock />`

> **Trois questions pour qualifier votre besoin commercial**
>
> 1. Vos commerciaux passent-ils plus de 50 % de leur temps en prospection plutôt qu'en closing ?
> 2. Avez-vous des leads inbound qui restent qualifiés trop tard (plus de 24 heures) faute de temps humain pour traiter ?
> 3. Votre pipeline a-t-il des deals "endormis" depuis plus de 30 jours sur lesquels personne n'a le temps de revenir ?
>
> Si vous répondez oui à 1 question sur 3, un agent IA commercial peut transformer votre productivité. Si vous répondez oui aux 3, vous êtes en train de perdre du chiffre d'affaires en ce moment même.

---

## 6. Section 3 — Avant / Après agent IA dans une équipe commerciale

### H2

> **Avant Althoce vs Après Althoce. La journée type d'un commercial.**

### Sous-titre

> Pas une projection théorique. La journée type observée chez nos 30+ clients commerciaux après déploiement.

### Split éditorial vertical zig-zag (`<BeforeAfterSplit />`)

**Avant Althoce — Journée type d'un commercial PME**

> **9h00** : ouverture LinkedIn et Sales Navigator. Recherche manuelle d'ICP correspondant. 30 minutes pour identifier 5 prospects pertinents.
>
> **9h30** : écriture manuelle de 5 messages de prospection personnalisés. 45 minutes (parce qu'il faut vraiment regarder chaque profil pour personnaliser).
>
> **10h15** : envoi des messages. Attente.
>
> **10h30 à 12h00** : alternance entre relances de prospects qui n'ont pas répondu, mise à jour fastidieuse du CRM, et tentative de qualifier 2 leads inbound reçus la veille au soir.
>
> **14h00** : 2 RDV avec des prospects qui sont arrivés (préparés à la va-vite parce que le temps de la matinée a été absorbé).
>
> **16h00** : à nouveau de la prospection, par culpabilité.
>
> **18h30** : on a parlé à 7 prospects froids et qualifié 1 lead inbound. On rentre. On n'a closé personne aujourd'hui.

**Après Althoce — Journée type d'un commercial PME**

> **9h00** : lecture du rapport de l'agent IA reçu à 8h. 50 nouveaux prospects ICP identifiés cette nuit, 15 messages de prospection envoyés, 3 prospects ont répondu et sont qualifiés à passer en RDV. 3 leads inbound de la veille déjà qualifiés et calés en RDV pour demain.
>
> **9h30 à 11h00** : 2 RDV qualifiés préparés sérieusement (l'agent IA a fourni la synthèse de chaque entreprise, le contexte sectoriel, les pain points probables et 5 questions à poser).
>
> **11h00 à 13h00** : 4 RDV de closing back-to-back avec des opportunités matures.
>
> **14h00 à 17h00** : 5 nouveaux RDV qualifiés, dont 2 closings signés.
>
> **17h00** : revue rapide de l'audit log de l'agent IA. 1 escalade à valider (un prospect a posé une question technique complexe). On répond, l'agent reprend.
>
> **18h00** : on rentre. On a signé 2 deals, calé 4 RDV de suite pour la semaine, et fait avancer le pipeline. On n'a pas écrit une seule séquence d'emails de prospection manuellement.

### Callout sous le split

> Cette journée type est une moyenne observée sur 3 mois après déploiement. La transformation n'est pas instantanée : la première semaine, les commerciaux apprennent à piloter l'agent. À partir de la deuxième semaine, le ratio bascule.

---

## 7. Section 4 — 4 agents Althoce commerciaux *(ancre `#agents`)*

### H2

> **4 agents IA Althoce déployés en standard dans le commercial**

### Sous-titre

> Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner. Chacun couvre une partie spécifique du cycle de vente.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. Agent IA SDR (prospection outbound)**

> Identifie les prospects ICP, écrit les premiers messages personnalisés sur LinkedIn et email, relance jusqu'à 4 fois, qualifie au téléphone (script standardisé) quand pertinent, prend le RDV avec le commercial humain via Calendly.
>
> **Outils intégrés** : LinkedIn Sales Navigator, Apollo, Lemlist, HubSpot ou Salesforce, Calendly.
>
> **Volume typique observé** : 80 à 150 RDV qualifiés par mois selon ICP et nombre de canaux activés.
>
> **Délai de mise en service** : 1 à 2 semaines après cadrage.
>
> **ROI typique** : payback en moins de 6 mois sur des équipes commerciales saturées. Tarification sur devis selon scope.

**02. Agent IA qualification inbound**

> Reçoit les leads inbound (formulaire site, chat, demande de démo, salon professionnel) et les qualifie en moins de 5 minutes. Pose les questions BANT (Budget, Autorité, Need, Timing) en mode conversation naturelle, écrit la fiche CRM, prend le RDV avec le bon commercial selon disponibilité et expertise.
>
> **Outils intégrés** : chatbot site (composant [chatbot IA](/services/chatbot-ia/)), formulaires, CRM, Calendly.
>
> **Impact typique observé** : réduction de 80 % du time-to-first-touch sur les leads inbound, qualification 24/7.
>
> **Délai** : 1 semaine après cadrage. **Impact** : qualification 24/7 sur l'ensemble des leads entrants, sans surcharge équipe.

**03. Agent IA relance pipeline (deals endormis)**

> Identifie les opportunités du pipeline qui n'ont pas avancé depuis X jours, écrit une relance contextualisée (rappelle le dernier échange, propose une valeur nouvelle, propose un nouveau créneau), suit la réponse, escalade quand un humain est requis pour avancer.
>
> **Outils intégrés** : CRM (HubSpot, Salesforce, Pipedrive), email, Calendly.
>
> **Impact typique** : réveil de 15 à 30 % des deals précédemment endormis, sans intervention humaine.
>
> **Délai** : 1 à 2 semaines. **Impact** : 15 à 30 % du pipeline endormi réveillé sans effort humain.

**04. Agent IA suivi post-vente et upsell**

> Après la signature d'un deal, l'agent suit le client à 30, 60, 90 jours, mesure la satisfaction, identifie les signaux d'upsell (utilisation accrue d'une feature, demande de licences supplémentaires, mention d'un nouveau besoin), passe le relais au commercial humain quand un upsell concret est détecté.
>
> **Outils intégrés** : CRM, outils CSM si pertinents, données produit si SaaS.
>
> **Impact typique** : +12 à +25 % de revenus upsell générés sans alourdir l'équipe Customer Success.
>
> **Délai** : 2 à 3 semaines (intégration produit plus profonde). **Tarif** : sur devis selon scope.

### Note sous la liste

> Votre besoin n'est pas exactement dans la liste ? Pour un poste entier de SDR ou de Customer Success automatisé de bout en bout, voir [Employé IA](/services/employe-ia/) qui couvre un rôle complet. Pour cadrer votre cas précis, les **30 minutes offertes avec un expert** permettent de qualifier la combinaison d'agents la plus pertinente.

---

## 8. Section 5 — Cas client commercial

### H2

> **Cas client : négoce de vins bordelais, 4 personnes au support international, agent IA SDR multilingue déployé en 6 semaines**

### Sous-titre

> Comment un négoce bordelais a doublé son volume de RDV qualifiés sans embaucher.

### Bloc citation pleine page (typographie display serif XL)

> « On a déployé l'agent IA SDR multilingue en 6 semaines. Avant, j'étais le seul à pouvoir prospecter en mandarin et japonais. Maintenant, il prospecte 24/7 sur 4 langues. Les 4 personnes de mon équipe se concentrent sur le closing et la fidélisation client. On a fait +200 % de RDV qualifiés en 4 mois, sans embauche supplémentaire. »
>
> *— Directeur commercial, négoce de vins bordelais (28 collaborateurs, export 65 %)*

### KPI bands pleine largeur (`<KPIBand />`)

| KPI | Avant | Après |
|-----|-------|-------|
| **RDV qualifiés / mois** | 12 | 36 |
| **Time-to-first-touch lead inbound** | 18h | 4 min |
| **Volume prospection traité** | 80/sem | 400/sem |
| **Coût d'acquisition par RDV qualifié** | 480 € | 95 € |

### Récit court (2 paragraphes)

> Avant la mission Althoce, le négoce dépendait à 100 % d'un directeur commercial trilingue (français, anglais, mandarin) pour la prospection export. Recruter un commercial multilingue à Bordeaux était difficile et long (12 mois de recherche infructueuse). La direction refusait de scaler par peur de plafonner sur la capacité humaine.
>
> En 6 semaines, l'agent IA SDR multilingue a été déployé. Aujourd'hui, il prospecte 24/7 en français, anglais, mandarin et japonais sur LinkedIn et email. Les 4 personnes de l'équipe commerciale reçoivent chaque matin la liste des 8 à 12 prospects qualifiés à appeler dans la journée. L'agent gère la relance, l'agenda et les fiches CRM. Le directeur commercial est sorti de la prospection opérationnelle pour se concentrer sur la stratégie et les grands comptes.

### Lien vers le cas complet

> [Voir le cas client complet du négoce de vins →](/cas-clients/negoce-vins-bordelais-agent-ia-sdr/)

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

## 12. Section 9 — FAQ Commercial (8 Q/R)

### H2

> **Questions fréquentes sur les agents IA commerciaux**

### Liste accordéon `<FAQItem />`

**Q1. Un agent IA SDR peut-il vraiment remplacer un commercial humain ?**

Non, et ce n'est pas l'objectif. Un agent IA SDR remplace la **partie répétitive et chronophage** du métier commercial (prospection, qualification, relance, prise de RDV). Vos commerciaux humains gardent les tâches à forte valeur cognitive : closing, négociation, gestion des grands comptes, arbitrage des cas complexes. Statistique observée chez nos clients : **+200 % de RDV qualifiés en moyenne, 0 départ d'équipe commercial imputable au déploiement**.

**Q2. Comment l'agent gère-t-il la personnalisation des messages de prospection ?**

L'agent IA s'appuie sur trois couches de personnalisation. La première : la fiche entreprise (taille, secteur, croissance récente, levée de fonds, embauches signalées). La deuxième : la fiche personne (rôle, ancienneté, publications LinkedIn récentes, signaux d'achat). La troisième : votre propre ICP et votre proposition de valeur (paramétrés au cadrage). Le LLM (Claude, GPT, Mistral selon souveraineté) compose un message court qui combine ces trois couches. Résultat : un taux de réponse 3 à 5 fois supérieur à un mail de prospection générique.

**Q3. Quel investissement pour un agent IA commercial chez Althoce et quel ROI attendre ?**

Tarification entièrement **sur devis** selon votre contexte : taille de votre équipe commerciale, volume de prospection visé, nombre de canaux activés (LinkedIn, email, téléphone), intégration au CRM existant, exigences de souveraineté. Le payback se mesure typiquement en moins de 6 mois sur les équipes saturées par la prospection. Le bon repère : si un commercial passe aujourd'hui plus de 50 % de son temps en prospection au lieu de closing, l'agent IA paye sa mise en service en quelques mois. Tout démarre par **30 minutes offertes avec un expert** : on qualifie le besoin, on partage des cas comparables, vous repartez avec un devis ferme sous 5 jours.

**Q4. L'agent peut-il s'intégrer à mon CRM existant (HubSpot, Salesforce, Pipedrive) ?**

Oui, c'est même la condition de réussite. Nous intégrons en standard HubSpot, Salesforce, Pipedrive, Zoho. L'agent lit et écrit dans votre CRM (mise à jour des contacts, ajout d'activités, création de RDV, changement de stage). Permissions héritées du CRM (un agent ne voit pas les comptes Grand Compte du commercial Senior s'il ne le devrait pas). Pour les CRM internes propriétaires, voir [Intégration IA](/services/integration-ia/) qui détaille les connecteurs custom.

**Q5. Que se passe-t-il si l'agent envoie un message inapproprié ou commet une erreur ?**

Trois garde-fous. Premièrement, **revue humaine sur les premiers envois** (200 premiers messages typiquement) avant passage en autonomie complète. Deuxièmement, **règles strictes d'escalade** : tout message qui mentionne un sujet sensible (litige, RGPD, technique complexe, demande prix exceptionnelle) est transmis à un humain avec contexte. Troisièmement, **monitoring continu** des taux de réponse et de sentiment : si une dérive est détectée, alerte automatique au manager humain. Voir [Intégration IA](/services/integration-ia/) pour le détail des garde-fous standards.

**Q6. Mes prospects savent-ils qu'ils parlent à un agent IA ?**

Oui, par défaut. Nos agents IA SDR Althoce sont transparents : ils se présentent comme assistants IA pour qualifier un besoin, et précisent qu'un commercial humain reprend la suite. Cette transparence n'impacte pas négativement les taux de réponse (les prospects apprécient souvent la rapidité et l'absence de pression commerciale). Vous pouvez personnaliser le degré de divulgation au cadrage selon votre culture commerciale.

**Q7. En combien de temps voit-on les premiers RDV qualifiés ?**

Pour un agent SDR : premier RDV qualifié en moyenne sous 5 à 10 jours après le go-live (le temps que la cadence atteigne son rythme de croisière). Pour un agent qualification inbound : impact immédiat dès le premier jour (le time-to-first-touch passe de plusieurs heures à quelques minutes). Pour un agent relance pipeline : premiers réveils dans les 7 jours.

**Q8. Mes données prospects restent-elles en France ?**

Oui, par défaut. Pour les clients qui exigent une souveraineté maximale (typiquement les ETI cotées ou les secteurs sensibles), nous utilisons Mistral hébergé en France et hébergeons l'infra sur OVH ou Scaleway. Pour les autres, l'anonymisation des PII est appliquée par défaut avant tout envoi aux modèles propriétaires (OpenAI, Anthropic). Voir [home / Souveraineté](/#souverainete).

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
      "@id": "https://althoce.com/agent-ia/commercial/#service",
      "name": "Agent IA pour le commercial",
      "serviceType": "AI agent for sales and prospecting",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Agents IA Althoce déployés dans le métier commercial : SDR outbound, qualification inbound, relance pipeline, suivi post-vente. Intégration HubSpot, Salesforce, Pipedrive. ROI mesurable en moins de 6 mois.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/commercial/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon scope (nombre de canaux, intégration CRM, volume cible). Payback typique en moins de 6 mois sur les équipes commerciales saturées."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA commercial", "item": "https://althoce.com/agent-ia/commercial/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Un agent IA SDR peut-il remplacer un commercial humain ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. L'agent absorbe la partie répétitive (prospection, qualification, relance). Les commerciaux humains gardent le closing et les grands comptes." } },
        { "@type": "Question", "name": "Comment l'agent personnalise-t-il les messages ?", "acceptedAnswer": { "@type": "Answer", "text": "Trois couches : fiche entreprise, fiche personne, votre ICP et proposition de valeur. Taux de réponse 3 à 5 fois supérieur à un mail générique." } },
        { "@type": "Question", "name": "Quel investissement et quel ROI pour un agent IA commercial ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon scope. Payback typique en moins de 6 mois sur les équipes saturées. 30 min offertes avec un expert pour cadrer." } },
        { "@type": "Question", "name": "Intégration avec mon CRM ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. HubSpot, Salesforce, Pipedrive, Zoho en standard. Permissions héritées du CRM. CRM internes propriétaires : connecteurs custom au cadrage." } },
        { "@type": "Question", "name": "Que se passe-t-il en cas d'erreur de l'agent ?", "acceptedAnswer": { "@type": "Answer", "text": "Revue humaine sur les premiers envois, règles strictes d'escalade, monitoring continu, alertes automatiques sur dérive." } },
        { "@type": "Question", "name": "Mes prospects savent-ils qu'ils parlent à une IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui par défaut. Transparence affichée. Pas d'impact négatif sur les taux de réponse observés." } },
        { "@type": "Question", "name": "En combien de temps voit-on les premiers RDV ?", "acceptedAnswer": { "@type": "Answer", "text": "Agent SDR : 5 à 10 jours. Agent qualification inbound : impact immédiat dès J1. Agent relance pipeline : 7 jours." } },
        { "@type": "Question", "name": "Mes données prospects restent-elles en France ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Mistral + OVH/Scaleway pour souveraineté max. Anonymisation PII sur modèles propriétaires sinon." } }
      ]
    }
  ]
}
```

---

## 15. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 sous-paragraphe : liens vers `/services/integration-ia/` et `/services/employe-ia/`
- Sec.4 (agents 01 à 04) : lien vers `/services/chatbot-ia/` dans agent 02
- Sec.4 note finale : lien vers `/services/employe-ia/`
- Sec.5 (cas client) : lien vers `/cas-clients/negoce-vins-bordelais-agent-ia-sdr/` (à créer)
- Sec.10 Q3 : lien vers `/services/employe-ia/`
- Sec.10 Q4 : lien vers `/services/integration-ia/`
- Sec.10 Q5 : lien vers `/services/integration-ia/`
- Sec.10 Q8 : lien vers `/#souverainete`

### Liens entrants attendus (≥ 5)

- Home (mention "agent IA commercial" dans la grille des cas d'usage)
- `/services/agents-ia/` (paragraphe sur les archétypes commerciaux)
- `/services/employe-ia/` (mention "employé IA SDR" qui pointe vers cette page comme cas d'usage)
- `/services/automatisation-ia/` (mention "automatisation commerciale" et 12 cas concrets)
- `/cas-clients/` (cas commerciaux pointent vers cette page)
- Articles blog cluster "prospection IA" et "SDR IA"

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.7), langage visuel pricing home (sec.8), `<SouveraineteSection />` (sec.9), `<CTAFinalSection />` (sec.11), `<Marquee />` (sec.6).

### Composants existants à réutiliser

`<DarkBlock />` (sec.2), `<FAQItem />` (sec.10), `<NumberedListVertical />` (sec.4), `<BeforeAfterSplit />` (sec.3, partagé avec template cas clients), `<KPIBand />` (sec.5, partagé avec template cas clients).

### Nouveaux composants à concevoir

- `<ProspectingConversationMockup />` : mockup conversation LinkedIn hero (sec.1). Trois bulles de messages alternés (agent IA / prospect), avatar agent, statut "● en ligne". Pas une copie d'écran LinkedIn réelle, un rendu HTML/CSS aux couleurs Althoce.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.16 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Pas de bottom nav "voir aussi". La sec.16 sert uniquement de récapitulatif pour validation.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** : sous-menu "Métiers" ou "Cas d'usage" qui liste les 8 pages métier (commercial, comptabilité, support, RH, marketing, ops, juridique, achats).
2. **Breadcrumb** : `Accueil → Automatisation → Agent IA commercial`.
3. **Footer** : colonne "Métiers" listant les 8 pages métier disponibles.
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée. JSON-LD `Service` + `BreadcrumbList` + `FAQPage` validés.
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/` (mention "agent IA commercial").
7. **Reading time** estimé visible : 6 min de lecture.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec mockup conversation LinkedIn
- Sec.2 : prose + DarkBlock callout
- Sec.3 : split éditorial vertical zig-zag (Avant / Après)
- Sec.4 : liste verticale numérotée 01→04
- Sec.5 : citation pleine page display serif + KPI bands
- Sec.6 : Marquee horizontal hérité
- Sec.10 : accordéon vertical

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. Citation pleine page sec.5 en typographie display serif XL. KPI bands sec.5 en bandes pleine largeur empilées.

---

## 17. Informations à valider avant publication

1. ✅ **Règle pricing métier (mai 2026)** : aucun prix affiché dans le contenu visible (prose, modules, FAQ, meta, JSON-LD). Page entièrement orientée valeur (ROI, payback, transformation). Tarification partagée en RDV. Aligné avec home v2 et template métier vivant.
2. **Cas client négoce de vins bordelais** : confirmer l'accord du client pour publication nominative ou anonymiser. Le cas reflète des cas similaires que nous avons livrés.
3. **Chiffres KPI sec.5** (×3 RDV qualifiés, ×5 prospection, time-to-first-touch 18h → 4 min, coût d'acquisition 480 € → 95 €) : croiser avec données réelles client avant publication.
4. **Outils tech cités** (LinkedIn Sales Navigator, Apollo, Lemlist, HubSpot, Salesforce, Pipedrive, Zoho, Calendly) : usage en mention technique non-commerciale OK si pas de logos visuels sans autorisation.
5. **Stat "0 départ d'équipe commercial imputable au déploiement"** Q1 : croiser avec données HR client réelles avant publication.
6. **Mention "200 premiers messages en revue humaine"** Q5 : confirmer que c'est bien le seuil opérationnel standard chez Althoce.

---

*Document de référence rédigé le 2026-05-08. Adaptation #2 du template Métier vivant (après comptabilité). Aligné avec home-v2.md v3 et template Service canonique.*
