# Portfolio Rules & Development Guidelines

> **Project:** Long Quan Ton — Personal Portfolio Website  
> **Last Updated:** June 2026  
> This document is the single source of truth for all development decisions on this website.

---

## 1. Non-Negotiables (Break None of These)

1. **Exactly 4 pages (Home, Projects, Journey, Credentials).** No new URL routes. All detail views use in-page modals/overlays.
2. **Static export only.** No server-side rendering, no API routes, no database. All data lives in `src/data/*.ts`.
3. **The CV is the content source of truth.** All text about projects, roles, dates, and outcomes must match `references/LongQuanTon_CV.pdf`. Never invent metrics or claims.
4. **No placeholder text in production.** If an image is missing, use a styled empty frame with a label — never `Lorem ipsum`.
5. **Performance first.** Target Lighthouse score >90. Never add a dependency that isn't justified by a feature.

---

## 2. Visual Identity (Never Deviate)

The site has **two themes**: Light (`Pearl Eco`) and Dark (`Forest Noir`). Both use the same emerald `#10B981` as the identity anchor. All color usage must reference CSS custom property tokens — never hardcode hex values in components.

### ☀️ Light Mode — "Pearl Eco" (Monochrome Gray)

```css
:root[data-theme="light"] {
  --bg:             #FFFFFF;  /* Pure White page background */
  --bg-alt:         #F8F9FA;  /* Soft Warm Gray alternate sections */
  --surface:        #FFFFFF;  /* Pure White card surface */
  --surface-2:      #F1F3F5;  /* Soft Gray hover / elevated */
  --border:         rgba(0, 0, 0, 0.08);
  --accent:         #495057;  /* Dark Gray/Slate — CTAs, highlights */
  --accent-bright:  #6C757D;  /* Muted Gray — hover, glow */
  --accent-deep:    #212529;  /* Near Black — heading text */
  --accent-dim:     rgba(0, 0, 0, 0.04); /* pill bg */
  --text-heading:   #212529;  /* Near Black headings */
  --text-body:      #343A40;  /* Dark Gray paragraphs */
  --text-muted:     #6C757D;  /* Muted Gray captions */
  --glass-bg:       rgba(255, 255, 255, 0.85);
  --glass-border:   rgba(0, 0, 0, 0.08);
  --shadow:         rgba(0, 0, 0, 0.04);
  --cursor:         #212529;
}
```

**Mood:** Clean, minimalist, premium editorial. White background gives breathing room, with high-contrast gray/black typography.

### 🌑 Dark Mode — "Forest Noir"

```css
:root[data-theme="dark"] {
  --bg:             #09100B;  /* Abyss Green — NOT pure black */
  --bg-alt:         #0E1710;  /* Deep Forest alternate sections */
  --surface:        #141F16;  /* Dark Forest card surface */
  --surface-2:      #1C2B1E;  /* Elevated Forest hover */
  --border:         rgba(16, 185, 129, 0.12);
  --accent:         #10B981;  /* Emerald — IDENTICAL to light */
  --accent-bright:  #34D399;  /* Mint — hover, active glow */
  --accent-deep:    #6EE7B7;  /* Light Mint — replaces forest heading */
  --accent-dim:     rgba(16, 185, 129, 0.10); /* pill bg */
  --text-heading:   #E8F5E9;  /* Near White (green tint) */
  --text-body:      #A7C4B5;  /* Desaturated Mint Gray — easy on eyes */
  --text-muted:     #5A7A6A;  /* Muted Forest captions */
  --glass-bg:       rgba(9, 16, 11, 0.65);
  --glass-border:   rgba(16, 185, 129, 0.14);
  --shadow:         rgba(0, 0, 0, 0.45);
  --cursor:         #34D399;  /* Brighter mint on dark bg */
}
```

**Mood:** Cinematic, premium, editorial. Like light filtering through a forest canopy.

**WCAG verified:** `#E8F5E9` on `#09100B` = 14.5:1 ✅ · `#A7C4B5` on `#09100B` = 6.8:1 ✅

### 🔄 Theme Toggle Rules

1. Strategy: `data-theme` attribute on `<html>`, driven by `ThemeContext`.
2. Detect order: `localStorage` → `prefers-color-scheme` → fallback `'light'`.
3. Persist to `localStorage` on every toggle.
4. **Smooth transition** — apply to all elements:
   ```css
   *, *::before, *::after {
     transition: background-color 300ms ease, color 300ms ease,
                 border-color 300ms ease, box-shadow 300ms ease;
   }
   ```
   Exception: disable transition on page load to prevent flash.
5. Toggle button lives in the Navbar (rightmost icon), circular glassmorphism style.
6. Sun icon → light mode. Moon icon → dark mode. Rotates 180° on click (Framer Motion).
7. **Never** hardcode `#FAFAFA` or `#09100B` in component styles. Always use tokens: `bg-[var(--bg)]`, `text-[var(--text-body)]`.

### Glassmorphism Standard (applies both modes)
```css
background:       var(--glass-bg);
backdrop-filter:  blur(16px) saturate(180%);
border:           1px solid var(--glass-border);
border-radius:    16px;
box-shadow:       0 8px 32px var(--shadow);
```

Use for: Navbar, project cards, modal panels, stat cards.

### Typography
| Usage | Font | Weight |
|-------|------|--------|
| Page titles, hero name | Playfair Display | 700, 800 |
| Role/subtitle labels | Playfair Display *italic* | 400i |
| Section headings | Plus Jakarta Sans | 600, 700 |
| Body text | Plus Jakarta Sans | 400 |
| Code / tech stack pills | JetBrains Mono | 400 |

**Rule:** Never use system fonts. Never hardcode font families inside components — define them in `tailwind.config.ts`.

---

## 3. Animation Rules

### Framer Motion
- **Page transitions:** Fade + slide Y (20px) in, 0.4s ease-out.
- **Scroll reveal:** Every section element fades + slides up on viewport entry. Use `IntersectionObserver` via Framer Motion `whileInView`.
- **Stagger:** When a list of cards appears, stagger each by 0.08s.
- **Spring physics:** Hover on cards uses `whileHover={{ scale: 1.02 }}` with spring config `{ stiffness: 300, damping: 20 }`.

### GSAP (Milestones page only)
- **ScrollTrigger:** Each timeline node is pinned and animated on scroll. Left-side items slide from `x: -60`, right-side from `x: 60`.
- **Active glow:** The node currently in view pulses with an emerald drop-shadow.
- **Scrub:** Use `scrub: 1` for smooth scroll-linked animations.

### Custom Cursor
- Custom cursor/follower is disabled per user request to maintain native browser UX and prevent disappearing cursor issues. Default browser cursor is used.

---

## 4. Component Architecture

### File Naming
- Components: `PascalCase.tsx` (e.g., `ProjectModal.tsx`)
- Data files: `camelCase.ts` (e.g., `projects.ts`)
- CSS modules: `ComponentName.module.css` (only if needed for complex isolated styles)

### Component Rules
1. Every component must have a descriptive comment at the top explaining what it renders and what props it accepts.
2. No inline styles except for dynamic values (e.g., scroll position, mouse coordinates).
3. All Tailwind classes must use the custom tokens defined in `tailwind.config.ts`, not hardcoded hex values.
4. Images must always have a meaningful `alt` attribute.
5. All interactive elements must be keyboard accessible (`tabIndex`, `onKeyDown` handlers).

### Data Flow
- **Data lives in `src/data/`** — never hardcode content strings inside JSX.
- Components receive data as props and are purely presentational.
- No state management libraries needed — React `useState`/`useRef` is sufficient.

---

## 5. Content Rules

### Projects (The Vault)
Each project entry MUST contain all of these fields:
- `title`, `category`, `period`, `role`
- `problem` — what challenge did this project solve?
- `process[]` — timeline of your journey with dates and images (if available)
- `techStack[]` — exact technologies used (match CV wording)
- `outcomes[]` — specific measurable results (match CV bullet points)
- `hoverMedia` — image or video path for the card hover preview

**Datathon rule:** Mark all missing image slots with `status: 'placeholder'` in the data object. The UI will render a styled frame instead of a broken image.

### Milestones
- Dates must be **exact** as stated in the CV.
- The three tracks are: `'education'`, `'hackathon'`, `'credential'`.
- Every credential must have `platform` and `date` fields.

### About Page
- Personal philosophy text should be written in first person, professional English.
- Family/personal image section: if no images are provided by the user, the masonry grid section is **hidden entirely** (not shown as empty boxes). Toggle via a `SHOW_PERSONAL_PHOTOS` constant in `src/data/about.ts`.

---

## 6. Asset Management

### Directory Structure
```
public/
└── assets/
    ├── images/
    │   ├── portrait/      ← Myself_*.webp
    │   ├── weatherise/    ← Experience_Weatherise_*.webp
    │   ├── morphysics/    ← Experience_Morphysics_*.webp
    │   ├── bkai/          ← PersonalProject_BKAi_*.webp
    │   ├── yourai/        ← PersonalProject_YourAI_*.webp
    │   └── certificates/  ← Certificate_*.webp
    └── videos/
        └── morphysics_demo.mp4
```

### Image Rules
1. **HEIC files** must be converted to WebP before use. Run: `sips -s format webp input.HEIC --out output.webp`
2. All images must include a `loading="lazy"` attribute unless they are above the fold.
3. Hero portrait images use `loading="eager"` and should be ≤ 400KB (optimize if needed).
4. Video files: use `autoPlay loop muted playsInline` attributes. Never autoplay with sound.

---

## 7. SEO & Accessibility

### SEO (per page)
| Page | `<title>` | Meta Description |
|------|-----------|-----------------|
| Home | Long Quan Ton — AI Developer & Engineer | Building intelligent systems at the intersection of AI and real-world impact. Based in Ho Chi Minh City. |
| About | About — Long Quan Ton | The philosophy, passions, and personal story behind Long Quan Ton, AI undergraduate at UTS & HCMUT. |
| Vault | Projects — Long Quan Ton | A filterable portfolio of AI systems, web apps, and competition projects by Long Quan Ton. |
| Milestones | Milestones — Long Quan Ton | The academic and professional timeline of Long Quan Ton — education, hackathons, and certifications. |

### Accessibility
- All images: descriptive `alt` text.
- All modals: trap focus inside when open, `Escape` key closes, `role="dialog"` + `aria-modal="true"`.
- Color contrast: all text on glass backgrounds must pass WCAG AA (≥ 4.5:1 ratio).
- Headings: exactly one `<h1>` per page. Hierarchy must be sequential (h1 → h2 → h3).

---

## 8. Git Workflow

- **Main branch:** `main` — always deployable.
- **Feature branches:** `feat/page-name` (e.g., `feat/vault-page`).
- **Commit format:** `feat: add project modal component` / `fix: cursor lag on Safari` / `style: update emerald hover color`
- Never commit `.DS_Store`, `node_modules/`, or `.env` files.
- `.gitignore` must include: `node_modules/`, `dist/`, `.DS_Store`, `.env*`

---

## 9. Deployment (Vercel)

- Build command: `npm run build`
- Output directory: `dist`
- No environment variables required (fully static).
- All routes map to `index.html` (SPA routing).
- Enable Vercel Speed Insights after first deploy.

---

## 10. Adding New Content Later

When you have new images/assets to add (e.g., Datathon photos):
1. Convert to `.webp` and place in the correct subfolder under `public/assets/images/`.
2. Update the corresponding data file in `src/data/`.
3. Remove the `status: 'placeholder'` flag from that project's data entry.
4. Commit and push — Vercel auto-deploys.

You do not need to touch any component code just to add images.
