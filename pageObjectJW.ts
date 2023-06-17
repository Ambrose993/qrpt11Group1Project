import {BasePage} from "./basePageJW"; 
import {Builder, By, Capabilities, promise, until, WebDriver,} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const { Key } = require("selenium-webdriver");

/*This test adds a number of shirts to the compare list.*/

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class luma extends BasePage {
      
      url: string = "https://magento.softwaretestingboard.com/";
      //Locators
        search: By = By.id('search');
        womenSection: By = By.xpath('(//a[@id="ui-id-4"])');
        tops: By = By.xpath('(//*[@id="narrow-by-list2"]/dd/ol/li[1]/a)');
        bottoms: By = By.xpath(`(//*[@id="narrow-by-list2"]/dd/ol/li[2]/a)`);
        zoeTank: By = By.xpath('(//*[@id="maincontent"]/div[3]/div[1]/div[3]/ol/li[8]/div/div/strong/a)');
        erikaShort: By = By.xpath('(//a[@class="product-item-link"])');
        chloeCompeteTank: By = By.xpath('(//*[@id="maincontent"]/div[3]/div[1]/div[3]/ol/li[4]/div/div/strong/a)');
        breathEasyTank: By = By.xpath('(//*[@id="maincontent"]/div[3]/div[1]/div[3]/ol/li[1]/div/div/strong/a)');
        size28: By = By.xpath(`(//div[@id="option-label-size-143-item-171"])`);
        colorGreen: By = By.xpath(`(//div[@id="option-label-color-93-item-53"])`);
        addToCart: By = By.xpath('(//button[@title="Add to Cart"])');
        addToCompare: By = By.xpath('(//*[@id="maincontent"]/div[2]/div/div[1]/div[5]/div/a[2]/span)');
        qty: By = By.xpath('(//input[@name="qty"])');
        miniCart: By = By.xpath('(//div[@data-block="minicart"])');
        miniCartQty: By = By.xpath('(//input[@id="cart-item-209177-qty"])');
        miniCartSize4: By = By.xpath('(//input[@size="4"])');
        header: By = By.xpath('(//div[@class="header content"])');
        shoppingCart: By = By.xpath('(//*[@id="maincontent"]/div[1]/div[2]/div/div/div/a)');
        discountText: By = By.xpath('(//*[@id="cart-totals"]/div/table/tbody/tr[2]/td/span/span)');
        comparisonList: By = By.xpath('(//*[@id="maincontent"]/div[1]/div[2]/div/div/div/a)');
        
        
        //Constructor
           constructor(driver: WebDriver) {
            super();
           }};