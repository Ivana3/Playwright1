const { expect } = require('@playwright/test');
exports.Open = class open {
  constructor(page) {
    this.page = page;
    }
    async goto() {
        await this.page.goto('https://pulse.eco/');
        await expect(this.page).toHaveTitle('pulse.eco - Co-create the future of your city');
    }
    
  
  }