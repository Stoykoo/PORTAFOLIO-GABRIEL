// ══════════════════════════════════════════════════════════════
// JOURNEY — Light-pulsing timeline
// ══════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import { journey } from "../data/personal";
import SectionTitle from "../components/common/SectionTitle";

const tagColors = {
  Fundamentos: "text-amber-300 bg-amber-500/10 ring-amber-500/20",
  Universidad: "text-blue-300 bg-blue-500/10 ring-blue-500/20",
  "Proyecto institucional": "text-teal-300 bg-teal-500/10 ring-teal-500/20",
  "Producto propio": "text-purple-300 bg-purple-500/10 ring-purple-500/20",
};

export default function JourneySection() {
  return (
    <section className="space-y-6">
      <SectionTitle id="journey">Mi camino como desarrollador</SectionTitle>

      <div className="relative mt-2 grid gap-6 md:grid-cols-[0.7fr,1.3fr]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="hidden text-sm text-white/40 md:block"
        >
          <p className="leading-relaxed">
            Un recorrido desde los primeros programas en preparatoria hasta
            proyectos completos en producción, siempre aprendiendo y
            construyendo cosas útiles.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line — glowing gradient */}
          <div className="absolute left-[11px] top-2 bottom-2 hidden w-[2px] md:block">
            <div className="h-full w-full rounded-full bg-gradient-to-b from-purple-500/60 via-teal-500/30 to-transparent shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
          </div>

          <div className="space-y-5">
            {journey.map((item, index) => {
              const tagStyle = tagColors[item.tag] || "text-purple-200 bg-purple-500/10 ring-purple-500/20";
              return (
                <motion.div
                  key={item.period}
                  initial={{ x: 24, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative flex gap-4"
                >
                  {/* Timeline dot — glowing */}
                  <div className="mt-2 hidden flex-col items-center md:flex">
                    <div className="h-3.5 w-3.5 rounded-full bg-purple-500 ring-4 ring-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.6)] timeline-dot-pulse" />
                  </div>

                  {/* Card */}
                  <div className="glass-card group flex-1 rounded-2xl p-4 transition-all duration-500 hover:border-purple-500/20 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                        {item.period}
                      </p>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ${tagStyle}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] font-bold text-white/85">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/40">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
