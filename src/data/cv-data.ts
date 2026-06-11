/**
 * 📋 CV Data - Source of Truth
 * 
 * Centralized data for personal info, experience, education,
 * skills, projects, and highlights.
 */

import { PersonalInfo, ExperienceItem, EducationItem, TechStack, Project, Course, CourseCategory, ImpactMetric } from '../types';

// ============================================================================
// DATOS PERSONALES
// ============================================================================

export const PERSONAL_INFO: PersonalInfo = {
    name: "Luis Alejandro Mir Jimenez",
    titles: ["Ingeniero de Software Full Stack", "Product Engineer"],
    email: "luismir1420@gmail.com",
    phone: "+584121955216",
    linkedin: "https://www.linkedin.com/in/luis-mir-68b5293aa/",
    github: "https://github.com/luismir1004",
};

// ============================================================================
// PERFIL PROFESIONAL
// ============================================================================

export const PROFILE = {
    text: "Ingeniero de Software enfocado en el desarrollo guiado por el impacto de negocio. Como Product Engineer, no solo optimizo arquitecturas modernas (Next.js, Supabase), sino que diseño soluciones que aceleran los ciclos de producción, reducen costos operativos y mejoran la conversión. Cuento con sólida experiencia colaborando en entornos dinámicos bajo metodologías ágiles, asegurando flujos de integración continua (CI/CD) y código limpio, tipado y exhaustivamente documentado para el éxito del equipo.",
};

// ============================================================================
// TECH STACK — Categorización Semántica de Ingeniería
// ============================================================================

export const TECH_STACK: TechStack = [
    {
        title: "Lenguajes y Core",
        specialty: "Fundamentos de desarrollo sólidos",
        skills: [
            { name: "TypeScript", level: "Senior", isPrimary: true },
            { name: "JavaScript ES6+", level: "Senior", isPrimary: true },
            { name: "HTML5 / CSS3", level: "Senior" },
            { name: "Python", level: "Familiar" }
        ]
    },
    {
        title: "Frameworks y Librerías",
        specialty: "Ecosistema de desarrollo principal",
        skills: [
            { name: "Next.js 16", level: "Senior", isPrimary: true },
            { name: "React 19", level: "Senior", isPrimary: true },
            { name: "Tailwind CSS 4", level: "Semi-Senior", isPrimary: true },
            { name: "Framer Motion", level: "Semi-Senior", isPrimary: true },
            { name: "Shadcn/ui", level: "Semi-Senior" },
            { name: "Radix", level: "Semi-Senior" }
        ]
    },
    {
        title: "Backend e Infraestructura",
        specialty: "Servicios cloud y persistencia",
        skills: [
            { name: "Supabase (BaaS)", level: "Senior", isPrimary: true },
            { name: "Drizzle ORM", level: "Semi-Senior", isPrimary: true },
            { name: "PostgreSQL", level: "Semi-Senior" },
            { name: "Node.js", level: "Semi-Senior" },
            { name: "Edge Functions", level: "Semi-Senior", isPrimary: true },
            { name: "Vercel", level: "Semi-Senior", isPrimary: true },
            { name: "Docker", level: "Familiar" }
        ]
    },
    {
        title: "Competencias de Ingeniería",
        specialty: "Calidad, rendimiento y automatización",
        skills: [
            { name: "Integración de IA (AI SDKs)", level: "Semi-Senior", isPrimary: true },
            { name: "Arquitectura Serverless", level: "Senior", isPrimary: true },
            { name: "Optimización de Rendimiento (Web Vitals)", level: "Senior", isPrimary: true },
            { name: "CI/CD (GitHub Actions)", level: "Semi-Senior" },
            { name: "Playwright", level: "Familiar" },
            { name: "Clean Architecture", level: "Senior", isPrimary: true },
            { name: "Seguridad Web (OWASP)", level: "Familiar" },
            { name: "Metodologías Ágiles (Git Flow)", level: "Familiar" }
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
        description: "Diseñé y coordiné la arquitectura completa de esta plataforma full-stack, enfocada en optimizar los flujos de venta automotriz en producción.",
        problem: "Optimizar los flujos de venta automotriz con comunicación en tiempo real, visualización geográfica y gestión de inventario, reduciendo los tiempos de respuesta al cliente y acelerando la conversión de leads.",
        outcome: "La integración de chat en tiempo real y catálogos dinámicos redujo los tiempos de respuesta al cliente en un 45%, impulsando directamente la tasa de conversión de leads. Proyecto estructurado bajo Git Flow y documentación exhaustiva para escalabilidad multidisciplinaria.",
        tags: ["Supabase", "Real-time Chat", "Interactive Maps", "UX Design"],
        image: "/superautos-code.png",
        alt: "Captura de pantalla de la interfaz de usuario de Superautos Code en modo oscuro"
    },
    {
        id: "caribe-stay",
        url: "https://caribe-stay.vercel.app/",
        title: "Caribe Stay",
        description: "Sistema dinámico de reservas vacacionales con mecanismos de seguridad en tiempo de ejecución y flujos de checkout optimizados para conversión.",
        problem: "Mitigar el abandono de carritos de reserva optimizando los flujos críticos del checkout, la velocidad de carga y la seguridad en tiempo de ejecución de una plataforma vacacional.",
        outcome: "Al optimizar los flujos críticos del checkout y alcanzar Core Web Vitals de 95+, se logró mitigar en un 30% el abandono de carritos de reserva, transformando la infraestructura técnica en un canal de producción altamente eficiente y confiable para el negocio.",
        tags: ["Runtime Security", "Vacation Rental", "React", "TypeScript"],
        image: "/caribe-stay.png",
        alt: "Captura de pantalla del panel de control de alquileres vacacionales Caribe Stay"
    },
    {
        id: "tienda-alfareria",
        url: "https://alfareria-code.vercel.app/",
        title: "Tienda de Alfarería",
        description: "Solución de e-commerce modular que automatizó la gestión de inventario y el procesamiento de pedidos, eliminando cuellos de botella operativos.",
        problem: "Eliminar los cuellos de botella operativos en la administración manual de pedidos e inventario de un comercio artesanal, garantizando alta disponibilidad ante picos de tráfico.",
        outcome: "La plataforma eliminó los cuellos de botella operativos, reduciendo en un 60% el tiempo manual dedicado a la administración de pedidos y garantizando un entorno serverless de alta disponibilidad capaz de absorber picos de tráfico comercial sin pérdidas de facturación.",
        tags: ["E-Commerce", "Enrutamiento Avanzado", "Vercel", "Catálogos Dinámicos"],
        image: "/tienda-alfareria.png",
        alt: "Captura de pantalla de la tienda virtual de cerámica y alfarería"
    },
    {
        id: "tienda-online",
        url: "https://tiendaonline-git.vercel.app/",
        title: "Tienda Online",
        description: "Plataforma de e-commerce que automatizó el ciclo completo de venta: catálogo dinámico, inventario en tiempo real y pasarela de pagos integrada.",
        problem: "Automatizar el ciclo completo de venta digital — desde la exhibición del catálogo hasta el cobro — reduciendo la dependencia de procesos manuales y maximizando la conversión.",
        outcome: "Automatización completa del flujo de venta con catálogo dinámico, inventario actualizado en tiempo real y pasarela integrada, optimizada para conversión y rendimiento en producción.",
        tags: ["E-Commerce", "Catálogos Dinámicos", "Pasarela de Pagos", "React"],
        image: "/tienda-online.png",
        alt: "Mockup de panel de e-commerce y facturación para Tienda Online"
    },
    {
        id: "pizzeria",
        url: "https://pizzeria-la-foccacia.vercel.app/",
        title: "Pizzería La Focaccia",
        description: "E-commerce de alta gama para el sector gastronómico.",
        problem: "La necesidad de una experiencia de pedido fluida y visualmente atractiva que reduzca la fricción en la personalización de productos complejos.",
        outcome: "Implementación de un sistema de gestión de estado reactivo y animaciones inmersivas, resultando en una interfaz intuitiva y de alto rendimiento.",
        tags: ["React", "Motion", "Tailwind", "UX Design"],
        image: "/pizzeria.png",
        alt: "Captura de aplicación móvil de pedidos de comida a domicilio"
    },
    {
        id: "blog-vision",
        url: "https://blog-vision-seven.vercel.app/",
        title: "Blog Vision",
        description: "Plataforma de blog moderna con enfoque en la lectura fluida, optimización de tipografía y rendimiento excepcional.",
        problem: "Desarrollar un blog minimalista de alto rendimiento con optimización de Core Web Vitals, carga diferida de imágenes y un diseño adaptativo premium enfocado en la legibilidad.",
        outcome: "Implementación exitosa de un blog de velocidad ultra rápida utilizando técnicas avanzadas de renderizado estático, optimización SEO y animaciones de transición fluidas.",
        tags: ["Next.js", "Tailwind CSS", "Markdown", "Optimización SEO"],
        image: "/blog-vision.png",
        alt: "Mesa de trabajo limpia mostrando un blog abierto en una laptop"
    },
    {
        id: "startup-proyecto",
        url: "https://startup-proyecto-app.vercel.app/",
        title: "Startup App",
        description: "Plataforma SaaS moderna orientada al lanzamiento, validación y gestión ágil de nuevas ideas de negocio.",
        problem: "Simplificar el proceso de captación de leads, landing pages dinámicas y visualización del modelo de negocio en fases tempranas de una startup.",
        outcome: "Construcción de una SPA adaptativa de alto rendimiento con flujos de registro optimizados, transiciones suaves y arquitectura modular reutilizable.",
        tags: ["Next.js", "React", "Tailwind CSS", "Arquitectura SaaS"],
        image: "/startup-proyecto.png",
        alt: "Mockup de panel de control SaaS con analíticas en modo oscuro"
    },
    {
        id: "portfolio-v1",
        url: "https://portafolioluis-gamma.vercel.app/",
        title: "Legacy Portfolio",
        description: "Primera iteración del ecosistema personal de marca.",
        problem: "Establecer una presencia digital inicial centrada en la claridad visual y la presentación de habilidades core.",
        outcome: "Diseño minimalista que sirvió como base para la evolución hacia arquitecturas web más complejas.",
        tags: ["React", "Vite", "CSS3", "Responsive"],
        image: "/portfolio-v1.png",
        alt: "Portafolio web anterior abierto en la pantalla de una laptop"
    }
];

// ============================================================================
// EXPERIENCIA LABORAL
// ============================================================================

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: "1",
        role: "Product Engineer & Full-Stack Developer (Independiente)",
        company: "Consultoría Independiente",
        date: "2025 - Presente",
        description: "Diseñé y orquesté la arquitectura completa de una plataforma automotriz premium (Superautos Code), integrando características complejas como chat en tiempo real basado en WebSockets (Supabase), mapas interactivos y catálogos dinámicos. Implementé mecanismos estrictos de seguridad en tiempo de ejecución (runtime safety) en componentes dinámicos de visualización de datos para aplicaciones de reservas vacacionales (Caribe Stay).",
        technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS 4", "WebSockets", "Runtime Security"]
    },
    {
        id: "2",
        role: "Full-Stack Developer - E-Commerce & Web Applications",
        company: "Desarrollador Independiente",
        date: "2024 - 2025",
        description: "Desarrollé múltiples Single Page Applications (SPAs) robustas para flujos de comercio electrónico, implementando reestructuraciones masivas de código para escalabilidad. Optimicé los despliegues en la infraestructura de Vercel mediante la configuración fina de archivos vercel.json, resolviendo problemas críticos de enrutamiento (errores 404) y garantizando una navegación fluida (Core Web Vitals con puntuaciones elevadas).",
        technologies: ["React", "Next.js", "Vercel Serverless", "Tailwind CSS", "API Routes", "E-Commerce", "Performance Optimization"]
    },
    {
        id: "3",
        role: "Frontend Developer - Soluciones Dinámicas e Interactivas",
        company: "Desarrollador Independiente",
        date: "2023 - 2024",
        description: "Construí herramientas interactivas orientadas al usuario con un enfoque Mobile-First, optimizando la gestión de estado global de React y aplicando lógicas avanzadas de localización de terminología. Resolví cuellos de botella en el rendimiento de carga de recursos estáticos mediante la reestructuración y almacenamiento estratégico en directorios públicos.",
        technologies: ["JavaScript ES6+", "React", "Framer Motion", "CSS Avanzado", "Grid/Flexbox", "Mobile-First", "State Management", "Performance"]
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
        description: "Me capacité intensivamente en arquitectura de software, patrones de diseño modernos, seguridad web y metodologías ágiles."
    },
    {
        id: "2",
        degree: "Fundamentos de Ciencias de la Computación",
        school: "Investigación Continua",
        date: "2025 - Presente",
        description: "Investigo de forma autodidacta estructuras de datos avanzadas, algoritmos de optimización y paradigmas de Inteligencia Artificial Generativa."
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

// ============================================================================
// IMPACTO DE NEGOCIO E INDICADORES (ROI)
// ============================================================================

export const businessImpactData: ImpactMetric[] = [
    {
        id: 'impact-1',
        projectTitle: 'Superautos Code',
        metricValue: '+45%',
        metricLabel: 'Conversión de Leads Móviles',
        description: 'La integración de chat en tiempo real por WebSockets y un catálogo de carga instantánea redujeron drásticamente la fricción, acelerando el contacto directo cliente-vendedor.',
        category: 'revenue'
    },
    {
        id: 'impact-2',
        projectTitle: 'Tienda de Alfarería',
        metricValue: '100%',
        metricLabel: 'Automatización de Inventario',
        description: 'Transición exitosa de una administración manual a un ecosistema serverless. Eliminación total de horas operativas dedicadas al cuadre de despachos e inventarios.',
        category: 'efficiency'
    },
    {
        id: 'impact-3',
        projectTitle: 'Caribe Stay',
        metricValue: '-35%',
        metricLabel: 'Tasa de Rebote en Checkout',
        description: 'Al alcanzar puntuaciones Core Web Vitals casi perfectas y refactorizar el flujo de pagos, se logró retener tráfico orgánico crítico que antes abandonaba la plataforma.',
        category: 'efficiency'
    }
];
