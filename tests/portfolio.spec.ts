import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {

    // The site auto-detects browser language; pin it so the default is Spanish
    test.use({ locale: 'es-ES' });

    test.beforeEach(async ({ page }) => {
        page.on('pageerror', exception => console.log(`BROWSER ERROR: ${exception}`));
        await page.goto('/');
    });

    test('should have correct metadata', async ({ page }) => {
        await expect(page).toHaveTitle(/Luis Mir/);
    });

    test('should render critical sections', async ({ page }) => {
        for (const id of ['metrics', 'projects', 'impact', 'experience', 'skills', 'contact', 'education']) {
            await expect(page.locator(`#${id}`)).toBeAttached();
        }
    });

    test('should toggle language and update html lang', async ({ page }) => {
        // Default language is Spanish
        await expect(page.getByRole('link', { name: 'Descargar CV' }).first()).toBeVisible();

        const langButton = page.getByRole('button', { name: /Switch to English/i }).first();
        await langButton.click();

        // UI switches to English and <html lang> follows
        await expect(page.getByRole('link', { name: 'Download CV' }).first()).toBeVisible();
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');

        // CV download points to the English PDF
        await expect(page.getByRole('link', { name: 'Download CV' }).first())
            .toHaveAttribute('href', '/cv-luis-mir-en.pdf');
    });

    test('should render contact form fields', async ({ page }) => {
        await page.locator('#contact').scrollIntoViewIfNeeded();
        await expect(page.locator('#contact-name')).toBeAttached();
        await expect(page.locator('#contact-email')).toBeAttached();
        await expect(page.locator('#contact-message')).toBeAttached();
    });

    test('CV page renders for PDF capture', async ({ page }) => {
        await page.goto('/cv');
        await expect(page.getByText('Luis Alejandro Mir Jimenez').first()).toBeVisible();
    });

});
