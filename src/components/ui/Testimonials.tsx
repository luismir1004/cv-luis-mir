import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TranslationSchema } from '../../types';

interface TestimonialsProps {
    t: TranslationSchema;
}

const TESTIMONIALS = [
    {
        id: 1,
        quoteEs: "Luis transformó completamente nuestra infraestructura de backend, mejorando el rendimiento en un 200%.",
        quoteEn: "Luis completely transformed our backend infrastructure, improving performance by over 200%.",
        author: "Carlos Rodriguez",
        role: "CTO, FinTech Startup",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
    },
    {
        id: 2,
        quoteEs: "Una capacidad excepcional para resolver problemas complejos con soluciones elegantes y escalables.",
        quoteEn: "An exceptional ability to solve complex problems with elegant and scalable solutions.",
        author: "Sarah Chen",
        role: "Senior Product Manager",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        id: 3,
        quoteEs: "Su atención al detalle en la experiencia de usuario elevó nuestro producto a un nivel world-class.",
        quoteEn: "His attention to detail in user experience elevated our product to a world-class level.",
        author: "Miguel Ángel",
        role: "Lead Designer",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel"
    }
];

export const Testimonials = ({ t }: TestimonialsProps) => {
    return (
        <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                <Quote className="w-4 h-4" />
                {t.testimonials_title || "Testimonials"}
            </h3>

            <div className="grid grid-cols-1 gap-3">
                {TESTIMONIALS.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 relative overflow-hidden group hover:border-indigo-500/30 transition-colors"
                    >
                        <div className="flex items-start gap-3 relative z-10">
                            <img
                                src={item.image}
                                alt={item.author}
                                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700"
                                loading="lazy"
                            />
                            <div>
                                <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-1">
                                    "{t.lang === 'es' ? item.quoteEs : item.quoteEn}"
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                                        {item.author}
                                    </span>
                                    <span className="text-[10px] text-slate-500 border-l border-slate-300 dark:border-slate-700 pl-2">
                                        {item.role}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative quote mark */}
                        <Quote className="absolute right-2 top-2 w-12 h-12 text-slate-200 dark:text-slate-700/20 -rotate-12 pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
