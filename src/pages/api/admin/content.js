import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    let contentData = {};
    
    // Try to read from src/data (static files)
    try {
      const contentPath = path.join(process.cwd(), 'src/data/content.json');
      const data = await fs.readFile(contentPath, 'utf-8');
      contentData = JSON.parse(data);
    } catch (error) {
      console.log('Could not read content from src/data:', error.message);
      return new Response(JSON.stringify({ error: 'Content not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify(contentData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Content API error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}