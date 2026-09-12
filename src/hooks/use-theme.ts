import { useEffect, useSyncExternalStore } from "react";
let memoryPreference: boolean | null = null;
function readTheme() {
  if (memoryPreference !== null) return memoryPreference;
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved === "dark";
  } catch {
    /* Storage can be unavailable. */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function subscribe(notify: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("theme-change", notify);
  window.addEventListener("storage", notify);
  media.addEventListener("change", notify);
  return () => {
    window.removeEventListener("theme-change", notify);
    window.removeEventListener("storage", notify);
    media.removeEventListener("change", notify);
  };
}
export function useTheme() {
  const dark = useSyncExternalStore(subscribe, readTheme, () => false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  const toggle = () => {
    memoryPreference = !dark;
    try {
      localStorage.setItem("theme", !dark ? "dark" : "light");
    } catch {
      /* Keep an in-memory preference. */
    }
    window.dispatchEvent(new Event("theme-change"));
  };
  return { dark, toggle };
}
