import { test, expect } from '/Users/vudung/Documents/Framework/tests/fixtures/custom-fixtures.ts';

test('Lấy danh sách users', async ({ request, token }) => {
  const response = await request.post('https://new_org.nflow.dev.nuclent.com/v1/users/search', {
    headers: { Authorization: `Bearer ${token}` }
  });
   console.log('Response status:', response.status());
   console.log('Response body:', await response.text());
  console.log('Token', token)
  expect(response.status()).toBe(200);
});
