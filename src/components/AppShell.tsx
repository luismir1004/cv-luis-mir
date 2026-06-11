"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ScrollProgress } from "./ScrollProgress";
import { StatusBar } from "./StatusBar";
import { Navbar } from "./Navbar";
import { SkipLink } from "./SkipLink";
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer').then(mod => ({ default: mod.Footer })), {
    loading: () => <div className="h-20 bg-background" />
});

/**
 * AppShell — Conditionally renders website chrome (navbar, footer, etc.)
 * Hidden on /cv route to allow clean PDF generation.
 */
export const AppShell = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const isCVRoute = pathname === "/cv";

    if (isCVRoute) {
        return <>{children}</>;
    }

    return (
        <>
            <SkipLink />
            <ScrollProgress />
            <StatusBar />
            <Navbar />
            <main id="main-content" className="relative min-h-screen" tabIndex={-1}>
                {children}
            </main>
            <Footer />
        </>
    );
};
