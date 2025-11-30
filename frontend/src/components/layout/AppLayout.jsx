// LAYOUT

import { motion } from "framer-motion";
import { personalInfo } from "../../data/personal";
import { isChristmasSeason } from "../../utils/season";
import ChristmasOverlay from "../common/ChristmasOverlay";

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

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50 bg-soft-gradient">
      {/* Glow central detrás del hero */}
      <div className="pointer-events-none absolute inset-x-0 top-[-200px] -z-10 flex justify-center">
        <div className="h-[320px] w-[480px] rounded-full bg-brand-500/40 blur-3xl" />
      </div>

      {/* Overlay navideño solo en temporada */}
      {christmas && <ChristmasOverlay />}

      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 px-4 pb-20 pt-10 sm:px-6 lg:px-10">
        <header className="flex items-center justify-between gap-4">
            <motion.div
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3"
            >
                <div className="h-10 w-10 overflow-hidden rounded-2xl bg-slate-900/80 ring-1 ring-slate-700/70 shadow-[0_0_30px_rgba(129,140,248,0.6)]">
                <img
                    src="/avatar-smoking.png"
                    alt="Avatar de Gabriel Stoyko"
                    className="h-full w-full object-cover"
                />
                </div>
                <div className="leading-tight">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Portafolio
                </p>
                <p className="text-sm font-medium text-slate-100 flex items-center gap-1">
                    {personalInfo.name}
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
                className="flex items-center gap-4 text-xs font-medium text-slate-300"
            >
                {sections.map((s) => (
                <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="hover:text-brand-400"
                >
                    {s.label}
                </a>
                ))}
            </motion.nav>
            </header>

        {children}
         <footer className="mt-8 border-t border-slate-800/70 pt-4 text-[11px] text-slate-500 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Gabriel Stoyko Martínez García. Todos los derechos
            reservados.
          </p>
          <p className="flex flex-wrap gap-3">
            <span>
              Código y diseño de este portafolio creados por Gabriel Stoyko.
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              Licencia MIT — consulta el archivo <span className="font-mono">LICENSE</span> en el repositorio.
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
}
