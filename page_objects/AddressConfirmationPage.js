const {test, expect} = require('@playwright/test');
class AddressConfirmationPage
{
constructor(page)
{
    this.page = page;
    this.wrongAddressIcon = page.locator("section:nth-child(1) > *:first-child");
    this.addressAccept = page.locator("[data-testid='accept-address-checkbox']");
    this.continueButton = page.locator("[data-testid='accept-address-button']");
}
async VerifyAddressConfirmationPageIsDisplayed()
{
    await this.wrongAddressIcon.waitFor({ visible: true, timeout: 5000 });
    console.log("Address Confirmation Page");
}
async ContinueToPaymentPageWithWrongAddress()
{
    await this.addressAccept.click();
    await this.continueButton.click();
}

}
module.exports = {AddressConfirmationPage};
