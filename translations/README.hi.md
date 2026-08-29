![Peekling पात्र एक उज्ज्वल, स्वागत योग्य परिदृश्य में एकत्रित हुए](https://cdn.peekling.com/v1/community/peekling-community-banner.png)

# आधिकारिक Peekling कैरेक्टर पैक

उन छोटे पात्रों से मिलें जो Peekling को इसका व्यक्तित्व देते हैं।

यह Peekling परियोजना द्वारा बनाए और संभाले जाने वाले कैरेक्टर पैक का आधिकारिक रिपॉजिटरी है। प्रत्येक पैक बताता है कि कोई पात्र कैसा दिखता, चलता और प्रतिक्रिया करता है, और संगत Peekling रनटाइम में अपना परिचय कैसे देता है। ये पैक ओपन सोर्स हैं, इनमें केवल डेटा होता है और हर पैक का संस्करण अलग से प्रबंधित किया जाता है।

पात्र कैसे तैयार किया जाता है, यह जानने के लिए [Peekling संगठन](https://github.com/peekling) पर जाएँ या [पैक बनाने की मार्गदर्शिका](../PACK-AUTHORING.md) पढ़ें।

## कैरेक्टर पैक क्या है?

कैरेक्टर पैक डेटा और चित्रों का एक छोटा संग्रह है। इसमें पात्र का कोई निष्पादन योग्य व्यवहार शामिल नहीं होता।

प्रत्येक आधिकारिक पैक में शामिल हैं:

- पात्र की पहचान, अवस्थाएँ, चाल, संस्करण और लाइसेंस दर्ज करने वाला `character.json` मेनिफेस्ट
- अलग-अलग डिस्प्ले घनत्व के लिए 1x, 2x और 4x PNG एटलस
- `thumbnail.png` पूर्वावलोकन
- उसके अपने `README.md`, `LICENSE` और `NOTICE`

मेनिफेस्ट प्रत्येक एटलस के लिए सुरक्षित सापेक्ष छवि पथ और SHA-256 हैश रिकॉर्ड करता है। विकास स्क्रिप्ट, परीक्षण, स्रोत कला और उत्पन्न QA रिपोर्ट इस रिपॉजिटरी में और प्रकाशित पैकेज सीमा के बाहर रहती हैं।

## Peekling पात्र

यह तालिका वर्तमान पैकेज मेटाडेटा और लाइव npm रजिस्ट्री से उत्पन्न होती है। प्रकाशित पंक्तियाँ उनके सत्यापित npm संस्करण से लिंक हैं। जो पैक अभी भी केवल स्रोत हैं वे स्पष्ट `(अप्रकाशित)` लेबल और बिना npm लिंक के साथ दृश्यमान रहते हैं।

<!-- PACK_ROSTER_START -->
25 कैरेक्टर पैक प्रकाशित हो चुके हैं और npm से इंस्टॉल किए जा सकते हैं। 3 पैक आगे के काम के लिए अप्रकाशित दिखाए गए हैं।

| पूर्वावलोकन | चरित्र | विवरण | संस्करण | पैकेज |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | एक अपनापन भरा वन-भालू, जिसकी धीमी चाल भरोसा दिलाती है। | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | एक गोल बर्गर दोस्त जो आगे की ओर लुढ़कता है और धीरे से बैठ जाता है। | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | चमकदार छज्जा और शांत पंजे वाली एक तेज़ साइबर बिल्ली। | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | टोस्ट के आकार का एक दोस्त, जो बिना कोई टुकड़ा गिराए उछलता है। | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | एक उज्ज्वल, साहसी प्रवृत्ति वाला जंग-लाल वन मित्र। | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | एक चतुर टेराकोटा लोमड़ी हमेशा अगले निशान के लिए तैयार रहती है। | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | एक चमकता तात्विक प्रकाश-पुंज, जो जिज्ञासा के पीछे कहीं भी बह निकलता है। | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | एक छोटा चक्राकार ग्रह अपनी ही चमकीली कक्षा में घूम रहा है। | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | एक स्वप्निल चंद्रमा मित्र एक शांत छोटी कक्षा का पता लगा रहा है। | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | मुलायम, लचीले कदमों वाला एक लैवेंडर-कान वाला खरगोश। | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | एक पुदीना-हरा मेंढक जो हर्षित छलांग में पृष्ठ को पार करता है। | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | एक जिज्ञासु छछूंदर जो बिल खोदता है, भागता है, और मुस्कुराता हुआ बाहर आता है। | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | एक प्यारा सुशी मित्र, जो चावल से बने शरीर को धीरे-धीरे हिलाकर चलता है। | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | एक ब्रह्मांडीय प्राणी जो छोटी दुनियाओं के बीच धीरे-धीरे चरणबद्ध होता है। | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | शानदार डिस्प्ले और सटीक छोटे कदमों वाला एक गोल छोटा रोबोट। | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | एक जिज्ञासु बिल्ली-लोमड़ी, जो पॉइंटर का पीछा करती है और छोटी जीत का जश्न मनाती है। | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | एक गर्म सोने की कोर्गी जो हर छोटे उत्सव में शामिल होती है। | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | एक ऊनी मेमना जो बादलों जैसे मुलायम पैरों पर आगे बढ़ता है। | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | एक विचारशील विद्वान उल्लू जो उज्ज्वल विचारों के बीच फड़फड़ाता है। | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | एक क्लॉकवर्क बीटल जो सावधानीपूर्वक उद्देश्य के साथ घूमता है। | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | एक जिज्ञासु रैकून जो हर चमकदार आश्चर्य की ओर दबे पाँव चलता है। | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | एक धूप साथी जो गर्म, उज्ज्वल नाड़ी के साथ तैरता है। | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | एक जेब के आकार की पृथ्वी शांत, स्थिर स्पिन के साथ घूम रही है। | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | एक उज्ज्वल टैको मित्र बिना कुछ गिराए तेजी से आगे बढ़ता है। | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | छोटे पश्चिमी स्वैगर के साथ एक हंसमुख कैक्टस पथिक। | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | एक बहादुर छोटा स्लाइम, जिसका उछलता साहस पूरे कमरे को भर देता है। | `0.1.0` (अप्रकाशित) | `@peekling/pack-vali` (अप्रकाशित) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | एक स्कार्फ में लिपटा हुआ पेंगुइन, जिसके किनारे-किनारे कोमल चाल है। | `0.1.0` (अप्रकाशित) | `@peekling/pack-waddle` (अप्रकाशित) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | एक जीवंत पिज्जा स्लाइस जो आत्मविश्वास से झुकता है। | `0.1.0` (अप्रकाशित) | `@peekling/pack-zesty` (अप्रकाशित) |
<!-- PACK_ROSTER_END -->

पैकेज मेटाडेटा बदलने के बाद या रिलीज़ के बाद `npm run roster` चलाएँ। `npm run roster:check` npm प्रकाशन स्थिति को सत्यापित करता है और प्रत्येक अप्रकाशित पैकेज को स्पष्ट रूप से लेबल रखता है।

## पैक का उपयोग करना

तालिका में कोई पात्र मिलने पर, सत्यापित और इंस्टॉल किए जा सकने वाले संस्करण के लिए उसके पैकेज लिंक से npm पर जाएँ। उसकी स्रोत डायरेक्टरी में सत्यापन कमांड और लाइसेंस रिकॉर्ड दिए गए हैं, जबकि पात्र की अवस्थाओं, चाल, कलाकृति और क्षमताओं के लिए `character.json` ही प्रामाणिक स्रोत है।

केवल npm लिंक वाली पंक्तियों को इंस्टॉल करने योग्य के रूप में सत्यापित किया गया है। `(अप्रकाशित)` पंक्ति भविष्य में अनुवर्ती कार्रवाई के लिए रिपॉजिटरी स्रोत की ओर इशारा करती है और यह उपलब्धता का दावा नहीं है। स्रोत निर्देशिकाओं में npm से नया कार्य भी हो सकता है। Peekling रनटाइम इन कैरेक्टर पैक्स से अलग है और मेनिफेस्ट को लोड करने और इसके संदर्भित एटलस को प्रस्तुत करने के लिए जिम्मेदार है।

रिपॉजिटरी रूट पर कार्यक्षेत्र निजी है और प्रकाशित नहीं किया जा सकता है। केवल व्यक्तिगत `packages/pack-*` कार्यस्थान रिलीज़ सीमाएँ हैं।

## एक पात्र बनाएँ

क्या आपके पास एक नए छोटे दोस्त के लिए कोई विचार है? किसी पैक के रचनात्मक मूल में तीन भाग होते हैं:

- `character.json` चरित्र, उसकी एनीमेशन स्थिति, आंदोलन, संस्करण, लाइसेंस और एटलस फ़ाइलों का वर्णन करता है।
- `atlas-1x.png` सामान्य पैक अनुबंध में न्यूनतम कलाकृति एटलस है। एक आधिकारिक पैक में मिलान वाले `atlas-2x.png` और `atlas-4x.png` वेरिएंट भी शामिल होने चाहिए।
- `thumbnail.png` गैलरी और पैकेज लिस्टिंग में दिखाया गया छोटा पूर्वावलोकन है।

एक आधिकारिक प्रकाशन योग्य पैक को `package.json`, `README.md`, `LICENSE`, `NOTICE`, और इसके मेनिफेस्ट द्वारा नामित प्रत्येक एटलस की भी आवश्यकता होती है। [पैक संलेखन मार्गदर्शिका](../PACK-AUTHORING.md) से प्रारंभ करें और संपूर्ण स्रोत उदाहरण के रूप में [Peek का पैकेज](../packages/pack-peek) का उपयोग करें।

उन्नत निर्माण उपकरण जारी होने पर उन्हें यहां लिंक किया जाएगा। तब तक, संलेखन मार्गदर्शिका, पैकेज मैनिफ़ेस्ट और वर्तमान आधिकारिक पैक सत्य का स्रोत हैं।

## योगदान

सोच-समझकर किए गए सुधारों और स्पष्ट दायरे वाले बदलावों का स्वागत है। नया आधिकारिक पात्र या बड़ा बदलाव प्रस्तावित करने से पहले कृपया [एक issue खोलें](https://github.com/peekling/peekling-characters/issues), ताकि हम दायरे, कलाकृति के स्रोत और लाइसेंस पर सहमत हो सकें।

आपको Node.js 22 या बाद की आवश्यकता होगी। कार्यक्षेत्र अपने पैकेज प्रबंधक के रूप में npm 11.19.0 को रिकॉर्ड करता है।

1. नए पात्र के लिए issue खोलें, ताकि अधिक काम शुरू करने से पहले उसके नाम, आधिकारिक संग्रह में स्थान, कलाकृति के स्वामित्व और लाइसेंस पर चर्चा हो सके। मौजूदा पैक में बदलाव तभी स्वीकार किए जाते हैं जब उसके कोड स्वामी या नामित समीक्षक उन्हें मंजूरी दें।
2. फोर्क और रिपॉजिटरी को क्लोन करें, फिर `npm install` के साथ कार्यक्षेत्र निर्भरता स्थापित करें।
3. एक नया लोअरकेस पहचानकर्ता चुनें जैसे `my-friend`। इसमें किसी वर्ण निर्देशिका, प्रकट नाम या npm पैकेज की नकल नहीं होनी चाहिए। संरचनात्मक उदाहरण के रूप में [Peek का संपूर्ण स्रोत पैकेज](../packages/pack-peek) का उपयोग करें और `packages/pack-my-friend` बनाएं।
4. प्रकाशन योग्य सीमा बनाएं:

   - `package.json` नाम `@peekling/pack-my-friend`, एक सिमेंटिक संस्करण, सार्वजनिक पहुंच, लाइसेंस, रिपोजिटरी निर्देशिका, निर्माण और परीक्षण स्क्रिप्ट और सटीक सार्वजनिक फ़ाइलों की घोषणा करता है।
   - `character.json` प्रारूप 1 और समान नाम, संस्करण और लाइसेंस का उपयोग करता है। इसे एक शीर्षक, लेखक, विवरण, 1x/2x/4x एटलस रिकॉर्ड, वैध फ्रेम और समय के साथ एनीमेशन स्थिति, सभी आठ आंदोलन दिशाएं और एक सकारात्मक डिफ़ॉल्ट स्केल दें।
   - `thumbnail.png` एक वैध 64x64 PNG है। वर्तमान आधिकारिक ग्रिड 64-पिक्सेल तार्किक कोशिकाओं, 16 कॉलम और 3 पंक्तियों का उपयोग करता है, इसलिए तीन एटलस 1024x192, 2048x384 और 4096x768 हैं। उनका घोषित घनत्व, सेल आकार, आयाम और SHA-256 हैश सहमत होना चाहिए।
   - `README.md`, `LICENSE`, `NOTICE`, एक केंद्रित परीक्षण और मेनिफेस्ट द्वारा संदर्भित प्रत्येक एटलस जोड़ें। स्रोत कला और विकास सहायकों को `files` सूची से बाहर रखें।
   - वर्तमान मैनुअल आर्ट पाइपलाइन के लिए, आवश्यक मेटाडेटा और मूवमेंट रिकॉर्ड के साथ `scripts/build-character-roster.mjs` में कैरेक्टर जोड़ें। मौजूदा पैक्स द्वारा उपयोग किए गए समान रिपॉजिटरी-ओनली स्रोत इनपुट की आपूर्ति करें ताकि `npm run build` हाथ से संपादित आउटपुट स्वीकार करने के बजाय एटलस को पुन: पेश कर सके।

5. फोकस्ड पैकेज परीक्षण चलाएँ और निर्माण करें। Peek के लिए, समतुल्य आदेश हैं:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. यदि पैकेज मेटाडेटा बदल गया है, तो इस तालिका को `npm run roster` के साथ पुन: उत्पन्न करें, फिर `npm run check` के साथ पूर्ण रिपोजिटरी गेट चलाएँ।
7.  चलाएँ `npm run changeset` और प्रत्येक प्रभावित पैक को शामिल करें। पैक निर्देशिका के अंतर्गत प्रत्येक फ़ाइल परिवर्तन के लिए संस्करण निर्णय की आवश्यकता होती है, जिसमें कला, JSON, मेटाडेटा, दस्तावेज़, परीक्षण और स्रोत फ़ाइलें शामिल हैं। स्तर स्वयं चुनें:
   - संगत सुधार या ट्यूनिंग के लिए `patch`
   - `minor` सार्थक बैकवर्ड-संगत परिवर्धन या पर्याप्त रचनात्मक अपडेट के लिए
   - `major` ब्रेकिंग परिवर्तन, प्रतिस्थापन, या हटाने के लिए

   ऑटोमेशन कभी भी आपके परिवर्तन के आकार या प्रकार से स्तर का अनुमान नहीं लगाता है।

8. पुल अनुरोध खोलकर पात्र, उसकी कलाकृति के स्रोत और लाइसेंस, किए गए बदलाव और चुने गए संस्करण स्तर का कारण बताएँ।

समीक्षा से पहले, पुल-रिक्वेस्ट सीआई को प्रत्येक बदले गए पैक के लिए एक रिलीज़ योजना की आवश्यकता होती है। इसके बाद यह प्रकट अनुबंध और राज्य परिभाषाओं, पहचानकर्ता विशिष्टता, नए पैक के लिए अप्रयुक्त npm नाम, सुरक्षित छवि पथ और हैश, PNG अखंडता, थंबनेल आकार, 1x/2x/4x एटलस अस्तित्व और स्केल ज्यामिति, परीक्षण, प्रतिलिपि प्रस्तुत करने योग्य बिल्ड, आकार सीमा, लाइसेंसिंग, और प्रत्येक npm पैकेज ड्राई-रन में सटीक फ़ाइलों की जांच करता है। ये जाँचें आकस्मिक टकराव और पैकेजिंग गलतियों को रोकती हैं. मानव समीक्षक अभी भी तय करते हैं कि कोई पात्र या परिवर्तन आधिकारिक संग्रह में है या नहीं।

एक मान्य परिवर्तन `main` तक पहुंचने के बाद, Changesets समीक्षा के लिए एक अलग संस्करण पुल अनुरोध तैयार करता है। पहला npm प्रकाशन एक जानबूझकर अनुरक्षक कार्रवाई बनी हुई है। प्रारंभिक पैकेज मौजूद होने के बाद ही स्वचालित OIDC प्रकाशन सक्षम किया जा सकता है और प्रत्येक पैकेज इस रिपॉजिटरी के प्रकाशन वर्कफ़्लो पर भरोसा करता है। जब तक वह बूटस्ट्रैप पूरा नहीं हो जाता, रिपॉजिटरी स्रोत यह वादा नहीं है कि कोई पैकेज npm से उपलब्ध है। संपूर्ण अनुरक्षक प्रवाह के लिए [रिहाई की तैयारी](../RELEASING.md) देखें।

यह रिपॉजिटरी आधिकारिक Peekling पैक्स के लिए क्यूरेटेड होम है, वैश्विक समुदाय कैटलॉग नहीं। निर्माता वैध सार्वजनिक लाइसेंस के साथ अपने स्वयं के पैकेज या स्थिर-होस्टिंग सीमाओं से संगत तृतीय-पक्ष पैक प्रकाशित कर सकते हैं।

## लाइसेंसिंग और एट्रिब्यूशन

रिपॉजिटरी टूलींग, परीक्षण और दस्तावेज़ीकरण को [Apache-2.0](../LICENSE) के तहत लाइसेंस प्राप्त है। सभी 28 वर्तमान आधिकारिक कैरेक्टर पैक भी Apache-2.0 घोषित करते हैं और उनकी अपनी `LICENSE` और `NOTICE` फ़ाइलें होती हैं।

पुनर्वितरण को प्रत्येक पैक के लिए लागू लाइसेंस और नोटिस शर्तों का पालन करना होगा। Peekling नाम, लोगो, आधिकारिक शुभंकर, और अन्य विशिष्ट ब्रांड पहचान टूलींग लाइसेंस द्वारा प्रदान नहीं की जाती है जब तक कि कोई विशिष्ट परिसंपत्ति लाइसेंस अन्यथा न कहे। संपूर्ण रिकॉर्ड के लिए [लाइसेंसिंग और एट्रिब्यूशन](../LICENSING.md), [NOTICE](../NOTICE), और [AUTHORS](../AUTHORS) देखें।

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![घास की एक संकरी पट्टी, जंगली फूल, पत्ते और एक घुमावदार रास्ता](https://cdn.peekling.com/v1/community/peekling-ground-footer-v1.png)
