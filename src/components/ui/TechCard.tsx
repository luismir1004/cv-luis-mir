'use client';

/**
 * 💎 TechCard Premium Component
 * 
 * Card de tecnología con efectos visuales premium:
 * - Glass morphism mejorado
 * - Efecto aurora en hover
 * - Tilt 3D
 * - Indicadores de nivel animados
 * - Iconos oficiales de tecnologías
 */

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { TechCategory } from '../../data/tech-stack';
import { TechIcon } from './TechIcon';
import { SkillBar } from './SkillLevel';
import { Server, Layout, Cpu, type LucideIcon } from 'lucide-react';

const CategoryIcons: Record<string, LucideIcon> = {
    Layout: Layout,
    Server: Server,
    Brain: Cpu,
};

interface TechCardProps {
    category: TechCategory;
    index: number;
    lang?: 'es' | 'en';
}

export const TechCard = ({ category, index, lang = 'es' }: TechCardProps) => {
    const Icon = CategoryIcons[category.iconName] || Cpu;
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse position for aurora effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring for tilt
    const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

    // Color mappings
    const colorConfig: Record<string, {
        primary: string;
        glow: string;
        text: string;
        border: string;
        icon: string;
    }> = {
        cyan: {
            primary: 'rgba(6, 182, 212, 0.15)',
            glow: '#06b6d4',
            text: 'text-cyan-400',
            border: 'border-cyan-500/30 hover:border-cyan-500/60',
            icon: 'bg-cyan-500/20 text-cyan-400 ring-cyan-500/30',
        },
        emerald: {
            primary: 'rgba(16, 185, 129, 0.15)',
            glow: '#10b981',
            text: 'text-emerald-400',
            border: 'border-emerald-500/30 hover:border-emerald-500/60',
            icon: 'bg-emerald-500/20 text-emerald-400 ring-emerald-500/30',
        },
        violet: {
            primary: 'rgba(139, 92, 246, 0.15)',
            glow: '#8b5cf6',
            text: 'text-violet-400',
            border: 'border-violet-500/30 hover:border-violet-500/60',
            icon: 'bg-violet-500/20 text-violet-400 ring-violet-500/30',
        },
    };

    const colors = colorConfig[category.color] || colorConfig.cyan;

    // Handle mouse move for tilt and aurora
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // For aurora effect
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);

        // For tilt effect (subtle)
        const tiltX = (e.clientY - centerY) / 20;
        const tiltY = (centerX - e.clientX) / 20;

        rotateX.set(tiltX);
        rotateY.set(tiltY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
    };

    // Aurora gradient position
    const auroraX = useTransform(mouseX, (x) => `${x}px`);
    const auroraY = useTransform(mouseY, (y) => `${y}px`);

    const title = lang === 'es' ? category.titleEs : category.title;
    const description = lang === 'es' ? category.descriptionEs : category.description;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className={`
                group relative overflow-hidden rounded-3xl border backdrop-blur-xl
                transition-all duration-500 ease-out
                bg-white/60 dark:bg-slate-900/60
                ${colors.border}
                ${category.featured ? 'md:col-span-2 row-span-1' : 'col-span-1'}
                h-full min-h-[280px]
                hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30
            `}
        >
            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Aurora Gradient Effect */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${auroraX} ${auroraY}, ${colors.glow}20, transparent 40%)`,
                }}
            />

            {/* Gradient Border Glow */}
            <div
                className={`
                    absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 -z-10 blur-sm
                `}
                style={{
                    background: `linear-gradient(135deg, ${colors.glow}40, transparent 50%, ${colors.glow}20)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <motion.div
                        className={`p-2.5 rounded-2xl ring-1 ${colors.icon} backdrop-blur-sm`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <Icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                        <h3 className={`font-bold text-lg tracking-tight ${colors.text}`}>
                            {title}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Skills Grid */}
                <div className={`
                    grid gap-3 mt-auto
                    ${category.featured
                        ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
                        : 'grid-cols-1 sm:grid-cols-2'
                    }
                `}>
                    {category.skills.map((skill, skillIndex) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                            whileHover={{
                                y: -2,
                                scale: 1.02,
                                boxShadow: `0 8px 20px -4px ${skill.color}30`
                            }}
                            className={`
                                group/skill flex flex-col gap-2 p-3 rounded-xl
                                bg-white/80 dark:bg-slate-800/60
                                border border-slate-200/50 dark:border-slate-700/50
                                hover:border-slate-300 dark:hover:border-slate-600
                                transition-all duration-300 cursor-default
                            `}
                        >
                            <div className="flex items-center gap-2">
                                <TechIcon
                                    name={skill.iconId}
                                    size={20}
                                    className="flex-shrink-0"
                                />
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate">
                                    {skill.name}
                                </span>
                            </div>
                            <SkillBar
                                level={skill.level}
                                color={skill.color}
                                showPercentage={false}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TechCard;
