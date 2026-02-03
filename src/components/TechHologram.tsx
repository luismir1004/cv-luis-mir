"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { TECH_STACK } from "../data/cv-data";

import { TechSkill } from "../types";
import { Cpu, Globe, Terminal, LayoutGrid, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

// Semantic Icon Mapping
const CATEGORY_ICONS: Record<string, any> = {
    "Frontend & UI": LayoutGrid,
    "Backend & Arquitectura": Layers,
    "AI & Data Science": Cpu,
    "DevOps & Cloud": Globe,
};

function HUDCard({
    category,
    index,
    hoveredIndex,
    setHoveredIndex
}: {
    category: typeof TECH_STACK[0],
    index: number,
    hoveredIndex: number | null,
    setHoveredIndex: (i: number | null) => void
}) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    const Icon = CATEGORY_ICONS[category.title] || Terminal;
    const [randomId, setRandomId] = useState("");

    // Focus Mode Logic: If focused exist and I am not it -> Dim me.
    const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

    useEffect(() => {
        setRandomId(Math.random().toString(16).slice(2, 6).toUpperCase());
    }, []);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className={cn(
                "group relative border border-border/10 bg-card/20 backdrop-blur-sm overflow-hidden transition-all duration-500",
                isDimmed ? "opacity-30 blur-[2px] grayscale" : "opacity-100 scale-100"
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
                setHoveredIndex(index);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Active Border Glow */}
            <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 z-20" />

            {/* Corner Brackets - Only visible on Focus */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/0 group-hover:border-primary/60 transition-colors duration-300 z-30" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/0 group-hover:border-primary/60 transition-colors duration-300 z-30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/0 group-hover:border-primary/60 transition-colors duration-300 z-30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/0 group-hover:border-primary/60 transition-colors duration-300 z-30" />

            {/* Spotlight Effect - Semantic Color */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            rgba(var(--primary-rgb), 0.08),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="p-8 relative z-20 flex flex-col h-full">
                {/* Header: System ID + Title */}
                <div className="flex justify-between items-start mb-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground/40 text-[10px] uppercase font-mono tracking-widest">
                            <Icon className="w-3 h-3 text-primary" />
                            <span>SYS_MOD_0{index + 1}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                            {category.title}
                        </h3>
                    </div>
                    <span className="text-4xl font-black text-muted-foreground/5 font-mono select-none">
                        0{index + 1}
                    </span>
                </div>

                {/* Skills Grid - Compact & Dense */}
                <div className="flex flex-col gap-5 mt-auto">
                    {category.skills.map((skill: TechSkill, sIndex: number) => (
                        <div key={skill.name} className="relative">
                            <div className="flex justify-between items-end mb-2">
                                <span className={cn(
                                    "text-sm font-medium tracking-tight transition-colors duration-300",
                                    skill.isPrimary ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                                )}>
                                    {skill.name}
                                </span>
                                <span className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-wider">
                                    {skill.level}
                                </span>
                            </div>

                            {/* Telemetry Bar v2 - "Living" Bar */}
                            <div className="h-[2px] w-full bg-muted overflow-hidden relative">
                                <motion.div
                                    className={cn(
                                        "absolute top-0 left-0 h-full",
                                        skill.isPrimary ? "bg-primary" : "bg-muted-foreground/40"
                                    )}
                                    // Initial load animation
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level === 'Expert' ? '98%' : skill.level === 'Lead' ? '100%' : '85%' }}
                                    transition={{ duration: 1.2, delay: 0.2 + (sIndex * 0.05), ease: "circOut" }}
                                />

                                {/* Pulse Effect on Hover */}
                                {skill.isPrimary && (
                                    <motion.div
                                        className="absolute top-0 left-0 h-full w-full bg-white/20"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Metadata */}
                <div className="mt-8 pt-4 border-t border-border/10 flex justify-between items-center text-[9px] font-mono text-muted-foreground/30 uppercase tracking-widest">
                    <span>Build: v{index}.4.0</span>
                    <span className="group-hover:text-primary/60 transition-colors">ID: {randomId}</span>
                </div>
            </div>
        </motion.div>
    );
}

export const TechHologram = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="stack" className="py-24 md:py-32 relative overflow-hidden bg-background">
            {/* Ambient Background - Subtle Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem',
                    color: 'var(--foreground)'
                }}
            />

            <div className="w-full relative z-10">
                {/* Section Header - Swiss Layout */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-6 h-[2px] bg-primary" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Infraestructura Técnica</span>
                        </div>
                        <h2 className="font-black text-foreground uppercase">
                            Tech<br />
                            <span className="text-muted-foreground/20">Stack.</span>
                        </h2>
                    </div>

                    <div className="md:text-right max-w-xl">
                        <p className="text-muted-foreground text-lg sm:text-xl lg:text-2xl font-light text-balance">
                            Arsenal tecnológico seleccionado para construir sistemas de alta disponibilidad y arquitectura distribuida.
                        </p>
                    </div>
                </div>

                {/* HUD Grid - Focus Mode Enabled */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6 lg:gap-10">
                    {TECH_STACK.map((category, index) => (
                        <HUDCard
                            key={category.title}
                            category={category}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                        />
                    ))}
                </div>

                {/* Decorative Bottom Line */}
                <div className="mt-32 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
            </div>
        </section>
    );
};
