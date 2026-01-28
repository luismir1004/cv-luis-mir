import { useEffect } from 'react';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        let lenis: any;

        import('lenis').then((LenisModule) => {
            const Lenis = LenisModule.default;
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                touchMultiplier: 2,
            });

            function raf(time: number) {
                lenis?.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        });

        return () => {
            lenis?.destroy();
        };
    }, []);

    return <div className="will-change-transform">{children}</div>;
};
