"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
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
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                LM<span className="text-primary">.</span>
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                Building exceptional digital experiences with precision engineering and modern technologies.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="p-3 rounded-lg bg-background border border-border/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                                aria-label="Send Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            {PERSONAL_INFO.phone && (
                                <a
                                    href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-background border border-border/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
                                    aria-label="Contact via WhatsApp"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Skills", id: "skills" },
                                { label: "Experience", id: "experience" },
                                { label: "Projects", id: "work" },
                                { label: "Education", id: "education" }
                            ].map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
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
                        <h4 className="font-semibold text-foreground">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${PERSONAL_INFO.email}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
                            <li>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <LocalTime />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Luis Mir. All rights reserved.
                    </p>
                    
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ y: -2 }}
                    >
                        <span>Back to top</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};
