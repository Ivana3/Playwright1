const { expect } = require('@playwright/test');
exports.Homepage = class homepage {
  constructor(page) {
    this.page = page;
    this.selectCity = page.locator("//div[@class='form-group']");
    this.Macedonia = page.getByText('Macedonia');
    this.novoSelo = page.locator("//ul/p[@data-url='https://novoselo.pulse.eco']");
    this.struga = page.locator("//ul/p[@data-url='https://struga.pulse.eco']");
    this.bitola = page.locator("//ul/p[@data-url='https://bitola.pulse.eco']");
    this.shtip = page.locator("//ul/p[@data-url='https://shtip.pulse.eco']");
    this.skopje = page.locator("//ul/p[@data-url='https://skopje.pulse.eco']");
    this.tetovo = page.locator("//ul/p[@data-url='https://tetovo.pulse.eco']");
    this.gostivar = page.locator("//ul/p[@data-url='https://gostivar.pulse.eco/']");
    this.ohrid = page.locator("//ul/p[@data-url='https://ohrid.pulse.eco']");
    this.resen = page.locator("//ul/p[@data-url='https://resen.pulse.eco/']");
    this.kumanovo = page.locator("//ul/p[@data-url='https://kumanovo.pulse.eco']");
    this.strumica = page.locator("//ul/p[@data-url='https://strumica.pulse.eco']");
    this.bodganci = page.locator("//ul/p[@data-url='https://bogdanci.pulse.eco']");
    this.kichevo = page.locator("//ul/p[@data-url='https://kichevo.pulse.eco']");
    this.viewMapButton = page.locator('#gotoCityButton');
    this.titleNovoSelo = page.getByText('Novo Selo');
    }
    async clickOnSelectCityField() {
      await this.selectCity.click();
    }
    async selectCountry() {
      await this.Macedonia.dblclick();
    }
    async selectCityNovoSelo() {
      await this.novoSelo.click();
    }
    async selectCityStruga() {
      await this.struga.click();
    }
    async selectCityBitola() {
      await this.bitola.click();
    }
    async selectCityShtip() {
      await this.shtip.click();
    }
    async selectCitySkopje() {
      await this.skopje.click();
    }
    async selectCityTetovo() {
      await this.tetovo.click();
    }
    async selectCityGostivar() {
      await this.gostivar.click();
    }
    async selectCityOhrid() {
      await this.ohrid.click();
    }
    async selectCityResen() {
      await this.resen.click();
    }
    async selectCityKumanovo() {
      await this.kumanovo.click();
    }
    async selectCityStrumica() {
      await this.strumica.click();
    }
    async selectCityBogdanci() {
      await this.bodganci.click();
    }
    async selectCityKichevo() {
      await this.kichevo.click();
    }
    async clickOnViewMapButton() {
      await this.viewMapButton.click();
    }
  }