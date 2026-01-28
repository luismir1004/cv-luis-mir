'use client';

import { useState, useEffect, useMemo } from 'react';
import { Variants } from 'framer-motion';
import { TRANSLATIONS } from '../data';
import { useTheme } from '../hooks/useTheme';
import { Toaster, toast } from 'sonner';

// Animation system
import { fadeInUp } from '../lib/animations';

// Components
import { Hero } from './sections/Hero';
import { Stack } from './sections/Stack';
import { Education } from './sections/Education';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { CTASection } from './sections/CTA';
import { Footer } from './layout/Footer';
import { ContactModal } from './ui/ContactModal';
import { FloatingDock } from './layout/Dock';
import { HomeIcon, ProjectsIcon, ExperienceIcon, ContactIcon } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import { BackgroundEffects } from './ui/BackgroundEffects';
import { CommandMenu } from './ui/CommandMenu';
import { SmoothScroll } from './layout/SmoothScroll';
import { IntroLoader } from './ui/IntroLoader';
import { ChatWidget } from './ui/ChatWidget';
import { NeuralBackground } from './ui/NeuralBackground';
import { Noise } from './ui/Noise';
import { ScrollProgress } from './ui/ScrollProgress';
import { AdminDashboard } from './admin/AdminDashboard';
import { ErrorBoundary } from './ErrorBoundary';

import { Project, Experience as ExperienceType } from '../types';

interface HomeProps {
    projects: Project[];
    experiences: ExperienceType[];
}

function App({ projects, experiences }: HomeProps) {
    // Hooks
    const { toggleTheme, isDark } = useTheme();

    const [lang, setLang] = useState<'es' | 'en'>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return (localStorage.getItem('cv_lang') as 'es' | 'en') || 'es';
        }
        return 'es';
    });

    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    // Secret Admin Access (Ctrl+Shift+A)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
                e.preventDefault();
                setIsAdminOpen(prev => !prev);
                toast.success("SYSTEM ACCESS GRANTED", {
                    description: "Welcome back, Operator.",
                    className: "font-mono"
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        localStorage.setItem('cv_lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

    const t = TRANSLATIONS[lang];

    // Actions
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('contact@luismir.dev');
        toast.success(lang === 'es' ? 'Email copiado al portapapeles' : 'Email copied to clipboard', {
            description: lang === 'es' ? '¡Espero tu mensaje!' : 'Looking forward to hearing from you!',
            duration: 3000,
        });
    };

    // Animation Variants - using unified system
    const item: Variants = fadeInUp;

    const navItems = useMemo(() => [
        { icon: <HomeIcon />, label: t.nav_home || "Inicio", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { icon: <ProjectsIcon />, label: t.projects_title, onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <ExperienceIcon />, label: t.exp_title, onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <ContactIcon />, label: t.contact_title, onClick: () => setIsContactOpen(true) },
    ], [t]);


    return (
        <SmoothScroll>
            {/* Cinematic Intro */}
            <IntroLoader />

            <div className="min-h-screen py-8 lg:py-12 px-4 sm:px-6 transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-300 font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200 relative group/app">
                <BackgroundEffects />
                {/* Wrapped in ErrorBoundary for resilience - Three.js can fail on some devices */}
                <ErrorBoundary fallback={null}>
                    <NeuralBackground />
                </ErrorBoundary>
                <Noise />
                <ScrollProgress />

                {/* Notifications System */}
                <Toaster position="top-center" richColors theme={isDark ? 'dark' : 'light'} />

                {/* SEO handled by Next.js layout */}

                <ContactModal
                    isOpen={isContactOpen}
                    onClose={() => setIsContactOpen(false)}
                    t={t}
                />

                {/* ================================================================
                    MAIN LAYOUT - Reorganizado Profesionalmente
                    Orden: Hero | Stack → Experience → About | Education → Projects → CTA
                ================================================================ */}
                <main id="main-content" className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-4 pb-24 relative z-10">

                    {/* ============================================================
                        ROW 1: Hero (2 cols) + Stack (2 cols)
                    ============================================================ */}
                    <Reveal id="hero" className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2" delay={0.1}>
                        <Hero
                            t={t}
                            variants={item}
                            isDark={isDark}
                            toggleTheme={toggleTheme}
                            toggleLang={toggleLang}
                            lang={lang}
                            onOpenContact={handleCopyEmail}
                        />
                    </Reveal>

                    <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 gap-4">
                        <Reveal id="stack" className="col-span-full" delay={0.2}>
                            <Stack t={t} variants={item} lang={lang} />
                        </Reveal>
                    </div>

                    {/* ============================================================
                        ROW 2: Experience (Full Width)
                    ============================================================ */}
                    <Reveal id="experience" className="col-span-1 md:col-span-2 lg:col-span-4" delay={0.3}>
                        <Experience t={t} variants={item} experiences={experiences} lang={lang} />
                    </Reveal>

                    {/* ============================================================
                        ROW 3: About (2 cols) + Education (2 cols)
                    ============================================================ */}
                    <Reveal id="about" className="col-span-1 md:col-span-2 lg:col-span-2" delay={0.4}>
                        <About t={t} variants={item} lang={lang} />
                    </Reveal>

                    <Reveal id="education" className="col-span-1 md:col-span-2 lg:col-span-2" delay={0.5}>
                        <Education t={t} variants={item} lang={lang} />
                    </Reveal>

                    {/* ============================================================
                        ROW 4: Projects (Full Width Grid)
                    ============================================================ */}
                    <div id="projects" className="col-span-1 md:col-span-2 lg:col-span-4">
                        <Reveal className="w-full" delay={0.6}>
                            <Projects t={t} variants={item} lang={lang} projects={projects} />
                        </Reveal>
                    </div>

                    {/* ============================================================
                        ROW 5: CTA Section (Full Width)
                    ============================================================ */}
                    <Reveal className="col-span-1 md:col-span-2 lg:col-span-4" delay={0.7}>
                        <CTASection lang={lang} onOpenContact={() => setIsContactOpen(true)} />
                    </Reveal>

                    {/* ============================================================
                        ROW 6: Footer
                    ============================================================ */}
                    <Reveal className="col-span-1 md:col-span-2 lg:col-span-4" delay={0.8}>
                        <Footer variants={item} />
                    </Reveal>

                </main>

                <CommandMenu t={t} toggleTheme={toggleTheme} toggleLang={toggleLang} lang={lang} />

                {/* Floating Dock */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                    <FloatingDock items={navItems} />
                </div>

                {/* AI Agent Widget */}
                <ChatWidget lang={lang} />

                {/* Secret Admin Dashboard */}
                <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
            </div>
        </SmoothScroll>
    );
}

export const Home = App;
