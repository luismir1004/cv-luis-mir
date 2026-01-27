import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const [isHovered, setIsHovered] = useState(false);

    // Spring physics for smooth trailing
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    // Hide on touch devices
    if (typeof navigator !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-indigo-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-indigo-500 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: isHovered ? 1.5 : 1,
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
};
