// COMMAND PALETTE

import { useEffect, useMemo, useState } from "react";
import { Command, Mail, Github, Linkedin, Hash, FileText } from "lucide-react";
import { personalInfo } from "../../data/personal";

const actions = [
  {
    group: "Navegación",
    label: "Ir a Sobre mí",
    shortcut: "A",
    type: "scroll",
    target: "about",
  },
  {
    group: "Navegación",
    label: "Ir a Skills",
    shortcut: "S",
    type: "scroll",
    target: "skills",
  },
  {
    group: "Navegación",
    label: "Ir a Contacto",
    shortcut: "C",
    type: "scroll",
    target: "contact",
  },
  {
    group: "Enlaces",
    label: "Abrir GitHub",
    shortcut: "G",
    type: "link",
    href: personalInfo.github,
    icon: Github,
  },
  {
    group: "Enlaces",
    label: "Abrir LinkedIn",
    shortcut: "L",
    type: "link",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    group: "Acciones",
    label: "Escribir correo",
    shortcut: "M",
    type: "link",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
    {
    group: "Navegación",
    label: "Ir a CV",
    shortcut: "V",
    type: "scroll",
    target: "cv",
  },
   {
    group: "Enlaces",
    label: "Abrir CV (PDF)",
    shortcut: "P",
    type: "link",
    href: "/CV_GABRIEL_STOYKO_MARTINEZ_GARCIA.pdf",
    icon: FileText,
  },
  {
    group: "Navegación",
    label: "Ir a Proyectos",
    shortcut: "P",
    type: "scroll",
    target: "projects",
  },
];

function runAction(action) {
  if (action.type === "scroll" && action.target) {
    const el = document.getElementById(action.target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else if (action.type === "link" && action.href) {
    window.open(action.href, "_blank", "noopener,noreferrer");
  }
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter((a) => a.label.toLowerCase().includes(q));
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const a of filtered) {
      if (!map.has(a.group)) map.set(a.group, []);
      map.get(a.group).push(a);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-200 shadow-lg shadow-black/40 backdrop-blur hover:border-brand-400/80"
      >
        <Command size={14} />
        <span>Comandos</span>
        <span className="hidden rounded-md border border-slate-600/80 px-1 text-[10px] text-slate-400 sm:inline">
          Ctrl + K
        </span>
      </button>

      {!open ? null : (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/70 px-4 pt-24 backdrop-blur">
          <div className="w-full max-w-xl rounded-2xl border border-slate-800/80 bg-slate-900/95 shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 border-b border-slate-800/80 px-3 py-2">
              <Command size={16} className="text-brand-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe para filtrar comandos (GitHub, Skills, Contacto...)"
                className="h-8 flex-1 bg-transparent text-xs text-slate-100 outline-none placeholder:text-slate-500"
              />
              <span className="text-[10px] text-slate-500">Esc para cerrar</span>
            </div>

            <div className="max-h-72 overflow-y-auto py-2 text-xs">
              {grouped.length === 0 && (
                <p className="px-3 py-2 text-slate-500">
                  No hay comandos que coincidan con &quot;{query}&quot;.
                </p>
              )}

              {grouped.map(([group, items]) => (
                <div key={group} className="px-1 py-1">
                  <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {group}
                  </p>
                  {items.map((action) => {
                    const Icon = action.icon || Hash;
                    return (
                      <button
                        key={action.label}
                        type="button"
                        onClick={() => {
                          runAction(action);
                          setOpen(false);
                        }}
                        className="flex w-full items-center justify-between rounded-xl px-2 py-1.5 text-left text-slate-200 hover:bg-slate-800/80"
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={13} className="text-brand-400" />
                          <span>{action.label}</span>
                        </div>
                        {action.shortcut && (
                          <span className="rounded-md border border-slate-600/80 px-1 text-[10px] text-slate-400">
                            {action.shortcut}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
