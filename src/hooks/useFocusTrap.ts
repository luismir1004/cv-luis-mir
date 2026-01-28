/**
 * 🎯 useFocusTrap Hook
 * 
 * Atrapa el foco del teclado dentro de un contenedor.
 * Esencial para accesibilidad en modales y diálogos.
 */

import { useEffect, useRef, useCallback } from 'react';

const FOCUSABLE_ELEMENTS = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable="false"])',
].join(', ');

interface UseFocusTrapOptions {
    /** Si el trap está activo */
    isActive?: boolean;
    /** Retornar el foco al elemento anterior cuando se desactive */
    returnFocusOnDeactivate?: boolean;
    /** Elemento inicial a enfocar cuando se active */
    initialFocusRef?: React.RefObject<HTMLElement>;
    /** Callback cuando se presiona Escape */
    onEscape?: () => void;
}

/**
 * Hook que atrapa el foco dentro de un contenedor
 * 
 * @param options - Opciones de configuración
 * @returns ref - Ref para adjuntar al contenedor
 * 
 * @example
 * const Modal = ({ isOpen, onClose }) => {
 *   const focusTrapRef = useFocusTrap({
 *     isActive: isOpen,
 *     onEscape: onClose,
 *   });
 * 
 *   return (
 *     <div ref={focusTrapRef} role="dialog" aria-modal="true">
 *       <button onClick={onClose}>Close</button>
 *       <input type="text" />
 *     </div>
 *   );
 * };
 */
export const useFocusTrap = <T extends HTMLElement = HTMLDivElement>(
    options: UseFocusTrapOptions = {}
) => {
    const {
        isActive = true,
        returnFocusOnDeactivate = true,
        initialFocusRef,
        onEscape,
    } = options;

    const containerRef = useRef<T>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Obtener elementos focuseables dentro del contenedor
    const getFocusableElements = useCallback((): HTMLElement[] => {
        if (!containerRef.current) return [];

        const elements = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS);
        return Array.from(elements).filter(
            (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1
        );
    }, []);

    // Manejar tecla Tab
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (!isActive || !containerRef.current) return;

            // Manejar Escape
            if (event.key === 'Escape' && onEscape) {
                event.preventDefault();
                onEscape();
                return;
            }

            // Solo manejar Tab
            if (event.key !== 'Tab') return;

            const focusableElements = getFocusableElements();
            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            // Shift + Tab desde el primer elemento -> ir al último
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
                return;
            }

            // Tab desde el último elemento -> ir al primero
            if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
                return;
            }
        },
        [isActive, getFocusableElements, onEscape]
    );

    // Guardar elemento activo y enfocar inicial cuando se activa
    useEffect(() => {
        if (!isActive) return;

        // Guardar elemento actualmente enfocado
        previousActiveElement.current = document.activeElement as HTMLElement;

        // Enfocar elemento inicial o primer focuseable
        const focusInitial = () => {
            if (initialFocusRef?.current) {
                initialFocusRef.current.focus();
            } else {
                const focusable = getFocusableElements();
                if (focusable.length > 0) {
                    focusable[0].focus();
                }
            }
        };

        // Pequeño delay para asegurar que el DOM esté listo
        const timeoutId = setTimeout(focusInitial, 0);

        return () => clearTimeout(timeoutId);
    }, [isActive, initialFocusRef, getFocusableElements]);

    // Retornar foco cuando se desactiva
    useEffect(() => {
        if (isActive) return;

        if (returnFocusOnDeactivate && previousActiveElement.current) {
            previousActiveElement.current.focus();
            previousActiveElement.current = null;
        }
    }, [isActive, returnFocusOnDeactivate]);

    // Agregar/remover event listeners
    useEffect(() => {
        if (!isActive) return;

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isActive, handleKeyDown]);

    return containerRef;
};

export default useFocusTrap;
