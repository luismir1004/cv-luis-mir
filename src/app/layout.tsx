import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '../components/Providers';
import { CVJsonLd } from '../components/JsonLd';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta',
    display: 'swap',
});

// ============================================================================
// METADATA - SEO Optimizations
// ============================================================================

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luismir.dev';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Luis Mir | Ingeniero de IA & Full Stack Developer',
        template: '%s | Luis Mir',
    },
    description: 'Portafolio profesional de Luis Mir - Ingeniero de Inteligencia Artificial y Desarrollador Full Stack especializado en React, Next.js, TypeScript, y tecnologías de IA. Creador de aplicaciones web modernas y agentes autónomos.',
    keywords: [
        'Luis Mir',
        'AI Engineer',
        'Full Stack Developer',
        'React',
        'Next.js',
        'TypeScript',
        'Machine Learning',
        'Inteligencia Artificial',
        'Frontend Developer',
        'Web Development',
        'Portfolio',
    ],
    authors: [{ name: 'Luis Mir', url: siteUrl }],
    creator: 'Luis Mir',
    publisher: 'Luis Mir',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'es_VE',
        alternateLocale: 'en_US',
        url: siteUrl,
        siteName: 'Luis Mir - Portfolio',
        title: 'Luis Mir | Ingeniero de IA & Full Stack Developer',
        description: 'Portafolio profesional de Luis Mir - Ingeniero de Inteligencia Artificial y Desarrollador Full Stack.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Luis Mir - AI Engineer & Full Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Luis Mir | Ingeniero de IA & Full Stack Developer',
        description: 'Portafolio profesional de Luis Mir - AI Engineer & Full Stack Developer.',
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
        // Add verification codes when ready
        // google: 'your-google-verification-code',
    },
    alternates: {
        canonical: siteUrl,
        languages: {
            'es': siteUrl,
            'en': `${siteUrl}/en`,
        },
    },
    category: 'technology',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
        { media: '(prefers-color-scheme: dark)', color: '#020617' },
    ],
};

// ============================================================================
// ROOT LAYOUT
// ============================================================================

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="es"
            className={`${inter.variable} ${plusJakarta.variable}`}
            suppressHydrationWarning
        >
            <head>
                {/* Theme initialization script - MUST run before React hydration */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var theme = localStorage.getItem('color-theme');
                                    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                        document.documentElement.classList.add('dark');
                                    } else {
                                        document.documentElement.classList.remove('dark');
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />

                {/* JSON-LD Structured Data for SEO */}
                <CVJsonLd />

                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className="antialiased">
                <Providers>
                    {/* Skip to content link for accessibility */}
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Saltar al contenido principal
                    </a>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
