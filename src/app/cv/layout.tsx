/**
 * CV Layout — Stripped layout for PDF generation.
 * No Navbar, No Footer, No StatusBar, No ScrollProgress.
 * This route is designed to be captured by Playwright as a clean PDF.
 */
export default function CVLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="cv-layout">
            {children}
        </div>
    );
}
