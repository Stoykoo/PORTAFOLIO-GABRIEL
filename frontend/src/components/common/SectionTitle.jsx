// TITULO SECCION — Con línea gradient decorativa

import { motion } from "framer-motion";

export default function SectionTitle({ id, children }) {
  return (
    <div id={id} className="space-y-3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-slate-300">
          {children}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-brand-500/40 via-cyan-500/20 to-transparent" />
      </motion.div>
    </div>
  );
}
