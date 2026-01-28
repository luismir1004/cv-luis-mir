import { SpotlightCard } from '../ui/SpotlightCard';

import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';

interface ProfileProps {
    t: TranslationSchema;
    variants: Variants;
}

export const Profile = ({ t, variants }: ProfileProps) => {
    return (
        <SpotlightCard variants={variants} className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl p-8 flex items-center relative overflow-hidden" spotlightColor="rgba(99, 102, 241, 0.15)">
            <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <span className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight">{t.profile_title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: t.profile_text }}></p>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <svg className="w-64 h-64 text-slate-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
            </div>
        </SpotlightCard>
    );
};
