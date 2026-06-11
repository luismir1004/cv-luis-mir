"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Users } from "lucide-react";
import { Section, SectionHeader } from "./corporate/Section";
import { useTranslation } from "@/context/LanguageContext";

export const BusinessImpact = () => {
    const { t } = useTranslation();

    return (
        <Section id="impact" variant="default">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                    title={t.ui.businessImpactSection.title}
                    subtitle={t.ui.businessImpactSection.subtitle}
                    description={t.ui.businessImpactSection.subtitle} // Dictionary maps subtitle to the full section description
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.businessImpact.map((impact, index) => {
                        // Dynamically assign icon and color based on category
                        let Icon = Zap;
                        let colorClass = "text-amber-500";
                        let bgClass = "bg-amber-500/10";
                        
                        if (impact.category === 'revenue') {
                            Icon = TrendingUp;
                            colorClass = "text-emerald-500";
                            bgClass = "bg-emerald-500/10";
                        } else if (impact.category === 'collaboration') {
                            Icon = Users;
                            colorClass = "text-blue-500";
                            bgClass = "bg-blue-500/10";
                        } else if (impact.category === 'efficiency') {
                            Icon = Zap;
                            colorClass = "text-violet-500 dark:text-violet-400";
                            bgClass = "bg-violet-500/10";
                        }

                        return (
                            <motion.div
                                key={impact.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <div className={`h-full border border-border/20 bg-background p-6 flex flex-col relative group transition-all duration-300 hover:border-${colorClass.split('-')[1]}-500/50`}>
                                    
                                    {/* Accent Top Line */}
                                    <div className={`absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity ${bgClass.replace('/10', '')}`} />

                                    <div className="flex flex-col h-full relative z-10 space-y-6">
                                        <div className="flex items-start justify-between">
                                            <div className={`p-2 rounded-none ${bgClass}`}>
                                                <Icon className={`w-5 h-5 ${colorClass}`} />
                                            </div>
                                            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2 py-1 bg-muted/30 border border-border/40 rounded-none">
                                                {impact.projectTitle}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className={`text-4xl md:text-5xl font-black tracking-tighter ${colorClass}`}>
                                                {impact.metricValue}
                                            </h3>
                                            <p className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                                {impact.metricLabel}
                                            </p>
                                        </div>

                                        <div className="w-full h-px bg-border/40" />

                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-grow text-justify">
                                            {impact.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
