import { Project, Translations } from './types';

export const ICONS = {
    pizzeria: {
        bg: `<svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>`,
        tech: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>`
    },
    trace: {
        bg: `<svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z" /></svg>`,
        tech: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`
    },
    blog: {
        bg: `<svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" /></svg>`,
        tech: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>`
    },
    shop: {
        bg: `<svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>`,
        tech: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>`
    },
    portfolio: {
        bg: `<svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>`,
        tech: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`
    }
};

export const PROJECTS_DATA: Project[] = [
    {
        id: "pizzeria",
        url: "https://pizzeria-la-foccacia.vercel.app/",
        title: "Pizzería Focaccia",
        description: {
            es: "App de delivery con experiencia culinaria premium. UI inspirada en la Toscana con animaciones fluidas.",
            en: "Delivery app with a premium culinary experience. Tuscany-inspired UI with smooth animations."
        },
        tags: ["#MobileFirst", "#React", "#Vite"],
        colors: {
            iconBg: "bg-indigo-500/20",
            iconText: "text-indigo-400",
            hoverText: "group-hover:text-indigo-400",
            hex: "#818cf8"
        },
        icons: ICONS.pizzeria
    },
    {
        id: "trace",
        url: "https://startup-proyecto-app.vercel.app/",
        title: "Trace App",
        description: {
            es: "Landing page para SaaS con diseño de alto impacto. Integración de APIs y diseño responsivo.",
            en: "High-impact SaaS landing page. API integration and responsive design."
        },
        tags: ["#SaaS", "#Landing", "#Tailwind"],
        colors: {
            iconBg: "bg-purple-500/20",
            iconText: "text-purple-400",
            hoverText: "group-hover:text-purple-400",
            hex: "#c084fc"
        },
        icons: ICONS.trace
    },
    {
        id: "blog",
        url: "https://tech-blog-luismir.vercel.app/",
        title: "Tech Blog",
        description: {
            es: "Blog de tecnología con generación de sitio estático (SSG) y contenido en Markdown.",
            en: "Tech blog with Static Site Generation (SSG) and Markdown content."
        },
        tags: ["#SSG", "#Markdown", "#NextJS"],
        colors: {
            iconBg: "bg-blue-500/20",
            iconText: "text-blue-400",
            hoverText: "group-hover:text-blue-400",
            hex: "#60a5fa"
        },
        icons: ICONS.blog
    },
    {
        id: "shop",
        url: "https://tiendaonline-git.vercel.app/",
        title: "Tienda Online",
        description: {
            es: "E-commerce funcional con carrito de compras y gestión de estado global.",
            en: "Functional E-commerce with shopping cart and global state management."
        },
        tags: ["#E-commerce", "#State", "#Zustand"],
        colors: {
            iconBg: "bg-pink-500/20",
            iconText: "text-pink-400",
            hoverText: "group-hover:text-pink-400",
            hex: "#f472b6"
        },
        icons: ICONS.shop
    },
    {
        id: "portfolio-react",
        url: "https://portafolioluis-gamma.vercel.app/",
        title: "Portafolio React",
        description: {
            es: "Diseño moderno con Vite y React. Animaciones personalizadas y alto rendimiento.",
            en: "Modern design with Vite and React. Custom animations and high performance."
        },
        tags: ["#React", "#Vite", "#Framer"],
        colors: {
            iconBg: "bg-cyan-500/20",
            iconText: "text-cyan-400",
            hoverText: "group-hover:text-cyan-400",
            hex: "#22d3ee"
        },
        icons: ICONS.portfolio
    }
];

export const TRANSLATIONS: Translations = {
    es: {
        open_to_work: "Disponible para Nuevos Retos",
        role_ai: "AI Engineer",
        role_fs: "Full Stack Developer",
        hero_subtitle: "Construyendo la intersección entre <span class=\"text-gradient\">Inteligencia Artificial Cognitiva</span> y <span class=\"text-gradient\">Experiencias de Usuario Excepcionales</span>. <br> Diseño sistemas que no solo funcionan, sino que piensan.",
        download_cv: "Descargar CV",
        stack_title: "Stack Tecnológico",
        cat_ai: "Ingeniería de IA",
        cat_frontend: "Frontend de Élite",
        cat_infra: "Infraestructura Global",
        edu_title: "Formación",
        edu_1_title: "Especialización en IA",
        edu_1_date: "Programa Avanzado • 2024 - Presente",
        edu_1_desc: "Foco en LLMs, sistemas RAG y Agentes Autónomos.",
        edu_2_title: "Full Stack Development",
        edu_2_date: "Certificación Profesional • 2024",
        edu_2_desc: "Desarrollo web moderno, arquitectura de software y optimización.",
        contact_title: "Contáctame",
        contact_subtitle: "¿Tienes un proyecto en mente? ¡Hagámoslo realidad!",
        lang_title: "Idiomas",
        lang_es: "Español",
        lang_es_lvl: "Nativo",
        lang_en: "Inglés",
        lang_en_lvl: "B2/C1 (Avanzado)",
        profile_title: "Perfil Profesional",
        profile_text: "Ingeniero de IA y Desarrollador Full Stack orientado a resultados, especializado en la arquitectura de <strong class=\"text-slate-900 dark:text-white\">soluciones web escalables</strong> y <strong class=\"text-slate-900 dark:text-white\">sistemas de agentes autónomos</strong>. <br><br> Experto en transformar conceptos tecnológicos complejos en productos digitales intuitivos y de alto impacto.",
        exp_title: "Experiencia Profesional",
        role_1: "AI Solutions Architect",
        role_1_sub: "Ingeniería de Producto • Caracas, VE",
        role_1_date: "2024 - Presente",
        role_1_desc: "Liderando la ingeniería end-to-end de plataformas SaaS de próxima generación, puenteando la brecha entre modelos LLM de vanguardia y arquitecturas web escalables.",
        role_1_point1: "Arquitecté <strong>Trace App</strong>, diseñando una infraestructura SaaS multi-tenant con pipelines de visualización de datos de alto rendimiento en tiempo real.",
        role_1_point2: "Ingenié sistemas <strong>RAG (Retrieval-Augmented Generation)</strong>, optimizando la latencia de búsqueda vectorial para respuestas de IA de alta precisión.",
        role_2: "Senior Full Stack Dev",
        role_2_sub: "Consultor Técnico • Remoto",
        role_2_date: "2023 - 2024",
        role_2_desc: "Entregando ecosistemas digitales de alto rendimiento enfocados en la mantenibilidad del código, modularidad atómica y métricas de usuario (Core Web Vitals).",
        role_2_point1: "Establecí sistemas de diseño con <strong>React y Tailwind</strong>, acelerando el ciclo de desarrollo mediante una estricta reutilización de componentes.",
        role_2_point2: "Orquesté flujos <strong>CI/CD</strong> automatizados en Vercel, asegurando deploys atómicos y gates de calidad para producción.",
        projects_title: "Portafolio de Proyectos",
        footer_text: "Construido con <span class=\"text-indigo-500\">Inteligencia Artificial</span> y <span class=\"text-white\">Pasión</span>.",
        location_type: "Remoto / Híbrido"
    },
    en: {
        open_to_work: "Available for Select Opportunities",
        role_ai: "AI Engineer",
        role_fs: "Full Stack Developer",
        hero_subtitle: "Architecting the convergence of <span class=\"text-gradient\">Cognitive AI</span> and <span class=\"text-gradient\">Exceptional User Experiences</span>. <br> I design systems that don't just function—they think.",
        download_cv: "Download CV",
        stack_title: "Tech Stack",
        cat_ai: "AI Engineering",
        cat_frontend: "Elite Frontend",
        cat_infra: "Global Infrastructure",
        edu_title: "Education",
        edu_1_title: "AI Specialization",
        edu_1_date: "Advanced Program • 2024 - Present",
        edu_1_desc: "Focus on LLMs, RAG systems, and Autonomous Agents.",
        edu_2_title: "Full Stack Development",
        edu_2_date: "Professional Certification • 2024",
        edu_2_desc: "Modern web development, software architecture, and optimization.",
        contact_title: "Contact Me",
        contact_subtitle: "Got a project in mind? Let's make it happen!",
        lang_title: "Languages",
        lang_es: "Spanish",
        lang_es_lvl: "Native",
        lang_en: "English",
        lang_en_lvl: "B2/C1 (Advanced)",
        profile_title: "Professional Profile",
        profile_text: "Result-oriented AI Engineer and Full Stack Developer, specialized in architecting <strong class=\"text-slate-900 dark:text-white\">scalable web solutions</strong> and <strong class=\"text-slate-900 dark:text-white\">autonomous agent systems</strong>. <br><br> Expert in transforming complex technological concepts into intuitive, high-impact digital products.",
        exp_title: "Professional Experience",
        role_1: "AI Solutions Architect",
        role_1_sub: "Product Engineering • Caracas, VE",
        role_1_date: "2024 - Present",
        role_1_desc: "Spearheading the end-to-end engineering of next-gen SaaS platforms, bridging the gap between state-of-the-art LLMs and production-grade web systems.",
        role_1_point1: "Architected <strong>Trace App</strong>, designing a scalable multi-tenant SaaS infrastructure with high-performance real-time data visualization pipelines.",
        role_1_point2: "Engineered advanced <strong>RAG (Retrieval-Augmented Generation)</strong> systems, optimizing vector search latency for high-accuracy AI responses.",
        role_2: "Senior Full Stack Dev",
        role_2_sub: "Technical Consultant • Remote",
        role_2_date: "2023 - 2024",
        role_2_desc: "Delivering high-performance digital ecosystems focused on code maintainability, atomic modularity, and user-centric metrics (Core Web Vitals).",
        role_2_point1: "Established atomic design systems using <strong>React & Tailwind</strong>, accelerating feature velocity through strict component reusability.",
        role_2_point2: "Orchestrated automated <strong>CI/CD workflows</strong> on Vercel, ensuring atomic deployments and quality gates for production environments.",
        projects_title: "Project Portfolio",
        footer_text: "Built with <span class=\"text-indigo-500\">Artificial Intelligence</span> and <span class=\"text-white\">Passion</span>.",
        location_type: "Remote / Hybrid"
    }
};
