// SOBRE MI — Con glassmorphism y animaciones scroll

import { motion } from "framer-motion";
import { aboutText } from "../data/personal";
import SectionTitle from "../components/common/SectionTitle";
import { User, Code2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="space-y-6">
      <SectionTitle id="about">Sobre mí</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass-card group rounded-2xl p-5 transition-all duration-500 hover:border-cyan-500/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
              <User size={18} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Quién soy
            </p>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-slate-200">
            {aboutText.left.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card group rounded-2xl p-5 transition-all duration-500 hover:border-violet-500/20 hover:shadow-[0_0_40px_rgba(167,139,250,0.08)]"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 text-violet-400">
              <Code2 size={18} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Mi experiencia
            </p>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-slate-300">
            {aboutText.right.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
