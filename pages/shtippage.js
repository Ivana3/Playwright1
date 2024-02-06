const { expect } = require('@playwright/test');
exports.Shtippage = class shtippage {
  constructor(page) {
    this.page = page;
    this.titleShtip = page.locator("//div[@class='navbar-current-city']/span[contains(text(),'Shtip')]");
    }

    async verifyShtipMap() {
      await expect(this.page).toHaveURL("https://shtip.pulse.eco/");
      await expect(this.titleShtip).toBeVisible();
    }
  }