// ══════════════════════════════════════════════════════════════
// SCENE CONFIG — "Obsidian Aurora" palette & 3D scene parameters
// ══════════════════════════════════════════════════════════════

export const palette = {
  // Base
  black: "#050505",
  darkBg: "#0a0a0f",
  surface: "#111118",
  surfaceLight: "#1a1a25",

  // Primary — Electric Violet
  violet: "#a855f7",
  violetLight: "#c084fc",
  violetDark: "#7c3aed",
  violetGlow: "rgba(168, 85, 247, 0.4)",

  // Secondary — Cyber Teal
  teal: "#14b8a6",
  tealLight: "#2dd4bf",
  tealGlow: "rgba(20, 184, 166, 0.4)",

  // Accent — Rose Gold
  rose: "#f472b6",
  roseGlow: "rgba(244, 114, 182, 0.3)",

  // Warm — Amber
  amber: "#fbbf24",
  amberGlow: "rgba(251, 191, 36, 0.3)",

  // Text
  textPrimary: "#f1f5f9",
  textSecondary: "#94a3b8",
  textMuted: "#64748b",
  textDim: "#475569",
};

export const scene = {
  // Particles
  particleCount: 800,
  particleSize: 0.015,
  particleSpread: 25,
  particleSpeed: 0.0003,

  // Bloom
  bloomIntensity: 1.2,
  bloomThreshold: 0.8,
  bloomSmoothing: 0.4,

  // Camera
  cameraFov: 60,
  cameraPosition: [0, 0, 12],

  // Lighting
  ambientIntensity: 0.15,
  pointLightIntensity: 2,

  // Hero sphere
  heroSphereRadius: 2.2,
  heroSphereDistort: 0.35,
  heroSphereSpeed: 2,

  // Scroll
  smoothScrollLerp: 0.08,
  smoothScrollDuration: 1.2,
};

export const gradients = {
  primary: "linear-gradient(135deg, #a855f7, #14b8a6)",
  warm: "linear-gradient(135deg, #c084fc, #f472b6, #fbbf24)",
  aurora: "linear-gradient(135deg, #a855f7, #14b8a6, #f472b6)",
  surface: "linear-gradient(180deg, #0a0a0f 0%, #050505 100%)",
};
