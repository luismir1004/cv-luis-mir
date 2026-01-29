/**
 * 🛠️ Tech Stack Data
 * 
 * Datos de las tecnologías con niveles de expertise.
 * Nivel 1-5: Beginner, Familiar, Proficient, Advanced, Expert
 */

export interface TechSkill {
    name: string;
    iconId: string; // ID para mapeo de icono
    color: string; // Color de la tecnología
    level: number; // 1-5 expertise level
}

export interface TechCategory {
    id: string;
    title: string;
    titleEs: string;
    description: string;
    descriptionEs: string;
    iconName: string;
    color: string;
    gradient: string; // Gradiente para el card
    skills: TechSkill[];
    featured?: boolean; // Si es el card principal
}

export const TECH_STACK: TechCategory[] = [
    {
        id: "frontend",
        title: "Frontend Mastery",
        titleEs: "Maestría Frontend",
        description: "Building pixel-perfect, responsive interfaces with modern architecture.",
        descriptionEs: "Construyendo interfaces pixel-perfect y responsivas con arquitectura moderna.",
        iconName: "Layout",
        color: "cyan",
        gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
        featured: true,
        skills: [
            { name: "React", iconId: "react", color: "#61DAFB", level: 5 },
            { name: "Next.js", iconId: "nextjs", color: "#000000", level: 5 },
            { name: "TypeScript", iconId: "typescript", color: "#3178C6", level: 5 },
            { name: "Tailwind CSS", iconId: "tailwindcss", color: "#06B6D4", level: 5 },
            { name: "Framer Motion", iconId: "framermotion", color: "#0055FF", level: 4 },
            { name: "Three.js", iconId: "threejs", color: "#FFFFFF", level: 4 },
        ]
    },
    {
        id: "backend",
        title: "Backend & Systems",
        titleEs: "Backend & Sistemas",
        description: "Scalable APIs, database design, and cloud infrastructure.",
        descriptionEs: "APIs escalables, diseño de bases de datos e infraestructura cloud.",
        iconName: "Server",
        color: "emerald",
        gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
        skills: [
            { name: "Node.js", iconId: "nodejs", color: "#339933", level: 4 },
            { name: "PostgreSQL", iconId: "postgresql", color: "#4169E1", level: 4 },

            { name: "Docker", iconId: "docker", color: "#2496ED", level: 3 },
        ]
    },
    {
        id: "ai",
        title: "AI Engineering",
        titleEs: "Ingeniería de IA",
        description: "Integrating LLMs and intelligent agents into web apps.",
        descriptionEs: "Integrando LLMs y agentes inteligentes en aplicaciones web.",
        iconName: "Brain",
        color: "violet",
        gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
        skills: [
            { name: "OpenAI API", iconId: "openaiapi", color: "#412991", level: 5 },
            { name: "LangChain", iconId: "langchain", color: "#1C3C3C", level: 4 },
            { name: "RAG Systems", iconId: "ragsystems", color: "#FFD700", level: 4 },
            { name: "Python", iconId: "python", color: "#3776AB", level: 4 },
        ]
    }
];

/**
 * Obtener todas las skills de todas las categorías
 */
export const getAllSkills = (): TechSkill[] => {
    return TECH_STACK.flatMap(category => category.skills);
};

/**
 * Obtener skills por nivel mínimo
 */
export const getSkillsByLevel = (minLevel: number): TechSkill[] => {
    return getAllSkills().filter(skill => skill.level >= minLevel);
};

/**
 * Obtener categoría por ID
 */
export const getCategoryById = (id: string): TechCategory | undefined => {
    return TECH_STACK.find(category => category.id === id);
};
