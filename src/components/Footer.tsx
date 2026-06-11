"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../data/cv-data";
import { LocalTime } from "./LocalTime";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full bg-muted/30 border-t border-border/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">
                                LM<span className="text-primary">.</span>
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                Construyendo experiencias digitales excepcionales con ingeniería de precisión y tecnologías modernas.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-4">
                            {PERSONAL_INFO.phone && (
                                <a
                                    href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-background border border-border/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                                    aria-label="Contactar vía WhatsApp"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            )}
                            {PERSONAL_INFO.linkedin && (
                                <a
                                    href={PERSONAL_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-background border border-border/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                                    aria-label="Perfil de LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            {PERSONAL_INFO.github && (
                                <a
                                    href={PERSONAL_INFO.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-background border border-border/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                                    aria-label="Perfil de GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-semibold text-slate-950 dark:text-white">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Proyectos", id: "projects" },
                                { label: "Experiencia", id: "experience" },
                                { label: "Habilidades", id: "skills" },
                                { label: "Educación", id: "education" }
                            ].map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="font-semibold text-slate-950 dark:text-white">Contacto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${PERSONAL_INFO.email}`}
                                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                                >
                                    {PERSONAL_INFO.email}
                                </a>
                            </li>
                            {PERSONAL_INFO.phone && (
                                <li>
                                    <a
                                        href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </a>
                                </li>
                            )}
                            {PERSONAL_INFO.linkedin && (
                                <li>
                                    <a
                                        href={PERSONAL_INFO.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </a>
                                </li>
                            )}
                            {PERSONAL_INFO.github && (
                                <li>
                                    <a
                                        href={PERSONAL_INFO.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                </li>
                            )}
                            <li>
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <LocalTime />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        © {currentYear} Luis Mir. Todos los derechos reservados.
                    </p>
                    
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                        whileHover={{ y: -2 }}
                    >
                        <span>Volver arriba</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};
