import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

async function POST({ url }) {
  try {
    const idx = parseInt(new URL(url).searchParams.get('idx'));
    const messagesPath = path.join(process.cwd(), 'src/data/messages.json');
    const messages = JSON.parse(await fs.readFile(messagesPath, 'utf-8'));
    if (messages.messages && messages.messages[idx]) {
      messages.messages[idx].read = true;
      await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2));
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Message not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
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
