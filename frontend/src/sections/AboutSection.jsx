// ══════════════════════════════════════════════════════════════
// ABOUT — Glassmorphism cards over 3D scene
// ══════════════════════════════════════════════════════════════

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
          className="glass-card group rounded-2xl p-5 transition-all duration-500 hover:border-purple-500/20 hover:shadow-[0_0_50px_rgba(168,85,247,0.08)]"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 text-purple-400">
              <User size={18} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
              Quién soy
            </p>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-white/70">
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
          className="glass-card group rounded-2xl p-5 transition-all duration-500 hover:border-teal-500/20 hover:shadow-[0_0_50px_rgba(20,184,166,0.08)]"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 text-teal-400">
              <Code2 size={18} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
              Mi experiencia
            </p>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-white/60">
            {aboutText.right.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
