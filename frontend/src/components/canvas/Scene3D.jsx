// ══════════════════════════════════════════════════════════════
// SCENE 3D — Full immersive background canvas
// ══════════════════════════════════════════════════════════════

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import FloatingParticles from "./FloatingParticles";
import { scene, palette } from "../../config/scene";

function Lights() {
  return (
    <>
      <ambientLight intensity={scene.ambientIntensity} color="#ffffff" />
      <pointLight
        position={[8, 5, 10]}
        intensity={scene.pointLightIntensity}
        color={palette.violet}
        distance={40}
      />
      <pointLight
        position={[-8, -5, 8]}
        intensity={scene.pointLightIntensity * 0.6}
        color={palette.teal}
        distance={35}
      />
      <pointLight
        position={[0, 10, -5]}
        intensity={scene.pointLightIntensity * 0.4}
        color={palette.rose}
        distance={30}
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{
          fov: scene.cameraFov,
          position: scene.cameraPosition,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Lights />
          <FloatingParticles />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
