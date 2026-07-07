const isDev = process.env.NODE_ENV === 'development';

// Content Security Policy — strict but allows controlled external assets.
// 'unsafe-eval' is only required by the dev bundler; never ship it in production.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data: blob:;
  connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com;
  frame-src 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,

    typescript: {
        ignoreBuildErrors: false,
    },
    
    // Compression
    compress: true,

    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        qualities: [75, 85],
        minimumCacheTTL: 60,
        unoptimized: false,
    },

    // Experimental features for performance
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },

    // Turbopack config (Next.js 16 default bundler)
    turbopack: {},

    // Security and performance headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Security headers
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: ContentSecurityPolicy,
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                ],
            },
            {
                // Static assets: aggressive caching
                source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2|pdf)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },

};

export default nextConfig;
