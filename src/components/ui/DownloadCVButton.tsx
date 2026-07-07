"use client";

import { Download } from 'lucide-react';
import { useTranslation } from "@/context/LanguageContext";

export default function DownloadCVButton() {
  const { t, language } = useTranslation();

  return (
    <a
      href={language === 'en' ? '/cv-luis-mir-en.pdf' : '/cv-luis-mir-es.pdf'}
      download="CV_Luis_Mir_Product_Engineer.pdf"
      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-amber-600 hover:bg-amber-500 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95"
      aria-label={t.ui.hero.ctaDownload}
    >
      <span>{t.ui.hero.ctaDownload}</span>
      <Download className="w-4 h-4" />
    </a>
  );
}
