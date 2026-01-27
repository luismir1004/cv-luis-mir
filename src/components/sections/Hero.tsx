import { TiltCard } from '../ui/TiltCard';
import { SunIcon, MoonIcon } from '../ui/Icons';
import { MagneticButton } from '../ui/MagneticButton';
import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';

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
    return (
        <TiltCard
            variants={variants}
            className="group col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
        >
            <div className="absolute top-0 right-0 p-4 flex gap-2 z-20">
                <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                    {isDark ? <MoonIcon /> : <SunIcon />}
                </button>
                <button onClick={toggleLang} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium text-sm flex items-center gap-1 cursor-pointer">
                    <span>{lang === 'es' ? '🇪🇸' : '🇺🇸'}</span> <span>{lang === 'es' ? 'ES' : 'EN'}</span>
                </button>
            </div>

            <div className="mt-8">
                <div className="flex items-center gap-2 mb-6">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest">{t.open_to_work}</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                    <div className="text-lg sm:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-2 font-sans">Hola, soy</div>
                    <span className="text-gradient-premium">Luis Mir</span>
                </h1>
                <h2 className="text-xl font-medium text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed">
                    <span className="text-slate-900 dark:text-white font-semibold">{t.role_ai}</span> & <span className="text-slate-900 dark:text-white font-semibold">{t.role_fs}</span>.
                    <br />
                    <span className="text-sm opacity-80 mt-2 block font-light" dangerouslySetInnerHTML={{ __html: t.hero_subtitle }}></span>
                </h2>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                <MagneticButton onClick={() => window.print()}>
                    <button className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/20 cursor-pointer pointer-events-none">
                        {/* pointer-events-none on inner button to let Magnetic div handle clicks if needed, or better yet, make MagneticButton transparent and pass onClick */}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span>{t.download_cv}</span>
                    </button>
                </MagneticButton>

                <MagneticButton onClick={onOpenContact}>
                    <button className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-sm transition-colors cursor-pointer pointer-events-none">
                        Email
                    </button>
                </MagneticButton>

                <MagneticButton>
                    <a href="https://github.com/luismir1004" target="_blank" rel="noreferrer" className="block px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-sm transition-colors">GitHub</a>
                </MagneticButton>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
        </TiltCard>
    );
};
