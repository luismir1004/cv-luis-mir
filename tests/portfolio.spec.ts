import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {

    // The middleware detects the browser language; pin it so "/" lands on /es
    test.use({ locale: 'es-ES' });

    test('root redirects to detected locale', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL(/\/es$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    });

    test('root redirects English browsers to /en', async ({ browser }) => {
        const context = await browser.newContext({ locale: 'en-US' });
        const page = await context.newPage();
        await page.goto('/');
        await expect(page).toHaveURL(/\/en$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
        await context.close();
    });

    test('should have correct metadata per locale', async ({ page }) => {
        await page.goto('/es');
        await expect(page).toHaveTitle(/Luis Mir/);
        const hreflangEn = page.locator('link[rel="alternate"][hreflang="en"]');
        await expect(hreflangEn).toHaveAttribute('href', /\/en$/);

        await page.goto('/en');
        await expect(page).toHaveTitle(/Luis Mir/);
        const hreflangEs = page.locator('link[rel="alternate"][hreflang="es"]');
        await expect(hreflangEs).toHaveAttribute('href', /\/es$/);
    });

    test('should render critical sections', async ({ page }) => {
        await page.goto('/es');
        for (const id of ['metrics', 'projects', 'impact', 'experience', 'skills', 'contact', 'education']) {
            await expect(page.locator(`#${id}`)).toBeAttached();
        }
    });

    test('should toggle language via the switcher', async ({ page }) => {
        await page.goto('/es');
        await expect(page.getByRole('link', { name: 'Descargar CV' }).first()).toBeVisible();

        const langButton = page.getByRole('button', { name: /Switch to English/i }).first();
        await langButton.click();

        // Navigates to /en, UI and <html lang> switch, CV links to English PDF
        await expect(page).toHaveURL(/\/en$/);
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
        await expect(page.getByRole('link', { name: 'Download CV' }).first()).toBeVisible();
        await expect(page.getByRole('link', { name: 'Download CV' }).first())
            .toHaveAttribute('href', '/cv-luis-mir-en.pdf');
    });

    test('direct /en load renders English without flash', async ({ page }) => {
        await page.goto('/en');
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
        await expect(page.getByRole('link', { name: 'Download CV' }).first()).toBeVisible();
    });

    test('unknown paths show the 404 page', async ({ page }) => {
        const response = await page.goto('/es/no-existe');
        expect(response?.status()).toBe(404);
        await expect(page.getByText('404')).toBeVisible();
    });

    test('should render contact form fields', async ({ page }) => {
        await page.goto('/es');
        await page.locator('#contact').scrollIntoViewIfNeeded();
        await expect(page.locator('#contact-name')).toBeAttached();
        await expect(page.locator('#contact-email')).toBeAttached();
        await expect(page.locator('#contact-message')).toBeAttached();
    });

    test('/cv redirects to the detected locale', async ({ page }) => {
        await page.goto('/cv');
        await expect(page).toHaveURL(/\/cv\/es$/);
    });

    test('CV page renders localized for PDF capture', async ({ page }) => {
        await page.goto('/cv/es');
        await expect(page.getByText('Luis Alejandro Mir Jimenez').first()).toBeVisible();
        await expect(page.getByText('Resumen Profesional')).toBeVisible();

        await page.goto('/cv/en');
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
        await expect(page.getByText('Professional Summary')).toBeVisible();
    });

});
