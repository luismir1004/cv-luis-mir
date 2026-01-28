'use client';

/**
 * 🎓 Education Section
 * 
 * Formación académica + Certificaciones profesionales.
 */

import { motion } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { EDUCATION, CERTIFICATIONS } from '../../data/cv-data';
import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';
import { GraduationCap, Award, Brain, Code, Layers, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface EducationProps {
    t: TranslationSchema;
    variants: Variants;
    lang?: 'es' | 'en';
}

// Icon mapping for certifications
const CertIcons: Record<string, React.ElementType> = {
    Brain: Brain,
    Code: Code,
    Layers: Layers,
};

export const Education = ({ t, variants, lang = 'es' }: EducationProps) => {
    return (
        <SpotlightCard
            variants={variants}
            className="flex-1 p-6 flex flex-col"
            spotlightColor="rgba(244, 63, 94, 0.15)"
        >
            {/* Education Section */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
            >
                <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-rose-500" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400">
                        {t.edu_title || "Formación"}
                    </h3>
                </div>

                <div className="relative pl-4 border-l-2 border-rose-100 dark:border-rose-900/50 space-y-4">
                    {EDUCATION.map((edu) => (
                        <div key={edu.id} className="relative group">
                            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 border-rose-400 bg-white dark:bg-slate-900 group-hover:scale-125 transition-transform" />

                            <div className="flex items-start justify-between gap-2 mb-1">
                                <h4 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-rose-500 transition-colors">
                                    {lang === 'es' ? edu.degreeEs : edu.degree}
                                </h4>
                                {edu.status === 'in_progress' && (
                                    <span className="flex-shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded">
                                        {lang === 'es' ? 'En Progreso' : 'In Progress'}
                                    </span>
                                )}
                            </div>

                            <p className="text-xs text-rose-500 dark:text-rose-400 font-medium mb-1">
                                {lang === 'es' ? edu.institutionEs : edu.institution}
                            </p>

                            <div className="flex items-center gap-3 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {edu.period}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-amber-500" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500 dark:text-amber-400">
                        {lang === 'es' ? 'Certificaciones' : 'Certifications'}
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {CERTIFICATIONS.map((cert, index) => {
                        const Icon = CertIcons[cert.icon || 'Code'] || Code;
                        return (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 4 }}
                                className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-amber-200 dark:hover:border-amber-700/50 transition-all cursor-default"
                            >
                                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                        {lang === 'es' ? cert.nameEs : cert.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <span>{cert.issuer}</span>
                                        <span>•</span>
                                        <span>{cert.date}</span>
                                    </div>
                                </div>
                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Location Footer */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start justify-between mt-6 pt-4 border-t border-slate-100 dark:border-slate-800"
            >
                <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold mb-1 tracking-wider">
                        {lang === 'es' ? 'Ubicación' : 'Location'}
                    </span>
                    <div className="text-slate-900 dark:text-white font-medium text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-indigo-500" />
                        Caracas, VE
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-bold mb-1 tracking-wider">
                        {lang === 'es' ? 'Modalidad' : 'Mode'}
                    </span>
                    <div className="text-slate-900 dark:text-white font-medium text-sm">
                        {t.location_type || "Remote/Hybrid"}
                    </div>
                </div>
            </motion.div>
        </SpotlightCard>
    );
};

export default Education;
