# AGENTS

## Running the project

```bash
npm run dev       # Start dev server at http://localhost:8080
npm run build     # Production build
npm run lint      # ESLint check
npm run format    # Prettier format
npx tsc --noEmit  # TypeScript type check
```

## Code conventions

- Use `cn()` from `@/lib/utils` for className merging
- Import UI components from `@/components/ui/`
- Import site components from `@/components/site/`
- All animations use `motion/react` (not `framer-motion`)
- Colors use oklch format, defined in `src/styles.css`
- Routes use TanStack Router file-based routing
