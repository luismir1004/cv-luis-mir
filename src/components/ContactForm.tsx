"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, AtSign, Github, Linkedin, MessageCircle } from "lucide-react";
import { Section } from "./corporate/Section";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string[];
    email?: string[];
    message?: string[];
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [serverMessage, setServerMessage] = useState("");
    const [fieldErrors, setFieldErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (fieldErrors[name as keyof FormErrors]) {
            setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setFieldErrors({});
        setServerMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus("success");
                setServerMessage(data.message);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setServerMessage(data.error || "Error inesperado.");
                if (data.details) {
                    setFieldErrors(data.details);
                }
            }
        } catch {
            setStatus("error");
            setServerMessage("Error de conexión. Verifica tu conexión a internet.");
        }
    };

    const contactLinks = [
        {
            name: "Email",
            value: "luismir1420@gmail.com",
            icon: AtSign,
            href: "mailto:luismir1420@gmail.com",
        },
        {
            name: "LinkedIn",
            value: "luis-mir-dev",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/luis-mir-dev/",
        },
        {
            name: "GitHub",
            value: "luismir1004",
            icon: Github,
            href: "https://github.com/luismir1004",
        },
        {
            name: "WhatsApp",
            value: "0412 195 5216",
            icon: MessageCircle,
            href: "https://wa.me/584121955216",
        },
    ];

    return (
        <Section id="contact" className="bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-[2px] bg-slate-200 dark:bg-white/20" />
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 font-mono">
                                    Conecta Conmigo
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                                Iniciemos un nuevo <span className="text-emerald-700 dark:text-primary">proyecto.</span>
                            </h2>
                            
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                                Ya sea para arquitectura de software, liderazgo técnico o desarrollo full-stack de alto impacto, estoy disponible para conversar sobre cómo aportar valor a tu equipo.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-4 border border-slate-200 dark:border-white/10 hover:border-black dark:hover:border-primary transition-all bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-none"
                                    >
                                        <div className="w-10 h-10 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-black dark:group-hover:border-primary transition-all rounded-none">
                                            <link.icon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-black dark:group-hover:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{link.name}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{link.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: The Minimalist Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 p-8 md:p-10 shadow-sm rounded-none">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                        >
                                            <CheckCircle2 className="w-16 h-16 text-emerald-700 dark:text-primary mb-6" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                            Transmisión Exitosa
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {serverMessage}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        {/* Name Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="contact-name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                                                Nombre Completo
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Ej. Ada Lovelace"
                                                disabled={status === "sending"}
                                                className={`w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-700 dark:focus:border-primary focus:ring-1 focus:ring-emerald-700 dark:focus:ring-primary disabled:opacity-50 rounded-none ${
                                                    fieldErrors.name ? "border-red-500" : "border-slate-200 dark:border-white/10"
                                                }`}
                                            />
                                            {fieldErrors.name && <p className="text-xs text-red-500 mt-1">{fieldErrors.name[0]}</p>}
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="contact-email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                                                Correo Profesional
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="ada@empresa.com"
                                                disabled={status === "sending"}
                                                className={`w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-700 dark:focus:border-primary focus:ring-1 focus:ring-emerald-700 dark:focus:ring-primary disabled:opacity-50 rounded-none ${
                                                    fieldErrors.email ? "border-red-500" : "border-slate-200 dark:border-white/10"
                                                }`}
                                            />
                                            {fieldErrors.email && <p className="text-xs text-red-500 mt-1">{fieldErrors.email[0]}</p>}
                                        </div>

                                        {/* Message Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="contact-message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">
                                                Mensaje / Requerimiento
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                placeholder="Detalla la arquitectura, el rol o el proyecto..."
                                                disabled={status === "sending"}
                                                className={`w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-700 dark:focus:border-primary focus:ring-1 focus:ring-emerald-700 dark:focus:ring-primary disabled:opacity-50 resize-none rounded-none ${
                                                    fieldErrors.message ? "border-red-500" : "border-slate-200 dark:border-white/10"
                                                }`}
                                            />
                                            {fieldErrors.message && <p className="text-xs text-red-500 mt-1">{fieldErrors.message[0]}</p>}
                                        </div>

                                        {/* Error Banner */}
                                        {status === "error" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 rounded-none"
                                            >
                                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                                <p className="text-sm text-red-600 dark:text-red-400 font-medium">{serverMessage}</p>
                                            </motion.div>
                                        )}

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-emerald-700 dark:bg-primary text-white dark:text-black font-bold uppercase tracking-widest text-sm hover:bg-emerald-800 dark:hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-none border border-transparent"
                                            whileHover={status !== "sending" ? { scale: 1.01 } : {}}
                                            whileTap={status !== "sending" ? { scale: 0.99 } : {}}
                                        >
                                            {status === "sending" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    PROCESANDO...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    ENVIAR MENSAJE
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
