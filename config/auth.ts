import { APIRequestContext } from '@playwright/test';
import fs from 'fs';

export async function getToken(request: APIRequestContext): Promise<string> {
  const res = await request.post('https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/token', {
    data: {
      clientId: 'ncore_new_org',
      clientSecret: '6149e013-e701-46ff-80f9-ae0eb2f9b381',
      username: 'new_org@gmail.com',
      password: 'Abcd1234!'
    }
  });
  const body = await res.json();
  const token = body.token;
  // Save token vào file JSON
  fs.writeFileSync('auth/token.json', JSON.stringify({ token }, null, 2));
  return token;
}
