const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', 
  reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],
  timeout: 30000, 
});