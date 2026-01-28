'use client';

/**
 * 🚀 CTA Section
 * 
 * Call-to-Action premium antes del footer.
 * "¿Listo para trabajar juntos?"
 */

import { motion } from 'framer-motion';
import { CTA } from '../../data/cv-data';
import { Calendar, Download, ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
    lang: 'es' | 'en';
    onOpenContact?: () => void;
}

export const CTASection = ({ lang, onOpenContact }: CTASectionProps) => {
    const ctaData = CTA[lang];

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 p-8 md:p-12"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text */}
                <div className="text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center md:justify-start gap-2 mb-3"
                    >
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
                            {lang === 'es' ? 'Disponible Ahora' : 'Available Now'}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold text-white mb-3"
                    >
                        {ctaData.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-indigo-100 max-w-md"
                    >
                        {ctaData.subtitle}
                    </motion.p>
                </div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    {/* Primary Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenContact}
                        className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-lg shadow-indigo-900/30 hover:shadow-xl hover:shadow-indigo-900/40 transition-all duration-300"
                    >
                        <Calendar className="w-5 h-5" />
                        <span>{ctaData.primaryButton}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    {/* Secondary Button */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/CV_Luis_Mir.pdf"
                        download
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    >
                        <Download className="w-5 h-5" />
                        <span>{ctaData.secondaryButton}</span>
                    </motion.a>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-3xl blur-sm"
            />
        </motion.section>
    );
};

export default CTASection;
