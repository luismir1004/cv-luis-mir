'use client';

/**
 * 🛡️ ErrorBoundary Component
 * 
 * Captura errores de React y muestra una UI de fallback.
 * Esencial para resilencia de la aplicación.
 */

import React, { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ErrorBoundaryProps {
    children: ReactNode;
    /** UI personalizada de fallback */
    fallback?: ReactNode;
    /** Callback cuando ocurre un error */
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
    /** Mostrar UI de reset */
    showReset?: boolean;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

/**
 * ErrorBoundary que captura errores en el árbol de componentes hijos
 * 
 * @example
 * <ErrorBoundary fallback={<ErrorFallback />} onError={logToSentry}>
 *   <RiskyComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log error a servicio externo
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <DefaultErrorFallback
                    error={this.state.error}
                    onReset={this.props.showReset !== false ? this.handleReset : undefined}
                />
            );
        }

        return this.props.children;
    }
}

/**
 * UI de fallback por defecto
 */
interface DefaultErrorFallbackProps {
    error: Error | null;
    onReset?: () => void;
}

const DefaultErrorFallback = ({ error, onReset }: DefaultErrorFallbackProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-[300px] p-8 rounded-2xl border border-rose-200 dark:border-rose-900/30 bg-rose-50/50 dark:bg-rose-950/20"
    >
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-4">
            <svg
                className="w-8 h-8 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Algo salió mal
        </h3>

        {/* Message */}
        <p className="text-sm text-slate-600 dark:text-slate-400 text-center max-w-md mb-4">
            Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
        </p>

        {/* Error details (dev only) */}
        {process.env.NODE_ENV === 'development' && error && (
            <details className="w-full max-w-md mb-4">
                <summary className="cursor-pointer text-xs text-rose-500 font-mono">
                    Ver detalles técnicos
                </summary>
                <pre className="mt-2 p-3 rounded-lg bg-slate-900 text-rose-400 text-xs overflow-auto max-h-32">
                    {error.message}
                    {'\n\n'}
                    {error.stack}
                </pre>
            </details>
        )}

        {/* Actions */}
        <div className="flex gap-3">
            {onReset && (
                <button
                    onClick={onReset}
                    className="px-4 py-2 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300 font-medium text-sm hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-colors"
                >
                    Reintentar
                </button>
            )}
            <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
                Recargar página
            </button>
        </div>
    </motion.div>
);

/**
 * HOC para envolver componentes con ErrorBoundary
 */
export function withErrorBoundary<P extends object>(
    WrappedComponent: React.ComponentType<P>,
    errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    const ComponentWithErrorBoundary = (props: P) => (
        <ErrorBoundary {...errorBoundaryProps}>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );

    ComponentWithErrorBoundary.displayName = `withErrorBoundary(${displayName})`;

    return ComponentWithErrorBoundary;
}

export default ErrorBoundary;
