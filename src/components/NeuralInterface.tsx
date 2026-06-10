"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, X, Terminal, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    role: "user" | "ai";
    text: string;
    timestamp: Date;
}

export const NeuralInterface = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "ai",
            text: "Neural Link establised. Soy el asistente IA de Luis. ¿Qué te gustaría saber sobre su perfil?",
            timestamp: new Date()
        }
    ]);
    const [isThinking, setIsThinking] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg: Message = { role: "user", text: input, timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsThinking(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg.text, lang: "es" })
            });
            const data = await res.json();

            setMessages(prev => [...prev, {
                role: "ai",
                text: data.text,
                timestamp: new Date()
            }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: "ai",
                text: "Error de conexión neural. Intenta de nuevo.",
                timestamp: new Date()
            }]);
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <>
            {/* Neural Orb Trigger */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer",
                    "bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.3)]",
                    "group hover:scale-110 transition-transform duration-500",
                    isOpen && "hidden"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {/* Core Pulse */}
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20" />
                <Bot className="w-8 h-8 text-primary group-hover:text-foreground dark:group-hover:text-white transition-colors duration-500 relative z-10" />
            </motion.button>

            {/* Neural Interface Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] flex flex-col overflow-hidden rounded-[2rem] bg-[#050505]/95 backdrop-blur-3xl border border-white/10 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground/50 dark:text-white/50">Interfaz Neural v1.0</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-foreground/30 hover:text-foreground dark:text-white/30 dark:hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn(
                                        "flex gap-4 max-w-[90%]",
                                        msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                    )}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10",
                                        msg.role === "user" ? "bg-foreground/5 dark:bg-white/5" : "bg-primary/10"
                                    )}>
                                        {msg.role === "user" ? <Terminal className="w-4 h-4 text-foreground/60 dark:text-white/60" /> : <Bot className="w-4 h-4 text-primary" />}
                                    </div>
                                    <div className={cn(
                                        "p-4 rounded-2xl text-sm leading-relaxed",
                                        msg.role === "user"
                                            ? "bg-foreground/10 dark:bg-white/10 text-foreground dark:text-white rounded-tr-sm"
                                            : "bg-foreground/[0.02] dark:bg-white/[0.02] text-foreground/70 dark:text-white/70 border border-border/5 dark:border-white/5 rounded-tl-sm"
                                    )}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isThinking && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-2 p-4 text-xs font-mono text-primary/50"
                                >
                                    <Sparkles className="w-3 h-3 animate-spin" />
                                    <span>Processing neural patterns...</span>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/5 bg-black/20">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendMessage();
                                }}
                                className="relative flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about my stack..."
                                    className="w-full bg-foreground/[0.03] dark:bg-white/[0.03] border border-border/10 dark:border-white/10 rounded-xl px-4 py-3 pr-12 text-sm text-foreground dark:text-white placeholder:text-foreground/20 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-foreground/[0.05] dark:focus:bg-white/[0.05] transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isThinking}
                                    className="absolute right-2 p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-foreground dark:hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
