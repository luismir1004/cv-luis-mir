"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: any;
}

const ACHIEVEMENTS: Achievement[] = [
    { id: 'explorer', title: 'Explorador', description: 'Has visitado todas las secciones', icon: Sparkles },
    { id: 'speed', title: 'Lectura Rápida', description: 'Has recorrido el CV en menos de 30s', icon: Sparkles },
    { id: 'night_owl', title: 'Búho Nocturno', description: 'Has visitado el CV de noche', icon: Sparkles },
];

export const EasterEggs = () => {
    const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
    const [showAchievement, setShowAchievement] = useState<Achievement | null>(null);
    const [konamiProgress, setKonamiProgress] = useState(0);
    const setClickCount = useState(0)[1];
    const [lastClickTime, setLastClickTime] = useState(0);

    const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    useEffect(() => {
        // Konami Code Easter Egg
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === KONAMI_CODE[konamiProgress]) {
                setKonamiProgress(prev => prev + 1);
                if (konamiProgress + 1 === KONAMI_CODE.length) {
                    unlockAchievement('konami');
                    setKonamiProgress(0);
                }
            } else {
                setKonamiProgress(0);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [konamiProgress]);

    useEffect(() => {
        // Click count Easter Egg
        const handleClick = () => {
            const now = Date.now();
            if (now - lastClickTime < 500) {
                setClickCount(prev => {
                    const newCount = prev + 1;
                    if (newCount >= 10) {
                        unlockAchievement('clicker');
                        return 0;
                    }
                    return newCount;
                });
            } else {
                setClickCount(1);
            }
            setLastClickTime(now);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [lastClickTime]);

    useEffect(() => {
        // Night owl Easter Egg
        const hour = new Date().getHours();
        if (hour >= 22 || hour <= 5) {
            if (!unlockedAchievements.includes('night_owl')) {
                unlockAchievement('night_owl');
            }
        }
    }, [unlockedAchievements]);

    const unlockAchievement = (id: string) => {
        if (unlockedAchievements.includes(id)) return;

        setUnlockedAchievements(prev => [...prev, id]);
        const achievement = ACHIEVEMENTS.find(a => a.id === id) || {
            id: 'konami',
            title: 'Konami Master',
            description: 'Has descubierto el código secreto',
            icon: Sparkles
        };
        
        setShowAchievement(achievement);
        setTimeout(() => setShowAchievement(null), 3000);
    };

    return (
        <AnimatePresence>
            {showAchievement && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className="fixed bottom-8 right-8 z-[100] bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 max-w-sm shadow-2xl"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center flex-shrink-0">
                            <showAchievement.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-foreground mb-1">
                                🎉 {showAchievement.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {showAchievement.description}
                            </p>
                        </div>
                        <button
                            onClick={() => setShowAchievement(null)}
                            aria-label="Cerrar logro"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};