"use client";
import Link from 'next/link';

import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('Error caught by boundary:', error, errorInfo);
        
        // Aquí podrías enviar el error a un servicio como Sentry
        if (typeof window !== 'undefined' && (window as any).Sentry) {
            (window as any).Sentry.captureException(error);
        }
    }

    handleReset = () => {
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-background px-4">
                    <div className="max-w-md w-full text-center space-y-8">
                        <div className="space-y-4">
                            <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-10 h-10 text-red-500" />
                            </div>
                            <h1 className="text-4xl font-black text-foreground">
                                Oops!
                            </h1>
                            <p className="text-muted-foreground">
                                Algo salió mal. No te preocupes, no es tu culpa.
                            </p>
                            {this.state.error && (
                                <p className="text-sm text-muted-foreground/50 font-mono">
                                    {this.state.error.message}
                                </p>
                            )}
                        </div>

                        <button
                            onClick={this.handleReset}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Intentar de nuevo
                        </button>

                        <div className="pt-8 border-t border-border/10">
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}