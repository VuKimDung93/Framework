export async function createUser(request, token, userData) {
    const res = await request.post('/users', {
      data: userData,
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
}
      
    