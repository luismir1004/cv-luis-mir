"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Section = ({ children, className, delay = 0 }: SectionProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            className={cn("w-full max-w-4xl mx-auto px-6", className)}
        >
            {children}
        </motion.section>
    );
};
