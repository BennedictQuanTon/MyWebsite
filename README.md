# MyWebsite

Personal portfolio website for **Bennedict Quan Ton** — an AI undergraduate at UTS & HCMUT. The site showcases projects, education, career journey, and personal interests, with a focus on agentic workflows, multi-agent systems, RAG pipelines, and high-performance AI engineering.

## What This Is

A static, client-side single-page application with no backend. Content is defined in TypeScript data files and rendered across five pages:

- **Home** — hero, skills overview, and featured work
- **Projects** — filterable project gallery with detail modals
- **Journey** — work experience and milestone timeline
- **Credentials** — degree, courses, and certifications
- **Personal Life** — photo gallery with lightbox

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19, TypeScript |
| Build | Vite 8 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion, GSAP (ScrollTrigger) |
| 3D / WebGL | Three.js |
| Icons | Lucide React |
| Linting | ESLint, TypeScript ESLint |

## Project Structure

```
src/
├── App.tsx                        # Root component — layout shell only
├── main.tsx                       # React entry point
├── assets/                        # Static files (images, svgs)
├── components/
│   ├── layout/                    # Structural chrome
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx        # Animated page transition wrapper
│   ├── ui/                        # Generic reusable components
│   │   ├── ScrollReveal.tsx
│   │   └── TechLogos.tsx
│   └── visuals/                   # 3D / WebGL / canvas components
│       ├── NeuralAurora.tsx
│       └── TechStack3D.tsx
├── context/
│   └── ThemeContext.tsx            # Light / dark theme state
├── data/                          # Site content as typed TS modules
│   ├── about.ts
│   ├── certs.ts
│   ├── experience.ts
│   ├── milestones.ts
│   └── projects.ts
├── pages/                         # Route-level page components
│   ├── Home.tsx
│   ├── Vault.tsx
│   ├── Journey.tsx
│   ├── Education.tsx
│   └── Personal.tsx
├── routes/
│   └── index.tsx                  # AnimatedRoutes — all route definitions
├── styles/
│   └── index.css                  # Global styles and theme variables
└── types/
    └── index.ts                   # Shared TypeScript interfaces
```

## Getting Started

```bash
npm install
npm run dev      # Start dev server
npm run build    # Type-check and production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```
