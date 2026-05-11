const { test, expect } = require('@playwright/test');

test('GET /metro/1 возвращает 200 и содержит lines', async ({ request }) => {
  const response = await request.get('/metro/1');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty('lines');
  expect(body.lines.length).toBeGreaterThan(0);
});

test('GET /metro/1 — каждая линия содержит id, name, stations', async ({ request }) => {
  const response = await request.get('/metro/1');
  const body = await response.json();

  for (const line of body.lines) {
    expect(line).toHaveProperty('id');
    expect(line).toHaveProperty('name');
    expect(line).toHaveProperty('stations');
    expect(line.stations.length).toBeGreaterThan(0);
  }
});