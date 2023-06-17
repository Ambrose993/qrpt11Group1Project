import {By} from 'selenium-webdriver'
import { BasePage } from './basePage'
export class adamsPage extends BasePage {
    gearTab: By=By.xpath('//a[@id="ui-id-6"]');
    watches: By=By.xpath('(//a[text()="Watches"])[1]');
    didiWatch: By=By.xpath('(//a[@class="product-item-link"])[1]');
    addToCart: By=By.xpath('(//button[@id="product-addtocart-button"])[1]');
    cartMsg: By=By.xpath('(//div[@class="message-success success message"])[1]')
    //2nd test selectors
    cart: By=By.xpath('(//a[@class="action showcart"])[1]');
    removeFromCart: By=By.xpath('(//a[@class="action delete"])[1]');
    okBtn: By=By.xpath('(//button[@class="action-primary action-accept"])[1]');
    //3rd test selectors
    bags: By=By.xpath('(//a[text()="Bags"])[1]');
    fusionBackpack: By=By.xpath('(//a[@class="product-item-link"])[9]');
    addYourReview: By=By.xpath('(//a[text()="Add Your Review"])');
    starRating: By=By.xpath('//label[@class="rating-4"]');
    nameInput: By=By.xpath('//input[@name="nickname"]');
    summaryInput: By=By.xpath('//input[@id="summary_field"]')
    reviewBox: By=By.xpath('//textarea[@name="detail"]')
    submitReview: By=By.xpath('//button[@class="action submit primary"]')



    constructor(){
        super({url:"https://magento.softwaretestingboard.com/"})
    }
}