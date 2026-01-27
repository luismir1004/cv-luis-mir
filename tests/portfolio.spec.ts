import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for cinematic intro to finish (approx 3s)
        // We wait for the specific text "Building Intelligence" to be detached or hidden
        await expect(page.getByText('Building Intelligence')).toBeHidden({ timeout: 10000 });
    });

    test('should have correct metadata', async ({ page }) => {
        await expect(page).toHaveTitle(/Luis Mir/);
    });

    test('should toggle theme', async ({ page }) => {
        const html = page.locator('html');

        // Check initial state
        const initialClass = await html.getAttribute('class') || '';

        // Find theme toggle button. 
        // It's the button that is NOT the language toggle (EN/ES).
        const buttons = page.getByRole('button');
        const themeButton = buttons.filter({ hasNotText: /EN|ES/ }).first();

        if (await themeButton.isVisible()) {
            await themeButton.click();

            // Check if class changed
            // Allow a small pause for state update
            await page.waitForTimeout(500);
            const newClass = await html.getAttribute('class') || '';
            expect(newClass).not.toBe(initialClass);
        }
    });

    test('should toggle language', async ({ page }) => {
        // We expect "Descargar CV" or "Download CV".
        // It's a button, not a link
        const downloadButton = page.getByRole('button', { name: /Descargar CV|Download CV/i }).first();

        // Get initial text
        const initialText = await downloadButton.textContent();

        // Find language toggle.
        const langButton = page.getByRole('button', { name: /EN|ES/i }).first();

        if (await langButton.isVisible()) {
            await langButton.click();

            // Wait for rerender
            await page.waitForTimeout(500);

            // Expect text to change
            if (initialText?.includes('Descargar')) {
                await expect(downloadButton).toHaveText(/Download CV/i);
            } else {
                await expect(downloadButton).toHaveText(/Descargar CV/i);
            }
        }
    });

    test('should render tech stack', async ({ page }) => {
        // Check for "Tech Stack" or "Stack Tecnológico" heading
        // The text is "Stack Tecnológico" in ES.
        await expect(page.getByText(/Tech Stack|Stack Tecnológico/i)).toBeVisible();

        // Check for some known technologies
        const stackSection = page.locator('#stack');
        await expect(stackSection.getByText('React', { exact: true }).first()).toBeVisible();
        await expect(stackSection.getByText('TypeScript', { exact: true }).first()).toBeVisible();
    });

    test('should render critical sections', async ({ page }) => {
        // Check for sections presence by ID
        await expect(page.locator('#hero')).toBeVisible();
        await expect(page.locator('#profile')).toBeVisible();
        await expect(page.locator('#experience')).toBeVisible();
        await expect(page.locator('#stack')).toBeVisible();
        await expect(page.locator('#education')).toBeVisible();
        await expect(page.locator('#languages')).toBeVisible();
    });

});
