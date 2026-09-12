# Setup and publishing

Requires Node.js 24 and npm. From this repository:

```sh
npm ci
npm run dev
```

Vite prints the local development URL. For a production check:

```sh
npm run check
npm run verify:site
npm run preview -- --port 4173
```

Expected: lint passes, interaction/data tests pass, 14 routes plus a custom 404 are prerendered, and local asset/link verification passes. Open http://127.0.0.1:4173/ to review the production build.

## Content changes

Edit [src/data/content.ts](src/data/content.ts). The [content guide](src/data/README.md) explains required fields, published-post validation, groups and project routes. Real post URLs and additional social profile URLs are intentionally deferred until the owner supplies them. Do not infer handles or turn sample entries into published claims.

## GitHub Pages

This is the root-site repository `WinsonBaring/winsonbaring.github.io`, independent of BendMe. Base is `/`. In Settings → Pages, use GitHub Actions. Push to main to run tests, prerender and deploy through [.github/workflows/pages.yml](.github/workflows/pages.yml). No provider keys, backend or account tokens are required by the site.

Each known route has its own HTML file, so direct visits and refreshes work without an SPA redirect hack. New projects automatically gain their own route and sitemap entry. Commit the lockfile with dependency changes.

## Local native rendering (macOS only)

The optional [scripts/render.swift](scripts/render.swift) harness uses a standalone WebKit view to render the locally served site into a PNG; it does not control a browser app or request screen recording.

```sh
mkdir -p verification
swiftc scripts/render.swift -o verification/render
verification/render http://127.0.0.1:4173/ 1440 1000 verification/home.png
```

This opens a temporary renderer window and exits after saving. Local render output is ignored by Git. A clipboard denial falls back to displaying the share URL; theme selection works in memory if storage is unavailable.
