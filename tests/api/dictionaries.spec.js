const { test, expect } = require('@playwright/test');

test('GET /dictionaries возвращает 200', async ({ request }) => {
  const response = await request.get('/dictionaries');

  expect(response.status()).toBe(200);
});

test('GET /dictionaries содержит ключ experience', async ({ request }) => {
  const response = await request.get('/dictionaries');
  const body = await response.json();

  expect(body).toHaveProperty('experience');
});

test('GET /dictionaries содержит ключ employment', async ({ request }) => {
  const response = await request.get('/dictionaries');
  const body = await response.json();

  expect(body).toHaveProperty('employment');
});

test('GET /dictionaries — experience содержит элемент с id noExperience', async ({ request }) => {
  const response = await request.get('/dictionaries');
  const body = await response.json();

  const ids = body.experience.map(e => e.id);
  expect(ids).toContain('noExperience');
});