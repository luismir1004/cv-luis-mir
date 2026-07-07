import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "../../components/ThemeProvider";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { GoogleAnalytics, Analytics } from "../../components/Analytics";
import { generateStructuredData, generateOrganizationSchema, generateWebSiteSchema, generateBreadcrumbSchema } from "../../components/StructuredData";
import '../globals.css';
import { LanguageProvider } from '../../context/LanguageContext';
import { LOCALES, type Language } from '../../dictionaries/types';
import { es } from '../../dictionaries/es';
import { en } from '../../dictionaries/en';
import { cn } from '../../lib/utils';
import { AppShell } from '../../components/AppShell';

// Using Inter instead of Inter Tight for better reliability
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
    preload: true,
    weight: ['400', '500', '600', '700'],
    fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export function generateStaticParams() {
    return LOCALES.map((lang) => ({ lang }));
}

// Unknown locales never reach here: the middleware prefixes every
// unprefixed path, and anything else 404s via the [...rest] catch-all
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    // Guaranteed 'es' | 'en' by generateStaticParams + dynamicParams=false
    const lang = (await params).lang as Language;
    const dict = lang === 'en' ? en : es;
    const ogLocale = lang === 'en' ? 'en_US' : 'es_ES';
    const ogAlternate = lang === 'en' ? 'es_ES' : 'en_US';

    return {
        metadataBase: new URL('https://luismir.com'),
        title: {
            default: dict.meta.title,
            template: '%s | Luis Mir'
        },
        description: dict.meta.description,
        alternates: {
            canonical: `/${lang}`,
            languages: {
                'es': '/es',
                'en': '/en',
                'x-default': '/es',
            },
        },
        keywords: [
            'Senior Full Stack Software Engineer',
            'Product Engineer',
            'React Developer',
            'Next.js 16 Expert',
            'TypeScript Developer',
            'Tailwind CSS 4',
            'Serverless Architecture',
            'Supabase',
            'Drizzle ORM',
            'UI/UX Development',
            'Frontend Architecture',
            'Backend as a Service',
            'AI-Assisted Development',
            'Vercel Deployments',
            'CI/CD',
            'Full Product Lifecycle'
        ],
        authors: [{ name: 'Luis Mir', url: 'https://luismir.com' }],
        creator: 'Luis Mir',
        publisher: 'Luis Mir Portfolio',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons: {
            icon: '/favicon.ico',
            apple: '/apple-touch-icon.png',
        },
        appleWebApp: {
            title: 'Luis Mir Portfolio',
            statusBarStyle: 'black-translucent',
            capable: true,
        },
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            url: `https://luismir.com/${lang}`,
            siteName: 'Luis Mir Portfolio',
            locale: ogLocale,
            alternateLocale: [ogAlternate],
            type: 'website',
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Luis Mir - Senior Full Stack Developer & Product Engineer',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: dict.meta.title,
            description: dict.meta.description,
            images: ['/og-image.png'],
            creator: '@luismir1004',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: process.env.GOOGLE_SITE_VERIFICATION || '',
        },
        other: {
            'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION || '',
        },
    };
}

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const lang = (await params).lang as Language;

    return (
        <html lang={lang} suppressHydrationWarning>
            <head>
                {/* Schema.org Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: generateOrganizationSchema() }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: generateWebSiteSchema() }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: generateBreadcrumbSchema() }}
                />
            </head>
            <body className={cn("font-sans antialiased", inter.variable)}>
                <GoogleAnalytics />
                <ErrorBoundary>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                        <LanguageProvider initialLanguage={lang}>
                            <Analytics />
                            <AppShell>
                                {children}
                            </AppShell>
                        </LanguageProvider>
                    </ThemeProvider>
                </ErrorBoundary>
            </body>
        </html>
    );
}
