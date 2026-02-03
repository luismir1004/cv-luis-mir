"use client";

import { EDUCATION } from "../data/cv-data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const EducationCredentials = () => {
    return (
        <section className="py-24 md:py-48 relative overflow-hidden">
            <div className="w-full space-y-20 md:space-y-40">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-4"
                    >
                        <div className="w-12 h-[2px] bg-primary" />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Academic Background</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-black text-foreground uppercase"
                    >
                        EDUCACIÓN<span className="text-primary">.</span>
                    </motion.h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/60 font-medium tracking-tight max-w-3xl text-balance">
                        Cimientos académicos especializados en ingeniería de sistemas y arquitectura de software distribuido.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-8 md:gap-16">
                    {EDUCATION.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="group relative p-10 md:p-14 rounded-[2.5rem] bg-background/40 backdrop-blur-md border border-border/40 hover:border-primary/20 transition-all duration-700 overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="flex justify-between items-start gap-6 relative z-10">
                                <div className="space-y-4">
                                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                                        {item.date}
                                    </span>

                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-foreground group-hover:text-primary transition-colors duration-500">
                                        {item.degree}
                                    </h3>

                                    <div className="flex items-center gap-2 text-base font-bold tracking-tight text-muted-foreground italic">
                                        <GraduationCap className="w-5 h-5 text-primary/60" />
                                        {item.school}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border/10 relative z-10">
                                <p className="text-base text-muted-foreground/80 leading-relaxed font-medium text-pretty group-hover:text-foreground/90 transition-colors duration-500">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
