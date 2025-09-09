import {test,expect} from '@playwright/test';

test ('Add new Flow', async ({page}) => {
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
            await newTab.locator('a:nth-child(6) > .mantine-Indicator-root > .mantine-UnstyledButton-root').click();
            await newTab.getByRole('button', { name: 'New Flow' }).click();
            await newTab.getByRole('button', { name: 'Screen Flow is triggered by' }).click();
            await newTab.getByRole('textbox', { name: 'Display name' }).fill('Test auto');
            await newTab.getByText('Display name *API name *DescriptionObjectsThis flow will be available to select').click();
            await newTab.getByRole('textbox', { name: 'Description' }).click();
            await newTab.getByRole('textbox', { name: 'Description' }).fill('Test automation');
            await newTab.getByRole('searchbox', { name: 'Objects' }).click();
            await newTab.getByText('Test data field').click();
            await newTab.getByRole('searchbox', { name: 'Tags' }).click();
            await newTab.getByText('Payment Reconciliation', { exact: true }).click();
            await newTab.getByRole('button', { name: 'Submit' }).click();
        });
});


test ('Edit Flow', async ({page}) => {
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
        await newTab.locator('a:nth-child(6) > .mantine-Indicator-root > .mantine-UnstyledButton-root').click();
        await newTab.getByRole('link', { name: 'screen Test auto (testAuto)' }).click();
        await newTab.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
        await newTab.getByRole('textbox', { name: 'Display name' }).click();
        await newTab.getByRole('textbox', { name: 'Display name' }).fill('Automation');
        await newTab.getByRole('textbox', { name: 'Description' }).click();
        await newTab.getByRole('textbox', { name: 'Description' }).fill('Test edit flow automation');
        await newTab.getByRole('combobox').filter({ hasText: 'Test data field' }).locator('button').click();
        await newTab.getByRole('searchbox', { name: 'Objects' }).click();
        await newTab.getByRole('searchbox', { name: 'Objects' }).fill('product');
        await newTab.getByText('Product', { exact: true }).click();
        await newTab.getByRole('searchbox', { name: 'Objects' }).click();
        await newTab.locator('div:nth-child(4) > .mantine-hanglj > .mantine-Input-wrapper > .mantine-Input-input > .mantine-1n7zxp').click();
        await newTab.locator('div').filter({ hasText: /^Video$/ }).first().click();
        await newTab.getByRole('searchbox', { name: 'Tags' }).click();
        await newTab.getByRole('searchbox', { name: 'Access level' }).click();
        await newTab.getByText('Anyone can trigger').click();
        await newTab.getByRole('searchbox', { name: 'Run context' }).click();
        await newTab.getByText('Run as system, bypass all').click();
        await newTab.getByRole('button', { name: 'Submit' }).click();

    });
})
