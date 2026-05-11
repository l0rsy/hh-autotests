const { test, expect } = require('@playwright/test');

test('GET /professional_roles возвращает 200 и содержит categories', async ({ request }) => {
  const response = await request.get('/professional_roles');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('categories');
});

test('GET /professional_roles — каждая категория содержит id, name, roles', async ({ request }) => {
  const response = await request.get('/professional_roles');
  const body = await response.json();

  for (const category of body.categories) {
    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('name');
    expect(category).toHaveProperty('roles');
  }
});