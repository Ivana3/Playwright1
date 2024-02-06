const { expect } = require('@playwright/test');
exports.Tetovopage = class tetovopage {
  constructor(page) {
    this.page = page;
    this.titleTetovo = page.locator("//div[@class='navbar-current-city']/span[contains(text(),'Tetovo')]");
    }

    async verifyTetovoMap() {
      await expect(this.page).toHaveURL("https://tetovo.pulse.eco/");
      await expect(this.titleTetovo).toBeVisible();
    }
  }