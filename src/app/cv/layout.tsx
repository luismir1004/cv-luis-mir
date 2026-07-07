import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { cn } from '../../lib/utils';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
    title: 'CV | Luis Mir',
    description: 'Curriculum Vitae de Luis Mir, Product Engineer & Senior Full-Stack Developer.',
};

/**
 * CV Layout — Standalone root layout for PDF generation.
 * No Navbar, No Footer, No StatusBar, No ScrollProgress, no providers.
 * This route lives outside the /[lang] tree and is designed to be
 * captured by Playwright as a clean PDF.
 */
export default function CVLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={cn("font-sans antialiased cv-layout", inter.variable)}>
                {children}
            </body>
        </html>
    );
}
