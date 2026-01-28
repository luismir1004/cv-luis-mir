import { SpotlightCard } from '../ui/SpotlightCard';

import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';

interface LanguagesProps {
    t: TranslationSchema;
    variants: Variants;
}

export const Languages = ({ t, variants }: LanguagesProps) => {
    return (
        <SpotlightCard variants={variants} className="glass-card rounded-3xl p-6 flex flex-col justify-between" spotlightColor="rgba(56, 189, 248, 0.15)">
            <h3 className="text-sm font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-6 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.204 4.196l-2.408 6M6 9h4M3 15h14a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2zm10 0h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2z" /></svg>
                <span>{t.languages_title}</span>
            </h3>

            <div className="flex flex-col gap-4">
                {/* Spanish */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 hover:border-sky-200 dark:hover:border-sky-500/30 transition-colors group/lang">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full shadow-sm overflow-hidden border-2 border-white dark:border-slate-700 relative">
                            {/* Simple CSS Flag for Spain */}
                            <svg viewBox="0 0 32 32" className="w-full h-full object-cover">
                                <rect width="32" height="32" fill="#AA151B" />
                                <rect y="8" width="32" height="16" fill="#F1BF00" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-slate-900 dark:text-white text-sm">Español</span>
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Native</span>
                        </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-300 text-xs font-bold border border-sky-200 dark:border-sky-500/30 backdrop-blur-sm">
                        {t.native}
                    </span>
                </div>

                {/* English */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-colors group/lang">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full shadow-sm overflow-hidden border-2 border-white dark:border-slate-700 relative">
                            {/* Simple CSS Flag for US */}
                            <svg viewBox="0 0 32 32" className="w-full h-full object-cover">
                                <rect width="32" height="32" fill="#B22234" />
                                <rect y="4" width="32" height="4" fill="white" />
                                <rect y="8" width="32" height="4" fill="#B22234" />
                                <rect y="12" width="32" height="4" fill="white" />
                                <rect y="16" width="32" height="4" fill="#B22234" />
                                <rect y="20" width="32" height="4" fill="white" />
                                <rect y="24" width="32" height="4" fill="#B22234" />
                                <rect width="14" height="16" fill="#3C3B6E" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-slate-900 dark:text-white text-sm">English</span>
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Professional</span>
                        </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-500/30 backdrop-blur-sm">
                        C1 Advanced
                    </span>
                </div>
            </div>
        </SpotlightCard>
    );
};
