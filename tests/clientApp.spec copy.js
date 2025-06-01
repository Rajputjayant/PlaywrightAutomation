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
test.only('page playwright test', async ({page})=>
{
   const userName =  page.locator('#username');
   const password = page.locator('input[type="password"]');
   const signIn = page.locator('#signInBtn');
   const cartTittles= page.locator(".card-body a");
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   console.log(await page.title());
   await userName.fill('rahulshetty');
   await password.fill('learning');
   await signIn.click();
   console.log(await page.locator("div[style*='block']").textContent());
   await expect(page.locator("div[style*='block']")).toContainText('Incorrect');
   await userName.fill('rahulshettyacademy');
   await password.fill('learning');
   await page.locator('#signInBtn').click();
 //  console.log(await cartTittles.first().textContent());
   // console.log(await cartTittles.nth(0).textContent());
   // console.log(await cartTittles.last().textContent());
   const allTitles=await cartTittles.allTextContents();
   console.log(allTitles);
});