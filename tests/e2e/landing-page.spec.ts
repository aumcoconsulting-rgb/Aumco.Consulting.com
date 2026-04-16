import { test, expect } from '@playwright/test';

test.describe('Aumco Consulting Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    // Replace with your actual local or deployed URL
    await page.goto('http://localhost:3000');
  });

  test('should display the correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Aumco Consulting/);
  });

  test('should have a visible hero section with main headline', async ({ page }) => {
    const headline = page.getByText('We Build Systems That Scale Businesses');
    await expect(headline).toBeVisible();
  });

  test('should navigate to services section when clicking nav link', async ({ page }) => {
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    await expect(page).toHaveURL(/.*#services/);
    const servicesTitle = page.getByText('Core Service Categories');
    await expect(servicesTitle).toBeInViewport();
  });

  test('should show validation error if contact form is submitted empty', async ({ page }) => {
    await page.getByRole('link', { name: 'Book Free Consultation' }).first().click();
    await page.getByRole('button', { name: 'Send via WhatsApp' }).click();
    
    // Check for native HTML5 validation or custom toast
    const nameInput = page.locator('#name');
    const isInvalid = await nameInput.evaluate((node: HTMLInputElement) => !node.checkValidity());
    expect(isInvalid).toBeTruthy();
  });

  test('should display all 4 pricing plans', async ({ page }) => {
    const plans = ['Starter', 'Growth', 'Premium', 'Custom Plan'];
    for (const plan of plans) {
      await expect(page.getByText(plan, { exact: false })).toBeVisible();
    }
  });

  test('should display the WhatsApp support link in contact section', async ({ page }) => {
    const whatsappLink = page.getByRole('link', { name: 'Instant support available' });
    await expect(whatsappLink).toHaveAttribute('href', /wa.me\/919003748116/);
  });
});
