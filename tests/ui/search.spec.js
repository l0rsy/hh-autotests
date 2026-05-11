const { test, expect } = require('@playwright/test');
const SearchPage = require('../../pages/SearchPage');

test('Главная страница загружается и содержит поле поиска', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.open();

  await expect(searchPage.searchInput).toBeVisible();
});