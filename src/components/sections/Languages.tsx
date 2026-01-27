import { TiltCard } from '../ui/TiltCard';

import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';

interface LanguagesProps {
    t: TranslationSchema;
    variants: Variants;
}

export const Languages = ({ t, variants }: LanguagesProps) => {
    return (
        <TiltCard variants={variants} className="glass-card rounded-3xl p-6 flex flex-col justify-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-6 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                <span>{t.lang_title}</span>
            </h3>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.lang_es}</span>
                    <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">{t.lang_es_lvl}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.lang_en}</span>
                    <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-500/20">{t.lang_en_lvl}</span>
                </div>
            </div>
        </TiltCard>
    );
};
