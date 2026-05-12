# hh-autotests

Test automation project for hh.ru Public API and UI using Playwright + JavaScript.

## Stack

- [Playwright](https://playwright.dev/) — test framework
- JavaScript (CommonJS)
- Node.js >= 18

## Installation

```bash
npm install
npx playwright install
```

## Running tests

Run all tests:
```bash
npx playwright test
```

Run only API tests:
```bash
npx playwright test --project=api
```

Run only UI tests:
```bash
npx playwright test --project=ui
```

## Test coverage

**API (12 tests)** — endpoints: `/areas`, `/dictionaries`, `/professional_roles`, `/metro`
- Status code validation
- Response body structure
- Specific field values
- Negative cases (404)

**UI (6 tests)** — hh.ru search page
- Page load
- Search by keyword
- No results message
- Vacancy card opening
- Empty search handling