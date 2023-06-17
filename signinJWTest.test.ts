import {BasePage} from "./basePageJW"; 
import {Builder, By, Capabilities, promise, until, WebDriver,} from "selenium-webdriver";
import { PageObjectJW } from "./pageObjectJW";
const chromedriver = require("chromedriver");
const { Key } = require("selenium-webdriver");

/*This test attempts a sign-in with known credentials.*/

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class luma extends BasePage {
      
      url: string = "https://magento.softwaretestingboard.com/";
      

        //Constructor
            constructor(driver: WebDriver) {
                super();
            };   
            
};
const pageObject = new PageObjectJW(driver);
  describe("Luma Test", () => {
      beforeEach(async () => {
          await pageObject.navigate();
      });
      afterAll(async () => {
        await pageObject.driver.quit();
    });
      // Increase the timeout to 10 seconds (10000 milliseconds)
      jest.setTimeout(10000);
      test("Signing in", async () => {
        await pageObject.driver.wait(until.elementLocated(pageObject.signIn));
        await pageObject.click(pageObject.signIn);
        await pageObject.driver.wait(until.elementLocated(pageObject.emailField));
        await pageObject.click(pageObject.emailField);
        await pageObject.sendKeys(pageObject.emailField, "roni_cost@example.com");
        await pageObject.click(pageObject.passwordField);
        await pageObject.sendKeys(pageObject.passwordField, "roni_cost@example.com");
        await pageObject.click(pageObject.signInBtn);
        
     });
});