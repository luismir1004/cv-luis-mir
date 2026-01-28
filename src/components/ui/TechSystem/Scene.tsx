'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles, PerspectiveCamera } from '@react-three/drei';
import { useTheme } from '../../../hooks/useTheme'; // Adjust path as needed
import { SolarSystem } from './SolarSystem';
import { Suspense } from 'react';

export const Scene = () => {
    const { isDark } = useTheme();

    return (
        <Canvas className="w-full h-full bg-transparent">
            <PerspectiveCamera makeDefault position={[0, 20, 45]} fov={55} />

            {/* Ambient Environment */}
            <ambientLight intensity={isDark ? 0.3 : 0.8} />
            <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" distance={50} /> {/* Sun glow */}
            <directionalLight position={[10, 10, 5]} intensity={1} />

            {/* Background */}
            <color attach="background" args={[isDark ? '#020617' : '#f8fafc']} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={200} scale={30} size={2} speed={0.4} opacity={0.5} color={isDark ? "#ffffff" : "#64748b"} />

            <Suspense fallback={null}>
                <group rotation={[0.2, 0, 0]}> {/* Slight tilt for better view */}
                    <SolarSystem />
                </group>
            </Suspense>

            <OrbitControls
                enablePan={false}
                maxDistance={80}
                minDistance={20}
                autoRotate
                autoRotateSpeed={0.5}
            />
        </Canvas>
    );
};
