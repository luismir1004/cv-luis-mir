"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../data/cv-data";
import DownloadCVButton from "./ui/DownloadCVButton";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import { useTranslation } from "@/context/LanguageContext";

interface NavbarDesktopProps {
    onNavigate: (id: string) => void;
}

export const NavbarDesktop = ({ onNavigate }: NavbarDesktopProps) => {
    const { t } = useTranslation();
    
    const navItems = [
        { label: t.ui.navbar.projects, id: "projects" },
        { label: t.ui.navbar.experience, id: "experience" },
        { label: t.ui.navbar.skills, id: "skills" },
        { label: t.ui.navbar.education, id: "education" }
    ];

    return (
        <div className="hidden md:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
            <div className="flex items-center gap-8">
                {navItems.map((item) => {
                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors relative"
                            aria-label={`Navegar a ${item.label}`}
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

            <div className="flex items-center gap-3">
                <LanguageSwitcher />
                {PERSONAL_INFO.linkedin && (
                    <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                        aria-label="Perfil de LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                )}
                {PERSONAL_INFO.github && (
                    <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                        aria-label="Perfil de GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                )}
                <DownloadCVButton />
            </div>
        </div>
    );
};