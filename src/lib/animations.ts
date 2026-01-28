/**
 * 🎬 Sistema Unificado de Animaciones
 * 
 * Centraliza todas las animaciones de Framer Motion para garantizar
 * consistencia visual y facilitar el mantenimiento.
 */

import { Variants, Transition } from 'framer-motion';

// ============================================================================
// TRANSITIONS - Timing curves reutilizables
// ============================================================================

export const springTransition: Transition = {
    type: 'spring',
    stiffness: 200,
    damping: 20,
};

export const springBouncy: Transition = {
    type: 'spring',
    stiffness: 300,
    damping: 15,
};

export const springGentle: Transition = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
};

export const easeOutExpo: Transition = {
    type: 'tween',
    ease: [0.16, 1, 0.3, 1],
    duration: 0.6,
};

export const easeInOutQuart: Transition = {
    type: 'tween',
    ease: [0.76, 0, 0.24, 1],
    duration: 0.5,
};

// ============================================================================
// VARIANTS - Patrones de animación reutilizables
// ============================================================================

/**
 * Fade In con movimiento hacia arriba y desenfoque inicial
 * Ideal para: Cards, secciones, elementos que aparecen al scroll
 */
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            ...springTransition,
            filter: { duration: 0.4 },
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: easeOutExpo,
    },
};

/**
 * Fade In simple sin movimiento
 * Ideal para: Overlays, backdrops, modales
 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 },
    },
};

/**
 * Scale In desde el centro
 * Ideal para: Modales, popups, tooltips
 */
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: springBouncy,
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.15 },
    },
};

/**
 * Slide desde la izquierda
 * Ideal para: Sidebars, menús laterales
 */
export const slideFromLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: easeOutExpo,
    },
    exit: {
        opacity: 0,
        x: -50,
        transition: { duration: 0.2 },
    },
};

/**
 * Slide desde la derecha
 * Ideal para: Paneles, drawers
 */
export const slideFromRight: Variants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: easeOutExpo,
    },
    exit: {
        opacity: 0,
        x: 50,
        transition: { duration: 0.2 },
    },
};

/**
 * Slide desde abajo (para modales centrados)
 * Ideal para: Modales, sheets
 */
export const slideFromBottom: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: springTransition,
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: { duration: 0.2 },
    },
};

// ============================================================================
// STAGGER CONTAINERS - Para animar grupos de elementos
// ============================================================================

/**
 * Container que staggers sus hijos
 * Uso: Agregar a un parent y usar childVariants en los hijos
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

/**
 * Variante para hijos de stagger containers
 */
export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: springGentle,
    },
};

// ============================================================================
// HOVER & TAP - Interacciones de usuario
// ============================================================================

/**
 * Hover con lift sutil
 * Ideal para: Cards, botones, elementos clickeables
 */
export const hoverLift = {
    scale: 1.02,
    y: -4,
    transition: springTransition,
};

/**
 * Hover con glow (requiere CSS para sombra)
 */
export const hoverGlow = {
    scale: 1.01,
    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
    transition: { duration: 0.3 },
};

/**
 * Tap feedback - presión
 */
export const tapScale = {
    scale: 0.97,
    transition: { duration: 0.1 },
};

/**
 * Hover y tap combinados para botones
 */
export const buttonMotion = {
    whileHover: { scale: 1.03, transition: { duration: 0.2 } },
    whileTap: { scale: 0.97, transition: { duration: 0.1 } },
};

// ============================================================================
// SCROLL ANIMATIONS
// ============================================================================

/**
 * Reveal on scroll - para usar con whileInView
 */
export const revealOnScroll: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: 'blur(8px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

/**
 * Parallax effect - para elementos con scroll
 */
export const parallaxY = (offset: number = 50): Variants => ({
    hidden: { y: offset },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 20,
        },
    },
});

// ============================================================================
// SPECIAL EFFECTS
// ============================================================================

/**
 * Shimmer/Skeleton loading animation
 */
export const shimmer: Variants = {
    initial: {
        backgroundPosition: '-200% 0',
    },
    animate: {
        backgroundPosition: '200% 0',
        transition: {
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
        },
    },
};

/**
 * Pulse animation
 */
export const pulse: Variants = {
    initial: { scale: 1, opacity: 1 },
    animate: {
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

/**
 * Typing cursor blink
 */
export const cursorBlink: Variants = {
    initial: { opacity: 1 },
    animate: {
        opacity: [1, 0, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.5, 1],
        },
    },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Crea un delay personalizado para una variante
 */
export const withDelay = (variants: Variants, delay: number): Variants => ({
    ...variants,
    visible: {
        ...variants.visible,
        transition: {
            ...(typeof variants.visible === 'object' && 'transition' in variants.visible
                ? variants.visible.transition
                : {}),
            delay,
        },
    },
});

/**
 * Verifica si el usuario prefiere movimiento reducido
 * (Para uso fuera de React hooks)
 */
export const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Retorna variantes simplificadas si el usuario prefiere movimiento reducido
 */
export const getAccessibleVariants = (variants: Variants): Variants => {
    if (prefersReducedMotion()) {
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
            exit: { opacity: 0, transition: { duration: 0.2 } },
        };
    }
    return variants;
};
