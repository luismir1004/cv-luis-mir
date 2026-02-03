"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PROJECTS_DATA } from '../data/cv-data';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';


export const ProjectList = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    return (
        <section id="work" className="py-24 md:py-48 relative">
            <div className="w-full space-y-32 md:space-y-64">

                {/* Section Header */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-[2px] bg-primary" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">Portfolio Selection</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(3.5rem,10vw,10rem)] font-black tracking-tighter text-foreground uppercase leading-[0.85]"
                    >
                        Proyectos<span className="text-primary">.</span>
                    </motion.h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-40 md:gap-72">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative flex flex-col gap-12"
                        >
                            {/* Cinematic Image Container */}
                            <div
                                onClick={() => handleProjectClick(project)}
                                className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[1rem] md:rounded-[2rem] cursor-pointer shadow-2xl shadow-black/20"
                            >
                                <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />

                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 90vw"
                                        className="object-cover transition-transform duration-[1.5s] ease-pinnacle group-hover:scale-105"
                                        priority={index === 0}
                                    />
                                )}

                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </span>
                                </div>
                            </div>

                            {/* Project Details */}
                            <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-border/10 pt-8">
                                <div className="md:col-span-8 space-y-4">
                                    <h3
                                        className="text-3xl md:text-5xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors cursor-pointer"
                                        onClick={() => handleProjectClick(project)}
                                    >
                                        {project.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="md:col-span-4 flex flex-col gap-8">
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest border border-border/40 rounded-full text-muted-foreground/60 bg-white/5 backdrop-blur-sm group-hover:text-primary/80 group-hover:border-primary/20 transition-all duration-500"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            className="text-sm font-black uppercase tracking-[0.2em] text-primary hover:text-foreground transition-all duration-500 flex items-center gap-4 group/link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="inline-block py-2 border-b-2 border-primary/20 group-hover/link:border-primary transition-all">Explorar Proyecto</span>
                                            <ArrowUpRight className="w-5 h-5 translate-y-0.5" />
                                        </a>
                                    </div>
                                </div>
                            </header>
                        </motion.article>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        isOpen={!!selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    );
};
