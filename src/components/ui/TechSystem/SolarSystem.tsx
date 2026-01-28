'use client';

import { useRef } from 'react';
import { useLang } from '../../../hooks/useLang';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useTheme } from '../../../hooks/useTheme';
import { COSMIC_DATA } from './data';
import { Planet } from './Planet';
import * as THREE from 'three';

export const SolarSystem = () => {
    const starRef = useRef<THREE.Group>(null);
    const { isDark } = useTheme();
    const { lang } = useLang();

    useFrame((_, delta) => {
        if (starRef.current) {
            starRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <group>
            {/* CENTRAL STAR: PRODIGY / FULL STACK */}
            <group ref={starRef}>
                <mesh>
                    <sphereGeometry args={[4, 32, 32]} />
                    <meshStandardMaterial
                        emissive={isDark ? "#F59E0B" : "#D97706"}
                        emissiveIntensity={2}
                        color={isDark ? "#F59E0B" : "#D97706"}
                        toneMapped={false}
                    />
                    <pointLight intensity={1} distance={100} decay={2} color="#F59E0B" />
                </mesh>

                {/* Star Label */}
                <Html position={[0, -5.5, 0]} center distanceFactor={15} zIndexRange={[100, 0]}>
                    <div className="pointer-events-none select-none text-center whitespace-nowrap">
                        <div className="font-bold text-sm tracking-widest text-amber-500 bg-amber-950/30 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                            LUIS MIR
                        </div>
                        <div className="mt-1 text-[10px] text-amber-300 font-light tracking-wider opacity-80">
                            FULL STACK DEV
                        </div>
                    </div>
                </Html>
            </group>

            {/* Planets (Categories) */}
            {COSMIC_DATA.map((orbit, index) => (
                <Planet key={orbit.name[lang]} data={orbit} lang={lang} />
            ))}
        </group>
    );
};
