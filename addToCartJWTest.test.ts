import { groupPage } from "./pageObject";
import {BasePage} from "./basePage"; 
import {Builder, By, Capabilities, promise, until, WebDriver,} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const groupOne = new groupPage();
const { Key } = require("selenium-webdriver");

/*This test adds a number of shorts to the cart 
and then verifies the expected discount is applied.*/

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class luma extends BasePage {
      driver: WebDriver;
      url: string = "https://magento.softwaretestingboard.com/";
      //Locators
        search: By = By.id('search');
        womenSection: By = By.xpath('(//a[@id="ui-id-4"])');
        bottoms: By = By.xpath(`(//*[@id="narrow-by-list2"]/dd/ol/li[2]/a)`);
        erikaShort: By = By.xpath('(//a[@class="product-item-link"])');
        size28: By = By.xpath(`(//div[@id="option-label-size-143-item-171"])`);
        colorGreen: By = By.xpath(`(//div[@id="option-label-color-93-item-53"])`);
        addToCart: By = By.xpath('(//button[@title="Add to Cart"])');
        qty: By = By.xpath('(//input[@name="qty"])');
        miniCart: By = By.xpath('(//div[@data-block="minicart"])');
        miniCartQty: By = By.xpath('(//input[@id="cart-item-209177-qty"])');
        miniCartSize4: By = By.xpath('(//input[@size="4"])');
        header: By = By.xpath('(//div[@class="header content"])');
        shoppingCart: By = By.xpath('(//*[@id="maincontent"]/div[1]/div[2]/div/div/div/a)');
        discountText: By = By.xpath('(//*[@id="cart-totals"]/div/table/tbody/tr[2]/td/span/span)');
        //Constructor
            constructor(driver: WebDriver) {
                super();
            };  
        
};
  const lPage = new luma(driver)
  describe("Luma Test", () => {
      beforeEach(async () => {
          await lPage.navigate();
      });
      afterAll(async () => {
        await lPage.driver.quit();
    });
      // Increase the timeout to 10 seconds (10000 milliseconds)
      jest.setTimeout(10000);
      test("adding shorts to cart", async () => {
        await lPage.driver.wait(until.elementLocated(lPage.womenSection));
        await lPage.click(lPage.womenSection);
        await lPage.driver.wait(until.elementLocated(lPage.bottoms));
        await lPage.click(lPage.bottoms);
        await lPage.driver.wait(until.elementLocated(lPage.erikaShort));
        await lPage.click(lPage.erikaShort);
        await lPage.click(lPage.size28);
        await lPage.click(lPage.colorGreen);
        await lPage.click(lPage.qty);
        await lPage.sendKeys(lPage.qty, "")
        await lPage.sendKeys(lPage.qty, "1");
        await lPage.click(lPage.addToCart);
        await lPage.click(lPage.miniCart);
        await lPage.driver.wait(until.elementLocated(lPage.shoppingCart));
        await lPage.click(lPage.shoppingCart);
        await lPage.driver.wait(until.elementLocated(lPage.discountText));
        
        const discountPriceElement = await lPage.findElement(By.xpath('(//*[@id="cart-totals"]/div/table/tbody/tr[2]/td/span/span)'));
        const discountPriceText = await discountPriceElement.getText();
        expect(discountPriceText).toBe("-$99.00")

        console.log("Discount price:", discountPriceText === ("-$99.00"));
     });
});