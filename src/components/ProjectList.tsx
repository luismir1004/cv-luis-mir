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
        <section id="work" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-32">

                {/* Section Header */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-8 h-[2px] bg-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Portfolio Selection</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl font-black tracking-tighter text-foreground uppercase"
                    >
                        Proyectos<span className="text-primary">.</span>
                    </motion.h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-24 md:gap-40">
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

                                <div className="md:col-span-4 flex flex-col gap-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-border rounded-full text-muted-foreground bg-background/50 backdrop-blur-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            className="text-sm font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors flex items-center gap-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Ver Proyecto <ArrowUpRight className="w-4 h-4" />
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
