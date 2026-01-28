import { SpotlightCard } from '../ui/SpotlightCard';
import { useRef } from 'react';
import { TranslationSchema, Experience as ExperienceType } from '../../types';
import { Variants, motion, useScroll, useTransform } from 'framer-motion';

interface ExperienceProps {
    t: TranslationSchema;
    variants: Variants;
    experiences: ExperienceType[];
    lang: 'es' | 'en';
}

export const Experience = ({ t, variants, experiences, lang }: ExperienceProps) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <SpotlightCard variants={variants} className="col-span-1 md:col-span-2 lg:col-span-2 p-8" spotlightColor="rgba(99, 102, 241, 0.15)">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-8 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>{t.exp_title}</span>
            </h3>

            <div ref={containerRef} className="relative pl-4 space-y-12">
                {/* Timeline Base */}
                <div className="absolute top-2 bottom-2 left-[23px] w-1 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700 rounded-full"></div>

                {/* Timeline Active Progress */}
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute top-2 left-[23px] w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.6)] z-0 rounded-full"
                ></motion.div>

                {experiences.map((exp, index) => (
                    <div key={exp._id} className="relative pl-8 group">
                        {/* Node */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`absolute left-[15px] top-1.5 w-4 h-4 rounded-full border-2 ${index === 0 ? 'border-indigo-500' : 'border-slate-300 dark:border-slate-600'
                                } bg-white dark:bg-slate-900 group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 z-10 ${index === 0 ? 'shadow-[0_0_10px_rgba(99,102,241,0.5)]' : ''
                                }`}
                        ></motion.div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                {exp.role[lang]}
                            </h4>
                            <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                                {exp.date[lang]}
                            </span>
                        </div>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3 font-medium">
                            {exp.subRole[lang]}
                        </p>
                        <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
                            <p>{exp.description[lang]}</p>
                            {exp.points && exp.points[lang] && exp.points[lang].length > 0 && (
                                <ul className="list-disc list-inside space-y-1 opacity-90 marker:text-indigo-500">
                                    {exp.points[lang].map((point, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SpotlightCard>
    );
};
