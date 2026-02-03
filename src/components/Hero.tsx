"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PERSONAL_INFO, PROFILE } from "../data/cv-data";
import { MagneticWrapper } from "./MagneticWrapper";

export const Hero = () => {
    return (
        <section className="relative min-h-dvh flex flex-col justify-center py-20 overflow-hidden">
            <div className="flex flex-col gap-10 md:gap-20 relative z-10 w-full">
                {/* Badge Deep Studio - Minimalist */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4"
                >
                    <div className="h-[2px] w-12 bg-primary" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-foreground/60">
                        Portafolio 2026
                    </span>
                </motion.div>

                {/* Main Content - Cinematic Hierarchy */}
                <div className="flex flex-col gap-12 md:gap-24 lg:gap-32">
                    <div className="space-y-6 md:space-y-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="font-black mix-blend-difference break-words overflow-visible"
                        >
                            {PERSONAL_INFO.name}<span className="text-primary">.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="flex flex-wrap gap-x-12 gap-y-6 items-center"
                        >
                            {PERSONAL_INFO.titles.map((title, i) => (
                                <div key={title} className="flex items-center gap-6">
                                    <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-muted-foreground/80">
                                        {title}
                                    </span>
                                    {i < PERSONAL_INFO.titles.length - 1 && <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary/30" />}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-end pt-12 md:pt-24 border-t border-border/10"
                    >
                        <p className="lg:col-span-8 text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-[1.4] font-light max-w-5xl text-balance">
                            {PROFILE.text}
                        </p>

                        <div className="md:col-span-5 flex md:justify-end">
                            <MagneticWrapper strength={0.3}>
                                <motion.button
                                    onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative w-20 h-20 rounded-full border border-border/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Scroll down"
                                >
                                    <ArrowDown className="w-6 h-6 text-foreground/60 group-hover:text-primary transition-colors duration-300" />
                                </motion.button>
                            </MagneticWrapper>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Studio Lights - Refined */}
            <div className="absolute top-[-20%] right-[-10%] -z-10 w-[80vw] h-[80vw] bg-primary/20 rounded-full blur-[150px] opacity-40 mix-blend-screen animate-pulse duration-1000" />
            <div className="absolute bottom-[-10%] left-[-10%] -z-10 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
        </section>
    );
};
