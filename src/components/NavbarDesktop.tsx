"use client";

import { Github, Linkedin } from "lucide-react";
import { MagneticWrapper } from "./MagneticWrapper";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO } from "../data/cv-data";
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
                <div className="flex items-center gap-2">
                    {[
                        { icon: Github, href: `https://${PERSONAL_INFO.github}`, label: "GitHub" },
                        { icon: Linkedin, href: `https://${PERSONAL_INFO.linkedin}`, label: "LinkedIn" }
                    ].map((social) => (
                        <MagneticWrapper key={social.label} strength={0.3}>
                            <motion.a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 relative group"
                                aria-label={`${social.label} Profile`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                <motion.div
                                    className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1.5 }}
                                />
                            </motion.a>
                        </MagneticWrapper>
                    ))}
                </div>
            </div>
        </div>
    );
};