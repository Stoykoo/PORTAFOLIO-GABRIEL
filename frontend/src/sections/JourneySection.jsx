// JOURNEY

import { motion } from "framer-motion";
import { journey } from "../data/personal";
import SectionTitle from "../components/common/SectionTitle";

export default function JourneySection() {
  return (
    <section className="space-y-4">
      <SectionTitle id="journey">Mi camino como desarrollador</SectionTitle>

      <div className="relative mt-2 grid gap-6 md:grid-cols-[0.7fr,1.3fr]">
        <div className="hidden text-xs text-slate-400 md:block">
          <p>
            Un recorrido desde los primeros programas en preparatoria hasta
            proyectos completos en producción, siempre aprendiendo y
            construyendo cosas útiles.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[10px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-brand-500/60 via-slate-600/60 to-transparent md:block" />

          <div className="space-y-5">
            {journey.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ x: 24, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative flex gap-3"
              >
                <div className="mt-1 hidden flex-col items-center md:flex">
                  <div className="h-3 w-3 rounded-full bg-brand-500 shadow-[0_0_16px_rgba(129,140,248,0.9)]" />
                </div>

                <div className="flex-1 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-3 py-3 text-xs text-slate-200 shadow-md shadow-black/40 backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {item.period}
                    </p>
                    <span className="inline-flex items-center rounded-full bg-slate-800/80 px-2 py-[2px] text-[10px] font-medium text-brand-200">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-100">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
