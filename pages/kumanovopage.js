const { expect } = require('@playwright/test');
exports.Kumanovopage = class kumanovopage {
  constructor(page) {
    this.page = page;
    this.titleKumanovo = page.locator("//div[@class='navbar-current-city']/span");
    }

    async verifyKumanovoMap() {
      await expect(this.page).toHaveURL("https://kumanovo.pulse.eco/");
      await expect(this.titleKumanovo).toBeVisible();
    }
  }