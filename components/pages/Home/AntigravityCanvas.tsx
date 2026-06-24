import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';

// Suppress THREE.Clock deprecation warning in dev (Three.js 0.162+, R3F 8.x still uses Clock)
const warn = console.warn;
console.warn = (...args: any[]) => {
  if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
  warn.apply(console, args);
};

function checkWebGLSupport() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  return !!gl;
}

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
        color={isDark ? '#ffffff' : '#000000'}
        wireframe={true}
        transparent={true}
        opacity={isDark ? 0.05 : 0.03}
      />
    </mesh>
  );
}

export default function AntigravityCanvas() {
  const [isMounted, setIsMounted] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setSupportsWebGL(checkWebGLSupport());
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-0 pointer-events-none overflow-hidden'>
      {supportsWebGL ? (
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <WireframeGrid />
        </Canvas>
      ) : (
        <div className='flex h-full w-full items-center justify-center text-sm text-slate-500 text-center dark:text-slate-400'>
          WebGL enabled browser required to view the website properly. Please use a modern
          and up-to-date browser for the best experience.
        </div>
      )}
    </div>
  );
}
