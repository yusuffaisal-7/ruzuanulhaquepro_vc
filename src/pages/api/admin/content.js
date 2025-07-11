import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    let contentData = {};
    
    // Try to read from public/data first (more persistent on Netlify)
    try {
      const publicPath = path.join(process.cwd(), 'public', 'data', 'content.json');
      const data = await fs.readFile(publicPath, 'utf-8');
      contentData = JSON.parse(data);
    } catch (publicError) {
      // If public/data doesn't work, try src/data
      try {
        const contentPath = path.join(process.cwd(), 'src/data/content.json');
        const data = await fs.readFile(contentPath, 'utf-8');
        contentData = JSON.parse(data);
      } catch (srcError) {
        // If neither works, try /tmp as last resort
        try {
          const tmpPath = path.join('/tmp', 'content.json');
          const data = await fs.readFile(tmpPath, 'utf-8');
          contentData = JSON.parse(data);
        } catch (tmpError) {
          console.log('Could not read content from any location');
          return new Response(JSON.stringify({ error: 'Content not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      }
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