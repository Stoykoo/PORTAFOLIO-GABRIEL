// ══════════════════════════════════════════════════════════════
// APP LAYOUT — Immersive 3D with glass navbar + Lenis scroll
// ══════════════════════════════════════════════════════════════

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/personal";
import { isChristmasSeason } from "../../utils/season";
import ChristmasOverlay from "../common/ChristmasOverlay";
import Scene3D from "../canvas/Scene3D";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const sections = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Proyectos" },
  { id: "cv", label: "CV" },
  { id: "journey", label: "Camino" },
  { id: "contact", label: "Contacto" },
];

const year = new Date().getFullYear();

export default function AppLayout({ children }) {
  const christmas = isChristmasSeason();
  const [scrolled, setScrolled] = useState(false);
  useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className="relative min-h-screen text-slate-50">
      {/* ── 3D Background Scene ── */}
      <Scene3D />

      {/* ── Christmas overlay ── */}
      {christmas && <ChristmasOverlay />}

      {/* ── Sticky Navbar (glass over 3D) ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-white/[0.06] bg-black/60 shadow-2xl shadow-purple-900/10 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 overflow-hidden rounded-2xl bg-black/40 ring-1 ring-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <img
                src="/avatar-smoking.png"
                alt="Avatar de Gabriel Stoyko"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Portafolio
              </p>
              <p className="text-sm font-semibold text-white/90 flex items-center gap-1">
                {personalInfo.name.split(" ").slice(0, 2).join(" ")}
                {christmas && (
                  <span className="text-base" aria-hidden="true">
                    🎅
                  </span>
                )}
              </p>
            </div>
          </motion.div>

          <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              flex items-center gap-1 text-xs font-medium text-white/40
              overflow-x-auto whitespace-nowrap scrollbar-none
              sm:overflow-visible sm:whitespace-normal
            "
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-white/[0.06] hover:text-purple-300"
              >
                {s.label}
              </a>
            ))}
          </motion.nav>
        </div>
      </header>

      {/* ── Main Content (floats over 3D) ── */}
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-24 px-4 pb-16 pt-20 sm:px-6 sm:gap-32 sm:pt-24 lg:px-10">
        {childArray.map((child, idx) => (
          <div key={idx}>
            {child}
            {idx < childArray.length - 1 && (
              <div className="section-divider mx-auto mt-32 max-w-xl" />
            )}
          </div>
        ))}

        {/* ── Footer ── */}
        <footer className="mt-8 border-t border-white/[0.06] pt-6 text-xs text-white/30 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Gabriel Stoyko Martínez García. Todos los derechos
            reservados.
          </p>
          <p className="flex flex-wrap gap-3 text-white/20">
            <span>
              Diseñado y desarrollado por Gabriel Stoyko.
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
}
