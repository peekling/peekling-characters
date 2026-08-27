![Personnages Peekling réunis dans un paysage lumineux et accueillant](../assets/peekling-community-banner.png)

# Packs de personnages officiels Peekling

Rencontrez les petits personnages qui donnent à Peekling sa personnalité.

Il s'agit du site officiel des packs de personnages créés et maintenus par le projet Peekling. Chaque pack décrit à quoi ressemble un personnage, se déplace, réagit et se présente à un runtime Peekling compatible. Les packs sont open source, contiennent uniquement des données et sont versionnés indépendamment.

Visitez le [Organisation Peekling](https://github.com/peekling) ou lisez le [guide de création de packs](../PACK-AUTHORING.md) pour voir comment un personnage est constitué.

## Qu'est-ce qu'un pack de personnages ?

Un pack de personnages est un petit ensemble de données et d'images. Il ne contient pas de comportement de caractère exécutable.

Chaque pack officiel comprend :

- a `character.json` manifeste avec l'identité, les états, le mouvement, la version et la licence du personnage
- Atlas 1x, 2x et 4x PNG pour différentes densités d'affichage
- a `thumbnail.png` aperçu
- ses propres `README.md`, `LICENSE` et `NOTICE`

Le manifeste enregistre les chemins d'image relatifs sûrs et SHA-256 hachages pour chaque atlas. Les scripts de développement, les tests, les illustrations sources et les rapports d'assurance qualité générés restent dans ce référentiel et en dehors des limites du package publié.

## Peekling caractères

Ce tableau est généré à partir des métadonnées du package actuel et du registre en direct npm. Les lignes publiées renvoient à leur version vérifiée npm. Les packs qui sont toujours uniquement source restent visibles avec une étiquette explicite `(non publié)` et aucun lien npm.

<!-- PACK_ROSTER_START -->
25 packs de personnages sont publiés et installables à partir de npm. 3 packs sont présentés comme inédits pour un suivi futur.

| Aperçu | Caractère | Description | Version | Package |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | Un ours des forêts chaleureux au bois lent et rassurant. | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | Un copain burger rond qui roule en avant et s'installe doucement. | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | Un cyber-chat rapide avec une visière brillante et des pattes silencieuses. | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | Un ami de la taille d'une tartine qui saute sans en laisser tomber une miette. | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | Un ami de la forêt rouge rouille avec une touche brillante et aventureuse. | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | Un renard en terre cuite intelligent toujours prêt pour le prochain trail. | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | Un feu follet élémentaire brillant dérivant partout où l'émerveillement mène. | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | Une petite planète aux anneaux roulant sur sa propre orbite brillante. | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | Un ami lunaire rêveur traçant une petite orbite tranquille. | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | Un lapin aux oreilles lavande aux pas doux et élastiques. | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | Une grenouille vert menthe qui traverse la page en sautillant joyeux. | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | Une taupe curieuse qui creuse, se déplace et surgit en souriant. | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | Un ami sushi douillet avec un doux mélange de corps de riz. | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | Une créature cosmique qui évolue doucement entre les petits mondes. | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | Un petit robot rond avec un écran sympa et de petites étapes précises. | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | Un chaton-renard curieux qui suit les pointeurs et célèbre les petites victoires. | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | Un corgi doré et chaud qui trotte dans chaque petite fête. | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | Un agneau laineux qui bondit en avant sur des pieds doux comme les nuages. | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | Un hibou érudit réfléchi qui flotte entre des idées brillantes. | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | Un scarabée mécanique qui se déplace avec un but prudent. | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | Un raton laveur curieux qui marche sur la pointe des pieds vers chaque surprise brillante. | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | Un compagnon ensoleillé qui flotte avec un pouls chaud et radieux. | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | Une Terre de poche glissant avec une rotation calme et régulière. | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | Un ami taco brillant qui avance rapidement sans rien renverser. | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | Un joyeux vagabond de cactus avec une petite fanfaronnade occidentale. | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | Un petit slime courageux dont le courage rebondissant remplit la pièce. | `0.1.0` (non publié) | `@peekling/pack-vali` (non publié) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | Un pingouin enveloppé dans une écharpe qui se dandine doucement d'un côté à l'autre. | `0.1.0` (non publié) | `@peekling/pack-waddle` (non publié) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | Une tranche de pizza animée qui se déplace avec une inclinaison confiante. | `0.1.0` (non publié) | `@peekling/pack-zesty` (non publié) |
<!-- PACK_ROSTER_END -->

Exécutez `npm run roster` après avoir modifié les métadonnées du package ou après une version. `npm run roster:check` vérifie l'état de publication de npm et conserve chaque package inédit clairement étiqueté.

## Utiliser un pack

Lorsqu'un caractère apparaît dans le tableau, suivez le lien de son package vers npm pour la version installable vérifiée. Son répertoire source documente les enregistrements de commande de validation et de licence, tandis que `character.json` reste la source de vérité pour les états, les mouvements, les illustrations et les capacités du personnage.

Seules les lignes avec un lien npm ont été vérifiées comme installables. Une ligne `(non publié)` pointe vers la source du référentiel pour un suivi futur et ne constitue pas une revendication de disponibilité. Les répertoires sources peuvent également contenir des travaux plus récents que npm. Le runtime Peekling est distinct de ces packs de caractères et est responsable du chargement du manifeste et du rendu de son atlas référencé.

L'espace de travail à la racine du référentiel est privé et ne peut pas être publié. Seuls les espaces de travail `packages/pack-*` individuels constituent des limites de version.

## Créer un personnage

Vous avez une idée pour un nouveau petit ami ? Le noyau créatif d’un pack comprend trois parties :

- `character.json` décrit le personnage, ses états d'animation, ses mouvements, sa version, sa licence et ses fichiers atlas.
- `atlas-1x.png` est l'atlas d'œuvres d'art minimum dans le contrat général du pack. Un pack officiel doit également inclure les variantes `atlas-2x.png` et `atlas-4x.png` correspondantes.
- `thumbnail.png` est le petit aperçu affiché dans les galeries et les listes de packages.

Un pack publiable officiel a également besoin de `package.json`, `README.md`, `LICENSE`, `NOTICE` et de chaque atlas nommé par son manifeste. Commencez par le [guide de création de packs](../PACK-AUTHORING.md) et utilisez [Le forfait Peek](../packages/pack-peek) comme exemple de source complet.

Les outils de création améliorés seront liés ici lors de leur sortie. En attendant, le guide de création, les manifestes des packages et les packs officiels actuels sont la source de vérité.

## Contribuer

Des correctifs réfléchis et des améliorations ciblées sont les bienvenus. Si vous souhaitez proposer un nouveau personnage officiel ou un changement plus important, veuillez d'abord faire [ouvrir un sujet](https://github.com/peekling/peekling-characters/issues) afin que nous puissions nous mettre d'accord sur la portée, la provenance de l'œuvre d'art et la licence.

Vous aurez besoin de Node.js 22 ou version ultérieure. L'espace de travail enregistre npm 11.19.0 comme gestionnaire de packages.

1. Ouvrez un numéro pour un nouveau personnage afin que son nom, sa place dans la collection officielle, la propriété de l'œuvre d'art et sa licence puissent être discutés avant de faire beaucoup de travail. Les modifications apportées à un pack existant ne sont acceptées qu'après approbation du propriétaire du code ou du réviseur désigné.
2. Fork et clonez le référentiel, puis installez les dépendances de l'espace de travail avec `npm install`.
3. Choisissez un nouvel identifiant minuscule tel que `my-friend`. Il ne doit pas dupliquer un répertoire de caractères, un nom de manifeste ou un package npm. Utilisez [Package source complet de Peek](../packages/pack-peek) comme exemple structurel et créez `packages/pack-my-friend`.
4. Construisez la limite publiable :

   - `package.json` noms `@peekling/pack-my-friend`, déclare une version sémantique, un accès public, une licence, un répertoire de référentiel, des scripts de construction et de test et les fichiers publics exacts.
   - `character.json` utilise le format 1 et les mêmes nom, version et licence. Donnez-lui un titre, un auteur, une description, des enregistrements d'atlas 1x/2x/4x, des états d'animation avec des images et des timings valides, les huit directions de mouvement et une échelle par défaut positive.
   - `thumbnail.png` est un 64x64 PNG valide. La grille officielle actuelle utilise des cellules logiques de 64 pixels, 16 colonnes et 3 lignes, les trois atlas sont donc de 1 024 x 192, 2 048 x 384 et 4 096 x 768. Leur densité déclarée, leur taille de cellule, leurs dimensions et leurs hachages SHA-256 doivent correspondre.
   - Ajoutez `README.md`, `LICENSE`, `NOTICE`, un test ciblé et chaque atlas référencé par le manifeste. Gardez les arts sources et les aides au développement en dehors de la liste `files`.
   - Pour le pipeline artistique manuel actuel, ajoutez le personnage à `scripts/build-character-roster.mjs` avec ses métadonnées et enregistrements de mouvement requis. Fournissez les mêmes entrées source réservées au référentiel que celles utilisées par les packs existants afin que `npm run build` puisse reproduire les atlas plutôt que d'accepter une sortie éditée manuellement.

5. Exécutez le test et la compilation du package ciblé. Pour Peek, les commandes équivalentes sont :

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. Si les métadonnées du package ont changé, régénérez cette table avec `npm run roster`, puis exécutez la porte complète du référentiel avec `npm run check`.
7. Exécutez `npm run changeset` et incluez chaque pack concerné. Chaque modification de fichier dans un répertoire de pack nécessite une décision de version, y compris les illustrations, JSON, les métadonnées, les documents, les tests et les fichiers sources. Choisissez vous-même le niveau :

   - `patch` pour les correctifs, corrections ou réglages compatibles
   - `minor` pour des ajouts significatifs rétrocompatibles ou des mises à jour créatives substantielles
   - `major` pour un changement, un remplacement ou une suppression avec rupture

   L'automatisation ne devine jamais le niveau à partir de la taille ou du type de votre modification.

8. Ouvrez une pull request qui explique le caractère, la provenance et la licence de son art, ce qui a changé et pourquoi le niveau de version choisi est approprié.

Avant l'examen, le CI pull-request nécessite un plan de publication pour chaque pack modifié. Il vérifie ensuite le contrat manifeste et les définitions d'état, l'unicité de l'identifiant, les noms npm inutilisés pour les nouveaux packs, les chemins et hachages d'image sécurisés, l'intégrité PNG, la taille des vignettes, l'existence de l'atlas 1x/2x/4x et la géométrie à l'échelle, les tests, les versions reproductibles, les limites de taille, les licences et les fichiers exacts dans chaque essai à sec du package npm. Ces contrôles évitent les conflits accidentels et les erreurs d'emballage. Les critiques humains décident toujours si un personnage ou un changement appartient à la collection officielle.

Une fois qu'une modification validée atteint `main`, Changesets prépare une demande d'extraction de version distincte pour examen. La première publication npm reste une action délibérée du responsable. La publication automatique OIDC ne peut être activée qu'une fois que les packages initiaux existent et que chaque package fait confiance au workflow de publication de ce référentiel. Jusqu'à ce que ce bootstrap soit terminé, la source du référentiel ne constitue pas une promesse qu'un package est disponible à partir de npm. Voir [préparation de la sortie](../RELEASING.md) pour le flux complet du responsable.

Ce référentiel est l'hébergeur des packs officiels Peekling, et non un catalogue communautaire mondial. Les créateurs peuvent publier des packs tiers compatibles à partir de leur propre package ou des limites d'hébergement statique avec une licence publique valide.

## Licences et attribution

Les outils, les tests et la documentation du référentiel sont sous licence [Apache-2.0](../LICENSE). Les 28 packs de personnages officiels actuels déclarent également Apache-2.0 et portent leurs propres fichiers `LICENSE` et `NOTICE`.

La redistribution doit respecter les conditions de licence et de notification applicables pour chaque pack. Le nom Peekling, le logo, la mascotte officielle et toute autre identité de marque distinctive ne sont pas accordés par la licence d'outillage, sauf indication contraire dans une licence d'actif spécifique. Voir [licence et attribution](../LICENSING.md), [NOTICE](../NOTICE) et [AUTHORS](../AUTHORS) pour les enregistrements complets.

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![Une étroite bande d'herbe, de fleurs sauvages, de feuillage et un chemin sinueux](../assets/peekling-ground-footer-v1.png)
