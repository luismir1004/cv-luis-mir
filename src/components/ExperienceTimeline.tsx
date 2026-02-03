"use client";

import { EXPERIENCE } from "../data/cv-data";
import { motion } from "framer-motion";

export const ExperienceTimeline = () => {
    return (
        <section id="experience" className="py-24 md:py-48 relative overflow-hidden">
            <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="space-y-6 mb-20">
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
                            className="font-black text-foreground uppercase"
                        >
                            Trayectoria<span className="text-primary">.</span>
                        </motion.h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative border-l border-border/30 pl-10 md:pl-16 space-y-20">
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
                                <div className="absolute -left-[49px] md:-left-[73px] top-2 w-4 h-4 rounded-full border-2 border-primary bg-background transition-all duration-500 group-hover:scale-125 group-hover:bg-primary z-10" />

                                <header className="space-y-2 mb-6">
                                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                                        {item.date}
                                    </span>
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                        {item.role}
                                    </h3>
                                    <div className="text-xl md:text-2xl font-medium text-muted-foreground/60">
                                        @{item.company}
                                    </div>
                                </header>

                                <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed mb-8 max-w-2xl text-pretty">
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
            </div>
        </section>
    );
};
