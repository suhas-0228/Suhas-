# Copilot Instructions

- This is a Next.js 15 app-router resume template with static export behavior. The page entry is `src/app/page.tsx`, and the shell is defined in `src/app/layout.tsx`.
- Global styles and Tailwind v4 utilities are defined in `src/app/globals.css`. Important custom classes include `container`, `label`, `input`, `no-print`, and theme colors like `bg-softGray`.
- Build and run commands are in `package.json`: `npm run dev`, `npm run build`, `npm run start`, and `npm run lint`. The repo also includes `pnpm-lock.yaml`, so prefer `pnpm install` if a package manager is needed.
- `next.config.ts` uses `output: "export"`, `trailingSlash: true`, and a production `basePath` of `/Resume-Nextjs`. Asset and data paths are normalized through `src/utils/image.ts` via `getImgPath()` and `getDataPath()`.
- Client-side sections fetch JSON from `public/data`: `page-data.json` and `work-data.json`. Key components that rely on this pattern are:
  - `src/app/components/home/education-skills/index.tsx`
  - `src/app/components/home/latest-work/index.tsx`
  - `src/app/components/home/contact/index.tsx`
  - `src/app/components/home/hero-section/contact-bar/index.tsx`
- Interactive components use `"use client"` and React hooks (`useState`, `useEffect`). Do not convert these to server components unless you also remove client-only hooks and window/form interactions.
- Image imports use Next `Image` with `getImgPath()` for base-path-safe URLs. When referencing static assets or public data, preserve absolute paths like `/images/...` and `/data/...` and let `getImgPath`/`getDataPath` adjust them for production.
- The header triggers `window.print()` for PDF/resume output. Print-specific behavior is handled in `src/app/globals.css` with `@media print`, hiding `.navbar`, `header`, `footer`, and `.no-print` elements.
- There is no dedicated test script in the repository. Focus on build + lint behavior if adding or changing components.
- A GitHub Actions workflow exists at `.github/workflows/deploy.yml`, but it references a `dist` artifact and is labeled for Vite. Confirm deployment configuration separately before updating CI.

Feedback welcome: if any part of the data-loading or basePath behavior is unclear, I can refine the instructions further.