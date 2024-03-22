const {test, expect} = require('@playwright/test');
class ProductDetailsPage
{
constructor(page)
{
    this.page = page;
    this.pageBreadcrumb = page.locator(".breadcrumb");
    this.productName = page.locator("//h1[@data-testid='product-name']//span");
    this.addToCartButton = page.locator("//main[@id='content']//div[4]/form//button");
    this.artikelNumber = page.locator("[data-testid='product-sku']");
    this.productPrice = page.locator("//div[@class='product-buy-box__prices']//div[@data-testid='product-price']");
    this.popUpContinueButton = page.locator("//body/div[5]/div[1]/div/div[2]/div[1]/a[1]/span");
}
async VerifyProductDetailsPageIsDisplayed()
{
        await this.pageBreadcrumb.waitFor({ visible: true, timeout: 5000 });
        expect(await this.productName.isVisible()).toBeTruthy();  
        console.log("Product Details Page");
}
async ProductNameFromDetailsPage()
{
    let productName = await this.productName.innerText();
    return productName;
}
async ArtikelNumberFromDetailsPage()
{
    let artikelNumber = await this.artikelNumber.innerText();
    return artikelNumber;
}
async ProductPriceFromDetailsPage()
{
    let productPrice = await this.productPrice.innerText();
    return productPrice;
}
async AddToCart()
{
    await this.addToCartButton.click();
    await this.popUpContinueButton.waitFor({ visible: true, timeout: 10000 });
    await this.popUpContinueButton.click();
}
}
module.exports = {ProductDetailsPage};
