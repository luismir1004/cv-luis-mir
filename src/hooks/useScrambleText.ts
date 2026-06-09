"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

export const useScrambleText = (text: string, speed: number = 30) => {
    const [scrambled, setScrambled] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = useCallback(() => {
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
    }, [text, speed]);

    const stop = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setScrambled(text);
    }, [text]);

    useEffect(() => {
        if (isHovered) {
            scramble();
        } else {
            stop();
        }
        return () => stop();
    }, [isHovered, scramble, stop]);

    return { text: scrambled, setIsHovered };
};
