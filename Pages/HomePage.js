export class HomePage {

    constructor(homePage) {
        this.homePage = homePage;
        this.homePageTitle = homePage.getByTestId('home-page-title');
        this.bannerSection = homePage.locator('.grid-row.grid-row-top-2');
        this.productBox = homePage.locator('.product-thumb').first();
        this.productPageTitle = homePage.locator('.product-page-title');
        
    };

    async goto() {
        await this.homePage.goto('https://lit.bg/');
        // Wait for the page to load completely
        await this.bannerSection.waitFor({ state: 'visible', timeout: 10000 });
    };

    async isBannerSectionVisible(){
        return await this.bannerSection.isVisible();
    };

    async isProductBoxVisible() {
        return await this.productBox.isVisible();
    };

    async selectProductFromHomePage(){
        await this.productBox.click();
    };
}