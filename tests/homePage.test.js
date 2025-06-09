import { test, expect} from '@playwright/test';
import { HomePage } from '../Pages/HomePage.js';
import { ProductPage } from '../Pages/ProductPage.js';


test.describe('Home Page Tests', ()=>{
    let homePage;
    let productPage;

    test.beforeEach(async({page})=>{
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        await homePage.goto();
    });
    
    test('Title is visible', async({page})=>{

        await expect(page).toHaveTitle('Lit.bg - Онлайн магазин за дрехи');

    });
        
    test('Categories banners are visible', async()=>{

        const isVisible = await homePage.isBannerSectionVisible();
        expect(isVisible).toBe(true);

    });

    test('Atleast one product is visible on home page', async()=>{
            const productIsVisible = await homePage.isProductBoxVisible();
            expect(productIsVisible).toBe(true);
    });

    test('Product can be selected from the home page', async()=>{
        await homePage.selectProductFromHomePage();
        const isVisible = await productPage.isProductContainerVisible();
        expect(isVisible).toBe(true);

    await expect(productPage.productPageTitle).toBeVisible();
    });

    test('Main menu is visible', async()=>{
        await expect(homePage.mainMenu).toBeVisible();
    });

    test('Cart is visible on the home page', async()=>{
        await expect(homePage.cartOnHomePage).toBeVisible();
    });

    test('Header cart group icons are visible', async()=>{
        await expect(homePage.headerCartGroupIcons).toBeVisible();
    });
});