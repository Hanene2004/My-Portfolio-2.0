# 🚀 3D Creative Portfolio - Hanene 2004

Welcome to the **My Portfolio 2.0**, a high-performance, visually stunning 3D creative portfolio built with modern web technologies. This project showcases the perfect blend of **3D WebGL graphics**, **smooth animations**, and **premium UI design**.

---

## ✨ Key Features

- 🎮 **Interactive 3D Elements**: Powered by `Three.js` and `React Three Fiber` for immersive user experiences.
- 🪄 **Advanced Animations**: Seamless transitions and micro-interactions using `Framer Motion` and `GSAP`.
- 📱 **PWA Ready**: Fully installable as a Progressive Web App for offline-like capabilities.
- ⚡ **Optimized Performance**: Code-splitting, lazy loading, and memoization for lightning-fast speeds.
- 🛠️ **Supabase Integration**: Live visitor counter and contact form data management.
- 📧 **EmailJS Integration**: Direct email notifications from the contact form.
- 🔍 **SEO Optimized**: Dynamic meta tags and titles using `React Helmet Async` and a custom sitemap.
- 🖱️ **Magnetic Interactions**: Premium hover effects on buttons and icons.
- 🥚 **Easter Eggs**: Fun, hidden interactive components (like Nyan Cat or special triggers).

---

## 🛠️ Tech Stack

### Frontend & Core
- **Framework**: [React](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **3D Engine**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/), [@react-three/drei](https://github.com/pmndrs/drei)

### Backend & Services
- **Database/Auth**: [Supabase](https://supabase.com/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

---

## 📁 Project Structure

```bash
3D-Portfolio-main/
├── 📁 public/            # Static assets (3D models, textures, icons)
├── 📁 src/
│   ├── 📁 assets/       # Images and icons used in the app
│   ├── 📁 components/   # UI & 3D components (Hero, Skills, Experience, etc.)
│   │   ├── 📁 canvas/   # 3D Canvas models (Computers, Ball, Stars)
│   │   └── 📁 ui/       # Small UI primitives
│   ├── 📁 constants/    # Data configurations (Work items, icons, links)
│   ├── 📁 hoc/          # Higher-Order Components
│   ├── 📁 utils/        # Animation and utility functions
│   └── App.jsx          # Main application file
├── 📄 index.html        # Entry point
└── 📄 package.json      # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hanene2004/My-Portfolio-2.0.git
   cd My-Portfolio-2.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root and add your credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 📦 Build & Deployment

To create a production build:
```bash
npm run build
```

To deploy to GitHub Pages:
```bash
npm run deploy
```

---

## 👤 Author

**Hanene**
- GitHub: [@Hanene2004](https://github.com/Hanene2004)
- Website: [My Portfolio](https://Hanene2004.github.io/My-Portfolio-2.0)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 🌟 If you like this project, feel free to give it a star!
