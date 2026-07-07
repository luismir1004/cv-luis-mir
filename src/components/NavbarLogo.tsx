"use client";

import Link from "next/link";

export const NavbarLogo = () => {
    return (
        <Link
            href="/"
            className="group flex flex-col items-start gap-0.5"
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Volver al inicio"
        >
            <span className="text-xl md:text-2xl font-bold tracking-tight leading-none text-foreground group-hover:text-primary transition-colors duration-300">
                LM<span className="text-primary">.</span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Luis Mir
            </span>
        </Link>
    );
};