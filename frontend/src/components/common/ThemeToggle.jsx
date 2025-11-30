// THEME TOGGLE

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored === "light" ? "light" : "dark";
    setTheme(initial);
    const root = document.documentElement;
    if (initial === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      const root = document.documentElement;
      if (next === "light") root.classList.add("light");
      else root.classList.remove("light");
      localStorage.setItem("theme", next);
      return next;
    });
  };

  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-200 shadow-md shadow-black/40 backdrop-blur hover:border-brand-400/80"
      aria-label="Cambiar tema"
    >
      <Icon size={14} className="text-brand-400" />
      <span className="hidden sm:inline">
        {theme === "dark" ? "Modo claro" : "Modo oscuro"}
      </span>
    </button>
  );
}
