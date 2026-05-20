# `/agent-ia/rh/` — Métier Silo 2 (modèle vivant Métier · adaptation #5)

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
| `H1` | Hero (sec.1) | « Agent IA pour les RH : tri CV, qualification candidats, assistance interne 24/7 » |
| `Sous-titre hero` | sec.1 | 2 lignes : douleur DRH PME (volume CV ingérable, manager sollicité tous les jours) + libération |
| `Pills hero` | sec.1 | 3 pills chiffres marque + ROI métier |
| `Définition métier` | sec.2 | Ce qu'absorbe l'agent dans le métier RH |
| `Avant / Après` | sec.3 | Split éditorial : journée type d'un DRH avant / avec agent IA |
| `Agents recommandés` | sec.4 | 4 agents Althoce RH (tri CV, qualification candidat, assistant RH interne, onboarding) |
| `Cas client RH` | sec.5 | Citation + KPI bands (cabinet recrutement ou DRH PME) |
| `Métiers ciblés` | sec.6 | Marquee home |
| `FAQ RH` | sec.9 | 8 Q/R adaptées RH (RGPD, biais, conformité paie) |

### Blocs immuables

- **Breadcrumb pattern** : `Accueil › Automatisation › Agent IA RH`
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
**Silo 2 — Métiers** (adaptation #5)

### Rôle dans l'architecture

Page métier qui cible les **DRH PME**, les **responsables recrutement**, et les **cabinets de recrutement** dont l'équipe est saturée par le volume de candidatures à trier et les questions internes répétitives des collaborateurs. Sujet sensible RGPD (CV = données personnelles), nous insistons fortement sur la conformité et l'absence de biais discriminatoires dans le tri.

### Objectif trafic

1. Capter les requêtes métier : « agent IA RH », « agent IA recrutement », « tri CV IA », « IA pour DRH », « automatisation RH », « chatbot RH interne », « agent IA paie », « IA recrutement RGPD ».
2. Convertir sur RDV découverte spécifique RH (30 minutes offertes avec un expert).
3. Distribuer vers les pages services pertinentes ([Agents IA](/services/agents-ia/), [Employé IA](/services/employe-ia/), [Intégration IA](/services/integration-ia/)) et vers les cas clients RH.

### Mots-clés cibles principaux

agent IA RH · agent IA recrutement · tri CV IA · IA pour DRH · automatisation RH · chatbot RH interne · agent IA paie · IA recrutement RGPD · assistant RH IA · agent IA onboarding

### Mots-clés longue traîne

« comment trier les CV avec l'IA sans biais », « chatbot RH pour répondre aux questions paie », « IA pour automatiser le recrutement PME », « agent IA conforme RGPD recrutement »

---

## 2. Title / Meta description / Open Graph

```html
<title>Agent IA pour les RH : tri CV, qualification candidats, assistance interne 24/7 | Althoce</title>

<meta name="description" content="Un agent IA Althoce trie les CV avec rigueur RGPD, qualifie les candidats au téléphone, répond aux questions paie et congés des collaborateurs 24/7. Conformité native, anti-biais documenté. Vos équipes RH se recentrent sur l'humain. Tarification sur devis, 30 min offertes avec un expert.">

<meta name="keywords" content="agent IA RH, agent IA recrutement, tri CV IA, IA pour DRH, automatisation RH, chatbot RH interne, agent IA paie, assistant RH IA, agent IA onboarding">

<link rel="canonical" href="https://althoce.com/agent-ia/rh/">

<meta property="og:title" content="Agent IA pour les RH : tri CV, qualification, assistance 24/7 | Althoce">
<meta property="og:description" content="Volume de CV ingérable, équipe RH submergée par les questions paie ? Un agent IA absorbe la répétition, votre équipe se recentre sur l'humain. Conforme RGPD, anti-biais documenté.">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:url" content="https://althoce.com/agent-ia/rh/">
```

---

## 3. Plan de page

| # | Section | Type | Pattern visuel |
|---|---------|------|----------------|
| 1 | 🟢 Hero | Propre | Split éditorial : à gauche H1+CTA, à droite mockup tableau de tri CV stylisé avec scoring |
| 2 | 🟢 Définition métier | Propre | Prose + callout `<DarkBlock />` |
| 3 | 🟢 Avant / Après agent IA | Propre | Split éditorial vertical zig-zag |
| 4 | 🟢 4 agents Althoce RH | Propre | Liste verticale numérotée 01→04 |
| 5 | 🟢 Cas client RH | Propre | Citation pleine page + KPI bands |
| 6 | 🟢 Métiers ciblés | Marquee home | `<Marquee />` |
| 7 | 🏠 Méthode | Hérité | `<MethodologySection />` |
| 8 | 🏠 Souveraineté | Hérité | `<SouveraineteSection />` |
| 9 | 🟢 FAQ RH | Propre | Accordéon `<FAQItem />` |
| 10 | 🏠 CTA final | Hérité | `<CTAFinalSection />` |

---

## 4. Section 1 — Hero

### Layout

Split éditorial. À gauche : H1, sous-titre, pills, deux CTA. À droite : mockup d'un tableau de tri de candidatures stylisé. Liste de 5 candidats anonymisés avec colonnes (Initiales, Poste candidaté, Score adéquation, Statut). Scoring visuel discret (barres ou pastilles), pas de notation absolue (focus adéquation au poste, pas hiérarchie de personnes). Indicateur "Tri conforme RGPD · sans biais documenté" en bas du mockup. Pas une copie d'écran ATS réelle.

### H1

> **Agent IA pour les RH : tri CV, qualification candidats, assistance interne 24/7.**

### Sous-titre (2 lignes max)

> Vous recevez 500 CV par semaine sur un poste senior, votre équipe paie répond aux mêmes questions chaque mardi, vos new hires attendent 3 jours pour avoir leur badge. Un agent IA Althoce absorbe ces tâches répétitives en conformité RGPD stricte, anti-biais documenté. Votre équipe RH se recentre sur la marque employeur, la fidélisation et la relation humaine.

### Pills (3 max)

> +758 agents en production · Conforme RGPD natif · Anti-biais documenté

### CTA principal

> Discuter de votre projet →

### CTA secondaire

> Voir les 4 agents RH ↓ *(ancre `#agents`)*

### Note Claude Design

Le mockup tableau de tri CV est un composant `<HRScoringMockup />` à concevoir. Liste de 5 lignes candidat anonymisées (initiales JD, MK, etc.), colonnes (poste candidaté, score adéquation, statut), scoring visuel discret. Footer "Tri conforme RGPD · sans biais documenté". Pas une copie d'ATS réelle, un rendu HTML/CSS Althoce.

---

## 5. Section 2 — Définition métier

### H2

> **Ce qu'un agent IA absorbe vraiment dans les RH**

### Paragraphe principal

> Dans un service RH ou un cabinet de recrutement, **60 à 70 % du temps est absorbé par des tâches répétitives à faible valeur ajoutée cognitive** : trier les CV reçus en réponse aux offres, qualifier les candidats par téléphone sur des critères standards, répondre pour la 50ᵉ fois aux questions des collaborateurs sur les congés ou la paie, préparer les documents administratifs des new hires, suivre les contrats temporaires. Un agent IA Althoce absorbe ces tâches en autonomie avec deux engagements stricts : **conformité RGPD native** (les CV sont des données personnelles sensibles) et **anti-biais documenté** (le scoring ne prend jamais en compte le genre, l'âge, l'origine, l'adresse, ou tout critère discriminatoire). Vos équipes RH humaines se concentrent sur ce qui demande vraiment leur expertise : la marque employeur, l'entretien final, la fidélisation, la stratégie talents.

### Sous-paragraphe

> Concrètement, derrière un agent IA RH Althoce, on trouve une cartographie des processus RH ciblés (recrutement, paie, onboarding, formation, fidélisation), une intégration à votre [SI RH](/services/integration-ia/) (Workday, Lever, Welcome to the Jungle, HRIS interne, outils paie), une couche RGPD renforcée (anonymisation, durée de conservation paramétrable, droit à l'oubli implémenté, registre de traitements), et une documentation **anti-biais** opposable en cas d'audit ou de contentieux. Pour un poste entier d'assistant RH ou de chargé de recrutement automatisé de bout en bout, voir [Employé IA](/services/employe-ia/).

### Callout `<DarkBlock />`

> **Trois questions pour qualifier votre besoin RH**
>
> 1. Recevez-vous plus de 100 CV par semaine sur certains postes, dont la majorité ne sont pas en adéquation avec le profil cible ?
> 2. Votre équipe paie ou RH répond-elle aux mêmes 30 questions chaque mois (congés, RTT, contrat, mutuelle, formation) avec un temps de réponse trop long ?
> 3. Vos new hires attendent-ils plus de 3 jours pour finaliser leur onboarding administratif (badge, accès SI, documents) ?
>
> Si oui à 1 question sur 3, un agent IA RH transforme votre quotidien. Si oui aux 3, votre équipe RH passe son temps sur la mauvaise chose.

---

## 6. Section 3 — Avant / Après agent IA dans un service RH

### H2

> **Avant Althoce vs Après Althoce. La journée type d'un DRH PME.**

### Sous-titre

> Journée type observée chez nos clients DRH PME (50 à 250 collaborateurs) après déploiement.

### Split éditorial vertical zig-zag (`<BeforeAfterSplit />`)

**Avant Althoce — Journée type d'un DRH PME**

> **8h30** : ouverture mail. 80 nouveaux CV reçus sur les 3 postes ouverts. Triage manuel à venir, prévu pour cette semaine.
>
> **9h00 à 11h00** : 6 mails de collaborateurs sur des questions paie et congés. Réponses individuelles, 10 minutes par mail, tous les jours.
>
> **11h00** : 2 entretiens téléphoniques de qualification candidats. Préparés à la va-vite parce que la matinée a été absorbée.
>
> **14h00 à 16h00** : préparation administrative des 2 new hires de la semaine prochaine. Contrats, fiches de poste, accès SI à demander à l'IT, badges à commander.
>
> **16h00** : retour aux CV. 80 à trier. Tri rapide sur 30 minutes. Quelques bons profils probablement perdus dans le lot.
>
> **17h30** : un manager appelle, demande un point d'étape sur le recrutement de son équipe. Pas d'avancée significative à raconter.
>
> **18h30** : on rentre. 80 CV à finir demain. 4 entretiens à caler. Marque employeur reportée à plus tard, encore.

**Après Althoce — Journée type d'un DRH PME**

> **8h30** : lecture du dashboard. L'agent IA tri CV a déjà trié les 80 CV pendant la nuit, identifié 12 candidats en forte adéquation (justification du scoring affichée, sans biais), 28 en adéquation moyenne, 40 hors profil. Les 12 ont déjà été contactés par mail pour proposer un entretien téléphonique de qualification avec l'agent.
>
> **9h00** : 4 entretiens téléphoniques candidats déjà calés dans la journée par l'agent IA qualification.
>
> **10h00 à 12h00** : 4 entretiens téléphoniques humains à valeur ajoutée. Pour chaque candidat, l'agent IA a préparé une synthèse (parcours, motivation détectée par téléphone, points à creuser, drapeaux rouges éventuels).
>
> **14h00** : l'agent IA assistant RH interne a répondu à 22 questions collaborateurs depuis ce matin (congés, paie, RTT, mutuelle), avec sources citées. 2 cas escalés au DRH avec contexte (cas complexes, RGPD sensible).
>
> **15h00** : préparation onboarding des 2 new hires. L'agent IA a déjà préparé les contrats, demandé les accès SI, commandé les badges, programmé les rendez-vous d'accueil. Le DRH valide en 10 minutes.
>
> **15h30** : 1h de travail sur la marque employeur (réécriture de la page Carrières, brief de l'agence pour la prochaine campagne LinkedIn).
>
> **17h00** : point d'étape recrutement avec 2 managers. Avancées concrètes à raconter : 4 candidats vus, 2 retenus pour 2ᵉ tour.
>
> **18h00** : on rentre. La marque employeur a avancé. Aucun CV en retard.

### Callout sous le split

> Ce gain ne se mesure pas seulement en CV triés ou en mails répondus. Il se mesure aussi en **temps libéré pour la stratégie talents et la marque employeur**, deux sujets que la plupart des DRH PME repoussent perpétuellement faute de bande passante. Avec un agent IA RH, ces sujets passent de "jamais" à "régulier".

---

## 7. Section 4 — 4 agents Althoce RH *(ancre `#agents`)*

### H2

> **4 agents IA Althoce déployés en standard dans les RH**

### Sous-titre

> Quatre agents complémentaires que vous pouvez déployer indépendamment ou combiner. Tous conformes RGPD natif, avec documentation anti-biais opposable en cas d'audit.

### Liste verticale numérotée 01→04 (`<NumberedListVertical />`)

**01. Agent IA tri CV (recrutement)**

> Reçoit les CV (mail, ATS, formulaire site carrière), les analyse, les score sur l'adéquation au profil cible défini par vous, élimine les hors profil avec justification, identifie les bons profils, contacte les candidats prioritaires pour proposer un entretien de qualification téléphonique.
>
> **Outils intégrés** : ATS (Workday, Lever, Welcome to the Jungle, Recruitee, Smartrecruiters), boîte mail dédiée recrutement, calendriers recruteurs.
>
> **Volume typique traité** : 200 à 800 CV par semaine sans dégradation de qualité, là où un humain triera 30 à 80 par semaine sérieusement.
>
> **Anti-biais documenté** : le scoring exclut explicitement genre, âge, origine, adresse, nom de famille. Logs de chaque décision conservés pour audit.
>
> **Délai de mise en service** : 2 à 3 semaines après cadrage.
>
> **Impact** : 80 % du temps de tri libéré, zéro CV oublié, conformité opposable.

**02. Agent IA qualification candidat (téléphone)**

> Appelle les candidats pré-sélectionnés, mène une qualification structurée en conversation naturelle française (parcours, motivation, disponibilité, prétentions, mobilité), produit une synthèse écrite, propose un entretien humain avec le bon recruteur selon le poste. Peut aussi traiter les appels entrants des candidats.
>
> **Outils intégrés** : VoIP (Twilio, Ringover), ATS, agenda. Cohérent avec [Agent IA téléphonique](/agent-ia/telephonique/).
>
> **Impact typique** : qualification 100 % des candidats prioritaires sous 24h, là où un humain met 5 à 10 jours.
>
> **Délai** : 3 à 4 semaines. **Engagement éthique** : transparence systématique en début d'appel ("Bonjour, je suis l'assistant IA du cabinet X, je vais qualifier votre candidature, un recruteur humain prendra la suite").

**03. Agent IA assistant RH interne (chatbot collaborateurs)**

> Répond aux questions des collaborateurs sur les sujets RH récurrents (congés, RTT, paie, mutuelle, formation, télétravail, IRP, conventions collectives), en se basant sur votre charte RH, votre convention collective, et vos accords d'entreprise. Cite les sources. Escalade les cas sensibles (litige, RGPD, harcèlement, demande exceptionnelle) à un humain avec contexte.
>
> **Outils intégrés** : intranet (Sharepoint, Notion, Confluence), Slack ou Teams pour la conversation, outil paie pour les données factuelles, HRIS pour les soldes (congés, RTT).
>
> **Impact typique** : 60 à 70 % des questions collaborateurs résolues en autonomie, libération de 4 à 8 heures par semaine pour l'équipe paie / RH. Cohérent avec [Chatbot IA RAG](/services/chatbot-ia/).
>
> **Délai** : 2 à 4 semaines selon le nombre de sources documentaires à indexer.

**04. Agent IA onboarding new hire**

> Prépare l'onboarding administratif des nouveaux collaborateurs : génération du contrat à partir du template, demande automatique des accès SI au DSI, commande du matériel (poste, badge, téléphone), envoi du welcome pack au new hire, programmation des rendez-vous d'accueil avec manager + RH + buddy. Suit l'onboarding sur les 30, 60, 90 jours.
>
> **Outils intégrés** : HRIS, signature électronique (Yousign, DocuSign), DSI ticketing, agenda. Pour un poste entier d'assistant RH automatisé voir [Employé IA](/services/employe-ia/).
>
> **Impact typique** : onboarding administratif réduit de 3 jours à quelques heures, zéro oubli sur les accès et matériel.
>
> **Délai** : 3 à 5 semaines (forte intégration SI).

### Note sous la liste

> Votre besoin n'est pas exactement dans la liste ? Pour un poste entier de chargé de recrutement, d'assistant RH ou d'onboarding manager automatisé de bout en bout, voir [Employé IA](/services/employe-ia/). Les **30 minutes offertes avec un expert** servent à qualifier la combinaison d'agents la plus pertinente pour votre contexte et à valider la conformité RGPD avant tout engagement.

---

## 8. Section 5 — Cas client RH

### H2

> **Cas client : cabinet de recrutement parisien, 6 consultants, 700 CV/semaine, agent IA tri CV déployé en 3 semaines**

### Sous-titre

> Comment un cabinet de recrutement a multiplié son volume traité par 3 sans embaucher, en conformité RGPD stricte.

### Bloc citation pleine page (typographie display serif XL)

> « On reçoit 700 CV par semaine sur des postes de cadres. Avant Althoce, on en triait sérieusement 200 maximum par semaine. Les 500 autres étaient survolés en quelques secondes, et on savait qu'on ratait probablement de très bons profils. On a déployé l'agent IA tri CV en 3 semaines. Aujourd'hui, les 700 CV sont triés en quelques heures, avec un scoring justifié et anti-biais. Nos consultants se concentrent sur l'entretien humain, là où ils créent vraiment de la valeur. On a doublé le volume placé sans embaucher. Et on n'a pas eu un seul retour RGPD défavorable depuis 6 mois. »
>
> *— Directeur associé, cabinet de recrutement cadres (6 consultants, Paris)*

### KPI bands pleine largeur (`<KPIBand />`)

| KPI | Avant | Après |
|-----|-------|-------|
| **CV triés sérieusement / semaine** | 200 | 700 |
| **Time-to-first-touch candidat** | 5-10 jours | 24 heures |
| **Placements réalisés / mois** | 8 | 17 |
| **Audit RGPD candidats** | Variables | Conforme et opposable |

### Récit court (2 paragraphes)

> Avant la mission Althoce, le cabinet recevait 700 CV par semaine sur ses postes cadres. Les 6 consultants triaient sérieusement environ 200 d'entre eux, par contraintes de temps. Les 500 autres étaient survolés. La direction avait conscience de rater de bons profils mais ne pouvait pas recruter de chargé de recherche (coût, rentabilité) ni accélérer le tri humain sans dégrader la qualité.
>
> En 3 semaines, l'agent IA tri CV a été déployé. Il analyse chaque CV reçu sur l'adéquation au poste cible défini par le consultant (compétences techniques, expérience sectorielle, niveau d'expertise demandé). Il exclut explicitement tout critère discriminatoire (genre, âge, origine, adresse). Il produit un scoring justifié avec logs auditables. Les consultants reçoivent chaque matin une short list de 15 à 25 candidats prioritaires à appeler, avec une synthèse pré-rédigée. Le volume placé a doublé en 4 mois, sans embauche.

### Lien vers le cas complet

> [Voir le cas client complet du cabinet de recrutement →](/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/)

---

## 9. Section 6 — Métiers ciblés (Marquee home)

> **🏠 Section semi-héritée. Réutilisation stricte du composant `<Marquee />`.**

---

## 10. Section 7 — Méthode (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**

---

## 11. Section 8 — Souveraineté (HÉRITÉE DE LA HOME)

> **🏠 Section héritée.**
>
> *Callout métier RH (seul ajout autorisé)* : nos agents RH respectent par défaut le RGPD strict (CV = données personnelles sensibles), avec anonymisation des PII avant tout traitement LLM, durée de conservation paramétrable selon votre charte RGPD, droit à l'oubli implémenté, registre de traitements complet livré à votre DPO. Documentation anti-biais opposable en cas d'audit ou de contentieux prud'homal.

---

## 12. Section 9 — FAQ RH (8 Q/R)

### H2

> **Questions fréquentes sur les agents IA RH**

### Liste accordéon `<FAQItem />`

**Q1. L'agent IA tri CV est-il vraiment anti-biais ? Comment garantissez-vous l'absence de discrimination ?**

Oui, et c'est documenté. Trois niveaux de garantie. **Premier niveau** : exclusion explicite au cadrage des critères protégés par la loi (genre, âge, origine ethnique, adresse, situation familiale, nom de famille, photo). Le scoring ne les voit jamais. **Deuxième niveau** : tests de cohérence statistique sur les premiers 200 tris (avec CV synthétiques piégés sur des critères biaisés) pour vérifier qu'aucun biais émerge du modèle. **Troisième niveau** : logs auditables de chaque décision de scoring, opposables en cas de contentieux. Documentation anti-biais livrée à votre DPO et opposable en cas de contrôle CNIL.

**Q2. Mes CV sont-ils envoyés à OpenAI ou Anthropic ?**

Pour la souveraineté maximale (cabinets traitant des cadres, dirigeants ou secteurs sensibles), nous utilisons Mistral hébergé en France ou un modèle open-source auto-hébergé. Pour les autres clients, anonymisation automatique des PII (nom, prénom, adresse, téléphone, mail) avant tout envoi LLM. Les contrats Enterprise avec OpenAI / Anthropic excluent par défaut la réutilisation pour entraînement. Voir [Intégration IA](/services/integration-ia/) pour la couche conformité technique.

**Q3. Quel investissement pour un agent IA RH et quel ROI attendre ?**

Tarification entièrement **sur devis** selon votre contexte : volume de CV ou de questions internes à traiter, nombre d'outils branchés (ATS, HRIS, paie, outil ticketing), périmètre fonctionnel, exigences de souveraineté. Le ROI typique se mesure en moins de 6 mois : pour un cabinet de recrutement, doublement du volume placé sans embauche. Pour un service RH PME, libération de 4 à 8 heures par semaine de l'équipe paie. Tout démarre par **30 minutes offertes avec un expert** : on qualifie votre besoin et la conformité RGPD, vous repartez avec un devis ferme.

**Q4. L'agent IA peut-il prendre des décisions de recrutement ?**

Non, et ce n'est pas l'objectif. L'agent **trie et scrute** les CV, **qualifie** les candidats par téléphone, et **propose** une short list au recruteur humain. La décision finale (entretien, embauche) reste systématiquement humaine. Ce protocole est ce qui permet de respecter le RGPD article 22 (interdiction de décision entièrement automatisée sur des données personnelles à effet significatif).

**Q5. L'agent peut-il s'intégrer à mon ATS ou HRIS existant ?**

Oui. Workday, Lever, Welcome to the Jungle, Recruitee, Smartrecruiters côté recrutement. Cegid, ADP, Sage Paie, PayFit, Lucca côté HRIS et paie. Pour les outils internes propriétaires, voir [Intégration IA](/services/integration-ia/) qui détaille les connecteurs custom développés au cadrage.

**Q6. Comment l'agent IA assistant RH gère-t-il les questions sensibles (harcèlement, RGPD, litige) ?**

Détection systématique des sujets sensibles au cadrage (liste explicite : harcèlement, discrimination, RGPD, prud'hommes, IRP, syndicat, alerte éthique, signalement). Quand l'agent détecte un de ces mots-clés ou un ton émotionnel critique, il **escalade immédiatement** à un humain RH avec contexte ("L'agent a détecté un sujet potentiellement sensible, je préfère qu'un humain vous réponde directement"). Aucune tentative de réponse automatisée sur ces sujets.

**Q7. L'agent IA va-t-il remplacer mon équipe RH ?**

Non. L'agent absorbe la partie répétitive (tri, qualification, réponses FAQ, onboarding administratif) et libère votre équipe RH pour les sujets à forte valeur : marque employeur, fidélisation, conflits, accompagnement managers, stratégie talents. Statistique observée : aucun de nos clients RH n'a réduit son effectif, plusieurs ont **doublé leur volume traité sans embaucher**, et l'équipe est plus engagée parce qu'elle fait enfin son métier.

**Q8. En combien de temps voit-on les premiers résultats ?**

Pour un agent tri CV : impact dès J1 sur le volume traité, mesurable la première semaine. Pour un agent qualification téléphonique : 1 à 2 semaines de calibrage puis montée en charge. Pour un assistant RH interne : 2 à 3 semaines (le temps d'enrichir la base de connaissances avec vos accords et conventions). ROI plein typique 3 à 6 mois.

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
      "@id": "https://althoce.com/agent-ia/rh/#service",
      "name": "Agent IA pour les ressources humaines",
      "serviceType": "AI agent for HR and recruitment",
      "provider": { "@type": "Organization", "@id": "https://althoce.com/#organization", "name": "Althoce", "url": "https://althoce.com/" },
      "areaServed": { "@type": "Country", "name": "France" },
      "description": "Agents IA Althoce pour les RH : tri CV anti-biais documenté, qualification candidats téléphonique, assistant RH interne 24/7, onboarding new hire. Conformité RGPD native opposable.",
      "offers": {
        "@type": "Offer",
        "url": "https://althoce.com/agent-ia/rh/",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "description": "Tarification sur devis selon volume CV, outils branchés, conformité requise. ROI typique en moins de 6 mois (doublement du volume traité sans embauche)."
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://althoce.com/" },
        { "@type": "ListItem", "position": 2, "name": "Automatisation", "item": "https://althoce.com/services/automatisation-ia/" },
        { "@type": "ListItem", "position": 3, "name": "Agent IA RH", "item": "https://althoce.com/agent-ia/rh/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "L'agent tri CV est-il anti-biais ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, documenté. Exclusion explicite des critères protégés, tests statistiques sur CV synthétiques, logs auditables. Documentation opposable en cas de contrôle CNIL." } },
        { "@type": "Question", "name": "Mes CV vont-ils à OpenAI ou Anthropic ?", "acceptedAnswer": { "@type": "Answer", "text": "Mistral + OVH pour souveraineté maximale. Anonymisation PII sinon. Contrats Enterprise sans réutilisation pour entraînement." } },
        { "@type": "Question", "name": "Quel investissement et quel ROI ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur devis selon scope. ROI typique moins de 6 mois. Doublement volume placé ou 4-8h/semaine libérées." } },
        { "@type": "Question", "name": "L'agent prend-il des décisions de recrutement ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. L'agent trie et propose, décision finale humaine. Conformité RGPD article 22." } },
        { "@type": "Question", "name": "Intégration ATS ou HRIS ?", "acceptedAnswer": { "@type": "Answer", "text": "Workday, Lever, Welcome to the Jungle, Recruitee, Smartrecruiters côté ATS. Cegid, ADP, Sage Paie, PayFit, Lucca côté HRIS." } },
        { "@type": "Question", "name": "Gestion des questions sensibles (harcèlement, RGPD) ?", "acceptedAnswer": { "@type": "Answer", "text": "Détection et escalade systématique à un humain. Aucune réponse automatisée sur ces sujets." } },
        { "@type": "Question", "name": "Va-t-il remplacer mon équipe RH ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Libération sur les sujets à valeur (marque employeur, fidélisation). Aucun effectif réduit observé." } },
        { "@type": "Question", "name": "En combien de temps voit-on les résultats ?", "acceptedAnswer": { "@type": "Answer", "text": "Agent tri CV : impact J1. Qualification téléphonique : 1-2 semaines. Assistant RH : 2-3 semaines. ROI plein 3-6 mois." } }
      ]
    }
  ]
}
```

---

## 15. Maillage interne (récap éditorial)

Liens **placés directement dans la prose** :

- Sec.2 sous-paragraphe : liens vers `/services/integration-ia/` et `/services/employe-ia/`
- Sec.4 agent 02 : lien vers `/agent-ia/telephonique/`
- Sec.4 agent 03 : lien vers `/services/chatbot-ia/`
- Sec.4 agent 04 : lien vers `/services/employe-ia/`
- Sec.4 note finale : lien vers `/services/employe-ia/`
- Sec.5 (cas client) : lien vers `/cas-clients/cabinet-recrutement-paris-agent-ia-tri-cv/` (à créer)
- Sec.9 Q2 : lien vers `/services/integration-ia/`
- Sec.9 Q5 : lien vers `/services/integration-ia/`

### Liens entrants attendus (≥ 5)

- Home (mention "agent IA RH" dans la grille des cas d'usage)
- `/services/agents-ia/` (paragraphe sur les archétypes RH)
- `/services/employe-ia/` (mention "employé IA chargé de recrutement / assistant RH")
- `/services/automatisation-ia/` (12 cas concrets, RH en figure)
- `/agent-ia/telephonique/` (FAQ Q sur la qualification candidat par téléphone)
- `/cas-clients/` (cas RH pointent vers cette page)

---

## 16. Notes Claude Design

### Composants HOME à réutiliser strictement

`<MethodologySection />`, `<SouveraineteSection />`, `<CTAFinalSection />`, `<Marquee />`. Pas de section Pricing héritée.

### Composants existants à réutiliser

`<DarkBlock />`, `<FAQItem />`, `<NumberedListVertical />`, `<BeforeAfterSplit />`, `<KPIBand />`.

### Nouveaux composants à concevoir

- `<HRScoringMockup />` : mockup tableau tri CV hero (sec.1). 5 lignes candidat anonymisées (initiales), colonnes poste candidaté + score adéquation + statut. Scoring visuel discret (barres ou pastilles). Footer "Tri conforme RGPD · sans biais documenté". Pas une image ATS réelle.

### Règle d'intégration des liens internes (CRITIQUE)

Tous les liens listés en sec.15 doivent être **câblés à l'endroit exact où ils apparaissent dans la prose**. Pas de bottom nav "voir aussi".

### Règle d'intégration au site (CRITIQUE)

1. **Menu principal** sous-menu "Métiers" listant les pages métier.
2. **Breadcrumb** : `Accueil → Automatisation → Agent IA RH`.
3. **Footer** colonne "Métiers".
4. **Sitemap.xml** avec `<priority>0.8</priority>` et `<changefreq>monthly</changefreq>`.
5. **Indexation** autorisée.
6. **Pages cousines** : ajouter le lien sortant depuis `/services/agents-ia/`, `/services/automatisation-ia/`, `/services/employe-ia/`, `/agent-ia/telephonique/`, `/agent-ia/service-client/`.
7. **Reading time** estimé visible : 6 min de lecture.

### Règle créativité visuelle

Patterns identiques au template métier vivant (split hero, prose+DarkBlock, split Avant/Après, liste numérotée, citation pleine page + KPI bands, Marquee, accordéon FAQ).

### Tons / langage visuel

Bg `#000000`, accent azure `#38BDF8`, texte primaire blanc, texte secondaire `#94A3B8`. Inter pour le corps, Satoshi pour les titres. Le mockup tableau tri CV utilise des données candidat anonymisées (initiales uniquement, jamais de noms réels même fictifs).

---

## 17. Informations à valider avant publication

1. ✅ **Règle pricing métier (mai 2026)** : aucun prix affiché dans le contenu visible. Page entièrement orientée valeur. Tarification partagée en RDV.
2. **Cas client cabinet de recrutement parisien** : confirmer l'accord du cabinet ou anonymiser.
3. **Chiffres KPI sec.5** (200 → 700 CV/sem, 5-10j → 24h, 8 → 17 placements/mois) : croiser avec données réelles.
4. **Documentation anti-biais opposable** : valider avec un juriste / DPO la formulation et la procédure proposée (audit CNIL, contentieux prud'hommes).
5. **Liste outils ATS et HRIS** (Workday, Lever, Welcome to the Jungle, Recruitee, Smartrecruiters, Cegid, ADP, Sage Paie, PayFit, Lucca) : confirmer la couverture opérationnelle réelle.
6. **Mention "0 effectif réduit observé"** : croiser avec données HR client.

---

*Document de référence rédigé le 2026-05-08. Adaptation #5 du template Métier vivant (après finance, commercial, service client, téléphonique). Aligné avec home-v2.md v3 et règle "focus valeur, pas de prix dans le contenu".*
