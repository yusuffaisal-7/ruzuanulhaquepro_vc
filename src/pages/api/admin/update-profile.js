import fs from 'fs/promises';
import path from 'path';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-secret-key-change-in-production';

export async function POST({ request }) {
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
    
    const profileData = {
      name: formData.get('name'),
      title: formData.get('title'),
      department: formData.get('department'),
      institution: formData.get('institution'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      description: formData.get('description')
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
      const filename = `profile-${timestamp}-${randomString}${extension}`;
      const filepath = path.join(uploadsDir, filename);
      
      // Save file
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.writeFile(filepath, buffer);
      
      profileData.image = `/uploads/${filename}`;
      
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
        category: 'profile'
      };
      
      imagesList.images.unshift(imageData);
      await fs.writeFile(imagesListPath, JSON.stringify(imagesList, null, 2));
    }
    
    // Read current content
    const contentPath = path.join(process.cwd(), 'src/data/content.json');
    const contentData = JSON.parse(await fs.readFile(contentPath, 'utf-8'));
    
    // Update profile, keeping existing data for fields not provided
    contentData.profile = { ...contentData.profile, ...profileData };
    
    // Write back to file
    await fs.writeFile(contentPath, JSON.stringify(contentData, null, 2));
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Profile updated successfully',
      profile: contentData.profile
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Profile update error:', error);
    return new Response(JSON.stringify({ 
      error: 'Server error during profile update',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}