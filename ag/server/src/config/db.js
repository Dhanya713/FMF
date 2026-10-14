import mongoose from 'mongoose';
import { store } from '../services/store.js';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ [Database Error] MONGODB_URI is not set in environment (.env). Persistent MongoDB storage is required.');
    await store.setMongoConnected(false);
    return { connected: false, mode: 'disconnected' };
  }

  const isAtlas = uri.includes('mongodb+srv://') || uri.includes('.mongodb.net');
  console.log(`🔌 [Database] Connecting to MongoDB ${isAtlas ? 'Atlas Cluster' : 'Instance'}...`);

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ [Database] MongoDB Connected successfully! Host: ${conn.connection.host}, DB: ${conn.connection.name}`);
    await store.setMongoConnected(true);
    return { connected: true, mode: 'mongodb', host: conn.connection.host, db: conn.connection.name };
  } catch (error) {
    console.error(`❌ [Database Error] MongoDB connection failed: ${error.message}`);
    console.error('🚨 [Database Alert] Cannot silently use temporary fallback. Ensure MongoDB Atlas or local MongoDB is reachable with valid credentials in .env.');
    await store.setMongoConnected(false);
    return { connected: false, mode: 'failed', error: error.message };
  }
}
