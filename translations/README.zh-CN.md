![Peekling 角色们齐聚在明亮温馨的风景中](../assets/peekling-community-banner.png)

# Peekling 官方角色包

来认识一下这些为 Peekling 增添个性的小角色。

这里是 Peekling 项目制作和维护的官方角色包仓库。每个包描述一个角色的外观、移动和反应方式，以及它如何向兼容的 Peekling 运行时介绍自己。这些包均为开源、仅包含数据，并独立进行版本管理。

访问 [Peekling 组织](https://github.com/peekling)，或阅读[角色包创作指南](../PACK-AUTHORING.md)，了解一个角色包是如何组成的。

## 什么是角色包？

角色包是由少量数据和图像组成的文件包，不包含任何可执行的角色行为。

每个官方包包含：

- 一份 `character.json` 清单，记录角色的身份、状态、移动方式、版本和许可证
- 面向不同显示密度的 1x、2x 和 4x PNG 图集
- 一张 `thumbnail.png` 预览图
- 各自的 `README.md`、`LICENSE` 和 `NOTICE`

清单记录每个图集的安全相对图像路径和 SHA-256 哈希值。开发脚本、测试、源图稿和生成的 QA 报告保留在本仓库中，不会进入发布包。

## Peekling 角色

此表根据当前包元数据和实时 npm 注册表生成。已发布的条目会链接到经过验证的 npm 版本。仍仅有源代码的包也会显示，但带有明确的 `(未发布)` 标签，且不提供 npm 链接。

<!-- PACK_ROSTER_START -->
已有 25 个角色包发布，可从 npm 安装。另有 3 个包标记为未发布，留待后续处理。

| 预览 | 角色 | 描述 | 版本 | 包 |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | 一只温暖的森林熊，步伐缓慢而令人安心。 | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | 向前滚动并轻轻落座的圆形汉堡伙伴。 | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | 一只敏捷的网络猫，拥有明亮的面罩和安静的爪子。 |`0.1.0`|[`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0)|
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | 一个吐司大小的朋友，蹦蹦跳跳却不会掉下一粒面包屑。 | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | 铁锈红色的森林朋友，有着明亮、冒险的气质。 | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | 一只聪明的赤土狐狸，时刻准备着迎接下一条路。 |`0.1.0`|[`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0)|
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | 一个发光的元素精灵，随好奇心飘向各处。 | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | 一颗微小的环行星在自己明亮的轨道上滚动。 |`0.1.0`|[`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0)|
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | 一个梦幻般的月亮朋友，沿着安静的小轨道运行。 |`0.1.0`|[`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0)|
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | 淡紫色耳朵的兔子，脚步柔软、有弹性。 | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | 一只薄荷绿的青蛙，欢快地跳跃着穿过页面。 | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | 一只好奇的鼹鼠，它会挖洞、快速移动，然后微笑着出现。 | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | 一个让人倍感亲切的寿司朋友，米饭身体轻轻挪动。 | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | 一种在小世界之间轻轻移动的宇宙生物。 |`0.1.0`|[`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0)|
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | 圆形小机器人，具有炫酷的显示屏和精确的小步。 | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | 一只好奇的猫狐，会跟随指针，也会庆祝小小的胜利。 | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | 一只暖金色的柯基犬，小跑着参加每个小型庆祝活动。 | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | 一只毛茸茸的小羊，用云般柔软的脚向前跳跃。 |`0.1.0`|[`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0)|
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | 一只沉思的学者猫头鹰，在灵感之间振翅穿梭。 | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | 一只发条甲虫，小心而坚定地缓缓前行。 | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | 一只好奇的浣熊，踮着脚尖走向每一个闪亮的惊喜。 | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | 一个阳光般的伙伴，随着温暖明亮的脉动漂浮。 | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | 一个口袋大小的地球以平静、稳定的旋转滑行。 |`0.1.0`|[`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0)|
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | 一个活泼的玉米卷朋友，脚步轻快，什么也不会洒出来。 | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | 一个开朗的仙人掌漫游者，带有一点西方的招摇。 |`0.1.0`|[`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0)|
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | 一个勇敢的小史莱姆，蹦跳的勇气充满整个房间。 | `0.1.0` (未发布) | `@peekling/pack-vali` (未发布) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | 一只围着围巾的企鹅，轻轻地左右摇摆。 | `0.1.0` (未发布) | `@peekling/pack-waddle` (未发布) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | 充满活力的披萨片，自信倾斜地快速移动。 | `0.1.0` (未发布) | `@peekling/pack-zesty` (未发布) |
<!-- PACK_ROSTER_END -->

更改包元数据或完成发布后，请运行 `npm run roster`。`npm run roster:check` 会验证 npm 发布状态，并确保每个未发布的包都有清晰的标签。

## 使用角色包

在表格中找到角色后，可通过其包链接前往 npm，获取经过验证且可安装的版本。源目录记录了验证命令和许可证信息，而 `character.json` 始终是角色状态、移动方式、图稿和能力的权威来源。

只有带 npm 链接的条目经过了可安装性验证。标为 `(未发布)` 的条目指向仓库中的源代码，供后续处理，并不代表该包已可用。源目录也可能包含比 npm 更新的内容。Peekling 运行时与这些角色包相互独立，负责加载清单并渲染其中引用的图集。

存储库根目录下的工作空间是私有的，无法发布。只有单独的 `packages/pack-*` 工作空间是发布边界。

## 制作一个角色

想到了新的小伙伴吗？角色包的创作核心包括三个部分：

- `character.json` 描述角色、其动画状态、动作、版本、许可证和图集文件。
- `atlas-1x.png` 是通用角色包规范要求的最小图稿图集。官方包还必须包含匹配的 `atlas-2x.png` 和 `atlas-4x.png` 变体。
- `thumbnail.png` 是图库和包列表中显示的小预览。

官方可发布包还需要 `package.json`、`README.md`、`LICENSE`、`NOTICE` 以及由其清单命名的每个图集。从 [包创作指南](../PACK-AUTHORING.md) 开始，并使用 [Peek的封装](../packages/pack-peek) 作为完整的源示例。

更完善的创作工具发布后会在这里提供链接。在此之前，请以创作指南、包清单和当前官方包为准。

## 贡献

欢迎周全的修复和有针对性的改进。如果你想提议新的官方角色或较大的改动，请先[提交 issue](https://github.com/peekling/peekling-characters/issues)，以便我们就范围、图稿来源和许可证达成一致。

您将需要 Node.js 22 或更高版本。工作区将 npm 11.19.0 记录为其包管理器。

1. 为新角色提交 issue，以便在投入大量工作前讨论它的名称、在官方角色集中的位置、图稿所有权和许可证。对现有包的改动只有在其代码所有者或指定审阅者批准后才会被接受。
2. 分叉并克隆存储库，然后使用`npm install`安装工作区依赖项。
3. 选择一个新的小写标识符，例如`my-friend`。它不得重复字符目录、清单名称或 npm 包。使用[Peek的完整源码包](../packages/pack-peek)作为结构示例并创建`packages/pack-my-friend`。
4. 构建可发布边界：

   - `package.json`名称`@peekling/pack-my-friend`，声明语义版本、公共访问、许可证、存储库目录、构建和测试脚本以及确切的公共文件。
   - `character.json` 使用格式 1 以及相同的名称、版本和许可证。为其指定标题、作者、描述、1x/2x/4x 图集记录、具有有效帧和计时的动画状态、所有八个移动方向以及正的默认比例。
   - `thumbnail.png` 是有效的 64x64 PNG。当前官方网格使用64像素逻辑单元、16列和3行，因此三个图集分别为1024x192、2048x384和4096x768。他们声明的密度、单元大小、尺寸和 SHA-256 哈希值必须一致。
   - 添加`README.md`、`LICENSE`、`NOTICE`、重点测试以及清单引用的每个图集。将源艺术和开发助手保留在 `files` 列表之外。
   - 对于当前的手动艺术管道，将角色及其所需的元数据和动作记录添加到`scripts/build-character-roster.mjs`。提供现有包使用的相同的仅存储库源输入，以便 `npm run build` 可以重现地图集，而不是接受手工编辑的输出。

5. 运行重点包测试和构建。对于Peek，等效命令是：

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. 如果包元数据发生更改，请使用`npm run roster`重新生成此表，然后使用`npm run check`运行完整存储库门。
7. 运行`npm run changeset`并包含每个受影响的包。 Pack 目录下的每个文件更改都需要版本决策，包括 art、JSON、元数据、文档、测试和源文件。自行选择级别：

   - `patch` 用于兼容修复、更正或调整
   - `minor` 用于有意义的向后兼容添加或实质性创意更新
   - `major` 用于重大更改、更换或删除

   自动化永远不会根据更改的大小或类型来猜测级别。

8. 提交拉取请求，说明角色特点、图稿来源和许可证、具体改动，以及所选版本级别为何合适。

在审查前，拉取请求 CI 要求每个已改动的包都有发布计划。随后会检查清单规范和状态定义、标识符唯一性、新包尚未占用的 npm 名称、安全图像路径和哈希值、PNG 完整性、缩略图尺寸、1x/2x/4x 图集是否齐全及缩放关系、测试、可重现构建、大小限制、许可证，以及每个 npm 包模拟打包后的确切文件。这些检查可防止意外冲突和打包错误。角色或改动是否属于官方角色集，仍由人工审阅者决定。

经过验证的更改达到 `main` 后，Changesets 准备单独的版本拉取请求以供审核。第一个 npm 发布仍然是维护者有意为之的行为。仅当初始包存在且每个包信任此存储库的发布工作流程后，才能启用自动 OIDC 发布。在引导程序完成之前，存储库源并不保证可以从 npm 获得软件包。请参阅[发布准备](../RELEASING.md)了解完整的维护者流程。

本仓库是官方 Peekling 角色包的精选主页，并非全球社区目录。创作者可以在有效公共许可证下，通过自己的包或静态托管边界发布兼容的第三方包。

## 许可和归属

存储库工具、测试和文档根据 [Apache-2.0](../LICENSE) 获得许可。目前所有 28 个官方角色包也声明了 Apache-2.0 并带有自己的 `LICENSE` 和 `NOTICE` 文件。

重新分发必须遵循每个包的适用许可和通知条款。除非特定资产许可证另有说明，Peekling名称、徽标、官方吉祥物和其他独特的品牌标识均不由工具许可证授予。完整记录请参见[许可和归属](../LICENSING.md)、[NOTICE](../NOTICE)、[AUTHORS](../AUTHORS)。

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![狭长的草地、野花、树叶和蜿蜒的小路](../assets/peekling-ground-footer-v1.png)
