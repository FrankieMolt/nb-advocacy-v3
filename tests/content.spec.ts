import { test, expect } from '@playwright/test';

test.describe('Reform NB In-Depth Content Check', () => {
  const baseUrl = 'http://localhost:55700';

  test('Verify Healthcare Fatalities and Walkout Stats', async ({ page }) => {
    await page.goto(`${baseUrl}/healthcare`);
    await expect(page.locator('body')).toContainText('Aimee Dunn');
    await expect(page.locator('body')).toContainText('12.9%');
    await expect(page.locator('body')).toContainText('2,199 patients');
  });

  test('Verify Economy Poverty and NB Power Debt Stats', async ({ page }) => {
    await page.goto(`${baseUrl}/economy`);
    await expect(page.locator('body')).toContainText('41.2%');
    await expect(page.locator('body')).toContainText('Campbellton');
    await expect(page.locator('body')).toContainText('51.2%');
    await expect(page.locator('body')).toContainText('$5.9 Billion in debt');
    await expect(page.locator('body')).toContainText('$9 million per day');
  });

  test('Verify Oligarchy Monopoly Content', async ({ page }) => {
    await page.goto(`${baseUrl}/oligarchy`);
    await expect(page.locator('body')).toContainText('Vertical Integration');
    await expect(page.locator('body')).toContainText('$700,000 retroactive property tax refund');
    await expect(page.locator('body')).toContainText('Bermuda');
  });

  test('Verify Action Page Monero and Email CTAs', async ({ page }) => {
    await page.goto(`${baseUrl}/take-action`);
    await expect(page.locator('body')).toContainText('44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A');
    await expect(page.locator('text=Email the PM & Premier')).toBeVisible();
  });
});
