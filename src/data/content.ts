export type Project = {
  slug: string;
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
export const projects: Project[] = [
  {
    slug: "bendme",
    name: "BendMe",
    category: "Everyday delight",
    headline: "Make your desktop a little less flat.",
    summary:
      "A small Mac app that turns lowering your lid into a playful desktop effect.",
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
    headline: "Give your experience a clearer story.",
    summary:
      "Turn scattered work experience into a resume you can shape around a role.",
    why: "A general resume can hide the experience that matters for a particular job. I built Resume AI around that problem: start with what someone has actually done, then help them organize it for an application.",
    steps: [
      "Bring your experience together from your existing documents.",
      "Use AI-assisted drafting to organize relevant work and skills.",
      "Review the details and tailor the resume before applying.",
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
    headline: "Compare servers without decoding a terminal.",
    summary: "Give raw VPS benchmark results a readable home.",
    why: "Server specifications do not tell the whole story. I wanted a way to understand YABS benchmark output visually, so comparing machines would not mean repeatedly scanning terminal logs.",
    steps: [
      "Start with YABS benchmark output.",
      "View the measured performance in a visual format.",
      "Compare the results in the context of the workload you need.",
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
    headline: "Keep useful prompts within reach.",
    summary: "A home for prompts and repeatable AI development workflows.",
    why: "As I used AI more in development, prompts became reusable working material. Arsenal explores how to organize that material instead of leaving useful instructions scattered across conversations.",
    steps: [
      "Organize prompts around the work they support.",
      "Keep reusable instructions and project context together.",
      "Return to those workflows as the project evolves.",
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
    headline: "Make a little room for play.",
    summary:
      "A physics-driven arcade experiment built around dropping, bouncing and anticipation.",
    why: "Scatter explores how small interactions can make a simple game satisfying: the way a ball falls, the response to a press, and the moment a result lands.",
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
    headline: "Connect the people behind laundry day.",
    summary: "A laundry-service workflow for customers, couriers and shops.",
    why: "A laundry order moves between several people. This project brings those roles into one workflow so the handoffs are part of the product, rather than an afterthought.",
    steps: [
      "A customer starts a laundry service request.",
      "The courier and shop participate in the order workflow.",
      "The service is coordinated across those roles.",
    ],
    result:
      "A collaborative application project exploring laundry-service coordination.",
    tags: ["Service design", "Android", "Team project"],
  },
  {
    slug: "techno-dynamic",
    name: "Techno Dynamic",
    category: "Learning & research",
    headline: "Help learning material meet the question.",
    summary: "An AI-assisted learning platform for technopreneurship courses.",
    why: "Course material and the questions learners ask belong together. This collaborative project explores content generation and FAQ-based suggestions in a learning workflow.",
    steps: [
      "Open the course learning material.",
      "Explore generated content and relevant suggestions.",
      "Use the material to support further learning.",
    ],
    result:
      "An educational platform project combining a web interface and AI-assisted course content.",
    tags: ["Education", "Web application", "Team project"],
  },
  {
    slug: "rad-ai",
    name: "Rad AI",
    category: "Learning & research",
    headline: "Move a model into an interface.",
    summary:
      "A research prototype for exploring ultrasound image classification.",
    why: "A machine-learning model needs an interface before people can explore its behavior. This project connects an image-classification experiment to a usable inference flow.",
    steps: [
      "Use a suitable research image as input.",
      "Run the classification workflow.",
      "Inspect the model output as an experimental result.",
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
    headline: "Turn curiosity into a classification experiment.",
    summary:
      "An animal-image identification project for exploring machine learning.",
    why: "Image classification becomes easier to understand when you can give a model a picture and inspect its response. This project uses animal imagery to make that interaction tangible.",
    steps: [
      "Choose an animal image.",
      "Run it through the classifier.",
      "Explore the predicted category and the limits of the model.",
    ],
    result:
      "An image-classification learning project with an interactive interface.",
    tags: ["Machine learning", "Computer vision"],
  },
  {
    slug: "contact-manager",
    name: "Contact Manager",
    category: "Less busywork",
    headline: "Keep contacts easier to work with.",
    summary: "A focused application for managing contact records.",
    why: "A contact list is useful only when the information is easy to maintain. This project centers the everyday work of viewing and managing those records.",
    steps: [
      "Browse contact records.",
      "Keep the stored details organized.",
      "Return to the information when it is needed.",
    ],
    result: "A contact-management project built with Angular and Supabase.",
    tags: ["Angular", "Supabase", "Web application"],
  },
];
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
