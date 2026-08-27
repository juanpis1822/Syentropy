import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Glass material properties for the dark premium look
const glassMaterialProps = {
  roughness: 0.1,
  transmission: 1, // glass-like
  thickness: 1.5,
  envMapIntensity: 2,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  ior: 1.5,
  color: '#ffffff'
};

function AnimatedShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Abstract Shape */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial {...glassMaterialProps} />
        </mesh>
      </Float>

      {/* Floating Torus */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-2.5, 1, -1]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshPhysicalMaterial {...glassMaterialProps} color="#dff2ff" />
        </mesh>
      </Float>

      {/* Floating Sphere */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={2.5}>
        <mesh position={[2.5, -1, 1]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshPhysicalMaterial {...glassMaterialProps} color="#c4d7ff" />
        </mesh>
      </Float>
      
      {/* Small floating diamond/octahedron */}
      <Float speed={2.5} rotationIntensity={2.5} floatIntensity={1}>
        <mesh position={[0, 2.5, -2]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshPhysicalMaterial {...glassMaterialProps} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        
        {/* Cyan Brand Light */}
        <pointLight position={[-3, 2, 2]} color="#15c6e6" intensity={20} distance={10} />
        
        {/* Purple/Fuchsia Accent Light */}
        <pointLight position={[3, -2, 2]} color="#c026d3" intensity={20} distance={10} />
        
        {/* Deep Blue Fill Light */}
        <pointLight position={[0, -3, -2]} color="#2b58a1" intensity={15} distance={10} />

        <AnimatedShapes />
        
        {/* Subtle environment reflection for the glass to look good */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
