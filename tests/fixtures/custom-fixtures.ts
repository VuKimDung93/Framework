import { test as base, expect } from '@playwright/test';

type MyFixtures = {
  token: string;
};

export const test = base.extend<MyFixtures>({
  token: async ({ request }, use) => {
    
    const res = await request.post('https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/token', {
      //data: {clientId:'ncore_new_org',clientSecret : '6149e013-e701-46ff-80f9-ae0eb2f9b381', username: 'new_org@gmail.com', password: 'Abcd1234!' },
      form: {
        grant_type: 'password',
        client_id: 'ncore_new_org',
        client_secret: '6149e013-e701-46ff-80f9-ae0eb2f9b381',
        username: 'new_org@gmail.com',
        password: 'Abcd1234!',
      },
    });
    await expect(res.status()).toBe(200);
    const data = await res.json();
    await use(data.access_token);
    //await context.storageState({ path: 'storageState.json' });
  },
});

export { expect };
//Sử dụng 
/*import { test, expect } from '../fixtures/custom-fixtures';

test('use shared token', async ({ request, token }) => {
  const res = await request.get('/secure', {
    headers: { Authorization: `Bearer ${token}` },
  });
  expect(res.ok()).toBeTruthy();
});
 */