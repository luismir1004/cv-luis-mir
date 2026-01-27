import { motion } from 'framer-motion';

import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';

interface ProfileProps {
    t: TranslationSchema;
    variants: Variants;
}

export const Profile = ({ t, variants }: ProfileProps) => {
    return (
        <motion.section variants={variants} className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-slate-900 rounded-3xl p-8 flex items-center relative overflow-hidden text-white shadow-xl">
            <div className="relative z-10">
                <h3 className="font-display font-bold text-xl mb-3 opacity-90">{t.profile_title}</h3>
                <p className="text-indigo-100 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t.profile_text }}></p>
            </div>
            <svg className="absolute -right-8 -bottom-12 w-48 h-48 text-white opacity-10 rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
        </motion.section>
    );
};
