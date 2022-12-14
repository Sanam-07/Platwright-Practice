import { test, expect, chromium } from '@playwright/test';

test("Login test demo",async()=>{

  const browser = await chromium.launch({
    headless:false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/")
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
  await page.click("text=Login")

  await page.fill("#input-email","sanam@gmail.com")
  await page.fill("input[type='password']","sanam123")
  await page.click("input[type='submit']")

  await page.waitForTimeout(5000);

})