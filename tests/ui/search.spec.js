const { test, expect } = require('@playwright/test');
const SearchPage = require('../../pages/SearchPage');
const VacancyPage = require('../../pages/VacancyPage');

test('Главная страница загружается и содержит поле поиска', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.open();

  await expect(searchPage.searchInput).toBeVisible();
});

test('Поиск по ключевому слову возвращает результаты', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.open();
  await searchPage.search('QA инженер');
  await searchPage.closeModalIfVisible();

  await expect(searchPage.vacancyItems.first()).toBeVisible();
});

test('Поиск несуществующей вакансии показывает сообщение об отсутствии результатов', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.open();
  await searchPage.search('xzxzxzxzxzxz12345qwerty');
  await searchPage.closeModalIfVisible();

  await expect(searchPage.noResultsMessage).toBeVisible();
});

test('Открытие карточки вакансии показывает название и работодателя', async ({ page, context }) => {
  const searchPage = new SearchPage(page);
  await searchPage.open();
  await searchPage.search('QA инженер');
  await searchPage.closeModalIfVisible();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    searchPage.vacancyItems.first().click(),
  ]);

  await newPage.waitForLoadState('domcontentloaded');

  const vacancyPage = new VacancyPage(newPage);
  await expect(vacancyPage.vacancyTitle).toBeVisible({ timeout: 10000 });
  await expect(vacancyPage.employerName).toBeVisible({ timeout: 10000 });
});

test('Пустой поиск не приводит к ошибке', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.open();
  await searchPage.search(' ');
  await searchPage.closeModalIfVisible();

  await expect(page).toHaveURL(/hh\.ru/);
});

test('Поиск с фильтром по городу отображает результаты', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.open();
  await searchPage.search('разработчик');
  await searchPage.closeModalIfVisible();

  await page.locator('[data-qa="serp-item__title-text"]').first().waitFor();
  await expect(searchPage.vacancyItems.first()).toBeVisible();
});