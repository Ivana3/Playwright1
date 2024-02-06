const { expect } = require('@playwright/test');
exports.Resenpage = class resenpage {
  constructor(page) {
    this.page = page;
    this.titleResen = page.getByText('Resen');
    }

    async verifyResenMap() {
      await expect(this.page).toHaveURL("https://resen.pulse.eco/");
      await expect(this.titleResen).toBeVisible();
    }
  }