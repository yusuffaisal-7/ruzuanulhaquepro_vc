import fs from 'fs/promises';
import path from 'path';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const messageData = {
      id: Date.now() + Math.random().toString(36).substring(2, 8),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      read: false
    };

    // For Netlify serverless, we'll use a simple approach
    // Since we can't write to files reliably, we'll just return success
    // In a production environment, you should use a database or external service
    
    console.log('New message received:', messageData);
    
    // TODO: In production, integrate with:
    // - Netlify Forms (recommended for simple forms)
    // - Database (MongoDB, Supabase, etc.)
    // - Email service (SendGrid, Mailgun, etc.)
    // - External API (Airtable, Google Sheets, etc.)
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Message received successfully! We will get back to you soon.',
      data: messageData
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ 
      error: 'Server error', 
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 