const {test, expect} = require('@playwright/test');
class BillingAddressPage
{
constructor(page)
{
    this.page = page;
    this.progressBar = page.locator("#progressbar-checkout");
    this.billingAddressHeader = page.locator("form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) h3");
    this.genderOptionOne = page.locator("[data-testid='salutation-list'] li:nth-child(1)");
    this.roadName = page.locator("#addressesForm_billingAddress_address1");
    this.roadNumber = page.locator("#addressesForm_billingAddress_address2");
    this.zipCode = page.locator("#addressesForm_billingAddress_zip_code");
    this.city = page.locator("#addressesForm_billingAddress_city");
    this.phone = page.locator("#addressesForm_billingAddress_phone");
    this.addressFormSubmitButton = page.locator("[data-testid='address-form'] [data-testid='button-order']");

}
async VerifyBillingAddressPageIsDisplayed()
{
    await this.billingAddressHeader.waitFor({ visible: true, timeout: 5000 });
    expect(await this.progressBar.isVisible()).toBeTruthy();  
    console.log("Billing Address Page");
}
async FillupBillingAddresFormAndContinue(roadName,roadNumber,zipCode,city,phone)
{
    await this.genderOptionOne.click();
    await this.roadName.fill(roadName);
    await this.roadNumber.fill(roadNumber);
    await this.zipCode.fill(zipCode);
    await this.city.fill(city);
    await this.phone.fill(phone);
    await this.addressFormSubmitButton.click();

}

}
module.exports = {BillingAddressPage};
