/**
 * 🔒 useScrollLock Hook
 * 
 * Bloquea el scroll del body cuando está activo.
 * Útil para modales y sidebars que no deben permitir scroll de fondo.
 */

import { useEffect, useRef } from 'react';

interface UseScrollLockOptions {
    /** Si el lock está activo */
    isLocked?: boolean;
    /** Preservar la posición de scroll al desbloquear */
    preserveScrollPosition?: boolean;
}

/**
 * Hook que bloquea el scroll del body
 * 
 * @param options - Opciones de configuración
 * 
 * @example
 * const Modal = ({ isOpen }) => {
 *   useScrollLock({ isLocked: isOpen });
 * 
 *   return isOpen ? <div>Modal Content</div> : null;
 * };
 */
export const useScrollLock = (options: UseScrollLockOptions = {}): void => {
    const { isLocked = true, preserveScrollPosition = true } = options;
    const scrollPosition = useRef<number>(0);

    useEffect(() => {
        if (!isLocked) return;

        // Guardar posición de scroll actual
        if (preserveScrollPosition) {
            scrollPosition.current = window.scrollY;
        }

        // Calcular el ancho del scrollbar para evitar salto de contenido
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Guardar estilos originales
        const originalStyles = {
            overflow: document.body.style.overflow,
            position: document.body.style.position,
            top: document.body.style.top,
            width: document.body.style.width,
            paddingRight: document.body.style.paddingRight,
        };

        // Aplicar estilos de bloqueo
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        if (preserveScrollPosition) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition.current}px`;
            document.body.style.width = '100%';
        }

        return () => {
            // Restaurar estilos originales
            document.body.style.overflow = originalStyles.overflow;
            document.body.style.position = originalStyles.position;
            document.body.style.top = originalStyles.top;
            document.body.style.width = originalStyles.width;
            document.body.style.paddingRight = originalStyles.paddingRight;

            // Restaurar posición de scroll
            if (preserveScrollPosition) {
                window.scrollTo(0, scrollPosition.current);
            }
        };
    }, [isLocked, preserveScrollPosition]);
};

/**
 * Hook que retorna una función para toggle del scroll lock
 * 
 * @example
 * const { lock, unlock, isLocked } = useScrollLockControl();
 * 
 * return (
 *   <button onClick={isLocked ? unlock : lock}>
 *     {isLocked ? 'Unlock' : 'Lock'} Scroll
 *   </button>
 * );
 */
export const useScrollLockControl = () => {
    const scrollPosition = useRef<number>(0);
    const isLockedRef = useRef<boolean>(false);

    const lock = () => {
        if (isLockedRef.current) return;

        scrollPosition.current = window.scrollY;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition.current}px`;
        document.body.style.width = '100%';

        isLockedRef.current = true;
    };

    const unlock = () => {
        if (!isLockedRef.current) return;

        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        window.scrollTo(0, scrollPosition.current);
        isLockedRef.current = false;
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (isLockedRef.current) {
                unlock();
            }
        };
    }, []);

    return { lock, unlock, isLocked: isLockedRef.current };
};

export default useScrollLock;
