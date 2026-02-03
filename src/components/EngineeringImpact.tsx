"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Shield, Zap, Target, BarChart3, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";


const metrics = [
    {
        label: "PERFORMANCE",
        value: 100,
        suffix: "/100",
        description: "Core Web Vitals optimizados para renderizado instantáneo y cero CLS.",
        icon: Zap,
        color: "text-emerald-500",
        gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
        shadow: "shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]"
    },
    {
        label: "SECURITY",
        value: 100,
        displayValue: "A",
        suffix: "+",
        description: "Protocolos OWASP y headers de seguridad estrictos por defecto.",
        icon: Shield,
        color: "text-blue-500",
        gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
        shadow: "shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
    },
    {
        label: "UPTIME",
        value: 99.9,
        suffix: "%",
        description: "Arquitectura Serverless distribuida en Edge Network global.",
        icon: Target,
        color: "text-purple-500",
        gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
        shadow: "shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]"
    },
    {
        label: "TECH_LEVEL",
        value: 100,
        displayValue: "SENIOR",
        description: "Liderazgo técnico en sistemas distribuidos y arquitectura.",
        icon: BarChart3,
        color: "text-orange-500",
        gradient: "from-orange-500/20 via-orange-500/10 to-transparent",
        shadow: "shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]"
    }
];

function CountingNumber({ value, duration = 1.5, className }: { value: number, duration?: number, className?: string }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => {
        if (Number.isInteger(value)) return Math.round(latest).toString();
        return latest.toFixed(1);
    });

    useEffect(() => {
        const controls = animate(motionValue, value, {
            duration,
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for snappy finish
            delay: 0.2
        });
        return controls.stop;
    }, [value, duration, motionValue]);

    return <motion.span ref={nodeRef} className={className}>{rounded}</motion.span>;
}

export const EngineeringImpact = () => {


    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-background">
            {/* Background elements - Technical Grid with animated mask */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--border-rgb),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--border-rgb),0.05)_1px,transparent_1px)] bg-[size:40px_40px] mask-gradient-to-b" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="space-y-4 max-w-3xl">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9]">
                            Ingeniería<br />
                            <span className="text-muted-foreground/30">De Impacto.</span>
                        </h2>
                        <div className="flex items-center gap-2 text-muted-foreground/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em]">System Status: Nominal</span>
                        </div>
                    </div>
                    <div className="md:text-right">
                        <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest flex items-center justify-end gap-2">
                            <span>SPEC_SHEET_V2.0</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>LIVE</span>
                        </p>
                    </div>
                </div>

                {/* The Monolith Grid - No Gaps, Strict Borders */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border/10 bg-card/5 backdrop-blur-sm">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ staggerChildren: 0.1, delayChildren: index * 0.1 }}
                            className={cn(
                                "group relative p-8 md:p-10 border-r border-b border-border/10 transition-all duration-500 hover:bg-card/40 cursor-default",
                                "flex flex-col justify-between min-h-[320px] overflow-hidden"
                            )}
                        >
                            {/* Hover Active Border Indicator */}
                            <div className={cn(
                                "absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out z-20",
                                metric.gradient.replace('from-', 'bg-') // Simplified color extraction logic or just use theme
                            )} style={{ backgroundColor: 'currentColor' }} />

                            {/* Scanner Light Effect - Wider & Softer */}
                            <motion.div
                                className={cn("absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 pointer-events-none z-0", metric.color)}
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "200%" }}
                                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                            />

                            {/* Header: Icon & Verified Stamp */}
                            <div className="flex justify-between items-start z-10 relative mb-6">
                                <metric.icon className={cn("w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500", metric.color)} />
                                <div className="flex flex-col items-end">
                                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors">
                                        {metric.label}
                                    </span>
                                    {/* Verified Badge hidden by default, shows on hover */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        className="absolute top-0 right-0 text-emerald-500"
                                    >
                                        <CheckCircle2 className="w-4 h-4" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="mt-auto space-y-4 z-10 relative">
                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    className="flex items-baseline gap-1"
                                >
                                    <span className={cn(
                                        "text-4xl md:text-5xl font-black tracking-tight text-foreground"
                                    )}>
                                        {metric.displayValue ? metric.displayValue : <CountingNumber value={metric.value as number} />}
                                    </span>
                                    {metric.suffix && (
                                        <span className={cn("text-lg font-bold text-muted-foreground/40", metric.color)}>
                                            {metric.suffix}
                                        </span>
                                    )}
                                </motion.div>

                                <motion.p
                                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                    className="text-sm text-muted-foreground/70 leading-relaxed font-medium max-w-[90%]"
                                >
                                    {metric.description}
                                </motion.p>
                            </div>

                            {/* Holographic Noise Overlay on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none mix-blend-overlay transition-opacity duration-500"
                                style={{ backgroundImage: 'url("/noise.png")' }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
