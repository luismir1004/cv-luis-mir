import { Metadata, Viewport } from 'next';
import Link from 'next/link';

export const viewport: Viewport = {
    themeColor: '#FAFAFA',
};

export const metadata: Metadata = {
    title: '404: Página no encontrada | Luis Mir',
    description: 'La página que buscas no existe.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <h1 className="font-display text-9xl font-bold text-slate-200 dark:text-slate-800 mb-4 select-none">
                404
            </h1>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Página no encontrada
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">
                Lo sentimos, la ruta que intentas explorar no existe en este sistema.
                Podría haber sido movida o eliminada.
            </p>

            <Link
                href="/"
                className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
            >
                Volver al Inicio
            </Link>
        </div>
    );
}
