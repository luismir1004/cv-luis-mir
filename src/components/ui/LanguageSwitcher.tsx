"use client";

import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useTranslation();

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600 active:scale-95 cursor-pointer"
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
            <Globe className="w-4 h-4 text-primary" />
            <div className="relative overflow-hidden w-6 h-5 flex items-center justify-center">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                        key={language}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -12, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="font-bold uppercase inline-block"
                    >
                        {language}
                    </motion.span>
                </AnimatePresence>
            </div>
        </button>
    );
};
