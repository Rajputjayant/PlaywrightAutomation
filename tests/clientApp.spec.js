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
test('UI drop down and check box', async ({page})=>
{
   const userName =  page.locator('#username');
   const password = page.locator('input[type="password"]');
   const documentLink = page.locator("[href*='documents-request']");
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
   await expect(documentLink).toHaveAttribute("class","blinkingText");
});
test('@Child window Handle ', async ({browser})=>
{
   const context= await browser.newContext()
   const page= await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName =  page.locator('#username');
   const documentLink = page.locator("[href*='documents-request']");
   const [newPage]= await Promise.all(
   [context.waitForEvent('page'),
   documentLink.click(),])
   const text= await newPage.locator(".red").textContent();
//   console.log(text);
   const arryText= text.split("@");
   const domian= arryText[1].split(" ")[0]
   console.log(domian);
   await userName.fill(domian);
   // await page.pause();
   console.log(await page.locator("#username").textContent());

});
test.only('Booking the product  test', async ({page})=>
{
   const email ='anshika@gmail.com';
   const productName ='IPHONE 13 PRO';
   const products= page.locator(".card-body ");
   await page.goto("https://rahulshettyacademy.com/client/");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("#login").click();
 //  await page.waitForLoadState('networkidle');// if not working then use 
   await await page.locator(".card-body b").first().waitFor();
   const allTitles= await page.locator(".card-body b").allTextContents();
   console.log(allTitles);
   const count= await products.count();
   for( let  i=0; i<count; ++i){
     if(await products.nth(i).locator("b").textContent()==productName){
       // add to cart 
       await products.nth(i).locator("text= Add To Cart").click();
       break;
     }
   }
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible()
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();
  await page.locator("[placeholder*='Country']").pressSequentially("ind");
  const dd=page.locator(".ta-item");
  await dd.first().waitFor();
  const optionCount= await dd.locator("span").count();
  for(let i=0;i<optionCount;++i){
    const text= await dd.locator("span").nth(i).textContent();
    if(text===" India")
    {
      await dd.locator("span").nth(i).click();
      break;
    }
  }
expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
await page.locator(".action__submit ").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId)
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows= await page.locator("tbody tr");
for(let i=0;i< await rows.count;++i){
   const rowsOrderId= await rows.nth(i).locator("th").textContent();
   if(orderId.includes(rowsOrderId))
   {
      await rows.nth(i).locator("button").first().click();
      break;
   }
}
const orderDetailPage= await page.locator(".col-text").textContent();
await expect(orderId.includes(orderDetailPage)).toBeTruthy();
  

});

