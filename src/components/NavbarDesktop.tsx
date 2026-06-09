"use client";

import { Github, Linkedin } from "lucide-react";
import { MagneticWrapper } from "./MagneticWrapper";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO } from "../data/cv-data";

interface NavbarDesktopProps {
    onNavigate: (id: string) => void;
}

const navItems = [
    { label: "Capacidades", id: "stack" },
    { label: "Trayectoria", id: "experience" },
    { label: "Proyectos", id: "work" }
];

export const NavbarDesktop = ({ onNavigate }: NavbarDesktopProps) => {
    return (
        <div className="hidden md:flex items-center gap-12" role="navigation" aria-label="Navegación principal">
            <div className="flex items-center gap-8">
                {navItems.map((item) => (
                    <MagneticWrapper key={item.id} strength={0.2}>
                        <button
                            onClick={() => onNavigate(item.id)}
                            className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label={`Navegar a sección ${item.label}`}
                        >
                            {item.label}
                        </button>
                    </MagneticWrapper>
                ))}
            </div>

            <div className="h-6 w-px bg-border/50" />

            <div className="flex items-center gap-6">
                <ThemeToggle />
                <div className="flex items-center gap-3">
                    <MagneticWrapper strength={0.3}>
                        <a
                            href={`https://${PERSONAL_INFO.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    </MagneticWrapper>
                    <MagneticWrapper strength={0.3}>
                        <a
                            href={`https://${PERSONAL_INFO.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </MagneticWrapper>
                </div>
            </div>
        </div>
    );
};