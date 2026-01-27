import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface SceneProps {
    color: string;
}

const Mesh = 'mesh' as any;
const IcosahedronGeometry = 'icosahedronGeometry' as any;
const AmbientLight = 'ambientLight' as any;
const DirectionalLight = 'directionalLight' as any;

const Scene = ({ color }: SceneProps) => {
    const mesh = useRef<any>(null);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Mesh ref={mesh} scale={2.2}>
                <IcosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color={color}
                    speed={2}
                    distort={0.4}
                    radius={1}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Mesh>
        </Float>
    );
};

export const Project3D = ({ color }: { color: string }) => {
    const { isDark } = useTheme();

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] group-hover:opacity-20 transition-opacity duration-700 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                <AmbientLight intensity={isDark ? 0.8 : 1.2} />
                <DirectionalLight position={[10, 10, 5]} intensity={2} />
                <Scene color={color} />
            </Canvas>
        </div>
    );
};
