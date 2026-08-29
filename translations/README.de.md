![Peekling-Charaktere versammelten sich in einer hellen, einladenden Landschaft](https://cdn.peekling.com/v1/community/peekling-community-banner.png)

# Offizielle Peekling Charakterpakete

Lernen Sie die kleinen Charaktere kennen, die Peekling seine Persönlichkeit verleihen.

Dies ist das offizielle Zuhause für Charakterpakete, die vom Peekling-Projekt erstellt und verwaltet werden. Jedes Paket beschreibt, wie ein Charakter aussieht, sich bewegt, reagiert und sich einer kompatiblen Peekling-Laufzeit vorstellt. Die Pakete sind Open Source, nur für Daten und unabhängig versioniert.

Besuchen Sie die [Peekling Organisation](https://github.com/peekling) oder lesen Sie die [Leitfaden zur Paketerstellung](../PACK-AUTHORING.md), um zu sehen, wie ein Charakter zusammengesetzt ist.

## Was ist ein Charakterpaket?

Ein Zeichenpaket ist ein kleines Bündel von Daten und Bildern. Es enthält kein ausführbares Zeichenverhalten.

Jedes offizielle Paket enthält:

- a `character.json` Manifest mit der Identität, den Zuständen, der Bewegung, der Version und der Lizenz des Charakters
- 1x, 2x und 4x PNG Atlanten für unterschiedliche Anzeigedichten
- a `thumbnail.png` Vorschau
- sein eigenes `README.md`, `LICENSE` und `NOTICE`

Das Manifest zeichnet sichere relative Bildpfade und SHA-256 Hashes für jeden Atlas auf. Entwicklungsskripte, Tests, Quellgrafiken und generierte QA-Berichte bleiben in diesem Repository und außerhalb der veröffentlichten Paketgrenze.

## Peekling Zeichen

Diese Tabelle wird aus den aktuellen Paketmetadaten und der Live-Registrierung npm generiert. Veröffentlichte Zeilen verweisen auf ihre verifizierte npm-Version. Pakete, die immer noch nur aus der Quelle stammen, bleiben mit einem expliziten `(nicht veröffentlicht)`-Label und keinem npm-Link sichtbar.

<!-- PACK_ROSTER_START -->
25 Charakterpakete sind ab npm veröffentlicht und installierbar. 3 Pakete werden für zukünftige Nachverfolgungen als unveröffentlicht angezeigt.

| Vorschau | Zeichen | Beschreibung | Version | Paket |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | Ein warmer Waldbär mit einem langsamen, beruhigenden Schlag. | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | Ein runder Burger-Kumpel, der sich nach vorne rollt und sich sanft niederlässt. | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | Eine schnelle Cyberkatze mit hellem Visier und ruhigen Pfoten. | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | Ein toastgroßer Freund, der hüpft, ohne einen Krümel fallen zu lassen. | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | Ein rostroter Waldfreund mit einer hellen, abenteuerlichen Ader. | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | Ein cleverer Terrakotta-Fuchs, immer bereit für den nächsten Trail. | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | Ein leuchtender elementarer Irrlicht, der dahin schwebt, wohin das Wunder ihn führt. | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | Ein winziger Ringplanet, der durch seine eigene helle Umlaufbahn rollt. | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | Ein verträumter Mondfreund, der eine ruhige kleine Umlaufbahn verfolgt. | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | Ein Hase mit Lavendelohren und weichen, federnden Schritten. | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | Ein mintgrüner Frosch, der fröhlich hüpfend über die Seite läuft. | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | Ein neugieriger Maulwurf, der gräbt, herumrutscht und lächelnd auftaucht. | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | Ein gemütlicher Sushi-Freund mit einem sanften Reis-Körper-Shuffle. | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | Eine kosmische Kreatur, die sanft zwischen kleinen Welten hin- und herwechselt. | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | Ein runder kleiner Roboter mit coolem Display und präzisen kleinen Schritten. | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | Ein neugieriger Kätzchenfuchs, der den Zeigern folgt und kleine Siege feiert. | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | Ein warmgoldener Corgi, der zu jeder kleinen Feier trottet. | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | Ein wolliges Lamm, das auf wolkenweichen Füßen vorwärts springt. | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | Eine nachdenkliche Gelehrte-Eule, die zwischen hellen Ideen hin und her pendelt. | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | Ein Uhrwerkkäfer, der mit Bedacht dahinrollt. | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | Ein neugieriger Waschbär, der auf Zehenspitzen jeder glänzenden Überraschung entgegengeht. | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | Ein sonniger Begleiter, der mit einem warmen, strahlenden Puls schwebt. | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | Eine Erde im Taschenformat, die mit einer ruhigen, gleichmäßigen Drehung gleitet. | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | Ein aufgeweckter Taco-Freund, der schnelle Schritte macht, ohne etwas zu verschütten. | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | Ein fröhlicher Kaktuswanderer mit einem kleinen Western-Eindruck. | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | Ein mutiger kleiner Schleim, dessen lebhafter Mut den Raum erfüllt. | `0.1.0` (nicht veröffentlicht) | `@peekling/pack-vali` (nicht veröffentlicht) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | Ein mit einem Schal umwickelter Pinguin, der sanft hin und her watschelt. | `0.1.0` (nicht veröffentlicht) | `@peekling/pack-waddle` (nicht veröffentlicht) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | Ein lebhaftes Pizzastück, das mit souveräner Neigung dahinrollt. | `0.1.0` (nicht veröffentlicht) | `@peekling/pack-zesty` (nicht veröffentlicht) |
<!-- PACK_ROSTER_END -->

Führen Sie `npm run roster` aus, nachdem Sie Paketmetadaten geändert haben oder nach einer Veröffentlichung. `npm run roster:check` überprüft den Veröffentlichungsstatus von npm und sorgt dafür, dass jedes unveröffentlichte Paket deutlich gekennzeichnet ist.

## Verwendung einer Packung

Wenn ein Zeichen in der Tabelle erscheint, folgen Sie seinem Paketlink zu npm für die verifizierte installierbare Version. Sein Quellverzeichnis dokumentiert die Validierungsbefehls- und Lizenzdatensätze, während `character.json` die Quelle der Wahrheit für die Zustände, Bewegungen, Grafiken und Fähigkeiten des Charakters bleibt.

Nur Zeilen mit einem npm-Link wurden als installierbar verifiziert. Eine `(nicht veröffentlicht)`-Zeile verweist auf die Repository-Quelle für zukünftige Folgemaßnahmen und stellt keinen Verfügbarkeitsanspruch dar. Quellverzeichnisse können auch neuere Werke als npm enthalten. Die Peekling-Laufzeit ist von diesen Zeichenpaketen getrennt und für das Laden des Manifests und das Rendern des referenzierten Atlas verantwortlich.

Der Arbeitsbereich im Repository-Stammverzeichnis ist privat und kann nicht veröffentlicht werden. Nur die einzelnen `packages/pack-*` Arbeitsbereiche sind Releasegrenzen.

## Erstelle einen Charakter

Haben Sie eine Idee für einen neuen kleinen Freund? Der kreative Kern einer Packung besteht aus drei Teilen:

- `character.json` beschreibt den Charakter, seine Animationszustände, Bewegung, Version, Lizenz und Atlasdateien.
- `atlas-1x.png` ist der Mindest-Artwork-Atlas im allgemeinen Paketvertrag. Ein offizielles Paket muss auch passende `atlas-2x.png`- und `atlas-4x.png`-Varianten enthalten.
- `thumbnail.png` ist die kleine Vorschau, die in Galerien und Paketlisten angezeigt wird.

Ein offizielles veröffentlichungsfähiges Paket benötigt außerdem `package.json`, `README.md`, `LICENSE`, `NOTICE` und jeden in seinem Manifest genannten Atlas. Beginnen Sie mit [Leitfaden zur Paketerstellung](../PACK-AUTHORING.md) und verwenden Sie [Peeks Paket](../packages/pack-peek) als vollständiges Quellbeispiel.

Erweiterte Erstellungstools werden hier verlinkt, sobald sie veröffentlicht werden. Bis dahin sind der Autorenleitfaden, die Paketmanifeste und die aktuellen offiziellen Pakete die Quelle der Wahrheit.

## Mitwirken

Durchdachte Korrekturen und gezielte Verbesserungen sind willkommen. Wenn Sie einen neuen offiziellen Charakter oder eine größere Änderung vorschlagen möchten, [ein Problem eröffnen](https://github.com/peekling/peekling-characters/issues) bitte zuerst, damit wir uns über Umfang, Herkunft des Bildmaterials und Lizenzierung einigen können.

Sie benötigen Node.js 22 oder höher. Der Arbeitsbereich zeichnet npm 11.19.0 als seinen Paketmanager auf.

1. Eröffnen Sie ein Problem für einen neuen Charakter, damit sein Name, sein Platz in der offiziellen Sammlung, der Besitz des Kunstwerks und die Lizenz besprochen werden können, bevor Sie viel Arbeit leisten. Änderungen an einem vorhandenen Paket werden erst akzeptiert, nachdem der Code-Eigentümer oder der designierte Prüfer sie genehmigt hat.
2. Forken und klonen Sie das Repository und installieren Sie dann die Arbeitsbereichsabhängigkeiten mit `npm install`.
3. Wählen Sie eine neue Kleinbuchstaben-ID wie `my-friend`. Es darf kein Zeichenverzeichnis, Manifestnamen oder npm-Paket duplizieren. Verwenden Sie [Das vollständige Quellpaket von Peek](../packages/pack-peek) als Strukturbeispiel und erstellen Sie `packages/pack-my-friend`.
4. Erstellen Sie die veröffentlichungsfähige Grenze:

   - `package.json` benennt `@peekling/pack-my-friend`, deklariert eine semantische Version, öffentlichen Zugriff, Lizenz, Repository-Verzeichnis, Build- und Testskripte und die genauen öffentlichen Dateien.
   - `character.json` verwendet Format 1 und denselben Namen, dieselbe Version und dieselbe Lizenz. Geben Sie einen Titel, einen Autor, eine Beschreibung, 1x/2x/4x-Atlasdatensätze, Animationszustände mit gültigen Frames und Timings, alle acht Bewegungsrichtungen und eine positive Standardskala an.
   - `thumbnail.png` ist ein gültiges 64x64 PNG. Das aktuelle offizielle Raster verwendet logische Zellen mit 64 Pixeln, 16 Spalten und 3 Zeilen, sodass die drei Atlanten 1024 x 192, 2048 x 384 und 4096 x 768 sind. Ihre angegebene Dichte, Zellengröße, Abmessungen und SHA-256-Hashes müssen übereinstimmen.
   - Fügen Sie `README.md`, `LICENSE`, `NOTICE`, einen fokussierten Test und jeden Atlas hinzu, auf den im Manifest verwiesen wird. Halten Sie Quellgrafiken und Entwicklungshelfer außerhalb der `files`-Liste.
   - Für die aktuelle manuelle Kunstpipeline fügen Sie den Charakter mit den erforderlichen Metadaten und Bewegungsdatensätzen zu `scripts/build-character-roster.mjs` hinzu. Stellen Sie dieselben reinen Repository-Quelleingaben bereit, die von den vorhandenen Paketen verwendet werden, damit `npm run build` die Atlanten reproduzieren kann, anstatt handbearbeitete Ausgaben zu akzeptieren.

5. Führen Sie den fokussierten Pakettest und -aufbau aus. Für Peek lauten die entsprechenden Befehle:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. Wenn sich die Paketmetadaten geändert haben, generieren Sie diese Tabelle mit `npm run roster` neu und führen Sie dann das vollständige Repository-Gate mit `npm run check` aus.
7. Führen Sie `npm run changeset` aus und schließen Sie alle betroffenen Pakete ein. Für jede Dateiänderung in einem Paketverzeichnis ist eine Versionsentscheidung erforderlich, einschließlich Grafiken, JSON, Metadaten, Dokumente, Tests und Quelldateien. Wählen Sie das Level selbst:

   - `patch` für kompatible Korrekturen, Korrekturen oder Optimierungen
   - `minor` für sinnvolle abwärtskompatible Ergänzungen oder umfangreiche kreative Aktualisierungen
   - `major` für eine grundlegende Änderung, einen Ersatz oder eine Entfernung

   Die Automatisierung errät das Niveau niemals anhand der Größe oder Art Ihrer Änderung.

8. Öffnen Sie eine Pull-Anfrage, die den Charakter, die Herkunft und die Lizenz des Kunstwerks erläutert, was sich geändert hat und warum die gewählte Versionsstufe angemessen ist.

Vor der Überprüfung erfordert Pull-Request CI einen Release-Plan für jedes geänderte Paket. Anschließend überprüft es die Manifestvertrags- und Statusdefinitionen, die Eindeutigkeit der Bezeichner, nicht verwendete npm-Namen für neue Pakete, sichere Bildpfade und Hashes, PNG-Integrität, Miniaturbildgröße, 1x/2x/4x-Atlas-Existenz und Skalierungsgeometrie, Tests, reproduzierbare Builds, Größenbeschränkungen, Lizenzierung und die genauen Dateien in jedem npm-Paket im Trockenlauf. Diese Kontrollen verhindern versehentliche Konflikte und Verpackungsfehler. Ob ein Charakter oder eine Veränderung in die offizielle Sammlung gehört, entscheiden immer noch menschliche Prüfer.

Nachdem eine validierte Änderung `main` erreicht, bereitet Changesets eine separate Versions-Pull-Anfrage zur Überprüfung vor. Die erste npm-Veröffentlichung bleibt eine bewusste Aktion des Betreuers. Die automatische OIDC-Veröffentlichung kann erst aktiviert werden, nachdem die ersten Pakete vorhanden sind und jedes Paket dem Veröffentlichungsworkflow dieses Repositorys vertraut. Bis dieser Bootstrap abgeschlossen ist, ist die Repository-Quelle kein Versprechen, dass ein Paket ab npm verfügbar ist. Den vollständigen Betreuerablauf finden Sie unter [Release-Vorbereitung](../RELEASING.md).

Dieses Repository ist die kuratierte Heimat für offizielle Peekling-Pakete, kein globaler Community-Katalog. Ersteller können mit einer gültigen öffentlichen Lizenz kompatible Pakete von Drittanbietern aus ihren eigenen Paketen oder statischen Hosting-Grenzen veröffentlichen.

## Lizenzierung und Namensnennung

Repository-Tools, Tests und Dokumentation sind unter [Apache-2.0](../LICENSE) lizenziert. Alle 28 aktuellen offiziellen Charakterpakete deklarieren außerdem Apache-2.0 und enthalten ihre eigenen `LICENSE`- und `NOTICE`-Dateien.

Die Weiterverbreitung muss den geltenden Lizenz- und Hinweisbedingungen für jedes Paket entsprechen. Der Peekling-Name, das Logo, das offizielle Maskottchen und andere unverwechselbare Markenidentitäten werden nicht durch die Werkzeuglizenz gewährt, es sei denn, in einer bestimmten Asset-Lizenz ist etwas anderes festgelegt. Die vollständigen Aufzeichnungen finden Sie unter [Lizenzierung und Namensnennung](../LICENSING.md), [NOTICE](../NOTICE) und [AUTHORS](../AUTHORS).

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![Ein schmaler Streifen Gras, Wildblumen, Laub und ein gewundener Pfad](https://cdn.peekling.com/v1/community/peekling-ground-footer-v1.png)
