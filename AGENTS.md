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

### Data & i18n
- All content (projects, experiences, etc.) is in TypeScript arrays in `data/`.
- Never import data directly from external sources — only from `data/` files.
- Translations are split into namespaces in `public/locales/{locale}/*.json`. Use `useTranslation('namespace')` from `next-i18next`. Interpolation is native (e.g., `t('key', { var: val })`).
- The `t()` function supports full i18n objects and standard interpolations.
- Never hardcode UI text; always use `t()` for all user-facing strings.
- When adding or modifying data in `data/` files (projects, experiences, open source, certifications, education), you MUST add/update the corresponding translations in ALL 10 locale files (`en`, `fr`, `de`, `es`, `pt`, `zh`, `ja`, `ko`, `ru`, `ar`). Use your multilingual capabilities to generate accurate translations. Use the English locale as the source of truth; the locale key format is `{section}.{slug}.{field}` (e.g., `project.my-slug.title`). For slugs containing dots (e.g. `switch3.0`), use the literal dot in the locale key (e.g. `project.switch3.0.title`).
- **Brand names MUST NOT be translated.** This includes: company names, organization names, institution names, technology names (React, Next.js, etc.), project/repo names, university names, and certification program names. Only translate descriptive content that the user reads (role titles, task descriptions, feature lists, UI chrome, project descriptions, repo descriptions). Check `data/` files to identify which fields are descriptive vs. brand names before translating.

## Accessibility (Must Maintain 100%)
- All interactive elements must have visible focus indicators (`focus-visible:ring-2` or equivalent).
- All icon-only buttons and links must have descriptive `aria-label` attributes.
- All images must have meaningful `alt` text (empty `alt=""` only for decorative images with `aria-hidden="true"`).
- Maintain proper heading hierarchy (`h1` → `h2` → `h3`, no skipping levels).
- All form inputs must have associated labels with unique `id`/`htmlFor` pairs.
- Error messages must use `role="alert"` or `aria-live="polite"`.
- Skip-to-content link must be the first focusable element on every page.
- Clickable elements must be semantic (`<button>`, `<a>`) or have `role="button"`, `tabIndex`, and `onKeyDown`.
- Color contrast must meet WCAG AA (3:1 for large text, 4.5:1 for normal text).

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
