"use client";

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
 * AppShell — Renders the website chrome (navbar, footer, etc.).
 * The /cv route lives outside this layout tree, so no special-casing needed.
 */
export const AppShell = ({ children }: { children: ReactNode }) => {
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
