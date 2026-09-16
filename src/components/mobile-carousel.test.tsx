import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { MobileCarousel } from "./mobile-carousel";
function mount(mobile = true, reduced = false) {
  vi.useFakeTimers();
  vi.spyOn(window, "matchMedia").mockImplementation(q => ({ matches: q.includes("639") ? mobile : reduced, addEventListener() {}, removeEventListener() {} }) as unknown as MediaQueryList);
  return render(<MobileCarousel><a href="#one">One</a><a href="#two">Two</a></MobileCarousel>);
}
afterEach(() => { vi.useRealTimers(); vi.restoreAllMocks(); });
it("advances every 2.5 seconds, pauses on hold, resumes on release and wraps", () => {
  const { container } = mount();
  act(() => vi.advanceTimersByTime(2500));
  expect(screen.getByRole("link", { name: "Two" })).toBeVisible();
  fireEvent.pointerDown(container.querySelector('.carousel-viewport')!);
  act(() => vi.advanceTimersByTime(10000));
  expect(screen.getByRole("link", { name: "Two" })).toBeVisible();
  fireEvent.pointerUp(window);
  act(() => vi.advanceTimersByTime(2500));
  expect(screen.getByRole("link", { name: "One" })).toBeVisible();
});
it("keeps a keyboard-focused slide still until play is requested", () => {
  mount();
  fireEvent.focus(screen.getByRole("link", { name: "One" }));
  act(() => vi.advanceTimersByTime(5000));
  expect(screen.getByRole("link", { name: "One" })).toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "Play slideshow" }));
  act(() => vi.advanceTimersByTime(2500));
  expect(screen.getByRole("link", { name: "Two" })).toBeVisible();
});
it("does not rotate with reduced motion and supports manual next", () => {
  mount(true, true);
  act(() => vi.advanceTimersByTime(10000));
  expect(screen.getByRole("link", { name: "One" })).toBeVisible();
  fireEvent.keyDown(screen.getByLabelText(/Swipe to change section/), { key: "ArrowRight" });
  expect(screen.getByRole("link", { name: "Two" })).toBeVisible();
});
it("shows every link on desktop without carousel controls", () => {
  mount(false);
  expect(screen.getAllByRole("link")).toHaveLength(2);
  expect(screen.queryByRole("button", { name: "Next slide" })).toBeNull();
});
it("swipes horizontally without following the link, and releases a cancelled hold", () => {
  const { container } = mount();
  const viewport = container.querySelector('.carousel-viewport')!;
  const pointer = (type: string, x: number) => {
    const event = new Event(type, { bubbles: true });
    Object.defineProperties(event, { clientX: { value: x }, clientY: { value: 20 } });
    fireEvent(viewport, event);
  };
  pointer('pointerdown', 200);
  pointer('pointermove', 100);
  expect(screen.getByRole('link', { name: 'Two' })).toBeVisible();
  const click = new MouseEvent('click', { bubbles: true, cancelable: true });
  fireEvent(screen.getByRole('link', { name: 'Two' }), click);
  expect(click.defaultPrevented).toBe(true);
  fireEvent.pointerCancel(window);
  act(() => vi.advanceTimersByTime(2500));
  expect(screen.getByRole('link', { name: 'One' })).toBeVisible();
});
