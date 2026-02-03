"use client";

import { useState, useEffect } from "react";
import { Wifi, Battery, Command } from "lucide-react";
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-2 flex justify-between items-center mix-blend-difference text-white/80 text-[10px] font-medium tracking-widest uppercase select-none pointer-events-none"
        >
            {/* Left: System ID */}
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                    <Command className="w-3 h-3" />
                    <span>LuisOS v2.0</span>
                </span>
                <span className="hidden md:inline-block opacity-30">|</span>
                <span className="hidden md:inline-block">System Operational</span>
            </div>

            {/* Center: Dynamic Island Placeholder (Optional Future) */}

            {/* Right: Status Indicators */}
            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Available</span>
                </div>

                <span className="font-mono">{statusTime} CCS</span>

                <div className="flex items-center gap-3 opacity-80">
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                </div>
            </div>
        </motion.div>
    );
};
