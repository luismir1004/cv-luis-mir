import { useState } from 'react';
import { TRANSLATIONS } from '../data';
import { useUI } from '../context/UIContext';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

// Simple embedded knowledge base logic
export const useChatLogic = (lang: 'es' | 'en') => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: lang === 'es'
                ? "¡Hola! Soy LuisAI 🤖. Soy una versión digital de Luis entrenada para responder preguntas sobre su experiencia, stack y proyectos. ¿Qué te gustaría saber?"
                : "Hello! I'm LuisAI 🤖. I'm a digital version of Luis trained to answer questions about his experience, stack, and projects. What would you like to know?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const { setMood } = useUI();

    const processMessage = async (text: string) => {
        // Add user message
        const userMsg: Message = { id: Date.now().toString(), text, sender: 'user', timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        const lowerText = text.toLowerCase();

        // 🧠 Generative UI Logic: Detect mood
        if (lowerText.includes('react') || lowerText.includes('frontend') || lowerText.includes('web') || lowerText.includes('interface')) {
            setMood('react');
        } else if (lowerText.includes('ai') || lowerText.includes('python') || lowerText.includes('bot') || lowerText.includes('intelligence')) {
            setMood('ai');
        } else if (lowerText.includes('data') || lowerText.includes('analytics') || lowerText.includes('backend')) {
            setMood('data');
        } else if (lowerText.includes('bye') || lowerText.includes('adios') || lowerText.includes('reset')) {
            setMood('default');
        }

        // Simulate thinking time
        setTimeout(() => {
            const responseText = generateResponse(lowerText, lang);
            const botMsg: Message = { id: (Date.now() + 1).toString(), text: responseText, sender: 'bot', timestamp: new Date() };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return { messages, isTyping, processMessage };
};

const generateResponse = (input: string, lang: 'es' | 'en'): string => {
    const t = TRANSLATIONS[lang];
    const isEs = lang === 'es';

    // Keywords mapping
    if (input.includes('hola') || input.includes('hello') || input.includes('hi')) {
        return isEs ? "¡Hola! ¿En qué puedo ayudarte hoy?" : "Hello! How can I help you today?";
    }

    if (input.includes('stack') || input.includes('tech') || input.includes('tecnolog') || input.includes('react') || input.includes('python')) {
        return isEs
            ? "Luis es experto en el stack moderno. Frontend: React, Tailwind, Next.js. Backend & AI: Python, LangChain, OpenAI, RAG Systems. También domina DevOps con Docker y Vercel."
            : "Luis is an expert in the modern stack. Frontend: React, Tailwind, Next.js. Backend & AI: Python, LangChain, OpenAI, RAG Systems. He also masters DevOps with Docker and Vercel.";
    }

    if (input.includes('contact') || input.includes('email') || input.includes('mail') || input.includes('contactar')) {
        return isEs
            ? "Puedes contactar a Luis directamente a través del botón de 'Email' en esta página, o escribiendo a [tu-email@ejemplo.com]."
            : "You can contact Luis directly via the 'Email' button on this page, or by writing to [tu-email@example.com].";
    }

    if (input.includes('esperience') || input.includes('experiencia') || input.includes('work') || input.includes('trabajo')) {
        return isEs
            ? `Luis tiene experiencia reciente como ${t.role_1} y ${t.role_2}. Ha liderado implementaciones de IA y arquitecturas SaaS complejas.`
            : `Luis has recent experience as ${t.role_1} and ${t.role_2}. He has led AI implementations and complex SaaS architectures.`;
    }

    if (input.includes('proyecto') || input.includes('project')) {
        return isEs
            ? "En su portafolio encontrarás proyectos como 'Trace App' (SaaS), una Pizzería interactiva y este mismo portafolio. ¡Exploralos en la sección de proyectos!"
            : "In his portfolio you will find projects like 'Trace App' (SaaS), an interactive Pizzeria app, and this very portfolio. Explore them in the projects section!";
    }

    // Default fallback
    return isEs
        ? "Interesante pregunta. Como soy una IA en entrenamiento, mi conocimiento se limita a su perfil profesional. ¿Quieres saber sobre su Stack, Proyectos o Experiencia?"
        : "Interesting question. As an AI in training, my knowledge is limited to his professional profile. Would you like to know about his Stack, Projects, or Experience?";
};
