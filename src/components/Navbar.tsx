"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO } from "../data/cv-data";

import { MagneticWrapper } from "./MagneticWrapper";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
        }
    };

    const navItems = [
        { label: "Capacidades", id: "stack" },
        { label: "Trayectoria", id: "experience" },
        { label: "Proyectos", id: "work" }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 z-50 w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 transition-all duration-700 ease-pinnacle",
                    scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm" : "py-8 bg-transparent"
                )}
            >
                <div className="max-w-[2000px] mx-auto flex items-center justify-between">
                    {/* Logo & Identity */}
                    <a
                        href="/"
                        className="group flex flex-col items-start gap-0.5"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        aria-label="Volver al inicio"
                    >
                        <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-foreground group-hover:text-primary transition-colors duration-300">
                            LM<span className="text-primary group-hover:text-foreground">.</span>
                        </span>
                        <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            Luis Mir
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <MagneticWrapper key={item.id} strength={0.2}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
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

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors z-50 relative"
                        onClick={() => {
                            setMobileMenuOpen(!mobileMenuOpen);
                        }}
                        aria-label="Menú"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col justify-center px-8"
                    >
                        <div className="flex flex-col gap-8">
                            {navItems.map((item, i) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-4xl font-black tracking-tighter text-left uppercase text-foreground hover:text-primary transition-colors"
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
        </>
    );
};
