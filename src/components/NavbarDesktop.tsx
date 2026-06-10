"use client";

import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

interface NavbarDesktopProps {
    onNavigate: (id: string) => void;
}

const navItems = [
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "work" },
    { label: "Education", id: "education" }
];

export const NavbarDesktop = ({ onNavigate }: NavbarDesktopProps) => {
    return (
        <div className="hidden md:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
            <div className="flex items-center gap-8">
                {navItems.map((item) => {
                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
                            aria-label={`Navigate to ${item.label}`}
                            whileHover={{ y: -1 }}
                        >
                            {item.label}
                            <motion.div
                                className="absolute -bottom-1 left-0 h-[2px] bg-primary w-0"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.button>
                    );
                })}
            </div>

            <div className="h-6 w-px bg-border/30" />

            <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <ThemeToggle />
                </motion.div>
            </div>
        </div>
    );
};