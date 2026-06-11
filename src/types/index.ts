/**
 * 🛠️ Type Definitions
 */

export interface Project {
    id: string;
    url: string;
    title: string;
    description: string;
    problem?: string;
    outcome?: string;
    tags: string[];
    image?: string;
    alt?: string;
    githubUrl?: string;
}

export interface PersonalInfo {
    name: string;
    titles: string[];
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
}

export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    date: string;
    description: string;
    technologies?: string[];
}

export interface EducationItem {
    id: string;
    degree: string;
    school: string;
    date: string;
    description: string;
}

/**
 * Categorized Technology Stack
 */
export interface TechSkill {
    name: string;
    level: 'Senior' | 'Semi-Senior' | 'Familiar';
    isPrimary?: boolean;
}

export interface TechStackCategory {
    title: string;
    specialty: string;
    skills: TechSkill[];
}

export type TechStack = TechStackCategory[];

/**
 * Course & Certification Types
 */
export type CourseCategory = 'Frontend' | 'Backend' | 'Cloud' | 'UI/UX' | 'DevOps' | 'AI/ML' | 'Mobile' | 'Database';

export interface Course {
    id: string;
    title: string;
    instructor: string;
    platform: string;
    category: CourseCategory;
    year: number;
    duration?: string;
    description?: string;
    credentialId?: string;
    url?: string;
}

export type CourseCategoryGroup = {
    category: CourseCategory;
    icon: string;
    courses: Course[];
};

export interface ImpactMetric {
    id: string;
    projectTitle: string;
    metricValue: string; // Ej: "+$45K", "-60%", "99.9%"
    metricLabel: string; // Ej: "En ingresos generados", "Reducción de tiempo"
    description: string; // Detalle técnico del impacto cooperativo o financiero
    category: 'revenue' | 'efficiency' | 'collaboration';
}
