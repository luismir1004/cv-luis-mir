import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface DockProps {
    items: { icon: React.ReactNode; label: string; onClick: () => void }[];
    className?: string;
}

export const FloatingDock = ({ items, className }: DockProps) => {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={`relative h-16 gap-4 items-end rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 pb-3 flex shadow-xl ${className}`}
        >
            {items.map((item, i) => (
                <IconContainer mouseX={mouseX} key={i} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    icon,
    label,
    onClick,
}: {
    mouseX: MotionValue;
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <div className="relative group">
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {label}
            </div>

            <motion.div
                ref={ref}
                style={{ width }}
                onClick={onClick}
                className="aspect-square w-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-black cursor-pointer transition-colors relative"
            >
                <div className="w-5 h-5">{icon}</div>
            </motion.div>
        </div>
    );
}
