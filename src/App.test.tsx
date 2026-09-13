import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App, { routes } from "./App";
import { projects, posts, selectPosts, groupPosts } from "./data/content";
describe("Portfolio visitor paths", () => {
  it("shows the reason for BendMe and links to the actual app", () => {
    render(<App initialPath="/work/bendme/" />);
    expect(
      screen.getByRole("heading", { name: "Why I built it" }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /Try BendMe/ })[0],
    ).toHaveAttribute("href", "https://winsonbaring.github.io/bendme/");
    expect(screen.getByText(/Inspired by Bendy/)).toBeInTheDocument();
  });
  it("filters work by use case", async () => {
    const user = userEvent.setup();
    render(<App initialPath="/work/" />);
    await user.click(screen.getByRole("button", { name: "Everyday delight" }));
    expect(screen.getByRole("status")).toHaveTextContent("2 projects");
    expect(
      screen.getByRole("heading", {
        name: "Lower your lid. Watch your desktop fold.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: "You know the work you’ve done. Let’s put it into words.",
      }),
    ).not.toBeInTheDocument();
  });
  it("searches the post archive and recovers from no results", async () => {
    const user = userEvent.setup();
    render(<App initialPath="/posts/" />);
    await user.type(
      screen.getByRole("textbox", { name: "Search posts" }),
      "nonexistent",
    );
    expect(
      screen.getByRole("heading", { name: "No posts found." }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByRole("status")).toHaveTextContent("7 entries");
  });
  it("switches from grouped stories to individual posts", async () => {
    const user = userEvent.setup();
    render(<App initialPath="/posts/" />);
    expect(screen.getByRole("status")).toHaveTextContent("3 stories");
    await user.click(screen.getByRole("button", { name: "Grouped by story" }));
    expect(screen.getByRole("status")).toHaveTextContent("7 stories");
  });
  it("filters platform and opens an accessible post dialog", async () => {
    const user = userEvent.setup();
    render(<App initialPath="/posts/" />);
    await user.click(screen.getByRole("tab", { name: "LinkedIn" }));
    expect(screen.getByRole("status")).toHaveTextContent("1 entry");
    await user.click(
      screen.getByRole("button", { name: /Start with the experience/ }),
    );
    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("heading", {
        name: "Start with the experience, not the template",
        level: 2,
      }),
    ).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("opens the mobile menu and shows links", async () => {
    const user = userEvent.setup();
    render(<App initialPath="/" />);
    const menu = screen.getByRole("button", { name: "Open menu" });
    await user.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).toHaveClass("open");
  });
  it("provides the links hub and project stories", () => {
    render(<App initialPath="/links/" />);
    expect(
      screen.getByRole("link", { name: /Resume AI: You know/ }),
    ).toHaveAttribute("href", "/work/resume-ai/");
    expect(
      screen.getByRole("button", { name: "Copy this page" }),
    ).toBeInTheDocument();
  });
});
describe("Content integrity", () => {
  it("has unique routable projects with meaningful stories", () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    for (const p of projects) {
      expect(routes).toContain(`/work/${p.slug}/`);
      expect(p.why.length).toBeGreaterThan(70);
      expect(p.steps.length).toBeGreaterThan(1);
    }
  });
  it("combines platform and query filters before grouping", () => {
    const matched = selectPosts(posts, "X", "bendme");
    expect(matched).toHaveLength(1);
    expect(groupPosts(matched)).toHaveLength(1);
    expect(selectPosts(posts, "All", "  RESUME  ")).toHaveLength(1);
  });
  it("never invents published links for sample entries", () => {
    for (const p of posts) {
      expect(p.sample).toBe(true);
      expect(p.url).toBeUndefined();
      expect(p.date).toBeUndefined();
    }
  });
});
it("switches the real BendMe artwork preview", async () => {
  const user = userEvent.setup();
  render(<App initialPath="/work/bendme/" />);
  await user.click(screen.getByRole("button", { name: "Open lid" }));
  expect(
    screen.getByAltText("Open-lid view of the same built-in artwork"),
  ).toHaveAttribute("src", "/images/bendme-open.png");
});
it("keeps the other project stories conversational without visual demos", () => {
  for (const p of projects.filter((project) => project.slug !== "bendme")) {
    const { container, unmount } = render(
      <App initialPath={`/work/${p.slug}/`} />,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      p.headline,
    );
    expect(container.querySelectorAll(".conversation-body > p")).toHaveLength(
      3,
    );
    expect(
      container.querySelector(
        ".product-flow, .resume-preview, video, figcaption",
      ),
    ).toBeNull();
    expect(screen.queryByText("What you can inspect")).not.toBeInTheDocument();
    if (p.url)
      expect(container.querySelector(`a[href="${p.url}"]`)).toBeTruthy();
    unmount();
  }
});
it("keeps the research boundary in the conversation", () => {
  render(<App initialPath="/work/rad-ai/" />);
  expect(screen.getByText(/must not be used to diagnose/)).toBeInTheDocument();
});
