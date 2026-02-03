/**
 * 📋 CV Data - Source of Truth
 * 
 * Centralized data for personal info, experience, education,
 * skills, projects, and highlights.
 */

import { PersonalInfo, ExperienceItem, EducationItem, TechStack, Project } from '../types';

// ============================================================================
// DATOS PERSONALES
// ============================================================================

export const PERSONAL_INFO: PersonalInfo = {
    name: "Luis Mir",
    titles: ["Ingeniero de IA", "Full Stack Developer"],
    email: "luismir1420@gmail.com",
    linkedin: "www.linkedin.com/in/luis-mir-68b5293aa",
    github: "github.com/luismir1004",
};

// ============================================================================
// PERFIL PROFESIONAL
// ============================================================================

export const PROFILE = {
    text: "Ingeniero de Software especializado en IA y Arquitectura Frontend. Diseño interfaces inmersivas y sistemas escalables que fusionan precisión técnica con una experiencia de usuario excepcional. Mi enfoque se centra en la optimización de rendimiento, la accesibilidad universal y la integración innovadora de agentes de inteligencia artificial.",
};

// ============================================================================
// TECH STACK
// ============================================================================

export const TECH_STACK: TechStack = [
    {
        title: "Frontend Ecosystem",
        specialty: "High-Performance Architectures",
        skills: [
            { name: "React 19", level: "Expert", isPrimary: true },
            { name: "Next.js 16", level: "Expert", isPrimary: true },
            { name: "TypeScript", level: "Expert" },
            { name: "Tailwind CSS 4", level: "Expert" },
            { name: "Zustand", level: "Advanced" },
            { name: "TanStack Query", level: "Advanced" }
        ]
    },
    {
        title: "AI Engineering",
        specialty: "RAG & Agentic Systems",
        skills: [
            { name: "Python", level: "Advanced" },
            { name: "LangChain", level: "Lead", isPrimary: true },
            { name: "OpenAI API", level: "Expert", isPrimary: true },
            { name: "RAG Arch", level: "Expert", isPrimary: true },
            { name: "Vector Search", level: "Advanced" },
            { name: "AI Agents", level: "Lead" }
        ]
    },
    {
        title: "Backend & Cloud",
        specialty: "Serverless & Edge Compute",
        skills: [
            { name: "Node.js", level: "Expert" },
            { name: "Edge Functions", level: "Expert", isPrimary: true },
            { name: "PostgreSQL", level: "Advanced" },
            { name: "Supabase", level: "Expert" },
            { name: "Vercel Infra", level: "Expert" },
            { name: "Docker", level: "Advanced" }
        ]
    },
    {
        title: "UI & Technical Art",
        specialty: "Immersive Experiences",
        skills: [
            { name: "Framer Motion", level: "Expert", isPrimary: true },
            { name: "Three.js", level: "Advanced" },
            { name: "GSAP", level: "Advanced" },
            { name: "Shadcn/ui", level: "Expert" },
            { name: "Radix", level: "Expert" },
            { name: "Technical CSS", level: "Expert" }
        ]
    },
    {
        title: "Operations & Quality",
        specialty: "Engineering Standards",
        skills: [
            { name: "CI/CD Actions", level: "Advanced" },
            { name: "Playwright", level: "Advanced" },
            { name: "Core Web Vitals", level: "Expert", isPrimary: true },
            { name: "Security (OWASP)", level: "Advanced" },
            { name: "Clean Arch", level: "Lead", isPrimary: true }
        ]
    }
];

// ============================================================================
// PROYECTOS
// ============================================================================

export const PROJECTS_DATA: Project[] = [
    {
        id: "pizzeria",
        url: "https://pizzeria-la-foccacia.vercel.app/",
        title: "Pizzería La Focaccia",
        description: "E-commerce de alta gama para el sector gastronómico.",
        problem: "La necesidad de una experiencia de pedido fluida y visualmente atractiva que reduzca la fricción en la personalización de productos complejos.",
        outcome: "Implementación de un sistema de gestión de estado reactivo y animaciones inmersivas, resultando en una interfaz intuitiva y de alto rendimiento.",
        tags: ["React", "Motion", "Tailwind", "UX Design"],
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "startup",
        url: "https://startup-proyecto-app.vercel.app/",
        title: "Trace SaaS Dashboard",
        description: "Panel analítico B2B para la visualización de datos complejos.",
        problem: "Transformar grandes volúmenes de datos en insights accionables a través de una interfaz modular y escalable.",
        outcome: "Arquitectura basada en componentes reutilizables y visualizaciones interactivas que facilitan la toma de decisiones basada en datos.",
        tags: ["Next.js", "TypeScript", "Data Viz", "SaaS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "tech-blog",
        url: "https://blog-vision-seven.vercel.app/",
        title: "DevChronicles Blog",
        description: "Plataforma de contenido optimizada para ingenieros.",
        problem: "Lograr una puntuación perfecta en Web Vitals manteniendo una rica experiencia de lectura técnica.",
        outcome: "Optimización Lighthouse 100/100 mediante generación estática y renderizado de MDX con resaltado de sintaxis nativo.",
        tags: ["Next.js", "MDX", "SEO", "Performance"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "ecommerce",
        url: "https://tiendaonline-git.vercel.app/",
        title: "LuxeMarket E-commerce",
        description: "Tienda online moderna centrada en la conversión y accesibilidad.",
        problem: "Crear una experiencia de compra persistente y accesible que funcione impecablemente en cualquier dispositivo.",
        outcome: "Integración de Zustand para persistencia y cumplimiento estricto de WCAG 2.1, mejorando la retención de usuarios.",
        tags: ["React", "Zustand", "Stripe", "A11y"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "portfolio-v1",
        url: "https://portafolioluis-gamma.vercel.app/",
        title: "Legacy Portfolio",
        description: "Primera iteración del ecosistema personal de marca.",
        problem: "Establecer una presencia digital inicial centrada en la claridad visual y la presentación de habilidades core.",
        outcome: "Diseño minimalista que sirvió como base para la evolución hacia arquitecturas web más complejas.",
        tags: ["React", "Vite", "CSS3", "Responsive"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
    }
];

// ============================================================================
// EXPERIENCIA LABORAL
// ============================================================================

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: "1",
        role: "Senior Frontend Architect",
        company: "Consultoría Independiente",
        date: "2026 - Presente",
        description: "Arquitectura de aplicaciones web progresivas (PWA) de alto rendimiento. Implementación de Server Components, integración de 'Clean Architecture' en el frontend y desarrollo de micro-frontends.",
        technologies: ["Next.js 16", "React Server Components", "TurboRepo", "System Design"]
    },
    {
        id: "2",
        role: "Full Stack Developer",
        company: "Pizzería La Foccacia (Proyecto Master)",
        date: "Finales 2025",
        description: "Ingeniería completa de una plataforma e-commerce SPA. Desarrollo de un sistema de gestión de estado complejo para personalización de productos en tiempo real y optimización de renderizado para móviles.",
        technologies: ["React Ecosystem", "State Machines", "Payment Gateways", "UX Research"]
    },
    {
        id: "3",
        role: "Web Solutions Developer",
        company: "Freelance",
        date: "Mediados 2025",
        description: "Desarrollo de soluciones CMS personalizadas y temas corporativos. Optimización técnica SEO y mejora de Core Web Vitals para clientes internacionales, logrando puntuaciones de 95+.",
        technologies: ["PHP", "Custom WordPress", "MySQL", "Advanced SEO"]
    },
    {
        id: "4",
        role: "Frontend Developer",
        company: "Proyectos en Formación",
        date: "Principios 2025",
        description: "Implementación de interfaces pixel-perfect basadas en diseños de Figma. Creación de componentes reutilizables y accesibles, asegurando consistencia visual en múltiples plataformas.",
        technologies: ["Semantic HTML", "Sass", "JavaScript ES6+", "A11y"]
    }
];

// ============================================================================
// EDUCACIÓN
// ============================================================================

export const EDUCATION: EducationItem[] = [
    {
        id: "1",
        degree: "Certificación Profesional en Arquitectura Web",
        school: "Formación Especializada",
        date: "Mediados 2025 - Finales 2025",
        description: "Formación intensiva en arquitectura de software, patrones de diseño modernos, seguridad web y metodologías ágiles."
    },
    {
        id: "2",
        degree: "Fundamentos de Ciencias de la Computación",
        school: "Investigación Continua",
        date: "2025 - Presente",
        description: "Investigación autodidacta en estructuras de datos avanzadas, algoritmos de optimización y paradigmas de Inteligencia Artificial Generativa."
    }
];

// ============================================================================
// TRANSLATIONS (For AI Chat & UI)
// ============================================================================

export const TRANSLATIONS = {
    es: {
        role_1: "Arquitecto de Soluciones de IA",
        role_2: "Desarrollador Full Stack Senior",
    },
    en: {
        role_1: "AI Solutions Architect",
        role_2: "Senior Full Stack Dev",
    }
};
