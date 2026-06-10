import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from "../components/Navbar";
import { StatusBar } from "../components/StatusBar";
import { ScrollProgress } from "../components/ScrollProgress";
import { ThemeProvider } from "../components/ThemeProvider";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { SkipLink } from "../components/SkipLink";
import { GoogleAnalytics, Analytics } from "../components/Analytics";
import { generateStructuredData, generateOrganizationSchema, generateWebSiteSchema, generateBreadcrumbSchema } from "../components/StructuredData";
import dynamic from 'next/dynamic';
import './globals.css';
import { cn } from '../lib/utils';

// Register service worker
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Lazy load Footer for better initial load
const Footer = dynamic(() => import('../components/Footer').then(mod => ({ default: mod.Footer })), {
    loading: () => <div className="h-20 bg-background" />
});

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
        default: 'Luis Mir | Senior Full Stack Developer & AI Engineer',
        template: '%s | Luis Mir'
    },
    description: 'Senior Full Stack Developer & AI Engineer specializing in React, Next.js, TypeScript, and modern web architectures. 8+ years experience delivering scalable solutions with 50+ projects and 15K+ users impacted.',
    keywords: [
        'Senior Full Stack Developer',
        'React Developer',
        'Next.js Expert',
        'TypeScript Developer',
        'AI Engineer',
        'Frontend Architect',
        'Full Stack Development',
        'Web Development',
        'Software Engineer',
        'UI/UX Development',
        'Serverless Architecture',
        'Cloud Development',
        'Software Architecture',
        'Technical Leadership'
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
        title: 'Luis Mir | Senior Full Stack Developer & AI Engineer',
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
                alt: 'Luis Mir - Senior Full Stack Developer & AI Engineer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luis Mir | Senior Full Stack Developer & AI Engineer',
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
                
                {/* Preconnect to external domains */}
                <link rel="preconnect" href="https://images.unsplash.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                
                {/* DNS prefetch */}
                <link rel="dns-prefetch" href="https://images.unsplash.com" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            </head>
            <body className={cn("font-sans antialiased", inter.variable)}>
                <GoogleAnalytics />
                <ErrorBoundary>
                    <SkipLink />
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                        <Analytics />
                        <ScrollProgress />
                        <StatusBar />
                        <Navbar />
                        <main id="main-content" className="relative min-h-screen" tabIndex={-1}>
                            {children}
                        </main>
                        <Footer />
                    </ThemeProvider>
                </ErrorBoundary>
            </body>
        </html>
    );
}
