import {BasePage} from "./basePageJW"; 
import {Builder, By, Capabilities, promise, until, WebDriver,} from "selenium-webdriver";
import { PageObjectJW } from "./pageObjectJW";
const chromedriver = require("chromedriver");
const { Key } = require("selenium-webdriver");

/*This test adds a number of shorts to the cart 
and then verifies the expected discount is applied.*/

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class luma extends BasePage {
      driver: WebDriver;
      url: string = "https://magento.softwaretestingboard.com/";
      
        //Constructor
            constructor(driver: WebDriver) {
                super();
            };  
        
};
  const pageObject = new PageObjectJW(driver)
  describe("Luma Test", () => {
      beforeEach(async () => {
          await pageObject.navigate();
      });
      afterAll(async () => {
        await pageObject.driver.quit();
    });
      // Increase the timeout to 10 seconds (10000 milliseconds)
      jest.setTimeout(10000);
      test("adding shorts to cart", async () => {
        await pageObject.driver.wait(until.elementLocated(pageObject.womenSection));
        await pageObject.click(pageObject.womenSection);
        await pageObject.driver.wait(until.elementLocated(pageObject.bottoms));
        await pageObject.click(pageObject.bottoms);
        await pageObject.driver.wait(until.elementLocated(pageObject.erikaShort));
        await pageObject.click(pageObject.erikaShort);
        await pageObject.click(pageObject.size28);
        await pageObject.click(pageObject.colorGreen);
        await pageObject.click(pageObject.qty);
        await pageObject.sendKeys(pageObject.qty, "")
        await pageObject.sendKeys(pageObject.qty, "1");
        await pageObject.click(pageObject.addToCart);
        await pageObject.click(pageObject.miniCart);
        await pageObject.driver.wait(until.elementLocated(pageObject.shoppingCart));
        await pageObject.click(pageObject.shoppingCart);
        await pageObject.driver.wait(until.elementLocated(pageObject.discountText));
        
        const discountPriceElement = await pageObject.findElement(By.xpath('(//*[@id="cart-totals"]/div/table/tbody/tr[2]/td/span/span)'));
        const discountPriceText = await discountPriceElement.getText();
        expect(discountPriceText).toBe("-$99.00")

        console.log("Discount price:", discountPriceText === ("-$99.00"));
     });
});