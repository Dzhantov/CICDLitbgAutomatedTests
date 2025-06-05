export class ProductPage {

    constructor(productPage){
        this.productPage = productPage;
        this.productPageTitle = productPage.getByRole('heading', { level: 1 });
        this.productContainer = productPage.locator('.container')
    }

    async isProductTitleVisible(){
        return await this.productPageTitle.isVisible();
    }

    async isProductContainerVisible() {
        return await this.productContainer.isVisible();
    }
    
}