"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import DownloadCVButton from "./ui/DownloadCVButton";

interface MobileMenuProps {
    isOpen: boolean;
    onNavigate: (id: string) => void;
}

export const MobileMenu = ({ isOpen, onNavigate }: MobileMenuProps) => {
    const { t } = useTranslation();

    const navItems = [
        { label: t.ui.navbar.projects, id: "projects" },
        { label: t.ui.navbar.experience, id: "experience" },
        { label: t.ui.navbar.skills, id: "skills" },
        { label: t.ui.navbar.education, id: "education" }
    ];

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
                        
                        <div className="mt-8 pt-6 border-t border-border/20 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-muted-foreground">Idioma</span>
                                <LanguageSwitcher />
                            </div>
                            <DownloadCVButton />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};