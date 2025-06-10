import { test, expect} from '@playwright/test';
import { HomePage } from '../Pages/HomePage.js';
import { ProductPage } from '../Pages/ProductPage.js';

test.describe('Product Page Tests', ()=>{

    let homePage;
    let productPage;

    test.beforeEach(async({page})=>{
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        await homePage.goto();
        await homePage.selectProductFromHomePage();
        const isVisible = await productPage.isProductContainerVisible();
        expect(isVisible).toBe(true);
    });

    test('Product title is visible', async()=>{
        await expect(productPage.productPageTitle).toBeVisible();
    });

    test('Main product image is visible', async()=>{
        await expect(productPage.productMainImage).toBeVisible();
    });

    test('Description tab is visible on product page', async()=>{
        await expect(productPage.productDescriptionTab).toBeVisible();
    });

    test('Product price is visible on product page', async()=>{
        await expect(productPage.productPrice).toBeVisible();
    });

    test('Product options are visible on product page', async()=>{
        await expect(productPage.productOptions).toBeVisible();
    });

    test('Buy button is visible on product page', async()=>{
        await expect(productPage.productBuyButton).toBeVisible();
    });
});