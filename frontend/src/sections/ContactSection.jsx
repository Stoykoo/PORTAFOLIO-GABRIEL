// ══════════════════════════════════════════════════════════════
// CONTACTO — Functional form (Web3Forms) with 3D palette
// ══════════════════════════════════════════════════════════════

import { useState } from "react";
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
    color: "hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    username: "/Stoykoo",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: SiLinkedin,
    color: "hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    username: "/Gabriel Stoyko",
  },
  {
    label: "Discord",
    href: `https://discord.com/users/${personalInfo.discord}`,
    icon: SiDiscord,
    color: "hover:text-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    username: personalInfo.discord,
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const formData = new FormData(e.target);
    formData.append("access_key", "51410d31-8472-4b5c-a01b-096121ccdfbd");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ loading: false, success: true, error: null });
        e.target.reset();
        setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error(data.message || "Error al enviar el mensaje");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section className="space-y-6" id="contact">
      <SectionTitle>Contacto</SectionTitle>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Info */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white/90 sm:text-2xl lg:text-3xl">
              ¿Hablamos de tu próximo{" "}
              <span className="text-gradient-aurora">proyecto</span>?
            </h3>
            <p className="max-w-md text-[15px] leading-relaxed text-white/40">
              Estoy abierto a trabajar en sistemas basados en datos, paneles
              administrativos, plataformas web modernas y proyectos donde haga
              falta un Full Stack que cuide los detalles.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex w-full items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.04] sm:w-fit"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/20">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  Email directo
                </p>
                <p className="text-sm font-semibold text-white/70">
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
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-white/[0.1] ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-6 sm:p-8"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/30">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-white/80 outline-none transition-all placeholder:text-white/20 focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/30">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-white/80 outline-none transition-all placeholder:text-white/20 focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/40"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/30">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="¿En qué puedo ayudarte?"
                className="w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-white/80 outline-none transition-all placeholder:text-white/20 focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/40"
              ></textarea>
            </div>

            {status.error && (
              <p className="text-xs font-medium text-rose-400">
                ⚠️ {status.error}
              </p>
            )}

            {status.success && (
              <p className="text-xs font-bold text-emerald-400">
                ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
              </p>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className={`group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 py-4 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-purple-900/40 hover:scale-[0.99] active:scale-[0.97] ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status.loading ? "Enviando..." : "Enviar Mensaje"}
              {!status.loading && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
