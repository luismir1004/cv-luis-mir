/**
 * 💾 useLocalStorage Hook
 * 
 * Persistencia tipada en localStorage con sincronización entre tabs.
 * Maneja SSR de forma segura.
 */

import { useState, useEffect, useCallback } from 'react';

type SetValue<T> = T | ((prevValue: T) => T);

/**
 * Hook para persistir estado en localStorage con tipos.
 * 
 * @param key - Clave de localStorage
 * @param initialValue - Valor inicial si no existe en storage
 * @returns [storedValue, setValue, removeValue]
 * 
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'dark');
 * const [user, setUser] = useLocalStorage<User | null>('user', null);
 * 
 * // Actualizar
 * setTheme('light');
 * setUser({ name: 'Luis' });
 * 
 * // Eliminar
 * const [, , removeUser] = useLocalStorage('user', null);
 * removeUser();
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: SetValue<T>) => void, () => void] {
    // Estado para almacenar el valor
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    // Función para actualizar el valor
    const setValue = useCallback(
        (value: SetValue<T>) => {
            try {
                // Permitir valor funcional como en useState
                const valueToStore = value instanceof Function ? value(storedValue) : value;

                setStoredValue(valueToStore);

                if (typeof window !== 'undefined') {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));

                    // Disparar evento custom para sincronizar tabs
                    window.dispatchEvent(
                        new StorageEvent('storage', {
                            key,
                            newValue: JSON.stringify(valueToStore),
                        })
                    );
                }
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error);
            }
        },
        [key, storedValue]
    );

    // Función para eliminar el valor
    const removeValue = useCallback(() => {
        try {
            setStoredValue(initialValue);

            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);

                window.dispatchEvent(
                    new StorageEvent('storage', {
                        key,
                        newValue: null,
                    })
                );
            }
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    }, [key, initialValue]);

    // Sincronizar entre tabs
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleStorageChange = (event: StorageEvent) => {
            if (event.key !== key) return;

            try {
                if (event.newValue === null) {
                    setStoredValue(initialValue);
                } else {
                    setStoredValue(JSON.parse(event.newValue) as T);
                }
            } catch (error) {
                console.warn(`Error syncing localStorage key "${key}":`, error);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key, initialValue]);

    return [storedValue, setValue, removeValue];
}

/**
 * Hook simplificado solo para leer de localStorage (sin setter)
 */
export function useReadLocalStorage<T>(key: string): T | null {
    const [value, setValue] = useState<T | null>(() => {
        if (typeof window === 'undefined') return null;

        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleStorageChange = (event: StorageEvent) => {
            if (event.key !== key) return;

            try {
                setValue(event.newValue ? JSON.parse(event.newValue) : null);
            } catch {
                setValue(null);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key]);

    return value;
}

export default useLocalStorage;
