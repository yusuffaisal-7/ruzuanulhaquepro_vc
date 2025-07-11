import fs from 'fs/promises';
import path from 'path';

export async function GET({ request }) {
  try {
    const auth = request.headers.get('authorization');
    if (!auth || !auth.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }
    
    let messages = [];
    
    // Try to read from public/data first (more persistent on Netlify)
    try {
      const publicPath = path.join(process.cwd(), 'public', 'data', 'messages.json');
      const data = await fs.readFile(publicPath, 'utf-8');
      messages = JSON.parse(data).messages || [];
    } catch (publicError) {
      // If public/data doesn't work, try src/data
      try {
        const filePath = path.resolve('src/data/messages.json');
        const data = await fs.readFile(filePath, 'utf-8');
        messages = JSON.parse(data).messages || [];
      } catch (srcError) {
        // If neither works, try /tmp as last resort
        try {
          const tmpPath = path.join('/tmp', 'messages.json');
          const data = await fs.readFile(tmpPath, 'utf-8');
          messages = JSON.parse(data).messages || [];
        } catch (tmpError) {
          console.log('Could not read messages from any location');
        }
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