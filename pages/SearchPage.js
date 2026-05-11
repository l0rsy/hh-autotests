class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[data-qa="search-input"]');
    this.searchButton = page.locator('button[data-qa="search-button"]');
    this.vacancyItems = page.locator('[data-qa="vacancy-serp__vacancy"]');
    this.noResultsMessage = page.locator('[data-qa="vacancies-not-found-title"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async search(query) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }
}

module.exports = SearchPage;