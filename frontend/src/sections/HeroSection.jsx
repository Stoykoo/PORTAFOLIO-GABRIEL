// HERO — Premium redesign

import { motion } from "framer-motion";
import { Mail, ArrowDownCircle, Sparkles } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { personalInfo } from "../data/personal";
import TechOrbit from "../components/common/TechOrbit";

const mainStackIcons = [
  { Icon: SiReact, color: "text-cyan-400", label: "React" },
  { Icon: SiNodedotjs, color: "text-emerald-400", label: "Node.js" },
  { Icon: SiPostgresql, color: "text-blue-400", label: "PostgreSQL" },
  { Icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind" },
  { Icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
];

export default function HeroSection() {
  return (
    <section className="grid flex-1 gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
      <div className="space-y-8">
        {/* Badge disponible */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300 shadow-lg shadow-black/40 backdrop-blur"
        >
          <span className="pulse-glow h-2 w-2 rounded-full bg-emerald-400" />
          Disponible para colaborar
        </motion.p>

        {/* Título principal */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="space-y-4"
        >
          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-slate-50 sm:text-5xl lg:text-6xl">
            Ingeniero en Sistemas{" "}
            <span className="text-gradient">
              Full Stack Developer
            </span>
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-slate-300">
            Desarrollador versátil enfocado en resolver problemas de negocio y
            convertir datos complejos en productos digitales elegantes,
            mantenibles y listos para producción.
          </p>
          <p className="max-w-xl text-sm text-slate-400">
            Experiencia construyendo sistemas basados en datos, dashboards y
            plataformas completas como{" "}
            <span className="font-medium text-slate-300">KiosTec</span> y{" "}
            <span className="font-medium text-slate-300">QR Universe</span>,
            del backend a la interfaz.
          </p>
        </motion.div>

        {/* Botones CTA */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] hover:scale-[1.02]"
          >
            <Mail size={16} />
            Contáctame
            <Sparkles size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/70 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-brand-400/70 hover:text-brand-200 hover:bg-slate-800/70"
          >
            <ArrowDownCircle size={16} />
            Ver más de mí
          </a>
        </motion.div>

        {/* Stack principal */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Stack principal
          </p>
          <div className="flex flex-wrap gap-2">
            {mainStackIcons.map(({ Icon, color, label }) => (
              <div
                key={label}
                title={label}
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 ring-1 ring-slate-700/70 backdrop-blur-md transition-all duration-300 hover:ring-brand-400/50 hover:shadow-[0_0_25px_rgba(129,140,248,0.5)] hover:scale-110"
              >
                <Icon className={`${color} transition-transform duration-300 group-hover:scale-110`} size={18} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Card lateral */}
      <motion.aside
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
      >
        <div className="gradient-border">
          <div className="gradient-border-inner relative overflow-hidden p-5 sm:p-6">
            <TechOrbit />

            {/* Shimmer overlay */}
            <div className="shimmer pointer-events-none absolute inset-0 rounded-3xl" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
                    Perfil
                  </p>
                  <p className="text-base font-bold text-slate-50">
                    {personalInfo.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {personalInfo.location}
                  </p>
                </div>
                <div className="h-14 w-14 overflow-hidden rounded-2xl border-2 border-brand-500/50 bg-slate-950/80 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                  <img
                    src="/avatar-smoking.png"
                    alt="Avatar de Gabriel Stoyko"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mb-5 space-y-3 text-[13px] leading-relaxed text-slate-300">
                <p>
                  Me muevo con soltura en todo el stack, adaptándome a roles 100%
                  Frontend o Backend, siempre con foco en calidad, arquitectura
                  clara y mantenibilidad a largo plazo.
                </p>
                <p className="text-slate-400">
                  También cuento con experiencia en soporte técnico e
                  infraestructura, asegurando la operatividad de equipos y
                  sistemas a nivel usuario.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Foco actual
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span>Dashboards y sistemas basados en datos (KiosTec).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span>Plataformas modernas con UX/animaciones (QR Universe).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                    <span>Arquitecturas limpias y escalables listas para producción.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}
