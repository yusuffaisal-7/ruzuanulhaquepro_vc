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
      
      // For Netlify serverless, we can't save files reliably
      // In production, you should use cloud storage (AWS S3, Cloudinary, etc.)
      console.log('Image upload received:', {
        name: imageFile.name,
        size: imageFile.size,
        type: imageFile.type
      });
      
      // For demo purposes, we'll just acknowledge the upload
      profileData.image = '/uploads/default-profile.jpg'; // Use existing image
    }
    
    // For Netlify serverless, we can't write to files reliably
    // In production, you should use a database to store profile updates
    
    console.log('Profile update received:', profileData);
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Profile update received successfully! In production, this would be saved to a database.',
      profile: profileData
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