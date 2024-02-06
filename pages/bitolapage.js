const { expect } = require('@playwright/test');
const exp = require('constants');
exports.Bitolapage = class bitolapage {
  constructor(page) {
    this.page = page;
    //this.titleBitola = page.locator("//div[@class='navbar-current-city']/span[contains(text(),'Bitola')]");
    this.about = page.locator("//div/nav/ul/li/a[contains(text(),'За проектот')]");
    this.exploreData = page.locator("//div/nav/ul/li/a[contains(text(),'Пребарај податоци')]")
    this.from = page.locator("//div/input[@name='from']");
    this.to = page.locator("//div/input[@name='to']");
    this.participate = page.locator("//div/nav/ul/li/a[contains(text(),'Учествувај')]");
    this.participateSection = page.locator("//div/section/h5[@class='wow fadeIn']");
    this.appStore = page.locator("//div/nav/ul/li/a[contains(text(),'App Store')]");
    this.playStore = page.locator("//div/nav/ul/li/a[contains(text(),'Play Store')]");
    this.register = page.locator("//div/nav/ul/li/a[contains(text(),'Регистрација')]");
    this.name = page.locator('#name');
    this.login = page.locator("//div/nav/ul/li/a[contains(text(),'Најава')]")
    this.submitButton = page.locator("//div/button[@type='submit']");
    }

    async verifyBitolaMap() {
      await expect(this.page).toHaveURL("https://bitola.pulse.eco/");
      
    }
    async clickOnAboutLink() {
      await this.about.click();
      await expect(this.page).toHaveURL("https://pulse.eco/#about");
    }
    async clickOnExploreDataLink() {
      await this.exploreData.click();
      await expect(this.page).toHaveURL("https://bitola.pulse.eco/explorer");
      await expect(this.from).toBeVisible();
      await expect(this.to).toBeVisible();
    }
    async clickOnParticipateLink() {
      await this.participate.click();
      await expect(this.page).toHaveURL("https://bitola.pulse.eco/#participate");
      await expect(this.participateSection).toBeVisible();
    }
    async clickOnAppStoreLink() {
      await this.appStore.click();
      await expect(this.page).toHaveURL("https://apps.apple.com/us/app/pulse-eco/id1325651447?ign-mpt=uo%3D4");
    }
    async clickOnPlayStoreLink() {
      await this.playStore.click();
      await expect(this.page).toHaveURL("https://play.google.com/store/apps/details?id=com.netcetera.skopjepulse&hl=en");
    }
    async clickOnRegisterLink() {
      await this.register.click();
      await expect(this.page).toHaveURL("https://bitola.pulse.eco/register");
      await expect(this.name).toBeVisible();
    }
    async clickOnLoginLink() {
      await this.login.click();
      await expect(this.page).toHaveURL("https://bitola.pulse.eco/login");
      await expect(this.submitButton).toBeVisible();
    }
  }