# Fashion Cube - React Redux E-commerce App

## 📝 Mô tả dự án

Fashion Cube là một ứng dụng web bán quần áo được xây dựng với React, Redux Toolkit, và React Router. Ứng dụng cho phép người dùng xem danh sách sản phẩm, lọc theo danh mục, xem chi tiết sản phẩm, thêm vào giỏ hàng và quản lý đơn hàng.

## ✨ Tính năng chính

- **Xác thực người dùng**: Đăng nhập/đăng xuất với localStorage
- **Quản lý sản phẩm**: Hiển thị danh sách quần áo nam/nữ
- **Lọc danh mục**: Lọc sản phẩm theo All/Men/Women
- **Chi tiết sản phẩm**: Xem thông tin chi tiết, chọn size, số lượng
- **Giỏ hàng**: Thêm/xóa/cập nhật sản phẩm trong giỏ hàng
- **Responsive design**: Tương thích với mobile và desktop

## 🛠 Công nghệ sử dụng

- **Frontend**: React 18, Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Storage**: localStorage cho user và cart data
- **Styling**: Pure CSS với responsive design

## 📁 Cấu trúc thư mục

```
src/
├── components/          # Các component tái sử dụng
│   ├── Cart.jsx        # Component giỏ hàng
│   ├── Display.jsx     # Hiển thị danh sách sản phẩm
│   ├── Promote.jsx     # Banner quảng cáo
│   └── Selectcategory.jsx # Lọc danh mục
├── pages/              # Các trang chính
│   ├── Home.jsx        # Trang chủ
│   ├── Login.jsx       # Trang đăng nhập
│   └── ClothDetail.jsx # Trang chi tiết sản phẩm
├── redux/              # Redux store và slices
│   ├── slices/
│   │   ├── clothesSlice.js # Quản lý state sản phẩm
│   │   └── userSlice.js    # Quản lý state người dùng
│   └── store.js        # Redux store configuration
├── data/               # Dữ liệu tĩnh
│   ├── clothes.js      # Dữ liệu sản phẩm
│   └── slide.js        # Dữ liệu banner
├── css/                # Stylesheets
│   ├── home.css
│   ├── login.css
│   ├── display.css
│   ├── clothdetail.css
│   ├── cart.css
│   └── selectcategory.css
├── App.jsx             # Component chính
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Cài đặt và chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

### 3. Build production

```bash
npm run build
```

## 👤 Thông tin đăng nhập test

- **Email**: admin@example.com
- **Password**: 123456

## 🔧 Redux State Management

### User Slice
- `currentUser`: Thông tin user hiện tại
- `isAuthenticated`: Trạng thái đăng nhập
- `loading`: Trạng thái loading
- `error`: Thông báo lỗi

### Clothes Slice
- `allClothes`: Toàn bộ sản phẩm
- `filteredClothes`: Sản phẩm sau khi lọc
- `selectedCloth`: Sản phẩm được chọn
- `currentCategory`: Danh mục hiện tại (all/men/women)

## 💾 LocalStorage Usage

### User Data
```javascript
// Lưu thông tin user khi đăng nhập
localStorage.setItem('user', JSON.stringify(userData))

// Lấy thông tin user khi load app
const user = JSON.parse(localStorage.getItem('user') || 'null')
```

### Cart Data
```javascript
// Lưu giỏ hàng
localStorage.setItem('cart', JSON.stringify(cartItems))

// Lấy giỏ hàng
const cart = JSON.parse(localStorage.getItem('cart') || '[]')
```

## 🎨 Styling Guidelines

### CSS Architecture
- **Global styles**: `index.css`, `App.css`
- **Component-specific**: Mỗi component có file CSS riêng
- **Responsive**: Mobile-first approach
- **Color scheme**: 
  - Primary: #ff6b35 (Orange)
  - Secondary: #1a1a1a (Dark)
  - Background: #f8f9fa (Light gray)

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px  
- Desktop: > 768px

## 🔄 Component Flow

1. **Login** → Xác thực → Lưu user vào localStorage → Redirect to Home
2. **Home** → Load categories → Display products → Filter by category
3. **Product Click** → Navigate to detail → Select options → Add to cart
4. **Cart** → View items → Update quantity → Checkout

## 📱 Features chi tiết

### Authentication
- Form validation
- Loading states
- Error handling
- Auto logout
- Persistent login với localStorage

### Product Management
- Category filtering (All/Men/Women)
- Product grid layout
- Image lazy loading
- Hover effects
- Product badges

### Product Detail
- Large product images
- Size selection
- Quantity controls
- Add to favorites
- Related products
- Breadcrumb navigation

### Shopping Cart
- Slide-in cart panel
- Quantity adjustment
- Remove items
- Price calculation
- Checkout simulation
- Empty state handling

## 🚀 Performance Optimizations

- **Lazy loading**: Images load khi cần
- **Code splitting**: Routes được tách riêng
- **Memoization**: useSelector cho hiệu suất tốt hơn
- **Efficient re-renders**: Redux state normalization
  
## 🐛 Error Handling
- Try-catch cho localStorage operations
- Redux error states
- User-friendly error messages
- Fallback UI components


## 📄 License

This project is licensed under the MIT License.

---

**Happy Coding! 🚀**
