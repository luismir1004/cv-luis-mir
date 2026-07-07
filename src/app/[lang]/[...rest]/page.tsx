import { notFound } from 'next/navigation';

/**
 * Catch-all for unknown paths under a valid locale (e.g. /es/foo).
 * Triggers the localized not-found page.
 */
export default function CatchAll() {
    notFound();
}
