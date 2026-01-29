import { useState } from 'react';
import { SpotlightCard } from '../ui/SpotlightCard';
// import { PROJECTS_DATA } from '../../data';
import { ProjectModal } from '../ui/ProjectModal';
// import { Project3D } from '../ui/Project3D'; // Removed for performance
import { Project, TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';

interface ProjectsProps {
    t: TranslationSchema;
    variants: Variants;
    lang: 'es' | 'en';
    projects: Project[];
}

export const Projects = ({ t, variants, lang, projects }: ProjectsProps) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <>
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
                lang={lang}
            />

            {/* 7. Projects Header */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8 mb-4 flex items-center gap-4">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="p-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-lg text-emerald-600 dark:text-emerald-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </span>
                    <span>{t.projects_title}</span>
                </h2>
                <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
            </div>

            {/* 8. Projects Grid */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <SpotlightCard
                        variants={variants}
                        key={project.id}
                        className="group relative h-full min-h-[320px] flex flex-col cursor-pointer hover:border-emerald-500/30 dark:hover:border-emerald-500/30"
                        onClick={() => handleOpenModal(project)}
                        spotlightColor="rgba(16, 185, 129, 0.2)" // Emerald glow
                    >
                        <div className="block h-full flex flex-col justify-between p-6">
                            {/* Neural Orb (CSS Replacement for Project3D) */}
                            <div
                                className="absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: project.colors.hex // Use dynamic project color
                                }}
                            />

                            {/* Inner gradient orb for precision */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at center, ${project.colors.hex}, transparent 70%)`
                                }}
                            />

                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <div className={`p-3 ${project.colors.iconBg} rounded-2xl ${project.colors.iconText} shadow-sm backdrop-blur-sm border border-white/10`} dangerouslySetInnerHTML={{ __html: project.icons?.tech || '' }}></div>
                                <span className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-bold uppercase tracking-wider rounded-md border border-slate-300 dark:border-slate-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300 shadow-sm cursor-pointer active:scale-95">Quick View</span>
                            </div>

                            <div className="relative z-10 flex flex-col flex-grow">
                                <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-2 ${project.colors.hoverText} transition-colors group-hover:translate-x-1 duration-300`}>{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{project.description[lang]}</p>
                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors py-1 px-1.5 bg-slate-100 dark:bg-slate-800 rounded">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </>
    );
};
