"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Filter, Tag } from "lucide-react";
import { PROJECTS_DATA, TECH_STACK } from "../data/cv-data";

export const SearchSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<"all" | "projects" | "skills">("all");

    // Filter projects
    const filteredProjects = useMemo(() => {
        if (activeFilter === "skills") return [];
        
        return PROJECTS_DATA.filter(project =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery, activeFilter]);

    // Filter skills
    const filteredSkills = useMemo(() => {
        if (activeFilter === "projects") return [];
        
        return TECH_STACK.filter(category =>
            category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.skills.some(skill => skill.name.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery, activeFilter]);

    const hasResults = filteredProjects.length > 0 || filteredSkills.length > 0;

    return (
        <section id="search" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">
                            Buscador Inteligente
                        </span>
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(2.5rem,6vw,6rem)] font-black tracking-tighter text-foreground uppercase leading-[0.85] mb-8"
                    >
                        Explora<span className="text-primary">.</span>
                    </motion.h2>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto relative"
                    >
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Buscar proyectos, tecnologías, habilidades..."
                                className="w-full pl-12 pr-12 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground/50" />
                                </button>
                            )}
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex justify-center gap-4 mt-6">
                            {(["all", "projects", "skills"] as const).map((filter) => (
                                <motion.button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                        activeFilter === filter
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-white/5 text-muted-foreground hover:bg-white/10"
                                    }`}
                                >
                                    {filter === "all" ? "Todo" : filter === "projects" ? "Proyectos" : "Skills"}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Results */}
                <AnimatePresence mode="wait">
                    {searchQuery && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            {hasResults ? (
                                <>
                                    {/* Projects Results */}
                                    {activeFilter !== "skills" && filteredProjects.length > 0 && (
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                                <Tag className="w-4 h-4 text-primary" />
                                                Proyectos ({filteredProjects.length})
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {filteredProjects.map((project) => (
                                                    <motion.a
                                                        key={project.id}
                                                        href={project.url}
                                                        target="_blank"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        whileHover={{ scale: 1.02 }}
                                                        className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all group"
                                                    >
                                                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                                            {project.title}
                                                        </h4>
                                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                                            {project.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tags.slice(0, 3).map(tag => (
                                                                <span
                                                                    key={tag}
                                                                    className="px-2 py-1 text-[10px] uppercase tracking-wider bg-primary/10 text-primary rounded-md"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Skills Results */}
                                    {activeFilter !== "projects" && filteredSkills.length > 0 && (
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                                <Filter className="w-4 h-4 text-primary" />
                                                Skills ({filteredSkills.length})
                                            </h3>
                                            <div className="space-y-3">
                                                {filteredSkills.map((category) => (
                                                    <motion.div
                                                        key={category.title}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                                                    >
                                                        <h4 className="font-bold text-foreground mb-2">{category.title}</h4>
                                                        <p className="text-xs text-muted-foreground mb-3">{category.specialty}</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {category.skills.map(skill => (
                                                                <span
                                                                    key={skill.name}
                                                                    className={`px-2 py-1 text-[10px] uppercase tracking-wider rounded-md ${
                                                                        skill.isPrimary
                                                                            ? "bg-primary text-primary-foreground"
                                                                            : "bg-white/10 text-muted-foreground"
                                                                    }`}
                                                                >
                                                                    {skill.name}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-12"
                                >
                                    <p className="text-muted-foreground/60 text-lg">
                                        No se encontraron resultados para "{searchQuery}"
                                    </p>
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="mt-4 text-primary hover:underline"
                                    >
                                        Limpiar búsqueda
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {!searchQuery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-center"
                    >
                        <p className="text-muted-foreground/60 max-w-xl mx-auto">
                            Comienza a escribir para buscar proyectos, tecnologías y habilidades específicas en tu portafolio.
                        </p>
                        
                        {/* Quick Suggestions */}
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {["Next.js", "React", "TypeScript", "E-commerce", "AI"].map((suggestion) => (
                                <motion.button
                                    key={suggestion}
                                    onClick={() => setSearchQuery(suggestion)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-muted-foreground hover:text-foreground transition-all"
                                >
                                    {suggestion}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};