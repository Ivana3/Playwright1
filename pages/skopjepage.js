const { expect } = require('@playwright/test');
exports.Skopjepage = class skopjepage {
  constructor(page) {
    this.page = page;
    this.titleSkopje = page.locator("//div[@class='navbar-current-city']/span[contains(text(),'Skopje')]");
    }

    async verifySkopjeMap() {
      await expect(this.page).toHaveURL("https://skopje.pulse.eco/");
      await expect(this.titleSkopje).toBeVisible();
    }
  }