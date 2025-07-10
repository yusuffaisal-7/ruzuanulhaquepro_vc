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
    
    const { imageName } = await request.json();
    
    // Delete physical file
    const filepath = path.join(process.cwd(), 'public', 'uploads', imageName);
    try {
      await fs.unlink(filepath);
    } catch {
      // File might not exist
    }
    
    // Update images list
    const imagesListPath = path.join(process.cwd(), 'src/data/images.json');
    try {
      const imagesData = JSON.parse(await fs.readFile(imagesListPath, 'utf-8'));
      imagesData.images = imagesData.images.filter(img => img.name !== imageName);
      await fs.writeFile(imagesListPath, JSON.stringify(imagesData, null, 2));
    } catch {
      // File doesn't exist
    }
    
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
