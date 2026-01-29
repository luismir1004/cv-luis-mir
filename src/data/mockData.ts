/**
 * 📦 Mock Data - Datos estáticos para el CV
 * 
 * Datos de proyectos y experiencia que se muestran en el CV.
 * Anteriormente se obtenían de Sanity CMS, ahora son datos estáticos.
 */

import { Project, Experience } from '../types';

export const MOCK_PROJECTS: Project[] = [
    {
        _id: 'project-1',
        title: 'AI Trading Platform',
        titleEs: 'Plataforma de Trading con IA',
        description: 'Advanced trading platform with real-time AI predictions, market analysis, and automated strategies.',
        descriptionEs: 'Plataforma de trading avanzada con predicciones de IA en tiempo real, análisis de mercado y estrategias automatizadas.',
        image: '/og-image.png',
        technologies: ['React', 'TypeScript', 'Python', 'TensorFlow', 'WebSocket'],
        github: 'https://github.com/luismir1004',
        demo: 'https://luismir.dev',
        featured: true,
        order: 1,
        color: '#6366f1',
    },
    {
        _id: 'project-2',
        title: 'Neural Portfolio',
        titleEs: 'Portafolio Neural',
        description: 'Interactive portfolio with 3D visualizations, neural network animations, and modern design patterns.',
        descriptionEs: 'Portafolio interactivo con visualizaciones 3D, animaciones de redes neuronales y patrones de diseño modernos.',
        image: '/og-image.png',
        technologies: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
        github: 'https://github.com/luismir1004/cv-luis-mir',
        demo: 'https://luismir.dev',
        featured: true,
        order: 2,
        color: '#10b981',
    },
    {
        _id: 'project-3',
        title: 'RAG Knowledge System',
        titleEs: 'Sistema de Conocimiento RAG',
        description: 'Retrieval-Augmented Generation system for intelligent document search and AI-powered answers.',
        descriptionEs: 'Sistema de Generación Aumentada por Recuperación para búsqueda inteligente de documentos y respuestas con IA.',
        image: '/og-image.png',
        technologies: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
        github: 'https://github.com/luismir1004',
        featured: true,
        order: 3,
        color: '#f59e0b',
    },
];

export const MOCK_EXPERIENCE: Experience[] = [
    {
        _id: 'exp-1',
        company: 'Freelance',
        companyEs: 'Freelance',
        role: 'Senior Full Stack Developer',
        roleEs: 'Desarrollador Full Stack Senior',
        period: '2024 - Present',
        periodEs: '2024 - Presente',
        description: 'Leading development of scalable web solutions and microservices architecture.',
        descriptionEs: 'Liderando desarrollo de soluciones web escalables y arquitectura de microservicios.',
        achievements: [
            'Conducted system architecture for SaaS',
            'Migrated SaaS to cloud infrastructure with Node.js',
            'Implemented serverless CI/CD pipelines',
        ],
        achievementsEs: [
            'Diseñé arquitectura de sistema para SaaS',
            'Migré SaaS a infraestructura cloud con Node.js',
            'Implementé pipelines CI/CD serverless',
        ],
        technologies: ['React', 'Node.js', 'AWS', 'Docker'],
        order: 1,
    },
    {
        _id: 'exp-2',
        company: 'Tech Startup',
        companyEs: 'Startup Tecnológica',
        role: 'AI Engineer',
        roleEs: 'Ingeniero de IA',
        period: '2023 - 2024',
        periodEs: '2023 - 2024',
        description: 'Development of AI/ML solutions for business automation.',
        descriptionEs: 'Desarrollo de soluciones de IA/ML para automatización empresarial.',
        achievements: [
            'Built RAG systems with 95% accuracy',
            'Developed custom AI agents for workflow automation',
            'Integrated LLMs into production applications',
        ],
        achievementsEs: [
            'Construí sistemas RAG con 95% de precisión',
            'Desarrollé agentes de IA personalizados para automatización',
            'Integré LLMs en aplicaciones de producción',
        ],
        technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
        order: 2,
    },
];
