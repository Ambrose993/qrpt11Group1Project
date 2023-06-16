import { group } from "yargs";
import { groupPage } from "./tysonPageObject";
const groupOne = new groupPage();

afterAll(async () => {
    setTimeout(function() {
        groupOne.driver.quit();
    }, 2000);

    (e) => {
        if(e) console.error(e);
        else console.log("it worked");
    };
});

test('go to mens page and compare', async () => {
    await groupOne.navigate();
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensArgus);
 
 //   await groupOne.driver.sleep(3000);
    await groupOne.click(groupOne.mensCompare);
     let popupMgs = await groupOne.getText(groupOne.compareMsg);
  expect(popupMgs).toContain("You added product");
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensHeroHoodie);
  //  await groupOne.driver.sleep(3000);
//     await groupOne.click(groupOne.mensCompare);
//     await groupOne.click(groupOne.mensPage);
//     await groupOne.click(groupOne.mensMeteor);
//     //await groupOne.driver.sleep(3000);
//     await groupOne.click(groupOne.mensCompare);
//     await groupOne.click(groupOne.mensPage);
//     await groupOne.click(groupOne.mensGeo);
//    // await groupOne.driver.sleep(3000);
    await groupOne.click(groupOne.mensCompare);
    expect(popupMgs).toContain("You added product");
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensCompareButton);
   // await groupOne.driver.sleep(3000);
  //  await groupOne.click(groupOne.mensCompareClearButton);
});

test('go to mens bottom page', async () =>{
    await groupOne.navigate();
    await groupOne.click(groupOne.mensPage);
    await groupOne.click(groupOne.mensBottomsPage);    
});

    test('go to mens tops page sub tabs', async () =>{
        await groupOne.navigate();
        await groupOne.click(groupOne.mensPage);
        await groupOne.click(groupOne.mensTopsPage);
        await groupOne.click(groupOne.mensPage);
        await groupOne.click(groupOne.mensHoodie);
        await groupOne.click(groupOne.mensPage);
        await groupOne.click(groupOne.mensJacket);
        await groupOne.click(groupOne.mensPage);
        await groupOne.click(groupOne.mensTees);
        await groupOne.click(groupOne.mensPage);
        await groupOne.click(groupOne.mensTank);
    });

  test('does the search bar work', async () => {
    await groupOne.navigate();
    await groupOne.click(groupOne.searchBar)
    await groupOne.search('Bottoms');
    let text = await groupOne.getResults;
  });

  test('Whats new click options', async () => {
    await groupOne.navigate();
    await groupOne.click(groupOne.whatsNewPage);
    await groupOne.click(groupOne.whatsNewYoga);
    await groupOne.click(groupOne.whatsNewPage);
    await groupOne.click(groupOne.whatsNewPerformance);
    await groupOne.click(groupOne.whatsNewPage);
    await groupOne.click(groupOne.whatsNewYoga);
  });

