import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Check,
  Copy,
  Code2,
  Link2,
  Moon,
  Sun,
  Menu,
  X,
  Search,
  Layers,
  Plus,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  projects,
  socialLinks,
  posts,
  platforms,
  selectPosts,
  groupPosts,
  type Project,
  type Post,
} from "@/data/content";
import { BendPreview, ResumePreview } from "@/components/use-case-preview";
import { useTheme } from "@/hooks/use-theme";
import "./App.css";
const asset = (name: string) => `/images/${name}`;
const site = "https://winsonbaring.github.io";
export const routes = [
  "/",
  "/work/",
  "/posts/",
  "/links/",
  ...projects.map((p) => `/work/${p.slug}/`),
];
export function pageMeta(path: string) {
  const p = projects.find((p) => path === `/work/${p.slug}/`);
  return {
    title: p
      ? `${p.name}: ${p.headline} | Winson Baring`
      : path === "/posts/"
        ? "Posts & field notes | Winson Baring"
        : path === "/links/"
          ? "All my links | Winson Baring"
          : path === "/work/"
            ? "Work, with a reason | Winson Baring"
            : "Winson Baring | Ideas made useful",
    description:
      p?.summary ??
      "Projects with a purpose, notes from the process, and things worth sharing. By Winson Baring.",
  };
}
function External({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  return project.image && !failed ? (
    <img
      src={asset(project.image)}
      alt={
        project.slug === "bendme"
          ? "BendMe rendered fold effect using built-in landscape artwork"
          : `${project.name} project visual`
      }
      loading="lazy"
      onError={() => setFailed(true)}
    />
  ) : (
    <div className="project-type" aria-hidden="true">
      <span>{project.name}</span>
      <ArrowUpRight size={40} />
    </div>
  );
}
function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const { dark, toggle: changeTheme } = useTheme();
  return (
    <header className="site-header wrap">
      <a href="/" className="wordmark" aria-label="Winson Baring home">
        w<span className="brand-dot">.</span>
      </a>
      <nav
        className={open ? "nav open" : "nav"}
        aria-label="Main navigation"
        id="main-nav"
      >
        {[
          ["/work/", "Work"],
          ["/posts/", "Posts"],
          ["/links/", "Links"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            aria-current={path.startsWith(href) ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <span className="header-name">Winson Baring</span>
        <Button
          variant="ghost"
          size="icon"
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          onClick={changeTheme}
        >
          {dark ? <Sun /> : <Moon />}
        </Button>
        <Button
          className="menu-button"
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer wrap">
      <div>
        <a href="/" className="footer-name">
          Winson Baring<span>.</span>
        </a>
        <p>Building things. Sharing the process.</p>
      </div>
      <div className="footer-links">
        <a href="/links/">
          All my links <ArrowUpRight size={16} />
        </a>
        <a href="https://github.com/WinsonBaring/winsonbaring.github.io">
          Site source <Code2 size={16} />
        </a>
        <span>Made in the Philippines</span>
      </div>
    </footer>
  );
}
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      className={`project-card project-${project.slug}`}
      href={`/work/${project.slug}/`}
    >
      <div className="project-media">
        <ProjectImage project={project} />
        <span className="image-arrow">
          <ArrowUpRight size={21} />
        </span>
      </div>
      <div className="project-meta">
        <span>{project.name}</span>
        <span>
          0{index + 1} / {project.category}
        </span>
      </div>
      <h3>{project.headline}</h3>
      <p>{project.summary}</p>
    </a>
  );
}
function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Software builder · Philippines
          </p>
          <h1>
            Ideas made
            <br />
            <span>useful.</span>
          </h1>
          <p className="hero-description">
            I’m Winson. I build apps around everyday friction, small
            curiosities, and things worth trying.
          </p>
          <a
            className={buttonVariants({ size: "lg" }) + " hero-cta"}
            href="/work/"
          >
            Explore the work <ArrowRight size={18} />
          </a>
        </div>
        <div className="hero-visual">
          <img
            className="hero-photo"
            src={asset("winson-portrait.jpg")}
            alt="Winson Baring"
            width="460"
            height="460"
            fetchPriority="high"
          />
          <div className="photo-caption">
            <span>
              Hi, I’m Winson <ArrowUpRight size={16} />
            </span>
          </div>
          <a className="floating-project" href="/work/bendme/">
            <img src={asset("bendme-logo.png")} width="42" height="42" alt="" />
            <div>
              <small>Latest experiment</small>
              <strong>BendMe</strong>
            </div>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="selected wrap section">
        <div className="section-heading">
          <h2>A reason to build.</h2>
          <p>
            Start with what it helps someone do. Then look at how it came
            together.
          </p>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <a className="text-link" href="/work/">
          Explore the work <ArrowRight size={17} />
        </a>
      </section>
      <section className="process wrap section">
        <div className="process-title">
          <span className="small-number">01 / A little context</span>
          <h2>The why comes first.</h2>
        </div>
        <div className="process-copy">
          <p>
            Sometimes it starts with an annoying task. Sometimes it’s just,
            “Could I build that?”
          </p>
          <p>
            I’m a software builder from the Philippines. This is where I keep
            the things I make, the problems behind them, and what I’m learning
            along the way.
          </p>
          <a className="text-link" href="/posts/">
            Read the posts <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="journal-callout wrap">
        <div>
          <Layers size={25} />
          <h2>
            Different platforms.
            <br />
            One place to catch up.
          </h2>
        </div>
        <a className="circle-link" href="/posts/" aria-label="Read the posts">
          <ArrowUpRight size={28} />
        </a>
      </section>
    </>
  );
}
function Work() {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const visible = projects.filter(
    (p) => category === "All" || p.category === category,
  );
  return (
    <div className="wrap page">
      <div className="page-intro">
        <p className="eyebrow">The project collection</p>
        <h1>
          Work, with
          <br />
          <span>a reason.</span>
        </h1>
        <p>
          Useful tools, playful experiments, and the problems that started them.
        </p>
      </div>
      <div className="filter-row" aria-label="Filter projects by use case">
        {categories.map((c) => (
          <Button
            key={c}
            variant={category === c ? "default" : "outline"}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
          >
            {c}
          </Button>
        ))}
      </div>
      <p className="result-count" role="status">
        {visible.length} projects
      </p>
      <div className="work-grid">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />
        ))}
      </div>
    </div>
  );
}
function CaseStudy({ project: p }: { project: Project }) {
  return (
    <article className={`wrap case-study project-${p.slug}`}>
      <a className="text-link back" href="/work/">
        <ArrowLeft size={16} /> All work
      </a>
      <div className="case-intro">
        <Badge variant="outline">{p.category}</Badge>
        <h1>{p.headline}</h1>
        <p>{p.summary}</p>
        <div className="case-actions">
          {p.url && (
            <External href={p.url} className={buttonVariants()}>
              Try {p.name}
            </External>
          )}
          {p.source && (
            <External
              href={p.source}
              className={buttonVariants({ variant: "outline" })}
            >
              View source
            </External>
          )}
        </div>
      </div>
      {p.slug === "bendme" ? (
        <BendPreview />
      ) : p.slug === "resume-ai" ? (
        <ResumePreview />
      ) : (
        <div className="case-visual">
          <ProjectImage project={p} />
        </div>
      )}
      <div className="story-layout">
        <aside>
          <strong>{p.name}</strong>
          <div className="tag-list">
            {p.tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </aside>
        <div className="story-body">
          <section>
            <h2>Why I built it</h2>
            <p>{p.why}</p>
          </section>
          <section>
            <h2>The use case</h2>
            <ol>
              {p.steps.map((s, i) => (
                <li key={s}>
                  <span>0{i + 1}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2>What came out of it</h2>
            <p>{p.result}</p>
            {p.note && <p className="case-note">{p.note}</p>}
          </section>
          {p.slug === "bendme" && (
            <section>
              <h2>A quick look</h2>
              <video
                controls
                muted
                playsInline
                preload="none"
                poster={asset("bendme-fold.png")}
                aria-label="Silent excerpt showing the MacBook lid demonstration"
              >
                <source src="/media/bendme-demo.mp4" type="video/mp4" />
              </video>
              <p className="caption">
                A silent excerpt from my demo. Bendy’s website appears in the
                footage as the inspiration.
              </p>
            </section>
          )}
        </div>
      </div>
      <div className="next-project">
        <span>Another reason to build</span>
        <a
          href={`/work/${projects[(projects.indexOf(p) + 1) % projects.length].slug}/`}
        >
          {projects[(projects.indexOf(p) + 1) % projects.length].name}
          <ArrowRight />
        </a>
      </div>
    </article>
  );
}
function PostArchive() {
  const [platform, setPlatform] = useState("All");
  const [query, setQuery] = useState("");
  const [grouped, setGrouped] = useState(true);
  const [selected, setSelected] = useState<Post[] | null>(null);
  const visible = selectPosts(posts, platform, query);
  const groups = grouped ? groupPosts(visible) : visible.map((p) => [p]);
  return (
    <div className="wrap page">
      <div className="page-intro">
        <p className="eyebrow">Notes from the process</p>
        <h1>
          Made. Learned.
          <br />
          <span>Shared.</span>
        </h1>
        <p>
          Demos, ideas and build notes, collected across platforms. Same story,
          kept together.
        </p>
      </div>
      {posts.some((p) => p.sample) && (
        <div className="sample-notice">
          <Badge variant="outline">Archive preview</Badge>
          <p>
            These are sample entries showing how the archive works. Published
            posts and original links will be added here.
          </p>
        </div>
      )}
      <div className="archive-tools">
        <div className="search-field">
          <label className="sr-only" htmlFor="post-search">
            Search posts
          </label>
          <Search size={18} />
          <Input
            id="post-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a topic or project…"
          />
        </div>
        <Button
          variant="outline"
          aria-pressed={grouped}
          onClick={() => setGrouped(!grouped)}
        >
          <Layers size={16} />
          {grouped ? "Grouped by story" : "Individual posts"}
        </Button>
      </div>
      <Tabs value={platform} onValueChange={(v) => setPlatform(String(v))}>
        <TabsList
          className="platform-tabs"
          aria-label="Filter posts by platform"
        >
          {platforms.map((p) => (
            <TabsTrigger value={p} key={p}>
              {p}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={platform}>
          <p className="result-count" role="status">
            {visible.length} {visible.length === 1 ? "entry" : "entries"} ·{" "}
            {groups.length} {groups.length === 1 ? "story" : "stories"}
          </p>
          {groups.length ? (
            <div className="post-grid">
              {groups.map((group) => {
                const p = group[0];
                return (
                  <button
                    className="post-card"
                    key={p.id}
                    onClick={() => setSelected(group)}
                  >
                    {p.image ? (
                      <div className="post-image">
                        <img src={asset(p.image)} alt="" loading="lazy" />
                      </div>
                    ) : (
                      <div className="post-image text-cover">
                        <span>{p.topic}</span>
                        <ArrowUpRight size={30} />
                      </div>
                    )}
                    <div className="post-card-body">
                      <div className="post-platforms">
                        {[...new Set(group.map((p) => p.platform))].map(
                          (name) => (
                            <span key={name}>{name}</span>
                          ),
                        )}
                      </div>
                      <h2>{p.title}</h2>
                      <p>{p.text}</p>
                      <div className="post-bottom">
                        <span>
                          {p.sample ? "Sample" : (p.date ?? "Published")} ·{" "}
                          {group.length > 1
                            ? `${group.length} versions`
                            : "1 version"}
                        </span>
                        <Plus size={18} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={30} />
              <h2>No posts found.</h2>
              <p>Try another topic or choose a different platform.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setPlatform("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="post-dialog">
          <DialogHeader>
            <DialogTitle>{selected?.[0].title}</DialogTitle>
            <DialogDescription>
              {selected?.every((p) => p.sample)
                ? "Sample archive entries. These have not been presented as published posts."
                : "Versions of this story across platforms."}
            </DialogDescription>
          </DialogHeader>
          <div className="post-versions">
            {selected?.map((p) => (
              <section key={p.id}>
                <Badge variant="outline">{p.platform}</Badge>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.url && !p.sample && (
                  <External href={p.url}>View original post</External>
                )}
              </section>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
function Links() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(`${site}/links/`);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <div className="links-page wrap">
      <div className="links-profile">
        <img
          src={asset("winson-portrait.jpg")}
          alt="Winson Baring"
          width="96"
          height="96"
        />
        <Badge variant="outline">Builder · Philippines</Badge>
        <h1>
          Winson Baring<span>.</span>
        </h1>
        <p>
          Apps I’m building.
          <br />
          Things I’m sharing.
          <br />
          Places to find me.
        </p>
        <Button variant="outline" onClick={copy}>
          {copied ? <Check /> : <Copy />}
          {copied ? "Link copied" : "Copy this page"}
        </Button>
        <p role="status" className="copy-status">
          {copyError
            ? "Copy this address: https://winsonbaring.github.io/links/"
            : copied
              ? "Ready to share."
              : ""}
        </p>
      </div>
      <div className="link-collection">
        <section>
          <h2>Try something I made</h2>
          <a
            className="link-tile featured-link"
            href="https://winsonbaring.github.io/bendme/"
          >
            <img src={asset("bendme-logo.png")} alt="" width="46" height="46" />
            <div>
              <strong>BendMe</strong>
              <span>A little less flat. Free for Mac.</span>
            </div>
            <ArrowUpRight />
          </a>
          <a
            className="link-tile"
            href="/work/resume-ai/"
            aria-label="Resume AI: Give your experience a clearer story"
          >
            <span className="link-initial">R</span>
            <div>
              <strong>Resume AI</strong>
              <span>Give your experience a clearer story.</span>
            </div>
            <ArrowRight />
          </a>
          <a className="link-tile" href="/work/">
            <span className="link-initial">
              <Layers />
            </span>
            <div>
              <strong>All the work</strong>
              <span>Find a project by what it helps you do.</span>
            </div>
            <ArrowRight />
          </a>
        </section>
        <section>
          <h2>Elsewhere on the internet</h2>
          {socialLinks.map((l) => (
            <a
              className="social-row"
              href={l.url}
              key={l.name}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <strong>{l.name}</strong>
                <span>{l.detail}</span>
              </div>
              <ArrowUpRight />
              <span className="sr-only">Opens in a new tab</span>
            </a>
          ))}
        </section>
        <a className="archive-link" href="/posts/">
          <Link2 size={18} /> Browse the post archive <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
export default function App({ initialPath }: { initialPath?: string }) {
  const raw = initialPath ?? window.location.pathname;
  const path = raw === "/" ? "/" : raw.replace(/\/$/, "") + "/";
  const project = projects.find((p) => path === `/work/${p.slug}/`);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header path={path} />
      <main id="main">
        {path === "/" ? (
          <Home />
        ) : path === "/work/" ? (
          <Work />
        ) : path === "/posts/" ? (
          <PostArchive />
        ) : path === "/links/" ? (
          <Links />
        ) : project ? (
          <CaseStudy project={project} />
        ) : (
          <div className="wrap page empty-state">
            <h1>That page isn’t here.</h1>
            <a href="/" className={buttonVariants()}>
              Back home
            </a>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
