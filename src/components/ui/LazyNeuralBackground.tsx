'use client';

/**
 * 🌌 Lazy NeuralBackground
 * 
 * Wrapper con carga diferida para el componente NeuralBackground.
 * Esto reduce el bundle inicial al no incluir Three.js hasta que sea necesario.
 */

import dynamic from 'next/dynamic';
import { Suspense, ComponentType } from 'react';

// Skeleton/placeholder mientras carga
const LoadingFallback = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-stone-50 to-indigo-50/30 dark:from-slate-950 dark:via-stone-950 dark:to-indigo-950/30" />
    </div>
);

// Dynamic import con configración optimizada
const NeuralBackgroundDynamic = dynamic<Record<string, never>>(
    () => import('./NeuralBackground').then(mod => mod.NeuralBackground as ComponentType<Record<string, never>>),
    {
        ssr: false,
        loading: LoadingFallback,
    }
);

/**
 * Wrapper para NeuralBackground con lazy loading
 * 
 * @example
 * import { LazyNeuralBackground } from './LazyNeuralBackground';
 * 
 * const MyComponent = () => (
 *   <div>
 *     <LazyNeuralBackground />
 *     {/* content *\/}
 *   </div>
 * );
 */
export const LazyNeuralBackground = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <NeuralBackgroundDynamic />
        </Suspense>
    );
};

export default LazyNeuralBackground;
