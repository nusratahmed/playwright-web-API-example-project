const {test, expect} = require('@playwright/test');
const {customtest} = require('../utils/testData');
const {POManager} = require('../page_objects/POManager');

customtest(`Guest User order full journey`, async ({page,testDataForOrder})=>
{
    const poManager = new POManager(page);

    //land on home page and browse to sofas and couches page
    const homePage = poManager.getHomePage();
    await homePage.goTo(testDataForOrder.websitename);
    await homePage.AcceptCookies();
    await homePage.VerifyHomePageIsDisplayed();
    await homePage.BrowseToSofasCouchesPage();
    
    //filter based on "quick availability" and select first product
    const sofasCouchePage = poManager.getSofasCouchesPage();
    await sofasCouchePage.VerifySofasAndCouchesPageIsDisplayed();
    await sofasCouchePage.BrowseToProductPage();

    //save selected product name and artikel number and add this product to cart
    const productDetailsPage = poManager.getProductDetailsPage();
    await productDetailsPage.VerifyProductDetailsPageIsDisplayed();
    let productNameFromDetailsPage = await productDetailsPage.ProductNameFromDetailsPage();
    console.log("Product name from details page: "+productNameFromDetailsPage);
    let artikelNumberFromDetailsPage = await productDetailsPage.ArtikelNumberFromDetailsPage();
    console.log("Artikel number from details page: "+artikelNumberFromDetailsPage);
    let productPriceFromDetailsPage = await productDetailsPage.ProductPriceFromDetailsPage();
    console.log("Product price from details page: "+productPriceFromDetailsPage);
    await productDetailsPage.AddToCart();

    //compare product information in cart page and browse to checkout page
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyCartPageIsDisplayed();
    let productNameFromCartPage = await cartPage.ProductNameFromCartPage();
    console.log("Product name from cart page: "+productNameFromCartPage);
    let artikelNumberFromCartPage = await cartPage.ArtikelNumberFromCartPage();
    console.log("Artiel number from cart page: "+artikelNumberFromCartPage);
    let productPriceFromCartPage = await cartPage.ProductPriceFromCartPage();
    console.log("Product price from cart page: "+productPriceFromCartPage);
    expect(productNameFromCartPage).toEqual(expect.stringContaining(productNameFromDetailsPage));
    expect(artikelNumberFromCartPage).toEqual(expect.stringContaining(artikelNumberFromDetailsPage));
    expect(productPriceFromCartPage).toEqual(expect.stringContaining(productPriceFromDetailsPage));
    await cartPage.CheckTotalPrice();
    await cartPage.BrowseToUserOptionPage();

    //do registration as a guest and browse to billing address page
    const userOptionPage = poManager.getUserOptionPage();
    await userOptionPage.VerifyUserOptionPageIsDisplayed();
    await userOptionPage.DoRegistrationAsGuest
    (
        testDataForOrder.userfirstname,
        testDataForOrder.userlastname,
        testDataForOrder.email
    );
    
    //fillup the billing address and browse to address confirmation page
    const billingAddressPage = poManager.getBillingAddressPage();
    await billingAddressPage.VerifyBillingAddressPageIsDisplayed();
    await billingAddressPage.FillupBillingAddresFormAndContinue
    (
        testDataForOrder.roadName,
        testDataForOrder.roadNumber,
        testDataForOrder.zipCode,
        testDataForOrder.city,
        testDataForOrder.phone
    );

    //Continue to payment page with wrong address
    const addressConfirmationPage = poManager.getAddressConfirmationPage();
    await addressConfirmationPage.VerifyAddressConfirmationPageIsDisplayed();
    await addressConfirmationPage.ContinueToPaymentPageWithWrongAddress();

    //select advanced payment method and browse to overview page
    const paymentPage = poManager.getPaymentPage();
    await paymentPage.VerifyPaymentPageIsDisplayed();
    let productPriceFromPaymentPage = await paymentPage.ProductPriceFromPaymentPage();
    expect(productPriceFromPaymentPage).toEqual(expect.stringContaining(productPriceFromDetailsPage));
    await paymentPage.BrowseToOrderOverviewPageWithAdvancedPaymentOption();

    //check all information from order page and buy this product
    const orderPage = poManager.getOrderPage();
    await orderPage.VerifyOrderPageIsDisplayed();
    await orderPage.VerifyClientAddressesAreDisplayed();
    let productPriceFromOrderPage = await orderPage.ProductPriceFromOrderPage();
    expect(productPriceFromOrderPage).toEqual(expect.stringContaining(productPriceFromDetailsPage));
    await orderPage.CheckTotalPrice();
    await orderPage.ConfirmOrder();

    //confirm order and verify sucess order
    const successOrderPage = poManager.getSuccessOrderPage();
    await successOrderPage.VerifyOrderSuccess();

})








