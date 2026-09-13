# Project

React + Vite + TypeScript; Tailwind v4; shadcn/ui generated from its official CLI using Base UI primitives; Lucide icons; self-hosted Geist font. Vitest/Testing Library cover interaction and data behavior. Static HTML is prerendered through react-dom/server; GitHub Pages handles hosting.

Routes: `/`, `/work/`, `/work/:slug/`, `/posts/`, `/links/`. Canonical project/post/profile data is in src/data/content.ts. App.tsx contains page compositions. Shared button/tabs/dialog/badge/input primitives remain owned source in src/components/ui; no dashboard or backend is implied.

Design: developer portfolio; variance 7, motion 3, density 3. Off-white/charcoal with one blue accent, site-wide dark theme, asymmetric hero, varied featured-work layout, 16px media corners, 8px controls and pill filters. Motion is limited to hover/press feedback and disabled for reduced-motion preferences. The two featured stories include distinct, explicitly labeled previews rather than fabricated screenshots.

Privacy: no analytics, forms, third-party embeds or runtime API calls. A local theme preference is stored. Social links open externally. GitHub hosting has its own request processing. Only selected public-facing descriptions/media are included; private source code, contact phone numbers and unpublished social drafts are not copied.

See SETUP.md for execution and src/data/README.md for content maintenance. No external service credentials required.

Product messaging lives in src/data/positioning.json and is combined with project facts in content.ts. Shared page composition keeps unverified products as walkthroughs and retains existing labeled previews. No new dependencies.

Iconnek is a default featured project with a prerendered /work/iconnek/ page and the existing app icon. No new dependencies.
