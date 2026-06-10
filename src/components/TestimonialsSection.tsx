"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Linkedin, Github } from "lucide-react";

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    content: string;
    rating: number;
    linkedin?: string;
    github?: string;
    project: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: "1",
        name: "María González",
        role: "CEO",
        company: "TechStart Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        content: "Luis transformó completamente nuestra plataforma digital. Su expertise en React y arquitectura de sistemas resultó en una mejora del 40% en rendimiento y una experiencia de usuario excepcional. Su capacidad para traducir requerimientos complejos en soluciones elegantes es impresionante.",
        rating: 5,
        project: "Superautos Code"
    },
    {
        id: "2",
        name: "Carlos Rodríguez",
        role: "CTO",
        company: "InnovateLab",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        content: "Trabajar con Luis fue una experiencia reveladora. Su dominio de Next.js y las últimas tecnologías de frontend nos permitió lanzar nuestro producto en tiempo récord. La calidad del código y la atención al detalle son de nivel senior.",
        rating: 5,
        project: "Caribe Stay"
    },
    {
        id: "3",
        name: "Ana Martínez",
        role: "Product Manager",
        company: "Digital Ventures",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        content: "La visión técnica de Luis es excepcional. No solo implementó funcionalidades complejas, sino que optimizó toda nuestra arquitectura para escalar. Su capacidad para combinar diseño UX con ingeniería de alto nivel es única.",
        rating: 5,
        project: "E-commerce Platform"
    },
    {
        id: "4",
        name: "Roberto Chen",
        role: "Senior Developer",
        company: "Global Tech",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        content: "Luis es un desarrollador excepcional con una sólida comprensión de patrones de diseño y mejores prácticas. Su código es limpio, mantenible y bien documentado. Aprendí mucho colaborando con él en proyectos complejos.",
        rating: 5,
        project: "API Architecture"
    },
    {
        id: "5",
        name: "Laura Sánchez",
        role: "Founder",
        company: "Startup Hub",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
        content: "La capacidad de Luis para entregas bajo presión es remarkable. En tiempo récord, desarrolló un sistema completo que superó todas nuestras expectativas. Su comunicación y profesionalismo son de primer nivel.",
        rating: 5,
        project: "MVP Development"
    }
];

function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-0 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border border-border/10 dark:border-white/10 transition-all duration-500 ${isActive ? 'z-10' : 'z-0'}`}
        >
            {/* Quote Icon */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="mb-6"
            >
                <Quote className="w-12 h-12 text-primary/30" />
            </motion.div>

            {/* Content */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-light"
            >
                "{testimonial.content}"
            </motion.p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                    >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                ))}
            </div>

            {/* Author */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start justify-between"
            >
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role} @ {testimonial.company}</p>
                        <p className="text-xs text-primary mt-1">Proyecto: {testimonial.project}</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                    {testimonial.linkedin && (
                        <motion.a
                            href={testimonial.linkedin}
                            target="_blank"
                            aria-label={`LinkedIn de ${testimonial.name}`}
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Linkedin className="w-4 h-4 text-foreground/70 hover:text-primary" />
                        </motion.a>
                    )}
                    {testimonial.github && (
                        <motion.a
                            href={testimonial.github}
                            target="_blank"
                            aria-label={`GitHub de ${testimonial.name}`}
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Github className="w-4 h-4 text-foreground/70 hover:text-primary" />
                        </motion.a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    // Auto-advance
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    return (
        <section id="testimonials" className="py-24 md:py-48 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
            </div>

            <div className="w-full relative z-10">
                {/* Section Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">
                            Testimonios
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter text-foreground uppercase leading-[0.85]"
                    >
                        Recomendaciones<span className="text-primary">.</span>
                    </motion.h2>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                    <div 
                        className="relative h-[500px] md:h-[600px]"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {TESTIMONIALS.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                                isActive={index === currentIndex}
                            />
                        ))}

                        {/* Navigation */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevTestimonial}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>

                            {/* Progress Indicators */}
                            <div className="flex gap-2">
                                {TESTIMONIALS.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex ? 'w-8 bg-primary' : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextTestimonial}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 mt-16 text-center"
                >
                    <p className="text-lg text-muted-foreground/60 max-w-2xl mx-auto">
                        Colaboradores y clientes que han experimentado el impacto del trabajo técnico de alta calidad.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};