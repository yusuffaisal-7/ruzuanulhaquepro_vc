import fs from 'fs/promises';
import path from 'path';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const messageData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      read: false
    };
    const messagesPath = path.join(process.cwd(), 'src/data/messages.json');
    let messages = { messages: [] };
    try {
      const existing = await fs.readFile(messagesPath, 'utf-8');
      messages = JSON.parse(existing);
    } catch {
      // File does not exist, will create
    }
    messages.messages.unshift(messageData);
    await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 