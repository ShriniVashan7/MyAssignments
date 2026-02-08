import test from "@playwright/test";

test("To launch a browser using page fixture", async ({ page }) => {
    await page.goto("https://www.flipkart.com/mobiles/mi~brand/pr?sid=tyy,4io&otracker=nmenu_sub_Electronics_0_Mi");
    await page.waitForTimeout(5000);
});