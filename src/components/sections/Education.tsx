import { TiltCard } from '../ui/TiltCard';

import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';

interface EducationProps {
    t: TranslationSchema;
    variants: Variants;
}

export const Education = ({ t, variants }: EducationProps) => {
    return (
        <TiltCard variants={variants} className="flex-1 glass-card rounded-3xl p-6 flex flex-col justify-between">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold mb-1 tracking-wider">Location</span>
                    <div className="text-slate-900 dark:text-white font-medium text-sm flex items-center gap-1">
                        <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        Caracas, VE
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-bold mb-1 tracking-wider">Mode</span>
                    <div className="text-slate-900 dark:text-white font-medium text-sm">{t.location_type}</div>
                </div>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-5 mt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">{t.edu_title}</h4>
                <div className="space-y-3">
                    <div>
                        <div className="text-slate-900 dark:text-white font-bold text-sm">{t.edu_1_title}</div>
                        <div className="text-indigo-500 text-[10px] font-medium">2024 • Present</div>
                    </div>
                    <div>
                        <div className="text-slate-900 dark:text-white font-bold text-sm">{t.edu_2_title}</div>
                        <div className="text-slate-500 text-[10px] font-medium">2024</div>
                    </div>
                </div>
            </div>
        </TiltCard>
    );
};
