const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/creator-platform-backend';

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    console.error('Proceeding without a database connection. Set MONGO_URI in .env to fix this.');
  }
};

module.exports = connectDB;