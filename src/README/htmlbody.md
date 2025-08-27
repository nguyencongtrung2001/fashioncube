Giải thích về *, root, html, và body trong CSS và HTML
1. html

Định nghĩa: Phần tử <html> là thẻ gốc (root element) của một tài liệu HTML. Nó bao bọc toàn bộ nội dung của trang web, bao gồm <head> (chứa metadata như tiêu đề, CSS, JavaScript) và <body> (chứa nội dung hiển thị).
Vai trò: 
Xác định tài liệu là một tài liệu HTML, thường có thuộc tính lang (ví dụ: <html lang="vi"> để chỉ ngôn ngữ là tiếng Việt).
Là điểm xuất phát để CSS áp dụng kiểu dáng cho toàn bộ trang.


Ví dụ CSS:html {
  font-size: 16px; /* Đặt kích thước chữ mặc định */
  height: 100%; /* Đảm bảo tài liệu chiếm toàn bộ chiều cao */
}


Lưu ý: Trong nhiều dự án, bạn nên đặt height: 100% cho html để các phần tử con (như body) có thể chiếm toàn bộ chiều cao màn hình khi cần.

2. body

Định nghĩa: Phần tử <body> chứa tất cả nội dung hiển thị trên trang web, bao gồm văn bản, hình ảnh, nút bấm, v.v. Nó nằm trong <html> và là phần mà người dùng nhìn thấy.
Vai trò: 
Là container chính cho nội dung trực quan.
Thường được dùng trong CSS để áp dụng kiểu dáng chung cho toàn bộ trang (ví dụ: màu nền, font chữ, margin, padding).


Ví dụ CSS:body {
  margin: 0; /* Loại bỏ margin mặc định của trình duyệt */
  padding: 0; /* Loại bỏ padding mặc định */
  background-color: #f5f5f5; /* Đặt màu nền */
  font-family: 'Roboto', sans-serif; /* Đặt font chữ */
}


Lưu ý: Nếu body không được đặt height: 100% hoặc min-height: 100vh, nội dung bên trong có thể không chiếm toàn bộ chiều cao màn hình trừ khi có đủ nội dung để đẩy nó xuống.

3. * (Selector Phổ Quát)

Định nghĩa: * là một selector phổ quát trong CSS, áp dụng kiểu dáng cho tất cả các phần tử trong tài liệu HTML, bất kể loại phần tử hay lớp (class) nào.
Vai trò: 
Được sử dụng để đặt kiểu dáng mặc định cho toàn bộ trang, ví dụ: xóa margin và padding mặc định của trình duyệt.
Thường dùng để "reset" hoặc chuẩn hóa kiểu dáng (CSS reset) để tránh sự khác biệt giữa các trình duyệt.


Ví dụ CSS:* {
  margin: 0; /* Xóa margin mặc định */
  padding: 0; /* Xóa padding mặc định */
  box-sizing: border-box; /* Đảm bảo kích thước bao gồm padding và border */
}


Lưu ý: Sử dụng * quá nhiều có thể giảm hiệu suất, vì nó áp dụng cho mọi phần tử. Nên dùng cẩn thận và chỉ khi cần thiết (thường kết hợp với CSS reset như Normalize.css).

4. #root

Định nghĩa: #root là một ID (thường dùng trong các ứng dụng React hoặc framework tương tự) để chỉ phần tử DOM nơi ứng dụng React được render. Nó thường được định nghĩa trong file HTML tĩnh (ví dụ: index.html) như sau:<div id="root"></div>

Sau đó, trong JavaScript (ví dụ: main.jsx), React sử dụng createRoot để gắn ứng dụng vào phần tử này.
Vai trò: 
Là container chính cho toàn bộ giao diện React, chứa các component (như App, Login, Home, v.v.).
Trong CSS, #root thường được dùng để áp dụng kiểu dáng cho toàn bộ ứng dụng, ví dụ: giới hạn chiều rộng hoặc căn giữa nội dung.


Ví dụ CSS:#root {
  max-width: 1280px; /* Giới hạn chiều rộng tối đa */
  margin: 0 auto; /* Căn giữa nội dung */
  min-height: 100vh; /* Đảm bảo chiếm toàn bộ chiều cao */
}


Lưu ý: #root không phải phần tử HTML mặc định mà do bạn tự định nghĩa trong dự án. Nó chỉ có ý nghĩa khi sử dụng framework như React.

Mối quan hệ giữa các phần tử

Cấu trúc cây:<html>
  <head> (metadata, CSS, JS)
  <body>
    <div id="root"> (container React)
      <App> (component chính)
        <Login> hoặc <Home> (các trang cụ thể)
    </div>
  </body>
</html>


Cách CSS áp dụng:
* ảnh hưởng đến tất cả phần tử bên trong html.
html đặt kiểu dáng tổng thể cho tài liệu.
body đặt kiểu dáng cho nội dung hiển thị.
#root giới hạn và định hình giao diện của ứng dụng React bên trong body.



Ứng dụng trong dự án

Trong dự án của bạn, index.css đã đặt:body {
  padding: 0;
  margin: 0;
}


Điều này giúp loại bỏ margin và padding mặc định, hỗ trợ các container như .home-container hoặc .login-container không bị ảnh hưởng bởi khoảng cách không mong muốn.


Trong App.css, #root được dùng để giới hạn chiều rộng:#root {
  max-width: 100%;
  width: 100%;
  margin: 0;
}


Điều này đảm bảo ứng dụng không tràn ra ngoài khung màn hình.



Gợi ý cải thiện

Đặt html, body { height: 100%; } nếu muốn các container con chiếm toàn bộ chiều cao màn hình.
Thêm * { box-sizing: border-box; } vào index.css để quản lý kích thước phần tử nhất quán.
Kiểm tra lại width và max-width của các container để tránh tràn ra ngoài (như vấn đề với icon trong header).
