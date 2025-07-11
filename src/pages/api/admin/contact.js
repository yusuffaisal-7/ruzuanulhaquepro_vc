import fs from 'fs/promises';
import path from 'path';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const messageData = {
      id: Date.now() + Math.random().toString(36).substring(2, 8),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      read: false
    };

    // For Netlify, we need a more persistent solution
    // Let's try to write to the public directory which should be writable
    const messagesPath = path.join(process.cwd(), 'public', 'data', 'messages.json');
    
    // Ensure the directory exists
    const dataDir = path.dirname(messagesPath);
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }
    
    let messages = { messages: [] };
    
    try {
      const existing = await fs.readFile(messagesPath, 'utf-8');
      messages = JSON.parse(existing);
    } catch {
      // File does not exist, will create
    }
    
    messages.messages.unshift(messageData);
    await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2));
    
    // Also try to write to src/data as backup
    try {
      const backupPath = path.join(process.cwd(), 'src/data/messages.json');
      await fs.writeFile(backupPath, JSON.stringify(messages, null, 2));
    } catch (backupError) {
      console.log('Could not write backup:', backupError.message);
    }
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 