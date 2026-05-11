const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://api.hh.ru',
  },
  testDir: './tests',
  projects: [
    {
      name: 'api',
      testDir: './tests/api',
    },
    {
      name: 'ui',
      testDir: './tests/ui',
      use: {
        baseURL: 'https://hh.ru',
        ...devices['Desktop Chrome'],
        headless: false,
      },
    },
  ],
});