'use client';

import { HelmetProvider } from 'react-helmet-async';
import { UIProvider } from '../context/UIContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HelmetProvider>
            <UIProvider>
                {children}
            </UIProvider>
        </HelmetProvider>
    );
}
