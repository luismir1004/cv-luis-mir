"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarDesktop } from "./NavbarDesktop";
import { MobileMenu } from "./MobileMenu";

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

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 z-50 w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 transition-all duration-700 ease-pinnacle",
                    scrolled ? "pt-10 pb-4 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm" : "pt-14 pb-8 bg-transparent"
                )}
            >
                <div className="max-w-[2000px] mx-auto flex items-center justify-between">
                    <NavbarLogo />
                    <NavbarDesktop onNavigate={scrollToSection} />

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

            <MobileMenu 
                isOpen={mobileMenuOpen} 
                onNavigate={scrollToSection}
            />
        </>
    );
};
