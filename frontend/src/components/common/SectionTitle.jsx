// SECTION TITLE — Gradient text with aurora palette

import { motion } from "framer-motion";

export default function SectionTitle({ children, id }) {
  return (
    <motion.h2
      id={id}
      initial={{ y: 14, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      className="text-xs font-bold uppercase tracking-[0.3em] text-gradient-aurora"
    >
      {children}
    </motion.h2>
  );
}
