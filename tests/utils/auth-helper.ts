import { chromium, request } from '@playwright/test';
import fs from 'fs';
async function globalSetup() {
  // 1. Gọi Keycloak để lấy token
  const requestContext = await request.newContext();
  const response = await requestContext.post(
    'https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/token',
    {
      form: {
        grant_type: 'password',
        client_id: 'ncore_new_org',
        client_secret: '6149e013-e701-46ff-80f9-ae0eb2f9b381',
        username: 'new_org@gmail.com',
        password: 'Abcd1234!',
      },
    }
  );

  const result = await response.json();
  const token = result.access_token;

  // 2. Mở trình duyệt, thiết lập localStorage trước khi load ứng dụng
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('about:blank'); // tránh redirect sớm

  await page.addInitScript((token) => {
    // ⚠️ Thay đúng key Nuclent sử dụng
    localStorage.setItem('accessToken', token); // 👈 đổi key nếu khác
  }, token);

  // 3. Truy cập trực tiếp vào trang ứng dụng (sau khi token đã được set)
  await page.goto('https://new_org.nflow.dev.nuclent.com/test/testImportCsv');

  // 4. Lưu lại session
  await context.storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;