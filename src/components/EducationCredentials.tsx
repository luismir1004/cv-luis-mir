"use client";

import { COURSES } from "../data/cv-data";
import { motion } from "framer-motion";
import { GraduationCap, Clock } from "lucide-react";
import { Badge } from "./corporate/Badge";
import { Card } from "./corporate/Card";

export const EducationCredentials = () => {
    return (
        <section className="py-24 md:py-48 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 space-y-16 md:space-y-24">
                {/* Section Header */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-[2px] bg-primary" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/80">Certifications</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-black text-foreground dark:text-white text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase"
                    >
                        EDUCACIÓN<span className="text-primary">.</span>
                    </motion.h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/80 dark:text-muted-foreground/70 font-medium tracking-tight max-w-3xl text-balance">
                        Certificaciones profesionales y formación continua en tecnologías modernas de desarrollo web.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {COURSES.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            <Card hover>
                                <div className="space-y-6">
                                    {/* Header with platform and year */}
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 space-y-3">
                                            <Badge variant="outline" size="sm">
                                                {course.platform}
                                            </Badge>
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-950 dark:text-white leading-tight">
                                                {course.title}
                                            </h3>
                                        </div>
                                        <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                                            {course.year}
                                        </span>
                                    </div>

                                    {/* Instructor with icon */}
                                    <div className="flex items-center gap-3 text-muted-foreground/90 dark:text-muted-foreground/80">
                                        <GraduationCap className="w-5 h-5 text-primary/70" />
                                        <span className="text-sm font-medium">{course.instructor}</span>
                                    </div>

                                    {/* Category and duration */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border/10">
                                        <Badge variant="default" size="sm">
                                            {course.category}
                                        </Badge>
                                        <div className="flex items-center gap-2 text-muted-foreground/80 dark:text-muted-foreground/70">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{course.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
