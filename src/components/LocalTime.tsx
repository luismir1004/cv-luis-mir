"use client";

import { useEffect, useState } from "react";

export const LocalTime = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/Caracas", // Assuming user's location based on context or asking (defaulting to generalized LatAm for now, or browser local)
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 dark:text-white/30">
                Ubicación / Hora
            </span>
            <div className="flex items-center gap-2 text-foreground/50 dark:text-white/50 font-medium">
                <span>Caracas, VE</span>
                <span className="w-1 h-1 rounded-full bg-foreground/20 dark:bg-white/20" />
                <span className="font-mono">{time}</span>
            </div>
        </div>
    );
};
