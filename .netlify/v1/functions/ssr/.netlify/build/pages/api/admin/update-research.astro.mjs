import fs from 'fs/promises';
import path from 'path';
import jwt from 'jsonwebtoken';
export { renderers } from '../../../renderers.mjs';

const JWT_SECRET = 'your-secret-key-change-in-production';

async function POST({ request }) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const token = authHeader.substring(7);
    jwt.verify(token, JWT_SECRET);
    
    const researchData = await request.json();
    
    // Read current content
    const contentPath = path.join(process.cwd(), 'src/data/content.json');
    const contentData = JSON.parse(await fs.readFile(contentPath, 'utf-8'));
    
    // Update research data
    contentData.research = { ...contentData.research, ...researchData };
    
    // Write back to file
    await fs.writeFile(contentPath, JSON.stringify(contentData, null, 2));
    
    return new Response(JSON.stringify({ success: true }), {
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
