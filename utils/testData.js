const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder :    {
    websitename : "https://www.segmueller.de/",
    userfirstname : "tryFirst",
    userlastname : "tryLast",
    email : "trytry@gmail.com",
    roadName : "Strasse",
    roadNumber : "1",
    zipCode: "85241",
    city: "Bonn",
    phone: "04912345678910",
    }

}

)