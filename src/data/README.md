# Content editor guide

Edit `content.ts` for project facts and `positioning.json` for page messaging, then run `npm run check && npm run verify:site`.

## Project stories

Every project has a unique slug, product name, use-case category, headline, summary, reason (`why`), workflow (`steps`) and outcome (`result`). Optional: tags, image filename under public/images, live URL, public repository URL and limitation note. Avoid unsupported outcome metrics. Do not link to a private repository as a public download.

Add a project to `projectFacts` and a matching slug in `positioning.json`; it automatically appears in Work, filtering, prerendered case-study routes and the sitemap. The first three projects are featured on Home. Distinct interactive stories are implemented in `src/components/use-case-preview.tsx`; customize the case page composition in App.tsx for other projects when useful.

## Social profiles and links

Add verified `{name, detail, url}` entries to `socialLinks`. The Links page includes BendMe, Resume AI’s case study and all work. Update those featured links in the Links component if priorities change. Never guess a username.

## Posts

The initial dataset is an archive preview, explicitly authorized as sample content. Replace examples with actual posts. Each entry uses:

- `id`: unique identifier.
- `group`: common story key for related posts across platforms.
- `platform`: one of the platform names in the `platforms` list; add a platform there when needed.
- `title`, `text`, `topic`: your real title/excerpt and project topic.
- `date`: actual publication date, YYYY-MM-DD.
- `url`: original public post URL.
- `sample: false`: only after the source content and URL are confirmed.
- `image`: optional image filename from public/images.

Do not use sample summaries as quotations from real posts. A group can have multiple platforms or multiple entries on one platform. Filters apply before grouping, so a LinkedIn search shows only matching LinkedIn versions. Published entries show original-post links in the dialog. The preview notice disappears once all samples are replaced. Test fixtures may need updating as the published dataset replaces the initial samples.

Positioning fields drive the hero, audience, experience, mechanism, proof, limitations and CTA. `alternatives`, `demo`, and `gap` are editorial notes; do not display uncreated demonstrations as proof. Full copy directions are in ../../docs/PROJECT-POSITIONING.md.

For non-BendMe projects, `headline`, `summary`, `conversation` and `cta` are the visible page copy. The remaining positioning fields are editorial history.
