import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://api.hh.ru',
  },
  testDir: './tests',
});