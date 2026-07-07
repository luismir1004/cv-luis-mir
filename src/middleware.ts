import { NextRequest, NextResponse } from 'next/server';

const LOCALES = ['es', 'en'];
const LANGUAGE_COOKIE = 'portfolio-language';

function detectLocale(request: NextRequest): string {
    const cookie = request.cookies.get(LANGUAGE_COOKIE)?.value;
    if (cookie && LOCALES.includes(cookie)) {
        return cookie;
    }

    const acceptLanguage = request.headers.get('accept-language') ?? '';
    return acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // /cv uses a trailing locale segment (/cv/es, /cv/en) instead of a prefix
    if (pathname === '/cv') {
        const url = request.nextUrl.clone();
        url.pathname = `/cv/${detectLocale(request)}`;
        return NextResponse.redirect(url);
    }
    if (pathname.startsWith('/cv/')) {
        return NextResponse.next();
    }

    const hasLocale = LOCALES.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );
    if (hasLocale) {
        return NextResponse.next();
    }

    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    // Skip API routes, Next internals, and any file with an extension (public/ assets)
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
