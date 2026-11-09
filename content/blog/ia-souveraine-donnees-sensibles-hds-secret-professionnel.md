---
title: "IA souveraine et données sensibles : quel niveau choisir ?"
description: "Secret professionnel, HDS, SecNumCloud, RGPD : les obligations à distinguer, une grille de décision et dix questions pour protéger les données de votre cabinet."
slug: "ia-souveraine-donnees-sensibles-hds-secret-professionnel"
category: "Souveraineté"
author: "Althoce"
publishedAt: "2026-11-09T09:44:00+01:00"
updatedAt: "2026-11-09T09:44:00+01:00"
readingTime: 9
keywords: ["IA souveraine données sensibles","IA secret professionnel","IA HDS"]
image: "/blog/covers/ia-souveraine-donnees-sensibles-hds-secret-professionnel-cover.jpg"
imageAlt: "Deux professionnels suivent un ruban bleu reliant des dossiers, un serveur et des compartiments protégés."
canonicalUrl: "https://althoce.com/blog/ia-souveraine-donnees-sensibles-hds-secret-professionnel/"
published: true
---

Vous cherchez une **IA souveraine pour vos données sensibles**. Comment vous repérer entre « France », « HDS », « ISO 27001 » et « SecNumCloud » sans devenir spécialiste du cloud ?

Ce guide s’adresse aux experts-comptables qui protègent leurs dossiers clients et aux professionnels de santé qui protègent les informations de leurs patients. Son objectif : vous aider à déterminer le niveau de protection nécessaire et les preuves à demander avant de signer.

**Le bon réflexe : suivre la donnée de bout en bout.** Ne vous arrêtez ni au pays du serveur principal ni au logo affiché par le prestataire.

## ISO 27001, HDS, SecNumCloud, RGPD : quatre cadres différents

Une certification, une qualification et un règlement ne répondent pas à la même question.

| Cadre | Ce qu’il apporte | Ce qu’il ne suffit pas à démontrer |
| --- | --- | --- |
| **ISO/IEC 27001** | Un système de management de la sécurité de l’information, fondé sur la gestion des risques. [1](https://www.iso.org/fr/standard/27001) | Ce n’est pas le certificat HDS exigé pour l’hébergement concerné. Ne le prenez pas pour une validation juridique de votre usage de l’IA. |
| **HDS** | Une certification des activités d’hébergement de données de santé entrant dans son champ. Le périmètre doit figurer au contrat. [2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049577902) [3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006196138/) | Elle ne couvre pas automatiquement tous les services d’un groupe. Elle n’équivaut pas à la protection contre les lois étrangères prévue par SecNumCloud. [4](https://esante.gouv.fr/actualites/evolution-importante-des-referentiels-de-certification-et-daccreditation-de-lhebergement-de-donnees-de-sante-hds-0) |
| **SecNumCloud** | Une qualification ANSSI d’un service cloud, avec des exigences techniques, organisationnelles et juridiques, dont la résistance aux injonctions extraterritoriales. [5](https://cyber.gouv.fr/enjeux-technologiques/cloud/faq-qualification-secnumcloud/) | L’ANSSI précise qu’elle ne préjuge pas de la sécurité de l’application du client hébergée dessus. |
| **RGPD** | Des obligations sur les finalités, la base légale, les données nécessaires, la sécurité et les responsabilités. [6](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2) [7](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) | Ce règlement n’est pas un certificat d’hébergeur. Choisir une infrastructure certifiée ne règle pas, à lui seul, ces obligations. |

« Sensible » demande aussi une précision : une information peut être confidentielle pour votre cabinet sans appartenir aux catégories particulières de l’article 9 du RGPD. Les données de santé, elles, en font partie. [6](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2)

### Ce qui a changé en 2026

Le **décret n° 2026-209 du 24 mars 2026** existe bien. Ses dispositions sur le stockage et la transparence sont applicables depuis le **26 septembre 2026**. Pour l’hébergement concerné, le stockage doit se faire dans l’Union européenne ou l’Espace économique européen. Les accès distants et transferts hors de cet espace restent encadrés, notamment par les mécanismes des articles 45 et 46 du RGPD. [8](https://www.legifrance.gouv.fr/eli/decret/2026/3/24/2026-209/jo/texte) [3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006196138/)

Si l’hébergeur ou un sous-traitant est soumis à une législation de pays tiers, le contrat doit identifier les réglementations pouvant imposer un accès contraire au droit de l’Union. En l’absence de décision d’adéquation, il doit aussi décrire les mesures d’atténuation et les risques résiduels. L’hébergeur doit également publier et actualiser une cartographie des transferts, accès distants et risques d’accès non autorisés. [3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006196138/)

**Transparence sur un risque ne signifie pas suppression du risque.** L’ANS distingue expressément les exigences HDS de celles du paragraphe 19.6 de SecNumCloud 3.2, consacré aux lois extra-européennes. [4](https://esante.gouv.fr/actualites/evolution-importante-des-referentiels-de-certification-et-daccreditation-de-lhebergement-de-donnees-de-sante-hds-0)

## IA et secret professionnel : ce qui s’impose à votre métier

### Expert-comptable : protéger le dossier, y compris dans la sous-traitance

L’article 21 de l’ordonnance du 19 septembre 1945 soumet notamment les experts-comptables au secret professionnel et renvoie à l’article 226-13 du Code pénal. Celui-ci sanctionne la révélation d’une information secrète par **un an d’emprisonnement et 15 000 euros d’amende**. [9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033678954) [10](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417945)

Le recours à un prestataire ne dispense pas d’organiser la confidentialité. Pour les données personnelles, l’article 28 du RGPD impose un encadrement contractuel de la sous-traitance et un engagement de confidentialité des personnes autorisées, ou une obligation légale appropriée. Cela ne signifie pas que tout fournisseur informatique devient automatiquement soumis au même statut pénal que l’expert-comptable. [7](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4)

**HDS n’est pas une obligation attachée au métier d’expert-comptable.** Son application dépend de la nature des données, de leur contexte de collecte et de la prestation d’hébergement définis par le Code de la santé publique. [2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049577902)

La notice officielle du CNOEC recommande notamment de ne pas déposer de courriels clients, fichiers d’écritures comptables ou déclarations sociales non anonymisés sur des services non maîtrisés. [11](https://www.experts-comptables.fr/sites/default/files/assets/files/COMMENT%20UTILISER%20CHATGPT%20-%20A4_p%C3%A0p.pdf)

### Santé : secret médical et périmètre HDS

Le Code de la santé publique protège le secret des informations concernant la personne prise en charge. [12](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043895798) Lorsqu’un tiers héberge sur support numérique des données de santé personnelles recueillies à l’occasion d’activités de prévention, diagnostic, soins ou suivi social et médico-social, **la certification HDS est requise dans le champ de l’article L1111-8**. [2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049577902)

Cela ne signifie pas que tout logiciel utilisé dans un cabinet médical doit être HDS. Il faut examiner les données et les prestations réellement confiées à un tiers. Héberger exclusivement ses propres données en interne n’est pas la même situation que fournir un hébergement pour autrui.

L’ANS fixe au **16 mai 2026** la fin de la transition : au-delà, les hébergeurs concernés doivent être certifiés selon HDS v2.0 pour poursuivre leur activité. [13](https://esante.gouv.fr/actualites/certification-hds-six-mois-pour-etre-pret)

> **Obligatoire ou recommandé ?**
>
> **Cabinet comptable :** secret professionnel et RGPD pour les données personnelles. HDS seulement si la prestation entre dans son champ ; SecNumCloud à apprécier selon les risques et exigences applicables.
>
> **Cabinet de santé :** secret des informations, RGPD et HDS pour l’hébergement externalisé concerné. SecNumCloud ne remplace pas ces obligations.

## Où vont réellement les données ?

Voici un schéma de contrôle à adapter à votre solution. Les journaux et sauvegardes sont des copies possibles à plusieurs endroits, pas seulement la dernière étape.

```text
Votre demande → Automatisations ↔ Base de documents
                       ↕
                  Modèle d’IA → Réponse
                       ↓
        Journaux et sauvegardes à examiner
        sur chacun de ces composants
```

Pour chaque composant, demandez le pays de stockage **et de traitement**, l’entreprise responsable, les personnes pouvant intervenir et les durées de conservation.

- **Modèle :** où partent la question et les extraits transmis pour fabriquer la réponse ?
- **Base documentaire :** où sont conservés les fichiers et les index qui permettent de les retrouver ?
- **Automatisations :** quels connecteurs reçoivent les pièces ou résultats ?
- **Journaux :** enregistrent-ils le contenu des demandes et des réponses ?
- **Sauvegardes :** quelles copies subsistent après une suppression ?

Cette grille est une proposition pratique. Elle prolonge les recommandations de l’ANSSI sur les données additionnelles, les extensions et les journaux des systèmes d’IA. [14](https://messervices.cyber.gouv.fr/documents-guides/Recommandations_de_s%C3%A9curit%C3%A9_pour_un_syst%C3%A8me_d_IA_g%C3%A9n%C3%A9rative.pdf)

## Cinq pièges à repérer

### 1. Le bon certificat, mais le mauvais service

« Notre hébergeur est certifié » ne désigne pas nécessairement la prestation achetée. Demandez le certificat, son périmètre, les activités couvertes et les responsabilités de chaque intervenant. Le contrat HDS doit notamment indiquer ce périmètre. [3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006196138/)

### 2. Le serveur français, mais des accès soumis à un droit étranger

Localisation du stockage et exposition juridique sont deux questions distinctes : le cadre HDS prévoit précisément des obligations d’information lorsque des réglementations étrangères exposent les données à un accès non autorisé. [3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006196138/) Demandez une analyse des sociétés impliquées, de leur contrôle et des accès du support. Un drapeau français ne remplace pas ces réponses.

### 3. « Code accessible » pris pour « tous les usages autorisés »

Ne confondez pas code consultable et licence libre. La DINUM rappelle que les licences libres qu’elle référence autorisent la réutilisation commerciale. [15](https://code.gouv.fr/faq/?category=Comprendre+les+licences+libres) Demandez néanmoins les licences exactes du logiciel et du modèle, puis vérifiez les conditions de votre usage et de votre distribution. Ne concluez rien à partir du seul mot « ouvert ».

### 4. L’administration technique laissée hors du contrat

En santé, l’administration et l’exploitation du système contenant les données font partie des activités d’hébergement visées par l’article R1111-9. [3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006196138/) Si c’est la mission confiée, vérifiez la couverture HDS correspondante. Pour les données personnelles, contrôlez aussi les personnes autorisées, leurs instructions et leur confidentialité. [7](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) Une habilitation d’accès et une certification ne sont pas la même chose.

### 5. ChatGPT grand public « juste pour reformuler »

La CNIL recommande de ne pas partager d’informations confidentielles ou personnelles dans un service grand public. [16](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative) La brièveté de la tâche ne change pas la nature du document envoyé. Pour un essai, préférez un texte fictif ; pour un dossier réel, utilisez uniquement le circuit préalablement validé par votre cabinet.

## Quel niveau de protection pour quel besoin ?

Cette grille aide à cadrer une décision ; elle ne constitue pas un certificat de conformité.

| Situation | Socle à vérifier | Quand renforcer ? |
| --- | --- | --- |
| **1. Cabinet comptable, dossiers clients ordinaires** | Secret professionnel, sous-traitance RGPD, accès maîtrisés et analyse des flux. Évaluez un hébergement européen avec un contrat précis. | Si les risques, les données ou les engagements clients le justifient. Le pays et le contrat ne suffisent pas à eux seuls. |
| **2. Cabinet, centre ou clinique avec hébergement externalisé de données relevant de HDS** | HDS sur les activités concernées, secret, RGPD, stockage EEE et transparence sur les accès. | Si l’analyse de risques exige une protection supplémentaire contre les lois étrangères. |
| **3. Organisation avec exigences renforcées, notamment certains acteurs publics** | Examiner le besoin de SecNumCloud, en plus du socle métier. | Vérifier le statut de l’organisme, les données, les textes applicables et les éventuelles dérogations. |

**Vous n’avez pas forcément besoin de SecNumCloud.** Ce choix doit découler du besoin et des règles applicables, pas d’une accumulation de labels.

Pour certains traitements de données d’une sensibilité particulière par les administrations de l’État, leurs opérateurs et les organismes visés, l’article 31 de la loi SREN prévoit une protection renforcée. Le décret du 14 avril 2026 et l’arrêté du 12 août 2026 précisent ce cadre : qualification ANSSI ou certification européenne reconnue équivalente par l’ANSSI. Ne généralisez pas cette obligation à toute structure de santé ou à tout organisme public. [17](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049565888) [18](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053900789) [19](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000054678082)

## La checklist avant de signer

Demandez **oui ou non, avec une preuve écrite**. « Non applicable » doit être justifié ; une réponse orale n’est pas une pièce justificative.

1. Les cinq composants du schéma et tous les sous-traitants sont-ils identifiés ?
2. Les pays de stockage, de traitement, de sauvegarde et d’accès du support sont-ils documentés ?
3. Le contrat précise-t-il les rôles, instructions et engagements de confidentialité ?
4. Les finalités autorisées et les conditions de réutilisation pour entraîner des modèles sont-elles explicites ?
5. Les durées de conservation, la restitution et la suppression des copies sont-elles définies ?
6. Les accès administrateurs sont-ils nominatifs, limités et tracés ?
7. Si HDS s’applique, les certificats valides couvrent-ils les prestations effectivement réalisées ?
8. Les transferts et risques liés aux lois étrangères sont-ils documentés avec leurs garanties ?
9. Si SecNumCloud est exigé, disposez-vous de la preuve pour le service exact acheté ?
10. Les licences permettent-elles votre usage prévu et, le cas échéant, votre distribution ?

## Retenir une règle simple

Commencez par le dossier à protéger, tracez son parcours, puis choisissez les garanties adaptées. Si le prestataire ne peut pas expliquer où passent les données et qui peut y accéder, demandez ces éléments avant de confier un dossier réel.

Un dernier contrôle avec votre responsable de la protection des données ou votre conseil permet d’appliquer cette grille à votre situation. Ce guide est proposé par Althoce.

## Textes officiels et documents de référence

Vérifications effectuées le 9 novembre 2026.

1. [ISO/IEC 27001](https://www.iso.org/fr/standard/27001)
2. [CSP L1111-8 : hébergement](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049577902)
3. [CSP R1111-9 à R1111-11](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006196138/)
4. [ANS : HDS et souveraineté](https://esante.gouv.fr/actualites/evolution-importante-des-referentiels-de-certification-et-daccreditation-de-lhebergement-de-donnees-de-sante-hds-0)
5. [ANSSI : FAQ SecNumCloud](https://cyber.gouv.fr/enjeux-technologiques/cloud/faq-qualification-secnumcloud/)
6. [RGPD : principes](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2)
7. [RGPD : responsabilités](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4)
8. [Décret HDS du 24 mars 2026](https://www.legifrance.gouv.fr/eli/decret/2026/3/24/2026-209/jo/texte)
9. [Ordonnance de 1945, article 21](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033678954)
10. [Code pénal, article 226-13](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417945)
11. [CNOEC : notice ChatGPT, page 7](https://www.experts-comptables.fr/sites/default/files/assets/files/COMMENT%20UTILISER%20CHATGPT%20-%20A4_p%C3%A0p.pdf)
12. [CSP L1110-4 : secret](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043895798)
13. [ANS : transition HDS v2](https://esante.gouv.fr/actualites/certification-hds-six-mois-pour-etre-pret)
14. [ANSSI : sécurité de l’IA](https://messervices.cyber.gouv.fr/documents-guides/Recommandations_de_s%C3%A9curit%C3%A9_pour_un_syst%C3%A8me_d_IA_g%C3%A9n%C3%A9rative.pdf)
15. [DINUM : licences libres](https://code.gouv.fr/faq/?category=Comprendre+les+licences+libres)
16. [CNIL : usages de l’IA](https://www.cnil.fr/fr/les-questions-reponses-de-la-cnil-sur-lutilisation-dun-systeme-dia-generative)
17. [Loi SREN, article 31](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049565888)
18. [Décret du 14 avril 2026](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053900789)
19. [Arrêté du 12 août 2026](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000054678082)
