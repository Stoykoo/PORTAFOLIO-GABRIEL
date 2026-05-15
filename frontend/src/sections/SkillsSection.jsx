// ══════════════════════════════════════════════════════════════
// SKILLS — Floating glass cards with glow per category
// ══════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiDocker,
  SiVsco,
  SiPostman,
  SiFigma,
  SiVercel,
  SiNpm,
  SiLinux,
} from "react-icons/si";
import { Globe } from "lucide-react";
import { skillCategories } from "../data/personal";
import SectionTitle from "../components/common/SectionTitle";

const iconMap = {
  "JavaScript (ES6+)": { icon: SiJavascript, color: "text-yellow-400" },
  React: { icon: SiReact, color: "text-cyan-400" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-sky-400" },
  HTML5: { icon: SiHtml5, color: "text-orange-400" },
  CSS3: { icon: SiCss3, color: "text-blue-400" },
  "Node.js": { icon: SiNodedotjs, color: "text-emerald-400" },
  "Express.js": { icon: SiExpress, color: "text-white/60" },
  "REST APIs": { icon: Globe, color: "text-teal-400" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-400" },
  MongoDB: { icon: SiMongodb, color: "text-green-400" },
  "JWT / Auth": { icon: SiJsonwebtokens, color: "text-pink-400" },
  Git: { icon: SiGit, color: "text-orange-500" },
  GitHub: { icon: SiGithub, color: "text-white/70" },
  Docker: { icon: SiDocker, color: "text-blue-400" },
  "VS Code": { icon: SiVsco, color: "text-blue-500" },
  Postman: { icon: SiPostman, color: "text-orange-400" },
  Figma: { icon: SiFigma, color: "text-purple-400" },
  Vercel: { icon: SiVercel, color: "text-white/70" },
  NPM: { icon: SiNpm, color: "text-red-400" },
  "Linux / Ubuntu": { icon: SiLinux, color: "text-amber-400" },
};

const categoryThemes = {
  Frontend: {
    border: "hover:border-purple-500/30",
    glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.1)]",
    badge: "text-purple-300 bg-purple-500/10 ring-purple-500/20",
    accent: "from-purple-500/20 to-cyan-500/20",
  },
  Backend: {
    border: "hover:border-teal-500/30",
    glow: "hover:shadow-[0_0_60px_rgba(20,184,166,0.1)]",
    badge: "text-teal-300 bg-teal-500/10 ring-teal-500/20",
    accent: "from-teal-500/20 to-emerald-500/20",
  },
  Herramientas: {
    border: "hover:border-rose-500/30",
    glow: "hover:shadow-[0_0_60px_rgba(244,114,182,0.1)]",
    badge: "text-rose-300 bg-rose-500/10 ring-rose-500/20",
    accent: "from-rose-500/20 to-amber-500/20",
  },
};

export default function SkillsSection() {
  return (
    <section className="space-y-8" id="skills">
      <SectionTitle>Stack tecnológico</SectionTitle>

      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((cat, catIdx) => {
          const theme = categoryThemes[cat.name] || categoryThemes.Frontend;
          return (
            <motion.div
              key={cat.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`glass-card group rounded-2xl p-5 transition-all duration-500 ${theme.border} ${theme.glow}`}
            >
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${theme.accent}`}>
                  <span className="text-xs font-black text-white/80">
                    {cat.name.charAt(0)}
                  </span>
                </div>
                <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ${theme.badge}`}>
                  {cat.name}
                </span>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((skill, i) => {
                  const { icon: Icon, color } = iconMap[skill] || { icon: Globe, color: "text-white/40" };
                  return (
                    <motion.div
                      key={skill}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.03 }}
                      className="flex items-center gap-2 rounded-xl bg-white/[0.02] px-3 py-2 ring-1 ring-white/[0.05] transition-all duration-300 hover:bg-white/[0.05] hover:ring-purple-500/20"
                    >
                      <Icon size={14} className={color} />
                      <span className="text-[11px] font-medium text-white/60">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
