'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { TechOrbit } from './data';
import { useTheme } from '../../../hooks/useTheme';

export const Planet = ({ data, lang }: { data: TechOrbit, lang: 'es' | 'en' }) => {
    const groupRef = useRef<THREE.Group>(null);
    const planetRef = useRef<THREE.Mesh>(null);

    const [hovered, setHovered] = useState(false);

    // Random start angle so they aren't all aligned
    const startAngle = useMemo(() => Math.random() * Math.PI * 2, []);

    // Satellites Logic
    const satellites = useMemo(() => {
        return data.items.map((item, i) => {
            const angle = (i / data.items.length) * Math.PI * 2;
            const radius = data.size * 3 + (Math.random() * 0.5); // Distance from planet
            return { ...item, angle, radius, speed: (Math.random() * 0.5 + 0.5) * (i % 2 === 0 ? 1 : -1) };
        });
    }, [data]);

    useFrame((_, delta) => {
        // Orbit around center
        if (groupRef.current) {
            // Speed slows down if hovered
            const speed = hovered ? data.speed * 0.1 : data.speed;
            groupRef.current.rotation.y += delta * 0.2 * speed;
        }

        // Planet rotation
        if (planetRef.current) {
            planetRef.current.rotation.y += delta;
        }
    });

    return (
        <group rotation={[0, startAngle, 0]}> {/* Initial Offset */}
            <group ref={groupRef}>
                <group position={[data.distance, 0, 0]}>

                    {/* ORBIT TRAIL (Visual Ring) for the planet itself around sun */}
                    {/* Note: Standard ring geometry is easier than Trail for full circles, but let's try a simple visual guide */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-data.distance, 0, 0]}>
                        <ringGeometry args={[data.distance - 0.05, data.distance + 0.05, 64]} />
                        <meshBasicMaterial color={data.color} opacity={0.15} transparent side={THREE.DoubleSide} />
                    </mesh>

                    {/* THE PLANET */}
                    <mesh
                        ref={planetRef}
                        onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
                        onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
                    >
                        <sphereGeometry args={[data.size, 32, 32]} />
                        <meshStandardMaterial
                            color={data.color}
                            metalness={0.4}
                            roughness={0.7}
                            emissive={data.color}
                            emissiveIntensity={hovered ? 0.8 : 0.2}
                        />
                    </mesh>

                    {/* PLANET LABEL */}
                    <Html position={[0, -data.size - 1.5, 0]} center distanceFactor={12} zIndexRange={[50, 0]}>
                        <div className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 ${hovered
                            ? 'bg-slate-900/80 text-white border border-white/20 scale-110 shadow-lg'
                            : 'text-slate-500 bg-transparent'
                            }`}
                            style={{ color: hovered ? data.color : undefined }}
                        >
                            {data.name[lang]}
                        </div>
                    </Html>

                    {/* SATELLITES (Techs) */}
                    {satellites.map((sat) => (
                        <Satellite key={sat.name} sat={sat} color={data.color} parentHovered={hovered} />
                    ))}
                </group>
            </group>
        </group>
    );
};

// Sub-component for individual tech satellites
const Satellite = ({ sat, color, parentHovered }: { sat: any, color: string, parentHovered: boolean }) => {
    const ref = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);
    const { isDark } = useTheme();

    useFrame((state, delta) => {
        if (ref.current) {
            // Orbit around planet
            const speed = parentHovered ? 0.2 : 1; // Slow down when looking at planet
            ref.current.rotation.y += delta * sat.speed * speed;
            // Face camera
            ref.current.children[0].lookAt(state.camera.position);
        }
    });

    return (
        <group ref={ref} rotation={[0, sat.angle, 0]}>
            <group position={[sat.radius, 0, 0]}>
                <Html center transform distanceFactor={8} zIndexRange={[100, 0]}>
                    <div
                        className={`transition-all duration-300 px-2 py-0.5 rounded cursor-pointer select-none whitespace-nowrap
                            ${hovered || parentHovered ? 'opacity-100 scale-110' : 'opacity-60 scale-100 grayscale hover:grayscale-0'}
                        `}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <span
                            className="font-mono text-xs font-semibold"
                            style={{
                                color: hovered ? '#fff' : (isDark ? '#e2e8f0' : '#334155'),
                                textShadow: hovered ? `0 0 10px ${color}` : 'none',
                                background: hovered ? color : 'transparent',
                                padding: hovered ? '2px 6px' : '0',
                                borderRadius: '4px'
                            }}
                        >
                            {sat.name}
                        </span>
                    </div>
                </Html>
            </group>
        </group>
    );
};
