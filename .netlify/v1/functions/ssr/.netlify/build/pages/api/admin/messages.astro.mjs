import fs from 'fs';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

async function GET({ request }) {
  const auth = request.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }
  const filePath = path.resolve('src/data/messages.json');
  let messages = [];
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    messages = JSON.parse(data).messages || [];
  } catch (e) {}
  return new Response(JSON.stringify({ messages }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
