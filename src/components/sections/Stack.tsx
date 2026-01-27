import { TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';
import { TiltCard } from '../ui/TiltCard';
import { TechGraph } from '../ui/TechGraph';

interface StackProps {
    t: TranslationSchema;
    variants: Variants;
}



export const Stack = ({ t, variants }: StackProps) => {
    return (
        <TiltCard variants={variants} className="col-span-1 lg:col-span-1 row-span-2 glass-card rounded-3xl p-6 flex flex-col gap-8 overflow-hidden h-full">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                <span>{t.stack_title}</span>
            </h3>

            <div className="flex-1 w-full min-h-[300px] relative -mx-6 mb-[-24px]">
                <TechGraph />
                <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4 pointer-events-none">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Frontend</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">DevOps</span>
                    </div>
                </div>
            </div>
        </TiltCard>
    );
};
