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

    // For Netlify, we'll use a different approach
    // Option 1: Store in /tmp directory (temporary, will be lost on function restart)
    // Option 2: Use environment variables or external service
    // For now, let's try the /tmp approach as a quick fix
    
    const messagesPath = path.join('/tmp', 'messages.json');
    let messages = { messages: [] };
    
    try {
      const existing = await fs.readFile(messagesPath, 'utf-8');
      messages = JSON.parse(existing);
    } catch {
      // File does not exist, will create
    }
    
    messages.messages.unshift(messageData);
    await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2));
    
    // Also try to write to the original location as fallback
    try {
      const originalPath = path.join(process.cwd(), 'src/data/messages.json');
      await fs.writeFile(originalPath, JSON.stringify(messages, null, 2));
    } catch (writeError) {
      console.log('Could not write to original location:', writeError.message);
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