import test from "@playwright/test";
test("Leads creation", async ({page}) => 
{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("Demosalesmanager");
await page.locator("#password").fill("crmsfa");
await page.locator(".decorativeSubmit").click();
await page.locator("a:has-text('CRM/SFA')").click(); 
await page.locator("a:has-text('Leads')").click();
await page.locator('span.x-panel-header-text:has-text("Create Lead")').click();
await page.locator('[name="companyName"]').first().fill("TestLeaf");
await page.locator('[name="firstName"]').nth(1).fill("Shrinivashan");
await page.locator('[name="lastName"]').nth(1).fill("P");
await page.locator('[name="primaryPhoneCountryCode"]').last().fill("+91");
await page.locator('[name="primaryPhoneAreaCode"]').last().fill("77");
await page.locator('[name="primaryPhoneNumber"]').last().fill("1234567890");
await page.locator('[name="primaryEmail"]').last().fill("shrinitest@mail.com");
await page.locator('.x-btn-text').nth(4).click(); 
await page.waitForTimeout(5000);
});