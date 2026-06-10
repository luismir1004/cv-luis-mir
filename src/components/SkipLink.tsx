"use client";

import { useEffect, useState } from 'react';

export const SkipLink = () => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                setIsFocused(true);
            }
            if (e.key === 'Escape') {
                setIsFocused(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const main = document.getElementById('main-content');
        if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a
            href="#main-content"
            onClick={handleSkip}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
                fixed top-0 left-1/2 -translate-x-1/2 z-[100]
                px-6 py-3 bg-primary text-primary-foreground
                font-bold text-sm rounded-b-lg
                transform transition-transform duration-200
                ${isFocused ? 'translate-y-0' : '-translate-y-full'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
            `}
        >
            Saltar al contenido principal
        </a>
    );
};