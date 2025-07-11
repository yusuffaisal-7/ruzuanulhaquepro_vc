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
      
      // For Netlify, we'll store in /tmp and return a temporary URL
      // In production, you should use a cloud storage service like AWS S3 or Cloudinary
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 8);
      const extension = path.extname(imageFile.name) || '.jpg';
      const filename = `profile-${timestamp}-${randomString}${extension}`;
      
      // Store in /tmp for now
      const tmpPath = path.join('/tmp', filename);
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.writeFile(tmpPath, buffer);
      
      profileData.image = `/uploads/${filename}`;
      
      // Note: In a real production environment, you should upload to cloud storage
      // and return the cloud URL instead of a local path
    }
    
    // Read current content - try multiple locations
    let contentData = { profile: {} };
    const contentPaths = [
      path.join('/tmp', 'content.json'),
      path.join(process.cwd(), 'src/data/content.json')
    ];
    
    for (const contentPath of contentPaths) {
      try {
        const data = await fs.readFile(contentPath, 'utf-8');
        contentData = JSON.parse(data);
        break;
      } catch (error) {
        console.log(`Could not read from ${contentPath}:`, error.message);
      }
    }
    
    // Update profile, keeping existing data for fields not provided
    contentData.profile = { ...contentData.profile, ...profileData };
    
    // Write back to /tmp (Netlify compatible)
    const tmpContentPath = path.join('/tmp', 'content.json');
    await fs.writeFile(tmpContentPath, JSON.stringify(contentData, null, 2));
    
    // Also try to write to original location as fallback
    try {
      const originalContentPath = path.join(process.cwd(), 'src/data/content.json');
      await fs.writeFile(originalContentPath, JSON.stringify(contentData, null, 2));
    } catch (writeError) {
      console.log('Could not write to original location:', writeError.message);
    }
    
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