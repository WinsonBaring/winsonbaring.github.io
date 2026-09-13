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

- User and situation: For people whose experience goes beyond what fits in a single resume.
- Central promise: Keep the full story of your work. Choose what fits the job.
- Concrete experience: Your notes can include projects, responsibilities and the things you did within each job, without having to make them sound like resume bullets. The goal is to keep that context available, even when it doesn’t belong in the resume you’re writing today.
- Payoff: You don’t have to rely on what you remember or what made it into your last resume.
- Reason to believe: The example shows how details from different parts of someone’s experience could support one application. It’s an illustration of the intended workflow, not output from a live AI request.
- Main objection: The draft should use experience you actually recorded. Review what it selects, check the wording and adjust the emphasis before applying. A relevant resume can explain your fit, but it can’t guarantee an interview.

### B. Three hero directions

1. **Keep the full story of your work. Choose what fits the job.** You can’t fit everything you’ve done into one resume. Resume AI starts with detailed, unstructured notes about your experience, then uses the job description and how you want to present yourself to shape a relevant draft.
2. **Your work experience, ready for a first draft.** Your notes can include projects, responsibilities and the things you did within each job, without having to make them sound like resume bullets. The goal is to keep that context available, even when it doesn’t belong in the resume you’re writing today.
3. **Start your next application with the work you have done.** The idea is for Resume AI to read your experience alongside the job description and select the details that support your application. If a role needs technical and communication skills, relevant work might come from a technical project and a separate customer-support job. You can also explain how you want to position yourself to guide the emphasis.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Keep the full story of your work. Choose what fits the job.

You can’t fit everything you’ve done into one resume. Resume AI starts with detailed, unstructured notes about your experience, then uses the job description and how you want to present yourself to shape a relevant draft.

**Primary CTA:** See the writing example. Jumps to the on-page walkthrough; does not imply public product access.

**Write down the details before you forget them:** Your notes can include projects, responsibilities and the things you did within each job, without having to make them sound like resume bullets. The goal is to keep that context available, even when it doesn’t belong in the resume you’re writing today.

**How it works:** The idea is for Resume AI to read your experience alongside the job description and select the details that support your application. If a role needs technical and communication skills, relevant work might come from a technical project and a separate customer-support job. You can also explain how you want to position yourself to guide the emphasis. The existing project steps are displayed as the short workflow.

**What you can inspect:** The example shows how details from different parts of someone’s experience could support one application. It’s an illustration of the intended workflow, not output from a live AI request.

**Before you try it:** The draft should use experience you actually recorded. Review what it selects, check the wording and adjust the emphasis before applying. A relevant resume can explain your fit, but it can’t guarantee an interview.

**Closing CTA:** See the writing example. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Use existing evidence:** Use the labeled illustration to show detailed notes from a technical project and a customer-support role, followed by a draft for a job asking for both skills. It explains selection across experiences, not verified live generation.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## yabs

### A. Positioning

- User and situation: For developers comparing VPS benchmark results.
- Central promise: YABS Visualizer makes server benchmark results easier to read.
- Concrete experience: You start with results from YABS and look through the measurements in the visualizer. You can then consider how those results relate to the work you need a server to do.
- Payoff: The measurements are easier to work through when you’re comparing servers.
- Reason to believe: The project has a website you can open and a public repository where you can read the code. Each benchmark describes a particular test, so its conditions matter when comparing results.
- Main objection: A benchmark can help you compare machines, but it won’t tell you exactly how your application will run. You still need to consider your own workload.

### B. Three hero directions

1. **YABS Visualizer makes server benchmark results easier to read.** YABS is a tool that measures server performance. This visualizer presents its results in a format you can look through when comparing virtual private servers, or VPSs.
2. **Compare the measurements behind your VPS choice.** You start with results from YABS and look through the measurements in the visualizer. You can then consider how those results relate to the work you need a server to do.
3. **Give YABS output a visual view.** YABS performs the tests, and the visualizer presents the measurements. It gives you another way to read the output without repeatedly scanning terminal logs.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** YABS Visualizer makes server benchmark results easier to read.

YABS is a tool that measures server performance. This visualizer presents its results in a format you can look through when comparing virtual private servers, or VPSs.

**Primary CTA:** Open YABS Visualizer. Opens the existing project URL.

**Use the measurements to compare servers:** You start with results from YABS and look through the measurements in the visualizer. You can then consider how those results relate to the work you need a server to do.

**How it works:** YABS performs the tests, and the visualizer presents the measurements. It gives you another way to read the output without repeatedly scanning terminal logs. The existing project steps are displayed as the short workflow.

**What you can inspect:** The project has a website you can open and a public repository where you can read the code. Each benchmark describes a particular test, so its conditions matter when comparing results.

**Before you try it:** A benchmark can help you compare machines, but it won’t tell you exactly how your application will run. You still need to consider your own workload.

**Closing CTA:** Open YABS Visualizer. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Capture real YABS output beside the matching visualization. Highlight the same measurement in both so visitors can trace the source of a displayed value.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## arsenal

### A. Positioning

- User and situation: For developers who reuse prompts across their work.
- Central promise: Arsenal helps you keep prompts you want to reuse.
- Concrete experience: A prompt makes more sense when you also have the project information it depends on. Arsenal keeps reusable instructions organized around the work they support, so you can adapt them when a similar task comes up.
- Payoff: You have a place to keep instructions that will be useful beyond the current conversation.
- Reason to believe: You can open Arsenal through the project link. It focuses on organizing prompts and the development work they support.
- Main objection: You’ll still need to update the context for each task and review what the AI produces. A saved prompt is a starting point for that work.

### B. Three hero directions

1. **Arsenal helps you keep prompts you want to reuse.** If you use AI while developing software, some instructions are worth keeping for another task. Arsenal organizes those prompts with their project context so you can return to them.
2. **Keep the instructions that worked.** A prompt makes more sense when you also have the project information it depends on. Arsenal keeps reusable instructions organized around the work they support, so you can adapt them when a similar task comes up.
3. **Give recurring development prompts a home.** Arsenal is a prompt-management project for organizing reusable development instructions and project context.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Arsenal helps you keep prompts you want to reuse.

If you use AI while developing software, some instructions are worth keeping for another task. Arsenal organizes those prompts with their project context so you can return to them.

**Primary CTA:** Open Arsenal. Opens the existing project URL.

**Keep the instructions with their context:** A prompt makes more sense when you also have the project information it depends on. Arsenal keeps reusable instructions organized around the work they support, so you can adapt them when a similar task comes up.

**How it works:** Arsenal is a prompt-management project for organizing reusable development instructions and project context. The existing project steps are displayed as the short workflow.

**What you can inspect:** You can open Arsenal through the project link. It focuses on organizing prompts and the development work they support.

**Before you try it:** You’ll still need to update the context for each task and review what the AI produces. A saved prompt is a starting point for that work.

**Closing CTA:** Open Arsenal. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record saving an actual development prompt and finding it for a second task. Confirm the available controls before scripting the recording.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## scatter

### A. Positioning

- User and situation: For people who enjoy short, playful browser experiments.
- Central promise: Scatter is a game about dropping a ball through a physics board.
- Concrete experience: After you drop a ball, its path changes as it hits the obstacles. You follow those bounces until it reaches the bottom, then you can try another drop.
- Payoff: The enjoyment comes from following the ball and waiting to see where it lands.
- Reason to believe: Scatter is a browser-game experiment. There isn’t a playable build linked on this portfolio yet.
- Main objection: This is a game experiment. The portfolio doesn’t offer prizes or payouts.

### B. Three hero directions

1. **Scatter is a game about dropping a ball through a physics board.** You drop a ball into the board, watch it bounce through the obstacles and see where it lands. Scatter explores how that simple interaction can be enjoyable on its own.
2. **See where the next bounce takes you.** After you drop a ball, its path changes as it hits the obstacles. You follow those bounces until it reaches the bottom, then you can try another drop.
3. **One drop, a board full of possibilities.** The game uses a physics simulation to calculate how the ball falls and responds when it hits an obstacle.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Scatter is a game about dropping a ball through a physics board.

You drop a ball into the board, watch it bounce through the obstacles and see where it lands. Scatter explores how that simple interaction can be enjoyable on its own.

**Primary CTA:** See the game flow. Jumps to the on-page walkthrough; does not imply public product access.

**You follow the ball until it lands:** After you drop a ball, its path changes as it hits the obstacles. You follow those bounces until it reaches the bottom, then you can try another drop.

**How it works:** The game uses a physics simulation to calculate how the ball falls and responds when it hits an obstacle. The existing project steps are displayed as the short workflow.

**What you can inspect:** Scatter is a browser-game experiment. There isn’t a playable build linked on this portfolio yet.

**Before you try it:** This is a game experiment. The portfolio doesn’t offer prizes or payouts.

**Closing CTA:** See the game flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record one uninterrupted ball drop in the actual build, from input to landing, with its real feedback. Show the board rather than a fabricated game screenshot.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## laundirii

### A. Positioning

- User and situation: For people exploring coordination in a laundry service.
- Central promise: LaunDiri connects the people handling a laundry order.
- Concrete experience: The customer starts a request, and the courier and shop handle their parts of the service. The project brings those roles into one workflow so the handoffs are part of the design.
- Payoff: The design accounts for the people who handle the order after the customer places it.
- Reason to believe: LaunDiri is a collaborative Android application project focused on laundry coordination.
- Main objection: LaunDiri is presented here as a team project. You can’t book a laundry service through this page, and it doesn’t offer delivery times or service coverage.

### B. Three hero directions

1. **LaunDiri connects the people handling a laundry order.** A customer places a laundry request, but a courier and a shop also have a part in completing it. LaunDiri is an Android team project exploring how those roles can work together in one application.
2. **One laundry request, more than one person.** The customer starts a request, and the courier and shop handle their parts of the service. The project brings those roles into one workflow so the handoffs are part of the design.
3. **Designing the handoffs behind laundry day.** The application connects the customer request with courier and shop participation in the order.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** LaunDiri connects the people handling a laundry order.

A customer places a laundry request, but a courier and a shop also have a part in completing it. LaunDiri is an Android team project exploring how those roles can work together in one application.

**Primary CTA:** See the service flow. Jumps to the on-page walkthrough; does not imply public product access.

**The order needs to work for each person involved:** The customer starts a request, and the courier and shop handle their parts of the service. The project brings those roles into one workflow so the handoffs are part of the design.

**How it works:** The application connects the customer request with courier and shop participation in the order. The existing project steps are displayed as the short workflow.

**What you can inspect:** LaunDiri is a collaborative Android application project focused on laundry coordination.

**Before you try it:** LaunDiri is presented here as a team project. You can’t book a laundry service through this page, and it doesn’t offer delivery times or service coverage.

**Closing CTA:** See the service flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Capture the same test order from the customer, courier and shop views. Show only handoffs supported by the actual app.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## techno-dynamic

### A. Positioning

- User and situation: For learners exploring technopreneurship course material.
- Central promise: Techno Dynamic brings course material and learning questions together.
- Concrete experience: You start with the course material and explore generated content and related suggestions. Those suggestions give you another way to approach a topic you want to understand.
- Payoff: You can explore related explanations when you want more context for a lesson.
- Reason to believe: The project explores generated content and question-based suggestions for learning. There isn’t a study here showing that it improves learning outcomes.
- Main objection: Generated explanations need checking against reliable course material. They can support further exploration, but their accuracy shouldn’t be assumed.

### B. Three hero directions

1. **Techno Dynamic brings course material and learning questions together.** Techno Dynamic is a team project for technopreneurship courses. It combines course material with AI-assisted content and suggestions based on frequently asked questions, giving learners more ways to explore a subject.
2. **A course page with somewhere to take your questions.** You start with the course material and explore generated content and related suggestions. Those suggestions give you another way to approach a topic you want to understand.
3. **Bring technopreneurship material and questions together.** The platform combines course material, AI-assisted content generation and suggestions based on frequently asked questions.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Techno Dynamic brings course material and learning questions together.

Techno Dynamic is a team project for technopreneurship courses. It combines course material with AI-assisted content and suggestions based on frequently asked questions, giving learners more ways to explore a subject.

**Primary CTA:** See the learning flow. Jumps to the on-page walkthrough; does not imply public product access.

**Questions can help you explore the lesson further:** You start with the course material and explore generated content and related suggestions. Those suggestions give you another way to approach a topic you want to understand.

**How it works:** The platform combines course material, AI-assisted content generation and suggestions based on frequently asked questions. The existing project steps are displayed as the short workflow.

**What you can inspect:** The project explores generated content and question-based suggestions for learning. There isn’t a study here showing that it improves learning outcomes.

**Before you try it:** Generated explanations need checking against reliable course material. They can support further exploration, but their accuracy shouldn’t be assumed.

**Closing CTA:** See the learning flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record a real course section with its associated FAQ suggestion and resulting content. Use a verified lesson and retain any review notices.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## rad-ai

### A. Positioning

- User and situation: For people studying image-classification interfaces.
- Central promise: Rad AI shows the output of an ultrasound classification experiment.
- Concrete experience: You provide a suitable research image, run it through the classifier and inspect the result it returns. The interface makes that experimental process easier to follow.
- Payoff: You can inspect the model’s response to an image through an interface.
- Reason to believe: Rad AI is documented as an ultrasound-classification prototype. No clinical validation or accuracy figures are supplied here.
- Main objection: The prototype hasn’t been validated as a medical device. It must not be used to diagnose someone or make clinical decisions.

### B. Three hero directions

1. **Rad AI shows the output of an ultrasound classification experiment.** Rad AI connects an ultrasound research image to a classification model and displays the result. It’s a research prototype for inspecting model output, and it must not be used for diagnosis.
2. **From an ultrasound image to an experimental prediction.** You provide a suitable research image, run it through the classifier and inspect the result it returns. The interface makes that experimental process easier to follow.
3. **Put a classification experiment where it can be inspected.** The interface passes the image to a machine-learning model and displays its classification output.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Rad AI shows the output of an ultrasound classification experiment.

Rad AI connects an ultrasound research image to a classification model and displays the result. It’s a research prototype for inspecting model output, and it must not be used for diagnosis.

**Primary CTA:** See the research flow. Jumps to the on-page walkthrough; does not imply public product access.

**Follow the image through the experiment:** You provide a suitable research image, run it through the classifier and inspect the result it returns. The interface makes that experimental process easier to follow.

**How it works:** The interface passes the image to a machine-learning model and displays its classification output. The existing project steps are displayed as the short workflow.

**What you can inspect:** Rad AI is documented as an ultrasound-classification prototype. No clinical validation or accuracy figures are supplied here.

**Before you try it:** The prototype hasn’t been validated as a medical device. It must not be used to diagnose someone or make clinical decisions.

**Closing CTA:** See the research flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Use an authorized non-identifying research image and capture its actual model output. Keep the research-only notice visible. Do not invent confidence values.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## jungle-guardians

### A. Positioning

- User and situation: For learners exploring computer vision with animal images.
- Central promise: Jungle Guardians lets you explore how a model classifies animal images.
- Concrete experience: After the model returns a category, you can compare it with the animal in the picture. That gives you a way to think about both the prediction and the mistakes the model might make.
- Payoff: You can explore a model’s behavior using images you can also interpret yourself.
- Reason to believe: Jungle Guardians is an interactive image-classification learning project. No accuracy benchmark is supplied here.
- Main objection: A predicted category can be wrong. This page doesn’t establish which species the model can identify reliably.

### B. Three hero directions

1. **Jungle Guardians lets you explore how a model classifies animal images.** You choose an animal image, run it through a classifier and look at the category it predicts. Jungle Guardians uses that process to make image classification easier to explore.
2. **See what a model makes of an animal photo.** After the model returns a category, you can compare it with the animal in the picture. That gives you a way to think about both the prediction and the mistakes the model might make.
3. **Explore animal classification one image at a time.** The interface sends an animal image to a classification model and shows its predicted category.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Jungle Guardians lets you explore how a model classifies animal images.

You choose an animal image, run it through a classifier and look at the category it predicts. Jungle Guardians uses that process to make image classification easier to explore.

**Primary CTA:** See the classification flow. Jumps to the on-page walkthrough; does not imply public product access.

**Compare the predicted category with the image:** After the model returns a category, you can compare it with the animal in the picture. That gives you a way to think about both the prediction and the mistakes the model might make.

**How it works:** The interface sends an animal image to a classification model and shows its predicted category. The existing project steps are displayed as the short workflow.

**What you can inspect:** Jungle Guardians is an interactive image-classification learning project. No accuracy benchmark is supplied here.

**Before you try it:** A predicted category can be wrong. This page doesn’t establish which species the model can identify reliably.

**Closing CTA:** See the classification flow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Record a permitted animal image and the actual returned category. Include a real failure case if available, without inventing predictions.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

## contact-manager

### A. Positioning

- User and situation: For people maintaining a collection of contact records.
- Central promise: Contact Manager gives you a place to manage contact records.
- Concrete experience: You can browse the stored records, work with their information and return to a contact when you need the details again.
- Payoff: The contact information is organized in a dedicated application.
- Reason to believe: Contact Manager is documented as an Angular and Supabase application project. No security or scale assessment is supplied here.
- Main objection: The project description doesn’t establish whether the application is suitable for sensitive customer information. That would need a separate assessment.

### B. Three hero directions

1. **Contact Manager gives you a place to manage contact records.** Contact Manager is an application project for browsing contact records and maintaining the details stored in them. It focuses on the information you need to return to when you want to reach someone.
2. **Return to the contact record you need.** You can browse the stored records, work with their information and return to a contact when you need the details again.
3. **Give contact records a focused workspace.** The project uses Angular for the interface and Supabase for the data side of the application.

Recommended: direction 1. It gives the reader the clearest observable action and result at the scope supported by the project information. The other directions emphasize the recurring use situation and the product mechanism.

### C. Page copy

**Hero:** Contact Manager gives you a place to manage contact records.

Contact Manager is an application project for browsing contact records and maintaining the details stored in them. It focuses on the information you need to return to when you want to reach someone.

**Primary CTA:** See the contact workflow. Jumps to the on-page walkthrough; does not imply public product access.

**Find a contact and maintain their details:** You can browse the stored records, work with their information and return to a contact when you need the details again.

**How it works:** The project uses Angular for the interface and Supabase for the data side of the application. The existing project steps are displayed as the short workflow.

**What you can inspect:** Contact Manager is documented as an Angular and Supabase application project. No security or scale assessment is supplied here.

**Before you try it:** The project description doesn’t establish whether the application is suitable for sensitive customer information. That would need a separate assessment.

**Closing CTA:** See the contact workflow. The original project motivation follows the experience and evidence, with team attribution retained where relevant.

### D. Demonstration direction

**Needs to be created:** Use fictional contact details in an actual build. Show browsing a record and a supported edit, then confirm the saved value before presenting that capability.

### E. Quality check

The promise is specific to the project's described input or interaction. No user counts, success figures, testimonials or unverified availability are introduced. Research and team status remain visible. Planned evidence is not rendered as a working demo.

