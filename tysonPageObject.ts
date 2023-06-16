import {By, WebDriver} from 'selenium-webdriver';
import { BasePage } from './basePage';
const chromedriver = require("chromedriver");

export class groupPage extends BasePage {
    //selectors
driver: WebDriver;
url: string = "https://magento.softwaretestingboard.com/";
//class for mens section: ('(//a[@class="level-top ui-corner-all"])[3]')
mensPage: By = By.xpath('(//a[@class="level-top ui-corner-all"])[3]');
    mensArgus: By = By.xpath('(//a[@class="product-item-link"])[1]');
    mensHeroHoodie: By = By.xpath('(//a[@class="product-item-link"])[2]');
    mensMeteor: By = By.xpath('(//a[@class="product-item-link"])[3]');
    mensGeo: By = By.xpath('(//a[@class="product-item-link"])[4]');
    mensCompare: By = By.xpath('(//span[text()="Add to Compare"])[1]');
    mensCompareButton: By = By.xpath('(//a[@class="action compare primary"])');
    mensCompareClearButton: By = By.xpath('(//a[@class="action clear"])');
    compareMsg: By = By.xpath('//div[@class="message-success success message"]');
signUpPage: By = By.xpath('(//a[text()= "Create an Account"])[1]');
signInPage: By = By.xpath('(//li[@class="authorization-link"])[1]');
mensTopsPage: By = By.xpath('(//a[text()= "Tops"])[1]');
    mensHoodie: By = By.xpath('(//li[@class="item"])[3]');
    mensJacket: By = By.xpath('(//li[@class="item"])[4]');
    mensTees: By = By.xpath('(//li[@class="item"])[5]');
    mensTank: By = By.xpath('(//li[@class="item"])[6]');
mensBottomsPage: By = By.xpath('(//a[text()= "Bottoms"])[1]');
whatsNewPage: By = By.xpath('(//a[@class="level-top ui-corner-all"])[1]');
    whatsNewYoga: By = By.xpath('(//span[@class="more button"])');
    whatsNewPerformance: By = By.xpath('(//span[@class="more icon"])[1]');
    whatsNewEco: By = By.xpath('(//span[@class="more icon"])[2]');
searchBar: By = By.xpath('(//input[@class="input-text"])');
results: By = By.xpath('(//span[@class="base"])');
    //constructor
 constructor() {
    super({url: "https://magento.softwaretestingboard.com/"});
 }
    //methods
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`);
    };
    async getResults() {
        return this.getText(this.results);
    };
};