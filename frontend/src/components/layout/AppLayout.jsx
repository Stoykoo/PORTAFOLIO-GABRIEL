// LAYOUT — Premium con navbar sticky glass, background animado, mouse glow

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/personal";
import { isChristmasSeason } from "../../utils/season";
import ChristmasOverlay from "../common/ChristmasOverlay";
import MouseGlow from "../common/MouseGlow";
import AnimatedBackground from "../common/AnimatedBackground";
import SectionDivider from "../common/SectionDivider";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Insert SectionDividers between children
  const childArray = Array.isArray(children) ? children : [children];
  const withDividers = [];
  childArray.forEach((child, idx) => {
    withDividers.push(child);
    if (idx < childArray.length - 1) {
      withDividers.push(<SectionDivider key={`divider-${idx}`} />);
    }
  });

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50 bg-soft-gradient">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Mouse glow */}
      <MouseGlow />

      {/* Overlay navideño solo en temporada */}
      {christmas && <ChristmasOverlay />}

      {/* Sticky navbar with glass blur */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-800/50 bg-slate-950/80 shadow-lg shadow-black/20 backdrop-blur-xl"
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
            <div className="h-10 w-10 overflow-hidden rounded-2xl bg-slate-900/80 ring-1 ring-slate-700/70 shadow-[0_0_20px_rgba(129,140,248,0.4)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(129,140,248,0.6)]">
              <img
                src="/avatar-smoking.png"
                alt="Avatar de Gabriel Stoyko"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Portafolio
              </p>
              <p className="text-sm font-semibold text-slate-100 flex items-center gap-1">
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
              flex items-center gap-1 text-xs font-medium text-slate-400
              overflow-x-auto whitespace-nowrap scrollbar-none
              sm:overflow-visible sm:whitespace-normal
            "
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-slate-800/60 hover:text-brand-300"
              >
                {s.label}
              </a>
            ))}
          </motion.nav>
        </div>
      </header>

      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-20 px-4 pb-20 pt-24 sm:px-6 lg:px-10">
        {withDividers}

        <footer className="mt-8 border-t border-slate-800/40 pt-6 text-xs text-slate-500 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Gabriel Stoyko Martínez García. Todos los derechos
            reservados.
          </p>
          <p className="flex flex-wrap gap-3 text-slate-600">
            <span>
              Código y diseño de este portafolio creados por Gabriel Stoyko.
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              Licencia MIT — consulta el archivo{" "}
              <span className="font-mono text-slate-500">LICENSE</span> en el
              repositorio.
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
}
