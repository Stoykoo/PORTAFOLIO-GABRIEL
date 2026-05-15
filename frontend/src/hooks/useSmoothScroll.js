// ══════════════════════════════════════════════════════════════
// SMOOTH SCROLL — Lenis integration hook
// ══════════════════════════════════════════════════════════════

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { scene } from "../config/scene";

export default function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: scene.smoothScrollLerp,
      duration: scene.smoothScrollDuration,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Allow anchor links to work with Lenis
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -80 });
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}
