// HERO

import { motion } from "framer-motion";
import { Mail, ArrowDownCircle } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { personalInfo } from "../data/personal";
import TechOrbit from "../components/common/TechOrbit";

const mainStackIcons = [SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss];

export default function HeroSection() {
  return (
    <section className="grid flex-1 gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
      <div className="space-y-8">
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300 shadow-lg shadow-black/40 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          Disponible para colaborar
        </motion.p>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="space-y-3"
        >
          <h1 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Ingeniero en Sistemas Computacionales &{" "}
            <span className="bg-gradient-to-r from-brand-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
              Full Stack Web Developer
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-[15px]">
            Desarrollador versátil enfocado en resolver problemas de negocio y
            convertir datos complejos en productos digitales elegantes,
            mantenibles y listos para producción.
          </p>
          <p className="max-w-xl text-xs text-slate-400 sm:text-sm">
            Experiencia construyendo sistemas basados en datos, dashboards y
            plataformas completas como KiosTec y QR Universe, del backend a la
            interfaz.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.6)] transition hover:brightness-110"
          >
            <Mail size={16} />
            Contáctame
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 hover:border-brand-400/70 hover:text-brand-200"
          >
            <ArrowDownCircle size={16} />
            Ver más de mí
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Stack principal
          </p>
          <div className="flex flex-wrap gap-2">
            {mainStackIcons.map((Icon, idx) => (
              <div
                key={idx}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/80 ring-1 ring-slate-700/70 backdrop-blur-md"
              >
                <Icon className="text-brand-400" size={18} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.aside
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">
          <TechOrbit />

          <div className="relative">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div>
                <p className="text-xs text-slate-400">Perfil</p>
                <p className="text-sm font-semibold text-slate-100">
                  {personalInfo.name}
                </p>
                <p className="text-[11px] text-slate-400">
                  {personalInfo.location}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-400 text-xl font-bold text-slate-950 shadow-[0_0_40px_rgba(16,185,129,0.7)]">
                GS
              </div>
            </div>

            <div className="mb-4 space-y-3 text-xs text-slate-300">
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Foco actual
              </p>
              <ul className="space-y-1 text-[11px] text-slate-300">
                <li>• Dashboards y sistemas basados en datos (KiosTec).</li>
                <li>• Plataformas modernas con UX/animaciones (QR Universe).</li>
                <li>
                  • Arquitecturas limpias y escalables listas para producción.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}
