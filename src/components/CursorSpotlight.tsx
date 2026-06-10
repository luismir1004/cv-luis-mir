"use client";

import { useMotionValue, useMotionTemplate, motion, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const CursorSpotlight = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    
    // Smooth cursor follow
    const cursorX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const cursorY = useSpring(mouseY, { stiffness: 150, damping: 20 });
    
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        
        function handleMouseMove({ clientX, clientY }: MouseEvent) {
            mouseX.set(clientX);
            mouseY.set(clientY);
        }

        function handleMouseOver(e: MouseEvent) {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            }
        }

        function handleMouseOut() {
            setIsHovering(false);
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, [mouseX, mouseY]);

    // Don't render custom cursor on mobile devices
    if (isMobile) {
        return (
            <motion.div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(var(--primary-rgb), 0.07),
                            transparent 80%
                        )
                    `,
                }}
            />
        );
    }

    return (
        <>
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            800px circle at ${mouseX}px ${mouseY}px,
                            rgba(var(--primary-rgb), 0.08),
                            transparent 70%
                        )
                    `,
                }}
            />
            
            {/* Custom Cursor */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                {/* Main cursor */}
                <motion.div
                    className="relative"
                    animate={{
                        scale: isHovering ? 2 : 1,
                        opacity: isHovering ? 0.8 : 1
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    }}
                >
                    <div className="w-8 h-8 rounded-full border-2 border-white" />
                    {/* Inner dot */}
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            scale: isHovering ? 0.5 : 1
                        }}
                    >
                        <div className="w-1 h-1 bg-foreground dark:bg-white rounded-full" />
                    </motion.div>
                </motion.div>
                
                {/* Trailing effect */}
                <motion.div
                    className="absolute top-0 left-0 w-8 h-8 rounded-full border border-white/30"
                    animate={{
                        x: -10,
                        y: -10,
                        scale: 0.8,
                        opacity: 0.5
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }}
                />
            </motion.div>
            
            {/* Hover indicator */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="pointer-events-none fixed top-0 left-0 z-50"
                        style={{
                            x: cursorX,
                            y: cursorY,
                        }}
                    >
                        <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
