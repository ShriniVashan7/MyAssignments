import test, { chromium, webkit } from "@playwright/test";
test("Red Bus", async () => {
const edge = await chromium.launch({channel:'msedge', headless:false})
const context1 = await edge.newContext()
const page = await context1.newPage()
await page.goto("https://www.redbus.in");
const pageTitle = await page.title();
if (pageTitle === "Bus Booking Online and Train Tickets at Lowest Price - redBus") 
    {
    console.log("Title is correct: " + pageTitle);
    }
else
    {
    console.log("Title is incorrect" + pageTitle);
    }
const pageURL =  page.url();
if (pageURL === "https://www.redbus.in/")
    {
    console.log("URL is correct: " + pageURL); 
    } 
else 
    { 
    console.log("URL is incorrect" + pageURL); 
    } 
});

test("Flipkart", async () => {
const webKit = await webkit.launch({headless:false})
const context2 = await webKit.newContext()
const page1 = await context2.newPage()
await page1.goto("https://www.flipkart.com");
const pageTitle = await page1.title();
if (pageTitle === "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!") 
    {
    console.log("Title is correct: " + pageTitle);
    }
else
    {
    console.log("Title is incorrect" + pageTitle);
    }
const pageURL = page1.url();
if (pageURL === "https://www.flipkart.com")
    {
    console.log("URL is correct: " + pageURL); 
    } 
else 
    { 
    console.log("URL is incorrect" + pageURL); 
    } 
});