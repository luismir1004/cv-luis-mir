import { motion } from 'framer-motion';

import { Variants } from 'framer-motion';

interface FooterProps {
    variants: Variants;
}

export const Footer = ({ variants }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            variants={variants}
            className="w-full mt-12 pt-8 pb-20 border-t border-slate-200 dark:border-slate-800"
        >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-500">

                {/* Status Indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="tracking-wide text-emerald-600 dark:text-emerald-400 uppercase">System Online</span>
                </div>

                {/* Copyright & Signature */}
                <div className="text-center md:text-right">
                    <p>&copy; {currentYear} Luis Mir. All rights reserved.</p>
                    <p className="mt-1 opacity-70">
                        Engineered with <span className="text-slate-900 dark:text-white">React 18</span>, <span className="text-slate-900 dark:text-white">Tailwind</span> & <span className="text-slate-900 dark:text-white">Motion</span>.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};
