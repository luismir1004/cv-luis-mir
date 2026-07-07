"use client";

import React, { createContext, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Dictionary, Language, LOCALES } from '@/dictionaries/types';
import { es } from '@/dictionaries/es';
import { en } from '@/dictionaries/en';
import { useMounted } from '@/hooks';

export type { Language };
export { LOCALES };

export const LANGUAGE_COOKIE = 'portfolio-language';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
    mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * The language is derived from the /[lang] route segment, so the server
 * and client always agree on it — no localStorage restore, no hydration
 * mismatch, no flash of the wrong language.
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage: Language }> = ({
    children,
    initialLanguage,
}) => {
    const language = initialLanguage;
    const router = useRouter();
    const pathname = usePathname();
    const mounted = useMounted();

    const setLanguage = (lang: Language) => {
        if (lang === language) return;

        // Persist the choice so the middleware redirects "/" here next visit
        document.cookie = `${LANGUAGE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;

        const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, '');
        router.push(`/${lang}${rest}`, { scroll: false });
    };

    const t = language === 'en' ? en : es;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }

    return context;
};
