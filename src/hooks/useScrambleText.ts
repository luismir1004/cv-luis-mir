"use client";

import { useEffect, useRef, useState } from "react";

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

export const useScrambleText = (text: string, speed: number = 30) => {
    const [scrambled, setScrambled] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setScrambled(
                text
                    .split("")
                    .map((_, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 2; // Decrypt slower
        }, speed);
    };

    const stop = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setScrambled(text);
    };

    useEffect(() => {
        if (isHovered) {
            scramble();
        } else {
            stop();
        }
        return () => stop();
    }, [isHovered]);

    return { text: scrambled, setIsHovered };
};
