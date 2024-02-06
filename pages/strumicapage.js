const { expect } = require('@playwright/test');
exports.Strumicapage = class strumicapage {
  constructor(page) {
    this.page = page;
    this.titleStrumica = page.locator("//div[@class='navbar-current-city']/span[contains(text(),'Strumica')]")
    }

    async verifyStrumicaMap() {
      await expect(this.page).toHaveURL("https://strumica.pulse.eco/");
      await expect(this.titleStrumica).toBeVisible();
    }
  }