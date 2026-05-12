class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[data-qa="search-input"]');
    this.searchButton = page.locator('button[data-qa="search-button"]');
    this.vacancyItems = page.locator('[data-qa="vacancy-serp__vacancy"]');
    this.noResultsMessage = page.locator('[data-qa="title"]', { hasText: 'ничего не найдено' });
    this.closeModalButton = page.locator('[aria-label="Close modal"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async search(query) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async closeModalIfVisible() {
    if (await this.closeModalButton.isVisible()) {
      await this.closeModalButton.click();
    }
  }
}

module.exports = SearchPage;