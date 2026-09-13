# Project positioning and page copy

Copy-only revision: conversational wording within the approved existing UI. All previews, visual panels and interactions are retained; BendMe is unchanged.

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
- Concrete experience: You might have a few notes, an old resume and some projects you want to mention. Bring that experience together, then work on a draft you can edit until it sounds like you.
- Payoff: It gives you somewhere to start when you know your experience but aren’t sure how to write about it.
- Reason to believe: The example on this page shows how rough notes could become a draft. Both versions use the same facts. It’s an illustration of the idea, rather than a response from the live app.
- Main objection: Before you apply, read through every claim and make sure it’s true. A clearer draft can help you explain your experience, but it can’t promise an interview.

### B. Three hero directions

1. **Turn scattered work notes into a resume draft.** Resume AI helps you take the work you’ve done and put it into words. Start with your experience, work on a draft, then shape it around the job you’re applying for.
2. **Your work experience, ready for a first draft.** You might have a few notes, an old resume and some projects you want to mention. Bring that experience together, then work on a draft you can edit until it sounds like you.
3. **Start your next application with the work you have done.** AI-assisted writing helps organize your work and skills. You decide what belongs in the resume and how you want to say it.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Turn scattered work notes into a resume draft.

Resume AI helps you take the work you’ve done and put it into words. Start with your experience, work on a draft, then shape it around the job you’re applying for.

**Primary CTA:** See the writing example. Jumps to the on-page walkthrough; does not imply public product access.

**Start with what you’ve done:** You might have a few notes, an old resume and some projects you want to mention. Bring that experience together, then work on a draft you can edit until it sounds like you.

**How it works:** AI-assisted writing helps organize your work and skills. You decide what belongs in the resume and how you want to say it. The existing project steps are displayed as the short workflow.

**What you can inspect:** The example on this page shows how rough notes could become a draft. Both versions use the same facts. It’s an illustration of the idea, rather than a response from the live app.

**Before you try it:** Before you apply, read through every claim and make sure it’s true. A clearer draft can help you explain your experience, but it can’t promise an interview.

**Closing CTA:** See the writing example. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Use existing evidence:** Keep the clearly labeled notes-to-draft illustration. It explains the intended input and output but does not prove the production AI workflow.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## yabs

### A. Positioning

- User and situation: For developers comparing VPS benchmark results.
- Central promise: Read your VPS benchmarks beyond the terminal.
- Concrete experience: Start with your YABS results and look through the measurements visually. That gives you another way to think about which server might suit your work.
- Payoff: You can spend more of your attention on what the results mean.
- Reason to believe: You can open the benchmark site and look through the public source code. The measurements come from particular tests, so the conditions behind each result matter too.
- Main objection: A benchmark gives you something to compare, but your own app may behave differently. Keep your workload in mind when you make the decision.

### B. Three hero directions

1. **Read your VPS benchmarks beyond the terminal.** When you’re choosing a VPS, reading through benchmark logs can get repetitive. This visualizer helps you look through YABS results and compare what the machines measured.
2. **Compare the measurements behind your VPS choice.** Start with your YABS results and look through the measurements visually. That gives you another way to think about which server might suit your work.
3. **Give YABS output a visual view.** YABS runs the benchmarks. The visualizer presents those measurements so you can look through them without repeatedly scanning the terminal output.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Read your VPS benchmarks beyond the terminal.

When you’re choosing a VPS, reading through benchmark logs can get repetitive. This visualizer helps you look through YABS results and compare what the machines measured.

**Primary CTA:** Open YABS Visualizer. Opens the existing project URL.

**Get a better look at the results:** Start with your YABS results and look through the measurements visually. That gives you another way to think about which server might suit your work.

**How it works:** YABS runs the benchmarks. The visualizer presents those measurements so you can look through them without repeatedly scanning the terminal output. The existing project steps are displayed as the short workflow.

**What you can inspect:** You can open the benchmark site and look through the public source code. The measurements come from particular tests, so the conditions behind each result matter too.

**Before you try it:** A benchmark gives you something to compare, but your own app may behave differently. Keep your workload in mind when you make the decision.

**Closing CTA:** Open YABS Visualizer. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Capture real YABS output beside the matching visualization. Highlight the same measurement in both so visitors can trace the source of a displayed value.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## arsenal

### A. Positioning

- User and situation: For developers who reuse prompts across their work.
- Central promise: Find the prompt you want to use again.
- Concrete experience: Keep useful prompts with the work they belong to. When a similar task comes up, you can return to those instructions and adapt them instead of starting again.
- Payoff: The instructions you want to keep have somewhere to go after the conversation ends.
- Reason to believe: You can take a look at Arsenal through the link on this page. It’s a project about organizing prompts and the development work they support.
- Main objection: You’ll still need to give the AI the right context and check what it produces. Reusing a prompt doesn’t remove that part of the work.

### B. Three hero directions

1. **Find the prompt you want to use again.** Sometimes you write a prompt you want to use again. Arsenal gives those instructions a place to live, along with the project context that makes them useful.
2. **Keep the instructions that worked.** Keep useful prompts with the work they belong to. When a similar task comes up, you can return to those instructions and adapt them instead of starting again.
3. **Give recurring development prompts a home.** Arsenal organizes prompts and reusable development instructions around your projects.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Find the prompt you want to use again.

Sometimes you write a prompt you want to use again. Arsenal gives those instructions a place to live, along with the project context that makes them useful.

**Primary CTA:** Open Arsenal. Opens the existing project URL.

**Come back to the instructions you want to keep:** Keep useful prompts with the work they belong to. When a similar task comes up, you can return to those instructions and adapt them instead of starting again.

**How it works:** Arsenal organizes prompts and reusable development instructions around your projects. The existing project steps are displayed as the short workflow.

**What you can inspect:** You can take a look at Arsenal through the link on this page. It’s a project about organizing prompts and the development work they support.

**Before you try it:** You’ll still need to give the AI the right context and check what it produces. Reusing a prompt doesn’t remove that part of the work.

**Closing CTA:** Open Arsenal. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record saving an actual development prompt and finding it for a second task. Confirm the available controls before scripting the recording.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## scatter

### A. Positioning

- User and situation: For people who enjoy short, playful browser experiments.
- Central promise: Drop a ball. Follow every bounce.
- Concrete experience: Send a ball into the board and follow its path through the obstacles. Once it lands, you can try another drop and see what happens.
- Payoff: There’s a little anticipation in every drop.
- Reason to believe: Scatter is a browser-game project I’m exploring. There isn’t a playable build linked on this page yet.
- Main objection: It’s a game experiment. This page doesn’t offer prizes or payouts.

### B. Three hero directions

1. **Drop a ball. Follow every bounce.** You drop a ball into the board and watch where it goes. Scatter is a browser-game experiment built around the fun of following each bounce.
2. **See where the next bounce takes you.** Send a ball into the board and follow its path through the obstacles. Once it lands, you can try another drop and see what happens.
3. **One drop, a board full of possibilities.** The game uses physics to work out how the ball falls, hits the obstacles and reaches the bottom.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Drop a ball. Follow every bounce.

You drop a ball into the board and watch where it goes. Scatter is a browser-game experiment built around the fun of following each bounce.

**Primary CTA:** See the game flow. Jumps to the on-page walkthrough; does not imply public product access.

**The fun is watching what happens next:** Send a ball into the board and follow its path through the obstacles. Once it lands, you can try another drop and see what happens.

**How it works:** The game uses physics to work out how the ball falls, hits the obstacles and reaches the bottom. The existing project steps are displayed as the short workflow.

**What you can inspect:** Scatter is a browser-game project I’m exploring. There isn’t a playable build linked on this page yet.

**Before you try it:** It’s a game experiment. This page doesn’t offer prizes or payouts.

**Closing CTA:** See the game flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record one uninterrupted ball drop in the actual build, from input to landing, with its real feedback. Show the board rather than a fabricated game screenshot.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## laundirii

### A. Positioning

- User and situation: For people exploring coordination in a laundry service.
- Central promise: Follow a laundry order across three roles.
- Concrete experience: A customer starts a request, then the courier and shop take part in getting it through. We wanted each person’s part to fit into the same service flow.
- Payoff: Everyone’s part in the service belongs in the design.
- Reason to believe: LaunDiri is an Android project we built as a team to explore laundry-service coordination. The page shows the idea behind that work.
- Main objection: This is a team project, rather than a laundry service you can book here. We aren’t offering delivery times or service coverage through this page.

### B. Three hero directions

1. **Follow a laundry order across three roles.** A laundry order passes through a few people. In LaunDiri, we brought the customer, courier and shop into one Android project to explore how those handoffs could work.
2. **One laundry request, more than one person.** A customer starts a request, then the courier and shop take part in getting it through. We wanted each person’s part to fit into the same service flow.
3. **Designing the handoffs behind laundry day.** The app connects the customer’s request with the parts of the order handled by the courier and the shop.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Follow a laundry order across three roles.

A laundry order passes through a few people. In LaunDiri, we brought the customer, courier and shop into one Android project to explore how those handoffs could work.

**Primary CTA:** See the service flow. Jumps to the on-page walkthrough; does not imply public product access.

**Think about everyone handling the order:** A customer starts a request, then the courier and shop take part in getting it through. We wanted each person’s part to fit into the same service flow.

**How it works:** The app connects the customer’s request with the parts of the order handled by the courier and the shop. The existing project steps are displayed as the short workflow.

**What you can inspect:** LaunDiri is an Android project we built as a team to explore laundry-service coordination. The page shows the idea behind that work.

**Before you try it:** This is a team project, rather than a laundry service you can book here. We aren’t offering delivery times or service coverage through this page.

**Closing CTA:** See the service flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Capture the same test order from the customer, courier and shop views. Show only handoffs supported by the actual app.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## techno-dynamic

### A. Positioning

- User and situation: For learners exploring technopreneurship course material.
- Central promise: Explore course material through the questions it raises.
- Concrete experience: Open the course material, look through the generated content and follow relevant suggestions when you want to understand more.
- Payoff: There’s another way into the subject when the first explanation leaves you wanting more.
- Reason to believe: We explored generated course content and question-based suggestions in this project. We haven’t established that it improves learning outcomes.
- Main objection: Generated explanations still need checking. They can support your learning, but they shouldn’t replace reviewing the material carefully.

### B. Three hero directions

1. **Explore course material through the questions it raises.** Sometimes a lesson leaves you with another question. Techno Dynamic is a team project exploring how course material and AI-assisted content can help you keep learning about technopreneurship.
2. **A course page with somewhere to take your questions.** Open the course material, look through the generated content and follow relevant suggestions when you want to understand more.
3. **Bring technopreneurship material and questions together.** The platform brings course material together with AI-assisted content and suggestions based on frequently asked questions.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Explore course material through the questions it raises.

Sometimes a lesson leaves you with another question. Techno Dynamic is a team project exploring how course material and AI-assisted content can help you keep learning about technopreneurship.

**Primary CTA:** See the learning flow. Jumps to the on-page walkthrough; does not imply public product access.

**Keep exploring the question:** Open the course material, look through the generated content and follow relevant suggestions when you want to understand more.

**How it works:** The platform brings course material together with AI-assisted content and suggestions based on frequently asked questions. The existing project steps are displayed as the short workflow.

**What you can inspect:** We explored generated course content and question-based suggestions in this project. We haven’t established that it improves learning outcomes.

**Before you try it:** Generated explanations still need checking. They can support your learning, but they shouldn’t replace reviewing the material carefully.

**Closing CTA:** See the learning flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record a real course section with its associated FAQ suggestion and resulting content. Use a verified lesson and retain any review notices.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## rad-ai

### A. Positioning

- User and situation: For people studying image-classification interfaces.
- Central promise: Inspect an ultrasound classifier’s response to an image.
- Concrete experience: Give the classifier a suitable research image, then inspect the response. The output is an experimental result you can examine.
- Payoff: You can follow the experiment from an image to its output.
- Reason to believe: This project explores ultrasound image classification. I haven’t supplied clinical validation or accuracy figures on this page.
- Main objection: Rad AI is a research prototype, not a validated medical device. It must not be used to diagnose someone or make clinical decisions.

### B. Three hero directions

1. **Inspect an ultrasound classifier’s response to an image.** Rad AI lets you look at what an image-classification model returns for an ultrasound research image. I built it as a research interface, not a tool for diagnosis.
2. **From an ultrasound image to an experimental prediction.** Give the classifier a suitable research image, then inspect the response. The output is an experimental result you can examine.
3. **Put a classification experiment where it can be inspected.** The interface sends the image through the classification model and shows the result it returns.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Inspect an ultrasound classifier’s response to an image.

Rad AI lets you look at what an image-classification model returns for an ultrasound research image. I built it as a research interface, not a tool for diagnosis.

**Primary CTA:** See the research flow. Jumps to the on-page walkthrough; does not imply public product access.

**See what the model returns:** Give the classifier a suitable research image, then inspect the response. The output is an experimental result you can examine.

**How it works:** The interface sends the image through the classification model and shows the result it returns. The existing project steps are displayed as the short workflow.

**What you can inspect:** This project explores ultrasound image classification. I haven’t supplied clinical validation or accuracy figures on this page.

**Before you try it:** Rad AI is a research prototype, not a validated medical device. It must not be used to diagnose someone or make clinical decisions.

**Closing CTA:** See the research flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Use an authorized non-identifying research image and capture its actual model output. Keep the research-only notice visible. Do not invent confidence values.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## jungle-guardians

### A. Positioning

- User and situation: For learners exploring computer vision with animal images.
- Central promise: Give an animal classifier a picture to work with.
- Concrete experience: Choose an animal image and look at the category the model returns. You can compare its answer with the picture and think about where it got things right or wrong.
- Payoff: An animal picture gives you a familiar starting point for understanding a model’s response.
- Reason to believe: Jungle Guardians is an interactive learning project about animal-image classification. I haven’t published an accuracy benchmark here.
- Main objection: The prediction can be wrong. The page doesn’t establish which species the model can reliably identify.

### B. Three hero directions

1. **Give an animal classifier a picture to work with.** Give Jungle Guardians an animal image and see what category the model predicts. I built it as a way to explore image classification through something familiar.
2. **See what a model makes of an animal photo.** Choose an animal image and look at the category the model returns. You can compare its answer with the picture and think about where it got things right or wrong.
3. **Explore animal classification one image at a time.** The interface passes your image to a classifier, then shows the category it predicts.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Give an animal classifier a picture to work with.

Give Jungle Guardians an animal image and see what category the model predicts. I built it as a way to explore image classification through something familiar.

**Primary CTA:** See the classification flow. Jumps to the on-page walkthrough; does not imply public product access.

**Compare the picture with the prediction:** Choose an animal image and look at the category the model returns. You can compare its answer with the picture and think about where it got things right or wrong.

**How it works:** The interface passes your image to a classifier, then shows the category it predicts. The existing project steps are displayed as the short workflow.

**What you can inspect:** Jungle Guardians is an interactive learning project about animal-image classification. I haven’t published an accuracy benchmark here.

**Before you try it:** The prediction can be wrong. The page doesn’t establish which species the model can reliably identify.

**Closing CTA:** See the classification flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record a permitted animal image and the actual returned category. Include a real failure case if available, without inventing predictions.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## contact-manager

### A. Positioning

- User and situation: For people maintaining a collection of contact records.
- Central promise: Keep contact details ready to return to.
- Concrete experience: Look through your contacts, maintain the stored information and return to a record when you need the details again.
- Payoff: Your contact records have a place you can return to.
- Reason to believe: This is a contact-management application project built with Angular and Supabase. I haven’t published a security or scale assessment here.
- Main objection: The project description alone isn’t enough to judge whether it’s suitable for sensitive customer information.

### B. Three hero directions

1. **Keep contact details ready to return to.** Sometimes you just need to find someone’s details and keep them up to date. Contact Manager is a focused project for working with those records.
2. **Return to the contact record you need.** Look through your contacts, maintain the stored information and return to a record when you need the details again.
3. **Give contact records a focused workspace.** I used Angular for the interface and Supabase for the data side of the contact-management project.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Keep contact details ready to return to.

Sometimes you just need to find someone’s details and keep them up to date. Contact Manager is a focused project for working with those records.

**Primary CTA:** See the contact workflow. Jumps to the on-page walkthrough; does not imply public product access.

**Come back to the details you need:** Look through your contacts, maintain the stored information and return to a record when you need the details again.

**How it works:** I used Angular for the interface and Supabase for the data side of the contact-management project. The existing project steps are displayed as the short workflow.

**What you can inspect:** This is a contact-management application project built with Angular and Supabase. I haven’t published a security or scale assessment here.

**Before you try it:** The project description alone isn’t enough to judge whether it’s suitable for sensitive customer information.

**Closing CTA:** See the contact workflow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Use fictional contact details in an actual build. Show browsing a record and a supported edit, then confirm the saved value before presenting that capability.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

