import { useState, useEffect, useRef, useCallback } from 'react';

interface TextScrambleProps {
    text: string;
    className?: string;
    delay?: number;
}

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

export const TextScramble = ({ text, className, delay = 0 }: TextScrambleProps) => {
    const [scrambledText, setScrambledText] = useState(text);
    const intervalRef = useRef<number | null>(null);

    const scramble = useCallback(() => {
        let iteration = 0;
        const totalIterations = text.length;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(() => {
            setScrambledText((_prev) =>
                text
                    .split("")
                    .map((_letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= totalIterations) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    }, [text]);

    useEffect(() => {
        let timeout: number;
        if (delay > 0) {
            timeout = window.setTimeout(scramble, delay);
        } else {
            scramble();
        }
        return () => window.clearTimeout(timeout);
    }, [text, delay, scramble]);

    return (
        <span
            className={className}
            onMouseEnter={() => scramble()}
            style={{ display: 'inline-block', minWidth: '0.5em' }} // Prevent layout shift
        >
            {scrambledText}
        </span>
    );
};
