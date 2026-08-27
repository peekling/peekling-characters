![Các nhân vật Peekling tụ tập trong một khung cảnh tươi sáng, chào đón](../assets/peekling-community-banner.png)

# Gói nhân vật chính thức Peekling

Gặp gỡ những nhân vật nhỏ tạo nên cá tính của Peekling.

Đây là kho lưu trữ chính thức cho các gói nhân vật do dự án Peekling tạo và duy trì. Mỗi gói mô tả diện mạo, chuyển động, phản ứng và cách nhân vật tự giới thiệu với một môi trường chạy Peekling tương thích. Các gói đều là mã nguồn mở, chỉ chứa dữ liệu và được quản lý phiên bản độc lập.

Hãy truy cập [Tổ chức Peekling](https://github.com/peekling) hoặc đọc [hướng dẫn soạn thảo gói](../PACK-AUTHORING.md) để biết cách ghép các ký tự lại với nhau.

## Gói nhân vật là gì?

Gói nhân vật là một tập hợp nhỏ gồm dữ liệu và hình ảnh. Gói không chứa mã thực thi điều khiển hành vi của nhân vật.

Mỗi gói chính thức bao gồm:

- một tệp kê khai `character.json` chứa danh tính, trạng thái, chuyển động, phiên bản và giấy phép của nhân vật
- các tập bản đồ PNG 1x, 2x và 4x dành cho những mật độ hiển thị khác nhau
- một ảnh xem trước `thumbnail.png`
- các tệp `README.md`, `LICENSE` và `NOTICE` riêng

Tệp kê khai ghi lại các đường dẫn hình ảnh tương đối an toàn và hàm băm SHA-256 cho mỗi tập bản đồ. Các tập lệnh phát triển, thử nghiệm, ảnh nguồn và báo cáo QA được tạo vẫn nằm trong kho lưu trữ này và nằm ngoài ranh giới gói đã xuất bản.

## Peekling ký tự

Bảng này được tạo từ siêu dữ liệu gói hiện tại và sổ đăng ký npm trực tiếp. Các hàng đã xuất bản liên kết đến phiên bản npm đã được xác minh của chúng. Các gói vẫn chỉ ở nguồn vẫn hiển thị với nhãn `(chưa phát hành)` rõ ràng và không có liên kết npm.

<!-- PACK_ROSTER_START -->
25 gói nhân vật đã được phát hành và có thể cài đặt từ npm. 3 gói khác được đánh dấu là chưa phát hành để tiếp tục hoàn thiện sau này.

| Xem trước | Nhân vật | Mô tả | Phiên bản | Gói |
| :---: | --- | --- | --- | --- |
| ![Bramble](../packages/pack-bramble/thumbnail.png) | [Bramble](../packages/pack-bramble) | Một chú gấu rừng ấm áp với dáng đi chậm rãi, tạo cảm giác yên tâm. | `0.1.0` | [`@peekling/pack-bramble`](https://www.npmjs.com/package/@peekling/pack-bramble/v/0.1.0) |
| ![Buns](../packages/pack-buns/thumbnail.png) | [Buns](../packages/pack-buns) | Một người bạn bánh mì kẹp thịt tròn trịa lăn về phía trước và đặt mình xuống một cách nhẹ nhàng. | `0.1.0` | [`@peekling/pack-buns`](https://www.npmjs.com/package/@peekling/pack-buns/v/0.1.0) |
| ![Byte](../packages/pack-byte/thumbnail.png) | [Byte](../packages/pack-byte) | Một con mèo mạng nhanh nhẹn với tấm che sáng và bàn chân yên tĩnh. | `0.1.0` | [`@peekling/pack-byte`](https://www.npmjs.com/package/@peekling/pack-byte/v/0.1.0) |
| ![Crumb](../packages/pack-crumb/thumbnail.png) | [Crumb](../packages/pack-crumb) | Một người bạn nhỏ bằng lát bánh mì nướng, tung tăng mà không làm rơi một mẩu vụn nào. | `0.1.0` | [`@peekling/pack-crumb`](https://www.npmjs.com/package/@peekling/pack-crumb/v/0.1.0) |
| ![Ember](../packages/pack-ember/thumbnail.png) | [Ember](../packages/pack-ember) | Một người bạn rừng đỏ rỉ sét với tính cách tươi sáng, thích phiêu lưu. | `0.1.0` | [`@peekling/pack-ember`](https://www.npmjs.com/package/@peekling/pack-ember/v/0.1.0) |
| ![Fable](../packages/pack-fable/thumbnail.png) | [Fable](../packages/pack-fable) | Một chú cáo đất nung thông minh luôn sẵn sàng cho chặng đường tiếp theo. | `0.1.0` | [`@peekling/pack-fable`](https://www.npmjs.com/package/@peekling/pack-fable/v/0.1.0) |
| ![Glint](../packages/pack-glint/thumbnail.png) | [Glint](../packages/pack-glint) | Một đốm sáng nguyên tố trôi theo tiếng gọi của những điều kỳ diệu. | `0.1.0` | [`@peekling/pack-glint`](https://www.npmjs.com/package/@peekling/pack-glint/v/0.1.0) |
| ![Halo](../packages/pack-halo/thumbnail.png) | [Halo](../packages/pack-halo) | Một hành tinh nhỏ có vành đai lăn qua quỹ đạo sáng của chính nó. | `0.1.0` | [`@peekling/pack-halo`](https://www.npmjs.com/package/@peekling/pack-halo/v/0.1.0) |
| ![Luna](../packages/pack-luna/thumbnail.png) | [Luna](../packages/pack-luna) | Một người bạn mặt trăng mộng mơ đang lần theo một quỹ đạo nhỏ yên tĩnh. | `0.1.0` | [`@peekling/pack-luna`](https://www.npmjs.com/package/@peekling/pack-luna/v/0.1.0) |
| ![Mochi](../packages/pack-mochi/thumbnail.png) | [Mochi](../packages/pack-mochi) | Một chú thỏ tai hoa oải hương với những bước đi mềm mại, uyển chuyển. | `0.1.0` | [`@peekling/pack-mochi`](https://www.npmjs.com/package/@peekling/pack-mochi/v/0.1.0) |
| ![Moss](../packages/pack-moss/thumbnail.png) | [Moss](../packages/pack-moss) | Một chú ếch màu xanh bạc hà băng qua trang giấy với những bước nhảy vui vẻ. | `0.1.0` | [`@peekling/pack-moss`](https://www.npmjs.com/package/@peekling/pack-moss/v/0.1.0) |
| ![Nib](../packages/pack-nib/thumbnail.png) | [Nib](../packages/pack-nib) | Một chú chuột chũi tò mò đào hang, lướt đi rồi trồi lên với nụ cười. | `0.1.0` | [`@peekling/pack-nib`](https://www.npmjs.com/package/@peekling/pack-nib/v/0.1.0) |
| ![Nori](../packages/pack-nori/thumbnail.png) | [Nori](../packages/pack-nori) | Một người bạn sushi đáng yêu, nhẹ nhàng lê bước bằng thân cơm mềm mại. | `0.1.0` | [`@peekling/pack-nori`](https://www.npmjs.com/package/@peekling/pack-nori/v/0.1.0) |
| ![Nova](../packages/pack-nova/thumbnail.png) | [Nova](../packages/pack-nova) | Một sinh vật vũ trụ di chuyển nhẹ nhàng giữa các thế giới nhỏ bé. | `0.1.0` | [`@peekling/pack-nova`](https://www.npmjs.com/package/@peekling/pack-nova/v/0.1.0) |
| ![Orbit](../packages/pack-orbit/thumbnail.png) | [Orbit](../packages/pack-orbit) | Một robot nhỏ tròn trịa với màn hình sắc nét và những bước chân tí hon, chính xác. | `0.1.0` | [`@peekling/pack-orbit`](https://www.npmjs.com/package/@peekling/pack-orbit/v/0.1.0) |
| ![Peek](../packages/pack-peek/thumbnail.png) | [Peek](../packages/pack-peek) | Một chú mèo con tò mò làm theo gợi ý và ăn mừng những chiến thắng nhỏ. | `0.1.0` | [`@peekling/pack-peek`](https://www.npmjs.com/package/@peekling/pack-peek/v/0.1.0) |
| ![Pip](../packages/pack-pip/thumbnail.png) | [Pip](../packages/pack-pip) | Một chú chó corgi màu vàng ấm áp chạy đến tham gia mọi lễ kỷ niệm nhỏ. | `0.1.0` | [`@peekling/pack-pip`](https://www.npmjs.com/package/@peekling/pack-pip/v/0.1.0) |
| ![Purl](../packages/pack-purl/thumbnail.png) | [Purl](../packages/pack-purl) | Một chú cừu non lông xù lao về phía trước trên đôi chân mềm mại như mây. | `0.1.0` | [`@peekling/pack-purl`](https://www.npmjs.com/package/@peekling/pack-purl/v/0.1.0) |
| ![Quill](../packages/pack-quill/thumbnail.png) | [Quill](../packages/pack-quill) | Một con cú học giả chu đáo đang dao động giữa những ý tưởng sáng suốt. | `0.1.0` | [`@peekling/pack-quill`](https://www.npmjs.com/package/@peekling/pack-quill/v/0.1.0) |
| ![Rivet](../packages/pack-rivet/thumbnail.png) | [Rivet](../packages/pack-rivet) | Một con bọ cơ khí di chuyển với mục đích cẩn thận. | `0.1.0` | [`@peekling/pack-rivet`](https://www.npmjs.com/package/@peekling/pack-rivet/v/0.1.0) |
| ![Rook](../packages/pack-rook/thumbnail.png) | [Rook](../packages/pack-rook) | Một chú gấu trúc tò mò luôn nhón chân trước mọi bất ngờ sáng bóng. | `0.1.0` | [`@peekling/pack-rook`](https://www.npmjs.com/package/@peekling/pack-rook/v/0.1.0) |
| ![Sol](../packages/pack-sol/thumbnail.png) | [Sol](../packages/pack-sol) | Một người bạn đồng hành đầy nắng, bồng bềnh với nhịp đập ấm áp, rạng rỡ. | `0.1.0` | [`@peekling/pack-sol`](https://www.npmjs.com/package/@peekling/pack-sol/v/0.1.0) |
| ![Terra](../packages/pack-terra/thumbnail.png) | [Terra](../packages/pack-terra) | Một Trái đất có kích thước bỏ túi đang lướt đi với một vòng quay êm đềm, ổn định. | `0.1.0` | [`@peekling/pack-terra`](https://www.npmjs.com/package/@peekling/pack-terra/v/0.1.0) |
| ![Tico](../packages/pack-tico/thumbnail.png) | [Tico](../packages/pack-tico) | Một người bạn taco lanh lợi, bước nhanh mà không làm rơi thứ gì. | `0.1.0` | [`@peekling/pack-tico`](https://www.npmjs.com/package/@peekling/pack-tico/v/0.1.0) |
| ![Tumble](../packages/pack-tumble/thumbnail.png) | [Tumble](../packages/pack-tumble) | Một chú xương rồng lữ hành vui vẻ với chút phong thái cao bồi. | `0.1.0` | [`@peekling/pack-tumble`](https://www.npmjs.com/package/@peekling/pack-tumble/v/0.1.0) |
| ![Vali](../packages/pack-vali/thumbnail.png) | [Vali](../packages/pack-vali) | Một bé slime dũng cảm với nguồn năng lượng nảy bật lan khắp căn phòng. | `0.1.0` (chưa phát hành) | `@peekling/pack-vali` (chưa phát hành) |
| ![Waddle](../packages/pack-waddle/thumbnail.png) | [Waddle](../packages/pack-waddle) | Một chú chim cánh cụt quấn khăn quàng cổ với dáng đi lạch bạch nhẹ nhàng từ bên này sang bên kia. | `0.1.0` (chưa phát hành) | `@peekling/pack-waddle` (chưa phát hành) |
| ![Zesty](../packages/pack-zesty/thumbnail.png) | [Zesty](../packages/pack-zesty) | Một lát bánh pizza sống động chạy với độ nghiêng tự tin. | `0.1.0` (chưa phát hành) | `@peekling/pack-zesty` (chưa phát hành) |
<!-- PACK_ROSTER_END -->

Chạy `npm run roster` sau khi thay đổi siêu dữ liệu gói hoặc sau khi phát hành. `npm run roster:check` xác minh trạng thái xuất bản npm và giữ cho mọi gói chưa được phát hành đều được dán nhãn rõ ràng.

## Sử dụng gói

Khi một nhân vật xuất hiện trong bảng, hãy mở liên kết gói trên npm để xem phiên bản có thể cài đặt đã được xác minh. Thư mục mã nguồn ghi lại lệnh xác thực và hồ sơ giấy phép, còn `character.json` vẫn là nguồn tham chiếu chính thức cho trạng thái, chuyển động, hình ảnh và khả năng của nhân vật.

Chỉ những hàng có liên kết npm mới được xác minh là có thể cài đặt. Hàng `(chưa phát hành)` trỏ đến mã nguồn trong kho lưu trữ để tiếp tục hoàn thiện sau này, không khẳng định gói đã sẵn dùng. Thư mục mã nguồn cũng có thể chứa thay đổi mới hơn phiên bản trên npm. Môi trường chạy Peekling tách biệt với các gói nhân vật này và chịu trách nhiệm tải tệp kê khai cũng như hiển thị tập bản đồ được tham chiếu.

Không gian làm việc ở thư mục gốc của kho lưu trữ là riêng tư và không thể xuất bản. Chỉ từng không gian làm việc `packages/pack-*` mới là đơn vị phát hành.

## Tạo nhân vật

Bạn có ý tưởng gì cho một người bạn nhỏ mới không? Cốt lõi sáng tạo của gói có ba phần:

- `character.json` mô tả nhân vật, trạng thái hoạt hình, chuyển động, phiên bản, giấy phép và tập bản đồ.
- `atlas-1x.png` là tập bản đồ tác phẩm nghệ thuật tối thiểu trong hợp đồng gói chung. Gói chính thức cũng phải bao gồm các biến thể `atlas-2x.png` và `atlas-4x.png` phù hợp.
- `thumbnail.png` là bản xem trước nhỏ được hiển thị trong thư viện và danh sách gói.

Gói có thể xuất bản chính thức cũng cần `package.json`, `README.md`, `LICENSE`, `NOTICE` và mọi tập bản đồ được đặt tên theo bảng kê khai của nó. Bắt đầu với [hướng dẫn soạn thảo gói](../PACK-AUTHORING.md) và sử dụng [Gói của Peek](../packages/pack-peek) làm ví dụ nguồn hoàn chỉnh.

Các công cụ sáng tạo nâng cao sẽ được liên kết tại đây khi chúng được phát hành. Cho đến lúc đó, hướng dẫn soạn thảo, bản kê khai gói và các gói chính thức hiện tại là nguồn gốc của sự thật.

## Đóng góp

Các bản sửa lỗi chu đáo và cải tiến tập trung đều được chào đón. Nếu bạn muốn đề xuất một nhân vật chính thức mới hoặc một thay đổi lớn hơn, trước tiên hãy [mở một vấn đề](https://github.com/peekling/peekling-characters/issues) để chúng ta có thể thống nhất về phạm vi, xuất xứ tác phẩm nghệ thuật và cấp phép.

Bạn sẽ cần Node.js 22 trở lên. Không gian làm việc ghi lại npm 11.19.0 làm trình quản lý gói.

1. Mở vấn đề về nhân vật mới để tên, vị trí trong bộ sưu tập chính thức, quyền sở hữu tác phẩm nghệ thuật và giấy phép có thể được thảo luận trước khi bạn thực hiện nhiều công việc. Những thay đổi đối với gói hiện có chỉ được chấp nhận sau khi chủ sở hữu mã hoặc người đánh giá được chỉ định phê duyệt chúng.
2. Phân nhánh và sao chép kho lưu trữ, sau đó cài đặt các phần phụ thuộc của không gian làm việc bằng `npm install`.
3. Chọn mã định danh chữ thường mới, chẳng hạn như `my-friend`. Nó không được sao chép thư mục ký tự, tên tệp kê khai hoặc gói npm. Sử dụng [Gói nguồn hoàn chỉnh của Peek](../packages/pack-peek) làm ví dụ về cấu trúc và tạo `packages/pack-my-friend`.
4. Xây dựng ranh giới có thể xuất bản:

   - `package.json` đặt tên gói là `@peekling/pack-my-friend`, đồng thời khai báo phiên bản ngữ nghĩa, quyền truy cập công khai, giấy phép, thư mục kho lưu trữ, tập lệnh build và kiểm thử cùng danh sách chính xác các tệp công khai.
   - `character.json` sử dụng định dạng 1 và có cùng tên, phiên bản và giấy phép. Đặt cho nó tiêu đề, tác giả, mô tả, bản ghi atlas 1x/2x/4x, trạng thái hoạt ảnh với khung và thời gian hợp lệ, tất cả tám hướng chuyển động và tỷ lệ mặc định dương.
   - `thumbnail.png` là 64x64 PNG hợp lệ. Lưới chính thức hiện tại sử dụng các ô logic 64 pixel, 16 cột và 3 hàng, do đó, ba tập bản đồ là 1024x192, 2048x384 và 4096x768. Mật độ, kích thước ô, kích thước và hàm băm SHA-256 được khai báo của chúng phải giống nhau.
   - Thêm `README.md`, `LICENSE`, `NOTICE`, bài kiểm tra tập trung và mọi tập bản đồ được tệp kê khai tham chiếu. Giữ những người trợ giúp phát triển và nghệ thuật nguồn bên ngoài danh sách `files`.
   - Với quy trình đồ họa thủ công hiện tại, hãy thêm nhân vật vào `scripts/build-character-roster.mjs` cùng siêu dữ liệu và bản ghi chuyển động bắt buộc. Cung cấp đúng loại dữ liệu đầu vào chỉ dùng trong kho lưu trữ như các gói hiện có để `npm run build` có thể tái tạo tập bản đồ thay vì chấp nhận đầu ra chỉnh sửa bằng tay.

5. Chạy thử nghiệm và xây dựng gói tập trung. Đối với Peek, các lệnh tương đương là:

   ```sh
   npm test -w @peekling/pack-peek
   npm run build -w @peekling/pack-peek
   ```

6. Nếu siêu dữ liệu gói thay đổi, hãy tạo lại bảng này bằng `npm run roster`, sau đó chạy cổng kho lưu trữ đầy đủ với `npm run check`.
7. Chạy `npm run changeset` và bao gồm mọi gói bị ảnh hưởng. Mọi thay đổi tệp trong thư mục gói đều cần có quyết định về phiên bản, bao gồm nghệ thuật, JSON, siêu dữ liệu, tài liệu, bài kiểm tra và tệp nguồn. Hãy tự chọn cấp độ:

   - `patch` để biết các bản sửa lỗi, chỉnh sửa hoặc điều chỉnh tương thích
   - `minor` để có những bổ sung tương thích ngược có ý nghĩa hoặc cập nhật sáng tạo quan trọng
   - `major` cho thay đổi không tương thích ngược, thay thế hoặc loại bỏ

   Hệ thống tự động không bao giờ suy đoán cấp độ dựa trên quy mô hoặc loại thay đổi.

8. Mở một pull request mô tả nhân vật, nguồn gốc và giấy phép của hình ảnh, những gì đã thay đổi và lý do cấp độ phiên bản đã chọn là phù hợp.

Trước khi xem xét, CI của pull request yêu cầu kế hoạch phát hành cho từng gói đã thay đổi. Sau đó, CI kiểm tra hợp đồng tệp kê khai và định nghĩa trạng thái, tính duy nhất của mã định danh, tên npm còn trống cho gói mới, đường dẫn hình ảnh an toàn và hàm băm, tính toàn vẹn của PNG, kích thước hình thu nhỏ, sự tồn tại của các tập bản đồ 1x/2x/4x và hình học tỷ lệ, kiểm thử, bản build có thể tái tạo, giới hạn kích thước, giấy phép và danh sách tệp chính xác trong mỗi lần đóng gói thử bằng npm. Những bước kiểm tra này ngăn xung đột ngoài ý muốn và lỗi đóng gói. Người đánh giá vẫn quyết định liệu một nhân vật hoặc thay đổi có thuộc bộ sưu tập chính thức hay không.

Sau khi thay đổi được xác thực đạt đến `main`, Changesets chuẩn bị một yêu cầu kéo phiên bản riêng biệt để xem xét. Ấn phẩm npm đầu tiên vẫn là hành động duy trì có chủ ý. Chỉ có thể bật xuất bản OIDC tự động sau khi các gói ban đầu tồn tại và mỗi gói đều tin tưởng vào quy trình xuất bản của kho lưu trữ này. Cho đến khi quá trình khởi động đó hoàn tất, nguồn kho lưu trữ không phải là lời hứa rằng gói sẽ có sẵn từ npm. Xem [chuẩn bị phát hành](../RELEASING.md) để biết quy trình bảo trì hoàn chỉnh.

Kho lưu trữ này là nơi lưu trữ được tuyển chọn dành cho các gói Peekling chính thức, không phải là danh mục cộng đồng toàn cầu. Người sáng tạo có thể xuất bản các gói tương thích của bên thứ ba từ gói riêng của họ hoặc ranh giới lưu trữ tĩnh với giấy phép công cộng hợp lệ.

## Cấp phép và ghi công

Công cụ, bài kiểm tra và tài liệu về kho lưu trữ được cấp phép theo [Apache-2.0](../LICENSE). Tất cả 28 gói ký tự chính thức hiện tại cũng khai báo Apache-2.0 và mang theo các tệp `LICENSE` và `NOTICE` của riêng chúng.

Việc phân phối lại phải tuân theo giấy phép hiện hành và các điều khoản thông báo cho từng gói. Tên Peekling, logo, linh vật chính thức và nhận dạng thương hiệu đặc biệt khác không được cấp bởi giấy phép công cụ trừ khi giấy phép tài sản cụ thể có quy định khác. Xem [cấp phép và ghi công](../LICENSING.md), [NOTICE](../NOTICE) và [AUTHORS](../AUTHORS) để biết hồ sơ đầy đủ.

<p align="center">
  <a href="../README.md">🇺🇸</a> · <a href="README.es.md">🇪🇸</a> · <a href="README.zh-CN.md">🇨🇳</a> · <a href="README.ko.md">🇰🇷</a> · <a href="README.ja.md">🇯🇵</a> · <a href="README.nl.md">🇳🇱</a> · <a href="README.ar.md">🇸🇦</a> · <a href="README.vi.md">🇻🇳</a> · <a href="README.ru.md">🇷🇺</a> · <a href="README.fr.md">🇫🇷</a> · <a href="README.hi.md">🇮🇳</a> · <a href="README.pt-BR.md">🇧🇷</a> · <a href="README.de.md">🇩🇪</a> · <a href="README.it.md">🇮🇹</a> · <a href="README.id.md">🇮🇩</a> · <a href="README.tr.md">🇹🇷</a> · <a href="README.pl.md">🇵🇱</a> · <a href="README.bn.md">🇧🇩</a>
</p>

![Một dải cỏ hẹp, hoa dại, tán lá và con đường quanh co](../assets/peekling-ground-footer-v1.png)
