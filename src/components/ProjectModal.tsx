"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "../types";

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div className="w-full max-w-6xl h-full md:h-[85vh] bg-card border border-border/20 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black/50 pointer-events-auto relative">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md text-white/70 hover:text-white transition-colors border border-white/10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Left: Visual / "Device" */}
                            <div className="w-full md:w-1/2 bg-muted/30 relative flex items-center justify-center p-8 md:p-12 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-20" />

                                {/* Simulated Device Frame */}
                                <motion.div
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="relative w-full aspect-video rounded-lg shadow-2xl overflow-hidden border-[6px] border-border bg-black"
                                >
                                    {/* Screen Glare */}
                                    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                    <Image
                                        src={project.image || ""}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-pinnacle"
                                    />
                                </motion.div>
                            </div>

                            {/* Right: Narrative */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-card">
                                <div className="space-y-10">
                                    {/* Header */}
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
                                            {project.title}
                                        </h2>
                                        <p className="text-xl text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="h-[1px] w-full bg-border/40" />

                                    {/* The Story */}
                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">El Desafío</h3>
                                            </div>
                                            <p className="text-foreground/80 leading-relaxed font-medium pl-3 border-l border-border/30">
                                                {project.problem || "Definiendo la arquitectura técnica para resolver complejidades de escalabilidad y experiencia de usuario en un entorno competitivo."}
                                            </p>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">La Solución</h3>
                                            </div>
                                            <p className="text-foreground/80 leading-relaxed font-medium pl-3 border-l border-border/30">
                                                {project.outcome || "Implementación de una solución robusta utilizando las últimas tecnologías del stack moderno, priorizando rendimiento y accesibilidad."}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="pt-8 flex gap-4">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-foreground text-background font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/10"
                                        >
                                            <span>Ver Proyecto Activo</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                        {/* Optional Repo Link if available */}
                                        <button className="px-6 py-4 rounded-xl border border-border hover:bg-muted/50 transition-colors flex items-center justify-center">
                                            <Github className="w-5 h-5 text-foreground" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
