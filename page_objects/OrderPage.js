const {test, expect} = require('@playwright/test');
class OrderPage
{
constructor(page)
{
    this.page = page;
    this.orderPageProductName = page.locator("[data-testid='summary-product-name']");
    this.billingAddress = page.locator("//div[@class='container']/div/div[1]/div[1]/div");
    this.deliveryAddress = page.locator("//div[@class='container']/div/div[1]/div[2]/div");
    this.orderPageArtikelNumber = page.locator("[data-testid='summary-product-sku']");
    this.orderBillingForm = page.locator("[class='form checkout-summary']");
    this.placeOrderButton = page.locator("//place-order-button/button");
    this.orderPageProductPrice = page.locator("//div[@class='cart-summary__container']/div[1]//span[@class='cart-summary__price']");
    this.orderPageExtraPrice = page.locator("//div[@class='cart-summary__container']/div[2]//span[@class='cart-summary__price']");
    this.orderPageTaxPrice = page.locator("//div[@class='cart-summary__container']/div[3]//span[@class='cart-summary__price']");
    this.orderPageTotalPrice = page.locator("//div[@class='cart-summary__container']/div[4]//span[2]");

}
async VerifyOrderPageIsDisplayed()
{
    await this.orderPageProductName.waitFor({ visible: true, timeout: 5000 });
    await this.orderBillingForm.waitFor({ visible: true, timeout: 5000 });
    console.log("Order Page");
}
async VerifyClientAddressesAreDisplayed()
{
    expect(await this.deliveryAddress.isVisible()).toBeTruthy();  
    expect(await this.deliveryAddress.isVisible()).toBeTruthy();  
}
async ProductPriceFromOrderPage()
{
    let productPrice = await this.orderPageProductPrice.innerText();
    return productPrice;
}
async ExtraPriceFromOrderPage()
{
    let productPrice = await this.orderPageExtraPrice.innerText();
    return productPrice;
}
async TaxPriceFromOrderPage()
{
    let productPrice = await this.orderPageTaxPrice.innerText();
    return productPrice;
}
async TotalPriceFromOrderPage()
{
    let productPrice = await this.orderPageTotalPrice.innerText();
    return productPrice;
}
async CheckTotalPrice()
{
    let productPrice = parseFloat(await this.ProductPriceFromOrderPage());
    let extraPrice = parseFloat(await this.ExtraPriceFromOrderPage());
    let taxPrice = parseFloat(await this.TaxPriceFromOrderPage());
    let totalPrice = parseFloat(await this.TotalPriceFromOrderPage());
    expect(totalPrice).toEqual(productPrice+extraPrice);
}
async ConfirmOrder()
{
    await this.placeOrderButton.click();
}


}
module.exports = {OrderPage};
