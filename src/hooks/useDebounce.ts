/**
 * ⏱️ useDebounce Hook
 * 
 * Debounce de valores y funciones para optimizar inputs y búsquedas.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook que retorna un valor con debounce
 * 
 * @param value - Valor a hacer debounce
 * @param delay - Delay en milisegundos
 * @returns Valor debounced
 * 
 * @example
 * const [search, setSearch] = useState('');
 * const debouncedSearch = useDebounce(search, 300);
 * 
 * useEffect(() => {
 *   // Esta búsqueda solo se ejecuta 300ms después del último cambio
 *   fetchResults(debouncedSearch);
 * }, [debouncedSearch]);
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Hook que retorna una función con debounce
 * 
 * @param fn - Función a hacer debounce
 * @param delay - Delay en milisegundos
 * @returns Función debounced
 * 
 * @example
 * const handleSearch = useDebouncedCallback(
 *   (query: string) => fetchResults(query),
 *   300
 * );
 * 
 * <input onChange={(e) => handleSearch(e.target.value)} />
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
    fn: T,
    delay: number = 500
): (...args: Parameters<T>) => void {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const debouncedFn = useCallback(
        (...args: Parameters<T>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                fn(...args);
            }, delay);
        },
        [fn, delay]
    );

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return debouncedFn;
}

/**
 * Hook que retorna valor, setter y estado de "typing"
 * Útil para mostrar indicadores de búsqueda
 * 
 * @example
 * const { value, debouncedValue, isDebouncing, setValue } = useDebouncedState('', 300);
 * 
 * return (
 *   <>
 *     <input value={value} onChange={(e) => setValue(e.target.value)} />
 *     {isDebouncing && <Spinner />}
 *   </>
 * );
 */
export function useDebouncedState<T>(initialValue: T, delay: number = 500) {
    const [value, setValue] = useState<T>(initialValue);
    const [isDebouncing, setIsDebouncing] = useState(false);
    const debouncedValue = useDebounce(value, delay);

    useEffect(() => {
        // Está "debouncing" si el valor actual es diferente al debounced
        setIsDebouncing(value !== debouncedValue);
    }, [value, debouncedValue]);

    return {
        value,
        debouncedValue,
        isDebouncing,
        setValue,
    };
}

export default useDebounce;
