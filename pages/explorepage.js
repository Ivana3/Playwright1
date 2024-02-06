const { expect } = require('@playwright/test');
const exp = require('constants');
exports.Explorepage = class explorepage {
  constructor(page) {
    this.page = page;
    this.from = page.locator('#from');
    this.to = page.locator('#to');
    this.searchButton = page.locator('#submitData');
    this.dateFromError = page.locator('#dateFromError');
    this.dateToError = page.locator('#dateToError');
    this.invalidDataText = page.locator("//div[@style='text-align:center; padding-top:20px;']/span[contains(text(),'Invalid date selection')]")
    }

    async enterFromData(fromDate) {
      await this.from.clear();
      await this.from.fill(fromDate);
    }
    async enterToData(toDate) {
      await this.to.clear();
      await this.to.fill(toDate);
    }
    async clickSearchButton() {
      await this.searchButton.click();
      await expect(this.invalidDataText).toBeVisible();
    }
  }