"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Code, Globe, Zap, Clock, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

interface Metric {
    icon: any;
    value: string;
    label: string;
    description: string;
    color: string;
}

const METRICS_ICONS = [Globe, Zap, TrendingUp, Code, Clock, ShieldCheck];
const METRICS_COLORS = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-yellow-500 to-orange-500",
    "from-green-500 to-emerald-500",
    "from-red-500 to-rose-500",
    "from-indigo-500 to-violet-500"
];

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const targetValue = parseInt(metric.value.replace(/\D/g, '')) || 0;
            const duration = 2000;
            const steps = 60;
            const increment = targetValue / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= targetValue) {
                    current = targetValue;
                    clearInterval(timer);
                }
                setCount(Math.floor(current));
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, metric.value]);

    const Icon = metric.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border border-border/10 hover:border-border/20 dark:border-white/10 dark:hover:border-white/20 transition-all duration-500 overflow-hidden"
        >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            
            {/* Icon */}
            <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6`}
            >
                <Icon className="w-7 h-7 text-white" />
            </motion.div>

            {/* Value */}
            <div className="mb-2">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="text-4xl min-[375px]:text-5xl font-black text-slate-950 dark:text-white text-balance"
                >
                    {(() => {
                        if (metric.value.includes('%')) {
                            if (metric.value.includes('.')) {
                                return metric.value;
                            }
                            return `${count}%`;
                        }
                        if (metric.value.includes('+')) {
                            return `${count}+`;
                        }
                        return `${count}`;
                    })()}
                </motion.div>
            </div>

            {/* Label */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-900/80 dark:group-hover:from-gray-100 dark:group-hover:to-gray-100/80 transition-all duration-300">
                {metric.label}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {metric.description}
            </p>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-foreground/40 dark:bg-white/20 dark:group-hover:bg-white/40 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-foreground/10 dark:bg-white/10" />
        </motion.div>
    );
}

export const MetricsSection = () => {
    const { t } = useTranslation();

    const metrics: Metric[] = t.metricsList.map((m, index) => ({
        icon: METRICS_ICONS[index] || Globe,
        color: METRICS_COLORS[index] || "from-blue-500 to-cyan-500",
        value: m.value,
        label: m.label,
        description: m.description
    }));

    return (
        <section id="metrics" className="py-24 md:py-48 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
            </div>

            <div className="w-full relative z-10">
                {/* Section Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">
                            {t.ui.metrics.badge}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter text-foreground uppercase leading-[0.85] text-balance"
                    >
                        {t.ui.metrics.title}<span className="text-primary">.</span>
                    </motion.h2>
                </div>

                {/* Metrics Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {metrics.map((metric, index) => (
                            <MetricCard key={metric.label} metric={metric} index={index} />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center"
                >
                    <p className="text-lg text-muted-foreground/60 max-w-2xl mx-auto">
                        {t.ui.metrics.footerText}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};