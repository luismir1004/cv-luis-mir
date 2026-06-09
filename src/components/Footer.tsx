"use client";

import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Download } from "lucide-react";
import { PERSONAL_INFO } from "../data/cv-data";
import { LocalTime } from "./LocalTime";
import { useScrambleText } from "../hooks/useScrambleText";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";


// --- Sub-components (Internal) ---

const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        x.set((clientX - center.x) * 0.35); // Weak pull
        y.set((clientY - center.y) * 0.35);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn("relative group cursor-none", className)}
        >
            {children}
        </motion.button>
    );
};

const DecryptedLink = ({ href, label, icon: Icon, subLabel }: { href: string, label: string, icon: any, subLabel: string }) => {
    const { text, setIsHovered } = useScrambleText(label);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex items-center justify-between p-6 border-b border-border/10 hover:bg-white/5 transition-colors"
        >
            {/* Hover Active Indicator - Left Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

            <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                    <h4 className="font-mono text-lg font-bold tracking-tight text-foreground/80 group-hover:text-primary transition-colors uppercase w-[120px]">
                        {text}
                    </h4>
                    <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest block mt-1">
                        {subLabel}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest animate-pulse">
                    SIGNAL_ACTIVE
                </span>
                <ArrowUpRight className="w-4 h-4 text-foreground/60" />
            </div>
        </a>
    );
};


import { CVAccessModal } from "./CVAccessModal";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [binaryStream, setBinaryStream] = useState("");

    useEffect(() => {
        setBinaryStream(Array.from({ length: 400 }).map(() => Math.random() > 0.5 ? '1' : '0').join(""));
    }, []);


    return (
        <footer className="relative w-full overflow-hidden bg-background pt-20 pb-10">
            {/* Frequency Visualizer Background (Simulation) */}
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.03] pointer-events-none flex items-end justify-between px-2 gap-[2px]">
                {Array.from({ length: 60 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-full bg-foreground"
                        initial={{ height: "10%" }}
                        animate={{ height: ["10%", "60%", "20%", "90%", "30%"] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: i * 0.05
                        }}
                    />
                ))}
            </div>

            <div className="w-full relative z-10">

                {/* Monolith Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border border-border/10 bg-card/5 backdrop-blur-sm">

                    {/* Left Column: Mission Control */}
                    <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-border/10 p-8 sm:p-12 md:p-24 lg:p-32 flex flex-col justify-between relative overflow-hidden group">

                        {/* Background Data Stream */}
                        <div className="absolute inset-0 opacity-[0.02] font-mono text-[8px] leading-[8px] pointer-events-none select-none overflow-hidden whitespace-pre-wrap break-all transition-opacity group-hover:opacity-[0.05]">
                            {binaryStream}
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 mb-12">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="font-mono text-[10px] md:text-xs font-medium text-emerald-500 uppercase tracking-[0.3em]">
                                    Sistema: En Línea
                                </span>
                            </div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tighter text-foreground uppercase leading-[0.8] mb-12"
                            >
                                Iniciar<br />
                                <span className="text-muted-foreground/20 group-hover:text-primary transition-colors duration-700">Enlace.</span>
                            </motion.h2>

                            <p className="max-w-xl text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed text-balance">
                                Estableciendo conexión segura. Disponible para colaboraciones de ingeniería avanzada y arquitectura de sistemas distribuidos a escala global.
                            </p>
                        </div>

                        <div className="mt-12 relative z-10">
                            <MagneticButton className="inline-block">
                                <a
                                    href={`mailto:${PERSONAL_INFO.email}`}
                                    className="text-xl md:text-3xl font-mono font-bold tracking-tighter text-foreground hover:text-emerald-500 transition-colors flex items-center gap-4 group/email"
                                >
                                    <span className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981] group-hover/email:shadow-[0_0_25px_#10b981] transition-shadow duration-500" />
                                    {PERSONAL_INFO.email}
                                </a>
                            </MagneticButton>
                        </div>
                    </div>

                    {/* Right Column: Signal Channels (Data Table) */}
                    <div className="lg:col-span-5 bg-background/40 flex flex-col">
                        <div className="p-6 border-b border-border/10 bg-white/5">
                            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
                                {`// Canales Seguros`}
                            </h3>
                        </div>

                        <div className="flex-1 overflow-hidden">
                            <DecryptedLink
                                href={`https://${PERSONAL_INFO.github}`}
                                label="GITHUB"
                                subLabel="Repositorio de Código"
                                icon={Github}
                            />
                            <DecryptedLink
                                href={`https://${PERSONAL_INFO.linkedin}`}
                                label="LINKEDIN"
                                subLabel="Red Profesional"
                                icon={Linkedin}
                            />


                            {/* CV Link wraps the modal trigger */}
                            <div onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="cursor-pointer">
                                <DecryptedLink
                                    href="#"
                                    label="CURRICULUM"
                                    subLabel="Solicitar Acceso"
                                    icon={Download}
                                />
                            </div>
                        </div>

                        <div className="p-10 mt-auto border-t border-border/10">
                            <LocalTime />
                        </div>
                    </div>
                </div>

                {/* Footer Meta */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/30">
                    <p>© {currentYear} Luis Mir. Todos los Sistemas Operativos.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-foreground cursor-pointer transition-colors">Protocolo de Privacidad</span>
                        <span className="hover:text-foreground cursor-pointer transition-colors">Términos de Servicio</span>
                    </div>
                </div>
            </div>

            <CVAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </footer>
    );
};
