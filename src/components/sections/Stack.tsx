'use client';

/**
 * 🎯 Stack Section - Bento Grid Layout
 * 
 * Sección de tecnologías con diseño Bento Grid premium.
 * - Card hero (Frontend) full width
 * - Cards secundarias en columnas
 * - Animaciones stagger
 */

import { motion, Variants } from 'framer-motion';
import { TranslationSchema } from '../../types';
import { TECH_STACK } from '../../data/tech-stack';
import { TechCard } from '../ui/TechCard';
import { Sparkles } from 'lucide-react';

interface StackProps {
    t: TranslationSchema;
    variants?: Variants;
    lang?: 'es' | 'en';
}

// Container variants for stagger animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

export const Stack = ({ t, lang = 'es' }: StackProps) => {

    return (
        <section className="w-full py-8">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
            >
                <div className="flex items-center gap-2">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                        }}
                    >
                        <Sparkles className="w-5 h-5 text-indigo-500" />
                    </motion.div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        {t.stack_title || "Stack Tecnológico"}
                    </h2>
                </div>

                {/* Decorative line */}
                <div className="flex-1 h-px bg-gradient-to-r from-slate-300 dark:from-slate-700 to-transparent" />
            </motion.div>

            {/* Bento Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
                {TECH_STACK.map((category, index) => (
                    <TechCard
                        key={category.id}
                        category={category}
                        index={index}
                        lang={lang}
                    />
                ))}
            </motion.div>

            {/* Bottom Stats (opcional) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-8 border-t border-slate-200 dark:border-slate-800"
            >
                <Stat
                    value="14+"
                    label={lang === 'es' ? 'Tecnologías' : 'Technologies'}
                />
                <Stat
                    value="1+"
                    label={lang === 'es' ? 'Año Exp.' : 'Year Exp.'}
                />
                <Stat
                    value="100%"
                    label={lang === 'es' ? 'Pasión' : 'Passion'}
                />
            </motion.div>
        </section>
    );
};

// Mini stat component
const Stat = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center gap-1">
        <span className="text-2xl font-bold text-gradient-premium">
            {value}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            {label}
        </span>
    </div>
);

export default Stack;
