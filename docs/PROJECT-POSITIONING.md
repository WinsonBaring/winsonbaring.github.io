# Project positioning and page copy

Applies to the ten project pages in the portfolio, not the underlying applications. Based on the supplied product-positioning prompt and existing project descriptions, owner-provided BendMe material, public source links and prior verification. Audience and payoff are positioning choices, not customer research results. No new performance, pricing, integration or compatibility claims are introduced.

The first hero direction is used in the UI. Source copy lives in `src/data/positioning.json`; project history, steps and URLs remain in `src/data/content.ts`. Existing project pages supply the complete rendered draft. Missing facts are tracked separately in [VERIFICATION-GAPS.md](VERIFICATION-GAPS.md).

## bendme

### A. Positioning

- User and situation: For MacBook owners who enjoy a playful desktop.
- Central promise: Lower your lid. Watch your desktop fold.
- Concrete experience: You gently lower the lid; the desktop bends with it. Open it again to return to the normal view.
- Payoff: The effect is the point. It adds a small moment of delight to a familiar machine.
- Reason to believe: BendMe’s public code, built-in artwork renders and the existing MacBook demo are available to inspect.
- Main objection: Requires macOS 14+, Apple silicon and a compatible lid sensor. Screen Recording permission is needed. Pause in Appearance or the menu bar.

### B. Three hero directions

1. **Lower your lid. Watch your desktop fold.** BendMe turns a small movement of your MacBook lid into a live visual effect. Choose a style, start the effect and watch your screen change perspective.
2. **A desktop that follows your MacBook lid.** You gently lower the lid; the desktop bends with it. Open it again to return to the normal view.
3. **A little lid movement. A visible bend.** A native Swift and Metal renderer uses screen capture and the lid sensor to draw the effect.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Lower your lid. Watch your desktop fold.

BendMe turns a small movement of your MacBook lid into a live visual effect. Choose a style, start the effect and watch your screen change perspective.

**Primary CTA:** Try BendMe. Opens the existing project URL.

**Your lid becomes part of the effect:** You gently lower the lid; the desktop bends with it. Open it again to return to the normal view.

**How it works:** A native Swift and Metal renderer uses screen capture and the lid sensor to draw the effect. The existing project steps are displayed as the short workflow.

**What you can inspect:** BendMe’s public code, built-in artwork renders and the existing MacBook demo are available to inspect.

**Before you try it:** Requires macOS 14+, Apple silicon and a compatible lid sensor. Screen Recording permission is needed. Pause in Appearance or the menu bar.

**Closing CTA:** Try BendMe. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Use existing evidence:** Use the supplied lid demo and the two existing shader renders. The video shows physical lid movement; the artwork switch shows the visual states, not live tracking in the website.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## resume-ai

### A. Positioning

- User and situation: For job applicants turning work experience into an application.
- Central promise: Turn scattered work notes into a resume draft.
- Concrete experience: A rough account of your work becomes a draft you can read, edit and shape around a job. You check the claims before they become your resume.
- Payoff: A clearer starting point when your experience is easier to remember than to write about.
- Reason to believe: The example below shows the intended writing workflow using the same facts in both views. It is an illustration, not output from a running Resume AI service.
- Main objection: Review every claim. AI-assisted wording does not establish that an achievement is true or that a resume will lead to an interview.

### B. Three hero directions

1. **Turn scattered work notes into a resume draft.** Bring together what you have done, use AI-assisted drafting to organize it for a role, then review the wording before you apply.
2. **Your work experience, ready for a first draft.** A rough account of your work becomes a draft you can read, edit and shape around a job. You check the claims before they become your resume.
3. **Start your next application with the work you have done.** AI-assisted drafting organizes work experience and skills into resume content.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Turn scattered work notes into a resume draft.

Bring together what you have done, use AI-assisted drafting to organize it for a role, then review the wording before you apply.

**Primary CTA:** See the writing example. Jumps to the on-page walkthrough; does not imply public product access.

**Start with the experience you already have:** A rough account of your work becomes a draft you can read, edit and shape around a job. You check the claims before they become your resume.

**How it works:** AI-assisted drafting organizes work experience and skills into resume content. The existing project steps are displayed as the short workflow.

**What you can inspect:** The example below shows the intended writing workflow using the same facts in both views. It is an illustration, not output from a running Resume AI service.

**Before you try it:** Review every claim. AI-assisted wording does not establish that an achievement is true or that a resume will lead to an interview.

**Closing CTA:** See the writing example. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Use existing evidence:** Keep the clearly labeled notes-to-draft illustration. It explains the intended input and output but does not prove the production AI workflow.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## yabs

### A. Positioning

- User and situation: For developers comparing VPS benchmark results.
- Central promise: Read your VPS benchmarks beyond the terminal.
- Concrete experience: Start with benchmark output and look at the measured performance visually. Use those results as one part of choosing a machine.
- Payoff: Less back-and-forth through terminal logs when comparing test results.
- Reason to believe: The benchmark website and public source repository are linked here. Test results reflect the conditions under which they were recorded.
- Main objection: A benchmark is not a guarantee for your application. Check the test conditions and consider your own workload.

### B. Three hero directions

1. **Read your VPS benchmarks beyond the terminal.** Turn YABS output into a visual view of measured server performance, then compare the results against the workload you have in mind.
2. **Compare the measurements behind your VPS choice.** Start with benchmark output and look at the measured performance visually. Use those results as one part of choosing a machine.
3. **Give YABS output a visual view.** A visualization layer presents the measurements recorded by YABS.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Read your VPS benchmarks beyond the terminal.

Turn YABS output into a visual view of measured server performance, then compare the results against the workload you have in mind.

**Primary CTA:** Open YABS Visualizer. Opens the existing project URL.

**Make the measurements easier to inspect:** Start with benchmark output and look at the measured performance visually. Use those results as one part of choosing a machine.

**How it works:** A visualization layer presents the measurements recorded by YABS. The existing project steps are displayed as the short workflow.

**What you can inspect:** The benchmark website and public source repository are linked here. Test results reflect the conditions under which they were recorded.

**Before you try it:** A benchmark is not a guarantee for your application. Check the test conditions and consider your own workload.

**Closing CTA:** Open YABS Visualizer. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Capture real YABS output beside the matching visualization. Highlight the same measurement in both so visitors can trace the source of a displayed value.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## arsenal

### A. Positioning

- User and situation: For developers who reuse prompts across their work.
- Central promise: Find the prompt you want to use again.
- Concrete experience: Organize useful prompts with their project context. When similar work comes up, return to the instructions and adapt them to the task.
- Payoff: Continuity between development sessions without treating every prompt as disposable.
- Reason to believe: Arsenal is linked as a prompt-management project. This page describes the project scope; it does not claim measured improvements in AI results.
- Main objection: A saved prompt still needs the right context and a review of the result it produces.

### B. Three hero directions

1. **Find the prompt you want to use again.** Keep reusable AI development instructions organized around the work they support, so a useful prompt has a place beyond the original conversation.
2. **Keep the instructions that worked.** Organize useful prompts with their project context. When similar work comes up, return to the instructions and adapt them to the task.
3. **Give recurring development prompts a home.** Prompt management gives reusable instructions and development workflows a shared place in the project.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Find the prompt you want to use again.

Keep reusable AI development instructions organized around the work they support, so a useful prompt has a place beyond the original conversation.

**Primary CTA:** Open Arsenal. Opens the existing project URL.

**Return to instructions worth keeping:** Organize useful prompts with their project context. When similar work comes up, return to the instructions and adapt them to the task.

**How it works:** Prompt management gives reusable instructions and development workflows a shared place in the project. The existing project steps are displayed as the short workflow.

**What you can inspect:** Arsenal is linked as a prompt-management project. This page describes the project scope; it does not claim measured improvements in AI results.

**Before you try it:** A saved prompt still needs the right context and a review of the result it produces.

**Closing CTA:** Open Arsenal. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record saving an actual development prompt and finding it for a second task. Confirm the available controls before scripting the recording.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## scatter

### A. Positioning

- User and situation: For people who enjoy short, playful browser experiments.
- Central promise: Drop a ball. Follow every bounce.
- Concrete experience: Drop a ball into the board and follow its path through the obstacles. A different bounce gives you another reason to try again.
- Payoff: Anticipation, movement and the satisfaction of seeing the result.
- Reason to believe: This portfolio records Scatter as a physics-based browser game project. A playable build is not linked here.
- Main objection: Presented as an interaction experiment. No prizes, payouts or odds are offered on this page.

### B. Three hero directions

1. **Drop a ball. Follow every bounce.** A browser-game experiment built around a simple moment: send a ball into a physics board and watch where it lands.
2. **See where the next bounce takes you.** Drop a ball into the board and follow its path through the obstacles. A different bounce gives you another reason to try again.
3. **One drop, a board full of possibilities.** Physics simulation turns a drop into a sequence of collisions and a landing.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Drop a ball. Follow every bounce.

A browser-game experiment built around a simple moment: send a ball into a physics board and watch where it lands.

**Primary CTA:** See the game flow. Jumps to the on-page walkthrough; does not imply public product access.

**The fun is in the fall:** Drop a ball into the board and follow its path through the obstacles. A different bounce gives you another reason to try again.

**How it works:** Physics simulation turns a drop into a sequence of collisions and a landing. The existing project steps are displayed as the short workflow.

**What you can inspect:** This portfolio records Scatter as a physics-based browser game project. A playable build is not linked here.

**Before you try it:** Presented as an interaction experiment. No prizes, payouts or odds are offered on this page.

**Closing CTA:** See the game flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record one uninterrupted ball drop in the actual build, from input to landing, with its real feedback. Show the board rather than a fabricated game screenshot.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## laundirii

### A. Positioning

- User and situation: For people exploring coordination in a laundry service.
- Central promise: Follow a laundry order across three roles.
- Concrete experience: A customer starts a request. The courier and shop take part in the same service flow, making each role part of the product design.
- Payoff: A clearer view of how a service moves between people.
- Reason to believe: A collaborative Android application project focused on laundry coordination. This page is a walkthrough, not an offer of an operating laundry service.
- Main objection: No service area, delivery time or payment support is claimed. This is a team project.

### B. Three hero directions

1. **Follow a laundry order across three roles.** LaunDiri brings the customer, courier and laundry shop into one service workflow, built as a collaborative Android project.
2. **One laundry request, more than one person.** A customer starts a request. The courier and shop take part in the same service flow, making each role part of the product design.
3. **Designing the handoffs behind laundry day.** Role-based order workflows connect the customer request with courier and shop participation.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Follow a laundry order across three roles.

LaunDiri brings the customer, courier and laundry shop into one service workflow, built as a collaborative Android project.

**Primary CTA:** See the service flow. Jumps to the on-page walkthrough; does not imply public product access.

**Make the handoffs part of the order:** A customer starts a request. The courier and shop take part in the same service flow, making each role part of the product design.

**How it works:** Role-based order workflows connect the customer request with courier and shop participation. The existing project steps are displayed as the short workflow.

**What you can inspect:** A collaborative Android application project focused on laundry coordination. This page is a walkthrough, not an offer of an operating laundry service.

**Before you try it:** No service area, delivery time or payment support is claimed. This is a team project.

**Closing CTA:** See the service flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Capture the same test order from the customer, courier and shop views. Show only handoffs supported by the actual app.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## techno-dynamic

### A. Positioning

- User and situation: For learners exploring technopreneurship course material.
- Central promise: Explore course material through the questions it raises.
- Concrete experience: Open course material, explore the generated content and use relevant suggestions to continue learning about the subject.
- Payoff: A way to explore a topic beyond the first piece of course material.
- Reason to believe: The documented project scope covers AI-assisted course content and suggestions. No learning-outcome study is supplied.
- Main objection: Generated learning material needs review. The page does not promise factual accuracy or improved grades.

### B. Three hero directions

1. **Explore course material through the questions it raises.** Techno Dynamic is a collaborative learning-platform project combining technopreneurship material, generated content and FAQ-based suggestions.
2. **A course page with somewhere to take your questions.** Open course material, explore the generated content and use relevant suggestions to continue learning about the subject.
3. **Bring technopreneurship material and questions together.** AI-assisted content generation and FAQ-based suggestions sit within a course-learning interface.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Explore course material through the questions it raises.

Techno Dynamic is a collaborative learning-platform project combining technopreneurship material, generated content and FAQ-based suggestions.

**Primary CTA:** See the learning flow. Jumps to the on-page walkthrough; does not imply public product access.

**Keep the questions close to the lesson:** Open course material, explore the generated content and use relevant suggestions to continue learning about the subject.

**How it works:** AI-assisted content generation and FAQ-based suggestions sit within a course-learning interface. The existing project steps are displayed as the short workflow.

**What you can inspect:** The documented project scope covers AI-assisted course content and suggestions. No learning-outcome study is supplied.

**Before you try it:** Generated learning material needs review. The page does not promise factual accuracy or improved grades.

**Closing CTA:** See the learning flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record a real course section with its associated FAQ suggestion and resulting content. Use a verified lesson and retain any review notices.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## rad-ai

### A. Positioning

- User and situation: For people studying image-classification interfaces.
- Central promise: Inspect an ultrasound classifier’s response to an image.
- Concrete experience: A suitable research image goes into the classifier. The interface presents its output for inspection as an experimental result.
- Payoff: A tangible way to inspect what a classification experiment returns.
- Reason to believe: The project is documented as an ultrasound-classification prototype. No clinical validation or accuracy figures are supplied.
- Main objection: Not a validated medical device. Do not use the output for diagnosis or clinical decisions.

### B. Three hero directions

1. **Inspect an ultrasound classifier’s response to an image.** A research prototype that puts image input and model output into an interface you can examine. For research demonstration only, not diagnosis.
2. **From an ultrasound image to an experimental prediction.** A suitable research image goes into the classifier. The interface presents its output for inspection as an experimental result.
3. **Put a classification experiment where it can be inspected.** An interface connects image input to a machine-learning inference workflow.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Inspect an ultrasound classifier’s response to an image.

A research prototype that puts image input and model output into an interface you can examine. For research demonstration only, not diagnosis.

**Primary CTA:** See the research flow. Jumps to the on-page walkthrough; does not imply public product access.

**See the inference workflow:** A suitable research image goes into the classifier. The interface presents its output for inspection as an experimental result.

**How it works:** An interface connects image input to a machine-learning inference workflow. The existing project steps are displayed as the short workflow.

**What you can inspect:** The project is documented as an ultrasound-classification prototype. No clinical validation or accuracy figures are supplied.

**Before you try it:** Not a validated medical device. Do not use the output for diagnosis or clinical decisions.

**Closing CTA:** See the research flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Use an authorized non-identifying research image and capture its actual model output. Keep the research-only notice visible. Do not invent confidence values.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## jungle-guardians

### A. Positioning

- User and situation: For learners exploring computer vision with animal images.
- Central promise: Give an animal classifier a picture to work with.
- Concrete experience: Provide an image and look at the category the model predicts. Compare that prediction with the image and consider where the model falls short.
- Payoff: A concrete starting point for understanding predictions and mistakes.
- Reason to believe: Documented as an interactive animal-image classification project. No accuracy benchmark is supplied.
- Main objection: A prediction can be wrong. Supported species and model accuracy are not established here.

### B. Three hero directions

1. **Give an animal classifier a picture to work with.** Choose an animal image, inspect the predicted category and explore how a classification model responds.
2. **See what a model makes of an animal photo.** Provide an image and look at the category the model predicts. Compare that prediction with the image and consider where the model falls short.
3. **Explore animal classification one image at a time.** An interactive interface connects animal imagery to an image-classification model.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Give an animal classifier a picture to work with.

Choose an animal image, inspect the predicted category and explore how a classification model responds.

**Primary CTA:** See the classification flow. Jumps to the on-page walkthrough; does not imply public product access.

**Make classification something you can try:** Provide an image and look at the category the model predicts. Compare that prediction with the image and consider where the model falls short.

**How it works:** An interactive interface connects animal imagery to an image-classification model. The existing project steps are displayed as the short workflow.

**What you can inspect:** Documented as an interactive animal-image classification project. No accuracy benchmark is supplied.

**Before you try it:** A prediction can be wrong. Supported species and model accuracy are not established here.

**Closing CTA:** See the classification flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record a permitted animal image and the actual returned category. Include a real failure case if available, without inventing predictions.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## contact-manager

### A. Positioning

- User and situation: For people maintaining a collection of contact records.
- Central promise: Keep contact details ready to return to.
- Concrete experience: Browse your contacts, maintain the stored information and return to the record when you need it.
- Payoff: A dedicated place to work with contact information.
- Reason to believe: The project is documented as a contact-management application built with Angular and Supabase. No scale or security audit is claimed.
- Main objection: This walkthrough does not establish suitability for sensitive customer data.

### B. Three hero directions

1. **Keep contact details ready to return to.** A focused contact-management project for browsing records and maintaining the information stored in them.
2. **Return to the contact record you need.** Browse your contacts, maintain the stored information and return to the record when you need it.
3. **Give contact records a focused workspace.** An Angular interface and Supabase-backed project support the contact-record workflow.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Keep contact details ready to return to.

A focused contact-management project for browsing records and maintaining the information stored in them.

**Primary CTA:** See the contact workflow. Jumps to the on-page walkthrough; does not imply public product access.

**Work with the details you need again:** Browse your contacts, maintain the stored information and return to the record when you need it.

**How it works:** An Angular interface and Supabase-backed project support the contact-record workflow. The existing project steps are displayed as the short workflow.

**What you can inspect:** The project is documented as a contact-management application built with Angular and Supabase. No scale or security audit is claimed.

**Before you try it:** This walkthrough does not establish suitability for sensitive customer data.

**Closing CTA:** See the contact workflow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Use fictional contact details in an actual build. Show browsing a record and a supported edit, then confirm the saved value before presenting that capability.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

