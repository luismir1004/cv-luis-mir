/**
 * 🖱️ useClickOutside Hook
 * 
 * Detecta clicks fuera de un elemento.
 * Útil para cerrar modales, dropdowns y popovers.
 */

import { useEffect, useRef, useCallback } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;

interface UseClickOutsideOptions {
    /** Si el handler está activo */
    enabled?: boolean;
    /** También escuchar eventos touch */
    listenToTouch?: boolean;
}

/**
 * Hook que ejecuta un callback cuando se hace click fuera del elemento
 * 
 * @param handler - Función a ejecutar cuando se hace click fuera
 * @param options - Opciones de configuración
 * @returns ref - Ref para adjuntar al elemento
 * 
 * @example
 * const Dropdown = ({ isOpen, onClose }) => {
 *   const ref = useClickOutside(onClose, { enabled: isOpen });
 * 
 *   return (
 *     <div ref={ref}>
 *       <button>Toggle</button>
 *       {isOpen && <ul>...</ul>}
 *     </div>
 *   );
 * };
 */
export const useClickOutside = <T extends HTMLElement = HTMLDivElement>(
    handler: Handler,
    options: UseClickOutsideOptions = {}
) => {
    const { enabled = true, listenToTouch = true } = options;
    const ref = useRef<T>(null);

    const listener = useCallback(
        (event: MouseEvent | TouchEvent) => {
            const element = ref.current;

            // No hacer nada si el click es dentro del elemento
            if (!element || element.contains(event.target as Node)) {
                return;
            }

            handler(event);
        },
        [handler]
    );

    useEffect(() => {
        if (!enabled) return;

        document.addEventListener('mousedown', listener);

        if (listenToTouch) {
            document.addEventListener('touchstart', listener);
        }

        return () => {
            document.removeEventListener('mousedown', listener);

            if (listenToTouch) {
                document.removeEventListener('touchstart', listener);
            }
        };
    }, [enabled, listener, listenToTouch]);

    return ref;
};

/**
 * Versión que acepta múltiples refs (útil para tooltips con trigger)
 * 
 * @example
 * const [triggerRef, contentRef] = useClickOutsideMultiple(onClose, {
 *   enabled: isOpen
 * });
 */
export const useClickOutsideMultiple = <T extends HTMLElement = HTMLDivElement>(
    handler: Handler,
    options: UseClickOutsideOptions = {},
    count: number = 2
): React.MutableRefObject<T | null>[] => {
    const { enabled = true, listenToTouch = true } = options;

    // Crear refs dinámicamente usando useRef para cada uno
    const refsRef = useRef<React.MutableRefObject<T | null>[]>([]);

    // Inicializar refs si no existen o si el count cambió
    if (refsRef.current.length !== count) {
        refsRef.current = Array.from({ length: count }, () => ({ current: null }));
    }

    const listener = useCallback(
        (event: MouseEvent | TouchEvent) => {
            // Verificar si el click está dentro de alguno de los elementos
            const isInside = refsRef.current.some((ref) => {
                const element = ref.current;
                return element && element.contains(event.target as Node);
            });

            if (!isInside) {
                handler(event);
            }
        },
        [handler]
    );

    useEffect(() => {
        if (!enabled) return;

        document.addEventListener('mousedown', listener);

        if (listenToTouch) {
            document.addEventListener('touchstart', listener);
        }

        return () => {
            document.removeEventListener('mousedown', listener);

            if (listenToTouch) {
                document.removeEventListener('touchstart', listener);
            }
        };
    }, [enabled, listener, listenToTouch]);

    return refsRef.current;
};

export default useClickOutside;
