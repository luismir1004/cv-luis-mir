import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const IntroLoader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // 2 seconds total splash time

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-950 pointer-events-none"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        {/* Abstract Logo Animation */}
                        <div className="relative w-16 h-16">
                            <motion.span
                                className="absolute inset-0 rounded-full border-2 border-slate-200 dark:border-slate-800"
                                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <motion.span
                                className="absolute inset-0 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-slate-900 dark:text-white">
                                LM
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <motion.q
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-sm font-medium text-slate-500 italic"
                            >
                                Building Intelligence
                            </motion.q>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
