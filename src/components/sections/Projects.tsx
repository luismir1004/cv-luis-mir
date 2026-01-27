import { useState } from 'react';
import { TiltCard } from '../ui/TiltCard';
import { PROJECTS_DATA } from '../../data';
import { ProjectModal } from '../ui/ProjectModal';
import { Project3D } from '../ui/Project3D';
import { Project, TranslationSchema } from '../../types';
import { Variants } from 'framer-motion';

interface ProjectsProps {
    t: TranslationSchema;
    variants: Variants;
    lang: 'es' | 'en';
}

export const Projects = ({ t, variants, lang }: ProjectsProps) => {
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
                {PROJECTS_DATA.map((project) => (
                    <TiltCard
                        variants={variants}
                        key={project.id}
                        className="group relative h-full glass-card rounded-3xl overflow-hidden p-6 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-500 cursor-pointer"
                        onClick={() => handleOpenModal(project)}
                    >
                        <div className="block h-full flex flex-col justify-between">
                            {/* Bg Icon replaced by 3D Scene */}
                            {/* <div className="absolute -bottom-8 -right-8 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900 dark:text-white transform rotate-12 scale-150 pointer-events-none" dangerouslySetInnerHTML={{ __html: project.icons.bg }}></div> */}
                            <Project3D color={project.colors.hex} />

                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <div className={`p-3 ${project.colors.iconBg} rounded-2xl ${project.colors.iconText} shadow-sm`} dangerouslySetInnerHTML={{ __html: project.icons.tech }}></div>
                                <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-200 dark:border-slate-700 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-colors">Quick View</span>
                            </div>

                            <div className="relative z-10 flex flex-col flex-grow">
                                <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-2 ${project.colors.hoverText} transition-colors group-hover:translate-x-1 duration-300`}>{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{project.description[lang]}</p>
                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </>
    );
};
