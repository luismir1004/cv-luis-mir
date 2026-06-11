"use client";

import { TECH_STACK } from "../data/cv-data";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./corporate/Section";
import { Card } from "./corporate/Card";
import { Code2, Layers, Globe, Settings, Terminal } from "lucide-react";

const CATEGORY_ICONS: Record<string, any> = {
    "Lenguajes y Core": Code2,
    "Frameworks y Librerías": Layers,
    "Backend e Infraestructura": Globe,
    "Competencias de Ingeniería": Settings
};

export const TechHologram = () => {
    return (
        <Section id="skills" variant="alternate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                    title="Tecnologías y Competencias"
                    subtitle="Stack Técnico"
                    description="Un conjunto integral de tecnologías modernas y metodologías para construir aplicaciones escalables y de alto rendimiento."
                    align="center"
                />

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {TECH_STACK.map((category, index) => {
                        const Icon = CATEGORY_ICONS[category.title] || Terminal;
                        
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full">
                                    <div className="space-y-6">
                                        {/* Category Header */}
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-foreground mb-1">
                                                    {category.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {category.specialty}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Skills List */}
                                        <div className="space-y-3">
                                            {category.skills.map((skill) => (
                                                <div key={skill.name} className="flex items-center justify-between group">
                                                    <div className="flex items-center gap-2">
                                                        {skill.isPrimary && (
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        )}
                                                        <span className={`text-sm ${
                                                            skill.isPrimary 
                                                                ? "text-foreground font-medium" 
                                                                : "text-muted-foreground group-hover:text-foreground transition-colors"
                                                        }`}>
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <span
                                                        className={`px-2 py-0.5 rounded text-[10px] tracking-wider uppercase font-bold ${
                                                            skill.level === "Senior"
                                                                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                                                                : skill.level === "Semi-Senior"
                                                                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                                                                : "bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20"
                                                        }`}
                                                    >
                                                        {skill.level}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
