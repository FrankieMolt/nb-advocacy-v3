import { test, expect } from '@playwright/test';

test.describe('Reform NB User Flow', () => {
  const baseUrl = 'http://localhost:55700';

  test('Navigation and Core Content', async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page).toHaveTitle(/Reform NB/);
    await expect(page.locator('h1')).toContainText('Cost');
    
    await page.click('nav >> text=Healthcare');
    await expect(page).toHaveURL(/healthcare/);
    await expect(page.locator('h1')).toContainText('Healthcare Collapse');
    
    await page.click('nav >> text=The Oligarchy');
    await expect(page).toHaveURL(/oligarchy/);
    await expect(page.locator('h1')).toContainText('Corporate Oligarchy');
    
    await page.click('nav >> text=Take Action');
    await expect(page).toHaveURL(/take-action/);
    await expect(page.locator('h3 >> text=Direct Intervention')).toBeVisible();
    
    await page.click('footer >> text=Sources & Data');
    await expect(page).toHaveURL(/sources/);
    await expect(page.locator('h1')).toContainText('Archive');
  });

  test('Mobile Responsiveness Check', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(baseUrl);
    await expect(page.locator('header >> text=Reform NB')).toBeVisible();
  });
});
