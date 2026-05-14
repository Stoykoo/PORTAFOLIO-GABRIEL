// SKILLS — Agrupadas por categoría con hover glow

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiLinux,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiDocker,

  SiPostman,
  SiFigma,
  SiVercel,
  SiNpm,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import SectionTitle from "../components/common/SectionTitle";
import { skillCategories } from "../data/personal";

const iconMap = {
  "JavaScript (ES6+)": { icon: SiJavascript, color: "text-yellow-400" },
  React: { icon: SiReact, color: "text-cyan-400" },
  "Node.js": { icon: SiNodedotjs, color: "text-emerald-400" },
  "Express.js": { icon: SiExpress, color: "text-slate-200" },
  "REST APIs": { icon: TbApi, color: "text-teal-400" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-400" },
  MongoDB: { icon: SiMongodb, color: "text-green-400" },
  "JWT / Auth": { icon: SiJsonwebtokens, color: "text-pink-400" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-sky-400" },
  HTML5: { icon: SiHtml5, color: "text-orange-400" },
  CSS3: { icon: SiCss3, color: "text-blue-400" },
  Git: { icon: SiGit, color: "text-orange-500" },
  GitHub: { icon: SiGithub, color: "text-slate-200" },
  Docker: { icon: SiDocker, color: "text-blue-400" },
  "VS Code": { icon: VscVscode, color: "text-blue-500" },
  Postman: { icon: SiPostman, color: "text-orange-400" },
  Figma: { icon: SiFigma, color: "text-purple-400" },
  Vercel: { icon: SiVercel, color: "text-slate-200" },
  NPM: { icon: SiNpm, color: "text-red-500" },
  "Linux / Ubuntu": { icon: SiLinux, color: "text-amber-400" },
};

export default function SkillsSection() {
  return (
    <section className="space-y-6">
      <SectionTitle id="skills">Skills y tecnologías</SectionTitle>

      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            className="glass-card rounded-2xl p-4 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]"
          >
            {/* Category label */}
            <div className="mb-4 flex items-center gap-2">
              <div className={`h-1 w-6 rounded-full bg-gradient-to-r ${category.color}`} />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {category.name}
              </p>
            </div>

            {/* Skills grid */}
            <div className="space-y-2">
              {category.skills.map((name, idx) => {
                const mapped = iconMap[name];
                const Icon = mapped?.icon;
                const color = mapped?.color || "text-brand-400";
                return (
                  <motion.div
                    key={name}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + idx * 0.05 }}
                    className="group flex items-center gap-3 rounded-xl border border-slate-800/60 bg-slate-950/50 px-3 py-2.5 text-[13px] text-slate-200 transition-all duration-300 hover:border-brand-400/40 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(129,140,248,0.15)] hover:scale-[1.02]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/80 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.4)]">
                      {Icon && <Icon className={`${color} transition-transform duration-300 group-hover:scale-110`} size={16} />}
                    </div>
                    <span className="font-medium">{name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
