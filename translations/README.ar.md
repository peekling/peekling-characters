![تتجمع شخصيات Peekling في مناظر طبيعية مشرقة ومرحبة](https://cdn.peekling.com/v1/community/peekling-community-banner.png)

<div dir="rtl">

# حزم شخصيات Peekling الرسمية

تعرّف على الشخصيات الصغيرة التي تمنح Peekling طابعها الخاص.

هذا هو المستودع الرسمي لحزم الشخصيات التي ينشئها مشروع Peekling ويصونها. تصف كل حزمة مظهر شخصية واحدة وحركتها وتفاعلاتها وكيفية تقديم نفسها إلى بيئة تشغيل Peekling متوافقة. الحزم مفتوحة المصدر، ولا تحتوي إلا على بيانات، ولكل منها إصدار مستقل.

تفضل بزيارة [منظمة Peekling](https://github.com/peekling)، أو اقرأ [دليل تأليف الحزمة](../PACK-AUTHORING.md) لترى كيف يتم تجميع الشخصية معًا.

## ما هي حزمة الشخصيات؟

حزمة الشخصيات مجموعة صغيرة من البيانات والصور، ولا تحتوي على سلوك تنفيذي للشخصية.

تتضمن كل حزمة رسمية ما يلي:

- ملف بيان `character.json` يضم هوية الشخصية وحالاتها وحركتها وإصدارها وترخيصها
- أطالس PNG بدقات 1x و2x و4x لكثافات العرض المختلفة
- صورة معاينة `thumbnail.png`
- ملفات `README.md` و`LICENSE` و`NOTICE` الخاصة بها

يسجل البيان مسارات الصور النسبية الآمنة وتجزئة SHA-256 لكل أطلس. تظل البرامج النصية للتطوير والاختبارات وصورة المصدر وتقارير ضمان الجودة التي تم إنشاؤها في هذا المستودع وخارج حدود الحزمة المنشورة.

## شخصيات Peekling

يُنشأ هذا الجدول من بيانات تعريف الحزم الحالية وسجل npm المباشر. ترتبط الصفوف المنشورة بإصدارات npm التي تم التحقق منها. وتظل الحزم المتاحة كمصدر فقط ظاهرة بعلامة `(غير منشور)` واضحة ومن دون رابط npm.

<!-- PACK_ROSTER_START -->
نُشرت 25 حزمة شخصيات ويمكن تثبيتها من npm. وتظهر 3 حزم على أنها غير منشورة لمتابعتها لاحقًا.

| معاينة | الشخصية | الوصف | الإصدار | الحزمة |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | دب غابة ودود يمشي ببطء وطمأنينة. | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | صديق برجر مستدير يتدحرج للأمام ويستقر بهدوء. | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | قطة سايبر سريعة ذات حاجب لامع وأقدام هادئة. | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | صديق بحجم الخبز المحمص الذي يتخطى دون أن يسقط فتات. | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | صديق الغابة ذو اللون الأحمر الصدئ مع خط مشرق ومغامرة. | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | ثعلب تيراكوتا ذكي جاهز دائمًا للمسار التالي. | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | روح عنصرية متوهجة تنجرف حيثما يقودها الفضول. | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | كوكب حلقي صغير يدور عبر مداره اللامع. | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | صديق القمر الحالم يتتبع مدارًا صغيرًا هادئًا. | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | أرنب ذو أذنين خزامية بخطوات ناعمة ونابضة. | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | ضفدع أخضر نعناعي يعبر الصفحة بقفزات مبهجة. | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | شامة فضولية تحفر، تنطلق بسرعة، ثم تنبثق مبتسمة. | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | صديق سوشي لطيف يحرك جسمه المصنوع من الأرز برفق. | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | مخلوق كوني يتنقل بلطف بين العوالم الصغيرة. | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | روبوت صغير مستدير بشاشة عرض رائعة وخطوات صغيرة دقيقة. | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | ثعلب صغير فضولي يتبع المؤشرات ويحتفل بالانتصارات الصغيرة. | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | فصيل كورجي ذهبي دافئ يهرول في كل احتفال صغير. | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | خروف صوفي يتقدم للأمام على أقدام ناعمة كالسحاب. | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | بومة عالمة مفكرة ترفرف بين الأفكار النيرة. | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | خنفساء آلية تسير بتأنٍ وعزم. | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | راكون فضولي يتجه نحو كل مفاجأة لامعة. | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | رفيق مشمس يطفو بنبض دافئ ومشرق. | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | أرض بحجم الجيب تنزلق بدوران هادئ وثابت. | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | صديق تاكو لامع يخطو بسرعة دون أن ينسكب أي شيء. | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | صبّار مرح متجول بخطوة واثقة على طراز الغرب الأمريكي. | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | سلايم صغير شجاع تملأ شجاعته النطاطة الغرفة. | `0.1.0` (غير منشور) | `@peekling/pack-vali` (غير منشور) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | بطريق ملفوف بالوشاح مع تمايل لطيف من جانب إلى آخر. | `0.1.0` (غير منشور) | `@peekling/pack-waddle` (غير منشور) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | شريحة بيتزا مفعمة بالحيوية تنطلق بميل واثق. | `0.1.0` (غير منشور) | `@peekling/pack-zesty` (غير منشور) |
<!-- PACK_ROSTER_END -->

شغّل `npm run roster` بعد تغيير بيانات الحزمة الوصفية أو بعد إصدارها. يتحقق `npm run roster:check` من حالة النشر على npm ويضمن وضوح علامة كل حزمة غير منشورة.

## استخدام حزمة

عندما تظهر شخصية في الجدول، اتبع رابط حزمتها إلى npm للحصول على الإصدار القابل للتثبيت الذي تم التحقق منه. يوثق دليل المصدر أمر التحقق وسجلات الترخيص، بينما يظل `character.json` المصدر المعتمد لحالات الشخصية وحركتها ورسوماتها وقدراتها.

لم يُتحقق من قابلية التثبيت إلا للصفوف التي تحتوي على رابط npm. يشير الصف `(غير منشور)` إلى مصدر المستودع للمتابعة لاحقًا، ولا يعني أن الحزمة متاحة. وقد تحتوي أدلة المصدر أيضًا على عمل أحدث مما في npm. بيئة تشغيل Peekling منفصلة عن حزم الشخصيات هذه، وهي مسؤولة عن تحميل البيان وعرض الأطلس المشار إليه.

مساحة العمل في جذر المستودع خاصة ولا يمكن نشرها. فقط مساحات العمل `packages/pack-*` الفردية هي حدود الإصدار.

## اصنع شخصية

هل لديك فكرة لصديق صغير جديد؟ يتكون الجوهر الإبداعي للحزمة من ثلاثة أجزاء:

- `character.json` يصف الشخصية وحالاتها المتحركة وحركتها وإصدارها وترخيصها وملفات الأطلس.
- `atlas-1x.png` هو الحد الأدنى من أطلس العمل الفني في عقد الحزمة العامة. يجب أن تتضمن الحزمة الرسمية أيضًا متغيرات `atlas-2x.png` و`atlas-4x.png` المطابقة.
- `thumbnail.png` هي المعاينة الصغيرة المعروضة في المعارض وقوائم الحزم.

تحتاج الحزمة الرسمية القابلة للنشر أيضًا إلى `package.json`، `README.md`، `LICENSE`، `NOTICE`، وكل أطلس مسمى ببيانه. ابدأ بـ [دليل تأليف الحزمة](../PACK-AUTHORING.md) واستخدم [حزمة Peek](../packages/pack-peek) كمثال كامل للمصدر.

سيتم ربط أدوات الإنشاء المحسنة هنا عند إصدارها. وحتى ذلك الحين، فإن دليل التأليف وبيانات الحزمة والحزم الرسمية الحالية هي مصدر الحقيقة.

## المساهمة

نرحب بالإصلاحات المدروسة والتحسينات المحددة. إذا أردت اقتراح شخصية رسمية جديدة أو تغيير أكبر، يُرجى أولًا [فتح مسألة](https://github.com/peekling/peekling-characters/issues) حتى نتفق على النطاق ومصدر الرسومات والترخيص.

ستحتاج إلى Node.js 22 أو أحدث. تسجل مساحة العمل npm 11.19.0 كمدير للحزم الخاصة بها.

1. افتح موضوعًا لشخصية جديدة بحيث يمكن مناقشة اسمها ومكانها في المجموعة الرسمية وملكية العمل الفني وترخيصها قبل القيام بالكثير من العمل. لا يتم قبول التغييرات على الحزمة الحالية إلا بعد موافقة مالك الرمز أو المراجع المعين عليها.
2. أنشئ نسخة متفرعة من المستودع ثم استنسخها، وثبّت تبعيات مساحة العمل باستخدام `npm install`.
3. اختر معرّفًا صغيرًا جديدًا مثل `my-friend`. يجب ألا يكرر دليل الأحرف أو اسم البيان أو الحزمة npm. استخدم [حزمة المصدر الكاملة لـ Peek](../packages/pack-peek) كمثال هيكلي وأنشئ `packages/pack-my-friend`.
4. بناء الحدود القابلة للنشر:

   - `package.json` أسماء `@peekling/pack-my-friend`، تعلن عن الإصدار الدلالي، والوصول العام، والترخيص، ودليل المستودع، وبناء البرامج النصية واختبارها، والملفات العامة الدقيقة.
   - `character.json` يستخدم التنسيق 1 ونفس الاسم والإصدار والترخيص. أعطه عنوانًا، ومؤلفًا، ووصفًا، وسجلات أطلس 1x/2x/4x، وحالات الرسوم المتحركة ذات الإطارات والتوقيتات الصحيحة، وجميع اتجاهات الحركة الثمانية، ومقياس افتراضي إيجابي.
   - `thumbnail.png` صالح 64x64 PNG. تستخدم الشبكة الرسمية الحالية خلايا منطقية بحجم 64 بكسل، و16 عمودًا، و3 صفوف، وبالتالي فإن الأطالس الثلاثة هي 1024x192، و2048x384، و4096x768. يجب أن تتوافق كثافتها المعلنة وحجم الخلية وأبعادها وتجزئة SHA-256.
   - إضافة `README.md`، `LICENSE`، `NOTICE`، اختبار مركز، وكل أطلس مرجعي بالمانيفست. احتفظ بمساعدي الفن والتطوير المصدري خارج قائمة `files`.
   -  بالنسبة لمسار الفن اليدوي الحالي، أضف الحرف إلى `scripts/build-character-roster.mjs` مع بيانات التعريف المطلوبة وسجلات الحركة. قم بتوفير نفس مدخلات مصدر المستودع فقط التي تستخدمها الحزم الموجودة حتى يتمكن `npm run build` من إعادة إنتاج الأطالس بدلاً من قبول المخرجات المحررة يدويًا.

5.  قم بإجراء اختبار الحزمة المركزة وبناءها. بالنسبة إلى Peek، الأوامر المكافئة هي:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. إذا تغيرت بيانات تعريف الحزمة، فأعد إنشاء هذا الجدول باستخدام `npm run roster`، ثم قم بتشغيل بوابة المستودع الكاملة باستخدام `npm run check`.
7. تشغيل `npm run changeset` وتضمين كل عبوة متأثرة. يحتاج كل تغيير في الملف ضمن دليل الحزمة إلى قرار بشأن الإصدار، بما في ذلك الفن وJSON والبيانات الوصفية والمستندات والاختبارات والملفات المصدر. اختر المستوى بنفسك:

   - `patch` للإصلاحات أو التصحيحات أو الضبط المتوافقة
   - `minor` للحصول على إضافات ذات معنى ومتوافقة مع الإصدارات السابقة أو تحديثات إبداعية كبيرة
   - `major` لتغيير كاسر للتوافق أو للاستبدال أو الإزالة

   الأتمتة لا تخمن المستوى أبدًا من حجم أو نوع التغيير الذي قمت به.

8. افتح طلب سحب يشرح طابع الشخصية ومصدر الرسومات وترخيصها وما الذي تغير ولماذا يناسبه مستوى الإصدار المختار.

قبل المراجعة، يتطلب التكامل المستمر لطلب السحب خطة إصدار لكل حزمة تغيرت. ثم يتحقق من عقد البيان وتعريفات الحالات، وتفرّد المعرّفات، وتوفر أسماء npm للحزم الجديدة، ومسارات الصور الآمنة وتجزئاتها، وسلامة PNG، وحجم الصورة المصغرة، ووجود أطالس 1x و2x و4x وتناسب أبعادها، والاختبارات، والبنيات القابلة لإعادة الإنتاج، وحدود الحجم، والترخيص، والملفات الدقيقة في التشغيل التجريبي لكل حزمة npm. تمنع هذه الفحوص التعارضات العرضية وأخطاء التغليف. ويظل المراجعون البشريون هم من يقررون ما إذا كانت الشخصية أو التغيير ينتمي إلى المجموعة الرسمية.

بعد وصول تغيير تم التحقق منه إلى `main`، تُعد Changesets طلب سحب منفصلًا للإصدار من أجل مراجعته. يظل النشر الأول على npm إجراءً متعمدًا من المشرف. لا يمكن تفعيل النشر التلقائي عبر OIDC إلا بعد وجود الحزم الأولية وثقة كل حزمة في سير عمل النشر الخاص بهذا المستودع. وحتى يكتمل هذا الإعداد، لا يعني وجود المصدر في المستودع أن الحزمة متاحة من npm. راجع [التحضير للإصدار](../RELEASING.md) للاطلاع على سير عمل الصيانة الكامل.

هذا المستودع هو الموطن المنسق لحزم Peekling الرسمية، وليس كتالوج المجتمع العالمي. يمكن للمنشئين نشر حزم الطرف الثالث المتوافقة من حزمتهم الخاصة أو حدود الاستضافة الثابتة بترخيص عام صالح.

## الترخيص والإسناد

أدوات المستودع والاختبارات والوثائق مرخصة بموجب [Apache-2.0](../LICENSE). جميع حزم الشخصيات الرسمية الـ 28 الحالية تعلن أيضًا عن Apache-2.0 وتحمل ملفات `LICENSE` و`NOTICE` الخاصة بها.

يجب أن تتبع عملية إعادة التوزيع شروط الترخيص والإشعار المعمول بها لكل حزمة. لا يتم منح اسم Peekling والشعار والتميمة الرسمية وهوية العلامة التجارية المميزة الأخرى بواسطة ترخيص الأدوات ما لم ينص ترخيص أصول محدد على خلاف ذلك. انظر [الترخيص والإسناد](../LICENSING.md) و [NOTICE](../NOTICE) و [AUTHORS](../AUTHORS) للحصول على السجلات الكاملة.

</div>

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![شريط ضيق من العشب والزهور البرية وأوراق الشجر ومسار متعرج](https://cdn.peekling.com/v1/community/peekling-ground-footer-v1.png)
