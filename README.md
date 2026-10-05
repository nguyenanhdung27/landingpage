# Business Landing Page (React + Tailwind CSS)

Dự án Landing Page phong cách phẳng hiện đại (Modern Flat Vector Illustration) được xây dựng chuẩn theo ảnh mẫu bằng **ReactJS** và **Tailwind CSS**.

---

## 🚀 Tính năng nổi bật

1. **Chuẩn thiết kế theo ảnh mẫu**:
   - **Thanh điều hướng (Navbar)**: Logo hình khối lập phương xanh + chữ "LOGO", các liên kết (Home, About us, Course, Pricing, Contact) và nút bo tròn "Get Started".
   - **Hero Section**: 
     - Tiêu đề đậm ấn tượng: **BUSINESS LANDING PAGE**.
     - Đoạn văn mô tả chuẩn: *"Lorem ipsum dolor sit amet, consectetuer adipiscing elit..."*.
     - Nút bo tròn chuyển sắc (pill button): **More Info**.
   - **Hình minh họa đội ngũ (Illustration Scene)**:
     - 3 nhân vật làm việc: Người thuyết trình đứng (áo blazer nâu, cử chỉ chào đón), nhân viên kỹ thuật ngồi với laptop, chuyên viên thiết kế nữ với laptop.
     - Bàn làm việc tối giản & ghế xoay văn phòng.
     - 3 huy hiệu nổi (Speech Badges) có hiệu ứng chuyển động lơ lửng:
       - 📈 Biểu đồ tăng trưởng (Growth Chart)
       - ⚙️ Bánh răng tự động hóa (Gears / Automation)
       - 💬 Bong bóng đối thoại (Team Chat)
     - Dải sóng mềm mại uốn lượn sắc xanh hoàng gia bao bọc chân trang.

2. **Chế độ hiển thị linh hoạt (Top Control Bar)**:
   - **Chế độ Mockup (Như trong ảnh)**: Hiển thị giao diện bên trong thẻ Card bo góc nổi trên nền gradient tím xanh.
   - **Chế độ Toàn màn hình (Full Web Page)**: Mở rộng tràn viền như một ứng dụng web SaaS thực tế.
   - **Chuyển đổi Đồ họa Vector SVG / Artwork gốc**.
   - **Công cụ đối chiếu ảnh gốc**.

3. **Tính năng tương tác đầy đủ**:
   - Modal đăng ký tư vấn khi bấm **Get Started**.
   - Modal thông tin chi tiết khi bấm **More Info**.
   - Modal thông số khi bấm vào từng huy hiệu nổi (Biểu đồ, Bánh răng, Chat).
   - Menu responsive dạng ngăn kéo cho điện thoại và máy tính bảng.
   - Các phần mở rộng: Khóa học (Course), Bảng giá (Pricing), Chân trang (Footer).

---

## 🛠️ Hướng dẫn cài đặt & Khởi chạy

### 1. Di chuyển vào thư mục dự án
```powershell
cd C:\Users\DUNG\.gemini\antigravity\scratch\business-landing-page
```

### 2. Cài đặt thư viện (nếu cần)
```powershell
npm install
```

### 3. Chạy môi trường phát triển (Development Server)
```powershell
npm run dev
```
Truy cập tại: `http://localhost:5173/`

### 4. Đóng gói cho môi trường Production
```powershell
npm run build
```
Thư mục xuất bản: `dist/`

---

## 📁 Cấu trúc thư mục

```
business-landing-page/
├── public/
│   ├── reference.png              # Ảnh mẫu gốc đối chiếu
│   └── hero-illustration-full.png # Asset đồ họa trích xuất
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Thanh điều hướng chuẩn mẫu
│   │   ├── HeroSection.jsx        # Khối tiêu đề, mô tả và nút CTA
│   │   ├── HeroIllustration.jsx   # Vector SVG minh họa kèm animation
│   │   ├── Modals.jsx             # Các hộp thoại tương tác
│   │   ├── FeaturesSection.jsx    # Danh sách khóa học & dịch vụ
│   │   ├── PricingSection.jsx     # Bảng giá chi tiết 3 gói
│   │   └── Footer.jsx             # Chân trang hiện đại
│   ├── App.jsx                    # Giao diện chính & bộ chuyển chế độ
│   ├── index.css                  # Cấu hình Tailwind CSS & keyframe animations
│   └── main.jsx                   # Entrypoint React 19
├── index.html
├── package.json
└── vite.config.js
```
