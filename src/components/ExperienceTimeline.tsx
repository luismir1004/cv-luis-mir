"use client";

import { EXPERIENCE } from "../data/cv-data";
import { motion } from "framer-motion";

export const ExperienceTimeline = () => {
    return (
        <section id="experience" className="py-24 md:py-32 relative">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="space-y-6 mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-3"
                    >
                        <div className="w-8 h-[2px] bg-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Career Path</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-7xl font-black tracking-tighter text-foreground uppercase"
                    >
                        Trayectoria<span className="text-primary">.</span>
                    </motion.h2>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-border/30 pl-8 md:pl-12 space-y-16">
                    {EXPERIENCE.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full border-2 border-primary bg-background transition-all duration-500 group-hover:scale-125 group-hover:bg-primary" />

                            <header className="space-y-2 mb-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                                    {item.date}
                                </span>
                                <h3 className="text-2xl md:text-4xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                    {item.role}
                                </h3>
                                <div className="text-lg font-medium text-muted-foreground">
                                    @{item.company}
                                </div>
                            </header>

                            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-6 max-w-2xl text-pretty">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.technologies?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-border rounded-md text-muted-foreground bg-background/50 hover:border-primary/50 hover:text-foreground transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
