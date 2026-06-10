"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

export const StatusBar = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            // Caracas Time (UTC-4)
            const caracasTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Caracas" }));

            setStatusTime(caracasTime.toLocaleTimeString("en-US", {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const [statusTime, setStatusTime] = useState("--:--");

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-[70] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-2 flex justify-between items-center text-[10px] font-medium text-muted-foreground/70 select-none pointer-events-none"
        >
            {/* Left: Brand */}
            <div className="flex items-center gap-3">
                <span className="font-semibold text-foreground">LM.</span>
                <span className="hidden sm:inline-block opacity-50">|</span>
                <span className="hidden sm:inline-block">Available for work</span>
            </div>

            {/* Right: Time */}
            <div className="flex items-center gap-2">
                <span className="font-mono">{statusTime}</span>
                <span className="text-[9px] opacity-50">CCS</span>
            </div>
        </motion.div>
    );
};
