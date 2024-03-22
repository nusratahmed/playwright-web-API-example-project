const {test, expect} = require('@playwright/test');
class UserOptionPage
{
constructor(page)
{
    this.page = page;
    this.userOptionPageMainContent = page.locator("#content");
    this.guestRegistrationButton = page.locator("[data-testid='order-as-guest-button']");
    this.guestFirstName = page.locator("#guestForm_customer_first_name");
    this.guestLastName = page.locator("#guestForm_customer_last_name");
    this.guestEmail = page.locator("#guestForm_customer_email");
    this.guestSubmitButton = page.locator("[data-testid='guest-form'] [data-testid='button-order']");
}
async VerifyUserOptionPageIsDisplayed()
{
    await this.userOptionPageMainContent.waitFor({ visible: true, timeout: 5000 });
    expect(await this.guestRegistrationButton.isVisible()).toBeTruthy();  
    console.log("User Option Page");
}
async DoRegistrationAsGuest(firstName,lastName,email)
{
    await this.guestRegistrationButton.click();
    await this.guestFirstName.waitFor({ visible: true, timeout: 5000 });
    await this.guestFirstName.fill(firstName);
    await this.guestLastName.fill(lastName);
    await this.guestEmail.fill(email);
    await this.guestSubmitButton.click();
}

}
module.exports = {UserOptionPage};
