// CHRISTMAS OVERLAY

import { useMemo } from "react";

export default function ChristmasOverlay() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2,
        duration: 10 + Math.random() * 10,
        delay: -Math.random() * 20,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    []
  );

  const lights = [
    "bg-emerald-400",
    "bg-red-400",
    "bg-yellow-300",
    "bg-sky-400",
    "bg-pink-400",
    "bg-amber-300",
    "bg-lime-300",
  ];

  return (
    <>
      {/* Luces navideñas en la parte superior */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-10 flex justify-center">
        <div className="relative mt-3 flex gap-4">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-500/60 to-transparent" />
          {Array.from({ length: 14 }).map((_, i) => {
            const color = lights[i % lights.length];
            return (
              <div key={i} className="flex flex-col items-center">
                <div className="h-3 w-px bg-slate-500/60" />
                <div
                  className={`h-3 w-3 rounded-full ${color} shadow-[0_0_12px_rgba(248,250,252,0.9)] animate-pulse`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Nieve suave */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {flakes.map((f) => (
          <span
            key={f.id}
            className="snowflake pointer-events-none absolute rounded-full bg-white"
            style={{
              left: `${f.left}%`,
              width: `${f.size}px`,
              height: `${f.size}px`,
              opacity: f.opacity,
              animationDuration: `${f.duration}s`,
              animationDelay: `${f.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
