# Current state

Portfolio is live at https://winsonbaring.github.io/ from the standalone repository. Initial build/deploy workflow 34678968377 succeeded for b15b0ac. All 14 routes returned HTTP 200 with the expected titles. Runtime JS/CSS, preview media/images and fonts match local build hashes; custom 404 verified. Existing BendMe /bendme/ website still links to 0.1.5.

Implemented: ten use-case stories; distinct BendMe artwork and Resume AI example controls; links hub; searchable/filterable/grouped archive; official shadcn UI; light/dark theme; responsive layouts; prerendered direct routes and metadata. Twelve tests and local link/asset checks passed. Native WebKit desktop/mobile/light/dark layouts reviewed; recorded no JS errors or horizontal overflow in checked states.

Owner explicitly deferred actual social posts/URLs and authorized samples. Archive entries are labeled samples and ready to replace through src/data/content.ts. Known profiles are linked; no fabricated handles. Resume AI is a product case study; its old domains did not resolve, so visitors see the local story. App availability is not invented. See docs/VERIFICATION.md.
