const { test, expect } = require('@playwright/test');
const { Homepage } = require('../pages/homepage.js');
const { Open } = require('../pages/open.js');
const { Novoselopage } = require('../pages/novoselopage.js');
const { Strugapage } = require('../pages/strugapage.js');
const { Bitolapage } = require('../pages/bitolapage.js');
const { Shtippage } = require('../pages/shtippage.js');
const { Skopjepage } = require('../pages/skopjepage.js');
const { Tetovopage } = require('../pages/tetovopage.js');
const { Gostivarpage } = require('../pages/gostivarpage.js');
const { Ohridpage } = require('../pages/ohridpage.js');
const { Resenpage } = require('../pages/resenpage.js');
const { Kumanovopage } = require('../pages/kumanovopage.js');
const { Strumicapage } = require('../pages/strumicapage.js');
const { Bogdancipage } = require('../pages/bodgancipage.js');
const { Kichevopage } = require('../pages/kichevopage.js')

test('Verify the navigation to the city map-Novo selo', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const novoselopage = new Novoselopage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityNovoSelo();
  await homepage.clickOnViewMapButton();
  await novoselopage.verifyNovoseloMap();
})

test('Verify the navigation to the city map-Struga', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const strugapage = new Strugapage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityStruga();
  await homepage.clickOnViewMapButton();
  await strugapage.verifyStrugaMap();
})

test('Verify the navigation to the city map-Bitola', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const bitolapage = new Bitolapage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityBitola();
  await homepage.clickOnViewMapButton();
  await bitolapage.verifyBitolaMap();
})

test('Verify the navigation to the city map-Shtip', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const shtippage = new Shtippage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityShtip();
  await homepage.clickOnViewMapButton();
  await shtippage.verifyShtipMap();
})

test('Verify the navigation to the city map-Skopje', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const skopjepage = new Skopjepage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCitySkopje();
  await homepage.clickOnViewMapButton();
  await skopjepage.verifySkopjeMap();
})

test('Verify the navigation to the city map-Tetovo', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const tetovopage = new Tetovopage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityTetovo();
  await homepage.clickOnViewMapButton();
  await tetovopage.verifyTetovoMap();
})

test('Verify the navigation to the city map-Gostivar', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const gostivarpage = new Gostivarpage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityGostivar();
  await homepage.clickOnViewMapButton();
  await gostivarpage.verifyGostivarMap();
})

test('Verify the navigation to the city map-Ohrid', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const ohridpage = new Ohridpage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityOhrid();
  await homepage.clickOnViewMapButton();
  await ohridpage.verifyOhridMap();
})

test('Verify the navigation to the city map-Resen', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const resenpage = new Resenpage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityResen();
  await homepage.clickOnViewMapButton();
  await resenpage.verifyResenMap();
})

test('Verify the navigation to the city map-Kumanovo', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const kumanovopage = new Kumanovopage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityKumanovo();
  await homepage.clickOnViewMapButton();
  await kumanovopage.verifyKumanovoMap();
})

test('Verify the navigation to the city map-Strumica', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const strumicapage = new Strumicapage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityStrumica();
  await homepage.clickOnViewMapButton();
  await strumicapage.verifyStrumicaMap();
})

test('Verify the navigation to the city map-Bogdanci', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const bogdancipage = new Bogdancipage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityBogdanci();
  await homepage.clickOnViewMapButton();
  await bogdancipage.verifyBogdanciMap();
})

test('Verify the navigation to the city map-Kichevo', async ({ page }) => {
  const homepage = new Homepage(page);
  const open = new Open(page);
  const kichevopage = new Kichevopage(page);

  await open.goto();
  await homepage.clickOnSelectCityField();
  await homepage.selectCountry();
  await homepage.selectCityKichevo();
  await homepage.clickOnViewMapButton();
  await kichevopage.verifyKichevoMap();
})