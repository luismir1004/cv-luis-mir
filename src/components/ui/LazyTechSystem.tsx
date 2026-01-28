'use client';

/**
 * 🪐 Lazy TechSystem
 * 
 * Wrapper con carga diferida para el componente SolarSystem.
 * Reduce el bundle inicial excluyendo Three.js/R3F hasta que sea necesario.
 */

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Skeleton, SkeletonText } from './Skeleton';

// Loading fallback con skeleton
const LoadingFallback = () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden">
            {/* Animated orbit circles */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-slate-300/30 dark:border-slate-600/30 animate-pulse" />
                <div className="absolute w-48 h-48 rounded-full border border-slate-300/20 dark:border-slate-600/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute w-64 h-64 rounded-full border border-slate-300/10 dark:border-slate-600/10 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            {/* Center sun */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Skeleton className="w-12 h-12 rounded-full" />
            </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
            <SkeletonText lines={2} />
        </div>
    </div>
);

// Dynamic import del componente pesado
const SolarSystemDynamic = dynamic(
    () => import('./TechSystem/SolarSystem').then(mod => mod.SolarSystem),
    {
        ssr: false,
        loading: LoadingFallback,
    }
);

/**
 * Wrapper lazy loading para TechSystem (SolarSystem)
 */
export const LazyTechSystem = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <SolarSystemDynamic />
        </Suspense>
    );
};

export default LazyTechSystem;
