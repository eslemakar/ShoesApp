Hub, Inc. readme yi düzenle
© 2025 GitHub, Inc.
# 👟 Modern Ayakkabı E-Ticaret Platformu

React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş **full-stack e-ticaret uygulaması**.  
Kullanıcılar ürünleri görüntüleyebilir, detaylarını inceleyebilir, kayıt olabilir ve alışveriş deneyimi yaşayabilir. Admin paneli ile ürün yönetimi kolayca yapılabilir.  

---

## 🚀 Özellikler
- 👤 **Kullanıcı Yönetimi**: Kayıt, giriş, profil yönetimi  
- 🛒 **Ürün Kataloğu**: Listeleme, detay sayfaları, arama  
- 🛠️ **Admin Paneli**: Ürün ekleme, düzenleme, silme  
- 📱 **Responsive Tasarım**: Mobil & Desktop uyumlu  
- 🎨 **Modern UI/UX**: Tailwind CSS ile minimalist tasarım  
- ⚡ **State Management**: React Query ile caching ve veri yönetimi  

---

## 🛠️ Teknolojiler

### 🔹 Frontend
- ⚛️ [React 18](https://reactjs.org/) - UI framework  
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety  
- 🔗 [React Router DOM](https://reactrouter.com/) - Routing  
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Styling framework  
- ⚡ [React Query](https://tanstack.com/query) - Server state management  
- 📝 [Formik + Yup](https://formik.org/) - Form & validation  
- 🌐 [Axios](https://axios-http.com/) - HTTP client  
- 🎯 [React Icons](https://react-icons.github.io/react-icons/) - Icon library  

### 🔹 Backend
- 🟢 [Node.js](https://nodejs.org/) - Runtime environment  
- 🚀 [Express.js](https://expressjs.com/) - Web framework  
- 🗄️ [JSON Server](https://github.com/typicode/json-server) - Mock database  
- 🔐 [JWT](https://jwt.io/) - Authentication  

---

## 📁 Proje Yapısı
client/
├── src/
│ ├── components/ # UI bileşenleri
│ ├── pages/ # Sayfalar
│ ├── hooks/ # Custom hooks
│ ├── service/ # API servisleri
│ ├── types/ # TypeScript tipleri
│ └── utils/ # Yardımcı fonksiyonlar

---

## 🚀 Kurulum

### 1. Bağımlılıkları yükle
```bash
npm install
2. Development server başlat
npm run dev
3. Build al
npm run build
🔧 Geliştirme Araçları
✅ ESLint - Code quality
🎨 Prettier - Code formatting
⚡ Vite - Build tool
📱 Sayfalar
🏠 Ana Sayfa – Hero section + ürün listesi
👟 Ürün Detay – Boyut, renk seçimi, açıklama
📊 Dashboard (Admin) – Yönetim paneli
✏️ Ürün CRUD – Ekleme, düzenleme, silme
🔐 Auth – Giriş & Kayıt sayfaları
🎨 Tasarım
Responsive grid layout
Smooth animations
Consistent spacing
Accessible color scheme
🔐 Güvenlik
JWT token authentication
Protected routes
Input validation (Formik + Yup)
XSS protection
📊 Performans
React Query ile caching
Lazy loading
Optimized images
Bundle splitting
