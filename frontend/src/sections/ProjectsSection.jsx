// PROYECTOS — Premium con AnimatePresence y gradient borders

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, MonitorSmartphone, Server, ChevronDown, ExternalLink } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";

const projects = [
  {
    id: "kiostec",
    name: "KiosTec – Sistema de gestión para bibliotecas",
    role: "Residencia profesional · Full Stack",
    period: "2025 · TecNM–ITT",
    summary:
      "Plataforma completa para las bibliotecas del ITT: kioscos de acceso, panel administrativo, préstamos, reportes y dashboards basados en datos.",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind", "ApexCharts"],
    badge: "Producción",
    accent: "from-cyan-500/60 via-indigo-500/60 to-emerald-400/60",
    glowColor: "rgba(34, 211, 238, 0.15)",
    details: [
      "Desarrollo full stack con React, Node.js y PostgreSQL.",
      "Diseño e implementación de kioscos de acceso para dos unidades (Tomás Aquino y Otay).",
      "Panel administrativo con métricas en tiempo real y dashboards modernos.",
      "Módulos completos de préstamos, consultas, reportes y estadísticas.",
      "Optimización avanzada de SQL: índices, triggers, vistas y consultas complejas.",
      "Integración de ApexCharts para visualización profesional de datos.",
      "Arquitectura limpia, mantenible y enfocada en producción.",
    ],
    repoUrl: null,
  },
  {
    id: "qruniverse",
    name: "QR Universe – Plataforma de códigos QR",
    role: "Proyecto propio · Full Stack",
    period: "2025",
    summary:
      "Aplicación moderna para crear, organizar y personalizar códigos QR con panel de administración, métricas y experiencia visual cuidada.",
    stack: ["React", "Vite", "Node.js", "PostgreSQL", "Tailwind"],
    badge: "Producción",
    accent: "from-violet-500/60 via-pink-400/60 to-amber-300/60",
    glowColor: "rgba(167, 139, 250, 0.15)",
    details: [
      "Generación de códigos QR dinámicos y estáticos.",
      "Personalización completa: colores, fondos, estilos y formatos.",
      "Descarga en alta resolución para impresión profesional.",
      "Panel de administración para gestionar QRs creados.",
      "Analíticas básicas y vistas ordenadas por proyectos.",
      "Frontend construido con React + Vite para máximo rendimiento.",
      "Backend modular en Node.js + PostgreSQL.",
    ],
    repoUrl: "https://github.com/Stoykoo/QR-UNIVERSE",
  },
];

export default function ProjectsSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="space-y-8" id="projects">
      <div className="space-y-2">
        <SectionTitle>Proyectos destacados</SectionTitle>
        <p className="text-sm text-slate-400">
          Sistemas reales pensados para producción, donde participo en todo el
          ciclo: diseño, desarrollo, despliegue y mejora continua.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const isOpen = openId === project.id;

          return (
            <motion.article
              key={project.id}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient border wrapper */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-slate-700/50 via-slate-800/30 to-slate-700/50 opacity-100 transition-all duration-500 group-hover:from-brand-500/40 group-hover:via-cyan-500/30 group-hover:to-emerald-500/40 group-hover:opacity-100" />

              <div
                className="relative flex h-full flex-col rounded-3xl bg-slate-950/90 px-5 py-5 sm:px-6 sm:py-6 transition-all duration-500"
                style={{
                  boxShadow: `0 20px 60px rgba(15,23,42,0.85)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 60px ${project.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(15,23,42,0.85)`;
                }}
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                        <span className="pulse-glow inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Proyecto
                      </span>
                      <span>· {project.period}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-slate-50">
                      {project.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">
                      {project.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-300 ring-1 ring-emerald-500/20">
                      {project.badge}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} shadow-lg`}>
                      {index === 0 ? (
                        <MonitorSmartphone size={18} className="text-white" />
                      ) : (
                        <Code2 size={18} className="text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="mb-4 text-[13px] leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                {/* Tech stack */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-slate-700/50 transition-colors duration-300 hover:ring-brand-400/40 hover:text-brand-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => handleToggle(project.id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 px-4 py-2 text-[11px] font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] hover:scale-[1.02]"
                  >
                    <Server size={12} />
                    <span>
                      {isOpen
                        ? "Ocultar detalles"
                        : "Ver detalles del proyecto"}
                    </span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-[11px] font-medium text-slate-200 transition-all duration-300 hover:border-brand-400/60 hover:text-brand-200"
                    >
                      <ExternalLink size={12} />
                      <span>Ver en GitHub</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-slate-800/80 bg-slate-950/60 px-3 py-2 text-[11px] font-medium text-slate-500">
                      <Code2 size={12} />
                      <span>Repositorio privado</span>
                    </span>
                  )}
                </div>

                {/* Expandable content with AnimatePresence */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-2xl border border-slate-800/60 bg-slate-950/80 p-4">
                        <p className="mb-3 text-xs font-bold text-slate-200">
                          ¿Qué hice en este proyecto?
                        </p>
                        <ul className="space-y-2">
                          {project.details?.map((item, i) => (
                            <motion.li
                              key={item}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.05, duration: 0.3 }}
                              className="flex gap-2 text-xs text-slate-300"
                            >
                              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
