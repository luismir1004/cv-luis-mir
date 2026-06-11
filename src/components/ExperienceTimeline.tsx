"use client";

import { EXPERIENCE } from "../data/cv-data";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./corporate/Section";
import { Badge } from "./corporate/Badge";
import { Card } from "./corporate/Card";
import { CalendarDays, MapPin } from "lucide-react";

export const ExperienceTimeline = () => {
    return (
        <Section id="experience" variant="alternate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                    title="Experiencia Profesional"
                    subtitle="Trayectoria"
                    description="Un historial de entrega de soluciones de alto impacto en diversos entornos técnicos e industrias."
                    align="center"
                />

                {/* Professional Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2" />
                    
                    <div className="space-y-16">
                        {EXPERIENCE.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background transform md:-translate-x-1/2 z-10 shadow-lg shadow-primary/20" />

                                {/* Content Card */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                    <Card hover>
                                        <div className="space-y-6">
                                            {/* Date Badge */}
                                            <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                                <CalendarDays className="w-4 h-4 text-primary" />
                                                <span className="font-medium">{item.date}</span>
                                            </div>

                                            {/* Role and Company */}
                                            <div className="space-y-2">
                                                <h3 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white">
                                                    {item.role}
                                                </h3>
                                                <div className="flex items-center gap-2 text-lg text-slate-700 dark:text-slate-300">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{item.company}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {item.description}
                                            </p>

                                            {/* Technologies */}
                                            {item.technologies && (
                                                <div className="flex flex-wrap gap-2 pt-4">
                                                    {item.technologies.map((tech) => (
                                                        <Badge key={tech} variant="outline" size="sm">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Card>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
