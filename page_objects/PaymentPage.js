const {test, expect} = require('@playwright/test');
class PaymentPage
{
constructor(page)
{
    this.page = page;
    this.paymentForm = page.locator("#payment-form");
    this.advancedPaymentOption = page.locator("form li:nth-child(3)");
    this.paymentButton = page.locator("[data-testid='payment-button']");
    this.paymentPageProductPrice = page.locator("//div[@class='cart-summary__container ']/div[1]//span[@class='cart-summary__price']");
}
async VerifyPaymentPageIsDisplayed()
{
    await this.paymentForm.waitFor({ visible: true, timeout: 5000 });
    expect(await this.advancedPaymentOption.isVisible()).toBeTruthy();  
    console.log("Payment Page");
}
async ProductPriceFromPaymentPage()
{
    let productPrice = await this.paymentPageProductPrice.innerText();
    return productPrice;
}
async BrowseToOrderOverviewPageWithAdvancedPaymentOption()
{
    await this.advancedPaymentOption.click();
    await this.paymentButton.click();
}

}
module.exports = {PaymentPage};
