const { expect } = require('@playwright/test');
exports.Ohridpage = class ohridpage {
  constructor(page) {
    this.page = page;
    this.titleOhrid = page.locator("//div[@class='navbar-current-city']/span[contains(text(),'Ohrid')]");
    }

    async verifyOhridMap() {
      await expect(this.page).toHaveURL("https://ohrid.pulse.eco/");
      await expect(this.titleOhrid).toBeVisible();
    }
  }