'use client';

/**
 * ⏳ Skeleton Component
 * 
 * Estados de carga animados con efecto shimmer.
 * Reemplaza contenido mientras carga para mejor UX.
 */

import { cn } from '../../lib/utils';

interface SkeletonProps {
    className?: string;
    /** Número de líneas para skeleton de texto */
    lines?: number;
    /** Animación habilitada */
    animate?: boolean;
}

/**
 * Skeleton base con efecto shimmer
 */
export const Skeleton = ({ className, animate = true }: SkeletonProps) => (
    <div
        className={cn(
            'rounded-md bg-slate-200 dark:bg-slate-800',
            animate && 'animate-pulse',
            className
        )}
    />
);

/**
 * Skeleton de texto con múltiples líneas
 */
export const SkeletonText = ({ lines = 3, className }: SkeletonProps) => (
    <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, i) => (
            <Skeleton
                key={i}
                className={cn(
                    'h-4',
                    i === lines - 1 ? 'w-3/4' : 'w-full' // Última línea más corta
                )}
            />
        ))}
    </div>
);

/**
 * Skeleton de avatar circular
 */
export const SkeletonAvatar = ({
    className,
    size = 'md',
}: SkeletonProps & { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24',
    };

    return (
        <Skeleton className={cn('rounded-full', sizeClasses[size], className)} />
    );
};

/**
 * Skeleton de card completa
 */
export const SkeletonCard = ({ className }: SkeletonProps) => (
    <div
        className={cn(
            'rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4',
            className
        )}
    >
        <div className="flex items-center gap-4">
            <SkeletonAvatar size="md" />
            <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-3 w-1/3" />
            </div>
        </div>
        <SkeletonText lines={3} />
        <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
        </div>
    </div>
);

/**
 * Skeleton de proyecto (grid item)
 */
export const SkeletonProject = ({ className }: SkeletonProps) => (
    <div
        className={cn(
            'rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4',
            className
        )}
    >
        {/* Icon + Badge */}
        <div className="flex items-center justify-between">
            <Skeleton className="h-12 w-12 rounded-2xl" />
            <Skeleton className="h-6 w-20 rounded-md" />
        </div>

        {/* Title + Description */}
        <div className="space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <SkeletonText lines={2} />
        </div>

        {/* Tags */}
        <div className="flex gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-14" />
        </div>
    </div>
);

/**
 * Skeleton de timeline item
 */
export const SkeletonTimeline = ({ className }: SkeletonProps) => (
    <div className={cn('flex gap-4', className)}>
        {/* Node */}
        <div className="flex flex-col items-center">
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="w-0.5 h-full min-h-[100px]" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3 pb-8">
            <div className="flex justify-between">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-5 w-24 rounded-md" />
            </div>
            <Skeleton className="h-4 w-1/3" />
            <SkeletonText lines={2} />
        </div>
    </div>
);

/**
 * Skeleton de stack/tech card
 */
export const SkeletonTechCard = ({ className }: SkeletonProps) => (
    <div
        className={cn(
            'rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4',
            className
        )}
    >
        <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <Skeleton className="h-5 w-32" />
        </div>
        <SkeletonText lines={2} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-10 rounded-lg" />
            ))}
        </div>
    </div>
);

export default Skeleton;
