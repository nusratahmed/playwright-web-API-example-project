const {test, expect} = require('@playwright/test');
class SofasCouchesPage
{
constructor(page)
{
    this.page = page;
    this.pageNameHeader = page.locator("h1");
    this.inStockToggleButton = page.locator("[data-testid='isInStock-toggle']");
    this.filterText =  page.locator("[data-testid='active-filters'] > div > span");
    this.firstProduct = page.locator("article:first-child a:first-child div[data-testid='product-brand']");
}
async VerifySofasAndCouchesPageIsDisplayed()
{
    expect(await this.pageNameHeader.isVisible()).toBeTruthy();
    console.log("Sofas and Couches Page");
}
async BrowseToProductPage()
{
    await this.inStockToggleButton.click();
    await this.page.evaluate(() => {
        window.scrollTo(0, 300);
      });
    await this.filterText.waitFor({ visible: true, timeout: 5000 });
    await this.firstProduct.waitFor({ visible: true, timeout: 5000 });
    await this.firstProduct.click();
}

}
module.exports = {SofasCouchesPage};
