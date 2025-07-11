import fs from 'fs/promises';
import path from 'path';

export async function GET({ request }) {
  try {
    const auth = request.headers.get('authorization');
    if (!auth || !auth.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }
    
    // For Netlify serverless, we'll return a simple response
    // In production, you should use a database to store and retrieve messages
    
    const mockMessages = [
      {
        id: 'demo-1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        organization: 'Example University',
        subject: 'Research Collaboration',
        message: 'This is a demo message to show the admin panel functionality.',
        timestamp: new Date().toISOString(),
        read: false
      },
      {
        id: 'demo-2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        organization: 'Research Institute',
        subject: 'Conference Invitation',
        message: 'Another demo message for testing purposes.',
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        read: true
      }
    ];
    
    return new Response(JSON.stringify({ messages: mockMessages }), {
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