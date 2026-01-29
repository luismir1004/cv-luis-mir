import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Project } from '../../types';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
    lang: 'es' | 'en';
}

// Map common tech names to icon IDs
const techToIconId: Record<string, string> = {
    'React': 'react',
    'Next.js': 'nextjs',
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'Node.js': 'nodejs',
    'Tailwind CSS': 'tailwindcss',
    'TailwindCSS': 'tailwindcss',
    'PostgreSQL': 'postgresql',
    'MongoDB': 'mongodb',
    'Docker': 'docker',
    'Vercel': 'vercel',
    'Framer Motion': 'framermotion',
    'Three.js': 'threejs',
    'HTML5': 'html5',
    'CSS3': 'css3',
    'Sass': 'sass',
    'Git': 'git',
    'GitHub': 'github',
    'Figma': 'figma',
};

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

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
            return () => window.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    if (!project) return null;

    const labels = {
        es: {
            technologies: 'Tecnologías',
            viewDemo: 'Ver Demo',
            viewCode: 'Ver Código',
            features: 'Características',
        },
        en: {
            technologies: 'Technologies',
            viewDemo: 'View Demo',
            viewCode: 'View Code',
            features: 'Features',
        },
    };

    const t = labels[lang];

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
                        className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-[60] cursor-pointer"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 flex items-center justify-center p-4 z-[70] pointer-events-none"
                    >
                        <div className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700/50 pointer-events-auto flex flex-col relative">

                            {/* Header Image Area with Gradient */}
                            <div className={`h-40 sm:h-52 w-full relative overflow-hidden shrink-0 ${project.colors.iconBg}`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 transform scale-[2]" dangerouslySetInnerHTML={{ __html: project.icons.bg }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent"></div>

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    aria-label="Close modal"
                                    className="absolute top-4 right-4 p-2.5 bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md rounded-full text-slate-700 dark:text-white transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>

                                {/* Floating Icon */}
                                <div className={`absolute -bottom-6 left-6 p-4 rounded-2xl ${project.colors.iconBg} ${project.colors.iconText} shadow-xl border-4 border-white dark:border-slate-900`} dangerouslySetInnerHTML={{ __html: project.icons.tech }}></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 pt-10 sm:p-8 sm:pt-12 flex flex-col gap-6">
                                {/* Title & Description */}
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">{project.title}</h2>
                                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {project.description[lang]}
                                    </p>
                                </div>

                                {/* Technologies Section */}
                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/50">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">{t.technologies}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map(tag => (
                                            <motion.div
                                                key={tag}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                                            >
                                                <TechIcon
                                                    name={techToIconId[tag] || tag.toLowerCase().replace(/\s+/g, '')}
                                                    size={18}
                                                />
                                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{tag}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-slate-900/20 dark:shadow-white/10"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        <span>{t.viewDemo}</span>
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-slate-200 dark:border-slate-700"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span>{lang === 'es' ? 'Cerrar' : 'Close'}</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
