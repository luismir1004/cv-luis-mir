"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Briefcase } from "lucide-react";
import { Button } from "./corporate/Button";
import DownloadCVButton from "./ui/DownloadCVButton";
import { useEffect, useState } from "react";
import { useTranslation } from "@/context/LanguageContext";


export const Hero = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);
    const y2 = useTransform(scrollY, [0, 300], [0, -50]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);
    
    const [typingText, setTypingText] = useState("");
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const titles = t.personalInfo.titles;
        const typingSpeed = 80;
        const deletingSpeed = 40;
        const pauseTime = 2500;
        
        if (titles.length === 0) return;
        
        const typeEffect = () => {
            const currentTitle = titles[currentTitleIndex];
            
            if (!currentTitle) return;
            
            if (isDeleting) {
                setTypingText(currentTitle.substring(0, typingText.length - 1));
                if (typingText.length === 0) {
                    setIsDeleting(false);
                    setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
                }
            } else {
                setTypingText(currentTitle.substring(0, typingText.length + 1));
                if (typingText.length === currentTitle.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }
        };
        
        const timeoutId = setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeoutId);
    }, [typingText, isDeleting, currentTitleIndex, t.personalInfo.titles]);
    
    return (
        <section className="relative min-h-dvh flex flex-col justify-center py-20 overflow-hidden">
            {/* Professional Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                        backgroundSize: '3rem 3rem',
                        color: 'var(--foreground)'
                    }}
                />
                
                {/* Professional Gradient Orbs */}
                <motion.div 
                     style={{ y: y1, opacity }}
                    className="absolute top-[-5%] right-[-5%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[150px]"
                />
                <motion.div 
                    style={{ y: y2, opacity }}
                    className="absolute bottom-[-5%] left-[-5%] w-[35vw] h-[35vw] bg-primary/5 rounded-full blur-[120px]"
                />
            </div>

            <motion.div 
                style={{ opacity }}
                className="flex flex-col gap-8 md:gap-12 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Professional Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-4"
                >
                    <div className="h-[2px] w-12 bg-primary" />
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-300 flex items-center gap-2">
                         <Briefcase className="w-3 h-3" />
                        {t.ui.hero.badge}
                    </span>
                </motion.div>
 
                {/* Main Content */}
                <div className="flex flex-col gap-8 md:gap-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-slate-950 dark:text-white text-balance"
                    >
                        Luis Mir<span className="text-primary">.</span>
                    </motion.h1>
 
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="flex items-center gap-4 min-h-[2.5rem]"
                    >
                        <div className="hidden sm:block w-10 h-[2px] bg-primary/30" />
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300">
                            {typingText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
                            />
                        </span>
                    </motion.div>
                </div>
 
                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl"
                >
                    {t.profile.text}
                </motion.p>
 
                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="flex flex-col min-[480px]:flex-row flex-wrap gap-4 pt-4 w-full min-[480px]:w-auto"
                >
                    <DownloadCVButton />
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => document.getElementById('metrics')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full min-[480px]:w-auto"
                    >
                        {t.ui.hero.ctaResults}
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full min-[480px]:w-auto"
                    >
                        {t.ui.hero.ctaProjects}
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full min-[480px]:w-auto group hover:bg-muted/30"
                    >
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">{t.ui.hero.ctaContact}</span>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={() => document.getElementById('metrics')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">{t.ui.hero.scrollText}</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    );
};
