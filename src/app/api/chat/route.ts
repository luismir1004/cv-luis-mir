import { NextResponse } from 'next/server';
import { TRANSLATIONS } from '../../../data';

export const runtime = 'edge';

// Rate limiting using in-memory storage (suitable for Edge Runtime)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX_REQUESTS = 10; // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window

// Validation schemas
interface ChatRequest {
    message: string;
    lang?: 'es' | 'en';
}

function validateChatRequest(data: unknown): data is ChatRequest {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    const req = data as Partial<ChatRequest>;
    
    // Validate message
    if (typeof req.message !== 'string' || req.message.trim().length === 0) {
        return false;
    }
    
    // Validate message length (prevent DoS via extremely long messages)
    if (req.message.length > 500) {
        return false;
    }
    
    // Validate lang if provided
    if (req.lang !== undefined && req.lang !== 'es' && req.lang !== 'en') {
        return false;
    }
    
    return true;
}

function getClientIdentifier(req: Request): string {
    // Try to get IP from various headers (works in Edge Runtime)
    const forwarded = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const cfConnectingIp = req.headers.get('cf-connecting-ip');
    
    if (forwarded) {
        const ips = forwarded.split(',');
        return ips[0]?.trim() || 'anonymous';
    }
    if (realIp) return realIp;
    if (cfConnectingIp) return cfConnectingIp;
    
    // Fallback to a generic identifier
    return 'anonymous';
}

function checkRateLimit(identifier: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(identifier);
    
    if (!record) {
        rateLimit.set(identifier, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW
        });
        return true;
    }
    
    // Reset if window expired
    if (now > record.resetTime) {
        rateLimit.set(identifier, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW
        });
        return true;
    }
    
    // Check if under limit
    if (record.count < RATE_LIMIT_MAX_REQUESTS) {
        record.count++;
        rateLimit.set(identifier, record);
        return true;
    }
    
    return false;
}

export async function POST(req: Request) {
    try {
        // Parse request body
        let body: unknown;
        try {
            body = await req.json();
        } catch {
            return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
        }

        // Validate request structure
        if (!validateChatRequest(body)) {
            return NextResponse.json({ 
                error: 'Invalid request. Message must be a non-empty string (max 500 chars) and lang must be "es" or "en".' 
            }, { status: 400 });
        }

        // Rate limiting
        const clientId = getClientIdentifier(req);
        if (!checkRateLimit(clientId)) {
            return NextResponse.json({ 
                error: 'Rate limit exceeded. Please try again later.' 
            }, { 
                status: 429,
                headers: {
                    'Retry-After': '60'
                }
            });
        }

        const { message, lang = 'es' } = body;
        const responseText = generateResponse(message, lang);

        // Add security headers
        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block'
        });

        return NextResponse.json({
            text: responseText,
            timestamp: new Date().toISOString()
        }, { headers });

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json({ 
            error: 'Internal server error' 
        }, { status: 500 });
    }
}

const generateResponse = (input: string, lang: 'es' | 'en'): string => {
    // Sanitize input to prevent injection attacks
    const sanitizedInput = input.trim().replace(/[<>]/g, '');
    const t = TRANSLATIONS[lang];
    const isEs = lang === 'es';
    const lowerInput = sanitizedInput.toLowerCase();

    // Keywords mapping logic
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
