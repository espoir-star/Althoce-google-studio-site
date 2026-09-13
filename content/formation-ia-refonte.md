# Refonte page Formation IA

**Source** : Notion « Althoce — Espace Formations » (Formation 1 et Formation 2)
**Date** : 26 juillet 2026

## Règles appliquées

- Aucun tarif nulle part, y compris dans le JSON-LD
- Aucune mention de l'organisme de portage
- Financement évoqué une seule fois, sur le hub
- Pas de tableaux (mauvais rendu mobile), grilles de cartes à la place
- Pas de tiret long entre les phrases
- Sur les pages détail : le programme est le sujet principal, le reste est réduit au minimum légal

## Architecture

```
/services/formation-ia/                      → hub, 2 cartes
├── /services/formation-ia/ia-fondamentaux/
└── /services/formation-ia/ia-avancee/
```

---

# HUB `/services/formation-ia/`

```
title: Formation IA pour entreprise
description: Deux formations indépendantes d'une journée pour former vos équipes à l'IA générative. Sur vos vrais dossiers, avec vos outils. Finançables OPCO.
```

## Hero

**H1** : Formation IA pour entreprise

**Chapô** :
Deux formations indépendantes d'une journée, conçues pour les PME et ETI françaises. Vos équipes travaillent sur vos vrais dossiers, avec vos outils, et repartent avec des cas d'usage prêts à déployer.

**CTA** : Discuter de votre projet → `/contact/`

---

## Les deux programmes

**Titre de section** : Nos deux programmes

**Sous-titre** : Chaque formation se suit indépendamment, selon le niveau de vos équipes. La première pose les bases et sécurise les usages. La seconde transforme vos utilisateurs en power-users capables d'automatiser leur métier.

### Carte 1

- **Badge** : Niveau 1
- **Titre** : IA Fondamentaux
- **Accroche** : Maîtriser l'IA générative au quotidien professionnel
- **Description** : Passer de « j'ai testé ChatGPT » à une utilisation quotidienne, efficace et sécurisée de l'IA dans son travail.
- **Méta** : 1 journée · Aucun prérequis · Jusqu'à 10 participants
- **3 points** :
  - Comprendre les LLM et choisir le bon modèle
  - Rédiger des prompts qui donnent des résultats exploitables
  - Utiliser l'IA en conformité RGPD et IA Act
- **CTA** : Voir le programme → `/services/formation-ia/ia-fondamentaux/`

### Carte 2

- **Badge** : Niveau 2
- **Titre** : IA Avancée
- **Accroche** : Expertise métier et automatisation
- **Description** : Passer d'utilisateur à power-user : assistants IA sur mesure, connexion aux outils et premier agent d'automatisation.
- **Méta** : 1 journée · Pratique IA requise · Jusqu'à 10 participants
- **3 points** :
  - Créer son assistant IA métier
  - Connecter l'IA à ses outils via API et MCP
  - Construire un agent d'automatisation fonctionnel
- **CTA** : Voir le programme → `/services/formation-ia/ia-avancee/`

**Note sous les cartes** :
Un questionnaire de positionnement est envoyé en amont pour orienter chaque participant vers le niveau qui lui correspond.

---

## Notre approche

**Titre** : Des formations construites avec vous

**01 — Cadrage en amont**
Nous récupérons vos cas d'usage réels et adaptons les exemples et le vocabulaire à votre secteur. La formation se déroule sur l'outil que vos équipes utilisent déjà, ChatGPT ou Claude.

**02 — Pratique sur vos vrais dossiers**
Chaque participant apporte deux tâches chronophages de son poste. Ce sont elles qui servent de support aux ateliers. À la fin de la journée, elles sont traitées.

**03 — Suivi à 30 jours**
Une visio d'une heure un mois après pour débloquer les difficultés et ajuster les cas d'usage. C'est ce qui fait la différence entre une formation oubliée et des pratiques ancrées.

---

## Financement

**Composant** : `<DarkBlock />`

**Titre** : Vos formations sont finançables

**Corps** :
Les actions de formation professionnelle peuvent être prises en charge par votre opérateur de compétences. Selon votre branche et votre budget formation disponible, le reste à charge peut être fortement réduit.

Nos équipes s'occupent des démarches auprès de votre OPCO : constitution du dossier, transmission des pièces justificatives et suivi jusqu'à l'accord de prise en charge.

**CTA** : Évaluer votre financement → `/contact/`

---

## FAQ

**Q1 — Faut-il des compétences techniques ?**
Non pour la formation Fondamentaux, aucun prérequis. La formation Avancée demande une pratique régulière d'un outil IA. Un questionnaire de vérification est envoyé en amont.

**Q2 — Sur quel outil se déroule la formation ?**
Sur celui que vos équipes utilisent déjà, ChatGPT ou Claude. Si le choix n'est pas encore fait, nous vous aidons à le poser pendant le cadrage.

**Q3 — Peut-on former plus de 10 personnes ?**
Oui, en organisant plusieurs sessions. Nous limitons à 10 participants pour garantir un accompagnement individuel pendant les ateliers.

**Q4 — Quel délai faut-il prévoir ?**
Deux à trois semaines entre le premier échange et la session : cadrage, questionnaire aux participants, adaptation des supports et montage du dossier de financement si besoin.

**Q5 — Les formations sont-elles accessibles aux personnes en situation de handicap ?**
Oui. Contactez-nous en amont pour que nous préparions les aménagements nécessaires.

**Q6 — Que se passe-t-il après la formation ?**
Une visio de suivi est prévue à 30 jours. Beaucoup de clients enchaînent ensuite sur un projet d'[automatisation concret](/services/agents-ia/), souvent identifié pendant la formation.

---

## CTA final

**Titre** : Discutons de votre projet de formation

**Corps** : 30 minutes offertes pour comprendre votre contexte, identifier le bon niveau pour vos équipes et vous dire honnêtement si nos formations correspondent à votre besoin.

**CTA** : Réserver 30 minutes → `/contact/`

---

# PAGE `/services/formation-ia/ia-fondamentaux/`

```
title: Formation IA Fondamentaux
description: Une journée pour maîtriser l'IA générative au quotidien professionnel. Aucun prérequis, sur vos vrais dossiers, jusqu'à 10 participants.
```

## Hero

**Fil d'ariane** : Services › Formation IA › IA Fondamentaux

**Badge** : Niveau 1

**H1** : IA Fondamentaux

**Chapô** : Une journée pour passer de « j'ai testé ChatGPT » à une utilisation quotidienne, efficace et sécurisée de l'IA dans son travail.

**Infos clés** (grille de 4 cartes, composant `<FormationInfoGrid />`, pas de tableau) :
- **Durée** : 1 journée, 7 heures
- **Public** : Dirigeants, managers, équipes opérationnelles. Aucun prérequis.
- **Effectif** : Jusqu'à 10 participants
- **Format** : Présentiel ou distanciel, intra ou inter-entreprise

**CTA** : Demander un devis → `/contact/`

---

## Objectifs

**Titre** : À la fin de la journée, vos équipes savent

1. Expliquer le fonctionnement d'un LLM et identifier ses limites : hallucinations, biais, fraîcheur des données
2. Choisir le modèle d'IA adapté à chaque type de tâche
3. Rédiger des prompts structurés produisant des résultats exploitables du premier coup
4. Appliquer l'IA à au moins 3 tâches récurrentes de leur poste
5. Utiliser l'IA en conformité RGPD et IA Act, et identifier les données à ne jamais partager

---

## Le programme

**Composant** : `<FormationTimeline />`

### 9h00 · Accueil et positionnement
Tour de table, recueil des attentes, quiz de positionnement qui sert de référence pour mesurer la progression en fin de journée.

### 9h30 · Module 1 — Comprendre l'IA générative et les LLM
- Qu'est-ce qu'un LLM ? Fonctionnement vulgarisé, sans jargon
- Modèle contre interface : pourquoi ChatGPT n'est pas GPT
- Comparatif des grands modèles : ChatGPT, Claude, Gemini, Mistral, Copilot
- Quel modèle pour quel besoin : rédaction, analyse, recherche, données sensibles
- Les limites : hallucinations, biais, données d'entraînement, avec démonstration en direct

**Atelier** : les participants soumettent la même tâche à 2 modèles différents et comparent les résultats.

### 11h15 · Module 2 — Les bases du prompting efficace
- Anatomie d'un bon prompt : rôle, contexte, tâche, format, contraintes
- Les erreurs classiques et comment les corriger
- Itérer plutôt que recommencer

**Atelier** : chaque participant reprend 3 de ses prompts ratés et les transforme. Comparaison avant et après.

### 13h30 · Module 3 — L'IA dans son quotidien professionnel
- Cas d'usage par profil : dirigeant, commercial, administratif, marketing
- Travailler avec ses documents : résumer, extraire, reformuler, traduire

**Cas pratique central** : chaque participant traite une vraie tâche de son poste apportée le matin, avec accompagnement individuel du formateur.

### 15h15 · Module 4 — Réglementation et bonnes pratiques
- RGPD appliqué à l'IA : quelles données partager, lesquelles jamais
- L'IA Act européen : ce qui concerne concrètement une PME
- Confidentialité : paramètres des outils, versions professionnelles contre gratuites
- Construire une charte d'usage interne

**Atelier** : auto-audit des pratiques et rédaction des 5 règles d'or pour l'entreprise.

### 16h15 · Module 5 — Plan d'action et évaluation
- Constituer sa boîte à outils personnelle
- Chaque participant repart avec 3 cas d'usage prêts à déployer
- Quiz final, évaluation à chaud

---

## Ce que vos équipes repartent avec

- Un livret participant complet
- Une bibliothèque de prompts prête à l'emploi
- 3 cas d'usage identifiés et prêts à déployer sur leur poste
- Les 5 règles d'or de l'usage de l'IA dans votre entreprise
- Un certificat de réalisation

---

## Aller plus loin

Une fois les fondamentaux acquis, la [formation IA Avancée](/services/formation-ia/ia-avancee/) permet de créer des assistants IA métier et de construire un premier agent d'automatisation.

---

## CTA final

**Titre** : Former vos équipes aux fondamentaux

**Corps** : 30 minutes offertes pour cadrer votre besoin et valider le niveau de vos équipes.

**CTA** : Réserver 30 minutes → `/contact/`

---

## Mentions de bas de page

Ligne discrète sous le CTA, en petit texte gris :

Formation évaluée par quiz de positionnement et quiz final. Certificat de réalisation remis à chaque participant. Visio de suivi d'une heure à 30 jours. Formation accessible aux personnes en situation de handicap, nous contacter en amont. Finançable OPCO.

---

# PAGE `/services/formation-ia/ia-avancee/`

```
title: Formation IA Avancée
description: Une journée pour créer vos assistants IA métier, connecter l'IA à vos outils et construire un agent d'automatisation fonctionnel.
```

## Hero

**Fil d'ariane** : Services › Formation IA › IA Avancée

**Badge** : Niveau 2

**H1** : IA Avancée

**Chapô** : Une journée pour passer d'utilisateur à power-user : assistants IA sur mesure, prompting avancé, connexion de l'IA à vos outils et premier agent d'automatisation fonctionnel.

**Infos clés** (grille de 4 cartes) :
- **Durée** : 1 journée, 7 heures
- **Public** : Professionnels utilisant déjà l'IA régulièrement
- **Prérequis** : Pratique régulière d'un outil IA ou formation Fondamentaux
- **Effectif** : Jusqu'à 10 participants

**Encart sous la grille** :
Un questionnaire de vérification des prérequis est envoyé en amont. Les participants qui ne les remplissent pas sont orientés vers la [formation IA Fondamentaux](/services/formation-ia/ia-fondamentaux/).

**CTA** : Demander un devis → `/contact/`

---

## Objectifs

**Titre** : À la fin de la journée, vos équipes savent

1. Concevoir des prompts avancés réutilisables : few-shot, chaîne de raisonnement, méta-prompting, prompts système
2. Créer un assistant IA personnalisé adossé à une base de connaissances métier
3. Expliquer le rôle des API et du protocole MCP, et identifier les connexions pertinentes
4. Construire un workflow d'automatisation intégrant l'IA
5. Définir un cadre de gouvernance et une feuille de route de déploiement

---

## Le programme

### 9h00 · Accueil
Tour de table express : chacun présente un usage IA actuel et un processus métier répétitif qu'il aimerait automatiser. Ces éléments alimentent la feuille de route construite en fin de journée. Quiz de positionnement.

### 9h15 · Module 1 — Prompting avancé
- Few-shot : guider par l'exemple pour obtenir un format constant
- Chaîne de raisonnement : faire décomposer avant de conclure
- Méta-prompting : faire écrire et améliorer ses prompts par l'IA
- Prompts système : poser un cadre permanent de comportement

**Atelier** : construire un prompt métier réutilisable, sous forme de template paramétrable, sur un cas réel de son poste.

### 11h00 · Module 2 — Son assistant IA métier
- Assistants personnalisés : GPTs côté ChatGPT, Projets côté Claude. Instructions, base de connaissances, exemples
- Préparer sa base de connaissances : quels documents, quel format, quels pièges

**Cas pratique** : chaque participant crée un assistant fonctionnel pour un besoin réel, réponse aux devis, onboarding client ou FAQ interne, et le teste sur des cas concrets.

### 13h30 · Module 3 — Connecter l'IA à ses outils
- L'API expliquée simplement : quand l'interface ne suffit plus
- MCP : le standard qui branche l'IA sur vos outils, agenda, CRM, drive, boîte mail
- Démonstrations en direct : IA connectée à des documents, un agenda, un CRM
- Panorama : connecteurs natifs, API et plateformes d'automatisation

**Atelier guidé** : activer et tester un connecteur sur son propre outil.

### 15h15 · Module 4 — Construire son agent mail
- Anatomie d'un workflow : déclencheur, actions, IA, sortie
- Comparaison des plateformes d'automatisation et critères de choix
- Démonstration du résultat final par le formateur

**Atelier standardisé** : tous les participants construisent le même agent mail IA à partir d'un modèle fourni. Réception d'un email, analyse et classification par l'IA en urgent, client ou administratif, étiquetage automatique, puis brouillon de réponse généré. Progression par étapes avec points de contrôle. Chacun repart avec un agent fonctionnel.

Variantes présentées en fin d'atelier : veille automatique, génération de comptes-rendus, alimentation d'un CRM.

### 16h30 · Module 5 — Gouvernance et feuille de route
- Sécurité des automatisations : accès, données, supervision humaine
- Prioriser ses chantiers IA avec une matrice effort contre impact
- Feuille de route personnelle à 90 jours
- Quiz final, évaluation à chaud

---

## Ce que vos équipes repartent avec

- Un prompt template métier réutilisable
- Un assistant IA fonctionnel adossé à leur base de connaissances
- Un agent mail opérationnel, classification et brouillons de réponse
- Une feuille de route personnelle à 90 jours
- Un certificat de réalisation

---

## Aller plus loin

Vos équipes ont construit leur premier agent pendant la formation. Pour industrialiser ces automatisations à l'échelle de votre entreprise, nous concevons des [agents IA sur mesure](/services/agents-ia/) intégrés à vos outils métier.

---

## CTA final

**Titre** : Passer au niveau avancé

**Corps** : 30 minutes offertes pour vérifier les prérequis de vos équipes et cadrer les cas d'usage à travailler.

**CTA** : Réserver 30 minutes → `/contact/`

---

## Mentions de bas de page

Ligne discrète sous le CTA, en petit texte gris :

Formation évaluée par quiz de positionnement, quiz final et évaluation des productions en atelier. Certificat de réalisation remis à chaque participant. Visio de suivi d'une heure à 30 jours. Formation accessible aux personnes en situation de handicap, nous contacter en amont. Finançable OPCO.

---

# SPÉCIFICATIONS TECHNIQUES

## Composants à créer

### `<FormationCard />`
Carte du hub.

```tsx
interface FormationCardProps {
  level: string;        // "Niveau 1"
  title: string;        // "IA Fondamentaux"
  tagline: string;
  description: string;
  meta: string;         // "1 journée · Aucun prérequis · Jusqu'à 10 participants"
  keyPoints: string[];  // 3 points
  href: string;
}
```

Bordure `border-v2-border`, radius 2xl, hover `border-ink`. Badge niveau fond `accent/10` texte `accent`. Titre `text-3xl font-bold`. Méta sur une ligne en `text-muted`. Puces accent pour les 3 points. CTA avec flèche en bas.

### `<FormationInfoGrid />`
Grille des infos clés des pages détail. **Pas de tableau.** Grille de 4 cartes : 4 colonnes desktop, 2 colonnes tablette, 1 colonne mobile. Chaque carte : label en petit majuscule `text-muted`, valeur en `font-medium`.

### `<FormationTimeline />`
Timeline verticale du programme.

```tsx
interface TimelineModule {
  horaire: string;   // "9h30"
  titre: string;     // "Module 1 — Comprendre l'IA générative et les LLM"
  contenu: string[];
  atelier?: { label: string; description: string; };
}
```

Ligne verticale accent à gauche, point de jalon à chaque module, horaire en gras. Encart atelier avec fond légèrement teinté pour le distinguer du contenu théorique.

## Composants existants réutilisés

`<NumberedListVertical />` pour l'approche, `<DarkBlock />` pour le financement, `<FAQItem />` pour la FAQ, `<CTAFinalSection />` pour les CTA.

## JSON-LD

**Hub** : `Service` + `ItemList` des 2 formations + `FAQPage` + `BreadcrumbList`

**Pages détail** : schéma `Course` + `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "IA Fondamentaux",
  "description": "...",
  "provider": {
    "@type": "Organization",
    "@id": "https://althoce.com/#organization",
    "name": "Althoce"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": ["Onsite", "Online"],
    "courseWorkload": "PT7H"
  },
  "educationalLevel": "Beginner",
  "teaches": [...],
  "inLanguage": "fr-FR"
}
```

**Ne pas inclure la propriété `offers`.** Aucun prix dans le JSON-LD.

## Sitemap

Ajouter avec priorité 0.8 :
- `https://althoce.com/services/formation-ia/ia-fondamentaux/`
- `https://althoce.com/services/formation-ia/ia-avancee/`

## Covers Open Graph

2 covers 1200×630 sur le template Althoce, badge « FORMATION » :
- `/public/og/formation-ia-fondamentaux.png`
- `/public/og/formation-ia-avancee.png`

---

# À COMPLÉTER CÔTÉ ALTHOCE

1. **Référent handicap** : nom et coordonnées, à insérer dans les mentions de bas de page. Obligation réglementaire.
2. **Règlement intérieur de formation** : PDF à héberger et lier depuis le footer.
3. **CGV formation** : à distinguer des CGV prestations, ou avenant spécifique.
4. **Délai d'accès** : « deux à trois semaines » proposé dans la FAQ, à confirmer.

---

*Rédigé le 26 juillet 2026 à partir des fiches Notion. Aucun tarif, aucune mention du portage.*
