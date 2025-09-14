Hướng dẫn về *, root, html, và body trong HTML và CSS
## 1. Phần tử `<html>`
### Định nghĩa

Phần tử <html> là thẻ gốc (root element) của tài liệu HTML.
Bao bọc toàn bộ nội dung trang web, bao gồm:
<head>: Chứa metadata (tiêu đề, liên kết CSS, JavaScript).
<body>: Chứa nội dung hiển thị cho người dùng.



### Vai trò

Xác định tài liệu là HTML, thường có thuộc tính lang (ví dụ: <html lang="vi"> cho tiếng Việt).
Là điểm xuất phát để áp dụng kiểu dáng CSS cho toàn bộ trang.

Ví dụ CSS
```
html {
  font-size: 16px; /* Kích thước chữ mặc định */
  height: 100%; /* Chiếm toàn bộ chiều cao màn hình */
}
```
Lưu ý

Đặt height: 100% để <html> cho phép các phần tử con kế thừa chiều cao toàn màn hình.
Là tổ tiên của mọi phần tử trong tài liệu HTML.

## 2. Phần tử `<body>`
### Định nghĩa

Phần tử <body> chứa nội dung hiển thị như văn bản, hình ảnh, nút bấm, v.v.
Nằm trong <html> và là phần người dùng nhìn thấy.

### Vai trò

Container chính cho nội dung trực quan.
Dùng trong CSS để áp dụng kiểu dáng chung (màu nền, font chữ, margin, padding).

Ví dụ CSS
```
body {
  margin: 0; /* Xóa margin mặc định */
  padding: 0; /* Xóa padding mặc định */
  background-color: #f5f5f5; /* Màu nền */
  font-family: 'Roboto', sans-serif; /* Font chữ */
}
```
Lưu ý

Nếu không đặt height: 100% hoặc min-height: 100vh, <body> có thể không chiếm toàn bộ chiều cao màn hình trừ khi nội dung đủ dài.
Xóa margin/padding mặc định giúp kiểm soát bố cục tốt hơn.

## 3. Selector * (Selector Phổ Quát)
### Định nghĩa

* là selector phổ quát trong CSS, áp dụng kiểu dáng cho tất cả phần tử HTML, bất kể loại hay class/ID.

### Vai trò

Đặt kiểu dáng mặc định cho trang, ví dụ: xóa margin/padding mặc định.
Thường dùng trong CSS reset để chuẩn hóa kiểu dáng giữa các trình duyệt.

Ví dụ CSS
* {
  margin: 0; /* Xóa margin mặc định */
  padding: 0; /* Xóa padding mặc định */
  box-sizing: border-box; /* Kích thước bao gồm padding và border */
}

Lưu ý

Sử dụng * quá nhiều có thể giảm hiệu suất do áp dụng cho mọi phần tử.
Nên dùng cẩn thận, kết hợp với Normalize.css để chuẩn hóa giao diện.

## 4. #root
### Định nghĩa

#root là một ID thường dùng trong ứng dụng React (hoặc framework tương tự) để chỉ phần tử DOM nơi ứng dụng được render.

Được định nghĩa trong file HTML tĩnh:
<div id="root"></div>


Trong React, JavaScript sử dụng createRoot để gắn ứng dụng vào #root.


### Vai trò

Container chính cho giao diện React, chứa các component (<App>, <Login>, <Home>, v.v.).
Trong CSS, #root dùng để giới hạn chiều rộng, căn giữa nội dung, hoặc áp dụng kiểu dáng tổng thể.

Ví dụ CSS
#root {
  max-width: 1280px; /* Giới hạn chiều rộng */
  margin: 0 auto; /* Căn giữa nội dung */
  min-height: 100vh; /* Chiếm toàn bộ chiều cao */
}

Lưu ý

#root không phải phần tử HTML mặc định, mà do lập trình viên định nghĩa.
Chỉ có ý nghĩa trong các dự án dùng framework như React.

Mối quan hệ giữa các phần tử
Cấu trúc cây DOM
<html>
  <head>
    <!-- Metadata, CSS, JS -->
  </head>
  <body>
    <div id="root">
      <!-- Ứng dụng React -->
      <App>
        <Login> hoặc <Home>
      </App>
    </div>
  </body>
</html>

Cách CSS áp dụng

*: Áp dụng cho tất cả phần tử trong tài liệu.
<html>: Đặt kiểu dáng tổng thể cho tài liệu.
<body>: Đặt kiểu dáng cho nội dung hiển thị.
#root: Giới hạn và định hình giao diện ứng dụng React trong <body>.

Ứng dụng trong dự án
Trong file index.css
body {
  padding: 0;
  margin: 0;
}


Loại bỏ margin/padding mặc định để tránh khoảng cách không mong muốn cho các container như .home-container hoặc .login-container.

Trong file App.css
#root {
  max-width: 100%;
  width: 100%;
  margin: 0;
}


Đảm bảo ứng dụng không tràn ra ngoài khung màn hình.
Giới hạn chiều rộng để kiểm soát bố cục.

Gợi ý cải thiện

Chiều cao đầy đủ: Thêm html, body { height: 100%; } để container con kế thừa chiều cao toàn màn hình.
Box-sizing: Thêm * { box-sizing: border-box; } vào index.css để quản lý kích thước phần tử nhất quán.
Kiểm tra bố cục: Đảm bảo width và max-width của container không gây tràn nội dung (ví dụ: icon trong header).
Normalize.css: Kết hợp Normalize.css để chuẩn hóa kiểu dáng giữa các trình duyệt, thay vì chỉ dùng *.

Tổng kết

<html>: Thẻ gốc, bao bọc toàn bộ tài liệu.
<body>: Chứa nội dung hiển thị trực quan.
*: Áp dụng kiểu dáng cho mọi phần tử, thường dùng để reset CSS.
#root: Container cho ứng dụng React, quản lý giao diện.


Hiểu và sử dụng đúng các phần tử này giúp xây dựng bố cục trang web hiệu quả và nhất quán.
