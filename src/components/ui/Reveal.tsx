'use client';

import { motion, Variants } from 'framer-motion';
import { revealOnScroll, springGentle } from '../../lib/animations';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    className?: string;
    id?: string;
    /** Tipo de animación */
    variant?: 'fadeInUp' | 'revealOnScroll' | 'custom';
    /** Variantes personalizadas */
    customVariants?: Variants;
    /** Si debe animar cuando entra en viewport */
    animateOnScroll?: boolean;
    /** Cuánto del elemento debe ser visible para animar (0-1) */
    threshold?: number;
    /** Si la animación solo debe ocurrir una vez */
    once?: boolean;
}

/**
 * Componente de revelado animado con soporte para scroll
 * 
 * @example
 * // Animación al cargar
 * <Reveal delay={0.2}>
 *   <Card />
 * </Reveal>
 * 
 * // Animación al entrar en viewport
 * <Reveal animateOnScroll once>
 *   <Section />
 * </Reveal>
 */
export const Reveal = ({
    children,
    width = '100%',
    delay = 0.25,
    className = '',
    id,
    variant = 'fadeInUp',
    customVariants,
    animateOnScroll = false,
    threshold = 0.1,
    once = true,
}: RevealProps) => {
    const prefersReducedMotion = useReducedMotion();

    // Seleccionar variantes basado en prop
    const getVariants = (): Variants => {
        if (customVariants) return customVariants;

        if (prefersReducedMotion) {
            return {
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { duration: 0.3, delay }
                },
            };
        }

        switch (variant) {
            case 'revealOnScroll':
                return revealOnScroll;
            case 'fadeInUp':
            default:
                return {
                    hidden: {
                        opacity: 0,
                        y: 20,
                        filter: 'blur(4px)',
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        transition: {
                            ...springGentle,
                            delay,
                            filter: { duration: 0.4, delay },
                        },
                    },
                };
        }
    };

    const variants = getVariants();

    return (
        <div
            id={id}
            className={className}
            style={{ position: 'relative', width, zIndex: 20 }}
        >
            <motion.div
                variants={variants}
                initial="hidden"
                {...(animateOnScroll
                    ? {
                        whileInView: 'visible',
                        viewport: {
                            once,
                            amount: threshold,
                            margin: '-50px 0px',
                        },
                    }
                    : {
                        animate: 'visible',
                    }
                )}
            >
                {children}
            </motion.div>
        </div>
    );
};

/**
 * Variante para stagger de múltiples elementos
 */
interface StaggerRevealProps {
    children: React.ReactNode[];
    className?: string;
    staggerDelay?: number;
    animateOnScroll?: boolean;
    once?: boolean;
}

export const StaggerReveal = ({
    children,
    className = '',
    staggerDelay = 0.1,
    animateOnScroll = false,
    once = true,
}: StaggerRevealProps) => {
    const prefersReducedMotion = useReducedMotion();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = prefersReducedMotion
        ? {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        }
        : {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: springGentle,
            },
        };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            {...(animateOnScroll
                ? {
                    whileInView: 'visible',
                    viewport: { once },
                }
                : {
                    animate: 'visible',
                }
            )}
        >
            {children.map((child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Reveal;
