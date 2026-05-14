// CONTACTO — CTA Premium

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";
import SectionTitle from "../components/common/SectionTitle";
import { personalInfo } from "../data/personal";

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: SiGithub,
    color: "hover:text-slate-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    username: "/Stoykoo",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: SiLinkedin,
    color: "hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]",
    username: "/Gabriel Stoyko",
  },
  {
    label: "Discord",
    href: `https://discord.com/users/${personalInfo.discord}`,
    icon: SiDiscord,
    color: "hover:text-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]",
    username: personalInfo.discord,
  },
];

export default function ContactSection() {
  return (
    <section className="space-y-6" id="contact">
      <SectionTitle>Contacto</SectionTitle>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Info y Redes */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-50 sm:text-3xl">
              ¿Hablamos de tu próximo{" "}
              <span className="text-gradient">proyecto</span>?
            </h3>
            <p className="max-w-md text-[15px] leading-relaxed text-slate-400">
              Estoy abierto a trabajar en sistemas basados en datos, paneles
              administrativos, plataformas web modernas y proyectos donde haga
              falta un Full Stack que cuide los detalles.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex w-fit items-center gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 transition-all duration-300 hover:border-brand-500/50 hover:bg-slate-900/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Email directo
                </p>
                <p className="text-sm font-semibold text-slate-200">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.label}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800/60 bg-slate-900/40 text-slate-400 transition-all duration-300 hover:border-slate-600/80 ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-6 sm:p-8"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-slate-800/60 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 outline-none transition-all focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-slate-800/60 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 outline-none transition-all focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Mensaje
              </label>
              <textarea
                rows="4"
                placeholder="¿En qué puedo ayudarte?"
                className="w-full resize-none rounded-xl border border-slate-800/60 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 outline-none transition-all focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 py-4 text-sm font-bold text-white shadow-lg shadow-brand-900/20 transition-all hover:shadow-brand-900/40 hover:scale-[0.99] active:scale-[0.97]"
            >
              Enviar Mensaje
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
