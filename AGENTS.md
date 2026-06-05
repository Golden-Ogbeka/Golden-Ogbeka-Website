# Golden Ogbeka Portfolio — Agent Rules

## Project Overview
- Personal portfolio for Golden Ogbeka, built with **Next.js 12 (Pages Router)**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**.
- All content is data-driven from TypeScript arrays in `data/`.
- Dark mode is persisted via `localStorage` and managed through Redux (`darkModeSlice`).

## Code Conventions

### Framework & Routing
- Use Next.js **Pages Router** (`pages/` directory), not App Router.
- Dynamic routes use `getStaticPaths` + `getStaticProps` with `fallback: false`.
- Every page wraps its content in `<AppLayout>` and includes `<HeadElement>` for SEO.

### Styling
- **Primary**: Tailwind CSS utility classes (no styled-components, no Emotion).
- **Secondary**: CSS Modules only for complex reusable components (Tooltip, Alert, etc.).
- Dark mode uses the `dark:` prefix — never write imperative dark mode logic in styles.
- Use theme colors from `tailwind.config.js`: `primary`, `secondary`, `accent`, `darkBg`, `darkCard`, `darkText`, `lightBg`, `lightCard`, `lightText`.
- Fonts: `font-sans` (Inter) for body, `font-display` (Outfit) for headings.
- Available utility classes: `glass-panel`, `minimal-card`, `reveal`/`reveal.active`.

### State Management
- Redux slices live in `app/slices/`. Only three exist: `darkMode`, `alert`, `loadingIndicator`.
- Use `useAppDispatch` and `useAppSelector` from `app/hooks.ts` (typed wrappers).

### Component Patterns
- Components are in `components/layout/`, `components/pages/<SectionName>/`, or `components/reusable/`.
- Use `Link` from `next/link` with the legacy `<a>` child pattern (Next.js 12 style).
- Use `Image` from `next/image` for optimized images.

### Data
- All content (projects, experiences, etc.) is in TypeScript arrays in `data/`.
- Never import data directly from external sources — only from `data/` files.

## Before Making Changes
- Understand the surrounding code conventions first.
- Check existing similar components for patterns.
- Run `npm run lint` and `npm run type:check` after changes.

## Build & Verify
```bash
npm run lint        # ESLint
npm run type:check  # TypeScript strict check
npm run build       # Full production build
```
