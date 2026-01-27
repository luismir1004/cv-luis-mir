import { useState, useEffect, useMemo } from 'react';
import { TRANSLATIONS } from './data';
import { Variants } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { Toaster, toast } from 'sonner';

// Components
import { Hero } from './components/sections/Hero';
import { Stack } from './components/sections/Stack';
import { Education } from './components/sections/Education';
import { Languages } from './components/sections/Languages';
import { Profile } from './components/sections/Profile';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Footer } from './components/layout/Footer';
import { SEO } from './components/ui/SEO';
import { ContactModal } from './components/ui/ContactModal';
import { FloatingDock } from './components/layout/Dock';
import { Cursor } from './components/ui/Cursor';
import { HomeIcon, ProjectsIcon, ExperienceIcon, ContactIcon } from './components/ui/Icons';
import { Reveal } from './components/ui/Reveal';
import { BackgroundEffects } from './components/ui/BackgroundEffects';
import { CommandMenu } from './components/ui/CommandMenu';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { IntroLoader } from './components/ui/IntroLoader';
import { ChatWidget } from './components/ui/ChatWidget';
import { NeuralBackground } from './components/ui/NeuralBackground';
import { AdminDashboard } from './components/admin/AdminDashboard';

function App() {
    // Hooks
    const { toggleTheme, isDark } = useTheme();

    const [lang, setLang] = useState<'es' | 'en'>(() => {
        return (localStorage.getItem('cv_lang') as 'es' | 'en') || 'es';
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

    // Animation Variants
    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } }
    };

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
                <Cursor />
                <BackgroundEffects />
                <NeuralBackground />

                {/* Notifications System */}
                <Toaster position="top-center" richColors theme={isDark ? 'dark' : 'light'} />

                <SEO
                    title={lang === 'es' ? 'Luis Mir | Ingeniero de IA' : 'Luis Mir | AI Engineer'}
                    description={lang === 'es' ? 'Portafolio de Luis Mir - Ingeniero de Inteligencia Artificial y Desarrollador Full Stack.' : 'Luis Mir Portfolio - AI Engineer and Full Stack Developer.'}
                />

                <ContactModal
                    isOpen={isContactOpen}
                    onClose={() => setIsContactOpen(false)}
                    t={t}
                />

                <main className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-4 pb-24 relative z-10">
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

                    <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Reveal id="stack" className="h-full" delay={0.2}>
                            <Stack t={t} variants={item} />
                        </Reveal>
                        <Reveal id="education" className="h-full" delay={0.3}>
                            <Education t={t} variants={item} />
                        </Reveal>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Reveal id="languages" className="col-span-1" delay={0.4}>
                            <Languages t={t} variants={item} />
                        </Reveal>
                        <Reveal id="profile" className="col-span-1 lg:col-span-3" delay={0.5}>
                            <Profile t={t} variants={item} />
                        </Reveal>
                    </div>

                    <Reveal id="experience" className="col-span-1 md:col-span-2 lg:col-span-4" delay={0.6}>
                        <Experience t={t} variants={item} />
                    </Reveal>

                    <div id="projects" className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Reveal className="col-span-full w-full" delay={0.7}>
                            <Projects t={t} variants={item} lang={lang} />
                        </Reveal>
                    </div>

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

export default App;
