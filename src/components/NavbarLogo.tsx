"use client";

export const NavbarLogo = () => {
    return (
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
    );
};