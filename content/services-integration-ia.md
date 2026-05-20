# `/services/integration-ia/` — Service satellite Silo 1 (modèle vivant Service · adaptation #5)

> **🟢 Sections propres à cette page · 🏠 Sections héritées de la home v2**

---

## 0. Préambule

### Sections héritées (sans rédaction propre)

| # | Section | Source | Composant |
|---|---------|--------|-----------|
| 7 | Méthode (4 étapes) | `home-v2.md` | `<MethodologySection />` |
| 8 | Pricing (2 tiers) | `home-v2.md` | langage visuel pricing home |
| 9 | Souveraineté | `home-v2.md` | `<SouveraineteSection />` |
| 11 | CTA final | `home-v2.md` | `<CTAFinalSection />` |

### Slots variables propres à cette page

| Slot | Section | Variation |
|------|---------|-----------|
| `H1` | Hero (sec.1) | « Intégration IA dans votre SI : sécurisée, monitorée, gouvernée. Pas un POC oublié dans un coin » |
| `Sous-titre hero` | sec.1 | 2 lignes ciblant DSI : SSO, RBAC, audit log, monitoring, fallback, conformité |
| `Pills hero` | sec.1 | 3 pills (chiffres marque, sans mention découverte) |
| `Définition pédagogique` | sec.2 | Différencier intégration sauvage (POC qui devient prod) vs intégration Althoce |
| `Tableau comparatif` | sec.3 | 2 colonnes : POC sauvage / Intégration Althoce |
| `Architecture sécurité` | sec.4 | Schéma SVG : SSO, RBAC, audit log, monitoring, fallback humain, kill switch |
| `5 outils typiques intégrés` | sec.5 | Liste verticale numérotée 01→05 |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ` | sec.10 | 6 Q/R adaptées DSI/sécurité |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Services › Intégration IA`
- **CTA primaire hero** : « Discuter de votre projet → »
- **CTA secondaire hero** : ancre vers section « Architecture sécurité »
- **Pricing affiché** : 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte)
- **Découverte offerte** : « 30 minutes offertes avec un expert »
- **JSON-LD obligatoires** : `Service` + `FAQPage` + `BreadcrumbList`
- **Chiffres marque** : `+758 agents en production · +150 PME équipées · −70 % temps de saisie · +5 M€ économisés`

### Règle créativité visuelle

Pas de grille de cartes 3×3. Patterns par section : split éditorial, schéma SVG architecture, tableau dense, liste verticale, Marquee, accordéon FAQ. Aucun label décoratif.

---

## 1. Méta-info SEO / éditoriale

### Silo
**Silo 1, satellite Services**

### Rôle dans l'architecture

Page satellite qui rassure le persona DSI / CTO sur la fiabilité, la sécurité, la conformité et l'intégration au système d'information. Là où `/services/developpement-ia/` parle de la stack technique, cette page parle de la couche d'intégration au SI : connecteurs, identité, journaux, monitoring, gouvernance, fallback. Argument différenciant fort vs. les solutions IA "boîte noire" qui posent problème en audit ISO 27001 ou RGPD.

### Objectif trafic

1. Capter "intégration IA", "intégrer une IA dans son SI", "connecteur IA CRM", "agent IA HubSpot", "intégration LLM Salesforce", "API IA RGPD".
2. Rassurer sur la conformité, la sécurité, la maintenabilité.
3. Distribuer vers `/services/developpement-ia/` (la couche code) et vers les pages métier (où l'intégration est concrète).

### Mots-clés cibles principaux

intégration IA · intégration LLM · connecteur IA CRM · IA Salesforce · IA HubSpot · IA Sage · intégration agent IA SI · IA RGPD · IA conformité · gouvernance IA entreprise

### Mots-clés longue traîne

« comment intégrer une IA dans son CRM », « intégration IA conforme RGPD », « monitoring agents IA en production », « audit log IA pour DSI »

---

## 2. Title / Meta description / Open Graph

```html
<title>Intégration IA dans votre SI : sécurisée, monitorée, gouvernée | Althoce</title>

<meta name="description" content="Vos agents IA méritent mieux qu'un POC oublié. SSO, RBAC, audit log, monitoring, fallback humain, kill switch. Intégration au CRM, ERP, intranet en mode production. 30 min offertes avec un expert.">

<meta name="keywords" content="intégration IA, intégration LLM, connecteur IA CRM, IA Salesforce, IA HubSpot, IA Sage, gouvernance IA, IA RGPD">

<link rel="canonical" href="https://althoce.com/services/integration-ia/">

<meta property="og:title" content="Intégration IA dans votre SI : sécurisée, monitorée, gouvernée | Althoce">
<meta property="og:description" content="Pas un POC dans un coin. Une vraie intégration au SI avec SSO, RBAC, audit log, monitoring, fallback humain. Pour DSI qui veulent dormir tranquilles.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/services/integration-ia/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup tableau de bord monitoring (3 KPI live + log d'audit défilant) |
| 2 | 🟢 Définition pédagogique | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Tableau comparatif POC sauvage vs Althoce | Propre | Tableau dense 2 colonnes × 8 lignes |
| 4 | 🟢 Architecture sécurité | Propre | Schéma SVG : 6 garde-fous (SSO, RBAC, audit log, monitoring, fallback, kill switch) |
| 5 | 🟢 5 intégrations typiques | Propre | Liste verticale numérotée 01→05 |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Pricing | Hérité | langage visuel pricing home |
| 9 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 10 | 🟢 FAQ intégration IA | Propre | Accordéon `<FAQItem />` |
| 11 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'un tableau de bord monitoring stylisé. Trois indicateurs live (latence p95, coût LLM jour, taux d'escalade humain), une ligne de log d'audit défilante en bas ("12:34:01 · agent-sdr · escalade vers humain · cas non couvert"). Visuel léger, pas une vraie copie d'écran de Grafana.

### H1

> **Intégration IA dans votre SI : sécurisée, monitorée, gouvernée. Pas un POC oublié dans un coin.**

### Sous-titre (2 lignes max)

> Vos agents et employés IA doivent passer un audit ISO 27001, un comité sécurité DSI, une revue RGPD. Chez Althoce, l'intégration au SI inclut par défaut SSO, RBAC, journal d'audit complet, monitoring continu, fallback humain et kill switch. Vous gardez le contrôle. Votre DSI valide.

### Pills (3 max)

> +150 PME équipées · SSO + RBAC + audit log natifs · 100 % conforme RGPD

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir l'architecture sécurité ↓ *(ancre `#securite`)*

### Note Claude Design

Le mockup tableau de bord est un composant `<MonitoringDashboardMockup />` à concevoir. Trois KPI cards superposées (latence, coût, escalade), une zone log défilante en bas, accent azure sur les valeurs. Pas une image PNG, un rendu HTML/CSS animé subtil.

---

## 5. Section 2 — Qu'est-ce que l'intégration IA chez Althoce

### H2

> **Intégrer une IA dans votre SI : ce que ça implique vraiment**

### Paragraphe principal

> Beaucoup de projets IA partent en POC sur la machine d'un développeur. Le POC fonctionne, l'enthousiasme monte, on déploie en production. Six mois plus tard, le service tombe en panne un dimanche soir, personne ne sait quoi faire, le DSI découvre qu'il n'y a pas de log d'audit, pas de fallback, pas de procédure d'escalade. Pour éviter ce scénario, une vraie intégration IA inclut six couches : authentification (SSO), autorisations (RBAC), journal d'audit, monitoring continu, fallback humain, et kill switch d'urgence. C'est ce qu'on déploie par défaut dans tous nos projets, depuis le simple [agent IA](/services/agents-ia/) jusqu'au [système multi-agents complexe](/services/automatisation-ia/) ou à l'[employé IA](/services/employe-ia/).

### Sous-paragraphe

> En pratique, ça veut dire que vos utilisateurs se connectent au chatbot ou à l'agent via votre SSO d'entreprise (Microsoft Entra, Okta, Google Workspace), que les agents IA respectent les permissions de chaque utilisateur (un commercial ne voit pas les données comptables, un comptable ne voit pas les données RH), que toutes les actions sont tracées dans un journal interrogeable, que la qualité des réponses est mesurée en continu, qu'un humain peut prendre la main à tout moment, et qu'un bouton "stop" permet de désactiver instantanément un agent qui dérive. Détails dans la [section Architecture sécurité](#securite).

### Callout `<DarkBlock />`

> **Les 3 questions qui qualifient une intégration IA sérieuse**
>
> 1. Si demain votre DSI demande qui a fait quelle action sur l'agent et quand, êtes-vous capable de répondre avec un journal d'audit horodaté ?
> 2. Si un agent commence à donner des réponses incorrectes, est-ce que votre équipe le détecte avant qu'un client ne se plaigne ?
> 3. Si vous devez tout couper en urgence (alerte sécurité, dérive, faux positif massif), combien de minutes prend la bascule ?
>
> Si la réponse à une de ces questions est floue, votre intégration IA n'est pas prête pour la production.

---

## 6. Section 3 — Tableau comparatif : POC sauvage vs Intégration Althoce

### H2

> **POC qui dérive en production vs Intégration Althoce. Ce qui change.**

### Sous-titre

> Le piège classique : un POC convaincant déployé tel quel en prod. Voici les 8 différences entre les deux approches, vues par votre DSI.

### Tableau (`<ComparisonTable />`)

| Critère | POC déployé tel quel | **Intégration Althoce** |
|---------|----------------------|-------------------------|
| Authentification | API key partagée ou en clair | **SSO entreprise (Entra, Okta, Google Workspace)** |
| Autorisations | Toutes les données accessibles à tous | **RBAC granulaire (par rôle, par équipe, par périmètre)** |
| Journal d'audit | Logs partiels, non interrogeables | **Audit log complet, horodaté, requêtable** |
| Monitoring | Aucun ou ad hoc | **Continu : latence, coût, qualité, escalades** |
| Fallback humain | Non prévu | **Procédure standard : escalade Slack ou ticket** |
| Kill switch | Non disponible | **Bouton "stop" disponible 24/7 par votre DSI** |
| Conformité RGPD | À documenter au cas par cas | **Native (anonymisation, droit à l'oubli, registre)** |
| Maintenabilité 3 ans | Faible (dette accumulée) | **Mesurée, documentée, testée** |

### Note sous le tableau

> Cette grille est issue des 150+ revues d'intégration que nous avons menées en cadrage. La majorité des POCs présentés ne passe pas la moitié de ces critères. Pour évaluer votre situation actuelle, voir notre service [Audit IA](/services/audit-ia/) qui inclut une revue d'intégration complète.

---

## 7. Section 4 — Architecture sécurité *(ancre `#securite`)*

### H2

> **Six garde-fous standards dans toute intégration Althoce**

### Sous-titre

> Six couches que nous déployons par défaut, sans surcoût, sur tout projet IA. C'est ce qui distingue un agent IA prêt pour la production d'un POC qu'on n'aurait pas dû mettre en prod.

### Schéma SVG (`<SecurityArchitectureDiagram />`)

Schéma central : avatar agent IA au centre, 6 garde-fous en orbite, reliés par des lignes fines azure. Chaque garde-fou est une carte cliquable / hoverable.

**Garde-fou 1. SSO entreprise**

> Authentification via votre SSO standard (Microsoft Entra ID, Okta, Google Workspace, OneLogin). Pas de credentials à gérer en parallèle. Désactivation d'un compte SSO = désactivation de l'accès à tous les agents IA, immédiatement.

**Garde-fou 2. RBAC granulaire**

> Permissions par rôle, par équipe, par périmètre fonctionnel. Un commercial ne lit pas les données comptables. Un comptable ne lit pas les données RH. Les permissions héritent de votre annuaire SI quand c'est possible (Active Directory, Workday).

**Garde-fou 3. Audit log complet**

> Chaque action de l'agent est tracée : qui a déclenché, quand, sur quoi, avec quelle réponse, citée sur quelles sources, et l'identifiant de la conversation complète. Logs requêtables (Postgres ou Elasticsearch selon volume), conservés selon votre politique RGPD.

**Garde-fou 4. Monitoring continu**

> Langfuse en standard pour le tracing LLM (latence p50/p95, coût en tokens, qualité réponse). OpenTelemetry pour l'infra. Alertes Slack ou email automatiques sur dérive (latence qui dégrade, coût qui explose, taux d'escalade qui monte). Reporting hebdomadaire au manager humain. Voir aussi [Développement IA](/services/developpement-ia/) pour la stack monitoring détaillée.

**Garde-fou 5. Fallback humain**

> Quand l'agent ne sait pas répondre, ou détecte un cas hors périmètre, ou identifie une demande sensible, il escalade à un humain (Slack, Teams, ticket Zendesk) avec contexte enrichi : question initiale, ce qu'il a compris, pourquoi il bloque, ce qu'il propose. Délai d'escalade configuré au cadrage.

**Garde-fou 6. Kill switch**

> Bouton "stop" disponible dans l'interface admin : désactivation instantanée d'un agent (en moins de 30 secondes). Utile si une dérive est détectée, si une faille apparaît, ou si une mise à jour produit casse une intégration. Procédure documentée, testée à chaque mise en production.

### Callout sous le schéma

> Ces 6 garde-fous sont **inclus par défaut** dans tous nos projets, sans surcoût. C'est pour cette raison que le délai de mise en production d'un agent IA Althoce est plus long qu'un simple POC : on ne livre pas tant que ces 6 couches ne sont pas en place et testées.

---

## 8. Section 5 — 5 intégrations typiques

### H2

> **5 systèmes que nous intégrons en standard**

### Sous-titre

> Cinq familles d'outils que nos clients PME et ETI nous demandent de connecter à leurs agents IA. Connecteurs développés et maintenus en interne, mises à jour suivies.

### Liste verticale numérotée 01→05 (`<NumberedListVertical />`)

**01. CRM (HubSpot, Salesforce, Pipedrive, Zoho)**

> Lecture / écriture des contacts, deals, activités, notes. Création automatique de tickets, mise à jour de stages, ajout d'activités. Permissions héritées du CRM (un agent SDR ne voit pas les comptes du commercial Grand Compte). Voir aussi [Agent IA SDR](/services/agents-ia/).

**02. ERP comptable (Sage, Cegid, Pennylane, QuickBooks, EBP)**

> Lecture / écriture des écritures, factures fournisseurs, rapprochements, exports comptables. Validation humaine systématique sur les écritures sensibles (montants > seuil, fournisseurs nouveaux, comptes de trésorerie). Voir [Agent IA finance](/agent-ia/finance/) pour le cas d'usage complet.

**03. Outils support (Zendesk, Intercom, Freshdesk, Gorgias)**

> Lecture / écriture des tickets, statuts, conversations, base de connaissances. Création de tickets escaladés avec contexte enrichi. Mise à jour automatique des statuts. Voir aussi [Chatbot IA](/services/chatbot-ia/) qui peut être intégré directement dans ces interfaces.

**04. Messagerie et agenda (Outlook, Gmail, Google Calendar, Microsoft Calendar)**

> Lecture / écriture des emails, prises de RDV automatiques, gestion d'agenda. OAuth strict, permissions par utilisateur. Pas d'accès aux mails des autres collaborateurs.

**05. Outils internes propriétaires**

> Vos outils métier sur-mesure (ERP industriel custom, base CRM interne, outils de gestion sectoriels). Connecteurs développés au cadrage, chiffrés dans le devis. Voir [Développement IA](/services/developpement-ia/) pour le détail technique.

### Note sous la liste

> Votre outil n'est pas listé ? Nous développons les connecteurs custom au cadrage. Les **30 minutes offertes avec un expert** servent à valider la faisabilité technique de votre intégration cible.

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée. Réutilisation stricte du composant `<Marquee />` de la home.**
> Aucun contenu textuel à fournir ici.

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<MethodologySection />`.**
> Aucun contenu textuel à fournir ici.

---

## 11. Section 8 — Pricing (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. 1 400 € HT (cas simple) / sur devis (système, employé IA, refonte). 30 min offertes avec un expert.**
> Aucun contenu textuel à fournir ici.

---

## 12. Section 9 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée. Réutilisation stricte du composant `<SouveraineteSection />`.**

---

## 13. Section 10 — FAQ Intégration IA (6 Q/R)

### H2

> **Questions fréquentes sur l'intégration IA**

### Liste accordéon `<FAQItem />`

**Q1. Comment l'agent IA s'authentifie auprès de notre CRM ou ERP ?**

Par OAuth dédié (compte de service ou app marketplace native quand disponible) ou via une clé d'API stockée dans un coffre-fort (HashiCorp Vault, AWS Secrets Manager). Jamais de credentials utilisateur réutilisés. Les permissions du compte de service sont restreintes au strict minimum nécessaire au cas d'usage. Détails au cadrage.

**Q2. Mes données vont-elles transiter par OpenAI ou Anthropic ?**

Cela dépend de votre choix au cadrage. Pour la souveraineté maximale, nous utilisons [Mistral](https://mistral.ai/) hébergé en France, et toutes les données restent sur l'infra que vous contrôlez. Si vous acceptez les modèles propriétaires (OpenAI, Anthropic), nous activons l'anonymisation des données entrantes (PII strippées automatiquement) et utilisons les contrats Enterprise sans réutilisation pour entraînement. Voir aussi [home / Souveraineté](/#souverainete).

**Q3. Comment gérer les permissions différenciées (un commercial vs un comptable) ?**

Via RBAC granulaire intégré au cadrage. Les rôles sont mappés sur votre annuaire SI quand possible (Active Directory, Entra ID, Workday). Sinon, table de permissions Postgres maintenue par votre admin. Un agent IA n'accède qu'aux données autorisées par le rôle de l'utilisateur qui le sollicite. Tracé dans l'audit log.

**Q4. Combien coûte une intégration IA chez Althoce ?**

Le projet d'intégration est facturé selon le scope. Un agent simple intégré à un seul outil (CRM ou ERP) reste à **1 400 € HT** (tarif fixe). Une intégration complexe (multi-outils, RBAC custom, journal d'audit dédié, MFA renforcé) est **sur devis**. Tout démarre par **30 minutes offertes avec un expert**.

**Q5. Quelle gouvernance avez-vous mis en place pour la conformité RGPD ?**

Six points : (1) anonymisation des données personnelles avant envoi LLM, (2) registre de traitements documenté livré au DPO client, (3) droit à l'oubli implémenté (purge sur demande), (4) durée de conservation paramétrable des audit logs, (5) hébergement France par défaut, (6) DPA disponibles avec sous-traitants éventuels (modèles propriétaires). Voir aussi [Audit IA](/services/audit-ia/) qui inclut un volet conformité.

**Q6. Que se passe-t-il si on veut tout couper en urgence ?**

Kill switch disponible 24/7 dans l'interface admin de chaque agent. Désactivation en moins de 30 secondes par votre DSI. Procédure documentée et testée à chaque mise en production (un test mensuel automatique vérifie que le kill switch fonctionne). En cas de panne du kill switch lui-même (improbable), accès au compte de service et révocation manuelle des credentials.

---

## 14. Section 11 — CTA final (HÉRITÉ DE LA HOME)

> **🏠 Section héritée.**

---

## 15. JSON-LD complet

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://althoce.com/services/integration-ia/#service",
      "name": "Intégration IA dans le SI",
      "serviceType": "AI integration and governance",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Intégration des agents et employés IA au système d'information : SSO, RBAC, audit log, monitoring, fallback humain, kill switch. Conformité RGPD native.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/services/integration-ia/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "À partir de 1 400 € HT pour un agent simple intégré à un outil. Sur devis pour les intégrations multi-outils ou avec gouvernance custom."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://althoce.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Intégration IA", "item": "https://althoce.com/services/integration-ia/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Comment l'agent IA s'authentifie ?", "acceptedAnswer": { "@type": "Answer", "text": "OAuth ou clé API stockée dans coffre-fort. Permissions du compte de service restreintes au strict minimum." } },
        { "@type": "Question", "name": "Mes données transitent-elles par OpenAI ou Anthropic ?", "acceptedAnswer": { "@type": "Answer", "text": "Selon votre choix. Mistral hébergé France pour souveraineté maximale. Anonymisation activée avec modèles propriétaires." } },
        { "@type": "Question", "name": "Comment gérer les permissions par rôle ?", "acceptedAnswer": { "@type": "Answer", "text": "RBAC granulaire mappé sur votre annuaire SI (AD, Entra, Workday). Tracé dans l'audit log." } },
        { "@type": "Question", "name": "Combien coûte une intégration IA ?", "acceptedAnswer": { "@type": "Answer", "text": "1 400 € HT pour un agent simple intégré à un outil. Sur devis pour multi-outils. 30 min offertes avec un expert." } },
        { "@type": "Question", "name": "Quelle gouvernance RGPD ?", "acceptedAnswer": { "@type": "Answer", "text": "Anonymisation, registre de traitements, droit à l'oubli, conservation paramétrable, hébergement France, DPA disponibles." } },
        { "@type": "Question", "name": "Comment couper en urgence ?", "acceptedAnswer": { "@type": "Answer", "text": "Kill switch dans l'interface admin, désactivation en moins de 30 secondes. Procédure documentée et testée mensuellement." } }
      ]
    }
  ]
}
```

---

## 16. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 paragraphe principal : liens vers `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/`
- Sec.2 sous-paragraphe : lien vers ancre `#securite`
- Sec.3 note sous tableau : lien vers `/services/audit-ia/`
- Sec.4 garde-fou 4 : lien vers `/services/developpement-ia/`
- Sec.5 cas 01 : lien vers `/services/agents-ia/`
- Sec.5 cas 02 : lien vers `/agent-ia/finance/`
- Sec.5 cas 03 : lien vers `/services/chatbot-ia/`
- Sec.5 cas 05 : lien vers `/services/developpement-ia/`
- Sec.10 Q2 : lien vers `https://mistral.ai/` (externe) et vers `/#souverainete`
- Sec.10 Q5 : lien vers `/services/audit-ia/`

### Liens entrants attendus (≥ 5)

- Home (mention "intégration au SI" dans la grille des services et dans la section souveraineté)
- `/services/agents-ia/` (FAQ Q sur l'intégration au SI)
- `/services/employe-ia/` (FAQ Q6 "intégration aux outils existants")
- `/services/developpement-ia/` (sec.4 brique 4 et FAQ Q6)
- `/services/audit-ia/` (l'audit inclut une revue d'intégration)
- Articles blog (cluster "intégration IA", "RBAC", "audit log IA")

---

## 17. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />` (sec.7), langage visuel pricing home (sec.8), `<SouveraineteSection />` (sec.9), `<CTAFinalSection />` (sec.11), `<Marquee />` (sec.6).

### Composants existants à réutiliser

`<DarkBlock />` (sec.2), `<FAQItem />` (sec.10), `<ComparisonTable />` (sec.3), `<NumberedListVertical />` (sec.5).

### Nouveaux composants à concevoir

- `<MonitoringDashboardMockup />` : tableau de bord stylisé hero (sec.1). 3 KPI cards (latence, coût, escalade) + zone log défilante en bas. Pas une image, un rendu HTML/CSS animé subtil.
- `<SecurityArchitectureDiagram />` : schéma SVG orbital (sec.4) avec 6 garde-fous autour d'un avatar agent central. Hover ouvre une description courte.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.16 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Pas de bottom nav "voir aussi". Concrètement : balises `<Link href="/services/...">` directement dans le JSX de chaque section. La sec.16 sert uniquement de récapitulatif pour validation.

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous "Services".
2. **Breadcrumb** rendu en haut de page : `Accueil → Services → Intégration IA`.
3. **Footer** colonne "Services".
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée (robots.txt OK, JSON-LD validé Rich Results Test).
6. **Pages cousines** : ajouter le lien sortant depuis tous les services Silo 1 et la home (au moins 1 mention contextuelle dans la prose de chaque page cousine).
7. **Reading time** estimé visible : 5 min de lecture.

### Règle créativité visuelle

Patterns par section :
- Hero : split éditorial avec mockup tableau de bord
- Sec.2 : prose + DarkBlock callout
- Sec.3 : tableau dense 2 colonnes
- Sec.4 : schéma SVG orbital avec 6 garde-fous
- Sec.5 : liste verticale numérotée 01→05
- Sec.6 : Marquee horizontal hérité
- Sec.10 : accordéon vertical

Aucune grille de cartes 3×3.

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. JetBrains Mono pour les snippets de log d'audit du mockup hero.

---

## 18. Informations à valider avant publication

1. ✅ **Pricing arbitré (avril 2026)** : 1 400 € HT (agent simple intégré à 1 outil) / sur devis (multi-outils ou gouvernance custom). 30 min offertes avec un expert. Aligné avec home v2 et piliers Silo 1.
2. **Liste des outils intégrés en standard** sec.5 et FAQ : confirmer que tous sont effectivement supportés en production avant publication.
3. **Stat "150+ revues d'intégration menées en cadrage"** sec.3 note : croiser avec données réelles.
4. **Procédure "test mensuel automatique du kill switch"** Q6 : confirmer que c'est bien systématique sur tous les déploiements actifs.
5. **Logos tech partenaires** cités (Microsoft Entra, Okta, Workday, HashiCorp Vault, AWS, Langfuse, OpenTelemetry, etc.) : usage en mention technique non-commerciale OK si pas de logos visuels sans autorisation.

---

*Document de référence rédigé le 2026-05-08. Aligné avec home-v2.md v3 et template Service canonique.*
