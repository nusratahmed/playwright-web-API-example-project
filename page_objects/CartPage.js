const {test, expect} = require('@playwright/test');
class CartPage
{
constructor(page)
{
    this.page = page;
    this.cartPageMainContent = page.locator("#content");
    this.cartPageProductName = page.locator("[data-testid='summary-product-name']");
    this.cartPageArtikelNumber = page.locator("[data-testid='summary-product-sku']");
    this.cartPageProductPrice = page.locator("//div[@class='cart-summary__container ']/div[1]//span[@class='cart-summary__price']");
    this.cartPageExtraPrice = page.locator("//div[@class='cart-summary__container ']/div[2]//span[@class='cart-summary__price']");
    this.cartPageTotalPrice = page.locator("//div[@class='cart-summary__container ']/div[3]//span[2]");
    this.checkoutButton = page.locator("[data-testid='cart-go-to-checkout']");
}
async VerifyCartPageIsDisplayed()
{
        await this.cartPageMainContent.waitFor({ visible: true, timeout: 5000 });
        expect(await this.cartPageProductName.isVisible()).toBeTruthy();  
        console.log("Cart Page");
}
async ProductNameFromCartPage()
{
    let productName = await this.cartPageProductName.innerText();
    return productName;
}
async ArtikelNumberFromCartPage()
{
    let artikelNumber = await this.cartPageArtikelNumber.innerText();
    return artikelNumber;
}
async ProductPriceFromCartPage()
{
    let productPrice = await this.cartPageProductPrice.innerText();
    return productPrice;
}
async ExtraPriceFromCartPage()
{
    let extraPrice = await this.cartPageExtraPrice.innerText();
    return extraPrice;
}
async TotalPriceFromCartPage()
{
    let extraPrice = await this.cartPageTotalPrice.innerText();
    return extraPrice;
}
async CheckTotalPrice()
{
    let productPrice = parseFloat(await this.ProductPriceFromCartPage());
    let extraPrice = parseFloat(await this.ExtraPriceFromCartPage());
    let totalPrice = parseFloat(await this.TotalPriceFromCartPage());
    expect(totalPrice).toEqual(productPrice+extraPrice);
}
async BrowseToUserOptionPage()
{
    await this.checkoutButton.click();

}

}
module.exports = {CartPage};
