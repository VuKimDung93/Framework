import { test, expect } from '@playwright/test';

test.use({ storageState: 'storageState.json' });


test('Truy cập App View sau khi đăng nhập bằng token', async ({ page }) => {
    await page.goto('https://new_org.nflow.dev.nuclent.com/test/testImportCsv');
    await expect(page).toHaveURL('https://new_org.nflow.dev.nuclent.com/test/testImportCsv');
    //await expect(page.getByRole('button', { name: 'Setup' })).toBeVisible();
  });

    test('Add new application', async ({ page }) => {
        await page.goto('https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/auth?client_id=ncore_new_org&response_type=code&state=ux1SWwrTvj1vrXHE35ZOc&redirect_uri=https%3A%2F%2Fnew_org.nflow.dev.nuclent.com%2Fauth%2Fsso%2Fcallback%3Fpath%3D%252F&scope=openid');
        await page.fill('input[id="username"]', 'new_org@gmail.com');
        await page.fill('input[id="password"]', 'Abcd1234!');
        await page.click('input[type="submit"]');
        //const context = page.context();
        //await expect(page).toHaveURL('https://new_org.nflow.dev.nuclent.com/test/testImportCsv');
        await test.step('Open popup', async () => {
            //Mở ra 1 tab mới sau khi click Setup
            const context = page.context();
            const [newTab]= await Promise.all([
               context.waitForEvent('page'),
                page.click('text=Setup'),
            ]);
            await newTab.waitForLoadState();
            await expect(newTab).toHaveURL('https://new_org.nflow.dev.nuclent.com/setup/app');
            await newTab.locator('//span [text()="New Application"]').click()
            await newTab.getByRole('textbox', { name: 'Display Name' }).fill('App for user');
            await newTab.getByRole('textbox', { name: 'Display Name' }).press('Tab');
            await newTab.getByRole('textbox', { name: 'Primary Color' }).click();
            await newTab.locator('.mantine-ColorInput-slider > div:nth-child(2)').click();
            await newTab.getByRole('button', { name: 'Submit' }).click();
            await expect (newTab).toHaveURL('https://new_org.nflow.dev.nuclent.com/setup/app/appForUser/details');
            

        });
    });

    test('Edit application', async ({ page }) => {
        await page.goto('https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/auth?client_id=ncore_new_org&response_type=code&state=ux1SWwrTvj1vrXHE35ZOc&redirect_uri=https%3A%2F%2Fnew_org.nflow.dev.nuclent.com%2Fauth%2Fsso%2Fcallback%3Fpath%3D%252F&scope=openid');
        await page.fill('input[id="username"]', 'new_org@gmail.com');
        await page.fill('input[id="password"]', 'Abcd1234!');
        await page.click('input[type="submit"]');
        await test.step('Open popup', async () => {
            //Mở ra 1 tab mới sau khi click Setup
            const context = page.context();
            const [newTab]= await Promise.all([
               context.waitForEvent('page'),
                page.click('text=Setup'),
            ]);
            await newTab.waitForLoadState();
            await expect(newTab).toHaveURL('https://new_org.nflow.dev.nuclent.com/setup/app');
            await newTab.getByText('Hhoang test(hoang_test)').click();
            await newTab.getByRole('button', { name: 'Edit' }).click();
            //await newTab.locator('div').filter({ hasText: /^Guest$/ }).nth(2).click();
            await newTab.getByText('AdminGuest').click();
            await newTab.getByRole('searchbox', { name: 'Profiles' }).fill('merchant');
            await newTab.getByText('Merchant', { exact: true }).click();
             await newTab.getByRole('textbox', { name: 'Description' }).fill('App for user ');
             await newTab.locator('#createAppForm').getByText('banca').click();
             await newTab.getByText('Video call',{exact:true}).click();
             await newTab.getByRole('searchbox', { name: 'Tags' }).click();
             await newTab.getByRole('textbox', { name: 'Primary Color' }).click();
            await newTab.getByRole('button', { name: 'Submit' }).click();
            //await expect (newTab).toHaveURL('https://new_org.nflow.dev.nuclent.com/setup/app');
        });
    })
    
    test ('Retrived Application', async ({ page }) => {
        await page.goto('https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/auth?client_id=ncore_new_org&response_type=code&state=ux1SWwrTvj1vrXHE35ZOc&redirect_uri=https%3A%2F%2Fnew_org.nflow.dev.nuclent.com%2Fauth%2Fsso%2Fcallback%3Fpath%3D%252F&scope=openid');
        await page.fill('input[id="username"]', 'new_org@gmail.com');
        await page.fill('input[id="password"]', 'Abcd1234!');
        await page.click('input[type="submit"]');
        await test.step('Open popup', async () => {
            //Mở ra 1 tab mới sau khi click Setup
            const context = page.context();
            const [newTab]= await Promise.all([
               context.waitForEvent('page'),
                page.click('text=Setup'),
            ]);
            await newTab.waitForLoadState();
            await expect(newTab).toHaveURL('https://new_org.nflow.dev.nuclent.com/setup/app');
            await newTab.getByRole('row', { name: 'T test12390 (test12390) 11:27' }).getByRole('button').click();
            await newTab.getByRole('menuitem', { name: 'Archive' }).click();
            await newTab.getByRole('button', { name: 'Confirm' }).click();
    })
});
test ('Add profiles for App', async ({ page }) => {
    await page.goto('https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/auth?client_id=ncore_new_org&response_type=code&state=ux1SWwrTvj1vrXHE35ZOc&redirect_uri=https%3A%2F%2Fnew_org.nflow.dev.nuclent.com%2Fauth%2Fsso%2Fcallback%3Fpath%3D%252F&scope=openid');
        await page.fill('input[id="username"]', 'new_org@gmail.com');
        await page.fill('input[id="password"]', 'Abcd1234!');
        await page.click('input[type="submit"]');
        await test.step('Open popup', async () => {
            //Mở ra 1 tab mới sau khi click Setup
            const context = page.context();
            const [newTab]= await Promise.all([
               context.waitForEvent('page'),
                page.click('text=Setup'),
            ]);
        await newTab.goto('https://new_org.nflow.dev.nuclent.com/setup/app/test/profiles');
        await newTab.getByRole('button', { name: 'merchant' }).click();
        await newTab.locator('.mantine-8t5g00 > button').first().click();
        await newTab.getByRole('button', { name: 'Save' }).click();
        })
})