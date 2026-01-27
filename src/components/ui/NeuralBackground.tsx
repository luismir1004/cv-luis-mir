import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { useTheme } from '../../hooks/useTheme';
import { useUI } from '../../context/UIContext';

export const NeuralBackground = () => {
    const { isDark } = useTheme();
    const { mood } = useUI();

    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60 transition-opacity duration-1000">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <NeuralNetwork isDark={isDark} mood={mood} />
            </Canvas>
        </div>
    );
};

function NeuralNetwork({ isDark, mood }: { isDark: boolean; mood: string }) {
    const ref = useRef<any>(null);
    // Generate random points in a sphere (5000 points * 3 coordinates)
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }) as Float32Array, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Generative UI Motion Logic
            let speedX = 10;
            let speedY = 15;

            if (mood === 'react') {
                speedX = 5; // Faster spin
                speedY = 20;
            } else if (mood === 'ai') {
                speedX = 20;
                speedY = 5; // Vertical flow logic simulation
            }

            ref.current.rotation.x -= delta / speedX;
            ref.current.rotation.y -= delta / speedY;

            // Subtle mouse interaction
            const { mouse } = state;
            ref.current.rotation.x += mouse.y * 0.005;
            ref.current.rotation.y += mouse.x * 0.005;
        }
    });

    // Workaround for R3F type inference
    const Group = 'group' as any;

    // Generative UI Color Logic
    let particleColor = isDark ? "#818cf8" : "#4f46e5"; // Default Indigo
    if (mood === 'react') particleColor = "#22d3ee"; // Cyan
    if (mood === 'ai') particleColor = "#10b981"; // Emerald
    if (mood === 'data') particleColor = "#f472b6"; // Pink/Magenta

    return (
        <Group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={particleColor}
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </Group>
    );
}
