// CV

import { FileDown, ExternalLink } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";

const CV_PATH = "/CV_GABRIEL_STOYKO_MARTINEZ_GARCIA.pdf";

export default function CvSection() {
  return (
    <section className="space-y-4" id="cv">
      <SectionTitle>Currículum</SectionTitle>
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-sm text-slate-200 shadow-md shadow-black/40 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-slate-100">
            CV de Gabriel Stoyko Martínez García
          </p>
          <p className="text-xs text-slate-400">
            Versión en PDF lista para ver o descargar. Resume mi experiencia
            como desarrollador Full Stack, proyectos como KiosTec y QR Universe
            y habilidades técnicas.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={CV_PATH}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:brightness-110"
          >
            <ExternalLink size={14} />
            Ver CV
          </a>
          <a
            href={CV_PATH}
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-xs font-medium text-slate-200 hover:border-brand-400/80"
          >
            <FileDown size={14} />
            Descargar PDF
          </a>
        </div>
      </div>
    </section>
  );
}
