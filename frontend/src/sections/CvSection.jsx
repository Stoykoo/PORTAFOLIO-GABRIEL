// ══════════════════════════════════════════════════════════════
// CV — Premium with aurora border
// ══════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import { FileDown, ExternalLink, FileText } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";

const CV_PATH = "/CV_GABRIEL_STOYKO_MARTINEZ_GARCIA.pdf";

export default function CvSection() {
  return (
    <section className="space-y-6" id="cv">
      <SectionTitle>Currículum</SectionTitle>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="group relative"
      >
        {/* Aurora border */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500/30 via-teal-500/20 to-rose-500/30 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative rounded-3xl bg-black/70 backdrop-blur-xl flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 text-purple-400">
              <FileText size={24} />
            </div>
            <div className="space-y-1">
              <p className="text-[15px] font-bold text-white/90">
                CV de Gabriel Stoyko Martínez García
              </p>
              <p className="text-xs leading-relaxed text-white/40">
                Versión en PDF lista para ver o descargar. Resume mi experiencia
                como desarrollador Full Stack, proyectos como KiosTec y QR Universe
                y habilidades técnicas.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CV_PATH}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:scale-[1.02]"
            >
              <ExternalLink size={14} />
              Ver CV
            </a>
            <a
              href={CV_PATH}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-xs font-medium text-white/60 transition-all duration-300 hover:border-purple-400/40 hover:text-purple-200"
            >
              <FileDown size={14} />
              Descargar PDF
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
