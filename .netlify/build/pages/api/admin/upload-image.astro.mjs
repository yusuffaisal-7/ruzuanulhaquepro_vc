import fs from 'fs/promises';
import path from 'path';
import jwt from 'jsonwebtoken';
export { renderers } from '../../../renderers.mjs';

const JWT_SECRET = 'your-secret-key-change-in-production';

async function POST({ request }) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const token = authHeader.substring(7);
    jwt.verify(token, JWT_SECRET);
    
    const formData = await request.formData();
    const imageFile = formData.get('image');
    
    if (!imageFile || imageFile.size === 0) {
      return new Response(JSON.stringify({ error: 'No image file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(imageFile.type)) {
      return new Response(JSON.stringify({ error: 'Invalid file type. Only images are allowed.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate file size (10MB max)
    if (imageFile.size > 10 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: 'File too large. Maximum size is 10MB.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }
    
    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = path.extname(imageFile.name) || '.jpg';
    const filename = `${timestamp}-${randomString}${extension}`;
    const filepath = path.join(uploadsDir, filename);
    
    // Save file
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(filepath, buffer);
    
    // Update images list
    const imagesListPath = path.join(process.cwd(), 'src/data/images.json');
    let imagesList = { images: [] };
    
    try {
      const existingData = await fs.readFile(imagesListPath, 'utf-8');
      imagesList = JSON.parse(existingData);
    } catch {
      // File doesn't exist, use default
    }
    
    const imageData = {
      name: filename,
      originalName: imageFile.name,
      url: `/uploads/${filename}`,
      uploadDate: new Date().toISOString(),
      size: imageFile.size,
      type: imageFile.type
    };
    
    imagesList.images.unshift(imageData);
    
    await fs.writeFile(imagesListPath, JSON.stringify(imagesList, null, 2));
    
    return new Response(JSON.stringify({ 
      success: true, 
      url: `/uploads/${filename}`,
      filename,
      message: 'Image uploaded successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ 
      error: 'Server error during upload',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
