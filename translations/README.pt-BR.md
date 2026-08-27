![Personagens Peekling reunidos em uma paisagem luminosa e acolhedora](../assets/peekling-community-banner.png)

# Pacotes de personagens oficiais do Peekling

Conheça os pequenos personagens que dão personalidade ao Peekling.

Este é o repositório oficial dos pacotes de personagens criados e mantidos pelo projeto Peekling. Cada pacote descreve a aparência, os movimentos, as reações e a apresentação de um personagem em um runtime compatível com o Peekling. Os pacotes são de código aberto, contêm somente dados e têm versões independentes.

Visite a [organização Peekling](https://github.com/peekling) ou leia o [guia de criação de pacotes](../PACK-AUTHORING.md) para ver como um personagem é criado.

## O que é um pacote de personagens?

Um pacote de personagens é um pequeno conjunto de dados e imagens. Ele não contém comportamento executável para o personagem.

Cada pacote oficial inclui:

- um manifesto `character.json` com a identidade, os estados, os movimentos, a versão e a licença do personagem
- atlas PNG em 1x, 2x e 4x para diferentes densidades de tela
- uma prévia `thumbnail.png`
- seus próprios `README.md`, `LICENSE` e `NOTICE`

O manifesto registra caminhos de imagem relativos seguros e hashes SHA-256 para cada atlas. Scripts de desenvolvimento, testes, arte de origem e relatórios de controle de qualidade gerados permanecem neste repositório e fora dos limites do pacote publicado.

## Personagens Peekling

Esta tabela é gerada a partir dos metadados atuais dos pacotes e do registro npm em tempo real. As linhas publicadas apontam para a versão verificada no npm. Os pacotes que ainda existem somente no código-fonte permanecem visíveis com o rótulo explícito `(não publicado)` e sem link para o npm.

<!-- PACK_ROSTER_START -->
25 pacotes de personagens estão publicados e podem ser instalados pelo npm. Outros 3 aparecem como não publicados para acompanhamento futuro.

| Prévia | Personagem | Descrição | Versão | Pacote |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | Um acolhedor urso da floresta com um andar lento e tranquilizador. | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | Um companheiro de hambúrguer redondo que rola para frente e se acomoda suavemente. | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | Um gato cibernético rápido com viseira brilhante e patas silenciosas. | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | Um amigo do tamanho de uma torrada que pula sem deixar cair uma migalha. | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | Um amigo da floresta vermelho-ferrugem com um traço brilhante e aventureiro. | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | Uma raposa de terracota inteligente sempre pronta para a próxima trilha. | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | Um fio elemental brilhante vagando por onde quer que a maravilha o leve. | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | Um minúsculo planeta anelado girando em sua própria órbita brilhante. | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | Um amigo lunar sonhador traçando uma pequena órbita tranquila. | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | Um coelho com orelhas lilás e passos macios e elásticos. | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | Um sapo verde-menta que atravessa a página em saltos alegres. | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | Uma toupeira curiosa que se enterra, foge e aparece sorrindo. | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | Um simpático sushi que se arrasta suavemente com seu corpo de arroz. | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | Uma criatura cósmica que transita suavemente entre pequenos mundos. | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | Um pequeno robô redondo com uma tela elegante e passos minúsculos e precisos. | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | Uma curiosa gatinha-raposa que segue dicas e comemora pequenas vitórias. | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | Um corgi de pelo dourado e caloroso que chega trotando a cada pequena comemoração. | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | Um cordeiro lanoso que avança com pés macios como nuvens. | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | Uma coruja estudiosa atenciosa que flutua entre ideias brilhantes. | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | Um besouro mecânico que caminha com determinação cuidadosa. | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | Um guaxinim curioso que anda na ponta dos pés em direção a cada surpresa brilhante. | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | Um companheiro ensolarado que flutua com pulso quente e radiante. | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | Uma Terra de bolso deslizando com um giro calmo e constante. | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | Um amigo taco brilhante que caminha rapidamente sem derramar nada. | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | Um alegre cacto andarilho com um jeitinho de caubói. | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | Um pequeno slime corajoso cuja coragem saltitante enche a sala. | `0.1.0` (não publicado) | `@peekling/pack-vali` (não publicado) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | Um pinguim enrolado em um lenço e balançando suavemente de um lado para o outro. | `0.1.0` (não publicado) | `@peekling/pack-waddle` (não publicado) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | Uma fatia de pizza animada que se move com uma inclinação confiante. | `0.1.0` (não publicado) | `@peekling/pack-zesty` (não publicado) |
<!-- PACK_ROSTER_END -->

Execute `npm run roster` após alterar os metadados do pacote ou após um lançamento. `npm run roster:check` verifica o estado de publicação do npm e mantém todos os pacotes não lançados claramente rotulados.

## Usando um pacote

Quando um personagem aparecer na tabela, siga o link do pacote para o npm para obter a versão instalável verificada. O diretório de origem documenta o comando de validação e os registros de licença, enquanto `character.json` continua sendo a fonte oficial para os estados, os movimentos, a arte e os recursos do personagem.

Somente as linhas com link para o npm foram verificadas como instaláveis. Uma linha `(não publicado)` aponta para o código-fonte no repositório para acompanhamento futuro e não declara que o pacote está disponível. Os diretórios de origem também podem conter trabalho mais recente do que o publicado no npm. O runtime do Peekling é separado desses pacotes de personagens e se encarrega de carregar o manifesto e renderizar o atlas referenciado.

O workspace na raiz do repositório é privado e não pode ser publicado. Somente os workspaces individuais em `packages/pack-*` são unidades de lançamento.

## Crie um personagem

Tem uma ideia para um novo amiguinho? O núcleo criativo de um pack tem três partes:

- `character.json` descreve o personagem, seus estados de animação, movimento, versão, licença e arquivos atlas.
- `atlas-1x.png` é o atlas de arte mínimo no contrato geral do pacote. Um pacote oficial também deve incluir variantes `atlas-2x.png` e `atlas-4x.png` correspondentes.
- `thumbnail.png` é a pequena prévia mostrada em galerias e listas de pacotes.

Um pacote oficial pronto para publicação também precisa de `package.json`, `README.md`, `LICENSE`, `NOTICE` e de todos os atlas nomeados no manifesto. Comece pelo [guia de criação de pacotes](../PACK-AUTHORING.md) e use o [pacote do Peek](../packages/pack-peek) como exemplo completo.

As ferramentas avançadas de criação serão vinculadas aqui quando forem lançadas. Até lá, o guia de criação, os manifestos e os pacotes oficiais atuais são as referências oficiais.

## Contribuindo

Correções bem pensadas e melhorias específicas são bem-vindas. Se você quiser propor um novo personagem oficial ou uma mudança maior, [abra uma issue](https://github.com/peekling/peekling-characters/issues) primeiro para que possamos chegar a um acordo sobre o escopo, a procedência da arte e o licenciamento.

Você precisará de Node.js 22 ou posterior. O espaço de trabalho registra npm 11.19.0 como seu gerenciador de pacotes.

1. Abra uma issue para o novo personagem, assim o nome, o lugar na coleção oficial, a propriedade da arte e a licença poderão ser discutidos antes de você investir muito trabalho. Alterações em um pacote existente só serão aceitas após a aprovação do responsável pelo código ou do revisor designado.
2. Fork e clone o repositório e, em seguida, instale as dependências do espaço de trabalho com `npm install`.
3. Escolha um novo identificador em letras minúsculas, como `my-friend`. Não deve duplicar um diretório de caracteres, nome de manifesto ou pacote npm. Use [Pacote fonte completo do Peek](../packages/pack-peek) como exemplo estrutural e crie `packages/pack-my-friend`.
4. Construa o limite publicável:

   - `package.json` define o nome `@peekling/pack-my-friend` e declara uma versão semântica, acesso público, licença, diretório no repositório, scripts de build e teste e a lista exata de arquivos públicos.
   - `character.json` usa o formato 1 e o mesmo nome, versão e licença. Dê-lhe um título, autor, descrição, registros de atlas 1x/2x/4x, estados de animação com quadros e tempos válidos, todas as oito direções de movimento e uma escala padrão positiva.
   - `thumbnail.png` é um 64x64 válido PNG. A grade oficial atual usa células lógicas de 64 pixels, 16 colunas e 3 linhas, portanto os três atlas são 1024x192, 2048x384 e 4096x768. A densidade declarada, o tamanho da célula, as dimensões e os hashes SHA-256 devem concordar.
   - Adicione `README.md`, `LICENSE`, `NOTICE`, um teste focado e todos os atlas referenciados pelo manifesto. Mantenha a arte original e os ajudantes de desenvolvimento fora da lista `files`.
   - Para o pipeline de arte manual atual, adicione o personagem a `scripts/build-character-roster.mjs` com seus metadados e registros de movimento necessários. Forneça as mesmas entradas de origem somente de repositório usadas pelos pacotes existentes para que `npm run build` possa reproduzir os atlas em vez de aceitar resultados editados manualmente.

5. Execute o teste e compilação do pacote em foco. Para Peek, os comandos equivalentes são:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. Se os metadados do pacote mudaram, gere esta tabela novamente com `npm run roster` e depois execute a verificação completa do repositório com `npm run check`.
7. Execute `npm run changeset` e inclua todos os pacotes afetados. Cada alteração de arquivo em um diretório de pacote precisa de uma decisão de versão, incluindo arte, JSON, metadados, documentos, testes e arquivos de origem. Escolha você mesmo o nível:

   - `patch` para correções ou ajustes compatíveis
   - `minor` para adições significativas compatíveis com versões anteriores ou atualizações criativas substanciais
   - `major` para uma alteração incompatível, substituição ou remoção

   A automação nunca adivinha o nível a partir do tamanho ou tipo de sua alteração.

8. Abra um pull request que explique o personagem, a procedência e a licença da arte, o que mudou e por que o nível de versão escolhido é adequado.

Antes da revisão, o CI do pull request exige um plano de lançamento para cada pacote alterado. Depois, verifica o contrato do manifesto e as definições de estado, a exclusividade dos identificadores, nomes npm ainda não usados para novos pacotes, caminhos seguros de imagem e hashes, integridade dos PNGs, tamanho da miniatura, existência dos atlas 1x/2x/4x e geometria de escala, testes, builds reproduzíveis, limites de tamanho, licenciamento e os arquivos exatos em cada simulação de pacote npm. Essas verificações evitam conflitos acidentais e erros de empacotamento. Os revisores humanos ainda decidem se um personagem ou uma mudança pertence à coleção oficial.

Depois que uma alteração validada chega a `main`, o Changesets prepara um pull request de versão separado para revisão. A primeira publicação no npm continua sendo uma ação deliberada do mantenedor. A publicação automática via OIDC só pode ser ativada depois que os pacotes iniciais existirem e cada pacote confiar no workflow de publicação deste repositório. Até que essa configuração inicial seja concluída, o código-fonte do repositório não garante que um pacote esteja disponível no npm. Consulte a [preparação de lançamento](../RELEASING.md) para ver o fluxo completo do mantenedor.

Este repositório reúne os pacotes oficiais do Peekling. Ele não é um catálogo global da comunidade. Os criadores podem publicar pacotes compatíveis de terceiros em seus próprios pacotes ou serviços de hospedagem estática, desde que tenham uma licença pública válida.

## Licenciamento e atribuição

As ferramentas, testes e documentação do repositório são licenciados sob [Apache-2.0](../LICENSE). Todos os 28 pacotes de personagens oficiais atuais também declaram Apache-2.0 e carregam seus próprios arquivos `LICENSE` e `NOTICE`.

A redistribuição deve seguir a licença aplicável e os termos de aviso de cada pacote. O nome Peekling, logotipo, mascote oficial e outras identidades de marca distintivas não são concedidos pela licença de ferramentas, a menos que uma licença de ativo específico indique o contrário. Consulte [licenciamento e atribuição](../LICENSING.md), [NOTICE](../NOTICE) e [AUTHORS](../AUTHORS) para obter os registros completos.

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![Uma faixa estreita de grama, flores silvestres, folhagens e um caminho sinuoso](../assets/peekling-ground-footer-v1.png)
