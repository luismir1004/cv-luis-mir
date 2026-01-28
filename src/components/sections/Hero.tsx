'use client';

import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { SunIcon, MoonIcon } from '../ui/Icons';
import { MagneticButton } from '../ui/MagneticButton';
import { AnimatedNameText } from '../ui/AnimatedSignature';
import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';
import { springGentle, hoverLift, tapScale } from '../../lib/animations';

interface HeroProps {
    t: TranslationSchema;
    variants: Variants;
    isDark: boolean;
    toggleTheme: () => void;
    toggleLang: () => void;
    lang: string;
    onOpenContact: () => void;
}

export const Hero = ({ t, variants, isDark, toggleTheme, toggleLang, lang, onOpenContact }: HeroProps) => {
    // Animation delays for staggered effect
    const stagger = {
        badge: 0.1,
        greeting: 0.2,
        name: 0.4,
        roles: 0.8,
        subtitle: 1.0,
        buttons: 1.2,
    };

    return (
        <SpotlightCard
            variants={variants}
            className="group col-span-1 md:col-span-2 lg:col-span-2 row-span-2 p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden"
            spotlightColor={isDark ? "rgba(99, 102, 241, 0.1)" : "rgba(99, 102, 241, 0.05)"}
        >
            {/* Theme & Language Toggles */}
            <div className="absolute top-0 right-0 p-4 flex gap-2 z-30">
                <motion.button
                    onClick={toggleTheme}
                    aria-label={isDark ? t.toggle_light : t.toggle_dark || "Toggle theme"}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isDark ? <MoonIcon /> : <SunIcon />}
                </motion.button>
                <motion.button
                    onClick={toggleLang}
                    aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium text-sm flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span aria-hidden="true">{lang === 'es' ? '🇪🇸' : '🇺🇸'}</span>
                    <span>{lang === 'es' ? 'ES' : 'EN'}</span>
                </motion.button>
            </div>

            <div className="relative z-20">
                {/* Open to Work Badge */}
                <motion.div
                    className="flex items-center gap-2 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springGentle, delay: stagger.badge }}
                >
                    <div className="pl-1 pr-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md flex items-center gap-2 shadow-sm">
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-widest">
                            {t.open_to_work}
                        </span>
                    </div>
                </motion.div>

                {/* Name & Title */}
                <h1 className="font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    {/* Greeting */}
                    <motion.div
                        className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-2 font-sans flex items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...springGentle, delay: stagger.greeting }}
                    >
                        {lang === 'es' ? 'Hola, soy ' : 'Hi, I\'m '}
                        <motion.span
                            className="origin-bottom-right inline-block"
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                            }}
                            aria-hidden="true"
                        >
                            👋
                        </motion.span>
                    </motion.div>

                    {/* Animated Name */}
                    <span className="text-5xl sm:text-7xl tracking-tighter text-liquid py-2 block">
                        <AnimatedNameText
                            name="Luis Mir"
                            delay={stagger.name}
                            className="font-display font-bold"
                        />
                    </span>
                </h1>

                {/* Roles & Subtitle */}
                <motion.h2
                    className="text-xl font-medium text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...springGentle, delay: stagger.roles }}
                >
                    <span className="text-slate-900 dark:text-white font-semibold">{t.role_ai}</span> & <span className="text-slate-900 dark:text-white font-semibold">{t.role_fs}</span>.
                    <br />
                    <motion.span
                        className="text-base sm:text-lg mt-3 block font-medium text-slate-600 dark:text-slate-400"
                        dangerouslySetInnerHTML={{ __html: t.hero_subtitle }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: stagger.subtitle, duration: 0.5 }}
                    />
                </motion.h2>
            </div>

            {/* CTA Buttons */}
            <motion.div
                className="flex flex-wrap gap-3 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springGentle, delay: stagger.buttons }}
            >
                <MagneticButton onClick={() => window.print()}>
                    <motion.button
                        className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        whileHover={hoverLift}
                        whileTap={tapScale}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{t.download_cv}</span>
                    </motion.button>
                </MagneticButton>

                <MagneticButton onClick={onOpenContact}>
                    <motion.button
                        className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        whileHover={hoverLift}
                        whileTap={tapScale}
                    >
                        Email
                    </motion.button>
                </MagneticButton>

                <MagneticButton>
                    <motion.a
                        href="https://github.com/luismir1004"
                        target="_blank"
                        rel="noreferrer"
                        className="block px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        whileHover={hoverLift}
                        whileTap={tapScale}
                    >
                        GitHub
                    </motion.a>
                </MagneticButton>
            </motion.div>

            {/* ============================================================
                HIGHLIGHTS SECTION - Filling the empty space
            ============================================================ */}
            <motion.div
                className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springGentle, delay: stagger.buttons + 0.3 }}
            >
                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {[
                        { value: '1+', label: lang === 'es' ? 'Año Exp.' : 'Year Exp.', icon: '📅' },
                        { value: '14+', label: lang === 'es' ? 'Tecnologías' : 'Technologies', icon: '⚡' },
                        { value: '10+', label: lang === 'es' ? 'Proyectos' : 'Projects', icon: '🚀' },
                        { value: '100%', label: lang === 'es' ? 'Pasión' : 'Passion', icon: '❤️' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="group flex flex-col items-center text-center p-3 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors cursor-default"
                            whileHover={{ y: -2 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: stagger.buttons + 0.4 + index * 0.1 }}
                        >
                            <span className="text-lg mb-1" aria-hidden="true">{stat.icon}</span>
                            <span className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                {stat.value}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Badges - Quick Preview */}
                <motion.div
                    className="flex flex-wrap items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: stagger.buttons + 0.8 }}
                >
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mr-1">
                        {lang === 'es' ? 'Especialista en:' : 'Specialist in:'}
                    </span>
                    {[
                        { name: 'React', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
                        { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
                        { name: 'Next.js', color: 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20' },
                        { name: 'AI/LLMs', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
                        { name: 'Node.js', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
                    ].map((tech, index) => (
                        <motion.span
                            key={tech.name}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${tech.color}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: stagger.buttons + 0.9 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {tech.name}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Decorative gradient blob */}
            <div
                className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors duration-500 pointer-events-none"
                aria-hidden="true"
            />
        </SpotlightCard>
    );
};

