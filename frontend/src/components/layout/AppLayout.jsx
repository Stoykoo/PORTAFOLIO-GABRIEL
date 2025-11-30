// LAYOUT

import { motion } from "framer-motion";
import { personalInfo } from "../../data/personal";

const sections = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Camino" },
  { id: "contact", label: "Contacto" },
];

export default function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937,_#020617_60%)] opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(99,102,241,0.25),transparent,rgba(236,72,153,0.25))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[-200px] -z-10 flex justify-center">
        <div className="h-[320px] w-[480px] rounded-full bg-brand-500/40 blur-3xl" />
      </div>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/80 ring-1 ring-slate-700/70 shadow-[0_0_30px_rgba(129,140,248,0.6)]">
              <span className="text-lg font-bold tracking-tight text-brand-400">
                GS
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Portafolio
              </p>
              <p className="text-sm font-medium text-slate-100">
                {personalInfo.name}
              </p>
            </div>
          </motion.div>

          <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden items-center gap-4 text-xs font-medium text-slate-300 sm:flex"
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
      </main>
    </div>
  );
}
