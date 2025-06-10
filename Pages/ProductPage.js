export class ProductPage {

    constructor(productPage){
        this.productPage = productPage;
        this.productPageTitle = productPage.getByRole('heading', { level: 1 });
        this.productContainer = productPage.locator('.container')
        this.productMainImage = productPage.locator('.swiper.main-image.swiper-has-pages');
        this.productDescriptionTab = productPage.getByText('Описание');
        this.productPrice = productPage.locator('.product-price');
        this.productOptions = productPage.locator('.product-options');
        this.productBuyButton = productPage.locator('#button-cart');
    }

    async isProductTitleVisible(){
        return await this.productPageTitle.isVisible();
    }

    async isProductContainerVisible() {
        return await this.productContainer.isVisible();
    }
    
}