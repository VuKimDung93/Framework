// This test demonstrates how to authenticate with Keycloak using the Resource Owner Password Credentials Grant
import { test, request, expect } from '@playwright/test';

test('Login via Keycloak and retrieve token', async () => {
  const context = await request.newContext();

  // Replace with your Keycloak endpoint, client ID, and credentials
  const keycloakEndpoint = 'https://keycloak.common.nuclent.com/auth/realms/ncore_new_org/protocol/openid-connect/token';
  const clientId = 'ncore_new_org';
  const clientSecret = '6149e013-e701-46ff-80f9-ae0eb2f9b381';
  const username = 'new_org@gmail.com';
  const password = 'Abcd1234!';

  const response = await context.post(keycloakEndpoint, {
    form: {
      grant_type: 'password',
      client_id: clientId,
      client_secret: clientSecret,
      username: username,
      password: password,
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.access_token).toBeDefined();

  console.log('Access Token:', body.access_token);
});

