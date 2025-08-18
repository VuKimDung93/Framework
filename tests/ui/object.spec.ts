import {test,expect} from '@playwright/test';

test ('Add new object', async ({page}) => {
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
            await newTab.locator('a:nth-child(2) > .mantine-Indicator-root > .mantine-UnstyledButton-root').click();
            await newTab.getByRole('button', { name: 'New Object' }).click();
            await newTab.getByRole('textbox', { name: 'Display name' }).fill('object test1');
            await newTab.getByRole('textbox', { name: 'API name' }).click();
            await newTab.getByRole('searchbox', { name: 'Organization Wide Defaults' }).click();
            await newTab.getByText('Public Read and Write').click();
            await newTab.getByRole('textbox', { name: 'Description' }).click();
            await newTab.getByRole('textbox', { name: 'Description' }).fill('Object for test automation');
            await newTab.getByRole('searchbox', { name: 'Tags' }).click();
            await newTab.getByText('Payment Reconciliation', { exact: true }).click();
            await newTab.getByRole('searchbox', { name: 'Tags' }).click();
            await newTab.getByRole('button', { name: 'Next' }).click();
        });
});

test ('Add fields', async ({page}) => {
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
            await newTab.locator('a:nth-child(2) > .mantine-Indicator-root > .mantine-UnstyledButton-root').click();
            await newTab.getByText('object test1(objectTest1)').click();
            await newTab.getByRole('button', { name: 'New Field' }).click();
            await newTab.getByRole('button', { name: 'Pick List Allows users to' }).click();
            await newTab.getByRole('textbox', { name: 'Display Name' }).click();
            await newTab.getByRole('textbox', { name: 'Display Name' }).fill('picklist');
            await newTab.getByRole('textbox', { name: 'Name', exact: true }).click();
            await newTab.getByRole('searchbox', { name: 'Pick List' }).click();
            await newTab.getByRole('option', { name: 'Checkbox' }).click();
            await newTab.locator('label').filter({ hasText: 'Is Required' }).locator('div').nth(2).click();
            await newTab.getByRole('button', { name: 'Next' }).click();
            await newTab.getByRole('button', { name: 'Next' }).click();
            //await expect(newTab.getByText('Number2',{exact:true})).toBeVisible();
});
})

test ('Deactive field', async ({page}) => {
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
        await newTab.locator('a:nth-child(2) > .mantine-Indicator-root > .mantine-UnstyledButton-root').click();
        await newTab.getByText('object test1(objectTest1)').click();
        await newTab.getByRole('row', { name: 'Number2 number2 Numeric' }).locator('label div').nth(2).click();
    });  
})

test ('Edit Object', async ({page}) => {
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
        await newTab.locator('a:nth-child(2) > .mantine-Indicator-root > .mantine-UnstyledButton-root').click();
        await newTab.getByText('object test1(objectTest1)').click();
        await newTab.getByText('Details').click();
        await newTab.getByRole('button', { name: 'Edit' }).click();
        await newTab.getByRole('textbox', { name: 'Display Name' }).fill('object test edit');
        await newTab.getByRole('textbox', { name: 'Record Name' }).fill('object test 2');
        await newTab.getByRole('textbox', { name: 'Description' }).fill('Object for test automation edit');
        await newTab.getByText('Payment Reconciliation').click();
        await newTab.getByText('Video call', { exact: true }).click();
        await newTab.getByRole('searchbox', { name: 'Tags' }).click();
        await newTab.getByRole('button', { name: 'Next' }).click();

    });
})
