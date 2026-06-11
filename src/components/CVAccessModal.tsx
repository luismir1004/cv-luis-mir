"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lock, FileText, AlertTriangle, ShieldCheck, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";


interface CVAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CVAccessModal = ({ isOpen, onClose }: CVAccessModalProps) => {
    const [status, setStatus] = useState<"locked" | "scanning" | "granted">("locked");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            // Reset status after close animation
            setTimeout(() => setStatus("locked"), 500);
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const handleRequestAccess = () => {
        setStatus("scanning");

        // Simulate biometric scan
        setTimeout(() => {
            setStatus("granted");

            // Trigger PDF download after success animation
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = '/cv-luis-mir-es.pdf';
                link.download = 'Luis_Mir_Software_Engineer.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 1000);
        }, 2000);
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-lg bg-background border border-emerald-500/30 overflow-hidden shadow-2xl shadow-emerald-500/10"
                    >
                        {/* Decorative Scanner Bar */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                            animate={status === "scanning" ? {
                                top: ["0%", "100%", "0%"],
                                opacity: [0.5, 1, 0.5]
                            } : { top: "0%" }}
                            transition={status === "scanning" ? {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear"
                            } : {}}
                        />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-12 flex flex-col items-center text-center relative z-10">

                            {/* Icon State */}
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
                                <div className="w-20 h-20 bg-background border border-border flex items-center justify-center rounded-full relative z-10">
                                    <AnimatePresence mode="wait">
                                        {status === "locked" && (
                                            <motion.div
                                                key="locked"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.8, opacity: 0 }}
                                            >
                                                <Lock className="w-8 h-8 text-emerald-500" />
                                            </motion.div>
                                        )}
                                        {status === "scanning" && (
                                            <motion.div
                                                key="scanning"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.8, opacity: 0 }}
                                            >
                                                <AlertTriangle className="w-8 h-8 text-amber-500 animate-pulse" />
                                            </motion.div>
                                        )}
                                        {status === "granted" && (
                                            <motion.div
                                                key="granted"
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.8, opacity: 0 }}
                                            >
                                                <ShieldCheck className="w-8 h-8 text-emerald-500" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground mb-4">
                                {status === "locked" && "Acceso Restringido"}
                                {status === "scanning" && "Verificando Credenciales..."}
                                {status === "granted" && "Acceso Autorizado"}
                            </h3>

                            <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 max-w-sm">
                                {status === "locked" && "El documento contiene arquitectura de sistemas propietaria. Se requiere autorización para visualizar el expediente completo."}
                                {status === "scanning" && "Analizando firma biométrica y permisos de seguridad..."}
                                {status === "granted" && "Redirigiendo a canal seguro de comunicación..."}
                            </p>

                            {/* Action Button */}
                            {status === "locked" && (
                                <button
                                    onClick={handleRequestAccess}
                                    className="group relative px-8 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 font-mono font-bold uppercase tracking-widest border border-emerald-500/50 transition-all active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Download className="w-4 h-4" /> Descargar CV
                                    </span>
                                </button>
                            )}

                            {status === "granted" && (
                                <a
                                    href="/cv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 text-xs text-emerald-500/60 hover:text-emerald-500 font-mono uppercase tracking-wider transition-colors"
                                >
                                    <FileText className="w-3 h-3 inline mr-1" /> Ver versión web
                                </a>
                            )}
                        </div>

                        {/* Footer decorative text */}
                        <div className="h-8 bg-background/40 dark:bg-black/40 border-t border-border/5 dark:border-white/5 flex items-center justify-between px-6 text-[9px] font-mono text-foreground/20 dark:text-white/20 uppercase">
                            <span>SECURE_CONN_V2.0</span>
                            <span>ID: {Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};
