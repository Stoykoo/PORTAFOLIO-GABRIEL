// ORBITAS TECNOLOGIA

import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const orbitIcons = [
  { icon: SiReact, size: 20, delay: 0 },
  { icon: SiNodedotjs, size: 18, delay: 0.2 },
  { icon: SiPostgresql, size: 18, delay: 0.4 },
  { icon: SiTailwindcss, size: 18, delay: 0.6 },
];

export default function TechOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative h-48 w-48 md:h-56 md:w-56">
        {/* órbita principal */}
        <div className="absolute inset-0 rounded-full border border-brand-500/20 blur-[0.3px]" />

        {orbitIcons.map(({ icon: Icon, size, delay }, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            style={{ originX: "50%", originY: "50%" }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
              delay,
            }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/90 shadow-[0_0_16px_rgba(129,140,248,0.8)] ring-1 ring-brand-500/70">
                <Icon size={size} className="text-brand-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
