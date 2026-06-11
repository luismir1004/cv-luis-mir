import { Download } from "lucide-react";
import { cn } from "../../lib/utils";

interface DownloadCVButtonProps {
    variant?: "hero" | "navbar";
    className?: string;
}

export const DownloadCVButton = ({ variant = "hero", className }: DownloadCVButtonProps) => {
    const baseClasses = variant === "hero"
        ? "inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-amber-600 hover:bg-amber-500 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 text-sm md:text-base justify-center shadow-md shadow-amber-600/10 cursor-pointer"
        : "inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 border border-amber-600/20 dark:border-amber-400/20 hover:border-amber-600 dark:hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-400/10 rounded-md transition-all duration-300 hover:scale-105 active:scale-95 justify-center cursor-pointer backdrop-blur-sm";

    return (
        <a
            href="/cv-luis-mir-es.pdf"
            download="CV_Luis_Mir_Software_Engineer.pdf"
            aria-label="Descargar currículum vitae de Luis Mir en formato PDF"
            className={cn(baseClasses, className)}
        >
            <Download className={variant === "hero" ? "w-5 h-5" : "w-3.5 h-3.5"} />
            <span>Descargar CV</span>
        </a>
    );
};
