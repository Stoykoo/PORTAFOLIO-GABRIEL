// ORBITAS TECNOLOGÍA — Mejorado con múltiples anillos, glow y counter-rotation

import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiGit,
} from "react-icons/si";

const innerOrbit = [
  { icon: SiReact, size: 20, color: "text-cyan-400" },
  { icon: SiNodedotjs, size: 18, color: "text-emerald-400" },
  { icon: SiPostgresql, size: 18, color: "text-blue-400" },
];

const outerOrbit = [
  { icon: SiTailwindcss, size: 16, color: "text-sky-400" },
  { icon: SiJavascript, size: 16, color: "text-yellow-400" },
  { icon: SiGit, size: 16, color: "text-orange-400" },
];

export default function TechOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative h-52 w-52 md:h-64 md:w-64">
        {/* Glow central */}
        <div className="absolute inset-[30%] rounded-full bg-brand-500/10 blur-2xl" />

        {/* Anillo exterior — pulsante */}
        <div
          className="absolute inset-0 rounded-full border border-brand-500/10"
          style={{ animation: "orbit-pulse 4s ease-in-out infinite" }}
        />

        {/* Anillo medio */}
        <div className="absolute inset-[18%] rounded-full border border-cyan-500/10" />

        {/* Anillo interior */}
        <div className="absolute inset-[36%] rounded-full border border-emerald-500/10" />

        {/* Órbita exterior — rotación lenta */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
        >
          {outerOrbit.map(({ icon: Icon, size, color }, idx) => {
            const angle = (360 / outerOrbit.length) * idx;
            return (
              <div
                key={idx}
                className="absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/90 shadow-[0_0_20px_rgba(129,140,248,0.4)] ring-1 ring-slate-700/50"
                  >
                    <Icon size={size} className={color} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Órbita interior — rotación opuesta */}
        <motion.div
          className="absolute inset-[18%]"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {innerOrbit.map(({ icon: Icon, size, color }, idx) => {
            const angle = (360 / innerOrbit.length) * idx;
            return (
              <div
                key={idx}
                className="absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/90 shadow-[0_0_24px_rgba(99,102,241,0.6)] ring-1 ring-brand-500/50"
                  >
                    <Icon size={size} className={color} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Centro — punto de anclaje */}
        <div className="absolute inset-[45%] rounded-full bg-brand-500/20 shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
      </div>
    </div>
  );
}
