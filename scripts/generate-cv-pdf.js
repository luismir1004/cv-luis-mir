/**
 * generate-cv-pdf.js
 *
 * Generates the downloadable CV PDFs (es + en) by capturing the /cv/[lang]
 * routes with Playwright.
 *
 * Run with: npm run cv:pdf
 * If no server is running on localhost:3000, it starts "next dev" itself
 * and shuts it down when finished.
 */

const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const LANGS = ['es', 'en'];
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function serverIsUp() {
    try {
        const res = await fetch(`${BASE_URL}/cv/es`, { redirect: 'follow' });
        return res.ok;
    } catch {
        return false;
    }
}

async function waitForServer(timeoutMs = 60000) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
        if (await serverIsUp()) return true;
        await new Promise((r) => setTimeout(r, 1000));
    }
    return false;
}

(async () => {
    console.log('🚀 Starting PDF generation...');

    let devServer = null;

    if (!(await serverIsUp())) {
        console.log('🔌 No server on localhost:3000 — starting "next dev"...');
        devServer = spawn('npx', ['next', 'dev'], {
            cwd: path.join(__dirname, '..'),
            stdio: 'ignore',
            detached: true,
        });

        if (!(await waitForServer())) {
            console.error('❌ Dev server did not become ready in time.');
            if (devServer) process.kill(-devServer.pid);
            process.exit(1);
        }
        console.log('✅ Dev server ready.');
    }

    const browser = await chromium.launch({ headless: true });

    try {
        for (const lang of LANGS) {
            const page = await browser.newPage();
            const url = `${BASE_URL}/cv/${lang}`;
            console.log(`📄 Navigating to ${url}...`);

            await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

            // Wait for fonts and rendering
            await page.waitForTimeout(2000);

            // Force light theme (the CV should always be white/light)
            await page.emulateMedia({ colorScheme: 'light' });

            const outputPath = path.join(PUBLIC_DIR, `cv-luis-mir-${lang}.pdf`);
            await page.pdf({
                path: outputPath,
                format: 'A4',
                printBackground: true,
                margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
                preferCSSPageSize: false,
            });
            console.log(`✅ PDF generated: ${outputPath}`);

            await page.close();
        }
    } finally {
        await browser.close();
        if (devServer) {
            console.log('🔌 Stopping dev server...');
            try {
                process.kill(-devServer.pid);
            } catch {
                // already gone
            }
        }
    }

    console.log('🎉 Done!');
})();
