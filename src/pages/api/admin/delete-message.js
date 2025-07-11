import fs from 'fs/promises';
import path from 'path';

export async function POST({ url }) {
  try {
    const idx = parseInt(new URL(url).searchParams.get('idx'));
    
    // Try to read from public/data first
    let messagesPath = path.join(process.cwd(), 'public', 'data', 'messages.json');
    let messages = { messages: [] };
    
    try {
      const data = await fs.readFile(messagesPath, 'utf-8');
      messages = JSON.parse(data);
    } catch (publicError) {
      // If public/data doesn't work, try src/data
      try {
        messagesPath = path.join(process.cwd(), 'src/data/messages.json');
        const data = await fs.readFile(messagesPath, 'utf-8');
        messages = JSON.parse(data);
      } catch (srcError) {
        return new Response(JSON.stringify({ error: 'Messages file not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    if (messages.messages && messages.messages[idx]) {
      messages.messages.splice(idx, 1);
      
      // Write back to public/data
      const publicDataDir = path.join(process.cwd(), 'public', 'data');
      try {
        await fs.access(publicDataDir);
      } catch {
        await fs.mkdir(publicDataDir, { recursive: true });
      }
      
      const publicMessagesPath = path.join(publicDataDir, 'messages.json');
      await fs.writeFile(publicMessagesPath, JSON.stringify(messages, null, 2));
      
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
    } else {
      return new Response(JSON.stringify({ error: 'Message not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Delete message error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 