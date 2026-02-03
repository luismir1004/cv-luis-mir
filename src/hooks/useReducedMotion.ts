/**
 * 🎯 useReducedMotion Hook
 * 
 * Detecta si el usuario prefiere movimiento reducido para accesibilidad.
 * Útil para deshabilitar o simplificar animaciones.
 */

import { useState, useEffect } from 'react';

/**
 * Hook que detecta la preferencia del usuario por movimiento reducido
 * @returns boolean - true si el usuario prefiere movimiento reducido
 * 
 * @example
 * const prefersReducedMotion = useReducedMotion();
 * 
 * return (
 *   <motion.div
 *     animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
 *   />
 * );
 */
export const useReducedMotion = (): boolean => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

    useEffect(() => {
        // Check if window is available (SSR safe)
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        // Set initial value inside effect to match client
        setPrefersReducedMotion(mediaQuery.matches);

        // Listen for changes
        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        // Modern browsers
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return prefersReducedMotion;
};

export default useReducedMotion;
