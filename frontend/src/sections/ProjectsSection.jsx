// ══════════════════════════════════════════════════════════════
// PROJECTS — Aurora border cards with depth effects
// ══════════════════════════════════════════════════════════════

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
    glowColor: "rgba(168, 85, 247, 0.12)",
    borderHover: "hover:border-purple-500/30",
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
    glowColor: "rgba(20, 184, 166, 0.12)",
    borderHover: "hover:border-teal-500/30",
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
        <p className="text-sm text-white/40">
          Sistemas reales pensados para producción, donde participo en todo el
          ciclo: diseño, desarrollo, despliegue y mejora continua.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
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
              {/* Aurora gradient border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.04] opacity-100 transition-all duration-700 group-hover:from-purple-500/30 group-hover:via-teal-500/20 group-hover:to-rose-500/30" />

              <div
                className={`relative flex h-full flex-col rounded-3xl bg-black/70 backdrop-blur-xl px-5 py-5 sm:px-6 sm:py-6 transition-all duration-500 ${project.borderHover}`}
                style={{ boxShadow: `0 20px 60px rgba(0,0,0,0.6)` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 60px ${project.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.6)`;
                }}
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/40">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                        Proyecto
                      </span>
                      <span>· {project.period}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-white/90">
                      {project.name}
                    </h3>
                    <p className="text-xs font-medium text-white/40">
                      {project.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-300 ring-1 ring-emerald-500/20">
                      {project.badge}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 shadow-lg">
                      {index === 0 ? (
                        <MonitorSmartphone size={18} className="text-white/70" />
                      ) : (
                        <Code2 size={18} className="text-white/70" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="mb-4 text-[13px] leading-relaxed text-white/50">
                  {project.summary}
                </p>

                {/* Tech stack */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/50 ring-1 ring-white/[0.06] transition-colors duration-300 hover:ring-purple-400/30 hover:text-purple-200"
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
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-4 py-2 text-[11px] font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-[1.02]"
                  >
                    <Server size={12} />
                    <span>
                      {isOpen ? "Ocultar detalles" : "Ver detalles del proyecto"}
                    </span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-[11px] font-medium text-white/60 transition-all duration-300 hover:border-purple-400/40 hover:text-purple-200"
                    >
                      <ExternalLink size={12} />
                      <span>Ver en GitHub</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-white/[0.06] bg-white/[0.01] px-3 py-2 text-[11px] font-medium text-white/25">
                      <Code2 size={12} />
                      <span>Repositorio privado</span>
                    </span>
                  )}
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <p className="mb-3 text-xs font-bold text-white/70">
                          ¿Qué hice en este proyecto?
                        </p>
                        <ul className="space-y-2">
                          {project.details?.map((item, i) => (
                            <motion.li
                              key={item}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.05, duration: 0.3 }}
                              className="flex gap-2 text-xs text-white/50"
                            >
                              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
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
