// CONTACTO

import { Mail } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";
import { personalInfo } from "../data/personal";

export default function ContactSection() {
  return (
    <section className="space-y-4" id="contact">
      <SectionTitle>Contacto</SectionTitle>
      <div className="flex flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-slate-200">
            ¿Te gustaría platicar sobre un proyecto, colaboración u oportunidad
            laboral?
          </p>
          <p className="text-xs text-slate-400">
            Estoy abierto a trabajar en sistemas basados en datos, paneles
            administrativos, plataformas web modernas y proyectos donde haga
            falta un Full Stack que cuide los detalles.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-xs text-slate-200">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2 font-medium hover:border-brand-400"
          >
            <Mail size={14} />
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-brand-300"
          >
            GitHub /Stoykoo
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-brand-300"
          >
            LinkedIn /Gabriel Stoyko
          </a>
        </div>
      </div>
    </section>
  );
}
