# Rumuri Intelligence

**Building the Intelligence that Empowers Rwanda and Africa.**

Rumuri Intelligence is a Rwandan AI research and product company building foundational NLP, speech, vision, accessibility, and autonomous systems for Africa.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19, SSR)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with oklch design tokens
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com) (New York style)
- **Charts:** [Recharts](https://recharts.org)
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app runs at `http://localhost:8080`.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
| `npm run format`  | Format with Prettier     |

## Project Structure

```
src/
├── assets/          # Images (Kigali, founder, product photos)
├── components/
│   ├── site/        # Page sections (Navbar, Sections, MeshWave, etc.)
│   └── ui/          # shadcn/ui primitives (45 components)
├── hooks/           # Custom hooks (useTheme, useIsMobile)
├── lib/             # Utilities
├── routes/          # File-based routing
│   ├── __root.tsx   # Root layout (ThemeProvider, SEO, error handling)
│   ├── index.tsx    # Landing page
│   ├── blog.tsx     # Blog page
│   └── careers.tsx  # Careers page
├── router.tsx       # TanStack Router config
├── routeTree.gen.ts # Auto-generated route tree
└── styles.css       # Tailwind v4 design system
```

## Features

- **Dark/Light mode** with system preference detection
- **Animated counters** on scroll
- **Interactive language map** of Africa
- **Live product demos** (Voice, Chat, Translation, OCR)
- **Responsive design** (mobile-first)
- **Glass morphism** UI with neon accents
- **Smooth scroll** navigation
- **Blog** and **Careers** pages

## Design System

Colors use oklch format. Primary is cobalt/indigo (`oklch(0.55 0.2 260)`). Custom utilities:

- `glass` / `glass-strong` — frosted glass effects
- `text-gradient-neon` — gradient text
- `glow-neon` — neon box shadow
- `hover-lift` — hover elevation animation

## License

Private project by Rumuri Intelligence.
