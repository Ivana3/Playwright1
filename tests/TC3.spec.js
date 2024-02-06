const { test, expect } = require('@playwright/test');
const { Open } = require('../pages/open.js')
const { Homepage } = require('../pages/homepage.js');
const { Bitolapage } = require('../pages/bitolapage.js');
const { Explorepage } = require('../pages/explorepage.js')
const { variables } = require('../variables.json');

test.only('Verify invalid date range', async ({ page }) => {
    const homepage = new Homepage(page);
    const open = new Open(page);
    const bitolapage = new Bitolapage(page);
    const explorepage = new Explorepage(page);
    const fromDate = variables.fromDate
    const toDate = variables.toDate
  
    await open.goto();
    await homepage.clickOnSelectCityField();
    await homepage.selectCountry();
    await homepage.selectCityBitola();
    await homepage.clickOnViewMapButton();
    await bitolapage.verifyBitolaMap();
    await bitolapage.clickOnExploreDataLink();
    await explorepage.enterFromData(fromDate);
    await explorepage.enterToData(toDate)
    await explorepage.clickSearchButton();
  })