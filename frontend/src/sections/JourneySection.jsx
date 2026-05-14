// JOURNEY — Timeline premium con gradient y pulse

import { motion } from "framer-motion";
import { journey } from "../data/personal";
import SectionTitle from "../components/common/SectionTitle";

const tagColors = {
  Fundamentos: "text-amber-300 bg-amber-500/10 ring-amber-500/20",
  Universidad: "text-blue-300 bg-blue-500/10 ring-blue-500/20",
  "Proyecto institucional": "text-emerald-300 bg-emerald-500/10 ring-emerald-500/20",
  "Producto propio": "text-violet-300 bg-violet-500/10 ring-violet-500/20",
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
          className="hidden text-sm text-slate-400 md:block"
        >
          <p className="leading-relaxed">
            Un recorrido desde los primeros programas en preparatoria hasta
            proyectos completos en producción, siempre aprendiendo y
            construyendo cosas útiles.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line — gradient animado */}
          <div className="absolute left-[11px] top-2 bottom-2 hidden w-[2px] md:block">
            <div className="h-full w-full rounded-full bg-gradient-to-b from-brand-500/80 via-cyan-500/40 to-transparent" />
          </div>

          <div className="space-y-5">
            {journey.map((item, index) => {
              const tagStyle = tagColors[item.tag] || "text-brand-200 bg-brand-500/10 ring-brand-500/20";
              return (
                <motion.div
                  key={item.period}
                  initial={{ x: 24, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative flex gap-4"
                >
                  {/* Timeline dot */}
                  <div className="mt-2 hidden flex-col items-center md:flex">
                    <div className="timeline-dot-pulse h-3.5 w-3.5 rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
                  </div>

                  {/* Card */}
                  <div className="glass-card group flex-1 rounded-2xl p-4 transition-all duration-500 hover:border-brand-500/20 hover:shadow-[0_0_35px_rgba(129,140,248,0.1)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                        {item.period}
                      </p>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ${tagStyle}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] font-bold text-slate-100">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
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
