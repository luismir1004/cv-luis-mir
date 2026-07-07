import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';
import { cn } from '../../../lib/utils';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

import { LOCALES, type Language } from '../../../dictionaries/types';

export function generateStaticParams() {
    return LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = (await params).lang as Language;
    return lang === 'en'
        ? { title: 'Resume | Luis Mir', description: 'Resume of Luis Mir, Product Engineer & Senior Full-Stack Developer.' }
        : { title: 'CV | Luis Mir', description: 'Curriculum Vitae de Luis Mir, Product Engineer & Senior Full-Stack Developer.' };
}

/**
 * CV Layout — Standalone root layout for PDF generation.
 * No Navbar, No Footer, No StatusBar, No ScrollProgress, no providers.
 * This route lives outside the /[lang] tree and is designed to be
 * captured by Playwright as a clean PDF.
 */
export default async function CVLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const lang = (await params).lang as Language;

    return (
        <html lang={lang}>
            <body className={cn("font-sans antialiased cv-layout", inter.variable)}>
                {children}
            </body>
        </html>
    );
}
