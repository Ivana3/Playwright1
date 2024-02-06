const { expect } = require('@playwright/test');
exports.Bogdancipage = class bogdancipage {
  constructor(page) {
    this.page = page;
    this.titleBogdanci = page.locator("//div[@class='navbar-current-city']/span[contains(text(),'Bogdanci')]");
    }

    async verifyBogdanciMap() {
      await expect(this.page).toHaveURL("https://bogdanci.pulse.eco/");
      await expect(this.titleBogdanci).toBeVisible();
    }
  }