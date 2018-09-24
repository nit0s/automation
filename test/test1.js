

const mainPage = require('../page_objects/mainPage');

beforeAll(function (){ browser.get("http://automationpractice.com/index.php") })

describe("Accesing the main page",function(){
    it("Open login page", function(){

      mainPage.enterIntoLoginPage();
      expect( mainPage.isLoginPageDisplayed()).toBe(true);
    });

    it("not create account without mail", function() {
      mainPage.enterIntoLoginPage();
      mainPage.createNewAccountWithouthMail();
      expect(mainPage.isinvalidMailMessageDisplayed()).toBe(true);

    });

    it("create a new Account ", function() {
      mainPage.enterIntoLoginPage();
      mainPage.createNewAccount();
      expect(mainPage.isAccountSuccessfullyCreated()).toBe(true);
    });







});
