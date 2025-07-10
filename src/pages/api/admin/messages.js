import fs from 'fs';
import path from 'path';

export async function GET({ request }) {
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