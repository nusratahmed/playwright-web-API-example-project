const {test, expect} = require('@playwright/test');
class SuccessOrderPage
{
constructor(page)
{
    this.page = page;
    this.orderSuccessSection = page.locator("//section[@id='thankyou-body']");
}
async VerifyOrderSuccess()
{
    await this.orderSuccessSection.waitFor({ visible: true, timeout: 10000 });
    expect(await this.orderSuccessSection.isVisible()).toBeTruthy();  
    console.log("Successfully ordered");
}

}
module.exports = {SuccessOrderPage};
