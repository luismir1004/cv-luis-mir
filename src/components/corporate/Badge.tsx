"use client";

import { motion } from "framer-motion";

interface BadgeProps {
    children: string;
    variant?: "default" | "primary" | "outline";
    size?: "sm" | "md";
    className?: string;
}

export const Badge = ({ 
    children, 
    variant = "default", 
    size = "md", 
    className = "" 
}: BadgeProps) => {
    const baseStyles = "inline-flex items-center font-semibold transition-all duration-300";
    
    const variantStyles = {
        default: "bg-muted text-muted-foreground hover:bg-muted/80",
        primary: "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
        outline: "border border-border text-foreground hover:border-primary/30",
    };

    const sizeStyles = {
        sm: "px-3 py-1 text-xs uppercase tracking-wider rounded-md",
        md: "px-4 py-1.5 text-sm uppercase tracking-wide rounded-full",
    };

    return (
        <motion.span
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.span>
    );
};
