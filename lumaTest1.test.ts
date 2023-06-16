import { adamsPage } from "./adamPage";
const adam = new adamsPage()

describe("Selecting gear from Gear Page", ()=> {
beforeEach(async () => {
    await adam.navigate()
})
afterAll(async () => {
    await adam.driver.quit()
})
test("adding watch to cart",async () => {
    await adam.click(adam.gearTab);
    await adam.click(adam.watches);
    await adam.click(adam.didiWatch);
    await adam.click(adam.addToCart);
    let msg = await adam.getText(adam.cartMsg);
    expect(msg).toContain('Didi Sport Watch');
});
test("removing from cart",async () => {
    await adam.click(adam.gearTab);
    await adam.click(adam.watches);
    await adam.click(adam.didiWatch);
    await adam.click(adam.addToCart);
    await adam.click(adam.cart);
    await adam.click(adam.removeFromCart);
    await adam.click(adam.okBtn);
});
test("leaving review on a bag",async () =>{
    await adam.click(adam.gearTab);
    await adam.click(adam.bags);
    await adam.click(adam.fusionBackpack);
    await adam.driver.sleep(1500);
    await adam.click(adam.addYourReview);
    await adam.driver.sleep(5000);
    await adam.click(adam.nameInput);
    await adam.setInput(adam.nameInput, "Saiyan Prince 9000");
    await adam.click(adam.summaryInput);
    await adam.setInput(adam.summaryInput, "Dragon Balls Secure");
    await adam.click(adam.reviewBox);
    await adam.setInput(adam.reviewBox, "Wait Until Shenron Sees This");
    await adam.click(adam.submitReview);
});
});
