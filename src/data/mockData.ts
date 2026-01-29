/**
 * 📦 Mock Data - Datos estáticos para el CV
 * 
 * Datos de proyectos y experiencia que se muestran en el CV.
 */

import { Project, Experience } from '../types';

export const MOCK_PROJECTS: Project[] = [
    {
        id: 'project-1',
        url: 'https://luismir.dev',
        title: 'AI Trading Platform',
        description: {
            es: 'Plataforma de trading avanzada con predicciones de IA en tiempo real, análisis de mercado y estrategias automatizadas.',
            en: 'Advanced trading platform with real-time AI predictions, market analysis, and automated strategies.',
        },
        tags: ['React', 'TypeScript', 'Python', 'TensorFlow', 'WebSocket'],
        colors: {
            iconBg: 'bg-indigo-100',
            iconText: 'text-indigo-600',
            hoverText: 'hover:text-indigo-500',
            hex: '#6366f1',
        },
        icons: {
            bg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
            tech: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>',
        },
    },
    {
        id: 'project-2',
        url: 'https://github.com/luismir1004/cv-luis-mir',
        title: 'Neural Portfolio',
        description: {
            es: 'Portafolio interactivo con visualizaciones 3D, animaciones de redes neuronales y patrones de diseño modernos.',
            en: 'Interactive portfolio with 3D visualizations, neural network animations, and modern design patterns.',
        },
        tags: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
        colors: {
            iconBg: 'bg-emerald-100',
            iconText: 'text-emerald-600',
            hoverText: 'hover:text-emerald-500',
            hex: '#10b981',
        },
        icons: {
            bg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
            tech: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>',
        },
    },
    {
        id: 'project-3',
        url: 'https://github.com/luismir1004',
        title: 'RAG Knowledge System',
        description: {
            es: 'Sistema de Generación Aumentada por Recuperación para búsqueda inteligente de documentos y respuestas con IA.',
            en: 'Retrieval-Augmented Generation system for intelligent document search and AI-powered answers.',
        },
        tags: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
        colors: {
            iconBg: 'bg-amber-100',
            iconText: 'text-amber-600',
            hoverText: 'hover:text-amber-500',
            hex: '#f59e0b',
        },
        icons: {
            bg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
            tech: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>',
        },
    },
];

export const MOCK_EXPERIENCE: Experience[] = [
    {
        _id: 'exp-1',
        role: {
            es: 'Desarrollador Full Stack Senior',
            en: 'Senior Full Stack Developer',
        },
        subRole: {
            es: 'Freelance',
            en: 'Freelance',
        },
        date: {
            es: '2024 - Presente',
            en: '2024 - Present',
        },
        description: {
            es: 'Liderando desarrollo de soluciones web escalables y arquitectura de microservicios.',
            en: 'Leading development of scalable web solutions and microservices architecture.',
        },
        points: {
            es: [
                'Diseñé arquitectura de sistema para SaaS',
                'Migré SaaS a infraestructura cloud con Node.js',
                'Implementé pipelines CI/CD serverless',
            ],
            en: [
                'Conducted system architecture for SaaS',
                'Migrated SaaS to cloud infrastructure with Node.js',
                'Implemented serverless CI/CD pipelines',
            ],
        },
    },
    {
        _id: 'exp-2',
        role: {
            es: 'Ingeniero de IA',
            en: 'AI Engineer',
        },
        subRole: {
            es: 'Startup Tecnológica',
            en: 'Tech Startup',
        },
        date: {
            es: '2023 - 2024',
            en: '2023 - 2024',
        },
        description: {
            es: 'Desarrollo de soluciones de IA/ML para automatización empresarial.',
            en: 'Development of AI/ML solutions for business automation.',
        },
        points: {
            es: [
                'Construí sistemas RAG con 95% de precisión',
                'Desarrollé agentes de IA personalizados para automatización',
                'Integré LLMs en aplicaciones de producción',
            ],
            en: [
                'Built RAG systems with 95% accuracy',
                'Developed custom AI agents for workflow automation',
                'Integrated LLMs into production applications',
            ],
        },
    },
];
