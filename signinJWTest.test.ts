import { groupPage } from "./pageObject";
import {BasePage} from "./basePage"; 
import {Builder, By, Capabilities, promise, until, WebDriver,} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const groupOne = new groupPage();
const { Key } = require("selenium-webdriver");

/*This test attempts a sign-in with known credentials.*/

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class luma extends BasePage {
      
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
        signIn: By = By.xpath('(/html/body/div[1]/header/div[1]/div/ul/li[2]/a)');
        emailField: By = By.xpath('(//*[@id="email"])');
        passwordField: By = By.xpath('(//*[@id="pass"])');
        signInBtn: By = By.xpath('(//*[@id="send2"])');

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
      test("Signing in", async () => {
        await lPage.driver.wait(until.elementLocated(lPage.signIn));
        await lPage.click(lPage.signIn);
        await lPage.driver.wait(until.elementLocated(lPage.emailField));
        await lPage.click(lPage.emailField);
        await lPage.sendKeys(lPage.emailField, "roni_cost@example.com");
        await lPage.click(lPage.passwordField);
        await lPage.sendKeys(lPage.passwordField, "roni_cost@example.com");
        await lPage.click(lPage.signInBtn);
        
     });
});