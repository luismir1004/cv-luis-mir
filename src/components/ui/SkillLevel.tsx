'use client';

/**
 * 📊 SkillLevel Component
 * 
 * Indicador visual de nivel de expertise con dots animados.
 * Escala de 1-5: ● ● ● ● ○
 */

import { motion } from 'framer-motion';
import { memo } from 'react';

interface SkillLevelProps {
    level: number; // 1-5
    maxLevel?: number;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    animate?: boolean;
}

const LEVEL_LABELS: Record<number, string> = {
    1: 'Beginner',
    2: 'Familiar',
    3: 'Proficient',
    4: 'Advanced',
    5: 'Expert',
};

/**
 * Componente de nivel de skill con dots
 */
export const SkillLevel = memo(({
    level,
    maxLevel = 5,
    color = '#6366f1',
    size = 'sm',
    showLabel = false,
    animate = true,
}: SkillLevelProps) => {
    const normalizedLevel = Math.min(Math.max(level, 0), maxLevel);

    const sizeClasses = {
        sm: 'w-1.5 h-1.5',
        md: 'w-2 h-2',
        lg: 'w-2.5 h-2.5',
    };

    const gapClasses = {
        sm: 'gap-1',
        md: 'gap-1.5',
        lg: 'gap-2',
    };

    return (
        <div className="flex items-center gap-2">
            <div className={`flex items-center ${gapClasses[size]}`}>
                {Array.from({ length: maxLevel }).map((_, index) => {
                    const isFilled = index < normalizedLevel;

                    return animate ? (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: index * 0.1,
                                type: 'spring',
                                stiffness: 400,
                                damping: 20,
                            }}
                            className={`
                                ${sizeClasses[size]} rounded-full transition-all duration-300
                                ${isFilled ? 'shadow-[0_0_6px_currentColor]' : 'bg-slate-300 dark:bg-slate-700'}
                            `}
                            style={{
                                backgroundColor: isFilled ? color : undefined,
                                color: isFilled ? color : undefined,
                            }}
                        />
                    ) : (
                        <div
                            key={index}
                            className={`
                                ${sizeClasses[size]} rounded-full transition-all duration-300
                                ${isFilled ? 'shadow-[0_0_6px_currentColor]' : 'bg-slate-300 dark:bg-slate-700'}
                            `}
                            style={{
                                backgroundColor: isFilled ? color : undefined,
                                color: isFilled ? color : undefined,
                            }}
                        />
                    );
                })}
            </div>

            {showLabel && (
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {LEVEL_LABELS[normalizedLevel] || 'Unknown'}
                </span>
            )}
        </div>
    );
});

SkillLevel.displayName = 'SkillLevel';

/**
 * Versión con barra de progreso
 */
export const SkillBar = memo(({
    level,
    maxLevel = 5,
    color = '#6366f1',
    showPercentage = false,
}: {
    level: number;
    maxLevel?: number;
    color?: string;
    showPercentage?: boolean;
}) => {
    const percentage = Math.round((level / maxLevel) * 100);

    return (
        <div className="flex items-center gap-2 w-full">
            <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                />
            </div>
            {showPercentage && (
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 w-8 text-right">
                    {percentage}%
                </span>
            )}
        </div>
    );
});

SkillBar.displayName = 'SkillBar';

export default SkillLevel;
