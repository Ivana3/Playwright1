const { expect } = require('@playwright/test');
exports.Novoselopage = class novoselopage {
  constructor(page) {
    this.page = page;
    this.titleNovoSelo = page.getByText('Novo Selo');
    }

    async verifyNovoseloMap() {
      await expect(this.page).toHaveURL("https://novoselo.pulse.eco/");
      await expect(this.titleNovoSelo).toBeVisible();
    }
  }