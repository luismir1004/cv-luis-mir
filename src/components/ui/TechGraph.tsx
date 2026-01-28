'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./TechSystem/Scene').then(mod => mod.Scene), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-slate-50 dark:bg-slate-950 rounded-xl">
            <span className="text-slate-400 animate-pulse">Initializing System...</span>
        </div>
    )
});

export const TechGraph = () => {
    return (
        <div className="w-full h-full min-h-[500px] relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-950">
            <Scene />

            {/* Overlay UI */}
            <div className="absolute bottom-4 left-6 pointer-events-none select-none">
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Tech Ecosystem</h3>
                    <p className="text-xs text-slate-500">Interactive 3D Visualization</p>
                </div>
            </div>
        </div>
    );
};
