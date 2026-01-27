import { useRef, useEffect, useState } from 'react';

interface InfiniteScrollProps {
    items: (string | React.ReactNode)[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    className?: string;
}

export const InfiniteScroll = ({
    items,
    direction = 'left',
    speed = 'normal',
    className = ""
}: InfiniteScrollProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!containerRef.current || !scrollerRef.current) return;

        const scrollerContent = Array.from(scrollerRef.current.children);

        // Check if we've already cloned to avoid duplicates on re-renders
        if (scrollerRef.current.getAttribute('data-cloned') === 'true') return;

        // Clone items to ensure seamless scroll
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
                scrollerRef.current.appendChild(duplicatedItem);
            }
        });

        scrollerRef.current.setAttribute('data-cloned', 'true');

        // Set direction
        containerRef.current.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse"
        );

        // Set speed
        const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
        containerRef.current.style.setProperty("--animation-duration", duration);

        setStart(true);
    }, [direction, speed]);

    return (
        <div
            ref={containerRef}
            className={`scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
        >
            <ul
                ref={scrollerRef}
                className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${start ? "animate-scroll" : ""
                    }`}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[max-content] flex-shrink-0"
                        key={idx}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
