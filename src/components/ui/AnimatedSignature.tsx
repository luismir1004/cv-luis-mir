'use client';

/**
 * ✍️ AnimatedSignature Component
 * 
 * Firma SVG animada con efecto de escritura.
 * Elemento distintivo premium para el Hero.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimatedSignatureProps {
    className?: string;
    /** Nombre a mostrar en la firma */
    name?: string;
    /** Color del trazo */
    strokeColor?: string;
    /** Duración de la animación en segundos */
    duration?: number;
    /** Delay antes de iniciar */
    delay?: number;
}

/**
 * Firma animada con efecto de escritura
 * 
 * @example
 * <AnimatedSignature name="Luis Mir" duration={3} />
 */
export const AnimatedSignature = ({
    className = '',
    name = 'Luis Mir',
    strokeColor,
    duration = 2.5,
    delay = 0.5,
}: AnimatedSignatureProps) => {
    const prefersReducedMotion = useReducedMotion();

    // Path de firma estilizada para "LM" (Luis Mir)
    const signaturePath = `
        M 10 60
        C 10 30, 30 20, 50 25
        Q 70 30, 80 50
        Q 90 70, 85 85
        L 85 85
        M 85 40
        L 120 40
        L 95 80
        L 130 80
        M 130 40
        L 130 80
        M 145 35
        Q 165 30, 175 45
        Q 185 60, 175 75
        Q 165 90, 145 85
    `;

    // Variantes para la animación del path (sin type annotation para evitar conflictos con Framer Motion)
    const pathVariants = {
        hidden: {
            pathLength: 0,
            opacity: 0,
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    type: 'spring' as const,
                    duration: prefersReducedMotion ? 0 : duration,
                    bounce: 0,
                    delay: prefersReducedMotion ? 0 : delay,
                },
                opacity: {
                    duration: 0.3,
                    delay: prefersReducedMotion ? 0 : delay,
                },
            },
        },
    };

    // Variantes para el underline
    const underlineVariants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                delay: prefersReducedMotion ? 0 : delay + duration - 0.5,
                duration: prefersReducedMotion ? 0 : 0.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            },
        },
    };

    // Variantes para el glow
    const glowVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0, 0.5, 0],
            transition: {
                delay: prefersReducedMotion ? 0 : delay + duration,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
            },
        },
    };

    const resolvedStrokeColor = strokeColor || 'url(#signature-gradient)';

    return (
        <div className={`relative inline-block ${className}`}>
            {/* Main Signature SVG */}
            <svg
                viewBox="0 0 200 100"
                className="w-48 h-24 sm:w-64 sm:h-32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="signature-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Animated Path */}
                <motion.path
                    d={signaturePath}
                    stroke={resolvedStrokeColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    filter="url(#glow)"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />

                {/* Underline/Flourish */}
                <motion.line
                    x1="10"
                    y1="90"
                    x2="180"
                    y2="90"
                    stroke={resolvedStrokeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ originX: 0 }}
                    variants={underlineVariants}
                    initial="hidden"
                    animate="visible"
                />
            </svg>

            {/* Glow Effect Behind */}
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-2xl -z-10"
                variants={glowVariants}
                initial="hidden"
                animate="visible"
            />

            {/* Text Fallback / Alt Name */}
            <span className="sr-only">{name}</span>
        </div>
    );
};

/**
 * Versión mejorada con gradiente interactivo que sigue el mouse
 */
export const AnimatedNameText = ({
    name = 'Luis Mir',
    className = '',
    delay = 0,
}: {
    name?: string;
    className?: string;
    delay?: number;
}) => {
    const prefersReducedMotion = useReducedMotion();
    const containerRef = React.useRef<HTMLSpanElement>(null);
    const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });

    // Track mouse position relative to container
    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.span
            ref={containerRef}
            className={`inline-block relative ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay }}
            style={{
                backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #6366f1 0%, #a855f7 30%, #ec4899 60%, #6366f1 100%)`,
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}
        >
            {name.split('').map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: prefersReducedMotion ? 0 : 0.3,
                        delay: prefersReducedMotion ? 0 : delay + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                        backgroundImage: 'inherit',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedSignature;
