![Personajes de Peekling reunidos en un paisaje luminoso y acogedor](../assets/peekling-community-banner.png)

# Paquetes oficiales de personajes de Peekling

Conoce a los pequeños personajes que le dan personalidad a Peekling.

Este es el hogar oficial de los paquetes de personajes creados y mantenidos por el proyecto Peekling. Cada paquete describe el aspecto de un personaje, cómo se mueve, cómo reacciona y cómo se presenta a un entorno de ejecución compatible con Peekling. Los paquetes son de código abierto, contienen solo datos y tienen versiones independientes.

Visita la [organización de Peekling](https://github.com/peekling) o consulta la [guía para crear paquetes](../PACK-AUTHORING.md) para ver cómo se construye un personaje.

## ¿Qué es un paquete de personaje?

Un paquete de personaje es un pequeño conjunto de datos e imágenes. No contiene comportamiento ejecutable del personaje.

Cada paquete oficial incluye:

- un manifiesto `character.json` con la identidad, los estados, el movimiento, la versión y la licencia del personaje
- atlas PNG de 1x, 2x y 4x para distintas densidades de pantalla
- una vista previa `thumbnail.png`
- su propio `README.md`, `LICENSE` y `NOTICE`

El manifiesto registra rutas de imagen relativas seguras y hashes SHA-256 para cada atlas. Los scripts de desarrollo, las pruebas, el arte original y los informes de control de calidad generados permanecen en este repositorio, fuera de los límites del paquete publicado.

## Personajes de Peekling

Esta tabla se genera a partir de los metadatos actuales de los paquetes y del registro de npm en vivo. Las filas publicadas enlazan a su versión verificada en npm. Los paquetes que todavía solo existen como código fuente permanecen visibles con la etiqueta explícita `(sin publicar)` y sin enlace a npm.

<!-- PACK_ROSTER_START -->
Hay 25 paquetes de personajes publicados e instalables desde npm. Se muestran 3 paquetes sin publicar para su seguimiento futuro.

| Vista previa | Personaje | Descripción | Versión | Paquete |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | Un cálido oso del bosque de paso lento y tranquilizador. | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | Un compañero de hamburguesa redondo que rueda hacia adelante y se acomoda suavemente. | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | Un cibergato veloz con una visera brillante y patas silenciosas. | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | Un amigo del tamaño de una tostada que salta sin dejar caer una migaja. | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | Un amigo del bosque de color rojo óxido con una vena brillante y aventurera. | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | Un inteligente zorro de terracota siempre listo para el siguiente rastro. | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | Un resplandeciente espíritu elemental que flota adonde lo lleva el asombro. | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | Un pequeño planeta con anillos que recorre su propia órbita brillante. | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | Una amiga lunar de ensueño trazando una pequeña órbita tranquila. | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | Un conejito de orejas color lavanda con pasos suaves y elásticos. | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | Una rana verde menta que cruza la página con alegres saltos. | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | Un topo curioso que excava, se desliza y aparece sonriendo. | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | Un acogedor amigo sushi que avanza con un suave paso de cuerpo de arroz. | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | Una criatura cósmica que cambia suavemente entre pequeños mundos. | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | Un pequeño robot redondo con una pantalla moderna y pasos diminutos y precisos. | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | Un curioso híbrido de gatito y zorro que sigue punteros y celebra pequeños logros. | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | Un corgi dorado cálido que trota en cada pequeña celebración. | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | Un cordero lanudo que salta hacia adelante con pies suaves como las nubes. | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | Un búho erudito reflexivo que revolotea entre ideas brillantes. | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | Un escarabajo mecánico que avanza con cuidadoso propósito. | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | Un mapache curioso que camina de puntillas hacia cada sorpresa brillante. | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | Un compañero soleado que flota con un pulso cálido y radiante. | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | Una Tierra de bolsillo que se desliza con un giro tranquilo y constante. | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | Un alegre amigo taco que avanza deprisa sin derramar nada. | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | Un cactus viajero y alegre con un pequeño contoneo del oeste. | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | Un pequeño y valiente slime cuya energía elástica llena la habitación. | `0.1.0` (sin publicar) | `@peekling/pack-vali` (sin publicar) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | Un pingüino con bufanda y un suave andar de lado a lado. | `0.1.0` (sin publicar) | `@peekling/pack-waddle` (sin publicar) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | Una animada porción de pizza que se desliza con una inclinación segura. | `0.1.0` (sin publicar) | `@peekling/pack-zesty` (sin publicar) |
<!-- PACK_ROSTER_END -->

Ejecuta `npm run roster` después de cambiar los metadatos de un paquete o tras una publicación. `npm run roster:check` verifica el estado de publicación en npm y mantiene claramente etiquetados todos los paquetes sin publicar.

## Usar un paquete

Cuando un personaje aparezca en la tabla, sigue el enlace de su paquete a npm para obtener la versión instalable verificada. Su directorio de código fuente documenta el comando de validación y los registros de licencia, mientras que `character.json` sigue siendo la fuente de verdad sobre los estados, el movimiento, el arte y las capacidades del personaje.

Solo se han verificado como instalables las filas que incluyen un enlace a npm. Una fila `(sin publicar)` apunta al código fuente del repositorio para su seguimiento futuro y no afirma que esté disponible. Los directorios de código fuente también pueden contener trabajo más reciente que npm. El entorno de ejecución de Peekling está separado de estos paquetes de personajes y se encarga de cargar el manifiesto y renderizar el atlas al que hace referencia.

El espacio de trabajo en la raíz del repositorio es privado y no se puede publicar. Solo los espacios de trabajo individuales `packages/pack-*` constituyen límites de publicación.

## Crear un personaje

¿Tienes una idea para un nuevo amiguito? El núcleo creativo de un paquete consta de tres partes:

- `character.json` describe el personaje, sus estados de animación, movimiento, versión, licencia y archivos de atlas.
- `atlas-1x.png` es el atlas de arte mínimo del contrato general de paquetes. Un paquete oficial también debe incluir variantes coincidentes `atlas-2x.png` y `atlas-4x.png`.
- `thumbnail.png` es la pequeña vista previa que se muestra en galerías y listados de paquetes.

Un paquete oficial publicable también necesita `package.json`, `README.md`, `LICENSE`, `NOTICE` y todos los atlas nombrados en su manifiesto. Empieza por la [guía para crear paquetes](../PACK-AUTHORING.md) y usa el [paquete de Peek](../packages/pack-peek) como ejemplo completo de código fuente.

Las herramientas de creación mejoradas se vincularán aquí cuando se lancen. Hasta entonces, la guía de creación, los manifiestos de paquetes y los paquetes oficiales actuales son la fuente de la verdad.

## Contribuir

Se agradecen las correcciones cuidadosas y las mejoras bien enfocadas. Si quieres proponer un nuevo personaje oficial o un cambio mayor, [abre primero un issue](https://github.com/peekling/peekling-characters/issues) para que podamos acordar el alcance, la procedencia del arte y la licencia.

Necesitarás Node.js 22 o posterior. El espacio de trabajo registra npm 11.19.0 como gestor de paquetes.

1. Abre un issue para un personaje nuevo, de modo que se puedan discutir su nombre, su lugar en la colección oficial, la propiedad del arte y la licencia antes de invertir mucho trabajo. Los cambios en un paquete existente solo se aceptan después de que los apruebe su responsable de código o el revisor designado.
2. Bifurca y clona el repositorio, luego instala las dependencias del espacio de trabajo con `npm install`.
3. Elige un nuevo identificador en minúsculas, como `my-friend`. No debe duplicar ningún directorio de personaje, nombre de manifiesto ni paquete de npm. Usa el [paquete fuente completo de Peek](../packages/pack-peek) como ejemplo estructural y crea `packages/pack-my-friend`.
4. Construye el contenido publicable:

   - `package.json` nombra `@peekling/pack-my-friend`, declara una versión semántica, acceso público, licencia, directorio del repositorio, scripts de compilación y prueba, y los archivos públicos exactos.
   - `character.json` usa el formato 1 y el mismo nombre, versión y licencia. Asígnale un título, autor, descripción, registros de atlas 1x/2x/4x, estados de animación con fotogramas y tiempos válidos, las ocho direcciones de movimiento y una escala predeterminada positiva.
   - `thumbnail.png` es un 64x64 PNG válido. La cuadrícula oficial actual utiliza celdas lógicas de 64 píxeles, 16 columnas y 3 filas, por lo que los tres atlas son 1024x192, 2048x384 y 4096x768. Su densidad declarada, tamaño de celda, dimensiones y hashes SHA-256 deben coincidir.
   - Añade `README.md`, `LICENSE`, `NOTICE`, una prueba específica y todos los atlas a los que haga referencia el manifiesto. Mantén el arte fuente y las herramientas de desarrollo fuera de la lista `files`.
   - Para el proceso de arte manual actual, añade el personaje a `scripts/build-character-roster.mjs` con sus metadatos y registros de movimiento requeridos. Proporciona las mismas entradas de origen exclusivas del repositorio que utilizan los paquetes existentes para que `npm run build` pueda reproducir los atlas en lugar de aceptar resultados editados a mano.

5. Ejecuta la prueba específica del paquete y la compilación. Para Peek, los comandos equivalentes son:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. Si cambiaron los metadatos del paquete, regenera esta tabla con `npm run roster` y después ejecuta la comprobación completa del repositorio con `npm run check`.
7. Ejecuta `npm run changeset` e incluye todos los paquetes afectados. Cada cambio de archivo en un directorio de paquete necesita una decisión de versión, que incluye arte, JSON, metadatos, documentos, pruebas y archivos fuente. Elige el nivel tú mismo:

   - `patch` para arreglos, correcciones o ajustes compatibles
   - `minor` para adiciones significativas compatibles con versiones anteriores o actualizaciones creativas sustanciales
   - `major` para un cambio incompatible, una sustitución o una eliminación

   La automatización nunca adivina el nivel a partir del tamaño o tipo de cambio.

8. Abre un pull request que explique el personaje, la procedencia y la licencia de su arte, qué cambió y por qué el nivel de versión elegido es adecuado.

Antes de la revisión, la integración continua del pull request exige un plan de publicación para cada paquete modificado. Después comprueba el contrato del manifiesto y las definiciones de estado, la unicidad de identificadores, que los nombres de npm para paquetes nuevos no estén ocupados, las rutas de imagen y hashes seguros, la integridad de PNG, el tamaño de las miniaturas, la existencia y geometría de escalado de los atlas 1x/2x/4x, las pruebas, las compilaciones reproducibles, los límites de tamaño, las licencias y los archivos exactos de cada simulación de paquete npm. Estas comprobaciones evitan conflictos accidentales y errores de empaquetado. Los revisores humanos siguen decidiendo si un personaje o cambio pertenece a la colección oficial.

Cuando un cambio validado llega a `main`, Changesets prepara un pull request de versión separado para su revisión. La primera publicación en npm sigue siendo una acción deliberada del responsable. La publicación automática mediante OIDC solo se puede activar después de que existan los paquetes iniciales y cada paquete confíe en el flujo de publicación de este repositorio. Hasta que se complete ese proceso inicial, el código fuente del repositorio no garantiza que un paquete esté disponible en npm. Consulta la [preparación de publicaciones](../RELEASING.md) para ver el proceso completo de mantenimiento.

Este repositorio alberga la selección oficial de paquetes de Peekling, no un catálogo global de la comunidad. Los creadores pueden publicar paquetes compatibles de terceros desde sus propios paquetes o servicios de alojamiento estático, con una licencia pública válida.

## Licencias y atribución

Las herramientas, las pruebas y la documentación del repositorio están bajo la licencia [Apache-2.0](../LICENSE). Los 28 paquetes de personajes oficiales actuales también declaran Apache-2.0 e incluyen sus propios archivos `LICENSE` y `NOTICE`.

La redistribución debe respetar los términos aplicables de licencia y aviso de cada paquete. El nombre Peekling, el logotipo, la mascota oficial y otros elementos distintivos de la identidad de la marca no se conceden mediante la licencia de las herramientas, salvo que una licencia de recursos específica indique lo contrario. Consulta [licencias y atribución](../LICENSING.md), [NOTICE](../NOTICE) y [AUTHORS](../AUTHORS) para ver los registros completos.

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![Una estrecha franja de hierba, flores silvestres, follaje y un camino sinuoso](../assets/peekling-ground-footer-v1.png)
