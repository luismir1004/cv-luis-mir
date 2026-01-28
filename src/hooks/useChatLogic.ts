import { useState } from 'react';

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

        // 🧠 Generative UI Logic: Detect mood (Client-side fast path)
        if (lowerText.includes('react') || lowerText.includes('frontend') || lowerText.includes('web') || lowerText.includes('interface')) {
            setMood('react');
        } else if (lowerText.includes('ai') || lowerText.includes('python') || lowerText.includes('bot') || lowerText.includes('intelligence')) {
            setMood('ai');
        } else if (lowerText.includes('data') || lowerText.includes('analytics') || lowerText.includes('backend')) {
            setMood('data');
        } else if (lowerText.includes('bye') || lowerText.includes('adios') || lowerText.includes('reset')) {
            setMood('default');
        }

        try {
            // Call Edge Function
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, lang })
            });

            const data = await response.json();

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: data.text,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error('Chat Error:', error);
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: lang === 'es' ? 'Lo siento, hubo un error de conexión.' : 'Sorry, there was a connection error.',
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    return { messages, isTyping, processMessage };
};
