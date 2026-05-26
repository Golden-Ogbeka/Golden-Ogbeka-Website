import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAppSelector } from '../../../app/hooks';

function WireframeGrid() {
  const gridRef = useRef<any>();
  const { isDark } = useAppSelector((state) => state.darkMode);

  // Slowly rotate the grid to give an "antigravity" floating feel
  useFrame((state, delta) => {
    if (gridRef.current) {
      gridRef.current.rotation.x += delta * 0.05;
      gridRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <mesh ref={gridRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      {/* A large icosahedron gives a nice abstract wireframe look */}
      <icosahedronGeometry args={[10, 2]} />
      <meshBasicMaterial 
        color={isDark ? "#ffffff" : "#000000"} 
        wireframe={true} 
        transparent={true} 
        opacity={isDark ? 0.05 : 0.03} 
      />
    </mesh>
  );
}

export default function AntigravityCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <WireframeGrid />
      </Canvas>
    </div>
  );
}
