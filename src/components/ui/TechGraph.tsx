import { useRef, useMemo, useEffect } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { useTheme } from '../../hooks/useTheme';

const gData = {
    nodes: [
        // AI & Backend
        { id: 'AI', group: 1, size: 8 },
        { id: 'Python', group: 1, size: 4 },
        { id: 'OpenAI', group: 1, size: 4 },
        { id: 'RAG', group: 1, size: 4 },
        { id: 'LangChain', group: 1, size: 4 },
        { id: 'PyTorch', group: 1, size: 4 },

        // Frontend
        { id: 'Frontend', group: 2, size: 8 },
        { id: 'React', group: 2, size: 6 },
        { id: 'TypeScript', group: 2, size: 6 },
        { id: 'Tailwind', group: 2, size: 4 },
        { id: 'Next.js', group: 2, size: 5 },
        { id: 'Three.js', group: 2, size: 5 },

        // DevOps
        { id: 'DevOps', group: 3, size: 8 },
        { id: 'Docker', group: 3, size: 4 },
        { id: 'Vercel', group: 3, size: 4 },
        { id: 'Git', group: 3, size: 4 },
    ],
    links: [
        { source: 'AI', target: 'Python' },
        { source: 'AI', target: 'OpenAI' },
        { source: 'AI', target: 'RAG' },
        { source: 'AI', target: 'LangChain' },
        { source: 'AI', target: 'PyTorch' },

        { source: 'Frontend', target: 'React' },
        { source: 'Frontend', target: 'TypeScript' },
        { source: 'Frontend', target: 'Tailwind' },
        { source: 'Frontend', target: 'Next.js' },
        { source: 'Frontend', target: 'Three.js' },

        { source: 'React', target: 'Next.js' },
        { source: 'React', target: 'Three.js' },
        { source: 'TypeScript', target: 'React' },

        { source: 'DevOps', target: 'Docker' },
        { source: 'DevOps', target: 'Vercel' },
        { source: 'DevOps', target: 'Git' },

        { source: 'AI', target: 'Frontend' }, // Fullstack link
        { source: 'Frontend', target: 'DevOps' },
    ]
};

export const TechGraph = () => {
    const fgRef = useRef<any>();
    const { isDark } = useTheme();

    // Auto-rotation
    useEffect(() => {
        let timer: any;
        const rotate = () => {
            if (fgRef.current) {
                const angle = Date.now() * 0.0005;
                fgRef.current.cameraPosition({
                    x: 200 * Math.cos(angle),
                    z: 200 * Math.sin(angle)
                });
                timer = requestAnimationFrame(rotate);
            }
        };
        rotate();
        return () => cancelAnimationFrame(timer);
    }, []);

    // Color logic
    const getNodeColor = (node: any) => {
        const colors = isDark
            ? ['#ef4444', '#10b981', '#22d3ee', '#f59e0b'] // Dark mode: Green (AI), Cyan (Front), Amber (DevOps)
            : ['#ef4444', '#059669', '#0891b2', '#d97706']; // Light mode darker shades

        return colors[node.group] || '#94a3b8';
    };

    return (
        <div className="h-full w-full rounded-2xl overflow-hidden cursor-move relative">
            <ForceGraph3D
                ref={fgRef}
                graphData={gData}
                backgroundColor="rgba(0,0,0,0)"
                nodeLabel="id"
                nodeColor={getNodeColor}
                nodeResolution={16}
                nodeVal={(node: any) => node.size}
                linkColor={() => isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}
                linkWidth={1}
                linkOpacity={0.5}
                showNavInfo={false}
                d3VelocityDecay={0.3}
                width={400} // Temporary fixed size calculation needed for responsive
                height={300}
            />
            {/* Note: In a real responsive scenario, we'd use a ResizeObserver to set width/height */}
        </div>
    );
};
