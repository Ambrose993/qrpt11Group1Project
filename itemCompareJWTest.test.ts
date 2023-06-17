import {BasePage} from "./basePageJW"; 
import {Builder, By, Capabilities, promise, until, WebDriver,} from "selenium-webdriver";
import {PageObjectJW} from "./pageObjectJW";
const chromedriver = require("chromedriver");
const { Key } = require("selenium-webdriver");

/*This test adds a number of shirts to the compare list.*/

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
  jest.setTimeout(20000);
  describe("Luma Test", () => {
      beforeEach(async () => {
          await pageObject.navigate();
      });
      afterAll(async () => {
        await pageObject.driver.quit();
    });
      test("adding items to compare", async () => {
        await pageObject.driver.wait(until.elementLocated(pageObject.womenSection));
        await pageObject.click(pageObject.womenSection);
        await pageObject.driver.wait(until.elementLocated(pageObject.tops));
        await pageObject.click(pageObject.tops);
        await pageObject.driver.wait(until.elementLocated(pageObject.breathEasyTank));
        await pageObject.click(pageObject.breathEasyTank);
        await pageObject.click(pageObject.addToCompare)
        await pageObject.click(pageObject.womenSection);
        await pageObject.driver.wait(until.elementLocated(pageObject.tops));
        await pageObject.click(pageObject.tops);
        await pageObject.driver.wait(until.elementLocated(pageObject.chloeCompeteTank));
        await pageObject.click(pageObject.chloeCompeteTank);
        await pageObject.click(pageObject.addToCompare);
        await pageObject.driver.wait(until.elementLocated(pageObject.womenSection));
        await pageObject.click(pageObject.womenSection);
        await pageObject.driver.wait(until.elementLocated(pageObject.tops));
        await pageObject.click(pageObject.tops);
        await pageObject.click(pageObject.zoeTank);
        await pageObject.click(pageObject.addToCompare);
        await pageObject.driver.wait(until.elementLocated(pageObject.comparisonList));
        await pageObject.click(pageObject.comparisonList);
        
     });
});
