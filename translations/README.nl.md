![Peekling-personages verzameld in een helder, uitnodigend landschap](../assets/peekling-community-banner.png)

# Officiële Peekling-personagepakketten

Maak kennis met de kleine personages die Peekling zijn persoonlijkheid geven.

Dit is de officiële thuisbasis voor personagepakketten die door het Peekling-project worden gemaakt en onderhouden. Elk pakket beschrijft hoe een personage eruitziet, beweegt, reageert en zich voorstelt aan een compatibele Peekling-runtime. De pakketten zijn open source, bevatten uitsluitend gegevens en hebben elk hun eigen versie.

Bezoek de [Peekling-organisatie](https://github.com/peekling) of lees de [handleiding voor het maken van pakketten](../PACK-AUTHORING.md) om te zien hoe een personage is opgebouwd.

## Wat is een personagepakket?

Een personagepakket is een kleine bundel gegevens en afbeeldingen. Het bevat geen uitvoerbaar gedrag voor het personage.

Elk officieel pakket bevat:

- een `character.json`-manifest met de identiteit, toestanden, beweging, versie en licentie van het personage
- PNG-atlassen in 1x, 2x en 4x voor verschillende schermdichtheden
- een `thumbnail.png`-voorbeeld
- een eigen `README.md`, `LICENSE` en `NOTICE`

Het manifest bevat veilige relatieve afbeeldingspaden en SHA-256-hashes voor elke atlas. Ontwikkelingsscripts, tests, bronafbeeldingen en gegenereerde QA-rapporten blijven in deze repository, buiten de grens van het gepubliceerde pakket.

## Peekling-personages

Deze tabel wordt gegenereerd op basis van de huidige pakketmetadata en het actuele npm-register. Gepubliceerde rijen linken naar hun geverifieerde npm-versie. Pakketten die nog alleen als broncode bestaan, blijven zichtbaar met het expliciete label `(niet uitgebracht)` en zonder npm-link.

<!-- PACK_ROSTER_START -->
Er zijn 25 personagepakketten gepubliceerd en via npm te installeren. Voor later vervolg worden 3 pakketten als niet uitgebracht weergegeven.

| Voorbeeld | Personage | Beschrijving | Versie | Pakket |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | Een warme bosbeer met een langzame, geruststellende tred. | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | Een rond burgermaatje dat naar voren rolt en zachtjes zakt. | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | Een snelle cyberkat met een helder vizier en rustige poten. | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | Een vriend ter grootte van een boterham die huppelt zonder een kruimel te laten vallen. | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | Een roestrode bosvriend met een heldere, avontuurlijke inslag. | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | Een slimme terracotta vos, altijd klaar voor het volgende pad. | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | Een gloeiend elementair dwaallicht dat ronddrijft waar verwondering naartoe leidt. | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | Een kleine geringde planeet die door zijn eigen heldere baan rolt. | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | Een dromerige maanvriend die een rustige kleine baan volgt. | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | Een konijntje met lavendelkleurige oren en zachte, verende stappen. | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | Een mintgroene kikker die vrolijk hoppend de pagina oversteekt. | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | Een nieuwsgierige mol die graaft, voortschuift en glimlachend opduikt. | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | Een knusse sushivriend die zachtjes met zijn rijstlijfje schuifelt. | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | Een kosmisch wezen dat zachtjes tussen kleine werelden beweegt. | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | Een kleine ronde robot met een strak scherm en precieze stapjes. | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | Een nieuwsgierige kittenvos die aanwijzers volgt en kleine successen viert. | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | Een warmgouden corgi die elk klein feestje binnen draaft. | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | Een wollig lammetje dat op wolkzachte voeten naar voren springt. | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | Een bedachtzame geleerde-uil die tussen heldere ideeën fladdert. | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | Een uurwerkkever die bedachtzaam voortrolt. | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | Een nieuwsgierige wasbeer die op zijn tenen op elke glimmende verrassing afgaat. | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | Een zonnige metgezel die met een warme, stralende puls zweeft. | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | Een aarde in zakformaat die zweeft met een rustige, gestage draai. | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | Een opgewekte tacovriend die snel stapt zonder iets te morsen. | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | Een vrolijke rondtrekkende cactus met een tikje westernbranie. | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | Een dapper klein slijmfiguurtje met genoeg veerkrachtige moed voor de hele kamer. | `0.1.0` (niet uitgebracht) | `@peekling/pack-vali` (niet uitgebracht) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | Een in een sjaal gewikkelde pinguïn die zacht heen en weer waggelt. | `0.1.0` (niet uitgebracht) | `@peekling/pack-waddle` (niet uitgebracht) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | Een levendige pizzapunt die zelfverzekerd en een tikje schuin voortschuift. | `0.1.0` (niet uitgebracht) | `@peekling/pack-zesty` (niet uitgebracht) |
<!-- PACK_ROSTER_END -->

Voer `npm run roster` uit nadat pakketmetadata zijn gewijzigd of na een release. `npm run roster:check` controleert de publicatiestatus op npm en houdt elk niet-uitgebracht pakket duidelijk gelabeld.

## Een pakket gebruiken

Wanneer een personage in de tabel staat, volg je de pakketlink naar npm voor de geverifieerde installeerbare versie. In de bronmap staan de validatieopdracht en licentiegegevens. `character.json` blijft de gezaghebbende bron voor de toestanden, beweging, illustraties en mogelijkheden van het personage.

Alleen rijen met een npm-link zijn geverifieerd als installeerbaar. Een rij `(niet uitgebracht)` verwijst naar de broncode in de repository voor later vervolg en beweert niet dat het pakket beschikbaar is. Bronmappen kunnen ook nieuwer werk bevatten dan npm. De Peekling-runtime staat los van deze personagepakketten en laadt het manifest en de atlas waarnaar het verwijst.

De werkruimte in de hoofdmap van de repository is privé en kan niet worden gepubliceerd. Alleen de afzonderlijke `packages/pack-*`-werkruimten vormen publicatiegrenzen.

## Een personage maken

Heb je een idee voor een nieuwe kleine vriend? De creatieve kern van een pakket bestaat uit drie delen:

- `character.json` beschrijft het personage, de animatietoestanden, beweging, versie, licentie en atlasbestanden.
- `atlas-1x.png` is de minimale afbeeldingsatlas in het algemene pakketcontract. Een officieel pakket moet ook bijpassende varianten `atlas-2x.png` en `atlas-4x.png` bevatten.
- `thumbnail.png` is de kleine voorbeeldafbeelding die in galerijen en pakketoverzichten wordt getoond.

Een officieel publiceerbaar pakket heeft ook `package.json`, `README.md`, `LICENSE`, `NOTICE` en elke atlas uit het manifest nodig. Begin met de [handleiding voor het maken van pakketten](../PACK-AUTHORING.md) en gebruik [Peeks pakket](../packages/pack-peek) als volledig bronvoorbeeld.

Verbeterde hulpmiddelen voor het maken van personages worden hier gelinkt zodra ze zijn uitgebracht. Tot die tijd zijn de handleiding, de pakketmanifesten en de huidige officiële pakketten de gezaghebbende bronnen.

## Bijdragen

Zorgvuldige oplossingen en gerichte verbeteringen zijn welkom. Wil je een nieuw officieel personage of een grotere wijziging voorstellen, [open dan eerst een issue](https://github.com/peekling/peekling-characters/issues), zodat we het eens kunnen worden over de reikwijdte, de herkomst van het beeldmateriaal en de licentie.

Je hebt Node.js 22 of hoger nodig. De werkruimte vermeldt npm 11.19.0 als pakketbeheerder.

1. Open een issue voor een nieuw personage, zodat de naam, plaats in de officiële verzameling, het eigendom van het beeldmateriaal en de licentie kunnen worden besproken voordat je veel werk verricht. Wijzigingen aan een bestaand pakket worden alleen geaccepteerd nadat de code-eigenaar of aangewezen beoordelaar ze heeft goedgekeurd.
2. Fork en kloon de repository en installeer vervolgens de afhankelijkheden van de werkruimte met `npm install`.
3. Kies een nieuwe identificatiecode in kleine letters, zoals `my-friend`. Deze mag niet gelijk zijn aan een bestaande personagemap, manifestnaam of npm-pakketnaam. Gebruik [Peeks volledige bronpakket](../packages/pack-peek) als structureel voorbeeld en maak `packages/pack-my-friend`.
4. Bouw de publiceerbare pakketinhoud:

   - `package.json` geeft het pakket de naam `@peekling/pack-my-friend` en vermeldt een semantische versie, openbare toegang, licentie, repositorymap, build- en testscripts en de exacte openbare bestanden.
   - `character.json` gebruikt formaat 1 en dezelfde naam, versie en licentie. Geef het een titel, auteur, beschrijving, 1x/2x/4x atlasrecords, animatiestatussen met geldige frames en timings, alle acht bewegingsrichtingen en een positieve standaardschaal.
   - `thumbnail.png` is een geldige 64x64 PNG. Het huidige officiële raster gebruikt logische cellen van 64 pixels, 16 kolommen en 3 rijen, dus de drie atlassen zijn 1024x192, 2048x384 en 4096x768. Hun opgegeven dichtheid, celgrootte, afmetingen en SHA-256 hashes moeten overeenkomen.
   - Voeg `README.md`, `LICENSE`, `NOTICE`, een gerichte test en elke atlas uit het manifest toe. Houd bronmateriaal en ontwikkelhulpmiddelen buiten de `files`-lijst.
   - Voeg voor het huidige handmatige beeldproductieproces het personage toe aan `scripts/build-character-roster.mjs` met de vereiste metadata en bewegingsgegevens. Lever dezelfde broninvoer voor alleen de repository als bij de bestaande pakketten, zodat `npm run build` de atlassen kan reproduceren in plaats van handmatig bewerkte uitvoer te accepteren.

5. Voer de gerichte pakkettest en bouwopdracht uit. Voor Peek zijn de vergelijkbare opdrachten:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. Als de pakketmetadata zijn gewijzigd, genereer je deze tabel opnieuw met `npm run roster` en voer je daarna de volledige repositorycontrole uit met `npm run check`.
7. Voer `npm run changeset` uit en neem elk betrokken pakket op. Voor elke bestandswijziging in een pakketmap is een versiebesluit nodig, waaronder beeldmateriaal, JSON, metadata, documentatie, tests en bronbestanden. Kies zelf het niveau:

   - `patch` voor compatibele oplossingen, correcties of aanpassingen
   - `minor` voor betekenisvolle achterwaarts compatibele toevoegingen of substantiële creatieve updates
   - `major` voor een incompatibele wijziging, vervanging of verwijdering

   Automatisering raadt nooit het niveau op basis van de grootte of het soort wijziging.

8. Open een pull request waarin je het personage, de herkomst en licentie van het beeldmateriaal, de wijzigingen en de keuze voor het versieniveau toelicht.

Voor de beoordeling vereist de CI van de pull request een releaseplan voor elk gewijzigd pakket. Daarna controleert deze het manifestcontract en de toestandsdefinities, unieke identificatiecodes, vrije npm-namen voor nieuwe pakketten, veilige afbeeldingspaden en hashes, PNG-integriteit, de grootte van miniaturen, het bestaan en de schaalgeometrie van de 1x/2x/4x-atlassen, tests, reproduceerbare builds, groottelimieten, licenties en de exacte bestanden in elke npm-packagesimulatie. Deze controles voorkomen onbedoelde conflicten en verpakkingsfouten. Menselijke beoordelaars beslissen nog steeds of een personage of wijziging in de officiële verzameling thuishoort.

Nadat een gevalideerde wijziging `main` bereikt, bereidt Changesets een afzonderlijke versie-pull request voor beoordeling voor. De eerste publicatie op npm blijft een bewuste actie van de beheerder. Automatische OIDC-publicatie kan pas worden ingeschakeld wanneer de eerste pakketten bestaan en elk pakket de publicatieworkflow van deze repository vertrouwt. Totdat dit opstartproces is voltooid, garandeert de broncode in de repository niet dat een pakket op npm beschikbaar is. Zie [releasevoorbereiding](../RELEASING.md) voor de volledige beheerdersprocedure.

Deze repository bevat de officiële, beheerde verzameling Peekling-pakketten en is geen wereldwijde communitycatalogus. Makers kunnen compatibele pakketten van derden publiceren vanuit hun eigen pakket of statische hostingomgeving, met een geldige openbare licentie.

## Licenties en naamsvermelding

Repositoryhulpmiddelen, tests en documentatie vallen onder de [Apache-2.0](../LICENSE)-licentie. Alle 28 huidige officiële personagepakketten vermelden eveneens Apache-2.0 en hebben hun eigen `LICENSE`- en `NOTICE`-bestanden.

Bij herdistributie moeten de toepasselijke licentie- en kennisgevingsvoorwaarden van elk pakket worden gevolgd. De hulpmiddelenlicentie verleent geen rechten op de naam Peekling, het logo, de officiële mascotte of andere onderscheidende merkelementen, tenzij een specifieke assetlicentie anders bepaalt. Zie [licenties en naamsvermelding](../LICENSING.md), [NOTICE](../NOTICE) en [AUTHORS](../AUTHORS) voor de volledige gegevens.

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![Een smalle strook gras, wilde bloemen, gebladerte en een kronkelend pad](../assets/peekling-ground-footer-v1.png)
