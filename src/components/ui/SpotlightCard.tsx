'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { useState, useRef, MouseEvent } from 'react';
import { cn } from '../../lib/utils';

// Note: Ensure specific tailwind colors are safe-listed or passed as full classes if dynamic.
// This generic card focuses on the spotlight effect logic.

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string; // Hex or rgba
}

export const SpotlightCard = ({
    children,
    className,
    spotlightColor = "rgba(255, 255, 255, 0.15)",
    ...props
}: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 backdrop-blur-xl transition-all duration-500",
                "before:absolute before:inset-0 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none before:hidden dark:before:block", // Glass Edge
                isHovered ? "shadow-2xl translate-y-[-2px]" : "shadow-lg",
                className
            )}
            {...props}
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />

            {/* Content Container (z-10 to sit above spotlight) */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};
