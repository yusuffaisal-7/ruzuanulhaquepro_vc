import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const imagesListPath = path.join(process.cwd(), 'src/data/images.json');
    
    try {
      const imagesData = JSON.parse(await fs.readFile(imagesListPath, 'utf-8'));
      return new Response(JSON.stringify(imagesData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch {
      // File doesn't exist, return empty list
      return new Response(JSON.stringify({ images: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}