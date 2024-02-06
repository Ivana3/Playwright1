const { expect } = require('@playwright/test');
exports.Gostivarpage = class gostivarpage {
  constructor(page) {
    this.page = page;
    this.titleGostivar = page.locator("//div[@class='navbar-current-city']/span");
    }

    async verifyGostivarMap() {
      await expect(this.page).toHaveURL("https://gostivar.pulse.eco/");
      await expect(this.titleGostivar).toBeVisible();
    }
  }