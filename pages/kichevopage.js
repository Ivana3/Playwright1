const { expect } = require('@playwright/test');
exports.Kichevopage = class kichevopage {
  constructor(page) {
    this.page = page;
    this.titleKichevo = page.locator("//div[@class='navbar-current-city']/span[contains(text(),'Kichevo')]")
    }

    async verifyKichevoMap() {
      await expect(this.page).toHaveURL("https://kichevo.pulse.eco/");
      await expect(this.titleKichevo).toBeVisible();
    }
  }