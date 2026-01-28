import { useState, useEffect, useCallback } from 'react';

export const useTheme = () => {
    const [isDark, setIsDark] = useState(false);

    // Initialize from DOM on mount
    useEffect(() => {
        const isDarkInitial = document.documentElement.classList.contains('dark');
        setIsDark(isDarkInitial);
    }, []);

    const toggleTheme = useCallback(() => {
        setIsDark(prev => {
            const newIsDark = !prev;

            // Update DOM immediately
            if (newIsDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            // Persist to localStorage
            localStorage.setItem('color-theme', newIsDark ? 'dark' : 'light');

            return newIsDark;
        });
    }, []);

    return {
        theme: isDark ? 'dark' : 'light',
        toggleTheme,
        isDark
    };
};
