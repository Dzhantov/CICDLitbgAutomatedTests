import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', 
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],
  timeout: 30000, 
});