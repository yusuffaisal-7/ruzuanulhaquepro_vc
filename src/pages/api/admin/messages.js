import fs from 'fs/promises';
import path from 'path';

export async function GET({ request }) {
  try {
    const auth = request.headers.get('authorization');
    if (!auth || !auth.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }
    
    let messages = [];
    
    // Try to read from /tmp first (Netlify serverless)
    try {
      const tmpPath = path.join('/tmp', 'messages.json');
      const data = await fs.readFile(tmpPath, 'utf-8');
      messages = JSON.parse(data).messages || [];
    } catch (tmpError) {
      // If /tmp doesn't work, try original location
      try {
        const filePath = path.resolve('src/data/messages.json');
        const data = await fs.readFile(filePath, 'utf-8');
        messages = JSON.parse(data).messages || [];
      } catch (originalError) {
        console.log('Could not read messages from either location');
      }
    }
    
    return new Response(JSON.stringify({ messages }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Messages API error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 