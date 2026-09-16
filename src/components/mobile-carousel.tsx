import { Children, useEffect, useRef, useState, type ReactNode } from "react";


/** Keeps the desktop list intact and progressively enhances narrow screens. */
export function MobileCarousel({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const [mobile, setMobile] = useState(false);
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
    const narrow = window.matchMedia("(max-width: 639px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setMobile(narrow.matches); setReduced(motion.matches); };
    const visibility = () => setVisible(!document.hidden);
    update(); visibility();
    narrow.addEventListener("change", update);
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
      narrow.removeEventListener("change", update);
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("blur", release);
    };
  }, []);
  const playing = mobile && !reduced && !paused && !held && !hovered && visible;
  useEffect(() => {
    if (!playing || slides.length < 2) return;
    const timer = window.setTimeout(() => setIndex(i => (i + 1) % slides.length), 2500);
    return () => window.clearTimeout(timer);
  }, [playing, index, slides.length]);

  return <div className="mobile-carousel" role={mobile ? "region" : undefined}
    aria-roledescription={mobile ? "carousel" : undefined} aria-label={mobile ? "Applications, work experience and automation services" : undefined}>
    {mobile && <div className="carousel-indicators" aria-hidden="true">
      {slides.map((_, i) => <span key={i} className={i === index ? "active" : ""} />)}
    </div>}
    {mobile && <button className="carousel-accessible-pause" type="button" onClick={() => setPaused(p => !p)} disabled={reduced}>
      {paused ? "Play slideshow" : "Pause slideshow"}
    </button>}
    <div className="carousel-viewport" tabIndex={mobile ? 0 : undefined}
      aria-label={mobile ? "Swipe to change section, or use left and right arrow keys" : undefined}
      onKeyDown={e => {
        if (mobile && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
          e.preventDefault(); setPaused(true); move(e.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onFocusCapture={() => { if (mobile && !held) setPaused(true); }}
      onPointerEnter={e => { if (e.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={e => {
        if (!mobile) return;
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
      <div className="carousel-track" style={mobile ? { transform: `translateX(-${index * 100}%)` } : undefined}>
        {slides.map((slide, i) => <div className="carousel-slide" key={i}
          role={mobile ? "group" : undefined} aria-roledescription={mobile ? "slide" : undefined}
          aria-label={mobile ? `${i + 1} of ${slides.length}` : undefined}
          aria-hidden={mobile && i !== index ? true : undefined} inert={mobile && i !== index ? true : undefined}>
          {slide}
        </div>)}
      </div>
    </div>
  </div>;
}
