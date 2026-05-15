// ══════════════════════════════════════════════════════════════
// FLOATING PARTICLES — Interactive particle field
// ══════════════════════════════════════════════════════════════

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scene, palette } from "../../config/scene";

export default function FloatingParticles() {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  const { count, positions, colors, sizes } = useMemo(() => {
    const count = scene.particleCount;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorOptions = [
      new THREE.Color(palette.violet),
      new THREE.Color(palette.teal),
      new THREE.Color(palette.rose),
      new THREE.Color(palette.amber),
      new THREE.Color(palette.textMuted),
    ];

    for (let i = 0; i < count; i++) {
      // Spread particles in a large sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = scene.particleSpread * (0.3 + Math.random() * 0.7);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Random color from palette
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Random sizes
      sizes[i] = scene.particleSize * (0.5 + Math.random());
    }

    return { count, positions, colors, sizes };
  }, []);

  // Handle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    // Slow rotation + mouse parallax
    meshRef.current.rotation.y = time * scene.particleSpeed * 60 + mouseRef.current.x * 0.05;
    meshRef.current.rotation.x = mouseRef.current.y * 0.03;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={scene.particleSize}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
