"use client";

import { TECH_STACK } from "../data/cv-data";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./corporate/Section";
import { Badge } from "./corporate/Badge";
import { Card } from "./corporate/Card";
import { LayoutGrid, Globe, Cpu, Sparkles, Shield, Terminal } from "lucide-react";

const CATEGORY_ICONS: Record<string, any> = {
    "Frontend Ecosystem": LayoutGrid,
    "Backend & Cloud": Globe,
    "AI Engineering": Cpu,
    "UI & Technical Art": Sparkles,
    "Operations & Quality": Shield
};

export const TechHologram = () => {
    return (
        <Section id="skills" variant="alternate">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <SectionHeader 
                    title="Technical Expertise"
                    subtitle="Skills & Technologies"
                    description="A comprehensive toolkit of modern technologies and methodologies for building scalable, performant applications."
                    align="center"
                />

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                                    <Badge 
                                                        variant={skill.isPrimary ? "primary" : "outline"} 
                                                        size="sm"
                                                    >
                                                        {skill.level}
                                                    </Badge>
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
