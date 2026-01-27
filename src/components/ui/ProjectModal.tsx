import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Project } from '../../types';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
    lang: 'es' | 'en';
}

export const ProjectModal = ({ isOpen, onClose, project, lang }: ProjectModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

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
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] cursor-pointer"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center p-4 z-[70] pointer-events-none"
                    >
                        <div className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 pointer-events-auto flex flex-col relative">

                            {/* Header Image Area */}
                            <div className={`h-48 sm:h-64 w-full relative overflow-hidden shrink-0 ${project.colors.iconBg}`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 transform scale-150" dangerouslySetInnerHTML={{ __html: project.icons.bg }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>

                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md rounded-full text-slate-900 dark:text-white transition-colors z-20 cursor-pointer"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 flex flex-col gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-2 rounded-xl ${project.colors.iconBg} ${project.colors.iconText}`} dangerouslySetInnerHTML={{ __html: project.icons.tech }}></div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">{project.title}</h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                                        {project.description[lang]}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-indigo-500/10"
                                    >
                                        <span>View Live Demo</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
