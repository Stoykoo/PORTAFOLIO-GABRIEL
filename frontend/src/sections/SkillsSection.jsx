// SKILLS

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
} from "react-icons/si";
import SectionTitle from "../components/common/SectionTitle";
import { skills } from "../data/personal";

const iconMap = {
  "JavaScript (ES6+)": SiJavascript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  "Tailwind CSS": SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  Git: SiGit,
  GitHub: SiGithub,
  "Linux / Ubuntu": SiLinux,
};

export default function SkillsSection() {
  return (
    <section className="space-y-4">
      <SectionTitle id="skills">Skills y tecnologías</SectionTitle>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((name) => {
          const Icon = iconMap[name];
          return (
            <motion.div
              key={name}
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-3 py-2 text-xs text-slate-200 shadow-md shadow-black/40 backdrop-blur hover:border-brand-400/70 hover:shadow-[0_0_35px_rgba(129,140,248,0.7)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950/80">
                {Icon && <Icon className="text-brand-400" size={18} />}
              </div>
              <span>{name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
