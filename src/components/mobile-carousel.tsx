import { Children, useEffect, useRef, useState, type ReactNode } from "react";


/** Progressively enhances the Links groups into a carousel at every screen size. */
export function MobileCarousel({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const gesture = useRef<{ x: number; y: number; moved: boolean; startedAt: number } | null>(null);
  const suppressClick = useRef(false);
  const move = (step: number) => setIndex(i => (i + step + slides.length) % slides.length);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setEnabled(true); setReduced(motion.matches); };
    const visibility = () => setVisible(!document.hidden);
    update(); visibility();
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    const release = () => {
      if (gesture.current && Date.now() - gesture.current.startedAt > 400) suppressClick.current = true;
      setHeld(false); gesture.current = null;
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    window.addEventListener("blur", release);
    return () => {
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("blur", release);
    };
  }, []);
  const playing = enabled && !reduced && !paused && !held && !hovered && visible;
  useEffect(() => {
    if (!playing || slides.length < 2) return;
    const timer = window.setTimeout(() => setIndex(i => (i + 1) % slides.length), 2500);
    return () => window.clearTimeout(timer);
  }, [playing, index, slides.length]);

  return <div className="mobile-carousel" role={enabled ? "region" : undefined}
    aria-roledescription={enabled ? "carousel" : undefined} aria-label={enabled ? "Applications, work experience and automation services" : undefined}>
    {enabled && <div className="carousel-indicators" aria-hidden="true">
      {slides.map((_, i) => <span key={i} className={i === index ? "active" : ""} />)}
    </div>}
    {enabled && <button className="carousel-accessible-pause" type="button" onClick={() => setPaused(p => !p)} disabled={reduced}>
      {paused ? "Play slideshow" : "Pause slideshow"}
    </button>}
    <div onDragStart={e => e.preventDefault()} className="carousel-viewport" tabIndex={enabled ? 0 : undefined}
      aria-label={enabled ? "Swipe to change section, or use left and right arrow keys" : undefined}
      onKeyDown={e => {
        if (enabled && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
          e.preventDefault(); setPaused(true); move(e.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onFocusCapture={() => { if (enabled && !held) setPaused(true); }}
      onPointerEnter={e => { if (e.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={e => {
        if (!enabled || e.button > 0) return;
        setHeld(true); suppressClick.current = false;
        gesture.current = { x: e.clientX, y: e.clientY, moved: false, startedAt: Date.now() };
      }}
      onPointerMove={e => {
        const start = gesture.current;
        if (!start || start.moved) return;
        const dx = e.clientX - start.x, dy = e.clientY - start.y;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          start.moved = true; suppressClick.current = true; move(dx < 0 ? 1 : -1);
        }
      }}
      onClickCapture={e => { if (suppressClick.current) { e.preventDefault(); e.stopPropagation(); suppressClick.current = false; } }}>
      <div className="carousel-track" style={enabled ? { transform: `translateX(-${index * 100}%)` } : undefined}>
        {slides.map((slide, i) => <div className="carousel-slide" key={i}
          role={enabled ? "group" : undefined} aria-roledescription={enabled ? "slide" : undefined}
          aria-label={enabled ? `${i + 1} of ${slides.length}` : undefined}
          aria-hidden={enabled && i !== index ? true : undefined} inert={enabled && i !== index ? true : undefined}>
          {slide}
        </div>)}
      </div>
    </div>
  </div>;
}
