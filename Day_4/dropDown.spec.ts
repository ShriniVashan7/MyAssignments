import test from "@playwright/test";

test("DropDown", async ({ page }) => {
    await page.goto("https://www.telerik.com/contact");
    await page.selectOption("#Dropdown-1", {label:'Product questions'});
    await page.selectOption('[id="Dropdown-2"]', {value:'DevCraft'});
    await page.selectOption("#Country-1", {index: 2});
    await page.waitForTimeout(12000);
});