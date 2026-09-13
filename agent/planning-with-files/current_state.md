# Current state

Portfolio is live at https://portfolio.winson.codes/ from the standalone repository. Initial build/deploy workflow 34678968377 succeeded for b15b0ac. All 14 routes returned HTTP 200 with the expected titles. Runtime JS/CSS, preview media/images and fonts match local build hashes; custom 404 verified. Existing BendMe /bendme/ website still links to 0.1.5.

Implemented: ten use-case stories; distinct BendMe artwork and Resume AI example controls; links hub; searchable/filterable/grouped archive; official shadcn UI; light/dark theme; responsive layouts; prerendered direct routes and metadata. Twelve tests and local link/asset checks passed. Native WebKit desktop/mobile/light/dark layouts reviewed; recorded no JS errors or horizontal overflow in checked states.

Owner explicitly deferred actual social posts/URLs and authorized samples. Archive entries are labeled samples and ready to replace through src/data/content.ts. Known profiles are linked; no fabricated handles. Resume AI is a product case study; its old domains did not resolve, so visitors see the local story. App availability is not invented. See docs/VERIFICATION.md.

Issue #2 complete: custom domain assigned, valid certificate approved and HTTPS enforced. Workflow 34711319356 deployed 3cb45f3; live canonical uses the custom domain. HTTP redirects to HTTPS. BendMe legacy URL redirects to the custom domain /bendme/ and returns 200 with v0.1.5. Existing Vercel DNS records were not modified.

Issue #3: Fixed local BendMe preview image overflow. Native WebKit at 1440px and 390px verified both lid states contained, controls below the image, no horizontal overflow or JS errors. Screenshots inspected. Lint/tests/build and 14-route verification passed. Local development server remains on port 5173.

Issue #4 complete locally: all ten project pages now lead with concrete experiences; shared cards and featured Links copy updated. Positioning doc includes three hero directions per product and separate verification gaps. 13 tests, lint/build and 14-route/181-link verification passed. All ten routes rendered in native WebKit at 390px/1440px without horizontal overflow, JS errors or failed images. Local server remains at 127.0.0.1:5173. Not pushed or deployed; ready for owner review.
