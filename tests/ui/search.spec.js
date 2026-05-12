const { test, expect } = require('@playwright/test');
const SearchPage = require('../../pages/SearchPage');

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