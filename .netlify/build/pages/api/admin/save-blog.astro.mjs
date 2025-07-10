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
    
    const postData = {
      id: formData.get('id'),
      title: formData.get('title'),
      category: formData.get('category'),
      excerpt: formData.get('excerpt'),
      content: formData.get('content')
    };
    
    // Handle image upload if provided
    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(imageFile.type)) {
        return new Response(JSON.stringify({ error: 'Invalid file type. Only images are allowed.' }), {
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
      const filename = `blog-${timestamp}-${randomString}${extension}`;
      const filepath = path.join(uploadsDir, filename);
      
      // Save file
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.writeFile(filepath, buffer);
      
      postData.image = `/uploads/${filename}`;
      
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
        type: imageFile.type,
        category: 'blog'
      };
      
      imagesList.images.unshift(imageData);
      await fs.writeFile(imagesListPath, JSON.stringify(imagesList, null, 2));
    }
    
    // Read current blog data
    const blogPath = path.join(process.cwd(), 'src/data/blog.json');
    let blogData;
    
    try {
      blogData = JSON.parse(await fs.readFile(blogPath, 'utf-8'));
    } catch {
      // File doesn't exist, create new structure
      blogData = { posts: [] };
    }
    
    if (postData.id && postData.id !== '') {
      // Update existing post
      const index = blogData.posts.findIndex(p => p.id === postData.id);
      if (index !== -1) {
        blogData.posts[index] = { ...blogData.posts[index], ...postData };
      }
    } else {
      // Add new post
      const newId = blogData.posts.length > 0 
        ? (Math.max(...blogData.posts.map(p => parseInt(p.id) || 0)) + 1).toString()
        : '1';
      
      const newPost = {
        ...postData,
        id: newId,
        date: new Date().toISOString().split('T')[0],
        slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        readTime: "5 min read"
      };
      blogData.posts.unshift(newPost);
    }
    
    // Write back to file
    await fs.writeFile(blogPath, JSON.stringify(blogData, null, 2));
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Blog post saved successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Blog save error:', error);
    return new Response(JSON.stringify({ 
      error: 'Server error during blog save',
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
