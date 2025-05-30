import { test, expect} from '@playwright/test';
import { HomePage } from '../Pages/HomePage.js';

test.describe('Home Page Tests', ()=>{
    let homePage;

    test.beforeEach(async({page})=>{
        homePage = new HomePage(page);
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
});