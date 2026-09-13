# src

React pages and hydration entry points. App.tsx composes Work, stories, Posts and Links; App.css owns the editorial layout. See data/README.md for editing content.

CaseStudy renders product-specific positioning, labeled previews or workflow explanations, evidence, decision barriers and an appropriate next step. Cards and the Links hub share the same headlines.

Work has a reversible Show all projects toggle. Category resets to All when visibility changes; new visits start with featured projects only.

ResumeLogo reuses the existing Resume AI mark: Lucide FileText, cream #f3f0e8 on #1d1d1d. Source: sibling resume-ai/apps/frontend/src/components/block/landing-page.tsx and app-sidebar.tsx. No new asset or dependency.

At widths up to 639px, Links centers its portrait and badge and hides the profile name, introduction and copy controls. Desktop keeps the full profile.

Resume AI marks share a 10px corner radius across their placements.

The featured-links heading is centered on mobile only.

Affiliatour appears in featured cards, its case-study route and Links, using its official App Store icon.
