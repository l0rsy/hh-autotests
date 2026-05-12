class VacancyPage {
  constructor(page) {
    this.page = page;
    this.vacancyTitle = page.locator('[data-qa="vacancy-title"]');
    this.employerName = page.locator('[data-qa="vacancy-company-name"]');
  }
}

module.exports = VacancyPage;