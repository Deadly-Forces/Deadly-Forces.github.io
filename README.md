# Nikunj Kaslikar — Portfolio & Systems Architecture

> **Personal Engineering Portfolio & Research Systems**  
> *SRM Institute of Science and Technology, Chennai (AI/ML 2027)*  
> Live Website: [https://deadly-forces.github.io](https://deadly-forces.github.io)

---

## 🏛️ Project Architecture & File Structure

This repository is organized following standard **Next.js 14 (App Router)** structure with modular component layering:

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated CI/CD pipeline for GitHub Pages
├── app/
│   ├── globals.css                 # Obsidian dark studio theme & Tailwind styles
│   ├── layout.tsx                  # Root HTML layout, metadata & typography
│   ├── page.tsx                    # Landing page with interactive Black Hole hero
│   └── home/
│       └── page.tsx                # Multi-pane sliding architecture (Intro, Work, Gap, Book)
├── components/
│   ├── ui/
│   │   └── blackhole-hero-section.tsx  # Ray-marched relativistic accretion disk shader
│   ├── availability.tsx            # Live Cal.com scheduler integration & timezone metadata
│   ├── blackhole-hero-demo.tsx     # Kinetic landing hero controller & camera choreography
│   ├── booking-modal.tsx           # Overlay modal for direct calendar synchronization
│   ├── footer.tsx                  # Responsive footer with social & verified resume links
│   ├── interactive-pill-nav.tsx    # Mobile-responsive floating spring pill navigation
│   ├── introduction-section.tsx    # Connected milestone cards (Who am I, Services, What I do)
│   ├── navigation.tsx              # Base navigation interfaces
│   ├── skills-tag-sphere.tsx       # 3D Rotary Skill Globe with touch gestures & DPI scaling
│   ├── snapshot.tsx                # Architectural scope summary
│   ├── the-gap-section.tsx         # 3-Pillar bridge (The Model, The Backend, The UI/UX)
│   └── work.tsx                    # 12 selected engineering repositories & research publications
├── data/
│   └── profile.ts                  # Grounded profile metadata, research links & projects
├── lib/
│   └── utils.ts                    # ClassName utility helpers (clsx & tailwind-merge)
├── public/
│   └── ai-developer-holding-globe.png  # Character visual holding the 3D hologram
├── .env                            # Environment variables (Cal.com configuration)
├── .env.example                    # Template environment variables
├── .env.local                      # Local environment overrides
├── .gitignore                      # Git exclusion rules
├── next.config.mjs                 # Next.js static export & dynamic path configuration
├── package.json                    # Project dependencies & npm scripts
├── postcss.config.mjs              # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS v4 studio configuration
└── tsconfig.json                   # Strict TypeScript compiler options
```

---

## ⚡ Core Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static HTML Export)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Graphics:** HTML5 2D/3D Canvas + WebGL Raymarching Shader
* **Icons:** [Lucide React](https://lucide.dev/)
* **Scheduler:** [Cal.com](https://cal.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Deadly-Forces/Deadly-Forces.github.io.git
cd Deadly-Forces.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production (Static Export)
```bash
npm run build
```
Generates a static output directory (`out/`) ready for GitHub Pages or CDN deployment.

---

## 📄 License & Ownership
Designed and built by **Nikunj Kaslikar** ([@Deadly-Forces](https://github.com/Deadly-Forces)). All rights reserved.
