/**
 * 🖥️ useMediaQuery Hook
 * 
 * Detecta breakpoints y media queries de forma reactiva.
 * Útil para lógica condicional basada en viewport.
 */

import { useState, useEffect, useCallback } from 'react';

/**
 * Breakpoints predefinidos que coinciden con Tailwind CSS
 */
export const breakpoints = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
    // Comunes adicionales
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    desktop: '(min-width: 1024px)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',
    touch: '(hover: none) and (pointer: coarse)',
    mouse: '(hover: hover) and (pointer: fine)',
} as const;

export type BreakpointKey = keyof typeof breakpoints;

/**
 * Hook para detectar si un media query coincide
 * 
 * @param query - CSS media query string o key de breakpoints predefinidos
 * @returns boolean - true si el query coincide
 * 
 * @example
 * // Usando breakpoints predefinidos
 * const isMobile = useMediaQuery('mobile');
 * const isDesktop = useMediaQuery('desktop');
 * 
 * // Usando query personalizado
 * const isLargeScreen = useMediaQuery('(min-width: 1400px)');
 */
export const useMediaQuery = (query: BreakpointKey | string): boolean => {
    // Resolver query si es un breakpoint predefinido
    const resolvedQuery = (breakpoints as Record<string, string>)[query] || query;

    const getMatches = useCallback((): boolean => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia(resolvedQuery).matches;
    }, [resolvedQuery]);

    const [matches, setMatches] = useState<boolean>(getMatches);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia(resolvedQuery);

        // Update state initially
        setMatches(mediaQuery.matches);

        // Handler for changes
        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Add listener
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [resolvedQuery]);

    return matches;
};

/**
 * Hook que retorna múltiples breakpoints a la vez
 * 
 * @example
 * const { isMobile, isTablet, isDesktop } = useBreakpoints();
 */
export const useBreakpoints = () => {
    const isMobile = useMediaQuery('mobile');
    const isTablet = useMediaQuery('tablet');
    const isDesktop = useMediaQuery('desktop');
    const isSm = useMediaQuery('sm');
    const isMd = useMediaQuery('md');
    const isLg = useMediaQuery('lg');
    const isXl = useMediaQuery('xl');
    const is2xl = useMediaQuery('2xl');
    const isTouchDevice = useMediaQuery('touch');
    const prefersLight = useMediaQuery('light');
    const prefersDark = useMediaQuery('dark');

    return {
        isMobile,
        isTablet,
        isDesktop,
        isSm,
        isMd,
        isLg,
        isXl,
        is2xl,
        isTouchDevice,
        prefersLight,
        prefersDark,
    };
};

export default useMediaQuery;
