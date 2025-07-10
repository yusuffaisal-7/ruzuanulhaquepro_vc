import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const blogPath = path.join(process.cwd(), 'src/data/blog.json');
    const blogData = JSON.parse(await fs.readFile(blogPath, 'utf-8'));
    
    return new Response(JSON.stringify(blogData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}