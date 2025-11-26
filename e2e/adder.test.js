import { expect, test } from '@playwright/test';
 
test('Addition E2E Test', async ({ page }) => {
 
    await page.goto('/');
 
    const input1 = page.locator('#number1');
    const input2 = page.locator('#number2');
   
    await input1.fill('4');
    await input2.fill('8');

    await page.getByRole('button').click();
    await expect(page.locator('#addResult')).toContainText('Result: 12');

    await expect(page.getByRole('heading', { level: 1})).toHaveText('calculator');

    await page.waitForTimeout(20000);

   
});
 





