# 🎬 MovieReview (Expo + React Native) – Quick Start

Repo: https://github.com/NelsenJ/ExpoGo-TrainingApp.git

## ⚡️ Clone & Run

```bash
# 1) Clone
git clone https://github.com/NelsenJ/ExpoGo-TrainingApp.git
cd ExpoGo-TrainingApp

# 2) Install deps
npm install

# 3) Start dev server (choose platform in the terminal)
npx expo start
# lalu tekan: w = Web, a = Android, i = iOS
```

## 📱 Mobile (Development Build)
Proyek ini menggunakan `@react-native-async-storage/async-storage`, yang tidak tersedia di Expo Go standar. Gunakan Development Build:

```bash
# Android (pertama kali)
npx expo run:android

# iOS (macOS + Xcode)
npx expo run:ios
```

Setelah terpasang, jalankan `npx expo start` dan buka build tersebut untuk terhubung ke Metro bundler.

## 🐛 Troubleshooting
- Bersihkan cache: `npx expo start -c`
- Web scrollbar ganda: sudah dinonaktifkan outer-scroll via `app/globals.css`.
- Gambar gagal: otomatis pakai `assets/images/image.jpeg`.

---

# 🎬 MovieReview - Website Review Film Keren

Website review film modern dan responsif yang dibuat dengan React Native dan Expo, menggunakan desain yang menarik dengan Bootstrap-inspired styling.

## ✨ Fitur Utama

- **Halaman Utama** - Hero section yang menarik dengan featured movies
- **4 Genre Film** - Action, Comedy, Drama, dan Documentary
- **Desain Modern** - Dark theme dengan gradient colors yang eye-catching
- **Responsif** - Bekerja sempurna di desktop, tablet, dan mobile
- **Navigasi Mudah** - Bottom navigation untuk akses cepat ke semua genre
- **Rating System** - Visual rating dengan bintang emas
- **Movie Cards** - Informasi lengkap film dengan gambar, cast, dan deskripsi

## 🎯 Halaman yang Tersedia

### 🏠 Home Page (`/`)
- Hero section dengan gradient yang dinamis
- Featured movies showcase
- Quick navigation ke semua genre
- Modern card-based layout

### 💥 Action Movies (`/action`)
- Film action terbaik dengan rating tinggi
- Informasi lengkap: tahun, durasi, director, cast
- Color scheme: Red-orange gradient
- 5 film action populer

### 😂 Comedy Movies (`/comedy`)
- Film komedi yang menghibur
- Humor type badges
- Color scheme: Yellow-orange gradient
- 5 film komedi terbaik

### 🎭 Drama Movies (`/drama`)
- Film drama yang emosional
- Theme badges untuk setiap film
- Color scheme: Blue gradient
- 5 film drama klasik

### 📚 Documentary Films (`/documentary`)
- Film dokumenter yang informatif
- Category badges (Nature, Sports, Technology, etc.)
- Color scheme: Purple gradient
- 5 dokumenter terbaik

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js (versi 16 atau lebih baru)
- npm atau yarn
- Expo CLI

### Installation
```bash
# Clone repository
git clone <repository-url>
cd expo

# Install dependencies
npm install

# Start development server
npx expo start

# Atau untuk web khusus
npm run web
```

### Build & Deploy
```bash
# Build untuk production
npm run build

# Deploy ke web
npm run deploy
```

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React Native + Expo
- **Styling**: React Native StyleSheet + Custom CSS
- **Navigation**: Expo Router
- **Icons**: Expo Vector Icons
- **Images**: Unsplash (placeholder images)
- **Responsive Design**: Mobile-first approach

## 🎨 Design System

### Color Palette
- **Primary**: `#667eea` (Blue)
- **Secondary**: `#764ba2` (Purple)
- **Action**: `#ff6b6b` (Red)
- **Comedy**: `#fdcb6e` (Yellow)
- **Drama**: `#74b9ff` (Blue)
- **Documentary**: `#a29bfe` (Purple)
- **Background**: `#0f0f23` (Dark Blue)
- **Cards**: `#1a1a2e` (Lighter Dark)

### Typography
- **Hero Title**: 48px, Bold
- **Page Title**: 36px, Bold
- **Movie Title**: 24px, Bold
- **Body Text**: 16px, Regular
- **Meta Info**: 14px, Semi-bold

### Components
- **Movie Cards**: Rounded corners, shadows, hover effects
- **Rating Badges**: Golden stars with pulse animation
- **Genre Cards**: Interactive with hover animations
- **Navigation**: Bottom sticky navigation
- **Buttons**: Rounded, with hover effects

## 📱 Responsive Features

- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column grid for better space utilization
- **Desktop**: Full-width layout with hover effects
- **Cross-platform**: Works on iOS, Android, and Web

##  Customization

### Menambah Film Baru
Edit file genre yang sesuai (misal `action.tsx`) dan tambahkan film baru ke array:

```javascript
const actionMovies = [
  // ... existing movies
  {
    id: 6,
    title: "New Movie Title",
    year: 2024,
    director: "Director Name",
    rating: 8.5,
    image: "image-url",
    description: "Movie description",
    cast: ["Actor 1", "Actor 2"],
    duration: "120 min"
  }
];
```

### Mengubah Warna
Edit file CSS atau StyleSheet untuk mengubah color scheme:

```javascript
// Dalam StyleSheet
header: {
  backgroundColor: 'linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%)',
}
```

### Menambah Genre Baru
1. Buat file baru: `app/new-genre.tsx`
2. Copy struktur dari genre yang ada
3. Update navigation di semua halaman
4. Tambahkan link di homepage

## 🌟 Fitur Tambahan

- **Smooth Animations**: Hover effects, transitions, dan micro-interactions
- **Accessibility**: Focus states, semantic HTML, dan keyboard navigation
- **Performance**: Lazy loading, optimized images, dan efficient rendering
- **SEO Ready**: Meta tags, structured data, dan semantic markup

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository atau hubungi developer.

---

**Dibuat dengan ❤️ untuk para pecinta film!** 🎬✨
