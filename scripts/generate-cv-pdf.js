/**
 * generate-cv-pdf.js
 * 
 * Playwright script to generate a clean, professional PDF from the /cv route.
 * Run with: npx playwright test generate-cv-pdf.js (or node with playwright installed)
 * 
 * Prerequisites: npm run dev must be running on localhost:3000
 */

const { chromium } = require('playwright');
const path = require('path');

(async () => {
    console.log('🚀 Starting PDF generation...');

    const browser = await chromium.launch({
        headless: true,
    });

    const page = await browser.newPage();

    // Navigate to the clean CV route
    const url = 'http://localhost:3000/cv';
    console.log(`📄 Navigating to ${url}...`);

    try {
        await page.goto(url, {
            waitUntil: 'networkidle',
            timeout: 15000,
        });
    } catch (e) {
        console.error(`❌ Failed to load ${url}: ${e.message}`);
        console.error('   Make sure "npm run dev" is running.');
        await browser.close();
        process.exit(1);
    }

    // Wait for fonts and rendering
    await page.waitForTimeout(2000);

    // Force light theme (the CV should always be white/light)
    await page.emulateMedia({ colorScheme: 'light' });

    // Generate PDF
    const outputPath = path.join(__dirname, 'public', 'cv-luis-mir-es.pdf');
    console.log(`📝 Generating PDF at: ${outputPath}`);

    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0mm',
            right: '0mm',
            bottom: '0mm',
            left: '0mm',
        },
        preferCSSPageSize: false,
    });

    console.log(`✅ PDF generated successfully: ${outputPath}`);

    // Also take a screenshot for verification
    const screenshotPath = path.join(__dirname, 'cv-preview.png');
    await page.screenshot({
        path: screenshotPath,
        fullPage: true,
        type: 'png',
    });
    console.log(`📸 Screenshot saved: ${screenshotPath}`);

    await browser.close();
    console.log('🎉 Done!');
})();
