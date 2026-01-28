'use client';

import { useState, useEffect } from 'react';

/**
 * 🌐 Hook useLang
 * 
 * Lee el idioma actual desde localStorage o el atributo lang del documento.
 * Sincronizado con el estado de idioma global de la aplicación.
 */
export const useLang = () => {
    const [lang, setLang] = useState<'es' | 'en'>('es');

    useEffect(() => {
        // Leer el idioma inicial desde localStorage o el documento
        const storedLang = localStorage.getItem('cv_lang') as 'es' | 'en' | null;
        const docLang = document.documentElement.lang as 'es' | 'en';

        if (storedLang === 'es' || storedLang === 'en') {
            setLang(storedLang);
        } else if (docLang === 'es' || docLang === 'en') {
            setLang(docLang);
        }

        // Observar cambios en el atributo lang del documento
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
                    const newLang = document.documentElement.lang as 'es' | 'en';
                    if (newLang === 'es' || newLang === 'en') {
                        setLang(newLang);
                    }
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        // También escuchar cambios en localStorage
        const handleStorage = (e: StorageEvent) => {
            if (e.key === 'cv_lang' && (e.newValue === 'es' || e.newValue === 'en')) {
                setLang(e.newValue);
            }
        };

        window.addEventListener('storage', handleStorage);

        return () => {
            observer.disconnect();
            window.removeEventListener('storage', handleStorage);
        };
    }, []);

    return { lang };
};

export default useLang;
