const {test, expect}= require('@playwright/test');

test('Browser context playwright  test', async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/client/");
   await page.locator("#userEmail").fill("anshika@gmail.com");
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("#login").click();
 //  await page.waitForLoadState('networkidle');// if not working then use 
   await await page.locator(".card-body b").first().waitFor();
   const allTitles= await page.locator(".card-body b").allTextContents();
   console.log(allTitles);

});
test.only('UI drop down and check box', async ({page})=>
{
   const userName =  page.locator('#username');
   const password = page.locator('input[type="password"]');
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   console.log(await page.title());
   await userName.fill('rahulshetty');
   await password.fill('learning');
   const dropdown= await page.locator("select.form-control");
   await dropdown.selectOption("consult");
   // Assertions of check box 
   await page.locator("span.radiotextsty").last().click();
   await page.locator("#okayBtn").click();
   console.log(await page.locator("span.radiotextsty").last().isChecked());
   await expect(page.locator("span.radiotextsty").last()).toBeChecked();
   await page.locator("#terms").click();
   await expect(page.locator("#terms")).toBeChecked();
   await page.locator("#terms").uncheck();
   expect(await page.locator("#terms").isChecked()).toBeFalsy();
});
