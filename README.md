# Playwright Project Readme

This README provides a guide to setting up and running the Playwright tests in this demo project.

## Introduction

This demo project uses Playwright, a Node.js library, to automate web browser testing. Playwright allows for cross-browser testing (Chromium, Firefox, and WebKit) with a single API.

## Prerequisites

Before you begin, ensure you have the following installed:

**Node.js:** (Recommended version: LTS, check with `node -v`) -  Download from [nodejs.org](https://nodejs.org/)
**npm or yarn:** (npm is included with Node.js, yarn can be installed globally with `npm install -g yarn`)

## Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/VinayagaChandru/learn-playwright.git](https://github.com/VinayagaChandru/learn-playwright.git)
   cd YOUR_REPOSITORY
   ````

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Install Playwright browsers:**

    ```bash
    npx playwright install # or yarn playwright install
    ```

    This command installs the browsers that Playwright supports.  You can also install specific browsers if needed (e.g., `npx playwright install chromium`).

## Running Tests

Playwright provides several ways to run tests:

  * **Run all tests:**

    ```bash
    npx playwright test # or yarn playwright test
    ```

  * **Run tests in a specific file:**

    ```bash
    npx playwright test <filename>.spec.ts # or yarn playwright test <filename>.spec.ts
    ```

  * **Run tests with a specific grep filter (to run tests containing a particular string in their title):**

    ```bash
    npx playwright test --grep "sanity" # or yarn playwright test --grep "sanity"
    ```

  * **Run tests in headed mode (to see the browser actions):**

    ```bash
    npx playwright test --headed # or yarn playwright test --headed
    ```

  * **Run tests in debug mode:**

    ```bash
    npx playwright test --debug # or yarn playwright test --debug
    ```

  * **Run tests with specific reporters:**

    ```bash
    npx playwright test --reporter=html,list # or yarn playwright test --reporter=html,list
    ```

See the Playwright documentation for more options: [https://playwright.dev/docs/test-cli](https://playwright.dev/docs/test-cli)

## Test Structure

Tests are located in the `tests` directory.  Test files should have the `.spec.ts` (or `.spec.js`) extension.  A typical test file looks like this:

```typescript
import { test, expect } from '@playwright/test';

test('should navigate to the home page', async ({ page }) => {
  await page.goto('[https://example.com](https://example.com)');
  await expect(page).toHaveTitle('Example Domain');
});

// More tests can be added here...
```

## Reporting

Playwright generates HTML reports by default.  You can find the report in the `playwright-report` directory after running the tests.  You can also configure other reporters (e.g., `list`, `junit`) in the `playwright.config.ts` file.

## Configuration

The `playwright.config.ts` file contains the configuration for Playwright.  Here you can specify:

  * **Test directory:**  Where your tests are located.
  * **Reporters:** Which reporters to use.
  * **Browsers:** Which browsers to test on.
  * **Headless mode:** Whether to run tests in headless mode.
  * **Timeout:** Global timeout for tests.
  * **And much more...**

See the Playwright configuration documentation for more details: [https://playwright.dev/docs/test-configuration](https://playwright.dev/docs/test-configuration)
