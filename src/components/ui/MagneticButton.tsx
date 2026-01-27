import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number; // How far it moves
}

export const MagneticButton = ({ children, className = "", onClick, strength = 30 }: MagneticProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) }); // Scale using strength
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            className={`relative ${className}`}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};
