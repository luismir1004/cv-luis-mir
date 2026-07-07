/**
 * 🪝 Hooks Index
 *
 * Exportación centralizada de todos los custom hooks.
 * Los hooks huérfanos fueron eliminados durante la auditoría de código.
 */

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Devuelve false durante SSR/hidratación y true una vez montado en el cliente.
 * Reemplaza el patrón useState(false) + useEffect(setMounted(true)),
 * que dispara renders en cascada.
 */
export function useMounted(): boolean {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );
}
