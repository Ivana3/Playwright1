const { expect } = require('@playwright/test');
exports.Strugapage = class strugapage {
  constructor(page) {
    this.page = page;
    this.titleStruga = page.locator("//div[@class='navbar-current-city']/span");
    }

    async verifyStrugaMap() {
      await expect(this.page).toHaveURL("https://struga.pulse.eco/");
      await expect(this.titleStruga).toBeVisible();
    }
  }