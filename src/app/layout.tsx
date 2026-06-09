import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { Navbar } from "../components/Navbar";
import { StatusBar } from "../components/StatusBar";
import { ScrollProgress } from "../components/ScrollProgress";
import { ThemeProvider } from "../components/ThemeProvider";
import dynamic from 'next/dynamic';
import './globals.css';
import { cn } from '../lib/utils';

// Lazy load heavy visual components
const BackgroundEffects = dynamic(() => import('../components/BackgroundEffects').then(mod => ({ default: mod.BackgroundEffects })), {
    loading: () => <div className="fixed inset-0 bg-background" />
});

const CursorSpotlight = dynamic(() => import('../components/CursorSpotlight').then(mod => ({ default: mod.CursorSpotlight })), {
    loading: () => null
});

const Footer = dynamic(() => import('../components/Footer').then(mod => ({ default: mod.Footer })), {
    loading: () => <div className="h-20 bg-background" />
});

const NeuralInterface = dynamic(() => import('../components/NeuralInterface').then(mod => ({ default: mod.NeuralInterface })), {
    loading: () => null
});

const interTight = Inter_Tight({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
    preload: true,
    weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://luismir.com'), // Replace with actual domain
    title: {
        default: 'Luis Mir | Tech Lead & Ingeniero de IA',
        template: '%s | Luis Mir'
    },
    description: 'Portafolio de Ingeniería de Software de Alto Nivel. Especialista en Agentes de IA, Arquitecturas RAG y React Performance.',
    keywords: ['Ingeniero de IA', 'Senior Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'RAG Architecture', 'AI Agents'],
    authors: [{ name: 'Luis Mir', url: 'https://luismir.com' }],
    creator: 'Luis Mir',
    publisher: 'Deep Studio Code',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/favicon.ico', // Ensure this exists or use a generic one
    },
    appleWebApp: {
        title: 'Luis Mir CV',
        statusBarStyle: 'black-translucent',
    },
    openGraph: {
        title: 'Luis Mir | Tech Lead & Ingeniero de IA',
        description: 'Construyendo la próxima generación de interfaces web inteligentes.',
        url: 'https://luismir.com',
        siteName: 'Luis Mir Portfolio',
        locale: 'es_ES',
        type: 'website',
        images: [
            {
                url: '/og-image.png', // Ensure this exists
                width: 1200,
                height: 630,
                alt: 'Luis Mir - Tech Lead & AI Engineer',
            },
        ],
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
};

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
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
            <body className={cn("font-sans antialiased grain-pinnacle", interTight.variable)}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <ScrollProgress />
                    <StatusBar />
                    <BackgroundEffects />
                    <CursorSpotlight />
                    <Navbar />
                    <main className="relative min-h-screen">
                        {children}
                    </main>
                    <NeuralInterface />
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
