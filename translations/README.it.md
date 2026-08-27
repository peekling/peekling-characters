![Personaggi Peekling riuniti in un paesaggio luminoso e accogliente](../assets/peekling-community-banner.png)

# Pacchetti di personaggi ufficiali Peekling

Incontra i piccoli personaggi che danno a Peekling la sua personalità.

Questa è la sede ufficiale dei pacchetti di personaggi realizzati e gestiti dal progetto Peekling. Ogni pacchetto descrive l'aspetto, i movimenti, le reazioni di un personaggio e si presenta a un runtime Peekling compatibile. I pacchetti sono open source, solo dati e con versione indipendente.

Visita [Organizzazione Peekling](https://github.com/peekling) o leggi [guida alla creazione del pacchetto](../PACK-AUTHORING.md) per vedere come viene messo insieme un personaggio.

## Cos'è un pacchetto di personaggi?

Un pacchetto di caratteri è un piccolo insieme di dati e immagini. Non contiene il comportamento dei caratteri eseguibili.

Ogni pacchetto ufficiale include:

- a `character.json` manifesta con l'identità, gli stati, il movimento, la versione e la licenza del personaggio
- atlanti PNG 1x, 2x e 4x per diverse densità di visualizzazione
- a `thumbnail.png` anteprima
- ha il proprio `README.md`, `LICENSE` e `NOTICE`

Il manifest registra percorsi di immagine relativi sicuri e SHA-256 hash per ogni atlante. Gli script di sviluppo, i test, la grafica sorgente e i report QA generati rimangono in questo repository e all'esterno dei limiti del pacchetto pubblicato.

## Peekling caratteri

Questa tabella viene generata dai metadati del pacchetto corrente e dal registro live npm. Le righe pubblicate si collegano alla versione npm verificata. I pacchetti che sono ancora solo sorgente rimangono visibili con un'etichetta esplicita `(non pubblicato)` e nessun collegamento npm.

<!-- PACK_ROSTER_START -->
25 pacchetti di personaggi sono pubblicati e installabili da npm. 3 pacchetti vengono mostrati come inediti per futuri follow-up.

| Anteprima | Carattere | Descrizione | Versione | Pacchetto |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | Un caldo orso della foresta dal ritmo lento e rassicurante. | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | Un amico di hamburger rotondo che rotola in avanti e si sistema dolcemente. | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | Un veloce gatto informatico con una visiera luminosa e zampe silenziose. | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | Un amico grande quanto un toast che salta senza far cadere una briciola. | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | Un amico della foresta rosso ruggine con una vena brillante e avventurosa. | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | Un'astuta volpe di terracotta sempre pronta per il prossimo sentiero. | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | Un filo elementale luminoso che va alla deriva ovunque porti la meraviglia. | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | Un minuscolo pianeta con gli anelli che rotola lungo la propria orbita luminosa. | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | Un'amica luna da sogno che traccia una piccola orbita tranquilla. | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | Un coniglietto dalle orecchie color lavanda con passi morbidi ed elastici. | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | Una rana verde menta che attraversa la pagina con allegri salti. | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | Una talpa curiosa che scava, scappa e salta fuori sorridendo. | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | Un accogliente amico del sushi con un delicato mescolamento del corpo del riso. | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | Una creatura cosmica che si muove dolcemente tra piccoli mondi. | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | Un piccolo robot rotondo con un display fantastico e piccoli passi precisi. | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | Un curioso gattino-volpe che segue i puntatori e festeggia le piccole vincite. | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | Un corgi color oro caldo che trotterella in ogni piccola celebrazione. | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | Un agnello lanoso che balza in avanti con i piedi morbidi come una nuvola. | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | Un gufo studioso premuroso che svolazza tra idee brillanti. | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | Uno scarabeo a orologeria che procede con cautela. | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | Un procione curioso che in punta di piedi accoglie ogni luccicante sorpresa. | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | Un compagno solare che fluttua con un impulso caldo e radioso. | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | Una Terra tascabile che scivola con una rotazione calma e costante. | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | Un brillante amico di taco che cammina veloce senza dire nulla. | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | Un allegro vagabondo di cactus con una piccola spavalderia western. | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | Un piccolo slime coraggioso il cui coraggio rimbalzante riempie la stanza. | `0.1.0` (non pubblicato) | `@peekling/pack-vali` (non pubblicato) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | Un pinguino avvolto in una sciarpa che dondola dolcemente da un lato all'altro. | `0.1.0` (non pubblicato) | `@peekling/pack-waddle` (non pubblicato) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | Un vivace trancio di pizza che sfreccia con un'inclinazione sicura. | `0.1.0` (non pubblicato) | `@peekling/pack-zesty` (non pubblicato) |
<!-- PACK_ROSTER_END -->

Esegui `npm run roster` dopo aver modificato i metadati del pacchetto o dopo un rilascio. `npm run roster:check` verifica lo stato di pubblicazione di npm e mantiene ogni pacchetto inedito chiaramente etichettato.

## Utilizzo di un pacchetto

Quando un carattere appare nella tabella, segui il collegamento del pacchetto a npm per la versione installabile verificata. La sua directory di origine documenta il comando di convalida e i record di licenza, mentre `character.json` rimane la fonte della verità per gli stati, i movimenti, le illustrazioni e le capacità del personaggio.

Solo le righe con un collegamento npm sono state verificate come installabili. Una riga `(non pubblicato)` punta all'origine del repository per il follow-up futuro e non costituisce una richiesta di disponibilità. Le directory di origine possono contenere anche lavori più recenti di npm. Il runtime Peekling è separato da questi pacchetti di caratteri ed è responsabile del caricamento del manifest e del rendering dell'atlante di riferimento.

Lo spazio di lavoro nella radice del repository è privato e non può essere pubblicato. Solo gli spazi di lavoro individuali `packages/pack-*` sono limiti di rilascio.

## Crea un personaggio

Hai un'idea per un nuovo piccolo amico? Il nucleo creativo di un pacchetto è composto da tre parti:

- `character.json` descrive il personaggio, i suoi stati di animazione, il movimento, la versione, la licenza e i file dell'atlante.
- `atlas-1x.png` è l'atlante artistico minimo nel contratto del pacchetto generale. Un pacchetto ufficiale deve includere anche le varianti `atlas-2x.png` e `atlas-4x.png` corrispondenti.
- `thumbnail.png` è la piccola anteprima mostrata nelle gallerie e negli elenchi dei pacchetti.

Un pacchetto pubblicabile ufficiale necessita anche di `package.json`, `README.md`, `LICENSE`, `NOTICE` e di ogni atlante denominato dal suo manifest. Inizia con [guida alla creazione del pacchetto](../PACK-AUTHORING.md) e utilizza [Il pacchetto Peek](../packages/pack-peek) come esempio di origine completo.

Gli strumenti di creazione avanzati verranno collegati qui quando verranno rilasciati. Fino ad allora, la guida alla creazione, i manifest dei pacchetti e gli attuali pacchetti ufficiali saranno la fonte della verità.

## Contribuire

Correzioni ponderate e miglioramenti mirati sono i benvenuti. Se vuoi proporre un nuovo personaggio ufficiale o un cambiamento più ampio, per favore [aprire un problema](https://github.com/peekling/peekling-characters/issues) prima così possiamo concordare l'ambito, la provenienza dell'opera d'arte e la licenza.

Avrai bisogno di Node.js 22 o successivo. L'area di lavoro registra npm 11.19.0 come gestore di pacchetti.

1. Apri un problema per un nuovo personaggio in modo che il suo nome, la posizione nella collezione ufficiale, la proprietà dell'opera d'arte e la licenza possano essere discussi prima di lavorare molto. Le modifiche a un pacchetto esistente vengono accettate solo dopo l'approvazione del proprietario del codice o del revisore designato.
2. Fork e clona il repository, quindi installa le dipendenze dello spazio di lavoro con `npm install`.
3. Scegli un nuovo identificatore minuscolo come `my-friend`. Non deve duplicare una directory di caratteri, un nome manifest o un pacchetto npm. Usa [Pacchetto sorgente completo di Peek](../packages/pack-peek) come esempio strutturale e crea `packages/pack-my-friend`.
4. Costruisci il confine pubblicabile:

   - `package.json` nomi `@peekling/pack-my-friend`, dichiara una versione semantica, accesso pubblico, licenza, directory del repository, script di creazione e test e i file pubblici esatti.
   - `character.json` utilizza il formato 1 e lo stesso nome, versione e licenza. Assegnagli un titolo, un autore, una descrizione, record dell'atlante 1x/2x/4x, stati dell'animazione con fotogrammi e tempi validi, tutte le otto direzioni di movimento e una scala predefinita positiva.
   - `thumbnail.png` è un 64x64 PNG valido. L'attuale griglia ufficiale utilizza celle logiche da 64 pixel, 16 colonne e 3 righe, quindi i tre atlanti sono 1024x192, 2048x384 e 4096x768. La densità dichiarata, la dimensione della cella, le dimensioni e gli hash SHA-256 devono concordare.
   - Aggiungi `README.md`, `LICENSE`, `NOTICE`, un test mirato e ogni atlante a cui fa riferimento il manifest. Mantieni la grafica originale e gli assistenti allo sviluppo fuori dall'elenco `files`.
   - Per l'attuale pipeline artistica manuale, aggiungi il personaggio a `scripts/build-character-roster.mjs` con i metadati e i record di movimento richiesti. Fornisci gli stessi input sorgente solo per repository utilizzati dai pacchetti esistenti in modo che `npm run build` possa riprodurre gli atlanti anziché accettare output modificati manualmente.

5. Esegui il test mirato del pacchetto e crea. Per Peek, i comandi equivalenti sono:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. Se i metadati del pacchetto sono cambiati, rigenera questa tabella con `npm run roster`, quindi esegui il gate completo del repository con `npm run check`.
7. Esegui `npm run changeset` e includi tutti i pacchetti interessati. Ogni modifica di file in una directory di pacchetto richiede una decisione sulla versione, inclusi grafica, JSON, metadati, documenti, test e file di origine. Scegli tu stesso il livello:

   - `patch` per correzioni, correzioni o ottimizzazioni compatibili
   - `minor` per aggiunte significative retrocompatibili o aggiornamenti creativi sostanziali
   - `major` per una modifica, sostituzione o rimozione importante

   L'automazione non indovina mai il livello dalla dimensione o dal tipo di modifica.

8. Apri una richiesta pull che spieghi il carattere, la provenienza e la licenza della sua grafica, cosa è cambiato e perché il livello di versione scelto è appropriato.

Prima della revisione, il CI pull-request richiede un piano di rilascio per ogni pacchetto modificato. Quindi controlla il contratto manifest e le definizioni di stato, l'unicità dell'identificatore, i nomi npm non utilizzati per i nuovi pacchetti, i percorsi e gli hash delle immagini sicuri, l'integrità di PNG, la dimensione delle miniature, l'esistenza dell'atlante 1x/2x/4x e la geometria della scala, i test, le build riproducibili, i limiti di dimensione, la licenza e i file esatti in ogni pacchetto npm durante l'esecuzione a secco. Questi controlli prevengono conflitti accidentali ed errori di imballaggio. I revisori umani decidono comunque se un personaggio o un cambiamento appartiene alla raccolta ufficiale.

Dopo che una modifica convalidata raggiunge `main`, Changesets prepara una richiesta pull di versione separata per la revisione. La prima pubblicazione npm rimane un'azione deliberata del manutentore. La pubblicazione OIDC automatica può essere abilitata solo dopo che i pacchetti iniziali esistono e ogni pacchetto considera attendibile il flusso di lavoro di pubblicazione di questo repository. Fino al completamento del bootstrap, il sorgente del repository non è una promessa che un pacchetto sia disponibile da npm. Vedi [preparazione al rilascio](../RELEASING.md) per il flusso completo del manutentore.

Questo repository è la casa curata per i pacchetti Peekling ufficiali, non un catalogo della comunità globale. Gli autori possono pubblicare pacchetti di terze parti compatibili dal proprio pacchetto o dai limiti di hosting statico con una licenza pubblica valida.

## Licenza e attribuzione

Gli strumenti, i test e la documentazione del repository sono concessi in licenza con [Apache-2.0](../LICENSE). Tutti i 28 attuali pacchetti di personaggi ufficiali dichiarano anche Apache-2.0 e portano i propri file `LICENSE` e `NOTICE`.

La ridistribuzione deve seguire i termini di licenza e di avviso applicabili per ciascun pacchetto. Il nome Peekling, il logo, la mascotte ufficiale e altre identità distintive del marchio non sono concessi dalla licenza degli strumenti a meno che una licenza specifica della risorsa non dica diversamente. Vedi [licenza e attribuzione](../LICENSING.md), [NOTICE](../NOTICE) e [AUTHORS](../AUTHORS) per i record completi.

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![Una stretta striscia d'erba, fiori di campo, fogliame e un sentiero tortuoso](../assets/peekling-ground-footer-v1.png)
