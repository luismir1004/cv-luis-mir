"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}

export const Card = ({ children, className = "", hover = false, onClick }: CardProps) => {
    const baseStyles = "bg-card/80 backdrop-blur-lg border border-border/10 shadow-sm rounded-xl p-6 transition-all duration-300";
    const hoverStyles = hover ? "hover:shadow-md hover:border-border/20 hover:translate-y-[-2px] cursor-pointer" : "";

    return (
        <motion.div
            className={`${baseStyles} ${hoverStyles} ${className}`}
            onClick={onClick}
            whileHover={hover ? { y: -4 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};
