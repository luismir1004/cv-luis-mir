import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

export const BackgroundEffects = () => {
    const { isDark } = useTheme();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="fixed inset-0 z-[-1] overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Grid Pattern */}
            <div className={`absolute inset-0 ${isDark ? 'bg-grid-white/[0.02]' : 'bg-grid-black/[0.02]'} bg-[size:50px_50px]`}></div>

            {/* Flashlight Effect */}
            <motion.div
                className="absolute -inset-px rounded-xl opacity-0 hover:opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            ${isDark ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.05)"},
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-slate-100/0 to-slate-100/0 dark:from-indigo-900/20 dark:via-slate-950/0 dark:to-slate-950/0"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
};
