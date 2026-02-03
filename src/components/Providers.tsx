'use client';

import React from 'react';

import { UIProvider } from '../context/UIContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <UIProvider>
            {children}
        </UIProvider>
    );
}
