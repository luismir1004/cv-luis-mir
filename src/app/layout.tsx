import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "../components/ThemeProvider";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { GoogleAnalytics, Analytics } from "../components/Analytics";
import { generateStructuredData, generateOrganizationSchema, generateWebSiteSchema, generateBreadcrumbSchema } from "../components/StructuredData";
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { AppShell } from '../components/AppShell';

// Using Inter instead of Inter Tight for better reliability
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
    preload: true,
    weight: ['400', '500', '600', '700'],
    fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://luismir.com'),
    title: {
        default: 'Luis Mir | Senior Full Stack Software Engineer',
        template: '%s | Luis Mir'
    },
    description: 'Senior Full Stack Software Engineer & Product Engineer specializing in React ecosystem (Next.js 16, React 19, Tailwind CSS 4) and Serverless architectures (Supabase, Drizzle ORM). Expert in full product lifecycle from UI/UX design to database orchestration and Vercel deployments.',
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
        title: 'Luis Mir | Senior Full Stack Developer & Product Engineer',
        description: 'Senior software engineer specializing in modern web development, AI integration, and scalable architectures. Transforming ideas into exceptional digital experiences.',
        url: 'https://luismir.com',
        siteName: 'Luis Mir Portfolio',
        locale: 'en_US',
        alternateLocale: ['es_ES'],
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
        title: 'Luis Mir | Senior Full Stack Developer & Product Engineer',
        description: 'Senior software engineer specializing in modern web development, AI integration, and scalable architectures.',
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

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" suppressHydrationWarning>
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
                        <LanguageProvider>
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

