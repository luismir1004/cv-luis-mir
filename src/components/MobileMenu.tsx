"use client";

import { Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO } from "../data/cv-data";

interface MobileMenuProps {
    isOpen: boolean;
    onNavigate: (id: string) => void;
}

const navItems = [
    { label: "Capacidades", id: "stack" },
    { label: "Trayectoria", id: "experience" },
    { label: "Proyectos", id: "work" }
];

export const MobileMenu = ({ isOpen, onNavigate }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menú de navegación móvil"
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col justify-center px-8"
                >
                    <div className="flex flex-col gap-8" role="navigation" aria-label="Navegación principal">
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                                onClick={() => onNavigate(item.id)}
                                className="text-4xl font-black tracking-tighter text-left uppercase text-foreground hover:text-primary transition-colors"
                                aria-label={`Navegar a sección ${item.label}`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 pt-12 border-t border-border/10 flex flex-col gap-8"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Preferencias</span>
                            <ThemeToggle />
                        </div>
                        <div className="flex items-center gap-6">
                            <a
                                href={`https://${PERSONAL_INFO.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-wider">GitHub</span>
                            </a>
                            <a
                                href={`https://${PERSONAL_INFO.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-wider">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};