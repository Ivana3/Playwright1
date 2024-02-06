const { test, expect } = require('@playwright/test');
const { Open } = require('../pages/open.js')
const { Homepage } = require('../pages/homepage.js');
const { Bitolapage } = require('../pages/bitolapage.js')

test('Verify Navigation bar links working properly-About', async ({ page }) => {
    const homepage = new Homepage(page);
    const open = new Open(page);
    const bitolapage = new Bitolapage(page);
  
    await open.goto();
    await homepage.clickOnSelectCityField();
    await homepage.selectCountry();
    await homepage.selectCityBitola();
    await homepage.clickOnViewMapButton();
    await bitolapage.verifyBitolaMap();
    await bitolapage.clickOnAboutLink();
  })

  test('Verify Navigation bar links working properly-ExploreData', async ({ page }) => {
    const homepage = new Homepage(page);
    const open = new Open(page);
    const bitolapage = new Bitolapage(page);
  
    await open.goto();
    await homepage.clickOnSelectCityField();
    await homepage.selectCountry();
    await homepage.selectCityBitola();
    await homepage.clickOnViewMapButton();
    await bitolapage.verifyBitolaMap();
    await bitolapage.clickOnExploreDataLink();
  })

  test('Verify Navigation bar links working properly-Participate', async ({ page }) => {
    const homepage = new Homepage(page);
    const open = new Open(page);
    const bitolapage = new Bitolapage(page);
  
    await open.goto();
    await homepage.clickOnSelectCityField();
    await homepage.selectCountry();
    await homepage.selectCityBitola();
    await homepage.clickOnViewMapButton();
    await bitolapage.verifyBitolaMap();
    await bitolapage.clickOnParticipateLink();
  })

  test('Verify Navigation bar links working properly-AppStore', async ({ page }) => {
    const homepage = new Homepage(page);
    const open = new Open(page);
    const bitolapage = new Bitolapage(page);
  
    await open.goto();
    await homepage.clickOnSelectCityField();
    await homepage.selectCountry();
    await homepage.selectCityBitola();
    await homepage.clickOnViewMapButton();
    await bitolapage.verifyBitolaMap();
    await bitolapage.clickOnAppStoreLink();
  })

  test('Verify Navigation bar links working properly-PlayStore', async ({ page }) => {
    const homepage = new Homepage(page);
    const open = new Open(page);
    const bitolapage = new Bitolapage(page);
  
    await open.goto();
    await homepage.clickOnSelectCityField();
    await homepage.selectCountry();
    await homepage.selectCityBitola();
    await homepage.clickOnViewMapButton();
    await bitolapage.verifyBitolaMap();
    await bitolapage.clickOnPlayStoreLink();
  })

  test('Verify Navigation bar links working properly-Register', async ({ page }) => {
    const homepage = new Homepage(page);
    const open = new Open(page);
    const bitolapage = new Bitolapage(page);
  
    await open.goto();
    await homepage.clickOnSelectCityField();
    await homepage.selectCountry();
    await homepage.selectCityBitola();
    await homepage.clickOnViewMapButton();
    await bitolapage.verifyBitolaMap();
    await bitolapage.clickOnRegisterLink();
  })

  test('Verify Navigation bar links working properly-Login', async ({ page }) => {
    const homepage = new Homepage(page);
    const open = new Open(page);
    const bitolapage = new Bitolapage(page);
  
    await open.goto();
    await homepage.clickOnSelectCityField();
    await homepage.selectCountry();
    await homepage.selectCityBitola();
    await homepage.clickOnViewMapButton();
    await bitolapage.verifyBitolaMap();
    await bitolapage.clickOnLoginLink();
  })