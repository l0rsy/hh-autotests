const { test, expect } = require('@playwright/test');

test('GET /areas возвращает 200 и непустой массив', async ({ request }) => {
  const response = await request.get('/areas');
  
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);
});

test('GET /areas — каждый элемент содержит id, name, areas', async ({ request }) => {
  const response = await request.get('/areas');
  const body = await response.json();

  for (const area of body) {
    expect(area).toHaveProperty('id');
    expect(area).toHaveProperty('name');
    expect(area).toHaveProperty('areas');
  }
});

test('GET /areas/1 возвращает Москву', async ({ request }) => {
  const response = await request.get('/areas/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.name).toBe('Москва');
});

test('GET /areas/99999 возвращает 404', async ({ request }) => {
  const response = await request.get('/areas/99999');
  
  expect(response.status()).toBe(404);
});