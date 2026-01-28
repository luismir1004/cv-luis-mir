import { NextResponse } from 'next/server';
import { TRANSLATIONS } from '../../../data';

export const runtime = 'edge';

export async function POST(req: Request) {
    const { message, lang } = await req.json();

    if (!message) {
        return NextResponse.json({ error: 'Message required' }, { status: 400 });
    }

    const responseText = generateResponse(message, lang || 'es');

    // Simulate network delay for realism (optional in Edge, but good for UX)
    // await new Promise(resolve => setTimeout(resolve, 500)); 

    return NextResponse.json({
        text: responseText,
        timestamp: new Date()
    });
}

const generateResponse = (input: string, lang: 'es' | 'en'): string => {
    // We import translations but we need to select the correct language object
    const t = TRANSLATIONS[lang];
    const isEs = lang === 'es';
    const lowerInput = input.toLowerCase();

    // Keywords mapping logic (Migrated from useChatLogic)
    if (lowerInput.includes('hola') || lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return isEs ? "¡Hola! ¿En qué puedo ayudarte hoy?" : "Hello! How can I help you today?";
    }

    if (lowerInput.includes('stack') || lowerInput.includes('tech') || lowerInput.includes('tecnolog') || lowerInput.includes('react') || lowerInput.includes('python')) {
        return isEs
            ? "Luis es experto en el stack moderno. Frontend: React, Tailwind, Next.js. Backend & AI: Python, LangChain, OpenAI, RAG Systems. También domina DevOps con Docker y Vercel."
            : "Luis is an expert in the modern stack. Frontend: React, Tailwind, Next.js. Backend & AI: Python, LangChain, OpenAI, RAG Systems. He also masters DevOps with Docker and Vercel.";
    }

    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('mail') || lowerInput.includes('contactar')) {
        return isEs
            ? "Puedes contactar a Luis directamente a través del botón de 'Email' en esta página, o escribiendo a contact@luismir.dev."
            : "You can contact Luis directly via the 'Email' button on this page, or by writing to contact@luismir.dev.";
    }

    if (lowerInput.includes('experience') || lowerInput.includes('experiencia') || lowerInput.includes('work') || lowerInput.includes('trabajo')) {
        // Since we don't have full translations object access easily without complex imports, hardcoding simplistic fallback or using specific keys if available.
        // For Edge efficiency, we might simplify or just use the imported data structure if it's lightweight.
        // Assuming TRANSLATIONS is available.
        const role1 = t?.role_1 || "AI Solutions Architect";
        const role2 = t?.role_2 || "Senior Full Stack Dev";

        return isEs
            ? `Luis tiene experiencia reciente como ${role1} y ${role2}. Ha liderado implementaciones de IA y arquitecturas SaaS complejas.`
            : `Luis has recent experience as ${role1} and ${role2}. He has led AI implementations and complex SaaS architectures.`;
    }

    if (lowerInput.includes('proyecto') || lowerInput.includes('project')) {
        return isEs
            ? "En su portafolio encontrarás proyectos como 'Trace App' (SaaS), una Pizzería interactiva y este mismo portafolio. ¡Exploralos en la sección de proyectos!"
            : "In his portfolio you will find projects like 'Trace App' (SaaS), an interactive Pizzeria app, and this very portfolio. Explore them in the projects section!";
    }

    // Default fallback
    return isEs
        ? "Interesante pregunta. Como soy una IA en entrenamiento, mi conocimiento se limita a su perfil profesional. ¿Quieres saber sobre su Stack, Proyectos o Experiencia?"
        : "Interesting question. As an AI in training, my knowledge is limited to his professional profile. Would you like to know about his Stack, Projects, or Experience?";
};
