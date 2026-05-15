// ══════════════════════════════════════════════════════════════
// HERO 3D — Immersive with distorted sphere + floating text
// ══════════════════════════════════════════════════════════════

import { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sphere } from "@react-three/drei";
import { Mail, ArrowDownCircle, Sparkles } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { personalInfo } from "../data/personal";
import { palette, scene } from "../config/scene";

const mainStackIcons = [
  { Icon: SiReact, color: "text-cyan-400", label: "React" },
  { Icon: SiNodedotjs, color: "text-emerald-400", label: "Node.js" },
  { Icon: SiPostgresql, color: "text-blue-400", label: "PostgreSQL" },
  { Icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind" },
  { Icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
];

function HeroSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[scene.heroSphereRadius, 128, 128]}>
        <MeshDistortMaterial
          color={palette.violet}
          emissive={palette.violetDark}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={scene.heroSphereDistort}
          speed={scene.heroSphereSpeed}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function HeroCanvas() {
  return (
    <Canvas
      camera={{ fov: 50, position: [0, 0, 6] }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "auto" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 3, 5]} intensity={3} color={palette.violet} />
      <pointLight position={[-3, -2, 4]} intensity={1.5} color={palette.teal} />
      <pointLight position={[0, 5, -3]} intensity={1} color={palette.rose} />
      <HeroSphere />
    </Canvas>
  );
}

export default function HeroSection() {
  return (
    <section className="grid min-h-[85vh] flex-1 gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
      <div className="space-y-8">
        {/* Badge */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-purple-300/80 shadow-lg shadow-purple-900/20 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
          Disponible para colaborar
        </motion.p>

        {/* Title */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="space-y-4"
        >
          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Ingeniero en Sistemas{" "}
            <span className="text-gradient-aurora">
              Full Stack Developer
            </span>
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-white/60">
            Desarrollador versátil enfocado en resolver problemas de negocio y
            convertir datos complejos en productos digitales elegantes,
            mantenibles y listos para producción.
          </p>
          <p className="max-w-xl text-sm text-white/40">
            Experiencia construyendo sistemas basados en datos, dashboards y
            plataformas completas como{" "}
            <span className="font-medium text-purple-300/80">KiosTec</span> y{" "}
            <span className="font-medium text-teal-300/80">QR Universe</span>,
            del backend a la interfaz.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:scale-[1.02]"
          >
            <Mail size={16} />
            Contáctame
            <Sparkles size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/30 hover:text-purple-200 hover:bg-white/[0.06]"
          >
            <ArrowDownCircle size={16} />
            Ver más de mí
          </a>
        </motion.div>

        {/* Stack icons */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/20">
            Stack principal
          </p>
          <div className="flex flex-wrap gap-2">
            {mainStackIcons.map(({ Icon, color, label }) => (
              <div
                key={label}
                title={label}
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:ring-purple-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-110"
              >
                <Icon className={`${color} transition-transform duration-300 group-hover:scale-110`} size={18} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── 3D Sphere ── */}
      <motion.aside
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative aspect-square w-full max-w-md mx-auto"
      >
        <HeroCanvas />

        {/* Glow ring behind sphere */}
        <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-purple-600/10 via-teal-500/5 to-rose-400/5 blur-3xl pointer-events-none" />
      </motion.aside>
    </section>
  );
}
