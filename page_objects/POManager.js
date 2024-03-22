const {AddressConfirmationPage} = require('./AddressConfirmationPage');
const {BillingAddressPage} = require('./BillingAddressPage');
const {CartPage} = require('./CartPage');
const {HomePage} = require('./HomePage');
const {OrderPage} = require('./OrderPage');
const {PaymentPage} = require('./PaymentPage');
const {ProductDetailsPage} = require('./ProductDetailsPage');
const {SofasCouchesPage} = require('./SofasCouchesPage');
const {SuccessOrderPage} = require('./SuccessOrderPage');
const {UserOptionPage} = require('./UserOptionPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.addressConfirmationPage = new AddressConfirmationPage(this.page);
    this.billingAddressPage = new BillingAddressPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.homePage = new HomePage(this.page);
    this.orderPage = new OrderPage(this.page);
    this.paymentPage = new PaymentPage(this.page);
    this.productDetailsPage = new ProductDetailsPage(this.page);
    this.sofasCouchesPage = new SofasCouchesPage(this.page);
    this.successOrderPage = new SuccessOrderPage(this.page);
    this.userOptionPage = new UserOptionPage(this.page);
}

getAddressConfirmationPage()
{
    return this.addressConfirmationPage;
}

getBillingAddressPage()
{
    return this.billingAddressPage;
}

getCartPage()
{
    return this.cartPage;
}

getHomePage()
{
    return this.homePage;
}

getOrderPage()
{
    return this.orderPage;
}

getPaymentPage()
{
    return this.paymentPage;
}

getProductDetailsPage()
{
    return this.productDetailsPage;
}

getSofasCouchesPage()
{
    return this.sofasCouchesPage;
}
getSuccessOrderPage()
{
    return this.successOrderPage;
}

getUserOptionPage()
{
    return this.userOptionPage;
}
}
module.exports = {POManager};