import { groupPage } from "./tysonPageObject";
const groupOne = new groupPage();

afterAll(async () => {
    setTimeout(function() {
        groupOne.driver.quit();
    }, 2000);

});

test('go to mens page and compare', async () => {
    await groupOne.navigate();
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensArgus);
    await groupOne.driver.sleep(2000);
    await groupOne.click(groupOne.mensCompare);
    await groupOne.driver.sleep(2000);
     let popupMgs = await groupOne.getText(groupOne.compareMsg);
    expect(popupMgs).toContain("You added product");
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensHeroHoodie);
    await groupOne.driver.sleep(3000);
    await groupOne.click(groupOne.mensCompare);
    await groupOne.driver.sleep(3000);
    expect(popupMgs).toContain("You added product");
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensMeteor);
    await groupOne.driver.sleep(3000);
    await groupOne.click(groupOne.mensCompare);
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensGeo);
    await groupOne.driver.sleep(3000);
    await groupOne.click(groupOne.mensCompare);
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensCompareButton);
    await groupOne.driver.sleep(3000);
    await groupOne.click(groupOne.mensCompareClearButton);
});
