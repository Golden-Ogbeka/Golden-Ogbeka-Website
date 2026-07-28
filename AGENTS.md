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
- Typography plugin (`@tailwindcss/typography`) is installed — use `prose prose-zinc dark:prose-invert` for rich text content (blog posts). Use `prose-lg` for larger body text.

### State Management
- Redux slices live in `app/slices/`. Only three exist: `darkMode`, `alert`, `loadingIndicator`.
- Use `useAppDispatch` and `useAppSelector` from `app/hooks.ts` (typed wrappers).

### Component Patterns
- Components are in `components/layout/`, `components/pages/<SectionName>/`, or `components/reusable/`.
- Use `Link` from `next/link` with the legacy `<a>` child pattern (Next.js 12 style).
- Use `Image` from `next/image` for optimized images.

### Data & i18n
- All content (projects, experiences, blog posts, etc.) is in TypeScript arrays in `data/`.
- Never import data directly from external sources — only from `data/` files.
- Translations are split into namespaces in `public/locales/{locale}/*.json`. Use `useTranslation('namespace')` from `next-i18next`. Interpolation is native (e.g., `t('key', { var: val })`).
- The `t()` function supports full i18n objects and standard interpolations.
- Never hardcode UI text; always use `t()` for all user-facing strings.
- When adding or modifying data in `data/` files (projects, experiences, open source, certifications, education, blog posts), you MUST add/update the corresponding translations in ALL 10 locale files (`en`, `fr`, `de`, `es`, `pt`, `zh`, `ja`, `ko`, `ru`, `ar`). Use your multilingual capabilities to generate accurate translations. Use the English locale as the source of truth; the locale key format is `{section}.{slug}.{field}` (e.g., `project.my-slug.title`). For slugs containing dots (e.g. `switch3.0`), use the literal dot in the locale key (e.g., `project.switch3.0.title`).
- **Brand names MUST NOT be translated.** This includes: company names, organization names, institution names, technology names (React, Next.js, etc.), project/repo names, university names, and certification program names. Only translate descriptive content that the user reads (role titles, task descriptions, feature lists, UI chrome, project descriptions, repo descriptions). Check `data/` files to identify which fields are descriptive vs. brand names before translating.

### Blog Section
- Blog data lives in `data/BlogPosts.ts` — exports `BlogPostType[]` with `slug`, `category`, `image`, `ogImagePath`, `date`, and optional `featured`.
- Featured blog subset lives in `data/FeaturedBlogPosts.ts` — exports the posts shown on the homepage.
- Categories are: `tech`, `ai`, `tips`. The `BlogCategory` type is exported from `data/BlogPosts.ts`.
- Blog post content (title, summary, paragraphs) lives entirely in the `blog` translation namespace (`public/locales/{locale}/blog.json`).
- Translation key pattern for blog posts: `blog:post.{slug}.title`, `blog:post.{slug}.summary`, `blog:post.{slug}.paragraphs` (array).
- Category labels: `blog:category.{category}` (e.g., `blog:category.tech`).
- Page-level keys: `blog:page.title`, `blog:page.subtitle`, `blog:page.noPosts`.
- The `paragraphs` key is an array of strings in translations, rendered with `mb-6 leading-relaxed` spacing.
- Components: `BlogCard.tsx`, `BlogDetail.tsx`, `CategoryFilter.tsx`, `RelatedPosts.tsx` in `components/pages/Blog/`.
- Pages: `pages/blog/index.tsx` (listing with client-side category filter) and `pages/blog/[slug].tsx` (detail with `getStaticPaths`).
- The blog detail page uses the same translation trimming pattern as project detail — only the current post's keys are kept in the i18n store.
- Related posts: shown after blog content, prioritizes same-category posts, falls back to top 4 posts.
- Featured blog posts on homepage use the same dynamic import + i18n cherry-picking pattern as featured projects.

### Blog Post Images
- Blog post images MUST be high quality but optimized for web. Follow these rules:
  - **Minimum resolution**: 1200x630px (OG image minimum for social media).
  - **Recommended resolution**: 1920x1080px or wider (16:9 aspect ratio preferred).
  - **Format**: PNG for diagrams/screenshots with text, WebP for photos/illustrations (Next.js serves AVIF/WebP automatically via `next/image`).
  - **File size**: Keep original files under 500KB. Use tools like TinyPNG, Squoosh, or Sharp to compress before adding to `public/images/Blog/`.
  - **Never use blurry or pixelated images.** If an image looks blurry at `aspect-video` (16:9), the source resolution is too low — use a higher resolution original.
  - **Always use `next/image`** with responsive `sizes` attribute. For blog hero images use `priority` and `sizes='(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 720px'`. For card thumbnails use `sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'`.
  - **OG images** (`ogImagePath`): use the direct path to the original file in `public/` (e.g., `/images/Blog/my-post/hero.png`), NOT a Next.js optimized URL. Social media crawlers cannot fetch `_next/image` URLs.
  - Store blog images in `public/images/Blog/{post-slug}/` directories.

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
