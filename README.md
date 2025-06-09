Automated tests verifying that the home page of the website www.lit.bg loads properly following an issue that caused an error, and elements on the home page (banners, products) were not visible.
The tests are created on JavaScript with Playwright and GitHub Actions and Jenkins for CI integration. The YAML file is configured to run the tests every day at 08:00 UTC.
The test results are exported in HTML via Playwright in the Jenkins artifacts. 
