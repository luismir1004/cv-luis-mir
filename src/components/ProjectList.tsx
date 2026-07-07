"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { Section, SectionHeader } from './corporate/Section';
import { Badge } from './corporate/Badge';
import { Button } from './corporate/Button';
import { Card } from './corporate/Card';
import { useTranslation } from '@/context/LanguageContext';
import { useMounted } from '@/hooks';

export const ProjectList = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const mounted = useMounted();

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    return (
        <Section id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                    title={t.ui.projectsSection.title}
                    subtitle={t.ui.projectsSection.subtitle}
                    description={t.ui.projectsSection.subtitle} // Note: Dictionary maps subtitle as the long description, and page title as section title.
                    align="center"
                />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {t.projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card hover onClick={() => handleProjectClick(project)} className="h-full">
                                <div className="space-y-6">
                                    {/* Professional Image */}
                                    <div
                                        className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted/20"
                                    >
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.alt || `Screenshot of ${project.title}`}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 hover:scale-105"
                                                priority={index === 0}
                                                quality={75}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Project Content */}
                                    <div className="space-y-4">
                                        {/* Header */}
                                        <div className="space-y-2">
                                            <h3
                                                className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white hover:text-primary transition-colors cursor-pointer"
                                                onClick={() => handleProjectClick(project)}
                                            >
                                                {project.title}
                                            </h3>
                                            <p className="text-base text-slate-700 dark:text-slate-400 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 4).map(tag => (
                                                <Badge 
                                                    key={tag} 
                                                    variant="outline" 
                                                    size="sm"
                                                    className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {project.tags.length > 4 && (
                                                <Badge 
                                                    variant="default" 
                                                    size="sm"
                                                    className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700"
                                                >
                                                    {`+${project.tags.length - 4}`}
                                                </Badge>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        {mounted && (
                                            <div className="flex items-center gap-4 pt-4 border-t border-border/10">
                                                <Button 
                                                    variant="outline" 
                                                    size="sm"
                                                    onClick={() => window.open(project.url, '_blank')}
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    {t.ui.projectsSection.liveDemo}
                                                </Button>
                                                <Button 
                                                    variant="secondary" 
                                                    size="sm"
                                                    onClick={() => handleProjectClick(project)}
                                                    className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700/80"
                                                >
                                                    {t.ui.projectsSection.viewDetails}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
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
        </Section>
    );
};
