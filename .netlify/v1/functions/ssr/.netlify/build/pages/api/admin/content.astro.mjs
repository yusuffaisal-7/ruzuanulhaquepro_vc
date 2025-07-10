import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

async function GET() {
  try {
    const contentPath = path.join(process.cwd(), 'src/data/content.json');
    const contentData = JSON.parse(await fs.readFile(contentPath, 'utf-8'));
    
    return new Response(JSON.stringify(contentData), {
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
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
