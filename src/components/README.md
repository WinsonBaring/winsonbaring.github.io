# components

Owned shadcn UI primitives live in ui/. use-case-preview.tsx contains the actual BendMe artwork toggle and clearly labeled Resume AI example.

ResumePreview illustrates selecting technical and communication experience from detailed notes. It makes no live AI request; both views retain the same source facts.

`mobile-carousel.tsx` progressively enhances Links project tiles below 640px. Slides advance every 2500ms; holding, hovering, keyboard focus, manual pause, reduced motion and hidden tabs stop automatic advancement. Horizontal swipes and previous/next controls are available. See https://www.w3.org/WAI/ARIA/apg/patterns/carousel/.

Links now supplies three group slides: Applications, Work experience, Automation services. Navigation arrows are removed; swipe or keyboard arrow keys change sections. A focus-revealed pause control remains for keyboard accessibility. Long holds suppress link activation on release.

Issue #25: the grouped carousel now runs at every viewport width. Desktop supports mouse dragging (native link/image drag is suppressed), hold/hover pause and keyboard navigation. The component filename is retained for existing imports.
