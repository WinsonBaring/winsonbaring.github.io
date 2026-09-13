import positioning from "./positioning.json";
export type Project = {
  slug: keyof typeof positioning;
  name: string;
  category: string;
  headline: string;
  summary: string;
  why: string;
  steps: string[];
  result: string;
  tags: string[];
  image?: string;
  url?: string;
  source?: string;
  note?: string;
};
const projectFacts: Omit<Project, "headline" | "summary">[] = [
  {
    slug: "bendme",
    name: "BendMe",
    category: "Everyday delight",
    why: "I saw Bendy making the rounds on X and wanted to try building the lid effect myself. BendMe is my own take, shared for free so other people can try it and explore the code.",
    steps: [
      "Install BendMe and allow Screen Recording for the live effect.",
      "Start the effect, choose a style and gently lower your MacBook lid.",
      "Pause from Appearance or the menu bar whenever you need your normal desktop.",
    ],
    result:
      "A free, open-source Mac app with a signed, Apple-notarized direct download. Screen frames stay on your Mac.",
    tags: ["macOS", "Swift + Metal", "Open source"],
    image: "bendme-fold.png",
    url: "https://winsonbaring.github.io/bendme/",
    source: "https://github.com/WinsonBaring/bendme",
    note: "Inspired by Bendy; independent and unaffiliated. Requires macOS 14+, Apple silicon and a compatible lid sensor for live tracking. Not a Mac App Store release.",
  },
  {
    slug: "resume-ai",
    name: "Resume AI",
    category: "Less busywork",
    why: "I wanted to help people explain the work they’ve already done. Resume AI starts there, then helps organize that experience for the job they want to apply for.",
    steps: [
      "Start with the experience in your notes and existing documents.",
      "Let AI-assisted writing help you organize your work and skills.",
      "Read through the draft and make it fit the job before you apply.",
    ],
    result:
      "A resume-building workflow focused on making unstructured experience easier to work with. The person applying stays responsible for checking every claim.",
    tags: ["Career tools", "AI-assisted writing", "Web application"],
    note: "Resume AI is a product project, not my personal CV. Product availability and features can change.",
  },
  {
    slug: "yabs",
    name: "YABS Visualizer",
    category: "Clearer decisions",
    why: "I built the visualizer to make YABS output easier to work through. It gives the measurements a visual presentation when comparing servers.",
    steps: [
      "Start with YABS benchmark output.",
      "Look through the measurements in the visualizer.",
      "Think about how those results relate to the work your server will do.",
    ],
    result:
      "A visual layer for investigating server performance. Benchmark results describe specific test conditions, not a guarantee for every workload.",
    tags: ["Infrastructure", "Data visualization"],
    url: "https://benchmark.winson.codes",
    source: "https://github.com/WinsonBaring/yabs-server-benchmarks",
  },
  {
    slug: "arsenal",
    name: "Arsenal",
    category: "Less busywork",
    why: "I built Arsenal around the idea that development prompts can be reusable instructions. Keeping those instructions with their project context makes them easier to return to.",
    steps: [
      "Keep your prompts with the work they belong to.",
      "Keep reusable instructions and project context together.",
      "Come back to the instructions as your project changes.",
    ],
    result:
      "A project focused on prompt management and repeatable agent-assisted development.",
    tags: ["Developer tools", "Prompt management"],
    url: "https://arsenal.winson.codes",
  },
  {
    slug: "scatter",
    name: "Scatter",
    category: "Everyday delight",
    why: "I wanted to see how much enjoyment I could get out of a simple interaction. With Scatter, I focused on the fall, the bounce and that moment when you see where the ball lands.",
    steps: [
      "Drop a ball into the board.",
      "Watch it bounce through the physical obstacles.",
      "Try again and explore the changing outcomes.",
    ],
    result:
      "A browser game experiment combining physics and tactile interaction.",
    tags: ["Browser game", "Physics", "Interaction design"],
  },
  {
    slug: "laundirii",
    name: "LaunDiri",
    category: "Less busywork",
    why: "We wanted to think through a laundry order from everyone’s side. The customer, courier and shop all have a part in it, so we brought those roles into the same project.",
    steps: [
      "A customer starts a laundry service request.",
      "The courier and shop each handle their part of the order.",
      "Follow how the service moves between those people.",
    ],
    result:
      "A collaborative application project exploring laundry-service coordination.",
    tags: ["Service design", "Android", "Team project"],
  },
  {
    slug: "techno-dynamic",
    name: "Techno Dynamic",
    category: "Learning & research",
    why: "We wanted to connect what a student is reading with the questions they might ask next. That led us to explore generated content and FAQ-based suggestions alongside course material.",
    steps: [
      "Open the course learning material.",
      "Explore generated content and relevant suggestions.",
      "Use what you find to keep exploring the subject.",
    ],
    result:
      "An educational platform project combining a web interface and AI-assisted course content.",
    tags: ["Education", "Web application", "Team project"],
  },
  {
    slug: "rad-ai",
    name: "Rad AI",
    category: "Learning & research",
    why: "I wanted to make the classification experiment easier to inspect. An interface lets you follow what happens when an image goes into the model and a result comes back.",
    steps: [
      "Use a suitable research image as input.",
      "Run the image through the classifier.",
      "Look at what the model returns as an experimental result.",
    ],
    result:
      "A research prototype, not a validated medical device or a tool for diagnosis.",
    tags: ["Machine learning", "Research prototype"],
    note: "For research and demonstration only. Not for clinical decisions.",
  },
  {
    slug: "jungle-guardians",
    name: "Jungle Guardians",
    category: "Learning & research",
    why: "I wanted a familiar way to explore image classification. You can look at an animal picture yourself, then compare it with what the model thinks it sees.",
    steps: [
      "Choose an animal image.",
      "Run it through the classifier.",
      "Look at the prediction and consider where the model could be wrong.",
    ],
    result:
      "An image-classification learning project with an interactive interface.",
    tags: ["Machine learning", "Computer vision"],
  },
  {
    slug: "contact-manager",
    name: "Contact Manager",
    category: "Less busywork",
    why: "I wanted to focus on the everyday work of finding contact details and maintaining them. Contact Manager gave me a focused project to build around that task.",
    steps: [
      "Browse contact records.",
      "Keep the stored details organized.",
      "Come back to the record when you need the details.",
    ],
    result: "A contact-management project built with Angular and Supabase.",
    tags: ["Angular", "Supabase", "Web application"],
  },
];
export const projects: Project[] = projectFacts.map((project) => {
  const message = positioning[project.slug as keyof typeof positioning];
  return { ...project, headline: message.headline, summary: message.summary };
});
export { positioning };
export const socialLinks = [
  {
    name: "GitHub",
    detail: "Source code & experiments",
    url: "https://github.com/WinsonBaring",
  },
  {
    name: "TikTok",
    detail: "Demos & things I am building",
    url: "https://www.tiktok.com/@winsonbaring10",
  },
  {
    name: "LinkedIn",
    detail: "Work & professional updates",
    url: "https://www.linkedin.com/in/winson-baring-a1329b219/",
  },
];
export const platforms = [
  "All",
  "Facebook",
  "Instagram",
  "TikTok",
  "X",
  "Threads",
  "LinkedIn",
] as const;
export type Platform = Exclude<(typeof platforms)[number], "All">;
export type Post = {
  id: string;
  group: string;
  platform: Platform;
  title: string;
  text: string;
  topic: string;
  date?: string;
  url?: string;
  sample: boolean;
  image?: string;
};
// User-authorized examples. Replace with real posts/URLs and set sample:false when available.
export const posts: Post[] = [
  {
    id: "bendme-tiktok",
    group: "bendme",
    platform: "TikTok",
    title: "A trend became a Mac app",
    text: "The story behind BendMe, from seeing Bendy on X to building a free desktop effect.",
    topic: "BendMe",
    sample: true,
    image: "bendme-fold.png",
  },
  {
    id: "bendme-instagram",
    group: "bendme",
    platform: "Instagram",
    title: "A little less flat",
    text: "A quick visual introduction to the lid effect and the app behind it.",
    topic: "BendMe",
    sample: true,
    image: "bendme-fold.png",
  },
  {
    id: "bendme-facebook",
    group: "bendme",
    platform: "Facebook",
    title: "Sharing BendMe for free",
    text: "An introduction to the app, who it is for and where to try it.",
    topic: "BendMe",
    sample: true,
  },
  {
    id: "bendme-x",
    group: "bendme",
    platform: "X",
    title: "Building a take on the lid effect",
    text: "A short build update with room for a demo and the project link.",
    topic: "BendMe",
    sample: true,
  },
  {
    id: "bendme-threads",
    group: "bendme",
    platform: "Threads",
    title: "What I am building",
    text: "A conversational update about experimenting with the desktop effect.",
    topic: "BendMe",
    sample: true,
  },
  {
    id: "resume-linkedin",
    group: "resume-ai",
    platform: "LinkedIn",
    title: "Start with the experience, not the template",
    text: "A space for the reasoning behind Resume AI and its application workflow.",
    topic: "Resume AI",
    sample: true,
  },
  {
    id: "arsenal-x",
    group: "arsenal",
    platform: "X",
    title: "Making prompts reusable",
    text: "A space for notes on organizing prompts and project context.",
    topic: "Arsenal",
    sample: true,
  },
];
export function selectPosts(items: Post[], platform: string, query: string) {
  const q = query.trim().toLowerCase();
  return items.filter(
    (p) =>
      (platform === "All" || p.platform === platform) &&
      `${p.title} ${p.text} ${p.topic}`.toLowerCase().includes(q),
  );
}
export function groupPosts(items: Post[]) {
  return Object.values(
    items.reduce<Record<string, Post[]>>((groups, p) => {
      (groups[p.group] ??= []).push(p);
      return groups;
    }, {}),
  );
}
