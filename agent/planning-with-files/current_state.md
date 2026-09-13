# Current state

Portfolio is live at https://portfolio.winson.codes/ from the standalone repository. Initial build/deploy workflow 34678968377 succeeded for b15b0ac. All 14 routes returned HTTP 200 with the expected titles. Runtime JS/CSS, preview media/images and fonts match local build hashes; custom 404 verified. Existing BendMe /bendme/ website still links to 0.1.5.

Implemented: ten use-case stories; distinct BendMe artwork and Resume AI example controls; links hub; searchable/filterable/grouped archive; official shadcn UI; light/dark theme; responsive layouts; prerendered direct routes and metadata. Twelve tests and local link/asset checks passed. Native WebKit desktop/mobile/light/dark layouts reviewed; recorded no JS errors or horizontal overflow in checked states.

Owner explicitly deferred actual social posts/URLs and authorized samples. Archive entries are labeled samples and ready to replace through src/data/content.ts. Known profiles are linked; no fabricated handles. Resume AI is a product case study; its old domains did not resolve, so visitors see the local story. App availability is not invented. See docs/VERIFICATION.md.

Issue #2 complete: custom domain assigned, valid certificate approved and HTTPS enforced. Workflow 34711319356 deployed 3cb45f3; live canonical uses the custom domain. HTTP redirects to HTTPS. BendMe legacy URL redirects to the custom domain /bendme/ and returns 200 with v0.1.5. Existing Vercel DNS records were not modified.

Issue #3: Fixed local BendMe preview image overflow. Native WebKit at 1440px and 390px verified both lid states contained, controls below the image, no horizontal overflow or JS errors. Screenshots inspected. Lint/tests/build and 14-route verification passed. Local development server remains on port 5173.

Issue #4 complete locally: all ten project pages now lead with concrete experiences; shared cards and featured Links copy updated. Positioning doc includes three hero directions per product and separate verification gaps. 13 tests, lint/build and 14-route/181-link verification passed. All ten routes rendered in native WebKit at 390px/1440px without horizontal overflow, JS errors or failed images. Local server remains at 127.0.0.1:5173. Not pushed or deployed; ready for owner review.

Issue #6: Owner reverted the prose-only redesign. Applied conversational wording only to nine projects, preserving the restored layout and visuals. App.tsx, App.css and preview component verified byte-identical to HEAD; BendMe facts and positioning unchanged. Changes local for review.

Issue #7 complete locally: applied prompts/human-voice.md to nine projects’ messaging, retained BendMe and all UI implementation, removed unsupported personal anecdotes. Lint/tests/build and 14-route/181-link checks passed. Native mobile Jungle Guardians render checked for long-headline layout. Not published.

Issue #8 complete locally: Resume AI centers on detailed unstructured experience, job-description relevance and positioning rationale. Existing UI retained; illustrative preview copy now combines technical and customer-support experience. Checks passed. Not published.

Issue #9 complete locally: only BendMe and Resume AI appear by default on Home/Work and in featured next-project navigation. Work can reveal all ten and reset to featured. Direct archived routes remain. Tests/build and static route validation passed. Not published.

Issue #10: Reused existing Resume AI FileText brand mark from sibling app source. Applied to cards, project header and Links; wording/preview unchanged. Checks passed. Local only.

Issue #11 complete locally: mobile Links profile shows centered photo/badge, with name, intro, copy button and status space hidden below 640px. Native 390px render inspected, no overflow or JS errors. Desktop styles retained. Not published.

Issue #12: Shared Resume AI mark now has 10px rounded corners. Local only.

Issue #13: Try something I made is centered on mobile. Desktop and other headings retain existing alignment. Local only.

Issue #14: Publishing approved local updates. Domain portfolio.winson.codes retains HTTPS enforcement.

Issue #14 complete: published approved updates to https://portfolio.winson.codes/. Workflow 34734034804 deployed 46ae07c. Home, Work, Links and Resume AI HTML match local build exactly; live JS/CSS match too. 15 tests and 14-route checks passed.

Issue #15 complete locally: Affiliatour added as third featured project with official icon and App Store link. Eleven total projects; eight remain archived by default. Checks passed: 15 routes and 193 local links/assets. Not published.

Issue #16 complete locally: Links order is Affiliatour, Iconnek, BendMe, Resume AI. Public Iconnek landing returned HTTP 200; management URL not exposed. Tests/build passed. Not published.

Issue #17: Iconnek Links tile uses its existing green leaf app icon, copied from the owner’s repo. Local only.

Issue #18: Publishing approved Affiliatour and Links/logo changes. User-created projects-info notes remain untracked.

Issue #18 complete: workflow 34736224577 deployed 034fc14. Home/Work/Links/Affiliatour return HTTPS 200 with expected HTML (build asset filenames differ). Referenced JS/CSS load successfully; logo bytes match local originals. 16 tests passed.

Issue #19: Links is now the root page with matching title/navigation. Former home retained at /home/. Publishing after checks.

Issue #19 complete: 77d4d86 deployed via 34736449966. Live root and /links/ return 200 with Links; /home/ returns 200 with former introduction.

Issue #20: Social platform names replaced by logos; descriptions and links retained, dark-mode contrast handled. Local only.

Issue #21 complete locally: four featured projects including Iconnek, twelve total. Updated Affiliatour/Resume AI/Iconnek messaging from owner notes; YABS empty so unchanged. Preserved current visuals and BendMe. Tests/build and 17-route/246-link validation passed. Not published.
