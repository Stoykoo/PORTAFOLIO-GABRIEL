// PROYECTOS

import { useState } from "react";
import { Code2, MonitorSmartphone, Server, ChevronDown } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";

const projects = [
  {
    id: "kiostec",
    name: "KiosTec – Sistema de gestión para bibliotecas",
    role: "Residencia profesional · Full Stack",
    period: "2023 – 2025 · TecNM–ITT",
    summary:
      "Plataforma completa para las bibliotecas del ITT: kioscos de acceso, panel administrativo, préstamos, reportes y dashboards basados en datos.",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind", "ApexCharts"],
    badge: "Producción",
    accent: "from-sky-500/70 via-indigo-500/70 to-emerald-400/70",
    repoUrl: null,
  },
  {
    id: "qruniverse",
    name: "QR Universe – Plataforma de códigos QR",
    role: "Proyecto propio · Full Stack",
    period: "2024 – 2025",
    summary:
      "Aplicación moderna para crear, organizar y personalizar códigos QR con panel de administración, métricas y experiencia visual cuidada.",
    stack: ["React", "Vite", "Node.js", "PostgreSQL", "Tailwind"],
    badge: "En desarrollo",
    accent: "from-fuchsia-500/70 via-sky-400/70 to-amber-300/70",
    repoUrl: "https://github.com/Stoykoo/QR-UNIVERSE", // 👈 repo público
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
        <p className="text-xs text-slate-400">
          Sistemas reales pensados para producción, donde participo en todo el
          ciclo: diseño, desarrollo, despliegue y mejora continua.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const isOpen = openId === project.id;

          return (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/75 p-[1px] shadow-[0_18px_60px_rgba(15,23,42,0.85)]"
            >
              {/* borde glow */}
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.accent}`}
              />
              <div className="relative flex h-full flex-col rounded-[22px] bg-slate-950/90 px-5 py-5 sm:px-6 sm:py-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                        Proyecto
                      </span>
                      <span>· {project.period}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {project.name}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-400">
                      {project.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                      {project.badge}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-brand-400 shadow-[0_0_20px_rgba(79,70,229,0.7)]">
                      {index === 0 ? (
                        <MonitorSmartphone size={18} />
                      ) : (
                        <Code2 size={18} />
                      )}
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-xs leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones + toggle de detalles */}
                <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => handleToggle(project.id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-sky-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-[0_0_25px_rgba(79,70,229,0.7)] transition-all group-hover:translate-y-[-1px] group-hover:shadow-[0_12px_30px_rgba(79,70,229,0.7)]"
                  >
                    <Server size={12} />
                    <span>
                      {isOpen ? "Ocultar detalles del proyecto" : "Ver detalles del proyecto"}
                    </span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {project.repoUrl ? (
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-medium text-slate-200 group-hover:border-brand-400/80 transition-colors"
                    >
                        <Code2 size={12} />
                        <span>Ver en GitHub</span>
                    </a>
                    ) : (
                    <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1.5 text-[11px] font-medium text-slate-400 cursor-default border-dashed"
                    >
                        <Code2 size={12} />
                        <span>Repositorio privado (bajo solicitud)</span>
                    </button>
                    )}

                </div>

                {/* Detalles expandibles */}
                {isOpen && (
                  <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 text-[11px] text-slate-300">
                    <p className="mb-2 text-[11px] font-semibold text-slate-200">
                      ¿Qué hice en este proyecto?
                    </p>
                    <ul className="space-y-1.5 leading-relaxed">
                      {project.details.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[5px] inline-block h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
