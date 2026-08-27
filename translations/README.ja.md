![明るく親しみやすい風景に集まる Peekling のキャラクターたち](../assets/peekling-community-banner.png)

# 公式 Peekling キャラクターパック

Peekling に個性を与える小さなキャラクターたちを紹介します。

ここは、Peekling プロジェクトが制作、管理するキャラクターパックの公式リポジトリです。各パックには、キャラクターの見た目や動き、反応のしかた、互換性のある Peekling ランタイムへの自己紹介が記述されています。パックはオープンソースで、データのみを含み、それぞれ独立してバージョン管理されます。

[Peekling Organization](https://github.com/peekling) を訪れるか、[パック作成ガイド](../PACK-AUTHORING.md) を読んで、キャラクターの構成を確認してください。

## キャラクターパックとは？

キャラクターパックは、データと画像をまとめた小さなパッケージです。実行可能なキャラクター動作は含みません。

すべての公式パックには以下が含まれます:

- キャラクターの識別情報、状態、動き、バージョン、ライセンスを記録した `character.json` マニフェスト
- さまざまな表示密度に対応する 1x、2x、4x の PNG アトラス
- `thumbnail.png` プレビュー
- それぞれの `README.md`、`LICENSE`、`NOTICE`

マニフェストには、すべてのアトラスの安全な相対画像パスと SHA-256 ハッシュが記録されます。開発スクリプト、テスト、ソース アート、生成された QA レポートは、このリポジトリ内に留まり、公開されたパッケージ境界の外に留まります。

## Peekling のキャラクター

このテーブルは、現在のパッケージ メタデータとライブ npm レジストリから生成されます。公開された行は、検証済みの npm バージョンにリンクされています。まだソースのみであるパックは、明示的な `(未公開)` ラベルが表示され、npm リンクは表示されません。

<!-- PACK_ROSTER_START -->
25 個のキャラクターパックが公開され、npm からインストールできます。3 個のパックは今後の対応用に未公開と表示されています。

| プレビュー | キャラクター | 説明 | バージョン | パッケージ |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | ゆっくりとした頼もしい足取りの、温かな森のクマ。 | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | 前に転がって柔らかく着地する丸いハンバーガーの相棒。 | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | 明るいバイザーと静かな足を持つ素早いサイバー猫。 | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | パンくずを落とさずにスキップするトーストサイズの友達。 | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | 明るく冒険好きな性格を持つ、さび色の森の友達。 | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | 賢いテラコッタキツネは、常に次の道に備えています。 | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | 不思議が導くところならどこへでも漂う、輝くエレメンタルウィスプ。 | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | 明るい軌道を転がる小さな環状惑星。 | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | 静かな小さな軌道を描く夢のような月の友達。 | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | 柔らかく弾力のあるステップを持つラベンダー耳のうさぎ。 | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | 元気よくページを横切るミントグリーンのカエル。 | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | 穴を掘ったり、のぞいたり、笑顔で飛び出す好奇心旺盛なモグラ。 | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | ごはんの体をそっと揺らして歩く、ほっとする寿司の仲間。 | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | 小さな世界の間をゆっくりと行き来する宇宙の生き物。 | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | クールなディスプレイと正確な小さなステップを備えた丸い小さなロボット。 | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | ポインターを追いかけ、小さな成功を喜ぶ好奇心旺盛な猫キツネ。 | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | 小さなお祝いごとに小走りで参加する、温かみのある金色のコーギー。 | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | 雲のように柔らかな足で前に進む羊毛の子羊。 | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | 明るいアイデアの間を飛び回る思慮深い学者フクロウ。 | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | 慎重な目的を持って歩き回るゼンマイ仕掛けのカブトムシ。 | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | あらゆる輝くサプライズにつま先立ちで向かう好奇心旺盛なアライグマ。 | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | 暖かく輝く鼓動とともに浮かぶ、晴れやかな仲間。 | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | 静かで安定した回転で滑空するポケットサイズの地球。 | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | 明るいタコ友達は、何もこぼさずに素早くステップを踏みます。 | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | ちょっとした西部風の粋さを見せる、陽気なサボテンの旅人。 | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | 元気いっぱいの勇気が部屋いっぱいに広がる勇敢な小さなスライム。 | `0.1.0` (未公開) | `@peekling/pack-vali` (未公開) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | スカーフを巻いて横によちよちと歩くペンギン。 | `0.1.0` (未公開) | `@peekling/pack-waddle` (未公開) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | 自信を持って傾ける活発なピザのスライス。 | `0.1.0` (未公開) | `@peekling/pack-zesty` (未公開) |
<!-- PACK_ROSTER_END -->

パッケージのメタデータを変更した後やリリース後は、`npm run roster` を実行します。`npm run roster:check` は npm の公開状態を検証し、すべての未公開パッケージのラベルを明確に保ちます。

## パックを使う

表でキャラクターを見つけたら、そのパッケージリンクから npm に移動し、検証済みのインストール可能なバージョンを確認してください。ソースディレクトリには検証コマンドとライセンス記録があり、`character.json` がキャラクターの状態、動き、アートワーク、機能についての信頼できる唯一の情報源です。

npm リンクを持つ行のみがインストール可能であることが確認されています。 `(未公開)` 行は、将来のフォローアップのためのリポジトリ ソースを指しており、可用性を主張するものではありません。ソース ディレクトリには、npm よりも新しい作業が含まれる場合もあります。 Peekling ランタイムはこれらのキャラクター パックとは別のもので、マニフェストのロードとその参照アトラスのレンダリングを担当します。

リポジトリ ルートのワークスペースはプライベートであるため、公開できません。個々の `packages/pack-*` ワークスペースのみがリリース境界となります。

## キャラクターを作る

新しい小さな仲間のアイデアがありますか？ パック制作の中心となる要素は 3 つです。

- `character.json` は、キャラクター、そのアニメーションの状態、動き、バージョン、ライセンス、およびアトラス ファイルを説明します。
- `atlas-1x.png` は、一般パック契約における最小アートワーク アトラスです。公式パックには、一致する `atlas-2x.png` および `atlas-4x.png` のバリアントも含まれている必要があります。
- `thumbnail.png` は、ギャラリーとパッケージリストに表示される小さなプレビューです。

公式の公開可能なパックには、`package.json`、`README.md`、`LICENSE`、`NOTICE`、およびそのマニフェストで指定されたすべてのアトラスも必要です。 [パックオーサリングガイド](../PACK-AUTHORING.md) から始めて、完全なソース例として [Peekのパッケージ](../packages/pack-peek) を使用してください。

より高度な作成ツールが公開されたら、ここにリンクを追加します。それまでは、作成ガイド、パッケージマニフェスト、現在の公式パックを正しい情報源としてください。

## コントリビューション

丁寧な修正や目的の明確な改善を歓迎します。新しい公式キャラクターや大きな変更を提案する場合は、まず [issue を作成](https://github.com/peekling/peekling-characters/issues)し、範囲、アートワークの出所、ライセンスについて合意してください。

Node.js 22 以降が必要です。ワークスペースは、パッケージ マネージャーとして npm 11.19.0 を記録します。

1. 新しいキャラクターについて issue を作成し、多くの作業に着手する前に、名前、公式コレクションでの位置づけ、アートワークの所有権、ライセンスを話し合います。既存のパックへの変更は、コードオーナーまたは指定されたレビュー担当者の承認後にのみ受け入れられます。
2. リポジトリをフォークしてクローンし、`npm install` でワークスペースの依存関係をインストールします。
3.  `my-friend` などの新しい小文字の識別子を選択します。キャラクターディレクトリ、マニフェスト名、またはnpmパッケージを複製してはなりません。 [Peek の完全なソース パッケージ](../packages/pack-peek)を構造例として使用し、`packages/pack-my-friend`を作成します。
4. 公開可能な境界を構築する:

   - `package.json` は `@peekling/pack-my-friend` に名前を付け、セマンティック バージョン、パブリック アクセス、ライセンス、リポジトリ ディレクトリ、ビルドおよびテスト スクリプト、および正確なパブリック ファイルを宣言します。
   - `character.json` は形式 1 と同じ名前、バージョン、ライセンスを使用します。タイトル、作成者、説明、1x/2x/4x アトラス レコード、有効なフレームとタイミングを含むアニメーション状態、8 つすべての移動方向、および正のデフォルト スケールを指定します。
   - `thumbnail.png` は有効な 64x64 PNG です。現在の公式グリッドは 64 ピクセルの論理セル、16 列、3 行を使用するため、3 つのアトラスは 1024x192、2048x384、および 4096x768 になります。宣言された密度、セル サイズ、寸法、および SHA-256 ハッシュが一致する必要があります。
   - `README.md`、`LICENSE`、`NOTICE`、集中テスト、およびマニフェストによって参照されるすべてのアトラスを追加します。ソース アートと開発ヘルパーは、`files` リストの外に置いてください。
   - 現在の手動アート パイプラインの場合、キャラクターを必要なメタデータと移動レコードとともに `scripts/build-character-roster.mjs` に追加します。既存のパックで使用されているものと同じリポジトリのみのソース入力を提供することで、`npm run build` は手動で編集された出力を受け入れるのではなくアトラスを再現できます。

5. 集中したパッケージのテストとビルドを実行します。 Peek の場合、同等のコマンドは次のとおりです。

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. パッケージのメタデータが変更された場合は、`npm run roster` でこのテーブルを再生成し、`npm run check` で完全なリポジトリ ゲートを実行します。
7.  `npm run changeset` を実行し、影響を受けるすべてのパックを含めます。アート、JSON、メタデータ、ドキュメント、テスト、ソース ファイルなど、パック ディレクトリ内のすべてのファイル変更にはバージョンの決定が必要です。自分でレベルを選択してください:
   - `patch` は互換性を保つ修正、訂正、調整
   - `minor` 意味のある下位互換性のある追加または大幅なクリエイティブ更新
   - `major` 重大な変更、交換、または削除の場合

   自動化は、変更のサイズや種類からレベルを推測することはありません。

8. キャラクターの特徴、アートワークの出所とライセンス、変更内容、選択したバージョンレベルが適切な理由を説明するプルリクエストを作成します。

レビューの前に、プルリクエスト CI は変更された各パックのリリース計画を要求します。その後、マニフェストの仕様と状態定義、識別子の一意性、新しいパックで利用できる npm 名、安全な画像パスとハッシュ、PNG の整合性、サムネイルサイズ、1x/2x/4x アトラスの有無と倍率の関係、テスト、再現可能なビルド、サイズ制限、ライセンス、各 npm パッケージのドライランに含まれる正確なファイルを確認します。これらのチェックは、意図しない競合やパッケージングミスを防ぎます。キャラクターや変更が公式コレクションにふさわしいかどうかは、引き続き人間のレビュー担当者が判断します。

検証された変更が `main` に達すると、Changesets はレビュー用に別のバージョンのプル リクエストを準備します。最初の npm のパブリケーションは、依然として意図的な保守者のアクションです。自動 OIDC 公開は、最初のパッケージが存在し、各パッケージがこのリポジトリの公開ワークフローを信頼した後にのみ有効にできます。ブートストラップが完了するまで、リポジトリ ソースはパッケージが npm から利用可能であることを保証しません。完全なメンテナ フローについては、[リリース準備](../RELEASING.md) を参照してください。

このリポジトリは、公式 Peekling パックの厳選されたホームであり、グローバル コミュニティ カタログではありません。作成者は、有効なパブリック ライセンスを使用して、独自のパッケージまたは静的ホスティング境界から互換性のあるサードパーティ パックを公開できます。

## ライセンスと帰属

リポジトリのツール、テスト、ドキュメントは [Apache-2.0](../LICENSE) の下でライセンスされています。現在の 28 個の公式キャラクターパックもすべて Apache-2.0 を宣言し、それぞれの `LICENSE` と `NOTICE` ファイルを備えています。

再配布は、各パックの該当するライセンスと通知条件に従う必要があります。 Peekling の名前、ロゴ、公式マスコット、およびその他の独特のブランド アイデンティティは、特定の資産ライセンスに別途記載がない限り、ツール ライセンスによって付与されません。完全な記録については、[ライセンスと帰属](../LICENSING.md)、[NOTICE](../NOTICE)、および [AUTHORS](../AUTHORS) を参照してください。

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![狭い草、野の花、木の葉、そして曲がりくねった小道](../assets/peekling-ground-footer-v1.png)
