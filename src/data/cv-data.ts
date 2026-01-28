/**
 * 📋 CV Data - Datos Centralizados del CV
 * 
 * Toda la información personal, educación, certificaciones,
 * idiomas y highlights en un solo lugar.
 */

// ============================================================================
// TIPOS
// ============================================================================

export interface PersonalInfo {
    name: string;
    titles: string[];
    email: string;
    phone?: string;
    location: string;
    availability: string;
    linkedin?: string;
    github?: string;
    website?: string;
}

export interface Education {
    id: string;
    degree: string;
    degreeEs: string;
    institution: string;
    institutionEs: string;
    period: string;
    status: 'completed' | 'in_progress';
    description?: string;
    descriptionEs?: string;
}

export interface Certification {
    id: string;
    name: string;
    nameEs: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    icon?: string; // lucide icon name
}

export interface Language {
    code: string;
    name: string;
    nameEs: string;
    level: string;
    levelEs: string;
    proficiency: number; // 1-5
    flag: string; // emoji
}

export interface Highlight {
    value: string;
    label: string;
    labelEs: string;
    icon?: string;
}

// ============================================================================
// DATOS DEL CV
// ============================================================================

export const PERSONAL_INFO: PersonalInfo = {
    name: "Luis Mir",
    titles: ["AI Engineer", "Full Stack Developer"],
    email: "contact@luismir.dev",
    location: "Caracas, Venezuela",
    availability: "Remote / Hybrid",
    linkedin: "linkedin.com/in/luismir",
    github: "github.com/luismir1004",
    website: "luismir.dev",
};

export const EDUCATION: Education[] = [
    {
        id: "computer-eng",
        degree: "Computer Engineering",
        degreeEs: "Ingeniería en Computación",
        institution: "Universidad Metropolitana",
        institutionEs: "Universidad Metropolitana",
        period: "2024 - 2025",
        status: "in_progress",
        description: "Focus on software engineering, algorithms, and AI systems.",
        descriptionEs: "Enfoque en ingeniería de software, algoritmos y sistemas de IA.",
    },
];

export const CERTIFICATIONS: Certification[] = [
    {
        id: "ai-specialization",
        name: "AI Specialization",
        nameEs: "Especialización en IA",
        issuer: "DeepLearning.AI",
        date: "2024",
        icon: "Brain",
    },
    {
        id: "fullstack-cert",
        name: "Full Stack Development",
        nameEs: "Desarrollo Full Stack",
        issuer: "Professional Certification",
        date: "2024",
        icon: "Code",
    },
    {
        id: "react-advanced",
        name: "Advanced React Patterns",
        nameEs: "Patrones Avanzados de React",
        issuer: "Frontend Masters",
        date: "2024",
        icon: "Layers",
    },
];

export const LANGUAGES: Language[] = [
    {
        code: "es",
        name: "Spanish",
        nameEs: "Español",
        level: "Native",
        levelEs: "Nativo",
        proficiency: 5,
        flag: "🇪🇸",
    },
    {
        code: "en",
        name: "English",
        nameEs: "Inglés",
        level: "B2/C1 (Advanced)",
        levelEs: "B2/C1 (Avanzado)",
        proficiency: 4,
        flag: "🇺🇸",
    },
];

export const HIGHLIGHTS: Highlight[] = [
    {
        value: "1+",
        label: "Year Experience",
        labelEs: "Año de Experiencia",
        icon: "Calendar",
    },
    {
        value: "14+",
        label: "Technologies",
        labelEs: "Tecnologías",
        icon: "Code",
    },
    {
        value: "10+",
        label: "Projects Delivered",
        labelEs: "Proyectos Entregados",
        icon: "Rocket",
    },
    {
        value: "100%",
        label: "Passion",
        labelEs: "Pasión",
        icon: "Heart",
    },
];

// ============================================================================
// PROFILE TEXT
// ============================================================================

export const PROFILE = {
    en: {
        title: "About Me",
        text: "Result-oriented AI Engineer and Full Stack Developer, specialized in architecting scalable web solutions and autonomous agent systems. Expert in transforming complex technological concepts into intuitive, high-impact digital products.",
        highlights: [
            "Specialized in LLMs, RAG systems, and AI Agents",
            "Expert in React, Next.js, TypeScript ecosystem",
            "Focus on performance, accessibility, and UX",
        ],
    },
    es: {
        title: "Sobre Mí",
        text: "Ingeniero de IA y Desarrollador Full Stack orientado a resultados, especializado en la arquitectura de soluciones web escalables y sistemas de agentes autónomos. Experto en transformar conceptos tecnológicos complejos en productos digitales intuitivos y de alto impacto.",
        highlights: [
            "Especializado en LLMs, sistemas RAG y Agentes de IA",
            "Experto en ecosistema React, Next.js, TypeScript",
            "Enfoque en performance, accesibilidad y UX",
        ],
    },
};

// ============================================================================
// CTA DATA
// ============================================================================

export const CTA = {
    en: {
        title: "Ready to Transform Your Ideas?",
        subtitle: "I'm available for AI projects, web development, and technical consulting.",
        primaryButton: "Schedule a Call",
        secondaryButton: "Download CV",
    },
    es: {
        title: "¿Listo para Transformar tus Ideas?",
        subtitle: "Estoy disponible para proyectos de IA, desarrollo web y consultoría técnica.",
        primaryButton: "Agendar Llamada",
        secondaryButton: "Descargar CV",
    },
};
