

const indexPage = require('../page_objects/indexPage');
const myAccountPage = require('../page_objects/myAccountPage');

beforeAll(function (){ browser.get("http://automationpractice.com/index.php") });


describe("Actions for automation page practice",function(){

    it("Open login page", function(){
      indexPage.enterIntoLoginPage();
      expect( indexPage.isLoginPageDisplayed()).toBe(true);
    });

    it("New Account should not be created without mail", function() {
      indexPage.enterIntoLoginPage();
      myAccountPage.createNewAccountWithouthMail();
      expect(myAccountPage.isinvalidMailMessageDisplayed()).toBe(true);
    });

    it("New Account should not be created with wrong mail address", function(){
      indexPage.enterIntoLoginPage();
      myAccountPage.createNewAccountWithWrongMail();
      expect(myAccountPage.isinvalidMailMessageDisplayed()).toBe(true);
    });

    it("A new Account can be created with valid mail ", function() {
    indexPage.enterIntoLoginPage();
    myAccountPage.createNewAccount();
    expect(myAccountPage.isAccountSuccessfullyCreated()).toBe(true);
    });

    it("A valid registered Account can access ", function() {
      indexPage.enterIntoLoginPage();
      myAccountPage.loginWithValidAccount();
      expect(myAccountPage.isAccountLoggedIn()).toBe(true);
    });









});
