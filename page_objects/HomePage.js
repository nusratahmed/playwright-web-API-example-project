const {test, expect} = require('@playwright/test');
class HomePage
{
constructor(page)
{
    this.page = page;
    this.companyImage = page.locator(".HeaderContent_sbHeaderNavLogo__oUsT_");
    this.cookiesAcceptButton = page.locator("#cmpbntyestxt");
    this.FurnitureNav = page.locator("[href='/moebel']");
    this.sofasCouchesNav =  page.locator("li > a[href='/moebel/wohnzimmer/sofas-und-couches']");
}
async goTo(websitename)
{
    await this.page.goto(websitename);
}
async AcceptCookies()
{  
    if (await this.cookiesAcceptButton) {
      await this.cookiesAcceptButton.click();
    } else {
      console.error('Element not found.');
    }
}
async VerifyHomePageIsDisplayed()
{
    expect(await this.companyImage.isVisible()).toBeTruthy();
    console.log("Home Page");
}
async BrowseToSofasCouchesPage()
{

    try {
        await this.FurnitureNav.hover();
        await this.sofasCouchesNav.waitFor({ visible: true, timeout: 5000 });
        await this.sofasCouchesNav.click();
      } catch (error) {
        console.error(`Error during hover and waitFor: ${error}`);
      } 
}

}
module.exports = {HomePage};