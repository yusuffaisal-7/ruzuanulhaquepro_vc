import fs from 'fs/promises';
import path from 'path';

export async function POST({ url }) {
  try {
    const idx = parseInt(new URL(url).searchParams.get('idx'));
    
    // For Netlify serverless, we can't write to files reliably
    // In production, you should use a database to delete messages
    
    console.log('Delete message request for index:', idx);
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Delete request received! In production, this would delete the message from a database.'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Delete message error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 