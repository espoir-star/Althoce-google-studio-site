---
title: "Charte IA en entreprise : usages, données et validations"
description: "Charte IA en entreprise : une trame modifiable pour fixer usages, données autorisées, validations, incidents et révision, avec les repères CNIL et européens."
slug: "charte-ia-en-entreprise-definir-les-usages-les-donnees-ed-15"
category: "Guide"
author: "Althoce"
publishedAt: "2026-11-25T07:06:55.760+01:00"
updatedAt: "2026-11-25T07:06:55.760+01:00"
readingTime: 10
keywords:
  - "charte ia entreprise"
  - "modèle charte ia"
  - "charte usage ia générative"
  - "politique ia interne"
  - "maîtrise de l'ia article 4"
  - "données ia générative cnil"
image: "/blog/covers/charte-ia-en-entreprise-definir-les-usages-les-donnees-ed-15-cover.png"
imageAlt: "Illustration d'une charte IA en entreprise représentée comme un plan en huit pièces, complété par trois personnes, avec un poste de validation humaine à la sortie"
canonicalUrl: "https://althoce.com/blog/charte-ia-en-entreprise-definir-les-usages-les-donnees-ed-15/"
published: true
---

Une charte IA en entreprise est un document court qui dit qui peut utiliser quel outil d'IA, avec quelles données, pour quelles tâches, et qui vérifie le résultat avant qu'il sorte. Aucun texte que nous avons lu n'impose un document portant ce nom, mais la CNIL recommande d'encadrer l'IA générative par des politiques ou chartes internes, et le règlement européen sur l'IA impose aux entreprises qui utilisent ces outils de prendre des mesures pour développer la maîtrise de l'IA de leur personnel. Voici une trame unique, modifiable, à adapter à ton métier avec ton DPO ou ton conseil.

## Charte IA en entreprise : obligation ou recommandation ?

Il faut distinguer trois niveaux.

**Une recommandation de la CNIL.** Elle conseille à tout organisme d'encadrer l'IA générative par des [politiques ou chartes internes qui définissent les usages autorisés et interdits](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative). C'est un conseil d'autorité, pas l'obligation de rédiger un document intitulé « charte ».

**Une obligation européenne de maîtrise de l'IA.** L'article 4 du règlement IA impose aux fournisseurs et aux déployeurs de systèmes d'IA de prendre des mesures pour favoriser la maîtrise de l'IA de leur personnel et des autres personnes qui utilisent ces systèmes pour leur compte (prestataires, sous-traitants, voire clients). Il ne les oblige pas à garantir un niveau donné. La [FAQ de la Commission européenne](https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers) cite l'exemple d'une entreprise dont les salariés utilisent ChatGPT : elle entre dans le champ. Selon cette FAQ, mise à jour le 20 octobre 2026, l'article s'applique depuis le 2 février 2025, et la surveillance par les autorités nationales depuis le 2 août 2026. La même FAQ indique qu'après l'omnibus numérique entré en vigueur mi-juillet 2026, l'obligation reste à la charge des entreprises, sans niveau minimum imposé.

**Ta responsabilité d'employeur.** La CNIL rappelle que, dans le cas général, c'est l'organisme utilisateur qui [engage sa responsabilité si son personnel utilise mal l'IA](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative).

La charte n'est donc pas une fin en soi. C'est un moyen simple de montrer que tu as fixé des règles, informé tes équipes et prévu un contrôle.

## Les huit blocs de la trame

Plutôt qu'une liste de bonnes intentions, nous proposons une trame en blocs. Chaque bloc répond à une question précise.

1. **Rôles** : qui décide, qui conseille, qui reçoit les alertes.
2. **Cas d'usage** : les tâches autorisées, celles soumises à accord, celles interdites.
3. **Données** : ce qui peut être saisi, selon l'outil utilisé.
4. **Outils autorisés** : liste nominative, type de compte, réglages.
5. **Validation humaine** : qui relit quoi avant diffusion.
6. **Incidents** : que faire si une donnée part au mauvais endroit ou si une sortie erronée est diffusée.
7. **Formation et trace** : ce que chacun doit savoir et comment on le consigne.
8. **Révision** : un responsable nommé et des déclencheurs précis.

La CNIL insiste sur des documents [intelligibles et accessibles](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative). Notre conseil de méthode : vise un document court (par exemple deux à trois pages) et teste-le en demandant à quelques salariés de retrouver une règle précise.

Avant d'écrire, fais l'inventaire des usages réels : qui utilise quoi aujourd'hui, y compris sans autorisation. Pour aller plus loin, voir notre page [audit IA](/services/audit-ia/).

## Bloc données de la charte IA : la règle dépend de l'outil

C'est le bloc qui demande le plus de précision. Une phrase du type « ne jamais saisir de données sensibles » ne suffit pas, car la CNIL explique que [la règle dépend du mode de déploiement](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative). Une image simple : confier un dossier à un coursier inconnu, à un prestataire sous contrat ou à un collègue dans ton bureau, ce n'est pas le même risque.

Quelques mots d'explication. Une **API** est un branchement technique : ton logiciel envoie le texte au modèle d'un fournisseur et reçoit la réponse. **Sur site** (on premise) signifie que le modèle tourne sur tes propres serveurs. Le **RAG** consiste à brancher l'IA sur ta propre base de documents pour qu'elle y cherche ses réponses.

| Mode de déploiement | Ce que dit la CNIL | Règle proposée pour la charte |
|---|---|---|
| Service grand public, adresse pro dédiée | Envisageable pour des usages non confidentiels, pas avec des comptes personnels ; désactiver si possible la réutilisation des données | Aucune donnée personnelle, aucun secret des affaires, rien de couvert par une déontologie |
| Service dont les CGU permettent la réutilisation | Analyse au cas par cas : interdire toutes les données personnelles ou certaines catégories | Liste explicite des catégories interdites, validée par le DPO |
| Système hébergé à distance (cloud) | Contrat de sous-traitance, transferts hors UE encadrés | Données autorisées seulement si le contrat est signé et archivé |
| Accès par API | Maîtrise « quasi exclusivement » chez le fournisseur ; éviter autant que possible les données personnelles | Données personnelles exclues par défaut, exceptions écrites |
| Installation sur site | Les interdictions liées à la réutilisation par le fournisseur ne sont pas nécessaires | Règles d'accès internes à définir (qui voit quels dossiers) |
| IA connectée à ta base interne (RAG) | Le déployeur est responsable du traitement lorsque la base contient des données personnelles ; en attendant d'autres recommandations, associer le DPO et réaliser une AIPD le cas échéant | Périmètre documentaire défini, DPO consulté avant mise en service |

La colonne « Ce que dit la CNIL » reprend la [page questions-réponses de la CNIL du 18 juillet 2024](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative) : relis-la avant d'adopter ta version. La colonne « Règle proposée pour la charte » regroupe nos propositions de méthode, pas des positions de la CNIL.

Si tu envisages un agent IA branché sur tes dossiers, ce bloc devient central. Voir aussi notre page [agents IA sur mesure](/services/agents-ia/).

## Bloc validation : trois niveaux à ne pas confondre

La CNIL recommande que les utilisateurs vérifient l'exactitude des sorties, l'absence de plagiat et l'absence de biais susceptibles de mener à des discriminations. Elle signale aussi le « biais d'automatisation », qu'elle décrit comme le risque de perte de confiance ou de compétence lié à une utilisation excessive du système. Sa bonne pratique : [ne jamais reproduire une sortie telle quelle](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative).

Pour rendre cette règle applicable, nous conseillons de séparer trois niveaux dans la charte :

1. **Préparation documentaire par l'IA** : un brouillon, un résumé, un tableau de pièces manquantes.
2. **Contrôle déterministe** : des règles fixes qui donnent toujours le même résultat (un total qui doit tomber juste, une liste de pièces obligatoires, une date limite calculée). Comme une balance : elle ne réfléchit pas, elle vérifie.
3. **Décision professionnelle** : conseil, avis, signature, engagement. Elle reste humaine.

**Exemple hypothétique, à réaliser chez toi.** Dans un cabinet comptable, l'IA prépare un projet de relance client listant les justificatifs manquants. Données utilisables : la liste des pièces reçues, sans relevé bancaire complet. Contrôle : la liste est rapprochée de la checklist interne du dossier. Validation : le collaborateur en charge du dossier relit et envoie. Aucun courrier ne part sans son nom.

La CNIL distingue aussi les usages selon leur risque : un assistant de rédaction pour les salariés présente [moins de risques qu'un système qui aide à décider à l'égard de clients ou de candidats](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative). Ta charte peut exiger un accord préalable pour la seconde catégorie.

## Incidents, formation et révision

### Incidents

La CNIL propose que le DPO, en lien avec le RSSI si besoin, serve de [point de contact pour remonter les problèmes](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative). Dans la charte, nous conseillons une procédure en quatre temps : signaler sans délai au référent, décrire ce qui a été saisi et dans quel outil, laisser le référent évaluer les suites, consigner l'incident et la mesure prise. Le référent décide s'il faut aller plus loin ; la charte n'a pas à trancher à sa place.

### Formation et trace

La Commission précise qu'[aucun certificat n'est exigé](https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers) et que l'article 4 n'impose pas de mesurer le niveau des salariés. Les organisations peuvent tenir un registre interne des formations et autres actions d'accompagnement. Elle cite l'exemple d'une entreprise dont les salariés utilisent ChatGPT pour rédiger ou traduire : ils doivent être informés des risques, comme les hallucinations (des réponses inventées mais plausibles). Elle indique aussi que, dans de nombreux cas, se contenter des notices d'utilisation ou demander au personnel de les lire peut être inefficace. Voir notre page [formation IA](/services/formation-ia/).

### Révision

Nomme une personne, pas un service. Fixe des déclencheurs : nouvel outil, nouvel usage, changement des conditions d'un fournisseur, incident, évolution réglementaire. Pour les usages très sensibles, la CNIL évoque un référent ou un comité qui rend un avis avant chaque nouvel usage, avec [par exemple un bilan annuel](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative). De son côté, la [FAQ de la Commission](https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers) indique qu'aucune structure de gouvernance particulière n'est exigée pour respecter l'article 4.

## La trame modifiable de charte IA

Copie cette trame et remplis chaque ligne. C'est un modèle de travail, pas un document conforme par défaut.

- **Objet et périmètre** : services concernés, prestataires inclus ou non.
- **Rôles** : décideur [nom, fonction] ; référent IA [nom] ; DPO [nom] ; RSSI ou responsable informatique [nom] ; responsable métier par usage [nom].
- **Cas d'usage autorisés** : [tâche, service, outil].
- **Cas d'usage soumis à accord** : [tâche, qui donne l'accord].
- **Cas d'usage interdits** : [tâche, raison].
- **Données** : reprendre la matrice ci-dessus, ligne par ligne, pour chaque outil.
- **Outils autorisés** : [nom, mode de déploiement, type de compte, réglage de réutilisation désactivé oui ou non, contrat archivé oui ou non].
- **Prompts types** : [lien vers la bibliothèque interne]. La CNIL mentionne cette possibilité.
- **Validation** : pour chaque usage, niveau 1, 2 ou 3 et nom du valideur.
- **Incidents** : contact, informations à transmettre, registre.
- **Formation** : contenu minimal, public, date, registre.
- **Révision** : responsable [nom], déclencheurs, date de prochaine revue.
- **Diffusion et prise de connaissance** : modalités à définir avec ton conseil en droit social.

Sur ce dernier point, la façon de rendre une charte opposable aux salariés (lien avec le règlement intérieur, consultation des représentants du personnel) relève du droit du travail. Nous ne l'avons pas vérifié pour cet article : fais-le valider par un avocat ou ton service RH.

## Encadrés métier : ce qui change, ce qui ne se transpose pas

La trame reste la même. Ce qui change, ce sont les sources à ajouter dans le bloc données et le bloc validation. Une règle propre à une profession ne s'applique pas aux autres.

### Avocats

Le CNB a adopté le 17 mars 2026 un [guide sur la déontologie et l'IA générative](https://cnb.avocat.fr/actualite/le-cnb-adopte-un-guide-sur-la-deontologie-et-l-intelligence-artificielle). L'annonce rappelle le secret professionnel, le RGPD, la compétence, la prudence, l'indépendance, l'information et la fixation équilibrée des honoraires. Lis le guide complet avant de compléter ta charte. Voir aussi notre page [secteur droit](/secteurs/droit/).

### Notaires et experts-comptables

Nous n'avons pas documenté ici les positions de leurs instances. Renvoie dans la charte aux textes de ton ordre ou de ta chambre, sans recopier le cadre des avocats.

### Directions financières et industrie

Vérifie si ton activité relève d'une réglementation professionnelle ou d'un superviseur. Les établissements financiers soumis à un superviseur doivent vérifier ses exigences propres. La CNIL cite les données couvertes par le secret des affaires parmi les informations à ne pas saisir dans un service grand public : ce point mérite une attention particulière dans le bloc données. En industrie, la charte peut préciser qu'aucun réglage de machine n'est appliqué sur la seule suggestion d'une IA. Voir aussi notre page [secteur finance](/secteurs/finance/).

### Immobilier

Les dossiers de locataires et d'acquéreurs contiennent des données personnelles : applique la matrice avec rigueur et vérifie les règles propres à ton activité auprès de ton organisation professionnelle.

### Et la sécurité technique ?

L'ANSSI a publié le 29 avril 2024 des [recommandations de sécurité pour un système d'IA générative](https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-un-systeme-dia-generative). Elles portent sur l'architecture, pas sur la protection des données personnelles ni sur la qualité métier. Elles s'adressent aux administrations et aux entreprises et couvrent la sécurisation d'un tel système, de la conception et de l'entraînement jusqu'au déploiement et à l'utilisation en production. Ton DSI est le premier concerné.

## Ce qu'apporte une approche sur mesure

Une charte générique risque de rester théorique. Une charte utile part de tes usages réels, nomme tes outils, relie chaque donnée à un mode de déploiement et désigne un valideur par tâche. Nous conseillons de procéder dans cet ordre : inventaire des usages, matrice des données, niveaux de validation, formation tracée, puis révision planifiée. Le but n'est pas de produire un document de plus, mais que chaque salarié sache quoi faire devant un dossier précis. Aucune charte ne garantit l'absence d'erreur ni la conformité : elle rend les règles visibles et contrôlables.

## Questions fréquentes

### Une charte IA est-elle obligatoire ?

Aucun texte lu n'impose un document de ce nom. La CNIL recommande des politiques ou chartes internes. L'article 4 du règlement IA impose de prendre des mesures pour favoriser la maîtrise de l'IA de ton personnel, sans exiger de niveau précis.

### Faut-il interdire ChatGPT ?

Pas forcément. La CNIL envisage un service grand public pour des usages non confidentiels, avec des adresses professionnelles dédiées et sans données personnelles ni secrets.

### Faut-il certifier la formation des salariés ?

Non selon la FAQ de la Commission : aucun certificat n'est exigé, et les organisations peuvent tenir un registre interne des formations et actions d'accompagnement.

### Faut-il créer un comité IA ?

La FAQ de la Commission n'impose aucune structure de gouvernance au titre de l'article 4. Pour les usages particulièrement sensibles, la CNIL recommande d'envisager un comité éthique ou un référent.

### Faut-il une charte par métier ?

Nous conseillons une trame commune, avec des encadrés qui renvoient aux règles de chaque profession, pour éviter les contradictions.

### Qui valide la charte ?

Nous conseillons que la direction l'adopte après avis du DPO, du responsable informatique et d'un conseil en droit social. Les modalités d'opposabilité restent à vérifier avec ce conseil.

## Pour aller plus loin

Commence par l'inventaire des usages, puis remplis la trame bloc par bloc avec les personnes qui feront vivre les règles. Si tu veux en parler avec nous, tu peux [nous contacter](/contact/).
