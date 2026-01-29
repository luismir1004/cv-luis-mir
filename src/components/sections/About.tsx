'use client';

/**
 * 👤 About Section
 * 
 * Sección fusionada de Profile + Languages.
 * Diseño compacto y profesional.
 */

import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { PERSONAL_INFO, LANGUAGES, PROFILE } from '../../data/cv-data';
import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';
import { MapPin, Globe, Mail, Linkedin, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { GitHubStats } from '../ui/GitHubStats';
import { Testimonials } from '../ui/Testimonials';
import { useTheme } from '../../hooks/useTheme';

interface AboutProps {
    t: TranslationSchema;
    variants: Variants;
    lang: 'es' | 'en';
}

export const About = ({ variants, lang, t }: AboutProps) => {
    const profileData = PROFILE[lang];
    const { isDark } = useTheme();

    return (
        <SpotlightCard
            variants={variants}
            className="p-6 h-full flex flex-col"
            spotlightColor="rgba(99, 102, 241, 0.12)"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-4"
            >
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
                    {profileData.title}
                </h3>
            </motion.div>

            {/* Profile Text */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4"
            >
                {profileData.text}
            </motion.p>

            {/* Highlights */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2 mb-5"
            >
                {profileData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                    </div>
                ))}
            </motion.div>

            {/* Languages Bar */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 mb-5"
            >
                <Globe className="w-4 h-4 text-slate-500" />
                <div className="flex items-center gap-4 flex-wrap">
                    {LANGUAGES.map((language) => (
                        <div key={language.code} className="flex items-center gap-2">
                            <span className="text-lg">{language.flag}</span>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                                    {lang === 'es' ? language.nameEs : language.name}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                    {lang === 'es' ? language.levelEs : language.level}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* GitHub Stats Widget */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="mb-8"
            >
                <GitHubStats isDark={isDark} />
            </motion.div>

            {/* Micro-Testimonials */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.38 }}
                className="mb-6"
            >
                <Testimonials t={t} />
            </motion.div>

            {/* Contact Info Footer */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-700/50"
            >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{PERSONAL_INFO.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        <span>{PERSONAL_INFO.availability}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        <span>{PERSONAL_INFO.email}</span>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2 mt-4">
                    {PERSONAL_INFO.linkedin && (
                        <a
                            href={`https://${PERSONAL_INFO.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="text-xs font-medium">LinkedIn</span>
                        </a>
                    )}
                    {PERSONAL_INFO.github && (
                        <a
                            href={`https://${PERSONAL_INFO.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group"
                        >
                            <Github className="w-5 h-5" />
                            <span className="text-xs font-medium">GitHub</span>
                        </a>
                    )}
                    {PERSONAL_INFO.website && (
                        <a
                            href={`https://${PERSONAL_INFO.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group"
                        >
                            <ExternalLink className="w-5 h-5" />
                            <span className="text-xs font-medium">Web</span>
                        </a>
                    )}
                </div>
            </motion.div>
        </SpotlightCard>
    );
};

export default About;
