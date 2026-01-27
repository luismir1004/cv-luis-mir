import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import { useTheme } from '../../hooks/useTheme';

// Custom hook to get scroll velocity would act here, 
// strictly simplified for stability we will use a time-based or mouse-based distortion for now,
// or hook into Lenis if accessible.

export const SceneEffects = () => {
    const { isDark } = useTheme();
    const aberrationRef = useRef<any>(null);

    // Dynamic animation loop
    useFrame((state) => {
        if (aberrationRef.current) {
            // Oscillate aberration slightly for "alive" feel
            const time = state.clock.getElapsedTime();
            const baseOffset = 0.002;
            const oscillation = Math.sin(time) * 0.001;

            // In a full implementation, we would bind this to lenis.velocity
            // For now, we use a subtle breathing effect
            aberrationRef.current.offset.set(baseOffset + oscillation, baseOffset + oscillation);
        }
    });

    return (
        <EffectComposer disableNormalPass>
            <Bloom
                intensity={isDark ? 1.5 : 0.5}
                luminanceThreshold={isDark ? 0.2 : 0.8}
                luminanceSmoothing={0.9}
                mipmapBlur
            />
            <ChromaticAberration
                ref={aberrationRef}
                offset={new Vector2(0.002, 0.002)}
            />
            <Noise opacity={0.02} />
        </EffectComposer>
    );
};
