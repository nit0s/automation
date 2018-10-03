const util = require('../base/actions');

function indexPage(){
  //webElements
  this.signInButton = element(by.css(".login"));
  this.createAccountButton = element(by.css("#SubmitCreate,[value='1']"));
  

  this.enterIntoLoginPage = () => {
    util.clickElement(this.signInButton);
   }

  this.isLoginPageDisplayed = () => {
  return util.elementVisible(this.createAccountButton);
  };
}
module.exports = new indexPage();
