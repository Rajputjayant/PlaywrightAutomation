const {test, expect}= require('@playwright/test');

test('Browser context playwright  test', async ({browser})=>
{
   // chrome - cookies/plugin
   const context= await browser.newContext()
   const page= await context.newPage();
   await page.goto("https://www.google.com/")
   console.log(await page.title());
    expect(page).toHaveTitle('Google')
   // step -1
   // step -2 
   // step -3 
});
test('page playwright test', async ({page})=>
{

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   console.log(await page.title());

});