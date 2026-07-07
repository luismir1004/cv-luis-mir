"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dictionary } from '@/dictionaries/types';
import { es } from '@/dictionaries/es';
import { en } from '@/dictionaries/en';
import { useMounted } from '@/hooks';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
    mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('es');
    const mounted = useMounted();

    // Load saved language on mount to prevent SSR hydration mismatch.
    // Restoring a persisted preference requires a one-time setState here.
    useEffect(() => {
        const savedLanguage = localStorage.getItem('portfolio-language') as Language;
        if (savedLanguage === 'es' || savedLanguage === 'en') {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguageState(savedLanguage);
        } else {
            // Optional: detect browser language
            const browserLang = navigator.language.substring(0, 2);
            if (browserLang === 'en') {
                 
                setLanguageState('en');
            }
        }
    }, []);

    // Keep <html lang> in sync for SEO and screen readers,
    // including when the saved language is restored on mount
    useEffect(() => {
        if (mounted) {
            document.documentElement.lang = language;
        }
    }, [language, mounted]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('portfolio-language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: es, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    const localMounted = useMounted();

    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }

    // CRITICAL FIX: Dictionary selection happens locally to prevent Suspense hydration mismatches.
    // If we rely on global mounted state, dynamic components (like MetricsSection) will hydrate 
    // with the English dictionary because they resolve AFTER the global provider has updated.
    const t = !localMounted ? es : (context.language === 'en' ? en : es);

    return {
        ...context,
        t,
        mounted: localMounted
    };
};
