/**
 * 📋 CV Data - Source of Truth
 * 
 * Centralized data for personal info, experience, education,
 * skills, projects, and highlights.
 */

import { PersonalInfo, ExperienceItem, EducationItem, TechStack, Project, Course, CourseCategory } from '../types';

// ============================================================================
// DATOS PERSONALES
// ============================================================================

export const PERSONAL_INFO: PersonalInfo = {
    name: "Luis Alejandro Mir Jimenez",
    titles: ["Desarrollador Full Stack", "Ingeniero de IA"],
    email: "luismir1420@gmail.com",
    phone: "+584141234567",
    linkedin: "",
    github: "",
};

// ============================================================================
// PERFIL PROFESIONAL
// ============================================================================

export const PROFILE = {
    text: "Desarrollador Full Stack especializado en desarrollo web moderno utilizando flujos de trabajo asistidos por IA (Cursor, Copilot). Experto en el ecosistema React y arquitecturas Serverless, construyendo aplicaciones escalables que fusionan precisión técnica con experiencias de usuario excepcionales. Mi enfoque se centra en la optimización de rendimiento, accesibilidad universal y despliegues eficientes en la nube.",
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
            { name: "Tailwind CSS 4", level: "Expert", isPrimary: true },
            { name: "Diseño Web Profesional", level: "Advanced" },
            { name: "HTML, CSS, Grid, JS", level: "Expert" }
        ]
    },
    {
        title: "Backend & Cloud",
        specialty: "Serverless & Edge Compute",
        skills: [
            { name: "Supabase BaaS", level: "Expert", isPrimary: true },
            { name: "Node.js", level: "Expert" },
            { name: "Edge Functions", level: "Expert", isPrimary: true },
            { name: "PostgreSQL", level: "Advanced" },
            { name: "Vercel Infra", level: "Expert", isPrimary: true },
            { name: "Docker", level: "Advanced" }
        ]
    },
    {
        title: "AI Engineering",
        specialty: "AI-Assisted Development",
        skills: [
            { name: "Cursor IDE", level: "Expert", isPrimary: true },
            { name: "GitHub Copilot", level: "Expert", isPrimary: true },
            { name: "Python", level: "Advanced" },
            { name: "LangChain", level: "Advanced" },
            { name: "OpenAI API", level: "Advanced" },
            { name: "AI Agents", level: "Advanced" }
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
        id: "superautos-code",
        url: "https://superautos-code.vercel.app/",
        title: "Superautos Code",
        description: "Plataforma automotriz robusta con chat en tiempo real, mapas interactivos y catálogo de productos con UX pulida. Candidato a v1.0.",
        problem: "Desarrollar una plataforma completa para el sector automotriz que integre comunicación en tiempo real, visualización geográfica y gestión de inventario con una experiencia de usuario excepcional.",
        outcome: "Implementación exitosa de chat en tiempo real con Supabase, mapas interactivos, y un sistema de catálogo dinámico con UX optimizada. Arquitectura escalable lista para producción v1.0.",
        tags: ["Supabase", "Real-time Chat", "Interactive Maps", "UX Design"],
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "caribe-stay",
        url: "https://caribe-stay.vercel.app/",
        title: "Caribe Stay",
        description: "Plataforma de alquiler vacacional con seguridad avanzada en tiempo de ejecución.",
        problem: "Crear una plataforma de alquiler vacacional que maneje propiedades complejas con múltiples niveles de seguridad y gestión de reservas en tiempo real.",
        outcome: "Desarrollo de una implementación de seguridad compleja en tiempo de ejecución para componentes de detalles de propiedades, con sistema de reservas robusto y experiencia de usuario optimizada para dispositivos móviles.",
        tags: ["Runtime Security", "Vacation Rental", "React", "TypeScript"],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "tienda-alfareria",
        url: "https://tienda-alfareria.vercel.app/",
        title: "Tienda Online y Alfarería",
        description: "Soluciones de e-commerce con enrutamiento avanzado de SPA y despliegues optimizados en Vercel.",
        problem: "Implementar soluciones de e-commerce que demuestren enrutamiento avanzado de SPA, gestión de catálogos dinámicos y despliegues eficientes en plataformas cloud.",
        outcome: "Desarrollo de múltiples tiendas online con enrutamiento avanzado de SPA, catálogos dinámicos gestionables, y despliegues optimizados en Vercel con tiempos de carga mínimos.",
        tags: ["E-commerce", "Advanced Routing", "Vercel", "Dynamic Catalogs"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
    },
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
        date: "2024 - Presente",
        description: "Arquitectura de aplicaciones web progresivas (PWA) de alto rendimiento. Implementación de Server Components, integración de 'Clean Architecture' en el frontend y desarrollo de micro-frontends.",
        technologies: ["Next.js 16", "React Server Components", "TurboRepo", "System Design"]
    },
    {
        id: "2",
        role: "Full Stack Developer",
        company: "Pizzería La Foccacia (Proyecto Master)",
        date: "2024",
        description: "Ingeniería completa de una plataforma e-commerce SPA. Desarrollo de un sistema de gestión de estado complejo para personalización de productos en tiempo real y optimización de renderizado para móviles.",
        technologies: ["React Ecosystem", "State Machines", "Payment Gateways", "UX Research"]
    },
    {
        id: "3",
        role: "Web Solutions Developer",
        company: "Freelance",
        date: "2023 - 2024",
        description: "Desarrollo de soluciones CMS personalizadas y temas corporativos. Optimización técnica SEO y mejora de Core Web Vitals para clientes internacionales, logrando puntuaciones de 95+.",
        technologies: ["PHP", "Custom WordPress", "MySQL", "Advanced SEO"]
    },
    {
        id: "4",
        role: "Frontend Developer",
        company: "Proyectos en Formación",
        date: "2022 - 2023",
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
// CURSOS Y CERTIFICACIONES
// ============================================================================

export const COURSES: Course[] = [
    // Frontend & UI/UX
    {
        id: "diseno-web-profesional",
        title: "Diseño Web Profesional: Curso Completo, Práctico y desde 0",
        instructor: "Carlos Arturo Esparza (FalconMasters)",
        platform: "Udemy",
        category: "Frontend",
        year: 2024,
        duration: "97 horas",
        description: "Maquetación avanzada, CSS Grid, Flexbox, y fundamentos robustos de JavaScript y React."
    },
    // Full Stack & AI
    {
        id: "fullstack-nextjs-ai",
        title: "Full Stack Next.js - Drizzle ORM, Better Auth, AI SDK y TS",
        instructor: "Juan Pablo De la torre Valdez",
        platform: "Udemy",
        category: "Backend",
        year: 2024,
        duration: "24.5 horas",
        description: "Arquitecturas modernas, bases de datos con ORM, autenticación avanzada y desarrollo asistido con SDKs de Inteligencia Artificial."
    },
    // Backend & Cloud
    {
        id: "supabase-baas",
        title: "Curso de Supabase. Backend as a Service (BaaS) desde cero",
        instructor: "Ivan AlsiGo",
        platform: "Udemy",
        category: "Backend",
        year: 2024,
        duration: "6 horas",
        description: "Orquestación de bases de datos serverless, backend moderno y lógica en tiempo real (91 clases)."
    }
];

// Cursos agrupados por categoría para visualización organizada
export const COURSES_BY_CATEGORY: Record<CourseCategory, Course[]> = {
    'Frontend': COURSES.filter(course => course.category === 'Frontend'),
    'Backend': COURSES.filter(course => course.category === 'Backend'),
    'Cloud': COURSES.filter(course => course.category === 'Cloud'),
    'UI/UX': COURSES.filter(course => course.category === 'UI/UX'),
    'DevOps': COURSES.filter(course => course.category === 'DevOps'),
    'AI/ML': COURSES.filter(course => course.category === 'AI/ML'),
    'Mobile': COURSES.filter(course => course.category === 'Mobile'),
    'Database': COURSES.filter(course => course.category === 'Database')
};

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
