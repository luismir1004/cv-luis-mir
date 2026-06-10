"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    variant?: "default" | "alternate" | "highlight";
}

export const Section = ({ children, className = "", id, variant = "default" }: SectionProps) => {
    const baseStyles = "py-16 md:py-24 lg:py-32 relative overflow-hidden";
    
    const variantStyles = {
        default: "",
        alternate: "bg-muted/30",
        highlight: "bg-primary/5",
    };

    return (
        <motion.section
            id={id}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.section>
    );
};

export const SectionHeader = ({ 
    title, 
    subtitle, 
    description,
    align = "left" 
}: { 
    title: string; 
    subtitle?: string; 
    description?: string;
    align?: "left" | "center" | "right";
}) => {
    const alignStyles = {
        left: "text-left",
        center: "text-center items-center",
        right: "text-right items-end",
    };

    return (
        <motion.div
            className={`flex flex-col gap-4 mb-16 ${alignStyles[align]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {subtitle && (
                <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="w-8 h-[2px] bg-primary" />
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">
                        {subtitle}
                    </span>
                </motion.div>
            )}
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {title}
            </h2>
            
            {description && (
                <motion.p
                    className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};
