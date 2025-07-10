import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export { renderers } from '../../../renderers.mjs';

const JWT_SECRET = 'your-secret-key-change-in-production';
const ADMIN_EMAIL = 'razuanul@icloud.com';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('Raz@1554', 10);

async function POST({ request }) {
  try {
    const { email, password } = await request.json();
    
    if (email !== ADMIN_EMAIL) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const isValidPassword = bcrypt.compareSync(password, ADMIN_PASSWORD_HASH);
    if (!isValidPassword) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '24h' });
    
    return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
