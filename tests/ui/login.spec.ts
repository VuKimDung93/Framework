import { test, expect } from '@playwright/test';

test('UI Login thành công', async ({ page }) => {
  await page.goto('https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/auth?client_id=ncore_new_org&response_type=code&state=ux1SWwrTvj1vrXHE35ZOc&redirect_uri=https%3A%2F%2Fnew_org.nflow.dev.nuclent.com%2Fauth%2Fsso%2Fcallback%3Fpath%3D%252F&scope=openid');
  await page.fill('input[id="username"]', 'new_org@gmail.com');
  await page.fill('input[id="password"]', 'Abcd1234!');
  await page.click('input[type="submit"]');
  await expect(page).toHaveURL('https://new_org.nflow.dev.nuclent.com/');
});
