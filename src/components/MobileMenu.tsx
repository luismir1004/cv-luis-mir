"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
    isOpen: boolean;
    onNavigate: (id: string) => void;
}

const navItems = [
    { label: "Proyectos", id: "projects" },
    { label: "Experiencia", id: "experience" },
    { label: "Habilidades", id: "skills" },
    { label: "Educación", id: "education" }
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
                    className="fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl md:hidden flex flex-col justify-center px-8 overflow-x-hidden"
                >
                    <div className="flex flex-col gap-4" role="navigation" aria-label="Main navigation">
                        {navItems.map((item, i) => {
                            return (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.08), duration: 0.4 }}
                                    onClick={() => onNavigate(item.id)}
                                    className="text-2xl font-semibold text-left text-slate-950 dark:text-white hover:text-primary transition-colors py-2"
                                    aria-label={`Navigate to ${item.label}`}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item.label}
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};