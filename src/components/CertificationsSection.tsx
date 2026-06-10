"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, Star, Zap, Cloud, ShieldCheck, Code2, Database, Layout, Monitor, Cpu, Smartphone } from "lucide-react";
import { COURSES_BY_CATEGORY } from "../data/cv-data";
import { CourseCategory } from "../types";

// Icon mapping for course categories
const CATEGORY_ICONS: Record<CourseCategory, any> = {
    'Frontend': Code2,
    'Backend': Database,
    'Cloud': Cloud,
    'UI/UX': Layout,
    'DevOps': Cpu,
    'AI/ML': Star,
    'Mobile': Smartphone,
    'Database': Monitor
};

// Color mapping for course categories
const CATEGORY_COLORS: Record<CourseCategory, string> = {
    'Frontend': 'from-blue-500 to-cyan-500',
    'Backend': 'from-purple-500 to-pink-500',
    'Cloud': 'from-orange-500 to-yellow-500',
    'UI/UX': 'from-green-500 to-emerald-500',
    'DevOps': 'from-red-500 to-rose-500',
    'AI/ML': 'from-indigo-500 to-violet-500',
    'Mobile': 'from-teal-500 to-cyan-500',
    'Database': 'from-amber-500 to-orange-500'
};

interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: any;
    color: string;
}

const ACHIEVEMENTS: Achievement[] = [
    {
        id: "1",
        title: "Arquitectura de Producto Destacada",
        description: "Desarrollo y despliegue autónomo de la plataforma automotriz 'Superautos Code', implementando bases de datos y chat en tiempo real.",
        icon: Trophy,
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: "2",
        title: "Especialista en Ecosistema Serverless",
        description: "Diseño y orquestación de arquitecturas modernas y escalables utilizando el ecosistema de Next.js 16 combinado con Supabase BaaS.",
        icon: Cloud,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "3",
        title: "Optimización de Rendimiento",
        description: "Mejora significativa en tiempos de carga (Core Web Vitals) e interactividad mediante técnicas avanzadas de code-splitting en React 19.",
        icon: Zap,
        color: "from-green-500 to-emerald-500"
    },
    {
        id: "4",
        title: "Garantía de Robustez y CI/CD",
        description: "Implementación de entornos TypeScript estrictos y flujos de despliegue automatizados vía Vercel para asegurar estabilidad en producción.",
        icon: ShieldCheck,
        color: "from-purple-500 to-pink-500"
    }
];

function CourseCard({ course, index }: { course: any; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    const Icon = CATEGORY_ICONS[course.category as CourseCategory] || Code2;
    const color = CATEGORY_COLORS[course.category as CourseCategory] || 'from-blue-500 to-cyan-500';

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border border-border/10 hover:border-border/20 dark:border-white/10 dark:hover:border-white/20 transition-all duration-500"
        >
            {/* Icon */}
            <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}
            >
                <Icon className="w-6 h-6 text-white" />
            </motion.div>

            {/* Content */}
            <h3 className="text-lg font-bold text-foreground dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/80 dark:group-hover:from-white dark:group-hover:to-white/80 transition-all duration-300">
                {course.title}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{course.instructor} • {course.platform}</p>

            {/* Description */}
            {course.description && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                    {course.description}
                </p>
            )}

            {/* Metadata */}
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>{course.year}</span>
                {course.duration && (
                    <span className="font-mono">{course.duration}</span>
                )}
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {course.category}
                </span>
            </div>

            {/* Decorative element */}
            <motion.div
                className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/60 transition-colors duration-300"
                whileHover={{ scale: 1.5 }}
            />
        </motion.div>
    );
}

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const Icon = achievement.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border border-border/10 hover:border-primary/30 dark:border-white/10 transition-all duration-500"
        >
            <div className="flex items-start gap-4">
                <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                >
                    <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {achievement.description}
                    </p>
                </div>
            </div>

            {/* Glow effect on hover */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 -z-10`}
            />
        </motion.div>
    );
}

export const CertificationsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>('All');
    
    // Filter courses by selected category
    const filteredCourses = selectedCategory === 'All' 
        ? Object.values(COURSES_BY_CATEGORY).flat()
        : COURSES_BY_CATEGORY[selectedCategory] || [];
    
    // Get categories with courses
    const categoriesWithCourses = Object.entries(COURSES_BY_CATEGORY)
        .filter(([_, courses]) => courses.length > 0)
        .map(([category, _]) => category as CourseCategory);

    const allCoursesCount = Object.values(COURSES_BY_CATEGORY).flat().length;

    return (
        <section id="certifications" className="py-24 md:py-48 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />
            </div>

            <div className="w-full relative z-10">
                {/* Section Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">
                            Educación Continua
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter text-slate-950 dark:text-white uppercase leading-[0.85] text-balance"
                    >
                        Formación<span className="text-primary">.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mt-6 text-balance"
                    >
                        Especialización continua en tecnologías modernas a través de formación estructurada y práctica. {allCoursesCount}+ cursos certificados en ecosistemas clave.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                                selectedCategory === 'All'
                                    ? 'bg-primary text-background'
                                    : 'bg-foreground/5 text-foreground hover:bg-foreground/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
                            }`}
                        >
                            Todos ({allCoursesCount})
                        </button>
                        {categoriesWithCourses.map((category) => {
                            const Icon = CATEGORY_ICONS[category];
                            const count = COURSES_BY_CATEGORY[category]?.length || 0;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                                        selectedCategory === category
                                            ? 'bg-primary text-background'
                                            : 'bg-foreground/5 text-foreground hover:bg-foreground/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
                                    }`}
                                >
                                    <Icon className="w-3 h-3" />
                                    {category} ({count})
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course, index) => (
                                <CourseCard key={course.id} course={course} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No hay cursos en esta categoría.</p>
                        </div>
                    )}
                </div>

                {/* Achievements Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-2">Logros Destacados</h3>
                        <p className="text-slate-600 dark:text-slate-400">Reconocimientos profesionales y logros técnicos significativos.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ACHIEVEMENTS.map((achievement, index) => (
                            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};