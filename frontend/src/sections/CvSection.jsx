// CV — Sección premium

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
        className="gradient-border"
      >
        <div className="gradient-border-inner flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-cyan-500/20 text-brand-400">
              <FileText size={24} />
            </div>
            <div className="space-y-1">
              <p className="text-[15px] font-bold text-slate-50">
                CV de Gabriel Stoyko Martínez García
              </p>
              <p className="text-xs leading-relaxed text-slate-400">
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
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-cyan-500 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(99,102,241,0.7)] hover:scale-[1.02]"
            >
              <ExternalLink size={14} />
              Ver CV
            </a>
            <a
              href={CV_PATH}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-5 py-2.5 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-brand-400/60 hover:text-brand-200"
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
