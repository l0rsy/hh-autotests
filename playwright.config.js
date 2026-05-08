const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://api.hh.ru',
  },
  testDir: './tests',
});